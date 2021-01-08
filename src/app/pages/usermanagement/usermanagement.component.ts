import { AfterViewInit, Component, OnInit } from '@angular/core';

import { Tree } from '../../../assets/tree/Tree';
import { Layout } from '../../../assets/common/scripts/Layout';
import { BtnCellEdit } from '../shared/btn-cell-edit.component';
import { BtnCellCross } from '../shared/btn-cell-cross.component';
import { BtnCellSearch } from '../shared/btn-cell-search.component';
import { HttpClient } from '@angular/common/http';
import { BtnCellEditDelete } from '../shared/btn-cell-edit-delete.component';
import { BtnCellRenderer } from '../shared/btn-cell-renderer.component';
@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit, AfterViewInit {
  component = [];
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
  //constructor() { }

  ngOnInit() {
    this.component[0] = { resourceDisplayName: "User", routingName: "user" };
    this.component[1] = { resourceDisplayName: "Group", routingName: "group" };

  }
  
  ngAfterViewInit() {
    //const layout = new Layout(document.querySelector('body'));
    //layout.init();
    setTimeout(function () {
      const treeDOM = document.querySelector('.tree.navigation');
      const tree = new Tree(treeDOM);
      tree.init();
    }, 2000);
  }
  
  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: 'Actions',
        field: 'user  ',
        cellRenderer: "btnCellRenderer",
        
        width: 200
     
      },

      {
        headerName: 'User',
        field: 'user'
      },
      {
        headerName: 'Signum',
        field: 'signum'
      },
      {
        headerName: 'Email',
        field: 'email'
      },
      {
        headerName: 'Associated Groups',
        field: 'associatedGroups'
      }

    ];
    this.autoGroupColumnDef = {
      headerName: 'Group',
      minWidth: 170,
      field: 'name',
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
     
      btnCellRenderer: BtnCellEditDelete
      
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
      console.log('node ' + rowNode.data.name + ' passes the filter');
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
        '../../../src/app/pages/shared/userrawdata.json'
      )
      .subscribe((data: any) => {

        this.rowData = data;
        let rowSpan = 1;

        this.rowData.sort(function (a: any, b: any) {

          if (a.name < b.name) { return -1; }
          if (a.name > b.name) { return 1; }
          if (a.name === b.name) { return 0; }


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


