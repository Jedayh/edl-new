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
  Generated class for the WsContratProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WsContratProvider = /** @class */ (function () {
    function WsContratProvider(http, sqlite) {
        this.http = http;
        this.sqlite = sqlite;
        console.log('Hello WsContratProvider Provider');
    }
    WsContratProvider.prototype.insererContrat = function (c) {
        this.sqlite.create({
            name: 'databaseEDL.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql("DELETE FROM contrats WHERE nummission = ?", [c.nummission])
                .then(function () { return console.log("OLD CONTRAT DELETED"); })
                .catch(function (error) {
                console.error("FAILDE TO DELETE CONTRAT", JSON.stringify(error));
            });
            db.executeSql("INSERT INTO contrats('chaudiere', 'chaudierePhoto', 'chaudiereMarque', 'chaudiereEntretienEffectue', 'chaudiereEtat', 'chaudiereObservation', 'rapportEntretienPhoto', 'attestationPhoto', 'attestationAssurance', 'attestationDateAssurance', 'attestationNumeroContrat', 'detecteurFumee', 'detecteurFumeeEtat', 'detecteurFumeeControle', 'nummission') VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [c.chaudiere, c.chaudierePhoto, c.chaudiereMarque, c.chaudiereEntretienEffectue, c.chaudiereEtat, c.chaudiereObservation, c.rapportEntretienPhoto, c.attestationPhoto, c.attestationAssurance, c.attestationDateAssurance, c.attestationNumeroContrat, c.detecteurFumee, c.detecteurFumeeEtat, c.detecteurFumeeControle, c.nummission])
                .then(function () { return console.log("CONTRAT INSERTED"); })
                .catch(function (error) { return console.log("FAILED TO INSERT", JSON.stringify(error)); });
        })
            .catch(function () { return console.error('FAILED TO OPEN OR CREATE DATABASE'); });
    };
    WsContratProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, SQLite])
    ], WsContratProvider);
    return WsContratProvider;
}());
export { WsContratProvider };
//# sourceMappingURL=ws-contrat.js.map