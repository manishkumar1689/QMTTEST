import { Component, OnDestroy } from "@angular/core";
//import { ICellRendererAngularComp } from 'ag-grid-angular/public-api';
import { Router } from "@angular/router";



@Component({
  selector: "btn-cell-cross",
  template: `
<div>
 <div class="example">
         <span (click)="btnSettingsHandler($event)"><i  class="icon icon-cross"></i></span>
 </div>
</div>
  `
})
export class BtnCellCross implements  OnDestroy {
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
