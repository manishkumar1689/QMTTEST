export const CustomerGridData = {

    CUSTOMER: [{
        Options: [{
          EditAction: "false",
          DeleteAction: "true",
          SettingAction:"true",
          GridHeight: "430",
          Activate: false,
            SortOrder: "true",
            AllowCSVExport: "false",
            AllowExcelExport: "true",
        }],
        Columns: [
          { 'Project Name,projectName,,': '' },
          { 'User Signum,userSignum,': '' },
          { 'Module,module,,': '' },
          { 'Onboarding Data/Time,onBoardingDate,': '' },
          { 'Polling Status,pollingStatus,,': '' },
          { 'Polling Interval(Minutes),pollingInterval,': '' },
          { 'Last Data Retrieval Time,lastDataRetrievalTime,,': '' },
          { 'Next Data Retrieval Time,nextDataRetrievalTime,': '' }
        ]

    }],
}

export const CustomerConstantsData = {
    CUSTOMER_PAGE: {
        GridIdentifier:"agGrid",

        DeActivateCustomerTitle:"De-Activate Customer",
        DeActivateCustomerMessage:"Are you sure want to de-activate this Customer?",
        ActivateCustomerTitle:"Activate Customer",
        ActivateCustomerMessage:"Are you sure want to activate this Customer?",

        INF_RCD_DUPL: "Record with same name already exist",
        SUC_REC_INS: "Record inserted successfully!",
        SUC_REC_UPD: "Record updated successfully!",
        TooltipCustomerName : "User can add new customer here. Maximum 500 characters are allowed.",
        TooltipAdd : "Click here to add",
        TooltipSave : "Click here to save",
        TooltipClose : "Click here to cancel",
        TooltipAcdea : "Click here to Activate/Deactivate",
        CustomerActivateMessage:"Customer activated successfully",
        CustomerDeActivateMessage:"Customer de-activated successfully",
    },
}
