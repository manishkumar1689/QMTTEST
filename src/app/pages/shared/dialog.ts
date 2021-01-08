import { Component, OnDestroy } from "@angular/core";
//import { ICellRendererAngularComp } from 'ag-grid-angular/public-api';
import { Router } from "@angular/router";



@Component({
  selector: "btn-dialog",
  template: `
<div class="content" style="width:100%">
    <div class="top" style="margin-top: -16px; margin-left: -16px; margin-right: -16px; background-color: #0082f0; color: white; height: 40px;">
      <div class="title" style="padding:10px"><ng-content select="[title]"></ng-content></div>
 
    </div>
    <div class="body">
      <ng-content select="[body]"></ng-content>
    </div>
    <div class="bottom">
 <ng-content select="[bottom]"></ng-content>
  
    </div>
  </div>
  `
})
export class DialogTest implements OnDestroy {
    refresh(params: any): boolean {
        throw new Error("Method not implemented.");
    }
    afterGuiAttached?(params?: import("ag-grid-community").IAfterGuiAttachedParams): void {
        throw new Error("Method not implemented.");
    }
  private params: any;
  constructor(private router: Router) {}
  agInit(params: any): void {
    this.params = params;
  }

  btnEditHandler(data) {
    debugger;
    this.params.clicked(this.params.data.userSignum);
    this.router.navigate(['/dashboard/editProject', this.params.data.userSignum]);
  }
  btnSettingsHandler(data) {
    debugger;
    this.params.clicked(this.params.data.userSignum);
    this.router.navigate(['/dashboard/settingProject', this.params.data.userSignum]);
  }
  ngOnDestroy() {
    // no need to remove the button click handler
    // https://stackoverflow.com/questions/49083993/does-angular-automatically-remove-template-event-listeners
  }
}
