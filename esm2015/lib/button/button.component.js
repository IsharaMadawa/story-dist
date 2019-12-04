import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let ButtonComponent = class ButtonComponent {
};
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
export { ButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Vwbm9yd2F5YWRtaW4vIiwic291cmNlcyI6WyJsaWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7Q0FJM0IsQ0FBQTtBQUhVO0lBQVIsS0FBSyxFQUFFOzZDQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7aURBQW1CO0FBRmhCLGVBQWU7SUFMM0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3Qix1R0FBc0M7O0tBRXZDLENBQUM7R0FDVyxlQUFlLENBSTNCO1NBSlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd1cC1idXR0b24tcHJpbWFyeScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxufVxyXG4iXX0=