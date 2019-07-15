var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite';
import { PanoDataProvider } from '../pano-data/pano-data';
var WsPanoProvider = /** @class */ (function () {
    function WsPanoProvider(http, sqlite, panoProvider) {
        this.http = http;
        this.sqlite = sqlite;
        this.panoProvider = panoProvider;
        console.log('Hello WsPanoProvider Provider');
    }
    WsPanoProvider.prototype.getAllIDPieces = function (missionId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql("SELECT id FROM mission_data WHERE mission_id =? AND screen LIKE 'salle%'", [missionId])
                    .then(function (res) {
                    resolve(res.rows);
                })
                    .catch(function (e) { return console.log(e); });
            }).catch(function (e) {
                console.log(e);
            });
        });
    };
    WsPanoProvider.prototype.getPieceById = function (idPiece) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql("SELECT data FROM mission_data WHERE id =?", [idPiece])
                    .then(function (res) {
                    resolve(res.rows);
                })
                    .catch(function (e) { return console.log(e); });
            }).catch(function (e) {
                console.log(e);
            });
        });
    };
    WsPanoProvider.prototype.countAllPieces = function (missionId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql("SELECT count(*) as totalPiece FROM mission_data WHERE mission_id =? AND screen LIKE 'salle%'", [missionId])
                    .then(function (res) {
                    _this.results = [];
                    //totalPiece:res[0].rows.item(0).totalPiece
                    for (var i = 0; i < res.rows.length; i++) {
                        _this.results.push({
                            totalPiece: res.rows.item(i).totalPiece
                        });
                    }
                    resolve(_this.results);
                })
                    .catch(function (e) { return console.log(e); });
            }).catch(function (e) {
                console.log(e);
            });
        });
    };
    WsPanoProvider.prototype.deletePiece = function (idPiece) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql("DELETE FROM mission_data WHERE id=?", [idPiece]).then(function () {
                    resolve();
                }).catch(function (error) {
                    console.log("error", error);
                    reject();
                });
            });
        });
    };
    WsPanoProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            SQLite,
            PanoDataProvider])
    ], WsPanoProvider);
    return WsPanoProvider;
}());
export { WsPanoProvider };
//# sourceMappingURL=ws-pano.js.map