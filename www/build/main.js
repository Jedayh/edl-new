webpackJsonp([7],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionDefautPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_immodiag_immodiag__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_camera_image_camera_image__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_pano_data_model__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resume_edl_resume_edl__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__prendre_photo_prendre_photo__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_pano_data_pano_data__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_salle_data_salle_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_mission_data_mission_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__liste_pieces_liste_pieces__ = __webpack_require__(33);
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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










// Provider global


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
            imgPanoDefault: '',
            nomPiece: '',
            typePiece: '',
            dataPanoArr: [],
            etatPiece: '',
            propretePiece: '',
            markers: [],
            items: []
        };
        this.camera = new __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]();
        this.cameraOptions = this.cameraImageProvider.options;
        this.dataPanoArr = [];
        this.markers = [];
        this.imgPano = panoDataProvider.getImagePano();
        this.imgPanoDefault = panoDataProvider.getImagePanoDefault();
        this.salle = salleDataProvider.getSalleData();
        this.nomPiece = salleDataProvider.getNomPiece();
        this.numberPiece = this.navParams.get('numberPiece');
        this.salleData.nummission = this.navParams.get("nummission");
        this.salleData.imgPano = this.imgPano;
        this.salleData.imgPanoDefault = this.imgPanoDefault;
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
            var dataPanoElt = new __WEBPACK_IMPORTED_MODULE_5__models_pano_data_model__["a" /* PanoData */]();
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
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__prendre_photo_prendre_photo__["a" /* PrendrePhotoPage */], { nummission: _this.salleData.nummission }).then(function () {
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
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__liste_pieces_liste_pieces__["a" /* ListePiecesPage */], { nummission: _this.salleData.nummission }).then(function () {
                        _this.navCtrl.removeView(_this.navCtrl.getPrevious());
                    });
                }
            }, 2000);
            if (typeof this.typeAction == 'undefined') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__resume_edl_resume_edl__["a" /* ResumeEdlPage */], { nummission: this.salleData.nummission }).then(function () {
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
        if (type.typeEnfant.length != 0) {
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
        else {
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
            var _this = this;
            var alert;
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__liste_pieces_liste_pieces__["a" /* ListePiecesPage */], { nummission: this.salleData.nummission }).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
        }
    };
    SelectionDefautPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-selection-defaut',template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/pages/selection-defaut/selection-defaut.html"*/'<ion-content>\n  <ion-grid>\n\n    <ion-row class="rowTitle">\n      <ion-col col-sm-8 >\n        <div class="titre">Nom de la pièce : {{this.nomPiece}}</div>\n      </ion-col>\n      <ion-col col-sm-2>\n        <ion-select class="propreteSelector" interface="popover" [(ngModel)]="etatPiece" placeholder="Etat de la pièce">\n          <ion-option value="Neuf"> Neuf </ion-option>\n          <ion-option value="Bon état"> Bon état </ion-option>\n          <ion-option value="Moyen"> Moyen </ion-option>\n          <ion-option value="Mauvais"> Mauvais </ion-option>\n        </ion-select>\n      </ion-col>\n      <ion-col col-sm-2>\n          <input type="hidden" value="{{stateInsert}}" [(ngModel)]="stateInsert" />\n        <ion-select class="propreteSelector" interface="popover" [(ngModel)]="propretePiece" placeholder="Propreté de la pièce">\n          <ion-option value="Propre"> Propre </ion-option>\n          <ion-option value="Nettoyage partiel"> Nettoyage partiel </ion-option>\n          <ion-option value="A Nettoyer"> A Nettoyer </ion-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-sm-11 ion-col-auto class="__no_padding">\n        <div id="selectionDefaut" (press)="putMarker($event)" [class.markerAdded]="showFields"></div>\n      </ion-col>\n      <ion-col col-sm-1>\n        <div class="imgC addphoto" *ngIf="showFields">\n            <img src="{{ image1 }}" style="width: 100%; height: 33,33333%;" (click)="openCamera(1)">\n        </div>\n        <div class="imgC addphoto" *ngIf="showFields">\n            <img src="{{ image2 }}" style="width: 100%; height: 33,33333%;" (click)="openCamera(2)">\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="!showFields">\n      <ion-col col-sm-10 align-center class="help">\n        Appuyer sur la photo jusqu\'à apparition d\'un marqueur pour ajouter un défaut.<br />\n        Appuyez sur un défaut existant pour le modifier ou le supprimer.\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="rowHeader" *ngIf="showFields">\n      <ion-col col-md-6 align-center>\n        Types défauts\n      </ion-col>\n\n      <ion-col col-md-6 align-center>\n        Description des défauts\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="showFields">\n      <ion-col col-md-6 align-center class="noPadding listeDefauts">\n        <ion-grid class="noPadding">\n          <ion-row>\n            <!-- Liste des types de défauts -->\n            <ion-col col-md-6 class="noPadding">\n              <ion-list no-lines>\n                <button ion-item *ngFor="let type of types" (click)="typePressed(type)" [class.btnInList]="!type.selected"\n                  [class.sectionSelected]="type.selected">\n                  {{ type.name }}\n                </button>\n              </ion-list>\n            </ion-col>\n\n            <!-- Sous catégories des types de défauts -->\n            <ion-col col-md-6 class="__no_padding" *ngIf="btnClicked" [class.whiteBackground]="btnClicked">\n              <ion-list no-lines class="scrollContent">\n                <button (click)="catEnfantPressed(cat)" ion-item *ngFor="let cat of sousCategories" [class.whiteBackground]="bgIsWhite">\n                  {{ cat.name }}\n                  <ion-icon *ngIf="cat.selected" style="float: right; color: red;" name="ios-remove-circle-outline"></ion-icon>\n                  <ion-icon *ngIf="!cat.selected" style="float: right; color: green;" name="ios-add-circle-outline"></ion-icon>\n                </button>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n\n      <!-- Description des défauts -->\n      <ion-col col-md-6 align-center class="noPadding listeDefauts">\n        <p class="description" style="border: 1px solid;margin: 10px 20px 0 20px;" [innerHTML]="displayedDescription">\n\n        </p>\n        <p class="description">\n          <ion-textarea #msgInput rows="5" maxLength="255" style="background-color:#fff; color: #3b827e;width: 100%;height: 150px;" [(ngModel)]="observation" placeholder="Observations générales du défaut..."></ion-textarea>\n        </p>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <div class="pied">\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="goBack()">\n          <ion-icon class="pager" name="arrow-round-back" *ngIf="!showFields"></ion-icon>\n        </ion-col>\n        <!--\n        <button ion-button round outline (click)="goToListPieces()">Recapitulatif des pièces</button>\n        -->\n        <button ion-button color="danger" hide round outline (click)="cancelDefault()" *ngIf="showFields">Annuler</button>\n        <button ion-button color="danger" hide round outline (click)="deleteDefault()" *ngIf="showFields">Supprimer le défaut</button>\n        <button ion-button hide round outline (click)="presentConfirm()" *ngIf="showFields">Valider le défaut</button>\n        <button ion-button hide round outline (click)="goToResume()" *ngIf="!showFields">Valider cette pièce</button>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/pages/selection-defaut/selection-defaut.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_immodiag_immodiag__["a" /* ImmodiagProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_camera_image_camera_image__["a" /* CameraImageProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_pano_data_pano_data__["a" /* PanoDataProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_salle_data_salle_data__["a" /* SalleDataProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_mission_data_mission_data__["a" /* MissionDataProvider */]])
    ], SelectionDefautPage);
    return SelectionDefautPage;
}());

//# sourceMappingURL=selection-defaut.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xml2js__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_technicien_model__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bluebird__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_mission_data_mission_data__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// Provider global

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
        this.login = "jeremie"; // abcvannes
        this.password = "jeremie"; // abcvannes7452
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
                            if (!connected) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
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
            return __WEBPACK_IMPORTED_MODULE_8_bluebird__["all"]([
                _this.connectToVenteCMCIC(),
                _this.connectToLocationNationale(),
                _this.connectToGestionLocationCMCIC(),
                _this.connectToMedialibs()
            ]);
        }).then(function (results) {
            return __WEBPACK_IMPORTED_MODULE_8_bluebird__["each"](results, function (result) {
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
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
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
        return new __WEBPACK_IMPORTED_MODULE_8_bluebird__(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_5_axios___default.a.get(url, {})
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
        return new __WEBPACK_IMPORTED_MODULE_8_bluebird__(function (resolve, reject) {
            var parser = new __WEBPACK_IMPORTED_MODULE_4_xml2js___default.a.Parser({
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
                var user = new __WEBPACK_IMPORTED_MODULE_6__models_technicien_model__["a" /* Technicien */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/pages/login/login.html"*/'<ion-header>\n  <div class="tete">\n    <img width="12%" height="auto" src="../../assets/imgs/logo.png">\n    <!-- <span style="padding-bottom: 20px"> ABC immoservices</span> -->\n  </div>\n</ion-header>\n<ion-content class="scroll-content transbox">\n\n  <div class="outer">\n    <div class="middle">\n      <div class="inner">\n        <ion-list>\n          <ion-item class="Id">\n            <ion-input [(ngModel)]="login" type="text" placeholder="Identifiant"></ion-input>\n          </ion-item>\n\n          <ion-item class="mdp">\n            <ion-input [(ngModel)]="password" type="password" placeholder="Mot de passe"></ion-input>\n          </ion-item>\n          <button ion-button class="connexion" id="btn-connexion" (click)="connectUser()">Se connecter</button>\n        </ion-list>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_mission_data_mission_data__["a" /* MissionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailMissionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__releve_compteurs_releve_compteurs__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_mission_data_mission_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__liste_pieces_liste_pieces__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ws_pano_ws_pano__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Provider global



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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], { nummission: this.detail.uid }).then(function () {
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__releve_compteurs_releve_compteurs__["a" /* ReleveCompteursPage */], { nummission: this.detail.uid, numberPiece: this.numberPiece,
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__liste_pieces_liste_pieces__["a" /* ListePiecesPage */], { nummission: this.navParams.data.uid }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    DetailMissionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detail-mission',template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/pages/detail-mission/detail-mission.html"*/'<ion-header>\n</ion-header>\n<ion-content class="body">\n\n  <div class="tete">\n    <img width="12%" height="auto" src="../../assets/imgs/logo.png">\n  </div>\n\n  <div class="corp">\n    <ion-grid style="border-bottom: 1px solid;">\n      <ion-row>\n        <ion-col class="title"> {{ detail.titre }} </ion-col>\n        <ion-col class="text-right title"> {{ detail.loc_nomcomplet }} </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="text-right">\n          Date:\n        </ion-col>\n        <ion-col>\n          <ion-datetime [(ngModel)]="detail.date_actuel" doneText="Définir" cancelText="Annuler" displayFormat="DD/MM/YYYY" max="2050"></ion-datetime>\n        </ion-col>\n        <ion-col class="text-right">Entrée du locataire :</ion-col>\n        <ion-col>\n          <ion-datetime [(ngModel)]="detail.date_entree_locataire" doneText="Définir" cancelText="Annuler" displayFormat="DD/MM/YYYY"></ion-datetime>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <p>\n            Le présent constat d\'état des lieux a été dressé contradictoirement entre ABC IMMODIAG, représentant de la société {{detail.mandataire}}, pour le compte du propriétaire {{ detail.proprietaire_nomcomplet }} et du locataire {{ detail.loc_nomcomplet }}.\n          </p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row style="border-bottom: 1px solid;">\n        <ion-col class="title">N° de la mission : {{detail.nummission}}</ion-col>\n        <ion-col class="text-right title">Référence : {{detail.reference}}</ion-col>\n      </ion-row>\n      <ion-row class="form">\n        <ion-col>\n          <ion-row>\n            <ion-col col-6>Adresse </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="detail.bien_adresse" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>Résidence </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="detail.bien_residence" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>N° de lot</ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="detail.bien_numlot" />\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-2 class="text-right">Type</ion-col>\n            <ion-col col-4 class="text-right">\n              <input type="text" [(ngModel)]="detail.bien_type" />\n            </ion-col>\n            <ion-col col-2 class="text-right">Nb pièces</ion-col>\n            <ion-col col-4 class="text-right">\n              <input type="text" [(ngModel)]="detail.bien_nbpieces" />\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-2 class="text-right">Meublé</ion-col>\n            <ion-col col-4 class="text-right">\n              <ion-select interface="popover" [(ngModel)]="detail.bien_meuble">\n                <ion-option value="Oui"> Oui </ion-option>\n                <ion-option value="Non"> Non </ion-option>\n              </ion-select>\n            </ion-col>\n            <ion-col col-2 class="text-right">Digicode</ion-col>\n            <ion-col col-4 class="text-right">\n              <input type="text" [(ngModel)]="detail.bien_digicode" />\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-2 class="text-right">Parking</ion-col>\n            <ion-col col-4 class="text-right">\n              <input type="text" [(ngModel)]="detail.bien_parking" />\n            </ion-col>\n            <ion-col col-2></ion-col>\n            <ion-col col-4 class="text-right"></ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col>\n          <ion-row>\n            <ion-col col-6> Complément </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="detail.bien_adresse_complement" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Code postal </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="detail.bien_codepostal" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>Ville </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="detail.bien_ville" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-2 class="text-right">Bât</ion-col>\n            <ion-col col-4 class="text-right">\n              <input type="text" [(ngModel)]="detail.bien_bat" />\n            </ion-col>\n            <ion-col col-2 class="text-right">Etage</ion-col>\n            <ion-col col-4 class="text-right">\n              <input type="text" [(ngModel)]="detail.bien_etage" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-2 class="text-right">Garage</ion-col>\n            <ion-col col-4 class="text-right">\n              <input type="text" [(ngModel)]="detail.bien_garage" />\n            </ion-col>\n            <ion-col col-2 class="text-right">Cave</ion-col>\n            <ion-col col-4 class="text-right">\n              <input type="text" [(ngModel)]="detail.bien_cave" />\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n\n      <!--Coordonnée locataire -->\n      <ion-row style="border-bottom: 1px solid;">\n        <ion-col class="title uppercase">Coordonnées locataire</ion-col>\n      </ion-row>\n      <ion-row class="form">\n        <ion-col>\n          <ion-row>\n            <ion-col col-6> Nom et prénom </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="detail.loc_nom" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>Email 1</ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="email" [(ngModel)]="detail.loc_email" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>Email 2</ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="email" [(ngModel)]="detail.loc_email2" />\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col>\n          <ion-row>\n            <ion-col col-6> Portable </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="detail.loc_portable" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Téléphone fixe </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="detail.loc_telephone" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6></ion-col>\n            <ion-col col-6></ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <!-- Coordonnée ex-locataire -->\n      <ion-row style="border-bottom: 1px solid;">\n        <ion-col class="title uppercase">Nouvelles coordonnées du locataire sortant</ion-col>\n      </ion-row>\n      <ion-row class="form">\n        <ion-col>\n          <ion-row>\n            <ion-col col-6> Nom et prénom </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="detail.exloc_nom" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>Adresse </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="detail.exloc_adresse" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Code postal </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="detail.exloc_departement" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>Ville </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="detail.exloc_ville" />\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col>\n          <ion-row>\n            <ion-col col-6> Portable </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="detail.exloc_portable" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Téléphone fixe </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="detail.exloc_telephone" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>Email 1</ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="email" [(ngModel)]="detail.exloc_email" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>Email 2</ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="email" [(ngModel)]="detail.exloc_email2" />\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class="pied">\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="prev()">\n          <ion-icon class="pager" name="arrow-round-back"></ion-icon>\n        </ion-col>\n        <ion-col *ngIf="numberPiece > 0">\n          <button ion-button class="middle-btn" round outline (click)="goToListPieces()">Récapitulatif des pièces</button>\n        </ion-col>\n        <ion-col (click)=" next()">\n          <ion-icon class="pager" name="arrow-round-forward" style="float: right;"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/pages/detail-mission/detail-mission.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_mission_data_mission_data__["a" /* MissionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_ws_pano_ws_pano__["a" /* WsPanoProvider */]])
    ], DetailMissionPage);
    return DetailMissionPage;
}());

//# sourceMappingURL=detail-mission.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleveCompteursPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contrats_contrats__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_mission_detail_mission__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_camera_image_camera_image__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_mission_data_mission_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__liste_pieces_liste_pieces__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Provider global



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
    function ReleveCompteursPage(navCtrl, navParams, cameraImageProvider, missionDataProvider, toastCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cameraImageProvider = cameraImageProvider;
        this.missionDataProvider = missionDataProvider;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
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
        this.camera = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]();
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
        var _this = this;
        console.log('ionViewDidLoad ReleveCompteursPage');
        if (this.navParams.get('compters')) {
            this.compters = this.navParams.get('compters');
        }
        else {
            this.storage.get('compter').then(function (data) {
                if (data != null) {
                    _this.compters = data;
                    if (Object.keys(data).length >= 2) {
                        _this.isAdd = true;
                    }
                }
            });
        }
        if (Object.keys(this.compters).length >= 2) {
            this.isAdd = true;
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
        this.storage.set('compter', this.compters);
    };
    ReleveCompteursPage.prototype.remove = function () {
        this.storage.set('compter', this.compters);
        if (Object.keys(this.compters).length >= 2) {
            this.compters.pop();
        }
        if (Object.keys(this.compters).length == 1)
            this.isAdd = false;
    };
    ReleveCompteursPage.prototype.prev = function () {
        var _this = this;
        this.missionDataProvider.save(this.compteur.nummission, 'releveCompteurs', this.compteur, 'pending');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_mission_detail_mission__["a" /* DetailMissionPage */], { nummission: this.compteur.nummission, numberPiece: this.numberPiece,
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
        this.missionDataProvider.save(this.compteur.nummission, 'releveCompteurs', this.compteur, 'pending');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contrats_contrats__["a" /* ContratsPage */], { nummission: this.compteur.nummission, numberPiece: this.numberPiece,
            compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
        this.storage.set('compter', this.compters);
    };
    ReleveCompteursPage.prototype.openCamera = function (target, index) {
        var _this = this;
        switch (target) {
            case 1:
                this.camera.getPicture(this.cameraOptions)
                    .then(function (imageData) {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__liste_pieces_liste_pieces__["a" /* ListePiecesPage */], { nummission: this.compteur.nummission }).then(function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-releve-compteurs',template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/pages/releve-compteurs/releve-compteurs.html"*/'<ion-header>\n  <!--\n  <div class="tete">\n    <ion-icon name="ios-disc-outline"></ion-icon> ABC immoservices\n  </div>\n  -->\n</ion-header>\n\n\n<ion-content class="body">\n\n  <div class="tete">\n    <img width="12%" height="auto" src="../../assets/imgs/logo.png">\n    <!-- <span style="padding-bottom: 20px"> ABC immoservices</span> -->\n  </div>\n\n  <div class="corp">\n    <ion-grid>\n      <ion-row style="border-bottom: 1px solid;">\n        <ion-col class="title uppercase">Compteur</ion-col>\n      </ion-row>\n\n      <div *ngFor="let compter of compters; let i = index">\n        <ion-row style="border-bottom: 1px solid;" *ngIf="i != 0" >\n          <ion-col class="title uppercase">Compteur d\'eau {{ i +1 }}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="title">\n            <label class="title">Eau froide</label>\n            <ion-toggle [(ngModel)]="compter.eauFroide"></ion-toggle>\n            <span style="padding: .8em .1em; font-size: 1.4rem; color: rgba(255, 255, 255, 0.46);">disponible</span>\n          </ion-col>\n          <ion-col class="title">\n            <label class="title">Eau chaude</label>\n            <ion-toggle [(ngModel)]="compter.eauChaude"></ion-toggle>\n            <span style="padding: .8em .1em; font-size: 1.4rem; color: rgba(255, 255, 255, 0.46);">disponible</span>\n          </ion-col>\n        </ion-row>\n        <ion-row class="form">\n          <ion-col class="addphoto" (click)="openCamera(1, i)" [ngClass]="{\'disableImg\': !compter.eauFroide}">\n            <img [src]="compter.eauFroidePhoto" alt="">\n          </ion-col>\n          <ion-col col-4>\n            <ion-row>\n              <ion-col col-6>Type </ion-col>\n              <ion-col col-6>\n                <ion-select interface="popover" [(ngModel)]="compter.eauFroideType" style="width:100%" [disabled]="!compter.eauFroide">\n                  <ion-option value="Individuel"> Individuel </ion-option>\n                  <ion-option value="Collectif"> Collectif </ion-option>\n                </ion-select>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6>Relevé </ion-col>\n              <ion-col col-6>\n                <ion-select interface="popover" [(ngModel)]="compter.eauFroideReleve" style="width:100%" [disabled]="!compter.eauFroide">\n                  <ion-option value="Accessible"> Accessible </ion-option>\n                  <ion-option value="Introuvable"> Introuvable </ion-option>\n                </ion-select>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6>Numéro de compteur </ion-col>\n              <ion-col col-6 class="text-right">\n                <input type="text" [(ngModel)]="compter.eauFroideNumero" [disabled]="!compter.eauFroide"  />\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6>Compteur (relevé)</ion-col>\n              <ion-col col-6 class="text-right">\n                <input type="text" [(ngModel)]="compter.eauFroideCompteur" [disabled]="!compter.eauFroide" />\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6> Localisation </ion-col>\n              <ion-col col-6 class="text-right">\n                <input type="text" [(ngModel)]="compter.eauFroideLocalisation" [disabled]="!compter.eauFroide" />\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6> Observation </ion-col>\n              <ion-col col-6 class="text-right">\n                <input type="text" [(ngModel)]="compter.eauFroideObservation" [disabled]="!compter.eauFroide" />\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col class="addphoto" (click)="openCamera(5, i)" [ngClass]="{\'disableImg\': !compter.eauChaude}">\n            <img [src]="compter.eauChaudePhoto" alt="">\n          </ion-col>\n          <ion-col col-4>\n            <ion-row>\n              <ion-col col-6>Type </ion-col>\n              <ion-col col-6>\n                <ion-select interface="popover" [(ngModel)]="compter.eauChaudeType" style="width:100%" [disabled]="!compter.eauChaude">\n                  <ion-option value="Individuel"> Individuel </ion-option>\n                  <ion-option value="Collectif"> Collectif </ion-option>\n                </ion-select>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6>Relevé </ion-col>\n              <ion-col col-6>\n                <ion-select interface="popover" [(ngModel)]="compter.eauChaudeReleve" style="width:100%" [disabled]="!compter.eauChaude">\n                  <ion-option value="Accessible"> Accessible </ion-option>\n                  <ion-option value="Introuvable"> Introuvable </ion-option>\n                </ion-select>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6>Numéro de compteur </ion-col>\n              <ion-col col-6 class="text-right">\n                <input type="text" [(ngModel)]="compter.eauChaudeNumero" [disabled]="!compter.eauChaude"  />\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6>Compteur (relevé)</ion-col>\n              <ion-col col-6 class="text-right">\n                <input type="text" [(ngModel)]="compter.eauChaudeCompteur" [disabled]="!compter.eauChaude" />\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6> Localisation </ion-col>\n              <ion-col col-6 class="text-right">\n                <input type="text" [(ngModel)]="compter.eauChaudeLocalisation" [disabled]="!compter.eauChaude" />\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-6> Observation </ion-col>\n              <ion-col col-6 class="text-right">\n                <input type="text" [(ngModel)]="compter.eauChaudeObservation" [disabled]="!compter.eauChaude" />\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </div>\n      <!-- Electricité -->\n      <ion-row>\n        <ion-col class="title">\n          <label class="title">Electricité</label>\n          <ion-toggle [(ngModel)]="compteur.electricite"></ion-toggle>\n          <span style="padding: .8em .1em; font-size: 1.4rem; color: rgba(255, 255, 255, 0.46);">alimenté</span>\n        </ion-col>\n        <ion-col class="title">\n          <label class="title">Chauffage </label>\n          <ion-toggle [(ngModel)]="compteur.chauffage"></ion-toggle>\n          <span style="padding: .8em .1em; font-size: 1.4rem; color: rgba(255, 255, 255, 0.46);">disponible</span>\n        </ion-col>\n      </ion-row>\n      <ion-row class="form">\n        <ion-col col-1 class="addphotosmall" (click)="openCamera(3)" [ngClass]="{\'disableImg\': !compteur.electricite}">\n          <img src="{{ compteur.electricitePhoto }}" alt="">\n        </ion-col>\n        <ion-col col-1 class="addphotosmall" (click)="openCamera(6)" [ngClass]="{\'disableImg\': !compteur.electricite}">\n          <img src="{{ compteur.electricitePhoto2 }}" alt="">\n        </ion-col>\n        <ion-col col-4>\n          <ion-row>\n            <ion-col col-6> Heures pleines </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="compteur.electriciteHeuresPleines" [disabled]="!compteur.electricite" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Heures creuses </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="compteur.electriciteHeuresCreuse" [disabled]="!compteur.electricite" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Numéro de compteur </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="compteur.electriciteNumero" [disabled]="!compteur.electricite" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Localisation </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="compteur.electiriciteLocalisation" [disabled]="!compteur.electricite" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Observation </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="compteur.electiriciteObservation" [disabled]="!compteur.electricite" />\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col col-2 class="addphoto" (click)="openCamera(2)" [ngClass]="{\'disableImg\': !compteur.chauffage}">\n          <img src="{{ compteur.chauffagePhoto }}" alt="">\n        </ion-col>\n        <ion-col col-4>\n          <ion-row>\n            <ion-col col-5> Type </ion-col>\n            <ion-col col-7>\n              <ion-select interface="popover" [(ngModel)]="compteur.chauffageType" style="width:100%" [disabled]="!compteur.chauffage">\n                <ion-option value="Individuel"> Individuel </ion-option>\n                <ion-option value="Collectif"> Collectif </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5> Chauffage </ion-col>\n            <ion-col col-7>\n              <ion-select interface="popover" [(ngModel)]="compteur.chauffageCha" style="width:100%" [disabled]="!compteur.chauffage">\n                <ion-option value="Gaz"> Gaz </ion-option>\n                <ion-option value="Electrique"> Electrique </ion-option>\n                <ion-option value="Pompe à chaleur"> Pompe à chaleur </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-5> Observation </ion-col>\n            <ion-col col-7 class="text-right">\n              <input type="text" [(ngModel)]="compteur.chauffageObservation" [disabled]="!compteur.chauffage" />\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="title"> Gaz\n          <ion-toggle [(ngModel)]="compteur.gaz"></ion-toggle>\n          <span style="padding: .8em .1em; font-size: 1.4rem; color: rgba(255, 255, 255, 0.46);">alimenté</span>\n        </ion-col>\n      </ion-row>\n      <ion-row class="form">\n        <ion-col col-2 class="addphoto" (click)="openCamera(4)" [ngClass]="{\'disableImg\': !compteur.gaz}">\n          <img src="{{ compteur.gazPhoto }}" alt="">\n        </ion-col>\n\n        <ion-col col-4>\n          <ion-row>\n            <ion-col col-6>Type </ion-col>\n            <ion-col col-6>\n              <ion-select interface="popover" [(ngModel)]="compteur.gazType" style="width:100%" [disabled]="!compteur.gaz">\n                <ion-option value="Individuel"> Individuel </ion-option>\n                <ion-option value="Collectif"> Collectif </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>Relevé </ion-col>\n            <ion-col col-6>\n              <ion-select interface="popover" [(ngModel)]="compteur.gazReleve" style="width:100%" [disabled]="!compteur.gaz">\n                <ion-option value="Accessible"> Accessible </ion-option>\n                <ion-option value="Introuvable"> Introuvable </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>Numéro de compteur </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="compteur.gazNumero" [disabled]="!compteur.gaz" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>Compteur (relevé)</ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="compteur.gazCompteur" [disabled]="!compteur.gaz" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Localisation </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="compteur.gazLocalisation" [disabled]="!compteur.gaz" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Observation </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="compteur.gazObservation" [disabled]="!compteur.gaz" />\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col col-6>\n          <ion-row>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class="pied">\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="prev()">\n          <ion-icon class="pager" name="arrow-round-back"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <button ion-button (tap)="add()">Ajout compteur d\'eau</button>\n            <button ion-button (tap)="remove()" *ngIf="isAdd">Supprimer</button>\n\n        </ion-col>\n        <ion-col (click)="next()">\n          <ion-icon class="pager" name="arrow-round-forward" style="float: right;"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/pages/releve-compteurs/releve-compteurs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_camera_image_camera_image__["a" /* CameraImageProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_mission_data_mission_data__["a" /* MissionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], ReleveCompteursPage);
    return ReleveCompteursPage;
}());

//# sourceMappingURL=releve-compteurs.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContratsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inventaires_cles_inventaires_cles__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__releve_compteurs_releve_compteurs__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_camera_image_camera_image__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_mission_data_mission_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__liste_pieces_liste_pieces__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Provider global


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
        this.camera = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]();
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__releve_compteurs_releve_compteurs__["a" /* ReleveCompteursPage */], { nummission: this.contrat.nummission, numberPiece: this.numberPiece,
            compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ContratsPage.prototype.next = function () {
        var _this = this;
        this.missionDataProvider.save(this.contrat.nummission, 'contrats', this.contrat, 'pending');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inventaires_cles_inventaires_cles__["a" /* InventairesClesPage */], { nummission: this.contrat.nummission, numberPiece: this.numberPiece,
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__liste_pieces_liste_pieces__["a" /* ListePiecesPage */], { nummission: this.contrat.nummission }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ContratsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contrats',template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/pages/contrats/contrats.html"*/'<ion-header>\n</ion-header>\n\n\n<ion-content class="body">\n\n  <div class="tete">\n    <img width="12%" height="auto" src="../../assets/imgs/logo.png">\n    <span style="padding-bottom: 20px"> ABC immoservices</span>\n  </div>\n\n  <div class="corp">\n    <ion-grid>\n      <ion-row style="border-bottom: 1px solid;">\n        <ion-col class="title uppercase">CONTRATS OU RAPPORTS D\'ENTRETIEN</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-7 class="title">\n          <ion-row>\n            <ion-col col-3> Chaudière </ion-col>\n            <ion-toggle checked="false" [(ngModel)]="contrat.chaudiere"></ion-toggle>\n            <span style="padding: .8em .1em; color: rgba(255, 255, 255, 0.46);"> En service </span>\n            <ion-col col-6></ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-5 class="title" style="padding-left: 0;"> Rapport d\'entretien </ion-col>\n      </ion-row>\n\n      <ion-row class="form">\n        <ion-col col-2 class="addphoto" (click)="openCamera(1)" [ngClass]="{\'disableImg\': !contrat.chaudiere}">\n          <img src="{{ contrat.chaudierePhoto }}" alt="">\n        </ion-col>\n        <ion-col col-5>\n          <ion-row>\n            <ion-col col-6> Marque </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="contrat.chaudiereMarque" [disabled]="!contrat.chaudiere" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Entretien effectué </ion-col>\n            <ion-col col-6>\n              <ion-select interface="popover" [(ngModel)]="contrat.chaudiereEntretienEffectue" style="width:100%" [disabled]="!contrat.chaudiere">\n                <ion-option value="0"> Oui </ion-option>\n                <ion-option value="1"> Non </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Etat extérieur visuel </ion-col>\n            <ion-col col-6>\n              <ion-select interface="popover" [(ngModel)]="contrat.chaudiereEtat" style="width:100%" [disabled]="!contrat.chaudiere">\n                <ion-option value="Neuf"> Neuf </ion-option>\n                <ion-option value="Bon état"> Bon état </ion-option>\n                <ion-option value="Moyen"> Moyen </ion-option>\n                <ion-option value="Avancé"> Avancé </ion-option>\n                <ion-option value="Dégradé"> Dégradé </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Ajouter une observation </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="contrat.chaudiereObservation" [disabled]="!contrat.chaudiere" />\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-2 class="addphoto" (click)="openCamera(2)">\n          <img src="{{ contrat.rapportEntretienPhoto }}" alt="">\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-7 class="title">\n          <ion-row>\n            <ion-col col-3> Cumulus </ion-col>\n            <ion-toggle checked="false" [(ngModel)]="contrat.cumulus"></ion-toggle>\n            <span style="padding: .8em .1em; color: rgba(255, 255, 255, 0.46);"> En service </span>\n            <ion-col col-6></ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="form">\n        <ion-col col-2 class="addphoto" (click)="openCamera(5)" [ngClass]="{\'disableImg\': !contrat.cumulus}">\n          <img src="{{ contrat.cumulusPhoto }}" alt="">\n        </ion-col>\n        <ion-col col-5>\n          <ion-row>\n            <ion-col col-6> Marque </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="contrat.cumulusMarque" [disabled]="!contrat.cumulus" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Etat extérieur visuel </ion-col>\n            <ion-col col-6>\n              <ion-select interface="popover" [(ngModel)]="contrat.cumulusEtat" style="width:100%" [disabled]="!contrat.cumulus">\n                <ion-option value="Neuf"> Neuf </ion-option>\n                <ion-option value="Bon état"> Bon état </ion-option>\n                <ion-option value="Moyen"> Moyen </ion-option>\n                <ion-option value="Avancé"> Avancé </ion-option>\n                <ion-option value="Dégradé"> Dégradé </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Fonctionnement </ion-col>\n            <ion-col col-6>\n              <ion-select interface="popover" [(ngModel)]="contrat.cumulusFonctionnement" style="width:100%" [disabled]="!contrat.cumulus">\n                <ion-option value="Fonctionne"> Fonctionne </ion-option>\n                <ion-option value="Ne fonctionne pas"> Ne fonctionne pas </ion-option>\n                <ion-option value="Non vérifiable"> Non vérifiable </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Observations </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="contrat.cumulusObservation" [disabled]="!contrat.cumulus" />\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="title"> Attestation d\'assurance </ion-col>\n      </ion-row>\n      <ion-row class="form">\n        <ion-col col-2 class="addphoto" (click)="openCamera(3)">\n          <img src="{{ contrat.attestationPhoto }}" alt="">\n        </ion-col>\n        <ion-col col-5>\n          <ion-row>\n            <ion-col col-6> Compagnie d\'assurance </ion-col>\n            <ion-col col-6 class="text-right">\n              <input type="text" [(ngModel)]="contrat.attestationAssurance" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Date d\'effet du contrat </ion-col>\n            <ion-col col-6 class="text-right">\n              <ion-datetime [(ngModel)]="contrat.attestationDateAssurance" doneText="Définir" cancelText="Annuler" displayFormat="DD/MM/YYYY"></ion-datetime>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> N° contrat </ion-col>\n            <ion-col col-6 class="text-right">\n              <input [(ngModel)]="contrat.attestationNumeroContrat" type="text" />\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <!-- Detecteur de fumé -->\n      <ion-row style="border-bottom: 1px solid;">\n        <ion-col class="title uppercase"> Detecteur de fumée </ion-col>\n      </ion-row>\n\n      <ion-row class="form">\n        <ion-col col-7 class="no-padding">\n          <ion-row>\n            <ion-col> Présence d\'un détécteur de fumée </ion-col>\n            <ion-toggle checked="false" [(ngModel)]="contrat.detecteurFumee"></ion-toggle>\n            <span style="padding: .8em .1em; color: rgba(255, 255, 255, 0.46);">oui</span>\n            <ion-col col-6></ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col>\n          <ion-row></ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="form">\n        <ion-col col-2 class="addphoto" (click)="openCamera(4)" [ngClass]="{\'disableImg\': !contrat.detecteurFumee}">\n          <img src="{{ contrat.detecteurFumeePhoto }}" alt="">\n        </ion-col>\n        <ion-col col-3>\n          <ion-row>\n            <ion-col class="text-right">\n              <label class="title"> Etat </label>\n            </ion-col>\n            <ion-col>\n              <ion-select interface="popover" [(ngModel)]="contrat.detecteurFumeeEtat" style="width:100%" [disabled]="!contrat.detecteurFumee">\n                <ion-option value="Neuf"> Neuf </ion-option>\n                <ion-option value="Bon état"> Bon état </ion-option>\n                <ion-option value="Moyen"> Moyen </ion-option>\n                <ion-option value="Avancé"> Avancé </ion-option>\n                <ion-option value="Dégradé"> Dégradé </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="text-right">\n              <label class="title"> Contrôle </label>\n            </ion-col>\n            <ion-col>\n              <ion-select interface="popover" [(ngModel)]="contrat.detecteurFumeeControle" (ionChange)="updateFonctionnement()" style="width:100%" [disabled]="!contrat.detecteurFumee">\n                <!-- <ion-option value="f"> Contrôlé </ion-option>\n                <ion-option value="m"> Non contrôlable </ion-option> -->\n                <ion-option value="Contrôlé"> Contrôlé </ion-option>\n                <ion-option value="Non contrôlable"> Non contrôlable </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="text-right">\n              <label class="title"> Fonctionnement </label>\n            </ion-col>\n            <ion-col>\n              <ion-select interface="popover" [(ngModel)]="contrat.detecteurFumeeFonctionnement" style="width:100%" [disabled]="!contrat.detecteurFumee">\n                <ion-option value="Fonctionne"> Fonctionne </ion-option>\n                <ion-option value="Ne fonctionne pas"> Ne fonctionne pas </ion-option>\n                <ion-option value="Non vérifiable"> Non vérifiable </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="text-right">\n              <label class="title"> Localisation </label>\n            </ion-col>\n            <ion-col>\n              <input type="text" [(ngModel)]="contrat.detecteurFumeeLocalisation" [disabled]="!contrat.detecteurFumee" />\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col col-4>\n          <ion-textarea #msgInput rows="5" maxLength="255" style="background-color:#fff; color: #3b827e;width:350px;" [(ngModel)]="contrat.detecteurFumeeObservation" [disabled]="!contrat.detecteurFumee" placeholder="Observations..."></ion-textarea>\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class="pied">\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="prev()">\n          <ion-icon class="pager" name="arrow-round-back"></ion-icon>\n        </ion-col>\n        <ion-col></ion-col>\n        <ion-col (click)=" next()">\n          <ion-icon class="pager" name="arrow-round-forward" style="float: right;"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/pages/contrats/contrats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_camera_image_camera_image__["a" /* CameraImageProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_mission_data_mission_data__["a" /* MissionDataProvider */]])
    ], ContratsPage);
    return ContratsPage;
}());

//# sourceMappingURL=contrats.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventairesClesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equipements_exterieurs_equipements_exterieurs__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contrats_contrats__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_camera_image_camera_image__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_mission_data_mission_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__liste_pieces_liste_pieces__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Provider global


/**
 * Generated class for the InventairesClesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InventairesClesPage = /** @class */ (function () {
    /**
     * @todo Fiabiliser suppression
     */
    function InventairesClesPage(navCtrl, navParams, cameraImageProvider, missionDataProvider, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cameraImageProvider = cameraImageProvider;
        this.missionDataProvider = missionDataProvider;
        this.alertCtrl = alertCtrl;
        this.inventaire = {
            nummission: null,
            observation: '',
            image_inventaire_cle: "../assets/imgs/add_photo.svg",
            nbClesTotal: 0,
            list: [{ type: '', nombre: '', fonctionnement: '', obs: '' }]
        };
        this.camera = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]();
        this.cameraOptions = this.cameraImageProvider.options;
        this.inventaire.nummission = this.navParams.get('nummission');
        this.numberPiece = this.navParams.get('numberPiece');
        this.compters = this.navParams.get('compters');
        this.missionDataProvider.load(this.inventaire.nummission, 'inventaireCles').then(function (data) {
            if (data.status != 'empty') {
                var nummission = _this.inventaire.nummission;
                _this.inventaire = data.data;
                _this.inventaire.nummission = nummission;
            }
        });
    }
    InventairesClesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InventairesClesPage');
    };
    InventairesClesPage.prototype.updateValue = function (field, event, index) {
        if (field == 'type') {
            this.inventaire.list[index].type = event.target.value;
        }
        else if (field == 'obs') {
            this.inventaire.list[index].obs = event.target.value;
        }
        else if (field == 'fonctionnement') {
            this.inventaire.list[index].fonctionnement = event.target.value;
        }
        else {
            this.inventaire.list[index].nombre = event.target.value;
        }
        this.updateNbClesTotal();
    };
    InventairesClesPage.prototype.updateNbClesTotal = function () {
        var nbKeys = 0;
        for (var i = 0; i < this.inventaire.list.length; i++) {
            nbKeys += this.inventaire.list[i].nombre !== '' ? parseInt(this.inventaire.list[i].nombre) : 0;
        }
        this.inventaire.nbClesTotal = nbKeys;
    };
    InventairesClesPage.prototype.prev = function () {
        var _this = this;
        this.missionDataProvider.save(this.inventaire.nummission, 'inventaireCles', this.inventaire, 'pending');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contrats_contrats__["a" /* ContratsPage */], { nummission: this.inventaire.nummission, numberPiece: this.numberPiece,
            compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    InventairesClesPage.prototype.next = function () {
        var _this = this;
        var errorMsg = this.checkInventaireList();
        console.log(errorMsg);
        if (errorMsg != '') {
            this.alertCtrl.create({
                title: errorMsg,
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
            this.inventaire.list = this.inventaire.list.slice();
            this.missionDataProvider.save(this.inventaire.nummission, 'inventaireCles', this.inventaire, 'pending');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__equipements_exterieurs_equipements_exterieurs__["a" /* EquipementsExterieursPage */], { nummission: this.inventaire.nummission, numberPiece: this.numberPiece,
                compters: this.compters }).then(function () {
                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
            });
        }
    };
    InventairesClesPage.prototype.checkInventaireList = function () {
        var prepareInventaireList = [];
        var errorMessage = '';
        this.inventaire.list.forEach(function (element) {
            if (element.type != '') {
                if (element.nombre == '') {
                    errorMessage = 'Le nombre de clés doit être renseigné pour toutes les lignes';
                }
                if (element.fonctionnement == '') {
                    errorMessage = 'L\'état de fonctionnement doit être renseigné pour toutes les lignes';
                }
                if (element.fonctionnement == 'Autre' && element.obs == '') {
                    errorMessage = 'L\'observation est obligatoire si vous choisissez la valeur "Autre"';
                }
                prepareInventaireList.push(element);
            }
        });
        if (errorMessage != '') {
            return errorMessage;
        }
        if (prepareInventaireList.length === 0) {
            return 'Vous devez renseigner au moins une ligne de l\'inventaire';
        }
        this.inventaire.list = prepareInventaireList;
        return '';
    };
    InventairesClesPage.prototype.deleteKey = function (index) {
        var output = [];
        for (var i = 0; i < this.inventaire.list.length; i++) {
            if (index != i) {
                output.push(this.inventaire.list[i]);
            }
        }
        this.inventaire.list = output;
        this.inventaire.list = this.inventaire.list.slice();
        this.updateNbClesTotal();
    };
    InventairesClesPage.prototype.addKey = function () {
        this.inventaire.list.push({ type: '', nombre: '', fonctionnement: '', obs: '' });
        this.inventaire.list = this.inventaire.list.slice();
    };
    InventairesClesPage.prototype.openCamera = function () {
        var _this = this;
        this.camera.getPicture(this.cameraOptions)
            .then(function (imageData) {
            _this.inventaire.image_inventaire_cle = 'data:image/jpeg;base64,' + imageData;
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    InventairesClesPage.prototype.goToListPieces = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__liste_pieces_liste_pieces__["a" /* ListePiecesPage */], { nummission: this.inventaire.nummission }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    InventairesClesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inventaires-cles',template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/pages/inventaires-cles/inventaires-cles.html"*/'<ion-header>\n  <!--\n  <div class="tete">\n    <ion-icon name="ios-disc-outline"></ion-icon> ABC immoservices\n  </div>\n-->\n</ion-header>\n\n\n<ion-content class="body">\n\n  <div class="tete">\n    <img width="12%" height="auto" src="../../assets/imgs/logo.png">\n  </div>\n\n  <div class="corp">\n    <ion-grid>\n      <ion-row>\n        <ion-col class="title uppercase">Inventaires des cles</ion-col>\n        <ion-col class="title uppercase">Nombre total de clés : {{inventaire.nbClesTotal}}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="form" col-9>\n          <ngx-datatable #tab [headerHeight]="30" [rowHeight]="\'auto\'" [rows]="inventaire.list" [columnMode]="\'force\'" [limit]="100"\n            [rowClass]="getRowClass" style="width: 100%;">\n\n            <ngx-datatable-column name="Type" prop="type">\n              <ng-template let-column="column" ngx-datatable-header-template>\n                <span>Type de clé</span>\n              </ng-template>\n              <ng-template let-value="value" ngx-datatable-cell-template let-rowIndex="rowIndex" let-row="row">\n                <div><select (change)="updateValue(\'type\', $event, rowIndex)">\n                  <option value=""></option>\n                  <option [selected]="value == \'Porte palière\'" value="Porte palière">Porte palière</option>\n                  <option [selected]="value == \'Porte palière sécurisée\'" value="Porte palière sécurisée">Porte palière sécurisée</option>\n                  <option [selected]="value == \'Boîtes aux lettres\'" value="Boîtes aux lettres">Boîtes aux lettres</option>\n                  <option [selected]="value == \'Vigik\'" value="Vigik">Vigik</option>\n                  <option [selected]="value == \'Bip émetteur\'" value="Bip émetteur">Bip émetteur</option>\n                  <option [selected]="value == \'Commun\'" value="Commun">Commun</option>\n                  <option [selected]="value == \'Verrou bas\'" value="Verrou bas">Verrou bas</option>\n                  <option [selected]="value == \'Verrou haut\'" value="Verrou haut">Verrou haut</option>\n                  <option [selected]="value == \'Cave\'" value="Cave">Cave</option>\n                  <option [selected]="value == \'Garage\'" value="Garage">Garage</option>\n                  <option [selected]="value == \'Immeuble\'" value="Immeuble">Immeuble</option>\n                  <option [selected]="value == \'Local commun\'" value="Local commun">Local commun</option>\n                  <option [selected]="value == \'Non identifié\'" value="Non identifié">Non identifié</option>\n                  <option [selected]="value == \'Portail\'" value="Portail">Portail</option>\n                  <option [selected]="value == \'Porte arrière\'" value="Porte arrière">Porte arrière</option>\n                  <option [selected]="value == \'Porte accès cave\'" value="Porte accès cave">Porte d\'accès cave</option>\n                  <option [selected]="value == \'Porte accès garage\'" value="Porte accès garage">Porte d\'accès garage</option>\n                  <option [selected]="value == \'Portillon\'" value="Portillon">Portillon</option>\n                  <option [selected]="value == \'SAS\'" value="SAS">SAS</option>\n                  <option [selected]="value == \'Autre\'" value="Autre">Autre</option>\n                </select></div>\n              </ng-template>\n            </ngx-datatable-column>\n\n            <ngx-datatable-column name="Nombre" [width]="100" prop="nombre">\n              <ng-template let-column="column" ngx-datatable-header-template>\n                <div class="text-center"> Nombre </div>\n              </ng-template>\n              <ng-template let-value="value" ngx-datatable-cell-template let-rowIndex="rowIndex" let-row="row">\n                <div class="text-center">\n                  <input type="number" min="0" class="text-center" value="{{value}}" (keyup)="updateValue(\'nombre\', $event, rowIndex)" style="border: 0px solid;height: 20px;width: 60px;" /></div>\n              </ng-template>\n            </ngx-datatable-column>\n\n            <ngx-datatable-column name="Fonctionnement" prop="fonctionnement">\n              <ng-template let-column="column" ngx-datatable-header-template>\n                <span>Fonctionnement</span>\n              </ng-template>\n              <ng-template let-value="value" ngx-datatable-cell-template let-rowIndex="rowIndex" let-row="row">\n                <div><select (change)="updateValue(\'fonctionnement\', $event, rowIndex)">\n                  <option value=""></option>\n                  <option [selected]="value == \'Fonctionne\'" value="Fonctionne">Fonctionne</option>\n                  <option [selected]="value == \'Ne fonctionne pas\'" value="Ne fonctionne pas">Ne fonctionne pas</option>\n                  <option [selected]="value == \'Non vérifiable\'" value="Non vérifiable">Non vérifiable</option>\n                  <option [selected]="value == \'Autre\'" value="Autre">Autre</option>\n                </select></div>\n              </ng-template>\n            </ngx-datatable-column>\n\n            <ngx-datatable-column name="Obs" prop="obs">\n              <ng-template let-column="column" ngx-datatable-header-template>\n                <span> Observation </span>\n              </ng-template>\n              <ng-template let-value="value" ngx-datatable-cell-template let-rowIndex="rowIndex" let-row="row">\n                <div><input type="text" class="text-center" value="{{value}}" style="border: 0px solid;height: 20px;width: 100%;"\n                    placeholder="Votre observation ..." (keyup)="updateValue(\'obs\', $event, rowIndex)" /></div>\n              </ng-template>\n            </ngx-datatable-column>\n\n            <ngx-datatable-column [width]="50">\n              <ng-template let-column="column" ngx-datatable-header-template>\n                Action\n              </ng-template>\n              <ng-template let-value="value" ngx-datatable-cell-template let-rowIndex="rowIndex">\n                <div *ngIf="rowIndex != 0">\n                  <a (click)="deleteKey(rowIndex)" class="delete">Supprimer</a>\n                </div>\n              </ng-template>\n            </ngx-datatable-column>\n\n          </ngx-datatable>\n        </ion-col>\n        <ion-col class="form">\n          <ion-row>\n            <ion-col> Observation </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="text-right">\n              <ion-textarea #msgInput rows="6" maxLength="255" style="background-color:#fff; color: #3b827e" [(ngModel)]="inventaire.observation"></ion-textarea>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col> Photo </ion-col>\n          </ion-row>\n          <ion-row class="addphoto" (click)="openCamera(1)">\n            <img src="{{ inventaire.image_inventaire_cle }}" alt="">\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class="pied">\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="prev()">\n          <ion-icon class="pager" name="arrow-round-back"></ion-icon>\n        </ion-col>\n        <button *ngIf="numberPiece > 0" ion-button class="middle-btn" round outline (click)="goToListPieces()">Recapitulatif des pièces</button>\n        <button ion-button class="middle-btn" round outline (click)="addKey()">Ajouter une clé</button>\n        <ion-col (click)="next()">\n          <ion-icon class="pager" name="arrow-round-forward" style="float: right;"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/pages/inventaires-cles/inventaires-cles.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_camera_image_camera_image__["a" /* CameraImageProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_mission_data_mission_data__["a" /* MissionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], InventairesClesPage);
    return InventairesClesPage;
}());

//# sourceMappingURL=inventaires-cles.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipementsExterieursPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__salle_salle__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inventaires_cles_inventaires_cles__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_camera_image_camera_image__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_mission_data_mission_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__liste_pieces_liste_pieces__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Provider global


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
        this.camera = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]();
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inventaires_cles_inventaires_cles__["a" /* InventairesClesPage */], { nummission: this.equipement.nummission, numberPiece: this.numberPiece,
            compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    EquipementsExterieursPage.prototype.next = function () {
        var _this = this;
        this.missionDataProvider.save(this.equipement.nummission, 'equipementsExterieurs', this.equipement, 'pending');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__salle_salle__["a" /* SallePage */], { nummission: this.equipement.nummission, numberPiece: this.numberPiece,
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__liste_pieces_liste_pieces__["a" /* ListePiecesPage */], { nummission: this.equipement.nummission }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    EquipementsExterieursPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-equipements-exterieurs',template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/pages/equipements-exterieurs/equipements-exterieurs.html"*/'<!--\n  Generated template for the EquipementsExterieursPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <!--\n  <div class="tete">\n    <ion-icon name="ios-disc-outline"></ion-icon> ABC immoservices\n  </div>\n  -->\n</ion-header>\n\n\n<ion-content class="body">\n\n  <div class="tete">\n    <img width="12%" height="auto" src="../../assets/imgs/logo.png">\n    <!-- <span style="padding-bottom: 20px"> ABC immoservices</span> -->\n  </div>\n\n\n  <div class="corp">\n    <ion-grid>\n      <ion-row style="border-bottom: 1px solid;">\n        <ion-col class="title uppercase">Equipements extérieurs</ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="title"> Pass posé\n          <ion-toggle checked="false" [(ngModel)]="equipement.passepose"></ion-toggle>\n          <span style="padding: .8em .1em; color: rgba(255, 255, 255, 0.46);"> Oui </span>\n        </ion-col>\n        <ion-col class="title"> Visiophone\n          <ion-toggle checked="false" [(ngModel)]="equipement.visiophone"></ion-toggle>\n          <span style="padding: .8em .1em; color: rgba(255, 255, 255, 0.46);"> Oui </span>\n        </ion-col>\n      </ion-row>\n      <ion-row class="form">\n        <ion-col col-2 class="addphoto" (click)="openCamera(1)" [ngClass]="{\'disableImg\': !equipement.passepose}">\n          <img src="{{ equipement.passeposePhoto }}" alt="">\n        </ion-col>\n        <ion-col col-4>\n          <ion-row>\n            <ion-col>Etat</ion-col>\n            <ion-col style="padding-right: 50px !important;">\n              <ion-select interface="popover" [(ngModel)]="equipement.passeposeEtat" [disabled]="!equipement.passepose">\n                <ion-option value="Neuf"> Neuf </ion-option>\n                <ion-option value="Bon état"> Bon état </ion-option>\n                <ion-option value="Moyen"> Moyen </ion-option>\n                <ion-option value="Avancé"> Avancé </ion-option>\n                <ion-option value="Dégradé"> Dégradé </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Contrôle</ion-col>\n            <ion-col style="padding-right: 50px !important;">\n              <ion-select interface="popover" [(ngModel)]="equipement.passeposeControle" (ionChange)="updateFonctionnement(\'passepose\')" style="width:100%" [disabled]="!equipement.passepose">\n                <!-- <ion-option value="f"> Contrôlé </ion-option>\n                <ion-option value="m"> Non contrôlable </ion-option> -->\n                <ion-option value="Contrôlé"> Contrôlé </ion-option>\n                <ion-option value="Non contrôlable"> Non contrôlable </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Fonctionnement</ion-col>\n            <ion-col style="padding-right: 50px !important;">\n              <ion-select interface="popover" [(ngModel)]="equipement.passeposeFonctionnement" style="width:100%" [disabled]="!equipement.passepose">\n                <ion-option value="Fonctionne"> Fonctionne </ion-option>\n                <ion-option value="Ne fonctionne pas"> Ne fonctionne pas </ion-option>\n                <ion-option value="Non vérifiable"> Non vérifiable </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-textarea #msgInput rows="3" maxLength="255" style="background-color:#fff; color: #3b827e;width:350px;" [(ngModel)]="equipement.passeposeObservation" [disabled]="!equipement.passepose" placeholder="Observations..."></ion-textarea>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-2 class="addphoto" (click)="openCamera(2)" [ngClass]="{\'disableImg\': !equipement.visiophone}">\n          <img src="{{ equipement.visiophonePhoto }}" alt="">\n        </ion-col>\n        <ion-col col-4>\n          <ion-row>\n            <ion-col>Etat</ion-col>\n            <ion-col style="padding-right: 50px !important;">\n              <ion-select interface="popover" [(ngModel)]="equipement.visiophoneEtat" [disabled]="!equipement.visiophone">\n                <ion-option value="Neuf"> Neuf </ion-option>\n                <ion-option value="Bon état"> Bon état </ion-option>\n                <ion-option value="Moyen"> Moyen </ion-option>\n                <ion-option value="Avancé"> Avancé </ion-option>\n                <ion-option value="Dégradé"> Dégradé </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Contrôle</ion-col>\n            <ion-col style="padding-right: 50px !important;">\n              <ion-select interface="popover" [(ngModel)]="equipement.visiophoneControle" (ionChange)="updateFonctionnement(\'visiophone\')" style="width:100%" [disabled]="!equipement.visiophone">\n                <!-- <ion-option value="f"> Contrôlé </ion-option>\n                <ion-option value="m"> Non contrôlable </ion-option> -->\n                <ion-option value="Contrôlé"> Contrôlé </ion-option>\n                <ion-option value="Non contrôlable"> Non contrôlable </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Fonctionnement</ion-col>\n            <ion-col style="padding-right: 50px !important;">\n              <ion-select interface="popover" [(ngModel)]="equipement.visiophoneFonctionnement" style="width:100%" [disabled]="!equipement.visiophone">\n                <ion-option value="Fonctionne"> Fonctionne </ion-option>\n                <ion-option value="Ne fonctionne pas"> Ne fonctionne pas </ion-option>\n                <ion-option value="Non vérifiable"> Non vérifiable </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-textarea #msgInput rows="3" maxLength="255" style="background-color:#fff; color: #3b827e;width:350px;" [(ngModel)]="equipement.visiophoneObservation" [disabled]="!equipement.visiophone" placeholder="Observations..."></ion-textarea>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="title"> Interphone\n          <ion-toggle checked="false" [(ngModel)]="equipement.interphone"></ion-toggle>\n          <span> Oui </span>\n        </ion-col>\n        <ion-col class="title"> Sonnette\n          <ion-toggle checked="false" [(ngModel)]="equipement.sonnette"></ion-toggle>\n          <span> Oui </span>\n        </ion-col>\n      </ion-row>\n      <ion-row class="form">\n        <ion-col col-2 class="addphoto" (click)="openCamera(3)" [ngClass]="{\'disableImg\': !equipement.interphone}">\n          <img src="{{ equipement.interphonePhoto }}" alt="">\n        </ion-col>\n        <ion-col col-4>\n          <ion-row>\n            <ion-col>Etat</ion-col>\n            <ion-col style="padding-right: 50px !important;">\n              <ion-select interface="popover" [(ngModel)]="equipement.interphoneEtat" [disabled]="!equipement.interphone">\n                <ion-option value="Neuf"> Neuf </ion-option>\n                <ion-option value="Bon état"> Bon état </ion-option>\n                <ion-option value="Moyen"> Moyen </ion-option>\n                <ion-option value="Avancé"> Avancé </ion-option>\n                <ion-option value="Dégradé"> Dégradé </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Contrôle</ion-col>\n            <ion-col style="padding-right: 50px !important;">\n              <ion-select interface="popover" [(ngModel)]="equipement.interphoneControle" (ionChange)="updateFonctionnement(\'interphone\')" style="width:100%" [disabled]="!equipement.interphone">\n                <!-- <ion-option value="f"> Contrôlé </ion-option>\n                <ion-option value="m"> Non contrôlable </ion-option> -->\n                <ion-option value="Contrôlé"> Contrôlé </ion-option>\n                <ion-option value="Non contrôlable"> Non contrôlable </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Fonctionnement</ion-col>\n            <ion-col style="padding-right: 50px !important;">\n              <ion-select interface="popover" [(ngModel)]="equipement.interphoneFonctionnement" style="width:100%" [disabled]="!equipement.interphone">\n                <ion-option value="Fonctionne"> Fonctionne </ion-option>\n                <ion-option value="Ne fonctionne pas"> Ne fonctionne pas </ion-option>\n                <ion-option value="Non vérifiable"> Non vérifiable </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-textarea #msgInput rows="3" maxLength="255" style="background-color:#fff; color: #3b827e;width:350px;" [(ngModel)]="equipement.interphoneObservation" [disabled]="!equipement.interphone" placeholder="Observations..."></ion-textarea>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-2 class="addphoto" (click)="openCamera(4)" [ngClass]="{\'disableImg\': !equipement.sonnette}">\n          <img src="{{ equipement.sonnettePhoto }}" alt="">\n        </ion-col>\n        <ion-col col-4>\n          <ion-row>\n            <ion-col>Etat</ion-col>\n            <ion-col style="padding-right: 50px !important;">\n              <ion-select interface="popover" [(ngModel)]="equipement.sonnetteEtat" [disabled]="!equipement.sonnette">\n                <ion-option value="Neuf"> Neuf </ion-option>\n                <ion-option value="Bon état"> Bon état </ion-option>\n                <ion-option value="Moyen"> Moyen </ion-option>\n                <ion-option value="Avancé"> Avancé </ion-option>\n                <ion-option value="Dégradé"> Dégradé </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Contrôle</ion-col>\n            <ion-col style="padding-right: 50px !important;">\n              <ion-select interface="popover" [(ngModel)]="equipement.sonnetteControle" (ionChange)="updateFonctionnement(\'sonnette\')" style="width:100%" [disabled]="!equipement.sonnette">\n                <!-- <ion-option value="f"> Contrôlé </ion-option>\n                <ion-option value="m"> Non contrôlable </ion-option> -->\n                <ion-option value="Contrôlé"> Contrôlé </ion-option>\n                <ion-option value="Non contrôlable"> Non contrôlable </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Fonctionnement</ion-col>\n            <ion-col style="padding-right: 50px !important;">\n              <ion-select interface="popover" [(ngModel)]="equipement.sonnetteFonctionnement" style="width:100%" [disabled]="!equipement.sonnette">\n                <ion-option value="Fonctionne"> Fonctionne </ion-option>\n                <ion-option value="Ne fonctionne pas"> Ne fonctionne pas </ion-option>\n                <ion-option value="Non vérifiable"> Non vérifiable </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-textarea #msgInput rows="3" maxLength="255" style="background-color:#fff; color: #3b827e;width:350px;" [(ngModel)]="equipement.sonnetteObservation" [disabled]="!equipement.sonnette" placeholder="Observations..."></ion-textarea>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n          <ion-row>\n        <ion-col class="title">Boîte aux lettres\n          <ion-toggle checked="false" [(ngModel)]="equipement.boiteauxlettres"></ion-toggle>\n          <span> Oui </span>\n        </ion-col>\n        <ion-col class="title"></ion-col>\n      </ion-row>\n      <ion-row class="form">\n        <ion-col col-2 class="addphoto" (click)="openCamera(14)" [ngClass]="{\'disableImg\': !equipement.boiteauxlettres}">\n          <img src="{{ equipement.boiteauxlettresPhoto }}" alt="">\n        </ion-col>\n        <ion-col col-4>\n          <ion-row>\n            <ion-col>Etat</ion-col>\n            <ion-col style="padding-right: 50px !important;">\n              <ion-select interface="popover" [(ngModel)]="equipement.boiteauxlettresEtat" [disabled]="!equipement.boiteauxlettres">\n                <ion-option value="Neuf"> Neuf </ion-option>\n                <ion-option value="Bon état"> Bon état </ion-option>\n                <ion-option value="Moyen"> Moyen </ion-option>\n                <ion-option value="Avancé"> Avancé </ion-option>\n                <ion-option value="Dégradé"> Dégradé </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Contrôle</ion-col>\n            <ion-col style="padding-right: 50px !important;">\n              <ion-select interface="popover" [(ngModel)]="equipement.boiteauxlettresControle" (ionChange)="updateFonctionnement(\'boiteauxlettres\')" style="width:100%" [disabled]="!equipement.boiteauxlettres">\n                <!-- <ion-option value="f"> Contrôlé </ion-option>\n                <ion-option value="m"> Non contrôlable </ion-option> -->\n                <ion-option value="Contrôlé"> Contrôlé </ion-option>\n                <ion-option value="Non contrôlable"> Non contrôlable </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Fonctionnement</ion-col>\n            <ion-col style="padding-right: 50px !important;">\n              <ion-select interface="popover" [(ngModel)]="equipement.boiteauxlettresFonctionnement" style="width:100%" [disabled]="!equipement.boiteauxlettres">\n                <ion-option value="Fonctionne"> Fonctionne </ion-option>\n                <ion-option value="Ne fonctionne pas"> Ne fonctionne pas </ion-option>\n                <ion-option value="Non vérifiable"> Non vérifiable </ion-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-textarea #msgInput rows="3" maxLength="255" style="background-color:#fff; color: #3b827e;width:350px;" [(ngModel)]="equipement.boiteauxlettresObservation" [disabled]="!equipement.boiteauxlettres" placeholder="Observations..."></ion-textarea>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-2></ion-col>\n        <ion-col col-4></ion-col>\n      </ion-row>\n\n      <!-- Pièce d\'identité -->\n      <ion-row style="border-bottom: 1px solid;">\n        <ion-col class="title uppercase">Pièces d\'identité</ion-col>\n      </ion-row>\n      <ion-row class="form">\n        <ion-col col-2 class="addphoto" (click)="openCamera(5)">\n          <img src="{{ equipement.pieceIdentitePhoto1 }}" alt="">\n        </ion-col>\n        <ion-col col-4>\n          <ion-row>\n            <ion-col> Numéro </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="text-right">\n              <input [(ngModel)]="equipement.pieceIdentiteNumero1" type="text" />\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-2 class="addphoto" (click)="openCamera(6)">\n          <img src="{{ equipement.pieceIdentitePhoto2 }}" alt="">\n        </ion-col>\n        <ion-col col-4>\n          <ion-row>\n            <ion-col> Numéro </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="text-right">\n              <input [(ngModel)]="equipement.pieceIdentiteNumero2" type="text" />\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row class="form">\n        <ion-col col-2 class="addphoto" (click)="openCamera(8)">\n          <img src="{{ equipement.pieceIdentitePhoto3 }}" alt="">\n        </ion-col>\n        <ion-col col-4>\n          <ion-row>\n            <ion-col> Numéro </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="text-right">\n              <input [(ngModel)]="equipement.pieceIdentiteNumero3" type="text" />\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-2 class="addphoto" (click)="openCamera(9)">\n          <img src="{{ equipement.pieceIdentitePhoto4 }}" alt="">\n        </ion-col>\n        <ion-col col-4>\n          <ion-row>\n            <ion-col> Numéro </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class="text-right">\n              <input [(ngModel)]="equipement.pieceIdentiteNumero4" type="text" />\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <!-- procuration -->\n      <ion-row style="border-bottom: 1px solid;">\n        <ion-col class="title uppercase">Procurations</ion-col>\n      </ion-row>\n      <ion-row class="form">\n        <ion-col col-2 class="addphoto procuration" (click)="openCamera(7)">\n          <img src="{{ equipement.procurationPhoto }}" alt="">\n        </ion-col>\n        <ion-col col-2 class="addphoto procuration" (click)="openCamera(10)">\n          <img src="{{ equipement.procurationPhoto2 }}" alt="">\n        </ion-col>\n        <ion-col col-4>\n          <ion-textarea #msgInput rows="5" maxLength="255" style="background-color:#fff; color: #3b827e;width:100%;height:120px" [(ngModel)]="equipement.procurationObservation" placeholder="Observations..."></ion-textarea>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class="pied">\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="prev()">\n          <ion-icon class="pager" name="arrow-round-back"></ion-icon>\n        </ion-col>\n        <!-- <ion-col>\n            <button ion-button round outline (click)="goToListPieces()">Recapitulatif des pieces</button>\n        </ion-col> -->\n        <ion-col (click)="next()">\n          <ion-icon class="pager" name="arrow-round-forward" style="float: right;"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/pages/equipements-exterieurs/equipements-exterieurs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_camera_image_camera_image__["a" /* CameraImageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_mission_data_mission_data__["a" /* MissionDataProvider */]])
    ], EquipementsExterieursPage);
    return EquipementsExterieursPage;
}());

//# sourceMappingURL=equipements-exterieurs.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrendrePhotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__salle_salle__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selection_defaut_selection_defaut__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_salle_data_salle_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_pano_data_pano_data__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_mission_data_mission_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__liste_pieces_liste_pieces__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// Provider global


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
    }
    PrendrePhotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrendrePhotoPage');
    };
    PrendrePhotoPage.prototype.goToSalle = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__salle_salle__["a" /* SallePage */], { nummission: this.nummission }).then(function () {
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
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__selection_defaut_selection_defaut__["a" /* SelectionDefautPage */], { nummission: _this.nummission }).then(function () {
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
            };
            this.camera.getPicture(options).then(function (imageData) {
                self_1.imgPanoramiqueDefault = 'data:image/jpeg;base64,' + imageData;
                _this.generateFromImage(self_1.imgPanoramiqueDefault, 3000, 3000, 1, function (data) {
                    self_1.imgPanoramique = data;
                });
                _this.loading = _this.loadingCtrl.create({
                    content: 'La prise de vue 360° est en cours de traitement.'
                });
                _this.loading.present().then(function (_) {
                    _this.panoDataProvider.setImagePano(_this.imgPanoramique);
                    _this.panoDataProvider.setImagePanoDefault(_this.imgPanoramiqueDefault);
                    _this.salleDataProvider.setNomPiece(_this.nomPiece);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__selection_defaut_selection_defaut__["a" /* SelectionDefautPage */], { nummission: _this.nummission }).then(function () {
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
                correctOrientation: true
            };
            this.camera.getPicture(options).then(function (imageData) {
                self_2.imgPanoramiqueDefault = 'data:image/jpeg;base64,' + imageData;
                _this.generateFromImage(self_2.imgPanoramiqueDefault, 3000, 3000, 1, function (data) {
                    self_2.imgPanoramique = data;
                });
                _this.loading = _this.loadingCtrl.create({
                    content: 'La prise de vue 360° est en cours de traitement.'
                });
                _this.loading.present().then(function (_) {
                    _this.panoDataProvider.setImagePano(_this.imgPanoramique);
                    _this.panoDataProvider.setImagePanoDefault(_this.imgPanoramiqueDefault);
                    _this.salleDataProvider.setNomPiece(_this.nomPiece);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__selection_defaut_selection_defaut__["a" /* SelectionDefautPage */], { nummission: _this.nummission }).then(function () {
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
                                self.imgPanoramiqueDefault = reader.result;
                                self.currentPicture = self.currentThetaState.fingerprint;
                                self.panoDataProvider.setImagePano(self.imgPanoramique);
                                self.panoDataProvider.setImagePanoDefault(self.imgPanoramiqueDefault);
                                self.salleDataProvider.setNomPiece(self.nomPiece);
                                self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__selection_defaut_selection_defaut__["a" /* SelectionDefautPage */], { nummission: self.nummission }).then(function () {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__liste_pieces_liste_pieces__["a" /* ListePiecesPage */], { nummission: this.nummission }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    PrendrePhotoPage.prototype.generateFromImage = function (img, MAX_WIDTH, MAX_HEIGHT, quality, callback) {
        if (MAX_WIDTH === void 0) { MAX_WIDTH = 6000; }
        if (MAX_HEIGHT === void 0) { MAX_HEIGHT = 6000; }
        if (quality === void 0) { quality = 1; }
        var canvas = document.createElement("canvas");
        var image = new Image();
        image.onload = function () {
            var width = image.width;
            var height = image.height;
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            }
            else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, width, height);
            // IMPORTANT: 'jpeg' NOT 'jpg'
            var dataUrl = canvas.toDataURL('image/jpeg', quality);
            callback(dataUrl);
        };
        image.src = img;
    };
    PrendrePhotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-prendre-photo',template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/pages/prendre-photo/prendre-photo.html"*/'<ion-header>\n  <!--\n  <div class="tete">\n    <ion-icon name="ios-disc-outline"></ion-icon> ABC immoservices\n  </div>\n  -->\n  <div class="tete">\n    <img width="12%" height="auto" src="../../assets/imgs/logo.png">\n  </div>\n</ion-header>\n\n<ion-content padding class="content" [ngStyle]="{\'background-image\': \'url(\' + salle.image + \')\'}">\n  <ion-grid>\n    <ion-row>\n      <ion-col class="background" col-md-12 col-sm-12>\n        <div class="row-center text_content">\n          <div>\n            <ion-list>\n              <ion-item style="width: 50%; margin: auto">\n                <ion-input style="width: 100px!important; text-align: center" [(ngModel)]="nomPiece" type="text" placeholder="Nom de la pièce" (focusout)="checkPieceNom()"></ion-input>\n              </ion-item>\n            </ion-list>\n          </div>\n          <div style="font-weight: bold;">\n            Prenez une photo de la pièce avec votre\n            camera 360°\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <div class="pied">\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="goToSalle()">\n          <ion-icon class="pager" name="arrow-round-back"></ion-icon>\n        </ion-col>\n        <button ion-button class="middle-btn" round outline (click)="newPicture()">Prendre une photo 360°</button>\n        <button ion-button class="middle-btn" round outline (click)="prendrePhotoDepuisTablette()">Prendre une photo avec la tablette</button>\n        <button ion-button class="middle-btn" round outline (click)="prendrePhoto()">Choisir une photo dans la galerie</button>\n        <ion-col>\n          <ion-icon class="pager" style="float: right;"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/pages/prendre-photo/prendre-photo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_salle_data_salle_data__["a" /* SalleDataProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_pano_data_pano_data__["a" /* PanoDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_9__providers_mission_data_mission_data__["a" /* MissionDataProvider */]])
    ], PrendrePhotoPage);
    return PrendrePhotoPage;
}());

//# sourceMappingURL=prendre-photo.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WsPanoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pano_data_pano_data__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WsPanoProvider = /** @class */ (function () {
    function WsPanoProvider(http, sqlite, panoProvider) {
        this.http = http;
        this.sqlite = sqlite;
        this.panoProvider = panoProvider;
        console.log('Hello WsPanoProvider Provider');
    }
    WsPanoProvider.prototype.getAllIDPieces = function (missionId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql("SELECT id FROM mission_data WHERE mission_id =? AND screen LIKE 'salle%'", [missionId])
                    .then(function (res) {
                    resolve(res.rows);
                })
                    .catch(function (e) { return console.log(e); });
            }).catch(function (e) {
                console.log(e);
            });
        });
    };
    WsPanoProvider.prototype.getPieceById = function (idPiece) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql("SELECT data FROM mission_data WHERE id =?", [idPiece])
                    .then(function (res) {
                    resolve(res.rows);
                })
                    .catch(function (e) { return console.log(e); });
            }).catch(function (e) {
                console.log(e);
            });
        });
    };
    WsPanoProvider.prototype.countAllPieces = function (missionId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql("SELECT count(*) as totalPiece FROM mission_data WHERE mission_id =? AND screen LIKE 'salle%'", [missionId])
                    .then(function (res) {
                    _this.results = [];
                    _this.results.push({
                        totalPiece: res[0].rows.item(0).totalPiece
                    });
                    // for(let i=0; i < res.rows.length; i++) {
                    // 	this.results.push({
                    // 		totalPiece:res.rows.item(i).totalPiece
                    // 	})
                    // }
                    resolve(_this.results);
                })
                    .catch(function (e) { return console.log(e); });
            }).catch(function (e) {
                console.log(e);
            });
        });
    };
    WsPanoProvider.prototype.deletePiece = function (idPiece) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql("DELETE FROM mission_data WHERE id=?", [idPiece]).then(function () {
                    resolve();
                }).catch(function (error) {
                    console.log("error", error);
                    reject();
                });
            });
        });
    };
    WsPanoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_3__pano_data_pano_data__["a" /* PanoDataProvider */]])
    ], WsPanoProvider);
    return WsPanoProvider;
}());

//# sourceMappingURL=ws-pano.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdlProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EdlProvider = /** @class */ (function () {
    function EdlProvider() {
        // Mocks
        this.types = [
            {
                id: 1,
                name: 'Equipement',
                typeEnfant: [
                    {
                        'id': 9,
                        'parentId': 0,
                        'name': 'Porte',
                        'selected': false
                    },
                    {
                        'id': 8,
                        'parentId': 0,
                        'name': 'Sol',
                        'selected': false
                    },
                    {
                        'id': 7,
                        'parentId': 0,
                        'name': 'Plinthes',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Mur accès',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Mur gauche',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Mur droit',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Mur face',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Plafond',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Eclairage artificiel',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Fenêtre',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Porte fenêtre',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Volets',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Ventilation',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Balcon',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Radiateur',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Placard',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Prise de courant',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Prise TV',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Prise Téléphone',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Interrupteur',
                        'selected': false
                    },
                    {
                        'id': 6,
                        'parentId': 0,
                        'name': 'Divers',
                        'selected': false
                    }
                ],
                selected: false
            },
            {
                id: 2,
                name: 'Nature',
                typeEnfant: [
                    {
                        'id': 10,
                        'parentId': 0,
                        'name': 'Peinture',
                        'selected': false
                    },
                    {
                        'id': 11,
                        'parentId': 0,
                        'name': 'Carrelage',
                        'selected': false
                    },
                    {
                        'id': 12,
                        'parentId': 0,
                        'name': 'Bois',
                        'selected': false
                    },
                    {
                        'id': 13,
                        'parentId': 0,
                        'name': 'Vert',
                        'selected': false
                    },
                    {
                        'id': 14,
                        'parentId': 0,
                        'name': 'Autre',
                        'selected': false
                    }
                ],
                selected: false
            },
            {
                id: 3,
                name: 'Couleur',
                typeEnfant: [
                    {
                        'id': 15,
                        'parentId': 0,
                        'name': 'Effritement',
                        'selected': false
                    },
                    {
                        'id': 16,
                        'parentId': 0,
                        'name': 'Décoloration',
                        'selected': false
                    }
                ],
                selected: false
            },
            {
                id: 4,
                name: 'Etat d\'usure',
                typeEnfant: [
                    {
                        'id': 17,
                        'parentId': 0,
                        'name': 'Mauvais',
                        'selected': false
                    },
                    {
                        'id': 18,
                        'parentId': 0,
                        'name': 'Très mauvais',
                        'selected': false
                    },
                    {
                        'id': 19,
                        'parentId': 0,
                        'name': 'Bonne',
                        'selected': false
                    }
                ],
                selected: false
            },
        ];
        this.salles = [
            {
                id: 0,
                name: 'Pièce sèche',
                image: '../assets/imgs/salon.png'
            },
            {
                id: 1,
                name: 'Cuisine',
                image: '../assets/imgs/cuisine.png'
            },
            {
                id: 2,
                name: 'Salles de bains-WC',
                image: '../assets/imgs/douche.png'
            },
            {
                id: 3,
                name: 'Cave-Parking',
                image: '../assets/imgs/parking.jpg'
            },
            {
                id: 4,
                name: 'Jardin-Extérieur',
                image: '../assets/imgs/jardin.jpg'
            },
        ];
    }
    EdlProvider.prototype.getTypeDefaut = function () {
        return this.types;
    };
    EdlProvider.prototype.getSalles = function () {
        return this.salles;
    };
    EdlProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EdlProvider);
    return EdlProvider;
}());

//# sourceMappingURL=edl.js.map

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contrats/contrats.module": [
		526,
		6
	],
	"../pages/detail-mission/detail-mission.module": [
		530,
		5
	],
	"../pages/equipements-exterieurs/equipements-exterieurs.module": [
		531,
		4
	],
	"../pages/inventaires-cles/inventaires-cles.module": [
		527,
		3
	],
	"../pages/liste-pieces/liste-pieces.module": [
		528,
		2
	],
	"../pages/releve-compteurs/releve-compteurs.module": [
		532,
		1
	],
	"../pages/signature/signature.module": [
		529,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 234;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissionDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the WsMissionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MissionDataProvider = /** @class */ (function () {
    function MissionDataProvider(sqlite) {
        this.sqlite = sqlite;
        console.log('MissionDataProvider loaded');
    }
    MissionDataProvider.prototype.lsSetItem = function (varname, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({ name: 'databaseEDL.db', location: 'default' })
                .then(function (db) {
                db.executeSql("SELECT value FROM local_storage WHERE varname = ?", [varname])
                    .then(function (data) {
                    console.log('local_storage - set ' + varname, data);
                    if (data.rows.length == 0) {
                        console.log('local_storage - insert ', varname, value);
                        db.executeSql("INSERT INTO local_storage ('varname', 'value') VALUES(?, ?)", [varname, JSON.stringify(value)])
                            .then(function (result) {
                            resolve(value);
                        })
                            .catch(function (error) {
                            reject();
                        });
                    }
                    else {
                        console.log('local_storage - update ', varname, value);
                        db.executeSql("UPDATE local_storage SET value = ? WHERE varname = ?", [JSON.stringify(value), varname])
                            .then(function (result) {
                            resolve(value);
                        })
                            .catch(function (error) {
                            reject();
                        });
                    }
                })
                    .catch(function (error) {
                    reject();
                });
            }).catch(function () {
                reject();
            });
        });
    };
    MissionDataProvider.prototype.lsGetItem = function (varname) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                console.log('local_storage - get ', varname);
                db.executeSql("SELECT value FROM local_storage WHERE varname = ?", [varname]).then(function (data) {
                    if (data.rows.length == 0) {
                        return resolve();
                    }
                    console.log('local_storage - get ' + varname + ': result ', JSON.parse(data.rows.item(0).value));
                    return resolve(JSON.parse(data.rows.item(0).value));
                })
                    .catch(function (error) {
                    reject();
                });
            })
                .catch(function (error) {
                reject();
            });
        });
    };
    MissionDataProvider.prototype.lsRemove = function (varname) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                console.log('local_storage - remove', varname);
                db.executeSql("DELETE FROM local_storage WHERE varname = ?", [varname]).then(function (data) {
                    console.log('local_storage - remove : ok');
                    return resolve();
                })
                    .catch(function (error) {
                    reject();
                });
            })
                .catch(function (error) {
                reject();
            });
        });
    };
    MissionDataProvider.prototype.lsTruncate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            }).then(function (db) {
                console.log('local_storage - truncate');
                db.executeSql("DELETE FROM local_storage").then(function (data) {
                    console.log('local_storage - truncate ok');
                    resolve();
                }).catch(function (error) {
                    console.log('local_storage - truncate ko');
                    reject();
                });
            });
        });
    };
    MissionDataProvider.prototype.updateStatus = function (dataId, status) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("UPDATE mission_data SET status = ? WHERE id = ?", [status, dataId])
                    .then(function (data) {
                    console.log('Statut de la ligne ' + dataId + ' mis à jour pour ' + status);
                    resolve();
                })
                    .catch(function (error) {
                    console.error('Impossible de récupérer les données de la mission', error);
                    reject();
                });
            });
        });
    };
    MissionDataProvider.prototype.updateAllByMissionId = function (missionId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("UPDATE mission_data SET status = 'pending' WHERE mission_id = ?", [missionId])
                    .then(function (data) {
                    return resolve();
                })
                    .catch(function (error) {
                    reject();
                });
            })
                .catch(function (error) {
                reject();
            });
        });
    };
    MissionDataProvider.prototype.getAllByMissionId = function (missionId, status) {
        var _this = this;
        var missionData = [];
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("SELECT *, (SELECT COUNT(*) FROM mission_data WHERE mission_id = ?) AS nbLines FROM mission_data WHERE mission_id = ? AND status = ? ORDER BY RANDOM() LIMIT 1", [missionId, missionId, status])
                    .then(function (data) {
                    if (data.rows.length == 0) {
                        console.log('aucune mission à synchroniser');
                        return resolve(false);
                    }
                    for (var i = 0; i < data.rows.length; i++) {
                        missionData.push(data.rows.item(i));
                    }
                    return resolve(missionData);
                })
                    .catch(function (error) {
                    console.error('Impossible de récupérer les données de la mission', JSON.stringify(error));
                    reject();
                });
            })
                .catch(function (error) {
                console.error('Impossible de récupérer les données de la mission', JSON.stringify(error));
                reject();
            });
        });
    };
    MissionDataProvider.prototype.save = function (missionId, screenLabel, screenData, status) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({ name: 'databaseEDL.db', location: 'default' })
                .then(function (db) {
                db.executeSql("SELECT * FROM mission_data WHERE mission_id = " + missionId + " AND screen = '" + screenLabel.replace(/\'/g, "''") + "'", [])
                    .then(function (data) {
                    // Aucune donnée pour cet mission et cet écran, on les enregistre
                    if (data.rows.length == 0) {
                        db.executeSql("INSERT INTO mission_data ('mission_id', 'screen', 'data', 'status') VALUES(?, ?, ?, ?)", [missionId, screenLabel.replace(/\'/g, "''"), JSON.stringify(screenData), status])
                            .then(function (result) {
                            console.log("Données de l'écran " + screenLabel + " sauvegardées");
                            resolve(screenData);
                        })
                            .catch(function (error) {
                            console.error('Impossible de sauvegarder les données de l\'écran ' + screenLabel, JSON.stringify(error));
                            reject();
                        });
                    }
                    else {
                        db.executeSql("UPDATE mission_data SET data = ?, status = ? WHERE mission_id = ? AND screen = ?", [JSON.stringify(screenData), status, missionId, screenLabel.replace(/\'/g, "''")])
                            .then(function (result) {
                            console.log("Données de l'écran " + screenLabel + " sauvegardées");
                            resolve(screenData);
                        })
                            .catch(function (error) {
                            console.error('Impossible de sauvegarder les données de l\'écran ' + screenLabel, JSON.stringify(error));
                            reject();
                        });
                    }
                })
                    .catch(function (error) {
                    console.error('Impossible de récupérer les données de l\'écran ' + screenLabel, JSON.stringify(error));
                    reject();
                });
            }).catch(function () {
                console.error('Impossible de se connecter à la base de données');
                reject();
            });
        });
    };
    MissionDataProvider.prototype.deleteAll = function (missionId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("DELETE FROM mission_data WHERE mission_id = ?", [missionId])
                    .then(function (data) {
                    return resolve();
                })
                    .catch(function (error) {
                    reject();
                });
            })
                .catch(function (error) {
                reject();
            });
        });
    };
    MissionDataProvider.prototype.load = function (missionId, screenLabel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("SELECT * FROM mission_data WHERE mission_id = ? AND screen = ?", [missionId, screenLabel.replace(/\'/g, "''")])
                    .then(function (data) {
                    var output = { mission_id: missionId,
                        screen: screenLabel,
                        status: 'empty',
                        data: {} };
                    if (data.rows.length == 0) {
                        return resolve(output);
                    }
                    output.data = JSON.parse(data.rows.item(0).data);
                    output.status = data.rows.item(0).status;
                    return resolve(output);
                })
                    .catch(function (error) {
                    console.error('Impossible de récupérer les données de l\'écran ' + screenLabel, JSON.stringify(error));
                    reject();
                });
            })
                .catch(function (error) {
                console.error('Impossible de récupérer les données de l\'écran ' + screenLabel, JSON.stringify(error));
                reject();
            });
        });
    };
    MissionDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], MissionDataProvider);
    return MissionDataProvider;
}());

//# sourceMappingURL=mission-data.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DbProvider = /** @class */ (function () {
    function DbProvider(http, sqlite) {
        this.http = http;
        this.sqlite = sqlite;
        console.log('Hello DbProvider Provider');
        this.sqlite.create({
            name: 'databaseEDL.db',
            location: 'default'
        })
            .then(function (db) {
            // Table missions
            db.executeSql("CREATE TABLE IF NOT EXISTS 'missions' ('id' INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 'serviceSource' TEXT, 'proprietaire' TEXT,'locataire' TEXT,'nummission' TEXT,'ville' TEXT,'agence' TEXT,'etat' TEXT, 'edletat' TEXT, 'societe' TEXT, 'bien_adresse' TEXT, 'bien_residence' TEXT, 'bien_type' TEXT, 'bien_bat' TEXT, 'bien_esc' TEXT, 'bien_cave' TEXT, 'bien_complement' TEXT, 'bien_ville' TEXT, 'bien_etage' TEXT, 'bien_box' TEXT, 'bien_parking' TEXT, 'bien_garage' TEXT, 'loc_nom' TEXT, 'loc_prenom' TEXT, 'loc_adresse' TEXT, 'loc_ville' TEXT, 'loc_departement' TEXT, 'loc_portable' TEXT, 'loc_telephone' TEXT, 'loc_email' TEXT, 'exloc_nom' TEXT, 'exloc_prenom' TEXT, 'exloc_adresse' TEXT, 'exloc_ville' TEXT, 'exloc_departement' TEXT, 'exloc_portable' TEXT, 'exloc_telephone' TEXT, 'exloc_email' TEXT, 'raw_data' TEXT)", [])
                .then(function () { return console.log('Table missions OK'); })
                .catch(function (error) { return console.error('Table missions FAILED', error.message); });
            // Table mission data
            db.executeSql("CREATE TABLE IF NOT EXISTS 'mission_data' ('id' INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 'mission_id' INTEGER, 'screen' TEXT,'data' TEXT, 'status' TEXT)", [])
                .then(function () { return console.log('Table mission_data OK'); })
                .catch(function (error) { return console.error('Table mission_data FAILED', error.message); });
            db.executeSql("CREATE TABLE IF NOT EXISTS 'local_storage' ('varname' TEXT,'value' TEXT)", [])
                .then(function () { return console.log('Table local_storage OK'); })
                .catch(function (error) { return console.error('Table local_storage FAILED', error.message); });
        })
            .catch(function (e) { return console.log('Failed to open/create database', 'edldatabase.db'); });
    }
    DbProvider.prototype.load = function () {
        console.log('SQLITE DATABASE PROVIDER LOADED');
    };
    DbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], DbProvider);
    return DbProvider;
}());

//# sourceMappingURL=db.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImmodiagProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ImmodiagProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ImmodiagProvider = /** @class */ (function () {
    function ImmodiagProvider(http) {
        this.http = http;
        this.nature = ["Bois", "Acier", "Bois peint", "Vitrée", "Autres"];
        this.natureSol = ["Revêtement souple PVC", "Parquet,Stratifié", "Carrelage", "Moquette", "Autres"];
        this.naturePlinthes = ["Bois", "Carrelage", "Stratifié", "Goulottes PVC", "Bois peint", "Autres"];
        this.natureMur = ["Peinture", "Toile de verre peinte", "Papier peint", "Cloison", "Cloison vitrée", "Lambris/Frisette", "Faïence", "Autres"];
        this.natureMurExt = ["Brut", "Béton", "Brique", "Pierre", "Parpaing", "Autres"];
        this.naturePlafond = ["Peinture", "Toile de verre peinte", "Papier peint(SO)", "Autres"];
        this.natureEclairage = ["Fils nus", "Domino", "Douille sans ampoule", "Douille avec ampoule", "Applique", "Néon(s)", "Spot(s)", "Dispositif de connexion luminaire avec ampoule", "Autres"];
        this.natureFenetre = ["PVC", "Alu", "Bois", "Simple vitrage", "Double vitrage", "Autres"];
        this.natureRadiateur = ["Electrique", "Convecteur électrique", "Inertie", "Panneau rayonnant", "En fonte", "Seche serviette", "Autres"];
        this.naturePlacard = ["Portes battantes", "Portes coulissantes", "Portes Accordéon", "Etagère(s)", "Tiroir(s)", "Tringle(s)", "Intérieur peint", "Rail de guidage", "Autres"];
        this.natureMeuble = ["Etagère(e)", "Porte(s)", "Tiroir(s)", "Autres"];
        this.naturePriseEtRobinet = ["Simple", "Double", "Autres"];
        this.natureInterrupteur = ["Simple", "Double", "Volet électrique", "Variateur", "VMC", "Autres"];
        this.natureTelephone = ["Gigogne", "Rj11", "Rj45", "Autres"];
        this.natureVentilation = ["Sur fenêtre", "Sur coffre VR", "Sur mur", "Motorisée", "Avec cordon", "VMC", "Grille Haute", "Grille Basse", "Autres"];
        this.natureRobinetterie = ["Mitigeur", "Mélangeur", "Thermostatique", "Bonde à tirette", "Siphon PVC", "Siphon en Fonte", "Siphon en alu", "Bouchon avec Chainette", "Bonde avec grille", "Autres"];
        this.natureSiphon = ["PVC", "Fonte", "Alu", "Autres"];
        this.natureVolets = ["PVC", "Alu", "Bois", "Fonte", "Persiennes", "Battants", "Roulants manuels", "Roulants Motorisés", "Bloqueur manivelle", "Télécommande", "Autres"];
        this.couleur = ["Noir", "Blanc", "Gris", "Marron", "Rouge", "Jaune", "Bleu", "Vert", "Beige", "Bois", "Autres"];
        this.etatUsure = ["Neuf", "Bon état", "Etat moyen", "Avancé", "Dégradé"];
        this.details = ["Léger(es)", "Plusieurs", "Important(es)", "Quelques", "Nombreux(ses)"];
        this.defaut = ["Rayure(s)", "Fissure(s)", "Trou(s)", "Trou(s) de cheville(s)", "Trous de clou(s)/punaise(s)", "Trou(s) rebouché(s)", "Trou(s) rebouché(s) grossièrement", "Déchirure(s)", "Enfoncement(s)", "Poinçonnement(s)", "Trace(s) d'humidité", "Noirci(s)", "Jauni(s)", "Ecaillé(s)", "Se décolle", "Eclat(s)", "Tâche(s)", "Trace(s) de meuble(s)", "Trace de cadre(s)", "Cassé(s)", "Trace(s)", "Gondolé(s)", "Usé(s)", "Rouillé(s)", "Oxydé(s)", "Entartré(s)", "Poussière(s)", "Terni(s)/Défraîchi(s)", "Choc(s)", "Cloqué(s)", "Mal fixé(s)/réglé(s)", "Descellé(s)", "Moisissures(s)", "Autres"];
        this.defautJardin = ["Tondue", "Taillée", "Non entretenu", "Arraché", "Mousse", "Fissures", "Chocs", "Trous", "Peinture écaillée", "Mal fixé", "Cassé", "Encombrants divers", "Traces de meubles/pots", "Rouille", "Verdi"];
        this.etatDeFonctionnement = ["Fonctionne", "Ne fonctionne pas", "Non vérifiable", "Autres"];
        this.etatDeProprete = ["Propre", "A nettoyer"];
        this.pieceSeche = {
            "piece": "Pièce Sèche",
            "donnees": [
                { "equipement": "Porte", "nature": 'nature', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Porte palière", "nature": ["Bois", "Bois peint", "Blindée", "PVC", "Aluminium", "Vitrée", "3 Points", "5 points", "Verrou haut", "Verrou bas", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Poignée", "nature": ["Aluminium", "Porcelaine", "Laiton", "Métal", "Plastique", "Pvc", "Encastrée", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Sol", "nature": 'natureSol', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Plinthes", "nature": 'naturePlinthes', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Mur accès", "nature": 'natureMur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Mur gauche", "nature": 'natureMur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Mur droit", "nature": 'natureMur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Mur face", "nature": 'natureMur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Ensemble des murs", "nature": 'natureMur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Plafond", "nature": 'naturePlafond', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Eclairage artificiel", "nature": 'natureEclairage', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Fenêtre", "nature": 'natureFenetre', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Porte fenêtre", "nature": 'natureFenetre', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Volets", "nature": 'natureVolets', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Ventilation", "nature": 'natureVentilation', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Radiateur", "nature": 'natureRadiateur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Chauffage", "nature": ["Climatiseur", "Poële à bois", "Poële à granulés", "poële à charbon", "Au sol", "Cheminée", "Cheminée décorative", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Placard", "nature": 'naturePlacard', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Prise de courant", "nature": 'naturePriseEtRobinet', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Prise TV", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Prise Téléphone", "nature": 'natureTelephone', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Interrupteur", "nature": 'natureInterrupteur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Tableau électrique", "nature": ["Coffret", "Coffet avec porte(s)", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Armoire", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Box internet", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Canapé", "nature": ["BZ", "Banquette", "Clic-clac", "Convertible", "Fixe", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Chaise(s)/tabouret(s)", "nature": ["Bois", "PVC", "Métal", "Haute", "Pliante", "Empilable", "A roulette", "Longue", "A bascule", "Fauteuil de bureau", "Pouf", "Tabouret de bar", "Tabouret", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Commode", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Console", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Décoration", "nature": ["Tableau", "Horloge", "Plante Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Fauteuil", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Four", "nature": ["Micro ondes", "traditionnel", "multifonction"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Lampe(s)", "nature": ["Chevet", "Bureau", "Halogène", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Linge de maison", "nature": ["Draps", "housse de couette", "taies d'oreiller", "serviettes", "alaise", "couette", "oreillers", "Traversin", "Serviette de bain", "Torchon", "Tapis de bain", "Gant de toilette", "Serviette de plage", "Rideaux", "Tapis", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Lit", "nature": ["Simple", "Double", "Duperposé", "Tête de lit", "Bois", "Métallique", "Stratifié", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Machine à laver", "nature": ["A hublot", "Top", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Matelas", "nature": ["Simple", "Double", "Bébé", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Meuble à chaussures", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Meuble TV", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Petit électroménager", "nature": ["Appareil à raclette", "Appareil à fondue", "Aspirateur", "Aspirateur sans sac", "Batteur", "Blender", "Cafetière", "Centrale vapeur", "Crêpière", "Friteuse", "Grille pain", "Mixeur", "Robot-multifonctions", "Sèche-cheveux", "", "Lecteur DVD", "Télécommande", "Lecteur TNT", "Ventilateur", "Pèse-personne", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Seche linge", "nature": ["Frontal", "Top", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Sommier", "nature": ["Cadre à lattes simple", "Cadre à lattes double", "Standard simple", "Standard double", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Table", "nature": ["Bois", "PVC", "Métal", "Ronde", "Rectangulaire", "Carré", "Murale", "A rallonge", "Basse", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Table à repasser", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Table de chevet", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Télévision", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Autres", "nature": ['Description'], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' }
            ]
        };
        this.cuisine = {
            "piece": "Cuisine",
            "donnees": [
                { "equipement": "Porte", "nature": this.nature, "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Sol", "nature": 'natureSol', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Plinthes", "nature": 'naturePlinthes', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Mur accès", "nature": 'natureMur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Mur gauche", "nature": 'natureMur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Mur droit", "nature": 'natureMur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Mur face", "nature": 'natureMur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Ensemble des murs", "nature": 'natureMur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Plafond", "nature": 'naturePlafond', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Eclairage artificiel", "nature": 'natureEclairage', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Fenêtre", "nature": 'natureFenetre', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Porte fenêtre", "nature": 'natureFenetre', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Volets", "nature": 'natureVolets', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Ventilation", "nature": 'natureVentilation', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Radiateur", "nature": 'natureRadiateur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Placard", "nature": 'naturePlacard', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Prise de courant", "nature": 'naturePriseEtRobinet', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Prise TV", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Prise Téléphone", "nature": 'natureTelephone', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Interrupteur", "nature": 'natureInterrupteur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Meuble(s) bas", "nature": "natureMeuble", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Meuble(s) haut", "nature": "natureMeuble", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Meuble sous évier", "nature": "natureMeuble", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Evier", "nature": ["PVC", "Alu", "Faïence", "Verre", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Robinetterie", "nature": ["PVC", "Alu", "Faïence", "Verre", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Siphon", "nature": 'natureSiphon', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Joint", "nature": ["Silicone", "PVC", "Ciment", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Crédence", "nature": ["PVC", "Alu", "Faïence", "Verre", "Autres"], "couleur": 'defaut', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Plan de travail", "nature": ["Bois massif", "Mélaminé", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Table de cuisson", "nature": ["Gaz", "Electrique", "Vitrocéramique", "Induction", "2 Foyers", "3 Foyers", "4 Foyers", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Hotte", "nature": ["Mode évacuation", "Mode recyclage", "Décorative", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Four", "nature": ["Micro-ondes", "Traditionnel", "Multifonction", "Encastré", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Réfrigérateur", "nature": ["Top", "Standard", "Américain", "Intégré", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Décoration", "nature": ["Tableau", "Horloge", "Plante Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Fauteuil", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Four", "nature": ["Micro ondes", "traditionnel", "multifonction", "Marque:"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Lampe(s)", "nature": ["Chevet", "Bureau", "Halogène", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Linge de maison", "nature": ["Draps", "housse de couette", "taies d'oreiller", "serviettes", "alaise", "couette", "oreillers", "Traversin", "Serviette de bain", "Torchon", "Tapis de bain", "Gant de toilette", "Serviette de plage", "Rideaux", "Tapis", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Lit", "nature": ["Simple", "Double", "Duperposé", "Tête de lit", "Bois", "Métallique", "Stratifié", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Machine à laver", "nature": ["A hublot", "Top", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Matelas", "nature": ["Simple", "Double", "Bébé", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Meuble à chaussures", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Meuble TV", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Petit électroménager", "nature": ["Appareil à raclette", "Appareil à fondue", "Aspirateur", "Aspirateur sans sac", "Batteur", "Blender", "Cafetière", "Centrale vapeur", "Crêpière", "Friteuse", "Grille pain", "Mixeur", "Robot-multifonctions", "Sèche-cheveux", "", "Lecteur DVD", "Télécommande", "Lecteur TNT", "Ventilateur", "Pèse-personne", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Seche linge", "nature": ["Frontal", "Top", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Sommier", "nature": ["Cadre à lattes simple", "Cadre à lattes double", "Standard simple", "Standard double", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Table", "nature": ["Bois", "PVC", "Métal", "Ronde", "Rectangulaire", "Carré", "Murale", "A rallonge", "Basse", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Table à repasser", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Télévision", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Vaisselle et cuisson", "nature": ["assiettes creuses", "Assiettes plates", "Assiettes à dessert", "Couteau à pain", "", "couteaux", "Ciseau", "Casse-noix", "Casserole", "Cendrier", "Ccotte-minute", "Coquetier", "Couvercle", "Couverts à salade", "Cuillère à café", "Cuillère à soupe", "Décapsuleur", "Dessous de plat", "Econome", "Ecumoir", "Entonnoir", "Essoreuse à salade", "Faitout", "Fouet", "Louche", "Moules", "Mug", "Ouvre-boîte", "Passoire", "Etendoir à linge", "Pince", "Pinceau de cuisine", "Plancheà découper", "Planche à pain", "Plat", "Plateau", "Plateau à fromage", "Poêle", "Ploêle à crèpe", "Poivrier", "Presse-agrume", "Ramequin", "Range couverts", "Râpe à fromage", "Presse-ail", "Rouleau à pâtisserie", "Salière", "Sauteuse", "Soupière", "Sous-tasse", "Spatule", "Sucrier", "fourchettes", "cuilleres", "verres", "tasses", "bols", "carafe", "saladier", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Autres", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
            ]
        };
        this.salleDeBainWc = {
            "piece": "Salle de bains-WC",
            "donnees": [
                { "equipement": "Porte", "nature": ["Bois", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Sol", "nature": 'natureSol', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Plinthes", "nature": 'naturePlinthes', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Mur accès", "nature": 'natureMur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Mur gauche", "nature": 'natureMur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Mur droit", "nature": 'natureMur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Mur face", "nature": 'natureMur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Ensemble des murs", "nature": 'natureMur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Plafond", "nature": 'naturePlafond', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Eclairage artificiel", "nature": 'natureEclairage', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Fenêtre", "nature": 'natureFenetre', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Porte fenêtre", "nature": 'natureFenetre', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Volets", "nature": 'natureVolets', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Ventilation", "nature": 'natureVentilation', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Radiateur", "nature": 'natureRadiateur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Placard", "nature": 'naturePlacard', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Prise de courant", "nature": 'naturePriseEtRobinet', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Prise TV", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Prise Téléphone", "nature": 'natureTelephone', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Interrupteur", "nature": 'natureInterrupteur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Meuble(s) bas", "nature": "natureMeuble", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Meuble(s) haut", "nature": "natureMeuble", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Meuble Colonne", "nature": "natureMeuble", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Miroir", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Lavabo", "nature": ["Inox", "Grés", "Résine", "Céramique", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Lave-mains", "nature": ["Inox", "Grés", "Résine", "Céramique", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Meuble sous lavabo", "nature": ["Stratifié", "Bois", "Aluminium", "Etagère(e)", "Porte(s)", "Tiroir(s)", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Siphon", "nature": 'natureSiphon', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Robinetterie lavabo", "nature": 'natureRobinetterie', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Crédence", "nature": ["PVC", "Alu", "Faïence", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Joint", "nature": ["Silicone", "PVC", "Ciment", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Baignoire", "nature": ["Acier émaillé", "Résine", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Robinetterie baignoire", "nature": 'natureRobinetterie', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Douche", "nature": ["A l'italienne", "Bac en grés", "Bac en PVC", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Robinetterie douche", "nature": 'natureRobinetterie', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Pare douche", "nature": ["PVC", "Verre", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "WC", "nature": ["Chasse d'eau", "Réservoir encastré", "Réservoir grés", "Abattant", "Robinet arrêt", "Cuvette céramique", "Suspendu", "Sani broyeur", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Accessoires", "nature": ["Distributeur papier-toilette", "Patère vissée", "Patère collée", "Porte-serviette", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Décoration", "nature": ["Tableau", "Horloge", "Plante Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Machine à laver", "nature": ["A hublot", "Top", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Seche linge", "nature": ["Frontal", "Top", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Autres", "nature": ["Bois", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' }
            ]
        };
        this.caveParking = {
            "piece": "Cave-Parking",
            "donnees": [
                { "equipement": "Porte", "nature": 'nature', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Sol", "nature": ["Brut", "Terre battue", "Goudron", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Mur accès", "nature": 'natureMurExt', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Mur gauche", "nature": 'natureMurExt', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Mur droit", "nature": 'natureMurExt', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Mur face", "nature": 'natureMurExt', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Ensemble des murs", "nature": 'natureMurExt', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Plafond", "nature": ["Peinture", "Toile de verre", "Dalles fibre minérale", "Tôles", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Eclairage artificiel", "nature": ["Globe", "Fils nus", "Domino", "Douille sans ampoule", "Douille avec ampoule", "Applique", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Fenêtre", "nature": 'natureFenetre', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Prise de courant", "nature": ["Simple", "Double", "Divers"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Interrupteur", "nature": 'natureInterrupteur', "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Mobilier", "nature": ["Etagère(s)", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Serrure", "nature": ["Cadenas", "Avec clé", "Verrou", "Autres"], "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' },
                { "equipement": "Autres", "couleur": 'couleur', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defaut', "etatDeFonctionnement": 'etatDeFonctionnement', "etatDeProprete": 'etatDeProprete' }
            ]
        };
        this.jardinExterieur = {
            "piece": "Jardin-Extérieur",
            "donnees": [
                { "equipement": "Sols", "nature": ["Pelouse", "Gravillons", "Sable", "Béton", "Terre battue", "Dalles bois", "Dalles gravillonnées", "Pelouse synthétique", "Autres"], "etatDeProprete": 'etatDeProprete', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin' },
                { "equipement": "Arbres", "etatDeProprete": 'etatDeProprete', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin' },
                { "equipement": "Arbustes", "etatDeProprete": 'etatDeProprete', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin' },
                { "equipement": "Haie", "etatDeProprete": 'etatDeProprete', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin' },
                { "equipement": "Clôture", "etatDeProprete": 'etatDeProprete', "nature": ["Grillage", "Bois", "Béton", "Panneaux", "Autres"], "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin' },
                { "equipement": "Portail-Portillon", "etatDeProprete": 'etatDeProprete', "nature": ["Grillage", "Bois", "PVC", "Fer forgé", "Alu", "Autres"], "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin', "etatDeFonctionnement": 'etatDeFonctionnement' },
                { "equipement": "Allée", "etatDeProprete": 'etatDeProprete', "nature": ["Pelouse", "Gravillons", "Sable", "Béton", "Dalle"], "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin' },
                { "equipement": "Mur maison", "etatDeProprete": 'etatDeProprete', "nature": ["Béton", "Crépi", "Peinture", "Pierre", "Autres"], "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin' },
                { "equipement": "Mur extérieur", "etatDeProprete": 'etatDeProprete', "nature": ["Béton", "Crépi", "Peinture", "Pierre", "Autres"], "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin' },
                { "equipement": "Plafond", "etatDeProprete": 'etatDeProprete', "nature": ["Peinture", "Poutres", "Autres"], "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin' },
                { "equipement": "Toiture", "etatDeProprete": 'etatDeProprete', "nature": ["Ardoises", "Tuiles", "Autres"], "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin' },
                { "equipement": "Séparation(s)", "etatDeProprete": 'etatDeProprete', "nature": ["Béton", "Béton peint", "Bois", "Plexiglass", "Aluminium", "Autres"], "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin' },
                { "equipement": "Eclairage", "etatDeProprete": 'etatDeProprete', "nature": ["Globe", "Fils nus", "Domino", "Douille sans ampoule", "Douille avec ampoule", "Applique", "Autres"], "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin', "etatDeFonctionnement": 'etatDeFonctionnement' },
                { "equipement": "Prise de courant", "etatDeProprete": 'etatDeProprete', "nature": 'naturePriseEtRobinet', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin', "etatDeFonctionnement": 'etatDeFonctionnement' },
                { "equipement": "Robinet", "etatDeProprete": 'etatDeProprete', "nature": 'naturePriseEtRobinet', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin', "etatDeFonctionnement": 'etatDeFonctionnement' },
                { "equipement": "Abris de jardin", "etatDeProprete": 'etatDeProprete', "nature": ["Bois", "PVC", "Autres"], "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin' },
                { "equipement": "Piscine", "etatDeProprete": 'etatDeProprete', "nature": ["En eau", "Vidée", "Autres"], "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin', "etatDeFonctionnement": 'etatDeFonctionnement' },
                { "equipement": "SPA", "etatDeProprete": 'etatDeProprete', "nature": ["En eau", "Vidée", "Autres"], "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin', "etatDeFonctionnement": 'etatDeFonctionnement' },
                { "equipement": "Garde-corps", "etatDeProprete": 'etatDeProprete', "nature": ["Acier", "Bois", "Fer forgé", "Inox", "Aluminium", "Plexiglass", "Autres"], "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin', "etatDeFonctionnement": 'etatDeFonctionnement' },
                { "equipement": "Autres", "etatDeProprete": 'etatDeProprete', "etatUsure": 'etatUsure', "details": 'details', "defaut": 'defautJardin', "etatDeFonctionnement": 'etatDeFonctionnement' }
            ]
        };
    }
    ImmodiagProvider.prototype.getPieceSeche = function () {
        return this.prepareData(this.pieceSeche);
    };
    ImmodiagProvider.prototype.getCuisine = function () {
        return this.prepareData(this.cuisine);
    };
    ImmodiagProvider.prototype.getSalleDeBainWc = function () {
        return this.prepareData(this.salleDeBainWc);
    };
    ImmodiagProvider.prototype.getCaveParking = function () {
        return this.prepareData(this.caveParking);
    };
    ImmodiagProvider.prototype.getJardinExterieur = function () {
        return this.prepareData(this.jardinExterieur);
    };
    ImmodiagProvider.prototype.prepareData = function (data) {
        for (var i = 0; i < data.donnees.length; i++) {
            if (typeof data.donnees[i].nature === 'string') {
                data.donnees[i].nature = this[data.donnees[i].nature];
            }
            if (typeof data.donnees[i].couleur === 'string') {
                data.donnees[i].couleur = this[data.donnees[i].couleur];
            }
            if (typeof data.donnees[i].etatUsure === 'string') {
                data.donnees[i].etatUsure = this[data.donnees[i].etatUsure];
            }
            if (typeof data.donnees[i].details === 'string') {
                data.donnees[i].details = this[data.donnees[i].details];
            }
            if (typeof data.donnees[i].defaut === 'string') {
                data.donnees[i].defaut = this[data.donnees[i].defaut];
            }
            if (typeof data.donnees[i].etatDeFonctionnement === 'string') {
                data.donnees[i].etatDeFonctionnement = this[data.donnees[i].etatDeFonctionnement];
            }
            if (typeof data.donnees[i].etatDeProprete === 'string') {
                data.donnees[i].etatDeProprete = this[data.donnees[i].etatDeProprete];
            }
        }
        return data;
    };
    ImmodiagProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ImmodiagProvider);
    return ImmodiagProvider;
}());

//# sourceMappingURL=immodiag.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanoData; });
/**
 * Représente les données dans Pano.ts
 *
 * @export
 * @class PanoData
 */
var PanoData = /** @class */ (function () {
    function PanoData() {
    }
    return PanoData;
}());

//# sourceMappingURL=pano-data.model.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeEdlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signature_signature__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__salle_salle__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pano_data_pano_data__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_salle_data_salle_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__liste_pieces_liste_pieces__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selection_defaut_selection_defaut__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResumeEdlPage = /** @class */ (function () {
    function ResumeEdlPage(navCtrl, navParams, panoDataProvider, salleDataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.panoDataProvider = panoDataProvider;
        this.salleDataProvider = salleDataProvider;
        this.resumes = ['Un', 'Deux', 'Trois'];
        this.propretePiece = salleDataProvider.getPropretePiece();
        this.etatPiece = salleDataProvider.getEtatPiece();
        this.salle = salleDataProvider.getSalleData();
        this.markers = panoDataProvider.getMarkers();
        this.dataPanoArr = panoDataProvider.getDataPanoArr();
        this.imagePano = panoDataProvider.getImagePano();
        this.imgaPanoDefault = panoDataProvider.getImagePanoDefault();
        this.nomPiece = salleDataProvider.getNomPiece();
        for (var i = 0; i < this.dataPanoArr.length; i++) {
            if (typeof this.dataPanoArr[i].description == 'undefined') {
                this.dataPanoArr[i].description['equipement'] = '...';
            }
        }
        this.patchFileReader();
    }
    ResumeEdlPage.prototype.patchFileReader = function () {
        if (!window.FileReader.prototype.addEventListener) {
            window.FileReader.prototype.addEventListener = function (type, listener) {
                if (type === 'loadend') {
                    this.onloadend = listener;
                }
            };
        }
    };
    ResumeEdlPage.prototype.ionViewDidLoad = function () {
        this.nummission = this.navParams.get("nummission");
        var hotspots = [];
        for (var i = 0; i < this.dataPanoArr.length; i++) {
            hotspots.push({
                "pitch": this.dataPanoArr[i].pitch,
                "yaw": this.dataPanoArr[i].yaw,
                "cssClass": "circleMarker",
                "createTooltipFunc": this.hotspotMaker,
                "createTooltipArgs": this.dataPanoArr[i].idDefaut + ""
            });
        }
        this.viewer = pannellum.viewer('panoresume', {
            "type": "equirectangular",
            "panorama": this.imagePano,
            "autoLoad": true,
            "hotSpots": hotspots
        });
    };
    ResumeEdlPage.prototype.hotspotMaker = function (hotSpotDiv, args) {
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
    ResumeEdlPage.prototype.mousePosition = function (event) {
        var leftBounds = this.viewer.getContainer().getBoundingClientRect().left;
        var topBounds = this.viewer.getContainer().getBoundingClientRect().top;
        var pos = {
            x: 0, y: 0
        };
        pos.x = event.center.x - leftBounds;
        pos.y = event.center.y - topBounds;
        return pos;
    };
    ResumeEdlPage.prototype.fromEventToCoords = function (event) {
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
    ResumeEdlPage.prototype.goToSalle = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__salle_salle__["a" /* SallePage */], { nummission: this.nummission }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ResumeEdlPage.prototype.goToListPieces = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__liste_pieces_liste_pieces__["a" /* ListePiecesPage */], { nummission: this.nummission }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ResumeEdlPage.prototype.goBack = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__selection_defaut_selection_defaut__["a" /* SelectionDefautPage */], { nummission: this.nummission }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ResumeEdlPage.prototype.terminerSigner = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signature_signature__["a" /* SignaturePage */], { nummission: this.nummission }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ResumeEdlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resume-edl',template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/pages/resume-edl/resume-edl.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-5>\n          <ion-title>Récapitulatif de la pièce "{{ nomPiece }}"</ion-title>\n        </ion-col>\n        <ion-col col-4 style="text-align: right; padding: 0 12px; font-size: 2rem; font-weight: 500;">\n          <span>Etat de la pièce : {{ etatPiece }}</span>\n        </ion-col>\n        <ion-col col-3 style="text-align: right; padding: 0 12px; font-size: 2rem; font-weight: 500;">\n          <ion-icon [ngClass]="[propretePiece == \'Propre\' ? \'propre\' : \'\',  propretePiece == \'Nettoyage partiel\' ? \'partiel\' : \'\',  propretePiece == \'A Nettoyer\' ? \'nettoyer\' : \'\']" ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon>&nbsp;<span [ngClass]="[propretePiece == \'Propre\' ? \'propre\' : \'\',  propretePiece == \'Nettoyage partiel\' ? \'partiel\' : \'\',  propretePiece == \'A Nettoyer\' ? \'nettoyer\' : \'\']">{{ propretePiece }}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="resumeedl">\n  <div id="panoresume"></div>\n  <div class="fond">\n    <resumelist *ngFor="let data of dataPanoArr" [dataPano]="data"></resumelist>\n  </div>\n  <br />\n</ion-content>\n<ion-footer>\n    <div class="pied">\n      <ion-grid>\n        <ion-row>\n          <ion-col (click)="goBack()">\n            <ion-icon class="pager" name="arrow-round-back"></ion-icon>\n          </ion-col>\n          <button ion-button round outline (click)="goBack()">Modifier cette pièce</button>\n          <button ion-button round outline (click)="goToSalle()">Passer à la pièce suivante</button>\n          <button ion-button round outline (click)="goToListPieces()">Recapitulatif des pièces</button>\n          <button ion-button color="danger" round outline (click)="terminerSigner()">Aller à l\'étape de signature</button>\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>\n'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/pages/resume-edl/resume-edl.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_pano_data_pano_data__["a" /* PanoDataProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_salle_data_salle_data__["a" /* SalleDataProvider */]])
    ], ResumeEdlPage);
    return ResumeEdlPage;
}());

//# sourceMappingURL=resume-edl.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WsMissionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the WsMissionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var WsMissionProvider = /** @class */ (function () {
    function WsMissionProvider(sqlite, file) {
        this.sqlite = sqlite;
        this.file = file;
        console.log('Hello WsMissionProvider Provider');
    }
    WsMissionProvider.prototype.exportDbData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            }).then(function (db) {
                db.executeSql("UPDATE mission_data SET status = 'pending'", []).then(function (data) {
                    db.executeSql("SELECT * FROM mission_data", []).then(function (data) {
                        if (data.rows.length == 0) {
                            console.log('aucune mission à synchroniser');
                            return resolve(false);
                        }
                        var _loop_1 = function (i) {
                            var screenData = data.rows.item(i);
                            var filename = 'abc-export-' + screenData.id + '.txt';
                            _this.file.createFile(_this.file.externalDataDirectory, filename, true)
                                .then(function (FileEntry) { return _this.file.writeExistingFile(_this.file.externalDataDirectory, filename, JSON.stringify(screenData)); })
                                .catch(function (err) { return console.log('Couldn\'t create file', err); });
                        };
                        for (var i = 0; i < data.rows.length; i++) {
                            _loop_1(i);
                        }
                        return resolve(true);
                    }).catch(function (error) {
                        console.error('Impossible de récupérer les données des missions', JSON.stringify(error));
                        reject();
                    });
                });
            }).catch(function (error) {
                console.error('Impossible de récupérer les données des missions', JSON.stringify(error));
                reject();
            });
        });
    };
    WsMissionProvider.prototype.purgeOldMissions = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("SELECT *, (SELECT COUNT(*) FROM mission_data WHERE mission_id = missions.id) AS nbData,  (SELECT COUNT(*) FROM mission_data WHERE mission_id = missions.id AND status = 'pending') AS nbDataToSync,  (SELECT COUNT(*) FROM mission_data WHERE mission_id = missions.id AND screen = 'signature') AS complete FROM missions", [])
                    .then(function (data) {
                    if (data.rows.length == 0) {
                        return resolve();
                    }
                    var _loop_2 = function (i) {
                        var mission = data.rows.item(i);
                        mission.raw_data = JSON.parse(mission.raw_data);
                        var todayDate = new Date();
                        var dateParts = mission.raw_data.rdv[0].date_debut[0].split("-");
                        var missionDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0], 23, 59);
                        var last5DaysDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() - 5, 0, 0);
                        if (missionDate < last5DaysDate) {
                            if (mission.nbData == 0
                                || (mission.complete == 1 && mission.nbDataToSync == 0)) {
                                db.executeSql("DELETE FROM mission_data WHERE mission_id = ?", [mission.id]).then(function (data) {
                                    console.log('Suppression des écrans de la mission ' + mission.nummission);
                                    db.executeSql("DELETE FROM missions WHERE id = ?", [mission.id]).then(function (data) {
                                        console.log('Suppression de de la mission ' + mission.nummission);
                                    });
                                });
                            }
                        }
                        // @todo Gérer la suppression des écrans pour les missions statut "terminé"
                    };
                    for (var i = 0; i < data.rows.length; i++) {
                        _loop_2(i);
                    }
                    setTimeout(function () {
                        resolve();
                    }, 5000);
                });
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    WsMissionProvider.prototype.updateMission = function (mission) {
        return this.sqlite.create({
            name: 'databaseEDL.db',
            location: 'default'
        })
            .then(function (db) {
            var serviceSource = new URL(mission.serviceSource).host;
            db.executeSql("SELECT * FROM missions WHERE serviceSource = '" + serviceSource + "' AND nummission = '" + mission.nummission + "'", [])
                .then(function (data) {
                // Aucune donnée pour cet mission et cet écran, on les enregistre
                if (data.rows.length == 0) {
                    db.executeSql("INSERT INTO missions('serviceSource', 'proprietaire', 'locataire', 'nummission', 'ville', 'agence', 'etat', 'edletat', 'societe', 'bien_adresse', 'bien_residence', 'bien_type', 'bien_bat', 'bien_esc', 'bien_cave', 'bien_complement', 'bien_ville', 'bien_etage', 'bien_box', 'bien_parking', 'bien_garage', 'loc_nom', 'loc_prenom', 'loc_adresse', 'loc_ville', 'loc_departement', 'loc_portable', 'loc_telephone', 'loc_email', 'exloc_nom', 'exloc_prenom', 'exloc_adresse', 'exloc_ville', 'exloc_departement', 'exloc_portable', 'exloc_telephone', 'exloc_email', 'raw_data') VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [serviceSource, mission.proprietaire, mission.locataire, mission.nummission, mission.ville, mission.agence, mission.etat, mission.edletat, mission.societe, mission.bien_adresse, mission.bien_residence, mission.bien_type, mission.bien_bat, mission.bien_esc, mission.bien_cave, mission.bien_complement, mission.bien_ville, mission.bien_etage, mission.bien_box, mission.bien_parking, mission.bien_garage, mission.loc_nom, mission.loc_prenom, mission.loc_adresse, mission.loc_ville, mission.loc_departement, mission.loc_portable, mission.loc_telephone, mission.loc_email, mission.exloc_nom, mission.exloc_prenom, mission.exloc_adresse, mission.exloc_ville, mission.exloc_departement, mission.exloc_portable, mission.exloc_telephone, mission.exloc_email, JSON.stringify(mission.raw_data)])
                        .then(function (result) {
                        console.log("MISSION INSERTED : UID " + result.insertId);
                        mission.uid = result.insertId;
                        return mission;
                    }).catch(function (error) { return console.log("FAILED TO INSERT MISSION", JSON.stringify(error)); });
                }
                else {
                    db.executeSql("UPDATE missions SET serviceSource = ?,proprietaire=?,locataire=?,nummission=?,ville=?,agence=?,etat=?,edletat=?,societe=?,bien_adresse=?,bien_residence=?,bien_type=?,bien_bat=?,bien_esc=?,bien_cave=?,bien_complement=?,bien_ville=?,bien_etage=?,bien_box=?,bien_parking=?,bien_garage=?,loc_nom=?,loc_prenom=?,loc_adresse=?,loc_ville=?,loc_departement=?,loc_portable=?,loc_telephone=?,loc_email=?,exloc_nom=?,exloc_prenom=?,exloc_adresse=?,exloc_ville=?,exloc_departement=?,exloc_portable=?,exloc_telephone=?,exloc_email=?,raw_data=? WHERE serviceSource = '" + serviceSource + "' AND nummission = '" + mission.nummission + "'", [serviceSource, mission.proprietaire, mission.locataire, mission.nummission, mission.ville, mission.agence, mission.etat, mission.edletat, mission.societe, mission.bien_adresse, mission.bien_residence, mission.bien_type, mission.bien_bat, mission.bien_esc, mission.bien_cave, mission.bien_complement, mission.bien_ville, mission.bien_etage, mission.bien_box, mission.bien_parking, mission.bien_garage, mission.loc_nom, mission.loc_prenom, mission.loc_adresse, mission.loc_ville, mission.loc_departement, mission.loc_portable, mission.loc_telephone, mission.loc_email, mission.exloc_nom, mission.exloc_prenom, mission.exloc_adresse, mission.exloc_ville, mission.exloc_departement, mission.exloc_portable, mission.exloc_telephone, mission.exloc_email, JSON.stringify(mission.raw_data)])
                        .then(function (result) {
                        console.log("MISSION UPDATED : UID " + data.rows.item(0).id);
                        mission.uid = data.rows.item(0).id;
                        return mission;
                    }).catch(function (error) { return console.log("FAILED TO UPDATE MISSION", JSON.stringify(error)); });
                }
            }).catch(function (error) { return console.log("FAILED TO SELECT MISSION", JSON.stringify(error)); });
            ;
        }).catch(function () { return console.error('FAILED TO OPEN OR CREATE DATABASE'); });
    };
    WsMissionProvider.prototype.getAllMissions = function (orderByRand) {
        var _this = this;
        var missions = [];
        return new Promise(function (resolve, reject) {
            _this.sqlite.create({
                name: 'databaseEDL.db',
                location: 'default'
            })
                .then(function (db) {
                var query = "SELECT *, (SELECT COUNT(*) FROM mission_data WHERE mission_id = missions.id) AS nbData,  (SELECT COUNT(*) FROM mission_data WHERE mission_id = missions.id AND status = 'pending') AS nbDataToSync,  (SELECT COUNT(*) FROM mission_data WHERE mission_id = missions.id AND screen = 'signature') AS complete FROM missions";
                if (orderByRand) {
                    query += ' ORDER BY RANDOM()';
                }
                else {
                    query += ' ORDER BY nbData DESC';
                }
                console.log(query);
                db.executeSql(query, [])
                    .then(function (data) {
                    for (var i = 0; i < data.rows.length; i++) {
                        var mission = data.rows.item(i);
                        mission.raw_data = JSON.parse(mission.raw_data);
                        mission.uid = mission.id;
                        missions.push(mission);
                    }
                    return resolve(missions);
                });
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    WsMissionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]])
    ], WsMissionProvider);
    return WsMissionProvider;
}());

//# sourceMappingURL=ws-mission.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Technicien; });
var Technicien = /** @class */ (function () {
    function Technicien() {
    }
    return Technicien;
}());

//# sourceMappingURL=technicien.model.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_technicien_model__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProvider = /** @class */ (function () {
    function UserProvider(http) {
        this.http = http;
        console.log('Hello UserProvider Provider');
    }
    UserProvider.prototype.setTechnicienConnected = function (technicien) {
        this.technicienConnected = technicien;
    };
    UserProvider.prototype.getTechnicienConnected = function () {
        return this.technicienConnected;
    };
    UserProvider.prototype.resetTechnicienData = function () {
        this.technicienConnected = new __WEBPACK_IMPORTED_MODULE_2__models_technicien_model__["a" /* Technicien */]();
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(331);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListePiecesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ws_pano_ws_pano__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pano_data_pano_data__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__salle_salle__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selection_defaut_selection_defaut__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_salle_data_salle_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_edl_edl__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signature_signature__ = __webpack_require__(69);
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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










var ListePiecesPage = /** @class */ (function () {
    function ListePiecesPage(navCtrl, navParams, wsPanoProvider, loadingCtrl, toastCtrl, edlProvider, panoDataProvider, salleDataProvider, alertController, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wsPanoProvider = wsPanoProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.edlProvider = edlProvider;
        this.panoDataProvider = panoDataProvider;
        this.salleDataProvider = salleDataProvider;
        this.alertController = alertController;
        this.sanitizer = sanitizer;
        this.items = [];
        this.itemExpandHeight = 500;
        this.loadProgress = 0;
        this.patchFileReader();
        this.compters = this.navParams.get('compters');
    }
    ListePiecesPage.prototype.ionViewDidLoad = function () {
        this.nummission = this.navParams.get("nummission");
        this.listPieces(this.nummission);
    };
    ListePiecesPage.prototype.patchFileReader = function () {
        if (!window.FileReader.prototype.addEventListener) {
            window.FileReader.prototype.addEventListener = function (type, listener) {
                if (type === 'loadend') {
                    this.onloadend = listener;
                }
            };
        }
    };
    ListePiecesPage.prototype.displayMessage = function (message) {
        this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'bottom'
        }).present();
    };
    ListePiecesPage.prototype.getNumberPieces = function (nummission) {
        var _this = this;
        this.wsPanoProvider.countAllPieces(nummission)
            .then(function (data) {
            _this.numberPiece = data[0].totalPiece;
        });
    };
    ListePiecesPage.prototype.getDetailsPieced = function (idPiece) {
        var _this = this;
        this.wsPanoProvider.getPieceById(idPiece)
            .then(function (dataResultOnePiece) {
            _this.dataOnePiece = dataResultOnePiece;
            _this.detailsPiece = _this.dataOnePiece.item(0).data;
        });
    };
    ListePiecesPage.prototype.getDefautPieces = function (allDataPiece) {
        var indexImage1 = allDataPiece.indexOf('image1');
        var indexImage2 = allDataPiece.indexOf('image2');
        var indexImage3 = allDataPiece.indexOf('image3');
        if (indexImage1 > -1)
            allDataPiece.splice(indexImage1);
        if (indexImage2 > -1)
            allDataPiece.splice(indexImage2);
        if (indexImage3 > -1)
            allDataPiece.splice(indexImage3);
        return allDataPiece;
    };
    ListePiecesPage.prototype.listPieces = function (idMission) {
        var _this = this;
        this.wsPanoProvider.getAllIDPieces(idMission)
            .then(function (dataId) {
            var numberSec = dataId.length * 900;
            if (dataId.length > 0) {
                _this.results = [];
                var _loop_1 = function (i) {
                    _this.loading = _this.loadingCtrl.create({
                        content: 'En cours....',
                        duration: numberSec
                    });
                    _this.loading.present();
                    _this.wsPanoProvider.getPieceById(dataId.item(i).id)
                        .then(function (dataResultOnePiece) {
                        var detailsPieces = dataResultOnePiece.item(0).data;
                        var detailPiecesJson = _this.convertArray(detailsPieces);
                        delete detailPiecesJson.imgPano;
                        delete detailPiecesJson.imgPanoDefault;
                        var dataArr = detailPiecesJson.dataPanoArr;
                        dataArr.forEach(function (item, index) {
                            delete item.image1;
                            delete item.image2;
                            delete item.image3;
                        });
                        var allDataValues = _this.getDefautPieces(dataArr);
                        _this.results.push({
                            nummission: idMission,
                            pieceId: dataId.item(i).id,
                            nomPiece: detailPiecesJson.nomPiece,
                            typePiece: detailPiecesJson.typePiece,
                            defautPiece: allDataValues,
                            propretePiece: detailPiecesJson.propretePiece,
                            expanded: true
                        });
                    });
                };
                for (var i = 0; i < dataId.length; i++) {
                    _loop_1(i);
                }
                _this.dataPieces = _this.results;
            }
            else {
                _this.presentToast('Aucune donnée disponible', 3000, 'bottom');
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__salle_salle__["a" /* SallePage */], { nummission: _this.nummission, compters: _this.compters }).then(function () {
                    _this.navCtrl.removeView(_this.navCtrl.getPrevious());
                });
            }
        });
    };
    ListePiecesPage.prototype.closeDefaut = function (item) {
        item.expanded = false;
    };
    ListePiecesPage.prototype.convertArray = function (data) {
        return JSON.parse(data);
    };
    ListePiecesPage.prototype.deletePieceAction = function (pieceId) {
        var _this = this;
        this.wsPanoProvider.deletePiece(pieceId)
            .then(function () {
            _this.displayMessage('Pièce supprimée avec succès');
        });
    };
    ListePiecesPage.prototype.confirmDeletePiece = function (idPiece, idMission) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'Etes-vous sûr de vouloir supprimer cette pièce?',
                            buttons: [
                                {
                                    text: 'Non',
                                    role: 'cancel',
                                    handler: function () {
                                        _this.listPieces(idMission);
                                    }
                                }, {
                                    text: 'Oui',
                                    handler: function () {
                                        _this.deletePieceAction(idPiece);
                                        _this.listPieces(idMission);
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
    ListePiecesPage.prototype.goBack = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__salle_salle__["a" /* SallePage */], { nummission: this.nummission, compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ListePiecesPage.prototype.goToSalle = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__salle_salle__["a" /* SallePage */], { nummission: this.nummission, compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ListePiecesPage.prototype.initSalle = function (typeSalle) {
        var salleObj;
        var salles = this.edlProvider.getSalles();
        for (var i = 0; i < salles.length; i++) {
            if (salles[i].name === typeSalle) {
                salleObj = salles[i];
            }
        }
        return salleObj;
    };
    ListePiecesPage.prototype.goToUpdate = function (nomPiece, typeSalle) {
        var _this = this;
        var salle = this.initSalle(typeSalle);
        this.salleDataProvider.setSalleData(salle);
        this.salleDataProvider.setNomPiece(nomPiece);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__selection_defaut_selection_defaut__["a" /* SelectionDefautPage */], { nummission: this.nummission, typeAction: 'update', compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ListePiecesPage.prototype.terminerSigner = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__signature_signature__["a" /* SignaturePage */], { nummission: this.nummission, compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ListePiecesPage.prototype.openDefaut = function (item) {
        this.dataPieces.map(function (listItem) {
            if (item == listItem) {
                listItem.expanded = true;
            }
            return listItem;
        });
    };
    ListePiecesPage.prototype.presentToast = function (message, duration, position) {
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
    ListePiecesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-liste-pieces',template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/pages/liste-pieces/liste-pieces.html"*/'<ion-header>\n    <ion-grid>\n      	<ion-row>\n			<ion-col col-1 (click)="goBack()">\n				<ion-icon name="arrow-round-back" style="font-size: 30px"></ion-icon>\n			</ion-col>\n        	<ion-col col-10>\n          <ion-title style="margin-left: -50px;">Liste des pièces</ion-title>\n        </ion-col>\n      	</ion-row>\n    </ion-grid>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n    <div ion-item *ngFor="let piece of dataPieces" style="background-color: #639593; margin-bottom: 25px;color:white;font-size: 20px;">\n		<h2>{{ piece.typePiece }} : {{ piece.nomPiece }} </h2>\n\n		<div id="btn-close">\n			<div *ngIf="piece.expanded === true" style="color: #EFEFEF;font-size: 20px;margin-top:2px;">{{ piece.propretePiece }}\n			<span style="margin-left: 4px;padding-top: 10px;" (click)="closeDefaut(piece)"><ion-icon style="color:red;font-size: 30px;" name="close"></ion-icon></span>\n			</div>\n		</div>\n		<expandable [expanded]="piece.expanded">\n			<ng-container *ngFor="let datapano of piece.defautPiece" style="background-color: #EAE6DD;">\n			<ion-grid>\n				<ion-row>\n					<ion-col col-sm-12 col-md-12 col-12>\n						<ion-row class="detail">\n							<ion-col col-md-12 col-12>\n								<p class="detail-child" [innerHTML]="datapano.displayedDescription">\n\n								</p>\n							</ion-col>\n						</ion-row>\n						<ion-row class="detail" *ngIf="datapano.observation !==\'\'" >\n						<ion-col col-md-12 col-12>\n							<p  class="detail-child">\n							{{ datapano.observation }}\n							</p>\n						</ion-col>\n						</ion-row>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</ng-container>\n		<button ion-button round outline (click)="goToUpdate(piece.nomPiece, piece.typePiece)" style="background-color: #EAE6DD;">Modifier cette pièce</button>\n		<button ion-button round outline (click)="confirmDeletePiece(piece.pieceId, piece.nummission)" style="background-color: #EAE6DD;">Supprimer cette pièce</button>\n		</expandable>\n		<p *ngIf="piece.expanded === false" style="color: #EFEFEF;font-size: 20px;" item-end>{{ piece.propretePiece }}</p>\n		<button *ngIf="piece.expanded === false" (click)="openDefaut(piece)" ion-button clear item-end><ion-icon style="color: #EFEFEF;font-size: 30px;" name="arrow-dropdown" float-right></ion-icon></button>\n    </div>\n	</ion-list>\n</ion-content>\n<ion-footer>\n    <div class="pied">\n      <ion-grid>\n        <ion-row>\n          <ion-col (click)="goBack()">\n            <ion-icon class="pager" name="arrow-round-back"></ion-icon>\n          </ion-col>\n          <button ion-button round outline (click)=\'goToSalle()\'>Ajouter une nouvelle piéce</button>\n          <button ion-button color="danger" round outline (click)="terminerSigner()">Aller à l\'étape de signature</button>\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-footer>\n'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/pages/liste-pieces/liste-pieces.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ws_pano_ws_pano__["a" /* WsPanoProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_edl_edl__["a" /* EdlProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_pano_data_pano_data__["a" /* PanoDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_salle_data_salle_data__["a" /* SalleDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], ListePiecesPage);
    return ListePiecesPage;
}());

//# sourceMappingURL=liste-pieces.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signature_signature__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_salle_salle__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_prendre_photo_prendre_photo__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_detail_mission_detail_mission__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_releve_compteurs_releve_compteurs__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_selection_defaut_selection_defaut__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_resume_edl_resume_edl__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_contrats_contrats__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_inventaires_cles_inventaires_cles__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_equipements_exterieurs_equipements_exterieurs__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_liste_pieces_liste_pieces__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_resumelist_resumelist__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_camerabtn_camerabtn__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_resume_image_thumb_resume_image_thumb__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_signaturepad__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_http__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__overriding_CustomHammerConfig__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_file__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_edl_edl__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_immodiag_immodiag__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_camera_image_camera_image__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_db_db__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_ws_mission_ws_mission__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_pano_data_pano_data__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_salle_data_salle_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_user_user__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_mission_data_mission_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_ws_pano_ws_pano__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_expandable_expandable__ = __webpack_require__(525);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Plugins


//Pages














// Components



//Modules







// Providers











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signature_signature__["a" /* SignaturePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_salle_salle__["a" /* SallePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_prendre_photo_prendre_photo__["a" /* PrendrePhotoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_resume_edl_resume_edl__["a" /* ResumeEdlPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_liste_pieces_liste_pieces__["a" /* ListePiecesPage */],
                __WEBPACK_IMPORTED_MODULE_23__components_resumelist_resumelist__["a" /* ResumelistComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_expandable_expandable__["a" /* ExpandableComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_camerabtn_camerabtn__["a" /* CamerabtnComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_resume_image_thumb_resume_image_thumb__["a" /* ResumeImageThumbComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detail_mission_detail_mission__["a" /* DetailMissionPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_releve_compteurs_releve_compteurs__["a" /* ReleveCompteursPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_contrats_contrats__["a" /* ContratsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_inventaires_cles_inventaires_cles__["a" /* InventairesClesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_equipements_exterieurs_equipements_exterieurs__["a" /* EquipementsExterieursPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_selection_defaut_selection_defaut__["a" /* SelectionDefautPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_26_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_28__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contrats/contrats.module#ContratsPageModule', name: 'ContratsPage', segment: 'contrats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inventaires-cles/inventaires-cles.module#InventairesClesPageModule', name: 'InventairesClesPage', segment: 'inventaires-cles', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/liste-pieces/liste-pieces.module#ListePiecesPageModule', name: 'ListePiecesPage', segment: 'liste-pieces', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signature/signature.module#SignaturePageModule', name: 'SignaturePage', segment: 'signature', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-mission/detail-mission.module#DetailMissionPageModule', name: 'DetailMissionPage', segment: 'detail-mission', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/equipements-exterieurs/equipements-exterieurs.module#EquipementsExterieursPageModule', name: 'EquipementsExterieursPage', segment: 'equipements-exterieurs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/releve-compteurs/releve-compteurs.module#ReleveCompteursPageModule', name: 'ReleveCompteursPage', segment: 'releve-compteurs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signature_signature__["a" /* SignaturePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_salle_salle__["a" /* SallePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_prendre_photo_prendre_photo__["a" /* PrendrePhotoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_resume_edl_resume_edl__["a" /* ResumeEdlPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_detail_mission_detail_mission__["a" /* DetailMissionPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_releve_compteurs_releve_compteurs__["a" /* ReleveCompteursPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_contrats_contrats__["a" /* ContratsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_inventaires_cles_inventaires_cles__["a" /* InventairesClesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_equipements_exterieurs_equipements_exterieurs__["a" /* EquipementsExterieursPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_selection_defaut_selection_defaut__["a" /* SelectionDefautPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_liste_pieces_liste_pieces__["a" /* ListePiecesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["HAMMER_GESTURE_CONFIG"], useClass: __WEBPACK_IMPORTED_MODULE_29__overriding_CustomHammerConfig__["a" /* CustomHammerConfig */] },
                __WEBPACK_IMPORTED_MODULE_27__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_33__providers_edl_edl__["a" /* EdlProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_34__providers_immodiag_immodiag__["a" /* ImmodiagProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_camera_image_camera_image__["a" /* CameraImageProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_36__providers_db_db__["a" /* DbProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_ws_mission_ws_mission__["a" /* WsMissionProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_pano_data_pano_data__["a" /* PanoDataProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_salle_data_salle_data__["a" /* SalleDataProvider */],
                __WEBPACK_IMPORTED_MODULE_40__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_41__providers_mission_data_mission_data__["a" /* MissionDataProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_ws_pano_ws_pano__["a" /* WsPanoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_db_db__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_mission_data_mission_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// Provider global


// import { HomePage } from "../pages/home/home";
// import { DetailMissionPage } from "../pages/detail-mission/detail-mission";
//import { ReleveCompteursPage } from "../pages/releve-compteurs/releve-compteurs";
// import { ContratsPage } from "../pages/contrats/contrats";
// import { InventairesClesPage } from "../pages/inventaires-cles/inventaires-cles";
// import { EquipementsExterieursPage } from "../pages/equipements-exterieurs/equipements-exterieurs";
// import { SallePage } from "../pages/salle/salle";
// import { PrendrePhotoPage } from "../pages/prendre-photo/prendre-photo";
// import { SelectionDefautPage } from "../pages/selection-defaut/selection-defaut";
// import { ResumeEdlPage } from "../pages/resume-edl/resume-edl";
// import { SignaturePage } from "../pages/signature/signature";
// import { ListePiecesPage } from "../pages/liste-pieces/liste-pieces";
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, dbProvider, network, toastCtrl, missionDataProvider) {
        var _this = this;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.missionDataProvider = missionDataProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            dbProvider.load();
            statusBar.styleDefault();
            splashScreen.hide();
            _this.checkInternetConnection(1);
            setTimeout(function () {
                _this.checkInternetConnection(2);
            }, 3000);
            _this.network.onchange().subscribe(function () {
                _this.checkInternetConnection(3);
            });
            var self = _this;
            platform.registerBackButtonAction(function (event) {
                self.presentToast('Merci d\'utiliser le bouton retour de l\'application', 3000, 'bottom');
                console.log('Prevent Back Button Page Change');
            }, 101);
        });
    }
    MyApp.prototype.checkInternetConnection = function (nb) {
        console.log('checkInternetConnection', nb);
        console.log('this.network', this.network);
        var self = this;
        if (this.network.type == this.network.Connection.NONE || this.network.type == this.network.Connection.UNKNOWN) {
            console.log('network off');
            self.missionDataProvider.lsSetItem('isOnline', false);
            self.presentToast('Vous n\'êtes pas connecté à internet', 3000, 'bottom');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_6_axios___default.a.get('http://application.abc-immoservices.fr/status', { timeout: 10000 })
                .then(function (response) {
                console.log('network on');
                if (response.data.error === false) {
                    self.missionDataProvider.lsSetItem('isOnline', true);
                    self.presentToast('Vous êtes connecté à internet', 3000, 'bottom');
                }
                else {
                    self.missionDataProvider.lsSetItem('isOnline', false);
                    self.presentToast('Vous n\'êtes pas connecté à internet', 3000, 'bottom');
                }
            })
                .catch(function (error) {
                console.log('network off', error);
                self.missionDataProvider.lsSetItem('isOnline', false);
                self.presentToast('Vous n\'êtes pas connecté à internet', 3000, 'bottom');
            });
        }
    };
    MyApp.prototype.presentToast = function (message, duration, position) {
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
    MyApp.prototype.ngOnDestroy = function () {
        console.log('Destruction');
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__providers_db_db__["a" /* DbProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_mission_data_mission_data__["a" /* MissionDataProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 504:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 506:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumelistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_pano_data_model__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pano_data_pano_data__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ResumelistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ResumelistComponent = /** @class */ (function () {
    function ResumelistComponent(renderer, navCtrl, panoDataProvider) {
        this.renderer = renderer;
        this.navCtrl = navCtrl;
        this.panoDataProvider = panoDataProvider;
        this.expandedList = false;
    }
    ResumelistComponent.prototype.ngOnInit = function () {
        this.renderer.setElementStyle(this.listContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
        this.toggleResumelist();
    };
    ResumelistComponent.prototype.toggleResumelist = function () {
        if (this.expandedList) {
            this.renderer.setElementStyle(this.listContent.nativeElement, "max-height", "0px");
            this.renderer.setElementStyle(this.listContent.nativeElement, "padding", "0px 16px");
            // card.button.toggle = "arrow-dropdown";
        }
        else {
            this.renderer.setElementStyle(this.listContent.nativeElement, "max-height", "500px");
            this.renderer.setElementStyle(this.listContent.nativeElement, "padding", "13px 16px");
            // card.button.toggle = "arrow-dropup";
        }
        this.expandedList = !this.expandedList;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("lc"),
        __metadata("design:type", Object)
    ], ResumelistComponent.prototype, "listContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ResumelistComponent.prototype, "card_title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_pano_data_model__["a" /* PanoData */])
    ], ResumelistComponent.prototype, "dataPano", void 0);
    ResumelistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "resumelist",template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/components/resumelist/resumelist.html"*/'<ion-card>\n    <ion-card-header class="color" (click)="toggleResumelist()">\n        {{ dataPano.idDefaut }}\n        <ion-icon name="arrow-dropdown" float-right></ion-icon>\n    </ion-card-header>\n    <ion-card-content #lc>\n        <ion-grid>\n            <ion-row>\n                <ion-col col-sm-5 col-md-3 col-3>\n                    <ion-grid>\n                        <ion-row class="thumbnail-resume-liste">\n                            <ion-col width-50 height-50 *ngIf="dataPano.image1">\n                                <img src="{{dataPano.image1}}" alt="" />\n                            </ion-col>\n                            <ion-col width-50 height-50 *ngIf="dataPano.image2">\n                                <img src="{{dataPano.image2}}" alt="" />\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-col>\n\n                <ion-col col-sm-12 col-md-9 col-9>\n                    <ion-row class="detail">\n                        <ion-col col-md-9 col-9>\n                            <p class="detail-child" [innerHTML]="dataPano.displayedDescription">\n\n                            </p>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row class="detail">\n                      <ion-col col-md-9 col-9>\n                        <p class="detail-child">\n                          {{ dataPano.observation }}\n                        </p>\n                      </ion-col>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/components/resumelist/resumelist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_pano_data_pano_data__["a" /* PanoDataProvider */]])
    ], ResumelistComponent);
    return ResumelistComponent;
}());

//# sourceMappingURL=resumelist.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalleDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalleDataProvider = /** @class */ (function () {
    function SalleDataProvider(http) {
        this.http = http;
        console.log('Hello SalleDataProvider Provider');
    }
    SalleDataProvider.prototype.setSalleData = function (salle) {
        this.salle = salle;
    };
    SalleDataProvider.prototype.getSalleData = function () {
        return this.salle;
    };
    SalleDataProvider.prototype.setNomPiece = function (nom) {
        this.nomPiece = nom;
    };
    SalleDataProvider.prototype.getNomPiece = function () {
        return this.nomPiece;
    };
    SalleDataProvider.prototype.setPropretePiece = function (etat) {
        this.propretePiece = etat;
    };
    SalleDataProvider.prototype.getPropretePiece = function () {
        return this.propretePiece;
    };
    SalleDataProvider.prototype.setEtatPiece = function (etat) {
        this.etatPiece = etat;
    };
    SalleDataProvider.prototype.getEtatPiece = function () {
        return this.etatPiece;
    };
    SalleDataProvider.prototype.setIndexSallePage = function (index) {
        this.indexSallePage = index;
    };
    SalleDataProvider.prototype.getIndexSallePage = function () {
        return this.indexSallePage;
    };
    SalleDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SalleDataProvider);
    return SalleDataProvider;
}());

//# sourceMappingURL=salle-data.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamerabtnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CamerabtnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CamerabtnComponent = /** @class */ (function () {
    function CamerabtnComponent() {
        console.log('Hello CamerabtnComponent Component');
        this.text = 'Hello World';
    }
    CamerabtnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'camerabtn',template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/components/camerabtn/camerabtn.html"*/'<!-- Generated template for the CamerabtnComponent component -->\n<div class="text-center outer">\n  <div class="middle">\n      <img class="camphoto inner" src="../assets/imgs/add_photo.png">\n  </div>\n  \n</div>'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/components/camerabtn/camerabtn.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CamerabtnComponent);
    return CamerabtnComponent;
}());

//# sourceMappingURL=camerabtn.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeImageThumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ResumeImageThumbComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ResumeImageThumbComponent = /** @class */ (function () {
    function ResumeImageThumbComponent() {
        console.log('Hello ResumeImageThumbComponent Component');
        this.text = 'Hello World';
    }
    ResumeImageThumbComponent.prototype.removeImage = function () {
        alert("Remove Image");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ResumeImageThumbComponent.prototype, "img", void 0);
    ResumeImageThumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'resume-image-thumb',template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/components/resume-image-thumb/resume-image-thumb.html"*/'<!-- Generated template for the ResumeImageThumbComponent component -->\n<div>\n  <ion-icon name="close" class="remove-image" (click)="removeImage()"></ion-icon>\n  <img [src]="img" alt="image de wikipédia">\n</div>'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/components/resume-image-thumb/resume-image-thumb.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ResumeImageThumbComponent);
    return ResumeImageThumbComponent;
}());

//# sourceMappingURL=resume-image-thumb.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHammerConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomHammerConfig = /** @class */ (function (_super) {
    __extends(CustomHammerConfig, _super);
    function CustomHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'press': { time: 500 } //set press delay for 1 second
        };
        return _this;
    }
    return CustomHammerConfig;
}(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["HammerGestureConfig"]));

//# sourceMappingURL=CustomHammerConfig.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent(renderer) {
        this.renderer = renderer;
    }
    ExpandableComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('expandWrapper', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('expanded'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('expandHeight'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandHeight", void 0);
    ExpandableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'expandable',template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/components/expandable/expandable.html"*/'<div #expandWrapper class=\'expand-wrapper\' [class.collapsed]="!expanded">\n    <ng-content></ng-content>\n</div>\n'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/components/expandable/expandable.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ExpandableComponent);
    return ExpandableComponent;
}());

//# sourceMappingURL=expandable.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanoDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PanoDataProvider = /** @class */ (function () {
    function PanoDataProvider(http) {
        this.http = http;
        this.idDefautToUpdate = 0;
        console.log('Hello PanoDataProvider Provider');
    }
    PanoDataProvider.prototype.setDataPanoArr = function (dataPanoArr) {
        this.dataPanoArr = dataPanoArr;
    };
    PanoDataProvider.prototype.getDataPanoArr = function () {
        return this.dataPanoArr;
    };
    PanoDataProvider.prototype.setIdDefautToUpdate = function (id) {
        this.idDefautToUpdate = id;
    };
    PanoDataProvider.prototype.getDefautToUpdate = function () {
        return this.idDefautToUpdate;
    };
    PanoDataProvider.prototype.setImagePano = function (imageBase64) {
        this.imagePano = imageBase64;
    };
    PanoDataProvider.prototype.setImagePanoDefault = function (defaultImage) {
        this.imgePanoDefault = defaultImage;
    };
    PanoDataProvider.prototype.getImagePano = function () {
        return this.imagePano;
    };
    PanoDataProvider.prototype.getImagePanoDefault = function () {
        return this.imgePanoDefault;
    };
    PanoDataProvider.prototype.setMarkers = function (markers) {
        this.markers = markers;
    };
    PanoDataProvider.prototype.getMarkers = function () {
        return this.markers;
    };
    PanoDataProvider.prototype.setPanoDataToUpdate = function (data) {
        this.panoDataToUpdate = data;
    };
    PanoDataProvider.prototype.getPanoDataToUpdate = function () {
        return this.panoDataToUpdate;
    };
    PanoDataProvider.prototype.updatePanoDataArr = function (dataPanoUpdated) {
        for (var i = 0; i < this.dataPanoArr.length; i++) {
            if (this.dataPanoArr[i].idDefaut === dataPanoUpdated.idDefaut) {
                this.dataPanoArr[i] = dataPanoUpdated;
                break;
            }
        }
    };
    PanoDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PanoDataProvider);
    return PanoDataProvider;
}());

//# sourceMappingURL=pano-data.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prendre_photo_prendre_photo__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equipements_exterieurs_equipements_exterieurs__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_edl_edl__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signature_signature__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_salle_data_salle_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__liste_pieces_liste_pieces__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__prendre_photo_prendre_photo__["a" /* PrendrePhotoPage */], { nummission: this.nummission }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    SallePage.prototype.goToFormetat = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__equipements_exterieurs_equipements_exterieurs__["a" /* EquipementsExterieursPage */], { nummission: this.nummission,
            compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    SallePage.prototype.goToResumeEdl = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_signature_signature__["a" /* SignaturePage */], { nummission: this.nummission, compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    SallePage.prototype.goToListPieces = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__liste_pieces_liste_pieces__["a" /* ListePiecesPage */], { nummission: this.nummission, compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    SallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-salle',template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/pages/salle/salle.html"*/'<!--\n  Generated template for the SallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <!--\n  <div class="tete">\n    <ion-icon name="ios-disc-outline"></ion-icon> ABC immoservices\n  </div>\n  -->\n</ion-header>\n\n<ion-content class="card-background-page">\n\n  <div class="tete">\n    <img width="12%" height="auto" src="../../assets/imgs/logo.png">\n    <!-- <span style="padding-bottom: 20px"> ABC immoservices</span> -->\n  </div>\n\n  <div class="Text">Choisissez une pièce pour commencer l\'EDL</div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-md-6 col-sm-12 *ngFor="let salle of salles">\n        <ion-card (click)="goToPrendrePhoto(salle)">\n          <img [src]="salle.image">\n          <div class="card-title">{{ salle.name }}</div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <div class="pied">\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="goToFormetat()">\n          <ion-icon class="pager" name="arrow-round-back"></ion-icon>\n        </ion-col>\n        <button ion-button class="middle-btn" round outline (click)="goToListPieces()">Recapitulatif des pièces</button>\n        <button ion-button class="middle-btn" round outline (click)="goToResumeEdl()">Aller à l\'étape de signature</button>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/pages/salle/salle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_edl_edl__["a" /* EdlProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_salle_data_salle_data__["a" /* SalleDataProvider */]])
    ], SallePage);
    return SallePage;
}());

//# sourceMappingURL=salle.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraImageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(44);
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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



/*
  Generated class for the CameraImageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CameraImageProvider = /** @class */ (function () {
    function CameraImageProvider(http, camera) {
        this.http = http;
        this.camera = camera;
        this.options = {
            quality: 80,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true,
            targetHeight: 800,
            targetWidth: 800,
        };
        console.log('Hello CameraImageProvider Provider');
    }
    CameraImageProvider.prototype.getPicture = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fired;
            return __generator(this, function (_a) {
                fired = new Date();
                console.log('Cam fired on:', fired);
                return [2 /*return*/, this.camera.getPicture(this.options)
                        .then(function (imageData) {
                        return 'data:image/jpeg;base64,' + imageData;
                    }).catch(function (error) {
                        console.log("Error", error);
                        return "../assets/imgs/add_photo.svg";
                    })];
            });
        });
    };
    CameraImageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], CameraImageProvider);
    return CameraImageProvider;
}());

//# sourceMappingURL=camera-image.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignaturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__salle_salle__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_salle_data_salle_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_mission_data_mission_data__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// Provider global

/**
 * Generated class for the SignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignaturePage = /** @class */ (function () {
    function SignaturePage(navCtrl, navParams, alertCtrl, salleDataProvider, missionDataProvider, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.salleDataProvider = salleDataProvider;
        this.missionDataProvider = missionDataProvider;
        this.storage = storage;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__salle_salle__["a" /* SallePage */], { nummission: this.signatureData.nummission, compters: this.compters }).then(function () {
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
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]).then(function () {
                                _this.navCtrl.removeView(_this.navCtrl.getPrevious());
                                _this.storage.clear();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('signatureProp'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SignaturePage.prototype, "signatureProp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paraphe'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SignaturePage.prototype, "paraphe", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('signatureLoc'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SignaturePage.prototype, "signatureLoc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('signatureExLoc'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SignaturePage.prototype, "signatureExLoc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('signatureLoc'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SignaturePage.prototype, "signatureLocs", void 0);
    SignaturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signature',template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/pages/signature/signature.html"*/'<!--\n  Generated template for the SignaturePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <!--\n  <div class="tete">\n    <ion-icon name="ios-disc-outline"></ion-icon> ABC immoservices\n  </div>\n-->\n</ion-header>\n\n\n<ion-content class="body">\n\n  <div class="tete">\n    <img width="12%" height="auto" src="../../assets/imgs/logo.png">\n    <span style="padding-bottom: 20px">ABC immoservices</span>\n  </div>\n\n  <div class="corp">\n    <ion-grid>\n      <ion-row>\n        <ion-col>Nom du locataire</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <span style="background-color: #ffffff; color: #649896; padding: .3em 1em;">{{detailMission.loc_nomcomplet}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <ion-grid *ngIf="!localCommercial">\n      <ion-row><ion-col>Le présent état des lieux a été établi par la société ABC IMMODIAG, Société à responsabilité limitée immatriculée au Registre du Commerce et des Sociétés de Nantes sous le numéro 495 006 835 et dont le siège social est situé au 39, Rue de la Bastille 44000 NANTES.</ion-col></ion-row>\n\n      <ion-row><ion-col>La société ABC IMMODIAG a été expressément mandatée par le bailleur ou son représentant aux fins d’établir le présent état des lieux.</ion-col></ion-row>\n\n      <ion-row><ion-col>La société ABC IMMODIAG présente toutes les garanties d’indépendance lui permettant de réaliser le présent état des lieux en parfaite objectivité, de manière contradictoire et amiable avec le preneur ou son représentant lors de la remise ou de la restitution des clés.</ion-col></ion-row>\n\n      <ion-row><ion-col>Le bailleur et le preneur, ou leur représentant, déclarent que le procédé photographique mis en œuvre par la société ABC IMMODIAG pour l’établissement du présent état des lieux permet une transcription sincère et exacte de l’apparence des lieux visités.</ion-col></ion-row>\n\n      <ion-row><ion-col>Les Parties acceptent et reconnaissent que l’absence de mention portée une photographie figurant à l’état des lieux signifie de manière claire et non équivoque que l’élément représenté est NEUF ou en BON ETAT.</ion-col></ion-row>\n\n      <ion-row><ion-col>Tout élément qui ne correspondrait pas à un état NEUF ou en BON ETAT ou tout autre fait notable sur l’état des lieux fera l’objet d’une mention expresse de la part de la société ABC IMMODIAG.</ion-col></ion-row>\n\n      <ion-row><ion-col>Pour l’établissement de l’état des lieux, les parties acceptent et reconnaissent la définition des termes suivants :\n        <ul>\n          <li>NEUF : état neuf, parfait, jamais habité ou entièrement et parfaitement refait ;</li>\n          <li>BON ETAT : état général très approchant du neuf mais portant des traces d’usures et de vieillissement très légères ;</li>\n          <li>MOYEN : état portant des traces d’usures et de vieillissement ;</li>\n          <li>USAGE AVANCE : état laissant apparaître un vieillissement prononcé, pouvant nécessiter une remise en état ;</li>\n          <li>DEGRADE : défauts d’entretiens apparents ou détériorations apparentes, nécessitant une remise en état même partielle de l’élément.</li>\n        </ul>\n      </ion-col></ion-row>\n\n      <ion-row><ion-col>Les Parties reconnaissent que la société ABC IMMODIAG ne serait être tenue responsable de l’absence de constatations portant sur des éléments dans les lieux non visibles ou dissimulés par des objets fixes ou par des objets lourds ou imposants.<br />\n      L’état des lieux est dressé contradictoirement par la société ABC IMMODIAG sur un support numérique.</ion-col></ion-row>\n\n      <ion-row><ion-col>Le Preneur a la faculté de revoir intégralement l’état des lieux sur le support numérique mis à sa disposition et de solliciter toutes modifications qu’il jugerait utile avant de signer le document de manière électronique.</ion-col></ion-row>\n\n      <ion-row><ion-col>Le bailleur et le preneur reconnaissent que le présent état des lieux a été réalisé conformément aux dispositions de l’article 3-2 de la loi n°89-462 du 6 juillet 1989 tendant à améliorer les rapports locatifs et portant modification de la loi n°86-1290 du 23 décembre 1986.</ion-col></ion-row>\n\n      <ion-row><ion-col>Le bailleur déclare être parfaitement informé qu’aux termes de ces dispositions, il est en droit de :<br />\n      « demander au bailleur ou à son représentant de compléter l\'état des lieux d\'entrée dans un délai de dix jours à compter de son établissement. Si cette demande est refusée, le locataire peut saisir la commission départementale de conciliation territorialement compétente.<br />\n      Pendant le premier mois de la période de chauffe, le locataire peut demander que l\'état des lieux soit complété par l\'état des éléments de chauffage.<br />\n      Le propriétaire ou son mandataire complète les états des lieux d\'entrée et de sortie par les relevés des index pour chaque énergie, en présence d\'une installation de chauffage ou d\'eau chaude sanitaire individuelle, ou collective avec un comptage individuel. L\'extrait de l\'état des lieux correspondant est mis à la disposition de la personne chargée d\'établir le diagnostic de performance énergétique prévu à l\'article L. 134-1 du code de la construction et de l\'habitation qui en fait la demande, sans préjudice de la mise à disposition des factures ».</ion-col></ion-row>\n\n      <ion-row><ion-col>Il est encore parfaitement admis par le bailleur et le preneur que le présent état des lieux a été dressé en parfait respect avec les termes du Décret n°2016-382 du 30 mars 2016 fixant les modalités d’établissement de l’état des lieux et de prise en compte de la vétusté des logements loués à usage de résidence principale et notamment de son article 2 lequel stipule que :<br />\n      « L\'état des lieux décrit le logement et constate son état de conservation. Il comporte au moins les informations suivantes :<br />\n      <ol>\n        <li>\n          A l\'entrée et à la sortie du logement :\n          <ol>\n            <li>Le type d\'état des lieux : d\'entrée ou de sortie ;</li>\n            <li>Sa date d\'établissement ;</li>\n            <li>La localisation du logement ;</li>\n            <li>Le nom ou la dénomination des parties et le domicile ou le siège social du bailleur ;</li>\n            <li>Le cas échéant, le nom ou la dénomination et le domicile ou le siège social des personnes mandatées pour réaliser l\'état des lieux ;</li>\n            <li>Le cas échéant, les relevés des compteurs individuels de consommation d\'eau ou d\'énergie ;</li>\n            <li>Le détail et la destination des clés ou de tout autre moyen d\'accès aux locaux à usage privatif ou commun ;</li>\n            <li>Pour chaque pièce et partie du logement, la description précise de l\'état des revêtements des sols, murs et plafonds, des équipements et des éléments du logement. Il peut être complété d\'observations ou de réserves et illustré d\'images ;</li>\n            <li>La signature des parties ou des personnes mandatées pour réaliser l\'état des lieux ;</li>\n          </ol>\n        </li>\n        <li>\n          A la sortie du logement :\n          <ol>\n            <li>L\'adresse du nouveau domicile ou du lieu d\'hébergement du locataire ;</li>\n            <li>La date de réalisation de l\'état des lieux d\'entrée (si cette dernière est communiquée par l’un des parties);</li>\n            <li>Eventuellement, les évolutions de l\'état de chaque pièce et partie du logement constatées depuis l\'établissement de l\'état des lieux d\'entrée ».</li>\n          </ol>\n        </li>\n      </ol>\n      </ion-col></ion-row>\n\n      <ion-row><ion-col>L’état des lieux est établi sur support numérique, et est remis en autant d’exemplaires que de parties.</ion-col></ion-row>\n\n      <ion-row><ion-col>Pour le preneur, le dit exemplaire sous format numérique lui sera remis par un courrier électronique avec accusé d’envoi à l’adresse électronique communiquée par lui, dans un délai de 48 heures après le rendez-vous d’état des lieux.</ion-col></ion-row>\n\n      <ion-row><ion-col>Le preneur certifie l’exactitude et la validité de l’adresse électronique déclarée par lui et ne pourra tenir pour responsable la société ABC IMMODIAG de l’absence de due réception en raison de sa défaillance.</ion-col></ion-row>\n\n      <ion-row><ion-col>En tout état de cause, le preneur s’engage à vérifier la bonne réception de l’état des lieux et d’avertir immédiatement la société IMODIAG, en cas de bonne réception.</ion-col></ion-row>\n\n      <ion-row><ion-col>L’état des lieux est annexé au contrat de location par la partie la plus diligente.</ion-col></ion-row>\n\n      <ion-row><ion-col>Après la remise des exemplaires à chacune des parties, la société ABC IMMODIAG ne conserve pas de copie de l’état des lieux, qui ne pourra pas donner lieu à une nouvelle remise.</ion-col></ion-row>\n\n      <ion-row><ion-col>Les informations et données recueillies lors de l’état des lieux assuré par la société ABC IMMODIAG pourront être conservées sur support dématérialisé pendant une durée maximale de trois ans.</ion-col></ion-row>\n\n      <ion-row><ion-col>La société ABC IMMODIAG reconnaît que la conservation de ces informations ne pourra excéder ce délai et que toutes les mesures techniques et organisationnelles seront prises par elle pour assurer un archivage sécurisé, et en accès restreint, en conformité avec les nouvelles obligations en matière de protection des données personnelles issues du Règlement de l’Union européenne n°2016/679 dit RGPD.</ion-col></ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf="localCommercial">\n      <ion-row><ion-col>Le présent état des lieux a été établi par la société ABC IMMODIAG, Société à responsabilité limitée immatriculée au Registre du Commerce et des Sociétés de Nantes sous le numéro 495 006 835 et dont le siège social est situé au 39, Rue de la Bastille 44000 NANTES.</ion-col></ion-row>\n\n      <ion-row><ion-col>La société ABC IMMODIAG a été expressément mandatée par le bailleur ou son représentant aux fins d’établir le présent état des lieux.</ion-col></ion-row>\n\n      <ion-row><ion-col>La société ABC IMMODIAG présente toutes les garanties d’indépendance lui permettant de réaliser le présent état des lieux en parfaite objectivité, de manière contradictoire et amiable avec le preneur ou son représentant lors de la remise ou de la restitution des clés.</ion-col></ion-row>\n\n      <ion-row><ion-col>Le bailleur et le preneur, ou leur représentant, déclarent que le procédé photographique mis en œuvre par la société ABC IMMODIAG pour l’établissement du présent état des lieux permet une transcription sincère et exacte de l’apparence des lieux visités.</ion-col></ion-row>\n\n      <ion-row><ion-col>Les Parties acceptent et reconnaissent que l’absence de mention portée une photographie figurant à l’état des lieux signifie de manière claire et non équivoque que l’élément représenté est NEUF ou en BON ETAT.</ion-col></ion-row>\n\n      <ion-row><ion-col>Tout élément qui ne correspondrait pas à un état NEUF ou en BON ETAT ou tout autre fait notable sur l’état des lieux fera l’objet d’une mention expresse de la part de la société ABC IMMODIAG.</ion-col></ion-row>\n\n      <ion-row><ion-col>Pour l’établissement de l’état des lieux, les parties acceptent et reconnaissent la définition des termes suivants :\n        <ul>\n          <li>NEUF : état neuf, parfait, jamais habité ou entièrement et parfaitement refait ;</li>\n          <li>BON ETAT : état général très approchant du neuf mais portant des traces d’usures et de vieillissement très légères ;</li>\n          <li>ETAT MOYEN : état portant des traces d’usures et de vieillissement ;</li>\n          <li>USAGE AVANCE : état laissant apparaître un vieillissement prononcé, pouvant nécessiter une remise en état ;</li>\n          <li>DEGRADE : défauts d’entretiens apparents ou détériorations apparentes, nécessitant une remise en état même partielle de l’élément.</li>\n        </ul>\n      </ion-col></ion-row>\n\n      <ion-row><ion-col>L’état des lieux est dressé contradictoirement par la société ABC IMMODIAG sur un support numérique.</ion-col></ion-row>\n\n      <ion-row><ion-col>Le Preneur a la faculté de revoir intégralement l’état des lieux sur le support numérique mis à sa disposition et de solliciter toutes modifications qu’il jugerait utile avant de signer le document de manière électronique.</ion-col></ion-row>\n\n      <ion-row><ion-col>L’état des lieux est établi sur support numérique, il est remis sous ce format numérique au preneur [par la mise à disposition d’un lien ou par courrier électronique] et est édité en autant d’exemplaires papier que de parties, dont un est remis au preneur.</ion-col></ion-row>\n\n      <ion-row><ion-col>Il est annexé au contrat de location.</ion-col></ion-row>\n\n      <ion-row><ion-col>La société ABC IMMODIAG conserve une copie de l’état des lieux sur support dématérialisé pendant [la durée du bail]</ion-col></ion-row>\n\n      <ion-row><ion-col>La société ABC IMMODIAG reconnaît que la conservation de ce support dématérialisé ne pourra excéder la durée du bail [ou autre délai prévu] et que toutes les mesures techniques et organisationnelles seront prises par elle pour assurer un archivage sécurisé, et en accès restreint, en conformité avec les nouvelles obligations en matière de protection des données personnelles issues du Règlement de l’Union européenne n°2016/679 dit RGPD.</ion-col></ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-10>\n          Observations générales\n          <ion-textarea rows="6" style="background-color:#fff; color: #3b827e;width:100%;" [(ngModel)]="observation"></ion-textarea>\n        </ion-col>\n        <ion-col col-10>\n          <ion-checkbox color="primary" [(ngModel)]="elementsCachesParMeubles"></ion-checkbox> Etat des lieux sous réserve de la découverte d’anomalies sur des parties non visibles et non accessibles car effectué en la présence de meuble(s).\n        </ion-col>\n        <ion-col col-10>\n          <ion-checkbox color="primary" [(ngModel)]="pasElectricite"></ion-checkbox> Etat des lieux sous réserve de la découverte d’anomalies car effectué sans électricité et donc partiellement dans la pénombre. Les éléments d’éclairages et électriques dans leur globalités n’ont donc pu être testés.\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-10>\n          Paraphes<br/>\n          <signature-pad #paraphe [options]="signaturePadOptions" id="paraphe"></signature-pad>\n          <ion-icon name="close-circle" class="clear" (click)="drawClear(\'paraphe\')"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-10>\n          Signatures <ion-icon style="color:#ffffff" name="ios-information-circle-outline"></ion-icon>\n          <span style="color:#a5c5c2"> signer ci-dessous avec un pen ou avec le doigt. </span>\n        </ion-col>\n      </ion-row>\n      <ion-row class="text-center">\n        <div style="margin-right:20px;">\n          <signature-pad #signatureProp [options]="signaturePadOptions" id="signatureProp"></signature-pad>\n          <ion-icon name="close-circle" class="clear" (click)="drawClear()"></ion-icon>\n          <br>Pour le propriétaire\n        </div>\n\n        <div *ngFor="let item of locat; let index = index;" style="margin-right:20px">\n          <signature-pad #signatureLoc [options]="signaturePadOptions" id="signatureLoc{{item.id}}"></signature-pad>\n          <ion-icon name="close-circle" class="clear" (click)="drawClear(\'true\', index)"></ion-icon>\n          <br>Le locataire\n          <br>{{ item.nom }}\n          <br> &nbsp;\n          <br> &nbsp;\n          <br> &nbsp;\n        </div>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class="pied">\n    <ion-grid>\n      <ion-row>\n        <ion-col (click)="goToResume()">\n          <ion-icon class="pager" name="arrow-round-back"></ion-icon>\n        </ion-col>\n        <button ion-button round outline (click)="addSignature()">Ajouter un signataire</button>\n        <button ion-button color="danger" round outline (click)="goToHome()">Valider cet état des lieux</button>\n\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/pages/signature/signature.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_salle_data_salle_data__["a" /* SalleDataProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_mission_data_mission_data__["a" /* MissionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SignaturePage);
    return SignaturePage;
}());

//# sourceMappingURL=signature.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_xml2js__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bluebird__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__detail_mission_detail_mission__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signature_signature__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_mission_data_mission_data__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_ws_mission_ws_mission__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// Provider global

// Providers


var VENTE_CMCIC_URL = "https://abcimmoservi.sogexpert.com/synchro_logiciel?action=";
var LOCATION_NATIONALE_URL = "https://location.sogexpert.com/synchro_logiciel?action=";
var GESTION_LOCATION_CMCIC_URL = "https://abcimmodiag.sogexpert.com/synchro_logiciel?action=";
var MEDIALIBS_URL = "https://medialibs.sogexpert.com/synchro_logiciel?action=";
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, wsMissionProvider, loadingCtrl, alertCtrl, missionDataProvider, toastCtrl, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.wsMissionProvider = wsMissionProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.missionDataProvider = missionDataProvider;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.storage = storage;
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
            if (e.row.etat == 'Planifié' && this.status == null) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__detail_mission_detail_mission__["a" /* DetailMissionPage */], e.row).then(function () {
                    _this.navCtrl.removeView(_this.navCtrl.getPrevious());
                });
            }
            if (e.row.etat == 'pending') {
                console.log(e.row);
                var alert_2 = this.alertCtrl.create({
                    title: 'Cette mission est en cours de réalisation',
                    message: 'Quelle action souhaitez-vous effectuer ?',
                    buttons: [
                        {
                            text: 'Continuer la mission',
                            handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__detail_mission_detail_mission__["a" /* DetailMissionPage */], e.row).then(function () {
                                    _this.navCtrl.removeView(_this.navCtrl.getPrevious());
                                });
                            }
                        },
                        {
                            text: 'Signer la mission',
                            handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__signature_signature__["a" /* SignaturePage */], { nummission: e.row.uid }).then(function () {
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
                                                    _this.storage.clear();
                                                });
                                            }
                                        },
                                        {
                                            text: 'Non',
                                            handler: function () {
                                                console.log('non');
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
            if (e.row.etat == 'Planifié' && this.status != null) {
                var alert_3 = this.alertCtrl.create({
                    title: 'Une autre mission est en cours de réalisation',
                    message: "Vous deviez finaliser la mission en cours <br> avants de r\u00E9aliser une autre,<br> \n                    sinon vous deviez supprimer <br>les donn\u00E9es de la mission en cours <br>Merci",
                    buttons: ['Ok']
                });
                alert_3.present();
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__login_login__["a" /* LoginPage */]).then(function () {
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
                var alert_4 = _this.alertCtrl.create({
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
                alert_4.present();
            }
        });
    };
    HomePage.prototype.synchroniserMission = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_7_bluebird__(function (resolve, reject) {
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
        return new __WEBPACK_IMPORTED_MODULE_7_bluebird__(function (resolve, reject) {
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
        return new __WEBPACK_IMPORTED_MODULE_7_bluebird__(function (resolve, reject) {
            _this.missionDataProvider.lsGetItem('succeededPlateforms')
                .then(function (platforms) {
                return __WEBPACK_IMPORTED_MODULE_7_bluebird__["map"](platforms, function (p) {
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
                missions = Object(__WEBPACK_IMPORTED_MODULE_8_lodash__["flatten"])(missions);
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
        return new __WEBPACK_IMPORTED_MODULE_7_bluebird__(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_6_axios___default.a.get(url, {})
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
        return new __WEBPACK_IMPORTED_MODULE_7_bluebird__(function (resolve) {
            var parser = new __WEBPACK_IMPORTED_MODULE_5_xml2js___default.a.Parser({
                trim: true,
                explicitArray: true
            });
            parser.parseString(data, function (err, result) {
                var parsedData = result;
                if (parsedData.dossiers.erreur) {
                    return resolve([]);
                }
                var dossiers = parsedData.dossiers.dossier;
                var results = Object(__WEBPACK_IMPORTED_MODULE_8_lodash__["map"])(dossiers, function (elt) {
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
        return new __WEBPACK_IMPORTED_MODULE_7_bluebird__(function (resolve, reject) {
            _this.wsMissionProvider.getAllMissions(false)
                .then(function (missions) {
                __WEBPACK_IMPORTED_MODULE_7_bluebird__["map"](missions, function (elt) {
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
                        _this.status = missionEtat;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_datatable__["DatatableComponent"])
    ], HomePage.prototype, "tab", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/mirana/Documents/ABC/edl/src/pages/home/home.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content class="body">\n\n  <!--\n  <div class="tete">\n      <ion-icon name="ios-disc-outline"></ion-icon> ABC immoservices\n  </div>\n  -->\n  <div class="tete">\n    <img width="12%" height="auto" src="../../assets/imgs/logo.png">\n    <!-- <span style="padding-bottom: 20px"> ABC immoservices</span> -->\n  </div>\n\n  <div class="corp">\n    <ion-grid *ngIf="technicienConnected">\n      <ion-row>\n        <ion-col style="padding: 0.9em;">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-md-8>\n                <span (click)="exportDbData()">Missions</span> de <b>{{ technicienConnected.prenom }} {{ technicienConnected.nom }}</b> le <b>{{ todayDate }}</b>\n              </ion-col>\n              <ion-col col-md-2>\n              </ion-col>\n              <ion-col col-md-2>\n                <button ion-button color="danger" (click)="disconnect()"> Déconnexion </button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row style="border-bottom: 1px solid;">\n        <ion-col style="padding: 4px 0.9em;">Sélectionner une mission</ion-col>\n        <ion-col style="display: inline-flex;height: 32px;">\n          <ion-input placeholder="Filtrer par mot-clé" [(ngModel)]="search" (ngModelChange)=\'updateFilter($event)\'\n            clearInput></ion-input>\n          <ion-icon name="search"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ngx-datatable #tab [headerHeight]="50" [rowHeight]="\'auto\'" [rows]="table" [columnMode]="\'force\'" [limit]="100"\n        [rowClass]="getRowClass" [messages]="messages" [sorts]="[{prop: \'datemission\', dir: \'asc\'}]" (activate)="onUserEvent($event)" >\n\n\n        <ngx-datatable-column name="Datemission" [sortable]="true">\n          <ng-template let-column="column" ngx-datatable-header-template let-sort="sortFn">\n            <span (click)="sort()">Date</span>\n          </ng-template>\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value | date: \'dd/MM/yyyy HH:mm\'}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name="Nummission" [sortable]="true">\n          <ng-template let-column="column" ngx-datatable-header-template let-sort="sortFn">\n            <span (click)="sort()">N° mission</span>\n          </ng-template>\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name="Typemission" [sortable]="true">\n          <ng-template let-column="column" ngx-datatable-header-template let-sort="sortFn">\n            <span (click)="sort()">Type</span>\n          </ng-template>\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name="Proprietaire" [sortable]="true">\n          <ng-template let-column="column" ngx-datatable-header-template let-sort="sortFn">\n            <span (click)="sort()"> Propriétaire</span>\n          </ng-template>\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name="Locataire" [sortable]="true">\n          <ng-template let-column="column" ngx-datatable-header-template let-sort="sortFn">\n            <span (click)="sort()">Locataire</span>\n          </ng-template>\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name="Agence" [sortable]="true">\n          <ng-template let-column="column" ngx-datatable-header-template let-sort="sortFn">\n            <span (click)="sort()">Agence</span>\n          </ng-template>\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name="Ville" [sortable]="true">\n          <ng-template let-column="column" ngx-datatable-header-template let-sort="sortFn">\n            <span (click)="sort()"> Ville </span>\n          </ng-template>\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            {{value}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name="Etat" [cellClass]="\'etat\'" [sortable]="true">\n          <ng-template let-column="column" ngx-datatable-header-template let-sort="sortFn">\n            <span (click)="sort()"> Etat </span>\n          </ng-template>\n          <ng-template let-value="value" ngx-datatable-cell-template>\n            <div class="etat">\n              <div *ngIf="value === \'Planifié\'">\n                <span>A Faire</span>\n                <ion-icon name="radio-button-on" class="afaire"></ion-icon>\n              </div>\n              <div *ngIf="value === \'pending\'">\n                <span>En cours</span>\n                <ion-icon name="radio-button-on" class="encours"></ion-icon>\n              </div>\n              <div *ngIf="value === \'tosync\'">\n                <span>A synchroniser</span>\n                <ion-icon name="radio-button-on" class="tosync"></ion-icon>\n              </div>\n              <div *ngIf="value === \'synchronized\'">\n                <span>Terminé</span>\n                <ion-icon name="radio-button-on" class="termine"></ion-icon>\n              </div>\n              <div *ngIf="value === \'Intervenu\'">\n                <span>Terminé</span>\n                <ion-icon name="radio-button-on" class="termine"></ion-icon>\n              </div>\n            </div>\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n    </ion-grid>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class="pied">\n    <ion-grid>\n      <ion-row align-items-center >\n        <ion-col>\n          <button ion-button color="danger" round outline (click)="synchroniser()">Synchroniser les données</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-footer>\n\n'/*ion-inline-end:"/home/mirana/Documents/ABC/edl/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_13__providers_ws_mission_ws_mission__["a" /* WsMissionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_11__providers_mission_data_mission_data__["a" /* MissionDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[323]);
//# sourceMappingURL=main.js.map