import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { CdkPortalOverviewExample, ComponentPortalExample } from './cdk-portal-overview/cdk-portal-overview-example';
var EXAMPLES = [
    CdkPortalOverviewExample,
    ComponentPortalExample,
];
var CdkPortalExamplesModule = /** @class */ (function () {
    function CdkPortalExamplesModule() {
    }
    CdkPortalExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        PortalModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: [ComponentPortalExample]
                },] }
    ];
    return CdkPortalExamplesModule;
}());
export { CdkPortalExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9wb3J0YWwvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3ZCLE1BQU0sbURBQW1ELENBQUM7QUFFM0QsSUFBTSxRQUFRLEdBQUc7SUFDZix3QkFBd0I7SUFDeEIsc0JBQXNCO0NBQ3ZCLENBQUM7QUFFRjtJQUFBO0lBU0EsQ0FBQzs7Z0JBVEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUM7aUJBQzFDOztJQUVELDhCQUFDO0NBQUEsQUFURCxJQVNDO1NBRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQb3J0YWxNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDZGtQb3J0YWxPdmVydmlld0V4YW1wbGUsXG4gIENvbXBvbmVudFBvcnRhbEV4YW1wbGVcbn0gZnJvbSAnLi9jZGstcG9ydGFsLW92ZXJ2aWV3L2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtQb3J0YWxPdmVydmlld0V4YW1wbGUsXG4gIENvbXBvbmVudFBvcnRhbEV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUG9ydGFsTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBbQ29tcG9uZW50UG9ydGFsRXhhbXBsZV1cbn0pXG5leHBvcnQgY2xhc3MgQ2RrUG9ydGFsRXhhbXBsZXNNb2R1bGUge1xufVxuIl19