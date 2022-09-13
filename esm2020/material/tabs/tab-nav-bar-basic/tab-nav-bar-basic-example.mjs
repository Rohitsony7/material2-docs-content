import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/legacy-button";
import * as i3 from "@angular/material/legacy-tabs";
/**
 * @title Basic use of the tab nav bar
 */
export class TabNavBarBasicExample {
    constructor() {
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = undefined;
    }
    toggleBackground() {
        this.background = this.background ? undefined : 'primary';
    }
    addLink() {
        this.links.push(`Link ${this.links.length + 1}`);
    }
}
TabNavBarBasicExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: TabNavBarBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabNavBarBasicExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: TabNavBarBasicExample, selector: "tab-nav-bar-basic-example", ngImport: i0, template: "<!-- #docregion mat-tab-nav -->\n<nav mat-tab-nav-bar [backgroundColor]=\"background\" [tabPanel]=\"tabPanel\">\n  <a mat-tab-link *ngFor=\"let link of links\"\n     (click)=\"activeLink = link\"\n     [active]=\"activeLink == link\"> {{link}} </a>\n  <a mat-tab-link disabled>Disabled Link</a>\n</nav>\n<mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>\n<!-- #enddocregion mat-tab-nav -->\n\n<button mat-raised-button class=\"example-action-button\" (click)=\"toggleBackground()\">\n  Toggle background\n</button>\n<button mat-raised-button class=\"example-action-button\" (click)=\"addLink()\">\n  Add link\n</button>\n", styles: [".example-action-button {\n  margin-top: 8px;\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatLegacyButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatLegacyTabNav, selector: "[mat-tab-nav-bar]", inputs: ["color"], exportAs: ["matTabNavBar", "matTabNav"] }, { kind: "component", type: i3.MatLegacyTabNavPanel, selector: "mat-tab-nav-panel", inputs: ["id"], exportAs: ["matTabNavPanel"] }, { kind: "directive", type: i3.MatLegacyTabLink, selector: "[mat-tab-link], [matTabLink]", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matTabLink"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: TabNavBarBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-nav-bar-basic-example', template: "<!-- #docregion mat-tab-nav -->\n<nav mat-tab-nav-bar [backgroundColor]=\"background\" [tabPanel]=\"tabPanel\">\n  <a mat-tab-link *ngFor=\"let link of links\"\n     (click)=\"activeLink = link\"\n     [active]=\"activeLink == link\"> {{link}} </a>\n  <a mat-tab-link disabled>Disabled Link</a>\n</nav>\n<mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>\n<!-- #enddocregion mat-tab-nav -->\n\n<button mat-raised-button class=\"example-action-button\" (click)=\"toggleBackground()\">\n  Toggle background\n</button>\n<button mat-raised-button class=\"example-action-button\" (click)=\"addLink()\">\n  Add link\n</button>\n", styles: [".example-action-button {\n  margin-top: 8px;\n  margin-right: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLW5hdi1iYXItYmFzaWMvdGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLW5hdi1iYXItYmFzaWMvdGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBR3hDOztHQUVHO0FBTUgsTUFBTSxPQUFPLHFCQUFxQjtJQUxsQztRQU1FLFVBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckMsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsZUFBVSxHQUFpQixTQUFTLENBQUM7S0FTdEM7SUFQQyxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzVELENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O3lIQVhVLHFCQUFxQjs2R0FBckIscUJBQXFCLGlFQ1hsQywrbUJBZ0JBO2tHRExhLHFCQUFxQjtrQkFMakMsU0FBUzsrQkFDRSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIHVzZSBvZiB0aGUgdGFiIG5hdiBiYXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1uYXYtYmFyLWJhc2ljLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYk5hdkJhckJhc2ljRXhhbXBsZSB7XG4gIGxpbmtzID0gWydGaXJzdCcsICdTZWNvbmQnLCAnVGhpcmQnXTtcbiAgYWN0aXZlTGluayA9IHRoaXMubGlua3NbMF07XG4gIGJhY2tncm91bmQ6IFRoZW1lUGFsZXR0ZSA9IHVuZGVmaW5lZDtcblxuICB0b2dnbGVCYWNrZ3JvdW5kKCkge1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuYmFja2dyb3VuZCA/IHVuZGVmaW5lZCA6ICdwcmltYXJ5JztcbiAgfVxuXG4gIGFkZExpbmsoKSB7XG4gICAgdGhpcy5saW5rcy5wdXNoKGBMaW5rICR7dGhpcy5saW5rcy5sZW5ndGggKyAxfWApO1xuICB9XG59XG4iLCI8IS0tICNkb2NyZWdpb24gbWF0LXRhYi1uYXYgLS0+XG48bmF2IG1hdC10YWItbmF2LWJhciBbYmFja2dyb3VuZENvbG9yXT1cImJhY2tncm91bmRcIiBbdGFiUGFuZWxdPVwidGFiUGFuZWxcIj5cbiAgPGEgbWF0LXRhYi1saW5rICpuZ0Zvcj1cImxldCBsaW5rIG9mIGxpbmtzXCJcbiAgICAgKGNsaWNrKT1cImFjdGl2ZUxpbmsgPSBsaW5rXCJcbiAgICAgW2FjdGl2ZV09XCJhY3RpdmVMaW5rID09IGxpbmtcIj4ge3tsaW5rfX0gPC9hPlxuICA8YSBtYXQtdGFiLWxpbmsgZGlzYWJsZWQ+RGlzYWJsZWQgTGluazwvYT5cbjwvbmF2PlxuPG1hdC10YWItbmF2LXBhbmVsICN0YWJQYW5lbD48L21hdC10YWItbmF2LXBhbmVsPlxuPCEtLSAjZW5kZG9jcmVnaW9uIG1hdC10YWItbmF2IC0tPlxuXG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1hY3Rpb24tYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZUJhY2tncm91bmQoKVwiPlxuICBUb2dnbGUgYmFja2dyb3VuZFxuPC9idXR0b24+XG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1hY3Rpb24tYnV0dG9uXCIgKGNsaWNrKT1cImFkZExpbmsoKVwiPlxuICBBZGQgbGlua1xuPC9idXR0b24+XG4iXX0=