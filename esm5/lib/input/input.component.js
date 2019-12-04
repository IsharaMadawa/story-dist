import * as tslib_1 from "tslib";
import { Component, Input, Output, ViewChild } from '@angular/core';
import { EventEmitter } from 'events';
var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.localRefValue = new EventEmitter();
    }
    InputComponent.prototype.ngOnInit = function () {
        this.localRefValue.emit(this.element.nativeElement.value);
    };
    tslib_1.__decorate([
        Input()
    ], InputComponent.prototype, "type", void 0);
    tslib_1.__decorate([
        Input()
    ], InputComponent.prototype, "id", void 0);
    tslib_1.__decorate([
        Input()
    ], InputComponent.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        Input()
    ], InputComponent.prototype, "localRef", void 0);
    tslib_1.__decorate([
        Output()
    ], InputComponent.prototype, "localRefValue", void 0);
    tslib_1.__decorate([
        ViewChild('localRef', { static: false })
    ], InputComponent.prototype, "element", void 0);
    InputComponent = tslib_1.__decorate([
        Component({
            selector: 'up-input',
            template: "<input type=\"{{type}}\" id=\"{{id}}\" placeholder=\"{{placeholder}}\" #{{localRef}}>",
            styles: [""]
        })
    ], InputComponent);
    return InputComponent;
}());
export { InputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdXBub3J3YXlhZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFjLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQU90QztJQVNFO1FBSFUsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRzdCLENBQUM7SUFFakIsaUNBQVEsR0FBUjtRQUVFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFaUTtRQUFSLEtBQUssRUFBRTtnREFBYztJQUNiO1FBQVIsS0FBSyxFQUFFOzhDQUFZO0lBQ1g7UUFBUixLQUFLLEVBQUU7dURBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFO29EQUFrQjtJQUNoQjtRQUFULE1BQU0sRUFBRTt5REFBb0M7SUFDTDtRQUF2QyxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO21EQUFxQjtJQVBqRCxjQUFjO1FBTDFCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLGlHQUFxQzs7U0FFdEMsQ0FBQztPQUNXLGNBQWMsQ0FnQjFCO0lBQUQscUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWhCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFbGVtZW50UmVmLCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd1cC1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbG9jYWxSZWY6IHN0cmluZztcclxuICBAT3V0cHV0KCkgbG9jYWxSZWZWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAVmlld0NoaWxkKCdsb2NhbFJlZicsIHtzdGF0aWM6IGZhbHNlfSkgZWxlbWVudDogRWxlbWVudFJlZjtcclxuIFxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMubG9jYWxSZWZWYWx1ZS5lbWl0KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlKVxyXG4gIH1cclxuXHJcbn1cclxuIl19