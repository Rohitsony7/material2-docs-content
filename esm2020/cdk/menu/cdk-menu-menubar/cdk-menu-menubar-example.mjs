import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/menu";
/** @title Google Docs Menu Bar. */
export class CdkMenuMenubarExample {
}
CdkMenuMenubarExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: CdkMenuMenubarExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkMenuMenubarExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-rc.0", type: CdkMenuMenubarExample, selector: "cdk-menu-menubar-example", exportAs: ["cdkMenuMenubarExample"], ngImport: i0, template: "<div cdkMenuBar>\n  <!-- #docregion file-trigger -->\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"file\">File</button>\n  <!-- #enddocregion file-trigger -->\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"edit\">Edit</button>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"format\">Format</button>\n</div>\n\n<ng-template #file>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Share</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"new_doc\">\n      New <span>&#10148;</span>\n    </button>\n    <button class=\"example-menu-item\" cdkMenuItem>Open</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Make a Copy</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"download\">\n      Download <span>&#10148;</span>\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #edit>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Undo</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Redo</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n\n<ng-template #format >\n  <div class=\"example-menu\" cdkMenu>\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button cdkMenuItemCheckbox class=\"example-menu-item\" cdkMenuItemChecked>Bold</button>\n      <button cdkMenuItemCheckbox class=\"example-menu-item\">Italic</button>\n    </div>\n    <hr />\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button cdkMenuItemRadio class=\"example-menu-item\">Small</button>\n      <button cdkMenuItemRadio class=\"example-menu-item\" cdkMenuItemChecked>Normal</button>\n      <button cdkMenuItemRadio class=\"example-menu-item\">Big</button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #new_doc>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Document</button>\n    <button class=\"example-menu-item\" cdkMenuItem>From template</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Spreadsheet</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Presentation</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Form</button>\n  </div>\n</ng-template>\n\n<ng-template #download>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Microsoft Word</button>\n    <button class=\"example-menu-item\" cdkMenuItem>PDF</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Plain text</button>\n  </div>\n</ng-template>\n", styles: [".example-menu-bar-item {\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 34px;\n  line-height: 26px;\n  padding: 0 16px;\n}\n\n.example-menu-bar-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu hr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu .example-menu-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-menu .example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item > span {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  justify-content: flex-end;\n}\n\n.example-menu .example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu .example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-menu-bar-item[aria-expanded='true'],\n.example-menu-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208) !important;\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkMenuBar, selector: "[cdkMenuBar]", exportAs: ["cdkMenuBar"] }, { kind: "directive", type: i1.CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: i1.CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }, { kind: "directive", type: i1.CdkMenuItemRadio, selector: "[cdkMenuItemRadio]", exportAs: ["cdkMenuItemRadio"] }, { kind: "directive", type: i1.CdkMenuItemCheckbox, selector: "[cdkMenuItemCheckbox]", exportAs: ["cdkMenuItemCheckbox"] }, { kind: "directive", type: i1.CdkMenuTrigger, selector: "[cdkMenuTriggerFor]", inputs: ["cdkMenuTriggerFor", "cdkMenuPosition", "cdkMenuTriggerData"], outputs: ["cdkMenuOpened", "cdkMenuClosed"], exportAs: ["cdkMenuTriggerFor"] }, { kind: "directive", type: i1.CdkMenuGroup, selector: "[cdkMenuGroup]", exportAs: ["cdkMenuGroup"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: CdkMenuMenubarExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-menubar-example', exportAs: 'cdkMenuMenubarExample', template: "<div cdkMenuBar>\n  <!-- #docregion file-trigger -->\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"file\">File</button>\n  <!-- #enddocregion file-trigger -->\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"edit\">Edit</button>\n  <button class=\"example-menu-bar-item\" cdkMenuItem [cdkMenuTriggerFor]=\"format\">Format</button>\n</div>\n\n<ng-template #file>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Share</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"new_doc\">\n      New <span>&#10148;</span>\n    </button>\n    <button class=\"example-menu-item\" cdkMenuItem>Open</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Make a Copy</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem [cdkMenuTriggerFor]=\"download\">\n      Download <span>&#10148;</span>\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #edit>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Undo</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Redo</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n\n<ng-template #format >\n  <div class=\"example-menu\" cdkMenu>\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button cdkMenuItemCheckbox class=\"example-menu-item\" cdkMenuItemChecked>Bold</button>\n      <button cdkMenuItemCheckbox class=\"example-menu-item\">Italic</button>\n    </div>\n    <hr />\n    <div class=\"example-menu-group\" cdkMenuGroup>\n      <button cdkMenuItemRadio class=\"example-menu-item\">Small</button>\n      <button cdkMenuItemRadio class=\"example-menu-item\" cdkMenuItemChecked>Normal</button>\n      <button cdkMenuItemRadio class=\"example-menu-item\">Big</button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #new_doc>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Document</button>\n    <button class=\"example-menu-item\" cdkMenuItem>From template</button>\n    <hr />\n    <button class=\"example-menu-item\" cdkMenuItem>Spreadsheet</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Presentation</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Form</button>\n  </div>\n</ng-template>\n\n<ng-template #download>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Microsoft Word</button>\n    <button class=\"example-menu-item\" cdkMenuItem>PDF</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Plain text</button>\n  </div>\n</ng-template>\n", styles: [".example-menu-bar-item {\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 34px;\n  line-height: 26px;\n  padding: 0 16px;\n}\n\n.example-menu-bar-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu hr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu .example-menu-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-menu .example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item > span {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  justify-content: flex-end;\n}\n\n.example-menu .example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu .example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu .example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-menu-bar-item[aria-expanded='true'],\n.example-menu-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208) !important;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtbWVudWJhci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL21lbnUvY2RrLW1lbnUtbWVudWJhci9jZGstbWVudS1tZW51YmFyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1tZW51YmFyL2Nkay1tZW51LW1lbnViYXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4QyxtQ0FBbUM7QUFPbkMsTUFBTSxPQUFPLHFCQUFxQjs7dUhBQXJCLHFCQUFxQjsyR0FBckIscUJBQXFCLHFHQ1RsQyw2eUZBb0VBO2dHRDNEYSxxQkFBcUI7a0JBTmpDLFNBQVM7K0JBQ0UsMEJBQTBCLFlBQzFCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBHb29nbGUgRG9jcyBNZW51IEJhci4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1tZW51LW1lbnViYXItZXhhbXBsZScsXG4gIGV4cG9ydEFzOiAnY2RrTWVudU1lbnViYXJFeGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1tZW51LW1lbnViYXItZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbWVudS1tZW51YmFyLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENka01lbnVNZW51YmFyRXhhbXBsZSB7fVxuIiwiPGRpdiBjZGtNZW51QmFyPlxuICA8IS0tICNkb2NyZWdpb24gZmlsZS10cmlnZ2VyIC0tPlxuICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWJhci1pdGVtXCIgY2RrTWVudUl0ZW0gW2Nka01lbnVUcmlnZ2VyRm9yXT1cImZpbGVcIj5GaWxlPC9idXR0b24+XG4gIDwhLS0gI2VuZGRvY3JlZ2lvbiBmaWxlLXRyaWdnZXIgLS0+XG4gIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtYmFyLWl0ZW1cIiBjZGtNZW51SXRlbSBbY2RrTWVudVRyaWdnZXJGb3JdPVwiZWRpdFwiPkVkaXQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1iYXItaXRlbVwiIGNka01lbnVJdGVtIFtjZGtNZW51VHJpZ2dlckZvcl09XCJmb3JtYXRcIj5Gb3JtYXQ8L2J1dHRvbj5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI2ZpbGU+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51PlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlNoYXJlPC9idXR0b24+XG4gICAgPGhyIC8+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0gW2Nka01lbnVUcmlnZ2VyRm9yXT1cIm5ld19kb2NcIj5cbiAgICAgIE5ldyA8c3Bhbj4mIzEwMTQ4Ozwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5PcGVuPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+TWFrZSBhIENvcHk8L2J1dHRvbj5cbiAgICA8aHIgLz5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbSBbY2RrTWVudVRyaWdnZXJGb3JdPVwiZG93bmxvYWRcIj5cbiAgICAgIERvd25sb2FkIDxzcGFuPiYjMTAxNDg7PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjZWRpdD5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbWVudVwiIGNka01lbnU+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+VW5kbzwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlJlZG88L2J1dHRvbj5cbiAgICA8aHIgLz5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5DdXQ8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5Db3B5PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+UGFzdGU8L2J1dHRvbj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2Zvcm1hdCA+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnUtZ3JvdXBcIiBjZGtNZW51R3JvdXA+XG4gICAgICA8YnV0dG9uIGNka01lbnVJdGVtQ2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtQ2hlY2tlZD5Cb2xkPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNka01lbnVJdGVtQ2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiPkl0YWxpYzwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxociAvPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnUtZ3JvdXBcIiBjZGtNZW51R3JvdXA+XG4gICAgICA8YnV0dG9uIGNka01lbnVJdGVtUmFkaW8gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiPlNtYWxsPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNka01lbnVJdGVtUmFkaW8gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtQ2hlY2tlZD5Ob3JtYWw8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2RrTWVudUl0ZW1SYWRpbyBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCI+QmlnPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNuZXdfZG9jPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCIgY2RrTWVudT5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5Eb2N1bWVudDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkZyb20gdGVtcGxhdGU8L2J1dHRvbj5cbiAgICA8aHIgLz5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5TcHJlYWRzaGVldDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlByZXNlbnRhdGlvbjwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkZvcm08L2J1dHRvbj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2Rvd25sb2FkPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCIgY2RrTWVudT5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5NaWNyb3NvZnQgV29yZDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlBERjwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlBsYWluIHRleHQ8L2J1dHRvbj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19