import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
/**
 * @title Basic use of `<cdk-table>` (uses display flex)
 */
export class CdkTableFlexBasicExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
    }
}
CdkTableFlexBasicExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkTableFlexBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkTableFlexBasicExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: CdkTableFlexBasicExample, selector: "cdk-table-flex-basic-example", ngImport: i0, template: "<cdk-table [dataSource]=\"dataSource\">\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <cdk-header-cell *cdkHeaderCellDef> No. </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </cdk-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <cdk-header-cell *cdkHeaderCellDef> Name </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </cdk-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <cdk-header-cell *cdkHeaderCellDef> Weight </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </cdk-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <cdk-header-cell *cdkHeaderCellDef> Symbol </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </cdk-cell>\n  </ng-container>\n\n  <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row>\n  <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></cdk-row>\n</cdk-table>\n", styles: ["/**\n * Add basic flex styling so that the cells evenly space themselves in the row.\n */\ncdk-row, cdk-header-row, cdk-footer-row {\n  display: flex;\n}\n\ncdk-cell, cdk-header-cell, cdk-footer-cell {\n  flex: 1;\n}\n"], components: [{ type: i1.CdkTable, selector: "cdk-table, table[cdk-table]", inputs: ["trackBy", "dataSource", "multiTemplateDataRows", "fixedLayout"], outputs: ["contentChanged"], exportAs: ["cdkTable"] }, { type: i1.CdkHeaderRow, selector: "cdk-header-row, tr[cdk-header-row]" }, { type: i1.CdkRow, selector: "cdk-row, tr[cdk-row]" }], directives: [{ type: i1.CdkColumnDef, selector: "[cdkColumnDef]", inputs: ["sticky", "cdkColumnDef", "stickyEnd"] }, { type: i1.CdkHeaderCellDef, selector: "[cdkHeaderCellDef]" }, { type: i1.CdkHeaderCell, selector: "cdk-header-cell, th[cdk-header-cell]" }, { type: i1.CdkCellDef, selector: "[cdkCellDef]" }, { type: i1.CdkCell, selector: "cdk-cell, td[cdk-cell]" }, { type: i1.CdkHeaderRowDef, selector: "[cdkHeaderRowDef]", inputs: ["cdkHeaderRowDef", "cdkHeaderRowDefSticky"] }, { type: i1.CdkRowDef, selector: "[cdkRowDef]", inputs: ["cdkRowDefColumns", "cdkRowDefWhen"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkTableFlexBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-table-flex-basic-example', template: "<cdk-table [dataSource]=\"dataSource\">\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <cdk-header-cell *cdkHeaderCellDef> No. </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </cdk-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <cdk-header-cell *cdkHeaderCellDef> Name </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </cdk-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <cdk-header-cell *cdkHeaderCellDef> Weight </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </cdk-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <cdk-header-cell *cdkHeaderCellDef> Symbol </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </cdk-cell>\n  </ng-container>\n\n  <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row>\n  <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></cdk-row>\n</cdk-table>\n", styles: ["/**\n * Add basic flex styling so that the cells evenly space themselves in the row.\n */\ncdk-row, cdk-header-row, cdk-footer-row {\n  display: flex;\n}\n\ncdk-cell, cdk-header-cell, cdk-footer-cell {\n  flex: 1;\n}\n"] }]
        }] });
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /** Stream of data that is provided to the table. */
        this.data = new BehaviorSubject(ELEMENT_DATA);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        return this.data;
    }
    disconnect() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWZsZXgtYmFzaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay90YWJsZS9jZGstdGFibGUtZmxleC1iYXNpYy9jZGstdGFibGUtZmxleC1iYXNpYy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RhYmxlL2Nkay10YWJsZS1mbGV4LWJhc2ljL2Nkay10YWJsZS1mbGV4LWJhc2ljLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDOzs7QUFTakQsTUFBTSxZQUFZLEdBQXNCO0lBQ3RDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM1RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDekQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztDQUM1RCxDQUFDO0FBRUY7O0dBRUc7QUFNSCxNQUFNLE9BQU8sd0JBQXdCO0lBTHJDO1FBTUUscUJBQWdCLEdBQWEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RSxlQUFVLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0tBQ3RDOzs2SEFIWSx3QkFBd0I7aUhBQXhCLHdCQUF3QixvRUNoQ3JDLHFtQ0E0QkE7bUdESWEsd0JBQXdCO2tCQUxwQyxTQUFTOytCQUNFLDhCQUE4Qjs7QUFTMUM7Ozs7OztHQU1HO0FBQ0gsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFVBQTJCO0lBQWxFOztRQUNFLG9EQUFvRDtRQUNwRCxTQUFJLEdBQUcsSUFBSSxlQUFlLENBQW9CLFlBQVksQ0FBQyxDQUFDO0lBUTlELENBQUM7SUFOQyxpR0FBaUc7SUFDakcsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsVUFBVSxLQUFJLENBQUM7Q0FDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbiAgd2VpZ2h0OiBudW1iZXI7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgdXNlIG9mIGA8Y2RrLXRhYmxlPmAgKHVzZXMgZGlzcGxheSBmbGV4KVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdGFibGUtZmxleC1iYXNpYy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay10YWJsZS1mbGV4LWJhc2ljLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXRhYmxlLWZsZXgtYmFzaWMtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVGFibGVGbGV4QmFzaWNFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlID0gbmV3IEV4YW1wbGVEYXRhU291cmNlKCk7XG59XG5cbi8qKlxuICogRGF0YSBzb3VyY2UgdG8gcHJvdmlkZSB3aGF0IGRhdGEgc2hvdWxkIGJlIHJlbmRlcmVkIGluIHRoZSB0YWJsZS4gTm90ZSB0aGF0IHRoZSBkYXRhIHNvdXJjZVxuICogY2FuIHJldHJpZXZlIGl0cyBkYXRhIGluIGFueSB3YXkuIEluIHRoaXMgY2FzZSwgdGhlIGRhdGEgc291cmNlIGlzIHByb3ZpZGVkIGEgcmVmZXJlbmNlXG4gKiB0byBhIGNvbW1vbiBkYXRhIGJhc2UsIEV4YW1wbGVEYXRhYmFzZS4gSXQgaXMgbm90IHRoZSBkYXRhIHNvdXJjZSdzIHJlc3BvbnNpYmlsaXR5IHRvIG1hbmFnZVxuICogdGhlIHVuZGVybHlpbmcgZGF0YS4gSW5zdGVhZCwgaXQgb25seSBuZWVkcyB0byB0YWtlIHRoZSBkYXRhIGFuZCBzZW5kIHRoZSB0YWJsZSBleGFjdGx5IHdoYXRcbiAqIHNob3VsZCBiZSByZW5kZXJlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4YW1wbGVEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZTxQZXJpb2RpY0VsZW1lbnQ+IHtcbiAgLyoqIFN0cmVhbSBvZiBkYXRhIHRoYXQgaXMgcHJvdmlkZWQgdG8gdGhlIHRhYmxlLiAqL1xuICBkYXRhID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQZXJpb2RpY0VsZW1lbnRbXT4oRUxFTUVOVF9EQVRBKTtcblxuICAvKiogQ29ubmVjdCBmdW5jdGlvbiBjYWxsZWQgYnkgdGhlIHRhYmxlIHRvIHJldHJpZXZlIG9uZSBzdHJlYW0gY29udGFpbmluZyB0aGUgZGF0YSB0byByZW5kZXIuICovXG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxQZXJpb2RpY0VsZW1lbnRbXT4ge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBkaXNjb25uZWN0KCkge31cbn1cbiIsIjxjZGstdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiPlxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJwb3NpdGlvblwiPlxuICAgIDxjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IE5vLiA8L2Nkay1oZWFkZXItY2VsbD5cbiAgICA8Y2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQucG9zaXRpb259fSA8L2Nkay1jZWxsPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8Y2RrLWhlYWRlci1jZWxsICpjZGtIZWFkZXJDZWxsRGVmPiBOYW1lIDwvY2RrLWhlYWRlci1jZWxsPlxuICAgIDxjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5uYW1lfX0gPC9jZGstY2VsbD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDxjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IFdlaWdodCA8L2Nkay1oZWFkZXItY2VsbD5cbiAgICA8Y2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQud2VpZ2h0fX0gPC9jZGstY2VsbD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBTeW1ib2wgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cInN5bWJvbFwiPlxuICAgIDxjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IFN5bWJvbCA8L2Nkay1oZWFkZXItY2VsbD5cbiAgICA8Y2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC9jZGstY2VsbD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPGNkay1oZWFkZXItcm93ICpjZGtIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC9jZGstaGVhZGVyLXJvdz5cbiAgPGNkay1yb3cgKmNka1Jvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC9jZGstcm93PlxuPC9jZGstdGFibGU+XG4iXX0=