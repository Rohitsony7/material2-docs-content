import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
/**
 * @title Select with custom panel styling
 */
class SelectPanelClassExample {
    constructor() {
        this.panelColor = new FormControl('red');
    }
}
SelectPanelClassExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: SelectPanelClassExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectPanelClassExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.5", type: SelectPanelClassExample, selector: "select-panel-class-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Panel color</mat-label>\n  <mat-select [formControl]=\"panelColor\"\n              panelClass=\"example-panel-{{panelColor.value}}\">\n    <mat-option value=\"red\">Red</mat-option>\n    <mat-option value=\"green\">Green</mat-option>\n    <mat-option value=\"blue\">Blue</mat-option>\n  </mat-select>\n</mat-form-field>\n", styles: [".example-panel-red.mat-mdc-select-panel {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-panel-green.mat-mdc-select-panel {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-panel-blue.mat-mdc-select-panel {\n  background: rgba(0, 0, 255, 0.5);\n}\n"], dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "component", type: i3.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i4.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], encapsulation: i0.ViewEncapsulation.None });
export { SelectPanelClassExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: SelectPanelClassExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-panel-class-example', encapsulation: ViewEncapsulation.None, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Panel color</mat-label>\n  <mat-select [formControl]=\"panelColor\"\n              panelClass=\"example-panel-{{panelColor.value}}\">\n    <mat-option value=\"red\">Red</mat-option>\n    <mat-option value=\"green\">Green</mat-option>\n    <mat-option value=\"blue\">Blue</mat-option>\n  </mat-select>\n</mat-form-field>\n", styles: [".example-panel-red.mat-mdc-select-panel {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-panel-green.mat-mdc-select-panel {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-panel-blue.mat-mdc-select-panel {\n  background: rgba(0, 0, 255, 0.5);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXBhbmVsLWNsYXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LXBhbmVsLWNsYXNzL3NlbGVjdC1wYW5lbC1jbGFzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1wYW5lbC1jbGFzcy9zZWxlY3QtcGFuZWwtY2xhc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFFM0M7O0dBRUc7QUFDSCxNQVFhLHVCQUF1QjtJQVJwQztRQVNFLGVBQVUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyQzs7MkhBRlksdUJBQXVCOytHQUF2Qix1QkFBdUIsa0VDZHBDLHNYQVNBO1NES2EsdUJBQXVCO2tHQUF2Qix1QkFBdUI7a0JBUm5DLFNBQVM7K0JBQ0UsNEJBQTRCLGlCQUt2QixpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgU2VsZWN0IHdpdGggY3VzdG9tIHBhbmVsIHN0eWxpbmdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LXBhbmVsLWNsYXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1wYW5lbC1jbGFzcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LXBhbmVsLWNsYXNzLWV4YW1wbGUuY3NzJ10sXG4gIC8vIEVuY2Fwc3VsYXRpb24gaGFzIHRvIGJlIGRpc2FibGVkIGluIG9yZGVyIGZvciB0aGVcbiAgLy8gY29tcG9uZW50IHN0eWxlIHRvIGFwcGx5IHRvIHRoZSBzZWxlY3QgcGFuZWwuXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFBhbmVsQ2xhc3NFeGFtcGxlIHtcbiAgcGFuZWxDb2xvciA9IG5ldyBGb3JtQ29udHJvbCgncmVkJyk7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5QYW5lbCBjb2xvcjwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwicGFuZWxDb2xvclwiXG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M9XCJleGFtcGxlLXBhbmVsLXt7cGFuZWxDb2xvci52YWx1ZX19XCI+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJyZWRcIj5SZWQ8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJncmVlblwiPkdyZWVuPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiYmx1ZVwiPkJsdWU8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=