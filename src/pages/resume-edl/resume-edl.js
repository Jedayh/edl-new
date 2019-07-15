var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignaturePage } from '../signature/signature';
import { SallePage } from '../salle/salle';
import { PanoDataProvider } from '../../providers/pano-data/pano-data';
import { SalleDataProvider } from '../../providers/salle-data/salle-data';
import { ListePiecesPage } from '../liste-pieces/liste-pieces';
import { SelectionDefautPage } from '../selection-defaut/selection-defaut';
var ResumeEdlPage = /** @class */ (function () {
    function ResumeEdlPage(navCtrl, navParams, panoDataProvider, salleDataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.panoDataProvider = panoDataProvider;
        this.salleDataProvider = salleDataProvider;
        this.resumes = ['Un', 'Deux', 'Trois'];
        this.propretePiece = salleDataProvider.getPropretePiece();
        this.etatPiece = salleDataProvider.getEtatPiece();
        this.salle = salleDataProvider.getSalleData();
        this.markers = panoDataProvider.getMarkers();
        this.dataPanoArr = panoDataProvider.getDataPanoArr();
        this.imagePano = panoDataProvider.getImagePano();
        this.nomPiece = salleDataProvider.getNomPiece();
        this.compters = this.navParams.get('compters');
        for (var i = 0; i < this.dataPanoArr.length; i++) {
            if (typeof this.dataPanoArr[i].description == 'undefined') {
                this.dataPanoArr[i].description['equipement'] = '...';
            }
        }
        this.patchFileReader();
    }
    ResumeEdlPage.prototype.patchFileReader = function () {
        if (!window.FileReader.prototype.addEventListener) {
            window.FileReader.prototype.addEventListener = function (type, listener) {
                if (type === 'loadend') {
                    this.onloadend = listener;
                }
            };
        }
    };
    ResumeEdlPage.prototype.ionViewDidLoad = function () {
        this.nummission = this.navParams.get("nummission");
        var hotspots = [];
        for (var i = 0; i < this.dataPanoArr.length; i++) {
            hotspots.push({
                "pitch": this.dataPanoArr[i].pitch,
                "yaw": this.dataPanoArr[i].yaw,
                "cssClass": "circleMarker",
                "createTooltipFunc": this.hotspotMaker,
                "createTooltipArgs": this.dataPanoArr[i].idDefaut + ""
            });
        }
        this.viewer = pannellum.viewer('panoresume', {
            "type": "equirectangular",
            "panorama": this.imagePano,
            "autoLoad": true,
            "hotSpots": hotspots
        });
    };
    ResumeEdlPage.prototype.hotspotMaker = function (hotSpotDiv, args) {
        hotSpotDiv.classList.add('circleMarker');
        var span = document.createElement('span');
        span.innerHTML = args;
        hotSpotDiv.appendChild(span);
        hotSpotDiv.style.borderColor = "red";
        span.style.marginLeft = (span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
        span.style.color = "#fff";
        span.style.position = "absolute";
        span.style.top = "44px";
    };
    ResumeEdlPage.prototype.mousePosition = function (event) {
        var leftBounds = this.viewer.getContainer().getBoundingClientRect().left;
        var topBounds = this.viewer.getContainer().getBoundingClientRect().top;
        var pos = {
            x: 0, y: 0
        };
        pos.x = event.center.x - leftBounds;
        pos.y = event.center.y - topBounds;
        return pos;
    };
    ResumeEdlPage.prototype.fromEventToCoords = function (event) {
        var pos = this.mousePosition(event);
        var canvas = this.viewer.getRenderer().getCanvas();
        var canvasWidth = canvas.clientWidth, canvasHeight = canvas.clientHeight;
        var x = pos.x / canvasWidth * 2 - 1;
        var y = (1 - pos.y / canvasHeight * 2) * canvasHeight / canvasWidth;
        var focal = 1 / Math.tan(this.viewer.getConfig().hfov * Math.PI / 360);
        var s = Math.sin(this.viewer.getConfig().pitch * Math.PI / 180);
        var c = Math.cos(this.viewer.getConfig().pitch * Math.PI / 180);
        var a = focal * c - y * s;
        var root = Math.sqrt(x * x + a * a);
        var pitch = Math.atan((y * c + focal * s) / root) * 180 / Math.PI;
        var yaw = Math.atan2(x / root, a / root) * 180 / Math.PI + this.viewer.getConfig().yaw;
        if (yaw < -180) {
            yaw += 360;
        }
        if (yaw > 180) {
            yaw -= 360;
        }
        return [pitch, yaw];
    };
    ResumeEdlPage.prototype.goToSalle = function () {
        var _this = this;
        this.navCtrl.push(SallePage, { nummission: this.nummission, compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ResumeEdlPage.prototype.goToListPieces = function () {
        var _this = this;
        this.navCtrl.push(ListePiecesPage, { nummission: this.nummission, compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ResumeEdlPage.prototype.goBack = function () {
        var _this = this;
        this.navCtrl.push(SelectionDefautPage, { nummission: this.nummission, compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ResumeEdlPage.prototype.terminerSigner = function () {
        var _this = this;
        this.navCtrl.push(SignaturePage, { nummission: this.nummission, compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ResumeEdlPage = __decorate([
        Component({
            selector: 'page-resume-edl',
            templateUrl: 'resume-edl.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            PanoDataProvider,
            SalleDataProvider])
    ], ResumeEdlPage);
    return ResumeEdlPage;
}());
export { ResumeEdlPage };
//# sourceMappingURL=resume-edl.js.map