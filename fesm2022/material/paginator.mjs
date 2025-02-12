import * as i6 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, Injectable, NgModule } from '@angular/core';
import * as i5 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1$1 from '@angular/material/paginator';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import * as i2 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4 from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Subject } from 'rxjs';
import { MatCardModule } from '@angular/material/card';

/**
 * @title Configurable paginator
 */
class PaginatorConfigurableExample {
    constructor() {
        this.length = 50;
        this.pageSize = 10;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25];
        this.hidePageSize = false;
        this.showPageSizeOptions = true;
        this.showFirstLastButtons = true;
        this.disabled = false;
    }
    handlePageEvent(e) {
        this.pageEvent = e;
        this.length = e.length;
        this.pageSize = e.pageSize;
        this.pageIndex = e.pageIndex;
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: PaginatorConfigurableExample, selector: "paginator-configurable-example", ngImport: i0, template: "<div class=\"demo-options\">\n  <mat-form-field>\n    <mat-label>Length</mat-label>\n    <input matInput placeholder=\"Length\" type=\"number\" [(ngModel)]=\"length\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Size</mat-label>\n    <input matInput placeholder=\"Page Size\" type=\"number\" [(ngModel)]=\"pageSize\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Index</mat-label>\n    <input matInput placeholder=\"Page Index\" type=\"number\" [(ngModel)]=\"pageIndex\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Size Options</mat-label>\n    <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"\n           [ngModelOptions]=\"{updateOn: 'blur'}\" placeholder=\"Ex. 10,25,50\">\n  </mat-form-field>\n\n  <div class=\"demo-toggles\">\n    <mat-slide-toggle [(ngModel)]=\"hidePageSize\">Hide page size</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"showPageSizeOptions\">Show multiple page size options</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"showFirstLastButtons\">Show first/last buttons</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"disabled\">Disabled</mat-slide-toggle>\n  </div>\n</div>\n\n<mat-paginator #paginator\n               class=\"demo-paginator\"\n               (page)=\"handlePageEvent($event)\"\n               [length]=\"length\"\n               [pageSize]=\"pageSize\"\n               [disabled]=\"disabled\"\n               [showFirstLastButtons]=\"showFirstLastButtons\"\n               [pageSizeOptions]=\"showPageSizeOptions ? pageSizeOptions : []\"\n               [hidePageSize]=\"hidePageSize\"\n               [pageIndex]=\"pageIndex\"\n               aria-label=\"Select page\">\n</mat-paginator>\n\n<div class=\"demo-data\">\n  <div> Output event: {{(pageEvent | json) || 'No events dispatched yet'}} </div>\n  <div> getNumberOfPages: {{paginator.getNumberOfPages()}} </div>\n</div>\n", styles: [".demo-toggles {\n  display: flex;\n  flex-direction: column;\n}\n\n.demo-toggles * {\n  margin-bottom: 16px;\n}\n\n.demo-options {\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n}\n\n.demo-data * {\n  margin: 16px 0;\n}\n\n.demo-paginator {\n  width: 600px;\n}\n"], dependencies: [{ kind: "directive", type: i1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "component", type: i1$1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }, { kind: "component", type: i4.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "pipe", type: i6.JsonPipe, name: "json" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-configurable-example', template: "<div class=\"demo-options\">\n  <mat-form-field>\n    <mat-label>Length</mat-label>\n    <input matInput placeholder=\"Length\" type=\"number\" [(ngModel)]=\"length\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Size</mat-label>\n    <input matInput placeholder=\"Page Size\" type=\"number\" [(ngModel)]=\"pageSize\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Index</mat-label>\n    <input matInput placeholder=\"Page Index\" type=\"number\" [(ngModel)]=\"pageIndex\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Size Options</mat-label>\n    <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"\n           [ngModelOptions]=\"{updateOn: 'blur'}\" placeholder=\"Ex. 10,25,50\">\n  </mat-form-field>\n\n  <div class=\"demo-toggles\">\n    <mat-slide-toggle [(ngModel)]=\"hidePageSize\">Hide page size</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"showPageSizeOptions\">Show multiple page size options</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"showFirstLastButtons\">Show first/last buttons</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"disabled\">Disabled</mat-slide-toggle>\n  </div>\n</div>\n\n<mat-paginator #paginator\n               class=\"demo-paginator\"\n               (page)=\"handlePageEvent($event)\"\n               [length]=\"length\"\n               [pageSize]=\"pageSize\"\n               [disabled]=\"disabled\"\n               [showFirstLastButtons]=\"showFirstLastButtons\"\n               [pageSizeOptions]=\"showPageSizeOptions ? pageSizeOptions : []\"\n               [hidePageSize]=\"hidePageSize\"\n               [pageIndex]=\"pageIndex\"\n               aria-label=\"Select page\">\n</mat-paginator>\n\n<div class=\"demo-data\">\n  <div> Output event: {{(pageEvent | json) || 'No events dispatched yet'}} </div>\n  <div> getNumberOfPages: {{paginator.getNumberOfPages()}} </div>\n</div>\n", styles: [".demo-toggles {\n  display: flex;\n  flex-direction: column;\n}\n\n.demo-toggles * {\n  margin-bottom: 16px;\n}\n\n.demo-options {\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n}\n\n.demo-data * {\n  margin: 16px 0;\n}\n\n.demo-paginator {\n  width: 600px;\n}\n"] }]
        }] });

/**
 * @title Paginator
 */
class PaginatorOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: PaginatorOverviewExample, selector: "paginator-overview-example", ngImport: i0, template: "<mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\n              aria-label=\"Select page\">\n</mat-paginator>\n", dependencies: [{ kind: "component", type: i1$1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-overview-example', template: "<mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\n              aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });

/**
 * @title Testing with MatPaginatorHarness
 */
class PaginatorHarnessExample {
    constructor() {
        this.length = 500;
        this.pageSize = 10;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25];
        this.showFirstLastButtons = true;
    }
    handlePageEvent(event) {
        this.length = event.length;
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: PaginatorHarnessExample, selector: "paginator-harness-example", ngImport: i0, template: "<mat-paginator\n    (page)=\"handlePageEvent($event)\"\n    [length]=\"length\"\n    [pageSize]=\"pageSize\"\n    [showFirstLastButtons]=\"showFirstLastButtons\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    [pageIndex]=\"pageIndex\"\n    aria-label=\"Select page\">\n</mat-paginator>\n", dependencies: [{ kind: "component", type: i1$1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-harness-example', template: "<mat-paginator\n    (page)=\"handlePageEvent($event)\"\n    [length]=\"length\"\n    [pageSize]=\"pageSize\"\n    [showFirstLastButtons]=\"showFirstLastButtons\"\n    [pageSizeOptions]=\"pageSizeOptions\"\n    [pageIndex]=\"pageIndex\"\n    aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });

class MyCustomPaginatorIntl {
    constructor() {
        this.changes = new Subject();
        // For internationalization, the `$localize` function from
        // the `@angular/localize` package can be used.
        this.firstPageLabel = $localize `First page`;
        this.itemsPerPageLabel = $localize `Items per page:`;
        this.lastPageLabel = $localize `Last page`;
        // You can set labels to an arbitrary string too, or dynamically compute
        // it through other third-party internationalization libraries.
        this.nextPageLabel = 'Next page';
        this.previousPageLabel = 'Previous page';
    }
    getRangeLabel(page, pageSize, length) {
        if (length === 0) {
            return $localize `Page 1 of 1`;
        }
        const amountPages = Math.ceil(length / pageSize);
        return $localize `Page ${page + 1} of ${amountPages}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: MyCustomPaginatorIntl, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: MyCustomPaginatorIntl }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: MyCustomPaginatorIntl, decorators: [{
            type: Injectable
        }] });
/**
 * @title Paginator internationalization
 */
class PaginatorIntlExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorIntlExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: PaginatorIntlExample, selector: "paginator-intl-example", ngImport: i0, template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\n</mat-paginator>\n", dependencies: [{ kind: "component", type: i1$1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorIntlExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-intl-example', template: "<mat-paginator [length]=\"200\" [pageSizeOptions]=\"[10, 50, 100]\" aria-label=\"Select page\">\n</mat-paginator>\n" }]
        }] });
class PaginatorIntlExampleModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorIntlExampleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0", ngImport: i0, type: PaginatorIntlExampleModule, declarations: [PaginatorIntlExample], imports: [MatPaginatorModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorIntlExampleModule, providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }], imports: [MatPaginatorModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorIntlExampleModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatPaginatorModule],
                    declarations: [PaginatorIntlExample],
                    providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
                }]
        }] });

const EXAMPLES = [
    PaginatorConfigurableExample,
    PaginatorHarnessExample,
    // PaginatorIntlExample is imported through it's own example module.
    PaginatorOverviewExample,
];
class PaginatorExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0", ngImport: i0, type: PaginatorExamplesModule, declarations: [PaginatorConfigurableExample,
            PaginatorHarnessExample,
            // PaginatorIntlExample is imported through it's own example module.
            PaginatorOverviewExample], imports: [CommonModule,
            MatInputModule,
            MatPaginatorModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatSlideToggleModule,
            PaginatorIntlExampleModule,
            FormsModule], exports: [PaginatorConfigurableExample,
            PaginatorHarnessExample,
            // PaginatorIntlExample is imported through it's own example module.
            PaginatorOverviewExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorExamplesModule, imports: [CommonModule,
            MatInputModule,
            MatPaginatorModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatSlideToggleModule,
            PaginatorIntlExampleModule,
            FormsModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PaginatorExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatInputModule,
                        MatPaginatorModule,
                        MatCardModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSlideToggleModule,
                        PaginatorIntlExampleModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { PaginatorConfigurableExample, PaginatorExamplesModule, PaginatorHarnessExample, PaginatorIntlExample, PaginatorOverviewExample };
//# sourceMappingURL=paginator.mjs.map
