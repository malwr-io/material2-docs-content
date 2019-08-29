import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * @title Select with custom panel styling
 */
var SelectPanelClassExample = /** @class */ (function () {
    function SelectPanelClassExample() {
        this.panelColor = new FormControl('red');
    }
    SelectPanelClassExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-panel-class-example',
                    template: "<mat-form-field>\n  <mat-label>Panel color</mat-label>\n  <mat-select [formControl]=\"panelColor\"\n              panelClass=\"example-panel-{{panelColor.value}}\">\n    <mat-option value=\"red\">Red</mat-option>\n    <mat-option value=\"green\">Green</mat-option>\n    <mat-option value=\"blue\">Blue</mat-option>\n  </mat-select>\n</mat-form-field>\n",
                    // Encapsulation has to be disabled in order for the
                    // component style to apply to the select panel.
                    encapsulation: ViewEncapsulation.None,
                    styles: [".example-panel-red.mat-select-panel {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-panel-green.mat-select-panel {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-panel-blue.mat-select-panel {\n  background: rgba(0, 0, 255, 0.5);\n}\n"]
                }] }
    ];
    return SelectPanelClassExample;
}());
export { SelectPanelClassExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXBhbmVsLWNsYXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1wYW5lbC1jbGFzcy9zZWxlY3QtcGFuZWwtY2xhc3MtZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQzs7R0FFRztBQUNIO0lBQUE7UUFTRSxlQUFVLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBVkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLDRXQUE4QztvQkFFOUMsb0RBQW9EO29CQUNwRCxnREFBZ0Q7b0JBQ2hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7O0lBR0QsOEJBQUM7Q0FBQSxBQVZELElBVUM7U0FGWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBTZWxlY3Qgd2l0aCBjdXN0b20gcGFuZWwgc3R5bGluZ1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtcGFuZWwtY2xhc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LXBhbmVsLWNsYXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3QtcGFuZWwtY2xhc3MtZXhhbXBsZS5jc3MnXSxcbiAgLy8gRW5jYXBzdWxhdGlvbiBoYXMgdG8gYmUgZGlzYWJsZWQgaW4gb3JkZXIgZm9yIHRoZVxuICAvLyBjb21wb25lbnQgc3R5bGUgdG8gYXBwbHkgdG8gdGhlIHNlbGVjdCBwYW5lbC5cbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0UGFuZWxDbGFzc0V4YW1wbGUge1xuICBwYW5lbENvbG9yID0gbmV3IEZvcm1Db250cm9sKCdyZWQnKTtcbn1cbiJdfQ==