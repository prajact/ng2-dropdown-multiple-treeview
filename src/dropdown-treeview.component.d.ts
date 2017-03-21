import { EventEmitter, ElementRef, OnChanges, SimpleChange } from '@angular/core';
import { TreeItem } from './treeview.component';
export interface DropdownTreeviewConfig {
    isShowFilter?: boolean;
    isShowAllCheckBox?: boolean;
    isShowCollapseExpand?: boolean;
    headerText?: string;
    allText?: string;
    noSelectText?: string;
    moreSelectText?: string;
}
export declare let DefaultConfig: DropdownTreeviewConfig;
export declare class DropdownTreeviewComponent implements OnChanges {
    dropdownButton: ElementRef;
    items: TreeItem[];
    config: DropdownTreeviewConfig;
    hide: EventEmitter<{}>;
    selectedChange: EventEmitter<any[]>;
    allItem: TreeItem;
    isOpen: boolean;
    text: string;
    filterText: string;
    filterItems: TreeItem[];
    keyupEsc(): void;
    onDocumentClick(event: MouseEvent): void;
    readonly hasItems: boolean;
    readonly hasFilterItems: boolean;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    toggleOpen(): void;
    documentClick(event: MouseEvent): void;
    toggleCollapseExpand(): void;
    onFilterTextChange(filterText: string): void;
    onAllCheckedChange(checked: boolean): void;
    onItemCheckedChange(item: TreeItem, checked: boolean): void;
    getCheckedItems(): TreeItem[];
    private onAfterSelectedChange();
    private updateFilterItems();
    private filterItem(item, filterText);
    private updateCheckBoxAll();
}
