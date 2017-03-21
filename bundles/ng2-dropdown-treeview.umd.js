(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("lodash"), require("@angular/common"), require("@angular/forms"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "lodash", "@angular/common", "@angular/forms"], factory);
	else if(typeof exports === 'object')
		exports["ng2-dropdown-treeview"] = factory(require("@angular/core"), require("lodash"), require("@angular/common"), require("@angular/forms"));
	else
		root["ng2-dropdown-treeview"] = factory(root["ng"]["core"], root["_"], root["ng"]["common"], root["ng"]["forms"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TreeviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeItem = (function () {
    function TreeItem(text, value) {
        if (value === void 0) { value = undefined; }
        this.internalDisabled = false;
        this.internalChecked = true;
        this.collapsed = false;
        this.text = text;
        this.value = value;
    }
    Object.defineProperty(TreeItem.prototype, "checked", {
        get: function () {
            return this.internalChecked;
        },
        set: function (checked) {
            if (!this.disabled) {
                this.internalChecked = checked;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "disabled", {
        get: function () {
            return this.internalDisabled;
        },
        set: function (disabled) {
            this.internalDisabled = disabled;
            if (!__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](this.children)) {
                this.children.forEach(function (child) { return child.disabled = disabled; });
            }
        },
        enumerable: true,
        configurable: true
    });
    TreeItem.prototype.updateCollapsedRecursive = function (collapsed) {
        this.collapsed = collapsed;
        if (!__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](this.children)) {
            this.children.forEach(function (child) {
                child.updateCollapsedRecursive(collapsed);
            });
        }
    };
    TreeItem.prototype.updateCheckedRecursive = function (checked) {
        if (this.disabled) {
            return;
        }
        this.checked = checked;
        if (!__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](this.children)) {
            this.children.forEach(function (child) {
                child.updateCheckedRecursive(checked);
            });
        }
    };
    TreeItem.prototype.getCheckedItems = function () {
        var checkedItems = [];
        if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](this.children)) {
            if (this.checked) {
                checkedItems.push(this);
            }
        }
        else {
            for (var i = 0; i < this.children.length; i++) {
                checkedItems = __WEBPACK_IMPORTED_MODULE_1_lodash__["concat"](checkedItems, this.children[i].getCheckedItems());
            }
        }
        return checkedItems;
    };
    return TreeItem;
}());

var TreeviewComponent = (function () {
    function TreeviewComponent() {
        this.checkedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TreeviewComponent.prototype.toggleCollapseExpand = function () {
        this.item.collapsed = !this.item.collapsed;
    };
    TreeviewComponent.prototype.onCheckedChange = function (checked) {
        if (!__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](this.item.children)) {
            this.item.children.forEach(function (child) {
                child.updateCheckedRecursive(checked);
            });
        }
        this.checkedChange.emit(checked);
    };
    TreeviewComponent.prototype.onChildCheckedChange = function (checked) {
        if (this.item.checked !== checked) {
            var tempChecked = true;
            for (var i = 0; i < this.item.children.length; i++) {
                if (!this.item.children[i].checked) {
                    tempChecked = false;
                    break;
                }
            }
            if (this.item.checked !== tempChecked) {
                this.item.checked = tempChecked;
            }
        }
        this.checkedChange.emit(checked);
    };
    return TreeviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", TreeItem)
], TreeviewComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TreeviewComponent.prototype, "checkedChange", void 0);
TreeviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'leo-treeview',
        template: "\n<div class=\"treeview-item\" [class.treeview-parent]=\"item.children\">\n    <i *ngIf=\"item.children\" (click)=\"toggleCollapseExpand()\" aria-hidden=\"true\"\n    class=\"fa\" [class.fa-caret-right]=\"item.collapsed\" [class.fa-caret-down]=\"!item.collapsed\"></i>\n    <label class=\"form-check-label\">\n        <input type=\"checkbox\" class=\"form-check-input\"\n        [(ngModel)]=\"item.checked\" (ngModelChange)=\"onCheckedChange($event)\" [disabled]=\"item.disabled\" />\n        {{item.text}}\n    </label>\n    <div [hidden]=\"item.collapsed\" *ngFor=\"let child of item.children\">\n        <leo-treeview [item]=\"child\" (checkedChange)=\"onChildCheckedChange($event)\"></leo-treeview>\n    </div>\n</div>\n    ",
        styles: ["\n.treeview-item {\n    padding-left: 20px;\n    white-space: nowrap;\n}\n\n.treeview-item .form-check-label {\n    padding-top: 2px;\n    padding-bottom: 2px;\n}\n\n.treeview-item .fa {\n    margin-left: -1.0rem;\n    width: 10px;\n    cursor: pointer;\n}\n    "]
    })
], TreeviewComponent);



/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__treeview_component__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DropdownTreeviewComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterTreeItem = (function (_super) {
    __extends(FilterTreeItem, _super);
    function FilterTreeItem(item) {
        var _this = _super.call(this, item.text, item.value) || this;
        _this.disabled = item.disabled;
        _this.checked = item.checked;
        _this.collapsed = item.collapsed;
        _this.children = item.children;
        _this.refItem = item;
        return _this;
    }
    FilterTreeItem.prototype.updateRefChecked = function () {
        if (!__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](this.children)) {
            this.children.forEach(function (child) {
                if (child instanceof FilterTreeItem) {
                    child.updateRefChecked();
                }
            });
        }
        var refChecked = this.checked;
        if (!__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](this.refItem.children)) {
            for (var i = 0; i < this.refItem.children.length; i++) {
                var refChild = this.refItem.children[i];
                if (refChild instanceof FilterTreeItem) {
                    refChild.updateRefChecked();
                }
                if (!refChild.checked) {
                    refChecked = false;
                    break;
                }
            }
        }
        this.refItem.checked = refChecked;
    };
    return FilterTreeItem;
}(__WEBPACK_IMPORTED_MODULE_2__treeview_component__["a" /* TreeItem */]));
var DefaultConfig = {
    isShowAllCheckBox: true,
    isShowFilter: false,
    isShowCollapseExpand: false,
    headerText: 'All',
    allText: 'All',
    noSelectText: 'Select options',
    moreSelectText: ' selected'
};
var DropdownTreeviewComponent = (function () {
    function DropdownTreeviewComponent() {
        this.config = DefaultConfig;
        this.hide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.allItem = new __WEBPACK_IMPORTED_MODULE_2__treeview_component__["a" /* TreeItem */](this.config.headerText);
        this.isOpen = false;
        this.text = this.config.allText;
    }
    DropdownTreeviewComponent.prototype.keyupEsc = function () {
        this.isOpen = false;
    };
    DropdownTreeviewComponent.prototype.onDocumentClick = function (event) {
        if (event.target !== this.dropdownButton.nativeElement) {
            this.isOpen = false;
        }
    };
    Object.defineProperty(DropdownTreeviewComponent.prototype, "hasItems", {
        get: function () {
            return !__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](this.items) && this.items.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownTreeviewComponent.prototype, "hasFilterItems", {
        get: function () {
            return !__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](this.filterItems) && this.filterItems.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    DropdownTreeviewComponent.prototype.ngOnChanges = function (changes) {
        var change = changes['config'];
        if (!__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](change)) {
            if (!__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](this.config)) {
                this.config = __WEBPACK_IMPORTED_MODULE_1_lodash__["defaults"](this.config, DefaultConfig);
            }
            else {
                this.config = __WEBPACK_IMPORTED_MODULE_1_lodash__["defaults"]({}, DefaultConfig);
            }
            this.allItem.text = this.config.headerText;
            if (this.allItem.checked) {
                this.text = this.config.allText;
            }
        }
        change = changes['items'];
        if (!__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](change) && !__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](this.items)) {
            this.updateFilterItems();
            this.onAfterSelectedChange();
        }
    };
    DropdownTreeviewComponent.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
        if (!this.isOpen) {
            this.hide.emit();
        }
    };
    DropdownTreeviewComponent.prototype.documentClick = function (event) {
        if (event.target !== this.dropdownButton.nativeElement) {
            this.isOpen = false;
        }
    };
    DropdownTreeviewComponent.prototype.toggleCollapseExpand = function () {
        var _this = this;
        this.allItem.collapsed = !this.allItem.collapsed;
        this.filterItems.forEach(function (item) {
            item.collapsed = _this.allItem.collapsed;
        });
    };
    DropdownTreeviewComponent.prototype.onFilterTextChange = function (filterText) {
        this.filterText = filterText;
        this.updateFilterItems();
    };
    DropdownTreeviewComponent.prototype.onAllCheckedChange = function (checked) {
        this.filterItems.forEach(function (item) {
            item.updateCheckedRecursive(checked);
            if (item instanceof FilterTreeItem) {
                item.updateRefChecked();
            }
        });
        this.onAfterSelectedChange();
    };
    DropdownTreeviewComponent.prototype.onItemCheckedChange = function (item, checked) {
        if (this.allItem.checked !== checked) {
            var tempChecked = true;
            for (var i = 0; i < this.filterItems.length; i++) {
                if (!this.filterItems[i].checked) {
                    tempChecked = false;
                    break;
                }
            }
            if (this.allItem.checked !== tempChecked) {
                this.allItem.checked = tempChecked;
            }
        }
        if (item instanceof FilterTreeItem) {
            item.updateRefChecked();
        }
        this.onAfterSelectedChange();
    };
    DropdownTreeviewComponent.prototype.getCheckedItems = function () {
        var checkedItems = [];
        for (var i = 0; i < this.items.length; i++) {
            checkedItems = __WEBPACK_IMPORTED_MODULE_1_lodash__["concat"](checkedItems, this.items[i].getCheckedItems());
        }
        return checkedItems;
    };
    DropdownTreeviewComponent.prototype.onAfterSelectedChange = function () {
        var isAllChecked = true;
        for (var i = 0; i < this.items.length; i++) {
            if (!this.items[i].checked) {
                isAllChecked = false;
                break;
            }
        }
        var checkedItems = this.getCheckedItems();
        if (isAllChecked) {
            this.text = this.config.allText;
        }
        else {
            if (checkedItems.length === 0) {
                this.text = this.config.noSelectText;
            }
            else if (checkedItems.length === 1) {
                this.text = checkedItems[0].text;
            }
            else {
                this.text = checkedItems.length + " " + this.config.moreSelectText;
            }
        }
        var values = checkedItems.map(function (item) { return item.value; });
        this.selectedChange.emit(values);
    };
    DropdownTreeviewComponent.prototype.updateFilterItems = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](this.filterText) && this.filterText !== '') {
            var filterItems_1 = [];
            this.items.forEach(function (item) {
                var newItem = _this.filterItem(item, _this.filterText);
                if (!__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](newItem)) {
                    filterItems_1.push(newItem);
                }
            });
            this.filterItems = filterItems_1;
        }
        else {
            this.filterItems = this.items;
        }
        this.updateCheckBoxAll();
    };
    DropdownTreeviewComponent.prototype.filterItem = function (item, filterText) {
        var _this = this;
        var isMatch = __WEBPACK_IMPORTED_MODULE_1_lodash__["includes"](item.text.toLowerCase(), filterText.toLowerCase());
        if (isMatch) {
            return item;
        }
        else {
            if (!__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](item.children)) {
                var children_1 = [];
                var checkedCount_1 = 0;
                item.children.forEach(function (child) {
                    var newChild = _this.filterItem(child, filterText);
                    if (!__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](newChild)) {
                        children_1.push(newChild);
                        if (newChild.checked) {
                            checkedCount_1++;
                        }
                    }
                });
                if (children_1.length > 0) {
                    var newItem = new FilterTreeItem(item);
                    newItem.children = children_1;
                    newItem.checked = children_1.length === checkedCount_1;
                    return newItem;
                }
            }
        }
        return undefined;
    };
    DropdownTreeviewComponent.prototype.updateCheckBoxAll = function () {
        var checked = true;
        for (var i = 0; i < this.filterItems.length; i++) {
            if (!this.filterItems[i].checked) {
                checked = false;
                break;
            }
        }
        this.allItem.checked = checked;
    };
    return DropdownTreeviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dropdownButton'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], DropdownTreeviewComponent.prototype, "dropdownButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], DropdownTreeviewComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DropdownTreeviewComponent.prototype, "config", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DropdownTreeviewComponent.prototype, "hide", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DropdownTreeviewComponent.prototype, "selectedChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keyup.esc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownTreeviewComponent.prototype, "keyupEsc", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], DropdownTreeviewComponent.prototype, "onDocumentClick", null);
DropdownTreeviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'leo-dropdown-treeview',
        template: "\n<div class=\"dropdown\" [class.open]=\"isOpen\">\n    <button class=\"btn btn-secondary dropdown-toggle\" #dropdownButton type=\"button\" (click)=\"toggleOpen()\"\n    aria-haspopup=\"true\" aria-expanded=\"false\">\n        {{text}}\n    </button>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" (click)=\"$event.stopPropagation()\" [ngSwitch]=\"hasItems\">\n        <div *ngSwitchCase=\"true\">\n            <div *ngIf=\"config.isShowFilter\" class=\"row\">\n                <div class=\"col-xs-12\">\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Filter\"\n                    [ngModel]=\"filterText\" (ngModelChange)=\"onFilterTextChange($event)\" />\n                </div>\n            </div>\n            <div *ngIf=\"hasFilterItems\">\n                <div *ngIf=\"config.isShowAllCheckBox || config.isShowCollapseExpand\" class=\"row\">\n                    <div class=\"col-xs-12\">\n                        <label *ngIf=\"config.isShowAllCheckBox\" class=\"form-check-label dropdown-item-all\">\n                            <input type=\"checkbox\" class=\"form-check-input\"\n                            [(ngModel)]=\"allItem.checked\" (ngModelChange)=\"onAllCheckedChange($event)\" />\n                            {{allItem.text}}\n                        </label>\n                        <label *ngIf=\"config.isShowCollapseExpand\" class=\"form-check-label pull-right dropdown-item-collapse-expand\">\n                            <i (click)=\"toggleCollapseExpand()\" [title]=\"allItem.collapsed ? 'Expand' : 'Collapse'\" aria-hidden=\"true\"\n                                class=\"fa\" [class.fa-expand]=\"allItem.collapsed\" [class.fa-compress]=\"!allItem.collapsed\"></i>\n                        </label>\n                    </div>\n                </div>\n                <div *ngIf=\"config.isShowFilter || config.isShowAllCheckBox || config.isShowCollapseExpand\" class=\"dropdown-divider\"></div>\n                <div class=\"treeview-container\">\n                    <div *ngFor=\"let item of filterItems\">\n                        <leo-treeview [item]=\"item\" (checkedChange)=\"onItemCheckedChange(item, $event)\"></leo-treeview>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"!hasFilterItems\" class=\"dropdown-item\">\n                No items found\n            </div>\n        </div>\n        <div *ngSwitchCase=\"false\" class=\"dropdown-item\">\n            No items\n        </div>\n    </div>\n</div>\n    ",
        styles: ["\n.dropdown {\n    width: 100%;\n    display: inline-block;\n}\n\n.dropdown button {\n    width: 100%;\n    text-align: left;\n}\n\n.dropdown button::after {\n    position: absolute;\n    right: 0.6rem;\n    margin-top: 0.6rem;\n}\n\n.dropdown .dropdown-menu .row {\n    padding: 2px 10px;\n}\n\n.dropdown .dropdown-menu .dropdown-item-collapse-expand {\n    padding: 0;\n}\n\n.dropdown .dropdown-menu .treeview-container {\n    padding-left: 5px;\n    padding-right: 5px;\n    max-height: 500px;\n    overflow-y: auto;\n}\n    "]
    })
], DropdownTreeviewComponent);



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__treeview_component__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeviewPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TreeviewPipe = (function () {
    function TreeviewPipe() {
    }
    TreeviewPipe.prototype.transform = function (objects, textField) {
        if (__WEBPACK_IMPORTED_MODULE_1_lodash__["isNil"](objects)) {
            return undefined;
        }
        return objects.map(function (object) { return new __WEBPACK_IMPORTED_MODULE_2__treeview_component__["a" /* TreeItem */](object[textField], object); });
    };
    return TreeviewPipe;
}());
TreeviewPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'leoTreeview'
    })
], TreeviewPipe);



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_treeview_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__treeview_component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__treeview_pipe__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownTreeviewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DropdownTreeviewModule = DropdownTreeviewModule_1 = (function () {
    function DropdownTreeviewModule() {
    }
    DropdownTreeviewModule.forRoot = function () {
        return {
            ngModule: DropdownTreeviewModule_1
        };
    };
    return DropdownTreeviewModule;
}());
DropdownTreeviewModule = DropdownTreeviewModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__dropdown_treeview_component__["b" /* DropdownTreeviewComponent */],
            __WEBPACK_IMPORTED_MODULE_4__treeview_component__["b" /* TreeviewComponent */],
            __WEBPACK_IMPORTED_MODULE_5__treeview_pipe__["a" /* TreeviewPipe */]
        ], exports: [
            __WEBPACK_IMPORTED_MODULE_3__dropdown_treeview_component__["b" /* DropdownTreeviewComponent */],
            __WEBPACK_IMPORTED_MODULE_4__treeview_component__["b" /* TreeviewComponent */],
            __WEBPACK_IMPORTED_MODULE_5__treeview_pipe__["a" /* TreeviewPipe */]
        ]
    })
], DropdownTreeviewModule);

var DropdownTreeviewModule_1;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dropdown_treeview_module__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DropdownTreeviewModule", function() { return __WEBPACK_IMPORTED_MODULE_0__src_dropdown_treeview_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_dropdown_treeview_component__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DefaultConfig", function() { return __WEBPACK_IMPORTED_MODULE_1__src_dropdown_treeview_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DropdownTreeviewComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__src_dropdown_treeview_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_treeview_component__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TreeItem", function() { return __WEBPACK_IMPORTED_MODULE_2__src_treeview_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TreeviewComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__src_treeview_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_treeview_pipe__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TreeviewPipe", function() { return __WEBPACK_IMPORTED_MODULE_3__src_treeview_pipe__["a"]; });






/***/ })
/******/ ]);
});
//# sourceMappingURL=ng2-dropdown-treeview.umd.js.map