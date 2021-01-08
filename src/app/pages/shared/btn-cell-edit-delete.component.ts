import { Component, OnDestroy } from "@angular/core";
//import { ICellRendererAngularComp } from 'ag-grid-angular/public-api';
import { Router } from "@angular/router";



@Component({
  selector: "btn-cell-edit-delete",
  template: `
<div>
 
 <div class="example">
        <span (click)="btnEditHandler($event)"><i  class="icon icon-edit"></i></span><span (click)="btnDeleteHandler($event)" style="margin-left:4px"><i  class="icon icon-trashcan"></i></span>
</div>
</div>
  `
})
export class BtnCellEditDelete implements OnDestroy {
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
    this.params.clicked(this.params.data.signum);
    this.router.navigate(['/usermanagement/group/edit', this.params.data.signum]);
  }
  btnDeleteHandler(data) {
    debugger;
    this.params.clicked(this.params.data.signum);
    this.router.navigate(['/usermanagement/delete', this.params.data.signum]);
  }

  ngOnDestroy() {
    // no need to remove the button click handler
    // https://stackoverflow.com/questions/49083993/does-angular-automatically-remove-template-event-listeners
  }
}
