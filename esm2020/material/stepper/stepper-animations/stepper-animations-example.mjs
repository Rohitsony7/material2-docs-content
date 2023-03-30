/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/stepper";
/**
 * @title Stepper animations
 */
class StepperAnimationsExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.firstFormGroup = this._formBuilder.group({ firstCtrl: [''] });
        this.secondFormGroup = this._formBuilder.group({ secondCtrl: [''] });
    }
}
StepperAnimationsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: StepperAnimationsExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
StepperAnimationsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.5", type: StepperAnimationsExample, selector: "stepper-animations-example", ngImport: i0, template: "<div class=\"example-input-wrapper\">\n  <label for=\"duration\">Animation duration:</label>\n  <input id=\"duration\" value=\"2000\" type=\"number\" min=\"0\" step=\"100\" #duration>\n</div>\n\n<mat-vertical-stepper [linear]=\"false\" #stepper [animationDuration]=\"duration.value\">\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-vertical-stepper>\n", styles: [".example-input-wrapper {\n  margin-bottom: 16px;\n}\n\nlabel {\n  margin-right: 4px;\n}\n"], dependencies: [{ kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "component", type: i5.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { kind: "directive", type: i5.MatStepLabel, selector: "[matStepLabel]" }, { kind: "component", type: i5.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["selectedIndex", "disableRipple", "color", "labelPosition", "headerPosition", "animationDuration"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { kind: "directive", type: i5.MatStepperNext, selector: "button[matStepperNext]", inputs: ["type"] }, { kind: "directive", type: i5.MatStepperPrevious, selector: "button[matStepperPrevious]", inputs: ["type"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] });
export { StepperAnimationsExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: StepperAnimationsExample, decorators: [{
            type: Component,
            args: [{ selector: 'stepper-animations-example', template: "<div class=\"example-input-wrapper\">\n  <label for=\"duration\">Animation duration:</label>\n  <input id=\"duration\" value=\"2000\" type=\"number\" min=\"0\" step=\"100\" #duration>\n</div>\n\n<mat-vertical-stepper [linear]=\"false\" #stepper [animationDuration]=\"duration.value\">\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-vertical-stepper>\n", styles: [".example-input-wrapper {\n  margin-bottom: 16px;\n}\n\nlabel {\n  margin-right: 4px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1hbmltYXRpb25zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXItYW5pbWF0aW9ucy9zdGVwcGVyLWFuaW1hdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1hbmltYXRpb25zL3N0ZXBwZXItYW5pbWF0aW9ucy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFFdEQ7O0dBRUc7QUFDSCxNQUthLHdCQUF3QjtJQUNuQyxZQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUM3QyxtQkFBYyxHQUFjLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZFLG9CQUFlLEdBQWMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7SUFGekIsQ0FBQzs7NEhBRHRDLHdCQUF3QjtnSEFBeEIsd0JBQXdCLGtFQ25CckMsbTdDQXNDQTtTRG5CYSx3QkFBd0I7a0dBQXhCLHdCQUF3QjtrQkFMcEMsU0FBUzsrQkFDRSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFN0ZXBwZXIgYW5pbWF0aW9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdGVwcGVyLWFuaW1hdGlvbnMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci1hbmltYXRpb25zLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwcGVyLWFuaW1hdGlvbnMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckFuaW1hdGlvbnNFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxuICBmaXJzdEZvcm1Hcm91cDogRm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe2ZpcnN0Q3RybDogWycnXX0pO1xuICBzZWNvbmRGb3JtR3JvdXA6IEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtzZWNvbmRDdHJsOiBbJyddfSk7XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1pbnB1dC13cmFwcGVyXCI+XG4gIDxsYWJlbCBmb3I9XCJkdXJhdGlvblwiPkFuaW1hdGlvbiBkdXJhdGlvbjo8L2xhYmVsPlxuICA8aW5wdXQgaWQ9XCJkdXJhdGlvblwiIHZhbHVlPVwiMjAwMFwiIHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgc3RlcD1cIjEwMFwiICNkdXJhdGlvbj5cbjwvZGl2PlxuXG48bWF0LXZlcnRpY2FsLXN0ZXBwZXIgW2xpbmVhcl09XCJmYWxzZVwiICNzdGVwcGVyIFthbmltYXRpb25EdXJhdGlvbl09XCJkdXJhdGlvbi52YWx1ZVwiPlxuICA8bWF0LXN0ZXAgW3N0ZXBDb250cm9sXT1cImZpcnN0Rm9ybUdyb3VwXCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5GaWxsIG91dCB5b3VyIG5hbWU8L25nLXRlbXBsYXRlPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJMYXN0IG5hbWUsIEZpcnN0IG5hbWVcIiBmb3JtQ29udHJvbE5hbWU9XCJmaXJzdEN0cmxcIiByZXF1aXJlZD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXAgW3N0ZXBDb250cm9sXT1cInNlY29uZEZvcm1Hcm91cFwiPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic2Vjb25kRm9ybUdyb3VwXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkZpbGwgb3V0IHlvdXIgYWRkcmVzczwvbmctdGVtcGxhdGU+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkFkZHJlc3NcIiBmb3JtQ29udHJvbE5hbWU9XCJzZWNvbmRDdHJsXCIgcmVxdWlyZWQ+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkRvbmU8L25nLXRlbXBsYXRlPlxuICAgIFlvdSBhcmUgbm93IGRvbmUuXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzdGVwcGVyLnJlc2V0KClcIj5SZXNldDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L21hdC1zdGVwPlxuPC9tYXQtdmVydGljYWwtc3RlcHBlcj5cbiJdfQ==