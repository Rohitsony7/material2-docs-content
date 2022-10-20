import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/listbox";
/** @title Listbox with custom typeahead. */
export class CdkListboxCustomTypeaheadExample {
}
CdkListboxCustomTypeaheadExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: CdkListboxCustomTypeaheadExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkListboxCustomTypeaheadExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-rc.0", type: CdkListboxCustomTypeaheadExample, selector: "cdk-listbox-custom-typeahead-example", exportAs: ["cdkListboxCustomTypeaheadExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-satisfaction-label\">\n    How was your service?\n  </label>\n  <ul cdkListbox\n      aria-labelledby=\"example-satisfaction-label\"\n      class=\"example-listbox\">\n    <li\n        [cdkOption]=\"1\"\n        cdkOptionTypeaheadLabel=\"great\"\n        class=\"example-option\">\n      \uD83D\uDE00 Great\n    </li>\n    <li [cdkOption]=\"0\"\n        cdkOptionTypeaheadLabel=\"okay\"\n        class=\"example-option\">\n      \uD83D\uDE10 Okay\n    </li>\n    <li [cdkOption]=\"-1\"\n        cdkOptionTypeaheadLabel=\"bad\"\n        class=\"example-option\">\n      \uD83D\uDE41 Bad\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: i1.CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: CdkListboxCustomTypeaheadExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-custom-typeahead-example', exportAs: 'cdkListboxCustomTypeaheadExample', template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-satisfaction-label\">\n    How was your service?\n  </label>\n  <ul cdkListbox\n      aria-labelledby=\"example-satisfaction-label\"\n      class=\"example-listbox\">\n    <li\n        [cdkOption]=\"1\"\n        cdkOptionTypeaheadLabel=\"great\"\n        class=\"example-option\">\n      \uD83D\uDE00 Great\n    </li>\n    <li [cdkOption]=\"0\"\n        cdkOptionTypeaheadLabel=\"okay\"\n        class=\"example-option\">\n      \uD83D\uDE10 Okay\n    </li>\n    <li [cdkOption]=\"-1\"\n        cdkOptionTypeaheadLabel=\"bad\"\n        class=\"example-option\">\n      \uD83D\uDE41 Bad\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtY3VzdG9tLXR5cGVhaGVhZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2xpc3Rib3gvY2RrLWxpc3Rib3gtY3VzdG9tLXR5cGVhaGVhZC9jZGstbGlzdGJveC1jdXN0b20tdHlwZWFoZWFkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1jdXN0b20tdHlwZWFoZWFkL2Nkay1saXN0Ym94LWN1c3RvbS10eXBlYWhlYWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qyw0Q0FBNEM7QUFPNUMsTUFBTSxPQUFPLGdDQUFnQzs7a0lBQWhDLGdDQUFnQztzSEFBaEMsZ0NBQWdDLDRIQ1Q3Qywyd0JBMkJBO2dHRGxCYSxnQ0FBZ0M7a0JBTjVDLFNBQVM7K0JBQ0Usc0NBQXNDLFlBQ3RDLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBMaXN0Ym94IHdpdGggY3VzdG9tIHR5cGVhaGVhZC4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1saXN0Ym94LWN1c3RvbS10eXBlYWhlYWQtZXhhbXBsZScsXG4gIGV4cG9ydEFzOiAnY2RrTGlzdGJveEN1c3RvbVR5cGVhaGVhZEV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1saXN0Ym94LWN1c3RvbS10eXBlYWhlYWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1saXN0Ym94LWN1c3RvbS10eXBlYWhlYWQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTGlzdGJveEN1c3RvbVR5cGVhaGVhZEV4YW1wbGUge31cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtY29udGFpbmVyXCI+XG4gIDwhLS0gI2RvY3JlZ2lvbiBsaXN0Ym94IC0tPlxuICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtbGFiZWxcIiBpZD1cImV4YW1wbGUtc2F0aXNmYWN0aW9uLWxhYmVsXCI+XG4gICAgSG93IHdhcyB5b3VyIHNlcnZpY2U/XG4gIDwvbGFiZWw+XG4gIDx1bCBjZGtMaXN0Ym94XG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXNhdGlzZmFjdGlvbi1sYWJlbFwiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtbGlzdGJveFwiPlxuICAgIDxsaVxuICAgICAgICBbY2RrT3B0aW9uXT1cIjFcIlxuICAgICAgICBjZGtPcHRpb25UeXBlYWhlYWRMYWJlbD1cImdyZWF0XCJcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPlxuICAgICAg8J+YgCBHcmVhdFxuICAgIDwvbGk+XG4gICAgPGxpIFtjZGtPcHRpb25dPVwiMFwiXG4gICAgICAgIGNka09wdGlvblR5cGVhaGVhZExhYmVsPVwib2theVwiXG4gICAgICAgIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj5cbiAgICAgIPCfmJAgT2theVxuICAgIDwvbGk+XG4gICAgPGxpIFtjZGtPcHRpb25dPVwiLTFcIlxuICAgICAgICBjZGtPcHRpb25UeXBlYWhlYWRMYWJlbD1cImJhZFwiXG4gICAgICAgIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj5cbiAgICAgIPCfmYEgQmFkXG4gICAgPC9saT5cbiAgPC91bD5cbiAgPCEtLSAjZW5kZG9jcmVnaW9uIGxpc3Rib3ggLS0+XG48L2Rpdj5cbiJdfQ==