import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "@angular/forms";
/**
 * @title Basic tooltip
 */
export class TooltipPositionAtOriginExample {
    constructor() {
        this.enabled = new FormControl(false);
    }
}
TooltipPositionAtOriginExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: TooltipPositionAtOriginExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipPositionAtOriginExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0", type: TooltipPositionAtOriginExample, selector: "tooltip-position-at-origin-example", ngImport: i0, template: "<button mat-raised-button\n        class=\"demo-button\"\n        matTooltip=\"Info about the action\"\n        [matTooltipPositionAtOrigin]=\"enabled.value\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"enabled\" class=\"example-enabled-checkbox\">\n  Position at origin enabled\n</mat-checkbox>\n", styles: ["button.demo-button {\n  width: 500px;\n  height: 500px;\n}\n\n.example-enabled-checkbox {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: i3.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: TooltipPositionAtOriginExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-position-at-origin-example', template: "<button mat-raised-button\n        class=\"demo-button\"\n        matTooltip=\"Info about the action\"\n        [matTooltipPositionAtOrigin]=\"enabled.value\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"enabled\" class=\"example-enabled-checkbox\">\n  Position at origin enabled\n</mat-checkbox>\n", styles: ["button.demo-button {\n  width: 500px;\n  height: 500px;\n}\n\n.example-enabled-checkbox {\n  margin-left: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4vdG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4vdG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFFM0M7O0dBRUc7QUFNSCxNQUFNLE9BQU8sOEJBQThCO0lBTDNDO1FBTUUsWUFBTyxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2xDOzsySEFGWSw4QkFBOEI7K0dBQTlCLDhCQUE4QiwwRUNYM0MsMFlBV0E7MkZEQWEsOEJBQThCO2tCQUwxQyxTQUFTOytCQUNFLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgdG9vbHRpcFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sdGlwLXBvc2l0aW9uLWF0LW9yaWdpbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLXBvc2l0aW9uLWF0LW9yaWdpbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4tZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcFBvc2l0aW9uQXRPcmlnaW5FeGFtcGxlIHtcbiAgZW5hYmxlZCA9IG5ldyBGb3JtQ29udHJvbChmYWxzZSk7XG59XG4iLCI8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgIGNsYXNzPVwiZGVtby1idXR0b25cIlxuICAgICAgICBtYXRUb29sdGlwPVwiSW5mbyBhYm91dCB0aGUgYWN0aW9uXCJcbiAgICAgICAgW21hdFRvb2x0aXBQb3NpdGlvbkF0T3JpZ2luXT1cImVuYWJsZWQudmFsdWVcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiQnV0dG9uIHRoYXQgZGlzcGxheXMgYSB0b29sdGlwIHdoZW4gZm9jdXNlZCBvciBob3ZlcmVkIG92ZXJcIj5cbiAgQWN0aW9uXG48L2J1dHRvbj5cblxuPG1hdC1jaGVja2JveCBbZm9ybUNvbnRyb2xdPVwiZW5hYmxlZFwiIGNsYXNzPVwiZXhhbXBsZS1lbmFibGVkLWNoZWNrYm94XCI+XG4gIFBvc2l0aW9uIGF0IG9yaWdpbiBlbmFibGVkXG48L21hdC1jaGVja2JveD5cbiJdfQ==