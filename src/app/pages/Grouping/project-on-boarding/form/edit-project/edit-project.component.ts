import { Component, OnInit } from '@angular/core';
import { Wizard } from '@eds/vanilla';

@Component({
  selector: 'app-form',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  countries: any;
  modules: any;
  marketAreas: any;
  domains: any;
  products: any;
  instanceTypes: any;
  groupIds: any;
  standardJobNames: any;
  dashboards: any;
  dropdownCountrySettings = {};
  dropdownModuleSettings = {};
  dropdownMarketAreaSettings = {};
  dropdownDomainSettings = {};
  dropdownProductSettings = {};
  dropdownInstanceTypeSettings = {};
  dropdownGroupIdSettings = {};
  dropdownStandardJobNameSettings = {};
  dropdownDashboardSettings = {};
  constructor() { }

  ngOnInit(): void {
    const wizards = document.querySelectorAll('.wizard');
    this.countries = [{
      "idCountry": 1,
      "countryName": "Cuba",

    },
    {
      "idCountry": 2,
      "countryName": "Argentina",

    }, {
      "idCountry": 3,
      "countryName": "Cuba",

    },
    {
      "idCountry": 4,
      "countryName": "China",

    }, {
      "idCountry": 5,
      "countryName": "Denmark",

    },
    {
      "idCountry": 6,
      "countryName": "Dominican Republic",

    }, {
      "idCountry": 11,
      "countryName": "America Samoa",

    },
    {
      "idCountry": 12,
      "countryName": "Australia",

    }, {
      "idCountry": 13,
      "countryName": "Chile",

    },
    {
      "idCountry": 14,
      "countryName": "Switzerland",

    }, {
      "idCountry": 15,
      "countryName": "Costa Rica",

    },
    {
      "idCountry": 16,
      "countryName": "India",

    }];
    this.modules = [{
      "idModule": 1453,
      "moduleName": "DevOps",

    },
    {
      "idModule": 1454,
      "moduleName": "Notify",

    },
    {
      "idModule": 1455,
      "moduleName": "SAP",

    },
    {
      "idModule": 1456,
      "moduleName": "SonarQube",

    },
    {
      "idModule": 1457,
      "moduleName": "Testing",

    }];
    this.marketAreas = [{
      "idMarketArea": 1453,
      "marketAreaName": "DEMO_KT",

    },
    {
      "idMarketArea": 1454,
      "marketAreaName": "DEMO_KT1",

    }];
    this.domains = [{
      "idDomain": 1453,
      "domainName": "DEMO_KT",

    },
    {
      "idDomain": 1454,
      "domainName": "DEMO_KT1",

    }];
    this.products = [{
      "idProduct": 1453,
      "productName": "DEMO_KT",

    },
    {
      "idProduct": 1454,
      "productName": "DEMO_KT1",

    }];
    this.instanceTypes = [{
      "idInstanceType": 1453,
      "instanceTypeName": "DEMO_KT",

    },
    {
      "idInstanceType": 1454,
      "instanceTypeName": "DEMO_KT1",

    }];
    this.groupIds = [{
      "idGroup": 1453,
      "groupName": "DEMO_KT",

    },
    {
      "idGroup": 1454,
      "groupName": "DEMO_KT1",

    }];
    this.standardJobNames = [{
      "idStandardJobName": 1453,
      "standardJobName": "DEMO_KT",

    },
    {
      "idStandardJobName": 1454,
      "standardJobName": "DEMO_KT1",

    }];
    this.dashboards = [{
      "idDashboard": 1453,
      "dashboardName": "DEMO_KT",

    },
    {
      "idDashboard": 1454,
      "dashboardName": "DEMO_KT1",

    }];
    this.dropdownCountrySettings = {
      singleSelection: true,
      idField: 'idCountry',
      textField: 'countryName',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };

    this.dropdownModuleSettings = {
      singleSelection: true,
      idField: 'idModule',
      textField: 'moduleName',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };

    this.dropdownMarketAreaSettings = {
      singleSelection: true,
      idField: 'idMarketArea',
      textField: 'marketAreaName',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };
    this.dropdownDomainSettings = {
      singleSelection: true,
      idField: 'idDomain',
      textField: 'domain',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };

    this.dropdownProductSettings = {
      singleSelection: true,
      idField: 'idProduct',
      textField: 'productName',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };

    this.dropdownInstanceTypeSettings = {
      singleSelection: true,
      idField: 'idInstanceType',
      textField: 'instanceTypeName',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };

    this.dropdownGroupIdSettings = {
      singleSelection: true,
      idField: 'idGroup',
      textField: 'groupName',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };

    this.dropdownStandardJobNameSettings = {
      singleSelection: true,
      idField: 'idStandardJobName',
      textField: 'standardJobName',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };

    this.dropdownDashboardSettings = {
      singleSelection: true,
      idField: 'idDashboard',
      textField: 'dashboardName',
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };
    if (wizards) {
      setTimeout(() => {
        Array.from(wizards).forEach((wizardDOM) => {
          const wizard = new Wizard(<HTMLElement>wizardDOM);
          wizard.init();
        });
      }, 1000);
    }
  }

}
