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
  Generated class for the WsInventaieCleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WsInventaieCleProvider = /** @class */ (function () {
    function WsInventaieCleProvider(http, sqlite) {
        this.http = http;
        this.sqlite = sqlite;
        console.log('Hello WsInventaieCleProvider Provider');
    }
    WsInventaieCleProvider.prototype.insererInventaire = function (i) {
        this.sqlite.create({
            name: 'databaseEDL.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql("DELETE FROM inventairescles WHERE nummission = ?", [i.nummission])
                .then(function () { return console.log("OLD INVENTAIRES DELETED"); })
                .catch(function (error) {
                console.error("FAILDE TO DELETE INVENTAIRES", JSON.stringify(error));
            });
            db.executeSql("INSERT INTO inventairescles('typeCle', 'nombre', 'observation', 'nummission') VALUES(?, ?, ?, ?)", [i.typeCle, i.nombre, i.observation, i.nummission])
                .then(function () { return console.log("INVENTAIRES INSERTED"); })
                .catch(function (error) { return console.log("FAILED TO INSERT", JSON.stringify(error)); });
        })
            .catch(function () { return console.error('FAILED TO OPEN OR CREATE DATABASE'); });
    };
    WsInventaieCleProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, SQLite])
    ], WsInventaieCleProvider);
    return WsInventaieCleProvider;
}());
export { WsInventaieCleProvider };
//# sourceMappingURL=ws-inventaie-cle.js.map