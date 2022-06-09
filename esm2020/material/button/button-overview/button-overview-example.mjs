import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/divider";
import * as i3 from "@angular/material/icon";
/**
 * @title Basic buttons
 */
export class ButtonOverviewExample {
}
ButtonOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ButtonOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: ButtonOverviewExample, selector: "button-overview-example", ngImport: i0, template: "<section>\n  <div class=\"example-label\">Basic</div>\n  <div class=\"example-button-row\">\n    <button mat-button>Basic</button>\n    <button mat-button color=\"primary\">Primary</button>\n    <button mat-button color=\"accent\">Accent</button>\n    <button mat-button color=\"warn\">Warn</button>\n    <button mat-button disabled>Disabled</button>\n    <a mat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Raised</div>\n  <div class=\"example-button-row\">\n    <button mat-raised-button>Basic</button>\n    <button mat-raised-button color=\"primary\">Primary</button>\n    <button mat-raised-button color=\"accent\">Accent</button>\n    <button mat-raised-button color=\"warn\">Warn</button>\n    <button mat-raised-button disabled>Disabled</button>\n    <a mat-raised-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Stroked</div>\n  <div class=\"example-button-row\">\n    <button mat-stroked-button>Basic</button>\n    <button mat-stroked-button color=\"primary\">Primary</button>\n    <button mat-stroked-button color=\"accent\">Accent</button>\n    <button mat-stroked-button color=\"warn\">Warn</button>\n    <button mat-stroked-button disabled>Disabled</button>\n    <a mat-stroked-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Flat</div>\n  <div class=\"example-button-row\">\n    <button mat-flat-button>Basic</button>\n    <button mat-flat-button color=\"primary\">Primary</button>\n    <button mat-flat-button color=\"accent\">Accent</button>\n    <button mat-flat-button color=\"warn\">Warn</button>\n    <button mat-flat-button disabled>Disabled</button>\n    <a mat-flat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Icon</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <button mat-icon-button color=\"primary\" aria-label=\"Example icon button with a home icon\">\n        <mat-icon>home</mat-icon>\n      </button>\n      <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a menu icon\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <button mat-icon-button color=\"warn\" aria-label=\"Example icon button with a heart icon\">\n        <mat-icon>favorite</mat-icon>\n      </button>\n      <button mat-icon-button disabled aria-label=\"Example icon button with a open in new tab icon\">\n        <mat-icon>open_in_new</mat-icon>\n      </button>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"accent\" aria-label=\"Example icon button with a bookmark icon\">\n          <mat-icon>bookmark</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"warn\" aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab disabled aria-label=\"Example icon button with a heart icon\">\n          <mat-icon>favorite</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Mini FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"primary\" aria-label=\"Example icon button with a menu icon\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"accent\" aria-label=\"Example icon button with a plus one icon\">\n          <mat-icon>plus_one</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"warn\" aria-label=\"Example icon button with a filter list icon\">\n          <mat-icon>filter_list</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab disabled aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n", styles: ["section {\n  display: table;\n}\n\n.example-label {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row {\n  display: table-cell;\n  width: 490px;\n}\n\n.example-button-row .mat-button-base {\n  margin: 8px 8px 8px 0;\n}\n\n.example-flex-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.example-button-container {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1.MatAnchor, selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ButtonOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-overview-example', template: "<section>\n  <div class=\"example-label\">Basic</div>\n  <div class=\"example-button-row\">\n    <button mat-button>Basic</button>\n    <button mat-button color=\"primary\">Primary</button>\n    <button mat-button color=\"accent\">Accent</button>\n    <button mat-button color=\"warn\">Warn</button>\n    <button mat-button disabled>Disabled</button>\n    <a mat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Raised</div>\n  <div class=\"example-button-row\">\n    <button mat-raised-button>Basic</button>\n    <button mat-raised-button color=\"primary\">Primary</button>\n    <button mat-raised-button color=\"accent\">Accent</button>\n    <button mat-raised-button color=\"warn\">Warn</button>\n    <button mat-raised-button disabled>Disabled</button>\n    <a mat-raised-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Stroked</div>\n  <div class=\"example-button-row\">\n    <button mat-stroked-button>Basic</button>\n    <button mat-stroked-button color=\"primary\">Primary</button>\n    <button mat-stroked-button color=\"accent\">Accent</button>\n    <button mat-stroked-button color=\"warn\">Warn</button>\n    <button mat-stroked-button disabled>Disabled</button>\n    <a mat-stroked-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Flat</div>\n  <div class=\"example-button-row\">\n    <button mat-flat-button>Basic</button>\n    <button mat-flat-button color=\"primary\">Primary</button>\n    <button mat-flat-button color=\"accent\">Accent</button>\n    <button mat-flat-button color=\"warn\">Warn</button>\n    <button mat-flat-button disabled>Disabled</button>\n    <a mat-flat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Icon</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <button mat-icon-button color=\"primary\" aria-label=\"Example icon button with a home icon\">\n        <mat-icon>home</mat-icon>\n      </button>\n      <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a menu icon\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <button mat-icon-button color=\"warn\" aria-label=\"Example icon button with a heart icon\">\n        <mat-icon>favorite</mat-icon>\n      </button>\n      <button mat-icon-button disabled aria-label=\"Example icon button with a open in new tab icon\">\n        <mat-icon>open_in_new</mat-icon>\n      </button>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"accent\" aria-label=\"Example icon button with a bookmark icon\">\n          <mat-icon>bookmark</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"warn\" aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab disabled aria-label=\"Example icon button with a heart icon\">\n          <mat-icon>favorite</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Mini FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"primary\" aria-label=\"Example icon button with a menu icon\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"accent\" aria-label=\"Example icon button with a plus one icon\">\n          <mat-icon>plus_one</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"warn\" aria-label=\"Example icon button with a filter list icon\">\n          <mat-icon>filter_list</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab disabled aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n", styles: ["section {\n  display: table;\n}\n\n.example-label {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row {\n  display: table-cell;\n  width: 490px;\n}\n\n.example-button-row .mat-button-base {\n  margin: 8px 8px 8px 0;\n}\n\n.example-flex-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.example-button-container {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vYnV0dG9uLW92ZXJ2aWV3L2J1dHRvbi1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi1vdmVydmlldy9idXR0b24tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLHFCQUFxQjs7a0hBQXJCLHFCQUFxQjtzR0FBckIscUJBQXFCLCtEQ1ZsQyw2aEtBOEhBOzJGRHBIYSxxQkFBcUI7a0JBTGpDLFNBQVM7K0JBQ0UseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBidXR0b25zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24tb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2J1dHRvbi1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25PdmVydmlld0V4YW1wbGUge31cbiIsIjxzZWN0aW9uPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1sYWJlbFwiPkJhc2ljPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24+QmFzaWM8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cIndhcm5cIj5XYXJuPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XG4gICAgPGEgbWF0LWJ1dHRvbiBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5MaW5rPC9hPlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbjxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuPHNlY3Rpb24+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxhYmVsXCI+UmFpc2VkPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uPkJhc2ljPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cbiAgICA8YSBtYXQtcmFpc2VkLWJ1dHRvbiBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5MaW5rPC9hPlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbjxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuPHNlY3Rpb24+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxhYmVsXCI+U3Ryb2tlZDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gICAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24+QmFzaWM8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIj5BY2NlbnQ8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cIndhcm5cIj5XYXJuPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cbiAgICA8YSBtYXQtc3Ryb2tlZC1idXR0b24gaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGluazwvYT5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG48bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbjxzZWN0aW9uPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1sYWJlbFwiPkZsYXQ8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uPkJhc2ljPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCI+QWNjZW50PC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XG4gICAgPGEgbWF0LWZsYXQtYnV0dG9uIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPkxpbms8L2E+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG48c2VjdGlvbj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbGFiZWxcIj5JY29uPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1mbGV4LWNvbnRhaW5lclwiPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIHZlcnRpY2FsIHRocmVlIGRvdCBpY29uXCI+XG4gICAgICAgIDxtYXQtaWNvbj5tb3JlX3ZlcnQ8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgaG9tZSBpY29uXCI+XG4gICAgICAgIDxtYXQtaWNvbj5ob21lPC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJhY2NlbnRcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgbWVudSBpY29uXCI+XG4gICAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJ3YXJuXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICAgICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIG9wZW4gaW4gbmV3IHRhYiBpY29uXCI+XG4gICAgICAgIDxtYXQtaWNvbj5vcGVuX2luX25ldzwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG48bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbjxzZWN0aW9uPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1sYWJlbFwiPkZBQjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZmxleC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtZmFiIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSBkZWxldGUgaWNvblwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1mYWIgY29sb3I9XCJhY2NlbnRcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgYm9va21hcmsgaWNvblwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5ib29rbWFyazwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gbWF0LWZhYiBjb2xvcj1cIndhcm5cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgaG9tZSBpY29uXCI+XG4gICAgICAgICAgPG1hdC1pY29uPmhvbWU8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1mYWIgZGlzYWJsZWQgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICAgICAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbjxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuPHNlY3Rpb24+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxhYmVsXCI+TWluaSBGQUI8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWZsZXgtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSBtZW51IGljb25cIj5cbiAgICAgICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIGNvbG9yPVwiYWNjZW50XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIHBsdXMgb25lIGljb25cIj5cbiAgICAgICAgICA8bWF0LWljb24+cGx1c19vbmU8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjb2xvcj1cIndhcm5cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgZmlsdGVyIGxpc3QgaWNvblwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5maWx0ZXJfbGlzdDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIGRpc2FibGVkIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSBob21lIGljb25cIj5cbiAgICAgICAgICA8bWF0LWljb24+aG9tZTwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuIl19