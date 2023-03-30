import { Component } from '@angular/core';
import { getSupportedInputTypes, Platform, supportsPassiveEventListeners, supportsScrollBehavior, } from '@angular/cdk/platform';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
/**
 * @title Platform overview
 */
class CdkPlatformOverviewExample {
    constructor(platform) {
        this.platform = platform;
        this.supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
        this.supportsPassiveEventListeners = supportsPassiveEventListeners();
        this.supportsScrollBehavior = supportsScrollBehavior();
    }
}
CdkPlatformOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: CdkPlatformOverviewExample, deps: [{ token: i1.Platform }], target: i0.ɵɵFactoryTarget.Component });
CdkPlatformOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.5", type: CdkPlatformOverviewExample, selector: "cdk-platform-overview-example", ngImport: i0, template: "<h2>Platform information:</h2>\n<p>Is Android: {{platform.ANDROID}}</p>\n<p>Is iOS: {{platform.IOS}}</p>\n<p>Is Firefox: {{platform.FIREFOX}}</p>\n<p>Is Blink: {{platform.BLINK}}</p>\n<p>Is Webkit: {{platform.WEBKIT}}</p>\n<p>Is Trident: {{platform.TRIDENT}}</p>\n<p>Is Edge: {{platform.EDGE}}</p>\n<p>Is Safari: {{platform.SAFARI}}</p>\n<p>Supported input types: {{supportedInputTypes}}</p>\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\n" });
export { CdkPlatformOverviewExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.5", ngImport: i0, type: CdkPlatformOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-platform-overview-example', template: "<h2>Platform information:</h2>\n<p>Is Android: {{platform.ANDROID}}</p>\n<p>Is iOS: {{platform.IOS}}</p>\n<p>Is Firefox: {{platform.FIREFOX}}</p>\n<p>Is Blink: {{platform.BLINK}}</p>\n<p>Is Webkit: {{platform.WEBKIT}}</p>\n<p>Is Trident: {{platform.TRIDENT}}</p>\n<p>Is Edge: {{platform.EDGE}}</p>\n<p>Is Safari: {{platform.SAFARI}}</p>\n<p>Supported input types: {{supportedInputTypes}}</p>\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\n" }]
        }], ctorParameters: function () { return [{ type: i1.Platform }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvcGxhdGZvcm0vY2RrLXBsYXRmb3JtLW92ZXJ2aWV3L2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3BsYXRmb3JtL2Nkay1wbGF0Zm9ybS1vdmVydmlldy9jZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixRQUFRLEVBQ1IsNkJBQTZCLEVBQzdCLHNCQUFzQixHQUN2QixNQUFNLHVCQUF1QixDQUFDOzs7QUFFL0I7O0dBRUc7QUFDSCxNQUlhLDBCQUEwQjtJQUtyQyxZQUFtQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSnJDLHdCQUFtQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxrQ0FBNkIsR0FBRyw2QkFBNkIsRUFBRSxDQUFDO1FBQ2hFLDJCQUFzQixHQUFHLHNCQUFzQixFQUFFLENBQUM7SUFFVixDQUFDOzs4SEFMOUIsMEJBQTBCO2tIQUExQiwwQkFBMEIscUVDZnZDLG9oQkFZQTtTREdhLDBCQUEwQjtrR0FBMUIsMEJBQTBCO2tCQUp0QyxTQUFTOytCQUNFLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGdldFN1cHBvcnRlZElucHV0VHlwZXMsXG4gIFBsYXRmb3JtLFxuICBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycyxcbiAgc3VwcG9ydHNTY3JvbGxCZWhhdmlvcixcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcblxuLyoqXG4gKiBAdGl0bGUgUGxhdGZvcm0gb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtQbGF0Zm9ybU92ZXJ2aWV3RXhhbXBsZSB7XG4gIHN1cHBvcnRlZElucHV0VHlwZXMgPSBBcnJheS5mcm9tKGdldFN1cHBvcnRlZElucHV0VHlwZXMoKSkuam9pbignLCAnKTtcbiAgc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMgPSBzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVycygpO1xuICBzdXBwb3J0c1Njcm9sbEJlaGF2aW9yID0gc3VwcG9ydHNTY3JvbGxCZWhhdmlvcigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0pIHt9XG59XG4iLCI8aDI+UGxhdGZvcm0gaW5mb3JtYXRpb246PC9oMj5cbjxwPklzIEFuZHJvaWQ6IHt7cGxhdGZvcm0uQU5EUk9JRH19PC9wPlxuPHA+SXMgaU9TOiB7e3BsYXRmb3JtLklPU319PC9wPlxuPHA+SXMgRmlyZWZveDoge3twbGF0Zm9ybS5GSVJFRk9YfX08L3A+XG48cD5JcyBCbGluazoge3twbGF0Zm9ybS5CTElOS319PC9wPlxuPHA+SXMgV2Via2l0OiB7e3BsYXRmb3JtLldFQktJVH19PC9wPlxuPHA+SXMgVHJpZGVudDoge3twbGF0Zm9ybS5UUklERU5UfX08L3A+XG48cD5JcyBFZGdlOiB7e3BsYXRmb3JtLkVER0V9fTwvcD5cbjxwPklzIFNhZmFyaToge3twbGF0Zm9ybS5TQUZBUkl9fTwvcD5cbjxwPlN1cHBvcnRlZCBpbnB1dCB0eXBlczoge3tzdXBwb3J0ZWRJbnB1dFR5cGVzfX08L3A+XG48cD5TdXBwb3J0cyBwYXNzaXZlIGV2ZW50IGxpc3RlbmVyczoge3tzdXBwb3J0c1Bhc3NpdmVFdmVudExpc3RlbmVyc319PC9wPlxuPHA+U3VwcG9ydHMgc2Nyb2xsIGJlaGF2aW9yOiB7e3N1cHBvcnRzU2Nyb2xsQmVoYXZpb3J9fTwvcD5cbiJdfQ==