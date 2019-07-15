var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ImmodiagProvider } from '../../providers/immodiag/immodiag';
import { Camera } from '@ionic-native/camera';
import { CameraImageProvider } from '../../providers/camera-image/camera-image';
import { PanoData } from '../../models/pano-data.model';
import { ResumeEdlPage } from '../resume-edl/resume-edl';
import { PrendrePhotoPage } from '../prendre-photo/prendre-photo';
import { PanoDataProvider } from '../../providers/pano-data/pano-data';
import { SalleDataProvider } from '../../providers/salle-data/salle-data';
// Provider global
import { MissionDataProvider } from '../../providers/mission-data/mission-data';
import { ListePiecesPage } from '../liste-pieces/liste-pieces';
var SelectionDefautPage = /** @class */ (function () {
    function SelectionDefautPage(navCtrl, navParams, alertCtrl, immodiagProvider, cameraImageProvider, panoDataProvider, salleDataProvider, missionDataProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.immodiagProvider = immodiagProvider;
        this.cameraImageProvider = cameraImageProvider;
        this.panoDataProvider = panoDataProvider;
        this.salleDataProvider = salleDataProvider;
        this.missionDataProvider = missionDataProvider;
        this.isEdit = false;
        this.counter = 0;
        this.label = {
            equipement: "Equipement",
            nature: "Nature",
            couleur: "Couleur",
            etatUsure: "Etat d'usure",
            details: "Détails",
            defaut: "Défaut",
            etatDeFonctionnement: "Etat de fonctionnement",
            etatDeProprete: "Etat de propreté"
        };
        this.multipleCrits = ['nature', 'couleur', 'defaut'];
        this.image1 = "../../assets/imgs/add_photo.png";
        this.image2 = "../../assets/imgs/add_photo.png";
        this.currentTypeLabel = '';
        this.observation = '';
        this.idDefaut = 0;
        this.currentDefautValide = true;
        this.salleData = {
            nummission: 0,
            imgPano: '',
            nomPiece: '',
            typePiece: '',
            dataPanoArr: [],
            etatPiece: '',
            propretePiece: '',
            markers: [],
            items: []
        };
        this.compters = this.navParams.get('compters');
        this.camera = new Camera();
        this.cameraOptions = this.cameraImageProvider.options;
        this.dataPanoArr = [];
        this.markers = [];
        this.imgPano = panoDataProvider.getImagePano();
        this.salle = salleDataProvider.getSalleData();
        this.nomPiece = salleDataProvider.getNomPiece();
        this.numberPiece = this.navParams.get('numberPiece');
        this.salleData.nummission = this.navParams.get("nummission");
        this.salleData.imgPano = this.imgPano;
        this.salleData.typePiece = this.salle.name;
        this.salleData.nomPiece = this.nomPiece;
        switch (this.salleData.typePiece) {
            case "Pièce sèche":
                this.items = immodiagProvider.getPieceSeche();
                break;
            case "Cuisine":
                this.items = immodiagProvider.getCuisine();
                break;
            case "Salles de bains-WC":
                this.items = immodiagProvider.getSalleDeBainWc();
                break;
            case "Cave-Parking":
                this.items = immodiagProvider.getCaveParking();
                break;
            case "Jardin-Extérieur":
                this.items = immodiagProvider.getJardinExterieur();
                break;
            default:
                this.goToSalle();
                break;
        }
        this.missionDataProvider.load(this.salleData.nummission, 'salle-' + this.salleData.typePiece + this.salleData.nomPiece)
            .then(function (data) {
            var hotSpots = [];
            if (data.status != 'empty') {
                if (data.data.imgPano) {
                    _this.imgPano = data.data.imgPano;
                    _this.salleData.imgPano = data.data.imgPano;
                    _this.panoDataProvider.setImagePano(_this.imgPano);
                }
                _this.items = data.data.items;
                _this.markers = data.data.markers;
                _this.dataPanoArr = data.data.dataPanoArr;
                _this.etatPiece = data.data.etatPiece;
                _this.propretePiece = data.data.propretePiece;
                for (var i = 0; i < _this.dataPanoArr.length; i++) {
                    hotSpots.push({
                        id: 'hs' + _this.dataPanoArr[i].idDefaut,
                        pitch: _this.dataPanoArr[i].pitch,
                        yaw: _this.dataPanoArr[i].yaw,
                        type: "info",
                        cssClass: "circleMarker",
                        createTooltipFunc: _this.hotspotMaker,
                        createTooltipArgs: _this.dataPanoArr[i].idDefaut,
                        clickHandlerFunc: function (event, index) {
                            _this.editDefault(index);
                        },
                        clickHandlerArgs: i + 1
                    });
                    _this.counter++;
                }
            }
            _this.loadPannellum(hotSpots);
        });
        this.init();
        // Patch FileReader
        if (!window.FileReader.prototype.addEventListener) {
            window.FileReader.prototype.addEventListener = function (type, listener) {
                if (type === 'loadend') {
                    this.onloadend = listener;
                }
            };
        }
        this.btnClicked = false;
    }
    SelectionDefautPage.prototype.loadPannellum = function (hotSpots) {
        var binaryStringData = this.imgPano.substring(this.imgPano.indexOf(',') + 1, this.imgPano.length);
        var binaryString = window.atob(binaryStringData);
        var binaryLen = binaryString.length;
        var fileContent = new Uint8Array(binaryLen);
        for (var i = 0; i < binaryLen; i++) {
            var ascii = binaryString.charCodeAt(i);
            fileContent[i] = ascii;
        }
        var blob = new Blob([fileContent], { type: 'application/octet-stream' });
        var fileURL = window.URL.createObjectURL(blob);
        this.viewer = pannellum.viewer('selectionDefaut', {
            "type": "equirectangular",
            "panorama": fileURL,
            "autoLoad": true,
            "hotSpots": hotSpots
        });
    };
    SelectionDefautPage.prototype.ionViewDidLoad = function () {
        this.typeAction = this.navParams.get('typeAction');
        if (typeof this.typeAction == 'undefined')
            this.stateInsert = 0;
        if (this.typeAction === 'update')
            this.stateInsert = 1;
    };
    SelectionDefautPage.prototype.init = function () {
        var _this = this;
        this.image1 = "../../assets/imgs/add_photo.png";
        this.image2 = "../../assets/imgs/add_photo.png";
        this.bgIsWhite = false;
        this.description = [];
        this.displayedDescription = 'Veuillez sélectionner un équipement pour commencer à qualifier le défaut';
        this.observation = '';
        this.idDefaut = 0;
        this.mapEquipement = {};
        this.types = [];
        this.types.push({ id: 0, name: this.label.equipement, typeEnfant: [], selected: false });
        var index = 0;
        this.items.donnees.forEach(function (element) {
            _this.mapEquipement[element.equipement] = index;
            _this.types[0].typeEnfant.push({ id: index, parentId: 0, name: element.equipement, selected: false });
            index++;
        });
    };
    SelectionDefautPage.prototype.putMarker = function (event) {
        var _this = this;
        this.stateInsert = 0;
        if (this.currentDefautValide) {
            this.isEdit = false;
            this.currentDefautValide = false;
            var arr = this.fromEventToCoords(event);
            this.currentHotSpotId = 'hs' + this.counter;
            this.viewer.addHotSpot({
                id: this.currentHotSpotId,
                pitch: arr[0],
                yaw: arr[1],
                type: "info",
                cssClass: "circleMarker",
                createTooltipFunc: this.hotspotMaker,
                createTooltipArgs: this.counter += 1,
                clickHandlerFunc: function (event, index) {
                    _this.editDefault(index);
                },
                clickHandlerArgs: this.counter
            });
            this.markers.push({
                id: this.counter,
                pitch: arr[0],
                yaw: arr[1]
            });
            var dataPanoElt = new PanoData();
            dataPanoElt.idSalle = this.salle.id;
            dataPanoElt.idDefaut = this.counter;
            dataPanoElt.pitch = arr[0];
            dataPanoElt.yaw = arr[1];
            pannellum.pouf = dataPanoElt;
            this.showFields = true;
            setTimeout(function () {
                _this.viewer.resize();
            }, 500);
        }
        else {
            this.viewer.removeHotSpot(this.currentHotSpotId);
            this.markers.pop();
            var arr = this.fromEventToCoords(event);
            this.viewer.addHotSpot({
                id: this.currentHotSpotId,
                pitch: arr[0],
                yaw: arr[1],
                type: "info",
                cssClass: "circleMarker",
                createTooltipFunc: this.hotspotMaker,
                createTooltipArgs: this.counter,
                clickHandlerFunc: function (event, index) {
                    _this.editDefault(index);
                },
                clickHandlerArgs: this.counter,
            });
            this.markers.push({
                id: this.counter,
                pitch: arr[0],
                yaw: arr[1]
            });
            pannellum.pouf.pitch = arr[0];
            pannellum.pouf.yaw = arr[0];
        }
    };
    SelectionDefautPage.prototype.hotspotMaker = function (hotSpotDiv, args) {
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
    SelectionDefautPage.prototype.goBack = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Etes-vous sûr de vouloir faire une nouvelle prise de vue 360° ?',
            message: 'Attention, les défauts en cours ne seront pas enregistrés.',
            buttons: [
                {
                    text: 'Non',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel btn pressed!');
                    }
                },
                {
                    text: 'Oui',
                    handler: function () {
                        _this.navCtrl.push(PrendrePhotoPage, { nummission: _this.salleData.nummission, compters: _this.compters }).then(function () {
                            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SelectionDefautPage.prototype.goToResume = function () {
        var _this = this;
        if (typeof this.etatPiece == 'undefined') {
            this.alertCtrl.create({
                title: 'L\'état général de la pièce doit être défini',
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
        else if (typeof this.propretePiece == 'undefined') {
            this.alertCtrl.create({
                title: 'L\'état de propreté de la pièce doit être défini',
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
            this.panoDataProvider.setDataPanoArr(this.dataPanoArr);
            this.panoDataProvider.setMarkers(this.markers);
            this.salleDataProvider.setPropretePiece(this.propretePiece);
            this.salleDataProvider.setEtatPiece(this.etatPiece);
            this.salleData.items = this.items;
            this.salleData.markers = this.markers;
            this.salleData.dataPanoArr = this.dataPanoArr;
            this.salleData.propretePiece = this.propretePiece;
            this.salleData.etatPiece = this.etatPiece;
            this.missionDataProvider.save(this.salleData.nummission, 'salle-' + this.salleData.typePiece + this.salleData.nomPiece, this.salleData, 'pending');
            this.stateInsert = 1;
            setTimeout(function () {
                if (_this.typeAction === 'update') {
                    _this.navCtrl.push(ListePiecesPage, { nummission: _this.salleData.nummission, compters: _this.compters }).then(function () {
                        _this.navCtrl.removeView(_this.navCtrl.getPrevious());
                    });
                }
            }, 2000);
            if (typeof this.typeAction == 'undefined') {
                this.navCtrl.push(ResumeEdlPage, { nummission: this.salleData.nummission, compters: this.compters }).then(function () {
                    _this.navCtrl.removeView(_this.navCtrl.getPrevious());
                });
            }
        }
    };
    SelectionDefautPage.prototype.editDefault = function (index) {
        var _this = this;
        this.isEdit = true;
        pannellum.pouf = this.dataPanoArr[index - 1];
        this.image1 = pannellum.pouf.image1;
        this.image2 = pannellum.pouf.image2;
        this.description = pannellum.pouf.description;
        this.displayedDescription = pannellum.pouf.displayedDescription;
        this.observation = pannellum.pouf.observation;
        this.bgIsWhite = true;
        this.idDefaut = index;
        this.mapEquipement = {};
        this.types = [];
        this.types.push({ id: 0, name: this.label.equipement, typeEnfant: [], selected: false });
        var i = 0;
        this.items.donnees.forEach(function (element) {
            _this.mapEquipement[element.equipement] = i;
            _this.types[0].typeEnfant.push({ id: i, parentId: 0, name: element.equipement, selected: false });
            i++;
        });
        this.btnClicked = true;
        this.currentDefautValide = false;
        this.showFields = true;
        setTimeout(function () {
            _this.viewer.resize();
        }, 500);
    };
    SelectionDefautPage.prototype.deleteDefault = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Etes-vous sûr de vouloir supprimer ce défaut ?',
            buttons: [
                {
                    text: 'Non',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel btn pressed!');
                    }
                },
                {
                    text: 'Oui',
                    handler: function () {
                        _this.viewer.removeHotSpot(_this.currentHotSpotId);
                        _this.markers.pop();
                        _this.counter--;
                        _this.init();
                        _this.sousCategories = [];
                        _this.btnClicked = false;
                        _this.currentDefautValide = true;
                        _this.showFields = false;
                        setTimeout(function () {
                            _this.viewer.resize();
                        }, 500);
                    }
                }
            ]
        });
        alert.present();
    };
    SelectionDefautPage.prototype.cancelDefault = function () {
        var _this = this;
        if (!this.isEdit) {
            this.viewer.removeHotSpot(this.currentHotSpotId);
            this.markers.pop();
            this.counter--;
        }
        this.init();
        this.sousCategories = [];
        this.btnClicked = false;
        // to hide fields in bottom
        this.currentDefautValide = true;
        this.showFields = false;
        setTimeout(function () {
            _this.viewer.resize();
        }, 500);
    };
    SelectionDefautPage.prototype.presentConfirm = function () {
        var _this = this;
        console.log(this.description);
        // ici détection photo
        if (typeof this.description.equipement === 'undefined') {
            this.alertCtrl.create({
                title: 'Vous devez sélectionner un équipement',
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
        else if (typeof this.description.etatUsure === 'undefined') {
            this.alertCtrl.create({
                title: 'Vous devez indiquer l\'état d\'usure',
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
        else if (((typeof this.description.defaut != 'undefined' && this.description.defaut.length > 0)
            || (typeof this.description.etatUsure != 'undefined'
                && (this.description.etatUsure.indexOf('Avancé') != -1
                    || this.description.etatUsure.indexOf('Dégradé') != -1))) && (this.image1 == '' || this.image1 == "../../assets/imgs/add_photo.png")) {
            this.alertCtrl.create({
                title: 'Vous devez prendre au moins une photo',
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
        else if (pannellum.pouf && pannellum.pouf.idDefaut) {
            var alert_1 = this.alertCtrl.create({
                title: 'Etes-vous sûr de vouloir valider ce défaut ?',
                message: '',
                buttons: [
                    {
                        text: 'Non',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel btn pressed!');
                        }
                    },
                    {
                        text: 'Oui',
                        handler: function () {
                            if (pannellum.pouf && _this.description.equipement.length > 0) {
                                pannellum.pouf.description = _this.description;
                                pannellum.pouf.displayedDescription = _this.displayedDescription;
                                if (_this.image1) {
                                    pannellum.pouf.image1 = _this.image1;
                                }
                                if (_this.image2) {
                                    pannellum.pouf.image2 = _this.image2;
                                }
                                pannellum.pouf.observation = _this.observation;
                                var inArray = false;
                                for (var i = 0; i < _this.dataPanoArr.length; i++) {
                                    // Si le defaut a deja ete clique (ex: mise a jour)
                                    if (_this.dataPanoArr[i].idDefaut === pannellum.pouf.idDefaut) {
                                        _this.dataPanoArr[i] = pannellum.pouf;
                                        inArray = true;
                                        break;
                                    }
                                }
                                if (!inArray) {
                                    // Si on clique pour la premiere fois sur le defaut (ex: ajout)
                                    _this.dataPanoArr.push(pannellum.pouf);
                                }
                                _this.init();
                                _this.sousCategories = [];
                                _this.btnClicked = false;
                                // to hide fields in bottom
                                _this.currentDefautValide = true;
                                _this.showFields = false;
                                setTimeout(function () {
                                    _this.viewer.resize();
                                }, 500);
                            }
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    SelectionDefautPage.prototype.goToSalle = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 4));
    };
    SelectionDefautPage.prototype.mousePosition = function (event) {
        var leftBounds = this.viewer.getContainer().getBoundingClientRect().left;
        var topBounds = this.viewer.getContainer().getBoundingClientRect().top;
        var pos = {
            x: 0, y: 0
        };
        pos.x = event.center.x - leftBounds;
        pos.y = event.center.y - topBounds;
        return pos;
    };
    SelectionDefautPage.prototype.fromEventToCoords = function (event) {
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
    SelectionDefautPage.prototype.typePressed = function (type) {
        var _this = this;
        this.btnClicked = true;
        if (type.typeEnfant.length != 0) { // La catégorie de défaut contient une sous-catégorie
            this.bgIsWhite = true;
            this.sousCategories = type.typeEnfant;
            this.types.forEach(function (t) {
                if (t === type) {
                    t.selected = true;
                    _this.currentTypeLabel = _this.getTypeByLabel(type.name);
                }
                else {
                    t.selected = false;
                }
            });
            if (typeof this.description[this.currentTypeLabel] == 'undefined') {
                this.description[this.currentTypeLabel] = [];
            }
            var tmp_1 = [];
            this.sousCategories.forEach(function (t) {
                t.selected = _this.description[_this.currentTypeLabel].includes(t.name);
                tmp_1.push(t);
            });
            this.sousCategories = tmp_1;
        }
        else { // Pas de sous-catégorie
            this.sousCategories = [{ 'id': -1, 'parentId': 0, 'name': 'pas de sous-catégorie', 'selected': false }];
        }
    };
    SelectionDefautPage.prototype.getTypeByLabel = function (id) {
        for (var key in this.label) {
            if (this.label[key] == id) {
                return key;
            }
        }
        return id;
    };
    SelectionDefautPage.prototype.catEnfantPressed = function (cat) {
        var _this = this;
        // On a choisi un équipement, on met à jour les champs
        if (cat.parentId === 0) {
            var index_1 = this.mapEquipement[cat.name];
            this.description[this.currentTypeLabel] = this.updateSelection(this.items.donnees[index_1].equipement);
            if (this.types.length > 1) {
                this.types.splice(1, this.types.length);
            }
            if (this.description.equipement == 'Autres') {
                this.description.nature = this.updateSelection(prompt("Description de l'équipement"));
            }
            var i_1 = 1;
            Object.keys(this.items.donnees[index_1]).forEach(function (key) {
                if (key != "equipement" && key != "commentaire" && key != "photo") {
                    var typeEnfant_1 = [];
                    var enfants = _this.items.donnees[index_1][key];
                    var enfantId_1 = 0;
                    enfants.forEach(function (element) {
                        typeEnfant_1.push({ id: enfantId_1, parentId: i_1, name: element, selected: false });
                        enfantId_1++;
                    });
                    var type = { id: i_1, name: _this.label[key], typeEnfant: typeEnfant_1, selected: false };
                    _this.types.push(type);
                    i_1++;
                }
            });
        }
        else {
            if (cat.name === 'Autres') {
                this.description[this.currentTypeLabel] = this.updateSelection(prompt("Veuillez indiquer votre observation"));
            }
            else if (cat.name === "Description") {
                this.description[this.currentTypeLabel] = this.updateSelection(prompt("Description de l\'équipement"));
            }
            else {
                this.description[this.currentTypeLabel] = this.updateSelection(cat.name);
            }
        }
        for (var i = 0; i < this.types[cat.parentId].typeEnfant.length; i++) {
            this.types[cat.parentId].typeEnfant[i].selected = false;
        }
        this.types[cat.parentId].typeEnfant[cat.id].selected = true;
        this.prepareDescription();
        var tmp = [];
        this.sousCategories.forEach(function (t) {
            t.selected = _this.description[_this.currentTypeLabel].includes(t.name);
            tmp.push(t);
        });
        this.sousCategories = tmp;
    };
    SelectionDefautPage.prototype.updateSelection = function (selection) {
        if (this.multipleCrits.includes(this.currentTypeLabel)) {
            if (this.description[this.currentTypeLabel].includes(selection)) {
                var tmp = [];
                for (var i = 0; i < this.description[this.currentTypeLabel].length; i++) {
                    if (this.description[this.currentTypeLabel][i] !== selection) {
                        tmp.push(this.description[this.currentTypeLabel][i]);
                    }
                }
                this.description[this.currentTypeLabel] = tmp;
            }
            else {
                this.description[this.currentTypeLabel].push(selection);
            }
            return this.description[this.currentTypeLabel];
        }
        return [selection];
    };
    SelectionDefautPage.prototype.prepareDescription = function () {
        var output = '';
        for (var key in this.label) {
            console.log(this.description[key]);
            if (key === 'etatDeProprete'
                && (typeof this.propretePiece == 'undefined' || this.propretePiece == '' || this.propretePiece == 'Propre')
                && typeof this.description[key] !== 'undefined'
                && this.description[key].indexOf("A nettoyer") !== -1) {
                this.propretePiece = 'Nettoyage partiel';
            }
            if (key !== 'details' && typeof this.description[key] !== 'undefined' && this.description[key].length > 0) {
                output += '<span class="critLabel">' + this.label[key] + ' : </span>' + this.prepareValues(this.description[key], key);
                if (key == 'defaut' && this.description['details'].length > 0) {
                    output += ' (' + this.prepareValues(this.description['details'], 'details') + ')';
                }
                output += '<br />';
            }
        }
        this.displayedDescription = output;
    };
    SelectionDefautPage.prototype.prepareValues = function (values, crit) {
        var preparedValues = [];
        for (var i = 0; i < values.length; i++) {
            var className = (crit == 'etatUsure' ? 'blueState' : 'classicState');
            if (values[i] == 'Dégradé' || values[i] == 'Avancé') {
                className = 'redState';
            }
            preparedValues.push('<span class="' + className + '">' + values[i] + '</span>');
        }
        return preparedValues.join(', ');
    };
    SelectionDefautPage.prototype.openCamera = function (target) {
        var _this = this;
        switch (target) {
            case 1:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.image1 = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            case 2:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
                    _this.image2 = 'data:image/jpeg;base64,' + imageData;
                })
                    .catch(function (error) {
                    console.error(error);
                });
                break;
            default:
                break;
        }
    };
    SelectionDefautPage.prototype.demandSavePiece = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: 'Vous souhaitez accéder au récapitulatif des pièces. Vous devez enregistrer cette pièce pour la sauvegarder',
                            buttons: [
                                {
                                    text: 'Annuler la pièce',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('annuler');
                                    }
                                }, {
                                    text: 'Sauvegarder la pièce',
                                    handler: function () {
                                        _this.goToResume();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SelectionDefautPage.prototype.goToListPieces = function () {
        var _this = this;
        if (this.stateInsert === 0)
            this.demandSavePiece();
        if (this.stateInsert === 1) {
            this.navCtrl.push(ListePiecesPage, { nummission: this.salleData.nummission, compters: this.compters }).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
        }
    };
    SelectionDefautPage = __decorate([
        Component({
            selector: 'page-selection-defaut',
            templateUrl: 'selection-defaut.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController,
            ImmodiagProvider,
            CameraImageProvider,
            PanoDataProvider,
            SalleDataProvider,
            MissionDataProvider])
    ], SelectionDefautPage);
    return SelectionDefautPage;
}());
export { SelectionDefautPage };
//# sourceMappingURL=selection-defaut.js.map