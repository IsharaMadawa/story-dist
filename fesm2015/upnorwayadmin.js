import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Input, Component, Output, ViewChild, NgModule } from '@angular/core';
import { EventEmitter } from 'events';

let UpnorwayadminService = class UpnorwayadminService {
    constructor() { }
};
UpnorwayadminService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UpnorwayadminService_Factory() { return new UpnorwayadminService(); }, token: UpnorwayadminService, providedIn: "root" });
UpnorwayadminService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UpnorwayadminService);

let ButtonComponent = class ButtonComponent {
};
__decorate([
    Input()
], ButtonComponent.prototype, "text", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "disabled", void 0);
ButtonComponent = __decorate([
    Component({
        selector: 'up-button-primary',
        template: "<button class=\"btn btn-primary\" type=\"button\" [disabled]=\"disabled\">{{text}}</button>",
        styles: ["button:active{background:#e97d72!important;border-color:#e97d72!important}button:focus{box-shadow:none!important}button{width:100%;font-size:14px;height:50px}.btn{background:#e97d72;border:1px solid #e97d72}"]
    })
], ButtonComponent);

let InputComponent = class InputComponent {
    constructor() {
        this.localRefValue = new EventEmitter();
    }
    ngOnInit() {
        this.localRefValue.emit(this.element.nativeElement.value);
    }
};
__decorate([
    Input()
], InputComponent.prototype, "type", void 0);
__decorate([
    Input()
], InputComponent.prototype, "id", void 0);
__decorate([
    Input()
], InputComponent.prototype, "placeholder", void 0);
__decorate([
    Input()
], InputComponent.prototype, "localRef", void 0);
__decorate([
    Output()
], InputComponent.prototype, "localRefValue", void 0);
__decorate([
    ViewChild('localRef', { static: false })
], InputComponent.prototype, "element", void 0);
InputComponent = __decorate([
    Component({
        selector: 'up-input',
        template: "<input type=\"{{type}}\" id=\"{{id}}\" placeholder=\"{{placeholder}}\" #{{localRef}}>",
        styles: [""]
    })
], InputComponent);

let SideNavComponent = class SideNavComponent {
};
__decorate([
    Input()
], SideNavComponent.prototype, "items", void 0);
SideNavComponent = __decorate([
    Component({
        selector: "up-side-nav",
        template: "<!-- <div class=\"wrapper\">\n  <nav id=\"sidebar\" [className]=\"isActive ? 'active' : ''\">\n    <div class=\"sidebar-header\">\n      <h3>Up Norway</h3>\n    </div>\n\n    <ul class=\"list-unstyled components\">\n      <li\n        [className]=\"item.isActive ? 'active' : ''\"\n        *ngFor=\"let item of items\"\n      >\n        <div *ngIf=\"item.subRoutes\">\n          <a\n            href=\"#{{ item.target }}\"\n            data-toggle=\"collapse\"\n            aria-expanded=\"false\"\n            class=\"dropdown-toggle\"\n          >\n            <i class=\"{{ item.class }}\"></i>\n            {{ item.name }}\n          </a>\n          <ul class=\"collapse list-unstyled\" id=\"{{ item.target }}\">\n            <li>\n              <a href=\"#\">Home 1</a>\n            </li>\n            <li>\n              <a href=\"#\">Home 2</a>\n            </li>\n            <li>\n              <a href=\"#\">Home 3</a>\n            </li>\n          </ul>\n        </div>\n        <div *ngIf=\"!item.subRoutes\">\n          <a href=\"{{ item.route }}\">\n            <i class=\"{{ item.class }}\"></i>\n            {{ item.name }}\n          </a>\n        </div>\n      </li>\n    </ul>\n  </nav>\n</div> -->\n",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700);body{font-family:Poppins,sans-serif;background:#fafafa}p{font-family:Poppins,sans-serif;font-size:1.1em;font-weight:300;line-height:1.7em;color:#999}a,a:focus,a:hover{color:inherit;text-decoration:none;transition:.3s}.navbar{padding:15px 10px;background:#fff;border:none;border-radius:0;margin-bottom:40px;box-shadow:1px 1px 3px rgba(0,0,0,.1)}.navbar-btn{box-shadow:none;outline:0!important;border:none}.line{width:100%;height:1px;border-bottom:1px dashed #ddd;margin:40px 0}i,span{display:inline-block}.wrapper{display:flex;align-items:stretch}#sidebar{min-width:250px;max-width:250px;background:#e97d72;color:#fff;transition:.3s}#sidebar.active{min-width:80px;max-width:80px;text-align:center}#sidebar.active .CTAs,#sidebar.active .sidebar-header h3{display:none}#sidebar.active .sidebar-header strong{display:block}#sidebar ul li a{text-align:left;padding:10px;font-size:1.1em;display:block}#sidebar.active ul li a{padding:20px 10px;text-align:center;font-size:.85em}#sidebar.active ul li a i{margin-right:0;display:block;font-size:1.8em;margin-bottom:5px}#sidebar.active ul ul a{padding:10px!important}#sidebar.active .dropdown-toggle::after{top:auto;bottom:10px;right:50%;transform:translateX(50%)}#sidebar .sidebar-header{padding:20px;background:#e97d72;text-align:center}#sidebar .sidebar-header strong{display:none;font-size:1.8em}#sidebar ul.components{padding:50% 0 0}#sidebar ul li a:hover{color:#7386d5;background:#fff}#sidebar ul li a i{margin-right:10px}#sidebarCollapse{border-radius:50%;background-color:#e97d72;border-color:#e97d72;box-shadow:0 0 0 .2rem #e97d72}#sidebar ul li.active>a,a[aria-expanded=true]{color:#fff;background:#e97d72}a[data-toggle=collapse]{position:relative}.dropdown-toggle::after{display:block;position:absolute;top:50%;right:20px;transform:translateY(-50%)}ul ul a{font-size:.9em!important;padding-left:30px!important;background:#e97d72}a.article,a.article:hover{background:#e97d72!important;color:#fff!important}#content{width:100%;min-height:100vh;transition:.3s}@media (max-width:768px){#sidebar{min-width:80px;max-width:80px;text-align:center;margin-left:-80px!important}.dropdown-toggle::after{top:auto;bottom:10px;right:50%;transform:translateX(50%)}#sidebar.active{margin-left:0!important}#sidebar .sidebar-header strong{display:block}#sidebar .CTAs,#sidebar .sidebar-header h3{display:none}#sidebar ul li a{padding:20px 10px}#sidebar ul li a span{font-size:.85em}#sidebar ul li a i{margin-right:0;display:block;font-size:1.3em}#sidebar ul ul a{padding:10px!important}#sidebarCollapse span{display:none}}"]
    })
], SideNavComponent);

let UpnorwayadminModule = class UpnorwayadminModule {
};
UpnorwayadminModule = __decorate([
    NgModule({
        declarations: [ButtonComponent, InputComponent, SideNavComponent],
        imports: [],
        exports: [ButtonComponent, InputComponent, SideNavComponent]
    })
], UpnorwayadminModule);

/*
 * Public API Surface of upnorwayadmin
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, UpnorwayadminModule, UpnorwayadminService, InputComponent as ɵa, SideNavComponent as ɵb };
//# sourceMappingURL=upnorwayadmin.js.map
