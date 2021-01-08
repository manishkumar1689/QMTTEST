export const Constants = {

    /* For ToolTip Text */
    TOOLTIP: {
        /* Edit Asset Page */
        EDIT_ASSET_PAGE: {
            ASSET_GUIDELINE_LINK: "Click to view guidelines for below asset parameters in the form.",
            ASSET_NAME: "Provide a meaningful name for the asset. It is recommended that the name is as explanatory as possible. For some communities that exist a taxonomy for asset names.",
            ASSET_AVLBL: "If the asset is currently available, then select this checkbox. If it is a planned asset, then uncheck the checkbox.",
            ASSET_AVAILABLE_ON: "If the asset is not available, then provide the planned date of publication.",
            ASSET_URL: "Provide the valid URL path for the asset.<br/><br/>",
            FRAMEWORK: "All Assets in Navigator365 are associated with contexts.A context is the association between the Asset and Ericsson's approved Processes, methodologies, or Instructions. Contexts are Product, 'Framework', Role, Knowledge Area (KA) or Engagement Phase.<br/><br/>Framework is a process or method that governs a customer engagement/project. Select the Framework for customer engagement/project.",
            ROLE: "All Assets in Navigator365 are associated with contexts.A context is the association between the Asset and Ericsson's approved Processes, methodologies, or Instructions. Contexts are Product, Framework, 'Role', Knowledge Area (KA) or Engagement Phase.<br/><br/>Role is the professional role associated with the first activity in the customer engagement / project where the Asset is created or used, in the selected Framework.",
            KNOWLEDGE_AREA: "All Assets in Navigator365 are associated with contexts.A context is the association between the Asset and Ericsson's approved Processes, methodologies, or Instructions. Contexts are Product, Framework, Role, 'Knowledge Area(KA)' or Engagement Phase.<br/><br/>KA is applicable only to certain Frameworks.KA is the sub-process associated with the first activity in the customer engagement / project where the Asset is created or used, in the selected Framework.",
            PRODUCT: "All Assets in Navigator365 are associated with contexts.A context is the association between the Asset and Ericsson's approved Processes, methodologies, or Instructions. Contexts are 'Product', Framework, Role, Knowledge Area (KA) or Engagement Phase.<br/><br/>Product is the product in Ericsson's portfolio to which the Asset belongs to / is associated with.",
            ENGAGEMENT_PHASE_GROUP: "Map this asset to an Engagement Phase Group. 'NA- Not Available' and 'Void' are also the available options.<br/><br/>List of values is as per the configuration done by the Librarian through Master Data -> Master Data Management. On selecting the value the list of values for remaining context parameters shall be updated as per the configurations done by Librarian through Master Data-> Context Mapping.<br/><br/>",
            ENGAGEMENT_PHASE: "All Assets in Navigator365 are associated with contexts. A context is the association between the Asset and Ericsson's approved Processes, methodologies, or Instructions. Contexts are Product, Framework, Role, Knowledge Area (KA) or 'Engagement Phase'.<br/><br/>>In the selected Framework, the Engagement Phase is the stage of the customer engagement / project associated with the first activity where the Asset is created or used.",
            LANGUAGE: "Select the Language. Language is the standard Ericsson code for languages. Default is Universal English (Uen)",
            ASSET_OWNER_SIGNUM: "This is the Ericsson signum of the individual that is the designated Asset Owner (subject matter expert for the Asset). The field is predictive which means that suggestions will be shown once typing begins.",
            ASSET_APPROVER_SIGNUM: "This is the Ericsson signum of the individual that is the designated Asset Approver (the individual that approves the asset for use in a customer engagement). The field is predictive which means that suggestions will be shown once typing begins.",
            CLASSIFICATION: "The assets classification according to Ericsson's ABC/Decimal classification system.",
            SOURCE: "The source is an organizational unit that provided the asset for re-use. The field is used for statistical puposes.",
            SAVING_METHOD: "Selection of Saving Method decides the algorithm to calculate the savings achieved through the reuse of the asset. Different saving methods are selected depending on the characteristic of the asset:\n-M0 - No saving calculation\n-M1 - Pre-defined saving per use\nPDU assets like standard descriptions, Guidelines that does not require any effort to finalize in the customer project.\n-M2 - Pre-defined saving adjusted with effort involved\nStandard Assets like HLD, LLD that may require some effort to finalize in the customer project.\n-M3 - Pre-defined saving adjusted by % of reuse\nVariable Asset like Test Plan or Sales PPT where it is likely that the asset is applicable to a certain degree.\n-M4 - Pre-defined saving adjusted by % of reuse with effort involved\nUtilities e.g.estimator, configuration scripts that may require some effort to finalize in the customer engagement/project and the asset is applicable to a certain degree.\n-M5 – Saving on Productivity Tools\nSaving on particularly complex assets like Automation Assets and Productivity Tools.This saving method is a superset of M4 saving methods and is used when it is hard to predict the saving based on 'Asset Business Case' and the estimation can be reinforced by creating an 'Engagement Business Case' or through the practitioner feedback on 'Expected time to produce without reusable asset'",
            ASSETBUILDTIME: "Provide actual effort to develop/harvest this asset<br/><br/>",
            ASSETSACTUALTIMETOMAINTAIN: "Provide actual effort spent till date to maintain this asset<br/><br/>",
            ASSETDESCRIPTION: "It is recommended that the description is written in such a way that it is clear to a practitioner, not already familiar with the asset, what the main features of the asset are.",
            OWNERL2: "Provide the asset Owner L2 information<br/><br/>",
            SearchRanking: "Provide the search ranking information.<br/>Result-set on home page will be sorted in ascending order of Search Ranking. By default, 0 rank is displayed first.",
            ASSET_MOTIVATION: "Provide the asset Motivation information<br/>Navigator365 will prompt practitioner to provide an Opportunity & Reuse Case for downloaded assets for which Motivation is true.<br/><br/>",
            ASSETTAGS: "Provide the Tags separated by spaces. Tags are used to facilitate free text search along with the context parameter filters.",


            SAVE_AND_CLOSE: "Click to Save And Close",
            SAVE_AND_ADD_SIMILAR_ASSET: "Click to Save And Add Similar Asset",
            SAVE_AND_ADD_REUSE_CASE: "Click to Save And Add Reuse Case",
            RESUBMIT: "Click to Re-Submit",
            SEND_TO_APPROVAL: "Click to Send to Approval",
            APPROVE: "Click to Approve",
            REJECT: "Click to Reject",
            REWORK: "Click to Rework",
            RETIRE: "Click to Retire",
            RESET: "Click to Reset",
            CANCEL: "Click to Cancel"
        },

        MANAGE_BENEFITS_PAGE: {
            ADD_BTN: "Click to Add",
            SAVE_BTN: "Click to Save",
            CANCEL_BTN: "Click to Cancel",
        },

        ASSET_BUSIESSCASE_PAGE: {
            BUSINESS_CASE_PERIOD: 'Provide the time-period in months to calculate the return of investment on this asset. Default is 12 months. The start month is set to the month when the asset is approved for re-use.',
            EXP_TIME_DEV: "For existing assets, this field will be pre-populated with value provided for 'Actual Effort to Develop/Harvest(mhrs)' field.<br/><br/>For non-existing/planned assets provide estimated effort to Develop/Harvest.",
            EXP_TIME_MAINTAIN: 'Provide expected effort to maintain the asset.',
            EXP_NO_REUSECASE: 'This field is an auto-calculated.\nIt is the product of expected number of re-uses multiplied by the expected number of iterations in a customer engagement/project\n[Expected Number of Engagements/Projects to Re-use the Asset] * [Expected Number of Iterations Per Engagement/Project]',
            EXP_TIME_WITHOUT_REUSECASE: 'Provide expected effort to produce the desired output in a customer engagement/project by either creating a similar asset from scratch or by manually completing the task for one iteration.',
            EXP_TIME_WITH_REUSEABLE_ASSET: 'Provide expected effort to produce the desired output per iteration with this reusable asset in a customer engagement/project.',
            EXP_LIFECYCLE_SAVING: 'This field is an auto-calculated.\nIt sums up the expected unadjusted(i.e.gross) saving for the asset.\n[(Expected Effort To Produce Per Iteration Without Reusable Asset(mhrs) - Expected Effort To Produce Per Iteration With Reusable Asset(mhrs)) * Expected Number Of Reuses]',
            SAVING_PER_REUSECASE: 'This field is an auto-calculated.\nIt is the expected unadjusted(i.e.gross) saving per re-use in a customer engagement/project.\n[Expected Effort To Produce Per Iteration Without Reusable Asset(mhrs) - Expected Effort To Produce Per Iteration With Reusable Asset(mhrs)]',
            RETURN_ON_INVESTMENT: 'This field is auto-calculated.\n[Expected Lifecycle Saving(mhrs) - (Expected Effort to Develop/Harvest(mhrs) + Expected Effort To Maintain(mhrs))] /(Expected Effort to Develop/Harvest(mhrs) + Expected Effort To Maintain(mhrs))',
            ASSETBUILDTIME: "Provide actual effort to develop/harvest this asset. For Assets developed from scratch provide the total effort for the development. For harvested assets (assets proposed to be approved asset) provide the actual effort to make it an effective re-usable asset.",
            ASSETSACTUALTIMETOMAINTAIN: "Provide actual total effort spent to-date to maintain this asset.",
            EXP_TIME_WITH_REUSEABLE_ASSET_ITERATION: "Provide expected number of iterations per customer engagement/project. It is defined for assets such as 'Productivity tools' where an asset may be used in multiple iterations.",
            EXP_SAVING_PER_REUSECASE: "This field is an auto-calculated.\nIt is the expected unadjusted saving(i.e.gross) expressed in percentage per re-use in a customer engagement/project\n[(Saving Per Reuse(mhrs)) / (Expected Effort To Produce Per Iteration Without Reusable Asset(mhrs))]* 100",
            EXP_NUMBER_WITH_REUSEABLE_ASSET: 'Expected Number of customer engagement/projects that might re-use the asset.',
        },

        PLAYBOOK_SEARCH_PAGE: {
            FRAMEWORK: 'Select the framework or methodology that is to be followed in your project.' +
                'Only one value can be selected.</br></br>All applicable values configured by the Librarian are listed here.' +
                'Any needed but missing framework can be reported through "My Support".</br></br>',
            ROLE: "Select your role. Only one value can be selected.</br></br>" +
                "All applicable values configured by the Librarian are listed here. Any needed but missing" +
                ' role can be reported through "My Support".</br></br>',
            KNOWLEDGE_AREA: "Select the knowledge area that is applicable in your project. Only one value can be selected.</br>" +
                "</br>All applicable values configured by the Librarian are listed here. Any needed but missing" +
                ' knowledge area can be reported through "My Support".</br></br>',
            SEARCHTEXT: "Type any string for text search, the text will be searched against the asset name, " +
                " description, tags and asset content as well as context based search is possible.</br></br>" +
                "If search is performed with context parameter and free text both then only those assets are displayed in result-set which would match both the criteria." +
                " Content-based search is limited to assets registered in Eridoc, SharePoint & GASK only.</br></br>" +
                "Navigator365 support indexing and content-based search for folders which will be recursively traversed.</br></br>",
            PRODUCT: "Select the product(s) you will be working on. Products are displayed as per Ericsson Product Catalogue. " +
                "Multiple products can be selected. Click Next to see how to select a product. " +
                "</br></br>" + "All applicable values configured by the Librarian are listed here. Any needed but " +
                'missing product can be reported through "My Support".</br></br>',
            EXPAND_ALL: "Click to expand/collapse all nodes of the product hierarchy. This is a toggle switch control. </br></br>",
            SELECT_ALL: "Click to select/deselect all products and sub products. This is a toggle switch control. </br></br>",
            TEMPLATES: "Click to search assets mapped to Methodology, Process or Framework only. This is a toggle switch control. </br></br>",
            ENGAGEMENT_PHASE: "Select the engagement phase for which you want to find assets. Only one value can be selected." +
                " Click on the engagement phase to select. Click again to deselect. " +
                "All applicable values configured by the Librarian are listed here. Any needed but " +
                'missing engagement phase can be reported through "My Support".</br></br>',
            RESET_BUTTON: "Click to reset the search criteria to defaults.</br></br>",
            SEARCH_BUTTON: "Click to search the assets for given search criteria. At least 1 out of 5 context" +
                " parameters or a value in text search field need to be provided before performing search.</br></br>",
            SAVE_BUTTON: "If you prefer to reuse the provided search criteria in future also," +
                ' you may click "Save button" to store this search for future use.</br>' +
                "</br>" +
                "Practitioner is asked to provide a name for the search. Practitioner can also choose" +
                " to subscribe to the newly created search. If subscribed, Navigator365 will notify" +
                " the practitioner when there are new assets available for the subscriber search.</br></br>",
            EXPORT_BUTTON: "Click to export the result-set.</br>",
            REPORT_MISSING_ASSET_BUTTON: "Click to explicitly report a missing asset to N365 Librarian " +
                "if you expected it for the context parameters selections but didn’t find it. " +
                "Review of filter selections is recommended before performing this action.",
            Bookmark: "Select Bookmark. Only one value can be selected.</br></br>" +
                "All applicable values configured by the Librarian are listed here. Any needed but missing" +
                ' bookmark can be reported through "My Support".</br></br>',
            //ADVANCED_SEARCH: 'Practitioner is now able to perform advanced search with multiple Keywords. Type any string for text search.The text will be searched against the asset names, ' +
            //    ' description, tags as well as context based search is possible.</br></br>' +
            //    'If search is performed with context parameter and free text both then only those assets are displayed in result-set which would match both the criteria.</br></br>' +
            //    'Navigator365 support indexing and content-based search for folders which will be recursively traversed in Eridoc, SharePoint, Artifactory & GASK.</br> Navigator365 support searching with following capability</br></br>' +
            //    '- Exact Phrase Search(Provide keywords in double quotes “”)</br>' +
            //    '- All the Words(AND Criteria)</br>' +
            //    '- Any of these Words(OR Criteria)</br>' +
            //    '- None of these Words(- Criteria)</br>' +
            //    '- Wildcard(*)</br>' +
            //    '- Search excluding or including content</br>',
        },

        /*Asset Feedback Dialog Page */
        ASSET_FEEDBACK_DIALOG_PAGE: {
            ASSET_NAME: "Asset Name",
            YES_RADIO: "Select if you reused the downloaded asset",
            NO_RADIO: "Select if you did not reuse the downloaded asset",
            TOO_RADIO: "Select to defer feedback by 15 days, 1 Month and 3 Months",
            ASSET_USAGE: "Select asset reuse method",
            ASSET_USEFULL: "Please rate Usefulness (Scope Coverage, Ability for Extension and Adaptation)",
            QUALITY_CONTENT: "Please rate Asset Quality (Accuracy, Clarity, Consistency)",
            ADDITIONAL_COMMENT: "Input Additional Comments",
            NETWORK_ID: "Input Network ID",
            CRM_ID: "Input Opportunity",
            CONTRACT_ID: "Input Contract ID",
            PERCEIVEDSAVINGS: "Input Perceived Savings",
            HOURSSPENTTOCOMPLETE: "The actual effort needed to finalize or reuse the asset in the customer engagement / project for last iteration.E.g.if feedback is provided for the first time, input the effort for first iteration.If feedback is updated fifth time, input the effort for fifth iteration.\n\nWhere applicable, the effort should include activities such as finalization, configuration, and/or execution.",
            EXPECTEDHOURSTOPRODUCE: "Provide expected effort to produce the desired output in this customer engagement/project by either creating a similar asset from scratch or by manually completing the task for one iteration.",
            PERCENTAGEREUSE: "If an asset is partially used, please provide the percentage of asset reuse in the customer engagement/project for last iteration. E.g. if feedback is provided for the first time, input the percentage of asset reuse for first iteration. If feedback is updated fifth time, input the percentage of asset reuse for fifth iteration.",
            NOTES_COMMENT: "Please Enter a Comment",
            SELECT_Opp_ID: "Provide the opportunity for which this asset has been reused. Opportunity data is retrieved from Salesforce on periodic basis. Click on binocular icon to search & select.",
            SELECT_EBC_ID: "Provide the engagement for which this asset has been reused. Click on binocular icon to search & select.",
            SELECT_CPAP_ID: "Provide the CPAP for which this asset has been reused. CPAP data is retrieved from Global Chronos on periodic basis. Click on binocular icon to search & select.",
            SELECT_FAS_ID: "Provide the FAS for which this asset has been reused. FAS data is retrieved from Global Chronos on periodic basis. Click on binocular icon to search & select.",
            PMBO_SIGNUM: "Provide the Project Manager / Business Owner signum.\n\nIf Project Manager/Business Owner is provided, then feedback will be send to PM/BO for savings validation.Type PM/BO signum to filter the list and select. Users who have 'Business Owner' role are shown in the list. If you don't find your PM/BO in the list and validation of the feedback is required by your organization, please ask your PM/BO to request 'Business Owner' role in Navigator365.",
            MARKET_AREA: "Provide the market area for this feedback",
            REUSE_COUNT: "Provide the number of times asset is reused in this customer engagement/project. This value is incremented over multiple feedbacks post one or more occurrences of reuse. E.g. If feedback is updated post each reuse, then the value is incremented by 1. If the feedback is updated post 5 reuses, then value is incremented by 5.",
            EXPECTEDPERCENTAGE: "This is an auto - calculated field.\nIt is the expected unadjusted saving(i.e.gross) expressed in percentage per re-use in the customer engagement/project.",
            REPORTEDPERCENTAGE: "This is an auto-calculated field.\nIt is the reported unadjusted saving(i.e.gross) expressed in percentage per re-use in the customer engagement/project.This is an auto calculated field based on the inputs provide by the practitioner."
            ,
        },

        /*Tool tip for Asset Group */
        BULK_EXPORT_UPLOAD: {
            TOOL_EXPORT_REL: "Click to Export",
            TOOL_UPLOAD_REL: "Click to Import",
            TOOL_EXPORT_ASSET_MANAGED_ASSET: "Click to Export All Approved Assets",
            TOOL_EXPORT_ASSET_UNMANAGED_ASSET: "Click to Export All Active Assets",
            TOOL_DOWNLOAD_RAW_DATA: "Click to Download Raw Data",
            TOOL_UPLOAD_ASSET: "Click to Import Assets",
            TOOL_ADD_ASSET: "Click to Add Asset",
            TOOL_PROPOSE_ASSET: "Click to Propose Asset",
            TOOL_ADD_ASSET_GROUP_ASSET: "Click to Add Asset Group",
            ASSET_GROUP_NAME_PROVIDE: "Provide the Asset Group Name",
            ASSET_GROUP_DESC_PROVIDE: "Provide the Asset Group Description",
            SAVE_BTN: "Click to Save",
            RESET_BTN: "Click to Reset",
            CANCEL_BTN: "Click to Cancel"
        },

        /* Engagement Page */
        ENGAGEMENT: {
            ADD_BTN: "Click to Add",
            EXPORT_BTN: "Click to Export",
            ENGAGEMENT_NAME: "Provide the meaningful engagement name",
            SAVE_BTN: "Click to Save",
            RESET_BTN: "Click to Reset",
            CANCEL_BTN: "Click to Cancel",
        },

        ENGAGEMENT_BUSINESS_CASE: {
            ADD_BTN: "Click to Add",
            EXPORT_BTN: "Click to Export",
            ENGAGEMENT_NAME: "Engagement Name",
            ASSET_NAME: "Asset Name",
            CEPP: "Provide expected effort to produce the desired output in a customer engagement/project by either creating a similar asset from scratch or by manually completing the task for one iteration.",
            CETR: "Provide expected effort to produce the desired output per iteration with this reusable asset in a customer engagement/project",
            REUSE: "This field is an auto-calculated.\nIt is the expected unadjusted saving(i.e.gross) expressed in percentage per re-use in the customer engagement/project\n[Expected Effort To Produce Per Iteration Without Reusable Asset(mhrs) - Expected Effort To Produce Per Iteration With Reusable Asset(mhrs)) / (Expected Effort To Produce Per Iteration Without Reusable Asset(mhrs))]* 100",
            ITERATION: "Provide expected number of iterations in a customer engagement/project. It is defined for assets such as 'Productivity tools' where an asset may be used in multiple iterations.",
            CREATE_NEW_BASELINE: "Click to Create New Baseline",
            OVERWRITE_CURRENT_BASELINE: "Click to Overwrite Current Baseline",
            RESET_BTN: "Click to Reset",
            CANCEL_BTN: "Click to Cancel",
            ABS_REUSE: "This field is an auto-calculated.\nIt sums up the expected unadjusted(i.e.gross) saving for all iterations. \n[(Expected Effort To Produce Per Iteration Without Reusable Asset(mhrs) - Expected Effort To Produce Per Iteration With Reusable Asset(mhrs)) * Expected Number Of Reuses]",
        },

        ASSET_GROUP: {
            ASSET_ROLE: "Select Asset Role",
            NOTES: "Provide Notes",
            SAVE_BTN: "Click to Save",
            CANCEL_BTN: "Click to Cancel"
        },

        REUSE_CASE: {
            ASSET_NAME: "Provide the asset on which reuse case will be created",
            ASSET_NAME_SELECT: "Provide the asset on which reuse case will be created",
            MARKET_AREA: "Provide the market area for this reuse case",
            NOTES: "Provide notes for this reuse case",
            SAVE_BTN: "Click to Save",
            CANCEL_BTN: "Click to Cancel",
            RESET_BTN: "Click to Reset",
            SELECT_CPAP_ID: "Provide the CPAP for this reuse case. CPAP data is retrieved from Global Chronos on periodic basis. Click on binocular icon to search & select.",
            SELECT_FAS_ID: "Provide the FAS for this reuse case. FAS data is retrieved from Global Chronos on periodic basis. Click on binocular icon to search & select.",
            SELECT_OPPORTUNIT_ID: "Provide the opportunity for this reuse case. Opportunity data is retrieved from Salesforce on periodic basis. Click on binocular icon to search & select. ",
            SELECT_ENGAGEMENT_ID: "Provide the engagement for which this asset can be reused. Click on binocular icon to search & select. ",
            SELECT_CUSTOMER_ID: "Provide the customer name for this reuse case. Click on binocular icon to search & select.",
        },

        CONTEXT_MAPPING: {
            CONTEXT_PARAMETER_TYPE: "Select Context Parameter Type",
            CONTEXT_PARAMETER: "Select Context Parameter",
            SAVE_BTN: "Click to Save",
            RESET_BTN: "Click to Reset",
        },

        FEEDBACK_MASTER_DATA: {
            ADD_BTN: "Click to Add",
            SAVE_BTN: "Click to Save",
            CANCEL_BTN: "Click to Cancel"
        },

        RELAT_ASSET_PAGE: {
            BACK_BTN: "Click to Go Back",
            CLOSE_BTN: "Click to Close",
        },

        APP_SETTING_PAGE: {
            SAVE_BTN: "Click to Save",
            RESET_BTN: "Click to Reset",
            CANCEL_BTN: "Click to Cancel"
        },

        UNMANAGED_ASSET_PAGE: {
            SAVE_BTN: "Click to Save",
            ADD_BTN: "Click to Add",
            RESET_BTN: "Click to Reset",
            REFRESH_BTN: "Click to Refresh Index",
            INDEX_NAME: "Enter Index Name for Asset URL",
            FOLDER_PATH: "Enter Asset URL"
        },

        AUDIT_PORTFOLIO_PAGE: {
            PREVIOUS_BTN: "Previous Step",
            NEXT_BTN: "Next Step",
            CLOSE_BTN: "Click to Close",
        },

        LOGIN_PAGE: {
            USER_NAME: "Ericsson Signum",
            PASSWORD: "LAN Password",
            PASSWORD_SHOW_HIDE: "Click to Show/Hide Password",
            PASSWORD_SHOW: "Click to Show Password",
            PASSWORD_HIDE: "Click to Hide Password",
            LOGIN: "Click to Login",
            PRESENTATION: "Click to open N365 Presentation",
            DEMO: "Click to view Latest Release Feature Demo",
            USER_MANUAL: "Click to open User Manual",
            TRAINING_ENV: "Click to access Training Environment",
            PRIVACY_LINK: "Click to open Navigator365 Privacy Notice"
        },

        MASTER_DATA_PAGE: {
            ADD_BTN: "Click to Add",
            SAVE_BTN: "Click to Save",
            CANCEL_BTN: "Click to Cancel",
            SWITCH_HIERARCHY_VIEW_BTN: "Click for Hierarchy View",
            SWITCH_NORMAL_VIEW_BTN: "Click for Normal View",
            FRAMEWORK_NAME: "Provide Framework Name",
            ROLE_NAME: "Provide Role Name",
            KNOWLEDGE_AREA_NAME: "Provide Knowledge Area Name",
            PRODUCT_NAME: "Provide Product Name",
            PRODUCT_NUMBER: "Provide Product Number",
            PRODUCT_OWNER: "Provide Product Owner",
            PRODUCT_STATUS: "Select Product Status",
            ENG_PHASE_GROUP_NAME: "Provide Engagement Phase Group Name",
            ENG_PHASE_GROUP: "Select Engagement Phase Group",
            ENG_PHASE_NAME: "Provide Engagement Phase Name",
            ASSET_STATUS_NAME: "Provide Asset Status Name",
            SOURCE_NAME: "Provide Asset Source Name",
            LANGUAGE_NAME: "Provide Language Name",
            ABBREVIATION: "Provide Language Abbreviation",
            TRANS_AVAILABLE: "Provide Translation Available",
            FILE_TYPE_NAME: "Provide File Type",
        },

        TREE_GRID_COMPONENT: {
            SAVE_BTN: "Click to Save",
            RESET_BTN: "Click to Reset",
            CANCEL_BTN: "Click to Cancel"
        },

        ENGAGEMENT_MAPPING: {
            LEGEND_TOOLTIP_DEFAULT: 'Provide the engagement mapping by selecting one out of "Engagement", "Opportunity" or "FAS".',
            MAPPING: "Select Engagement or Opportinity or FAS\n- Engagement: If you want to provide mapping on Engagement\n- Opportunity: If you want to provide mapping on Opportunity by providing Market Area, Customer Unit, Customer & Opportunity\n- FAS: If you want to provide mapping on FAS by providing Market Area, Customer Unit, Customer & FAS",
            MAPPING_BY_ENGAGEMENT: 'Select Opportinity or FAS\n- Opportunity: If you want to provide mapping on Opportunity by providing Market Area, Customer Unit, Customer & Opportunity\n- FAS: If you want to provide mapping on FAS by providing Market Area, Customer Unit, Customer & FAS',
            MAPPING_BY_OPPORTUNITY: 'Provide the engagement mapping by selecting Opportunity',
            MAPPING_BY_FAS: 'Provide the engagement mapping by selecting FAS',
            SELECT_INDIVIDUAL_VALUES: 'You can either select Engagement or provide individual details by selecting this radio button.',
            MARKET_AREA: "Select the Market Area for this engagement from the list.\n\nUpon selection, Customer Unit and Customer names corresponding to the selected Market Area will be presented. ",
            CLICK_CUSTOMER_UNIT: "Select the Customer Unit for this engagement from the list.\n\nCustomer Units corresponding to selected Market Area are presented.\n\nThis is an optional field. You can skip this field and provide Customer name directly and Customer Unit corresponding to selected Customer will be auto-populated.",
            CLICK_CUSTOMER: "Select customer name for this engagement.\n\nCustomers corresponding to selected Market Area and Customer Unit are presented. Start typing to get filtered suggestions on Customer name and select. Alternatively click on binocular icon to search & select.",
            CLICK_ENGAGEMENT: "Start typing to get filtered suggestions on Engagement name and select. Alternatively click on binocular icon to search & select.",
            CLICK_OPPORTUNITY: "Select Opportunity for this engagement.\n\nOpportunities corresponding to selected Market Area, Customer Unit and Customer name are presented. Start typing to get filtered suggestions on Opportunity name and select. Alternatively click on binocular icon to search & select.",
            CLICK_FAS: "Select FAS for this engagement.\n\nFAS corresponding to selected Market Area, Customer Unit and Customer name are presented. Start typing to get filtered suggestions on FAS name and select. Alternatively click on binocular icon to search & select.",
            CLICK_CPAP: "Provide the CPAP. CPAP data is retrieved from Global Chronos on periodic basis. Once you start typing, CPAP names shall be suggested or click on binocular icon to search & select.",
        },

        INTERNATIONALIZATION: {
            LANG: "Select Language",
            FEATR: "Select Feature",
            DISP_TEXT: "Provide Display Text",
            TLTP_TEXT: "Provide Tooltip",
            SAVE_BTN: "Click to Save",
            RESET_BTN: "Click to Reset",
        },

        WHATSNEWREPORT: {
            OWNERSHIP: "Select Ownership",
        },

        PRIME_OVERVIEW: {
            SAVE_BTN: "Click to Save",
        }
    },

    /* For Messages (Error/Success/Info) Text */
    MESSAGES: {
        //For Unauthorised Page Access:
        INFO_UNAUTHORISED_ACCESS: "You are not authorised to access this page.Redirecting you to home page.",

        /* Login Page */
        LOGIN_PAGE: {
            /* Success Messages */

            /* Error Messages */
            ERR_USER_LOGIN: "Invalid credentials, please check",
            ERR_USER_UNAUTH: "Unauthorized user!",
            ERR_USER_NOACCESS: "User does not have access",

            /* Info Messages */

        },

        /* Edit Asset Page */
        EDIT_ASSET_PAGE: {
            /* Success Messages */
            SUC_ADD_ASSET: "Record saved successfully!",
            DUPLICATE_ASSET_SAVE: "Do you still want to save the asset?",

            /* Error Messages */
            ERR_INVALID_ASSETNAME: "Invalid value for Asset name",
            ERR_INVALID_AVAILABLEON: "Invalid value for Available on",
            ERR_INVALID_ASSETURL: "Invalid value for Asset URL",
            ERR_INVALID_FRAMEWORK: "Invalid value for Framework",
            ERR_INVALID_LANGUAGE: "Invalid value for Language",
            ERR_INVALID_ROLE: "Invalid value for Role",
            ERR_INVALID_KNOWLEDGEAREA: "Invalid value for Knowledge Area",
            ERR_INVALID_PRODUCT: "Invalid value for Product",
            ERR_INVALID_ENGPH: "Invalid value for Engagement Phase",
            ERR_Owner_SIGNUM: "Invalid Owner Signum Provided",
            ERR_APPR_SIGNUM: "Invalid Signum in Asset Approver Signum",
            ERR_Owner_UNAUTH_SIGNUM: "Un-Authorized Asset Owner Signum",
            ERR_APPR__UNAUTH_SIGNUM: "Un-Authorized Asset Approver Signum",
            ERR_SOURCE_OWNERL1: "Invalid value in Source",
            ERR_CLASSIFICATION: "Invalid value in Classification",
            ERR_INVALIDVALUE_BUILDTIME: "Invalid value for Actual Effort to Develop/Harvest",
            ERR_INVALIDVALUE_ACTUAL_TTM: "Invalid value for Actual Effort to Maintain",
            ERR_ASSET_SEARCH_RANKING: "Invalid value for Search Ranking",
            ERR_ASSET_DESCRIPTION: "Invalid value for Asset Description",
            ERR_ASSET_TAGS: "Invalid value for Tags",

            ERR_SAVE_ASSET: "Error in saving asset data",
            ERR_APPR_ASSET: "Error in approving asset data",
            ERR_REJ_ASSET: "Error in rejecting asset data",
            ERR_UPL_ASSET: "Error in importing asset data",
            ERR_DEL_ASSET: "Error in deleting asset from portfolio",
            ERR_ALL_MAND: "Please enter the mandatory fields on this page",
            ERR_SUMMARY: "Please check highlighted fields for error",
            /* Info Messages */
            INF_SAME_OWNER_SIGNUM: "No change found in Asset Owner Signum & Ownership for the asset.",
            /* Alert Messages */
            ALT_WF_EXIST: "Workflow already exists in portfolio",
            ALT_INC_FILETYPE: "File type not allowed",
            ALT_FILE_SIZE: "File is too large",

            /* Dialog Messages */
            DLG_DISCARD_CHG: "Are you sure you want to discard changes?",
            DLG_REJ_ITM: 'Are you sure you want to reject selected item? If Yes, Please provide reason',

            approved_btn: 'Approved',
            pend_appr_btn: 'ToApprove',
            unpublish_btn: 'ToWork',
            rej_btn: 'Rejected',
            retired_btn: 'Retired',
            missing_btn: 'Missing',
            aged_btn: 'Aged',
        },

        VIEW_ASSET_PAGE: {
            /* Success Messages */
            SUC_REC_UPD: "Record updated successfully!",

            SUC_IMPORT_SUC: "Import Completed successfully!",
            SUC_SS_DUPLICATE: "Shared Search with same name already exists.",
            SUC_SS_SHARE: "User Saved Search has been shared successfully",
            SUC_SS_UNSHARE: "User Saved Search unshared successfully!",
            SUC_SS_DEL: "User Saved Search deleted successfully!",
            SUC_SSS_DEL: "User Saved Subscribed Search deleted successfully!",
            SUC_SS_SUB: "Subscribed status changed successfully",
            SUC_RCD_DEL: "Asset Group association removed successfully!",

            /* Info Messages */
            INF_IMPORT_TEMPL: "Incorrect Template!",
            INF_IMPORT_UNSUC: "Import Unsuccessful. Please contact Administrator",

            /* Error Messages */
            ERR_SS_SUB: "Error in Saved Search Subscription",
            ERR_MISASSET_EXCL: "Error in excluding missing asset",
            ERR_SS_SHRSTAT: "Error in updating shared status of User Saved Search",
            ERR_SSS_DEL: "Error in deleting user subscribed Saved Search data",
            ERR_SS_DEL: "Error in deleting user Saved Search data",
            ERR_ASSET_DEL: "Error in deleting asset data",
            ERR_RCD_DEL: "Error in removing Asset Group association!",

            PORTFOLIO_UPLOAD: 'PORTFOLIO_UPLOAD',
            ASSET: "asset",
            UPLOAD_ASSETS: 'Import Assets',
            ASSETREGISTRY: "Asset Registry",
        },

        NULLSEARCHREPORT: {
            ERR_CHK_DATE: "Please check From/To Date",
            ERR_FROMDATE: "From Date cannot be later than To Date",
            ERR_TODATE: "To Date cannot be earlier than From Date"
        },

        WHATSNEWREPORT: {
            ERR_CHK_DATE: "Please check From/To Date",
            ERR_FROMDATE: "From Date cannot be later than To Date",
            ERR_TODATE: "To Date cannot be earlier than From Date",
            ERR_OWNERSHIP: "Ownership should be selected"
        },

        PLAYBOOKSEARCH_PAGE: {
            ASSET_URL_DOWNLOAD: "#/DownloadAsset/",
            INF_SRCH_CONTEXT: "Search context restored",
            INF_AST_FND: " Asset found in search",
            INF_ASTS_FND: " Assets found in search",
            INF_AST_DN_SUC: "Asset downloaded successfully!",
            INF_AST_DN_FL: "Asset download action could not be saved",

            SUC_SRCH_SAV: "Search record saved successfully!",
            SUC_SRCH_OWR: "Search record overwritten successfully!",

            DLG_SRCH_NAME: "Please enter the name for this Search",
            ALT_SRCH_PARM: "Please select at least one context parameter or enter text to perform search.",
            NO_RECORD_TO_EXPORT: "No record to export.",
            ALT_ASSN_DOMAIN: "Would you like to assign the selected domain, sub-domain to the new portfolio?",
            ALT_SRCH_DUPL: "The Search Name entered is duplicate, do you wish to overwrite existing record?",
            DLG_EVA_CNF: "Source of this asset is EVA. You may request EVA Production instance access to further analyze this asset",
            NULL_SEARCH_SAVE_SUCCESS: "Null Search reported successfully.",
            NULL_SEARCH_ERROR: "Error in reporting Null Search. Please try after some time",
            NULL_SEARCH_RESULT_FOUND: "Asset available for selected context parameters. Please perform search again",
            NULL_SEARCH_FREE_TEST: "Null search can't be reported with free text serach. Please clear free text field and try to search again",
            NULL_SEARCH_DUPLICATE_RESULT: "This Null search is already reported so no need to report again",
            UNMANAGED_ERROR: "Server Down. Please contact Operation Team",
            UNMANAGEDERROR: "Elastic/Index Error",
            ONLY_SPECIAL_CHARACTER_NOTALLOWED: "Only special characters are not allowed to perform search",
            INF_MAX_CHAR_REACHED: "No more character allowed."
        },

        CUSTOM_SETTINGS: {
            ERR_RCD_UPD: "Error in updating Email subscriptions",
            SUC_RCD_UPD: "All Email subscriptions updated successfully",
            SUC_UPD_NOTI: "Email notification updated successfully",
            ERR_UPD_NOTI: "Error in updating Email notification",
        },

        MASTERDATA_PAGE: {
            SUC_ITM_NOSORT: "Error while sorting Master Data items. Please try again",

            INF_RCD_DUPL: "Record already exists",

            ERR_RCD_NOT_EXISTS: "Master Data record does not exist",
            ERR_SPACE_CHR: "Only space character is not allowed",
            ERR_RCD_UPD: "Error in updating Master Data record",
            INFO_RCD_ASSET_MAPPED: "Cannot Deactivate the record that is mapped to an Asset",
            INFO_RCD_LANGUAGE_MAPPED: "Cannot Deactivate the record that as it is mapped to the Terms",
            INFO_RCD_NO_ACTIVE_LANGUAGE: "Cannot activate/deactivate the translation for deactivated Language",
            INFO_RCD_DEFAULT_LANGUAGE_NOTEDITABLE: "Translation available settings for Nagivator365 default language can not be edited",

            ERR_KA_MND: "knowledge Area Name is mandatory",
            ERR_ROLE_MND: "Role Name is mandatory",
            ERR_PROD_MND: "Product Name is mandatory",
            ERR_PRODNUMBER_MND: "Product Number is mandatory",
            ERR_PRODOWNER_MND: "Product Owner is mandatory",
            ERR_PROD_STATUS: "Product Status is mandatory",
            //ERR_EPG_MND: "Engagement Phase Group Name is mandatory",
            ERR_EP_MND: "Engagement Phase Name is mandatory",
            ERR_ASTSTS_MND: "Asset Status Name is mandatory",
            ERR_SRC_MND: "Source Name is mandatory",
            ERR_LANG_MND: "Language Name is mandatory",
            ERR_ABBR_MND: "Abbreviation is mandatory",
            ERR_ABBR_LEN: "Abbreviation should have exact two characters",
            ERR_TRANS_AVAIL: "Translation Available should be selected",

            ERR_FW_MND: "Framework Name is mandatory",
            ERR_SP_CHR: "Special characters are not allowed",

            SUC_RCD_INS: "New Master Data added successfully",
            SUC_RCD_UPD: "Master Data updated successfully",
            INF_EDIT_NO_CHANGES: "You have not modified the Master Data values.",
            ERR_INVALID_NAME: "Invalid value for Name field",
            ERR_INVALID_INPUT: "Invalid input",
            ERR_RCD_INS: "An error occured in creating Master Data record",
            ERR_OPERATION: "An error occured while performing the operation",
            ERR_OWNRSHIP_MND: "Ownership Name is mandatory",
        },

        FEEDBACK_PAGE: {
            SUC_FBACK_UPD: "Record updated successfully!",

            ERR_FBACK_SAV: "Error in saving feedback data",
            ERRORNETWORK: 'Please provide valid value for Network ID',
            ERRORPERC: 'Please enter mandatory fields',
            WHY_FDBACK: 'Feedback is important for continuous improvement of the asset. This will help Asset Owner to improve the quality of the asset.',
            FEEDBACK_STATUS_PENDING: 1,
            FEEDBACK_STATUS_CLARIFICATION: 3,
            FEEDBACK_STATUS_INVALIDATED: 4,
            FEEDBACK_STATUS_VALIDATED: 5,
            FEEDBACK_STATUS_DONE: 2,
            ERR_FBACK_PMSIGNUM: "Project Manager/Business Owner's signum can't be same as Downloader's Signum",
            ERR_INVALID_SIGNUM: "Please provide valid Signum for Project Manager/Business Owner",
            ERR_EEPP_NULL: "Expected effort to complete per project without reuse is 0.",
            ERR_EEPWRA_NULL: "Expected Effort To Produce Without Reusable Asset is 0.",
            ERR_NEGATIVE_SAVINGS: "You are submitting feedback with negative saving. Are you sure you want to proceed?",
            ERR_EBC_OPP_CPAP_FAS: 'Provide the Engagement Mapping details.',
            FEEDBACK_NOTREUSE_RESON_INSPECTION: 'Inspection',
            FEEDBACK_NOTREUSE_RESON_DUPLICATE: 'Duplicate',
            ERR_FBACK_UPDATE: 'Please try again',
            SUCCESS_FBACK_UPDATE: 'Feedback data has been updated successfully'
        },
        MYSETTINGS_PAGE: {
            NOTIFY_UPDATE_SUB: "Subscribed Successfully",
            NOTIFY_UPDATE_UNSUB: "Unsubscribed Successfully",
            NOTIFY_UPDATE_FAIL: "Error in modifying record."
        },
        APPSETTINGS_PAGE: {
            ERR_FLD_MND: "Please enter value for ",
            SUC_RCD_UPD: "Application settings saved successfully!",
        },

        UNMANAGED_ASSET_PAGE: {
            ERR_FLD_MND: "Please enter value for ",
            SUC_RCD_UPD: "Index saved successfully!",
            ERR_SITE_MND: "Site Name is mandatory",
            ERR_PATH_MND: "Folder Path is mandatory",
            ERR_OWNERSHIP_MND: "Repository Ownership is mandatory",
            ERR_INDEX_NAME: "Special Characters are not permitted in Index Name accept _(underscore)",
            INF_RCD_DUPL: "Record already exists",
            ERR_RCD_UPD: "Error in updating Index Details",
            ERR_URL: "Invalid URL",
            ERR_SELECTED_PORTAL: "Document Portal and Asset Location URL is mismatch"
        },
        CONTENT_INDEX_REFERENCE_DATA: {
            FILE_PARSING_METHOD: 'File Parsing Method',
            FILE_PARSING: 'File Parsing',
            PORTAL: 'Portal',
            REPOSITRY_PARSING: 'Repositories Parsing',
        },

        HOME_PAGE: {
            ERR_USR_UNAUT: "Unauthorized user!",
            SUCC_MAIL_LM: "Mail successfully sent to Line Manager.",
            LM_NOT_FOUND: "Line Manager signum not found.",
            FAIL_MAIL_LM: "Error in sending mail.",
        },

        SUPPORT_PAGE: {
            ERR_SUPP_DEL: "Error in deleting selected support data",
            ERR_SUBMIT_SUPP: "Error in submitting feedback and support",
            ERR_FBACK_MND: "Support detail is mandatory",
        },

        UPLOAD_PAGE: {
            SUC_FIL_UPL: "File uploaded successfully! Importing Asset is in Progress...",
            SUC_FIL_UPL_REUSECASE: "File uploaded successfully! Importing Reuse case is in Progress...",
            SUC_FIL_UPL_OPPORTUNITY: "File uploaded successfully! Importing Opportunity is in Progress...",
            SUC_FIL_UPL_ASSETGROUP: "File uploaded successfully! Importing Asset Groups is in Progress...",
            SUC_IMP_COMPL: "Import Completed Successfully!",
            INF_TEMPL_INV: "Invalid Template",
            INF_IMP_NOCONT: "No content in imported template",
            INF_IMP_PART: "Import terminated with error. Please check mail",
            INF_IMP_FAIL: "Import Failed. no record modified",
            INF_SYS_ERR: "System Error. Please contact administrator",
            ERR_DNLD_TEMPL: "Error in downloading template",
            INF_MORE_THAN_5000_RECORD: "More than 5000 records specified in template file",
            BULK_UPLOAD_FLAG: "",
        },

        DYNAMIC_GRID: {
            ALT_UNABLE_DEL: "Error in deleting record",
            ALT_DEL_ITM: "Are you sure you want to delete selected item?",
            ALT_STOP_ITM: "Are you sure you want to change status of selected item to Stopped?",
            ALT_RETIRE_ITM: "Are you sure you want to change status of selected item to Retired? If Yes, Please provide reason",
        },

        GENERIC_GRID: {
            ALT_DEL_ITM: "Are you sure you want to delete selected item?",
            ALT_STOP_ITM: "Are you sure you want to change status of selected item to Stopped? If Yes, Please provide reason",
            ALT_RETIRE_ITM: "Are you sure you want to change status of selected item to Retired? If Yes, Please provide reason",
            ALT_SUB_SRCH: "Are you sure you want to subscribe selected search?",
            ALT_UNSUB_SRCH: "Are you sure you want to un-subscribe selected search?",
            ALT_UNPUB_ITM: "Are you sure you want to un-publish selected item?",
            ALT_ACT_ITM: "Are you sure you want to activate selected item?",
            ALT_DEACT_ITM: "Are you sure you want to deactivate selected item?",
            ALT_ACTV_ITM: "Are you sure you want to activate selected item?",
            ALT_DEACT_TRANS: "Are you sure you want to deactivate translation for selected language?",
            ALT_ACTV_TRANS: "Are you sure you want to activate translation for selected language?",
            ALT_REMASSOC_ITM: "Are you sure you want to remove Asset Group association?",
            ALT_REWORK_ITM: "Are you sure you want change status of selected item to Rework ? If Yes, Please provide reason",
            ALT_CLEAR_GRID_STATE: "Are you sure you want to clear this grid's state?",
        },

        RELAT_ASSET_PAGE: {
            INF_NOTAST: "This asset is not associated with any group",
            INF_AST_FND: " Asset found in search",
            INF_ASTS_FND: " Assets found in search",
            INF_FDBACK_NAV: "User selected to provide feedback, navigating to feedback page",
            INF_CNT_BRW: "User selected to continue browsing",
            INF_AST_DN_SUC: "Asset downloaded successfully!",
            INF_AST_DN_FL: "Asset download action could not be saved",
        },
        ASSET_BUSINESS_CASE: {
            SUC_REC_UPD: "Record updated successfully!",

            ERR_INVALID_PERIOD: "Valid value for Business Case Period is 1 to 60.",
            ERR_INVALID_TTD: "Invalid value for Expected Effort To Develop",
            ERR_INVALID_TTM: "Invalid Value for Expected Effort To Maintain",
            ERR_INVALID_RU: "Invalid value for Expected Number Of Reuses",
            ERR_INVALID_TPP: "Invalid value for Expected Effort To Complete Per Project Without Reuse",
            ERR_INVALID_TTC: "Invalid value for Expected Effort To Complete With Reusable Asset",
            ERR_SAVE_BUSINESS_CASE: "An error occured while trying to save Asset Business Case",
            ERR_SUMMARY: "Please check highlighted fields for error",
            CREATE_NEW_BASELINE: "Click to Create New Baseline",
            OVERWRITE_CURRENT_BASELINE: "Click To Overwrite Current Baseline",
            RESET_BTN: "Click To Reset",
            CANCEL_BTN: "Click To Cancel"
        },
        ENGAGEMENT: {
            SUC_REC_ADD: "Record added successfully!",
            SUC_REC_UPD: "Record updated successfully!",
            SUC_REC_DEL: "Record deleted successfully!",
            MSG_DEL_ENGAGEMENT: "Are you sure you want to delete selected item?",
            ERR_SAVE_ENGAGEMENT: "Error saving Engagement",
            ERR_DUP_ENGAGEMENT: "Engagement with same name already exists",
            ERR_DEL_ENGAGEMENT: "Error in deleting Engagement",
            ERR_DEL_ENGAGEMENT_EBC: "Error in deleting Engagement due to existing associated Engagement Business Case",
            ERR_DEL_ENGAGEMENT_Feedback: "Error in deleting Engagement due to existing associated Feedback/Reuse Case",
            ERR_INVALID_NAME: "Invalid value for Engagement Name",
            ERR_INVALID_MKT_AREA: "Invalid value for Market Area",
            ERR_INVALID_CUSTOMER: "Invalid value for Customer",
            ERR_INVALID_OPP_VAL: "Invalid value for Opportunity Value",
            ERR_INVALID_OPP_PROB: "Invalid value for Opportunity Probability",
            ERR_NOTTOMODIFY_ENGAGEMENT: "This engagement is not created by you, so you can't modify",
            ERR_NOTTODELETE_ENGAGEMENT: "This engagement is not created by you, so you can't delete",
            ERR_OPP_CPAP_FAS: 'Provide the Engagement Mapping details.'
        },
        ENGAGEMENT_BUSINESS_CASE: {
            SUC_REC_ADD: "Record added successfully!",
            SUC_REC_UPD: "Record updated successfully!",
            SUC_REC_DEL: "Record deleted successfully!",
            MSG_DEL_ENGAGEMENT_BUSINESS_CASE: "Are you sure you want to delete selected item?",
            OVERWRITE_CONFIRM_MSG: 'Are you sure you want to overwrite the data in this baseline?',
            OVERWRITE_CONFIRM_TITLE: 'Overwrite Baseline - Engagement Business Case',
            ERR_SAVE_ENGAGEMENT_BUSINESS_CASE: "Error saving Engagement Business Case",
            ERR_DUP_ENGAGEMENT_BUSINESS_CASE: "Engagement Business Case with same data already exists",
            ERR_DEL_ENGAGEMENT_BUSINESS_CASE: "Error in deleting Engagement Business Case",
            ERR_SELECT_ENGAGEMENT: "Please Select Engagement",
            ERR_SELECT_ASSETS: "Please Select Asset",
            ERR_INVALID_CEPP: "Invalid value for Expected Effort To Produce Per Iteration Without Reusable Asset(mhrs)",
            ERR_INVALID_CETR: "Invalid value for Expected Effort To Produce Per Iteration With Reusable Asset(mhrs)",
            ERR_INVALID_IPP: "Invalid value for Expected Number of Iterations per project life cycle",
            ERR_NOTTOMODIFY_ENGAGEMENT_BUSINESS_CASE: "This engagement business case is not created by you, so you can't modify",
            ERR_NOTTODELETE_ENGAGEMENT_BUSINESS_CASE: "This engagement business case is not created by you, so you can't delete",
            ERR_NEGATIVE_SAVINGS: "You are submitting Engagement Business Case with negative saving. Are you sure you want to proceed?",
        },
        /*FEEDBACK_MASTER_DATA: {
            
        }*/
        PRODUCT_ASSET_MAPPING: {
            SUC_MAP_SAVE: "Product Asset Mapping saved successfully",
            ERR_SELECT_PRODUCT: "Please Select Product",
            ERR_MAP_SAVE: "An error occured while saving Product Asset Mapping",
            INF_MAP_NOCHANGE: "You have not made any changes.",
            CANCEL_CONFIRM: "You will lose your changes. Do you want to proceed?",
            SAVE_BTN: "Click to Save",
            RESET_BTN: "Click to Reset",
            CANCEL_BTN: "Click to Cancel"
        },

        PRODUCT_OWNER_MAPPING: {

            SUC_MAP_SAVE: "Product Owner Mapping saved successfully",
            ERR_SELECT_PRODUCT: "Please Select Product",
            ERR_MAP_SAVE: "An error occured while saving Product Owner Mapping",
            INF_MAP_NOCHANGE: "yOU HAVE NOT MADE ANY CHANGES.",
            CANCEL_CONFIRM: "You will lose your changes. Do you want to proceed?",
            SAVE_BTN: "Click to Save",
            RESET_BTN: "Click to Reset"

        },

        INTERNATIONALIZATION: {
            LANG_SELECT: "Language should be selected",
            FEATR_SELECT: "Feature should be selected",
            TEXT_BLANK: "Display text cannot be empty",
            SUC_SAVE: "Language Settings saved successfully",
            NO_DATA: "No data for selected language.",
        },

        USER_SETTINGS: {
            SAVE_SUCCESS: "Settings saved successfully",
            SAVE_ERROR: "Unable to save the settings.",

        },

        MANAGE_BENEFITS_PAGE: {
            SUC_RCD_UPD: "Prime Membership Benefits Data updated successfully",
            INF_RCD_DUPL: "Record already exists",
            ERR_RCD_NOT_EXISTS: "Prime Membership Benefit Data record does not exist",
            ERR_BENEFIT_NAME: "Benefit Name cannot be empty",
            ERR_ISACTIVE: "Benefit Is Active status cannot be empty",
            ERR_RCD_UPD: "Error in updating Prime Membership Benefit Data record",
        },

        PRIME_OVERVIEW: {
            SUC_RCD_UPD: "Prime security consent Data updated successfully",
            ERR_RCD_UPD: "Error while updating Prime security consent Data",
        }
    },

    ENGAGEMENT_MAPPING: {
        ENGAGEMENT: "engagement",
        OPPORTUNITY: "opportunity",
        CPAP: "cpap",
        FAS: "fas",
    },

    TREEVIEW: {
        SUCCESS: 'Parent configuration has been updated',
        ERROR: 'Parent configuration is not saved',
        Empty: 'Please select one product'
    },

    ContextMapping: {
        SelectFramework: 'Please select framework',
        SelectRole: 'Please select Role',
        AlertRole: 'Few roles have existing asset',
        SaveRole: 'Role Context Mapping Saved Successfully!',
        EngAlert: 'Few Engagement phases have exisitng asset',
        EngSave: 'Engagement Phase Context Mapping Saved Successfully!',
        KAAlert: 'Few Knowledge Area have exisitng asset',
        KASave: 'Knowledge Area Context Mapping Saved Successfully!',
        SUC_PROD_SAVE: 'Framework Product Mapping saved',
        ERR_PROD_SAVE: 'An error occured while saving Framework Product Mapping',
    },

    USERINPUTDIALOG: {
        SRCH_NAME_EMPTY: "Search Name can't be empty",
        NO_SP_CHR: "Special characters are not allowed in search name. Only character, digit and hyphen is allowed",
        SRCH_NAME_LEN: "Search Name should have atleast 3 characters. It can't start with a digit or hyphen",
    },

    /* Guided Tour Dialog */
    GUIDED_TOUR_DIALOG: {
        COMPLETE_TOUR: "completeTour",
        CURRENT_PAGE_TOUR: "currentPageTour",
        INITIAL: "initial",
        BY_DIALOG: "byDialog",
        CANCEL_TOUR: "cancelTour",
        ERR_PERM_DEN: "Permission Denied",
        ERR_NO_HELP: "Currently no help available for this page.",
        ROLE_PRACTITIONER: "Practitioner",
        ROLE_CURATOR_OWNER: "Curator Owner",
        ROLE_CURATOR_APPROVER: "Curator Approver",
        ROLE_LIBRARION: "Global Librarian",
        ROLE_ADMINISTRATOR: "Administrator",
        ROLE_PILOT: "Pilot",
        ROLE_BUSINESS_OWNER: "Business Owner",
        ROLE_AREA_APPROVER: "SA-MA Librarian",
    },

    /* Current Page Operation */
    CURRENT_PAGE_OPERATION: {
        "NONE_OP": "",
        "MY_SETTINGS_ADD_OP": "mySettingsAddOperation"
    },

    ASSETGROUP_PAGE: {
        /**For Excel Upload**/
        SUC_FIL_UPL: "File uploaded successfully! Importing Asset is in Progress...",
        SUC_IMP_COMPL: "Import Completed successfully!",
        INF_TEMPL_INV: "Invalid Template",
        INF_IMP_NOCONT: "No content in imported template",
        INF_IMP_PART: "Import Partially Successful. Please check mail",
        INF_IMP_FAIL: "Import Completed. No record modified",
        INF_SYS_ERR: "System Error. Please contact administrator",
        ERR_DNLD_TEMPL: "Error in downloading template",
        /***/
        INF_RCD_DUPL: "Record with same name already exist",

        ASSET_ROLE1: 'Parent',
        ASSET_ROLE2: 'Child',
        ASSET_ROLE3: 'Peer',

        SUC_REC_UPD: "Record updated successfully!",

        ERR_RCD_NOT_EXISTS: "Asset Group Data does not exist",
        ERR_SPACE_CHR: "Only space character is not allowed",
        ERR_RCD_UPD: "Error in updating Asset Group record",
        ERR_SP_CHR: "Special characters are not allowed",
        ERR_GRP_NM_MND: "Asset Group Name is mandatory",
        ERR_GRP_DESC_MND: "Asset Group Description is mandatory",
        ERR_GRP_OWNER_MND: "Asset Group Owner is mandatory",
        ERR_GRP_OWNER_INV: "Asset Group Owner is invalid",

        ERR_REL_DEL: "Error in deleting Asset Group relation",
        ERR_GRP_DEL: "Error in deleting Asset Group",

        ALT_DEL_ASSETGRPREL: 'This asset group has associated assets. Do you still wish to delete this group?',
        ALT_DEL_ASSETGRP: 'Are you sure to delete this asset group?',

        ERR_ASSETGROUP_REL_SAV: "Error in associating assets to the Asset Group",
        ERR_ASSETROLE_EMPT: "Relation Type is mandatory",
        ERR_ADD_DESC_EMPT: "Additional description is mandatory",
        ERR_ASSET_EMPT: "Atleast one Asset must be selected",
        ERR_AG_SP_CHR: "Special characters are not allowed",
        ERR_AG_NAME_LEN: "Group Name should have atleast 3 characters. It can't start with a digit or hyphen",
        ASSETGROUP_UPLOAD: 'ASSETGROUP_UPLOAD',
        UPLOAD_ASSETGROUP: 'Import Asset Group',
        ASSETGROUP: "Asset Group",

        NOTI_GROUP_NOT_EDIT: "This group is not created by you, so you can't edit",
        NOTI_GROUP_NOT_DELETE: "This group is not created by you, so you can't delete",
        NOTI_GROUP_NOT_ASSOCIATE: "This group is not created by you, so you can't associate assets",
        ALT_REMASSOC_ITM: "Are you sure you want to remove Asset Group association?",
    },


    BOOKMARK_PAGE: {
        ERR_RCD_UPD: "Error in updating Users",
        SUC_REC_UPD: "Record updated successfully!",
        INF_INVLD_SIGM: "Invalid signum entered!",
        DUPL_SIGM_ENTD: "Duplicate signum entered!",
        INF_OWN_INVLD_SIGM: "Owner of this bookmark, can not be added!",
        INF_OWN_INVLD_USR: "You can not add yourself!",
    },

    LOADMANAGEPORTFOLIO_ASSETOPERATION: {
        GET_TOTAL_ASSETS: "TOTAL_ASSETS",
        GET_MANAGED_ASSETS: "MANAGED_ASSETS",
        GET_UNMANAGED_CONTEXTUAL_ASSETS: "UNMANAGED_CONTEXTUAL_ASSETS",
        GET_ALL_APPROVED_ASSETS: "ALL_APPROVED_ASSETS",
        GET_ALL_PENDING_APPROVAL_ASSETS: "ALL_PENDING_APPROVAL_ASSETS",
        GET_ALL_REJECTED_ASSETS: "ALL_REJECTED_ASSETS",
        GET_ALL_UNPUBLISHED_ASSETS: "ALL_UNPUBLISHED_ASSETS",
        GET_ALL_RETIRED_ASSETS: "ALL_RETIRED_ASSETS",
        GET_USER_SAVED_SEARCHES: "USER_SAVED_SEARCHES",
        GET_USER_SAVED_SEARCHES_SHARED: "USER_SAVED_SEARCHES_SHARED",
        GET_USER_SAVED_SEARCHES_SUBSCRIBED: "USER_SAVED_SEARCHES_SUBSCRIBED",
        GET_ALL_MISSING_ASSETS: "ALL_MISSING_ASSETS",
        GET_ALL_AGED_ASSETS: "ALL_AGED_ASSETS",
        GET_ALL_UNUSED_ASSETS: "ALL_UNUSED_ASSETS",
        GET_ALL_DOWNLOADED_ASSETS: "ALL_DOWNLOADED_ASSETS",
        GET_ALL_ASSETS_WITH_INVALID_SIGNUMS: "ALL_ASSETS_WITH_INVALID_SIGNUMS",
        GET_ALL_DOWNLOAD_VS_REUSE_ASSETS: "ALL_DOWNLOAD_VS_REUSE_ASSETS",
        GET_ALL_NULL_SEARCH_RESULT: "ALL_NULL_SEARCH_RESULT",
        GET_REJECTED_PROPOSALS: "ProposalsRejected",
        GET_ACCEPTED_PROPOSALS: "ProposalsAccepted",
        GET_ALL_AGED_ASSET_VIEW: "ALL_AGED_ASSET_VIEW",
    },

    OPPORTUNITY: {
        REUSEEXIST_ACTIVEATION: 'Reuse case linked with this opportunity exists. Please review.',
        ACTIVATIONERROR: 'Change in activation was unsuccessful',
        SORTERROR: 'Change in sort order was unsuccessful',
        DELETEERROR: 'Deletion unsuccessful. Reuse case associated with selected opportunity',
        ADDERROR: 'Error while adding Opportunity',
        SIMILARADDERROR: 'Opportunity with similar name already exists',
        EDITERROR: 'Error while updating Opportunity',
        VALIDDATE: 'Please select valid date',
        FORMERROR: 'Please provide valid values for all fields',
        PROBABILITY_ERROR: 'Please provide valid Opportunity Probability Percentage value',
        DLG_DISCARD_CHG: "Are you sure you want to discard changes?",
        NOT_AUTHORIZED: "You do not have sufficient rights to change this record",
        OPPORTUNITY_UPLOAD: 'OPPORTUNITY_UPLOAD',
        OPPORTUNITY_IMPORT: "OPPORTUNITY_IMPORT",
        UPLOAD_OPPORTUNITY: 'Import Opportunity',
        OPPORTUNITY: "Opportunity",
    },

    REUSECASE: {
        SUC_REC_ADD: "Record added successfully!",
        SUC_REC_UPD: "Record updated successfully!",
        NOTI_REUSECASE_NOT_EDIT: "You won't be able to edit this reuse case as you are not it's creator",
        DLG_DISCARD_CHG: "Are you sure you want to discard changes?",
        EDITERROR: 'Error while updating Reuse case',
        ADDERROR: 'Error while adding Reuse case',
        INVALID_STATUS_SUBMITTED: 'Reuse-Case status must be Submitted for any Proposed asset',
        INVALID_STATUS_DOWNLOADED: 'Reuse-Case status must be Candidate/Reusing for any Downloaded asset',
        FORMERROR: 'Please provide valid values for all mandatory fields',
        ADDREUSEOPPERROR: 'Error while adding opportunity for Reuse case',
        EDITREUSEOPPERROR: 'Reuse Status ',
        ERR_DNLD_TEMPL: "Error in downloading template",
        REUSECASE_UPLOAD: 'REUSECASE_UPLOAD',
        UPLOAD_REUSECASE: 'Import Reuse case',
        REUSECASE: "Reusecase",
        REUSECASE_FLAG: "Reuse Case",
        DOWNLOAD_PM_SIGNUM: "Project Manager/Business Owner's signum can't be same as Downloader's Signum",
        INVALID_SIGNUM: "Please provide valid Signum for Project Manager/Business Owner",
        ADD_BTN: "Click to Add",
        EXPORT_BTN: "Click to Export",
        ERR_OPP_CPAP_FAS: 'Provide the Engagement Mapping details.',
    },

    ASSET_APPROVAL_STATUS: {
        ASSETSTATUS_PENDINGAPPROVAL: 0,
        ASSETSTATUS_APPROVED: 1,
        ASSETSTATUS_REJECTED: 2,
        ASSETSTATUS_UNPUBLISHED: 3,
        ASSETSTATUS_PROPOSED: 6,
        ASSETSTATUS_RETIRED: 10,
    },

    SAVE_PORTFOLIO_RESULT_CODE: {
        BULK_UPLOAD_STATUS_SUCCESS: 0, //success       
        BULK_UPLOAD_STATUS_INVALID_SME: 4, //Invalid Asset Owner Signum
        BULK_UPLOAD_STATUS_INVALID_APPROVER: 5, //Invalid Asset Approver Signum
        BULK_UPLOAD_STATUS_RECORD_ALREADY_EXIST: 6,//Record Already Exists
        BULK_UPLOAD_STATUS_CHECK_METADATA: 7,//Unable to Save Asset, Check Metadata
        BULK_UPLOAD_STATUS_NO_RIGHTS: 8,
        BULK_UPLOAD_STATUS_UNAUTH_SME: 20,
        BULK_UPLOAD_STATUS_UNAUTH_APPROVER: 21, //Un-authorized Asset Approver Signum        
        BULK_UPLOAD_STATUS_INVALID_PROPOSED_BY: 26,
        BULK_UPLOAD_STATUS_INVALID_CO_PROPOSER: 27,
        BULK_UPLOAD_STATUS_INVALID_OWNERSHIP: 28,
        BULK_UPLOAD_STATUS_INVALID_PRODUCT_BY_OWNERSHIP: 29
    },

    REUSE_CASE_STATUS: {
        REUSE_CASE_STATUS_PENDING: 1,
        REUSE_CASE_STATUS_DUE: 2,
        REUSE_CASE_STATUS_CANDIDATE: 3,
        REUSE_CASE_STATUS_REUSING: 4,
        REUSE_CASE_STATUS_STOPPED: 5,
        REUSE_CASE_STATUS_DONE: 6,
        REUSE_CASE_STATUS_SUBSCRIBE: 7,
        REUSE_CASE_STATUS_DUPLICATE: 8,
        REUSE_CASE_STATUS_PROPOSED: 9,
        REUSE_CASE_STATUS_DELETED: 10,
        REUSE_CASE_STATUS_CLARIFICATION: 11,
        REUSE_CASE_STATUS_INVALIDATED: 12,
        REUSE_CASE_STATUS_VALIDATED: 13,

        REUSE_CASE_STATUS_PROPOSED_Text: 'Proposed',
    },

    GRID_IDENTIFIERS: {
        ASSET_SEARCH_GRID: 'assetSearchGrid',
        DOWNLOADED_ASSETS: 'downloadedAssets',
        PENDING_FEEDBACK: 'pendingFeedback',
        PROVIDED_FEEDBACK: 'providedFeedback',
        DUE_REUSE_CASE: 'dueReuseCase',
        MY_ASSETS_FEEDBACK: 'myAssetsFeedback',
        FEEDBACK_OPPORTUNITY: 'feedbackOpportunity',
        FEEDBACK_OPPORTUNITY_REUSE_CASE: 'feedbackOpportunityReuseCase',
        FEEDBACK_REUSE_CASE: 'feedbackReuseCase',
        FEEDBACK_REUSE_CASE_BY_ID: 'feedbackReuseCaseById',
        FEEDBACK_DUE_REUSE_CASE: 'feedbackDueReuseCase',
        ASSET_GROUPS_GRID: 'assetGroupdGrid',
        ASSET_GROUPS_SUBGRID: 'assetGroupdSubGrid',
        ASSET_GROUP_RELATIONS_GRID: 'assetGroupRelationsGrid',
        SOLUTION_AREA_GRID: 'solutionAreaGrid',
        FEEDBACK_DETAILS_GRID: 'feedbackDetailsGrid',
        POP_LITE_GRID: 'popLiteGrid',
        MANAGE_BENEFITS_GRID: 'manageBenefitsGrid',
        PRIME_USERS_LIST: 'primeUsersListGrid',
        BOOKMARK_GRID: 'bookmarkdGrid',
        BOOKMARK_SUBGRID: 'bookmarkSubGrid',
        BOOKMARK_RELATIONS_GRID: 'bookmarkRelationsGrid',
        MYSETTING_GRID: 'mysettingGrid',
        ANNOUNCEMENT_GRID: 'announcementGrid',
    },

    OPERATIONS: {
        ADD: 'ADD',
        EDIT: 'EDIT',
        VIEW: 'VIEW'
    },

    FEEDBACK_MASTER_DATA: {
        MARKET_AREA_VIEW_NAME: 'Market_Area',
        COUNTRY_VIEW_NAME: 'Country',
        ORGANIZATION_VIEW_NAME: 'Organization',
        OPPORTUNITY_VIEW_NAME: 'Opportunity',
        CPAP_VIEW_NAME: 'CPAP',
        FAS_VIEW_NAME: 'FAS',
        CUSTOMER_VIEW_NAME: 'Customer',
        FEEDBACK_ORG_ENG_MAPPIN_VIEW_NAME: 'Engagement Mapping',
        SUC_RCD_UPD: "Master Data updated successfully",
        INFO_MA_EBC_MAPPED: "Cannot Deactivate the Market Area that is mapped to some entities.",
        INFO_RCD_ASSET_MAPPED: "Cannot Deactivate the record that is mapped to an Asset",
    },

    REQUEST_SCREENS: {
        ENGAGEMENT: 'Engagement',
        REUSE_CASE: 'Reuse Case',
        FEEDBACK: 'Feedback'

    },

    SAVING_CALCULATIONS_METHODS: {
        NO_SAVING: 0,
        SAVING_PER_USE: 1,
        SAVING_ADJUSTED_WITH_EFFORT: 2,
        SAVING_ADJUSTED_BY_PERCENTAGE: 3,
        SAVING_REUSE_PERCENTAGE: 4,
        SAVING_ON_PRODUCTIVITY_TOOLS: 5,
    },

    PRIVACY_CONSENT: {
        PRIME_OPT_IN_TITLE: 'Prime Membership Opt-In',
        PRIME_OPT_OUT_TITLE: 'Prime Membership Opt-Out',
        OPT_IN: 'Are you sure you wish to opt-in Prime membership ?',
        OPT_OUT: 'Are you sure you wish to opt-out of Prime membership ?',
    },

    //To Enter new entry in 'ALLOWEDURL' below, values on left should match with url defined in app.route (after replacing / with _). 
    //Also, only those url where no permission/authorization needs to be checked, should be included in 'ALLOWEDURL'
    ALLOWEDURL: [
        { Default: "/" },
        { _home: "/home" },
        { _compass: "/compass" },
        { _assetRegistry_USER_SAVED_SEARCHES: "/searchPortfolio/USER_SAVED_SEARCHES" },
        { _assetRegistry_USER_SAVED_SEARCHES_SHARED: "/searchPortfolio/USER_SAVED_SEARCHES_SHARED" },
        { _assetRegistry_USER_SAVED_SEARCHES_SUBSCRIBED: "/searchPortfolio/USER_SAVED_SEARCHES_SUBSCRIBED" },
        { _assetRegistry_PRIME_MEMBERS_LIST: "/assetRegistry/PRIME_MEMBERS_LIST" },
        { _UserSettings: "/UserSettings" },
        { _DownloadAsset: "/DownloadAsset" },
        { _Bookmark: "/Bookmark" },
        { _ViewBookmark_BookmarkShared: "/ViewBookmark/BookmarkShared" },
        { _Announcement: "/Announcement" },
        { _Analytics: "/Analytics" },
        { _Internationalization: "/Internationalization" },
        {
            _WhatsNew: "/WhatsNew" // to be moved under validurl list 
        },
        {
            _PrimeMemberShip_ManageBenefits: "/PrimeMemberShip/ManageBenefits"
        },
        {
            _PrimeMemberShip_ViewPrimeUsersList: "/PrimeMemberShip/ViewPrimeUsersList"
        },
        {
            _PrimeMemberShip_WhatIsPrimeMembership: "PrimeMemberShip/WhatIsPrimeMembership"
        },
        {
            _PrimeMemberShip_PrivacyConsent: "PrimeMemberShip/PrivacyConsent"
        },
        { _myProfile: "/myProfile" },
        { _Dashboard: "/Dashboard" },
    ],
    //To Enter new entry in 'VALIDURL' below, values on left should match with url defined in app.route (after replacing / with _)
    VALIDURL: [{
        _assetRegistry_MANAGED_ASSETS: "ManageAssetView"
    }, {
        _assetRegistry_UNMANAGED_CONTEXTUAL_ASSETS: "ManageAssetView"
    }, {
        _assetRegistry_MANAGED_ASSETS_ProposalsAccepted: "ManageAssetView"
    }, {
        _assetRegistry_MANAGED_ASSETS_ProposalsRejected: "ManageAssetView"
    }, {
        _AssetGroup: "AssetGroupView"
    }, {
        _assetRegistry_ALL_MISSING_ASSETS: "AssetAuditMissingAssetView"
    }, {
        _assetRegistry_ALL_UNUSED_ASSETS: "AssetAuditUnusedAssetView"
    }, {
        _assetRegistry_ALL_ASSETS_WITH_INVALID_SIGNUMS: "AssetAuditAssetWithInvalidSignumView"
    }, {
        _assetRegistry_ALL_DOWNLOAD_VS_REUSE_ASSETS: "AssetAuditDownloadVsReuseView"
    }, {
        _assetRegistry_ALL_NULL_SEARCH_RESULT: "AsestAuditNullSearchReportView"
    }, {
        _ReportedNullSearch: "AssetAuditReportedNullSearchView"
    }, {
        _assetRegistry_ALL_AGED_ASSET_VIEW: "AssetAuditAgedAssetView"
    }, {
        _masterdata_Asset: "MasterDataManagement"
    }, {
        _masterdata_Feedback: "MasterDataManagement"
    }, {
        _masterdata_MapParameter: "ViewContextMapping"
    }, {
        _viewFeedback_reuseCase: "FeedbackReuseCase"
    }, {
        _AppSettings: "UserApplicationSetting"
    }, {
        _UnmanagedAsset: "UnmanagedAsset"
    }, {
        _AssetBusinessCase: "AssetBusinessCase"
    }, {
        _viewFeedback_validateFeedback: "ValidateFeedbackView"
    }, {
        _engagement: "EngagementView"
    }, {
        _engagement_ebc: "EngagementBusinessCaseView"
    }, {
        _MapProductAsset: "ProductAssetMapping"
    }, {
        _masterdata_MapProductOwner: "ProductAssetMapping"
    }, {
        _viewFeedback_downloadedAssets: "FeedbackDownloadedAssetView"
    }, {
        _viewFeedback_pendingFeedback: "FeedbackPendingFeedbackView"
    }, {
        _viewFeedback_providedFeedback: "FeedbackProvidedFeedbackView"
    }, {
        _viewFeedback_myAssetsFeedback: "FeedbackReceivedFeedbackView"
    }, {
        _viewFeedback_SubscribedAssetsUpdated: "FeedbackDownloadedAssetView"
    }, {
        _viewFeedback_FeedbackValidated: "FeedbackProvidedFeedbackView"
    }, {
        _viewFeedback_FeedbackInvalidated: "FeedbackProvidedFeedbackView"
    }, {
        _viewFeedback_FeedbackReceived: "FeedbackReceivedFeedbackView"
    }, {
        _PoPLite: "PoPLite"
    }, {
        _PlannedAsset: "PlannedAsset"
    }, {
        _masterdata_contentIndexReference: "MasterDataManagement"
    }, {
        _assetUpliftment: "assetUpliftment"
    }
    ]
}