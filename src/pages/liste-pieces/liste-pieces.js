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
import { DomSanitizer } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { WsPanoProvider } from '../../providers/ws-pano/ws-pano';
import { PanoDataProvider } from '../../providers/pano-data/pano-data';
import { SallePage } from '../salle/salle';
import { SelectionDefautPage } from '../selection-defaut/selection-defaut';
import { SalleDataProvider } from '../../providers/salle-data/salle-data';
import { EdlProvider } from '../../providers/edl/edl';
import { SignaturePage } from '../signature/signature';
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
        if (indexImage1 !== -1)
            allDataPiece.splice(indexImage1, 1);
        if (indexImage2 !== -1)
            allDataPiece.splice(indexImage2, 1);
        if (indexImage3 !== -1)
            allDataPiece.splice(indexImage3, 1);
        return allDataPiece;
    };
    ListePiecesPage.prototype.listPieces = function (idMission) {
        var _this = this;
        this.wsPanoProvider.getAllIDPieces(idMission)
            .then(function (dataId) {
            var numberSec = dataId.length * 1500;
            _this.results = [];
            console.log(dataId);
            _this.loading = _this.loadingCtrl.create({
                content: 'En cours....',
                duration: numberSec
            });
            _this.loading.present();
            if (dataId.length > 0) {
                var _loop_1 = function (i) {
                    _this.wsPanoProvider.getPieceById(dataId.item(i).id)
                        .then(function (dataResultOnePiece) {
                        var detailsPieces = dataResultOnePiece.item(0).data;
                        var detailPiecesJson = _this.convertArray(detailsPieces);
                        _this.results.push({
                            nummission: idMission,
                            pieceId: dataId.item(i).id,
                            nomPiece: detailPiecesJson.nomPiece,
                            typePiece: detailPiecesJson.typePiece,
                            defautPiece: _this.getDefautPieces(detailPiecesJson.dataPanoArr),
                            propretePiece: detailPiecesJson.propretePiece,
                            expanded: true
                        });
                        console.log(_this.getDefautPieces(detailPiecesJson.dataPanoArr));
                    });
                };
                for (var i = 0; i < dataId.length; i++) {
                    _loop_1(i);
                }
                _this.dataPieces = _this.results;
            }
            else {
                _this.presentToast('Aucune donnée disponible', 3000, 'bottom');
            }
            //this.loading.dismiss();
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
            var alert;
            var _this = this;
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
        this.navCtrl.push(SallePage, { nummission: this.nummission, compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ListePiecesPage.prototype.goToSalle = function () {
        var _this = this;
        this.navCtrl.push(SallePage, { nummission: this.nummission, compters: this.compters }).then(function () {
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
        this.navCtrl.push(SelectionDefautPage, { nummission: this.nummission, typeAction: 'update', compters: this.compters }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    ListePiecesPage.prototype.terminerSigner = function () {
        var _this = this;
        this.navCtrl.push(SignaturePage, { nummission: this.nummission, compters: this.compters }).then(function () {
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
        IonicPage(),
        Component({
            selector: 'page-liste-pieces',
            templateUrl: 'liste-pieces.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            WsPanoProvider,
            LoadingController,
            ToastController,
            EdlProvider,
            PanoDataProvider,
            SalleDataProvider,
            AlertController,
            DomSanitizer])
    ], ListePiecesPage);
    return ListePiecesPage;
}());
export { ListePiecesPage };
//# sourceMappingURL=liste-pieces.js.map