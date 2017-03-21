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
import { Component, EventEmitter, ViewChild, ElementRef, Input, Output, HostListener } from '@angular/core';
import * as _ from 'lodash';
import { TreeItem } from './treeview.component';
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
        if (!_.isNil(this.children)) {
            this.children.forEach(function (child) {
                if (child instanceof FilterTreeItem) {
                    child.updateRefChecked();
                }
            });
        }
        var refChecked = this.checked;
        if (!_.isNil(this.refItem.children)) {
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
}(TreeItem));
export var DefaultConfig = {
    isShowAllCheckBox: true,
    isShowFilter: false,
    isShowCollapseExpand: false,
    headerText: 'All the cities',
    allText: 'Site',
    noSelectText: 'Select options',
    moreSelectText: ' selected'
};
var DropdownTreeviewComponent = (function () {
    function DropdownTreeviewComponent() {
        this.config = DefaultConfig;
        this.hide = new EventEmitter();
        this.selectedChange = new EventEmitter();
        this.allItem = new TreeItem(this.config.headerText);
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
            return !_.isNil(this.items) && this.items.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownTreeviewComponent.prototype, "hasFilterItems", {
        get: function () {
            return !_.isNil(this.filterItems) && this.filterItems.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    DropdownTreeviewComponent.prototype.ngOnChanges = function (changes) {
        var change = changes['config'];
        if (!_.isNil(change)) {
            if (!_.isNil(this.config)) {
                this.config = _.defaults(this.config, DefaultConfig);
            }
            else {
                this.config = _.defaults({}, DefaultConfig);
            }
            this.allItem.text = this.config.headerText;
            if (this.allItem.checked) {
                this.text = this.config.allText;
            }
        }
        change = changes['items'];
        if (!_.isNil(change) && !_.isNil(this.items)) {
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
            checkedItems = _.concat(checkedItems, this.items[i].getCheckedItems());
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
        if (!_.isNil(this.filterText) && this.filterText !== '') {
            var filterItems_1 = [];
            this.items.forEach(function (item) {
                var newItem = _this.filterItem(item, _this.filterText);
                if (!_.isNil(newItem)) {
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
        var isMatch = _.includes(item.text.toLowerCase(), filterText.toLowerCase());
        if (isMatch) {
            return item;
        }
        else {
            if (!_.isNil(item.children)) {
                var children_1 = [];
                var checkedCount_1 = 0;
                item.children.forEach(function (child) {
                    var newChild = _this.filterItem(child, filterText);
                    if (!_.isNil(newChild)) {
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
    ViewChild('dropdownButton'),
    __metadata("design:type", ElementRef)
], DropdownTreeviewComponent.prototype, "dropdownButton", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], DropdownTreeviewComponent.prototype, "items", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DropdownTreeviewComponent.prototype, "config", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DropdownTreeviewComponent.prototype, "hide", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DropdownTreeviewComponent.prototype, "selectedChange", void 0);
__decorate([
    HostListener('keyup.esc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownTreeviewComponent.prototype, "keyupEsc", null);
__decorate([
    HostListener('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], DropdownTreeviewComponent.prototype, "onDocumentClick", null);
DropdownTreeviewComponent = __decorate([
    Component({
        selector: 'leo-dropdown-treeview',
        template: "\n<div class=\"dropdown\" [class.open]=\"isOpen\">\n    <button class=\"btn btn-secondary dropdown-toggle\" #dropdownButton type=\"button\" (click)=\"toggleOpen()\"\n    aria-haspopup=\"true\" aria-expanded=\"false\">\n        {{text}}\n    </button>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" (click)=\"$event.stopPropagation()\" [ngSwitch]=\"hasItems\">\n        <div *ngSwitchCase=\"true\">\n            <div *ngIf=\"config.isShowFilter\" class=\"row orangeback\">\n                <div class=\"col-xs-12\">\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Search\"\n                    [ngModel]=\"filterText\" (ngModelChange)=\"onFilterTextChange($event)\" />\n                </div>\n            </div>\n            <div *ngIf=\"hasFilterItems\">\n                                <div class=\"treeview-container\">\n                    <div *ngFor=\"let item of filterItems\">\n                        <leo-treeview [item]=\"item\" (checkedChange)=\"onItemCheckedChange(item, $event)\"></leo-treeview>\n                    </div>\n                </div>\n            </div>\n  <div *ngIf=\"config.isShowAllCheckBox || config.isShowCollapseExpand\" class=\"row orangeback\">\n                    <div class=\"col-xs-12\">\n                        <label *ngIf=\"config.isShowAllCheckBox\" class=\"form-check-label dropdown-item-all\">\n  {{allItem.text}}\n                          <input type=\"checkbox\" class=\"form-check-input pull-right\"\n                            [(ngModel)]=\"allItem.checked\" (ngModelChange)=\"onAllCheckedChange($event)\" />\n </label>\n  <label *ngIf=\"config.isShowCollapseExpand\" class=\"form-check-label pull-right dropdown-item-collapse-expand\">\n                            <i (click)=\"toggleCollapseExpand()\" [title]=\"allItem.collapsed ? 'Expand' : 'Collapse'\" aria-hidden=\"true\"\n                                class=\"fa\" [class.fa-expand]=\"allItem.collapsed\" [class.fa-compress]=\"!allItem.collapsed\"></i>\n                        </label>\n                    </div>\n                </div>\n                <div *ngIf=\"config.isShowFilter || config.isShowAllCheckBox || config.isShowCollapseExpand\" class=\"dropdown-divider\"></div>\n         <div *ngIf=\"!hasFilterItems\" class=\"dropdown-item\">\n                No items found\n            </div>\n        </div>\n        <div *ngSwitchCase=\"false\" class=\"dropdown-item\">\n            No items\n        </div>\n    </div>\n</div>\n    ",
        styles: ["\n.orangeback{\n background-color: #fbebc5;\n margin-top: -8px;\n}\n\n.dropdown {\n    width: 100%;\n    display: inline-block;\n}\n\n.dropdown button {\n    width: 100%;\n    text-align: left;\n}\n\n.dropdown button::after {\n    position: absolute;\n    right: 0.6rem;\n    margin-top: 0.6rem;\n}\n\n.dropdown .dropdown-menu .row {\n    padding: 2px 10px;\n}\n\n.dropdown .dropdown-menu .dropdown-item-collapse-expand {\n    padding: 0;\n}\n\n.dropdown .dropdown-menu .treeview-container {\n    padding-left: 5px;\n    padding-right: 5px;\n    max-height: 500px;\n    overflow-y: auto;\n}\n    "]
    })
], DropdownTreeviewComponent);
export { DropdownTreeviewComponent };
//# sourceMappingURL=dropdown-treeview.component.js.map