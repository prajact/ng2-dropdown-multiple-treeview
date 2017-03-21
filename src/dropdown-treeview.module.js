var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownTreeviewComponent } from './dropdown-treeview.component';
import { TreeviewComponent } from './treeview.component';
import { TreeviewPipe } from './treeview.pipe';
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
    NgModule({
        imports: [
            FormsModule,
            CommonModule
        ],
        declarations: [
            DropdownTreeviewComponent,
            TreeviewComponent,
            TreeviewPipe
        ], exports: [
            DropdownTreeviewComponent,
            TreeviewComponent,
            TreeviewPipe
        ]
    })
], DropdownTreeviewModule);
export { DropdownTreeviewModule };
var DropdownTreeviewModule_1;
//# sourceMappingURL=dropdown-treeview.module.js.map