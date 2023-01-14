import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/forms";
/**
 * @title Input with a clear button
 */
export class InputClearableExample {
    constructor() {
        this.value = 'Clear me';
    }
}
InputClearableExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: InputClearableExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputClearableExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0", type: InputClearableExample, selector: "input-clearable-example", ngImport: i0, template: "<mat-form-field class=\"example-form-field\">\n  <mat-label>Clearable input</mat-label>\n  <input matInput type=\"text\" [(ngModel)]=\"value\">\n  <button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-form-field>\n", styles: [".example-form-field {\n  width: 200px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: InputClearableExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-clearable-example', template: "<mat-form-field class=\"example-form-field\">\n  <mat-label>Clearable input</mat-label>\n  <input matInput type=\"text\" [(ngModel)]=\"value\">\n  <button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-form-field>\n", styles: [".example-form-field {\n  width: 200px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1jbGVhcmFibGUvaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1jbGVhcmFibGUvaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFNRSxVQUFLLEdBQUcsVUFBVSxDQUFDO0tBQ3BCOztrSEFGWSxxQkFBcUI7c0dBQXJCLHFCQUFxQiwrRENWbEMsbVRBT0E7MkZER2EscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNFLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgSW5wdXQgd2l0aCBhIGNsZWFyIGJ1dHRvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1jbGVhcmFibGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1jbGVhcmFibGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q2xlYXJhYmxlRXhhbXBsZSB7XG4gIHZhbHVlID0gJ0NsZWFyIG1lJztcbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZm9ybS1maWVsZFwiPlxuICA8bWF0LWxhYmVsPkNsZWFyYWJsZSBpbnB1dDwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cInZhbHVlXCI+XG4gIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVwiIG1hdFN1ZmZpeCBtYXQtaWNvbi1idXR0b24gYXJpYS1sYWJlbD1cIkNsZWFyXCIgKGNsaWNrKT1cInZhbHVlPScnXCI+XG4gICAgPG1hdC1pY29uPmNsb3NlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19