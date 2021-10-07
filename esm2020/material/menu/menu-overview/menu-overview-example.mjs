import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
/**
 * @title Basic menu
 */
export class MenuOverviewExample {
}
MenuOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: MenuOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
MenuOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: MenuOverviewExample, selector: "menu-overview-example", ngImport: i0, template: "<!-- #docregion mat-menu-trigger-for -->\n<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n<!-- #enddocregion mat-menu-trigger-for -->\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n", components: [{ type: i1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i2.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { type: i2.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }], directives: [{ type: i2.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: MenuOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'menu-overview-example', template: "<!-- #docregion mat-menu-trigger-for -->\n<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n<!-- #enddocregion mat-menu-trigger-for -->\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbWVudS9tZW51LW92ZXJ2aWV3L21lbnUtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1vdmVydmlldy9tZW51LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBS0gsTUFBTSxPQUFPLG1CQUFtQjs7d0hBQW5CLG1CQUFtQjs0R0FBbkIsbUJBQW1CLDZEQ1RoQyxxUkFPQTttR0RFYSxtQkFBbUI7a0JBSi9CLFNBQVM7K0JBQ0UsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBtZW51XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbnUtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnbWVudS1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNZW51T3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8IS0tICNkb2NyZWdpb24gbWF0LW1lbnUtdHJpZ2dlci1mb3IgLS0+XG48YnV0dG9uIG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIj5NZW51PC9idXR0b24+XG48IS0tICNlbmRkb2NyZWdpb24gbWF0LW1lbnUtdHJpZ2dlci1mb3IgLS0+XG48bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5JdGVtIDE8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkl0ZW0gMjwvYnV0dG9uPlxuPC9tYXQtbWVudT5cbiJdfQ==