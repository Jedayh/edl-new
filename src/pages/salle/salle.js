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
import { PrendrePhotoPage } from '../prendre-photo/prendre-photo';
import { EquipementsExterieursPage } from "../equipements-exterieurs/equipements-exterieurs";
import { EdlProvider } from '../../providers/edl/edl';
import { SignaturePage } from "../../pages/signature/signature";
import { SalleDataProvider } from '../../providers/salle-data/salle-data';
import { ListePiecesPage } from '../liste-pieces/liste-pieces';
var SallePage = /** @class */ (function () {
    function SallePage(navCtrl, navParams, edlProvider, salleDataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.edlProvider = edlProvider;
        this.salleDataProvider = salleDataProvider;
        this.salles = edlProvider.getSalles();
        this.compters = this.navParams.get('compters');
    }
    SallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SallePage');
        this.nummission = this.navParams.get('nummission');
        var currentIndex = this.navCtrl.getActive().index;
        this.salleDataProvider.setIndexSallePage(currentIndex);
        this.compters = this.navParams.get('compters');
    };
    SallePage.prototype.goToPrendrePhoto = function (salle) {
        var _this = this;
        this.salleDataProvider.setSalleData(salle);
        this.navCtrl.push(PrendrePhotoPage, { nummission: this.nummission }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    SallePage.prototype.goToFormetat = function () {
        var _this = this;
        this.navCtrl.push(EquipementsExterieursPage, { nummission: this.nummission,
            compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    SallePage.prototype.goToResumeEdl = function () {
        var _this = this;
        this.navCtrl.push(SignaturePage, { nummission: this.nummission, compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    SallePage.prototype.goToListPieces = function () {
        var _this = this;
        this.navCtrl.push(ListePiecesPage, { nummission: this.nummission, compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    SallePage = __decorate([
        Component({
            selector: 'page-salle',
            templateUrl: 'salle.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            EdlProvider,
            SalleDataProvider])
    ], SallePage);
    return SallePage;
}());
export { SallePage };
//# sourceMappingURL=salle.js.map