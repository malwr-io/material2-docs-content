/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tooltip/tooltip-manual/tooltip-manual-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
/**
 * \@title Tooltip that can be manually shown/hidden.
 */
export class TooltipManualExample {
}
TooltipManualExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-manual-example',
                templateUrl: 'tooltip-manual-example.html',
                styleUrls: ['tooltip-manual-example.css'],
            },] },
];
/** @nocollapse */ TooltipManualExample.ɵfac = function TooltipManualExample_Factory(t) { return new (t || TooltipManualExample)(); };
/** @nocollapse */ TooltipManualExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipManualExample, selectors: [["tooltip-manual-example"]], decls: 12, vars: 0, consts: [["mat-button", "", "aria-label", "Show tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-button", "", "aria-label", "Hide tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-button", "", "aria-label", "Show/Hide tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-raised-button", "", "matTooltip", "Info about the action", "matTooltipPosition", "right", "aria-tooltip", "Button that displays and hides a tooltip triggered by other buttons"], ["tooltip", "matTooltip"]], template: function TooltipManualExample_Template(rf, ctx) { if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "span");
        i0.ɵɵtext(2, " Click the following buttons to... ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 0);
        i0.ɵɵlistener("click", function TooltipManualExample_Template_button_click_3_listener($event) { i0.ɵɵrestoreView(_r4); const _r3 = i0.ɵɵreference(10); return _r3.show(); });
        i0.ɵɵtext(4, " show ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 1);
        i0.ɵɵlistener("click", function TooltipManualExample_Template_button_click_5_listener($event) { i0.ɵɵrestoreView(_r4); const _r3 = i0.ɵɵreference(10); return _r3.hide(); });
        i0.ɵɵtext(6, " hide ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 2);
        i0.ɵɵlistener("click", function TooltipManualExample_Template_button_click_7_listener($event) { i0.ɵɵrestoreView(_r4); const _r3 = i0.ɵɵreference(10); return _r3.toggle(); });
        i0.ɵɵtext(8, " toggle show/hide ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 3, 4);
        i0.ɵɵtext(11, " Action\n");
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatButton, i2.MatTooltip], styles: [".example-action-button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TooltipManualExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-manual-example',
                templateUrl: 'tooltip-manual-example.html',
                styleUrls: ['tooltip-manual-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tYW51YWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tYW51YWwvdG9vbHRpcC1tYW51YWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tYW51YWwvdG9vbHRpcC1tYW51YWwtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQVV4QyxNQUFNLE9BQU8sb0JBQW9COzs7WUFMaEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzFDOzt3RkFDWSxvQkFBb0I7eURBQXBCLG9CQUFvQjs7UUNWakMsMkJBQ0U7UUFBQSw0QkFBTztRQUFBLG1EQUFrQztRQUFBLGlCQUFPO1FBQ2hELGlDQUlFO1FBSE0sOEpBQVMsVUFBYyxJQUFDO1FBRzlCLHNCQUNGO1FBQUEsaUJBQVM7UUFDVCxpQ0FJRTtRQUhNLDhKQUFTLFVBQWMsSUFBQztRQUc5QixzQkFDRjtRQUFBLGlCQUFTO1FBQ1QsaUNBSUU7UUFITSw4SkFBUyxZQUFnQixJQUFDO1FBR2hDLGtDQUNGO1FBQUEsaUJBQVM7UUFDWCxpQkFBTTtRQUVOLG9DQUlFO1FBQUEsMEJBQ0Y7UUFBQSxpQkFBUzs7a0REakJJLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRvb2x0aXAgdGhhdCBjYW4gYmUgbWFudWFsbHkgc2hvd24vaGlkZGVuLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sdGlwLW1hbnVhbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLW1hbnVhbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1tYW51YWwtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcE1hbnVhbEV4YW1wbGUge31cbiIsIjxkaXY+XG4gIDxzcGFuPiBDbGljayB0aGUgZm9sbG93aW5nIGJ1dHRvbnMgdG8uLi4gPC9zcGFuPlxuICA8YnV0dG9uIG1hdC1idXR0b25cbiAgICAgICAgICAoY2xpY2spPVwidG9vbHRpcC5zaG93KClcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTaG93IHRvb2x0aXAgb24gdGhlIGJ1dHRvbiBhdCB0aGUgZW5kIG9mIHRoaXMgc2VjdGlvblwiXG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWFjdGlvbi1idXR0b25cIj5cbiAgICBzaG93XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b25cbiAgICAgICAgICAoY2xpY2spPVwidG9vbHRpcC5oaWRlKClcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJIaWRlIHRvb2x0aXAgb24gdGhlIGJ1dHRvbiBhdCB0aGUgZW5kIG9mIHRoaXMgc2VjdGlvblwiXG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWFjdGlvbi1idXR0b25cIj5cbiAgICBoaWRlXG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b25cbiAgICAgICAgICAoY2xpY2spPVwidG9vbHRpcC50b2dnbGUoKVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlNob3cvSGlkZSB0b29sdGlwIG9uIHRoZSBidXR0b24gYXQgdGhlIGVuZCBvZiB0aGlzIHNlY3Rpb25cIlxuICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1hY3Rpb24tYnV0dG9uXCI+XG4gICAgdG9nZ2xlIHNob3cvaGlkZVxuICA8L2J1dHRvbj5cbjwvZGl2PlxuXG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uICN0b29sdGlwPVwibWF0VG9vbHRpcFwiXG4gICAgICAgIG1hdFRvb2x0aXA9XCJJbmZvIGFib3V0IHRoZSBhY3Rpb25cIlxuICAgICAgICBtYXRUb29sdGlwUG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgIGFyaWEtdG9vbHRpcD1cIkJ1dHRvbiB0aGF0IGRpc3BsYXlzIGFuZCBoaWRlcyBhIHRvb2x0aXAgdHJpZ2dlcmVkIGJ5IG90aGVyIGJ1dHRvbnNcIj5cbiAgQWN0aW9uXG48L2J1dHRvbj4iXX0=