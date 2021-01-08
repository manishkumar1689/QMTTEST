import { Component, OnDestroy } from "@angular/core";
//import { ICellRendererAngularComp } from 'ag-grid-angular/public-api';
import { Router } from "@angular/router";



@Component({
  selector: "btn-cell-edit",
  template: `
<div>
 
 <div class="example">
         <span (click)="btnEditHandler($event)"><i  class="icon icon-edit"></i></span>
 </div>
</div>
  `
})
export class BtnCellEdit implements  OnDestroy {
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
    this.router.navigate(['/dashboard/editGroup', this.params.data.userSignum]);
  }
  btnDeleteHandler(data) {
    debugger;
    this.params.clicked(this.params.data.userSignum);
    this.router.navigate(['/dashboard/deleteGroup', this.params.data.userSignum]);
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
