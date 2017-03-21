import { PipeTransform } from '@angular/core';
import { TreeItem } from './treeview.component';
export declare class TreeviewPipe implements PipeTransform {
    transform(objects: any[], textField: string): TreeItem[];
}
