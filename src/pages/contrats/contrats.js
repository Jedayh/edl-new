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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InventairesClesPage } from '../inventaires-cles/inventaires-cles';
import { ReleveCompteursPage } from "../releve-compteurs/releve-compteurs";
import { Camera } from '@ionic-native/camera';
import { CameraImageProvider } from '../../providers/camera-image/camera-image';
// Provider global
import { MissionDataProvider } from '../../providers/mission-data/mission-data';
import { ListePiecesPage } from '../liste-pieces/liste-pieces';
var ContratsPage = /** @class */ (function () {
    // contrat: any = {}
    function ContratsPage(navCtrl, navParams, cameraImageProvider, missionDataProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cameraImageProvider = cameraImageProvider;
        this.missionDataProvider = missionDataProvider;
        this.contrat = {
            'chaudiere': false,
            'chaudierePhoto': '../../assets/imgs/add_photo.svg',
            'chaudiereMarque': '',
            'chaudiereEntretienEffectue': false,
            'chaudiereEtat': '',
            'chaudiereObservation': '',
            'rapportEntretienPhoto': '../../assets/imgs/add_photo.svg',
            'cumulus': false,
            'cumulusPhoto': '../../assets/imgs/add_photo.svg',
            'cumulusMarque': '',
            'cumulusEtat': '',
            'cumulusFonctionnement': '',
            'cumulusObservation': '',
            'attestationPhoto': '../../assets/imgs/add_photo.svg',
            'attestationAssurance': '',
            'attestationDateAssurance': '',
            'attestationNumeroContrat': '',
            'detecteurFumee': false,
            'detecteurFumeeEtat': '',
            'detecteurFumeeControle': '',
            'detecteurFumeeFonctionnement': '',
            'detecteurFumeeLocalisation': '',
            'detecteurFumeeObservation': '',
            'detecteurFumeePhoto': '../../assets/imgs/add_photo.svg',
            'nummission': 0
        };
        this.camera = new Camera();
        this.cameraOptions = this.cameraImageProvider.options;
        this.numberPiece = this.navParams.get('numberPiece');
        this.contrat.nummission = this.navParams.get('nummission');
        this.compters = this.navParams.get('compters');
        this.missionDataProvider.load(this.contrat.nummission, 'contrats').then(function (data) {
            if (data.status != 'empty') {
                _this.contrat = data.data;
            }
        });
    }
    ContratsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContratsPage');
    };
    ContratsPage.prototype.prev = function () {
        var _this = this;
        this.missionDataProvider.save(this.contrat.nummission, 'contrats', this.contrat, 'pending');
        this.navCtrl.push(ReleveCompteursPage, { nummission: this.contrat.nummission, numberPiece: this.numberPiece,
            compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ContratsPage.prototype.next = function () {
        var _this = this;
        this.missionDataProvider.save(this.contrat.nummission, 'contrats', this.contrat, 'pending');
        this.navCtrl.push(InventairesClesPage, { nummission: this.contrat.nummission, numberPiece: this.numberPiece,
            compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ContratsPage.prototype.openCamera = function (target) {
        var _this = this;
        switch (target) {
            case 1:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.contrat.chaudierePhoto = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 2:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.contrat.rapportEntretienPhoto = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 3:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.contrat.attestationPhoto = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 4:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.contrat.detecteurFumeePhoto = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 5:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.contrat.cumulusPhoto = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            default:
                break;
        }
    };
    ContratsPage.prototype.updateFonctionnement = function () {
        if (this.contrat.detecteurFumeeControle == 'Non contrôlable') {
            this.contrat.detecteurFumeeFonctionnement = 'Non vérifiable';
        }
    };
    ContratsPage.prototype.goToListPieces = function () {
        var _this = this;
        this.navCtrl.push(ListePiecesPage, { nummission: this.contrat.nummission }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ContratsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-contrats',
            templateUrl: 'contrats.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CameraImageProvider,
            MissionDataProvider])
    ], ContratsPage);
    return ContratsPage;
}());
export { ContratsPage };
//# sourceMappingURL=contrats.js.map