import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/menu";
/** @title Google Docs Menu Bar. */
export class CdkMenuMenubarExample {
}
CdkMenuMenubarExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: CdkMenuMenubarExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkMenuMenubarExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.1", type: CdkMenuMenubarExample, selector: "cdk-menu-menubar-example", exportAs: ["cdkMenuMenubarExample"], ngImport: i0, template: "<div cdkMenuBar>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"file\">File</button>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"edit\">Edit</button>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"format\">Format</button>\n</div>\n\n<ng-template cdkMenuPanel #file=\"cdkMenuPanel\">\n  <div class=\"example-menu\" cdkMenu [cdkMenuPanel]=\"file\">\n    <button class=\"example-menu-item\" cdkMenuItem>Share</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"new\">\n      New <span>&#10148;</span>\n    </button>\n    <button class=\"example-menu-item\" cdkMenuItem>Open</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Make a Copy</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"download\">\n      Download <span>&#10148;</span>\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #edit=\"cdkMenuPanel\" cdkMenuPanel>\n  <div class=\"example-menu\" cdkMenu [cdkMenuPanel]=\"edit\">\n    <button class=\"example-menu-item\" cdkMenuItem>Undo</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Redo</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n\n<ng-template #format=\"cdkMenuPanel\" cdkMenuPanel>\n  <div class=\"example-menu\" cdkMenu [cdkMenuPanel]=\"format\">\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button class=\"example-menu-item\" checked id=\"bf\" cdkMenuItemCheckbox>Bold</button>\n      <button class=\"example-menu-item\" id=\"if\" cdkMenuItemCheckbox>Italic</button>\n    </div>\n    <hr />\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button class=\"example-menu-item\" id=\"small\" cdkMenuItemRadio>Small</button>\n      <button class=\"example-menu-item\" checked id=\"normal\" cdkMenuItemRadio>Normal</button>\n      <button class=\"example-menu-item\" id=\"large\" cdkMenuItemRadio>Big</button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #new=\"cdkMenuPanel\" cdkMenuPanel>\n  <div class=\"example-menu\" cdkMenu [cdkMenuPanel]=\"new\">\n    <button class=\"example-menu-item\" cdkMenuItem>Document</button>\n    <button class=\"example-menu-item\" cdkMenuItem>From template</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Spreadsheet</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Presentation</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Form</button>\n  </div>\n</ng-template>\n\n<ng-template #download=\"cdkMenuPanel\" cdkMenuPanel>\n  <div class=\"example-menu\" cdkMenu [cdkMenuPanel]=\"download\">\n    <button class=\"example-menu-item\" cdkMenuItem>Microsoft Word</button>\n    <button class=\"example-menu-item\" cdkMenuItem>PDF</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Plain text</button>\n  </div>\n</ng-template>\n", styles: [".example-menu-bar-item {\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 34px;\n  line-height: 26px;\n  padding: 0 16px;\n}\n\n.example-menu-bar-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu hr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu .example-menu-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-menu .example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item > span {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  justify-content: flex-end;\n}\n\n.example-menu .example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu .example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-menu-bar-item[aria-expanded='true'],\n.example-menu-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208) !important;\n}\n"], directives: [{ type: i1.CdkMenuBar, selector: "[cdkMenuBar]", inputs: ["cdkMenuBarOrientation"], exportAs: ["cdkMenuBar"] }, { type: i1.CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["disabled"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }, { type: i1.CdkMenuItemTrigger, selector: "[cdkMenuTriggerFor]", inputs: ["cdkMenuTriggerFor"], outputs: ["cdkMenuOpened", "cdkMenuClosed"], exportAs: ["cdkMenuTriggerFor"] }, { type: i1.CdkMenuPanel, selector: "ng-template[cdkMenuPanel]", exportAs: ["cdkMenuPanel"] }, { type: i1.CdkMenu, selector: "[cdkMenu]", inputs: ["cdkMenuOrientation", "cdkMenuPanel"], outputs: ["closed"], exportAs: ["cdkMenu"] }, { type: i1.CdkMenuGroup, selector: "[cdkMenuGroup]", outputs: ["change"], exportAs: ["cdkMenuGroup"] }, { type: i1.CdkMenuItemCheckbox, selector: "[cdkMenuItemCheckbox]", exportAs: ["cdkMenuItemCheckbox"] }, { type: i1.CdkMenuItemRadio, selector: "[cdkMenuItemRadio]", exportAs: ["cdkMenuItemRadio"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: CdkMenuMenubarExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-menubar-example', exportAs: 'cdkMenuMenubarExample', template: "<div cdkMenuBar>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"file\">File</button>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"edit\">Edit</button>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"format\">Format</button>\n</div>\n\n<ng-template cdkMenuPanel #file=\"cdkMenuPanel\">\n  <div class=\"example-menu\" cdkMenu [cdkMenuPanel]=\"file\">\n    <button class=\"example-menu-item\" cdkMenuItem>Share</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"new\">\n      New <span>&#10148;</span>\n    </button>\n    <button class=\"example-menu-item\" cdkMenuItem>Open</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Make a Copy</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"download\">\n      Download <span>&#10148;</span>\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #edit=\"cdkMenuPanel\" cdkMenuPanel>\n  <div class=\"example-menu\" cdkMenu [cdkMenuPanel]=\"edit\">\n    <button class=\"example-menu-item\" cdkMenuItem>Undo</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Redo</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n\n<ng-template #format=\"cdkMenuPanel\" cdkMenuPanel>\n  <div class=\"example-menu\" cdkMenu [cdkMenuPanel]=\"format\">\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button class=\"example-menu-item\" checked id=\"bf\" cdkMenuItemCheckbox>Bold</button>\n      <button class=\"example-menu-item\" id=\"if\" cdkMenuItemCheckbox>Italic</button>\n    </div>\n    <hr />\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button class=\"example-menu-item\" id=\"small\" cdkMenuItemRadio>Small</button>\n      <button class=\"example-menu-item\" checked id=\"normal\" cdkMenuItemRadio>Normal</button>\n      <button class=\"example-menu-item\" id=\"large\" cdkMenuItemRadio>Big</button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #new=\"cdkMenuPanel\" cdkMenuPanel>\n  <div class=\"example-menu\" cdkMenu [cdkMenuPanel]=\"new\">\n    <button class=\"example-menu-item\" cdkMenuItem>Document</button>\n    <button class=\"example-menu-item\" cdkMenuItem>From template</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Spreadsheet</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Presentation</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Form</button>\n  </div>\n</ng-template>\n\n<ng-template #download=\"cdkMenuPanel\" cdkMenuPanel>\n  <div class=\"example-menu\" cdkMenu [cdkMenuPanel]=\"download\">\n    <button class=\"example-menu-item\" cdkMenuItem>Microsoft Word</button>\n    <button class=\"example-menu-item\" cdkMenuItem>PDF</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Plain text</button>\n  </div>\n</ng-template>\n", styles: [".example-menu-bar-item {\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 34px;\n  line-height: 26px;\n  padding: 0 16px;\n}\n\n.example-menu-bar-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu hr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu .example-menu-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-menu .example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item > span {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  justify-content: flex-end;\n}\n\n.example-menu .example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu .example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-menu-bar-item[aria-expanded='true'],\n.example-menu-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208) !important;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtbWVudWJhci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L2Nkay1tZW51LW1lbnViYXIvY2RrLW1lbnUtbWVudWJhci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L2Nkay1tZW51LW1lbnViYXIvY2RrLW1lbnUtbWVudWJhci1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDLG1DQUFtQztBQU9uQyxNQUFNLE9BQU8scUJBQXFCOztrSEFBckIscUJBQXFCO3NHQUFyQixxQkFBcUIscUdDVGxDLGtoR0FrRUE7MkZEekRhLHFCQUFxQjtrQkFOakMsU0FBUzsrQkFDRSwwQkFBMEIsWUFDMUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIEdvb2dsZSBEb2NzIE1lbnUgQmFyLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLW1lbnUtbWVudWJhci1leGFtcGxlJyxcbiAgZXhwb3J0QXM6ICdjZGtNZW51TWVudWJhckV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLW1lbnUtbWVudWJhci1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1tZW51LW1lbnViYXItZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTWVudU1lbnViYXJFeGFtcGxlIHt9XG4iLCI8ZGl2IGNka01lbnVCYXI+XG4gIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtYmFyLWl0ZW1cIiBjZGtNZW51SXRlbSBbY2RrTWVudVRyaWdnZXJGb3JdPVwiZmlsZVwiPkZpbGU8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1iYXItaXRlbVwiIGNka01lbnVJdGVtIFtjZGtNZW51VHJpZ2dlckZvcl09XCJlZGl0XCI+RWRpdDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWJhci1pdGVtXCIgY2RrTWVudUl0ZW0gW2Nka01lbnVUcmlnZ2VyRm9yXT1cImZvcm1hdFwiPkZvcm1hdDwvYnV0dG9uPlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSBjZGtNZW51UGFuZWwgI2ZpbGU9XCJjZGtNZW51UGFuZWxcIj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbWVudVwiIGNka01lbnUgW2Nka01lbnVQYW5lbF09XCJmaWxlXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+U2hhcmU8L2J1dHRvbj5cbiAgICA8aHIgLz5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbSBbY2RrTWVudVRyaWdnZXJGb3JdPVwibmV3XCI+XG4gICAgICBOZXcgPHNwYW4+JiMxMDE0ODs8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+T3BlbjwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPk1ha2UgYSBDb3B5PC9idXR0b24+XG4gICAgPGhyIC8+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0gW2Nka01lbnVUcmlnZ2VyRm9yXT1cImRvd25sb2FkXCI+XG4gICAgICBEb3dubG9hZCA8c3Bhbj4mIzEwMTQ4Ozwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2VkaXQ9XCJjZGtNZW51UGFuZWxcIiBjZGtNZW51UGFuZWw+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51IFtjZGtNZW51UGFuZWxdPVwiZWRpdFwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlVuZG88L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5SZWRvPC9idXR0b24+XG4gICAgPGhyIC8+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+Q3V0PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+Q29weTwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlBhc3RlPC9idXR0b24+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNmb3JtYXQ9XCJjZGtNZW51UGFuZWxcIiBjZGtNZW51UGFuZWw+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51IFtjZGtNZW51UGFuZWxdPVwiZm9ybWF0XCI+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbWVudS1ncm91cFwiIGNka01lbnVHcm91cD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNoZWNrZWQgaWQ9XCJiZlwiIGNka01lbnVJdGVtQ2hlY2tib3g+Qm9sZDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgaWQ9XCJpZlwiIGNka01lbnVJdGVtQ2hlY2tib3g+SXRhbGljPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGhyIC8+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbWVudS1ncm91cFwiIGNka01lbnVHcm91cD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGlkPVwic21hbGxcIiBjZGtNZW51SXRlbVJhZGlvPlNtYWxsPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjaGVja2VkIGlkPVwibm9ybWFsXCIgY2RrTWVudUl0ZW1SYWRpbz5Ob3JtYWw8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGlkPVwibGFyZ2VcIiBjZGtNZW51SXRlbVJhZGlvPkJpZzwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjbmV3PVwiY2RrTWVudVBhbmVsXCIgY2RrTWVudVBhbmVsPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCIgY2RrTWVudSBbY2RrTWVudVBhbmVsXT1cIm5ld1wiPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkRvY3VtZW50PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+RnJvbSB0ZW1wbGF0ZTwvYnV0dG9uPlxuICAgIDxociAvPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlNwcmVhZHNoZWV0PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+UHJlc2VudGF0aW9uPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+Rm9ybTwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjZG93bmxvYWQ9XCJjZGtNZW51UGFuZWxcIiBjZGtNZW51UGFuZWw+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51IFtjZGtNZW51UGFuZWxdPVwiZG93bmxvYWRcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5NaWNyb3NvZnQgV29yZDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlBERjwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlBsYWluIHRleHQ8L2J1dHRvbj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19