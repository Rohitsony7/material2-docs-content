import { MatSelectionModule } from '@angular/material-experimental/selection';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectionColumnExample } from './mat-selection-column/mat-selection-column-example';
import { MatSelectionListExample } from './mat-selection-list/mat-selection-list-example';
import * as i0 from "@angular/core";
export { MatSelectionListExample, MatSelectionColumnExample };
const EXAMPLES = [MatSelectionListExample, MatSelectionColumnExample];
class MatSelectionExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: MatSelectionExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0", ngImport: i0, type: MatSelectionExamplesModule, declarations: [MatSelectionListExample, MatSelectionColumnExample], imports: [MatSelectionModule,
            MatTableModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatCheckboxModule], exports: [MatSelectionListExample, MatSelectionColumnExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: MatSelectionExamplesModule, imports: [MatSelectionModule,
            MatTableModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatCheckboxModule] }); }
}
export { MatSelectionExamplesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: MatSelectionExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        MatSelectionModule,
                        MatTableModule,
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatCheckboxModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvc2VsZWN0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFN0QsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7O0FBRXhGLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSx5QkFBeUIsRUFBQyxDQUFDO0FBRTVELE1BQU0sUUFBUSxHQUFHLENBQUMsdUJBQXVCLEVBQUUseUJBQXlCLENBQUMsQ0FBQztBQUV0RSxNQVlhLDBCQUEwQjs4R0FBMUIsMEJBQTBCOytHQUExQiwwQkFBMEIsaUJBZHJCLHVCQUF1QixFQUFFLHlCQUF5QixhQUloRSxrQkFBa0I7WUFDbEIsY0FBYztZQUNkLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGlCQUFpQixhQVRILHVCQUF1QixFQUFFLHlCQUF5QjsrR0FjdkQsMEJBQTBCLFlBVm5DLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsaUJBQWlCOztTQUtSLDBCQUEwQjsyRkFBMUIsMEJBQTBCO2tCQVp0QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3FCQUNsQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNYXRTZWxlY3Rpb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9zZWxlY3Rpb24nO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcblxuaW1wb3J0IHtNYXRTZWxlY3Rpb25Db2x1bW5FeGFtcGxlfSBmcm9tICcuL21hdC1zZWxlY3Rpb24tY29sdW1uL21hdC1zZWxlY3Rpb24tY29sdW1uLWV4YW1wbGUnO1xuaW1wb3J0IHtNYXRTZWxlY3Rpb25MaXN0RXhhbXBsZX0gZnJvbSAnLi9tYXQtc2VsZWN0aW9uLWxpc3QvbWF0LXNlbGVjdGlvbi1saXN0LWV4YW1wbGUnO1xuXG5leHBvcnQge01hdFNlbGVjdGlvbkxpc3RFeGFtcGxlLCBNYXRTZWxlY3Rpb25Db2x1bW5FeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbTWF0U2VsZWN0aW9uTGlzdEV4YW1wbGUsIE1hdFNlbGVjdGlvbkNvbHVtbkV4YW1wbGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0U2VsZWN0aW9uTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgTWF0U2VsZWN0aW9uRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==