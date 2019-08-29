import { Component } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
/** Custom options the configure the tooltip's default show/hide delays. */
export var myCustomTooltipDefaults = {
    showDelay: 1000,
    hideDelay: 1000,
    touchendHideDelay: 1000,
};
/**
 * @title Tooltip with a show and hide delay
 */
var TooltipModifiedDefaultsExample = /** @class */ (function () {
    function TooltipModifiedDefaultsExample() {
    }
    TooltipModifiedDefaultsExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-modified-defaults-example',
                    template: "<button mat-raised-button\n        matTooltip=\"By default, I delay\"\n        aria-label=\"Button that displays a tooltip that has custom delays through a default config\">\n  Button with delay-default tooltip\n</button>\n",
                    providers: [
                        { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
                    ],
                    styles: ["/** No CSS for this example */\n"]
                }] }
    ];
    return TooltipModifiedDefaultsExample;
}());
export { TooltipModifiedDefaultsExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy90b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsMkJBQTJCLEVBQTJCLE1BQU0sMkJBQTJCLENBQUM7QUFFaEcsMkVBQTJFO0FBQzNFLE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUE2QjtJQUMvRCxTQUFTLEVBQUUsSUFBSTtJQUNmLFNBQVMsRUFBRSxJQUFJO0lBQ2YsaUJBQWlCLEVBQUUsSUFBSTtDQUN4QixDQUFDO0FBRUY7O0dBRUc7QUFDSDtJQUFBO0lBUTZDLENBQUM7O2dCQVI3QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0MsMk9BQXFEO29CQUVyRCxTQUFTLEVBQUU7d0JBQ1QsRUFBQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFDO3FCQUMxRTs7aUJBQ0Y7O0lBQzRDLHFDQUFDO0NBQUEsQUFSOUMsSUFROEM7U0FBakMsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNQVRfVE9PTFRJUF9ERUZBVUxUX09QVElPTlMsIE1hdFRvb2x0aXBEZWZhdWx0T3B0aW9uc30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5cbi8qKiBDdXN0b20gb3B0aW9ucyB0aGUgY29uZmlndXJlIHRoZSB0b29sdGlwJ3MgZGVmYXVsdCBzaG93L2hpZGUgZGVsYXlzLiAqL1xuZXhwb3J0IGNvbnN0IG15Q3VzdG9tVG9vbHRpcERlZmF1bHRzOiBNYXRUb29sdGlwRGVmYXVsdE9wdGlvbnMgPSB7XG4gIHNob3dEZWxheTogMTAwMCxcbiAgaGlkZURlbGF5OiAxMDAwLFxuICB0b3VjaGVuZEhpZGVEZWxheTogMTAwMCxcbn07XG5cbi8qKlxuICogQHRpdGxlIFRvb2x0aXAgd2l0aCBhIHNob3cgYW5kIGhpZGUgZGVsYXlcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzLWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBNQVRfVE9PTFRJUF9ERUZBVUxUX09QVElPTlMsIHVzZVZhbHVlOiBteUN1c3RvbVRvb2x0aXBEZWZhdWx0c31cbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcE1vZGlmaWVkRGVmYXVsdHNFeGFtcGxlIHt9XG4iXX0=