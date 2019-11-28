/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/select/select-optgroup/select-optgroup-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/input";
function SelectOptgroupExample_mat_optgroup_8_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pokemon_r20 = ctx.$implicit;
    i0.ɵɵproperty("value", pokemon_r20.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", pokemon_r20.viewValue, " ");
} }
function SelectOptgroupExample_mat_optgroup_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-optgroup", 9);
    i0.ɵɵtemplate(1, SelectOptgroupExample_mat_optgroup_8_mat_option_1_Template, 2, 2, "mat-option", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r18 = ctx.$implicit;
    i0.ɵɵproperty("label", group_r18.name)("disabled", group_r18.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", group_r18.pokemon);
} }
/**
 * @record
 */
export function Pokemon() { }
if (false) {
    /** @type {?} */
    Pokemon.prototype.value;
    /** @type {?} */
    Pokemon.prototype.viewValue;
}
/**
 * @record
 */
export function PokemonGroup() { }
if (false) {
    /** @type {?|undefined} */
    PokemonGroup.prototype.disabled;
    /** @type {?} */
    PokemonGroup.prototype.name;
    /** @type {?} */
    PokemonGroup.prototype.pokemon;
}
/**
 * \@title Select with option groups
 */
export class SelectOptgroupExample {
    constructor() {
        this.pokemonControl = new FormControl();
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
    }
}
SelectOptgroupExample.decorators = [
    { type: Component, args: [{
                selector: 'select-optgroup-example',
                templateUrl: 'select-optgroup-example.html',
                styleUrls: ['select-optgroup-example.css'],
            },] },
];
/** @nocollapse */ SelectOptgroupExample.ɵfac = function SelectOptgroupExample_Factory(t) { return new (t || SelectOptgroupExample)(); };
/** @nocollapse */ SelectOptgroupExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectOptgroupExample, selectors: [["select-optgroup-example"]], decls: 25, vars: 2, consts: [[3, "formControl"], [3, "label", "disabled", 4, "ngFor", "ngForOf"], ["matNativeControl", ""], ["label", "Swedish Cars"], ["value", "volvo"], ["value", "saab"], ["label", "German Cars"], ["value", "mercedes"], ["value", "audi"], [3, "label", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectOptgroupExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1, "mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field");
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "Pokemon");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-select", 0);
        i0.ɵɵelementStart(6, "mat-option");
        i0.ɵɵtext(7, "-- None --");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, SelectOptgroupExample_mat_optgroup_8_Template, 2, 3, "mat-optgroup", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "h4");
        i0.ɵɵtext(10, "native html select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-form-field");
        i0.ɵɵelementStart(12, "mat-label");
        i0.ɵɵtext(13, "Cars");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "select", 2);
        i0.ɵɵelementStart(15, "optgroup", 3);
        i0.ɵɵelementStart(16, "option", 4);
        i0.ɵɵtext(17, "volvo");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "option", 5);
        i0.ɵɵtext(19, "Saab");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "optgroup", 6);
        i0.ɵɵelementStart(21, "option", 7);
        i0.ɵɵtext(22, "Mercedes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "option", 8);
        i0.ɵɵtext(24, "Audi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formControl", ctx.pokemonControl);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.pokemonGroups);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.MatOption, i5.NgForOf, i6.MatInput, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i4.MatOptgroup], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectOptgroupExample, [{
        type: Component,
        args: [{
                selector: 'select-optgroup-example',
                templateUrl: 'select-optgroup-example.html',
                styleUrls: ['select-optgroup-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SelectOptgroupExample.prototype.pokemonControl;
    /** @type {?} */
    SelectOptgroupExample.prototype.pokemonGroups;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LW9wdGdyb3VwL3NlbGVjdC1vcHRncm91cC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1vcHRncm91cC9zZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ01yQyxzQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRnFDLHlDQUF1QjtJQUN2RSxlQUNGO0lBREUsc0RBQ0Y7OztJQUpGLHVDQUVFO0lBQUEsb0dBQ0U7SUFFSixpQkFBZTs7O0lBTG1DLHNDQUFvQixnQ0FBQTtJQUV4RCxlQUFxQztJQUFyQywyQ0FBcUM7Ozs7O0FESnZELDZCQUdDOzs7SUFGQyx3QkFBYzs7SUFDZCw0QkFBa0I7Ozs7O0FBR3BCLGtDQUlDOzs7SUFIQyxnQ0FBbUI7O0lBQ25CLDRCQUFhOztJQUNiLCtCQUFtQjs7Ozs7QUFTckIsTUFBTSxPQUFPLHFCQUFxQjtJQUxsQztRQU1FLG1CQUFjLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFtQjtZQUM5QjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUU7b0JBQ1AsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUM7b0JBQzlDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO29CQUN4QyxFQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBQztpQkFDakQ7YUFDRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sRUFBRTtvQkFDUCxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQztvQkFDNUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUM7b0JBQzFDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO2lCQUN6QzthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFDO29CQUNoRCxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQztvQkFDeEMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUM7aUJBQzNDO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixPQUFPLEVBQUU7b0JBQ1AsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUM7b0JBQ2xDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDO2lCQUMxQzthQUNGO1NBQ0YsQ0FBQztLQUNIOzs7WUF6Q0EsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOzswRkFDWSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ3BCbEMsMEJBQUk7UUFBQSwwQkFBVTtRQUFBLGlCQUFLO1FBQ25CLHNDQUNFO1FBQUEsaUNBQVc7UUFBQSx1QkFBTztRQUFBLGlCQUFZO1FBQzlCLHFDQUNFO1FBQUEsa0NBQVk7UUFBQSwwQkFBVTtRQUFBLGlCQUFhO1FBQ25DLHdGQUVFO1FBSUosaUJBQWE7UUFDZixpQkFBaUI7UUFFakIsMEJBQUk7UUFBQSxtQ0FBa0I7UUFBQSxpQkFBSztRQUMzQix1Q0FDRTtRQUFBLGtDQUFXO1FBQUEscUJBQUk7UUFBQSxpQkFBWTtRQUMzQixrQ0FDRTtRQUFBLG9DQUNFO1FBQUEsa0NBQXNCO1FBQUEsc0JBQUs7UUFBQSxpQkFBUztRQUNwQyxrQ0FBcUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ3BDLGlCQUFXO1FBQ1gsb0NBQ0U7UUFBQSxrQ0FBeUI7UUFBQSx5QkFBUTtRQUFBLGlCQUFTO1FBQzFDLGtDQUFxQjtRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDcEMsaUJBQVc7UUFDYixpQkFBUztRQUNYLGlCQUFpQjs7UUF4QkgsZUFBOEI7UUFBOUIsZ0RBQThCO1FBRTFCLGVBQW1DO1FBQW5DLDJDQUFtQzs7a0REZXhDLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7Ozs7SUFFQywrQ0FBbUM7O0lBQ25DLDhDQWlDRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBQb2tlbW9uIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9rZW1vbkdyb3VwIHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBva2Vtb246IFBva2Vtb25bXTtcbn1cblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCBvcHRpb24gZ3JvdXBzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0T3B0Z3JvdXBFeGFtcGxlIHtcbiAgcG9rZW1vbkNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcG9rZW1vbkdyb3VwczogUG9rZW1vbkdyb3VwW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0dyYXNzJyxcbiAgICAgIHBva2Vtb246IFtcbiAgICAgICAge3ZhbHVlOiAnYnVsYmFzYXVyLTAnLCB2aWV3VmFsdWU6ICdCdWxiYXNhdXInfSxcbiAgICAgICAge3ZhbHVlOiAnb2RkaXNoLTEnLCB2aWV3VmFsdWU6ICdPZGRpc2gnfSxcbiAgICAgICAge3ZhbHVlOiAnYmVsbHNwcm91dC0yJywgdmlld1ZhbHVlOiAnQmVsbHNwcm91dCd9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnV2F0ZXInLFxuICAgICAgcG9rZW1vbjogW1xuICAgICAgICB7dmFsdWU6ICdzcXVpcnRsZS0zJywgdmlld1ZhbHVlOiAnU3F1aXJ0bGUnfSxcbiAgICAgICAge3ZhbHVlOiAncHN5ZHVjay00Jywgdmlld1ZhbHVlOiAnUHN5ZHVjayd9LFxuICAgICAgICB7dmFsdWU6ICdob3JzZWEtNScsIHZpZXdWYWx1ZTogJ0hvcnNlYSd9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRmlyZScsXG4gICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgIHBva2Vtb246IFtcbiAgICAgICAge3ZhbHVlOiAnY2hhcm1hbmRlci02Jywgdmlld1ZhbHVlOiAnQ2hhcm1hbmRlcid9LFxuICAgICAgICB7dmFsdWU6ICd2dWxwaXgtNycsIHZpZXdWYWx1ZTogJ1Z1bHBpeCd9LFxuICAgICAgICB7dmFsdWU6ICdmbGFyZW9uLTgnLCB2aWV3VmFsdWU6ICdGbGFyZW9uJ31cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdQc3ljaGljJyxcbiAgICAgIHBva2Vtb246IFtcbiAgICAgICAge3ZhbHVlOiAnbWV3LTknLCB2aWV3VmFsdWU6ICdNZXcnfSxcbiAgICAgICAge3ZhbHVlOiAnbWV3dHdvLTEwJywgdmlld1ZhbHVlOiAnTWV3dHdvJ30sXG4gICAgICBdXG4gICAgfVxuICBdO1xufVxuIiwiPGg0Pm1hdC1zZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlBva2Vtb248L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cInBva2Vtb25Db250cm9sXCI+XG4gICAgPG1hdC1vcHRpb24+LS0gTm9uZSAtLTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGdyb3VwICpuZ0Zvcj1cImxldCBncm91cCBvZiBwb2tlbW9uR3JvdXBzXCIgW2xhYmVsXT1cImdyb3VwLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImdyb3VwLmRpc2FibGVkXCI+XG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgcG9rZW1vbiBvZiBncm91cC5wb2tlbW9uXCIgW3ZhbHVlXT1cInBva2Vtb24udmFsdWVcIj5cbiAgICAgICAge3twb2tlbW9uLnZpZXdWYWx1ZX19XG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgPC9tYXQtb3B0Z3JvdXA+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxoND5uYXRpdmUgaHRtbCBzZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkNhcnM8L21hdC1sYWJlbD5cbiAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sPlxuICAgIDxvcHRncm91cCBsYWJlbD1cIlN3ZWRpc2ggQ2Fyc1wiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cInZvbHZvXCI+dm9sdm88L29wdGlvbj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJzYWFiXCI+U2FhYjwvb3B0aW9uPlxuICAgIDwvb3B0Z3JvdXA+XG4gICAgPG9wdGdyb3VwIGxhYmVsPVwiR2VybWFuIENhcnNcIj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXJjZWRlc1wiPk1lcmNlZGVzPC9vcHRpb24+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiYXVkaVwiPkF1ZGk8L29wdGlvbj5cbiAgICA8L29wdGdyb3VwPlxuICA8L3NlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=