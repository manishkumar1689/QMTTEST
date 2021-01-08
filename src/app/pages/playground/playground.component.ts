import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html'
})

export class PlaygroundComponent implements OnInit {

  htmlCode: string;
  cssCode: string;

  smallDialogOpened = false;
  fullscreenDialogOpened = false;
  warningDialogOpened = false;

  gauge0;
  gauge1;
  gauge2;
  gauge3;
  gauge4;
  gauge5;
  gauge6;

  radioModel;
  radioModel1;

  dropdownRadioExample = 'Select Product';

  dummyTableColumns;
  dummyTableData;

  switchDemo = false;
  switchDemo1 = false;
  switchDemo2 = true;

  checkboxDemo = true;
  checkboxDemo1 = false;
  checkboxDemo2 = true;
  checkboxDemo3 = false;
  checkboxDemo4 = false;
  checkboxDemo5 = false;

  treeCheckbox = true;
  treeCheckbox1 = true;
  treeCheckbox2 = true;
  treeCheckbox3 = true;
  treeCheckbox4 = true;
  treeCheckbox5 = true;

  dropdownMulti1 = false;
  dropdownMulti2 = false;

  constructor() {
    this.initSyntaxHighlight();
    this.initGauges();
    this.initTables();
  }

  ngOnInit() {
  }

  toggleSmallDialog(e) {
    this.smallDialogOpened = (e && e.isOpened) || !this.smallDialogOpened;
  }

  toggleFullscreenDialog(e) {
    this.fullscreenDialogOpened = (e && e.isOpened) || !this.fullscreenDialogOpened;
  }

  toggleWarningDialog(e) {
    this.warningDialogOpened = (e && e.isOpened) || !this.warningDialogOpened;
  }

  initSyntaxHighlight() {
    this.htmlCode = `
        <div class="my-test">
          <h1 class="test">Demo</h1>
          <p>This is a demo example.</p>
        </div>
      `;

    this.cssCode = `
        .my-class {
          padding: 10px;
          margin: 20px;
        }
      `;
  }

  initGauges() {
    this.gauge0 = {
      value: 70,
      min: 0,
      max: 100,
      units: 'unit'
    };

    this.gauge1 = {
      value: 0.32,
      decimals: 2,
      min: 0,
      max: 1,
      units: 'unit'
    };

    this.gauge2 = {
      value: 67,
      min: 0,
      max: 100,
      units: '%',
      limits: [
        { from: 60, to: 75, color: 'orange', label: 'Warning' },
        { from: 75, to: 100, color: 'red', label: 'Critical' }
      ]
    };

    this.gauge3 = {
      value: 7,
      min: 0,
      max: 20,
      units: 'TB',
      limits: [
        {
          from: 0,
          to: 8,
          color: 'gray',
          label: 'Your storage quota 10 TB'
        },
        {
          from: 8,
          to: 10,
          color: 'red',
          label: 'Reaching critical quota'
        },
        {
          from: 10,
          to: 20,
          color: 'unknown',
          label: 'Next upgrade'
        }
      ]
    };

    this.gauge4 = {
      value: -83,
      min: -100,
      max: 10,
      units: 'dBm',
      limits: [
        { from: -100, to: -80, color: 'red', label: 'Very Low power signal' },
        { from: -80, to: -10, color: 'transparent', label: 'Healthy power signal' },
        { from: -10, to: 10, color: 'red', label: 'Very high power signal' }
      ]
    };

    this.gauge5 = { value: 40, min: 0, max: 100, units: 'unit', size: 'small' };
    this.gauge6 = { value: 40, min: 0, max: 100, units: 'unit', size: 'large' };
  }

  randomGaugeValue(i) {
    const gauge = this['gauge' + i];
    this['gauge' + i] = {
      ...gauge,
      value: (Math.random() * (gauge.max - gauge.min) + gauge.min).toFixed(gauge.decimals || 0)
    };
  }

  initTables() {
    this.dummyTableColumns =
      [
        {
          id: 1,
          content: 'Title 1'
        },
        {
          id: 2,
          content: 'Title 2'
        },
        {
          id: 3,
          content: 'Title 3'
        },
        {
          id: 4,
          content: 'Title 4'
        }
      ];

    this.dummyTableData =
      [
        [
          {
            id: 1,
            content: 'Item 1'
          },
          {
            id: 2,
            content: 'Details 1'
          },
          {
            id: 3,
            content: 'Details 1'
          },
          {
            id: 4,
            content: 'Details 1'
          }
        ],
        [
          {
            id: 1,
            content: 'Item 2'
          },
          {
            id: 2,
            content: 'Details 2'
          },
          {
            id: 3,
            content: 'Details 2'
          },
          {
            id: 4,
            content: 'Details 2'
          }
        ],
        [
          {
            id: 1,
            content: 'Item 3'
          },
          {
            id: 2,
            content: 'Details 3'
          },
          {
            id: 3,
            content: 'Details 3'
          },
          {
            id: 4,
            content: 'Details 3'
          }
        ],
        [
          {
            id: 1,
            content: 'Item 4'
          },
          {
            id: 2,
            content: 'Details 4'
          },
          {
            id: 3,
            content: 'Details 4'
          },
          {
            id: 4,
            content: 'Details 4'
          }
        ],
        [
          {
            id: 1,
            content: 'Item 5'
          },
          {
            id: 2,
            content: 'Details 5'
          },
          {
            id: 3,
            content: 'Details 5'
          },
          {
            id: 4,
            content: 'Details 5'
          }
        ],
        [
          {
            id: 1,
            content: 'Item 6'
          },
          {
            id: 2,
            content: 'Details 6'
          },
          {
            id: 3,
            content: 'Details 6'
          },
          {
            id: 4,
            content: 'Details 6'
          }
        ]
      ]
      ;
  }

  fireNotification() {
    //const notification = new Notification({
    //  title: 'Notification title',
    //  description: 'Smaller notification message',
    //  timeout: 5000, // 5 seconds
    //  action: () => { console.log('Clicked on dynamic notification example'); }
    //});

    //notification.init();
  }
}
