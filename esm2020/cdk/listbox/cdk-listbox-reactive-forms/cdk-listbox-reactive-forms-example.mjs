import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/cdk/listbox";
/** @title Listbox with reactive forms. */
class CdkListboxReactiveFormsExample {
    constructor() {
        this.languages = ['C++', 'Java', 'JavaScript', 'Python', 'TypeScript'];
        this.languageCtrl = new FormControl(['TypeScript']);
    }
}
CdkListboxReactiveFormsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: CdkListboxReactiveFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkListboxReactiveFormsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.5", type: CdkListboxReactiveFormsExample, selector: "cdk-listbox-reactive-forms-example", exportAs: ["cdkListboxReactiveFormsExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-language-label\">\n    Preferred Language\n  </label>\n  <ul cdkListbox\n      [formControl]=\"languageCtrl\"\n      aria-labelledby=\"example-language-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let language of languages\"\n        [cdkOption]=\"language\"\n        class=\"example-option\">\n      {{language}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p>\n  Your preferred language: <b>{{languageCtrl.value | json}}</b>&nbsp;\n  <button (click)=\"languageCtrl.reset()\">Reset</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: i3.CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }, { kind: "pipe", type: i1.JsonPipe, name: "json" }] });
export { CdkListboxReactiveFormsExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: CdkListboxReactiveFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-reactive-forms-example', exportAs: 'cdkListboxReactiveFormsExample', template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-language-label\">\n    Preferred Language\n  </label>\n  <ul cdkListbox\n      [formControl]=\"languageCtrl\"\n      aria-labelledby=\"example-language-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let language of languages\"\n        [cdkOption]=\"language\"\n        class=\"example-option\">\n      {{language}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p>\n  Your preferred language: <b>{{languageCtrl.value | json}}</b>&nbsp;\n  <button (click)=\"languageCtrl.reset()\">Reset</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9saXN0Ym94L2Nkay1saXN0Ym94LXJlYWN0aXZlLWZvcm1zL2Nkay1saXN0Ym94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1yZWFjdGl2ZS1mb3Jtcy9jZGstbGlzdGJveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRTNDLDBDQUEwQztBQUMxQyxNQU1hLDhCQUE4QjtJQU4zQztRQU9FLGNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNsRSxpQkFBWSxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztLQUNoRDs7a0lBSFksOEJBQThCO3NIQUE5Qiw4QkFBOEIsd0hDVjNDLHVwQkFxQkE7U0RYYSw4QkFBOEI7a0dBQTlCLDhCQUE4QjtrQkFOMUMsU0FBUzsrQkFDRSxvQ0FBb0MsWUFDcEMsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIExpc3Rib3ggd2l0aCByZWFjdGl2ZSBmb3Jtcy4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1saXN0Ym94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUnLFxuICBleHBvcnRBczogJ2Nka0xpc3Rib3hSZWFjdGl2ZUZvcm1zRXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWxpc3Rib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1saXN0Ym94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0xpc3Rib3hSZWFjdGl2ZUZvcm1zRXhhbXBsZSB7XG4gIGxhbmd1YWdlcyA9IFsnQysrJywgJ0phdmEnLCAnSmF2YVNjcmlwdCcsICdQeXRob24nLCAnVHlwZVNjcmlwdCddO1xuICBsYW5ndWFnZUN0cmwgPSBuZXcgRm9ybUNvbnRyb2woWydUeXBlU2NyaXB0J10pO1xufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1jb250YWluZXJcIj5cbiAgPCEtLSAjZG9jcmVnaW9uIGxpc3Rib3ggLS0+XG4gIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1sYWJlbFwiIGlkPVwiZXhhbXBsZS1sYW5ndWFnZS1sYWJlbFwiPlxuICAgIFByZWZlcnJlZCBMYW5ndWFnZVxuICA8L2xhYmVsPlxuICA8dWwgY2RrTGlzdGJveFxuICAgICAgW2Zvcm1Db250cm9sXT1cImxhbmd1YWdlQ3RybFwiXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLWxhbmd1YWdlLWxhYmVsXCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94XCI+XG4gICAgPGxpICpuZ0Zvcj1cImxldCBsYW5ndWFnZSBvZiBsYW5ndWFnZXNcIlxuICAgICAgICBbY2RrT3B0aW9uXT1cImxhbmd1YWdlXCJcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPlxuICAgICAge3tsYW5ndWFnZX19XG4gICAgPC9saT5cbiAgPC91bD5cbiAgPCEtLSAjZW5kZG9jcmVnaW9uIGxpc3Rib3ggLS0+XG48L2Rpdj5cbjxwPlxuICBZb3VyIHByZWZlcnJlZCBsYW5ndWFnZTogPGI+e3tsYW5ndWFnZUN0cmwudmFsdWUgfCBqc29ufX08L2I+Jm5ic3A7XG4gIDxidXR0b24gKGNsaWNrKT1cImxhbmd1YWdlQ3RybC5yZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj5cbjwvcD5cbiJdfQ==