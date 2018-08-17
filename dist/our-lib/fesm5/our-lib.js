import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var OurLibService = /** @class */ (function () {
    function OurLibService() {
    }
    OurLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    OurLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ OurLibService.ngInjectableDef = defineInjectable({ factory: function OurLibService_Factory() { return new OurLibService(); }, token: OurLibService, providedIn: "root" });
    return OurLibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var OurLibComponent = /** @class */ (function () {
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
        { type: Component, args: [{
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
var OurLibModule = /** @class */ (function () {
    function OurLibModule() {
    }
    OurLibModule.decorators = [
        { type: NgModule, args: [{
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

export { OurLibService, OurLibComponent, OurLibModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3VyLWxpYi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vb3VyLWxpYi9saWIvb3VyLWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9vdXItbGliL2xpYi9vdXItbGliLmNvbXBvbmVudC50cyIsIm5nOi8vb3VyLWxpYi9saWIvb3VyLWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBPdXJMaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW91ci1saWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgTXkgbGlicmFyeSB3YXMgY2hhbmdlZFxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBPdXJMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE91ckxpYkNvbXBvbmVudCB9IGZyb20gJy4vb3VyLWxpYi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW091ckxpYkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtPdXJMaWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE91ckxpYk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7d0JBSkQ7Ozs7Ozs7QUNBQTtJQWFFO0tBQWlCOzs7O0lBRWpCLGtDQUFROzs7SUFBUjtLQUNDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSx1REFJVDtvQkFDRCxNQUFNLEVBQUUsRUFBRTtpQkFDWDs7OzswQkFWRDs7Ozs7OztBQ0FBOzs7O2dCQUdDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsRUFDUjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQy9CLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDM0I7O3VCQVJEOzs7Ozs7Ozs7Ozs7Ozs7In0=