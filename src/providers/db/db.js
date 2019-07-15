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
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DbProvider = /** @class */ (function () {
    function DbProvider(http, sqlite) {
        this.http = http;
        this.sqlite = sqlite;
        console.log('Hello DbProvider Provider');
        this.sqlite.create({
            name: 'databaseEDL.db',
            location: 'default'
        })
            .then(function (db) {
            // Table missions
            db.executeSql("CREATE TABLE IF NOT EXISTS 'missions' ('id' INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 'serviceSource' TEXT, 'proprietaire' TEXT,'locataire' TEXT,'nummission' TEXT,'ville' TEXT,'agence' TEXT,'etat' TEXT, 'edletat' TEXT, 'societe' TEXT, 'bien_adresse' TEXT, 'bien_residence' TEXT, 'bien_type' TEXT, 'bien_bat' TEXT, 'bien_esc' TEXT, 'bien_cave' TEXT, 'bien_complement' TEXT, 'bien_ville' TEXT, 'bien_etage' TEXT, 'bien_box' TEXT, 'bien_parking' TEXT, 'bien_garage' TEXT, 'loc_nom' TEXT, 'loc_prenom' TEXT, 'loc_adresse' TEXT, 'loc_ville' TEXT, 'loc_departement' TEXT, 'loc_portable' TEXT, 'loc_telephone' TEXT, 'loc_email' TEXT, 'exloc_nom' TEXT, 'exloc_prenom' TEXT, 'exloc_adresse' TEXT, 'exloc_ville' TEXT, 'exloc_departement' TEXT, 'exloc_portable' TEXT, 'exloc_telephone' TEXT, 'exloc_email' TEXT, 'raw_data' TEXT)", [])
                .then(function () { return console.log('Table missions OK'); })
                .catch(function (error) { return console.error('Table missions FAILED', error.message); });
            // Table mission data
            db.executeSql("CREATE TABLE IF NOT EXISTS 'mission_data' ('id' INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 'mission_id' INTEGER, 'screen' TEXT,'data' TEXT, 'status' TEXT)", [])
                .then(function () { return console.log('Table mission_data OK'); })
                .catch(function (error) { return console.error('Table mission_data FAILED', error.message); });
            db.executeSql("CREATE TABLE IF NOT EXISTS 'local_storage' ('varname' TEXT,'value' TEXT)", [])
                .then(function () { return console.log('Table local_storage OK'); })
                .catch(function (error) { return console.error('Table local_storage FAILED', error.message); });
        })
            .catch(function (e) { return console.log('Failed to open/create database', 'edldatabase.db'); });
    }
    DbProvider.prototype.load = function () {
        console.log('SQLITE DATABASE PROVIDER LOADED');
    };
    DbProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, SQLite])
    ], DbProvider);
    return DbProvider;
}());
export { DbProvider };
//# sourceMappingURL=db.js.map