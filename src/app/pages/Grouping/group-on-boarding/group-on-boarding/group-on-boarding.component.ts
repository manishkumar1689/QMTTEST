import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BtnCellRenderer } from '../../../shared/btn-cell-renderer.component';

import { BtnCellCross } from '../../../shared/btn-cell-cross.component';
import { BtnCellEdit } from '../../../shared/btn-cell-edit.component';
import { BtnCellSearch } from '../../../shared/btn-cell-search.component';

import { Dialog } from '../../../../../assets/dialog/Dialog';


@Component({
  selector: 'app-group-on-boarding',
  templateUrl: './group-on-boarding.component.html',
  styleUrls: ['./group-on-boarding.component.scss']
})
export class GroupOnBoardingComponent implements AfterViewInit {

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
  ngAfterViewInit() {
    setTimeout(() => {
      const dialogs = document.querySelectorAll('.dialog');

      if (dialogs) {
        Array.from(dialogs).forEach(dialogDOM => {
          const dialog = new Dialog(dialogDOM);
          dialog.init();
        });
      }
    }, 2000);
  }
  constructor(private http: HttpClient) {
   

    
    this.columnDefs = [
      {
        headerName: 'Actions',
        field: 'project',
        cellRenderer: "btnCellRenderer",
        //checkboxSelection: checkboxSelection,
        // headerCheckboxSelection: headerCheckboxSelection,
        cellClassRules: { 'show-cell': 'value !== undefined' },
        // cellRenderer: 'showCellRenderer',
        //cellStyle: colSpan,
        cellRendererParams: {
          clicked: function (field: any) {
            alert(`${field} was clicked`);
          }
        },
        width: 200,
        rowSpan: rowSpan.bind(this)
      },
     
      {
        headerName: 'Name',
        field: 'name'


       
      

      },
      {
        headerName: 'Type',
        field: 'type'
      },
      {
        headerName: 'User Signum',
        field: 'userSignum'
      },
      {
        headerName: 'Created Date/Time',
        field: 'createdDate'
      },
      {
        headerName: 'Last Modified Date/Time',
        field: 'lastModifiedDate',

      },
      {
        headerName: 'Associated Project',
        field: 'associatedProject',
        cellRenderer: "btnCellSearch",
        
      }

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
      editable: false,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
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
      btnCellRenderer: BtnCellEdit,
      btnCellCross: BtnCellCross,
      btnCellSearch: BtnCellSearch,
    };
  }

  onSortChanged(event) {
    debugger;
    let that = event.api;


    let count = 1;
    let actualIndex = 1;
    let incrementCounter = 9;
    let counterOfTen = 10;
    let rowData = [];
    that.forEachNodeAfterFilterAndSort(function (rowNode, index) {
      console.log('node ' + rowNode.data.projectName + ' passes the filter');
      delete rowNode.data.rowSpan;
      rowData.push(rowNode.data);


    });
    this.rowData = rowData;
    rowData.forEach(function (data, index) {
      debugger;
      if (index < incrementCounter && rowData.length - 1 !== index && rowData[index].projectName === rowData[index + 1].projectName) {
        if (count === 1) {
          actualIndex = index;
        }

        count++;
      }
      //else if (that.rowData.length == index + 1) {

      //}
      else if ((index === incrementCounter && count > 1) || (index === rowData.length - 1)) {
        rowData[actualIndex].rowSpan = count;
        count = 1;
        incrementCounter = index + 10;
      }
      else if (index < incrementCounter && count > 1) {
        rowData[actualIndex].rowSpan = count;
        count = 1;
      }

    });


  }
  onPageSizeChanged(newPageSize) {
    var value = document.getElementById('page-size').nodeValue;
    this.gridApi.paginationSetPageSize(Number(value));
  }
  onPaginationChanged() {
    console.log('onPaginationPageLoaded');
    if (this.gridApi) {

      //setText('#lbLastPageFound', this.gridApi.paginationIsLastPageFound());
      //setText('#lbPageSize', this.gridApi.paginationGetPageSize());
      //setText('#lbCurrentPage', this.gridApi.paginationGetCurrentPage() + 1);
      //setText('#lbTotalPages', this.gridApi.paginationGetTotalPages());
      //setLastButtonDisabled(!this.gridApi.paginationIsLastPageFound());
      if (this.gridApi.paginationGetCurrentPage() !== 0) {
        let that = this;
        let count = 1;
        let actualIndex = 1;
        let generatedIndex = 0;
        generatedIndex = this.gridApi.paginationGetCurrentPage() * 10;
        this.rowData.map(function (data, index) {

          if (generatedIndex <= index && index < generatedIndex + 9) {

            if (index < generatedIndex + 9 && that.rowData.length - 1 !== index && that.rowData[index].projectName === that.rowData[index + 1].projectName) {
              if (count == 1) {
                actualIndex = index;
              }

              count++;
            }
            //else if (that.rowData.length == index + 1) {

            //}
            else if (index == generatedIndex + 9 && count > 1) {
              that.rowData[actualIndex].rowSpan = count;
              count = 1;
            }
            else if (index < generatedIndex + 9 && count > 1) {
              that.rowData[actualIndex].rowSpan = count;
              count = 1;
            }
          }
          //if (data[index].projectName < data[index+1].projectName) { return -1; }
          //if (data[index].projectName > data[index+1].projectName) { return 1; }

        })
      }

    }
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    //'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json'

    this.http
      .get(
        '../../../src/app/pages/shared/grouprawdata.json'
      )
      .subscribe((data: any) => {

        this.rowData = data;
        let rowSpan = 1;

        this.rowData.sort(function (a: any, b: any) {

          if (a.projectName < b.projectName) { return -1; }
          if (a.projectName > b.projectName) { return 1; }
          if (a.projectName === b.projectName) { return 0; }


        })
        let len;
        var results = {}
        //  for (var i = 0; i < this.rowData.length; i++) {

        ////get the requested property value (example: License)
        //var value = this.rowData[i]["projectName"];

        ////increment counter for this value (starting at 1)
        //var count = (results[value] || 0) + 1;
        //results[value] = count;
        //  }
        // setTimeout(function () {
        let that = this;
        let count = 1;
        let actualIndex = 1;
        let incrementCounter = 9;
        let counterOfTen = 10;
        this.rowData.map(function (data, index) {
          debugger;
          //if (data[index].projectName < data[index+1].projectName) { return -1; }
          //if (data[index].projectName > data[index+1].projectName) { return 1; }

          if (index < incrementCounter && that.rowData.length - 1 !== index && that.rowData[index].projectName === that.rowData[index + 1].projectName) {
            if (count === 1) {
              actualIndex = index;
            }

            count++;
          }
          //else if (that.rowData.length == index + 1) {

          //}
          else if ((index === incrementCounter && count > 1) || (index === that.rowData.length - 1)) {
            that.rowData[actualIndex].rowSpan = count;
            count = 1;
            incrementCounter = index + 10;
          }
          else if (index < incrementCounter && count > 1) {
            that.rowData[actualIndex].rowSpan = count;
            count = 1;
          }
        })
        //    },2000)

        params.api.paginationGoToPage(2);
      });
  }
}
function rowSpan(params) {
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
