import { Component } from "@angular/core";
import { IStatusPanelParams } from 'ag-grid-community/main';
import { IStatusPanelAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'totalRecords-statusPanel',
    template: `<div class="ag-name-value ag-status-panel ag-status-panel-total-row-count">
                <span ref="eLabel">Total Rows</span>:&nbsp;<span ref="eValue" class="ag-name-value-value">{{params.context.componentParent.totalRows}}</span>
               </div>`
})
export class TotalRecordsStatusPanelComponent implements IStatusPanelAngularComp {

    public params: IStatusPanelParams;

    constructor() { }

    agInit(params: IStatusPanelParams): void {
        this.params = params;
    }

    refresh(params: IStatusPanelParams): boolean {
        return false;
    }
}