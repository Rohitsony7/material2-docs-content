import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';
import * as i0 from '@angular/core';
import * as i16 from '@angular/common';
import * as i17 from '@angular/forms';
import * as i18 from '@angular/material/checkbox';
import * as i19 from '@angular/material/input';
import * as i20 from '@angular/material/select';
import * as i21 from '@angular/material/form-field';
import { NgForm } from '@angular/forms';

declare interface Animal {
    name: string;
    sound: string;
}

declare interface Car {
    value: string;
    viewValue: string;
}

declare interface Car_2 {
    value: string;
    viewValue: string;
}

declare interface Car_3 {
    value: string;
    viewValue: string;
}

declare interface Food {
    value: string;
    viewValue: string;
}

declare interface Food_2 {
    value: string;
    viewValue: string;
}

declare interface Food_3 {
    value: string;
    viewValue: string;
}

declare interface Food_4 {
    value: string;
    viewValue: string;
}

declare namespace i1 {
    export {
        SelectCustomTriggerExample
    }
}

declare namespace i10 {
    export {
        SelectOptgroupExample
    }
}

declare namespace i11 {
    export {
        SelectOverviewExample
    }
}

declare namespace i12 {
    export {
        SelectPanelClassExample
    }
}

declare namespace i13 {
    export {
        SelectReactiveFormExample
    }
}

declare namespace i14 {
    export {
        SelectResetExample
    }
}

declare namespace i15 {
    export {
        SelectValueBindingExample
    }
}

declare namespace i2 {
    export {
        SelectDisabledExample
    }
}

declare namespace i3 {
    export {
        MyErrorStateMatcher,
        SelectErrorStateMatcherExample
    }
}

declare namespace i4 {
    export {
        SelectFormExample
    }
}

declare namespace i5 {
    export {
        SelectHarnessExample
    }
}

declare namespace i6 {
    export {
        SelectHintErrorExample
    }
}

declare namespace i7 {
    export {
        SelectInitialValueExample
    }
}

declare namespace i8 {
    export {
        SelectMultipleExample
    }
}

declare namespace i9 {
    export {
        SelectNoRippleExample
    }
}

/** Error when invalid control is dirty, touched, or submitted. */
declare class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
}

declare interface Pokemon {
    value: string;
    viewValue: string;
}

declare interface PokemonGroup {
    disabled?: boolean;
    name: string;
    pokemon: Pokemon[];
}

/** @title Select with custom trigger text */
export declare class SelectCustomTriggerExample {
    toppings: FormControl<string | null>;
    toppingList: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectCustomTriggerExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectCustomTriggerExample, "select-custom-trigger-example", never, {}, {}, never, never, false, never>;
}

/** @title Disabled select */
export declare class SelectDisabledExample {
    disableSelect: FormControl<boolean | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectDisabledExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectDisabledExample, "select-disabled-example", never, {}, {}, never, never, false, never>;
}

/** @title Select with a custom ErrorStateMatcher */
export declare class SelectErrorStateMatcherExample {
    selected: FormControl<string | null>;
    selectFormControl: FormControl<string | null>;
    nativeSelectFormControl: FormControl<string | null>;
    matcher: MyErrorStateMatcher;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectErrorStateMatcherExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectErrorStateMatcherExample, "select-error-state-matcher-example", never, {}, {}, never, never, false, never>;
}

export declare class SelectExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SelectExamplesModule, [typeof i1.SelectCustomTriggerExample, typeof i2.SelectDisabledExample, typeof i3.SelectErrorStateMatcherExample, typeof i4.SelectFormExample, typeof i5.SelectHarnessExample, typeof i6.SelectHintErrorExample, typeof i7.SelectInitialValueExample, typeof i8.SelectMultipleExample, typeof i9.SelectNoRippleExample, typeof i10.SelectOptgroupExample, typeof i11.SelectOverviewExample, typeof i12.SelectPanelClassExample, typeof i13.SelectReactiveFormExample, typeof i14.SelectResetExample, typeof i15.SelectValueBindingExample], [typeof i16.CommonModule, typeof i17.FormsModule, typeof i18.MatCheckboxModule, typeof i19.MatInputModule, typeof i20.MatSelectModule, typeof i17.ReactiveFormsModule, typeof i21.MatFormFieldModule], [typeof i1.SelectCustomTriggerExample, typeof i2.SelectDisabledExample, typeof i3.SelectErrorStateMatcherExample, typeof i4.SelectFormExample, typeof i5.SelectHarnessExample, typeof i6.SelectHintErrorExample, typeof i7.SelectInitialValueExample, typeof i8.SelectMultipleExample, typeof i9.SelectNoRippleExample, typeof i10.SelectOptgroupExample, typeof i11.SelectOverviewExample, typeof i12.SelectPanelClassExample, typeof i13.SelectReactiveFormExample, typeof i14.SelectResetExample, typeof i15.SelectValueBindingExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SelectExamplesModule>;
}

/**
 * @title Select in a form
 */
export declare class SelectFormExample {
    selectedValue: string;
    selectedCar: string;
    foods: Food[];
    cars: Car[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectFormExample, "select-form-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Testing with MatSelectHarness
 */
export declare class SelectHarnessExample {
    foods: {
        value: string;
        viewValue: string;
    }[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectHarnessExample, "select-harness-example", never, {}, {}, never, never, false, never>;
}

/** @title Select with form field features */
export declare class SelectHintErrorExample {
    animalControl: FormControl<Animal | null>;
    selectFormControl: FormControl<string | null>;
    animals: Animal[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectHintErrorExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectHintErrorExample, "select-hint-error-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Basic select with initial value and no form
 */
export declare class SelectInitialValueExample {
    foods: Food_2[];
    cars: Car_2[];
    selectedFood: string;
    selectedCar: string;
    selectCar(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectInitialValueExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectInitialValueExample, "select-initial-value-example", never, {}, {}, never, never, false, never>;
}

/** @title Select with multiple selection */
export declare class SelectMultipleExample {
    toppings: FormControl<string | null>;
    toppingList: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectMultipleExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectMultipleExample, "select-multiple-example", never, {}, {}, never, never, false, never>;
}

/** @title Select with no option ripple */
export declare class SelectNoRippleExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectNoRippleExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectNoRippleExample, "select-no-ripple-example", never, {}, {}, never, never, false, never>;
}

/** @title Select with option groups */
export declare class SelectOptgroupExample {
    pokemonControl: FormControl<string | null>;
    pokemonGroups: PokemonGroup[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectOptgroupExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectOptgroupExample, "select-optgroup-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Basic select
 */
export declare class SelectOverviewExample {
    foods: Food_3[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectOverviewExample, "select-overview-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Select with custom panel styling
 */
export declare class SelectPanelClassExample {
    panelColor: FormControl<string | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectPanelClassExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectPanelClassExample, "select-panel-class-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Select in a reactive form
 */
export declare class SelectReactiveFormExample {
    foods: Food_4[];
    cars: Car_3[];
    foodControl: FormControl<string | null>;
    carControl: FormControl<string | null>;
    form: FormGroup<{
        food: FormControl<string | null>;
        car: FormControl<string | null>;
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectReactiveFormExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectReactiveFormExample, "select-reactive-form-example", never, {}, {}, never, never, false, never>;
}

/** @title Select with reset option */
export declare class SelectResetExample {
    states: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectResetExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectResetExample, "select-reset-example", never, {}, {}, never, never, false, never>;
}

/** @title Select with 2-way value binding */
export declare class SelectValueBindingExample {
    selected: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectValueBindingExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectValueBindingExample, "select-value-binding-example", never, {}, {}, never, never, false, never>;
}

export { }
