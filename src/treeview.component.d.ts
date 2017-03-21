import { EventEmitter } from '@angular/core';
export declare class TreeItem {
    private internalDisabled;
    private internalChecked;
    text: string;
    value: any;
    collapsed: boolean;
    children?: TreeItem[];
    constructor(text: string, value?: any);
    checked: boolean;
    disabled: boolean;
    updateCollapsedRecursive(collapsed: boolean): void;
    updateCheckedRecursive(checked: boolean): void;
    getCheckedItems(): TreeItem[];
}
export declare class TreeviewComponent {
    item: TreeItem;
    checkedChange: EventEmitter<boolean>;
    toggleCollapseExpand(): void;
    onCheckedChange(checked: boolean): void;
    onChildCheckedChange(checked: boolean): void;
}
