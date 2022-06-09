import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/tooltip";
import * as i5 from "@angular/forms";
/**
 * @title Tooltip with a show and hide delay
 */
export class TooltipDelayExample {
    constructor() {
        this.showDelay = new FormControl(1000);
        this.hideDelay = new FormControl(2000);
    }
}
TooltipDelayExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: TooltipDelayExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipDelayExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: TooltipDelayExample, selector: "tooltip-delay-example", ngImport: i0, template: "<mat-form-field class=\"example-user-input\" appearance=\"fill\">\n  <mat-label>Show delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"showDelay\"\n         aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<mat-form-field class=\"example-user-input\" appearance=\"fill\">\n  <mat-label>Hide delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"hideDelay\"\n         aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<button mat-raised-button matTooltip=\"Info about the action\"\n        [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\"\n        aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\n  Action\n</button>\n", styles: [".mat-form-field + .mat-form-field,\n.mat-raised-button {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i4.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: TooltipDelayExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-delay-example', template: "<mat-form-field class=\"example-user-input\" appearance=\"fill\">\n  <mat-label>Show delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"showDelay\"\n         aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<mat-form-field class=\"example-user-input\" appearance=\"fill\">\n  <mat-label>Hide delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"hideDelay\"\n         aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<button mat-raised-button matTooltip=\"Info about the action\"\n        [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\"\n        aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\n  Action\n</button>\n", styles: [".mat-form-field + .mat-form-field,\n.mat-raised-button {\n  margin-left: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1kZWxheS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLWRlbGF5L3Rvb2x0aXAtZGVsYXktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1kZWxheS90b29sdGlwLWRlbGF5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQUUzQzs7R0FFRztBQU1ILE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFNRSxjQUFTLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsY0FBUyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25DOztnSEFIWSxtQkFBbUI7b0dBQW5CLG1CQUFtQiw2RENYaEMsNDZCQW9CQTsyRkRUYSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBUb29sdGlwIHdpdGggYSBzaG93IGFuZCBoaWRlIGRlbGF5XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtZGVsYXktZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1kZWxheS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1kZWxheS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGVsYXlFeGFtcGxlIHtcbiAgc2hvd0RlbGF5ID0gbmV3IEZvcm1Db250cm9sKDEwMDApO1xuICBoaWRlRGVsYXkgPSBuZXcgRm9ybUNvbnRyb2woMjAwMCk7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLXVzZXItaW5wdXRcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPlNob3cgZGVsYXk8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbZm9ybUNvbnRyb2xdPVwic2hvd0RlbGF5XCJcbiAgICAgICAgIGFyaWEtbGFiZWw9XCJBZGRzIGEgZGVsYXkgYmV0d2VlbiBob3ZlcmluZyBvdmVyIHRoZSBidXR0b24gYW5kIGRpc3BsYXlpbmcgdGhlIHRvb2x0aXBcIj5cbiAgPG1hdC1oaW50Pm1pbGxpc2Vjb25kczwvbWF0LWhpbnQ+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLXVzZXItaW5wdXRcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkhpZGUgZGVsYXk8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbZm9ybUNvbnRyb2xdPVwiaGlkZURlbGF5XCJcbiAgICAgICAgIGFyaWEtbGFiZWw9XCJBZGRzIGEgZGVsYXkgYmV0d2VlbiBob3ZlcmluZyBhd2F5IGZyb20gdGhlIGJ1dHRvbiBhbmQgaGlkaW5nIHRoZSB0b29sdGlwXCI+XG4gIDxtYXQtaGludD5taWxsaXNlY29uZHM8L21hdC1oaW50PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBtYXRUb29sdGlwPVwiSW5mbyBhYm91dCB0aGUgYWN0aW9uXCJcbiAgICAgICAgW21hdFRvb2x0aXBTaG93RGVsYXldPVwic2hvd0RlbGF5LnZhbHVlXCJcbiAgICAgICAgW21hdFRvb2x0aXBIaWRlRGVsYXldPVwiaGlkZURlbGF5LnZhbHVlXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkJ1dHRvbiB0aGF0IGRpc3BsYXlzIGEgdG9vbHRpcCB3aXRoIGEgY3VzdG9taXplZCBkZWxheSBpbiBzaG93aW5nIGFuZCBoaWRpbmdcIj5cbiAgQWN0aW9uXG48L2J1dHRvbj5cbiJdfQ==