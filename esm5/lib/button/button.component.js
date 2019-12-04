import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    tslib_1.__decorate([
        Input()
    ], ButtonComponent.prototype, "text", void 0);
    tslib_1.__decorate([
        Input()
    ], ButtonComponent.prototype, "disabled", void 0);
    ButtonComponent = tslib_1.__decorate([
        Component({
            selector: 'up-button-primary',
            template: "<button class=\"btn btn-primary\" type=\"button\" [disabled]=\"disabled\">{{text}}</button>",
            styles: ["button:active{background:#e97d72!important;border-color:#e97d72!important}button:focus{box-shadow:none!important}button{width:100%;font-size:14px;height:50px}.btn{background:#e97d72;border:1px solid #e97d72}"]
        })
    ], ButtonComponent);
    return ButtonComponent;
}());
export { ButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Vwbm9yd2F5YWRtaW4vIiwic291cmNlcyI6WyJsaWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pEO0lBQUE7SUFJQSxDQUFDO0lBSFU7UUFBUixLQUFLLEVBQUU7aURBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTtxREFBbUI7SUFGaEIsZUFBZTtRQUwzQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLHVHQUFzQzs7U0FFdkMsQ0FBQztPQUNXLGVBQWUsQ0FJM0I7SUFBRCxzQkFBQztDQUFBLEFBSkQsSUFJQztTQUpZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXAtYnV0dG9uLXByaW1hcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbn1cclxuIl19