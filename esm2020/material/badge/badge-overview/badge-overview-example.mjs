import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/badge";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
/**
 * @title Badge overview
 */
export class BadgeOverviewExample {
    constructor() {
        this.hidden = false;
    }
    toggleBadgeVisibility() {
        this.hidden = !this.hidden;
    }
}
BadgeOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: BadgeOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
BadgeOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-rc.0", type: BadgeOverviewExample, selector: "badge-overview-example", ngImport: i0, template: "<!-- #docregion mat-badge-overlap -->\n  <div matBadge=\"4\" matBadgeOverlap=\"false\" class=\"demo-section\">Text with a badge</div>\n<!-- #enddocregion mat-badge-overlap -->\n\n<!-- #docregion mat-badge-size -->\n  <div matBadge=\"1\" matBadgeSize=\"large\" class=\"demo-section\">Text with large badge</div>\n<!-- #enddocregion mat-badge-size -->\n\n<div class=\"demo-section\">\n  Button with a badge on the left\n<!-- #docregion mat-badge-position -->\n  <button mat-raised-button color=\"primary\"\n      matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n    Action\n  </button>\n<!-- #enddocregion mat-badge-position -->\n</div>\n\n<div class=\"demo-section\">\n    Button toggles badge visibility\n<!-- #docregion mat-badge-hide -->\n    <button mat-raised-button matBadge=\"7\" [matBadgeHidden]=\"hidden\" (click)=\"toggleBadgeVisibility()\">\n        Hide\n    </button>\n<!-- #enddocregion mat-badge-hide -->\n  </div>\n\n<div class=\"demo-section\">\n  Icon with a badge\n<!-- #docregion mat-badge-color -->\n  <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n<!-- #enddocregion mat-badge-color -->\n    <!-- Include text description of the icon's meaning for screen-readers -->\n    <span class=\"cdk-visually-hidden\">\n      Example with a home icon with overlaid badge showing the number 15\n    </span>\n</div>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.demo-section + .demo-section {\n  margin-top: 16px;\n}\n"], dependencies: [{ kind: "directive", type: i1.MatBadge, selector: "[matBadge]", inputs: ["matBadgeDisabled", "matBadgeColor", "matBadgeOverlap", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: BadgeOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'badge-overview-example', template: "<!-- #docregion mat-badge-overlap -->\n  <div matBadge=\"4\" matBadgeOverlap=\"false\" class=\"demo-section\">Text with a badge</div>\n<!-- #enddocregion mat-badge-overlap -->\n\n<!-- #docregion mat-badge-size -->\n  <div matBadge=\"1\" matBadgeSize=\"large\" class=\"demo-section\">Text with large badge</div>\n<!-- #enddocregion mat-badge-size -->\n\n<div class=\"demo-section\">\n  Button with a badge on the left\n<!-- #docregion mat-badge-position -->\n  <button mat-raised-button color=\"primary\"\n      matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n    Action\n  </button>\n<!-- #enddocregion mat-badge-position -->\n</div>\n\n<div class=\"demo-section\">\n    Button toggles badge visibility\n<!-- #docregion mat-badge-hide -->\n    <button mat-raised-button matBadge=\"7\" [matBadgeHidden]=\"hidden\" (click)=\"toggleBadgeVisibility()\">\n        Hide\n    </button>\n<!-- #enddocregion mat-badge-hide -->\n  </div>\n\n<div class=\"demo-section\">\n  Icon with a badge\n<!-- #docregion mat-badge-color -->\n  <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n<!-- #enddocregion mat-badge-color -->\n    <!-- Include text description of the icon's meaning for screen-readers -->\n    <span class=\"cdk-visually-hidden\">\n      Example with a home icon with overlaid badge showing the number 15\n    </span>\n</div>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.demo-section + .demo-section {\n  margin-top: 16px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2JhZGdlL2JhZGdlLW92ZXJ2aWV3L2JhZGdlLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9iYWRnZS1vdmVydmlldy9iYWRnZS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBTUUsV0FBTSxHQUFHLEtBQUssQ0FBQztLQUtoQjtJQUhDLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDOztzSEFMVSxvQkFBb0I7MEdBQXBCLG9CQUFvQiw4RENWakMsdzFDQXFDQTtnR0QzQmEsb0JBQW9CO2tCQUxoQyxTQUFTOytCQUNFLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFkZ2Ugb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2JhZGdlLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJhZGdlT3ZlcnZpZXdFeGFtcGxlIHtcbiAgaGlkZGVuID0gZmFsc2U7XG5cbiAgdG9nZ2xlQmFkZ2VWaXNpYmlsaXR5KCkge1xuICAgIHRoaXMuaGlkZGVuID0gIXRoaXMuaGlkZGVuO1xuICB9XG59XG4iLCI8IS0tICNkb2NyZWdpb24gbWF0LWJhZGdlLW92ZXJsYXAgLS0+XG4gIDxkaXYgbWF0QmFkZ2U9XCI0XCIgbWF0QmFkZ2VPdmVybGFwPVwiZmFsc2VcIiBjbGFzcz1cImRlbW8tc2VjdGlvblwiPlRleHQgd2l0aCBhIGJhZGdlPC9kaXY+XG48IS0tICNlbmRkb2NyZWdpb24gbWF0LWJhZGdlLW92ZXJsYXAgLS0+XG5cbjwhLS0gI2RvY3JlZ2lvbiBtYXQtYmFkZ2Utc2l6ZSAtLT5cbiAgPGRpdiBtYXRCYWRnZT1cIjFcIiBtYXRCYWRnZVNpemU9XCJsYXJnZVwiIGNsYXNzPVwiZGVtby1zZWN0aW9uXCI+VGV4dCB3aXRoIGxhcmdlIGJhZGdlPC9kaXY+XG48IS0tICNlbmRkb2NyZWdpb24gbWF0LWJhZGdlLXNpemUgLS0+XG5cbjxkaXYgY2xhc3M9XCJkZW1vLXNlY3Rpb25cIj5cbiAgQnV0dG9uIHdpdGggYSBiYWRnZSBvbiB0aGUgbGVmdFxuPCEtLSAjZG9jcmVnaW9uIG1hdC1iYWRnZS1wb3NpdGlvbiAtLT5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgbWF0QmFkZ2U9XCI4XCIgbWF0QmFkZ2VQb3NpdGlvbj1cImJlZm9yZVwiIG1hdEJhZGdlQ29sb3I9XCJhY2NlbnRcIj5cbiAgICBBY3Rpb25cbiAgPC9idXR0b24+XG48IS0tICNlbmRkb2NyZWdpb24gbWF0LWJhZGdlLXBvc2l0aW9uIC0tPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJkZW1vLXNlY3Rpb25cIj5cbiAgICBCdXR0b24gdG9nZ2xlcyBiYWRnZSB2aXNpYmlsaXR5XG48IS0tICNkb2NyZWdpb24gbWF0LWJhZGdlLWhpZGUgLS0+XG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBtYXRCYWRnZT1cIjdcIiBbbWF0QmFkZ2VIaWRkZW5dPVwiaGlkZGVuXCIgKGNsaWNrKT1cInRvZ2dsZUJhZGdlVmlzaWJpbGl0eSgpXCI+XG4gICAgICAgIEhpZGVcbiAgICA8L2J1dHRvbj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBtYXQtYmFkZ2UtaGlkZSAtLT5cbiAgPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJkZW1vLXNlY3Rpb25cIj5cbiAgSWNvbiB3aXRoIGEgYmFkZ2VcbjwhLS0gI2RvY3JlZ2lvbiBtYXQtYmFkZ2UtY29sb3IgLS0+XG4gIDxtYXQtaWNvbiBtYXRCYWRnZT1cIjE1XCIgbWF0QmFkZ2VDb2xvcj1cIndhcm5cIj5ob21lPC9tYXQtaWNvbj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBtYXQtYmFkZ2UtY29sb3IgLS0+XG4gICAgPCEtLSBJbmNsdWRlIHRleHQgZGVzY3JpcHRpb24gb2YgdGhlIGljb24ncyBtZWFuaW5nIGZvciBzY3JlZW4tcmVhZGVycyAtLT5cbiAgICA8c3BhbiBjbGFzcz1cImNkay12aXN1YWxseS1oaWRkZW5cIj5cbiAgICAgIEV4YW1wbGUgd2l0aCBhIGhvbWUgaWNvbiB3aXRoIG92ZXJsYWlkIGJhZGdlIHNob3dpbmcgdGhlIG51bWJlciAxNVxuICAgIDwvc3Bhbj5cbjwvZGl2PlxuIl19