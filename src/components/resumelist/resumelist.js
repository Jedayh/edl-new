var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, Renderer, Input } from "@angular/core";
import { PanoData } from "../../models/pano-data.model";
import { NavController } from "ionic-angular";
import { PanoDataProvider } from "../../providers/pano-data/pano-data";
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
        ViewChild("lc"),
        __metadata("design:type", Object)
    ], ResumelistComponent.prototype, "listContent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ResumelistComponent.prototype, "card_title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", PanoData)
    ], ResumelistComponent.prototype, "dataPano", void 0);
    ResumelistComponent = __decorate([
        Component({
            selector: "resumelist",
            templateUrl: "resumelist.html"
        }),
        __metadata("design:paramtypes", [Renderer, NavController, PanoDataProvider])
    ], ResumelistComponent);
    return ResumelistComponent;
}());
export { ResumelistComponent };
//# sourceMappingURL=resumelist.js.map