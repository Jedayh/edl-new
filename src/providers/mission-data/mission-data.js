var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite';
/*
  Generated class for the WsMissionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MissionDataProvider = /** @class */ (function () {
    function MissionDataProvider(sqlite) {
        this.sqlite = sqlite;
        console.log('MissionDataProvider loaded');
    }
    MissionDataProvider.prototype.lsSetItem = function (varname, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({ name: 'databaseEDL.db', location: 'default' })
                .then(function (db) {
                db.executeSql("SELECT value FROM local_storage WHERE varname = ?", [varname])
                    .then(function (data) {
                    console.log('local_storage - set ' + varname, data);
                    if (data.rows.length == 0) {
                        console.log('local_storage - insert ', varname, value);
                        db.executeSql("INSERT INTO local_storage ('varname', 'value') VALUES(?, ?)", [varname, JSON.stringify(value)])
                            .then(function (result) {
                            resolve(value);
                        })
                            .catch(function (error) {
                            reject();
                        });
                    }
                    else {
                        console.log('local_storage - update ', varname, value);
                        db.executeSql("UPDATE local_storage SET value = ? WHERE varname = ?", [JSON.stringify(value), varname])
                            .then(function (result) {
                            resolve(value);
                        })
                            .catch(function (error) {
                            reject();
                        });
                    }
                })
                    .catch(function (error) {
                    reject();
                });
            }).catch(function () {
                reject();
            });
        });
    };
    MissionDataProvider.prototype.lsGetItem = function (varname) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                console.log('local_storage - get ', varname);
                db.executeSql("SELECT value FROM local_storage WHERE varname = ?", [varname]).then(function (data) {
                    if (data.rows.length == 0) {
                        return resolve();
                    }
                    console.log('local_storage - get ' + varname + ': result ', JSON.parse(data.rows.item(0).value));
                    return resolve(JSON.parse(data.rows.item(0).value));
                })
                    .catch(function (error) {
                    reject();
                });
            })
                .catch(function (error) {
                reject();
            });
        });
    };
    MissionDataProvider.prototype.lsRemove = function (varname) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                console.log('local_storage - remove', varname);
                db.executeSql("DELETE FROM local_storage WHERE varname = ?", [varname]).then(function (data) {
                    console.log('local_storage - remove : ok');
                    return resolve();
                })
                    .catch(function (error) {
                    reject();
                });
            })
                .catch(function (error) {
                reject();
            });
        });
    };
    MissionDataProvider.prototype.lsTruncate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            }).then(function (db) {
                console.log('local_storage - truncate');
                db.executeSql("DELETE FROM local_storage").then(function (data) {
                    console.log('local_storage - truncate ok');
                    resolve();
                }).catch(function (error) {
                    console.log('local_storage - truncate ko');
                    reject();
                });
            });
        });
    };
    MissionDataProvider.prototype.updateStatus = function (dataId, status) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("UPDATE mission_data SET status = ? WHERE id = ?", [status, dataId])
                    .then(function (data) {
                    console.log('Statut de la ligne ' + dataId + ' mis à jour pour ' + status);
                    resolve();
                })
                    .catch(function (error) {
                    console.error('Impossible de récupérer les données de la mission', error);
                    reject();
                });
            });
        });
    };
    MissionDataProvider.prototype.updateAllByMissionId = function (missionId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("UPDATE mission_data SET status = 'pending' WHERE mission_id = ?", [missionId])
                    .then(function (data) {
                    return resolve();
                })
                    .catch(function (error) {
                    reject();
                });
            })
                .catch(function (error) {
                reject();
            });
        });
    };
    MissionDataProvider.prototype.getAllByMissionId = function (missionId, status) {
        var _this = this;
        var missionData = [];
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("SELECT *, (SELECT COUNT(*) FROM mission_data WHERE mission_id = ?) AS nbLines FROM mission_data WHERE mission_id = ? AND status = ? ORDER BY RANDOM() LIMIT 1", [missionId, missionId, status])
                    .then(function (data) {
                    if (data.rows.length == 0) {
                        console.log('aucune mission à synchroniser');
                        return resolve(false);
                    }
                    for (var i = 0; i < data.rows.length; i++) {
                        missionData.push(data.rows.item(i));
                    }
                    return resolve(missionData);
                })
                    .catch(function (error) {
                    console.error('Impossible de récupérer les données de la mission', JSON.stringify(error));
                    reject();
                });
            })
                .catch(function (error) {
                console.error('Impossible de récupérer les données de la mission', JSON.stringify(error));
                reject();
            });
        });
    };
    MissionDataProvider.prototype.save = function (missionId, screenLabel, screenData, status) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({ name: 'databaseEDL.db', location: 'default' })
                .then(function (db) {
                db.executeSql("SELECT * FROM mission_data WHERE mission_id = " + missionId + " AND screen = '" + screenLabel.replace(/\'/g, "''") + "'", [])
                    .then(function (data) {
                    // Aucune donnée pour cet mission et cet écran, on les enregistre
                    if (data.rows.length == 0) {
                        db.executeSql("INSERT INTO mission_data ('mission_id', 'screen', 'data', 'status') VALUES(?, ?, ?, ?)", [missionId, screenLabel.replace(/\'/g, "''"), JSON.stringify(screenData), status])
                            .then(function (result) {
                            console.log("Données de l'écran " + screenLabel + " sauvegardées");
                            resolve(screenData);
                        })
                            .catch(function (error) {
                            console.error('Impossible de sauvegarder les données de l\'écran ' + screenLabel, JSON.stringify(error));
                            reject();
                        });
                    }
                    else {
                        db.executeSql("UPDATE mission_data SET data = ?, status = ? WHERE mission_id = ? AND screen = ?", [JSON.stringify(screenData), status, missionId, screenLabel.replace(/\'/g, "''")])
                            .then(function (result) {
                            console.log("Données de l'écran " + screenLabel + " sauvegardées");
                            resolve(screenData);
                        })
                            .catch(function (error) {
                            console.error('Impossible de sauvegarder les données de l\'écran ' + screenLabel, JSON.stringify(error));
                            reject();
                        });
                    }
                })
                    .catch(function (error) {
                    console.error('Impossible de récupérer les données de l\'écran ' + screenLabel, JSON.stringify(error));
                    reject();
                });
            }).catch(function () {
                console.error('Impossible de se connecter à la base de données');
                reject();
            });
        });
    };
    MissionDataProvider.prototype.deleteAll = function (missionId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("DELETE FROM mission_data WHERE mission_id = ?", [missionId])
                    .then(function (data) {
                    return resolve();
                })
                    .catch(function (error) {
                    reject();
                });
            })
                .catch(function (error) {
                reject();
            });
        });
    };
    MissionDataProvider.prototype.load = function (missionId, screenLabel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("SELECT * FROM mission_data WHERE mission_id = ? AND screen = ?", [missionId, screenLabel.replace(/\'/g, "''")])
                    .then(function (data) {
                    var output = { mission_id: missionId,
                        screen: screenLabel,
                        status: 'empty',
                        data: {} };
                    if (data.rows.length == 0) {
                        return resolve(output);
                    }
                    output.data = JSON.parse(data.rows.item(0).data);
                    output.status = data.rows.item(0).status;
                    return resolve(output);
                })
                    .catch(function (error) {
                    console.error('Impossible de récupérer les données de l\'écran ' + screenLabel, JSON.stringify(error));
                    reject();
                });
            })
                .catch(function (error) {
                console.error('Impossible de récupérer les données de l\'écran ' + screenLabel, JSON.stringify(error));
                reject();
            });
        });
    };
    MissionDataProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [SQLite])
    ], MissionDataProvider);
    return MissionDataProvider;
}());
export { MissionDataProvider };
//# sourceMappingURL=mission-data.js.map