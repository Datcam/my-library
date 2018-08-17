(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('our-lib', ['exports', '@angular/core'], factory) :
    (factory((global['our-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var OurLibService = (function () {
        function OurLibService() {
        }
        OurLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        OurLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ OurLibService.ngInjectableDef = i0.defineInjectable({ factory: function OurLibService_Factory() { return new OurLibService(); }, token: OurLibService, providedIn: "root" });
        return OurLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var OurLibComponent = (function () {
        function OurLibComponent() {
        }
        /**
         * @return {?}
         */
        OurLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        OurLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-our-lib',
                        template: "\n    <p>\n      My library was changed\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        OurLibComponent.ctorParameters = function () { return []; };
        return OurLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var OurLibModule = (function () {
        function OurLibModule() {
        }
        OurLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [OurLibComponent],
                        exports: [OurLibComponent]
                    },] },
        ];
        return OurLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.OurLibService = OurLibService;
    exports.OurLibComponent = OurLibComponent;
    exports.OurLibModule = OurLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3VyLWxpYi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL291ci1saWIvbGliL291ci1saWIuc2VydmljZS50cyIsIm5nOi8vb3VyLWxpYi9saWIvb3VyLWxpYi5jb21wb25lbnQudHMiLCJuZzovL291ci1saWIvbGliL291ci1saWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgT3VyTGliU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1vdXItbGliJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIE15IGxpYnJhcnkgd2FzIGNoYW5nZWRcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgT3VyTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdXJMaWJDb21wb25lbnQgfSBmcm9tICcuL291ci1saWIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtPdXJMaWJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbT3VyTGliQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBPdXJMaWJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozs0QkFKRDs7Ozs7OztBQ0FBO1FBYUU7U0FBaUI7Ozs7UUFFakIsa0NBQVE7OztZQUFSO2FBQ0M7O29CQWRGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSx1REFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7Ozs4QkFWRDs7Ozs7OztBQ0FBOzs7O29CQUdDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO3dCQUMvQixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7cUJBQzNCOzsyQkFSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==