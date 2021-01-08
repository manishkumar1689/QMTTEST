/*Column Defination-- > properties sequence guidelines
1. Display name
2. Column name in resultant dataset/json
3. If column needs to be radio button then 'IsRadioButton' or if data is numeric then Filter type 'IsNumeric' otherwise empty
4. Column size 'ColSize' if additional width is required for certain column otherwise empty
5. If ColSize is defined in step 4 above then it should followed by width, mentioned in numbers (which will get rendered in pixels) otherwise empty
6. If column needes to be pinned and not moveable when user drag it, 'LockPinn' should be defined otherwise empty
7. Position of pinned column (options are 'left','right') otherwise empty
8. Pivot
9. Grouping in grid
10. Default grouping column in grid
11. Header Tooltip
*/
export const TestData = {
    BULKUPLOAD: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)

        }],
        Columns: [{
            'Framework,Framework,': ''
        }, {
            'Role,Role,': ''
        }]
    }],
    HOME: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)
            Navigate: "true",
            RelatAsset: "true",
            EnableGridGroup: "true",
            ShowAssetDetails: "true",
            ShowFeedbackDetails: "true",
            AllowExcelExport: "true",
            AllowCSVExport: "true",
            gridCase: "homeGrid",
            highlightByAssetCategory: "true",
            ExpandAll: "true",
            ShareAsset: "true"
            // DefaultExpandGroup:"available"
        }],
        Columns: [{
            'Asset Name,Title,,ColSize,400,,left,,,,': ''
        }, {
                'Status,AssetApprovalStatusName,,,,,,,true,,': ''
            }, {
                'Date,StatusDate,,,,,,,true,,': ''
            }, {
                'Product,ProductName,,,,,,,true,,': ''
            }, {
                'Product Status,ProductStatusName,': ''
            }, {
                'Ownership,OwnershipName,,,,,,,true,,': ''
            },{
                'Source,SourceName,,,,,,,true,,': ''
            }, {
                'Framework,FrameworkName,,,,,,,true,,': ''
            }, {
                'Role,RoleName,,,,,,,true,,': ''
            }, {
                'Knowledge Area,KnowledgeAreaName,,,,,,,true,,': ''
            }, {
                'Phase,EngagementPhaseName,,,,,,,true,,': ''
            }, {
                'Language,LanguageName,,,,,,,true,,': ''
            }, {
                'Owner,AssetOwnerSignum,,,,,,,true,,': ''
            }, {
                'Approver,AssetApproverSignum,,,,,,,true,,': ''
            }, {
                'Asset Category,AssetCategory,,,,,,,true,true,': ''
            }, {
                'Availability,AssetAvailableStatus,,,,,,,true,true,': ''
            }, {
                'Asset File Type,FileType,,,,,,,true,,': ''
        }]
    }],
      DUPLICATEDATA: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)
            ShowAssetDetails: "true",
            EnableGridGroup: "true",
            ExpandAll: "true",
            GridHeight: "300",
     
        }],
        Columns: [{
            'Asset Name,DuplicateAssetName,,ColSize,400,,left,,,,': ''
        },
            {
                'Duplicacy Reason,DuplicateReason,,,,,,,true,,': ''
            },{
                'Ownership,OwnershipName,,,,,,,true,,': ''
            },{
                'Framework,FrameworkName,,,,,,,true,,': ''
            }, {
                'Role,RoleName,,,,,,,true,,': ''
            }, {
                'Knowledge Area,KnowledgeAreaName,,,,,,,true,,': ''
            },{
                'Product,ProductName,,,,,,,true,,': ''
            }, {
                'Phase,EngagementPhaseName,,,,,,,true,,': ''
            },
            {
                'Asset Owner,AssetOwnerSignum,,,,,,,true,,': ''
            }, {
                'Asset Category,AssetCategory,,,,,,,true,true,': ''
            }]
    }],

    SEARCHTEXT: [{
        Options: [{
        }],
        Columns:
            [
                { 'Name,name,': '' },
                { 'Repository Ownership,ownershipName,': '' },
                { 'Size,size,': '' },               
                { 'File Type,fileType,': '' }, 
                { 'Last Modified Date,lastModifiedDateTime,': '' },
                { 'Created Date,createdDateTime,': '' },
                { 'Created By,createdBy,': '' }                
            ],
    }], 
    FEEDBACK: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)
            Rating: "true",
            MultipleRowSelection: "true",
            AllowRowDrag: "true",
            AllowCSVExport: "true"
        }],
        Columns: [{
            'Asset Name,AssetName,,,,,,': ''
        }, {
            'Product,Product,': ''
        }, {
            'Download Date,DownloadDate,': ''
        }, {
            'Rating,Rating,': ''
        }
        ]
    }],
    FEEDBACKLIMITED: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)
            Rating: "true",
        }],
        Columns: [
            { 'Download Date,DownloadDate,': '' },
            { 'Is Reused,IsDocumentUsed,': '' },
            { 'Usefulness,Usefulness,': '' },            
            { 'Quality Rating,QualityRating,': '' },
            { 'Actual Effort To Produce With Reusable Asset,ActualTimeToComplete,': '' },
            { 'Feedback Comments,FeedbackComments,': '' }
        ]
    }],
    USERFEEDBACKRATING: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)
            // AvgRating: "true",
            AllowMasterDetail: "true",
            GridHeight: "350",
            DetailGridColumn: "AssetName",
            ChildGrideventColumns: "AssetName",
            ChildOptions: [{
            }],
            ChildColumn: [
                { 'Signum,Signum,': '' },
                { 'Feedback Status,Status,': '' },
                { 'Download Date,DownloadDate,': '' },
                { 'Is Reused,IsDocumentUsed,': '' },
                { 'Quality Rating,QualityRating,': '' },
                { 'Actual Effort To Reuse,ActualEffortToReUse,IsNumeric,': '' },
                { 'Actual Percentage Of Reuse,ActualPercentageOfReUse,IsNumeric,': '' },
                { 'Feedback Comments,FeedbackComments,': '' }
            ]
        }],
        Columns: [{
            'Asset Name,AssetName,': ''
        }, {
            'Product,Product,': ''
        }, {
            'Product Status,ProductStatus,': ''
        }, {
            'Average Rating,QualityRating,': ''
        },        
        ]
    }],
    PRODUCTASSETDOWNLOAD: [{
        Options: [{
            GridHeight: "350",
        }],
        Columns:
            [
                { 'Asset Name,AssetName,,ColSize,400,': '' },
                { 'Download Count,AssetCount,IsNumeric,': '' }
            ]
    }],
    ALL_UNUSED_ASSETS: [{
        Options: [{
            Audit: "true",
            GridHeight: "350",
            AllowExcelExport: "true",
            AllowCSVExport: "true",
        }],
        Columns: [
            { 'Asset Name,AssetName,': '' },
            { 'Framework,Framework,': '' },
            { 'Role,Role,': '' },
            { 'Knowledge Area,KnowledgeArea,': '' },
            { 'Product,Product,': '' },
            { 'Engagement Phase,EngagementPhase,': '' },
            { 'Last Download Date,DownloadDate,': '' }
        ]
    }],
    ANALYTICDETAIL: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)
            Save: "true",
            Share: "true",
        }],
        Columns: [
            {
                'Framework,Framework,': ''
            }, {
                'Role,Role,': ''
            }, {
                'Knowledge Area,KnowledgeArea,': ''
            }, {
                'Product,Product,,ColSize,220,': ''
            }, {
                'Engagement Phase,EngagementPhase,': ''
            }, {
                'Search Date,UpdateDate,': ''
            }
        ]
    }],
    ASSETRATING: [{
        Options: [{
            Rating: "true",
            GridHeight: "330",
            AllowMasterDetail: "true",
            DetailGridColumn: "AssetName",
            ChildGrideventColumns: "AssetName",
            ChildOptions: [{
            }],
            ChildColumn: [
                { 'Download Date,DownloadDate,': '' },
                { 'Signum,Signum,': '' }                
            ]
        }],
        Columns: [
            {
                'Asset Name,AssetName,': ''
            },
            {
                'Asset Rating,Rating,': ''
            },
        ]
    }],
    MANAGEFRAMEWORK: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)            
            EditMasterData: "true",
            Activate: "true",
            SortOrder: "true",
            EditTourClass: "tourMDMEditFrameworkbtngrid",
            GridHeight: "300px",
        }],
        Columns: [{
            'ID,FrameworkId,': ''
        }, {
            'Name,FrameworkName,': ''
        }]
    }],
    MANAGEPRODUCT: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)            
            EditMasterData: "true",
            Activate: "true",
            SortOrder: "true",
            Config: "true",
            GridHeight: "300px",
        }],
        Columns: [{
            'ID,ProductId,': ''
        }, {
            'Name,ProductName,': ''
        }
            , {
            'Product Number,ProductNumber,': ''
        },
        {
            'Product Owner,ProductOwner,': ''
        },
        {
            'Product Status,ProductStatusName,': ''
        }
        ]
    }],
    MANAGEROLE: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)            
            EditMasterData: "true",
            Activate: "true",
            SortOrder: "true",
            GridHeight: "300px",
        }],
        Columns: [{
            'ID,RoleId,': ''
        }, {
            'Name,RoleName,': ''
        }]
    }],
    MANAGEKNOWLEDGEAREA: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)            
            EditMasterData: "true",
            Activate: "true",
            SortOrder: "true",
            GridHeight: "300px",
        }],
        Columns: [{
            'ID,KnowledgeAreaId,': ''
        }, {
            'Name,KnowledgeAreaName,': ''
        }]
    }],
    MANAGEENGAGEMENTPHASEGROUP: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)            
            EditMasterData: "true",
            Activate: "true",
            SortOrder: "true",
            GridHeight: "300px",
        }],
        Columns: [{
            'ID,EngagementPhaseGroupId,': ''
        }, {
            'Name,EngagementPhaseGroupName,': ''
        }]
    }],
    MANAGEENGAGEMENTPHASE: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)            
            EditMasterData: "true",
            Activate: "true",
            SortOrder: "true",
            GridHeight: "300px",
        }],
        Columns: [{
            'ID,EngagementPhaseId,': ''
        },
        {
            'Engagement Phase Group,EngagementPhaseGroupName,': ''
        },
        {
            'Engagement Phase,EngagementPhaseName,': ''
        },
        {
            'Engagement Phase Type,EngagementPhaseTypeName,': ''
        }
        ]
    }],
    MANAGESOURCE: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)            
            EditMasterData: "true",
            Activate: "true",
            SortOrder: "true",
            GridHeight: "300px",
        }],
        Columns: [{
            'ID,SourceId,': ''
        }, {
            'Name,SourceName,': ''
        }]
    }],
    MANAGELANGUAGE: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)            
            EditMasterData: "true",
            //ActivateTranslate: "true",
            Activate: "true",
            SortOrder: "true",
            GridHeight: "300px",
        }],
        Columns: [{
            'ID,LanguageId,': ''
        }, {
            'Name,LanguageName,': ''
        }, {
            'Abbreviation,Abbreviation,': ''
        }, {
            'Translation Available,TranslationAvailable,': ''
        }            
    ]
    }],

    MANAGEINDEXDETAILS: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)            
           // EditMasterData: "true",
            //ActivateTranslate: "true",
            Activate: "true",
            //SortOrder: "true",
            GridHeight: "300px",
        }],
        Columns: [{
            'ID,IndexId,': ''
        }, {
            'Unique Index Name,IndexName,': ''
        }, {
            'Repository Ownership,OwnershipName,': ''
        }, {
            'Repository URL,FolderPath,,ColSize,300,': ''
        }, {
            'Created By,CreatedBy,': ''
            }
        ]
    }],
    MANAGESAVINGMETHOD: [{
        Options: [{
            GridHeight: "300px",
        }],
        Columns: [
            { 'ID,SavingMethodId,': '' },
            { 'Saving Method,SavingMethodDescription,': '' }
        ]
    }],

    MANAGEASSETFILETYPE: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)            
            EditMasterData: "true",
            Activate: "true",
            SortOrder: "true",
            GridHeight: "300px",
        }],
        Columns: [{
            'ID,FileTypeId,': ''
        }, {
            'Type,FileType,': ''
            }]
    }],

    MANAGEASSETSTATUS: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)            
            EditMasterData: "true",
            Activate: "true",
            SortOrder: "true",
            GridHeight: "300px",
        }],
        Columns: [{
            'ID,AssetStatusId,': ''
        }, {
            'Name,AssetStatusName,': ''
        }]
    }],
    SUPPORTANDFEEDBACK: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)
            //Edit: "true",
            Delete: "true",
        }],
        Columns: [{
            'Support ID,FeedbackSupportId,': ''
        }, {
            'Submitted By,SubmittedBySignum,': ''
        }, {
            'Submitted Date,SubmittedDate,': ''
        }, {
            'Description,FeedbackSupportText,': ''
        }, {
            'Support Status,FeedbackSupportStatus,': ''
        }
        ]
    }],

    SAVINGSACHIEVED: [{
        Options: [{
            GridHeight: "350",
        }],
       /* Columns: [
            { 'Asset Name,AssetName,': '' },
            { 'Asset Owner,AssetOwnerName,': '' },
            { 'Potential Saving Per Reuse (mhrs),AssetPotentialSavings,IsNumeric,': '' },
            { 'Estimated Reuse Per Year,AssetEstimatedUsePerYear,IsNumeric,': '' },
            { 'Download Count,DownloadCount,IsNumeric,': '' },
            { 'Total Saving Achieved (mhrs),AssetPerceivedSaving,IsNumeric,': '' },
        ]*/

          Columns: [
            { 'Asset Name,AssetName,': '' },
            { 'Owner,AssetOwnerName,': '' },
            { 'Expected Effort Saving per Re-Use,ExpectedSavingPerReuse,IsNumeric,': '' },
            { 'Expected Life-cycle Effort Saving,ExpectedLifecycleSaving,IsNumeric,': '' },
            { 'Download Count,DownloadCount,IsNumeric,': '' },
            { 'Actual Number of Re-Uses,AssetActualReuseCount,IsNumeric,': '' },
            { 'Actual Life-cycle Effort Saving,AssetPerceivedSaving,IsNumeric,': '' },
        ]
    }],
    PROJECTCPAPSUMMARY: [{
        Options: [{
        }],
        Columns: [
            { 'CPAP,CPAP,': '' },     
            { 'Engagement,EngagementName, ': '' },
            { 'Download Count,DownloadCount, ': '' },        
            { 'Reused Count,ReuseCount,IsNumeric,': '' },
            { 'Total Saving (mhrs),Saving,IsNumeric,': '' }
        ]
    }],

    PROJECTDETAILS: [{
        Options: [{
        }],
        Columns: [
            { 'Asset Name,AssetName,': '' },
            { 'Downloader,Downloader, ': '' },
            { 'Case Effort To Complete,CaseEffortToComplete,IsNumeric,': '' },
            { 'Percent Of Reuse,PercentOfReuse,IsNumeric,': '' },
            { 'Total Saving (mhrs),Saving,IsNumeric,': '' }
        ]
    }],

    PROJECTCPAPNOASSET: [{
        Options: [{
        }],
        Columns: [
            { 'CPAP,CPAP,': '' },
            { 'Customer Unit,CPAPCustUnit, ': '' },
            { 'Global Customer Unit,CPAPGlobalCustUnit, ': '' }
        ]
    }],
    PROJECTFASSUMMARY: [{
        Options: [{
        }],
        Columns: [
            { 'FAS,FAS,': '' },
            { 'Engagement,EngagementName, ': '' },
            { 'Download Count,DownloadCount, ': '' },
            { 'Reused Count,ReuseCount,IsNumeric,': '' },
            { 'Total Saving (mhrs),Saving,IsNumeric,': '' }
        ]
    }],
    PROJECTOPPORTUNITYSUMMARY: [{
        Options: [{
        }],
        Columns: [
            { 'Opportunity,Opportunity,': '' },
            { 'Engagement,EngagementName, ': '' },
            { 'Download Count,DownloadCount, ': '' },
            { 'Reused Count,ReuseCount,IsNumeric,': '' },
            { 'Total Saving (mhrs),Saving,IsNumeric,': '' }
        ]
    }],

    PROJECTEBCSUMMARY: [{
        Options: [{
        }],
        Columns: [
           
            { 'Engagement,EngagementName, ': '' },
            { 'Opportunity,Opportunity,': '' },
            { 'CPAP,CPAP,': '' },
            { 'FAS,FAS,': '' },
            { 'Download Count,DownloadCount, ': '' },
            { 'Reused Count,ReuseCount,IsNumeric,': '' },
            { 'Total Saving (mhrs),Saving,IsNumeric,': '' }
        ]
    }],
    PROJECTFASNOASSET: [{
        Options: [{
        }],
        Columns: [
            { 'FAS,FAS,': '' },
            { 'FAS CPAP Name,FASCpapName,': '' },
            { 'FAS Status,FASStatus,': '' }
        ]
    }],

    REALATEDASSETGROUP: [{
        Options: [{
            Navigate: "true",
            RelatChild: "true",
            GridHeight: "330",
        }],
        Columns: [{
            'ID,PortfolioId,,ColSize,80,': ''
        }, {
            'Asset Name,Title,,ColSize,300,': ''
        }, {
            'Role,AssetRoleText,,ColSize,150,': ''
        }, {
            'Notes,AssetGroupDescription,,ColSize,180,': ''
        }]
    }],

    PRODUCTCOUNTS: [{
        Options: [{
            GridHeight: "350",
        }],
        Columns: [{
            'Product Name,ProductName,,ColSize,250,,left,,,,': ''
        }, {
            'Product Number,ProductNumber,,,,,left,,,,': ''
        }, {
            'Product Status,ProductStatusName,,ColSize,150,': ''
        }, {
            'Product Owner,ProductOwner,,ColSize,200,': ''
        }, {
            'Total,Total,IsNumeric,ColSize,120,': ''
        }, {
            'Approved,approvedAssets,IsNumeric,ColSize,120,': ''
        }, {
            'Pending Approval,pendingApprovalAssets,IsNumeric,ColSize,160,': ''
        }, {
            'ToWork,UnpublishedAssets,IsNumeric,ColSize,120,': ''
        }, {
            'Rejected,RejectedAssets,IsNumeric,ColSize,120,': ''
        }, {
            'Missing,MissingAssets,IsNumeric,ColSize,120,': ''
        }, {
            'Aged,AgedAssets,IsNumeric,ColSize,80,': ''
        }, {
            'Retired,RetiredAssets,IsNumeric,ColSize,120,': ''
        }]
    }],
    PRODUCTTREEHOME: [{
        Options: [{
            ApplyTree: "true",
            AutoGroupName: "Product",
            SelectUniqueColumn: "ProdID",
            GridHeight: "295px",
        }],
        Columns: [
            {
                'Select All,ParentProdID,,,,': ''
            },
            {
                'Product Number,ProdNumber,,,110,': ''
            },
            {
                'Product Owner,ProdOwner,,,150,': ''
            },
            {
                'Product Status,ProductStatusName,,,90,': ''
            },
            {
                'Cumulative Asset Count,CumulativeAssetCount,,,140,': ''
            }
        ]
    }],
    PRODUCTTREEMOBILE: [{
        Options: [{
            ApplyTree: "true",
            AutoGroupName: "Product",
            SelectUniqueColumn: "ProdID"
        }],
        Columns: [
            {
                ',ParentProdID,,,,': ''
            },
            {
                'Product Number,ProdNumber,,,,': ''
            }
        ]
    }],
    PRODUCTTREE: [{
        Options: [{
            ApplyTree: "true",
            AutoGroupName: "Product",
            SelectUniqueColumn: "ProdID",
            GridHeight: "550px",
        }],
        Columns: [
            {
                'Select All,ParentProdID,,,,': ''
            },
            {
                'Product Number,ProdNumber,,,100,': ''
            },
            {
                'Product Owner,ProdOwner,,,160,': ''
            },
            {
                'Product Status,ProductStatusName,,,90,': ''
            }
        ]
    }],

    MANAGEOWNERSHIP: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)            
            EditMasterData: "true",
            Activate: "true",
            SortOrder: "true",
            GridHeight: "300px",
        }],
        Columns: [{
            'ID,OwnershipId,': ''
        }, {
            'Ownership,OwnershipName,': ''
        }, {
            'Ownership Type,OwnershipTypeName,': ''
        }]
    }],

    ADDTOBOOKMARK: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)            
            SelectBookmark: "false",
            GridHeight: "300px"
        }],
        Columns: [{
            'Bookmark Name,BookmarkName,': ''
        }, {
            'Description,BookmarkDescription,,ColSize,250,': ''
        },
        {
            'Associated,Associated,,': ''
        }]
    }],
    FILEPARSINGMETHOD: [{
        Options: [{
            //Set Edit,delete, navigate,share parameter as true if want to include in grid. Remove from here if dont want to show in grid(setting false wont work)            
            EditMasterData: "true",
            Activate: "true",
            SortOrder: "true",
            GridHeight: "300px",
        }],
        Columns: [{
            'ID,FileTypeId,': ''
        }, {
            'Type,FileType,': ''
        }]
    }],
}