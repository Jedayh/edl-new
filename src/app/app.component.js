var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { DbProvider } from "../providers/db/db";
import { Network } from '@ionic-native/network';
import axios from 'axios';
// Provider global
import { MissionDataProvider } from '../providers/mission-data/mission-data';
import { LoginPage } from "../pages/login/login";
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
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, dbProvider, network, toastCtrl, missionDataProvider) {
        var _this = this;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.missionDataProvider = missionDataProvider;
        this.rootPage = LoginPage;
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
            axios.get('http://application.abc-immoservices.fr/status', { timeout: 10000 })
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
        Component({
            templateUrl: "app.html"
        }),
        __metadata("design:paramtypes", [Platform,
            StatusBar,
            SplashScreen,
            DbProvider,
            Network,
            ToastController,
            MissionDataProvider])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map