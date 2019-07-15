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
import { EquipementsExterieursPage } from '../equipements-exterieurs/equipements-exterieurs';
import { ContratsPage } from "../contrats/contrats";
import { Camera } from '@ionic-native/camera';
import { CameraImageProvider } from '../../providers/camera-image/camera-image';
// Provider global
import { MissionDataProvider } from '../../providers/mission-data/mission-data';
import { ListePiecesPage } from '../liste-pieces/liste-pieces';
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
        this.camera = new Camera();
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
        this.navCtrl.push(ContratsPage, { nummission: this.inventaire.nummission, numberPiece: this.numberPiece,
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
            this.navCtrl.push(EquipementsExterieursPage, { nummission: this.inventaire.nummission, numberPiece: this.numberPiece,
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
        this.navCtrl.push(ListePiecesPage, { nummission: this.inventaire.nummission }).then(function () {
            _this.navCtrl.removeView(_this.navCtrl.getPrevious());
        });
    };
    InventairesClesPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-inventaires-cles',
            templateUrl: 'inventaires-cles.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CameraImageProvider,
            MissionDataProvider,
            AlertController])
    ], InventairesClesPage);
    return InventairesClesPage;
}());
export { InventairesClesPage };
//# sourceMappingURL=inventaires-cles.js.map