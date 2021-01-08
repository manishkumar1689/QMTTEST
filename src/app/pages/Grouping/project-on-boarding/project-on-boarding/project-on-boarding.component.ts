import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BtnCellRenderer } from '../../../shared/btn-cell-renderer.component';

import { BtnCellCross } from '../../../shared/btn-cell-cross.component';
import { CustomerConstantsData, CustomerGridData } from './project-on-onboarding.grid.data';
import * as $ from 'jquery';
//import *  as  data from '../../../../../../../src/app/pages/shared/rawdata.json';
import *  as  data from '../../../../../../src/assets/rawdata.json';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-on-boarding',
  templateUrl: './project-on-boarding.component.html',
  styleUrls: ['./project-on-boarding.component.scss']
})
export class ProjectOnBoardingComponent implements OnInit {
  public gridApi;
  public gridColumnApi;
  gridData: any;
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
  @ViewChild("agGrid1", { static: false }) agGrid: any;
  GridIdentifier: string;
  constantMessages: any = {};
    ActivateDeActivateTitle: any;
  ActivateDeActivateMessage: any;

  products: any = (data as any).default;
  onEditProject(event: any) {
    debugger;
    this.router.navigate(['/dashboard/editProject', event.projectId]);
  }
  onDeleteProject(event: any) {
    this.router.navigate(['/dashboard/deleteProject', event.projectId]);
  }
  onSettingProject(event: any) {
    this.router.navigate(['/dashboard/settingProject', event.projectId]);
  }
  constructor(private http: HttpClient,private router:Router) {
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
        headerName: 'Project Name',
        field: 'projectName',


        cellClassRules: { 'show-cell': 'value !== undefined' },
        //cellRenderer: 'showCellRenderer',
        //cellStyle: colSpan,
        width: 200,
        rowSpan: rowSpan.bind(this)
        ,
        sortable: true,
        filter: true

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
        field: 'onBoardingDate',

      },
      {
        headerName: 'Polling Status',
        field: 'pollingStatus',
        cellRenderer: "btnCellCross"
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
      editable: false,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: false,
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
      
    };

    debugger;
    this.constantMessages = CustomerConstantsData.CUSTOMER_PAGE;
    this.GridIdentifier = this.constantMessages.GridIdentifier;
  }

  ngOnInit(): void {
   // this.rowData = CustomerGridData['CUSTOMER'][0]['Columns'];
   
   // throw new Error('Method not implemented.');
    
    this.gridData = CustomerGridData['CUSTOMER'][0]['Columns'];

    let that = this;

    //this.http
    //  .get('../../../src/assets/rawdata.json')
    //  .subscribe((data:any) => {
    //debugger;
    this.rowData =
      [
        {
          "projectId": 1,
          "projectName": "Michael Phelps",
          "userSignum": 1,
          "module": "United States",
          "onBoardingDate": 2008,

          "pollingInterval": "Swimming",
          "lastDataRetrievalTime": 8,
          "nextDataRetrievalTime": 0

        },
        {
          "projectId": 1,
          "projectName": "Michael Phelps123",
          "userSignum": 2,
          "module": "United States1",
          "onBoardingDate": 20081,

          "pollingInterval": "Swimming1",
          "lastDataRetrievalTime": 81,
          "nextDataRetrievalTime": 10

        },
        {
          "projectId": 1,
          "projectName": "Michael Phelps",
          "userSignum": 3,
          "module": "United States",
          "onBoardingDate": 2008,

          "pollingInterval": "Swimming",
          "lastDataRetrievalTime": 9,
          "nextDataRetrievalTime": 0

        },
        {
          "projectId": 1,
          "projectName": "Michael Phelps123",
          "userSignum": 4,
          "module": "United States1",
          "onBoardingDate": 20081,

          "pollingInterval": "Swimming1",
          "lastDataRetrievalTime": 82,
          "nextDataRetrievalTime": 10

        },
        {
          "projectId": 1,
          "projectName": "Michael Phelps",
          "userSignum": 5,
          "module": "United States",
          "onBoardingDate": 2008,

          "pollingInterval": "Swimming",
          "lastDataRetrievalTime": 10,
          "nextDataRetrievalTime": 0

        },
        {
          "projectId": 1,
          "projectName": "Michael Phelps123",
          "userSignum": 6,
          "module": "United States1",
          "onBoardingDate": 20081,

          "pollingInterval": "Swimming1",
          "lastDataRetrievalTime": 83,
          "nextDataRetrievalTime": 10

        },
        {
          "projectId": 1,
          "projectName": "Michael Phelps",
          "userSignum": 7,
          "module": "United States",
          "onBoardingDate": 2008,

          "pollingInterval": "Swimming",
          "lastDataRetrievalTime": 11,
          "nextDataRetrievalTime": 0

        },
        {
          "projectId": 1,
          "projectName": "Michael Phelps123",
          "userSignum": 8,
          "module": "United States1",
          "onBoardingDate": 20081,

          "pollingInterval": "Swimming1",
          "lastDataRetrievalTime": 84,
          "nextDataRetrievalTime": 10

        },
        {
          "projectId": 1,
          "projectName": "Michael Phelps",
          "userSignum": 9,
          "module": "United States",
          "onBoardingDate": 2008,

          "pollingInterval": "Swimming",
          "lastDataRetrievalTime": 8,
          "nextDataRetrievalTime": 0

        },
        {
          "projectId": 1,
          "projectName": "Michael Phelps123",
          "userSignum": 10,
          "module": "United States1",
          "onBoardingDate": 20081,

          "pollingInterval": "Swimming1",
          "lastDataRetrievalTime": 85,
          "nextDataRetrievalTime": 10

        },
        {
          "projectId": 1,
          "projectName": "Michael Phelps",
          "userSignum": 11,
          "module": "United States",
          "onBoardingDate": 2008,

          "pollingInterval": "Swimming",
          "lastDataRetrievalTime": 8,
          "nextDataRetrievalTime": 0

        },
        {
          "projectId": 1,
          "projectName": "Michael Phelps123",
          "userSignum": 12,
          "module": "United States1",
          "onBoardingDate": 20081,

          "pollingInterval": "Swimming1",
          "lastDataRetrievalTime": 86,
          "nextDataRetrievalTime": 10

        },
        {
          "projectId": 1,
          "projectName": "Manish",
          "userSignum": 11,
          "module": "United States",
          "onBoardingDate": 2008,

          "pollingInterval": "Swimming",
          "lastDataRetrievalTime": 8,
          "nextDataRetrievalTime": 0

        },
        {
          "projectId": 1,
          "projectName": "Sumit",
          "userSignum": 12,
          "module": "United States1",
          "onBoardingDate": 20081,

          "pollingInterval": "Swimming1",
          "lastDataRetrievalTime": 86,
          "nextDataRetrievalTime": 10

        },
        {
          "projectId": 1,
          "projectName": "Manish",
          "userSignum": 111,
          "module": "United States",
          "onBoardingDate": 2008,

          "pollingInterval": "Swimming",
          "lastDataRetrievalTime": 8,
          "nextDataRetrievalTime": 0

        },
        {
          "projectId": 1,
          "projectName": "Sumit",
          "userSignum": 121,
          "module": "United States1",
          "onBoardingDate": 20081,

          "pollingInterval": "Swimming1",
          "lastDataRetrievalTime": 86,
          "nextDataRetrievalTime": 10

        },
        {
          "projectId": 1,
          "projectName": "Manish",
          "userSignum": 112,
          "module": "United States",
          "onBoardingDate": 2008,

          "pollingInterval": "Swimming",
          "lastDataRetrievalTime": 8,
          "nextDataRetrievalTime": 0

        },
        {
          "projectId": 1,
          "projectName": "Sumit",
          "userSignum": 122,
          "module": "United States1",
          "onBoardingDate": 20081,

          "pollingInterval": "Swimming1",
          "lastDataRetrievalTime": 86,
          "nextDataRetrievalTime": 10

        },
        {
          "projectId": 1,
          "projectName": "Manish",
          "userSignum": 12111,
          "module": "United States",
          "onBoardingDate": 2008,

          "pollingInterval": "Swimming",
          "lastDataRetrievalTime": 8,
          "nextDataRetrievalTime": 0

        },
        {
          "projectId": 1,
          "projectName": "Sumit",
          "userSignum": 121211,
          "module": "United States1",
          "onBoardingDate": 20081,

          "pollingInterval": "Swimming1",
          "lastDataRetrievalTime": 86,
          "nextDataRetrievalTime": 10

        },
        {
          "projectId": 1,
          "projectName": "Sumit",
          "userSignum": 1221,
          "module": "United States1",
          "onBoardingDate": 20081,

          "pollingInterval": "Swimming1",
          "lastDataRetrievalTime": 86,
          "nextDataRetrievalTime": 10

        },
        {
          "projectId": 1,
          "projectName": "Manish",
          "userSignum": 11111,
          "module": "United States",
          "onBoardingDate": 2008,

          "pollingInterval": "Swimming",
          "lastDataRetrievalTime": 8,
          "nextDataRetrievalTime": 0

        },
        {
          "projectId": 1,
          "projectName": "Sumit",
          "userSignum": 12111,
          "module": "United States1",
          "onBoardingDate": 20081,

          "pollingInterval": "Swimming1",
          "lastDataRetrievalTime": 86,
          "nextDataRetrievalTime": 10

        }
      ];
    debugger;
    var data1 = this.products;
    setTimeout(() => {
      this.agGrid.refresh(data1, CustomerGridData['CUSTOMER'][0])
    }, 4000);
      
      //});
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
    debugger;
    this.agGrid.refresh(this.rowData, CustomerGridData['CUSTOMER'][0]);
    //this.rowData.forEach(function (data, index) {
    //  debugger;
    //  if (index < incrementCounter && rowData.length - 1 !== index && rowData[index].projectName === rowData[index + 1].projectName) {
    //    if (count === 1) {
    //      actualIndex = index;
    //    }

    //    count++;
    //  }
    //  //else if (that.rowData.length == index + 1) {

    //  //}
    //  else if ((index === incrementCounter && count > 1) || (index === rowData.length - 1)) {
    //    rowData[actualIndex].rowSpan = count;
    //    count = 1;
    //    incrementCounter = index + 10;
    //  }
    //  else if (index < incrementCounter && count > 1) {
    //    rowData[actualIndex].rowSpan = count;
    //    count = 1;
    //  }

    //});


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
        '../../../src/app/pages/shared/rawdata.json'
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


  onEditCustomer(model: any) {
    //this.customerName = model.customerName;
    //this.customerId = model.id;
    //this.customerActive = model.active;
  }

  ActivateDeActivateRecord(model: any) {
    let classes: string = $(model.target).attr('class');
    if (classes.indexOf('inactive-switch') > -1) {
      $(model.target).removeClass('inactive-switch');
    }
    else {
      $(model.target).addClass('inactive-switch');
    }
    if (model.data.active) {
      this.ActivateDeActivateTitle = this.constantMessages.DeActivateCustomerTitle;
      this.ActivateDeActivateMessage = this.constantMessages.DeActivateCustomerMessage;
    } else {
      this.ActivateDeActivateTitle = this.constantMessages.ActivateCustomerTitle;
      this.ActivateDeActivateMessage = this.constantMessages.ActivateCustomerMessage;
    }
    //this.customerId = model.data.id
    //this.openActivateDialog = true;
    //model.data['active'] = !model.data['active'];
    //this.customerActive = model.data['active'];
    //this.CustomerModel = model.data;
    return;
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

