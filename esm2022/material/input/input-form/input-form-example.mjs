import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/input";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/forms";
/**
 * @title Inputs in a form
 */
class InputFormExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: InputFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: InputFormExample, selector: "input-form-example", ngImport: i0, template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Company (disabled)</mat-label>\n    <input matInput disabled value=\"Google\">\n  </mat-form-field>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>First name</mat-label>\n      <input matInput>\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>Long Last Name That Will Be Truncated</mat-label>\n      <input matInput>\n    </mat-form-field></td>\n  </tr></table>\n\n  <p>\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>Address</mat-label>\n      <textarea matInput placeholder=\"Ex. 100 Main St\">1600 Amphitheatre Pkwy</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>Address 2</mat-label>\n      <textarea matInput></textarea>\n    </mat-form-field>\n  </p>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>City</mat-label>\n      <input matInput placeholder=\"Ex. San Francisco\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>State</mat-label>\n      <input matInput placeholder=\"Ex. California\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>Postal Code</mat-label>\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Ex. 94105\" value=\"94043\">\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n    </mat-form-field></td>\n  </tr></table>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n"], dependencies: [{ kind: "directive", type: i1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] }); }
}
export { InputFormExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: InputFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-form-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Company (disabled)</mat-label>\n    <input matInput disabled value=\"Google\">\n  </mat-form-field>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>First name</mat-label>\n      <input matInput>\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>Long Last Name That Will Be Truncated</mat-label>\n      <input matInput>\n    </mat-form-field></td>\n  </tr></table>\n\n  <p>\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>Address</mat-label>\n      <textarea matInput placeholder=\"Ex. 100 Main St\">1600 Amphitheatre Pkwy</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>Address 2</mat-label>\n      <textarea matInput></textarea>\n    </mat-form-field>\n  </p>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>City</mat-label>\n      <input matInput placeholder=\"Ex. San Francisco\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>State</mat-label>\n      <input matInput placeholder=\"Ex. California\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>Postal Code</mat-label>\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Ex. 94105\" value=\"94043\">\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n    </mat-form-field></td>\n  </tr></table>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtZm9ybS9pbnB1dC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1mb3JtL2lucHV0LWZvcm0tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXhDOztHQUVHO0FBQ0gsTUFLYSxnQkFBZ0I7OEdBQWhCLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLDBEQ1Y3Qiw0cURBNENBOztTRGxDYSxnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFMNUIsU0FBUzsrQkFDRSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIElucHV0cyBpbiBhIGZvcm1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5wdXQtZm9ybS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdpbnB1dC1mb3JtLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydpbnB1dC1mb3JtLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Rm9ybUV4YW1wbGUge31cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgIDxtYXQtbGFiZWw+Q29tcGFueSAoZGlzYWJsZWQpPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IGRpc2FibGVkIHZhbHVlPVwiR29vZ2xlXCI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPHRhYmxlIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgY2VsbHNwYWNpbmc9XCIwXCI+PHRyPlxuICAgIDx0ZD48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDxtYXQtbGFiZWw+Rmlyc3QgbmFtZTwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+PC90ZD5cbiAgICA8dGQ+PG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgICA8bWF0LWxhYmVsPkxvbmcgTGFzdCBOYW1lIFRoYXQgV2lsbCBCZSBUcnVuY2F0ZWQ8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPjwvdGQ+XG4gIDwvdHI+PC90YWJsZT5cblxuICA8cD5cbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDxtYXQtbGFiZWw+QWRkcmVzczwvbWF0LWxhYmVsPlxuICAgICAgPHRleHRhcmVhIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRXguIDEwMCBNYWluIFN0XCI+MTYwMCBBbXBoaXRoZWF0cmUgUGt3eTwvdGV4dGFyZWE+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDxtYXQtbGFiZWw+QWRkcmVzcyAyPC9tYXQtbGFiZWw+XG4gICAgICA8dGV4dGFyZWEgbWF0SW5wdXQ+PC90ZXh0YXJlYT5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L3A+XG5cbiAgPHRhYmxlIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgY2VsbHNwYWNpbmc9XCIwXCI+PHRyPlxuICAgIDx0ZD48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDxtYXQtbGFiZWw+Q2l0eTwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRXguIFNhbiBGcmFuY2lzY29cIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPjwvdGQ+XG4gICAgPHRkPjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgICAgPG1hdC1sYWJlbD5TdGF0ZTwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRXguIENhbGlmb3JuaWFcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPjwvdGQ+XG4gICAgPHRkPjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgICAgPG1hdC1sYWJlbD5Qb3N0YWwgQ29kZTwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0ICNwb3N0YWxDb2RlIG1heGxlbmd0aD1cIjVcIiBwbGFjZWhvbGRlcj1cIkV4LiA5NDEwNVwiIHZhbHVlPVwiOTQwNDNcIj5cbiAgICAgIDxtYXQtaGludCBhbGlnbj1cImVuZFwiPnt7cG9zdGFsQ29kZS52YWx1ZS5sZW5ndGh9fSAvIDU8L21hdC1oaW50PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+PC90ZD5cbiAgPC90cj48L3RhYmxlPlxuPC9mb3JtPlxuIl19