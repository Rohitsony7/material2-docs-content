import * as i0 from '@angular/core';
import * as i10 from '@angular/material/dialog';
import * as i11 from '@angular/material/input';
import * as i12 from '@angular/material/menu';
import * as i13 from '@angular/forms';
import * as i8 from '@angular/common';
import * as i9 from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { TemplateRef } from '@angular/core';

/**
 * @title Dialog Animations
 */
export declare class DialogAnimationsExample {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogAnimationsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogAnimationsExample, "dialog-animations-example", never, {}, {}, never, never, false, never>;
}

export declare class DialogAnimationsExampleDialog {
    dialogRef: MatDialogRef<DialogAnimationsExampleDialog>;
    constructor(dialogRef: MatDialogRef<DialogAnimationsExampleDialog>);
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogAnimationsExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogAnimationsExampleDialog, "dialog-animations-example-dialog", never, {}, {}, never, never, false, never>;
}

/**
 * @title Dialog with header, scrollable content and actions
 */
export declare class DialogContentExample {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogContentExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogContentExample, "dialog-content-example", never, {}, {}, never, never, false, never>;
}

export declare class DialogContentExampleDialog {
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogContentExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogContentExampleDialog, "dialog-content-example-dialog", never, {}, {}, never, never, false, never>;
}

declare interface DialogData {
    animal: 'panda' | 'unicorn' | 'lion';
}

declare interface DialogData_2 {
    animal: string;
    name: string;
}

/**
 * @title Injecting data when opening a dialog
 */
export declare class DialogDataExample {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogDataExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogDataExample, "dialog-data-example", never, {}, {}, never, never, false, never>;
}

export declare class DialogDataExampleDialog {
    data: DialogData;
    constructor(data: DialogData);
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogDataExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogDataExampleDialog, "dialog-data-example-dialog", never, {}, {}, never, never, false, never>;
}

/**
 * @title Dialog elements
 */
export declare class DialogElementsExample {
    dialog: MatDialog;
    constructor(dialog: MatDialog);
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogElementsExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogElementsExample, "dialog-elements-example", never, {}, {}, never, never, false, never>;
}

export declare class DialogElementsExampleDialog {
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogElementsExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogElementsExampleDialog, "dialog-elements-example-dialog", never, {}, {}, never, never, false, never>;
}

export declare class DialogExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<DialogExamplesModule, [typeof i1.DialogContentExample, typeof i1.DialogContentExampleDialog, typeof i2.DialogDataExample, typeof i2.DialogDataExampleDialog, typeof i3.DialogElementsExample, typeof i3.DialogElementsExampleDialog, typeof i4.DialogFromMenuExample, typeof i4.DialogFromMenuExampleDialog, typeof i5.DialogHarnessExample, typeof i6.DialogOverviewExample, typeof i6.DialogOverviewExampleDialog, typeof i7.DialogAnimationsExample, typeof i7.DialogAnimationsExampleDialog], [typeof i8.CommonModule, typeof i9.MatButtonModule, typeof i10.MatDialogModule, typeof i11.MatInputModule, typeof i12.MatMenuModule, typeof i13.FormsModule], [typeof i1.DialogContentExample, typeof i1.DialogContentExampleDialog, typeof i2.DialogDataExample, typeof i2.DialogDataExampleDialog, typeof i3.DialogElementsExample, typeof i3.DialogElementsExampleDialog, typeof i4.DialogFromMenuExample, typeof i4.DialogFromMenuExampleDialog, typeof i5.DialogHarnessExample, typeof i6.DialogOverviewExample, typeof i6.DialogOverviewExampleDialog, typeof i7.DialogAnimationsExample, typeof i7.DialogAnimationsExampleDialog]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<DialogExamplesModule>;
}

/**
 * @title Dialog launched from a menu
 */
export declare class DialogFromMenuExample {
    dialog: MatDialog;
    menuTrigger: MatMenuTrigger;
    constructor(dialog: MatDialog);
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogFromMenuExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogFromMenuExample, "dialog-from-menu-example", never, {}, {}, never, never, false, never>;
}

export declare class DialogFromMenuExampleDialog {
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogFromMenuExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogFromMenuExampleDialog, "dialog-from-menu-dialog", never, {}, {}, never, never, false, never>;
}

/**
 * @title Testing with MatDialogHarness
 */
export declare class DialogHarnessExample {
    readonly dialog: MatDialog;
    dialogTemplate: TemplateRef<any>;
    constructor(dialog: MatDialog);
    open(config?: MatDialogConfig): MatDialogRef<any, any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogHarnessExample, "dialog-harness-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Dialog Overview
 */
export declare class DialogOverviewExample {
    dialog: MatDialog;
    animal: string;
    name: string;
    constructor(dialog: MatDialog);
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogOverviewExample, "dialog-overview-example", never, {}, {}, never, never, false, never>;
}

export declare class DialogOverviewExampleDialog {
    dialogRef: MatDialogRef<DialogOverviewExampleDialog>;
    data: DialogData_2;
    constructor(dialogRef: MatDialogRef<DialogOverviewExampleDialog>, data: DialogData_2);
    onNoClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogOverviewExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DialogOverviewExampleDialog, "dialog-overview-example-dialog", never, {}, {}, never, never, false, never>;
}

declare namespace i1 {
    export {
        DialogContentExample,
        DialogContentExampleDialog
    }
}

declare namespace i2 {
    export {
        DialogData,
        DialogDataExample,
        DialogDataExampleDialog
    }
}

declare namespace i3 {
    export {
        DialogElementsExample,
        DialogElementsExampleDialog
    }
}

declare namespace i4 {
    export {
        DialogFromMenuExample,
        DialogFromMenuExampleDialog
    }
}

declare namespace i5 {
    export {
        DialogHarnessExample
    }
}

declare namespace i6 {
    export {
        DialogData_2 as DialogData,
        DialogOverviewExample,
        DialogOverviewExampleDialog
    }
}

declare namespace i7 {
    export {
        DialogAnimationsExample,
        DialogAnimationsExampleDialog
    }
}

export { }
