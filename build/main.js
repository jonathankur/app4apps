webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopappPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TopappPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopappPage = /** @class */ (function () {
    function TopappPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.d = [];
        this.d = {
            'ours': '',
            'trackCensoredName': '',
            'primaryGenreName': '',
            'description': '',
            'artwordUrl100': 'https://jkur.com.au/app4apps/server/blank.jpg'
        };
    }
    TopappPage.prototype.ionViewDidLoad = function () {
        var that = this;
        var url = 'https://jkur.com.au/app4apps/server/topapp.php?rnd=' + Math.random();
        this.http.get(url).subscribe(function (data) {
            var s = JSON.stringify(data);
            that.d = JSON.parse(s);
        }, function (err) {
        });
    };
    TopappPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topapp',template:/*ion-inline-start:"/var/www/html/ionic/a4a/src/pages/topapp/topapp.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>App4Apps</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <ion-item-group>\n  <ion-item>\n   <ion-row>\n    <ion-col col-4>\n     <img [src]="d.artworkUrl100">\n    </ion-col>\n    <ion-col col-8>\n     <p>{{ d.trackCensoredName }}</p>\n     <p><i>{{ d.primaryGenreName }}</i></p>\n    </ion-col>\n   </ion-row>\n  </ion-item>\n  <ion-item-divider color="light">Our View</ion-item-divider>\n  <ion-item text-wrap>\n   <div [innerHTML]="d.ours">\n   </div>\n  </ion-item>\n  <ion-item-divider color="light">App Description</ion-item-divider>\n  <ion-item text-wrap>\n   <div [innerHTML]="d.description">\n   </div>\n  </ion-item>\n </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/a4a/src/pages/topapp/topapp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], TopappPage);
    return TopappPage;
}());

//# sourceMappingURL=topapp.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/topapp/topapp.module": [
		277,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topapp_topapp__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, alertCtrl, oneSignal) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.oneSignal = oneSignal;
        this.content = 'Loading ...';
        this.banner = 'https://jkur.com.au/app4apps/server/sponsor.png';
        this.pushid = '';
        this.thisversion = 1;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var that = this;
        var url = 'https://jkur.com.au/app4apps/server/home.php?rnd=' + Math.random();
        this.http.get(url).subscribe(function (data) {
            var s = JSON.stringify(data);
            var d = JSON.parse(s);
            that.content = d.content;
            var v = parseInt(d.version);
            if (v > that.thisversion)
                that.versionmessage(v);
            that.getpushinfo();
        }, function (err) {
        });
    };
    HomePage.prototype.getpushinfo = function () {
        var _this = this;
        this.oneSignal.startInit('045e76cf-56d9-4af4-9d39-aa8742a00895', '981456573821');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.endInit();
        var i = this.oneSignal.getIds();
        i.then(function (data) {
            var that = _this;
            var url = 'https://jkur.com.au/app4apps/server/pushtoken.php?pushid=' + data.userId;
            window.localStorage.setItem('pushid', data.userId);
            _this.http.get(url).subscribe(function (data) {
            }, function (err) {
            });
        });
    };
    HomePage.prototype.versionmessage = function (a) {
        this.thisversion = a;
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'New Version Available',
            subTitle: 'Please go to the App Store or Google Play Store to get the latest version of this App',
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.topapp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__topapp_topapp__["a" /* TopappPage */]);
    };
    HomePage.prototype.prevapps = function () {
    };
    HomePage.prototype.dologout = function () {
    };
    HomePage.prototype.myacc = function () {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/var/www/html/ionic/a4a/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      App4Apps\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n<div [innerHTML]="content" style="font-size:1.2em">\n</div>\n\n</ion-content>\n<ion-footer class="blk">\n<img [src]="banner" style="width:100%" >\n<ion-grid no-padding>\n<ion-row text-center>\n <ion-col col-3 (click)="topapp()">\n <ion-icon name="trophy"> </ion-icon>\n </ion-col>\n <ion-col col-3 (click)="prevapps()">\n <ion-icon name="photos"> </ion-icon>\n </ion-col>\n\n <ion-col col-3 (click)="myacc()" >\n <ion-icon name="contact"> </ion-icon>\n </ion-col>\n\n <ion-col col-3 (click)="dologout()" >\n <ion-icon name="exit"> </ion-icon>\n </ion-col>\n\n\n</ion-row>\n<ion-row text-center style="min-height:50px !important">\n\n <ion-col col-3 (click)="topapp()">\n Top<br>App\n </ion-col>\n\n <ion-col col-3 (click)="prevapps()">\n Past<br>Apps\n </ion-col>\n\n <ion-col col-3 (click)="myacc()" >\n My<br>Account\n </ion-col>\n\n <ion-col col-3 (click)="dologout()" >\n Log<br>Out\n </ion-col>\n\n\n</ion-row>\n\n</ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/ionic/a4a/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__["a" /* OneSignal */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_topapp_topapp__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_http__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_topapp_topapp__["a" /* TopappPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/topapp/topapp.module#TopappPageModule', name: 'TopappPage', segment: 'topapp', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_topapp_topapp__["a" /* TopappPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/ionic/a4a/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/var/www/html/ionic/a4a/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map