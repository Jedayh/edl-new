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
  Generated class for the WsCompteurProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WsCompteurProvider = /** @class */ (function () {
    function WsCompteurProvider(http, sqlite) {
        this.http = http;
        this.sqlite = sqlite;
        console.log('Hello WsCompteurProvider Provider');
    }
    WsCompteurProvider.prototype.viderCompteur = function () {
        this.sqlite.create({
            name: 'databaseEDL.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('DELETE FROM compteurs')
                .then(function () { return console.log('TABLE compteurs cleared successfully'); })
                .catch(function () { return console.log('FAILED TO CLEAR TABLE compteurs'); });
        })
            .catch();
    };
    WsCompteurProvider.prototype.insererCompteur = function (c) {
        this.sqlite.create({
            name: 'databaseEDL.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql("DELETE FROM compteurs WHERE nummission = ?", [c.nummission])
                .then(function () { return console.log("OLD COMPTEUR DELETED"); })
                .catch(function (error) {
                console.error("FAILDE TO DELETE COMPTEUR", JSON.stringify(error));
            });
            db.executeSql("INSERT INTO compteurs('eau', 'eauPhoto', 'eauNumero', 'eauCompteur', 'eauType', 'eauReleve', 'eauLocalisation', 'chauffage', 'chauffagePhoto', 'chauffageType', 'chauffageChauffage', 'electricite', 'electricitePhoto', 'electriciteHeuresPleines', 'electriciteNumero', 'electriciteHeuresCreuse', 'electiriciteLocalisation', 'gaz', 'gazPhoto', 'gazNumero', 'gazCompteur', 'gazType', 'gazReleve', 'gazLocalisation', 'nummission') VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [c.eau, c.eauPhoto, c.eauNumero, c.eauCompteur, c.eauType, c.eauReleve, c.eauLocalisation, c.chauffage, c.chauffagePhoto, c.chauffageType, c.chauffageChauffage, c.electricite, c.electricitePhoto, c.electriciteHeuresPleines, c.electriciteNumero, c.electriciteHeuresCreuse, c.electiriciteLocalisation, c.gaz, c.gazPhoto, c.gazNumero, c.gazCompteur, c.gazType, c.gazReleve, c.gazLocalisation, c.nummission])
                .then(function () { return console.log('INSERTED'); })
                .catch(function (error) { return console.log('FAILED TO INSERT compteurs:', JSON.stringify(error)); });
        })
            .catch();
    };
    WsCompteurProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, SQLite])
    ], WsCompteurProvider);
    return WsCompteurProvider;
}());
export { WsCompteurProvider };
//# sourceMappingURL=ws-compteur.js.map