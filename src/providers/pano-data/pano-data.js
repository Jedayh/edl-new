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
var PanoDataProvider = /** @class */ (function () {
    function PanoDataProvider(http) {
        this.http = http;
        this.idDefautToUpdate = 0;
        console.log('Hello PanoDataProvider Provider');
    }
    PanoDataProvider.prototype.setDataPanoArr = function (dataPanoArr) {
        this.dataPanoArr = dataPanoArr;
    };
    PanoDataProvider.prototype.getDataPanoArr = function () {
        return this.dataPanoArr;
    };
    PanoDataProvider.prototype.setIdDefautToUpdate = function (id) {
        this.idDefautToUpdate = id;
    };
    PanoDataProvider.prototype.getDefautToUpdate = function () {
        return this.idDefautToUpdate;
    };
    PanoDataProvider.prototype.setImagePano = function (imageBase64) {
        this.imagePano = imageBase64;
    };
    PanoDataProvider.prototype.getImagePano = function () {
        return this.imagePano;
    };
    PanoDataProvider.prototype.setMarkers = function (markers) {
        this.markers = markers;
    };
    PanoDataProvider.prototype.getMarkers = function () {
        return this.markers;
    };
    PanoDataProvider.prototype.setPanoDataToUpdate = function (data) {
        this.panoDataToUpdate = data;
    };
    PanoDataProvider.prototype.getPanoDataToUpdate = function () {
        return this.panoDataToUpdate;
    };
    PanoDataProvider.prototype.updatePanoDataArr = function (dataPanoUpdated) {
        for (var i = 0; i < this.dataPanoArr.length; i++) {
            if (this.dataPanoArr[i].idDefaut === dataPanoUpdated.idDefaut) {
                this.dataPanoArr[i] = dataPanoUpdated;
                break;
            }
        }
    };
    PanoDataProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], PanoDataProvider);
    return PanoDataProvider;
}());
export { PanoDataProvider };
//# sourceMappingURL=pano-data.js.map