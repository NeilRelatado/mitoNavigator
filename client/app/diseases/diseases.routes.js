System.register(['./diseases.component', './list/list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var diseases_component_1, list_component_1;
    var DiseasesRoutes;
    return {
        setters:[
            function (diseases_component_1_1) {
                diseases_component_1 = diseases_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            }],
        execute: function() {
            exports_1("DiseasesRoutes", DiseasesRoutes = [{
                    path: 'diseases',
                    component: diseases_component_1.DiseasesComponent,
                    children: [
                        { path: '/diseases', component: list_component_1.ListComponent }
                    ]
                }]);
        }
    }
});
//# sourceMappingURL=diseases.routes.js.map