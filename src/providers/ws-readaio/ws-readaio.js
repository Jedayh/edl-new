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
  Generated class for the WsReadaioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WsReadaioProvider = /** @class */ (function () {
    function WsReadaioProvider(http, sqlite) {
        this.http = http;
        this.sqlite = sqlite;
        console.log('Hello WsReadaioProvider Provider');
    }
    WsReadaioProvider.prototype.readAio = function () {
        this.sqlite.create({
            name: 'databaseEDL.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('SELECT * FROM missions', [])
                .then(function (res) {
                var tab = [];
                for (var index = 0; index < res.rows.length; index++) {
                    // const element = array[index];
                    // console.log("Mission", JSON.stringify(res.rows.item(index)));
                    tab.push(res.rows.item(index).proprietaire);
                }
                console.log("TABLE LENGHT", tab.length);
                return tab;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    WsReadaioProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, SQLite])
    ], WsReadaioProvider);
    return WsReadaioProvider;
}());
export { WsReadaioProvider };
//# sourceMappingURL=ws-readaio.js.map