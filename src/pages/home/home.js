var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { HTTP } from '@ionic-native/http';
import xml2js from 'xml2js';
import axios from 'axios';
import * as Promise from 'bluebird';
import { flatten, map } from 'lodash';
import { DetailMissionPage } from '../detail-mission/detail-mission';
import { SignaturePage } from '../signature/signature';
// Provider global
import { MissionDataProvider } from '../../providers/mission-data/mission-data';
// Providers
import { LoginPage } from '../login/login';
import { WsMissionProvider } from '../../providers/ws-mission/ws-mission';
var VENTE_CMCIC_URL = "https://abcimmoservi.sogexpert.com/synchro_logiciel?action=";
var LOCATION_NATIONALE_URL = "https://location.sogexpert.com/synchro_logiciel?action=";
var GESTION_LOCATION_CMCIC_URL = "https://abcimmodiag.sogexpert.com/synchro_logiciel?action=";
var MEDIALIBS_URL = "https://medialibs.sogexpert.com/synchro_logiciel?action=";
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, wsMissionProvider, loadingCtrl, alertCtrl, missionDataProvider, toastCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.wsMissionProvider = wsMissionProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.missionDataProvider = missionDataProvider;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.token = "AOBPHCANOFNO56169";
        this.action = "get_dossiers";
        this.search = "";
        this.table = [];
        this.temp = [];
        this.messages = {
            emptyMessage: "\n      <div>\n        <span class=\"emptymsg\">Aucune mission. Veuillez utiliser l'action \"SYNCHRONISER\" pour mettre \u00E0 jour l'application.</span>\n      </div>\n    "
        };
        this.todayDate = new Date().toLocaleDateString("fr-US");
        setTimeout(function () {
            _this.missionDataProvider.lsGetItem('technicienConnected')
                .then(function (data) {
                _this.technicienConnected = data;
                _this.temp = _this.table;
                _this.missionDataProvider.lsGetItem('isOnline')
                    .then(function (connected) {
                    console.log('get stored missions');
                    _this.pushOffLine().then(function () {
                        if (connected) {
                            console.log('update and get missions');
                            _this.getMissions().then(function (missions) {
                                setTimeout(function () {
                                    _this.pushOffLine();
                                }, 2000);
                            });
                        }
                    });
                });
            });
        }, 1500);
    }
    HomePage.prototype.updateFilter = function (event) {
        var val = event.toLowerCase();
        // filter our data
        this.table = this.temp.filter(function (d) {
            if (val === '') {
                return true;
            }
            // Vérification sur l'agence
            if (d.agence.toLowerCase().indexOf(val) !== -1) {
                return true;
            }
            // Vérification sur le numéro de mission
            if (d.nummission.toLowerCase().indexOf(val) !== -1) {
                return true;
            }
            // Vérification sur le type de mission
            if (d.typemission.toLowerCase().indexOf(val) !== -1) {
                return true;
            }
            // Vérification sur le propriétaire
            if (d.proprietaire.toLowerCase().indexOf(val) !== -1) {
                return true;
            }
            // Vérification sur le locataire
            if (d.locataire.toLowerCase().indexOf(val) !== -1) {
                return true;
            }
            // Vérification sur la ville
            if (d.ville.toLowerCase().indexOf(val) !== -1) {
                return true;
            }
            return false;
        });
    };
    HomePage.prototype.onUserEvent = function (e) {
        var _this = this;
        if (e.type == 'click') {
            if (e.row.etat == 'synchronized' || e.row.etat == 'Intervenu') {
                var alert_1 = this.alertCtrl.create({
                    title: 'Cette mission a déjà été réalisée',
                    buttons: ['Ok']
                });
                alert_1.present();
            }
            else if (e.row.etat == 'pending') {
                console.log(e.row);
                var alert_2 = this.alertCtrl.create({
                    title: 'Cette mission est en cours de réalisation',
                    message: 'Quelle action souhaitez-vous effectuer ?',
                    buttons: [
                        {
                            text: 'Continuer la mission',
                            handler: function () {
                                _this.navCtrl.push(DetailMissionPage, e.row).then(function () {
                                    _this.navCtrl.removeView(_this.navCtrl.getPrevious());
                                });
                            }
                        },
                        {
                            text: 'Signer la mission',
                            handler: function () {
                                _this.navCtrl.push(SignaturePage, { nummission: e.row.uid }).then(function () {
                                    _this.navCtrl.removeView(_this.navCtrl.getPrevious());
                                });
                            }
                        },
                        {
                            text: 'Forcer la synchronisation de la mission',
                            handler: function () {
                                _this.missionDataProvider.save(e.row.uid, 'signature', { 'empty': true }, 'pending');
                                _this.synchroniser();
                            }
                        },
                        {
                            text: 'Supprimer les données de la mission',
                            handler: function () {
                                _this.alertCtrl.create({
                                    title: 'Etes-vous sûr de vouloir supprimer les données de cette mission ?',
                                    buttons: [
                                        {
                                            text: 'Oui',
                                            handler: function () {
                                                _this.missionDataProvider.deleteAll(e.row.uid).then(function () {
                                                    _this.pushOffLine();
                                                });
                                            }
                                        },
                                        {
                                            text: 'Non',
                                            handler: function () {
                                            }
                                        }
                                    ]
                                }).present();
                            }
                        }
                    ]
                });
                alert_2.present();
            }
            else {
                this.navCtrl.push(DetailMissionPage, e.row).then(function () {
                    _this.navCtrl.removeView(_this.navCtrl.getPrevious());
                });
            }
        }
    };
    HomePage.prototype.disconnect = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Déconnexion'
        });
        this.loading.present();
        this.missionDataProvider.lsRemove('technicienConnected')
            .then(function () {
            _this.missionDataProvider.lsRemove('session')
                .then(function () {
                _this.loading.dismiss();
                _this.navCtrl.setRoot(LoginPage).then(function () {
                    _this.navCtrl.removeView(_this.navCtrl.getPrevious());
                });
            });
        });
    };
    HomePage.prototype.presentToast = function (message) {
        this.updateLoading(message);
        this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'bottom'
        }).present();
    };
    HomePage.prototype.updateLoading = function (message) {
        if (typeof this.loading == 'undefined' || typeof this.loading.data == 'undefined' || typeof this.loading.data.content == 'undefined') {
            return null;
        }
        this.loading.data.content = 'Synchronisation en cours. Selon la qualité de votre connexion internet, cette étape peut prendre plusieurs minutes.<br /><br />' + message;
    };
    HomePage.prototype.synchroniser = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Synchronisation en cours. Selon la qualité de votre connexion internet, cette étape peut prendre plusieurs minutes.'
        });
        this.loading.present();
        this.http.setDataSerializer('json');
        this.missionDataProvider.lsGetItem('isOnline').then(function (connected) {
            if (connected) {
                _this.presentToast('Début de synchronisation des missions');
                _this.getMissions().then(function () {
                    console.log('Récupération des missions dans la base');
                    _this.synchroniserMission().then(function () {
                        _this.presentToast('Suppression des anciennes missions en cours');
                        _this.wsMissionProvider.purgeOldMissions().then(function () {
                            console.log('suppression des missions ok');
                            _this.presentToast('Suppression des anciennes missions réalisée');
                            _this.pushOffLine().then(function () {
                                console.log('mise à jour des missions');
                                _this.presentToast('Actualisation de la liste des missions');
                                _this.loading.dismiss();
                            });
                        });
                    });
                });
            }
            else {
                _this.loading.dismiss();
                var alert_3 = _this.alertCtrl.create({
                    title: 'Aucune connexion internet n\'a été détéctée',
                    subTitle: 'Après vérification de votre connexion internet, veuillez utiliser l\'une des actions suivantes :',
                    buttons: [
                        {
                            text: 'Ma tablette est bien connectée à internet, lancer la synchronisation',
                            handler: function () {
                                _this.missionDataProvider.lsSetItem('isOnline', true).then(function () {
                                    _this.synchroniser();
                                });
                            }
                        },
                        {
                            text: 'Synchroniser plus tard',
                            handler: function () {
                                console.log('Synchroniser plus tard');
                            }
                        }
                    ]
                });
                alert_3.present();
            }
        });
    };
    HomePage.prototype.synchroniserMission = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.wsMissionProvider.getAllMissions(true).then(function (missions) {
                if (missions.length === 0) {
                    return resolve();
                }
                var nbMissionToSync = 0;
                var _loop_1 = function (i) {
                    var mission = missions[i];
                    if (mission.complete == 1 && mission.nbDataToSync > 0) {
                        nbMissionToSync++;
                        _this.presentToast('Synchronisation de la mission n° ' + mission.nummission + ' en cours');
                        var serviceData = { mission_num: mission.nummission,
                            serviceSource: mission.serviceSource,
                            screen: 'missionRawData',
                            technicien: mission.raw_data.technicien[0].id[0],
                            data: JSON.stringify(mission.raw_data),
                            nbLines: 0 };
                        _this.http.post("http://application.abc-immoservices.fr/post-edl", serviceData, { 'Content-Type': 'application/json' })
                            .then(function (data) {
                            console.log('début synchro écran');
                            _this.syncMissionData(mission).then(function () {
                                _this.presentToast('Mise à jour de la liste des missions encours');
                                return resolve(_this.synchroniserMission());
                            });
                        })
                            .catch(function (error) {
                            console.log('Transmission des données de la mission : ko');
                            return resolve(_this.synchroniserMission());
                        });
                        return { value: null };
                    }
                };
                for (var i = 0; i < missions.length; i++) {
                    var state_1 = _loop_1(i);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
                console.log(nbMissionToSync + ' mission(s) à synchroniser');
                if (nbMissionToSync === 0) {
                    return resolve();
                }
            });
        });
    };
    HomePage.prototype.syncMissionData = function (mission) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.missionDataProvider.getAllByMissionId(mission.uid, 'pending').then(function (missionData) {
                if (missionData === false) {
                    return resolve();
                }
                _this.presentToast('Transmission des données de l\'écran "' + missionData[0].screen + '" de la mission n° ' + mission.nummission + ' en cours');
                return _this.http.post("http://application.abc-immoservices.fr/post-edl", { mission_num: mission.nummission,
                    serviceSource: mission.serviceSource,
                    screen: missionData[0].screen.replace('salle-', 'salle-' + missionData[0].id.toString().padStart(5, '0')),
                    technicien: mission.raw_data.technicien[0].id[0],
                    data: missionData[0].data,
                    nbLines: missionData[0].nbLines,
                    orderby: missionData[0].id }, { 'Content-Type': 'application/json' })
                    .then(function (data) {
                    var jsonOutput = JSON.parse(data.data);
                    console.log('Transmission des données de l\'écran ' + missionData[0].screen, jsonOutput);
                    if (jsonOutput.error === false) {
                        return _this.missionDataProvider.updateStatus(missionData[0].id, 'synchronized').then(function () {
                            return resolve(_this.syncMissionData(mission));
                        });
                    }
                    else {
                        return resolve(_this.syncMissionData(mission));
                    }
                })
                    .catch(function (error) {
                    console.log('Impossible de transmettre les données au webservice', error);
                    return resolve();
                });
            });
        });
    };
    HomePage.prototype.getMissions = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.missionDataProvider.lsGetItem('succeededPlateforms')
                .then(function (platforms) {
                return Promise.map(platforms, function (p) {
                    switch (p.plateformeCode) {
                        case '6SYFF': return _this.missionsFromVenteCMCIC(p.technicien.id);
                        case '3CF81': return _this.missionsFromLocationNationale(p.technicien.id);
                        case 'CMCIC': return _this.missionsFromLocationCMCIC(p.technicien.id);
                        case 'MEDIALIBS': return _this.missionsFromMediaLibs(p.technicien.id);
                        default: break;
                    }
                });
            })
                .then(function (missions) {
                missions = flatten(missions);
                missions.forEach(function (mission) {
                    var isEnabled = false;
                    mission.raw_data.edl_entree = false;
                    mission.raw_data.edl_sortie = false;
                    for (var i = 0; i < mission.raw_data.diagnostics[0].diagnostic.length; i++) {
                        if (mission.raw_data.diagnostics[0].diagnostic[i].libelle[0].toLowerCase().indexOf('etats des lieux') != -1) {
                            isEnabled = true;
                            if (!mission.raw_data.edl_entree) {
                                mission.raw_data.edl_entree = mission.raw_data.diagnostics[0].diagnostic[i].libelle[0].toLowerCase().indexOf('entrée') != -1;
                            }
                            if (!mission.raw_data.edl_sortie) {
                                mission.raw_data.edl_sortie = mission.raw_data.diagnostics[0].diagnostic[i].libelle[0].toLowerCase().indexOf('sortie') != -1;
                            }
                        }
                    }
                    if (isEnabled) {
                        _this.wsMissionProvider.updateMission(mission);
                    }
                });
                resolve(missions);
            });
        });
    };
    HomePage.prototype.missionsFromVenteCMCIC = function (technicienId) {
        return this.getMissionsFrom(VENTE_CMCIC_URL + this.action + "&token=" + this.token + "&technicien_id=" + technicienId + "&noCorbeille=1&noArchive=1", 'Vente CMCIC', '6SYFF');
    };
    HomePage.prototype.missionsFromLocationNationale = function (technicienId) {
        return this.getMissionsFrom(LOCATION_NATIONALE_URL + this.action + "&token=" + this.token + "&technicien_id=" + technicienId + "&noCorbeille=1&noArchive=1", 'Location ABC', '3CF81');
    };
    HomePage.prototype.missionsFromLocationCMCIC = function (technicienId) {
        return this.getMissionsFrom(GESTION_LOCATION_CMCIC_URL + this.action + "&token=" + this.token + "&technicien_id=" + technicienId + "&noCorbeille=1&noArchive=1", 'Location CMCIC', 'CMCIC');
    };
    HomePage.prototype.missionsFromMediaLibs = function (technicienId) {
        return this.getMissionsFrom(MEDIALIBS_URL + this.action + "&token=" + this.token + "&technicien_id=" + technicienId + "&noCorbeille=1&noArchive=1", 'Pré-production', 'MEDIALIBS');
    };
    HomePage.prototype.getMissionsFrom = function (url, plateformeName, plateformeCode) {
        var self = this;
        var todayDate = new Date();
        var last5DaysDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() - 5, 0, 0);
        url += "&date_debut=" + last5DaysDate.getFullYear() + '-' + ("0" + (last5DaysDate.getMonth() + 1)).slice(-2) + '-' + ("0" + last5DaysDate.getDate()).slice(-2);
        var next5DaysDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 7, 23, 59);
        url += "&date_fin=" + next5DaysDate.getFullYear() + '-' + ("0" + (next5DaysDate.getMonth() + 1)).slice(-2) + '-' + ("0" + next5DaysDate.getDate()).slice(-2);
        console.log("--- Getting mission from " + plateformeName + "---", url);
        return new Promise(function (resolve, reject) {
            axios.get(url, {})
                .then(function (response) {
                self.parseXML(response.data, url)
                    .then(function (missions) {
                    return resolve(missions);
                });
            })
                .catch(function (error) {
                console.error(error);
                return reject(error);
            });
        });
    };
    HomePage.prototype.exportDbData = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Export des données en cours.'
        });
        this.loading.present();
        this.wsMissionProvider.exportDbData().then(function () {
            _this.loading.dismiss();
        }).catch(function () {
            _this.loading.dismiss();
        });
    };
    HomePage.prototype.parseXML = function (data, url) {
        return new Promise(function (resolve) {
            var parser = new xml2js.Parser({
                trim: true,
                explicitArray: true
            });
            parser.parseString(data, function (err, result) {
                var parsedData = result;
                if (parsedData.dossiers.erreur) {
                    return resolve([]);
                }
                var dossiers = parsedData.dossiers.dossier;
                var results = map(dossiers, function (elt) {
                    var mission = {
                        serviceSource: url,
                        proprietaire: elt.proprietaire[0].nom[0],
                        nummission: (1000 + parseInt(elt.id[0])).toString(),
                        datemission: elt.rdv[0].date_debut[0] + ' ' + elt.rdv[0].heure_debut[0],
                        typemission: elt.diagnostics[0].diagnostic[0].libelle[0],
                        agence: elt.prescripteur[0].nom_complet[0],
                        ville: elt.bien[0].ville[0],
                        etat: elt.statut[0],
                        edletat: elt.diagnostics[0].diagnostic[0].libelle[0],
                        date_actuel: new Date().toLocaleDateString("fr-US"),
                        date_aquisition: elt.bien[0].date_acquisition[0],
                        societe: elt.societe[0],
                        bien_adresse: elt.bien[0].adresse_complete[0],
                        bien_residence: '',
                        bien_type: elt.bien[0].type[0],
                        bien_bat: elt.bien[0].batiment[0],
                        bien_esc: '',
                        bien_cave: '',
                        bien_complement: elt.bien[0].complement_adresse[0],
                        bien_ville: elt.bien[0].ville[0],
                        bien_etage: elt.bien[0].etage[0],
                        bien_box: '',
                        bien_parking: '',
                        bien_garage: '',
                        locataire: elt.occupant_bien[0].nom_complet[0],
                        loc_nom: elt.occupant_bien[0].nom[0],
                        loc_prenom: elt.occupant_bien[0].prenom[0],
                        loc_adresse: elt.occupant_bien[0].adresse_complete[0],
                        loc_ville: elt.occupant_bien[0].ville[0],
                        loc_departement: elt.occupant_bien[0].ville[0],
                        loc_portable: elt.occupant_bien[0].ville[0],
                        loc_telephone: elt.occupant_bien[0].ville[0],
                        loc_email: elt.occupant_bien[0].email[0],
                        exloc_nom: '',
                        exloc_prenom: '',
                        exloc_adresse: '',
                        exloc_ville: '',
                        exloc_departement: '',
                        exloc_portable: '',
                        exloc_telephone: '',
                        exloc_email: '',
                        raw_data: elt
                    };
                    return mission;
                });
                return resolve(results);
            });
        });
    };
    HomePage.prototype.pushOffLine = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.wsMissionProvider.getAllMissions(false)
                .then(function (missions) {
                Promise.map(missions, function (elt) {
                    var rawData = elt.raw_data;
                    var dateParts = rawData.rdv[0].date_debut[0].split("-");
                    var missionDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0], 23, 59);
                    var todayDate = new Date();
                    var next4DaysDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() + 7, 23, 59);
                    if (missionDate > next4DaysDate) {
                        return null;
                    }
                    var missionEtat = rawData.statut[0];
                    if (elt.complete == 1) {
                        if (elt.nbDataToSync > 0) {
                            missionEtat = 'tosync';
                        }
                        else {
                            missionEtat = 'synchronized';
                        }
                    }
                    else if (elt.nbData > 0) {
                        missionEtat = 'pending';
                    }
                    var missionType = '';
                    if (rawData.edl_entree && rawData.edl_sortie) {
                        missionType = 'Etat des lieux d\'entrée / sortie';
                    }
                    else if (rawData.edl_entree) {
                        missionType = 'Etat des lieux d\'entrée';
                    }
                    else {
                        missionType = 'Etat des lieux de sortie';
                    }
                    var mission = {
                        uid: elt.id,
                        serviceSource: elt.serviceSource,
                        nbData: elt.nbData,
                        nbDataToSync: elt.nbDataToSync,
                        complete: elt.complete,
                        proprietaire: rawData.proprietaire[0].nom[0],
                        nummission: (1000 + parseInt(rawData.id[0])).toString(),
                        datemission: rawData.rdv[0].date_debut[0].split('-').reverse().join('-') + ' ' + rawData.rdv[0].heure_debut[0],
                        typemission: missionType,
                        agence: rawData.prescripteur[0].nom_complet[0],
                        ville: rawData.bien[0].ville[0],
                        etat: missionEtat,
                        edletat: rawData.diagnostics[0].diagnostic[0].libelle[0],
                        date_actuel: new Date().toLocaleDateString("fr-US"),
                        date_aquisition: rawData.bien[0].date_acquisition[0],
                        societe: rawData.societe[0],
                        bien_adresse: rawData.bien[0].adresse_complete[0],
                        bien_residence: '',
                        bien_type: rawData.bien[0].type[0],
                        bien_bat: rawData.bien[0].batiment[0],
                        bien_esc: '',
                        bien_cave: '',
                        bien_complement: rawData.bien[0].complement_adresse[0],
                        bien_ville: rawData.bien[0].ville[0],
                        bien_etage: rawData.bien[0].etage[0],
                        bien_box: '',
                        bien_parking: '',
                        bien_garage: '',
                        locataire: rawData.occupant_bien[0].nom_complet[0],
                        loc_nom: rawData.occupant_bien[0].nom[0],
                        loc_prenom: rawData.occupant_bien[0].prenom[0],
                        loc_adresse: rawData.occupant_bien[0].adresse_complete[0],
                        loc_ville: rawData.occupant_bien[0].ville[0],
                        loc_departement: rawData.occupant_bien[0].ville[0],
                        loc_portable: rawData.occupant_bien[0].ville[0],
                        loc_telephone: rawData.occupant_bien[0].ville[0],
                        loc_email: rawData.occupant_bien[0].email[0],
                        exloc_nom: '',
                        exloc_prenom: '',
                        exloc_adresse: '',
                        exloc_ville: '',
                        exloc_departement: '',
                        exloc_portable: '',
                        exloc_telephone: '',
                        exloc_email: '',
                        raw_data: rawData
                    };
                    _this.table.push(mission);
                    return mission;
                })
                    .then(function (posts) {
                    _this.table = _this.prepareUniqMission(posts);
                    _this.temp = _this.table;
                    resolve(posts);
                });
            });
        });
    };
    HomePage.prototype.prepareUniqMission = function (missions) {
        var uniqMissions = [];
        var existingIds = [];
        for (var i = 0; i < missions.length; i++) {
            if (missions[i] !== null) {
                var serviceSource = missions[i].serviceSource;
                if (serviceSource.indexOf('://') != -1) {
                    serviceSource = new URL(missions[i].serviceSource).host;
                }
                var id = missions[i].nummission + '-' + serviceSource;
                if (existingIds.indexOf(id) == -1 || missions[i].nbData > 0) {
                    uniqMissions.push(missions[i]);
                }
                existingIds.push(id);
            }
        }
        return uniqMissions;
    };
    __decorate([
        ViewChild(DatatableComponent),
        __metadata("design:type", DatatableComponent)
    ], HomePage.prototype, "tab", void 0);
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController,
            WsMissionProvider,
            LoadingController,
            AlertController,
            MissionDataProvider,
            ToastController,
            HTTP])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map