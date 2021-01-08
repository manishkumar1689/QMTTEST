import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Constants } from './contants';
import {HttpClient} from '@angular/common/http'
var thatGlobalData;

@Injectable()
export class GlobalDataService {
    permissions: string[] = null;

    public static currentPageOperation: any;
    public static userRoleNavigator: any;
    public static userRoleGroupNavigator: any;
    public static GuidedTour: any;
	//all active Internationalization Languages
	public static allInternationalizationLanguages: any[] = [];
	//change on change in language
	public static internationalizationLanguage: any = {};
	//should get from DB before login
	public static internationalizationData: any;
	public static assetParametersGuidelineLink: string = '';
    public static FilterReusecase: boolean = false;
    public static BulkUploadFlag: any;
    public static PermissionsList: any;
    public static permissionListRequestStatus: any;
    public static floatingFilterValues: any[] = ['Framework', 'Role', 'KnowledgeArea', 'Product', 'EngagementPhaseGroup', 'EngagementPhase', 'FrameworkName', 'RoleName', 'KnowledgeAreaName', 'ProductName', 'EngagementPhaseGroupName', 'EngagementPhaseName'];
    public static PERMISSIONLISTREQUESTSTATUSPENDING: any = "PENDING";
    public static PERMISSIONLISTREQUESTSTATUSINPROGRESS: any = "IN-PROGRESS";
    public static PERMISSIONLISTREQUESTSTATUSDONE: any = "DONE";
    public static enablePrimeSettings: string = "false";
    public static isUserPrime: string = "false";

    public static rollingAverage: any;
    
    constructor(private http: HttpClient) {
        if (GlobalDataService.PermissionsList == "" || GlobalDataService.PermissionsList == null) {
            GlobalDataService.permissionListRequestStatus = GlobalDataService.PERMISSIONLISTREQUESTSTATUSPENDING;
        }
        thatGlobalData = this;
    }

    DisableTour() {
        GlobalDataService.GuidedTour = false;
    }

    StartTour() {
        GlobalDataService.GuidedTour = true;
    }

    public getCurrentPageOperation() {
        console.log("getCurrentPageOperation returning ", GlobalDataService.currentPageOperation);
        return GlobalDataService.currentPageOperation;
    }

    public setCurrentPageOperation(currentPageOperation) {
        console.log("setCurrentPageOperation setting ", currentPageOperation);
        GlobalDataService.currentPageOperation = currentPageOperation;
    }

    public getUserRoleNavigator() {
        return GlobalDataService.userRoleNavigator;
    }

    public setUserRoleNavigator(userRoleNavigator) {
        GlobalDataService.userRoleNavigator = userRoleNavigator;
    }

    public getUserRoleGroupNavigator() {
        return GlobalDataService.userRoleGroupNavigator;
    }

    public setUserRoleGroupNavigator(userRoleGroupNavigator) {
        GlobalDataService.userRoleGroupNavigator = userRoleGroupNavigator;
    }

    public getPermissionsList() {
        return GlobalDataService.PermissionsList;
    }

    public setPermissionsList(permissionsList) {
        GlobalDataService.permissionListRequestStatus = GlobalDataService.PERMISSIONLISTREQUESTSTATUSDONE;
        GlobalDataService.PermissionsList = permissionsList;
    }
    public getPermissionStatus() {
        console.log('current permission status is '+GlobalDataService.permissionListRequestStatus);
        if (GlobalDataService.permissionListRequestStatus == GlobalDataService.PERMISSIONLISTREQUESTSTATUSDONE)
            return true;
        else return false;
    }
    HasAccessForElementnew() {
        
        if (GlobalDataService.permissionListRequestStatus == GlobalDataService.PERMISSIONLISTREQUESTSTATUSPENDING) {
            console.log('GlobalDataService HasAccessForElementnew called STATUS:' + GlobalDataService.permissionListRequestStatus);
            GlobalDataService.permissionListRequestStatus = GlobalDataService.PERMISSIONLISTREQUESTSTATUSINPROGRESS;
        }
    }

    HasPermission(permission) {
        if (GlobalDataService.permissionListRequestStatus == GlobalDataService.PERMISSIONLISTREQUESTSTATUSDONE
            && GlobalDataService.PermissionsList != "") {
            if (GlobalDataService.PermissionsList.indexOf(permission) != -1)
                return true;
            else
                return false;
        } else {
            this.HasAccessForElementnew();
            return false;
        }
    }

    public setBulkUploadflag(currentflag) {
        if (currentflag == Constants.ASSETGROUP_PAGE.ASSETGROUP_UPLOAD) {
            GlobalDataService.BulkUploadFlag = currentflag;
        }
        else if (currentflag == Constants.OPPORTUNITY.OPPORTUNITY_UPLOAD) {
            GlobalDataService.BulkUploadFlag = currentflag;
        }
        else if (currentflag == Constants.REUSECASE.REUSECASE_UPLOAD) {
            GlobalDataService.BulkUploadFlag = currentflag;
        }
        else if (currentflag == Constants.MESSAGES.VIEW_ASSET_PAGE.PORTFOLIO_UPLOAD) {
            GlobalDataService.BulkUploadFlag = currentflag;
        }
        else {
            GlobalDataService.BulkUploadFlag = currentflag;
        }
        return GlobalDataService.BulkUploadFlag;
    }

    public getBulkuploadFlag() {
        return GlobalDataService.BulkUploadFlag;
    }

    public toTitleCase(str) {
        console.log("GlobalDataService toTitleCase ", str);
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
	
    public GetFilteredColumnName() {
        return GlobalDataService.floatingFilterValues;
    }
	
	//Function to get all active internationalization languages
	public getAllInternationalizationLanguages(){
		return GlobalDataService.allInternationalizationLanguages;
	}
	
	//Function to set all active internationalization languages
	public setAllInternationalizationLanguages(languages){
		if(languages.length != 0){
			GlobalDataService.allInternationalizationLanguages = languages;
		}
	}
	
	//Function to get current internationalization language
	public getInternationalizationLanguage(){
		if(GlobalDataService.internationalizationLanguage){
			return GlobalDataService.internationalizationLanguage;
		}
	}
	
	//Function to set current internationalization language
	public setInternationalizationLanguage(lang){
		if(lang){
			GlobalDataService.internationalizationLanguage = Object.assign({}, lang);
		}
	}
	
	//Function to get labels and tooltips internationalization data for all languages
	public getInternationalizationData(){
		if(GlobalDataService.internationalizationData){
			return GlobalDataService.internationalizationData;
		} else {
			return {};
		}
	}
	
	//Function to set labels and tooltips internationalization data for all languages
	public setInternationalizationData(data){
		if(data){
			GlobalDataService.internationalizationData = Object.assign({}, data);
		}
	}
	
	//Function to get Asset Parameters Guideline Link
	public getAssetParametersGuidelineLink(){
		return GlobalDataService.assetParametersGuidelineLink;
	}
	
	//Function to set Asset ParametersGuidelineLink
	public setAssetParametersGuidelineLink(linkData){
		GlobalDataService.assetParametersGuidelineLink = linkData;
    }

    public enablePrimeSettings(Data) {
        GlobalDataService.enablePrimeSettings = Data;
    }

    public setRollingAverage(Data) {
        GlobalDataService.rollingAverage = Data;
    }    
}
