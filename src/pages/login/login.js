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
import { Platform, NavController, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';
import xml2js from 'xml2js';
import axios from 'axios';
import { Technicien } from '../../models/technicien.model';
import { UserProvider } from '../../providers/user/user';
import * as Promise from 'bluebird';
// Provider global
import { MissionDataProvider } from '../../providers/mission-data/mission-data';
var VENTE_CMCIC_URL = "https://abcimmoservi.sogexpert.com/synchro_logiciel?action=";
var LOCATION_NATIONALE_URL = "https://location.sogexpert.com/synchro_logiciel?action=";
var GESTION_LOCATION_CMCIC_URL = "https://abcimmodiag.sogexpert.com/synchro_logiciel?action=";
var MEDIALIBS_URL = "https://medialibs.sogexpert.com/synchro_logiciel?action=";
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, platform, http, toastCtrl, userProvider, alertCtrl, missionDataProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.userProvider = userProvider;
        this.alertCtrl = alertCtrl;
        this.missionDataProvider = missionDataProvider;
        this.loadingCtrl = loadingCtrl;
        this.token = "AOBPHCANOFNO56169";
        this.login = ""; // abcvannes
        this.password = ""; // abcvannes7452
        this.action = "get_connexion";
        this.connectionCount = 0;
        this.successConnectionCount = 0;
        this.failureConnectionCount = 0;
        this.connectionFailedList = [];
        this.succeededPlateforms = [];
        this.failedPlateforms = [];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            setTimeout(function () {
                _this.missionDataProvider.lsGetItem('isOnline').then(function (connected) {
                    _this.missionDataProvider.lsGetItem('technicienConnected').then(function (data) {
                        if (data) {
                            if (!connected) { // redirection to homepage
                                _this.navCtrl.push(HomePage);
                            }
                            else {
                                _this.missionDataProvider.lsGetItem('session')
                                    .then(function (session) {
                                    console.log(session);
                                    _this.login = session.login;
                                    _this.password = session.password;
                                    _this.connectUser();
                                });
                            }
                        }
                        else {
                            _this.presentToast('Aucune donnée disponible', 3000, 'bottom');
                        }
                    });
                });
            }, 1000);
        });
    };
    LoginPage.prototype.presentToast = function (message, duration, position) {
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
    LoginPage.prototype.connectUser = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Authentification'
        });
        this.loading.present();
        this.succeededPlateforms = [];
        this.failedPlateforms = [];
        this.missionDataProvider.lsSetItem('succeededPlateforms', this.succeededPlateforms)
            .then(function () {
            return Promise.all([
                _this.connectToVenteCMCIC(),
                _this.connectToLocationNationale(),
                _this.connectToGestionLocationCMCIC(),
                _this.connectToMedialibs()
            ]);
        }).then(function (results) {
            return Promise.each(results, function (result) {
                if (result.ok) {
                    _this.succeededPlateforms.push({
                        plateformeCode: result.plateformeCode,
                        technicien: result.technicien
                    });
                }
                else {
                    if (result.plateformeName != 'Pré-production') {
                        _this.failedPlateforms.push(result.plateformeName);
                    }
                }
            });
        })
            .then(function () {
            if (_this.succeededPlateforms.length > 0) {
                if (_this.failedPlateforms.length > 0) {
                    _this.presentToast('L\'authentification sur les plateformes suivantes ne fonctionne pas : ' + _this.failedPlateforms.join(', '), 3000, 'bottom');
                }
                _this.missionDataProvider.lsSetItem('succeededPlateforms', _this.succeededPlateforms).then(function () {
                    _this.missionDataProvider.lsSetItem('technicienConnected', _this.technicienConnected).then(function () {
                        _this.missionDataProvider.lsSetItem('session', { login: _this.login, password: _this.password }).then(function () {
                            _this.loading.dismiss();
                            _this.navCtrl.push(HomePage);
                        });
                    });
                });
            }
            else {
                _this.loading.dismiss();
                _this.showAlert('Authentification impossible', 'Vérifiez vos identifiants de connexion et votre connexion internet.');
            }
        });
    };
    LoginPage.prototype.connectToVenteCMCIC = function () {
        return this.sendConnectionRequestTo(VENTE_CMCIC_URL + this.action + "&token=" + this.token + "&login=" + this.login + "&password=" + this.password, 'Vente CMCIC', '6SYFF');
    };
    LoginPage.prototype.connectToLocationNationale = function () {
        return this.sendConnectionRequestTo(LOCATION_NATIONALE_URL + this.action + "&token=" + this.token + "&login=" + this.login + "&password=" + this.password, 'Location nationale', '3CF81');
    };
    LoginPage.prototype.connectToGestionLocationCMCIC = function () {
        return this.sendConnectionRequestTo(GESTION_LOCATION_CMCIC_URL + this.action + "&token=" + this.token + "&login=" + this.login + "&password=" + this.password, 'Location CMCIC', 'CMCIC');
    };
    LoginPage.prototype.connectToMedialibs = function () {
        return this.sendConnectionRequestTo(MEDIALIBS_URL + this.action + "&token=" + this.token + "&login=" + this.login + "&password=" + this.password, 'Pré-production', 'MEDIALIBS');
    };
    LoginPage.prototype.sendConnectionRequestTo = function (url, plateformeName, plateformeCode) {
        var _this = this;
        var self = this;
        return new Promise(function (resolve) {
            axios.get(url, {})
                .then(function (response) {
                if (!response.data) {
                    return {
                        ok: false,
                        plateformeName: plateformeName
                    };
                }
                self.parseXML(response.data)
                    .then(function (parsedXml) {
                    if (!parsedXml) {
                        console.log('WRONG CREDENTIALS');
                        return resolve({
                            ok: false,
                            plateformeName: plateformeName
                        });
                    }
                    _this.technicienConnected = parsedXml;
                    return resolve({
                        ok: true,
                        plateformeCode: plateformeCode,
                        plateformeName: plateformeName,
                        technicien: parsedXml
                    });
                })
                    .catch(function (err) {
                    return resolve({
                        ok: false,
                        plateformeName: plateformeName
                    });
                });
            }).catch(function (err) {
                return resolve({
                    ok: false,
                    plateformeName: plateformeName
                });
            });
        });
    };
    LoginPage.prototype.parseXML = function (data) {
        return new Promise(function (resolve, reject) {
            var parser = new xml2js.Parser({
                trim: true,
                explicitArray: true
            });
            parser.parseString(data, function (err, result) {
                if (err)
                    return reject(err);
                if (result.connexion.erreur) {
                    return resolve(false);
                }
                var technicien = result.connexion.technicien[0];
                var user = new Technicien();
                user.id = technicien.id[0];
                user.nom = technicien.nom[0];
                user.prenom = technicien.prenom[0];
                user.surnom = technicien.surnom[0];
                user.ville = technicien.ville[0];
                user.adresse = technicien.adresse[0];
                user.email = technicien.email[0];
                user.telephone = technicien.telephone[0];
                user.portable = technicien.portable[0];
                user.photoHttp = technicien.photo_http[0];
                user.signatureImgHttp = technicien.signature_img_http[0];
                user.certification = '';
                resolve(user);
            });
        });
    };
    LoginPage.prototype.showAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['Ok']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-login',
            templateUrl: 'login.html'
        }),
        __metadata("design:paramtypes", [NavController,
            Platform,
            HttpClient,
            ToastController,
            UserProvider,
            AlertController,
            MissionDataProvider,
            LoadingController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map