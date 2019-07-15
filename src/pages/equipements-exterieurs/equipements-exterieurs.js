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
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SallePage } from '../salle/salle';
import { InventairesClesPage } from '../inventaires-cles/inventaires-cles';
import { Camera } from '@ionic-native/camera';
import { CameraImageProvider } from '../../providers/camera-image/camera-image';
// Provider global
import { MissionDataProvider } from '../../providers/mission-data/mission-data';
import { ListePiecesPage } from '../liste-pieces/liste-pieces';
/**
 * Generated class for the EquipementsExterieursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EquipementsExterieursPage = /** @class */ (function () {
    /**
     * @todo Ajout de piece d'identité et de procuration
     */
    function EquipementsExterieursPage(navCtrl, navParams, cameraImageProvider, alertCtrl, missionDataProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cameraImageProvider = cameraImageProvider;
        this.alertCtrl = alertCtrl;
        this.missionDataProvider = missionDataProvider;
        this.equipement = {
            nummission: null,
            passepose: false,
            passeposePhoto: '../assets/imgs/add_photo.svg',
            passeposeObservation: '',
            passeposeEtat: '',
            passeposeControle: '',
            passeposeFonctionnement: '',
            visiophone: false,
            visiophonePhoto: '../assets/imgs/add_photo.svg',
            visiophoneObservation: '',
            visiophoneEtat: '',
            visiophoneControle: '',
            visiophoneFonctionnement: '',
            interphone: false,
            interphonePhoto: '../assets/imgs/add_photo.svg',
            interphoneObservation: '',
            interphoneEtat: '',
            interphoneControle: '',
            interphoneFonctionnement: '',
            sonnette: false,
            sonnettePhoto: '../assets/imgs/add_photo.svg',
            sonnetteObservation: '',
            sonnetteEtat: '',
            sonnetteControle: '',
            sonnetteFonctionnement: '',
            boiteauxlettres: false,
            boiteauxlettresPhoto: '../assets/imgs/add_photo.svg',
            boiteauxlettresObservation: '',
            boiteauxlettresEtat: '',
            boiteauxlettresControle: '',
            boiteauxlettresFonctionnement: '',
            pieceIdentitePhoto1: '../assets/imgs/add_photo.svg',
            pieceIdentiteNumero1: '',
            pieceIdentitePhoto2: '../assets/imgs/add_photo.svg',
            pieceIdentiteNumero2: '',
            pieceIdentitePhoto3: '../assets/imgs/add_photo.svg',
            pieceIdentiteNumero3: '',
            pieceIdentitePhoto4: '../assets/imgs/add_photo.svg',
            pieceIdentiteNumero4: '',
            procurationPhoto: '../assets/imgs/add_photo.svg',
            procurationPhoto2: '../assets/imgs/add_photo.svg',
            procurationPhoto3: '../assets/imgs/add_photo.svg',
            procurationPhoto4: '../assets/imgs/add_photo.svg',
            procurationPhoto5: '../assets/imgs/add_photo.svg',
            procurationObservation: ''
        };
        this.camera = new Camera();
        this.cameraOptions = this.cameraImageProvider.options;
        this.equipement.nummission = this.navParams.get('nummission');
        this.numberPiece = this.navParams.get('numberPiece');
        this.compters = this.navParams.get('compters');
        this.missionDataProvider.load(this.equipement.nummission, 'equipementsExterieurs').then(function (data) {
            if (data.status != 'empty') {
                var nummission = _this.equipement.nummission;
                _this.equipement = data.data;
                _this.equipement.nummission = nummission;
            }
        });
    }
    EquipementsExterieursPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EquipementsExterieursPage');
    };
    EquipementsExterieursPage.prototype.prev = function () {
        var _this = this;
        this.missionDataProvider.save(this.equipement.nummission, 'equipementsExterieurs', this.equipement, 'pending');
        this.navCtrl.push(InventairesClesPage, { nummission: this.equipement.nummission, numberPiece: this.numberPiece,
            compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    EquipementsExterieursPage.prototype.next = function () {
        var _this = this;
        this.missionDataProvider.save(this.equipement.nummission, 'equipementsExterieurs', this.equipement, 'pending');
        this.navCtrl.push(SallePage, { nummission: this.equipement.nummission, numberPiece: this.numberPiece,
            compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    EquipementsExterieursPage.prototype.openCamera = function (id) {
        var _this = this;
        switch (id) {
            case 1:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.equipement.passeposePhoto = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 2:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.equipement.visiophonePhoto = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 3:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.equipement.interphonePhoto = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 4:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.equipement.sonnettePhoto = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 5:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.equipement.pieceIdentitePhoto1 = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 6:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.equipement.pieceIdentitePhoto2 = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 7:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.equipement.procurationPhoto = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 8:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.equipement.pieceIdentitePhoto3 = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 9:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.equipement.pieceIdentitePhoto4 = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 10:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.equipement.procurationPhoto2 = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 11:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.equipement.procurationPhoto3 = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 12:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.equipement.procurationPhoto4 = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 13:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.equipement.procurationPhoto5 = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 14:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.equipement.boiteauxlettresPhoto = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            default:
                break;
        }
    };
    EquipementsExterieursPage.prototype.updateFonctionnement = function (type) {
        if (this.equipement[type + 'Controle'] == 'Non contrôlable') {
            this.equipement[type + 'Fonctionnement'] = 'Non vérifiable';
        }
    };
    EquipementsExterieursPage.prototype.goToListPieces = function () {
        var _this = this;
        this.navCtrl.push(ListePiecesPage, { nummission: this.equipement.nummission }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    EquipementsExterieursPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-equipements-exterieurs',
            templateUrl: 'equipements-exterieurs.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CameraImageProvider,
            AlertController,
            MissionDataProvider])
    ], EquipementsExterieursPage);
    return EquipementsExterieursPage;
}());
export { EquipementsExterieursPage };
//# sourceMappingURL=equipements-exterieurs.js.map