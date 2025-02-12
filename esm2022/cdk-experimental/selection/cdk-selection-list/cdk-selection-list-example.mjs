import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/selection";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/checkbox";
/**
 * @title CDK Selection on a simple list.
 */
class CdkSelectionListExample {
    constructor() {
        this.data = ELEMENT_NAMES;
        this.selected1 = [];
        this.selected2 = [];
        this.selected3 = [];
        this.selected4 = [];
    }
    getCurrentSelected(event) {
        return event.after.map(select => select.value);
    }
    trackByFn(index) {
        return index;
    }
    changeElementName() {
        this.data = ELEMENT_SYMBOLS;
    }
    reset() {
        this.data = ELEMENT_NAMES;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkSelectionListExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: CdkSelectionListExample, selector: "cdk-selection-list-example", ngImport: i0, template: "<h3><code>native input</code></h3>\nSelected: {{selected1}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected1 = getCurrentSelected($event)\">\n  <input type=\"checkbox\" cdkSelectAll #allToggler=\"cdkSelectAll\"\n      [checked]=\"allToggler.checked | async\"\n      [indeterminate]=\"allToggler.indeterminate | async\"\n      (click)=\"allToggler.toggle($event)\">\n  <li *ngFor=\"let item of data\">\n    <input type=\"checkbox\" cdkSelectionToggle #toggler=\"cdkSelectionToggle\" [cdkSelectionToggleValue]=\"item\"\n      [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>mat-checkbox</code></h3>\nSelected: {{selected2}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected2 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle1=\"cdkSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>Single select with mat-checkbox</code></h3>\nSelected: {{selected3}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"false\" (cdkSelectionChange)=\"selected3 = getCurrentSelected($event)\">\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>with trackBy</code></h3>\nSelected: {{selected4}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (cdkSelectionChange)=\"selected4 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle2=\"cdkSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data; index as i; trackBy: trackByFn\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\" [cdkSelectionToggleIndex]=\"i\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\n<button (click)=\"reset()\">reset</button>\n", dependencies: [{ kind: "directive", type: i1.CdkSelection, selector: "[cdkSelection]", inputs: ["dataSource", "trackBy", "cdkSelectionMultiple"], outputs: ["cdkSelectionChange"], exportAs: ["cdkSelection"] }, { kind: "directive", type: i1.CdkSelectionToggle, selector: "[cdkSelectionToggle]", inputs: ["cdkSelectionToggleValue", "cdkSelectionToggleIndex"], exportAs: ["cdkSelectionToggle"] }, { kind: "directive", type: i1.CdkSelectAll, selector: "[cdkSelectAll]", exportAs: ["cdkSelectAll"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i3.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }] }); }
}
export { CdkSelectionListExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkSelectionListExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-selection-list-example', template: "<h3><code>native input</code></h3>\nSelected: {{selected1}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected1 = getCurrentSelected($event)\">\n  <input type=\"checkbox\" cdkSelectAll #allToggler=\"cdkSelectAll\"\n      [checked]=\"allToggler.checked | async\"\n      [indeterminate]=\"allToggler.indeterminate | async\"\n      (click)=\"allToggler.toggle($event)\">\n  <li *ngFor=\"let item of data\">\n    <input type=\"checkbox\" cdkSelectionToggle #toggler=\"cdkSelectionToggle\" [cdkSelectionToggleValue]=\"item\"\n      [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>mat-checkbox</code></h3>\nSelected: {{selected2}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selected2 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle1=\"cdkSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>Single select with mat-checkbox</code></h3>\nSelected: {{selected3}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"false\" (cdkSelectionChange)=\"selected3 = getCurrentSelected($event)\">\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>with trackBy</code></h3>\nSelected: {{selected4}}\n<ul cdkSelection [dataSource]=\"data\" [cdkSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (cdkSelectionChange)=\"selected4 = getCurrentSelected($event)\">\n  <mat-checkbox cdkSelectAll #toggle2=\"cdkSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data; index as i; trackBy: trackByFn\">\n    <mat-checkbox cdkSelectionToggle [cdkSelectionToggleValue]=\"item\" [cdkSelectionToggleIndex]=\"i\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\n<button (click)=\"reset()\">reset</button>\n" }]
        }] });
const ELEMENT_NAMES = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium',
    'Boron',
    'Carbon',
    'Nitrogen',
    'Oxygen',
    'Fluorine',
    'Neon',
    'Sodium',
    'Magnesium',
    'Aluminum',
    'Silicon',
    'Phosphorus',
    'Sulfur',
    'Chlorine',
    'Argon',
    'Potassium',
    'Calcium',
];
const ELEMENT_SYMBOLS = [
    'H',
    'He',
    'Li',
    'Be',
    'B',
    'C',
    'N',
    'O',
    'F',
    'Ne',
    'Na',
    'Mg',
    'Al',
    'Si',
    'P',
    'S',
    'Cl',
    'Ar',
    'K',
    'Ca',
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9jZGstc2VsZWN0aW9uLWxpc3QvY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9jZGstc2VsZWN0aW9uLWxpc3QvY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qzs7R0FFRztBQUNILE1BSWEsdUJBQXVCO0lBSnBDO1FBS0UsU0FBSSxHQUFHLGFBQWEsQ0FBQztRQUNyQixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQWEsRUFBRSxDQUFDO0tBaUIxQjtJQWZDLGtCQUFrQixDQUFDLEtBQThCO1FBQy9DLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs4R0FyQlUsdUJBQXVCO2tHQUF2Qix1QkFBdUIsa0VDVnBDLHNzRUE2Q0E7O1NEbkNhLHVCQUF1QjsyRkFBdkIsdUJBQXVCO2tCQUpuQyxTQUFTOytCQUNFLDRCQUE0Qjs7QUEyQnhDLE1BQU0sYUFBYSxHQUFHO0lBQ3BCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLE1BQU07SUFDTixRQUFRO0lBQ1IsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLFFBQVE7SUFDUixVQUFVO0lBQ1YsT0FBTztJQUNQLFdBQVc7SUFDWCxTQUFTO0NBQ1YsQ0FBQztBQUVGLE1BQU0sZUFBZSxHQUFHO0lBQ3RCLEdBQUc7SUFDSCxJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osR0FBRztJQUNILEdBQUc7SUFDSCxJQUFJO0lBQ0osSUFBSTtJQUNKLEdBQUc7SUFDSCxJQUFJO0NBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VsZWN0aW9uQ2hhbmdlfSBmcm9tICdAYW5ndWxhci9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbic7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIENESyBTZWxlY3Rpb24gb24gYSBzaW1wbGUgbGlzdC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXNlbGVjdGlvbi1saXN0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1zZWxlY3Rpb24tbGlzdC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtTZWxlY3Rpb25MaXN0RXhhbXBsZSB7XG4gIGRhdGEgPSBFTEVNRU5UX05BTUVTO1xuICBzZWxlY3RlZDE6IHN0cmluZ1tdID0gW107XG4gIHNlbGVjdGVkMjogc3RyaW5nW10gPSBbXTtcbiAgc2VsZWN0ZWQzOiBzdHJpbmdbXSA9IFtdO1xuICBzZWxlY3RlZDQ6IHN0cmluZ1tdID0gW107XG5cbiAgZ2V0Q3VycmVudFNlbGVjdGVkKGV2ZW50OiBTZWxlY3Rpb25DaGFuZ2U8c3RyaW5nPikge1xuICAgIHJldHVybiBldmVudC5hZnRlci5tYXAoc2VsZWN0ID0+IHNlbGVjdC52YWx1ZSk7XG4gIH1cblxuICB0cmFja0J5Rm4oaW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGNoYW5nZUVsZW1lbnROYW1lKCkge1xuICAgIHRoaXMuZGF0YSA9IEVMRU1FTlRfU1lNQk9MUztcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZGF0YSA9IEVMRU1FTlRfTkFNRVM7XG4gIH1cbn1cblxuY29uc3QgRUxFTUVOVF9OQU1FUyA9IFtcbiAgJ0h5ZHJvZ2VuJyxcbiAgJ0hlbGl1bScsXG4gICdMaXRoaXVtJyxcbiAgJ0JlcnlsbGl1bScsXG4gICdCb3JvbicsXG4gICdDYXJib24nLFxuICAnTml0cm9nZW4nLFxuICAnT3h5Z2VuJyxcbiAgJ0ZsdW9yaW5lJyxcbiAgJ05lb24nLFxuICAnU29kaXVtJyxcbiAgJ01hZ25lc2l1bScsXG4gICdBbHVtaW51bScsXG4gICdTaWxpY29uJyxcbiAgJ1Bob3NwaG9ydXMnLFxuICAnU3VsZnVyJyxcbiAgJ0NobG9yaW5lJyxcbiAgJ0FyZ29uJyxcbiAgJ1BvdGFzc2l1bScsXG4gICdDYWxjaXVtJyxcbl07XG5cbmNvbnN0IEVMRU1FTlRfU1lNQk9MUyA9IFtcbiAgJ0gnLFxuICAnSGUnLFxuICAnTGknLFxuICAnQmUnLFxuICAnQicsXG4gICdDJyxcbiAgJ04nLFxuICAnTycsXG4gICdGJyxcbiAgJ05lJyxcbiAgJ05hJyxcbiAgJ01nJyxcbiAgJ0FsJyxcbiAgJ1NpJyxcbiAgJ1AnLFxuICAnUycsXG4gICdDbCcsXG4gICdBcicsXG4gICdLJyxcbiAgJ0NhJyxcbl07XG4iLCI8aDM+PGNvZGU+bmF0aXZlIGlucHV0PC9jb2RlPjwvaDM+XG5TZWxlY3RlZDoge3tzZWxlY3RlZDF9fVxuPHVsIGNka1NlbGVjdGlvbiBbZGF0YVNvdXJjZV09XCJkYXRhXCIgW2Nka1NlbGVjdGlvbk11bHRpcGxlXT1cInRydWVcIiAoY2RrU2VsZWN0aW9uQ2hhbmdlKT1cInNlbGVjdGVkMSA9IGdldEN1cnJlbnRTZWxlY3RlZCgkZXZlbnQpXCI+XG4gIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjZGtTZWxlY3RBbGwgI2FsbFRvZ2dsZXI9XCJjZGtTZWxlY3RBbGxcIlxuICAgICAgW2NoZWNrZWRdPVwiYWxsVG9nZ2xlci5jaGVja2VkIHwgYXN5bmNcIlxuICAgICAgW2luZGV0ZXJtaW5hdGVdPVwiYWxsVG9nZ2xlci5pbmRldGVybWluYXRlIHwgYXN5bmNcIlxuICAgICAgKGNsaWNrKT1cImFsbFRvZ2dsZXIudG9nZ2xlKCRldmVudClcIj5cbiAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFcIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2RrU2VsZWN0aW9uVG9nZ2xlICN0b2dnbGVyPVwiY2RrU2VsZWN0aW9uVG9nZ2xlXCIgW2Nka1NlbGVjdGlvblRvZ2dsZVZhbHVlXT1cIml0ZW1cIlxuICAgICAgW2NoZWNrZWRdPVwidG9nZ2xlci5jaGVja2VkIHwgYXN5bmNcIiAoY2xpY2spPVwidG9nZ2xlci50b2dnbGUoKVwiPlxuICAgIHt7aXRlbX19XG4gIDwvbGk+XG48L3VsPlxuXG48aDM+PGNvZGU+bWF0LWNoZWNrYm94PC9jb2RlPjwvaDM+XG5TZWxlY3RlZDoge3tzZWxlY3RlZDJ9fVxuPHVsIGNka1NlbGVjdGlvbiBbZGF0YVNvdXJjZV09XCJkYXRhXCIgW2Nka1NlbGVjdGlvbk11bHRpcGxlXT1cInRydWVcIiAoY2RrU2VsZWN0aW9uQ2hhbmdlKT1cInNlbGVjdGVkMiA9IGdldEN1cnJlbnRTZWxlY3RlZCgkZXZlbnQpXCI+XG4gIDxtYXQtY2hlY2tib3ggY2RrU2VsZWN0QWxsICN0b2dnbGUxPVwiY2RrU2VsZWN0QWxsXCIgW2luZGV0ZXJtaW5hdGVdPVwidG9nZ2xlMS5pbmRldGVybWluYXRlIHwgYXN5bmNcIj48L21hdC1jaGVja2JveD5cbiAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFcIj5cbiAgICA8bWF0LWNoZWNrYm94IGNka1NlbGVjdGlvblRvZ2dsZSBbY2RrU2VsZWN0aW9uVG9nZ2xlVmFsdWVdPVwiaXRlbVwiPjwvbWF0LWNoZWNrYm94PlxuICAgIHt7aXRlbX19XG4gIDwvbGk+XG48L3VsPlxuXG48aDM+PGNvZGU+U2luZ2xlIHNlbGVjdCB3aXRoIG1hdC1jaGVja2JveDwvY29kZT48L2gzPlxuU2VsZWN0ZWQ6IHt7c2VsZWN0ZWQzfX1cbjx1bCBjZGtTZWxlY3Rpb24gW2RhdGFTb3VyY2VdPVwiZGF0YVwiIFtjZGtTZWxlY3Rpb25NdWx0aXBsZV09XCJmYWxzZVwiIChjZGtTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQzID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cbiAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFcIj5cbiAgICA8bWF0LWNoZWNrYm94IGNka1NlbGVjdGlvblRvZ2dsZSBbY2RrU2VsZWN0aW9uVG9nZ2xlVmFsdWVdPVwiaXRlbVwiPjwvbWF0LWNoZWNrYm94PlxuICAgIHt7aXRlbX19XG4gIDwvbGk+XG48L3VsPlxuXG48aDM+PGNvZGU+d2l0aCB0cmFja0J5PC9jb2RlPjwvaDM+XG5TZWxlY3RlZDoge3tzZWxlY3RlZDR9fVxuPHVsIGNka1NlbGVjdGlvbiBbZGF0YVNvdXJjZV09XCJkYXRhXCIgW2Nka1NlbGVjdGlvbk11bHRpcGxlXT1cInRydWVcIiBbdHJhY2tCeV09XCJ0cmFja0J5Rm5cIiAoY2RrU2VsZWN0aW9uQ2hhbmdlKT1cInNlbGVjdGVkNCA9IGdldEN1cnJlbnRTZWxlY3RlZCgkZXZlbnQpXCI+XG4gIDxtYXQtY2hlY2tib3ggY2RrU2VsZWN0QWxsICN0b2dnbGUyPVwiY2RrU2VsZWN0QWxsXCIgW2luZGV0ZXJtaW5hdGVdPVwidG9nZ2xlMi5pbmRldGVybWluYXRlIHwgYXN5bmNcIj48L21hdC1jaGVja2JveD5cbiAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGE7IGluZGV4IGFzIGk7IHRyYWNrQnk6IHRyYWNrQnlGblwiPlxuICAgIDxtYXQtY2hlY2tib3ggY2RrU2VsZWN0aW9uVG9nZ2xlIFtjZGtTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCIgW2Nka1NlbGVjdGlvblRvZ2dsZUluZGV4XT1cImlcIj48L21hdC1jaGVja2JveD5cbiAgICB7e2l0ZW19fVxuICA8L2xpPlxuPC91bD5cblxuPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlRWxlbWVudE5hbWUoKVwiPkNoYW5nZSBlbGVtZW50IG5hbWVzIGFuZCB0aGUgYWxyZWFkeSBzZWxlY3RlZCBzdGF5czwvYnV0dG9uPlxuPGJ1dHRvbiAoY2xpY2spPVwicmVzZXQoKVwiPnJlc2V0PC9idXR0b24+XG4iXX0=