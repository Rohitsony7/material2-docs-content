import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/datepicker";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/form-field";
/** @title Disabled datepicker */
export class DatepickerDisabledExample {
}
DatepickerDisabledExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: DatepickerDisabledExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerDisabledExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-rc.0", type: DatepickerDisabledExample, selector: "datepicker-disabled-example", ngImport: i0, template: "<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Completely disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp1\" disabled>\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp1\"></mat-datepicker-toggle>\n    <mat-datepicker #dp1></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Popup disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp2\">\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\n    <mat-datepicker #dp2></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Input disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp3\" disabled>\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n  </mat-form-field>\n</p>\n", dependencies: [{ kind: "component", type: i1.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i1.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i1.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: DatepickerDisabledExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-disabled-example', template: "<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Completely disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp1\" disabled>\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp1\"></mat-datepicker-toggle>\n    <mat-datepicker #dp1></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Popup disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp2\">\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\n    <mat-datepicker #dp2></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Input disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp3\" disabled>\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n  </mat-form-field>\n</p>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kaXNhYmxlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWRpc2FibGVkL2RhdGVwaWNrZXItZGlzYWJsZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kaXNhYmxlZC9kYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4QyxpQ0FBaUM7QUFLakMsTUFBTSxPQUFPLHlCQUF5Qjs7MkhBQXpCLHlCQUF5QjsrR0FBekIseUJBQXlCLG1FQ1B0QyxrZ0NBNkJBO2dHRHRCYSx5QkFBeUI7a0JBSnJDLFNBQVM7K0JBQ0UsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIERpc2FibGVkIGRhdGVwaWNrZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItZGlzYWJsZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1kaXNhYmxlZC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyRGlzYWJsZWRFeGFtcGxlIHt9XG4iLCI8cD5cbiAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgPG1hdC1sYWJlbD5Db21wbGV0ZWx5IGRpc2FibGVkPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cImRwMVwiIGRpc2FibGVkPlxuICAgIDxtYXQtaGludD5NTS9ERC9ZWVlZPC9tYXQtaGludD5cbiAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdEljb25TdWZmaXggW2Zvcl09XCJkcDFcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICA8bWF0LWRhdGVwaWNrZXIgI2RwMT48L21hdC1kYXRlcGlja2VyPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9wPlxuXG48cD5cbiAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgPG1hdC1sYWJlbD5Qb3B1cCBkaXNhYmxlZDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJkcDJcIj5cbiAgICA8bWF0LWhpbnQ+TU0vREQvWVlZWTwvbWF0LWhpbnQ+XG4gICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRJY29uU3VmZml4IFtmb3JdPVwiZHAyXCIgZGlzYWJsZWQ+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgPG1hdC1kYXRlcGlja2VyICNkcDI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvcD5cblxuPHA+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+SW5wdXQgZGlzYWJsZWQ8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiZHAzXCIgZGlzYWJsZWQ+XG4gICAgPG1hdC1oaW50Pk1NL0REL1lZWVk8L21hdC1oaW50PlxuICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0SWNvblN1ZmZpeCBbZm9yXT1cImRwM1wiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgIDxtYXQtZGF0ZXBpY2tlciAjZHAzIGRpc2FibGVkPVwiZmFsc2VcIj48L21hdC1kYXRlcGlja2VyPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9wPlxuIl19