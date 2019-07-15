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
import { ReleveCompteursPage } from '../releve-compteurs/releve-compteurs';
import { HomePage } from "../home/home";
// Provider global
import { MissionDataProvider } from '../../providers/mission-data/mission-data';
import { ListePiecesPage } from '../liste-pieces/liste-pieces';
import { WsPanoProvider } from '../../providers/ws-pano/ws-pano';
/**
 * Generated class for the DetailMissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailMissionPage = /** @class */ (function () {
    function DetailMissionPage(navCtrl, navParams, missionDataProvider, alertCtrl, wsPanoProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.missionDataProvider = missionDataProvider;
        this.alertCtrl = alertCtrl;
        this.wsPanoProvider = wsPanoProvider;
        this.detail = {};
        this.personnes = [];
        this.compters = this.navParams.get('compters');
        this.detail.uid = this.navParams.get('nummission');
        if (typeof this.navParams.data.raw_data != 'undefined') {
            var rawData = this.navParams.data.raw_data;
            this.detail = {
                uid: this.navParams.data.uid,
                nummission: (1000 + parseInt(rawData.id[0])).toString(),
                titre: rawData.rdv[0].titre[0],
                date_actuel: new Date().toISOString().split('T')[0],
                date_entree_locataire: '',
                proprietaire_nomcomplet: rawData.proprietaire[0].nom_complet[0],
                societe: rawData.societe[0].societe[0],
                agence: rawData.demandeur[0].nom_complet[0],
                mandataire: (rawData.prescripteur[0].societe[0] == '' ? 'CMCIC Gestion locative' : rawData.prescripteur[0].societe[0]),
                reference: rawData.reference[0],
                bien_adresse: rawData.bien[0].adresse_complete[0],
                bien_adresse_complement: rawData.bien[0].complement_adresse[0],
                bien_residence: '',
                bien_type: rawData.bien[0].type[0],
                bien_bat: rawData.bien[0].batiment[0],
                bien_nbpieces: rawData.bien[0].nb_piece[0],
                bien_codepostal: rawData.bien[0].cp[0],
                bien_ville: rawData.bien[0].ville[0],
                bien_etage: rawData.bien[0].etage[0],
                bien_cave: '',
                bien_digicode: '',
                bien_parking: '',
                bien_garage: '',
                bien_numlot: '',
                bien_meuble: (rawData.bien[0].meuble[0] == 'oui') ? 'Oui' : 'Non',
                loc_nomcomplet: '',
                loc_nom: '',
                loc_prenom: '',
                loc_portable: '',
                loc_telephone: '',
                loc_email: '',
                loc_email2: '',
                exloc_nom: '',
                exloc_prenom: '',
                exloc_portable: '',
                exloc_telephone: '',
                exloc_email: '',
                exloc_email2: '',
                exloc_adresse: '',
                exloc_departement: '',
                exloc_ville: '',
                edl_sortie: rawData.edl_sortie,
                edl_entree: rawData.edl_entree
            };
            if (typeof rawData.edl[0] !== 'undefined') {
                // Si EDL Sortie alors le locataire entrant est dans le bloc ancien locataire
                if (rawData.edl_sortie && !rawData.edl_entree) {
                    this.detail.loc_nomcomplet = rawData.edl[0].locataire_sortant[0].nom[0];
                    this.detail.loc_nom = this.detail.loc_nomcomplet;
                    this.detail.loc_portable = rawData.edl[0].locataire_sortant[0].telephone[0];
                    this.detail.date_entree_locataire = rawData.edl[0].locataire_sortant[0].date_entree[0];
                    if (this.detail.date_entree_locataire != '') {
                        this.detail.date_entree_locataire = this.detail.date_entree_locataire.split('-').reverse().join('-');
                    }
                }
                else {
                    if (typeof rawData.edl[0].locataire_entrant[0] !== 'undefined') {
                        this.detail.loc_nomcomplet = rawData.edl[0].locataire_entrant[0].nom[0];
                        this.detail.loc_nom = this.detail.loc_nomcomplet;
                        this.detail.loc_portable = rawData.edl[0].locataire_entrant[0].telephone[0];
                    }
                    if (typeof rawData.edl[0].locataire_sortant[0] !== 'undefined') {
                        this.detail.exloc_nomcomplet = rawData.edl[0].locataire_sortant[0].nom[0];
                        this.detail.exloc_nom = this.detail.exloc_nomcomplet;
                        this.detail.exloc_portable = rawData.edl[0].locataire_sortant[0].telephone[0];
                        this.detail.date_entree_locataire = rawData.edl[0].locataire_sortant[0].date_entree[0];
                        if (this.detail.date_entree_locataire != '') {
                            this.detail.date_entree_locataire = this.detail.date_entree_locataire.split('-').reverse().join('-');
                        }
                    }
                }
            }
            if (typeof rawData.bien[0].lots[0].lot !== 'undefined') {
                for (var i = 0; i < rawData.bien[0].lots[0].lot.length; i++) {
                    var label = rawData.bien[0].lots[0].lot[i].libelle[0].toLowerCase();
                    var value = rawData.bien[0].lots[0].lot[i].code[0];
                    switch (label) {
                        case 'bien':
                            this.detail.bien_numlot = value;
                            break;
                        case 'cave':
                            this.detail.bien_cave = value;
                            break;
                        case 'garage':
                            this.detail.bien_garage = value;
                            break;
                        case 'parking':
                            this.detail.bien_parking = value;
                            break;
                    }
                }
            }
        }
        this.missionDataProvider.load(this.detail.uid, 'missionDetail').then(function (data) {
            if (data.status != 'empty') {
                var missionId = _this.detail.uid;
                _this.detail = data.data;
                _this.detail.uid = missionId;
            }
        });
    }
    DetailMissionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailMissionPage');
        this.numberPieceR = this.navParams.get('numberPiece');
        if (typeof this.numberPieceR === 'undefined')
            this.getNumberPieces(this.navParams.data.uid);
        if (typeof this.numberPieceR !== 'undefined')
            this.numberPiece = this.numberPieceR;
    };
    DetailMissionPage.prototype.prev = function () {
        var _this = this;
        this.detail.loc_nomcomplet = this.detail.loc_nom + ' ' + this.detail.loc_prenom;
        if (this.detail.exloc_nom != '') {
            this.detail.exloc_nomcomplet = this.detail.exloc_nom + ' ' + this.detail.exloc_prenom;
        }
        this.missionDataProvider.save(this.detail.uid, 'missionDetail', this.detail, 'pending');
        this.navCtrl.push(HomePage, { nummission: this.detail.uid }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    DetailMissionPage.prototype.next = function () {
        var _this = this;
        if (this.detail.date_entree_locataire == '') {
            this.alertCtrl.create({
                title: 'La date d\'entrée du locataire doit être définie',
                buttons: [
                    {
                        text: 'OK',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel btn pressed!');
                        }
                    }
                ]
            }).present();
        }
        else if (this.detail.loc_nom == '') {
            this.alertCtrl.create({
                title: 'Le nom du locataire doit être renseigné',
                buttons: [
                    {
                        text: 'OK',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel btn pressed!');
                        }
                    }
                ]
            }).present();
        }
        else {
            this.detail.loc_nomcomplet = this.detail.loc_nom + ' ' + this.detail.loc_prenom;
            if (this.detail.exloc_nom != '') {
                this.detail.exloc_nomcomplet = this.detail.exloc_nom + ' ' + this.detail.exloc_prenom;
            }
            this.missionDataProvider.save(this.detail.uid, 'missionDetail', this.detail, 'pending');
            this.navCtrl.push(ReleveCompteursPage, { nummission: this.detail.uid, numberPiece: this.numberPiece,
                compters: this.compters }).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
        }
    };
    DetailMissionPage.prototype.getNumberPieces = function (nummission) {
        var _this = this;
        this.wsPanoProvider.countAllPieces(nummission)
            .then(function (data) {
            _this.numberPiece = data;
        });
    };
    DetailMissionPage.prototype.goToListPieces = function () {
        var _this = this;
        this.navCtrl.push(ListePiecesPage, { nummission: this.navParams.data.uid }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    DetailMissionPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-detail-mission',
            templateUrl: 'detail-mission.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            MissionDataProvider,
            AlertController,
            WsPanoProvider])
    ], DetailMissionPage);
    return DetailMissionPage;
}());
export { DetailMissionPage };
//# sourceMappingURL=detail-mission.js.map