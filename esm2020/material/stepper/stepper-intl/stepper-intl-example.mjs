import { Component, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/stepper";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/radio";
import * as i7 from "@angular/common";
class StepperIntl extends MatStepperIntl {
    constructor() {
        super(...arguments);
        // the default optional label text, if unspecified is "Optional"
        this.optionalLabel = 'Optional Label';
    }
}
StepperIntl.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: StepperIntl, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
StepperIntl.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: StepperIntl });
export { StepperIntl };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: StepperIntl, decorators: [{
            type: Injectable
        }] });
/**
 * @title Stepper that uses the MatStepperIntl service
 */
class StepperIntlExample {
    constructor(_formBuilder, _matStepperIntl) {
        this._formBuilder = _formBuilder;
        this._matStepperIntl = _matStepperIntl;
        this.optionalLabelTextChoices = ['Option 1', 'Option 2', 'Option 3'];
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required],
        });
    }
    updateOptionalLabel() {
        this._matStepperIntl.optionalLabel = this.optionalLabelText;
        // Required for the optional label text to be updated
        // Notifies the MatStepperIntl service that a change has been made
        this._matStepperIntl.changes.next();
    }
}
StepperIntlExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: StepperIntlExample, deps: [{ token: i1.FormBuilder }, { token: i2.MatStepperIntl }], target: i0.ɵɵFactoryTarget.Component });
StepperIntlExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.5", type: StepperIntlExample, selector: "stepper-intl-example", providers: [{ provide: MatStepperIntl, useClass: StepperIntl }], ngImport: i0, template: "<label for=\"demo-optional-label-group\">Pick the text for the optional label</label>\n<mat-radio-group\n  id=\"demo-optional-label-group\"\n  class=\"demo-radio-group\"\n  [(ngModel)]=\"optionalLabelText\"\n  (ngModelChange)=\"updateOptionalLabel()\">\n  <mat-radio-button\n    class=\"demo-radio-button\"\n    *ngFor=\"let optionalLabelTextChoice of optionalLabelTextChoices\"\n    [value]=\"optionalLabelTextChoice\">\n    {{optionalLabelTextChoice}}\n  </mat-radio-button>\n</mat-radio-group>\n<mat-stepper class=\"demo-stepper\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field class=\"demo-form-field\" appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input\n          matInput\n          placeholder=\"Last name, First name\"\n          formControlName=\"firstCtrl\"\n          required\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step\n    [stepControl]=\"secondFormGroup\"\n    label=\"Fill out your address\"\n    optional>\n    <form [formGroup]=\"secondFormGroup\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input\n          matInput\n          formControlName=\"secondCtrl\"\n          placeholder=\"Ex. 1 Main St, New York, NY\"\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".demo-stepper {\n  margin-top: 8px;\n}\n\n.demo-form-field {\n  margin-top: 16px;\n}\n\n.demo-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.demo-radio-button {\n  margin: 5px;\n}\n"], dependencies: [{ kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i6.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i6.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "component", type: i2.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { kind: "directive", type: i2.MatStepLabel, selector: "[matStepLabel]" }, { kind: "component", type: i2.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["selectedIndex", "disableRipple", "color", "labelPosition", "headerPosition", "animationDuration"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { kind: "directive", type: i2.MatStepperNext, selector: "button[matStepperNext]", inputs: ["type"] }, { kind: "directive", type: i2.MatStepperPrevious, selector: "button[matStepperPrevious]", inputs: ["type"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
export { StepperIntlExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: StepperIntlExample, decorators: [{
            type: Component,
            args: [{ selector: 'stepper-intl-example', providers: [{ provide: MatStepperIntl, useClass: StepperIntl }], template: "<label for=\"demo-optional-label-group\">Pick the text for the optional label</label>\n<mat-radio-group\n  id=\"demo-optional-label-group\"\n  class=\"demo-radio-group\"\n  [(ngModel)]=\"optionalLabelText\"\n  (ngModelChange)=\"updateOptionalLabel()\">\n  <mat-radio-button\n    class=\"demo-radio-button\"\n    *ngFor=\"let optionalLabelTextChoice of optionalLabelTextChoices\"\n    [value]=\"optionalLabelTextChoice\">\n    {{optionalLabelTextChoice}}\n  </mat-radio-button>\n</mat-radio-group>\n<mat-stepper class=\"demo-stepper\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field class=\"demo-form-field\" appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input\n          matInput\n          placeholder=\"Last name, First name\"\n          formControlName=\"firstCtrl\"\n          required\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step\n    [stepControl]=\"secondFormGroup\"\n    label=\"Fill out your address\"\n    optional>\n    <form [formGroup]=\"secondFormGroup\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input\n          matInput\n          formControlName=\"secondCtrl\"\n          placeholder=\"Ex. 1 Main St, New York, NY\"\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".demo-stepper {\n  margin-top: 8px;\n}\n\n.demo-form-field {\n  margin-top: 16px;\n}\n\n.demo-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.demo-radio-button {\n  margin: 5px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: i2.MatStepperIntl }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1pbnRsLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXItaW50bC9zdGVwcGVyLWludGwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1pbnRsL3N0ZXBwZXItaW50bC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7OztBQUV6RCxNQUNhLFdBQVksU0FBUSxjQUFjO0lBRC9DOztRQUVFLGdFQUFnRTtRQUN2RCxrQkFBYSxHQUFHLGdCQUFnQixDQUFDO0tBQzNDOzsrR0FIWSxXQUFXO21IQUFYLFdBQVc7U0FBWCxXQUFXO2tHQUFYLFdBQVc7a0JBRHZCLFVBQVU7O0FBTVg7O0dBRUc7QUFDSCxNQU1hLGtCQUFrQjtJQVU3QixZQUFvQixZQUF5QixFQUFVLGVBQStCO1FBQWxFLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBUnRGLDZCQUF3QixHQUFhLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMxRSxtQkFBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztRQUNILG9CQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDeEMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBRXNGLENBQUM7SUFFMUYsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUM1RCxxREFBcUQ7UUFDckQsa0VBQWtFO1FBQ2xFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7O3NIQWpCVSxrQkFBa0I7MEdBQWxCLGtCQUFrQiwrQ0FGbEIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDLDBCQ2pCL0QsbzZEQTJEQTtTRHhDYSxrQkFBa0I7a0dBQWxCLGtCQUFrQjtrQkFOOUIsU0FBUzsrQkFDRSxzQkFBc0IsYUFHckIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRTdGVwcGVySW50bH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGVwcGVySW50bCBleHRlbmRzIE1hdFN0ZXBwZXJJbnRsIHtcbiAgLy8gdGhlIGRlZmF1bHQgb3B0aW9uYWwgbGFiZWwgdGV4dCwgaWYgdW5zcGVjaWZpZWQgaXMgXCJPcHRpb25hbFwiXG4gIG92ZXJyaWRlIG9wdGlvbmFsTGFiZWwgPSAnT3B0aW9uYWwgTGFiZWwnO1xufVxuXG4vKipcbiAqIEB0aXRsZSBTdGVwcGVyIHRoYXQgdXNlcyB0aGUgTWF0U3RlcHBlckludGwgc2VydmljZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdGVwcGVyLWludGwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci1pbnRsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwcGVyLWludGwtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1hdFN0ZXBwZXJJbnRsLCB1c2VDbGFzczogU3RlcHBlckludGx9XSxcbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckludGxFeGFtcGxlIHtcbiAgb3B0aW9uYWxMYWJlbFRleHQ6IHN0cmluZztcbiAgb3B0aW9uYWxMYWJlbFRleHRDaG9pY2VzOiBzdHJpbmdbXSA9IFsnT3B0aW9uIDEnLCAnT3B0aW9uIDInLCAnT3B0aW9uIDMnXTtcbiAgZmlyc3RGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgZmlyc3RDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICB9KTtcbiAgc2Vjb25kRm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgIHNlY29uZEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBfbWF0U3RlcHBlckludGw6IE1hdFN0ZXBwZXJJbnRsKSB7fVxuXG4gIHVwZGF0ZU9wdGlvbmFsTGFiZWwoKSB7XG4gICAgdGhpcy5fbWF0U3RlcHBlckludGwub3B0aW9uYWxMYWJlbCA9IHRoaXMub3B0aW9uYWxMYWJlbFRleHQ7XG4gICAgLy8gUmVxdWlyZWQgZm9yIHRoZSBvcHRpb25hbCBsYWJlbCB0ZXh0IHRvIGJlIHVwZGF0ZWRcbiAgICAvLyBOb3RpZmllcyB0aGUgTWF0U3RlcHBlckludGwgc2VydmljZSB0aGF0IGEgY2hhbmdlIGhhcyBiZWVuIG1hZGVcbiAgICB0aGlzLl9tYXRTdGVwcGVySW50bC5jaGFuZ2VzLm5leHQoKTtcbiAgfVxufVxuIiwiPGxhYmVsIGZvcj1cImRlbW8tb3B0aW9uYWwtbGFiZWwtZ3JvdXBcIj5QaWNrIHRoZSB0ZXh0IGZvciB0aGUgb3B0aW9uYWwgbGFiZWw8L2xhYmVsPlxuPG1hdC1yYWRpby1ncm91cFxuICBpZD1cImRlbW8tb3B0aW9uYWwtbGFiZWwtZ3JvdXBcIlxuICBjbGFzcz1cImRlbW8tcmFkaW8tZ3JvdXBcIlxuICBbKG5nTW9kZWwpXT1cIm9wdGlvbmFsTGFiZWxUZXh0XCJcbiAgKG5nTW9kZWxDaGFuZ2UpPVwidXBkYXRlT3B0aW9uYWxMYWJlbCgpXCI+XG4gIDxtYXQtcmFkaW8tYnV0dG9uXG4gICAgY2xhc3M9XCJkZW1vLXJhZGlvLWJ1dHRvblwiXG4gICAgKm5nRm9yPVwibGV0IG9wdGlvbmFsTGFiZWxUZXh0Q2hvaWNlIG9mIG9wdGlvbmFsTGFiZWxUZXh0Q2hvaWNlc1wiXG4gICAgW3ZhbHVlXT1cIm9wdGlvbmFsTGFiZWxUZXh0Q2hvaWNlXCI+XG4gICAge3tvcHRpb25hbExhYmVsVGV4dENob2ljZX19XG4gIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuPG1hdC1zdGVwcGVyIGNsYXNzPVwiZGVtby1zdGVwcGVyXCIgI3N0ZXBwZXI+XG4gIDxtYXQtc3RlcCBbc3RlcENvbnRyb2xdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZpcnN0Rm9ybUdyb3VwXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkZpbGwgb3V0IHlvdXIgbmFtZTwvbmctdGVtcGxhdGU+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJkZW1vLWZvcm0tZmllbGRcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICA8bWF0LWxhYmVsPk5hbWU8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZSwgRmlyc3QgbmFtZVwiXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3RDdHJsXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcFxuICAgIFtzdGVwQ29udHJvbF09XCJzZWNvbmRGb3JtR3JvdXBcIlxuICAgIGxhYmVsPVwiRmlsbCBvdXQgeW91ciBhZGRyZXNzXCJcbiAgICBvcHRpb25hbD5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInNlY29uZEZvcm1Hcm91cFwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICAgIDxtYXQtbGFiZWw+QWRkcmVzczwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInNlY29uZEN0cmxcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXguIDEgTWFpbiBTdCwgTmV3IFlvcmssIE5ZXCJcbiAgICAgICAgLz5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RG9uZTwvbmctdGVtcGxhdGU+XG4gICAgPHA+WW91IGFyZSBub3cgZG9uZS48L3A+XG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzdGVwcGVyLnJlc2V0KClcIj5SZXNldDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L21hdC1zdGVwPlxuPC9tYXQtc3RlcHBlcj5cbiJdfQ==