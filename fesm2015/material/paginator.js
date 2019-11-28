import { NgIf, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate1, Component, ɵɵdefineComponent, ɵɵlistener, ɵɵtemplate, ɵɵproperty, ɵsetClassMetadata, ɵɵelement, ɵɵpureFunction0, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField } from '@angular/material/form-field';

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/paginator/paginator-configurable/paginator-configurable-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function PaginatorConfigurableExample_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "h5");
    ɵɵtext(2, "Page Change Event Properties");
    ɵɵelementEnd();
    ɵɵelementStart(3, "div");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div");
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1("List length: ", ctx_r0.pageEvent.length, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("Page size: ", ctx_r0.pageEvent.pageSize, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("Page index: ", ctx_r0.pageEvent.pageIndex, "");
} }
/**
 * \@title Configurable paginator
 */
class PaginatorConfigurableExample {
    constructor() {
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    /**
     * @param {?} setPageSizeOptionsInput
     * @return {?}
     */
    setPageSizeOptions(setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map((/**
         * @param {?} str
         * @return {?}
         */
        str => +str));
    }
}
PaginatorConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'paginator-configurable-example',
                templateUrl: 'paginator-configurable-example.html',
                styleUrls: ['paginator-configurable-example.css'],
            },] },
];
/** @nocollapse */ PaginatorConfigurableExample.ɵfac = function PaginatorConfigurableExample_Factory(t) { return new (t || PaginatorConfigurableExample)(); };
/** @nocollapse */ PaginatorConfigurableExample.ɵcmp = ɵɵdefineComponent({ type: PaginatorConfigurableExample, selectors: [["paginator-configurable-example"]], decls: 11, vars: 7, consts: [["matInput", "", 3, "ngModel", "ngModelChange"], [3, "length", "pageSize", "pageSizeOptions", "page"], [4, "ngIf"]], template: function PaginatorConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field");
        ɵɵtext(1, " List length: ");
        ɵɵelementStart(2, "input", 0);
        ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_2_listener($event) { return ctx.length = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-form-field");
        ɵɵtext(4, " Page size: ");
        ɵɵelementStart(5, "input", 0);
        ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_5_listener($event) { return ctx.pageSize = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "mat-form-field");
        ɵɵtext(7, " Page size options: ");
        ɵɵelementStart(8, "input", 0);
        ɵɵlistener("ngModelChange", function PaginatorConfigurableExample_Template_input_ngModelChange_8_listener($event) { return ctx.setPageSizeOptions($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "mat-paginator", 1);
        ɵɵlistener("page", function PaginatorConfigurableExample_Template_mat_paginator_page_9_listener($event) { return ctx.pageEvent = $event; });
        ɵɵelementEnd();
        ɵɵtemplate(10, PaginatorConfigurableExample_div_10_Template, 9, 3, "div", 2);
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.length);
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.pageSize);
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.pageSizeOptions);
        ɵɵadvance(1);
        ɵɵproperty("length", ctx.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.pageEvent);
    } }, directives: [MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, NgModel, MatPaginator, NgIf], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PaginatorConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'paginator-configurable-example',
                templateUrl: 'paginator-configurable-example.html',
                styleUrls: ['paginator-configurable-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    PaginatorConfigurableExample.prototype.length;
    /** @type {?} */
    PaginatorConfigurableExample.prototype.pageSize;
    /** @type {?} */
    PaginatorConfigurableExample.prototype.pageSizeOptions;
    /** @type {?} */
    PaginatorConfigurableExample.prototype.pageEvent;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/paginator/paginator-overview/paginator-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const _c0 = function () { return [5, 10, 25, 100]; };
/**
 * \@title Paginator
 */
class PaginatorOverviewExample {
}
PaginatorOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'paginator-overview-example',
                templateUrl: 'paginator-overview-example.html',
                styleUrls: ['paginator-overview-example.css'],
            },] },
];
/** @nocollapse */ PaginatorOverviewExample.ɵfac = function PaginatorOverviewExample_Factory(t) { return new (t || PaginatorOverviewExample)(); };
/** @nocollapse */ PaginatorOverviewExample.ɵcmp = ɵɵdefineComponent({ type: PaginatorOverviewExample, selectors: [["paginator-overview-example"]], decls: 1, vars: 4, consts: [[3, "length", "pageSize", "pageSizeOptions"]], template: function PaginatorOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "mat-paginator", 0);
    } if (rf & 2) {
        ɵɵproperty("length", 100)("pageSize", 10)("pageSizeOptions", ɵɵpureFunction0(3, _c0));
    } }, directives: [MatPaginator], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PaginatorOverviewExample, [{
        type: Component,
        args: [{
                selector: 'paginator-overview-example',
                templateUrl: 'paginator-overview-example.html',
                styleUrls: ['paginator-overview-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/paginator/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    PaginatorConfigurableExample,
    PaginatorOverviewExample,
];
class PaginatorExamplesModule {
}
PaginatorExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatInputModule,
                    MatPaginatorModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ PaginatorExamplesModule.ɵmod = ɵɵdefineNgModule({ type: PaginatorExamplesModule });
/** @nocollapse */ PaginatorExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function PaginatorExamplesModule_Factory(t) { return new (t || PaginatorExamplesModule)(); }, imports: [[
            CommonModule,
            MatInputModule,
            MatPaginatorModule,
            FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PaginatorExamplesModule, { declarations: [PaginatorConfigurableExample,
        PaginatorOverviewExample], imports: [CommonModule,
        MatInputModule,
        MatPaginatorModule,
        FormsModule], exports: [PaginatorConfigurableExample,
        PaginatorOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PaginatorExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatInputModule,
                    MatPaginatorModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { PaginatorConfigurableExample, PaginatorExamplesModule, PaginatorOverviewExample };
//# sourceMappingURL=paginator.js.map
