import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/input";
/**
 * @title Inputs in a form
 */
export class InputFormExample {
}
InputFormExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: InputFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputFormExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: InputFormExample, selector: "input-form-example", ngImport: i0, template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Company (disabled)</mat-label>\n    <input matInput disabled value=\"Google\">\n  </mat-form-field>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>First name</mat-label>\n      <input matInput>\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Long Last Name That Will Be Truncated</mat-label>\n      <input matInput>\n    </mat-form-field></td>\n  </tr></table>\n\n  <p>\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Address</mat-label>\n      <textarea matInput placeholder=\"Ex. 100 Main St\">1600 Amphitheatre Pkwy</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Address 2</mat-label>\n      <textarea matInput></textarea>\n    </mat-form-field>\n  </p>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>City</mat-label>\n      <input matInput placeholder=\"Ex. San Francisco\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>State</mat-label>\n      <input matInput placeholder=\"Ex. California\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Postal Code</mat-label>\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Ex. 94105\" value=\"94043\">\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n    </mat-form-field></td>\n  </tr></table>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }], directives: [{ type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.MatLabel, selector: "mat-label" }, { type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: InputFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-form-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Company (disabled)</mat-label>\n    <input matInput disabled value=\"Google\">\n  </mat-form-field>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>First name</mat-label>\n      <input matInput>\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Long Last Name That Will Be Truncated</mat-label>\n      <input matInput>\n    </mat-form-field></td>\n  </tr></table>\n\n  <p>\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Address</mat-label>\n      <textarea matInput placeholder=\"Ex. 100 Main St\">1600 Amphitheatre Pkwy</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Address 2</mat-label>\n      <textarea matInput></textarea>\n    </mat-form-field>\n  </p>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>City</mat-label>\n      <input matInput placeholder=\"Ex. San Francisco\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>State</mat-label>\n      <input matInput placeholder=\"Ex. California\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\" appearance=\"fill\">\n      <mat-label>Postal Code</mat-label>\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Ex. 94105\" value=\"94043\">\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n    </mat-form-field></td>\n  </tr></table>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtZm9ybS9pbnB1dC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1mb3JtL2lucHV0LWZvcm0tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLGdCQUFnQjs7cUhBQWhCLGdCQUFnQjt5R0FBaEIsZ0JBQWdCLDBEQ1Y3Qiw0MERBNENBO21HRGxDYSxnQkFBZ0I7a0JBTDVCLFNBQVM7K0JBQ0Usb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBJbnB1dHMgaW4gYSBmb3JtXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWZvcm0tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtZm9ybS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaW5wdXQtZm9ybS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEZvcm1FeGFtcGxlIHt9XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+Q29tcGFueSAoZGlzYWJsZWQpPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IGRpc2FibGVkIHZhbHVlPVwiR29vZ2xlXCI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPHRhYmxlIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgY2VsbHNwYWNpbmc9XCIwXCI+PHRyPlxuICAgIDx0ZD48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgPG1hdC1sYWJlbD5GaXJzdCBuYW1lPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxuICAgIDx0ZD48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgPG1hdC1sYWJlbD5Mb25nIExhc3QgTmFtZSBUaGF0IFdpbGwgQmUgVHJ1bmNhdGVkPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxuICA8L3RyPjwvdGFibGU+XG5cbiAgPHA+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgIDxtYXQtbGFiZWw+QWRkcmVzczwvbWF0LWxhYmVsPlxuICAgICAgPHRleHRhcmVhIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRXguIDEwMCBNYWluIFN0XCI+MTYwMCBBbXBoaXRoZWF0cmUgUGt3eTwvdGV4dGFyZWE+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgPG1hdC1sYWJlbD5BZGRyZXNzIDI8L21hdC1sYWJlbD5cbiAgICAgIDx0ZXh0YXJlYSBtYXRJbnB1dD48L3RleHRhcmVhPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvcD5cblxuICA8dGFibGUgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBjZWxsc3BhY2luZz1cIjBcIj48dHI+XG4gICAgPHRkPjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICA8bWF0LWxhYmVsPkNpdHk8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkV4LiBTYW4gRnJhbmNpc2NvXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxuICAgIDx0ZD48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgPG1hdC1sYWJlbD5TdGF0ZTwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRXguIENhbGlmb3JuaWFcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPjwvdGQ+XG4gICAgPHRkPjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICA8bWF0LWxhYmVsPlBvc3RhbCBDb2RlPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgI3Bvc3RhbENvZGUgbWF4bGVuZ3RoPVwiNVwiIHBsYWNlaG9sZGVyPVwiRXguIDk0MTA1XCIgdmFsdWU9XCI5NDA0M1wiPlxuICAgICAgPG1hdC1oaW50IGFsaWduPVwiZW5kXCI+e3twb3N0YWxDb2RlLnZhbHVlLmxlbmd0aH19IC8gNTwvbWF0LWhpbnQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxuICA8L3RyPjwvdGFibGU+XG48L2Zvcm0+XG4iXX0=