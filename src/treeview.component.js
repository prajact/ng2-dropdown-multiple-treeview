var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as _ from 'lodash';
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
            if (!_.isNil(this.children)) {
                this.children.forEach(function (child) { return child.disabled = disabled; });
            }
        },
        enumerable: true,
        configurable: true
    });
    TreeItem.prototype.updateCollapsedRecursive = function (collapsed) {
        this.collapsed = collapsed;
        if (!_.isNil(this.children)) {
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
        if (!_.isNil(this.children)) {
            this.children.forEach(function (child) {
                child.updateCheckedRecursive(checked);
            });
        }
    };
    TreeItem.prototype.getCheckedItems = function () {
        var checkedItems = [];
        if (_.isNil(this.children)) {
            if (this.checked) {
                checkedItems.push(this);
            }
        }
        else {
            for (var i = 0; i < this.children.length; i++) {
                checkedItems = _.concat(checkedItems, this.children[i].getCheckedItems());
            }
        }
        return checkedItems;
    };
    return TreeItem;
}());
export { TreeItem };
var TreeviewComponent = (function () {
    function TreeviewComponent() {
        this.checkedChange = new EventEmitter();
    }
    TreeviewComponent.prototype.toggleCollapseExpand = function () {
        this.item.collapsed = !this.item.collapsed;
    };
    TreeviewComponent.prototype.onCheckedChange = function (checked) {
        if (!_.isNil(this.item.children)) {
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
    Input(),
    __metadata("design:type", TreeItem)
], TreeviewComponent.prototype, "item", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TreeviewComponent.prototype, "checkedChange", void 0);
TreeviewComponent = __decorate([
    Component({
        selector: 'leo-treeview',
        template: "\n<div class=\"treeview-item\" [class.treeview-parent]=\"item.children\">\n    <i *ngIf=\"item.children\" (click)=\"toggleCollapseExpand()\" aria-hidden=\"true\"\n    class=\"fa\" [class.fa-plus-square]=\"item.collapsed\" [class.fa-minus-square]=\"!item.collapsed\"></i>\n    <label class=\"form-check-label\">\n        <input type=\"checkbox\" style=\"display:none;\"\n class=\"checkboxBtn form-check-input\"\n        [(ngModel)]=\"item.checked\" (ngModelChange)=\"onCheckedChange($event)\" [disabled]=\"item.disabled\" />\n        {{item.text}}\n    </label>\n    <div [hidden]=\"item.collapsed\" *ngFor=\"let child of item.children\">\n        <label class=\"form-check-label\">\n {{child.text}}      <input type=\"checkbox\" class=\"form-check-input\"\n        [(ngModel)]=\"child.checked\" (ngModelChange)=\"onChildCheckedChange($event)\" [disabled]=\"child.disabled\" />\n    </label>\n    </div>\n</div>\n    ",
        styles: ["\n.treeview-item {\n padding-right: 10px;\n padding-left: 16px;\n    white-space: nowrap;\n}\n\n.treeview-item .form-check-label {\n    padding-top: 2px;\n width: 100%;\n   padding-bottom: 2px;\n}\n\n.form-check-input{\n float: right;\n}\n\n.treeview-item .fa {\n    margin-left: -1.0rem;\n    width: 10px;\n    cursor: pointer;\n}\n    "]
    })
], TreeviewComponent);
export { TreeviewComponent };
//# sourceMappingURL=treeview.component.js.map