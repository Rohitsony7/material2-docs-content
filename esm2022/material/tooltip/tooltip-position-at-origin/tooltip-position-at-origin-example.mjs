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
class TooltipPositionAtOriginExample {
    constructor() {
        this.enabled = new FormControl(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TooltipPositionAtOriginExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: TooltipPositionAtOriginExample, selector: "tooltip-position-at-origin-example", ngImport: i0, template: "<button mat-raised-button\n        class=\"demo-button\"\n        matTooltip=\"Info about the action\"\n        [matTooltipPositionAtOrigin]=\"enabled.value\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"enabled\" class=\"example-enabled-checkbox\">\n  Position at origin enabled\n</mat-checkbox>\n", styles: ["button.demo-button {\n  width: 500px;\n  height: 500px;\n}\n\n.example-enabled-checkbox {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: i3.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
export { TooltipPositionAtOriginExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TooltipPositionAtOriginExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-position-at-origin-example', template: "<button mat-raised-button\n        class=\"demo-button\"\n        matTooltip=\"Info about the action\"\n        [matTooltipPositionAtOrigin]=\"enabled.value\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"enabled\" class=\"example-enabled-checkbox\">\n  Position at origin enabled\n</mat-checkbox>\n", styles: ["button.demo-button {\n  width: 500px;\n  height: 500px;\n}\n\n.example-enabled-checkbox {\n  margin-left: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4vdG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4vdG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFFM0M7O0dBRUc7QUFDSCxNQUthLDhCQUE4QjtJQUwzQztRQU1FLFlBQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQzs4R0FGWSw4QkFBOEI7a0dBQTlCLDhCQUE4QiwwRUNYM0MsMFlBV0E7O1NEQWEsOEJBQThCOzJGQUE5Qiw4QkFBOEI7a0JBTDFDLFNBQVM7K0JBQ0Usb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyB0b29sdGlwXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtcG9zaXRpb24tYXQtb3JpZ2luLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtcG9zaXRpb24tYXQtb3JpZ2luLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sdGlwLXBvc2l0aW9uLWF0LW9yaWdpbi1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwUG9zaXRpb25BdE9yaWdpbkV4YW1wbGUge1xuICBlbmFibGVkID0gbmV3IEZvcm1Db250cm9sKGZhbHNlKTtcbn1cbiIsIjxidXR0b24gbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgY2xhc3M9XCJkZW1vLWJ1dHRvblwiXG4gICAgICAgIG1hdFRvb2x0aXA9XCJJbmZvIGFib3V0IHRoZSBhY3Rpb25cIlxuICAgICAgICBbbWF0VG9vbHRpcFBvc2l0aW9uQXRPcmlnaW5dPVwiZW5hYmxlZC52YWx1ZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b24gdGhhdCBkaXNwbGF5cyBhIHRvb2x0aXAgd2hlbiBmb2N1c2VkIG9yIGhvdmVyZWQgb3ZlclwiPlxuICBBY3Rpb25cbjwvYnV0dG9uPlxuXG48bWF0LWNoZWNrYm94IFtmb3JtQ29udHJvbF09XCJlbmFibGVkXCIgY2xhc3M9XCJleGFtcGxlLWVuYWJsZWQtY2hlY2tib3hcIj5cbiAgUG9zaXRpb24gYXQgb3JpZ2luIGVuYWJsZWRcbjwvbWF0LWNoZWNrYm94PlxuIl19