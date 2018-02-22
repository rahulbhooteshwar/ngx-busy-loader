webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".panel-heading {\n    color: white;\n    font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding:25px\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[0]}\">\r\n                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[0]}\">\r\n                    ngx-spinner-circle-gradient\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row is-table-row\">\r\n                        <div class=\"col-xs-3\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[0]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[0]}\">\r\n                                    xl(Extra Large)\r\n                                    <a href=\"#\" class=\"pull-right\">\r\n                                        <span class=\"glyphicon glyphicon-eye-open\"></span>\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n                                    <ngx-spinner-circle-gradient [color]=\"demoColors[0]\" [size]=\"'xl'\"></ngx-spinner-circle-gradient>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[0]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[0]}\">\r\n                                    lg(Large)\r\n                                    <a href=\"#\" class=\"pull-right\">\r\n                                        <span class=\"glyphicon glyphicon-eye-open\"></span>\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-gradient [color]=\"demoColors[0]\" [size]=\"'lg'\"></ngx-spinner-circle-gradient>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[0]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[0]}\">\r\n                                    md(Medium)\r\n                                    <a href=\"#\" class=\"pull-right\">\r\n                                        <span class=\"glyphicon glyphicon-eye-open\"></span>\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-gradient [color]=\"demoColors[0]\" [size]=\"'md'\"></ngx-spinner-circle-gradient>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[0]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[0]}\">\r\n                                    sm(small)\r\n                                    <a href=\"#\" class=\"pull-right\">\r\n                                        <span class=\"glyphicon glyphicon-eye-open\"></span>\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-gradient [color]=\"demoColors[0]\" [size]=\"'sm'\"></ngx-spinner-circle-gradient>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[0]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[0]}\">\r\n                                    xs(Extra Small)\r\n                                    <a href=\"#\" class=\"pull-right\">\r\n                                        <span class=\"glyphicon glyphicon-eye-open\"></span>\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-gradient [color]=\"demoColors[0]\" [size]=\"'xs'\"></ngx-spinner-circle-gradient>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-1\">\r\n                            <input type=\"color\" class=\"form-control pull-right\" name=\"firstColor\" [(ngModel)]=\"demoColors[0]\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[1]}\">\r\n                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[1]}\">\r\n                    ngx-spinner-circle-gradient-slow\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-3\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[1]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[1]}\">\r\n                                    xl(Extra Large)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n                                    <ngx-spinner-circle-gradient-slow [color]=\"demoColors[1]\" [size]=\"'xl'\"></ngx-spinner-circle-gradient-slow>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[1]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[1]}\">\r\n                                    lg(Large)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-gradient-slow [color]=\"demoColors[1]\" [size]=\"'lg'\"></ngx-spinner-circle-gradient-slow>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[1]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[1]}\">\r\n                                    md(Medium)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-gradient-slow [color]=\"demoColors[1]\" [size]=\"'md'\"></ngx-spinner-circle-gradient-slow>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[1]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[1]}\">\r\n                                    sm(small)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-gradient-slow [color]=\"demoColors[1]\" [size]=\"'sm'\"></ngx-spinner-circle-gradient-slow>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[1]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[1]}\">\r\n                                    xs(Extra Small)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-gradient-slow [color]=\"demoColors[1]\" [size]=\"'xs'\"></ngx-spinner-circle-gradient-slow>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-1\">\r\n                            <input type=\"color\" class=\"form-control pull-right\" name=\"firstColor\" [(ngModel)]=\"demoColors[1]\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[2]}\">\r\n                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[2]}\">\r\n                    ngx-spinner-circle-solid\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-3\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[2]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[2]}\">\r\n                                    xl(Extra Large)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n                                    <ngx-spinner-circle-solid [color]=\"demoColors[2]\" [size]=\"'xl'\"></ngx-spinner-circle-solid>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[2]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[2]}\">\r\n                                    lg(Large)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-solid [color]=\"demoColors[2]\" [size]=\"'lg'\"></ngx-spinner-circle-solid>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[2]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[2]}\">\r\n                                    md(Medium)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-solid [color]=\"demoColors[2]\" [size]=\"'md'\"></ngx-spinner-circle-solid>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[2]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[2]}\">\r\n                                    sm(small)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-solid [color]=\"demoColors[2]\" [size]=\"'sm'\"></ngx-spinner-circle-solid>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[2]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[2]}\">\r\n                                    xs(Extra Small)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-solid [color]=\"demoColors[2]\" [size]=\"'xs'\"></ngx-spinner-circle-solid>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-1\">\r\n                            <input type=\"color\" class=\"form-control pull-right\" name=\"firstColor\" [(ngModel)]=\"demoColors[2]\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[3]}\">\r\n                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[3]}\">\r\n                    ngx-spinner-circle-dotted-gradient\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-3\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[3]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[3]}\">\r\n                                    xl(Extra Large)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n                                    <ngx-spinner-circle-dotted-gradient [color]=\"demoColors[3]\" [size]=\"'xl'\"></ngx-spinner-circle-dotted-gradient>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[3]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[3]}\">\r\n                                    lg(Large)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-dotted-gradient [color]=\"demoColors[3]\" [size]=\"'lg'\"></ngx-spinner-circle-dotted-gradient>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[3]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[3]}\">\r\n                                    md(Medium)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-dotted-gradient [color]=\"demoColors[3]\" [size]=\"'md'\"></ngx-spinner-circle-dotted-gradient>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[3]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[3]}\">\r\n                                    sm(small)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-dotted-gradient [color]=\"demoColors[3]\" [size]=\"'sm'\"></ngx-spinner-circle-dotted-gradient>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[3]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[3]}\">\r\n                                    xs(Extra Small)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-dotted-gradient [color]=\"demoColors[3]\" [size]=\"'xs'\"></ngx-spinner-circle-dotted-gradient>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-1\">\r\n                            <input type=\"color\" class=\"form-control pull-right\" name=\"firstColor\" [(ngModel)]=\"demoColors[3]\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[4]}\">\r\n                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[4]}\">\r\n                    ngx-spinner-circle-dotted-gradient-slow\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-3\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[4]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[4]}\">\r\n                                    xl(Extra Large)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n                                    <ngx-spinner-circle-dotted-gradient-slow [color]=\"demoColors[4]\" [size]=\"'xl'\"></ngx-spinner-circle-dotted-gradient-slow>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[4]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[4]}\">\r\n                                    lg(Large)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-dotted-gradient-slow [color]=\"demoColors[4]\" [size]=\"'lg'\"></ngx-spinner-circle-dotted-gradient-slow>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[4]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[4]}\">\r\n                                    md(Medium)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-dotted-gradient-slow [color]=\"demoColors[4]\" [size]=\"'md'\"></ngx-spinner-circle-dotted-gradient-slow>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[4]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[4]}\">\r\n                                    sm(small)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-dotted-gradient-slow [color]=\"demoColors[4]\" [size]=\"'sm'\"></ngx-spinner-circle-dotted-gradient-slow>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[4]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[4]}\">\r\n                                    xs(Extra Small)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-circle-dotted-gradient-slow [color]=\"demoColors[4]\" [size]=\"'xs'\"></ngx-spinner-circle-dotted-gradient-slow>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-1\">\r\n                            <input type=\"color\" class=\"form-control pull-right\" name=\"firstColor\" [(ngModel)]=\"demoColors[4]\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[5]}\">\r\n                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[5]}\">\r\n                    ngx-spinner-single-dotted-line\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-3\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[5]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[5]}\">\r\n                                    xl(Extra Large)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n                                    <ngx-spinner-single-dotted-line [color]=\"demoColors[5]\" [size]=\"'xl'\"></ngx-spinner-single-dotted-line>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[5]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[5]}\">\r\n                                    lg(Large)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-single-dotted-line [color]=\"demoColors[5]\" [size]=\"'lg'\"></ngx-spinner-single-dotted-line>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[5]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[5]}\">\r\n                                    md(Medium)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-single-dotted-line [color]=\"demoColors[5]\" [size]=\"'md'\"></ngx-spinner-single-dotted-line>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[5]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[5]}\">\r\n                                    sm(small)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-single-dotted-line [color]=\"demoColors[5]\" [size]=\"'sm'\"></ngx-spinner-single-dotted-line>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[5]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[5]}\">\r\n                                    xs(Extra Small)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-single-dotted-line [color]=\"demoColors[5]\" [size]=\"'xs'\"></ngx-spinner-single-dotted-line>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-1\">\r\n                            <input type=\"color\" class=\"form-control pull-right\" name=\"firstColor\" [(ngModel)]=\"demoColors[5]\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[6]}\">\r\n                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[6]}\">\r\n                    ngx-spinner-lines-vertical\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-3\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[6]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[6]}\">\r\n                                    xl(Extra Large)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n                                    <ngx-spinner-lines-vertical [color]=\"demoColors[6]\" [size]=\"'xl'\"></ngx-spinner-lines-vertical>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[6]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[6]}\">\r\n                                    lg(Large)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-lines-vertical [color]=\"demoColors[6]\" [size]=\"'lg'\"></ngx-spinner-lines-vertical>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[6]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[6]}\">\r\n                                    md(Medium)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-lines-vertical [color]=\"demoColors[6]\" [size]=\"'md'\"></ngx-spinner-lines-vertical>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[6]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[6]}\">\r\n                                    sm(small)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-lines-vertical [color]=\"demoColors[6]\" [size]=\"'sm'\"></ngx-spinner-lines-vertical>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-2\">\r\n                            <div class=\"panel\" [ngStyle]=\"{'border-color': demoColors[6]}\">\r\n                                <div class=\"panel-heading\" [ngStyle]=\"{'background-color': demoColors[6]}\">\r\n                                    xs(Extra Small)\r\n                                </div>\r\n                                <div class=\"panel-body\">\r\n\r\n                                    <ngx-spinner-lines-vertical [color]=\"demoColors[6]\" [size]=\"'xs'\"></ngx-spinner-lines-vertical>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xs-1\">\r\n                            <input type=\"color\" class=\"form-control pull-right\" name=\"firstColor\" [(ngModel)]=\"demoColors[6]\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.demoColors = [
            '#80e062',
            '#8081ff',
            '#fa820a',
            '#400080',
            '#fb3ce8',
            '#fb3c6b',
            '#808000'
        ];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ngx-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_spinner_spinner_module__ = __webpack_require__("./src/app/modules/spinner/spinner.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__modules_spinner_spinner_module__["a" /* SpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-dotted-gradient-slow/spinner-circle-dotted-gradient-slow.component.css":
/***/ (function(module, exports) {

module.exports = ".loader {\r\n    color: #ff8040;\r\n    font-size: 90px;\r\n    text-indent: -9999em;\r\n    overflow: hidden;\r\n    width: 1em;\r\n    height: 1em;\r\n    border-radius: 50%;\r\n    margin: 72px auto;\r\n    position: relative;\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n    -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\r\n    animation: load6 1.7s infinite ease, round 1.7s infinite ease;\r\n}\r\n\r\n@-webkit-keyframes load6 {\r\n    0% {\r\n        -webkit-box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n    }\r\n    5%,\r\n    95% {\r\n        -webkit-box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n    }\r\n    10%,\r\n    59% {\r\n        -webkit-box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\r\n                box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\r\n    }\r\n    20% {\r\n        -webkit-box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\r\n                box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\r\n    }\r\n    38% {\r\n        -webkit-box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\r\n                box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\r\n    }\r\n    100% {\r\n        -webkit-box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n    }\r\n}\r\n\r\n@keyframes load6 {\r\n    0% {\r\n        -webkit-box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n    }\r\n    5%,\r\n    95% {\r\n        -webkit-box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n    }\r\n    10%,\r\n    59% {\r\n        -webkit-box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\r\n                box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\r\n    }\r\n    20% {\r\n        -webkit-box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\r\n                box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\r\n    }\r\n    38% {\r\n        -webkit-box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\r\n                box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\r\n    }\r\n    100% {\r\n        -webkit-box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n                box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes round {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes round {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-dotted-gradient-slow/spinner-circle-dotted-gradient-slow.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" [ngStyle]=\"spinnerStyle\">Loading...</div>\n"

/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-dotted-gradient-slow/spinner-circle-dotted-gradient-slow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerCircleDottedGradientSlowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerCircleDottedGradientSlowComponent = /** @class */ (function () {
    function SpinnerCircleDottedGradientSlowComponent() {
        this.standardSizes = {
            'xs': '25px',
            'sm': '35px',
            'md': '45px',
            'lg': '70px',
            'xl': '100px',
        };
    }
    SpinnerCircleDottedGradientSlowComponent.prototype.ngOnInit = function () {
        this.setStyle();
    };
    SpinnerCircleDottedGradientSlowComponent.prototype.ngOnChanges = function (changes) {
        var color = changes.color;
        var size = changes.size;
        if ((color.previousValue && color.previousValue != color.currentValue && !color.firstChange) || (size.previousValue && size.previousValue != size.currentValue && !size.firstChange)) {
            this.setStyle();
        }
    };
    SpinnerCircleDottedGradientSlowComponent.prototype.setStyle = function () {
        this.color = this.color ? this.color : '#ff8000';
        this.spinnerStyle = {
            'color': this.color
        };
        if (Object.keys(this.standardSizes).indexOf(this.size) > -1) {
            this.spinnerStyle['font-size'] = this.standardSizes[this.size];
        }
        else {
            this.spinnerStyle['font-size'] = this.standardSizes.md;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], SpinnerCircleDottedGradientSlowComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], SpinnerCircleDottedGradientSlowComponent.prototype, "size", void 0);
    SpinnerCircleDottedGradientSlowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ngx-spinner-circle-dotted-gradient-slow',
            template: __webpack_require__("./src/app/modules/spinner/spinner-circle-dotted-gradient-slow/spinner-circle-dotted-gradient-slow.component.html"),
            styles: [__webpack_require__("./src/app/modules/spinner/spinner-circle-dotted-gradient-slow/spinner-circle-dotted-gradient-slow.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerCircleDottedGradientSlowComponent);
    return SpinnerCircleDottedGradientSlowComponent;
}());



/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-dotted-gradient/spinner-circle-dotted-gradient.component.css":
/***/ (function(module, exports) {

module.exports = ".loader {\r\n    color: #ff8040;\r\n    font-size: 15px;\r\n    margin: 100px auto;\r\n    width: 2em;\r\n    height: 2em;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    text-indent: -9999em;\r\n    -webkit-animation: load4 1.3s infinite linear;\r\n    animation: load4 1.3s infinite linear;\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n}\r\n\r\n@-webkit-keyframes load4 {\r\n    0%,\r\n    100% {\r\n        -webkit-box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\r\n                box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\r\n    }\r\n    12.5% {\r\n        -webkit-box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\r\n                box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\r\n    }\r\n    25% {\r\n        -webkit-box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\r\n                box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\r\n    }\r\n    37.5% {\r\n        -webkit-box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\r\n                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\r\n    }\r\n    50% {\r\n        -webkit-box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\r\n                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\r\n    }\r\n    62.5% {\r\n        -webkit-box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\r\n                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\r\n    }\r\n    75% {\r\n        -webkit-box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\r\n                box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\r\n    }\r\n    87.5% {\r\n        -webkit-box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\r\n                box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\r\n    }\r\n}\r\n\r\n@keyframes load4 {\r\n    0%,\r\n    100% {\r\n        -webkit-box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\r\n                box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\r\n    }\r\n    12.5% {\r\n        -webkit-box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\r\n                box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\r\n    }\r\n    25% {\r\n        -webkit-box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\r\n                box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\r\n    }\r\n    37.5% {\r\n        -webkit-box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\r\n                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\r\n    }\r\n    50% {\r\n        -webkit-box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\r\n                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\r\n    }\r\n    62.5% {\r\n        -webkit-box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\r\n                box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\r\n    }\r\n    75% {\r\n        -webkit-box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\r\n                box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\r\n    }\r\n    87.5% {\r\n        -webkit-box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\r\n                box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-dotted-gradient/spinner-circle-dotted-gradient.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" [ngStyle]=\"spinnerStyle\">Loading...</div>\n"

/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-dotted-gradient/spinner-circle-dotted-gradient.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerCircleDottedGradientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerCircleDottedGradientComponent = /** @class */ (function () {
    function SpinnerCircleDottedGradientComponent() {
        this.standardSizes = {
            'xs': '5px',
            'sm': '10px',
            'md': '15px',
            'lg': '20px',
            'xl': '25px',
        };
    }
    SpinnerCircleDottedGradientComponent.prototype.ngOnInit = function () {
        this.setStyle();
    };
    SpinnerCircleDottedGradientComponent.prototype.ngOnChanges = function (changes) {
        var color = changes.color;
        var size = changes.size;
        if ((color.previousValue && color.previousValue != color.currentValue && !color.firstChange) || (size.previousValue && size.previousValue != size.currentValue && !size.firstChange)) {
            this.setStyle();
        }
    };
    SpinnerCircleDottedGradientComponent.prototype.setStyle = function () {
        this.color = this.color ? this.color : '#ff8000';
        this.spinnerStyle = {
            'color': this.color
        };
        if (Object.keys(this.standardSizes).indexOf(this.size) > -1) {
            this.spinnerStyle['font-size'] = this.standardSizes[this.size];
        }
        else {
            this.spinnerStyle['font-size'] = this.standardSizes.md;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], SpinnerCircleDottedGradientComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], SpinnerCircleDottedGradientComponent.prototype, "size", void 0);
    SpinnerCircleDottedGradientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ngx-spinner-circle-dotted-gradient',
            template: __webpack_require__("./src/app/modules/spinner/spinner-circle-dotted-gradient/spinner-circle-dotted-gradient.component.html"),
            styles: [__webpack_require__("./src/app/modules/spinner/spinner-circle-dotted-gradient/spinner-circle-dotted-gradient.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerCircleDottedGradientComponent);
    return SpinnerCircleDottedGradientComponent;
}());



/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-dotted/spinner-circle-dotted.component.css":
/***/ (function(module, exports) {

module.exports = ".loader {\n    margin: 100px auto;\n    font-size: 25px;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    position: relative;\n    text-indent: -9999em;\n    -webkit-animation: load5 1.1s infinite ease;\n    animation: load5 1.1s infinite ease;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n  }\n  @-webkit-keyframes load5 {\n    0%,\n    100% {\n      -webkit-box-shadow: 0em -2.6em 0em 0em #ff8000, 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.5), -1.8em -1.8em 0 0em rgba(255,128,0, 0.7);\n              box-shadow: 0em -2.6em 0em 0em #ff8000, 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.5), -1.8em -1.8em 0 0em rgba(255,128,0, 0.7);\n    }\n    12.5% {\n      -webkit-box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.7), 1.8em -1.8em 0 0em #ff8000, 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.5);\n              box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.7), 1.8em -1.8em 0 0em #ff8000, 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.5);\n    }\n    25% {\n      -webkit-box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.5), 1.8em -1.8em 0 0em rgba(255,128,0, 0.7), 2.5em 0em 0 0em #ff8000, 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n              box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.5), 1.8em -1.8em 0 0em rgba(255,128,0, 0.7), 2.5em 0em 0 0em #ff8000, 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n    }\n    37.5% {\n      -webkit-box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.5), 2.5em 0em 0 0em rgba(255,128,0, 0.7), 1.75em 1.75em 0 0em #ff8000, 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n              box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.5), 2.5em 0em 0 0em rgba(255,128,0, 0.7), 1.75em 1.75em 0 0em #ff8000, 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n    }\n    50% {\n      -webkit-box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.5), 1.75em 1.75em 0 0em rgba(255,128,0, 0.7), 0em 2.5em 0 0em #ff8000, -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n              box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.5), 1.75em 1.75em 0 0em rgba(255,128,0, 0.7), 0em 2.5em 0 0em #ff8000, -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n    }\n    62.5% {\n      -webkit-box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.5), 0em 2.5em 0 0em rgba(255,128,0, 0.7), -1.8em 1.8em 0 0em #ff8000, -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n              box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.5), 0em 2.5em 0 0em rgba(255,128,0, 0.7), -1.8em 1.8em 0 0em #ff8000, -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n    }\n    75% {\n      -webkit-box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.5), -1.8em 1.8em 0 0em rgba(255,128,0, 0.7), -2.6em 0em 0 0em #ff8000, -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n              box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.5), -1.8em 1.8em 0 0em rgba(255,128,0, 0.7), -2.6em 0em 0 0em #ff8000, -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n    }\n    87.5% {\n      -webkit-box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.5), -2.6em 0em 0 0em rgba(255,128,0, 0.7), -1.8em -1.8em 0 0em #ff8000;\n              box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.5), -2.6em 0em 0 0em rgba(255,128,0, 0.7), -1.8em -1.8em 0 0em #ff8000;\n    }\n  }\n  @keyframes load5 {\n    0%,\n    100% {\n      -webkit-box-shadow: 0em -2.6em 0em 0em #ff8000, 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.5), -1.8em -1.8em 0 0em rgba(255,128,0, 0.7);\n              box-shadow: 0em -2.6em 0em 0em #ff8000, 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.5), -1.8em -1.8em 0 0em rgba(255,128,0, 0.7);\n    }\n    12.5% {\n      -webkit-box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.7), 1.8em -1.8em 0 0em #ff8000, 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.5);\n              box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.7), 1.8em -1.8em 0 0em #ff8000, 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.5);\n    }\n    25% {\n      -webkit-box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.5), 1.8em -1.8em 0 0em rgba(255,128,0, 0.7), 2.5em 0em 0 0em #ff8000, 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n              box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.5), 1.8em -1.8em 0 0em rgba(255,128,0, 0.7), 2.5em 0em 0 0em #ff8000, 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n    }\n    37.5% {\n      -webkit-box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.5), 2.5em 0em 0 0em rgba(255,128,0, 0.7), 1.75em 1.75em 0 0em #ff8000, 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n              box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.5), 2.5em 0em 0 0em rgba(255,128,0, 0.7), 1.75em 1.75em 0 0em #ff8000, 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n    }\n    50% {\n      -webkit-box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.5), 1.75em 1.75em 0 0em rgba(255,128,0, 0.7), 0em 2.5em 0 0em #ff8000, -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n              box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.5), 1.75em 1.75em 0 0em rgba(255,128,0, 0.7), 0em 2.5em 0 0em #ff8000, -1.8em 1.8em 0 0em rgba(255,128,0, 0.2), -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n    }\n    62.5% {\n      -webkit-box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.5), 0em 2.5em 0 0em rgba(255,128,0, 0.7), -1.8em 1.8em 0 0em #ff8000, -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n              box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.5), 0em 2.5em 0 0em rgba(255,128,0, 0.7), -1.8em 1.8em 0 0em #ff8000, -2.6em 0em 0 0em rgba(255,128,0, 0.2), -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n    }\n    75% {\n      -webkit-box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.5), -1.8em 1.8em 0 0em rgba(255,128,0, 0.7), -2.6em 0em 0 0em #ff8000, -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n              box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.5), -1.8em 1.8em 0 0em rgba(255,128,0, 0.7), -2.6em 0em 0 0em #ff8000, -1.8em -1.8em 0 0em rgba(255,128,0, 0.2);\n    }\n    87.5% {\n      -webkit-box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.5), -2.6em 0em 0 0em rgba(255,128,0, 0.7), -1.8em -1.8em 0 0em #ff8000;\n              box-shadow: 0em -2.6em 0em 0em rgba(255,128,0, 0.2), 1.8em -1.8em 0 0em rgba(255,128,0, 0.2), 2.5em 0em 0 0em rgba(255,128,0, 0.2), 1.75em 1.75em 0 0em rgba(255,128,0, 0.2), 0em 2.5em 0 0em rgba(255,128,0, 0.2), -1.8em 1.8em 0 0em rgba(255,128,0, 0.5), -2.6em 0em 0 0em rgba(255,128,0, 0.7), -1.8em -1.8em 0 0em #ff8000;\n    }\n  }\n"

/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-dotted/spinner-circle-dotted.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\">Loading...</div>\n"

/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-dotted/spinner-circle-dotted.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerCircleDottedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerCircleDottedComponent = /** @class */ (function () {
    function SpinnerCircleDottedComponent() {
    }
    SpinnerCircleDottedComponent.prototype.ngOnInit = function () {
    };
    SpinnerCircleDottedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ngx-spinner-circle-dotted',
            template: __webpack_require__("./src/app/modules/spinner/spinner-circle-dotted/spinner-circle-dotted.component.html"),
            styles: [__webpack_require__("./src/app/modules/spinner/spinner-circle-dotted/spinner-circle-dotted.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerCircleDottedComponent);
    return SpinnerCircleDottedComponent;
}());



/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-gradient-slow/spinner-circle-gradient-slow.component.css":
/***/ (function(module, exports) {

module.exports = ".loader {\r\n    font-size: 10px;\r\n    margin: 50px auto;\r\n    text-indent: -9999em;\r\n    width: 9em;\r\n    height: 9em;\r\n    border-radius: 50%;\r\n    background: #ff8000;\r\n    background: -webkit-gradient(linear, left top, right top, color-stop(10%, #ff8000), color-stop(42%, rgba(255, 128, 0, 0)));\r\n    background: linear-gradient(to right, #ff8000 10%, rgba(255, 128, 0, 0) 42%);\r\n    position: relative;\r\n    -webkit-animation: load2 4s infinite linear;\r\n    animation: load2 4s infinite linear;\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n}\r\n\r\n.loader:after {\r\n    background: #fff;\r\n    width: 75%;\r\n    height: 75%;\r\n    border-radius: 50%;\r\n    content: '';\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n@-webkit-keyframes load2 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes load2 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-gradient-slow/spinner-circle-gradient-slow.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" [ngStyle]=\"spinnerStyle\">Loading...</div>\n"

/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-gradient-slow/spinner-circle-gradient-slow.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerCircleGradientSlowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_is_js__ = __webpack_require__("./node_modules/is_js/is.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_is_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_is_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerCircleGradientSlowComponent = /** @class */ (function () {
    function SpinnerCircleGradientSlowComponent() {
        this.standardSizes = {
            'xs': '3em',
            'sm': '5em',
            'md': '9em',
            'lg': '20em',
            'xl': '25em',
        };
    }
    SpinnerCircleGradientSlowComponent.prototype.ngOnInit = function () {
        this.setStyle();
    };
    SpinnerCircleGradientSlowComponent.prototype.ngOnChanges = function (changes) {
        var color = changes.color;
        var size = changes.size;
        if ((color.previousValue && color.previousValue != color.currentValue && !color.firstChange) || (size.previousValue && size.previousValue != size.currentValue && !size.firstChange)) {
            this.setStyle();
        }
    };
    SpinnerCircleGradientSlowComponent.prototype.setStyle = function () {
        this.color = this.color ? this.color : '#ff8000';
        this.spinnerStyle = {
            'background': "linear-gradient(to right, " + this.color + " 10%, rgba(255,128,0, 0) 42%)"
        };
        if (__WEBPACK_IMPORTED_MODULE_1_is_js__["chrome"]() || __WEBPACK_IMPORTED_MODULE_1_is_js__["safari"]()) {
            this.spinnerStyle['background'] = "-webkit-linear-gradient(left, " + this.color + " 10%, rgba(255,128,0, 0) 42%)";
        }
        else if (__WEBPACK_IMPORTED_MODULE_1_is_js__["firefox"]()) {
            this.spinnerStyle['background'] = "-moz-linear-gradient(left, " + this.color + " 10%, rgba(255,128,0, 0) 42%)";
        }
        else if (__WEBPACK_IMPORTED_MODULE_1_is_js__["opera"]()) {
            this.spinnerStyle['background'] = "-o-linear-gradient(left, " + this.color + " 10%, rgba(255,128,0, 0) 42%)";
        }
        else if (__WEBPACK_IMPORTED_MODULE_1_is_js__["ie"]()) {
            this.spinnerStyle['background'] = "-ms-linear-gradient(left, " + this.color + " 10%, rgba(255,128,0, 0) 42%)";
        }
        if (Object.keys(this.standardSizes).indexOf(this.size) > -1) {
            this.spinnerStyle['height'] = this.standardSizes[this.size];
            this.spinnerStyle['width'] = this.standardSizes[this.size];
        }
        else {
            this.spinnerStyle['height'] = this.standardSizes.md;
            this.spinnerStyle['width'] = this.standardSizes.md;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], SpinnerCircleGradientSlowComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], SpinnerCircleGradientSlowComponent.prototype, "size", void 0);
    SpinnerCircleGradientSlowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ngx-spinner-circle-gradient-slow',
            template: __webpack_require__("./src/app/modules/spinner/spinner-circle-gradient-slow/spinner-circle-gradient-slow.component.html"),
            styles: [__webpack_require__("./src/app/modules/spinner/spinner-circle-gradient-slow/spinner-circle-gradient-slow.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerCircleGradientSlowComponent);
    return SpinnerCircleGradientSlowComponent;
}());



/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-gradient/spinner-circle-gradient.component.css":
/***/ (function(module, exports) {

module.exports = ".loader {\r\n    font-size: 10px;\r\n    margin: 50px auto;\r\n    text-indent: -9999em;\r\n    width: 9em;\r\n    height: 9em;\r\n    border-radius: 50%;\r\n    background: #ff8000;\r\n    background: -webkit-gradient(linear, left top, right top, color-stop(10%, #ff8000), color-stop(42%, rgba(255, 128, 0, 0)));\r\n    background: linear-gradient(to right, #ff8000 10%, rgba(255, 128, 0, 0) 42%);\r\n    position: relative;\r\n    -webkit-animation: load3 1.4s infinite linear;\r\n    animation: load3 1.4s infinite linear;\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n}\r\n\r\n.loader:after {\r\n    background: #fff;\r\n    width: 75%;\r\n    height: 75%;\r\n    border-radius: 50%;\r\n    content: '';\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n@-webkit-keyframes load3 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes load3 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-gradient/spinner-circle-gradient.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" [ngStyle]=\"spinnerStyle\">Loading...</div>"

/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-gradient/spinner-circle-gradient.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerCircleGradientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_is_js__ = __webpack_require__("./node_modules/is_js/is.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_is_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_is_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerCircleGradientComponent = /** @class */ (function () {
    function SpinnerCircleGradientComponent() {
        this.standardSizes = {
            'xs': '3em',
            'sm': '5em',
            'md': '9em',
            'lg': '20em',
            'xl': '25em',
        };
    }
    SpinnerCircleGradientComponent.prototype.ngOnInit = function () {
        this.setStyle();
    };
    SpinnerCircleGradientComponent.prototype.ngOnChanges = function (changes) {
        var color = changes.color;
        var size = changes.size;
        if ((color.previousValue && color.previousValue != color.currentValue && !color.firstChange) || (size.previousValue && size.previousValue != size.currentValue && !size.firstChange)) {
            this.setStyle();
        }
    };
    SpinnerCircleGradientComponent.prototype.setStyle = function () {
        this.color = this.color ? this.color : '#ff8000';
        this.spinnerStyle = {
            'background': "linear-gradient(to right, " + this.color + " 10%, rgba(255,128,0, 0) 42%)"
        };
        if (__WEBPACK_IMPORTED_MODULE_1_is_js__["chrome"]() || __WEBPACK_IMPORTED_MODULE_1_is_js__["safari"]()) {
            this.spinnerStyle['background'] = "-webkit-linear-gradient(left, " + this.color + " 10%, rgba(255,128,0, 0) 42%)";
        }
        else if (__WEBPACK_IMPORTED_MODULE_1_is_js__["firefox"]()) {
            this.spinnerStyle['background'] = "-moz-linear-gradient(left, " + this.color + " 10%, rgba(255,128,0, 0) 42%)";
        }
        else if (__WEBPACK_IMPORTED_MODULE_1_is_js__["opera"]()) {
            this.spinnerStyle['background'] = "-o-linear-gradient(left, " + this.color + " 10%, rgba(255,128,0, 0) 42%)";
        }
        else if (__WEBPACK_IMPORTED_MODULE_1_is_js__["ie"]()) {
            this.spinnerStyle['background'] = "-ms-linear-gradient(left, " + this.color + " 10%, rgba(255,128,0, 0) 42%)";
        }
        if (Object.keys(this.standardSizes).indexOf(this.size) > -1) {
            this.spinnerStyle['height'] = this.standardSizes[this.size];
            this.spinnerStyle['width'] = this.standardSizes[this.size];
        }
        else {
            this.spinnerStyle['height'] = this.standardSizes.md;
            this.spinnerStyle['width'] = this.standardSizes.md;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], SpinnerCircleGradientComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], SpinnerCircleGradientComponent.prototype, "size", void 0);
    SpinnerCircleGradientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ngx-spinner-circle-gradient',
            template: __webpack_require__("./src/app/modules/spinner/spinner-circle-gradient/spinner-circle-gradient.component.html"),
            styles: [__webpack_require__("./src/app/modules/spinner/spinner-circle-gradient/spinner-circle-gradient.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerCircleGradientComponent);
    return SpinnerCircleGradientComponent;
}());



/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-solid/spinner-circle-solid.component.css":
/***/ (function(module, exports) {

module.exports = ".loader:after {\r\n    background: #fff;\r\n    border-radius: 50%;\r\n    content: '';\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n.loader {\r\n    width: 10em;\r\n    height: 10em;\r\n    border-radius: 50%;\r\n    background: #ff8000;\r\n    margin: 50px auto;\r\n    font-size: 10px;\r\n    position: relative;\r\n    text-indent: -9999em;\r\n    border-top: 1.1em solid rgba(255, 255, 255, 0.2);\r\n    border-right: 1.1em solid rgba(255, 255, 255, 0.2);\r\n    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\r\n    border-left: 1.1em solid #ffffff;\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n    -webkit-animation: load8 1.1s infinite linear;\r\n    animation: load8 1.1s infinite linear;\r\n}\r\n\r\n@-webkit-keyframes load8 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes load8 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-solid/spinner-circle-solid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" [ngStyle]=\"spinnerStyle\">Loading...</div>\n"

/***/ }),

/***/ "./src/app/modules/spinner/spinner-circle-solid/spinner-circle-solid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerCircleSolidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerCircleSolidComponent = /** @class */ (function () {
    function SpinnerCircleSolidComponent() {
        this.standardSizes = {
            'xs': '3em',
            'sm': '5em',
            'md': '9em',
            'lg': '20em',
            'xl': '25em',
        };
    }
    SpinnerCircleSolidComponent.prototype.ngOnInit = function () {
        this.setStyle();
    };
    SpinnerCircleSolidComponent.prototype.ngOnChanges = function (changes) {
        var color = changes.color;
        var size = changes.size;
        if ((color.previousValue && color.previousValue != color.currentValue && !color.firstChange) || (size.previousValue && size.previousValue != size.currentValue && !size.firstChange)) {
            this.setStyle();
        }
    };
    SpinnerCircleSolidComponent.prototype.setStyle = function () {
        this.color = this.color ? this.color : '#ff8000';
        this.spinnerStyle = {
            'background': this.color
        };
        if (Object.keys(this.standardSizes).indexOf(this.size) > -1) {
            this.spinnerStyle['height'] = this.standardSizes[this.size];
            this.spinnerStyle['width'] = this.standardSizes[this.size];
        }
        else {
            this.spinnerStyle['height'] = this.standardSizes.md;
            this.spinnerStyle['width'] = this.standardSizes.md;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], SpinnerCircleSolidComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], SpinnerCircleSolidComponent.prototype, "size", void 0);
    SpinnerCircleSolidComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ngx-spinner-circle-solid',
            template: __webpack_require__("./src/app/modules/spinner/spinner-circle-solid/spinner-circle-solid.component.html"),
            styles: [__webpack_require__("./src/app/modules/spinner/spinner-circle-solid/spinner-circle-solid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerCircleSolidComponent);
    return SpinnerCircleSolidComponent;
}());



/***/ }),

/***/ "./src/app/modules/spinner/spinner-lines-vertical/spinner-lines-vertical.component.css":
/***/ (function(module, exports) {

module.exports = ".loader {\r\n    --main-bg-color: #ff8040;\r\n}\r\n\r\n.loader,\r\n.loader:before,\r\n.loader:after {\r\n    background: var(--main-bg-color);\r\n    -webkit-animation: load1 1s infinite ease-in-out;\r\n    animation: load1 1s infinite ease-in-out;\r\n    width: 1em;\r\n    height: 4em;\r\n}\r\n\r\n.loader {\r\n    color: var(--main-bg-color);\r\n    text-indent: -9999em;\r\n    margin: 88px auto;\r\n    position: relative;\r\n    font-size: 11px;\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n    -webkit-animation-delay: -0.16s;\r\n    animation-delay: -0.16s;\r\n}\r\n\r\n.loader:before,\r\n.loader:after {\r\n    position: absolute;\r\n    top: 0;\r\n    content: '';\r\n}\r\n\r\n.loader:before {\r\n    left: -1.5em;\r\n    -webkit-animation-delay: -0.32s;\r\n    animation-delay: -0.32s;\r\n}\r\n\r\n.loader:after {\r\n    left: 1.5em;\r\n}\r\n\r\n@-webkit-keyframes load1 {\r\n    0%,\r\n    80%,\r\n    100% {\r\n        -webkit-box-shadow: 0 0;\r\n                box-shadow: 0 0;\r\n        height: 4em;\r\n    }\r\n    40% {\r\n        -webkit-box-shadow: 0 -2em;\r\n                box-shadow: 0 -2em;\r\n        height: 5em;\r\n    }\r\n}\r\n\r\n@keyframes load1 {\r\n    0%,\r\n    80%,\r\n    100% {\r\n        -webkit-box-shadow: 0 0;\r\n                box-shadow: 0 0;\r\n        height: 4em;\r\n    }\r\n    40% {\r\n        -webkit-box-shadow: 0 -2em;\r\n                box-shadow: 0 -2em;\r\n        height: 5em;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/spinner/spinner-lines-vertical/spinner-lines-vertical.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" [attr.style]=\"domSanitizer.bypassSecurityTrustStyle('--main-bg-color:' + color + ';' + 'font-size:' + fontSize)\">Loading...</div>\n"

/***/ }),

/***/ "./src/app/modules/spinner/spinner-lines-vertical/spinner-lines-vertical.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerLinesVerticalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerLinesVerticalComponent = /** @class */ (function () {
    function SpinnerLinesVerticalComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.standardSizes = {
            'xs': '5px',
            'sm': '10px',
            'md': '15px',
            'lg': '20px',
            'xl': '30px',
        };
    }
    SpinnerLinesVerticalComponent.prototype.ngOnInit = function () {
        this.setStyle();
    };
    SpinnerLinesVerticalComponent.prototype.ngOnChanges = function (changes) {
        var color = changes.color;
        var size = changes.size;
        if ((color.previousValue && color.previousValue != color.currentValue && !color.firstChange) || (size.previousValue && size.previousValue != size.currentValue && !size.firstChange)) {
            this.setStyle();
        }
    };
    SpinnerLinesVerticalComponent.prototype.setStyle = function () {
        this.color = this.color ? this.color : '#fb3c6b';
        if (Object.keys(this.standardSizes).indexOf(this.size) > -1) {
            this.fontSize = this.standardSizes[this.size];
        }
        else {
            this.fontSize = this.standardSizes.md;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], SpinnerLinesVerticalComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], SpinnerLinesVerticalComponent.prototype, "size", void 0);
    SpinnerLinesVerticalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ngx-spinner-lines-vertical',
            template: __webpack_require__("./src/app/modules/spinner/spinner-lines-vertical/spinner-lines-vertical.component.html"),
            styles: [__webpack_require__("./src/app/modules/spinner/spinner-lines-vertical/spinner-lines-vertical.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SpinnerLinesVerticalComponent);
    return SpinnerLinesVerticalComponent;
}());



/***/ }),

/***/ "./src/app/modules/spinner/spinner-single-dotted-line/spinner-single-dotted-line.component.css":
/***/ (function(module, exports) {

module.exports = ".loader,\r\n.loader:before,\r\n.loader:after {\r\n    border-radius: 50%;\r\n    width: 2.5em;\r\n    height: 2.5em;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n    -webkit-animation: load7 1.8s infinite ease-in-out;\r\n    animation: load7 1.8s infinite ease-in-out;\r\n}\r\n\r\n.loader {\r\n    color: #ff8040;\r\n    font-size: 10px;\r\n    margin: 80px auto;\r\n    position: relative;\r\n    text-indent: -9999em;\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n    -webkit-animation-delay: -0.16s;\r\n    animation-delay: -0.16s;\r\n}\r\n\r\n.loader:before,\r\n.loader:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n}\r\n\r\n.loader:before {\r\n    left: -3.5em;\r\n    -webkit-animation-delay: -0.32s;\r\n    animation-delay: -0.32s;\r\n}\r\n\r\n.loader:after {\r\n    left: 3.5em;\r\n}\r\n\r\n@-webkit-keyframes load7 {\r\n    0%,\r\n    80%,\r\n    100% {\r\n        -webkit-box-shadow: 0 2.5em 0 -1.3em;\r\n                box-shadow: 0 2.5em 0 -1.3em;\r\n    }\r\n    40% {\r\n        -webkit-box-shadow: 0 2.5em 0 0;\r\n                box-shadow: 0 2.5em 0 0;\r\n    }\r\n}\r\n\r\n@keyframes load7 {\r\n    0%,\r\n    80%,\r\n    100% {\r\n        -webkit-box-shadow: 0 2.5em 0 -1.3em;\r\n                box-shadow: 0 2.5em 0 -1.3em;\r\n    }\r\n    40% {\r\n        -webkit-box-shadow: 0 2.5em 0 0;\r\n                box-shadow: 0 2.5em 0 0;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/spinner/spinner-single-dotted-line/spinner-single-dotted-line.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" [ngStyle]=\"spinnerStyle\">Loading...</div>\n"

/***/ }),

/***/ "./src/app/modules/spinner/spinner-single-dotted-line/spinner-single-dotted-line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerSingleDottedLineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerSingleDottedLineComponent = /** @class */ (function () {
    function SpinnerSingleDottedLineComponent() {
        this.standardSizes = {
            'xs': '5px',
            'sm': '10px',
            'md': '15px',
            'lg': '20px',
            'xl': '30px',
        };
    }
    SpinnerSingleDottedLineComponent.prototype.ngOnInit = function () {
        this.setStyle();
    };
    SpinnerSingleDottedLineComponent.prototype.ngOnChanges = function (changes) {
        var color = changes.color;
        var size = changes.size;
        if ((color.previousValue && color.previousValue != color.currentValue && !color.firstChange) || (size.previousValue && size.previousValue != size.currentValue && !size.firstChange)) {
            this.setStyle();
        }
    };
    SpinnerSingleDottedLineComponent.prototype.setStyle = function () {
        this.color = this.color ? this.color : '#ff8000';
        this.spinnerStyle = {
            'color': this.color
        };
        if (Object.keys(this.standardSizes).indexOf(this.size) > -1) {
            this.spinnerStyle['font-size'] = this.standardSizes[this.size];
        }
        else {
            this.spinnerStyle['font-size'] = this.standardSizes.md;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], SpinnerSingleDottedLineComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], SpinnerSingleDottedLineComponent.prototype, "size", void 0);
    SpinnerSingleDottedLineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ngx-spinner-single-dotted-line',
            template: __webpack_require__("./src/app/modules/spinner/spinner-single-dotted-line/spinner-single-dotted-line.component.html"),
            styles: [__webpack_require__("./src/app/modules/spinner/spinner-single-dotted-line/spinner-single-dotted-line.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerSingleDottedLineComponent);
    return SpinnerSingleDottedLineComponent;
}());



/***/ }),

/***/ "./src/app/modules/spinner/spinner.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner_circle_dotted_spinner_circle_dotted_component__ = __webpack_require__("./src/app/modules/spinner/spinner-circle-dotted/spinner-circle-dotted.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spinner_circle_dotted_gradient_spinner_circle_dotted_gradient_component__ = __webpack_require__("./src/app/modules/spinner/spinner-circle-dotted-gradient/spinner-circle-dotted-gradient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinner_circle_dotted_gradient_slow_spinner_circle_dotted_gradient_slow_component__ = __webpack_require__("./src/app/modules/spinner/spinner-circle-dotted-gradient-slow/spinner-circle-dotted-gradient-slow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spinner_circle_gradient_spinner_circle_gradient_component__ = __webpack_require__("./src/app/modules/spinner/spinner-circle-gradient/spinner-circle-gradient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__spinner_circle_gradient_slow_spinner_circle_gradient_slow_component__ = __webpack_require__("./src/app/modules/spinner/spinner-circle-gradient-slow/spinner-circle-gradient-slow.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__spinner_circle_solid_spinner_circle_solid_component__ = __webpack_require__("./src/app/modules/spinner/spinner-circle-solid/spinner-circle-solid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__spinner_lines_vertical_spinner_lines_vertical_component__ = __webpack_require__("./src/app/modules/spinner/spinner-lines-vertical/spinner-lines-vertical.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__spinner_single_dotted_line_spinner_single_dotted_line_component__ = __webpack_require__("./src/app/modules/spinner/spinner-single-dotted-line/spinner-single-dotted-line.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SpinnerModule = /** @class */ (function () {
    function SpinnerModule() {
    }
    SpinnerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__spinner_circle_dotted_spinner_circle_dotted_component__["a" /* SpinnerCircleDottedComponent */],
                __WEBPACK_IMPORTED_MODULE_3__spinner_circle_dotted_gradient_spinner_circle_dotted_gradient_component__["a" /* SpinnerCircleDottedGradientComponent */],
                __WEBPACK_IMPORTED_MODULE_4__spinner_circle_dotted_gradient_slow_spinner_circle_dotted_gradient_slow_component__["a" /* SpinnerCircleDottedGradientSlowComponent */],
                __WEBPACK_IMPORTED_MODULE_5__spinner_circle_gradient_spinner_circle_gradient_component__["a" /* SpinnerCircleGradientComponent */],
                __WEBPACK_IMPORTED_MODULE_6__spinner_circle_gradient_slow_spinner_circle_gradient_slow_component__["a" /* SpinnerCircleGradientSlowComponent */],
                __WEBPACK_IMPORTED_MODULE_7__spinner_circle_solid_spinner_circle_solid_component__["a" /* SpinnerCircleSolidComponent */],
                __WEBPACK_IMPORTED_MODULE_8__spinner_lines_vertical_spinner_lines_vertical_component__["a" /* SpinnerLinesVerticalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__spinner_single_dotted_line_spinner_single_dotted_line_component__["a" /* SpinnerSingleDottedLineComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__spinner_circle_dotted_spinner_circle_dotted_component__["a" /* SpinnerCircleDottedComponent */],
                __WEBPACK_IMPORTED_MODULE_3__spinner_circle_dotted_gradient_spinner_circle_dotted_gradient_component__["a" /* SpinnerCircleDottedGradientComponent */],
                __WEBPACK_IMPORTED_MODULE_4__spinner_circle_dotted_gradient_slow_spinner_circle_dotted_gradient_slow_component__["a" /* SpinnerCircleDottedGradientSlowComponent */],
                __WEBPACK_IMPORTED_MODULE_5__spinner_circle_gradient_spinner_circle_gradient_component__["a" /* SpinnerCircleGradientComponent */],
                __WEBPACK_IMPORTED_MODULE_6__spinner_circle_gradient_slow_spinner_circle_gradient_slow_component__["a" /* SpinnerCircleGradientSlowComponent */],
                __WEBPACK_IMPORTED_MODULE_7__spinner_circle_solid_spinner_circle_solid_component__["a" /* SpinnerCircleSolidComponent */],
                __WEBPACK_IMPORTED_MODULE_8__spinner_lines_vertical_spinner_lines_vertical_component__["a" /* SpinnerLinesVerticalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__spinner_single_dotted_line_spinner_single_dotted_line_component__["a" /* SpinnerSingleDottedLineComponent */]
            ]
        })
    ], SpinnerModule);
    return SpinnerModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map