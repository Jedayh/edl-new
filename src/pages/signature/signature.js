var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { HomePage } from '../home/home';
import { SallePage } from '../salle/salle';
import { SalleDataProvider } from '../../providers/salle-data/salle-data';
// Provider global
import { MissionDataProvider } from '../../providers/mission-data/mission-data';
/**
 * Generated class for the SignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignaturePage = /** @class */ (function () {
    function SignaturePage(navCtrl, navParams, alertCtrl, salleDataProvider, missionDataProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.salleDataProvider = salleDataProvider;
        this.missionDataProvider = missionDataProvider;
        this.signaturePadOptions = {
            'minWidth': 0.8,
            'maxWidth': 3,
            'canvasWidth': 490,
            'canvasHeight': 300
        };
        this.resultsignatureLoc = [];
        this.locat = [
            { id: 0, nom: '...', photo: '' }
        ];
        this.signatureData = {
            nummission: null,
            signatureProprietaire: '',
            signaturesLocataire: []
        };
        this.detailMission = {};
        this.localCommercial = false;
        this.signatureData.nummission = this.navParams.get('nummission');
        this.compters = this.navParams.get('compters');
        this.missionDataProvider.load(this.signatureData.nummission, 'missionDetail').then(function (data) {
            if (data.status != 'empty') {
                _this.detailMission = data.data;
                _this.locat[0].nom = _this.detailMission.loc_nomcomplet;
                if (_this.detailMission.edl_entree
                    && _this.detailMission.edl_sortie
                    && _this.detailMission.exloc_nomcomplet != '') {
                    _this.locat.push({ id: 1, nom: _this.detailMission.exloc_nomcomplet, photo: '' });
                }
                _this.localCommercial = _this.detailMission.bien_type == 'Local commercial';
            }
        });
    }
    SignaturePage.prototype.ionViewDidLoad = function () {
        console.log('Chargement de SignaturePage');
    };
    SignaturePage.prototype.drawComplete = function () {
        this.signatureImage = this.signatureProp.toDataURL();
        console.log(this.signatureImage);
    };
    SignaturePage.prototype.drawClear = function (isLoc, index) {
        this.resultsignatureLoc = this.signatureLocs['_results'];
        if (!isLoc) {
            this.signatureProp.clear();
        }
        else if (isLoc == 'paraphe') {
            this.paraphe.clear();
        }
        else {
            if (this.resultsignatureLoc.length) {
                this.resultsignatureLoc.forEach(function (elt) {
                    if (elt.elementRef['nativeElement'].id === 'signatureLoc' + index) {
                        elt.clear();
                    }
                });
            }
            else {
                this.signatureLoc.clear();
            }
        }
    };
    SignaturePage.prototype.goToResume = function () {
        var _this = this;
        this.navCtrl.push(SallePage, { nummission: this.signatureData.nummission, compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    SignaturePage.prototype.goToHome = function () {
        var _this = this;
        var isSignatureEmpty = false;
        this.signatureData.signatureProprietaire = this.signatureProp.toDataURL();
        if (this.paraphe.isEmpty()) {
            isSignatureEmpty = true;
        }
        if (this.signatureProp.isEmpty()) {
            isSignatureEmpty = true;
        }
        this.signatureData.signaturesLocataire = [];
        this.locat.forEach(function (elt) {
            if (_this.signatureLocs['_results'][elt.id].isEmpty()) {
                isSignatureEmpty = true;
            }
            elt.photo = _this.signatureLocs['_results'][elt.id].toDataURL();
            _this.signatureData.signaturesLocataire.push(elt);
        });
        if (isSignatureEmpty) {
            var alert_1 = this.alertCtrl.create({
                title: 'La signature et les paraphes sont obligatoires pour valider l\'état des lieux',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel btn pressed!');
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Validation de l\'état des lieux',
                message: 'Je reconnais avoir pris connaissance de la totalité du constat d\'état des lieux et atteste de son exactitude. J\'autorise la duplication de mon paraphe électronique sur chaque page du constat. <br /><br />Etes-vous sûr de valider cet état des lieux ?',
                buttons: [
                    {
                        text: 'Non',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel btn pressed!');
                        }
                    },
                    {
                        text: 'Oui, je valide cet état des lieux',
                        handler: function () {
                            _this.saveData();
                            _this.navCtrl.push(HomePage).then(function () {
                                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
                            });
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    SignaturePage.prototype.saveData = function () {
        var _this = this;
        this.signatureData.observation = this.observation;
        this.signatureData.pasElectricite = this.pasElectricite;
        this.signatureData.elementsCachesParMeubles = this.elementsCachesParMeubles;
        this.signatureData.paraphe = this.paraphe.toDataURL();
        this.signatureData.signatureProprietaire = this.signatureProp.toDataURL();
        this.signatureData.signaturesLocataire = [];
        this.locat.forEach(function (elt) {
            elt.photo = _this.signatureLocs['_results'][elt.id].toDataURL();
            _this.signatureData.signaturesLocataire.push(elt);
        });
        this.missionDataProvider.save(this.signatureData.nummission, 'signature', this.signatureData, 'pending');
    };
    SignaturePage.prototype.addSignature = function () {
        this.showPrompt();
    };
    SignaturePage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Ajout d\'un signataire',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Nom et prénom du signataire'
                },
            ],
            buttons: [
                {
                    text: 'Annuler',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ajouter',
                    handler: function (data) {
                        _this.locat.push({ id: _this.locat.length, nom: data.title });
                    }
                }
            ]
        });
        prompt.present();
    };
    __decorate([
        ViewChild('signatureProp'),
        __metadata("design:type", SignaturePad)
    ], SignaturePage.prototype, "signatureProp", void 0);
    __decorate([
        ViewChild('paraphe'),
        __metadata("design:type", SignaturePad)
    ], SignaturePage.prototype, "paraphe", void 0);
    __decorate([
        ViewChild('signatureLoc'),
        __metadata("design:type", SignaturePad)
    ], SignaturePage.prototype, "signatureLoc", void 0);
    __decorate([
        ViewChild('signatureExLoc'),
        __metadata("design:type", SignaturePad)
    ], SignaturePage.prototype, "signatureExLoc", void 0);
    __decorate([
        ViewChildren('signatureLoc'),
        __metadata("design:type", SignaturePad)
    ], SignaturePage.prototype, "signatureLocs", void 0);
    SignaturePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-signature',
            templateUrl: 'signature.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController,
            SalleDataProvider,
            MissionDataProvider])
    ], SignaturePage);
    return SignaturePage;
}());
export { SignaturePage };
//# sourceMappingURL=signature.js.map