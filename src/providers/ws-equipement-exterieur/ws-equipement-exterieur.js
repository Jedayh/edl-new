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
/*
  Generated class for the WsEquipementExterieurProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WsEquipementExterieurProvider = /** @class */ (function () {
    function WsEquipementExterieurProvider(http, sqlite) {
        this.http = http;
        this.sqlite = sqlite;
        console.log('Hello WsEquipementExterieurProvider Provider');
    }
    WsEquipementExterieurProvider.prototype.insererEquipement = function (e) {
        this.sqlite.create({
            name: 'databaseEDL.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql("DELETE FROM equipementsexterieurs WHERE nummission = ?", [e.nummission])
                .then(function () { return console.log("OLD EQUIPEMENT DELETED"); })
                .catch(function (error) {
                console.error("FAILDE TO DELETE EQUIPEMENT", JSON.stringify(error));
            });
            db.executeSql("INSERT INTO equipementsexterieurs('passepose', 'passeposePhoto', 'passeposeObservation', 'visiophone', 'visiophonePhoto', 'visiophoneObservation', 'interphone', 'interphonePhoto', 'interphoneObservation', 'sonnette', 'sonnettePhoto', 'sonnetteObservation', 'titreCodeAccess', 'pieceIdentitePhoto1', 'pieceIdentiteNumero1', 'pieceIdentitePhoto2', 'pieceIdentiteNumero2', 'procurationPhoto', 'nummission') VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [e.passepose, e.passeposePhoto, e.passeposeObservation, e.visiophone, e.visiophonePhoto, e.visiophoneObservation, e.interphone, e.interphonePhoto, e.interphoneObservation, e.sonnette, e.sonnettePhoto, e.sonnetteObservation, e.titreCodeAccess, e.pieceIdentitePhoto1, e.pieceIdentiteNumero1, e.pieceIdentitePhoto2, e.pieceIdentiteNumero2, e.procurationPhoto, e.nummission])
                .then(function () { return console.log("EQUIPEMENT INSERTED"); })
                .catch(function (error) { return console.log("FAILED TO INSERT", JSON.stringify(error)); });
        })
            .catch(function () { return console.error('FAILED TO OPEN OR CREATE DATABASE'); });
    };
    WsEquipementExterieurProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, SQLite])
    ], WsEquipementExterieurProvider);
    return WsEquipementExterieurProvider;
}());
export { WsEquipementExterieurProvider };
//# sourceMappingURL=ws-equipement-exterieur.js.map