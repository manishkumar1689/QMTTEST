import { Component, OnInit, Input, ViewChild, Output, EventEmitter, } from '@angular/core';
import { GridOptions, RowNode, Column } from 'ag-grid-community/main';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TestData } from './generic.grid.data';
import { GlobalDataService } from '../../GlobalData';
import { Constants } from '../../contants';
import { Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';
import { GenericGridService } from './generic.grid.service'
import { CookieService } from 'angular2-cookie/services/cookies.service';
import * as _ from "lodash";

import * as $ from 'jquery';
import { TotalRecordsStatusPanelComponent } from './total.records.status.panel.component';
import { ClearFilterStatusPanelComponent } from './clear.filter.status.panel.component';
var _thatGenericGrid;

@Component({
  selector: 'ag-grid',
  templateUrl: 'generic.grid.html',
  providers: [GenericGridService, GlobalDataService]
})

export class TestGridComponent {
  model: any = {
    rating: 1
  };
  @Input() rowData: any[];
  @Input() gridHeader: any;

  @Input() customGridRatingColumns: { ColumnTitle: string, Rating: number }[];

  @Input() EnableGridState: boolean = false;
  @Input() GridIdentifier: string;
  @Input() ShowAssetsTourClass: string = '';
  @Input() rowModelType: string;
  @Input() ExpandAll: boolean = false;
  @Input() DefaultExpandGroup: string;

  @Output() EditRecord: EventEmitter<any> = new EventEmitter();
  @Output() EditMasterDataRecord: EventEmitter<any> = new EventEmitter();
  @Output() AssetGroupEditGroupRecord: EventEmitter<any> = new EventEmitter();
  @Output() AssetGroupEditAssociationRecord: EventEmitter<any> = new EventEmitter();
  @Output() AuditRecord: EventEmitter<any> = new EventEmitter();
  @Output() DeleteRecord: EventEmitter<any> = new EventEmitter();
  @Output() SubscribeRecord: EventEmitter<any> = new EventEmitter();
  @Output() NavigateRecord: EventEmitter<any> = new EventEmitter();
  @Output() ShareRecord: EventEmitter<any> = new EventEmitter();
  @Output() ShowFeedback: EventEmitter<any> = new EventEmitter();
  @Output() RatingRecord: EventEmitter<any> = new EventEmitter();
  @Output() SaveRecord: EventEmitter<any> = new EventEmitter();
  @Output() AvgRatingRecord: EventEmitter<any> = new EventEmitter();
  @Output() ActivateDeActivateRecord: EventEmitter<any> = new EventEmitter();
  @Output() SortAsc: EventEmitter<any> = new EventEmitter();
  @Output() SortDesc: EventEmitter<any> = new EventEmitter();
  @Output() ConfigureRecord: EventEmitter<any> = new EventEmitter();
  @Output() AddEBC: EventEmitter<any> = new EventEmitter();
  @Output() AssociateAssetsRecord: EventEmitter<any> = new EventEmitter();
  @Output() ShowGroupAssetsRecord: EventEmitter<any> = new EventEmitter();
  @Output() SelectAssetRecord: EventEmitter<any> = new EventEmitter();
  @Output() SelectBookmarkRecord: EventEmitter<any> = new EventEmitter();
  @Output() SendReleaseNoteRecord: EventEmitter<any> = new EventEmitter();
  @Output() RelatAssetRecord: EventEmitter<any> = new EventEmitter();
  @Output() RelatChildRecord: EventEmitter<any> = new EventEmitter();
  @Output() RemoveAssociationRecord: EventEmitter<any> = new EventEmitter();
  @Output() ShowAssetGroupsRecord: EventEmitter<any> = new EventEmitter();
  @Output() RadioButtonCheck: EventEmitter<any> = new EventEmitter();
  @Output() DeleteGroupRecord: EventEmitter<any> = new EventEmitter();
  @Output() ExpandChildGrid: EventEmitter<any> = new EventEmitter();
  @Output() ShowAssetDetails: EventEmitter<any> = new EventEmitter();
  @Output() subscribeDownloadAssetRecord: EventEmitter<any> = new EventEmitter();
  @Output() EmitFilterData: EventEmitter<any> = new EventEmitter();
  @Output() EmitSortData: EventEmitter<any> = new EventEmitter();
  @Output() EmitColumnMovedData: EventEmitter<any> = new EventEmitter();
  @Output() EmitGroupMovedData: EventEmitter<any> = new EventEmitter();
  @Output() ShowFeedbackDetails: EventEmitter<any> = new EventEmitter();
  @Output() EmitUserName: EventEmitter<any> = new EventEmitter();
  @Output() NotReusedRecord: EventEmitter<any> = new EventEmitter();
  @Output() ShowCopyAssetLinkModal: EventEmitter<any> = new EventEmitter();
  @Output() GeneralEditAction: EventEmitter<any> = new EventEmitter();
  @Output() GeneralAddEditUsers: EventEmitter<any> = new EventEmitter();
  @Output() GeneralDeleteAction: EventEmitter<any> = new EventEmitter();
  @Output() GeneralSettingAction: EventEmitter<any> = new EventEmitter();
  @Output() GeneralPlusAction: EventEmitter<any> = new EventEmitter();
  @Output() loadPlannedAssetData: EventEmitter<any> = new EventEmitter();
  @Output() AssetBookmarkLink: EventEmitter<any> = new EventEmitter();
  @Output() GeneralChangePracticenerAction: EventEmitter<any> = new EventEmitter();
  @Output() ShowPatRiskAnalysis: EventEmitter<any> = new EventEmitter();

  constantAssetUrlDownload: string = '';
  noAutoColumnfit: boolean = false;
  @Input() pageSize: number = 10;
  batchSize: number = 5000;
  test: any[];
  tempData: any[];
  currentBatchCounter = 1;
  constantMessages: any = {};
  public paginationPageSize;
  public paginationNumberFormatter;
  public totalRows: number = 0;
  sideBar: any = {
    toolPanels: [
      "columns",
      "filters",
    ],
  }
  serversideURL: string;
  APIMethodType: string;
  HasMoreRecords: string;
  DetailGridData: any;

  NodeToExpand: RowNode;
  freezeRecordCount: boolean = false;
  filterModel: any;
  sortModel: any;
  columnState: any;

  showNavigateToActionButton: boolean = false;

  defaultGroupSortComparator;
  groupDefaultExpanded: any = 0;
  private gridApi;
  private gridColumnApi;
  public userGridState: any = {};
  private childData: any;
  gridHeight: string = '443px';
  private detailRowHeight;
  //private getRowNodeId;
  private childOptions: any = { HighlightDataDifferences: false, DataDiffColumns: [], DataUniqueColumn: '', Edit: false, Delete: false }
  private columnToBeExpanded;
  private SuppressMenu: boolean = false;
  private childGridColumns: any[] = [];
  private quickFilterText: string;
  private gridRowHeight;

  filterType: any[] = [];
  filterValue: any[] = [];
  columnName: any[] = [];
  columnValue: any[] = [];

  condition2: any[] = [];
  filterType2: any[] = [];
  filterValue2: any[] = [];

  isClearFilterOperation: boolean = false;
  myGridOptions: GridOptions = {
    defaultColDef: {
      resizable: true,
    },
    enableBrowserTooltips: true,
    cacheBlockSize: 100,
    animateRows: false,
    maxBlocksInCache: 2,
    masterDetail: true,
    suppressColumnVirtualisation: true,
    suppressDragLeaveHidesColumns: false,
    suppressMakeColumnVisibleAfterUnGroup: false,
    rowGroupPanelShow: 'always',
    groupUseEntireRow: true,
    //getRowNodeId: function (params) {
    //  return this.getRowNodeId
    //},
    getRowHeight: function (params) {
      return this.detailRowHeight;
    },
    sideBar: true,
    context: {
      componentParent: this
    },
    postProcessPopup: function (params) {
      var ePopup = params.ePopup;
      //ePopup.style.top = "35px";
    },
    onCellClicked: (params) => {
      let isgridchildcalled: boolean = false;
      if (this.childGridColumns.length > 0) {
        for (var i = 0; i < this.childGridColumns.length; i++) {
          if (this.childGridColumns[i].toLowerCase() == params.colDef.field.toLowerCase()) {
            isgridchildcalled = true;
          }
        }
      }
      if (params.colDef != undefined && (isgridchildcalled)) {
        if (params.node.expanded == false) {
          let c = this.onGroupExpandedOrCollapsed(params.node);
        }
        else {
          params.node.setExpanded(false); this.childData = null; this.columnToBeExpanded = null;
        }
        $('.ag-details-row').css('padding-left', '20px');
        $('.ag-details-row').css('padding-top', '8px');
        $('.ag-details-row').css('padding-bottom', '5px');
        if (params != undefined && params.data != undefined && params.data['Expand'] != undefined) {
          if (params.data['Expand'] == true)
            params.data['Expand'] = false;
          else if (params.data['Expand'] == false) {
            params.data['Expand'] = true;
            //for multiple level grouping
            if (params.node.parent.parent != undefined) {
              params.node.parent.parent.setExpanded(true);
              if (params.node.parent.parent.parent != undefined)
                params.node.parent.parent.parent.setExpanded(true);
            }
            //----------//
          }
        }
        this.myGridOptions.api.redrawRows();
      }
    },
  };
  statusBar: any;
  defaultColDef: any;
  frameworkComponents: any;
  @ViewChild("agGrid", { static: false }) aggrid;
  @ViewChild("clearGridStateConfirm", { static: false }) clearGridStateConfirm: {
    open(options: {
      title: string,
      message: string
    }), close();
  };
  onPaginationChanged() { }
  constructor(private router: Router, private genericGridService: GenericGridService, private cookieService: CookieService, private globalData: GlobalDataService) {
    _thatGenericGrid = this;
    this.constantMessages = Constants.MESSAGES.GENERIC_GRID;
    this.constantAssetUrlDownload = Constants.MESSAGES.PLAYBOOKSEARCH_PAGE.ASSET_URL_DOWNLOAD;
    this.rowData = [{ test: "dummy", Role: "test" }];
    this.gridHeader = [{ "test,test,": "" }];
    this.myGridOptions.groupDefaultExpanded = this.groupDefaultExpanded;
    //for groups sorting
    this.defaultGroupSortComparator = function (nodeA, nodeB) {
      if (nodeA.key < nodeB.key) {
        return -1;
      } else if (nodeA.key > nodeB.key) {
        return 1;
      } else {
        return 0;
      }
    };
    this.myGridOptions.onFilterChanged = this.onFilterChanged.bind(this);
    this.myGridOptions.onSortChanged = this.onSortChanged.bind(this);
    this.myGridOptions.onColumnMoved = this.onColumnMoved.bind(this);
    this.myGridOptions.onColumnRowGroupChanged = this.OnGroupChanged.bind(this);
    this.myGridOptions.onColumnPivotModeChanged = this.OnPivotChanged.bind(this);
    if (this.myGridOptions.rowModelType == "" || this.myGridOptions.rowModelType == null || this.myGridOptions.rowModelType == undefined) {
      this.myGridOptions.rowModelType = "clientSide";
    }
    else {
      this.myGridOptions.rowModelType = this.rowModelType;
      this.myGridOptions.onGridSizeChanged = this.onGridSizeChanged.bind(this);
    }
    //this.getRowNodeId = function (data) {
    //    if (data.PortfolioId != undefined && data.PortfolioId != null)
    //        return data.PortfolioId
    //};
    this.frameworkComponents = {
      clearFilterComponent: ClearFilterStatusPanelComponent,
      totalRecordsComponent: TotalRecordsStatusPanelComponent
    };
    this.statusBar = {
      statusPanels: [
        {
          statusPanel: "totalRecordsComponent",
          align: "left"
        },

        {
          statusPanel: "clearFilterComponent",
          align: "right"
        }

      ]
    };
    this.defaultColDef = {
      resizable: true,
      filter: true,
      sortable: true
    };

    this.paginationPageSize = 10;
    this.paginationNumberFormatter = function (params) {
      return '[' + params.value.toLocaleString() + ']';
    };
  }
  onGroupExpandedOrCollapsed(node: RowNode) {
    let gridKey;
    if (this.gridHeader['Options'][0]['DetailGridKey'] == null || (this.gridHeader['Options'][0]['DetailGridKey']).trim() == '')
      gridKey = 'AssetRegistryId';
    else gridKey = this.gridHeader['Options'][0]['DetailGridKey'];
    if (this.test.filter(x => x[gridKey] == [node.data[gridKey]]) != undefined && this.test.filter(x => x[gridKey] == [node.data[gridKey]]) != null) {
      let ID = node.data[gridKey];
      this.columnToBeExpanded = node.data[gridKey];
      if (node != null && node != undefined)
        this.NodeToExpand = node;
      else { this.NodeToExpand = null; this.columnToBeExpanded = null; }
      this.myGridOptions.api.forEachNode(function (node) {
        if (node.id != undefined) { //&& node.id != ID) {
          node.setExpanded(false);
          if (node.data != undefined && node.data != null)
            node.data['Expand'] = false;
        }
      });
      return this.ExpandChildGrid.emit(ID);
    }
  }
  SetChiildGridData(data) {
    var offset = 50;
    var height;
    if (data != null && data != undefined) {
      var allDetailRowHeight = data.length * 27;
      if (data.length >= 6) {
        height = 200; this.SuppressMenu = false;
      } else if (data.length == 0) {
        height = 100 + offset; this.SuppressMenu = true;
      }
      else if (data.length < 6) {
        height = allDetailRowHeight + 30 + offset; this.SuppressMenu = true;
      }
      else {
        height = allDetailRowHeight + offset;
        this.SuppressMenu = true;
      }
    } else { height = 100 + offset; this.SuppressMenu = true; }
    this.childData = data;
    this.gridRowHeight = height;
    this.NodeToExpand.setExpanded(true);
    this.myGridOptions.animateRows = true;
    if (this.NodeToExpand.detailNode != undefined && this.NodeToExpand.detailNode != null && this.myGridOptions.api.getDetailGridInfo(this.NodeToExpand.detailNode.id) != undefined)
      this.myGridOptions.api.getDetailGridInfo(this.NodeToExpand.detailNode.id).api.setRowData(data);
    else this.NodeToExpand.parent.setExpanded(true);

    //for multiple level grouping
    if (this.NodeToExpand.parent.parent != undefined) {
      this.NodeToExpand.parent.parent.setExpanded(true);
      if (this.NodeToExpand.parent.parent.parent != undefined)
        this.NodeToExpand.parent.parent.parent.setExpanded(true);
    }
    //----------//
    this.myGridOptions.api.ensureNodeVisible(this.NodeToExpand);
  }
  onGridSizeChanged = () => {
    // get the current grids width
    var gridWidth = (<HTMLElement>document.getElementsByClassName('aggridClass')[0]).offsetWidth;

    // keep track of which columns to hide/show
    var columnsToShow = [];
    var columnsToHide = [];

    // iterate over all columns (visible or not) and work out
    // now many columns can fit (based on their minWidth)
    var totalColsWidth = 0;
    var allColumns = this.myGridOptions.columnApi.getAllColumns();
    for (var i = 0; i < allColumns.length; i++) {
      let column = allColumns[i];
      totalColsWidth += column.getMinWidth();
      if (totalColsWidth > gridWidth) {
        columnsToHide.push(column.getColId());
      } else {
        columnsToShow.push(column.getColId());
      }
    }
    // fill out any available space to ensure there are no gaps
    if (!this.noAutoColumnfit)
      this.myGridOptions.api.sizeColumnsToFit();
  }
  onColumnMoved = () => {
    this.EmitColumnMovedData.emit(this.myGridOptions.columnApi.getColumnState());
  };
  OnGroupChanged = () => {
    this.AdjustColumnWidth();
    this.EmitGroupMovedData.emit(this.myGridOptions.columnApi.getColumnState());
  }
  OnPivotChanged = () => {
    this.myGridOptions.groupUseEntireRow = !this.myGridOptions.groupUseEntireRow;
  }
  onSortChanged = () => {
    if (!this.myGridOptions.api) {
      console.log("this.myGridOptions.api undefined -> genericGrid onSortChanged()");
      return;
    }
    if (this.myGridOptions.rowModelType != "serverSide") {
      if (this.sortModel != null || this.sortModel != undefined)
        this.myGridOptions.api.setSortModel(this.sortModel);
      this.EmitSortData.emit(this.myGridOptions.api.getSortModel());
    }
    else {
      let sortorder = this.myGridOptions.api.getSortModel()[0]['sort'];
      let sortCol = this.myGridOptions.api.getSortModel()[0]['colId'];
      if (sortorder == "asc") {
        this.test.sort((t1: any, t2: any) => {
          if (t1[sortCol] > t2[sortCol]) {
            return 1;
          }

          if (t1[sortCol] < t2[sortCol]) {
            return -1;
          }
          if (t1[sortCol] == t2[sortCol]) {
            return 0;
          }
          return 0;
        });
      }
      if (sortorder == "desc") {
        this.test.sort((t1: any, t2: any) => {
          if (t1[sortCol] < t2[sortCol]) {
            return 1;
          }

          if (t1[sortCol] > t2[sortCol]) {
            return -1;
          }
          if (t1[sortCol] == t2[sortCol]) {
            return 0;
          }
          return 0;
        });
      }
      this.sortModel = this.myGridOptions.api.getSortModel();
      this.populateGridData(this.test);
    }
  };
  onFilterChanged = () => {
    if (!this.myGridOptions.api) {
      console.log("this.myGridOptions.api undefined -> genericGrid onFilterChanged()");
      return;
    }
    if (this.myGridOptions.rowModelType != "serverSide") {
      setTimeout(() => {
        let count: number = 0;
        this.myGridOptions.api.forEachNodeAfterFilter(function (node) {
          if (node.data != undefined)
            count = count + 1;
        });

        this.totalRows = count;
      }, 50);
    }
    else {
      this.test = [{ Framework: "dummy", Role: "test" }];


      for (let i in this.myGridOptions.api.getFilterModel()) {

        this.columnName.push(i);

        if (this.myGridOptions.api.getFilterModel()[i]['condition2'] != null || this.myGridOptions.api.getFilterModel()[i]['condition2'] != undefined) {
          this.filterType.push(this.myGridOptions.api.getFilterModel()[i]['condition1']['type']);
          this.filterValue.push(this.myGridOptions.api.getFilterModel()[i]['condition1']['filter']);

          if (this.myGridOptions.api.getFilterModel()[i]['operator'] != null || this.myGridOptions.api.getFilterModel()[i]['operator'] != undefined) {
            this.condition2.push(this.myGridOptions.api.getFilterModel()[i]['operator']);
            this.filterType2.push(this.myGridOptions.api.getFilterModel()[i]['condition2']['type']);
            this.filterValue2.push(this.myGridOptions.api.getFilterModel()[i]['condition2']['filter']);

          } else this.condition2.push('');
        } else {
          this.filterType.push(this.myGridOptions.api.getFilterModel()[i]['type']);
          this.filterValue.push(this.myGridOptions.api.getFilterModel()[i]['filter']);
        }
      }
      this.test.pop();
      this.test = null;

      let FilterData = this.tempData;
      for (let i in this.filterType) {

        switch (this.filterType[i].toLowerCase()) {
          case "contains":
            if (i == '0')
              this.test = FilterData.filter(x => (x[this.columnName[i]]).toString().toLowerCase().includes(this.filterValue[i].toLowerCase()));
            else this.test = this.test.filter(x => (x[this.columnName[i]]).toString().toLowerCase().includes(this.filterValue[i].toLowerCase()));
            break;
          case "equals":
            if (this.tempData.filter(x => (x[this.columnName[i]]) == this.filterValue[i]).length > 0) {
              if (i == '0')
                this.test = FilterData.filter(x => (x[this.columnName[i]]) == this.filterValue[i]);
              else this.test = this.test.filter(x => (x[this.columnName[i]]) == this.filterValue[i]);
            }
            else if (this.tempData.filter(x => (x[this.columnName[i]]).toString().toLowerCase() === this.filterValue[i].toLowerCase()).length > 0) {
              if (i == '0')
                this.test = FilterData.filter(x => (x[this.columnName[i]]).toString().toLowerCase() === this.filterValue[i].toLowerCase());
              else
                this.test = this.test.filter(x => (x[this.columnName[i]]).toString().toLowerCase() === this.filterValue[i].toLowerCase());
            }
            break;
          case "notequals":
            if (i == '0')
              this.test = FilterData.filter(x => (x[this.columnName[i]]).toString().toLowerCase() != this.filterValue[i].toLowerCase());
            else
              this.test = this.test.filter(x => (x[this.columnName[i]]).toString().toLowerCase() != this.filterValue[i].toLowerCase());
            break;
          case "startswith":
            if (i == '0')
              this.test = FilterData.filter(x => (x[this.columnName[i]]).toString().toLowerCase().startsWith(this.filterValue[i].toLowerCase()));
            else
              this.test = this.test.filter(x => (x[this.columnName[i]]).toString().toLowerCase().startsWith(this.filterValue[i].toLowerCase()));
            break;
          case "endswith":
            if (i == '0')
              this.test = FilterData.filter(x => (x[this.columnName[i]]).toString().toLowerCase().endsWith(this.filterValue[i].toLowerCase()));
            else
              this.test = this.test.filter(x => (x[this.columnName[i]]).toString().toLowerCase().endsWith(this.filterValue[i].toLowerCase()));

            break;
          case "notequal": //for numeric
            if (i == '0')
              this.test = FilterData.filter(x => (x[this.columnName[i]]) != this.filterValue[i]);
            else
              this.test = this.test.filter(x => (x[this.columnName[i]]) != this.filterValue[i]);
            break;
          case "lessthan":
            if (i == '0')
              this.test = FilterData.filter(x => (x[this.columnName[i]]) < this.filterValue[i]);
            else
              this.test = this.test.filter(x => (x[this.columnName[i]]) < this.filterValue[i]);
            break;
          case "lessthanorequal":
            if (i == '0')
              this.test = FilterData.filter(x => (x[this.columnName[i]]) <= this.filterValue[i]);
            else
              this.test = this.test.filter(x => (x[this.columnName[i]]) <= this.filterValue[i]);
            break;
          case "greaterthan":
            if (i == '0')
              this.test = FilterData.filter(x => (x[this.columnName[i]]) > this.filterValue[i]);
            else
              this.test = this.test.filter(x => (x[this.columnName[i]]) > this.filterValue[i]);
            break;
          case "greaterthanorequal":
            if (i == '0')
              this.test = FilterData.filter(x => (x[this.columnName[i]]) >= this.filterValue[i]);
            else
              this.test = this.test.filter(x => (x[this.columnName[i]]) >= this.filterValue[i]);
            break;
        }
        if (this.filterType2[i] != null || this.filterType2[i] != undefined) {
          //Second condition
          switch (this.filterType2[i].toLowerCase()) {
            case "contains":
              if (this.condition2[i] == "AND") {
                this.test = this.test.filter(x => (x[this.columnName[i]]).toString().toLowerCase().includes(this.filterValue2[i].toLowerCase()));
                break;
              }
              if (this.condition2[i] == "OR") {
                this.test = FilterData.filter(x => (x[this.columnName[i]]).toString().toLowerCase().includes(this.filterValue2[i].toLowerCase()) || (x[this.columnName[i]]).toString().toLowerCase().includes(this.filterValue[i].toLowerCase()));
                break;
              }
            case "equals":
              if (this.tempData.filter(x => (x[this.columnName[i]]) == this.filterValue2[i]).length > 0) {
                if (this.condition2[i] == 'AND')
                  this.test = this.test.filter(x => (x[this.columnName[i]]) == this.filterValue2[i]);
                if (this.condition2[i] == 'OR')
                  this.test = FilterData.filter(x => (x[this.columnName[i]]) == this.filterValue2 || (x[this.columnName[i]]) == this.filterValue);
              }
              else if (this.tempData.filter(x => (x[this.columnName[i]]).toString().toLowerCase() === this.filterValue2[i].toLowerCase()).length > 0) {
                if (this.condition2[i] == 'AND')
                  this.test = this.test.filter(x => (x[this.columnName[i]]).toString().toLowerCase() === this.filterValue2[i].toLowerCase());
                if (this.condition2[i] == 'OR')
                  this.test = FilterData.filter(x => (x[this.columnName[i]]).toString().toLowerCase() === this.filterValue2[i].toLowerCase() || (x[this.columnName[i]]).toString().toLowerCase() === this.filterValue[i].toLowerCase());
              }
              break;
            case "notequals":
              if (this.condition2[i] == "AND")
                this.test = this.test.filter(x => (x[this.columnName[i]]).toString().toLowerCase() != this.filterValue2[i].toLowerCase());
              if (this.condition2[i] == 'OR')
                this.test = FilterData.filter(x => (x[this.columnName[i]]).toString().toLowerCase() != this.filterValue2[i].toLowerCase() || (x[this.columnName[i]]).toString().toLowerCase() != this.filterValue[i].toLowerCase());
              break;
            case "startswith":
              if (this.condition2[i] == 'AND')
                this.test = this.test.filter(x => (x[this.columnName[i]]).toString().toLowerCase().startsWith(this.filterValue2[i].toLowerCase()));
              if (this.condition2[i] == 'OR')
                this.test = FilterData.filter(x => (x[this.columnName[i]]).toString().toLowerCase().startsWith(this.filterValue2[i].toLowerCase()) || (x[this.columnName[i]]).toString().toLowerCase().startsWith(this.filterValue[i].toLowerCase()));
              break;
            case "endswith":
              if (this.condition2[i] == 'AND')
                this.test = this.test.filter(x => (x[this.columnName[i]]).toString().toLowerCase().endsWith(this.filterValue2[i].toLowerCase()));
              if (this.condition2[i] == 'OR')
                this.test = FilterData.filter(x => (x[this.columnName[i]]).toString().toLowerCase().endsWith(this.filterValue2[i].toLowerCase()) || (x[this.columnName[i]]).toString().toLowerCase().endsWith(this.filterValue[i].toLowerCase()));
              break;
            case "notequal": //for numeric
              if (this.condition2[i] == "AND")
                this.test = this.test.filter(x => (x[this.columnName[i]]) != this.filterValue2[i]);
              if (this.condition2[i] == 'OR')
                this.test = FilterData.filter(x => (x[this.columnName[i]]) != this.filterValue2[i] || (x[this.columnName[i]]) != this.filterValue[i]);
              break;
            case "lessthan":
              if (this.condition2[i] == 'AND')
                this.test = this.test.filter(x => (x[this.columnName[i]]) < this.filterValue2[i]);
              if (this.condition2[i] == 'OR')
                this.test = FilterData.filter(x => (x[this.columnName[i]]) < this.filterValue2[i] || (x[this.columnName[i]]) < this.filterValue[i]);
              break;
            case "lessthanorequal":
              if (this.condition2[i] == 'AND')
                this.test = this.test.filter(x => (x[this.columnName[i]]) <= this.filterValue2[i]);
              if (this.condition2[i] == 'OR')
                this.test = FilterData.filter(x => (x[this.columnName[i]]) <= this.filterValue2[i] || (x[this.columnName[i]]) <= this.filterValue[i]);
              break;
            case "greaterthan":
              if (this.condition2[i] == 'AND')
                this.test = this.test.filter(x => (x[this.columnName[i]]) > this.filterValue2[i]);
              if (this.condition2[i] == 'OR')
                this.test = FilterData.filter(x => (x[this.columnName[i]]) > this.filterValue2[i] || (x[this.columnName[i]]) > this.filterValue[i]);
              break;
            case "greaterthanorequal":
              if (this.condition2[i] == 'AND')
                this.test = this.test.filter(x => (x[this.columnName[i]]) >= this.filterValue2[i]);
              if (this.condition2[i] == 'OR')
                this.test = FilterData.filter(x => (x[this.columnName[i]]) >= this.filterValue2[i] || (x[this.columnName[i]]) >= this.filterValue[i]);
              break;
          }
        }
        FilterData = this.test;
      }

      this.myGridOptions.cacheBlockSize = this.test.length;
      this.filterModel = this.myGridOptions.api.getFilterModel();
      this.populateGridData(this.test);
      setTimeout(() => {
        this.totalRows = this.test.length;
      }, 50);
    }
    this.EmitFilterData.emit(this.myGridOptions.api.getFilterModel());
  };
  ngOnInit() {
    //  this.myGridOptions.rowData = this.createRowData();
    // this.myGridOptions.columnDefs = this.createColumnDefs(this.gridHeader, [{ Edit: 'Test' }]);

    this.myGridOptions.groupDefaultExpanded = this.groupDefaultExpanded;
  }
  clear() {
    if (!this.myGridOptions.api) {
      console.log("this.myGridOptions.api undefined -> genericGrid clear()");
      return;
    }
    this.test = null;
    this.refresh(this.tempData, this.gridHeader);
  }
  public reset() {
    console.log("reset generic grid ts");
    this.isClearFilterOperation = true;
    this.filterModel = null;
    this.sortModel = null;
    this.columnState = null;
    this.filterType = [];
    this.filterValue = [];
    this.columnName = [];
    this.columnValue = [];

    this.condition2 = [];
    this.filterType2 = [];
    this.filterValue2 = [];

    //if (this.myGridOptions.rowModelType != "serverSide")
    //    this.clear();

    if (this.myGridOptions.rowModelType == "serverSide")
      this.myGridOptions.cacheBlockSize = this.batchSize - 1;
    this.myGridOptions.api.closeToolPanel();
    this.gridColumnApi.setPivotMode(false);
    this.gridApi.setSortModel(null);
    this.gridApi.setFilterModel(null);
    this.userGridState = {};
    this.refresh(this.tempData, this.gridHeader);
    this.RadioButtonCheck.emit(null);
    this.EmitFilterData.emit(null);
    this.EmitSortData.emit(null);
    this.EmitColumnMovedData.emit(null);
    this.EmitGroupMovedData.emit(null);

    this.isClearFilterOperation = false;
  }
  ResetColumnData() {
    this.filterModel = this.sortModel = this.columnState = null;
    this.myGridOptions.api.setFilterModel(null);
    this.myGridOptions.api.setSortModel(null);
  }
  resetCounter() {
    this.currentBatchCounter = 1;
  }
  ResizeGrid() {
    this.myGridOptions.columnApi.autoSizeAllColumns();
    setTimeout(() => {
      if (this.myGridOptions.api != undefined)
        this.AdjustColumnWidth();
    }, 50);
  }
  SetFilterModel(data, sortData, columnState) {
    this.filterModel = data;
    this.sortModel = sortData;
    this.columnState = columnState;
  }
  refresh(data: any[], dataHeader: any[], refreshDataOnly = false) {
    if (!this.myGridOptions.api) {
      console.log("this.myGridOptions.api undefined -> genericGrid refresh()");
      return;
    }
    this.columnToBeExpanded = null;
    this.NodeToExpand = null;
    this.myGridOptions.api.forEachNode(function (node) {
      if (node.id != undefined) {
        node.setExpanded(false);
      }
    });
    this.rowData = data;
    var _that = this;
    this.gridHeader = dataHeader;
    this.myGridOptions.paginationPageSize = this.pageSize;
    if (refreshDataOnly == false) {
      if (dataHeader['Options'][0]['ChildOptions'] != undefined) {
        this.childOptions.HighlightDataDifferences = dataHeader['Options'][0]['ChildOptions'][0]['HighlightDataDifferences'];
        this.childOptions.DataDiffColumns = dataHeader['Options'][0]['ChildOptions'][0]['DataDiffColumns'];
        this.childOptions.DataUniqueColumn = dataHeader['Options'][0]['ChildOptions'][0]['DataUniqueColumn'];
      }
      this.ApplyAdditionalProperties(dataHeader['Options'][0]);
      this.myGridOptions.api.setColumnDefs(this.createColumnDefs(dataHeader['Columns'], dataHeader['Options']));
    }
    this.populateGridData(this.rowData);

    if (this.myGridOptions.rowModelType == "serverSide") {
      setTimeout(() => {
        this.myGridOptions.columnApi.autoSizeAllColumns();
        var gridWidth = (<HTMLElement>document.getElementsByClassName('aggridClass')[0]).offsetWidth;
        //if (this.myGridOptions.api.getPreferredWidth() < gridWidth || gridWidth == 0) {
        this.myGridOptions.api.sizeColumnsToFit();
        //}
        if (this.ExpandAll)
          this.myGridOptions.api.expandAll();

      }, 500);
    }
    else {
      setTimeout(() => {
        this.AdjustColumnWidth();
      }, 500);
    }
    this.tempData = this.rowData;

    if (refreshDataOnly == false) {
      if (!this.isClearFilterOperation) {
        setTimeout(() => {
          if (this.EnableGridState)
            this.restoreGridState();
          if (this.filterModel != null || this.filterModel != undefined)
            this.myGridOptions.api.setFilterModel(this.filterModel);
          if (this.sortModel != null || this.sortModel != undefined)
            this.myGridOptions.api.setSortModel(this.sortModel);
          if (this.columnState != null && this.columnState != undefined) {
            this.myGridOptions.columnApi.setColumnState(this.columnState);
          }
        }, 200);
      }
    }
    if (_that.DefaultExpandGroup != undefined) {
      setTimeout(() => {
        this.myGridOptions.api.forEachNode(function (node) {
          if (node.key != undefined && node.key.toLowerCase() === _that.DefaultExpandGroup.toLowerCase()) {
            node.setExpanded(true);
          }
        });
      }, 500);
    }
  }

  /*Save and Persist Grid state for a user*/
  public saveGridState() {
    this.userGridState.User = this.cookieService.get("username").toUpperCase();;
    this.userGridState.GridIdentifier = this.GridIdentifier;
    this.userGridState.GridColumnState = JSON.stringify(this.gridColumnApi.getColumnState());
    this.userGridState.GridColumnGroupState = JSON.stringify(this.gridColumnApi.getColumnGroupState());
    this.userGridState.GridSortState = JSON.stringify(this.gridApi.getSortModel());
    this.userGridState.GridFilterState = JSON.stringify(this.gridApi.getFilterModel());
    this.userGridState.GridPivotMode = this.gridColumnApi.isPivotMode();

    this.genericGridService.saveUserGridState(this.userGridState)
      .subscribe(result => {
        localStorage.removeItem(this.GridIdentifier);
        localStorage.setItem(this.GridIdentifier, JSON.stringify(result));
        this.userGridState = result;
      });
  }

  restoreGridState() {
    if (this.GridIdentifier != undefined && this.GridIdentifier != null) {
      var currGridState = localStorage.getItem(this.GridIdentifier);
      if (currGridState != null) {
        this.userGridState = JSON.parse(currGridState);
        if (Object.keys(this.userGridState).length > 0) {
          this.gridColumnApi.setColumnState(JSON.parse(this.userGridState.GridColumnState));
          this.gridColumnApi.setColumnGroupState(JSON.parse(this.userGridState.GridColumnGroupState));
          this.gridApi.setSortModel(JSON.parse(this.userGridState.GridSortState));
          this.gridApi.setFilterModel(JSON.parse(this.userGridState.GridFilterState));
          this.gridColumnApi.setPivotMode(this.userGridState.GridPivotMode);
        }
      }
    }
  }

  public resetGridState() {
    this.genericGridService.resetUserGridState(this.GridIdentifier)
      .subscribe(result => {
        this.userGridState = {};
        localStorage.removeItem(this.GridIdentifier);
        this.reset();
      });
  }

  componentStateChanged(params) {

    var t = null;
  }

  onReady(params) {
    console.log("generic.grid onReady params", params);
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.closeToolPanel();
  }
  private AdjustColumnWidth() {
    setTimeout(() => {
      if (this.myGridOptions.columnApi != undefined) {
        this.myGridOptions.columnApi.autoSizeAllColumns();
        let cols: Column[] = this.myGridOptions.columnApi.getAllDisplayedColumns();

        let specialCols: Column;
        for (let c in this.gridHeader['Columns']) {
          let col: string = this.gridHeader['Columns'][c];
          let values: any[] = JSON.stringify(col).split(',');

          specialCols = cols.filter(x => (values.indexOf(x.getColDef().field) != -1 && (values[4] != null && values[4] != undefined && values[4] != 0)))[0];
          if (specialCols != null && specialCols != undefined && specialCols.getActualWidth() != (Number)(values[4])) {
            specialCols.setActualWidth((Number)(values[4]), "api");
            let index = cols.findIndex(x => specialCols.getColId() == x.getColId());

            cols.splice(index, 1);
          }
          specialCols = null;
        }
        specialCols = cols.filter(x => x.getColDef().field == 'Options')[0];

        if (specialCols != null && specialCols != undefined && specialCols.getActualWidth() < specialCols.getColDef().width) {

          specialCols.setActualWidth(specialCols.getColDef().width, "api");
          let index = cols.findIndex(x => specialCols.getColId() == x.getColId());

          cols.splice(index, 1);
        }

        this.myGridOptions.columnApi.autoSizeColumns(cols);
        var gridWidth = this.gridHeader['Options'][0]['gridCase'] == 'homeGrid' ? $('ag-grid').width() : (<HTMLElement>document.getElementsByClassName('aggridClass')[0]).offsetWidth;
        let actualWidth: number = 0;
        this.myGridOptions.columnApi.getAllDisplayedColumns().forEach(function (node) {
          actualWidth = actualWidth + node.getActualWidth();
        });
        if (actualWidth < gridWidth || gridWidth == 0) {
          this.myGridOptions.api.sizeColumnsToFit();
        }
        if (this.ExpandAll)
          this.myGridOptions.api.expandAll();
        else this.myGridOptions.api.collapseAll();
      }
    }, 100);
  }
  private ApplyAdditionalProperties(data) {
    var _that = this;
    if (data['MultipleRowSelection'] == "true")
      this.myGridOptions.rowSelection = "multiple";
    else this.myGridOptions.rowSelection = "single";

    if (data['AllowRowDrag'] == "true")
      this.myGridOptions.rowDragManaged = true;
    else this.myGridOptions.rowDragManaged = false;

    if (data['AllowExcelExport'] == "true")
      this.myGridOptions.suppressExcelExport = false;
    else this.myGridOptions.suppressExcelExport = true;

    if (data['AllowCSVExport'] == "true")
      this.myGridOptions.suppressCsvExport = false;
    else this.myGridOptions.suppressCsvExport = true;

    if (data['NoContextMenu'] == "true")
      this.myGridOptions.suppressContextMenu = true;
    else this.myGridOptions.suppressContextMenu = false;

    if (data['highlightByAssetCategory'] == "true") {
      this.myGridOptions.rowClassRules = {
        'green-row': 'data != undefined && (data.AssetCategoryId == "01" || data.AssetCategoryId == "02")',
        'amber-row': 'data != undefined && data.AssetCategoryId == "03"'
      }
    }

    if (data['AllowMasterDetail'] == "true") {
      this.myGridOptions.masterDetail = true;
      this.childGridColumns = (data['ChildGrideventColumns'] != undefined) ? data['ChildGrideventColumns'].split(',') : [];
      this.DetailGridData = {
        detailGridOptions: {
          defaultColDef: {
            resizable: true,
            filter: true,
            sortable: true
          },
          frameworkComponents: {
            //customGridToolTipGeneric: CustomGridToolTipGenericComponent
          },
          columnDefs: this.createColumnDefs(this.gridHeader['Options'][0]['ChildColumn'], this.gridHeader['Options'][0]['ChildOptions'], true),
          postProcessPopup: function (params) {
            var ePopup = params.ePopup;
            //ePopup.style.top = "7px";
          },
          onGridReady: function (params) {
            if (params.columnApi.getAllColumns().length <= 5)
              params.api.sizeColumnsToFit();
          },
          onRowClicked: function (params) { _that.onRowClicked(params) },
        },
        getDetailRowData: function (params) {
          params.successCallback(_that.childData);
        }
      };

      if (data['ChildOptions'][0].highlightTotalValue == "true") {
        this.DetailGridData.detailGridOptions.rowClassRules = {
          'amber-row': 'data.AssetName == "Total Value"',
        }
      }
    }
    else { this.myGridOptions.masterDetail = false; this.DetailGridData = null; }
  }
  private createColumn(data, isChildGrid = false) {
    let innerHeader = JSON.stringify(data).replace('{"', '').replace('"}', '').replace('":"', '').split(',');
    let HeaderName = innerHeader[0].replace('{"', '');
    let Field = innerHeader[1];
    let Width = (Number)(innerHeader[4]);
    let ColID = innerHeader[1];
    let FilterParams = { apply: true, newRowsAction: 'keep' };
    let Pinned = (innerHeader[6] == null || innerHeader[6] == undefined) ? null : (innerHeader[6].toLowerCase() == "left" || innerHeader[6] == "right") ? innerHeader[6] : null;
    let LockPinned = (innerHeader[5] == null || innerHeader[5] == undefined) ? null : (innerHeader[5].toLowerCase() == "lockpinn") ? true : false;
    let CellClass = (innerHeader[5] == null || innerHeader[5] == undefined) ? null : (innerHeader[5].toLowerCase() == "lockpinn") ? "lock-pinned" : null;
    let CellStyle = (innerHeader[5] != null && innerHeader[5] != undefined && innerHeader[5].toLowerCase() == "lockpinn") ? { background: 'ghostwhite' } : {};
    let ToolTip = innerHeader[1];
    let RowGroup = (innerHeader[9] == null || innerHeader[9] == undefined || innerHeader[9] == '') ? false : true;
    let HeaderToolTip = HeaderName;
    if (innerHeader.length > 10 && !(innerHeader[10] == null || innerHeader[10] == undefined || innerHeader[10] == ''))
      HeaderToolTip = innerHeader[10];
    return {
      headerName: HeaderName,
      field: Field,
      headerTooltip: HeaderToolTip,
      width: Width,
      colId: ColID,
      filterParams: FilterParams,
      enablePivot: true,
      enableRowGroup: !isChildGrid,
      pinned: Pinned,
      lockPinned: LockPinned,
      cellClass: CellClass,
      cellStyle: CellStyle,
      tooltipField: ToolTip,
      rowGroup: RowGroup,
      hide: RowGroup,
      suppressMenu: isChildGrid == true ? this.SuppressMenu : false,
    };
  }
  private createColumnDefs(data: any, Options: any, isChildGrid = false) {
    debugger;
    var _that = this;
    var _header;
    let keyNames = Object.keys(data);
    let headers = [];
    let innerHeader = [];

    let localgridCase = "";
    let localShare;
    let localReadOnly;
    let localEditMasterData;
    let localAssetGroupEditGroup;
    let localAssetGroupEditAssociation;
    let localisRelatAsset;
    let localisRelatChild;
    let localisAudit;
    let localIsDelete;
    let localIsSubscribed;
    let localNavigateTo;
    let localRating;
    let localEnableBatch;
    let localSave;
    let localAvgRating;
    let localSelectAsset;
    let localSelectBookmark;
    let localSendReleaseNote;
    let localActivate;
    let localConfig;
    let localAddEBC;
    let localIsShowAssetDetails;
    let localIsShareAsset;
    let localIsShowFeedbackDetails;
    let localAssociateAssets;
    let localShowGroupAssets;
    let localRemoveAssociation;
    let localShowAssetGroups;
    let localDeleteGroup;
    let localExpandAll;
    let localDefaultExpandGroup;
    let localAllowMasterDetail;
    let localSubscribeDownloadPract;
    let localEditTourClass;
    let localSortOrder;
    let localdetailGridKey;
    let localdetailGridColumn;
    let localNotReusedIcon;
    let localGeneralEditWithoutPermission;
    let addEditUsers;
    let localGeneralDeleteWithoutPermission;
    let localGeneralSettingWithoutPermission;
    let localGeneralPlusActionWithoutPermission;
    let localPlannedAssetDetails;
    let localAssetBookmarkLink, localTypeRadio;
    let localChangePracticener;

    localgridCase = Options[0]['gridCase'];
    localShare = (Options[0]['Share'] && this.HasAccessGenericGrid('UserSavedSearchShareAction'));
    localReadOnly = (Options[0]['Edit'] && this.HasAccessGenericGrid('ManageAssetManageAction'));
    localEditMasterData = (Options[0]['EditMasterData'] && this.HasAccessGenericGrid('MasterDataEditAction'));
    localAssetGroupEditGroup = (Options[0]['AssetGroupEditGroup'] && this.HasAccessGenericGrid('AssetGroupEditGroupAction'));
    localAssetGroupEditAssociation = (Options[0]['AssetGroupEditAssociation'] && this.HasAccessGenericGrid('AssetGroupEditAssetAssociationAction'));
    localisRelatAsset = (Options[0]['RelatAsset'] && this.HasAccessGenericGrid('AssetGroupShowAssociatedAssetAction'));
    localisRelatChild = (Options[0]['RelatChild'] && this.HasAccessGenericGrid('AssetGroupShowAssociatedAssetAction'));
    localisAudit = (Options[0]['Audit'] && this.HasAccessGenericGrid('AssetViewAudit'));
    localIsDelete = (Options[0]['Delete'] && this.HasAccessGenericGrid('UserSavedSearchDeleteAction'));
    localIsSubscribed = (Options[0]['Subscribed'] && this.HasAccessGenericGrid('UserSavedSearchSubscribeAction'));
    localNavigateTo = (Options[0]['Navigate'] && this.HasAccessGenericGrid('NavigateToHomeScreen'));
    localRating = Options[0]['Rating'];
    localEnableBatch = Options[0]['EnableBatch'];
    localSave = Options[0]['Save'];
    localAvgRating = Options[0]['AvgRating'];
    localSelectAsset = Options[0]['Select'];
    localSelectBookmark = Options[0]['SelectBookmark'];
    localSendReleaseNote = Options[0]['SendReleaseNote'];
    localActivate = Options[0]['Activate'];
    localConfig = (Options[0]['Config'] && this.HasAccessGenericGrid('ParentConfigMDMProduct'));
    localAddEBC = (Options[0]['AddEBC']);
    localIsShowAssetDetails = (Options[0]['ShowAssetDetails'] && this.HasAccessGenericGrid('AssetViewDetails'));
    localIsShareAsset = Options[0]['ShareAsset'];
    localIsShowFeedbackDetails = (Options[0]['ShowFeedbackDetails'] && this.HasAccessGenericGrid('AssetViewDetails'));
    localAssociateAssets = (Options[0]['AssociateAssets'] && this.HasAccessGenericGrid('AssetGroupAddAssetAssociationAction'));
    localShowGroupAssets = (Options[0]['ShowGroupAssets'] && this.HasAccessGenericGrid('AssetGroupShowAssociatedAssetAction'));
    localRemoveAssociation = (Options[0]['RemoveAssociation']);
    localShowAssetGroups = (Options[0]['ShowAssetGroups'] && this.HasAccessGenericGrid('AssetGroupShowAssociatedAssetAction'));
    localDeleteGroup = (Options[0]['DeleteGroup'] && this.HasAccessGenericGrid('AssetGroupDeleteGroupAction'));
    localExpandAll = this.ExpandAll = Options[0]['ExpandAll'];
    localDefaultExpandGroup = this.DefaultExpandGroup = Options[0]['DefaultExpandGroup'];
    localAllowMasterDetail = Options[0]['AllowMasterDetail'];
    localSubscribeDownloadPract = (Options[0]['SubscribeDownloadPract']);
    localEditTourClass = Options[0]['EditTourClass'];

    localSortOrder = (Options[0]['SortOrder'] && this.HasAccessGenericGrid('MasterDataSortAction'));
    localdetailGridKey = Options[0]['DetailGridKey'];
    localdetailGridColumn = Options[0]['DetailGridColumn'];
    localNotReusedIcon = Options[0]['NotReusedIcon'];

    localGeneralEditWithoutPermission = Options[0]['EditAction'];
    localGeneralDeleteWithoutPermission = Options[0]['DeleteAction'];
    localGeneralSettingWithoutPermission = Options[0]['SettingAction'];
    localChangePracticener = Options[0]['ChangePractitioner'];
    localGeneralPlusActionWithoutPermission = Options[0]['PlusSignAction'];
    localPlannedAssetDetails = Options[0]['showPlannedAssetDetails'];
    addEditUsers = Options[0]['AddEditUserAction'];
    localAssetBookmarkLink = Options[0]['AssetBookmarkNavigate'];
    localTypeRadio = Options[0]['isTypeRadio'];


    if (Options[0]['GridHeight'] != null && Options[0]['GridHeight'] != undefined && Options[0]['GridHeight'] != '') {
      this.gridHeight = Options[0]['GridHeight'];
      if (this.gridHeight.indexOf('px') == -1)
        this.gridHeight = this.gridHeight + 'px';
    }
    if (localNavigateTo && this.HasAccessGenericGrid('NavigateToHomeScreen')) {
      this.showNavigateToActionButton = true;
    }
    keyNames.map((key) => {
      let sTitle: any;
      innerHeader = JSON.stringify(data[key]).split(',');
      _header = null;
      //From Here Headers push on basis of passed data
      if (innerHeader.length > 1) {
        if (innerHeader[2] == 'IsRadioButton') //To enable row level radio button
        {
          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: false,
              sortable: false,
              enablePivot: false,
              pivot: false,
              enableRowGroup: false,
              rowGroup: false,
              tooltipField: '',
              cellRenderer: function (params) {
                if (params.data['selectedItem'] === true) {
                  params.node.selected = true;
                  return '<input type="radio" name="radioGroup" data-action-type="radioButtonCheck" value="' + params.value + '" ' + (params.data['selectedItem'] === true ? 'checked' : '') + '>';
                }
                params.node.selected = false;
                return '<input type="radio" name="radioGroup" data-action-type="radioButtonCheck" value="' + params.value + '" ' + (params.data['Selected'] === 1 ? 'checked' : '') + '>';
              }
            });
          headers.push(_header);
        }
        else if (localAllowMasterDetail && localdetailGridColumn != null && localdetailGridColumn.toLowerCase() == innerHeader[1].toLowerCase()) {
          this.groupDefaultExpanded = (innerHeader[9] == null || innerHeader[9] == undefined || innerHeader[9] == '') ? 0 : 1;
          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: 'agTextColumnFilter',
              cellRenderer: function (params) {
                return '<span title="' + params.value + '" data-action-type="group"><i data-action-type="group" class="fa fa-angle-' + ((params != undefined && params.data != undefined && params.data['Expand'] != undefined && params.data['Expand'] == true) ? 'down' : 'right') + '"></i> ' + params.value + '</span>'
              }

            });
          headers.push(_header);
        }

        else if (innerHeader[1] == 'FileType') {

          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: 'agTextColumnFilter',
              tooltipField: '',
              cellRenderer: function (params) {
                return (params.value != null && params.value != undefined) ? '<span>' + params.value + '</span>' : '<span>Unknown</span>';
              }
            });

          headers.push(_header);

        }

        else if (innerHeader[1] == 'name') {
          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: false,
              sortable: false,
              tooltipField: '',
              cellRenderer: function (params) {
                if (params.data != undefined && params.data != null && params.data['name'] != undefined && params.data['name'] != null) {
                  return '<a title="Click here to download the file" rel="noopener noreferrer" target="_blank" href="' + params.data.webUrl + '">' + params.data.name + '</a>'
                }
              }
            });
          headers.push(_header);
        }


        else if (innerHeader[1] == 'Asset_Name') {
          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: false,
              sortable: false,
              tooltipField: '',
              cellRenderer: function (params) {
                sTitle = params.data['AssetDescription'] != undefined && params.data['AssetDescription'] != null ? params.data['AssetDescription'] : "";
                let assetname = params.data['Asset_Name'] != undefined && params.data['Asset_Name'] != null ? params.data['Asset_Name'] : "";
                let assetTitle: any = '';
                if (assetname != null && assetname != undefined && assetname != '') {
                  let dataAssetName;
                  if (assetname.indexOf("SLA Breached ") == 0) {
                    dataAssetName = assetname.substr(13);
                  }
                  else if (assetname.indexOf("Due Today ") == 0) {
                    dataAssetName = assetname.substr(10);
                  }
                  else {
                    dataAssetName = assetname;
                  }

                  if (dataAssetName != 'Total Value')
                    assetTitle = "Asset Name : " + dataAssetName;
                }
                if (sTitle != null && sTitle != undefined && sTitle != '')
                  assetTitle = assetTitle + "\nAsset Description : " + encodeURI(sTitle);

                assetTitle = decodeURI(assetTitle).replace(/<\/?[^>]+(>|$)/g, "");

                if (params.data != undefined && params.data != null && params.data['Asset_Name'] != undefined && params.data['Asset_Name'] != null) {
                  if (params.data.AssetAvailableStatus == 'Available' && params.data.ApprovalStatusText == 'Approved') {
                    return '<a customtooltip title="' + assetTitle + '" role="button" id="downloadLink" data-action-type="generalAssetBookmarkLink">' + params.data.Asset_Name + '</a>'
                  }
                  else {
                    return '<a customtooltip style="text-decoration:none;color:#000;" title="' + assetTitle + '">' + params.data.Asset_Name + '</a>'
                  }
                }
              }
            });
          headers.push(_header);
        }

        else if (innerHeader[1] == 'CFREmail') {
          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: 'agTextColumnFilter',
              cellRenderer: function (params) {
                if (params.data['CFREmail'] != null && params.data['CFREmail'] != undefined)
                  return '<a title="Click to send a mail to this user" style="cursor:pointer" data-action-type="sendMailCFR">' + params.data['CFREmail'] + '</a>'
              }

            });
          headers.push(_header);
        }
        else if (innerHeader[1] == 'PFMEmail') {
          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: 'agTextColumnFilter',
              cellRenderer: function (params) {
                if (params.data['PFMEmail'] != null && params.data['PFMEmail'] != undefined)
                  return '<a title="Click to send a mail to this user" style="cursor:pointer" data-action-type="sendMailPFM">' + params.data['PFMEmail'] + '</a>'
              }

            });
          headers.push(_header);
        }
        else if (innerHeader[1] == 'CPMEmail') {
          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: 'agTextColumnFilter',
              cellRenderer: function (params) {
                if (params.data['CPMEmail'] != null && params.data['CPMEmail'] != undefined)
                  return '<a title="Click to send a mail to this user" style="cursor:pointer" data-action-type="sendMailCPM">' + params.data['CPMEmail'] + '</a>'
              }

            });
          headers.push(_header);
        }
        else if (innerHeader[1] == 'QualityRating') {
          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: false,
              sortable: false,
              cellStyle: { color: "#fcd122" },
              tooltipField: '',
              cellRenderer: function (params) {
                if (params.data['QualityRating'] == null) {
                  return '<a data-action-type="rating" style="' + (params.data['FeedbackOverdueFlag'] == true ? 'background-color:coral;' : 'color:Blue') + ';cursor:pointer">RATE NOW</a>';
                }
                else if (params.colDef['headerName'] == 'Average Rating') {
                  if (params.data['ShowRatingLink'] == false)
                    return '<span style="color:#ceb035" title="' + params.data['QualityRatingTitle'] + '">' + params.data['QualityRating'] + '</span>';

                  else
                    return '<span title="' + params.data['QualityRatingTitle'] + '" class="linkOnHover" style="' + (params.data['NoRating'] == true ? 'color:Blue;' : '') + '">' + params.data['QualityRating'] + '</span>';
                }
                else {
                  if (params.data['ShowRatingLink'] == false)
                    return '<span style="color:#ceb035" title="' + params.data['QualityRatingTitle'] + '">' + params.data['QualityRating'] + '</span>';
                  else
                    return '<span title="' + params.data['QualityRatingTitle'] + '" class="linkOnHover" style="' + (params.data['NoRating'] == true ? 'color:Blue;' : '') + '" data-action-type="showfeedback">' + params.data['QualityRating'] + '</span>';

                }
              }
            });
          headers.push(_header);
        }
        else if (innerHeader[2] == 'IsNumeric') //To enable numeric filter
        {
          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: 'agNumberColumnFilter',
            });
          headers.push(_header);
        }
        else if (innerHeader[1] == 'BaselineVersionChild') {
          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              headerTooltip: innerHeader[0].replace('{"', ''),
              enablePivot: false,
              enableRowGroup: false,
              filter: 'agNumberColumnFilter',
              valueFormatter: function (params) { return Math.floor(params.value).toFixed(1) },
            });
          headers.push(_header);
        }
        else if (this.childOptions.HighlightDataDifferences && localAllowMasterDetail && localdetailGridColumn != null && localdetailGridColumn.toLowerCase() == innerHeader[1].toLowerCase()) {
          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              headerTooltip: innerHeader[0].replace('{"', ''),
              enablePivot: false,
              filter: 'agTextColumnFilter',
              cellRenderer: function (params) {
                return '<span title="' + params.value + '" data-action-type="group"><i class="fa fa-angle-' + ((params != undefined && params.data != undefined && params.data['Expand'] != undefined && params.data['Expand'] == true) ? 'down' : 'right') + '"></i> ' + params.value + '</span>'
              }
            });
          headers.push(_header);
        }
        else if (this.rowModelType != "serverSide" && (this.globalData.GetFilteredColumnName().indexOf(innerHeader[1]) != -1) || (innerHeader[1].toLowerCase().indexOf('status') != -1 && innerHeader[1].toLowerCase().indexOf('date') == -1) || innerHeader[1].toLowerCase().indexOf('quality') != -1 || innerHeader[1].toLowerCase().indexOf('rating') != -1) {
          this.groupDefaultExpanded = (innerHeader[9] == null || innerHeader[9] == undefined || innerHeader[9] == '') ? 0 : 1;
          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filterParams: { apply: false },
            });
          headers.push(_header);
        }
        else if (innerHeader[1] == 'patId') {
          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              sortable: true,
              tooltipField: '',
              filter: 'agNumberColumnFilter',
              cellRenderer: function (params) {
                return '<span title="Project Name : ' + params.data["projectName"] + '\nCustomer Name : ' + params.data["customerName"] + '">' + params.data["patId"] + '</span>'
              }
            });
          headers.push(_header);
        }
        else if (innerHeader[1] == 'startDateTime') {
          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              sortable: true,
              tooltipField: '',
              filter: 'agDateColumnFilter',
              // add extra parameters for the date filter
              filterParams: {
                comparator: function (filterLocalDateAtMidnight, cellValue) {
                  var dateAsString = cellValue.substr(0, cellValue.indexOf('T'));
                  if (dateAsString == null) return 0;

                  var dateParts = dateAsString.split("-");
                  var year = Number(dateParts[0]);
                  var month = Number(dateParts[1]) - 1;
                  var day = Number(dateParts[2]);
                  var cellDate = new Date(year, month, day);

                  if (cellDate < filterLocalDateAtMidnight) {
                    return -1;
                  } else if (cellDate > filterLocalDateAtMidnight) {
                    return 1;
                  } else {
                    return 0;
                  }
                }
              },
              cellRenderer: function (params) {
                return '<span title="' + params.data["startDateTime"] + '">' + params.data["startDateTime"] + '</span>'
              }
            });
          headers.push(_header);
        }
        else if (innerHeader[1] == 'riskAnalysis') {
          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              sortable: true,
              enableTooltip: true,
              cellRenderer: function (params) {
                if (params.data["riskAnalysis"] != null) {
                  if (params.data["riskAnalysis"].length > 1000) {
                    return '<span title="Click here to see risk analysis" data-action-type="ShowRiskAnalysis">' + params.data["riskAnalysis"] + '</span>'
                  }
                  else {
                    return '<span title="' + params.data["riskAnalysis"] + '">' + params.data["riskAnalysis"] + '</span>'
                  }
                }
              }
            });
          headers.push(_header);
        }
        else if (innerHeader[1] == 'endDateTime') {
          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              sortable: true,
              tooltipField: '',
              filter: 'agDateColumnFilter',
              // add extra parameters for the date filter
              filterParams: {
                comparator: function (filterLocalDateAtMidnight, cellValue) {
                  var dateAsString = cellValue.substr(0, cellValue.indexOf('T'));
                  if (dateAsString == null) return 0;

                  var dateParts = dateAsString.split("-");
                  var year = Number(dateParts[0]);
                  var month = Number(dateParts[1]) - 1;
                  var day = Number(dateParts[2]);
                  var cellDate = new Date(year, month, day);

                  if (cellDate < filterLocalDateAtMidnight) {
                    return -1;
                  } else if (cellDate > filterLocalDateAtMidnight) {
                    return 1;
                  } else {
                    return 0;
                  }
                }
              },
              cellRenderer: function (params) {
                return '<span title="' + params.data["endDateTime"] + '">' + params.data["endDateTime"] + '</span>'
              }
            });
          headers.push(_header);
        }

        else if (innerHeader[1] == 'severityOfTheActivityName') {

          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: 'agSetColumnFilter',
              cellRenderer: function (params) {
                return params.data['severityOfTheActivityName']
              }
            });

          headers.push(_header);
        }
        else if (innerHeader[1] == 'patrole') {

          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: 'agSetColumnFilter',
              cellRenderer: function (params) {
                return params.data['patrole']
              }
            });

          headers.push(_header);
        }
        else if (innerHeader[1] == 'serviceAffectingName') {

          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: 'agSetColumnFilter',
              cellRenderer: function (params) {
                return params.data['serviceAffectingName']
              }
            });

          headers.push(_header);
        }
        else if (innerHeader[1] == 'domainName') {

          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: 'agSetColumnFilter',
              cellRenderer: function (params) {
                return params.data['domainName']
              }
            });

          headers.push(_header);
        }
        else if (innerHeader[1] == 'nodeName') {

          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: 'agSetColumnFilter',
              cellRenderer: function (params) {
                return params.data['nodeName']
              }
            });

          headers.push(_header);
        }
        else if (innerHeader[1] == 'marketAreaEntityName') {

          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: 'agSetColumnFilter',
              cellRenderer: function (params) {
                return params.data['marketAreaEntityName']
              }
            });

          headers.push(_header);
        }
        else if (innerHeader[1] == 'activityTypeName') {

          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: 'agSetColumnFilter',
              cellRenderer: function (params) {
                return params.data['activityTypeName']
              }
            });

          headers.push(_header);
        }
        else if (innerHeader[1] == 'activityPerformedLocationName') {

          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: 'agSetColumnFilter',
              cellRenderer: function (params) {
                return params.data['activityPerformedLocationName']
              }
            });

          headers.push(_header);
        }

        else {
          this.groupDefaultExpanded = (innerHeader[9] == null || innerHeader[9] == undefined || innerHeader[9] == '') ? 0 : 1;
          _header = _.merge(this.createColumn(data[key], isChildGrid),
            {
              filter: 'agTextColumnFilter',
              cellClass: this.childOptions.HighlightDataDifferences ? this.handleDetailGridCellClass.bind(this) : null,
            });
          headers.push(_header);
        }
      }
      else { }
    });

    /** COMMON ACTION ICONS START **/
    //From Here Headers push on basis of Options Keys data || innerHeader[1] == 'IsSubscribed'        

    if ((localShare)
      || (localReadOnly)
      || (localEditMasterData)
      || (localAssetGroupEditGroup)
      || (localAssetGroupEditAssociation)
      || (localisRelatAsset)
      || (localisRelatChild)
      || (localisAudit)
      || (localIsDelete)
      || (localIsSubscribed)
      || (localNavigateTo && this.showNavigateToActionButton)
      || (localSave)
      || (localAvgRating)
      || (localSelectAsset)
      || (localSelectBookmark)
      || (localSendReleaseNote)
      || (localActivate)
      || (localConfig)
      || (localAddEBC)
      || (localIsShowAssetDetails)
      || (localIsShowFeedbackDetails)
      || (localAssociateAssets)
      || (localShowGroupAssets)
      || (localRemoveAssociation)
      || (localShowAssetGroups)
      || (localDeleteGroup)
      || (localSubscribeDownloadPract)
      || (localSortOrder)
      || (localActivate)
      || (localNotReusedIcon)
      || (localIsShareAsset)
      || (localGeneralEditWithoutPermission)
      || (addEditUsers)
      || (localAssetBookmarkLink)
      || (localGeneralDeleteWithoutPermission)
      || (localGeneralSettingWithoutPermission)
      || (localChangePracticener)
      || (localGeneralPlusActionWithoutPermission)
      || (localPlannedAssetDetails) || (localTypeRadio)) {

      let headerClassCol = "";
      let cellClassCol = "btn-link";
      let widthCol = 0;
      let templateCol = "";
      let divClassTemplateCol = "commonColDiv";
      let divStyleTemplateCol = "width:25px";
      let suppressFilterCol = true;
      let suppressSortingCol = true;

      if (localReadOnly) {
        widthCol += 40;
        if (localEditTourClass != '') {
          cellClassCol += " tourEditAssetClickButton ";
          headerClassCol += " " + localEditTourClass + " ";
        }
      }

      if (localEditMasterData) {
        widthCol += 40;
        if (localEditTourClass != '') {
          cellClassCol += " tourMDMEditFWclass ";
          headerClassCol += " " + localEditTourClass + " ";
        }
      }
      if (localAssetGroupEditGroup) {
        widthCol += 40;
        if (localEditTourClass != '') {
          cellClassCol += " tourMDMEditFWclass ";
          headerClassCol += " " + localEditTourClass + " ";
        }
      }
      if (localAssetGroupEditAssociation) {
        widthCol += 40;
        if (localEditTourClass != '') {
          cellClassCol += " tourMDMEditFWclass ";
          headerClassCol += " " + localEditTourClass + " ";
        }
      }

      if (localisRelatAsset) {
        widthCol += 35;
      }

      if (localIsShowAssetDetails) {
        widthCol += 35;
      }

      if (localIsShowFeedbackDetails) {
        widthCol += 35;
      }

      if (localisRelatChild) {
        widthCol += 40;
      }

      if (localIsShareAsset) {
        widthCol += 35;
      }

      if (localisAudit) {
        widthCol += 40;
      }

      if (localIsDelete) {
        widthCol += 40;
      }
      if (localNavigateTo && this.showNavigateToActionButton) {
        widthCol += 40;
      }

      if (localConfig) {
        widthCol += 40;
      }

      if (localAddEBC) {
        widthCol += 40;
        cellClassCol += " tourAddEBC ";
        headerClassCol += " " + "tourAddEBC" + " ";
      }

      if (localShowGroupAssets) {
        widthCol += 40;
        cellClassCol += " tourshowassets ";
        headerClassCol += " " + "tourshowassets" + " ";
      }

      if (localAssociateAssets) {
        widthCol += 40;
        cellClassCol += " tourassociate ";
        headerClassCol += " " + "tourassociate" + " ";
      }

      if (localShowAssetGroups) {
        widthCol += 40;
      }

      if (localRemoveAssociation) {
        widthCol += 40;
        cellClassCol += " tourdeassociate ";
        headerClassCol += " " + "tourdeassociate" + " ";
      }

      if (localDeleteGroup) {
        widthCol += 40;
      }

      if (localActivate) {
        widthCol += 40;
      }

      if (localAvgRating) {
        widthCol += 40;
      }

      if (localSave) {
        widthCol += 40;
      }

      if (localSelectAsset || localTypeRadio) {
        widthCol += 40;
      }

      if (localSelectBookmark) {
        widthCol += 40;
      }

      if (localSortOrder) {
        widthCol += 140;
      }

      if (localIsSubscribed) {
        widthCol += 140;
      }

      if (localSubscribeDownloadPract) {
        widthCol += 140;
      }

      if (localNotReusedIcon) {
        widthCol += 40;
      }

      if (localGeneralEditWithoutPermission) {
        widthCol += 40;
      }
      if (addEditUsers) {
        widthCol += 40;
      }

      if (localGeneralDeleteWithoutPermission) {
        widthCol += 40;
      }
      if (localGeneralSettingWithoutPermission) {
        widthCol += 40;
      }
      if (localChangePracticener) {
        widthCol += 40;
      }

      if (localGeneralPlusActionWithoutPermission) {
        widthCol += 40;
      }

      if (localSendReleaseNote) {
        widthCol += 40;
      }

      if (widthCol < 100) {
        widthCol = 100;
      }

      ////
      //From Here Headers push on basis of passed data
      //to show at end call push()
      headers.unshift(
        {
          headerName: "Options",
          colId: "Options",
          headerClass: headerClassCol,
          cellClass: cellClassCol,
          width: widthCol,
          pinned: "left",
          field: "Options",
          suppressSizeToFit: true,
          suppressMovable: true,
          lockPosition: true,
          filter: !suppressFilterCol,
          sortable: !suppressSortingCol,
          suppressMenu: isChildGrid == true ? this.SuppressMenu : false,
          cellRenderer: function (params) {

            templateCol = "";
            divStyleTemplateCol = "width:25px";
            if (params.data != null) {
              if (localReadOnly) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>";
                if (params.data['ReuseCaseStatus'] != null) {
                  if ((params.data['ReuseCaseStatus'].toLowerCase() == 'due' || params.data['ReuseCaseStatus'].toLowerCase() == 'pending') && (params.data['Opportunity_Name'] == '' || params.data['Opportunity_Name'] == null || params.data['Opportunity_Name'] == undefined))
                    templateCol += '<button type="button" class="btnaction"  data-action-type="edit" title="Click to Edit" data-toggle="modal" data-target="#ReuseModal"><i class="glyphicon glyphicon-pencil"  data-action-type="edit"></i></button>';
                  else
                    templateCol += '<button type="button" class="btnaction"  data-action-type="edit" title="Click to Edit"><i class="glyphicon glyphicon-pencil"  data-action-type="edit"></i></button>';
                } else {
                  templateCol += '<button type="button" class="btnaction"  data-action-type="edit" title="Click to Manage"><i class="glyphicon glyphicon-pencil"  data-action-type="edit"></i></button>';
                }
                templateCol += "</div>";
              }
              if (localGeneralEditWithoutPermission) {
                let role: any = params.data['patrole'];
                templateCol += '<span style="margin:6px;font-size:12px"><i title="Click to Edit" class="icon icon-edit" data-action-type="generalEdit" style="cursor:pointer;"></i></span>';

                // if (_that.cookieService.get("userrole") == 'Admin' || _that.cookieService.get("userrole") == 'Practitioner' || role=='Practitioner' || role=='LM' || role=='SME') {
                //     templateCol += '<span style="margin:6px;font-size:12px"><i title="Click to Edit" class="icon icon-edit" data-action-type="generalEdit" style="cursor:pointer;"></i></span>';
                // } else if (_that.cookieService.get("userrole") == 'LNADriver') {
                //     templateCol += '<span style="margin:6px;font-size:12px;opacity:0.5;cursor:auto;"><i title="Click to Edit" class="icon icon-edit"></i></span>';
                // }
              }
              if (localGeneralDeleteWithoutPermission) {
                templateCol += '<span style="margin:6px;font-size:12px"><i title="Click to delete" class="icon icon-trashcan" data-action-type="generalDelete" style="cursor:pointer;"></i></span>';

                //let ActivityStatus: any = params.data['activityStatus'];
                //let Role: any = params.data['patrole'];
                //if (ActivityStatus == 'Draft' && (Role == 'Practitioner' || Role == 'Admin')) {
                //  templateCol += '<span style="margin:6px;"><i title="Click to delete" class="icon icon-trashcan" data-action-type="generalDelete" style="cursor:pointer;"></i></span>';
                //} else {
                //  templateCol += '<span style="margin:6px;"><i title="Can not delete this PAT" class="icon icon-trashcan" style="opacity:0.5;cursor:auto;" disabled="true"></i></span>';
                //}
              }
              if (localGeneralSettingWithoutPermission) {
                templateCol += '<span style="margin:6px;font-size:12px"><i title="Click to Setting" class="icon icon-settings" data-action-type="generalSetting" style="cursor:pointer;"></i></span>';

                //let ActivityStatus: any = params.data['activityStatus'];
                //let Role: any = params.data['patrole'];
                //if (ActivityStatus == 'Draft' && (Role == 'Practitioner' || Role == 'Admin')) {
                //  templateCol += '<span style="margin:6px;"><i title="Click to delete" class="icon icon-trashcan" data-action-type="generalSetting" style="cursor:pointer;"></i></span>';
                //} else {
                //  templateCol += '<span style="margin:6px;"><i title="Can not delete this PAT" class="icon icon-trashcan" style="opacity:0.5;cursor:auto;" disabled="true"></i></span>';
                //}
              }
              if (localChangePracticener) {
                let Role: any = params.data['patrole'];
                if (Role == 'LM' || Role == 'Admin') {
                  templateCol += '<span style="margin:6px;cursor:pointer;"><i title="Click to change practitioner" class="icon icon-avatar" data-action-type="generalChangePracticener" style="cursor:pointer;"></i></span>';
                } else {
                  templateCol += '<span style="margin:6px;"><i title="Only LM can change practitioner" class="icon icon-avatar" style="opacity:0.5;cursor:auto;" disabled="true"></i></span>';
                }
              }
              if (localEditMasterData) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + _that.GenerateRowActionButton('editMasterData', 'Click to Edit', 'glyphicon glyphicon-pencil')
                  + "</div>";
              }
              if (localAssetGroupEditGroup) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + _that.GenerateRowActionButton('editAssetGroupData', 'Click to Edit', 'glyphicon glyphicon-pencil')
                  + "</div>";
              }
              if (localAssetGroupEditAssociation) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + _that.GenerateRowActionButton('editAssetAssociationData', 'Click to Edit', 'glyphicon glyphicon-pencil')
                  + "</div>";
              }

              if (localisRelatChild) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + _that.GenerateRowActionButton('relatchild', 'Click to View Related Assets', 'glyphicon glyphicon-list-alt')
                  + "</div>";
              }

              if (localisAudit) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + _that.GenerateRowActionButton('audit', 'Click to Audit', 'glyphicon glyphicon-list-alt')
                  + "</div>";
              }

              if (localIsDelete) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + _that.GenerateRowActionButton('delete', 'Click to Delete', 'glyphicon glyphicon-remove-circle')
                  + "</div>";
              }

              if (localNavigateTo && _that.showNavigateToActionButton) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + _that.GenerateRowActionButton('navigateto', 'Navigate To', 'glyphicon glyphicon-open')
                  + "</div>";
              }

              if (localConfig) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + _that.GenerateRowActionButton('config', 'Click to configure parent', 'fa fa-neuter', true, 'tourguidedproductparentconfig')
                  + "</div>";
              }

              if (localAddEBC) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + _that.GenerateRowActionButton('addEBC', 'Click to Add Engagement Business Case', 'fa fa-suitcase')
                  + "</div>";
              }

              if (localShowGroupAssets) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + _that.GenerateRowActionButton('showgroupassets', 'Click to View Related Assets', 'glyphicon glyphicon-list')
                  + "</div>";
              }

              if (localAssociateAssets) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + _that.GenerateRowActionButton('associateassets', 'Click to Associate Assets', 'glyphicon glyphicon-plus-sign')
                  + "</div>";
              }

              if (localShowAssetGroups) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + _that.GenerateRowActionButton('showassetgroups', 'Click to View Associated Groups', 'glyphicon glyphicon-list')
                  + "</div>";
              }

              if (localRemoveAssociation) {
                let IsActive: any = params.data.showGridOption;
                if (IsActive) {
                  templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                    + _that.GenerateRowActionButton('removeAssociation', 'Click to Remove Association', 'glyphicon glyphicon-minus-sign')
                    + "</div>";
                }
              }

              if (localDeleteGroup) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + _that.GenerateRowActionButton('deleteGroup', 'Click to Delete Group', 'glyphicon glyphicon-remove-circle')
                  + "</div>";
              }

              if (localActivate) {
                templateCol += "<label class='switch' data-action-type='ActivateDeActivateRecord'>";
                let IsActive: any = params.data.active;
                if (_that.cookieService.get("userrole") == 'Admin') {
                  if (!IsActive) {
                    templateCol += ' <input type="checkbox"  >';
                    templateCol += "<i class='ball inactive-switch' title='Click to Activate' data-action-type='ActivateDeActivateRecord'></i></label>";
                  } else {
                    templateCol += '<input type="checkbox" checked  >';
                    templateCol += "<i class='ball' title='Click to DeActivate' data-action-type='ActivateDeActivateRecord'></i></label>";
                  }
                } else {
                  if (!IsActive) {
                    templateCol += ' <input type="checkbox" disabled  >';
                    templateCol += "<i class='ball inactive-switch' title='You are not authorised to Activate'></i></label>";
                  } else {
                    templateCol += '<input type="checkbox" disabled checked  >';
                    templateCol += "<i class='ball' title='You are not authorised to DeActivate' ></i></label>";
                  }
                }
              }

              if (localShare) {
                //field: 'IsShared',
                let IsShared: any = params.data.IsShared;
                if (IsShared == null) IsShared = 0;

                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>";
                if (IsShared == 0) {
                  templateCol += '<button type="button" class="btnaction"  data-action-type="share" title="Click to Share"><i class="fa fa-share-alt" data-action-type="share"></i></button>';
                } else {
                  templateCol += '<button type="button" class="btnaction"  data-action-type="share" title="Click to Un-Share"><i class="fa fa-ban" data-action-type="share"></i></button>';
                }
                templateCol += "</div>";
              }

              if (localAvgRating) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + _that.GenerateRowActionButton('showassets', 'Click to See Detailed Feedback', 'fa fa-list')
                  + "</div>";
              }
              if (localPlannedAssetDetails) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + _that.GenerateRowActionButton('showPlannedAsset', 'Click to see planned Asset details', 'fa fa-eye')
                  + "</div>";
              }

              if (localIsShowAssetDetails) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + _that.GenerateRowActionButton('showassetdetails', 'Click to See Asset Details', 'fa fa-eye')
                  + "</div>";
              }

              if (localIsShowFeedbackDetails) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                if (params.data.NumberOfReuse > 0) {
                  templateCol += _that.GenerateRowActionButton('showfeedbackdetails', params.data.NumberOfReuseText, 'fa fa-commenting');
                }
                templateCol += "</div>";
              }

              if (localisRelatAsset) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>";
                if (params.data['HasRelatedAsset'] == true) {
                  templateCol += '<button type="button" class="btnaction"  data-action-type="relatasset" title="Click to View Related Assets" data-toggle="modal" data-target="#RelateAssetModal"><i class="glyphicon glyphicon-list-alt"  data-action-type="relatasset"></i></button>';
                }
                templateCol += "</div>";
              }

              if (localIsShareAsset) {
                if (params.data['AssetAvailable'] == 1) {
                  templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                    + _that.GenerateRowActionButton('shareAsset', 'Click to Share Asset Download URL and Add Asset to Bookmark', 'fa fa-share')
                    + "</div>";
                }
              }

              if (localSave) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + _that.GenerateRowActionButton('save', 'Click to Save', 'fa fa-floppy-o')
                  + "</div>";
              }

              if (localSelectAsset) {
                let IsSelected = params.data.IsSelected;

                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>";
                if (IsSelected == 0) {
                  templateCol += '<input type="checkbox" class="btnaction checkbox-inline" style="margin: -3px 5px -1px;" title="Click to Select" data-action-type="selectAsset" />';
                } else {
                  templateCol += '<input type="checkbox" class="btnaction checkbox-inline" style="margin: -3px 5px -1px;"  title="Click to De-Select" data-action-type="selectAsset" checked="true" />';
                }
                templateCol += "</div>";
              }

              if (localTypeRadio) {

                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>";
                templateCol += '<input type="radio" name="radioGroup" data-action-type="radioButtonCheck" value="' + params.data.PortfolioId + '">';
                templateCol += "</div>";
              }

              if (localSelectBookmark) {
                if (params.data.IsExportSelected != null) {
                  let IsSelected = params.data.IsExportSelected;
                  templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>";
                  if (IsSelected == 0) {
                    templateCol += '<input type="checkbox" class="btnaction checkbox-inline" style="margin: -3px 5px -1px;" title="Check/Uncheck to Export" data-action-type="selectBookmark" />';
                  } else {
                    templateCol += '<input type="checkbox" class="btnaction checkbox-inline" style="margin: -3px 5px -1px;"  title="Check/Uncheck to Export" data-action-type="selectBookmark" checked="true" />';
                  }
                  templateCol += "</div>";

                }
                else {
                  let IsSelected = params.data.IsSelected;
                  templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>";
                  if (IsSelected == 0) {
                    templateCol += '<input type="checkbox" class="btnaction checkbox-inline" style="margin: -3px 5px -1px;" title="Click to Select" data-action-type="selectBookmark" />';
                  }
                  templateCol += "</div>";
                }
              }

              if (localSortOrder) {
                divStyleTemplateCol = "width:110px;background-color: white;";
                let actualRowIndex = 0;
                actualRowIndex = _that.getActualRowIndexForSortIcons(params);
                let returnString = '';
                if (actualRowIndex != 1) {
                  returnString = returnString + '<button type="button" class="btnaction"  data-action-type="sortAsc" title="Move Up" style="width:50px;height:15px;position:relative;bottom:2px;"><i class="fa fa-long-arrow-up" data-action-type="sortAsc" style="width:15px;height:15px"></i><span data-action-type="sortAsc">Up&nbsp;</span></button>';
                }
                if (actualRowIndex != (_that.rowData.length)) {
                  returnString = returnString + '<button type="button" class="btnaction"  data-action-type="sortDesc" title="Move Down" style="width:50px;height:15px;position:relative;bottom:2px;"><i class="fa fa-long-arrow-down" data-action-type="sortDesc" style="width:15px;height:15px"></i><span data-action-type="sortDesc">Down&nbsp;</span></button>';
                }
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + returnString
                  + "</div>";

              }

              if (localIsSubscribed) {
                //field: 'IsSubscribed',
                let IsSubscribed = params.data.IsSubscribed;

                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>";
                if (IsSubscribed == 1) {
                  templateCol += '<button type="button" class="btnaction"  data-action-type="Unsubscribe" title= "Click to Un-Subscribe" > <i class="fa fa-check-square" data-action-type="Unsubscribe" > </i></button> ';
                } else {
                  templateCol += '<button type="button" class="btnaction"  data-action-type="subscribe" title= "Click to Subscribe" > <i class="fa fa-square-o" data-action-type="subscribe" > </i></button> ';
                }
                templateCol += "</div>";
              }

              if (localSubscribeDownloadPract) {
                //field: 'SubscribeDownloadPract',
                let IsSubscribeDownloadPract = params.data.IsSubscribed;

                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>";

                if (IsSubscribeDownloadPract == true) {
                  templateCol += '<a data-action-type="subscribeDownloadAsset" title= "Click to Un-Subscribe"><i class="fa fa-bell-slash" data-action-type="subscribeDownloadAsset"></i></a> ';
                } else {
                  templateCol += '<a data-action-type="subscribeDownloadAsset" title= "Click to Subscribe"><i class="fa fa-bell" data-action-type="subscribeDownloadAsset"></i></a> ';
                }
                templateCol += "</div>";
              }

              if (localNotReusedIcon) {
                templateCol += "<div class='" + divClassTemplateCol + "' style='" + divStyleTemplateCol + "'>"
                  + '<button type="button" class="btnaction"  data-action-type="notReused" title= "If you have downloaded this asset only for inspection/informational purposes and not Re-Used it.Then click to submit as No reuse ever intended; downloaded for inspection/informational purposes">' +
                  '<i class="fa fa-window-close-o" data-action-type="notReused" style="color:#ff3333;"></i></button>'
                  //+ _that.GenerateRowActionButton('notReused', "If you have downloaded this asset only for inspection/informational purposes and not Re-Used it.Then click to submit as 'No reuse ever intended; downloaded for inspection/informational purposes'", 'fa fa-window-close-o')
                  + "</div>";
              }


              return templateCol;
            } else { }
          }
        }
      );

    }
    /** COMMON ACTION ICONS END **/


    return headers;
  }
  //data gets mapped to the corresponding "field" key of the headers
  getActualRowIndexForSortIcons(data) {
    let index = 0;
    let getUniqueKey = ""; // Containing Id
    let newData = data.data;
    var _that = this;
    for (var key in newData) {
      if ((key.toUpperCase().indexOf('ID')) && (key.toUpperCase().indexOf('ID')) !== -1) {
        getUniqueKey = key;
        break;
      }
    }
    for (var key in _that.rowData) {
      index++;
      if (_that.rowData[key][getUniqueKey] == data.data[getUniqueKey]) {
        break;
      }
    };
    return index;
  }

  private createRowData() {
    return this.rowData;
  }

  private GenerateRowActionButton(dataActionType, Title, IconCss, HasTourClass = false, TourClass = '') {
    if (HasTourClass)
      return '<span style="padding:5px;cursor:pointer;"><i title="' + Title + '" class="' + IconCss + '" data-action-type="' + dataActionType + '"></i></span>';
    else
      return '<span style="padding:5px;cursor:pointer;"><i title="' + Title + '" class="' + IconCss + '" data-action-type="' + dataActionType + '"></i></span>';
  }
  onRowClicked(e) {
    if (!e.event.target) return;
    let data = e.data;
    let actionType = e.event.target.getAttribute("data-action-type");
    let test: any = 1;
    switch (actionType) {
      case "edit":
        return this.EditRecord.emit(data);
      case "editMasterData":
        return this.EditMasterDataRecord.emit(data);
      case "editAssetGroupData":
        return this.AssetGroupEditGroupRecord.emit(data);
      case "editAssetAssociationData":
        return this.AssetGroupEditAssociationRecord.emit(data);
      case "audit":
        return this.AuditRecord.emit(data);
      case "delete":
        return this.DeleteRecord.emit(data);
      case "navigateto":
        return this.NavigateRecord.emit(data);
      case "share":
        return this.ShareRecord.emit(data);
      case "rating":
        return this.RatingRecord.emit(data);
      case "showassets":
        return this.AvgRatingRecord.emit(data);
      case "showassetdetails":
        return this.ShowAssetDetails.emit(data);
      case "shareAsset":
        return this.ShowCopyAssetLinkModal.emit(data);
      case "showfeedbackdetails":
        return this.ShowFeedbackDetails.emit(data);
      case "save":
        return this.SaveRecord.emit(data);
      case "subscribe":
      case "Unsubscribe":
        return this.SubscribeRecord.emit(data);
      case "ActivateDeActivateRecord":
        return this.ActivateDeActivateRecord.emit({ data: data, target: e.event.target });
      case "sortAsc":
        return this.SortAsc.emit(data);
      case "sortDesc":
        return this.SortDesc.emit(data);
      case "showfeedback":
        return this.ShowFeedback.emit(data);
      case "config":
        return this.ConfigureRecord.emit(data);
      case "addEBC":
        return this.AddEBC.emit(data);
      case "associateassets":
        return this.AssociateAssetsRecord.emit(data);
      case "showgroupassets":
        return this.ShowGroupAssetsRecord.emit(data);
      case "showassetgroups":
        return this.ShowAssetGroupsRecord.emit(data);
      case "selectAsset":
        return this.SelectAssetRecord.emit(data);
      case "selectBookmark":
        return this.SelectBookmarkRecord.emit(data);
      case "sendReleaseNote":
        return this.SendReleaseNoteRecord.emit(data);
      case "relatasset":
        return this.RelatAssetRecord.emit(data);
      case "relatchild":
        return this.RelatChildRecord.emit(data);
      case "removeAssociation":
        return this.RemoveAssociationRecord.emit(data);
      case "radioButtonCheck":
        return this.RadioButtonCheck.emit(data);
      case "deleteGroup":
        return this.DeleteGroupRecord.emit(data);
      case "subscribeDownloadAsset":
        return this.subscribeDownloadAssetRecord.emit(data);
      case "sendMailCFR":
        return this.EmitUserName.emit(data['CFREmail'] + ';' + data['Customer']);
      case "sendMailPFM":
        return this.EmitUserName.emit(data['PFMEmail'] + ';' + data['Customer']);
      case "sendMailCPM":
        return this.EmitUserName.emit(data['CPMEmail'] + ';' + data['Customer']);
      case "notReused":
        return this.NotReusedRecord.emit(data);
      case "generalEdit":
        return this.GeneralEditAction.emit(data);
      case "generalShare":
        return this.GeneralAddEditUsers.emit(data);
      case "generalDelete":
        return this.GeneralDeleteAction.emit(data);
      case "generalSetting":
        return this.GeneralSettingAction.emit(data);
      case "generalPlusAction":
        return this.GeneralPlusAction.emit(data);
      case "showPlannedAsset":
        return this.loadPlannedAssetData.emit(data);
      case "generalAssetBookmarkLink":
        return this.AssetBookmarkLink.emit(data);
      case "generalChangePracticener":
        return this.GeneralChangePracticenerAction.emit(data);
      case "ShowRiskAnalysis":
        return this.ShowPatRiskAnalysis.emit(data);
    }
  };

  onClearGridStateClick() {
    this.clearGridStateConfirm.open({
      title: 'Clear Grid State & Reset To Default',
      message: this.constantMessages.ALT_CLEAR_GRID_STATE
    });
    return;
  }
  populateGridData(rowData: any[]) {
    var _that = this;
    if (!this.myGridOptions.api) {
      console.log("this.myGridOptions.api undefined -> genericGrid populateGridData()");
      return;
    }
    setTimeout(() => {
      this.totalRows = this.rowData.length;
    }, 50);

    if (this.rowModelType != "serverSide") {
      this.test = this.rowData;
    }
  }
  SetUrlForserverSide(url, method, MoreRecords) {
    this.serversideURL = url;
    this.APIMethodType = method;
    this.HasMoreRecords = MoreRecords;
    if (MoreRecords == "True") {
      this.rowModelType = "serverSide";
      this.myGridOptions.cacheBlockSize = this.batchSize - 1;
      this.myGridOptions.defaultColDef.filter = true;
      this.myGridOptions.defaultColDef.sortable = true;
    }
    else this.rowModelType = "clientSide";
    this.myGridOptions.rowModelType = this.rowModelType;
  }
  ReloadBaseData(data) {
    this.tempData = data;
  }

  getContextMenuItemsHome(params) {
    console.log("getContextMenuItemsHome params", params);

    let contextMenuItems;

    if (_thatGenericGrid.gridCase == "homeGrid") {
      let customMenuItems = [
        {
          name: "Export",
          subMenu: [
            {
              name: "Excel Export",
              tooltip: "Excel Export",
              action: function () {
                let paramsData = {
                  case: "homeGrid",
                  exportCase: "excel",
                  useCellCallback: true
                };
                _thatGenericGrid.exportDataAsExcel(paramsData);
              },
            },
            {
              name: "CSV Export",
              tooltip: "CSV Export",
              action: function () {
                let paramsData = {
                  case: "homeGrid",
                  exportCase: "csv",
                  useCellCallback: true
                };
                _thatGenericGrid.exportDataAsExcel(paramsData);
              },
            },
          ]
        },
      ];
      let originalMenuItems = [];
      for (let key in params.defaultItems) {
        if (params.defaultItems[key] != "export") {
          originalMenuItems[key] = params.defaultItems[key];
        }
      }
      contextMenuItems = $.merge(originalMenuItems, customMenuItems);
    } else {
      contextMenuItems = params.defaultItems;
    }

    return contextMenuItems;

  }

  exportDataAsExcel(paramsData) {
    let columnsChanged = false;
    let columnsBefore, columnsNow;
    let excelParams: any = {
    };

    if (paramsData.case && paramsData.case == "homeGrid") {

      excelParams.sheetName = "searchResult";
      //To incude extra column
      columnsChanged = true;
      let allColumns = this.gridApi.columnController.allDisplayedColumns;
      columnsBefore = [];
      allColumns.forEach((element: any) => {
        if (element.colDef.headerName != "Group" && element.colDef.colId != "ag-Grid-AutoColumn") {
          columnsBefore.push(element.colDef);
        }
      });
      columnsNow = Array.from(columnsBefore);
      columnsNow.push({
        headerName: 'URL',
        field: 'PortfolioId',
        cellClass: 'btn-link',
        width: 100
      });
      this.myGridOptions.api.setColumnDefs(columnsNow);
      //To change header name
      excelParams.processHeaderCallback = function (params) {
        let headerName = params.column.colDef.headerName;
        if (headerName == "ACTION ICONS") {
          return "Options";
        } else {
          return headerName;
        }
      }

    }

    if (paramsData.useCellCallback) {

      excelParams.processCellCallback = function (params) {
        //homeGrid
        if (paramsData.case && paramsData.case == "homeGrid") {
          if (params.column && params.column.colDef.headerName == "Options") {                //"ACTION ICONS"
            if (params.value) {
              return "TRUE";
            } else {
              return "FALSE";
            }
          } else
            if (params.column && params.column.colDef.headerName == "URL") {                //"URL"
              let appURL: any = window.location.protocol + '//' + window.location.host + '/';
              let assetURL = appURL + _thatGenericGrid.constantAssetUrlDownload + params.value;
              return assetURL;
            } else {                                                                                                                                // Other Columns of HomeGrid
              return params.value;
            }
        }
        //other grids
        else if (params.value) {
          return params.value;
        } else return "NA";
      };
    }
    if (this.gridApi) {
      if (paramsData.exportCase == "excel") {
        this.gridApi.exportDataAsExcel(excelParams);
      } else if (paramsData.exportCase == "csv") {
        this.gridApi.exportDataAsCsv(excelParams);
      }
    } else {
      console.log("this.gridApi undefined");
    }

    if (columnsChanged) {
      this.myGridOptions.api.setColumnDefs(columnsBefore);
    }
  }

  handleDetailGridCellClass(params) {
    if (this.childData != null && this.childData != undefined) {
      if (params.rowIndex + 1 < this.childData.length) {
        if ((this.childOptions.DataDiffColumns.indexOf(params.colDef.field) >= 0) && (params.data[this.childOptions.DataUniqueColumn] == this.childData[params.rowIndex + 1][this.childOptions.DataUniqueColumn]))
          return ((params.value == this.childData[params.rowIndex + 1][params.colDef.field]) ? null : 'bgColorYellow');
        else return null;
      }
      else
        return null;
    } else return null;
  }

  HasAccessGenericGrid(element) {
    return this.globalData.HasPermission(element);
  }
  DisableGroupPanel() {
    this.sideBar = '';
    this.myGridOptions.rowGroupPanelShow = 'never';
  }

  SearchGrid(data) {
    if (data != undefined && data != null)
      this.quickFilterText = data;
    this.gridApi.setQuickFilter(this.quickFilterText);
  }

  ClearGrid() {
    this.gridApi.setColumnDefs(null);
  }
}

function dateComparator(date1, date2) {
  var date1Number = monthToComparableNumber(date1);
  var date2Number = monthToComparableNumber(date2);
  if (date1Number === null && date2Number === null) {
    return 0;
  }
  if (date1Number === null) {
    return -1;
  }
  if (date2Number === null) {
    return 1;
  }
  return date1Number - date2Number;
}

function monthToComparableNumber(date) {
  if (date === undefined || date === null || date.length !== 11) {
    return null;
  }
  var dates = date.split("/");
  var yearNumber = dates[2];
  var dayNumber = dates[0];
  var monthNumber = month_names[dates[1].toLowerCase()];
  var result = yearNumber * 10000 + monthNumber * 100 + dayNumber;
  return result;
}

var month_names = {
  "jan": 1, "feb": 2, "mar": 3,
  "apr": 4, "may": 5, "jun": 6,
  "jul": 7, "aug": 8, "sep": 9,
  "oct": 10, "nov": 11, "dec": 12
};


