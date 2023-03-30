import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
import * as i2 from "@angular/material/tabs";
/**
 * @title Customizing the theme options on the tab group
 */
class TabGroupThemeExample {
}
TabGroupThemeExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: TabGroupThemeExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabGroupThemeExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.5", type: TabGroupThemeExample, selector: "tab-group-theme-example", ngImport: i0, template: "<div>\n  <mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\">Primary</mat-button-toggle>\n    <mat-button-toggle value=\"accent\">Accent</mat-button-toggle>\n    <mat-button-toggle value=\"warn\">Warn</mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\">Color</span>\n</div>\n\n<div>\n  <mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\">Primary</mat-button-toggle>\n    <mat-button-toggle value=\"accent\">Accent</mat-button-toggle>\n    <mat-button-toggle value=\"warn\">Warn</mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\">Background Color</span>\n</div>\n\n<mat-tab-group [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".example-button-toggle-label {\n  display: inline-block;\n  margin: 16px;\n}\n"], dependencies: [{ kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "component", type: i2.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i2.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] });
export { TabGroupThemeExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: TabGroupThemeExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-theme-example', template: "<div>\n  <mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\">Primary</mat-button-toggle>\n    <mat-button-toggle value=\"accent\">Accent</mat-button-toggle>\n    <mat-button-toggle value=\"warn\">Warn</mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\">Color</span>\n</div>\n\n<div>\n  <mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\">Primary</mat-button-toggle>\n    <mat-button-toggle value=\"accent\">Accent</mat-button-toggle>\n    <mat-button-toggle value=\"warn\">Warn</mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\">Background Color</span>\n</div>\n\n<mat-tab-group [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".example-button-toggle-label {\n  display: inline-block;\n  margin: 16px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLXRoZW1lLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC10aGVtZS90YWItZ3JvdXAtdGhlbWUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXRoZW1lL3RhYi1ncm91cC10aGVtZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV4Qzs7R0FFRztBQUNILE1BS2Esb0JBQW9COzt3SEFBcEIsb0JBQW9COzRHQUFwQixvQkFBb0IsK0RDVmpDLHV0Q0EyQkE7U0RqQmEsb0JBQW9CO2tHQUFwQixvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0UseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDdXN0b21pemluZyB0aGUgdGhlbWUgb3B0aW9ucyBvbiB0aGUgdGFiIGdyb3VwXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC10aGVtZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtdGhlbWUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC10aGVtZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cFRoZW1lRXhhbXBsZSB7fVxuIiwiPGRpdj5cbiAgPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwICNjb2xvclRvZ2dsZT1cIm1hdEJ1dHRvblRvZ2dsZUdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2hhbmdlIGNvbG9yXCI+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwicHJpbWFyeVwiPlByaW1hcnk8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImFjY2VudFwiPkFjY2VudDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwid2FyblwiPldhcm48L21hdC1idXR0b24tdG9nZ2xlPlxuICA8L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXRvZ2dsZS1sYWJlbFwiPkNvbG9yPC9zcGFuPlxuPC9kaXY+XG5cbjxkaXY+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCAjYmFja2dyb3VuZENvbG9yVG9nZ2xlPVwibWF0QnV0dG9uVG9nZ2xlR3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDaGFuZ2UgY29sb3JcIj5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJwcmltYXJ5XCI+UHJpbWFyeTwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiYWNjZW50XCI+QWNjZW50PC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJ3YXJuXCI+V2FybjwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1idXR0b24tdG9nZ2xlLWxhYmVsXCI+QmFja2dyb3VuZCBDb2xvcjwvc3Bhbj5cbjwvZGl2PlxuXG48bWF0LXRhYi1ncm91cCBbY29sb3JdPVwiY29sb3JUb2dnbGUudmFsdWVcIiBbYmFja2dyb3VuZENvbG9yXT1cImJhY2tncm91bmRDb2xvclRvZ2dsZS52YWx1ZVwiPlxuICA8bWF0LXRhYiBsYWJlbD1cIkZpcnN0XCI+Q29udGVudCAxPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlNlY29uZFwiPkNvbnRlbnQgMjwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJUaGlyZFwiPkNvbnRlbnQgMzwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==