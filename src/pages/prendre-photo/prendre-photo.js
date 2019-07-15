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
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { HTTP } from '@ionic-native/http';
import { File } from '@ionic-native/file';
import { SallePage } from '../salle/salle';
import { SelectionDefautPage } from '../selection-defaut/selection-defaut';
import { SalleDataProvider } from '../../providers/salle-data/salle-data';
import { PanoDataProvider } from '../../providers/pano-data/pano-data';
// Provider global
import { MissionDataProvider } from '../../providers/mission-data/mission-data';
import { ListePiecesPage } from '../liste-pieces/liste-pieces';
var PrendrePhotoPage = /** @class */ (function () {
    function PrendrePhotoPage(navCtrl, navParams, camera, loadingCtrl, alertCtrl, salleDataProvider, panoDataProvider, http, file, missionDataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.salleDataProvider = salleDataProvider;
        this.panoDataProvider = panoDataProvider;
        this.http = http;
        this.file = file;
        this.missionDataProvider = missionDataProvider;
        // THETA TICOH VARS
        this.sessionId = '';
        this.currentPicture = '';
        this.salle = salleDataProvider.getSalleData();
        this.nummission = this.navParams.get("nummission");
        this.compters = this.navParams.get('compters');
    }
    PrendrePhotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrendrePhotoPage');
    };
    PrendrePhotoPage.prototype.goToSalle = function () {
        var _this = this;
        this.navCtrl.push(SallePage, { nummission: this.nummission }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    PrendrePhotoPage.prototype.showAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['Ok']
        });
        alert.present();
    };
    PrendrePhotoPage.prototype.checkPieceNom = function () {
        var _this = this;
        this.missionDataProvider.load(this.nummission, 'salle-' + this.salle.name + this.nomPiece)
            .then(function (data) {
            if (data.status != 'empty') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'La pièce "' + _this.nomPiece + '" existe déjà',
                    subTitle: 'Que souhaitez-vous faire ?',
                    buttons: [
                        {
                            text: 'Renseigner une nouvelle pièce',
                            role: 'cancel',
                            handler: function () {
                                _this.nomPiece = '';
                            }
                        },
                        {
                            text: 'Modifier la pièce existante',
                            handler: function () {
                                _this.salleDataProvider.setNomPiece(_this.nomPiece);
                                _this.navCtrl.push(SelectionDefautPage, { nummission: _this.nummission, compters: _this.compters }).then(function () {
                                    _this.navCtrl.removeView(_this.navCtrl.getPrevious());
                                });
                            }
                        },
                        {
                            text: 'Remplacer la pièce existante',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel btn pressed!');
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        });
    };
    PrendrePhotoPage.prototype.prendrePhoto = function () {
        var _this = this;
        if (this.nomPiece) {
            var self_1 = this;
            var options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                saveToPhotoAlbum: false,
                targetHeight: 4000,
                targetWidth: 4000
            };
            this.camera.getPicture(options).then(function (imageData) {
                self_1.imgPanoramique = 'data:image/jpeg;base64,' + imageData;
                _this.loading = _this.loadingCtrl.create({
                    content: 'La prise de vue 360° est en cours de traitement.'
                });
                _this.loading.present().then(function (_) {
                    _this.panoDataProvider.setImagePano(_this.imgPanoramique);
                    _this.salleDataProvider.setNomPiece(_this.nomPiece);
                    _this.navCtrl.push(SelectionDefautPage, { nummission: _this.nummission, compters: _this.compters }).then(function () {
                        _this.navCtrl.removeView(_this.navCtrl.getPrevious());
                    });
                    _this.loading.dismiss();
                });
            }, function (err) {
                console.log('Nisy erreur: ', err);
            });
        }
        else {
            this.showAlert('Nom de la pièce', 'Vous devez indiquer le nom de la pièce');
        }
    };
    PrendrePhotoPage.prototype.prendrePhotoDepuisTablette = function () {
        var _this = this;
        if (this.nomPiece) {
            var self_2 = this;
            var options = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                sourceType: this.camera.PictureSourceType.CAMERA,
                saveToPhotoAlbum: false,
                targetHeight: 4000,
                targetWidth: 4000,
                correctOrientation: true
            };
            this.camera.getPicture(options).then(function (imageData) {
                self_2.imgPanoramique = 'data:image/jpeg;base64,' + imageData;
                _this.loading = _this.loadingCtrl.create({
                    content: 'La prise de vue 360° est en cours de traitement.'
                });
                _this.loading.present().then(function (_) {
                    _this.panoDataProvider.setImagePano(_this.imgPanoramique);
                    _this.salleDataProvider.setNomPiece(_this.nomPiece);
                    _this.navCtrl.push(SelectionDefautPage, { nummission: _this.nummission, compters: _this.compters }).then(function () {
                        _this.navCtrl.removeView(_this.navCtrl.getPrevious());
                    });
                    _this.loading.dismiss();
                });
            }, function (err) {
                console.log('Nisy erreur: ', err);
            });
        }
        else {
            this.showAlert('Nom de la pièce', 'Vous devez indiquer le nom de la pièce');
        }
    };
    // FONCTIONS POUR LA PRISE DE VUE 360 DEPUIS LA CAMERA THETA RICOH
    PrendrePhotoPage.prototype.newPicture = function () {
        var _this = this;
        if (this.nomPiece) {
            this.missionDataProvider.lsGetItem('isOnline').then(function (connected) {
                if (connected) {
                    _this.showAlert('Connexion à la caméra Theta', 'Pour prendre une photo 360°, vous devez être connecté au réseau WIFI de la caméra Ricoh Theta');
                    return false;
                }
                else {
                    _this.getState().then(function () {
                        if (typeof _this.currentThetaState == 'undefined') {
                            _this.showAlert('Connexion à la caméra Theta', 'Pour prendre une photo 360°, vous devez être connecté au réseau WIFI de la caméra Ricoh Theta');
                            return false;
                        }
                        _this.loading = _this.loadingCtrl.create({
                            content: 'Connexion à la caméra Theta en cours'
                        });
                        _this.loading.present();
                        _this.currentPicture = _this.currentThetaState.fingerprint;
                        if (_this.currentThetaState.state._apiVersion == 1
                            || _this.currentThetaState.state.sessionId == "SID_0000") {
                            _this.initSessionId();
                        }
                        else {
                            // On initialise la taille et on prend la photo
                            _this.takePicture();
                        }
                    });
                }
            });
        }
        else {
            this.showAlert('Nom de la pièce', 'Vous devez indiquer le nom de la pièce');
        }
    };
    PrendrePhotoPage.prototype.updatePreview = function () {
        var _this = this;
        this.loading.data.content = 'Préparation de la prise de vue 360° sur la caméra Theta';
        var self = this;
        this.getState().then(function () {
            if (_this.currentThetaState.state._latestFileUrl !== '' && _this.currentThetaState.fingerprint !== _this.currentPicture) {
                _this.loading.data.content = 'Transmission de la prise de vue 360° vers l\'application';
                _this.http.downloadFile(_this.currentThetaState.state._latestFileUrl, {}, {}, _this.file.dataDirectory + "test.jpg")
                    .then(function (data) {
                    data.file(function (File) {
                        console.log('filereader');
                        _this.loading.data.content = 'Traitement de la prise de vue 360°';
                        var reader = new FileReader();
                        reader.onloadend = function () {
                            _this.loading.data.content = 'Redimensionnement de la prise de vue 360°';
                            console.log('onloadend');
                            var image = new Image();
                            var promise = new Promise(function (resolve, reject) {
                                image.onload = function () {
                                    console.log('onload');
                                    var canvas = document.createElement("canvas");
                                    var context = canvas.getContext("2d");
                                    canvas.width = 4000;
                                    canvas.height = Math.round(image.height * (4000 / image.width));
                                    context.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
                                    resolve(canvas.toDataURL());
                                };
                                image.src = reader.result;
                            });
                            promise.then(function (dataUrl) {
                                _this.loading.data.content = 'La prise de vue 360° est prête';
                                self.imgPanoramique = dataUrl;
                                self.currentPicture = self.currentThetaState.fingerprint;
                                self.panoDataProvider.setImagePano(self.imgPanoramique);
                                self.salleDataProvider.setNomPiece(self.nomPiece);
                                self.navCtrl.push(SelectionDefautPage, { nummission: self.nummission, compters: _this.compters }).then(function () {
                                    _this.navCtrl.removeView(_this.navCtrl.getPrevious());
                                });
                                self.loading.dismiss();
                            });
                        };
                        reader.readAsDataURL(File);
                    });
                })
                    .catch(function (error) {
                    console.log('error : ');
                    console.log(error);
                    _this.loading.dismiss();
                });
                return true;
            }
            setTimeout(function () {
                _this.updatePreview();
            }, 1000);
        });
    };
    PrendrePhotoPage.prototype.getState = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.currentThetaState = null;
            _this.executeService('/osc/state', {}, function (data) {
                _this.currentThetaState = data;
                return resolve(data);
            });
        });
    };
    PrendrePhotoPage.prototype.takePicture = function () {
        var _this = this;
        this.loading.data.content = 'Demande de prise de vue 360° envoyée à la caméra Theta';
        this.executeService('/osc/commands/execute', {
            "sessionId": this.sessionId,
            'name': 'camera.takePicture',
            'parameters': {}
        }, function (data) {
            console.log('theta takePicture');
            _this.updatePreview();
        });
    };
    PrendrePhotoPage.prototype.initApiVersion = function () {
        var _this = this;
        this.executeService('/osc/commands/execute', {
            "name": "camera.setOptions",
            "parameters": {
                "sessionId": this.sessionId,
                "options": {
                    "clientVersion": 2
                }
            }
        }, function (data) {
            console.log('theta initApiVersion');
            _this.takePicture();
        });
    };
    PrendrePhotoPage.prototype.initSessionId = function () {
        var _this = this;
        this.executeService('/osc/commands/execute', {
            'name': 'camera.startSession',
            'parameters': {}
        }, function (data) {
            if (data.state != 'error') {
                _this.sessionId = data.results.sessionId;
                console.log('theta sessionId : ' + _this.sessionId);
            }
            _this.initApiVersion();
        });
    };
    PrendrePhotoPage.prototype.executeService = function (requestUri, data, callback) {
        var _this = this;
        this.http.setDataSerializer('json');
        console.log('executeService : http://192.168.1.1:80' + requestUri);
        console.log(data);
        return this.http.post("http://192.168.1.1:80" + requestUri, data, { 'Content-Type': 'application/json' })
            .then(function (data) {
            console.log(JSON.parse(data.data));
            return callback(JSON.parse(data.data));
        })
            .catch(function (error) {
            console.log('error : ');
            console.log(error);
            _this.showAlert('Connexion à la caméra Theta', 'Pour prendre une photo 360°, vous devez être connecté au réseau WIFI de la caméra Ricoh Theta');
            _this.loading.dismiss();
        });
    };
    PrendrePhotoPage.prototype.goToListPieces = function () {
        var _this = this;
        this.navCtrl.push(ListePiecesPage, { nummission: this.nummission, compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    PrendrePhotoPage = __decorate([
        Component({
            selector: 'page-prendre-photo',
            templateUrl: 'prendre-photo.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            Camera,
            LoadingController,
            AlertController,
            SalleDataProvider,
            PanoDataProvider,
            HTTP,
            File,
            MissionDataProvider])
    ], PrendrePhotoPage);
    return PrendrePhotoPage;
}());
export { PrendrePhotoPage };
//# sourceMappingURL=prendre-photo.js.map