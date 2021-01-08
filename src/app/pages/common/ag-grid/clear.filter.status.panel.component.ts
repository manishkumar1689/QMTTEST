import { Component } from "@angular/core";
import { IStatusPanelParams } from 'ag-grid-community/main';
import { IStatusPanelAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'clearFilter-StatusPanel',
    template:`<div style="padding-top: 6px; cursor: pointer;padding-right: 6px;color: black;">
    <!-- <i *ngIf="params.context.componentParent.EnableGridState && params.context.componentParent.userGridState.GridColumnState" class='icon icon-cross-small' (click)="onClearGridStateClick()" title="Reset View To Default"></i>&nbsp;&nbsp;-->
   <!--<i *ngIf="params.context.componentParent.EnableGridState" class='icon icon-download-save' (click)="saveGridState()" title="Save Grid Settings"></i>&nbsp;&nbsp;-->
    <i *ngIf="params.context.componentParent.EnableGridState" class='icon icon-restore' style="font-size:17px" (click)="reset()" title="Reset View To Default"></i></div>`
})
export class ClearFilterStatusPanelComponent implements IStatusPanelAngularComp {

    public params: IStatusPanelParams;

    constructor() { }

    agInit(params: IStatusPanelParams): void {
        this.params = params;        
    }
    
    reset() {
        this.params.context.componentParent.reset();
    }

    saveGridState() {
        this.params.context.componentParent.saveGridState();
    }

    onClearGridStateClick() {
        this.params.context.componentParent.onClearGridStateClick();
    }

    refresh(params: IStatusPanelParams): boolean {
        return false;
    }
}