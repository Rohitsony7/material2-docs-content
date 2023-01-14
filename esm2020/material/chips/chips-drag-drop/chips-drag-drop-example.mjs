import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/drag-drop";
import * as i3 from "@angular/material/chips";
/**
 * @title Chips Drag and Drop
 */
export class ChipsDragDropExample {
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
ChipsDragDropExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: ChipsDragDropExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsDragDropExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0", type: ChipsDragDropExample, selector: "chips-drag-drop-example", ngImport: i0, template: "<mat-chip-set\n  class=\"example-chip\"\n  cdkDropList \n  cdkDropListOrientation=\"horizontal\"\n  (cdkDropListDropped)=\"drop($event)\">\n  <mat-chip\n    class=\"example-box\"\n    cdkDrag\n    *ngFor=\"let vegetable of vegetables\">\n    {{vegetable.name}}\n  </mat-chip>\n</mat-chip-set>\n", styles: [".example-box.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip .cdk-drop-list-dragging {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: i2.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "component", type: i3.MatChip, selector: "mat-basic-chip, mat-chip", inputs: ["color", "disabled", "disableRipple", "tabIndex", "role", "id", "aria-label", "aria-description", "value", "removable", "highlighted"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "component", type: i3.MatChipSet, selector: "mat-chip-set", inputs: ["disabled", "role"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0", ngImport: i0, type: ChipsDragDropExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-drag-drop-example', template: "<mat-chip-set\n  class=\"example-chip\"\n  cdkDropList \n  cdkDropListOrientation=\"horizontal\"\n  (cdkDropListDropped)=\"drop($event)\">\n  <mat-chip\n    class=\"example-box\"\n    cdkDrag\n    *ngFor=\"let vegetable of vegetables\">\n    {{vegetable.name}}\n  </mat-chip>\n</mat-chip-set>\n", styles: [".example-box.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip .cdk-drop-list-dragging {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1kcmFnLWRyb3AvY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1kcmFnLWRyb3AvY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFNeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBTUUsZUFBVSxHQUFnQjtZQUN4QixFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7WUFDZixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDaEIsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFDO1lBQ3BCLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7WUFDZCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7U0FDakIsQ0FBQztLQUtIO0lBSEMsSUFBSSxDQUFDLEtBQStCO1FBQ2xDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVFLENBQUM7O2lIQVpVLG9CQUFvQjtxR0FBcEIsb0JBQW9CLCtEQ2ZqQyx3U0FZQTsyRkRHYSxvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0UseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBWZWdldGFibGUge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIENoaXBzIERyYWcgYW5kIERyb3BcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLWRyYWctZHJvcC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzRHJhZ0Ryb3BFeGFtcGxlIHtcbiAgdmVnZXRhYmxlczogVmVnZXRhYmxlW10gPSBbXG4gICAge25hbWU6ICdhcHBsZSd9LFxuICAgIHtuYW1lOiAnYmFuYW5hJ30sXG4gICAge25hbWU6ICdzdHJhd2JlcnJ5J30sXG4gICAge25hbWU6ICdvcmFuZ2UnfSxcbiAgICB7bmFtZTogJ2tpd2knfSxcbiAgICB7bmFtZTogJ2NoZXJyeSd9LFxuICBdO1xuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPFZlZ2V0YWJsZVtdPikge1xuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLnZlZ2V0YWJsZXMsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gIH1cbn1cbiIsIjxtYXQtY2hpcC1zZXRcbiAgY2xhc3M9XCJleGFtcGxlLWNoaXBcIlxuICBjZGtEcm9wTGlzdCBcbiAgY2RrRHJvcExpc3RPcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuICA8bWF0LWNoaXBcbiAgICBjbGFzcz1cImV4YW1wbGUtYm94XCJcbiAgICBjZGtEcmFnXG4gICAgKm5nRm9yPVwibGV0IHZlZ2V0YWJsZSBvZiB2ZWdldGFibGVzXCI+XG4gICAge3t2ZWdldGFibGUubmFtZX19XG4gIDwvbWF0LWNoaXA+XG48L21hdC1jaGlwLXNldD5cbiJdfQ==