import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/menu";
/**
 * @title Dialog launched from a menu
 */
class DialogFromMenuExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        // #docregion focus-restoration
        const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, { restoreFocus: false });
        // Manually restore focus to the menu trigger since the element that
        // opens the dialog won't be in the DOM any more when the dialog closes.
        dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
        // #enddocregion focus-restoration
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DialogFromMenuExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: DialogFromMenuExample, selector: "dialog-from-menu-example", viewQueries: [{ propertyName: "menuTrigger", first: true, predicate: ["menuTrigger"], descendants: true }], ngImport: i0, template: "<button mat-button [matMenuTriggerFor]=\"menu\" #menuTrigger>Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item (click)=\"openDialog()\">Open dialog</button>\n</mat-menu>\n", dependencies: [{ kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i3.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i3.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }] }); }
}
export { DialogFromMenuExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DialogFromMenuExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-from-menu-example', template: "<button mat-button [matMenuTriggerFor]=\"menu\" #menuTrigger>Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item (click)=\"openDialog()\">Open dialog</button>\n</mat-menu>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; }, propDecorators: { menuTrigger: [{
                type: ViewChild,
                args: ['menuTrigger']
            }] } });
class DialogFromMenuExampleDialog {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DialogFromMenuExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: DialogFromMenuExampleDialog, selector: "dialog-from-menu-dialog", ngImport: i0, template: "<mat-dialog-content>\n  This is a dialog\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Okay</button>\n</mat-dialog-actions>\n", dependencies: [{ kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }] }); }
}
export { DialogFromMenuExampleDialog };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DialogFromMenuExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-from-menu-dialog', template: "<mat-dialog-content>\n  This is a dialog\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Okay</button>\n</mat-dialog-actions>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1mcm9tLW1lbnUvZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1mcm9tLW1lbnUvZGlhbG9nLWZyb20tbWVudS1leGFtcGxlLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLWZyb20tbWVudS9kaWFsb2ctZnJvbS1tZW51LWV4YW1wbGUtZGlhbG9nLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFDdEQ7O0dBRUc7QUFDSCxNQUlhLHFCQUFxQjtJQUdoQyxZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUV4QyxVQUFVO1FBQ1IsK0JBQStCO1FBQy9CLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLEVBQUMsWUFBWSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7UUFFdkYsb0VBQW9FO1FBQ3BFLHdFQUF3RTtRQUN4RSxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNsRSxrQ0FBa0M7SUFDcEMsQ0FBQzs4R0FiVSxxQkFBcUI7a0dBQXJCLHFCQUFxQiw0S0NWbEMsZ01BSUE7O1NETWEscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBSmpDLFNBQVM7K0JBQ0UsMEJBQTBCO2dHQUlWLFdBQVc7c0JBQXBDLFNBQVM7dUJBQUMsYUFBYTs7QUFlMUIsTUFJYSwyQkFBMkI7OEdBQTNCLDJCQUEyQjtrR0FBM0IsMkJBQTJCLCtERTlCeEMscUtBTUE7O1NGd0JhLDJCQUEyQjsyRkFBM0IsMkJBQTJCO2tCQUp2QyxTQUFTOytCQUNFLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2d9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQge01hdE1lbnVUcmlnZ2VyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51Jztcbi8qKlxuICogQHRpdGxlIERpYWxvZyBsYXVuY2hlZCBmcm9tIGEgbWVudVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctZnJvbS1tZW51LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1mcm9tLW1lbnUtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRnJvbU1lbnVFeGFtcGxlIHtcbiAgQFZpZXdDaGlsZCgnbWVudVRyaWdnZXInKSBtZW51VHJpZ2dlcjogTWF0TWVudVRyaWdnZXI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgLy8gI2RvY3JlZ2lvbiBmb2N1cy1yZXN0b3JhdGlvblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nRnJvbU1lbnVFeGFtcGxlRGlhbG9nLCB7cmVzdG9yZUZvY3VzOiBmYWxzZX0pO1xuXG4gICAgLy8gTWFudWFsbHkgcmVzdG9yZSBmb2N1cyB0byB0aGUgbWVudSB0cmlnZ2VyIHNpbmNlIHRoZSBlbGVtZW50IHRoYXRcbiAgICAvLyBvcGVucyB0aGUgZGlhbG9nIHdvbid0IGJlIGluIHRoZSBET00gYW55IG1vcmUgd2hlbiB0aGUgZGlhbG9nIGNsb3Nlcy5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5tZW51VHJpZ2dlci5mb2N1cygpKTtcbiAgICAvLyAjZW5kZG9jcmVnaW9uIGZvY3VzLXJlc3RvcmF0aW9uXG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLWZyb20tbWVudS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1mcm9tLW1lbnUtZXhhbXBsZS1kaWFsb2cuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0Zyb21NZW51RXhhbXBsZURpYWxvZyB7fVxuIiwiPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCIgI21lbnVUcmlnZ2VyPk1lbnU8L2J1dHRvbj5cbjxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5PcGVuIGRpYWxvZzwvYnV0dG9uPlxuPC9tYXQtbWVudT5cbiIsIjxtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gIFRoaXMgaXMgYSBkaWFsb2dcbjwvbWF0LWRpYWxvZy1jb250ZW50PlxuPG1hdC1kaWFsb2ctYWN0aW9ucz5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdC1kaWFsb2ctY2xvc2U+T2theTwvYnV0dG9uPlxuPC9tYXQtZGlhbG9nLWFjdGlvbnM+XG4iXX0=