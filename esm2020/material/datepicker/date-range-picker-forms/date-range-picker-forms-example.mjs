import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
/** @title Date range picker forms integration */
export class DateRangePickerFormsExample {
    constructor() {
        this.range = new FormGroup({
            start: new FormControl(),
            end: new FormControl(),
        });
    }
}
DateRangePickerFormsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: DateRangePickerFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DateRangePickerFormsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.1", type: DateRangePickerFormsExample, selector: "date-range-picker-forms-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\">\n    <input matStartDate formControlName=\"start\" placeholder=\"Start date\">\n    <input matEndDate formControlName=\"end\" placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n\n  <mat-error *ngIf=\"range.controls.start.hasError('matStartDateInvalid')\">Invalid start date</mat-error>\n  <mat-error *ngIf=\"range.controls.end.hasError('matEndDateInvalid')\">Invalid end date</mat-error>\n</mat-form-field>\n\n<p>Selected range: {{range.value | json}}</p>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i2.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.MatError, selector: "mat-error", inputs: ["id"] }], pipes: { "json": i4.JsonPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: DateRangePickerFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'date-range-picker-forms-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\">\n    <input matStartDate formControlName=\"start\" placeholder=\"Start date\">\n    <input matEndDate formControlName=\"end\" placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n\n  <mat-error *ngIf=\"range.controls.start.hasError('matStartDateInvalid')\">Invalid start date</mat-error>\n  <mat-error *ngIf=\"range.controls.end.hasError('matEndDateInvalid')\">Invalid end date</mat-error>\n</mat-form-field>\n\n<p>Selected range: {{range.value | json}}</p>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBRXRELGlEQUFpRDtBQUtqRCxNQUFNLE9BQU8sMkJBQTJCO0lBSnhDO1FBS0UsVUFBSyxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxJQUFJLFdBQVcsRUFBRTtZQUN4QixHQUFHLEVBQUUsSUFBSSxXQUFXLEVBQUU7U0FDdkIsQ0FBQyxDQUFDO0tBQ0o7O3dIQUxZLDJCQUEyQjs0R0FBM0IsMkJBQTJCLHVFQ1J4QyxrdkJBY0E7MkZETmEsMkJBQTJCO2tCQUp2QyxTQUFTOytCQUNFLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUdyb3VwLCBGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIERhdGUgcmFuZ2UgcGlja2VyIGZvcm1zIGludGVncmF0aW9uICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlLXJhbmdlLXBpY2tlci1mb3Jtcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlLXJhbmdlLXBpY2tlci1mb3Jtcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJGb3Jtc0V4YW1wbGUge1xuICByYW5nZSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgIHN0YXJ0OiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICBlbmQ6IG5ldyBGb3JtQ29udHJvbCgpLFxuICB9KTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkVudGVyIGEgZGF0ZSByYW5nZTwvbWF0LWxhYmVsPlxuICA8bWF0LWRhdGUtcmFuZ2UtaW5wdXQgW2Zvcm1Hcm91cF09XCJyYW5nZVwiIFtyYW5nZVBpY2tlcl09XCJwaWNrZXJcIj5cbiAgICA8aW5wdXQgbWF0U3RhcnREYXRlIGZvcm1Db250cm9sTmFtZT1cInN0YXJ0XCIgcGxhY2Vob2xkZXI9XCJTdGFydCBkYXRlXCI+XG4gICAgPGlucHV0IG1hdEVuZERhdGUgZm9ybUNvbnRyb2xOYW1lPVwiZW5kXCIgcGxhY2Vob2xkZXI9XCJFbmQgZGF0ZVwiPlxuICA8L21hdC1kYXRlLXJhbmdlLWlucHV0PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGUtcmFuZ2UtcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZS1yYW5nZS1waWNrZXI+XG5cbiAgPG1hdC1lcnJvciAqbmdJZj1cInJhbmdlLmNvbnRyb2xzLnN0YXJ0Lmhhc0Vycm9yKCdtYXRTdGFydERhdGVJbnZhbGlkJylcIj5JbnZhbGlkIHN0YXJ0IGRhdGU8L21hdC1lcnJvcj5cbiAgPG1hdC1lcnJvciAqbmdJZj1cInJhbmdlLmNvbnRyb2xzLmVuZC5oYXNFcnJvcignbWF0RW5kRGF0ZUludmFsaWQnKVwiPkludmFsaWQgZW5kIGRhdGU8L21hdC1lcnJvcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxwPlNlbGVjdGVkIHJhbmdlOiB7e3JhbmdlLnZhbHVlIHwganNvbn19PC9wPlxuIl19