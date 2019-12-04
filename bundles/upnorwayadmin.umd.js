(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('events')) :
    typeof define === 'function' && define.amd ? define('upnorwayadmin', ['exports', '@angular/core', 'events'], factory) :
    (global = global || self, factory(global.upnorwayadmin = {}, global.ng.core, global.events));
}(this, (function (exports, core, events) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var UpnorwayadminService = /** @class */ (function () {
        function UpnorwayadminService() {
        }
        UpnorwayadminService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function UpnorwayadminService_Factory() { return new UpnorwayadminService(); }, token: UpnorwayadminService, providedIn: "root" });
        UpnorwayadminService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], UpnorwayadminService);
        return UpnorwayadminService;
    }());

    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
        }
        __decorate([
            core.Input()
        ], ButtonComponent.prototype, "text", void 0);
        __decorate([
            core.Input()
        ], ButtonComponent.prototype, "disabled", void 0);
        ButtonComponent = __decorate([
            core.Component({
                selector: 'up-button-primary',
                template: "<button class=\"btn btn-primary\" type=\"button\" [disabled]=\"disabled\">{{text}}</button>",
                styles: ["button:active{background:#e97d72!important;border-color:#e97d72!important}button:focus{box-shadow:none!important}button{width:100%;font-size:14px;height:50px}.btn{background:#e97d72;border:1px solid #e97d72}"]
            })
        ], ButtonComponent);
        return ButtonComponent;
    }());

    var InputComponent = /** @class */ (function () {
        function InputComponent() {
            this.localRefValue = new events.EventEmitter();
        }
        InputComponent.prototype.ngOnInit = function () {
            this.localRefValue.emit(this.element.nativeElement.value);
        };
        __decorate([
            core.Input()
        ], InputComponent.prototype, "type", void 0);
        __decorate([
            core.Input()
        ], InputComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], InputComponent.prototype, "placeholder", void 0);
        __decorate([
            core.Input()
        ], InputComponent.prototype, "localRef", void 0);
        __decorate([
            core.Output()
        ], InputComponent.prototype, "localRefValue", void 0);
        __decorate([
            core.ViewChild('localRef', { static: false })
        ], InputComponent.prototype, "element", void 0);
        InputComponent = __decorate([
            core.Component({
                selector: 'up-input',
                template: "<input type=\"{{type}}\" id=\"{{id}}\" placeholder=\"{{placeholder}}\" #{{localRef}}>",
                styles: [""]
            })
        ], InputComponent);
        return InputComponent;
    }());

    var SideNavComponent = /** @class */ (function () {
        function SideNavComponent() {
        }
        __decorate([
            core.Input()
        ], SideNavComponent.prototype, "items", void 0);
        SideNavComponent = __decorate([
            core.Component({
                selector: "up-side-nav",
                template: "<!-- <div class=\"wrapper\">\n  <nav id=\"sidebar\" [className]=\"isActive ? 'active' : ''\">\n    <div class=\"sidebar-header\">\n      <h3>Up Norway</h3>\n    </div>\n\n    <ul class=\"list-unstyled components\">\n      <li\n        [className]=\"item.isActive ? 'active' : ''\"\n        *ngFor=\"let item of items\"\n      >\n        <div *ngIf=\"item.subRoutes\">\n          <a\n            href=\"#{{ item.target }}\"\n            data-toggle=\"collapse\"\n            aria-expanded=\"false\"\n            class=\"dropdown-toggle\"\n          >\n            <i class=\"{{ item.class }}\"></i>\n            {{ item.name }}\n          </a>\n          <ul class=\"collapse list-unstyled\" id=\"{{ item.target }}\">\n            <li>\n              <a href=\"#\">Home 1</a>\n            </li>\n            <li>\n              <a href=\"#\">Home 2</a>\n            </li>\n            <li>\n              <a href=\"#\">Home 3</a>\n            </li>\n          </ul>\n        </div>\n        <div *ngIf=\"!item.subRoutes\">\n          <a href=\"{{ item.route }}\">\n            <i class=\"{{ item.class }}\"></i>\n            {{ item.name }}\n          </a>\n        </div>\n      </li>\n    </ul>\n  </nav>\n</div> -->\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700);body{font-family:Poppins,sans-serif;background:#fafafa}p{font-family:Poppins,sans-serif;font-size:1.1em;font-weight:300;line-height:1.7em;color:#999}a,a:focus,a:hover{color:inherit;text-decoration:none;transition:.3s}.navbar{padding:15px 10px;background:#fff;border:none;border-radius:0;margin-bottom:40px;box-shadow:1px 1px 3px rgba(0,0,0,.1)}.navbar-btn{box-shadow:none;outline:0!important;border:none}.line{width:100%;height:1px;border-bottom:1px dashed #ddd;margin:40px 0}i,span{display:inline-block}.wrapper{display:flex;align-items:stretch}#sidebar{min-width:250px;max-width:250px;background:#e97d72;color:#fff;transition:.3s}#sidebar.active{min-width:80px;max-width:80px;text-align:center}#sidebar.active .CTAs,#sidebar.active .sidebar-header h3{display:none}#sidebar.active .sidebar-header strong{display:block}#sidebar ul li a{text-align:left;padding:10px;font-size:1.1em;display:block}#sidebar.active ul li a{padding:20px 10px;text-align:center;font-size:.85em}#sidebar.active ul li a i{margin-right:0;display:block;font-size:1.8em;margin-bottom:5px}#sidebar.active ul ul a{padding:10px!important}#sidebar.active .dropdown-toggle::after{top:auto;bottom:10px;right:50%;transform:translateX(50%)}#sidebar .sidebar-header{padding:20px;background:#e97d72;text-align:center}#sidebar .sidebar-header strong{display:none;font-size:1.8em}#sidebar ul.components{padding:50% 0 0}#sidebar ul li a:hover{color:#7386d5;background:#fff}#sidebar ul li a i{margin-right:10px}#sidebarCollapse{border-radius:50%;background-color:#e97d72;border-color:#e97d72;box-shadow:0 0 0 .2rem #e97d72}#sidebar ul li.active>a,a[aria-expanded=true]{color:#fff;background:#e97d72}a[data-toggle=collapse]{position:relative}.dropdown-toggle::after{display:block;position:absolute;top:50%;right:20px;transform:translateY(-50%)}ul ul a{font-size:.9em!important;padding-left:30px!important;background:#e97d72}a.article,a.article:hover{background:#e97d72!important;color:#fff!important}#content{width:100%;min-height:100vh;transition:.3s}@media (max-width:768px){#sidebar{min-width:80px;max-width:80px;text-align:center;margin-left:-80px!important}.dropdown-toggle::after{top:auto;bottom:10px;right:50%;transform:translateX(50%)}#sidebar.active{margin-left:0!important}#sidebar .sidebar-header strong{display:block}#sidebar .CTAs,#sidebar .sidebar-header h3{display:none}#sidebar ul li a{padding:20px 10px}#sidebar ul li a span{font-size:.85em}#sidebar ul li a i{margin-right:0;display:block;font-size:1.3em}#sidebar ul ul a{padding:10px!important}#sidebarCollapse span{display:none}}"]
            })
        ], SideNavComponent);
        return SideNavComponent;
    }());

    var UpnorwayadminModule = /** @class */ (function () {
        function UpnorwayadminModule() {
        }
        UpnorwayadminModule = __decorate([
            core.NgModule({
                declarations: [ButtonComponent, InputComponent, SideNavComponent],
                imports: [],
                exports: [ButtonComponent, InputComponent, SideNavComponent]
            })
        ], UpnorwayadminModule);
        return UpnorwayadminModule;
    }());

    exports.ButtonComponent = ButtonComponent;
    exports.UpnorwayadminModule = UpnorwayadminModule;
    exports.UpnorwayadminService = UpnorwayadminService;
    exports.ɵa = InputComponent;
    exports.ɵb = SideNavComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=upnorwayadmin.umd.js.map
