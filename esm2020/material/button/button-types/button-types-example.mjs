import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/tooltip";
/**
 * @title Button varieties
 */
export class ButtonTypesExample {
}
ButtonTypesExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: ButtonTypesExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonTypesExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-rc.0", type: ButtonTypesExample, selector: "button-types-example", ngImport: i0, template: "<h3>Basic Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Raised Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-raised-button>Basic</button>\n  <button mat-raised-button color=\"primary\">Primary</button>\n  <button mat-raised-button color=\"accent\">Accent</button>\n  <button mat-raised-button color=\"warn\">Warn</button>\n  <button mat-raised-button disabled>Disabled</button>\n  <a mat-raised-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Stroked Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-stroked-button>Basic</button>\n  <button mat-stroked-button color=\"primary\">Primary</button>\n  <button mat-stroked-button color=\"accent\">Accent</button>\n  <button mat-stroked-button color=\"warn\">Warn</button>\n  <button mat-stroked-button disabled>Disabled</button>\n  <a mat-stroked-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Flat Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-flat-button>Basic</button>\n  <button mat-flat-button color=\"primary\">Primary</button>\n  <button mat-flat-button color=\"accent\">Accent</button>\n  <button mat-flat-button color=\"warn\">Warn</button>\n  <button mat-flat-button disabled>Disabled</button>\n  <a mat-flat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Icon Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-icon-button matTooltip=\"Basic\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-icon-button disabled aria-label=\"Example icon-button with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-icon-button matTooltip=\"Lik\" routerLink=\".\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-fab matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-fab matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-fab matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-fab disabled aria-label=\"Example fab with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-fab matTooltip=\"Link\" routerLink=\".\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Mini Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-mini-fab matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-mini-fab matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-mini-fab matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-mini-fab disabled aria-label=\"Example mini fab with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-mini-fab matTooltip=\"Link\" routerLink=\".\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Extended Fab</h3>\n<div class=\"example-button-row\">\n  <button mat-fab extended color=\"primary\">\n    <mat-icon>favorite</mat-icon>\n    Primary\n  </button>\n  <button mat-fab extended color=\"accent\">\n    <mat-icon>favorite</mat-icon>\n    Accent\n  </button>\n  <button mat-fab extended color=\"warn\">\n    <mat-icon>favorite</mat-icon>\n    Warn\n  </button>\n  <button mat-fab extended disabled>\n    <mat-icon>favorite</mat-icon>\n    Disabled\n  </button>\n  <a mat-fab extended routerLink=\".\">\n    <mat-icon>favorite</mat-icon>\n    Link\n  </a>\n</div>\n", styles: [".example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n\n.example-disabled {\n  display: inline-block;\n}\n"], dependencies: [{ kind: "component", type: i1.MatAnchor, selector: "a[mat-button], a[mat-raised-button], a[mat-flat-button], a[mat-stroked-button]", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1.MatIconAnchor, selector: "a[mat-icon-button]", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1.MatMiniFabAnchor, selector: "a[mat-mini-fab]", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatMiniFabButton, selector: "button[mat-mini-fab]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1.MatFabAnchor, selector: "a[mat-fab]", inputs: ["disabled", "disableRipple", "color", "tabIndex", "extended"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatFabButton, selector: "button[mat-fab]", inputs: ["disabled", "disableRipple", "color", "tabIndex", "extended"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i3.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: ButtonTypesExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-types-example', template: "<h3>Basic Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Raised Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-raised-button>Basic</button>\n  <button mat-raised-button color=\"primary\">Primary</button>\n  <button mat-raised-button color=\"accent\">Accent</button>\n  <button mat-raised-button color=\"warn\">Warn</button>\n  <button mat-raised-button disabled>Disabled</button>\n  <a mat-raised-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Stroked Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-stroked-button>Basic</button>\n  <button mat-stroked-button color=\"primary\">Primary</button>\n  <button mat-stroked-button color=\"accent\">Accent</button>\n  <button mat-stroked-button color=\"warn\">Warn</button>\n  <button mat-stroked-button disabled>Disabled</button>\n  <a mat-stroked-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Flat Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-flat-button>Basic</button>\n  <button mat-flat-button color=\"primary\">Primary</button>\n  <button mat-flat-button color=\"accent\">Accent</button>\n  <button mat-flat-button color=\"warn\">Warn</button>\n  <button mat-flat-button disabled>Disabled</button>\n  <a mat-flat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Icon Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-icon-button matTooltip=\"Basic\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-icon-button disabled aria-label=\"Example icon-button with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-icon-button matTooltip=\"Lik\" routerLink=\".\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-fab matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-fab matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-fab matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-fab disabled aria-label=\"Example fab with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-fab matTooltip=\"Link\" routerLink=\".\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Mini Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-mini-fab matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-mini-fab matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-mini-fab matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-mini-fab disabled aria-label=\"Example mini fab with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-mini-fab matTooltip=\"Link\" routerLink=\".\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Extended Fab</h3>\n<div class=\"example-button-row\">\n  <button mat-fab extended color=\"primary\">\n    <mat-icon>favorite</mat-icon>\n    Primary\n  </button>\n  <button mat-fab extended color=\"accent\">\n    <mat-icon>favorite</mat-icon>\n    Accent\n  </button>\n  <button mat-fab extended color=\"warn\">\n    <mat-icon>favorite</mat-icon>\n    Warn\n  </button>\n  <button mat-fab extended disabled>\n    <mat-icon>favorite</mat-icon>\n    Disabled\n  </button>\n  <a mat-fab extended routerLink=\".\">\n    <mat-icon>favorite</mat-icon>\n    Link\n  </a>\n</div>\n", styles: [".example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n\n.example-disabled {\n  display: inline-block;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXR5cGVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vYnV0dG9uLXR5cGVzL2J1dHRvbi10eXBlcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi10eXBlcy9idXR0b24tdHlwZXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLGtCQUFrQjs7b0hBQWxCLGtCQUFrQjt3R0FBbEIsa0JBQWtCLDREQ1YvQixzNUpBaUlBO2dHRHZIYSxrQkFBa0I7a0JBTDlCLFNBQVM7K0JBQ0Usc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCdXR0b24gdmFyaWV0aWVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi10eXBlcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24tdHlwZXMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2J1dHRvbi10eXBlcy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25UeXBlc0V4YW1wbGUge31cbiIsIjxoMz5CYXNpYyBCdXR0b25zPC9oMz5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uPkJhc2ljPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cbiAgPGEgbWF0LWJ1dHRvbiByb3V0ZXJMaW5rPVwiLlwiPkxpbms8L2E+XG48L2Rpdj5cblxuPGgzPlJhaXNlZCBCdXR0b25zPC9oMz5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbj5CYXNpYzwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlByaW1hcnk8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwid2FyblwiPldhcm48L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBkaXNhYmxlZD5EaXNhYmxlZDwvYnV0dG9uPlxuICA8YSBtYXQtcmFpc2VkLWJ1dHRvbiByb3V0ZXJMaW5rPVwiLlwiPkxpbms8L2E+XG48L2Rpdj5cblxuPGgzPlN0cm9rZWQgQnV0dG9uczwvaDM+XG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uPkJhc2ljPC9idXR0b24+XG4gIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlByaW1hcnk8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIj5BY2NlbnQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBkaXNhYmxlZD5EaXNhYmxlZDwvYnV0dG9uPlxuICA8YSBtYXQtc3Ryb2tlZC1idXR0b24gcm91dGVyTGluaz1cIi5cIj5MaW5rPC9hPlxuPC9kaXY+XG5cbjxoMz5GbGF0IEJ1dHRvbnM8L2gzPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbj5CYXNpYzwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCI+QWNjZW50PC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwid2FyblwiPldhcm48L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cbiAgPGEgbWF0LWZsYXQtYnV0dG9uIHJvdXRlckxpbms9XCIuXCI+TGluazwvYT5cbjwvZGl2PlxuXG48aDM+SWNvbiBCdXR0b25zPC9oMz5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0VG9vbHRpcD1cIkJhc2ljXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0VG9vbHRpcD1cIlByaW1hcnlcIiBjb2xvcj1cInByaW1hcnlcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRUb29sdGlwPVwiQWNjZW50XCIgY29sb3I9XCJhY2NlbnRcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRUb29sdGlwPVwiV2FyblwiIGNvbG9yPVwid2FyblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxkaXYgbWF0VG9vbHRpcD1cIkRpc2FibGVkXCIgY2xhc3M9XCJleGFtcGxlLWRpc2FibGVkXCI+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuICA8YSBtYXQtaWNvbi1idXR0b24gbWF0VG9vbHRpcD1cIkxpa1wiIHJvdXRlckxpbms9XCIuXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2E+XG48L2Rpdj5cblxuPGgzPkZhYiBCdXR0b25zPC9oMz5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgPGJ1dHRvbiBtYXQtZmFiIG1hdFRvb2x0aXA9XCJQcmltYXJ5XCIgY29sb3I9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgZmFiIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZhYiBtYXRUb29sdGlwPVwiQWNjZW50XCIgY29sb3I9XCJhY2NlbnRcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBmYWIgd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmFiIG1hdFRvb2x0aXA9XCJXYXJuXCIgY29sb3I9XCJ3YXJuXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgZmFiIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxkaXYgbWF0VG9vbHRpcD1cIkRpc2FibGVkXCIgY2xhc3M9XCJleGFtcGxlLWRpc2FibGVkXCI+XG4gICAgPGJ1dHRvbiBtYXQtZmFiIGRpc2FibGVkIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGZhYiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxhIG1hdC1mYWIgbWF0VG9vbHRpcD1cIkxpbmtcIiByb3V0ZXJMaW5rPVwiLlwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGZhYiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYT5cbjwvZGl2PlxuXG48aDM+TWluaSBGYWIgQnV0dG9uczwvaDM+XG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gIDxidXR0b24gbWF0LW1pbmktZmFiIG1hdFRvb2x0aXA9XCJQcmltYXJ5XCIgY29sb3I9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgbWluaSBmYWIgd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgbWF0VG9vbHRpcD1cIkFjY2VudFwiIGNvbG9yPVwiYWNjZW50XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgbWluaSBmYWIgd2l0aCBhIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgbWF0VG9vbHRpcD1cIldhcm5cIiBjb2xvcj1cIndhcm5cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBtaW5pIGZhYiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8ZGl2IG1hdFRvb2x0aXA9XCJEaXNhYmxlZFwiIGNsYXNzPVwiZXhhbXBsZS1kaXNhYmxlZFwiPlxuICAgIDxidXR0b24gbWF0LW1pbmktZmFiIGRpc2FibGVkIGFyaWEtbGFiZWw9XCJFeGFtcGxlIG1pbmkgZmFiIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPGEgbWF0LW1pbmktZmFiIG1hdFRvb2x0aXA9XCJMaW5rXCIgcm91dGVyTGluaz1cIi5cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBtaW5pIGZhYiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYT5cbjwvZGl2PlxuXG48aDM+RXh0ZW5kZWQgRmFiPC9oMz5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgPGJ1dHRvbiBtYXQtZmFiIGV4dGVuZGVkIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gICAgUHJpbWFyeVxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmFiIGV4dGVuZGVkIGNvbG9yPVwiYWNjZW50XCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgICBBY2NlbnRcbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZhYiBleHRlbmRlZCBjb2xvcj1cIndhcm5cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICAgIFdhcm5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZhYiBleHRlbmRlZCBkaXNhYmxlZD5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICAgIERpc2FibGVkXG4gIDwvYnV0dG9uPlxuICA8YSBtYXQtZmFiIGV4dGVuZGVkIHJvdXRlckxpbms9XCIuXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgICBMaW5rXG4gIDwvYT5cbjwvZGl2PlxuIl19