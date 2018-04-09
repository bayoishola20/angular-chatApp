webpackJsonp([1,4],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 108;


/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(123);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(200),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(201),
        styles: [__webpack_require__(191)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__socket_service__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__socket_service__["a" /* SocketService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__(202),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(socketService) {
        this.socketService = socketService;
        this.selfAuthored = false;
        this.avatar = '../../assets/img/user.png';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages = new Array();
        this.socketService.on('message-received', function (msg) {
            _this.messages.push(msg);
            console.log(msg);
            console.log(_this.messages);
        });
        this.users = new Array();
        this.socketService.on('get-users', function (msg) {
            _this.users.push(msg);
            console.log(msg);
            console.log(_this.users);
        });
        this.registered = false;
    };
    HomeComponent.prototype.sendMessage = function () {
        var message = {
            text: this.messageText,
            date: Date.now(),
            imageUrl: this.avatar
        };
        this.socketService.emit('send-message', message);
        this.messageText = '';
    };
    HomeComponent.prototype.sendUser = function () {
        var user = {
            user: this.Username,
        };
        this.socketService.emit('new-user', user);
        this.Username = '';
        this.registered = true;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(203),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(204),
        styles: [__webpack_require__(194)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".lead {\n    background-color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".chat-window {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n    /* display: none; */\n  }\n\n\n/* User register */\n\n.fa-user-circle, .fa-check {\n  color: #BEF1BE;\n  outline-color: antiquewhite;\n}\n\n.chat-window .panel {\n  border: 0;\n  border-radius: 5px 5px 0 0;\n  margin-bottom: 0;\n  height: 100%;\n}\n\n\n.chat-top-bar {\n  color: #fff;\n  overflow: hidden;\n  padding: 5px;\n  position: relative;\n  height: 70px;\n  max-height: 70px;\n  border-radius: 0;\n}\n\n.chat-top-bar {\n  overflow: hidden;\n  padding: 10px;\n  position: relative;\n  height: 70px;\n  max-height: 70px;\n  border-radius: 0;\n}\n\n.chat-top-bar .icon-minim {\n  padding: 2px 10px;\n}\n\n.chat-login-bar {\n  overflow: hidden;\n  padding: 10px;\n  position: relative;\n  height: 200px;\n  max-height: 100%;\n  margin-top: 50px;\n}\n\n.chat-bottom-bar {\n  overflow: hidden;\n  padding: 10px;\n  position: relative;\n  height: 70px;\n  max-height: 70px;\n}\n\n.chat-bottom-bar .icon-minim {\n  padding: 2px 10px;\n}\n\n/* .chat-bottom-bar input {\n  height: calc(70px - 30px);\n} */\n\n\n.msg-container-base {\n  /* background: whitesmoke; */\n  margin: 0;\n  margin-top: 2px;\n  height: calc(100% - 140px);\n  overflow-x: hidden;\n  padding: 0 10px 10px;\n}\n\n.msg-container-base::-webkit-scrollbar-track {\n  background-color: #f5f5f5;\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\n.msg-container-base::-webkit-scrollbar {\n  background-color: #f5f5f5;\n  width: 12px;\n}\n\n.msg-container-base::-webkit-scrollbar-thumb {\n  background-color: whitesmoke;\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\n.msg-container-base .msg-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  padding: 10px;\n}\n\n\n.chat-msg {\n  background: rgb(245, 240, 232);\n  margin: 3px;\n  border-radius: 2px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  max-width: 100%;\n  padding: 10px;\n}\n\n.message-text {\n  word-wrap: break-word;\n  word-break: break-all;\n}\n\n.chat-input, .online-users {\n  overflow-wrap: break-word;\n}\n\n.chat-msg p {\n  font-size: 15px;\n  margin: 0 0 .2rem 10px;\n}\n\n.chat-msg time {\n  color: #ccc;\n}\n\n.chat-msg .chat-msg-author {\n  display: block;\n}\n\n.chat-msg .chat-msg-received {\n  margin-right: 0;\n  padding-bottom: 20px;\n}\n\n.chat-msg.chat-msg-sent {\n  margin-right: 0;\n  padding-bottom: 20px;\n}\n\n.chat-msg.chat-msg-sent .chat-msg-author {\n  text-align: right;\n}\n\n.chat-msg.chat-msg-sent time {\n  float: right;\n}\n\n.profile {\n  height: 100%;\n  width: 5%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "<div class=\"lead jumbotron text-center\">\n  <h1>ELLO</h1> \n  <p class=\"lead\"> A pretty simple chat application</p>\n   <div>\n    <a class=\"btn btn-danger btn-block\" [routerLink]=\"['/']\">START CHATTING...</a>\n\n    <!-- <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a> -->\n  </div> \n</div>\n\n<!-- <div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/express server using Mongoose to organize models and query</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-cli to generate components, services and more. Local dev server and easy compilation </p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data. </p>\n  </div>\n</div> -->"

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div id=\"userArea\"  [hidden]=\"registered\" class=\"row chat-login-bar\">\n    <div class=\"col-xs-6 col-md-6 col-xs-offset-3 col-md-offset-3\">\n      <form id=\"userForm\" (ngSubmit)=\"sendUser()\">\n        <label> Enter Username &rarr; </label>\n        <div class=\"input-group\">\n          <input type=\"text\" autocomplete=\"on\" class=\"form-control input-md chat-input\" id=\"Username\" placeholder=\"Let's get you logged in ...\" name=\"Username\" [(ngModel)]=\"Username\" />\n          <span class=\"input-group-btn\">\n              <button type=\"submit\" class=\"btn btn-md btn-warning\">\n                  <i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>\n              </button>\n          </span>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"row chat-window col-xs-5 col-md-3\">\n    <!-- User Area -->\n    <div class=\"col-xs-4 col-md-4\" [hidden]=\"!registered\">\n        <div class=\"well\">\n          <h4 class=\"text-center text-success\">\n            LIVE USERS\n          </h4>\n          <hr>\n          <ul class=\"list-group online-users\" id=\"users\" *ngFor=\"let n of users\"> <i class=\"fa fa-user-circle fa-fw\" aria-hidden=\"true\"></i> &nbsp; {{ n.user }} </ul>\n        </div>\n    </div>\n\n    <div class=\"col-xs-8 col-md-8\" [hidden]=\"!registered\">\n      <div class=\"panel panel-warning\">\n        <div class=\"panel-heading chat-top-bar\">\n          <div class=\"col-md-8 col-xs-8\">\n            <h3 class=\"text-info\">\n              SAY HELLO\n            </h3>\n          </div>\n        </div>\n        <div class=\"panel-body\">\n\n          <!-- Main message history area -->\n\n          <div class=\"msg-container-base\">\n            <div class=\"row msg-container\" *ngFor=\"let message of messages\">\n              <div class=\"col-xs-12 col-md-12\">\n                <div class=\"chat-msg\" [ngClass]=\"{'chat-msg-sent': selfAuthored, 'chat-msg-received': !selfAuthored}\">\n                    <img *ngIf=\"message.imageUrl\" class=\"profile\" [ngClass]=\"{'pull-right': selfAuthored, 'pull-left': !selfAuthored}\" [src]=\"message.imageUrl\" />\n                  <div class=\"message-text\">\n                    <p>&nbsp; {{ message.text }} </p>\n                  </div>\n                  <div class=\"chat-msg-author\">\n                        <strong>{{ message.username }}</strong>&nbsp;\n                      <span class=\"time\"><small><i class=\"fa fa-fw fa-check\" aria-hidden=\"true\"></i></small><small>{{ message.date | date: 'shortTime' }}</small></span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Send message -->\n\n          <div class=\"chat-bottom-bar\">\n            <form style=\"display:inherit\" (ngSubmit)=\"sendMessage()\">\n              <div class=\"input-group\" >\n                <input type=\"text\" class=\"form-control input-sm chat-input\" placeholder=\"Type message ...\" name=\"messageText\" [(ngModel)]=\"messageText\" />\n                <span class=\"input-group-btn\">\n                  <!-- <input type=\"submit\" class=\"btn btn-sm chat-submit-button\" /> -->\n                  <button type=\"submit\" class=\"btn btn-sm btn-warning\">\n                    <i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>\n                  </button>\n                </span>\n              </div>\n            </form>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\" style=\"background-color:aliceblue;\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\" style=\"background-color:crimson;\"></span>\n            <span class=\"icon-bar\" style=\"background-color:crimson;\"></span>\n            <span class=\"icon-bar\" style=\"background-color:crimson;\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">ELLO CHAT</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <div class=\"container\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/about']\">About</a></li>\n            \n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <a data-toggle=\"modal\" data-target=\"#contactModal\">Contact</a>\n            </li>\n          </ul>\n          </div>\n        </div><!--/.nav-collapse -->\n      </div>\n</nav>\n\n\n<!-- contact modal -->\n<div class=\"modal fade\" id=\"contactModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"contactModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n          <form method=\"post\" action=\"/add\">\n              <div class=\"modal-header\">\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                  <h4 class=\"modal-title text-center\" id=\"myModalLabel\">CONTACT FORM</h4>\n              </div>\n              <div class=\"modal-body\">\n                  <div class=\"form-group\">\n                      <label for=\"username\">\n                          Username\n                      </label>\n                      <input type=\"text\" class=\"form-control\" name=\"username\">\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"email\">\n                        Email\n                    </label>\n                    <input type=\"email\" class=\"form-control\" name=\"email\">\n                </div>\n\n                  <div class=\"form-group\">\n                      <label for=\"description\">\n                          Description\n                      </label>\n                      <textarea rows=\"5\" class=\"form-control\" name=\"description\"></textarea>\n                  </div>\n\n\n              </div>\n              <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                  <button type=\"submit\" class=\"btn\">\n                    <i class=\"fa fa-fw fa-paper-plane\" aria-hidden=\"true\"></i>\n                  </button>\n              </div>\n          </form>\n      </div>\n  </div>\n  </div>"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(109);


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    function SocketService() {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"]();
    }
    SocketService.prototype.on = function (eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, function (data) {
                callback(data);
            });
        }
    };
    ;
    SocketService.prototype.emit = function (eventName, data) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    };
    ;
    SocketService.prototype.removeListener = function (eventName) {
        if (this.socket) {
            this.socket.removeListener(eventName);
        }
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=socket.service.js.map

/***/ })

},[242]);
//# sourceMappingURL=main.bundle.js.map