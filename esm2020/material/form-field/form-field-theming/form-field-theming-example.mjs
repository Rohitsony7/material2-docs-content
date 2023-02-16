import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/forms";
/** @title Form field theming */
export class FormFieldThemingExample {
    constructor() {
        this.colorControl = new FormControl('primary');
    }
}
FormFieldThemingExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: FormFieldThemingExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
FormFieldThemingExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0-rc.0", type: FormFieldThemingExample, selector: "form-field-theming-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\" [color]=\"colorControl.value!\">\n  <mat-label>Color</mat-label>\n  <mat-select [formControl]=\"colorControl\">\n    <mat-option value=\"primary\">Primary</mat-option>\n    <mat-option value=\"accent\">Accent</mat-option>\n    <mat-option value=\"warn\">Warn</mat-option>\n  </mat-select>\n</mat-form-field>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: FormFieldThemingExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-theming-example', template: "<mat-form-field appearance=\"fill\" [color]=\"colorControl.value!\">\n  <mat-label>Color</mat-label>\n  <mat-select [formControl]=\"colorControl\">\n    <mat-option value=\"primary\">Primary</mat-option>\n    <mat-option value=\"accent\">Accent</mat-option>\n    <mat-option value=\"warn\">Warn</mat-option>\n  </mat-select>\n</mat-form-field>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtdGhlbWluZy9mb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC10aGVtaW5nL2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUczQyxnQ0FBZ0M7QUFNaEMsTUFBTSxPQUFPLHVCQUF1QjtJQUxwQztRQU1FLGlCQUFZLEdBQUcsSUFBSSxXQUFXLENBQUMsU0FBeUIsQ0FBQyxDQUFDO0tBQzNEOzt5SEFGWSx1QkFBdUI7NkdBQXZCLHVCQUF1QixrRUNWcEMsMlZBUUE7Z0dERWEsdUJBQXVCO2tCQUxuQyxTQUFTOytCQUNFLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHRoZW1pbmcgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRUaGVtaW5nRXhhbXBsZSB7XG4gIGNvbG9yQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgncHJpbWFyeScgYXMgVGhlbWVQYWxldHRlKTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiIFtjb2xvcl09XCJjb2xvckNvbnRyb2wudmFsdWUhXCI+XG4gIDxtYXQtbGFiZWw+Q29sb3I8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cImNvbG9yQ29udHJvbFwiPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicHJpbWFyeVwiPlByaW1hcnk8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJhY2NlbnRcIj5BY2NlbnQ8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ3YXJuXCI+V2FybjwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==