import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { ContratsPage } from '../contrats/contrats';
import { DetailMissionPage } from "../detail-mission/detail-mission";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CameraImageProvider } from '../../providers/camera-image/camera-image';

// Provider global
import { MissionDataProvider } from '../../providers/mission-data/mission-data';
import { ListePiecesPage } from '../liste-pieces/liste-pieces';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the ReleveCompteursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class Compter {
  nummission: 0;
  eauFroide: false;
  eauFroidePhoto: '../assets/imgs/add_photo.svg';
  eauFroideNumero: '';
  eauFroideCompteur: '';
  eauFroideType: '';
  eauFroideReleve: '';
  eauFroideLocalisation: '';
  eauFroideObservation: '';
  eauChaude: false;
  eauChaudePhoto: '../assets/imgs/add_photo.svg';
  eauChaudeNumero: '';
  eauChaudeCompteur: '';
  eauChaudeType: '';
  eauChaudeReleve: '';
  eauChaudeLocalisation: '';
  eauChaudeObservation: '';
}

@IonicPage()
@Component({
  selector: 'page-releve-compteurs',
  templateUrl: 'releve-compteurs.html',
})
export class ReleveCompteursPage {
  public camera: Camera;
  public numberPiece : number;
  cameraOptions: CameraOptions;
  compteMax = 10;
  index = '';

  eau_froide_image: string;
  chauffage_image: string;
  electricite_image: string;
  gaz_image: string;

  compteur: any = {
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
  }

  compters: Compter[];
  isAdd = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cameraImageProvider: CameraImageProvider,
    public missionDataProvider: MissionDataProvider,
    private toastCtrl: ToastController,
    private storage: Storage
  ) {
    this.camera = new Camera();
    this.cameraOptions = this.cameraImageProvider.options;
    this.numberPiece = this.navParams.get('numberPiece');
    this.compteur.nummission = this.navParams.get('nummission');
    this.compters = new Array<Compter>()
    this.compters.push(this.compteur);
    this.missionDataProvider.load(this.compteur.nummission, 'releveCompteurs').then((data:any) => {
      if (data.status != 'empty') {
       let nummission = this.compteur.nummission;
       this.compteur = data.data;
       this.compteur.nummission = nummission;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReleveCompteursPage');
    if (this.navParams.get('compters')){
        this.compters = this.navParams.get('compters');
    } else {
      this.storage.get('compter').then((data) => {
        if (data != null) {
          this.compters = data;
          if (Object.keys(data).length >= 2) {
            this.isAdd = true
          }   
        }
      })
    }
    if (Object.keys(this.compters).length >= 2) {
      this.isAdd = true
    }
  }

  add() {
    let newCompter = new Compter();
    newCompter.nummission = this.compteur.nummission
    if (Object.keys(this.compters).length <= this.compteMax){
      let objCompteur: any = {
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
  }

  remove() {
    this.storage.set('compter', this.compters);
    if (Object.keys(this.compters).length >= 2) {
      this.compters.pop()
    }
    if (Object.keys(this.compters).length == 1)
      this.isAdd = false
  }

  prev() {
    this.missionDataProvider.save(this.compteur.nummission, 'releveCompteurs', this.compteur, 'pending');
    this.navCtrl.push(DetailMissionPage, { nummission: this.compteur.nummission, numberPiece : this.numberPiece,
    compters: this.compters }).then(() => {
      this.navCtrl.removeView(this.navCtrl.getPrevious());
    });
 
  }

  next() {
    let i = 0;
    this.compters.forEach((compter, key) => {
      console.log(i);
        if (i == 0) {
          this.compteur.chauffage                 = this.compteur.chauffage;
          this.compteur.chauffagePhoto            = this.compteur.chauffagePhoto;
          this.compteur.chauffageType             = this.compteur.chauffageType;
          this.compteur.chauffageCha              = this.compteur.chauffageCha;
          this.compteur.chauffageObservation      = this.compteur.chauffageObservation;
          this.compteur.electricite               = this.compteur.electricite;
          this.compteur.electricitePhoto          = this.compteur.electricitePhoto;
          this.compteur.electricitePhoto2         = this.compteur.electricitePhoto2;
          this.compteur.electriciteHeuresPleines  = this.compteur.electriciteHeuresPleines;
          this.compteur.electriciteNumero         = this.compteur.electriciteNumero;
          this.compteur.electriciteHeuresCreuse   = this.compteur.electriciteHeuresCreuse;
          this.compteur.electiriciteLocalisation  = this.compteur.electiriciteLocalisation;
          this.compteur.electiriciteObservation   = this.compteur.electiriciteObservation;
          this.compteur.gaz                       = this.compteur.gaz;
          this.compteur.gazPhoto                  = this.compteur.gazPhoto;
          this.compteur.gazCompteur               = this.compteur.gazCompteur;
          this.compteur.gazNumero                 = this.compteur.gazNumero;
          this.compteur.gazLocalisation           = this.compteur.gazLocalisation;
          this.compteur.gazType                   = this.compteur.gazType;
          this.compteur.gazReleve                 = this.compteur.gazReleve;
          this.compteur.gazObservation            = this.compteur.gazObservation;
        }
        let arrayEauFroide = {
          eauFroide: compter.eauFroide,
          eauFroidePhoto: compter.eauFroidePhoto,
          eauFroideNumero: compter.eauFroideNumero,
          eauFroideCompteur: compter.eauFroideCompteur,
          eauFroideType: compter.eauFroideType,
          eauFroideReleve: compter.eauFroideReleve,
          eauFroideLocalisation: compter.eauFroideLocalisation,
          eauFroideObservation: compter.eauFroideObservation
        }

        let arrayEauChaude = {
          eauChaude: compter.eauChaude,
          eauChaudePhoto: compter.eauChaudePhoto,
          eauChaudeNumero: compter.eauChaudeNumero,
          eauChaudeCompteur: compter.eauChaudeCompteur,
          eauChaudeType: compter.eauChaudeType,
          eauChaudeReleve: compter.eauChaudeReleve,
          eauChaudeLocalisation: compter.eauChaudeLocalisation,
          eauChaudeObservation: compter.eauChaudeObservation
        }
        this.compteur.listEauFroide.push(arrayEauFroide);
        this.compteur.listEauChaude.push(arrayEauChaude);
        i++;
    });
    this.missionDataProvider.save(this.compteur.nummission, 'releveCompteurs', this.compteur, 'pending');

    this.navCtrl.push(ContratsPage, { nummission: this.compteur.nummission, numberPiece : this.numberPiece,
    compters: this.compters}).then(() => {
      this.navCtrl.removeView(this.navCtrl.getPrevious());
    });
    this.storage.set('compter', this.compters);
  }

  openCamera(target: number, index: string) {
    switch (target) {
      case 1:
        this.camera.getPicture(this.cameraOptions)
          .then(imageData => {
            this.compters[index].eauFroidePhoto = 'data:image/jpeg;base64,' + imageData;
          })
          .catch((error) => {
            console.error(error);
          });
        break;
      case 2:
        this.camera.getPicture(this.cameraOptions)
          .then(imageData => {
            this.compteur.chauffagePhoto = 'data:image/jpeg;base64,' + imageData;
          })
          .catch((error) => {
            console.error(error);
          });
        break;
      case 3:
        this.camera.getPicture(this.cameraOptions)
          .then(imageData => {
            this.compteur.electricitePhoto = 'data:image/jpeg;base64,' + imageData;
          })
          .catch((error) => {
            console.error(error);
          });
        break;
      case 4:
        this.camera.getPicture(this.cameraOptions)
          .then(imageData => {
            this.compteur.gazPhoto = 'data:image/jpeg;base64,' + imageData;
          })
          .catch((error) => {
            console.error(error);
          });
        break;
      case 5:
        this.camera.getPicture(this.cameraOptions)
          .then(imageData => {
            this.compters[index].eauChaudePhoto = 'data:image/jpeg;base64,' + imageData;
          })
          .catch((error) => {
            console.error(error);
          });
        break;
      case 6:
        this.camera.getPicture(this.cameraOptions)
          .then(imageData => {
            this.compteur.electricitePhoto2 = 'data:image/jpeg;base64,' + imageData;
          })
          .catch((error) => {
            console.error(error);
          });
        break;
      default:
        break;
    }
  }
  goToListPieces() {
    this.navCtrl.push(ListePiecesPage, {nummission: this.compteur.nummission}).then(() => {
      this.navCtrl.removeView(this.navCtrl.getPrevious());
    });
  }

  presentToast(message: string, duration: number, position: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
