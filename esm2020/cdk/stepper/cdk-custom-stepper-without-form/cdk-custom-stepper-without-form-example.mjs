import { Component } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/stepper";
import * as i2 from "@angular/common";
/** @title A custom CDK stepper without a form */
export class CdkCustomStepperWithoutFormExample {
}
CdkCustomStepperWithoutFormExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: CdkCustomStepperWithoutFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkCustomStepperWithoutFormExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: CdkCustomStepperWithoutFormExample, selector: "cdk-custom-stepper-without-form-example", ngImport: i0, template: "<example-custom-stepper>\n  <cdk-step> <p>This is any content of \"Step 1\"</p> </cdk-step>\n  <cdk-step> <p>This is any content of \"Step 2\"</p> </cdk-step>\n</example-custom-stepper>\n", styles: [""], components: [{ type: i0.forwardRef(function () { return CustomStepper; }), selector: "example-custom-stepper" }, { type: i0.forwardRef(function () { return i1.CdkStep; }), selector: "cdk-step", inputs: ["stepControl", "label", "errorMessage", "aria-label", "aria-labelledby", "state", "editable", "optional", "completed", "hasError"], outputs: ["interacted"], exportAs: ["cdkStep"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: CdkCustomStepperWithoutFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-custom-stepper-without-form-example', template: "<example-custom-stepper>\n  <cdk-step> <p>This is any content of \"Step 1\"</p> </cdk-step>\n  <cdk-step> <p>This is any content of \"Step 2\"</p> </cdk-step>\n</example-custom-stepper>\n", styles: [""] }]
        }] });
/** Custom CDK stepper component */
export class CustomStepper extends CdkStepper {
    selectStepByIndex(index) {
        this.selectedIndex = index;
    }
}
CustomStepper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: CustomStepper, deps: null, target: i0.ɵɵFactoryTarget.Component });
CustomStepper.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: CustomStepper, selector: "example-custom-stepper", providers: [{ provide: CdkStepper, useExisting: CustomStepper }], usesInheritance: true, ngImport: i0, template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{ selectedIndex + 1 }}/{{ steps.length }}</h2>\n  </header>\n\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\n\n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    <button\n      class=\"example-step\"\n      [class.example-active]=\"selectedIndex === i\"\n      *ngFor=\"let step of steps; let i = index\"\n      (click)=\"selectStepByIndex(i)\"\n    >\n      Step {{ i + 1 }}\n    </button>\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>\n", styles: [".example-container {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}\n"], directives: [{ type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i1.CdkStepperPrevious, selector: "button[cdkStepperPrevious]", inputs: ["type"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.CdkStepperNext, selector: "button[cdkStepperNext]", inputs: ["type"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: CustomStepper, decorators: [{
            type: Component,
            args: [{ selector: 'example-custom-stepper', providers: [{ provide: CdkStepper, useExisting: CustomStepper }], template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{ selectedIndex + 1 }}/{{ steps.length }}</h2>\n  </header>\n\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\n\n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    <button\n      class=\"example-step\"\n      [class.example-active]=\"selectedIndex === i\"\n      *ngFor=\"let step of steps; let i = index\"\n      (click)=\"selectStepByIndex(i)\"\n    >\n      Step {{ i + 1 }}\n    </button>\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>\n", styles: [".example-container {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3N0ZXBwZXIvY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0tZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3N0ZXBwZXIvY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS9leGFtcGxlLWN1c3RvbS1zdGVwcGVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFaEQsaURBQWlEO0FBTWpELE1BQU0sT0FBTyxrQ0FBa0M7OytIQUFsQyxrQ0FBa0M7bUhBQWxDLGtDQUFrQywrRUNUL0MsNkxBSUEsd0VEY2EsYUFBYTsyRkFUYixrQ0FBa0M7a0JBTDlDLFNBQVM7K0JBQ0UseUNBQXlDOztBQU1yRCxtQ0FBbUM7QUFPbkMsTUFBTSxPQUFPLGFBQWMsU0FBUSxVQUFVO0lBQzNDLGlCQUFpQixDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7MEdBSFUsYUFBYTs4RkFBYixhQUFhLGlEQUZiLENBQUMsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUMsQ0FBQyxpREVoQmhFLHdwQkFvQkE7MkZGRmEsYUFBYTtrQkFOekIsU0FBUzsrQkFDRSx3QkFBd0IsYUFHdkIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxlQUFlLEVBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrU3RlcHBlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xuXG4vKiogQHRpdGxlIEEgY3VzdG9tIENESyBzdGVwcGVyIHdpdGhvdXQgYSBmb3JtICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0N1c3RvbVN0ZXBwZXJXaXRob3V0Rm9ybUV4YW1wbGUge31cblxuLyoqIEN1c3RvbSBDREsgc3RlcHBlciBjb21wb25lbnQgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhhbXBsZS1jdXN0b20tc3RlcHBlci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhhbXBsZS1jdXN0b20tc3RlcHBlci5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IENka1N0ZXBwZXIsIHVzZUV4aXN0aW5nOiBDdXN0b21TdGVwcGVyfV0sXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbVN0ZXBwZXIgZXh0ZW5kcyBDZGtTdGVwcGVyIHtcbiAgc2VsZWN0U3RlcEJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICB9XG59XG4iLCI8ZXhhbXBsZS1jdXN0b20tc3RlcHBlcj5cbiAgPGNkay1zdGVwPiA8cD5UaGlzIGlzIGFueSBjb250ZW50IG9mIFwiU3RlcCAxXCI8L3A+IDwvY2RrLXN0ZXA+XG4gIDxjZGstc3RlcD4gPHA+VGhpcyBpcyBhbnkgY29udGVudCBvZiBcIlN0ZXAgMlwiPC9wPiA8L2Nkay1zdGVwPlxuPC9leGFtcGxlLWN1c3RvbS1zdGVwcGVyPlxuIiwiPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8aGVhZGVyPlxuICAgIDxoMj5TdGVwIHt7IHNlbGVjdGVkSW5kZXggKyAxIH19L3t7IHN0ZXBzLmxlbmd0aCB9fTwvaDI+XG4gIDwvaGVhZGVyPlxuXG4gIDxkaXYgW25nVGVtcGxhdGVPdXRsZXRdPVwic2VsZWN0ZWQgPyBzZWxlY3RlZC5jb250ZW50IDogbnVsbFwiPjwvZGl2PlxuXG4gIDxmb290ZXIgY2xhc3M9XCJleGFtcGxlLXN0ZXAtbmF2aWdhdGlvbi1iYXJcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1uYXYtYnV0dG9uXCIgY2RrU3RlcHBlclByZXZpb3VzPiZsYXJyOzwvYnV0dG9uPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1zdGVwXCJcbiAgICAgIFtjbGFzcy5leGFtcGxlLWFjdGl2ZV09XCJzZWxlY3RlZEluZGV4ID09PSBpXCJcbiAgICAgICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgIChjbGljayk9XCJzZWxlY3RTdGVwQnlJbmRleChpKVwiXG4gICAgPlxuICAgICAgU3RlcCB7eyBpICsgMSB9fVxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW5hdi1idXR0b25cIiBjZGtTdGVwcGVyTmV4dD4mcmFycjs8L2J1dHRvbj5cbiAgPC9mb290ZXI+XG48L3NlY3Rpb24+XG4iXX0=