import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BtnCellRenderer } from '../shared/btn-cell-renderer.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
 
  
})
export class DashboardComponent {
  public gridApi;
  public gridColumnApi;

  public columnDefs;
  public autoGroupColumnDef;
  public defaultColDef;
  public rowSelection;
  public rowGroupPanelShow;
  public pivotPanelShow;
  public paginationPageSize;
  public paginationNumberFormatter;
  public rowData;
  public components;
  public frameworkComponents;
  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: 'Actions',
        field: 'project',
        cellRenderer: "btnCellRenderer",
        checkboxSelection: checkboxSelection,
        headerCheckboxSelection: headerCheckboxSelection,
        //cellClassRules: { 'show-cell': 'value !== undefined' },
        // cellRenderer: 'showCellRenderer',
        //cellStyle: colSpan,
        cellRendererParams: {
          clicked: function (field: any) {
            alert(`${field} was clicked`);
          }
        },
        width: 200,
        //rowSpan: rowSpan
      },
      {
        headerName: 'Project Name',
        field: 'projectName',
        cellClassRules: { 'show-cell': 'value !== undefined' },
        cellRenderer: 'showCellRenderer',
        cellStyle: colSpan,
        width: 200,
        rowSpan: 2
      },
     
      {
        headerName: 'User Signum',
        field: 'userSignum'
      },
      {
        headerName: 'Module',
        field: 'module'
      },
      {
        headerName: 'OnBoarding Date/Time',
        field: 'onBoardingDate'
      },
      {
        headerName: 'Polling Status',
        field: 'pollingStatus'
      },
      {
        headerName: 'Polling Interval(Minutes)',
        field: 'pollingInterval'
      },
      {
        headerName: 'Last Data Retrieval Time',
        field: 'lastDataRetrievalTime'
      },
      {
        headerName: 'Next Data Retrieval Time',
        field: 'nextDataRetrievalTime'
      },
    
    ];
    this.autoGroupColumnDef = {
      headerName: 'Group',
      minWidth: 170,
      field: 'projectName',
      valueGetter: function (params) {
        if (params.node.group) {
          return params.node.key;
        } else {
          return params.data[params.colDef.field];
        }
      },
      headerCheckboxSelection: true,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: { checkbox: true },
    };
    this.defaultColDef = {
      editable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true,

      minWidth: 100,
    };
    this.components = { showCellRenderer: createShowCellRenderer() };
    this.rowSelection = 'multiple';
    this.rowGroupPanelShow = 'always';
    this.pivotPanelShow = 'always';
    this.paginationPageSize = 10;
    this.paginationNumberFormatter = function (params) {
      return '[' + params.value.toLocaleString() + ']';
    };

    this.frameworkComponents = {
      btnCellRenderer: BtnCellRenderer
    };
  }

  onPageSizeChanged(newPageSize) {
    var value = document.getElementById('page-size').nodeValue;
    this.gridApi.paginationSetPageSize(Number(value));
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    //'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json'

    this.http
      .get(
       '../../../src/app/pages/shared/rawdata.json'
    ).subscribe((data: any) => {
        debugger;
        this.rowData = data;
        let rowSpan = 1;
        debugger;
        this.rowData.sort(function (a: any, b: any) {
          rowSpan = 1;
          if (a.projectName < b.projectName) { return -1; }
          if (a.projectName > b.projectName) { return 1; }
          if (a.projectName === b.projectName) { a.rowSpan = ++rowSpan; return 0; }


        })
        params.api.paginationGoToPage(4);
      });
  }
}
function rowSpan(params) {
  debugger;
  if (params.data.rowSpan) {
    return params.data.rowSpan;
  } else {
    return 1;
  }
}
function colSpan(params) {
  if (params.data.rowSpan) {
    return params.data.colSpan;
  } else {
    return 1;
  }
}
var checkboxSelection = function (params) {
  return params.columnApi.getRowGroupColumns().length === 0;
};
var headerCheckboxSelection = function (params) {
  return params.columnApi.getRowGroupColumns().length === 0;
};
function createShowCellRenderer() {
  function ShowCellRenderer() { }
  ShowCellRenderer.prototype.init = function (params) {
    var cellBlank = !params.value;
    if (cellBlank) {
      return null;
    }
    debugger;
    this.ui = document.createElement('div');
    this.ui.innerHTML =
      '<div class="show-name">' +
      params.value +
      'manish' +
      '</div>'
      ;
  };
  ShowCellRenderer.prototype.getGui = function () {
    return this.ui;
  };
  return ShowCellRenderer;
}
