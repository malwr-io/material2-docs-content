/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/core/elevation-overview/elevation-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
/**
 * \@title Elevation CSS classes
 */
export class ElevationOverviewExample {
    constructor() {
        this.isActive = false;
    }
}
ElevationOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'elevation-overview-example',
                styleUrls: ['elevation-overview-example.css'],
                templateUrl: 'elevation-overview-example.html',
            },] },
];
/** @nocollapse */ ElevationOverviewExample.ɵfac = function ElevationOverviewExample_Factory(t) { return new (t || ElevationOverviewExample)(); };
/** @nocollapse */ ElevationOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ElevationOverviewExample, selectors: [["elevation-overview-example"]], decls: 4, vars: 2, consts: [[1, "example-container"], ["mat-button", "", 3, "click"]], template: function ElevationOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1, " Example\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "button", 1);
        i0.ɵɵlistener("click", function ElevationOverviewExample_Template_button_click_2_listener($event) { return ctx.isActive = !ctx.isActive; });
        i0.ɵɵtext(3, "Toggle Elevation");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("mat-elevation-z2", !ctx.isActive);
        i0.ɵɵclassProp("mat-elevation-z8", ctx.isActive);
    } }, directives: [i1.MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin-bottom: 16px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ElevationOverviewExample, [{
        type: Component,
        args: [{
                selector: 'elevation-overview-example',
                styleUrls: ['elevation-overview-example.css'],
                templateUrl: 'elevation-overview-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    ElevationOverviewExample.prototype.isActive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jb3JlL2VsZXZhdGlvbi1vdmVydmlldy9lbGV2YXRpb24tb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NvcmUvZWxldmF0aW9uLW92ZXJ2aWV3L2VsZXZhdGlvbi1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFVeEMsTUFBTSxPQUFPLHdCQUF3QjtJQUxyQztRQU1FLGFBQVEsR0FBRyxLQUFLLENBQUM7S0FDbEI7OztZQVBBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDN0MsV0FBVyxFQUFFLGlDQUFpQzthQUMvQzs7Z0dBQ1ksd0JBQXdCOzZEQUF4Qix3QkFBd0I7UUNWckMsOEJBR0U7UUFBQSwwQkFDRjtRQUFBLGlCQUFNO1FBRU4saUNBQWtEO1FBQS9CLDJJQUE4QjtRQUFDLGdDQUFnQjtRQUFBLGlCQUFTOztRQUx2RSxpREFBb0M7UUFDcEMsZ0RBQW1DOztrRERRMUIsd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDN0MsV0FBVyxFQUFFLGlDQUFpQzthQUMvQzs7OztJQUVDLDRDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgRWxldmF0aW9uIENTUyBjbGFzc2VzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VsZXZhdGlvbi1vdmVydmlldy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2VsZXZhdGlvbi1vdmVydmlldy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2VsZXZhdGlvbi1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBFbGV2YXRpb25PdmVydmlld0V4YW1wbGUge1xuICBpc0FjdGl2ZSA9IGZhbHNlO1xufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCJcbiAgICBbY2xhc3MubWF0LWVsZXZhdGlvbi16Ml09XCIhaXNBY3RpdmVcIlxuICAgIFtjbGFzcy5tYXQtZWxldmF0aW9uLXo4XT1cImlzQWN0aXZlXCI+XG4gIEV4YW1wbGVcbjwvZGl2PlxuXG48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImlzQWN0aXZlID0gIWlzQWN0aXZlXCI+VG9nZ2xlIEVsZXZhdGlvbjwvYnV0dG9uPlxuIl19