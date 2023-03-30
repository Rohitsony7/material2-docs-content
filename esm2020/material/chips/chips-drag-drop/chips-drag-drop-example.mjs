import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/drag-drop";
import * as i3 from "@angular/material/chips";
/**
 * @title Chips Drag and Drop
 */
class ChipsDragDropExample {
    constructor() {
        this.vegetables = [
            { name: 'apple' },
            { name: 'banana' },
            { name: 'strawberry' },
            { name: 'orange' },
            { name: 'kiwi' },
            { name: 'cherry' },
        ];
    }
    drop(event) {
        moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
    }
}
ChipsDragDropExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: ChipsDragDropExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsDragDropExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.5", type: ChipsDragDropExample, selector: "chips-drag-drop-example", ngImport: i0, template: "<mat-chip-set\n  class=\"example-chip\"\n  cdkDropList \n  cdkDropListOrientation=\"horizontal\"\n  (cdkDropListDropped)=\"drop($event)\">\n  <mat-chip\n    class=\"example-box\"\n    cdkDrag\n    *ngFor=\"let vegetable of vegetables\">\n    {{vegetable.name}}\n  </mat-chip>\n</mat-chip-set>\n", styles: [".example-box.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip .cdk-drop-list-dragging {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: i2.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "component", type: i3.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "role", "id", "aria-label", "aria-description", "value", "removable", "highlighted"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "component", type: i3.MatChipSet, selector: "mat-chip-set", inputs: ["disabled", "role"] }] });
export { ChipsDragDropExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: ChipsDragDropExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-drag-drop-example', template: "<mat-chip-set\n  class=\"example-chip\"\n  cdkDropList \n  cdkDropListOrientation=\"horizontal\"\n  (cdkDropListDropped)=\"drop($event)\">\n  <mat-chip\n    class=\"example-box\"\n    cdkDrag\n    *ngFor=\"let vegetable of vegetables\">\n    {{vegetable.name}}\n  </mat-chip>\n</mat-chip-set>\n", styles: [".example-box.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip .cdk-drop-list-dragging {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1kcmFnLWRyb3AvY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1kcmFnLWRyb3AvY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFNeEM7O0dBRUc7QUFDSCxNQUthLG9CQUFvQjtJQUxqQztRQU1FLGVBQVUsR0FBZ0I7WUFDeEIsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO1lBQ2YsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQ2hCLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBQztZQUNwQixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDaEIsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO1lBQ2QsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO1NBQ2pCLENBQUM7S0FLSDtJQUhDLElBQUksQ0FBQyxLQUErQjtRQUNsQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1RSxDQUFDOzt3SEFaVSxvQkFBb0I7NEdBQXBCLG9CQUFvQiwrRENmakMsd1NBWUE7U0RHYSxvQkFBb0I7a0dBQXBCLG9CQUFvQjtrQkFMaEMsU0FBUzsrQkFDRSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZlZ2V0YWJsZSB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgQ2hpcHMgRHJhZyBhbmQgRHJvcFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcy1kcmFnLWRyb3AtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGlwcy1kcmFnLWRyb3AtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNEcmFnRHJvcEV4YW1wbGUge1xuICB2ZWdldGFibGVzOiBWZWdldGFibGVbXSA9IFtcbiAgICB7bmFtZTogJ2FwcGxlJ30sXG4gICAge25hbWU6ICdiYW5hbmEnfSxcbiAgICB7bmFtZTogJ3N0cmF3YmVycnknfSxcbiAgICB7bmFtZTogJ29yYW5nZSd9LFxuICAgIHtuYW1lOiAna2l3aSd9LFxuICAgIHtuYW1lOiAnY2hlcnJ5J30sXG4gIF07XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8VmVnZXRhYmxlW10+KSB7XG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMudmVnZXRhYmxlcywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgfVxufVxuIiwiPG1hdC1jaGlwLXNldFxuICBjbGFzcz1cImV4YW1wbGUtY2hpcFwiXG4gIGNka0Ryb3BMaXN0IFxuICBjZGtEcm9wTGlzdE9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG4gIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gIDxtYXQtY2hpcFxuICAgIGNsYXNzPVwiZXhhbXBsZS1ib3hcIlxuICAgIGNka0RyYWdcbiAgICAqbmdGb3I9XCJsZXQgdmVnZXRhYmxlIG9mIHZlZ2V0YWJsZXNcIj5cbiAgICB7e3ZlZ2V0YWJsZS5uYW1lfX1cbiAgPC9tYXQtY2hpcD5cbjwvbWF0LWNoaXAtc2V0PlxuIl19