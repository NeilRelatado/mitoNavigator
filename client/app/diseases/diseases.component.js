System.register(['@angular/core', './diseases.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, diseases_service_1;
    var DiseasesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (diseases_service_1_1) {
                diseases_service_1 = diseases_service_1_1;
            }],
        execute: function() {
            DiseasesComponent = (function () {
                function DiseasesComponent() {
                }
                DiseasesComponent = __decorate([
                    core_1.Component({
                        selector: 'diseases-app',
                        template: '<router-outlet></router-outlet>',
                        providers: [diseases_service_1.DiseasesService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DiseasesComponent);
                return DiseasesComponent;
            }());
            exports_1("DiseasesComponent", DiseasesComponent);
        }
    }
});
//# sourceMappingURL=diseases.component.js.map