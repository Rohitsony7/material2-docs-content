import { Component, Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/stepper";
import * as i3 from "@angular/material/radio";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/input";
export class StepperIntl extends MatStepperIntl {
    constructor() {
        super(...arguments);
        // the default optional label text, if unspecified is "Optional"
        this.optionalLabel = 'Optional Label';
    }
}
StepperIntl.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: StepperIntl, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
StepperIntl.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: StepperIntl });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: StepperIntl, decorators: [{
            type: Injectable
        }] });
/**
 * @title Stepper that uses the MatStepperIntl service
 */
export class StepperIntlExample {
    constructor(_formBuilder, _matStepperIntl) {
        this._formBuilder = _formBuilder;
        this._matStepperIntl = _matStepperIntl;
        this.optionalLabelTextChoices = ['Option 1', 'Option 2', 'Option 3'];
    }
    updateOptionalLabel() {
        this._matStepperIntl.optionalLabel = this.optionalLabelText;
        // Required for the optional label text to be updated
        // Notifies the MatStepperIntl service that a change has been made
        this._matStepperIntl.changes.next();
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required],
        });
    }
}
StepperIntlExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: StepperIntlExample, deps: [{ token: i1.FormBuilder }, { token: i2.MatStepperIntl }], target: i0.ɵɵFactoryTarget.Component });
StepperIntlExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.1", type: StepperIntlExample, selector: "stepper-intl-example", providers: [{ provide: MatStepperIntl, useClass: StepperIntl }], ngImport: i0, template: "<label for=\"demo-optional-label-group\">Pick the text for the optional label</label>\n<mat-radio-group\n  id=\"demo-optional-label-group\"\n  class=\"demo-radio-group\"\n  [(ngModel)]=\"optionalLabelText\"\n  (ngModelChange)=\"updateOptionalLabel()\">\n  <mat-radio-button\n    class=\"demo-radio-button\"\n    *ngFor=\"let optionalLabelTextChoice of optionalLabelTextChoices\"\n    [value]=\"optionalLabelTextChoice\">\n    {{optionalLabelTextChoice}}\n  </mat-radio-button>\n</mat-radio-group>\n<mat-stepper class=\"demo-stepper\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field class=\"demo-form-field\" appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input\n          matInput\n          placeholder=\"Last name, First name\"\n          formControlName=\"firstCtrl\"\n          required\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step\n    [stepControl]=\"secondFormGroup\"\n    label=\"Fill out your address\"\n    optional>\n    <form [formGroup]=\"secondFormGroup\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input\n          matInput\n          formControlName=\"secondCtrl\"\n          placeholder=\"Ex. 1 Main St, New York, NY\"\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".demo-stepper {\n  margin-top: 8px;\n}\n\n.demo-form-field {\n  margin-top: 16px;\n}\n\n.demo-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.demo-radio-button {\n  margin: 5px;\n}\n"], components: [{ type: i3.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i2.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["selectedIndex", "disableRipple", "color", "labelPosition"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { type: i2.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { type: i4.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i3.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.MatStepLabel, selector: "[matStepLabel]" }, { type: i4.MatLabel, selector: "mat-label" }, { type: i7.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i2.MatStepperNext, selector: "button[matStepperNext]", inputs: ["type"] }, { type: i2.MatStepperPrevious, selector: "button[matStepperPrevious]", inputs: ["type"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: StepperIntlExample, decorators: [{
            type: Component,
            args: [{ selector: 'stepper-intl-example', providers: [{ provide: MatStepperIntl, useClass: StepperIntl }], template: "<label for=\"demo-optional-label-group\">Pick the text for the optional label</label>\n<mat-radio-group\n  id=\"demo-optional-label-group\"\n  class=\"demo-radio-group\"\n  [(ngModel)]=\"optionalLabelText\"\n  (ngModelChange)=\"updateOptionalLabel()\">\n  <mat-radio-button\n    class=\"demo-radio-button\"\n    *ngFor=\"let optionalLabelTextChoice of optionalLabelTextChoices\"\n    [value]=\"optionalLabelTextChoice\">\n    {{optionalLabelTextChoice}}\n  </mat-radio-button>\n</mat-radio-group>\n<mat-stepper class=\"demo-stepper\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field class=\"demo-form-field\" appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input\n          matInput\n          placeholder=\"Last name, First name\"\n          formControlName=\"firstCtrl\"\n          required\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step\n    [stepControl]=\"secondFormGroup\"\n    label=\"Fill out your address\"\n    optional>\n    <form [formGroup]=\"secondFormGroup\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input\n          matInput\n          formControlName=\"secondCtrl\"\n          placeholder=\"Ex. 1 Main St, New York, NY\"\n        />\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".demo-stepper {\n  margin-top: 8px;\n}\n\n.demo-form-field {\n  margin-top: 16px;\n}\n\n.demo-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.demo-radio-button {\n  margin: 5px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: i2.MatStepperIntl }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1pbnRsLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXItaW50bC9zdGVwcGVyLWludGwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1pbnRsL3N0ZXBwZXItaW50bC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7OztBQUd6RCxNQUFNLE9BQU8sV0FBWSxTQUFRLGNBQWM7SUFEL0M7O1FBRUUsZ0VBQWdFO1FBQ3ZELGtCQUFhLEdBQUcsZ0JBQWdCLENBQUM7S0FDM0M7O3dHQUhZLFdBQVc7NEdBQVgsV0FBVzsyRkFBWCxXQUFXO2tCQUR2QixVQUFVOztBQU1YOztHQUVHO0FBT0gsTUFBTSxPQUFPLGtCQUFrQjtJQU03QixZQUFvQixZQUF5QixFQUFVLGVBQStCO1FBQWxFLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBRnRGLDZCQUF3QixHQUFhLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUVlLENBQUM7SUFFMUYsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUM1RCxxREFBcUQ7UUFDckQsa0VBQWtFO1FBQ2xFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM1QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNyQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzdDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUM7OytHQXRCVSxrQkFBa0I7bUdBQWxCLGtCQUFrQiwrQ0FGbEIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDLDBCQ2pCL0QsbzZEQTJEQTsyRkR4Q2Esa0JBQWtCO2tCQU45QixTQUFTOytCQUNFLHNCQUFzQixhQUdyQixDQUFDLEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0YWJsZSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRTdGVwcGVySW50bH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGVwcGVySW50bCBleHRlbmRzIE1hdFN0ZXBwZXJJbnRsIHtcbiAgLy8gdGhlIGRlZmF1bHQgb3B0aW9uYWwgbGFiZWwgdGV4dCwgaWYgdW5zcGVjaWZpZWQgaXMgXCJPcHRpb25hbFwiXG4gIG92ZXJyaWRlIG9wdGlvbmFsTGFiZWwgPSAnT3B0aW9uYWwgTGFiZWwnO1xufVxuXG4vKipcbiAqIEB0aXRsZSBTdGVwcGVyIHRoYXQgdXNlcyB0aGUgTWF0U3RlcHBlckludGwgc2VydmljZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdGVwcGVyLWludGwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci1pbnRsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwcGVyLWludGwtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1hdFN0ZXBwZXJJbnRsLCB1c2VDbGFzczogU3RlcHBlckludGx9XSxcbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckludGxFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgZmlyc3RGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgc2Vjb25kRm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIG9wdGlvbmFsTGFiZWxUZXh0OiBzdHJpbmc7XG4gIG9wdGlvbmFsTGFiZWxUZXh0Q2hvaWNlczogc3RyaW5nW10gPSBbJ09wdGlvbiAxJywgJ09wdGlvbiAyJywgJ09wdGlvbiAzJ107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF9tYXRTdGVwcGVySW50bDogTWF0U3RlcHBlckludGwpIHt9XG5cbiAgdXBkYXRlT3B0aW9uYWxMYWJlbCgpIHtcbiAgICB0aGlzLl9tYXRTdGVwcGVySW50bC5vcHRpb25hbExhYmVsID0gdGhpcy5vcHRpb25hbExhYmVsVGV4dDtcbiAgICAvLyBSZXF1aXJlZCBmb3IgdGhlIG9wdGlvbmFsIGxhYmVsIHRleHQgdG8gYmUgdXBkYXRlZFxuICAgIC8vIE5vdGlmaWVzIHRoZSBNYXRTdGVwcGVySW50bCBzZXJ2aWNlIHRoYXQgYSBjaGFuZ2UgaGFzIGJlZW4gbWFkZVxuICAgIHRoaXMuX21hdFN0ZXBwZXJJbnRsLmNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maXJzdEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGZpcnN0Q3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KTtcbiAgICB0aGlzLnNlY29uZEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHNlY29uZEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxsYWJlbCBmb3I9XCJkZW1vLW9wdGlvbmFsLWxhYmVsLWdyb3VwXCI+UGljayB0aGUgdGV4dCBmb3IgdGhlIG9wdGlvbmFsIGxhYmVsPC9sYWJlbD5cbjxtYXQtcmFkaW8tZ3JvdXBcbiAgaWQ9XCJkZW1vLW9wdGlvbmFsLWxhYmVsLWdyb3VwXCJcbiAgY2xhc3M9XCJkZW1vLXJhZGlvLWdyb3VwXCJcbiAgWyhuZ01vZGVsKV09XCJvcHRpb25hbExhYmVsVGV4dFwiXG4gIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZU9wdGlvbmFsTGFiZWwoKVwiPlxuICA8bWF0LXJhZGlvLWJ1dHRvblxuICAgIGNsYXNzPVwiZGVtby1yYWRpby1idXR0b25cIlxuICAgICpuZ0Zvcj1cImxldCBvcHRpb25hbExhYmVsVGV4dENob2ljZSBvZiBvcHRpb25hbExhYmVsVGV4dENob2ljZXNcIlxuICAgIFt2YWx1ZV09XCJvcHRpb25hbExhYmVsVGV4dENob2ljZVwiPlxuICAgIHt7b3B0aW9uYWxMYWJlbFRleHRDaG9pY2V9fVxuICA8L21hdC1yYWRpby1idXR0b24+XG48L21hdC1yYWRpby1ncm91cD5cbjxtYXQtc3RlcHBlciBjbGFzcz1cImRlbW8tc3RlcHBlclwiICNzdGVwcGVyPlxuICA8bWF0LXN0ZXAgW3N0ZXBDb250cm9sXT1cImZpcnN0Rm9ybUdyb3VwXCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5GaWxsIG91dCB5b3VyIG5hbWU8L25nLXRlbXBsYXRlPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZGVtby1mb3JtLWZpZWxkXCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgICAgPG1hdC1sYWJlbD5OYW1lPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG1hdElucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IG5hbWUsIEZpcnN0IG5hbWVcIlxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImZpcnN0Q3RybFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXBcbiAgICBbc3RlcENvbnRyb2xdPVwic2Vjb25kRm9ybUdyb3VwXCJcbiAgICBsYWJlbD1cIkZpbGwgb3V0IHlvdXIgYWRkcmVzc1wiXG4gICAgb3B0aW9uYWw+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzZWNvbmRGb3JtR3JvdXBcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICA8bWF0LWxhYmVsPkFkZHJlc3M8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzZWNvbmRDdHJsXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4LiAxIE1haW4gU3QsIE5ldyBZb3JrLCBOWVwiXG4gICAgICAgIC8+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkRvbmU8L25nLXRlbXBsYXRlPlxuICAgIDxwPllvdSBhcmUgbm93IGRvbmUuPC9wPlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic3RlcHBlci5yZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtc3RlcD5cbjwvbWF0LXN0ZXBwZXI+XG4iXX0=