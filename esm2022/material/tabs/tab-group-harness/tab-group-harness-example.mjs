import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Testing with MatTabGroupHarness
 */
class TabGroupHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TabGroupHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: TabGroupHarnessExample, selector: "tab-group-harness-example", ngImport: i0, template: "<mat-tab-group>\n  <mat-tab label=\"Profile\" aria-label=\"Profile tab\">\n    <span class=\"test-tab-content\">Your personal information</span>\n  </mat-tab>\n  <mat-tab label=\"Settings\" aria-label=\"Settings tab\">\n    <span class=\"test-tab-content\">Privacy settings</span>\n  </mat-tab>\n  <mat-tab label=\"FAQ\" aria-label=\"FAQ tab\">\n    <span class=\"test-tab-content\">How to update profile picture</span>\n  </mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] }); }
}
export { TabGroupHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TabGroupHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-harness-example', template: "<mat-tab-group>\n  <mat-tab label=\"Profile\" aria-label=\"Profile tab\">\n    <span class=\"test-tab-content\">Your personal information</span>\n  </mat-tab>\n  <mat-tab label=\"Settings\" aria-label=\"Settings tab\">\n    <span class=\"test-tab-content\">Privacy settings</span>\n  </mat-tab>\n  <mat-tab label=\"FAQ\" aria-label=\"FAQ tab\">\n    <span class=\"test-tab-content\">How to update profile picture</span>\n  </mat-tab>\n</mat-tab-group>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWhhcm5lc3MvdGFiLWdyb3VwLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWhhcm5lc3MvdGFiLWdyb3VwLWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUNILE1BSWEsc0JBQXNCOzhHQUF0QixzQkFBc0I7a0dBQXRCLHNCQUFzQixpRUNUbkMsdWNBV0E7O1NERmEsc0JBQXNCOzJGQUF0QixzQkFBc0I7a0JBSmxDLFNBQVM7K0JBQ0UsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0VGFiR3JvdXBIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwSGFybmVzc0V4YW1wbGUge31cbiIsIjxtYXQtdGFiLWdyb3VwPlxuICA8bWF0LXRhYiBsYWJlbD1cIlByb2ZpbGVcIiBhcmlhLWxhYmVsPVwiUHJvZmlsZSB0YWJcIj5cbiAgICA8c3BhbiBjbGFzcz1cInRlc3QtdGFiLWNvbnRlbnRcIj5Zb3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uPC9zcGFuPlxuICA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2V0dGluZ3NcIiBhcmlhLWxhYmVsPVwiU2V0dGluZ3MgdGFiXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJ0ZXN0LXRhYi1jb250ZW50XCI+UHJpdmFjeSBzZXR0aW5nczwvc3Bhbj5cbiAgPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIkZBUVwiIGFyaWEtbGFiZWw9XCJGQVEgdGFiXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJ0ZXN0LXRhYi1jb250ZW50XCI+SG93IHRvIHVwZGF0ZSBwcm9maWxlIHBpY3R1cmU8L3NwYW4+XG4gIDwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==