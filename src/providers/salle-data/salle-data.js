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
var SalleDataProvider = /** @class */ (function () {
    function SalleDataProvider(http) {
        this.http = http;
        console.log('Hello SalleDataProvider Provider');
    }
    SalleDataProvider.prototype.setSalleData = function (salle) {
        this.salle = salle;
    };
    SalleDataProvider.prototype.getSalleData = function () {
        return this.salle;
    };
    SalleDataProvider.prototype.setNomPiece = function (nom) {
        this.nomPiece = nom;
    };
    SalleDataProvider.prototype.getNomPiece = function () {
        return this.nomPiece;
    };
    SalleDataProvider.prototype.setPropretePiece = function (etat) {
        this.propretePiece = etat;
    };
    SalleDataProvider.prototype.getPropretePiece = function () {
        return this.propretePiece;
    };
    SalleDataProvider.prototype.setEtatPiece = function (etat) {
        this.etatPiece = etat;
    };
    SalleDataProvider.prototype.getEtatPiece = function () {
        return this.etatPiece;
    };
    SalleDataProvider.prototype.setIndexSallePage = function (index) {
        this.indexSallePage = index;
    };
    SalleDataProvider.prototype.getIndexSallePage = function () {
        return this.indexSallePage;
    };
    SalleDataProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], SalleDataProvider);
    return SalleDataProvider;
}());
export { SalleDataProvider };
//# sourceMappingURL=salle-data.js.map