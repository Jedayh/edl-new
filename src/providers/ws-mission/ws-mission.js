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
import { File } from '@ionic-native/file';
/*
  Generated class for the WsMissionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WsMissionProvider = /** @class */ (function () {
    function WsMissionProvider(sqlite, file) {
        this.sqlite = sqlite;
        this.file = file;
        console.log('Hello WsMissionProvider Provider');
    }
    WsMissionProvider.prototype.exportDbData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql("UPDATE mission_data SET status = 'pending'", []).then(function (data) {
                    db.executeSql("SELECT * FROM mission_data", []).then(function (data) {
                        if (data.rows.length == 0) {
                            console.log('aucune mission à synchroniser');
                            return resolve(false);
                        }
                        var _loop_1 = function (i) {
                            var screenData = data.rows.item(i);
                            var filename = 'abc-export-' + screenData.id + '.txt';
                            _this.file.createFile(_this.file.externalDataDirectory, filename, true)
                                .then(function (FileEntry) { return _this.file.writeExistingFile(_this.file.externalDataDirectory, filename, JSON.stringify(screenData)); })
                                .catch(function (err) { return console.log('Couldn\'t create file', err); });
                        };
                        for (var i = 0; i < data.rows.length; i++) {
                            _loop_1(i);
                        }
                        return resolve(true);
                    }).catch(function (error) {
                        console.error('Impossible de récupérer les données des missions', JSON.stringify(error));
                        reject();
                    });
                });
            }).catch(function (error) {
                console.error('Impossible de récupérer les données des missions', JSON.stringify(error));
                reject();
            });
        });
    };
    WsMissionProvider.prototype.purgeOldMissions = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("SELECT *, (SELECT COUNT(*) FROM mission_data WHERE mission_id = missions.id) AS nbData,  (SELECT COUNT(*) FROM mission_data WHERE mission_id = missions.id AND status = 'pending') AS nbDataToSync,  (SELECT COUNT(*) FROM mission_data WHERE mission_id = missions.id AND screen = 'signature') AS complete FROM missions", [])
                    .then(function (data) {
                    if (data.rows.length == 0) {
                        return resolve();
                    }
                    var _loop_2 = function (i) {
                        var mission = data.rows.item(i);
                        mission.raw_data = JSON.parse(mission.raw_data);
                        var todayDate = new Date();
                        var dateParts = mission.raw_data.rdv[0].date_debut[0].split("-");
                        var missionDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0], 23, 59);
                        var last5DaysDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() - 5, 0, 0);
                        if (missionDate < last5DaysDate) {
                            if (mission.nbData == 0
                                || (mission.complete == 1 && mission.nbDataToSync == 0)) {
                                db.executeSql("DELETE FROM mission_data WHERE mission_id = ?", [mission.id]).then(function (data) {
                                    console.log('Suppression des écrans de la mission ' + mission.nummission);
                                    db.executeSql("DELETE FROM missions WHERE id = ?", [mission.id]).then(function (data) {
                                        console.log('Suppression de de la mission ' + mission.nummission);
                                    });
                                });
                            }
                        }
                    };
                    for (var i = 0; i < data.rows.length; i++) {
                        _loop_2(i);
                    }
                    setTimeout(function () {
                        resolve();
                    }, 5000);
                });
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    WsMissionProvider.prototype.updateMission = function (mission) {
        return this.sqlite.create({
            name: 'databaseEDL.db',
            location: 'default'
        })
            .then(function (db) {
            var serviceSource = new URL(mission.serviceSource).host;
            db.executeSql("SELECT * FROM missions WHERE serviceSource = '" + serviceSource + "' AND nummission = '" + mission.nummission + "'", [])
                .then(function (data) {
                // Aucune donnée pour cet mission et cet écran, on les enregistre
                if (data.rows.length == 0) {
                    db.executeSql("INSERT INTO missions('serviceSource', 'proprietaire', 'locataire', 'nummission', 'ville', 'agence', 'etat', 'edletat', 'societe', 'bien_adresse', 'bien_residence', 'bien_type', 'bien_bat', 'bien_esc', 'bien_cave', 'bien_complement', 'bien_ville', 'bien_etage', 'bien_box', 'bien_parking', 'bien_garage', 'loc_nom', 'loc_prenom', 'loc_adresse', 'loc_ville', 'loc_departement', 'loc_portable', 'loc_telephone', 'loc_email', 'exloc_nom', 'exloc_prenom', 'exloc_adresse', 'exloc_ville', 'exloc_departement', 'exloc_portable', 'exloc_telephone', 'exloc_email', 'raw_data') VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [serviceSource, mission.proprietaire, mission.locataire, mission.nummission, mission.ville, mission.agence, mission.etat, mission.edletat, mission.societe, mission.bien_adresse, mission.bien_residence, mission.bien_type, mission.bien_bat, mission.bien_esc, mission.bien_cave, mission.bien_complement, mission.bien_ville, mission.bien_etage, mission.bien_box, mission.bien_parking, mission.bien_garage, mission.loc_nom, mission.loc_prenom, mission.loc_adresse, mission.loc_ville, mission.loc_departement, mission.loc_portable, mission.loc_telephone, mission.loc_email, mission.exloc_nom, mission.exloc_prenom, mission.exloc_adresse, mission.exloc_ville, mission.exloc_departement, mission.exloc_portable, mission.exloc_telephone, mission.exloc_email, JSON.stringify(mission.raw_data)])
                        .then(function (result) {
                        console.log("MISSION INSERTED : UID " + result.insertId);
                        mission.uid = result.insertId;
                        return mission;
                    }).catch(function (error) { return console.log("FAILED TO INSERT MISSION", JSON.stringify(error)); });
                }
                else {
                    db.executeSql("UPDATE missions SET serviceSource = ?,proprietaire=?,locataire=?,nummission=?,ville=?,agence=?,etat=?,edletat=?,societe=?,bien_adresse=?,bien_residence=?,bien_type=?,bien_bat=?,bien_esc=?,bien_cave=?,bien_complement=?,bien_ville=?,bien_etage=?,bien_box=?,bien_parking=?,bien_garage=?,loc_nom=?,loc_prenom=?,loc_adresse=?,loc_ville=?,loc_departement=?,loc_portable=?,loc_telephone=?,loc_email=?,exloc_nom=?,exloc_prenom=?,exloc_adresse=?,exloc_ville=?,exloc_departement=?,exloc_portable=?,exloc_telephone=?,exloc_email=?,raw_data=? WHERE serviceSource = '" + serviceSource + "' AND nummission = '" + mission.nummission + "'", [serviceSource, mission.proprietaire, mission.locataire, mission.nummission, mission.ville, mission.agence, mission.etat, mission.edletat, mission.societe, mission.bien_adresse, mission.bien_residence, mission.bien_type, mission.bien_bat, mission.bien_esc, mission.bien_cave, mission.bien_complement, mission.bien_ville, mission.bien_etage, mission.bien_box, mission.bien_parking, mission.bien_garage, mission.loc_nom, mission.loc_prenom, mission.loc_adresse, mission.loc_ville, mission.loc_departement, mission.loc_portable, mission.loc_telephone, mission.loc_email, mission.exloc_nom, mission.exloc_prenom, mission.exloc_adresse, mission.exloc_ville, mission.exloc_departement, mission.exloc_portable, mission.exloc_telephone, mission.exloc_email, JSON.stringify(mission.raw_data)])
                        .then(function (result) {
                        console.log("MISSION UPDATED : UID " + data.rows.item(0).id);
                        mission.uid = data.rows.item(0).id;
                        return mission;
                    }).catch(function (error) { return console.log("FAILED TO UPDATE MISSION", JSON.stringify(error)); });
                }
            }).catch(function (error) { return console.log("FAILED TO SELECT MISSION", JSON.stringify(error)); });
            ;
        }).catch(function () { return console.error('FAILED TO OPEN OR CREATE DATABASE'); });
    };
    WsMissionProvider.prototype.getAllMissions = function (orderByRand) {
        var _this = this;
        var missions = [];
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                var query = "SELECT *, (SELECT COUNT(*) FROM mission_data WHERE mission_id = missions.id) AS nbData,  (SELECT COUNT(*) FROM mission_data WHERE mission_id = missions.id AND status = 'pending') AS nbDataToSync,  (SELECT COUNT(*) FROM mission_data WHERE mission_id = missions.id AND screen = 'signature') AS complete FROM missions";
                if (orderByRand) {
                    query += ' ORDER BY RANDOM()';
                }
                else {
                    query += ' ORDER BY nbData DESC';
                }
                console.log(query);
                db.executeSql(query, [])
                    .then(function (data) {
                    for (var i = 0; i < data.rows.length; i++) {
                        var mission = data.rows.item(i);
                        mission.raw_data = JSON.parse(mission.raw_data);
                        mission.uid = mission.id;
                        missions.push(mission);
                    }
                    return resolve(missions);
                });
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    WsMissionProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [SQLite, File])
    ], WsMissionProvider);
    return WsMissionProvider;
}());
export { WsMissionProvider };
//# sourceMappingURL=ws-mission.js.map