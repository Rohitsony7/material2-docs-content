import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i10 from '@angular/cdk/drag-drop';
import * as i11 from '@angular/material/autocomplete';
import * as i12 from '@angular/material/button';
import * as i13 from '@angular/material/chips';
import * as i14 from '@angular/material/icon';
import * as i15 from '@angular/material/form-field';
import * as i16 from '@angular/forms';
import * as i9 from '@angular/common';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipEditedEvent } from '@angular/material/chips';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { ThemePalette } from '@angular/material/core';

declare interface ChipColor {
    name: string;
    color: ThemePalette;
}

/**
 * @title Chips Autocomplete
 */
export declare class ChipsAutocompleteExample {
    separatorKeysCodes: number[];
    fruitCtrl: FormControl<string | null>;
    filteredFruits: Observable<string[]>;
    fruits: string[];
    allFruits: string[];
    fruitInput: ElementRef<HTMLInputElement>;
    constructor();
    add(event: MatChipInputEvent): void;
    remove(fruit: string): void;
    selected(event: MatAutocompleteSelectedEvent): void;
    private _filter;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsAutocompleteExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsAutocompleteExample, "chips-autocomplete-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Chips avatar
 * @description An avatar inside a chip
 */
export declare class ChipsAvatarExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsAvatarExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsAvatarExample, "chips-avatar-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Chips Drag and Drop
 */
export declare class ChipsDragDropExample {
    vegetables: Vegetable[];
    drop(event: CdkDragDrop<Vegetable[]>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsDragDropExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsDragDropExample, "chips-drag-drop-example", never, {}, {}, never, never, false, never>;
}

export declare class ChipsExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ChipsExamplesModule, [typeof i1.ChipsAutocompleteExample, typeof i2.ChipsDragDropExample, typeof i3.ChipsInputExample, typeof i4.ChipsOverviewExample, typeof i5.ChipsStackedExample, typeof i6.ChipsHarnessExample, typeof i7.ChipsFormControlExample, typeof i8.ChipsAvatarExample], [typeof i9.CommonModule, typeof i10.DragDropModule, typeof i11.MatAutocompleteModule, typeof i12.MatButtonModule, typeof i13.MatChipsModule, typeof i14.MatIconModule, typeof i15.MatFormFieldModule, typeof i16.ReactiveFormsModule], [typeof i1.ChipsAutocompleteExample, typeof i2.ChipsDragDropExample, typeof i3.ChipsInputExample, typeof i4.ChipsOverviewExample, typeof i5.ChipsStackedExample, typeof i6.ChipsHarnessExample, typeof i7.ChipsFormControlExample, typeof i8.ChipsAvatarExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ChipsExamplesModule>;
}

/**
 * @title Chips with form control
 */
export declare class ChipsFormControlExample {
    keywords: string[];
    formControl: FormControl<string[] | null>;
    removeKeyword(keyword: string): void;
    add(event: MatChipInputEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsFormControlExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsFormControlExample, "chips-form-control-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Testing with MatChipsHarness
 */
export declare class ChipsHarnessExample {
    isDisabled: boolean;
    remove: () => void;
    add: () => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsHarnessExample, "chips-harness-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Chips with input
 */
export declare class ChipsInputExample {
    addOnBlur: boolean;
    readonly separatorKeysCodes: readonly [13, 188];
    fruits: Fruit[];
    add(event: MatChipInputEvent): void;
    remove(fruit: Fruit): void;
    edit(fruit: Fruit, event: MatChipEditedEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsInputExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsInputExample, "chips-input-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Basic chips
 */
export declare class ChipsOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsOverviewExample, "chips-overview-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Stacked chips
 */
export declare class ChipsStackedExample {
    availableColors: ChipColor[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipsStackedExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipsStackedExample, "chips-stacked-example", never, {}, {}, never, never, false, never>;
}

declare interface Fruit {
    name: string;
}

declare namespace i1 {
    export {
        ChipsAutocompleteExample
    }
}

declare namespace i2 {
    export {
        Vegetable,
        ChipsDragDropExample
    }
}

declare namespace i3 {
    export {
        Fruit,
        ChipsInputExample
    }
}

declare namespace i4 {
    export {
        ChipsOverviewExample
    }
}

declare namespace i5 {
    export {
        ChipColor,
        ChipsStackedExample
    }
}

declare namespace i6 {
    export {
        ChipsHarnessExample
    }
}

declare namespace i7 {
    export {
        ChipsFormControlExample
    }
}

declare namespace i8 {
    export {
        ChipsAvatarExample
    }
}

declare interface Vegetable {
    name: string;
}

export { }
