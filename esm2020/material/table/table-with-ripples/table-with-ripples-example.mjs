import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/material/table";
const ELEMENT_DATA = [
    { name: 'Hydrogen' },
    { name: 'Helium' },
    { name: 'Lithium' },
    { name: 'Beryllium' },
    { name: 'Boron' },
    { name: 'Carbon' },
    { name: 'Nitrogen' },
    { name: 'Oxygen' },
    { name: 'Fluorine' },
    { name: 'Neon' },
];
/**
 * @title Tables with Material Design ripples.
 */
export class TableWithRipplesExample {
    constructor() {
        this.displayedColumns = ['name'];
        this.dataSource = ELEMENT_DATA;
    }
}
TableWithRipplesExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: TableWithRipplesExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TableWithRipplesExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-rc.0", type: TableWithRipplesExample, selector: "table-with-ripples-example", ngImport: i0, template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row matRipple *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n", dependencies: [{ kind: "directive", type: i1.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }, { kind: "component", type: i2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i2.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i2.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i2.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i2.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i2.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i2.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i2.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-rc.0", ngImport: i0, type: TableWithRipplesExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-with-ripples-example', template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row matRipple *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13aXRoLXJpcHBsZXMvdGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13aXRoLXJpcHBsZXMvdGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDLE1BQU0sWUFBWSxHQUFHO0lBQ25CLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQztJQUNsQixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDaEIsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDO0lBQ2pCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQztJQUNuQixFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7SUFDZixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDaEIsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO0lBQ2xCLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNoQixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7SUFDbEIsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO0NBQ2YsQ0FBQztBQUVGOztHQUVHO0FBS0gsTUFBTSxPQUFPLHVCQUF1QjtJQUpwQztRQUtFLHFCQUFnQixHQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsZUFBVSxHQUFHLFlBQVksQ0FBQztLQUMzQjs7eUhBSFksdUJBQXVCOzZHQUF2Qix1QkFBdUIsa0VDdEJwQyxtZEFTQTtnR0RhYSx1QkFBdUI7a0JBSm5DLFNBQVM7K0JBQ0UsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBFTEVNRU5UX0RBVEEgPSBbXG4gIHtuYW1lOiAnSHlkcm9nZW4nfSxcbiAge25hbWU6ICdIZWxpdW0nfSxcbiAge25hbWU6ICdMaXRoaXVtJ30sXG4gIHtuYW1lOiAnQmVyeWxsaXVtJ30sXG4gIHtuYW1lOiAnQm9yb24nfSxcbiAge25hbWU6ICdDYXJib24nfSxcbiAge25hbWU6ICdOaXRyb2dlbid9LFxuICB7bmFtZTogJ094eWdlbid9LFxuICB7bmFtZTogJ0ZsdW9yaW5lJ30sXG4gIHtuYW1lOiAnTmVvbid9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgVGFibGVzIHdpdGggTWF0ZXJpYWwgRGVzaWduIHJpcHBsZXMuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLXdpdGgtcmlwcGxlcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS13aXRoLXJpcHBsZXMtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVXaXRoUmlwcGxlc0V4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnbmFtZSddO1xuICBkYXRhU291cmNlID0gRUxFTUVOVF9EQVRBO1xufVxuIiwiPG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiPlxuICAgIDxtYXQtaGVhZGVyLWNlbGwgbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOYW1lIDwvbWF0LWhlYWRlci1jZWxsPlxuICAgIDxtYXQtY2VsbCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5uYW1lfX0gPC9tYXQtY2VsbD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC9tYXQtaGVhZGVyLXJvdz5cbiAgPG1hdC1yb3cgbWF0UmlwcGxlICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvbWF0LXJvdz5cbjwvbWF0LXRhYmxlPlxuIl19