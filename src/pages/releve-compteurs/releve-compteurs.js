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
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { ContratsPage } from '../contrats/contrats';
import { DetailMissionPage } from "../detail-mission/detail-mission";
import { Camera } from '@ionic-native/camera';
import { CameraImageProvider } from '../../providers/camera-image/camera-image';
// Provider global
import { MissionDataProvider } from '../../providers/mission-data/mission-data';
import { ListePiecesPage } from '../liste-pieces/liste-pieces';
/**
 * Generated class for the ReleveCompteursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Compter = /** @class */ (function () {
    function Compter() {
    }
    return Compter;
}());
var ReleveCompteursPage = /** @class */ (function () {
    function ReleveCompteursPage(navCtrl, navParams, cameraImageProvider, missionDataProvider, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cameraImageProvider = cameraImageProvider;
        this.missionDataProvider = missionDataProvider;
        this.toastCtrl = toastCtrl;
        this.compteMax = 10;
        this.index = '';
        this.compteur = {
            nummission: 0,
            eauFroidePhoto: '../assets/imgs/add_photo.svg',
            eauChaudePhoto: '../assets/imgs/add_photo.svg',
            listEauFroide: Array(),
            listEauChaude: Array(),
            chauffage: false,
            chauffagePhoto: '../assets/imgs/add_photo.svg',
            chauffageType: '',
            chauffageCha: '',
            chauffageObservation: '',
            electricite: false,
            electricitePhoto: '../assets/imgs/add_photo.svg',
            electricitePhoto2: '../assets/imgs/add_photo.svg',
            electriciteHeuresPleines: '',
            electriciteNumero: '',
            electriciteHeuresCreuse: '',
            electiriciteLocalisation: '',
            electiriciteObservation: '',
            gaz: false,
            gazPhoto: '../assets/imgs/add_photo.svg',
            gazCompteur: '',
            gazNumero: '',
            gazLocalisation: '',
            gazType: '',
            gazReleve: '',
            gazObservation: ''
        };
        this.isAdd = false;
        this.camera = new Camera();
        this.cameraOptions = this.cameraImageProvider.options;
        this.numberPiece = this.navParams.get('numberPiece');
        this.compteur.nummission = this.navParams.get('nummission');
        this.compters = new Array();
        this.compters.push(this.compteur);
        this.missionDataProvider.load(this.compteur.nummission, 'releveCompteurs').then(function (data) {
            if (data.status != 'empty') {
                var nummission = _this.compteur.nummission;
                _this.compteur = data.data;
                _this.compteur.nummission = nummission;
            }
        });
    }
    ReleveCompteursPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReleveCompteursPage');
        if (this.navParams.get('compters')) {
            this.compters = this.navParams.get('compters');
            if (Object.keys(this.compters).length >= 2) {
                this.isAdd = true;
            }
        }
    };
    ReleveCompteursPage.prototype.add = function () {
        var newCompter = new Compter();
        newCompter.nummission = this.compteur.nummission;
        if (Object.keys(this.compters).length <= this.compteMax) {
            var objCompteur = {
                nummission: 0,
                eauFroide: false,
                eauFroidePhoto: '../assets/imgs/add_photo.svg',
                eauFroideNumero: '',
                eauFroideCompteur: '',
                eauFroideType: '',
                eauFroideReleve: '',
                eauFroideLocalisation: '',
                eauFroideObservation: '',
                eauChaude: false,
                eauChaudePhoto: '../assets/imgs/add_photo.svg',
                eauChaudeNumero: '',
                eauChaudeCompteur: '',
                eauChaudeType: '',
                eauChaudeReleve: '',
                eauChaudeLocalisation: '',
                eauChaudeObservation: '',
            };
            this.compters.push(objCompteur);
            this.isAdd = true;
        }
    };
    ReleveCompteursPage.prototype.remove = function () {
        if (Object.keys(this.compters).length >= 2) {
            this.compters.pop();
        }
        if (Object.keys(this.compters).length == 1)
            this.isAdd = false;
    };
    ReleveCompteursPage.prototype.prev = function () {
        var _this = this;
        this.missionDataProvider.save(this.compteur.nummission, 'releveCompteurs', this.compteur, 'pending');
        this.navCtrl.push(DetailMissionPage, { nummission: this.compteur.nummission, numberPiece: this.numberPiece,
            compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ReleveCompteursPage.prototype.next = function () {
        var _this = this;
        var i = 0;
        this.compters.forEach(function (compter, key) {
            console.log(i);
            if (i == 0) {
                _this.compteur.chauffage = _this.compteur.chauffage;
                _this.compteur.chauffagePhoto = _this.compteur.chauffagePhoto;
                _this.compteur.chauffageType = _this.compteur.chauffageType;
                _this.compteur.chauffageCha = _this.compteur.chauffageCha;
                _this.compteur.chauffageObservation = _this.compteur.chauffageObservation;
                _this.compteur.electricite = _this.compteur.electricite;
                _this.compteur.electricitePhoto = _this.compteur.electricitePhoto;
                _this.compteur.electricitePhoto2 = _this.compteur.electricitePhoto2;
                _this.compteur.electriciteHeuresPleines = _this.compteur.electriciteHeuresPleines;
                _this.compteur.electriciteNumero = _this.compteur.electriciteNumero;
                _this.compteur.electriciteHeuresCreuse = _this.compteur.electriciteHeuresCreuse;
                _this.compteur.electiriciteLocalisation = _this.compteur.electiriciteLocalisation;
                _this.compteur.electiriciteObservation = _this.compteur.electiriciteObservation;
                _this.compteur.gaz = _this.compteur.gaz;
                _this.compteur.gazPhoto = _this.compteur.gazPhoto;
                _this.compteur.gazCompteur = _this.compteur.gazCompteur;
                _this.compteur.gazNumero = _this.compteur.gazNumero;
                _this.compteur.gazLocalisation = _this.compteur.gazLocalisation;
                _this.compteur.gazType = _this.compteur.gazType;
                _this.compteur.gazReleve = _this.compteur.gazReleve;
                _this.compteur.gazObservation = _this.compteur.gazObservation;
            }
            var arrayEauFroide = {
                eauFroide: compter.eauFroide,
                eauFroidePhoto: compter.eauFroidePhoto,
                eauFroideNumero: compter.eauFroideNumero,
                eauFroideCompteur: compter.eauFroideCompteur,
                eauFroideType: compter.eauFroideType,
                eauFroideReleve: compter.eauFroideReleve,
                eauFroideLocalisation: compter.eauFroideLocalisation,
                eauFroideObservation: compter.eauFroideObservation
            };
            var arrayEauChaude = {
                eauChaude: compter.eauChaude,
                eauChaudePhoto: compter.eauChaudePhoto,
                eauChaudeNumero: compter.eauChaudeNumero,
                eauChaudeCompteur: compter.eauChaudeCompteur,
                eauChaudeType: compter.eauChaudeType,
                eauChaudeReleve: compter.eauChaudeReleve,
                eauChaudeLocalisation: compter.eauChaudeLocalisation,
                eauChaudeObservation: compter.eauChaudeObservation
            };
            _this.compteur.listEauFroide.push(arrayEauFroide);
            _this.compteur.listEauChaude.push(arrayEauChaude);
            i++;
        });
        console.log(this.compteur);
        this.missionDataProvider.save(this.compteur.nummission, 'releveCompteurs', this.compteur, 'pending');
        this.navCtrl.push(ContratsPage, { nummission: this.compteur.nummission, numberPiece: this.numberPiece,
            compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ReleveCompteursPage.prototype.openCamera = function (target, index) {
        var _this = this;
        switch (target) {
            case 1:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    //   this.compteur.eauFroidePhoto = 'data:image/jpeg;base64,' + imageData;
                    _this.compters[index].eauFroidePhoto = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 2:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.compteur.chauffagePhoto = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 3:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.compteur.electricitePhoto = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 4:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.compteur.gazPhoto = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 5:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.compters[index].eauChaudePhoto = 'data:image/jpeg;base64,' + imageData;
                    //this.compteur.eauChaudePhoto = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 6:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.compteur.electricitePhoto2 = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            default:
                break;
        }
    };
    ReleveCompteursPage.prototype.goToListPieces = function () {
        var _this = this;
        this.navCtrl.push(ListePiecesPage, { nummission: this.compteur.nummission }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ReleveCompteursPage.prototype.presentToast = function (message, duration, position) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ReleveCompteursPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-releve-compteurs',
            templateUrl: 'releve-compteurs.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CameraImageProvider,
            MissionDataProvider,
            ToastController])
    ], ReleveCompteursPage);
    return ReleveCompteursPage;
}());
export { ReleveCompteursPage };
//# sourceMappingURL=releve-compteurs.js.map