var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
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
        Injectable(),
        __metadata("design:paramtypes", [])
    ], EdlProvider);
    return EdlProvider;
}());
export { EdlProvider };
//# sourceMappingURL=edl.js.map