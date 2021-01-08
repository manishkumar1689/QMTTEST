export class TableSelectable {

  constructor(element){
    this.dom = {
      table: element,
      rows: element.querySelectorAll('tr'),
      bodyRows: element.querySelectorAll('tbody tr'),
      masterCheckbox: element.querySelector('thead input[type="checkbox"]')
    };
    this.listeners = {
      clickBodyRow: (row) => {
        this.toggleRowCheckbox(row);
        this.setMasterCheckboxState();
      },
      clickMasterCheckbox: () => {
        this.toggleAllCheckboxes();
        this.setMasterCheckboxState();
      }
    };
    this.settings = {
      selectRowOnFirstTDClick: true
    }
    this.events = {
      tableRowsSelected: new CustomEvent('tableRowsSelected', {
        detail: { body: undefined, selected: undefined }
      }),
    }
  }

  init(){
    this.setMasterCheckboxState();
    this.eventHandler();
  }

  destroy(){
    this.removeEventHandler();
  }

  eventHandler(){
    if(this.isSelectable()){
      Array.from(this.dom.bodyRows).forEach( bodyRow => {
        if(this.settings.selectRowOnFirstTDClick){
          let checkboxTD = bodyRow.querySelector('td');
          checkboxTD.addEventListener('click', () => this.listeners.clickBodyRow(bodyRow), false);
        }else {
          bodyRow.addEventListener('click', () => this.listeners.clickBodyRow(bodyRow), false);
        }
      });
      this.dom.masterCheckbox.addEventListener('click', () => this.listeners.clickMasterCheckbox(), false);
    }
  }

  removeEventHandler(){
    if(this.isSelectable()){
      Array.from(this.dom.bodyRows).forEach( bodyRow => {
        if(this.settings.selectRowOnFirstTDClick){
          let checkboxTD = bodyRow.querySelectorAll('td')[0];
          checkboxTD.removeEventListener('click', () => this.listeners.clickBodyRow(bodyRow), false);
        }else {
          bodyRow.removeEventListener('click', () => this.listeners.clickBodyRow(bodyRow), false);
        }
      });
      this.dom.masterCheckbox.removeEventListener('click', () => this.listeners.clickMasterCheckbox(), false);
    }
  }

  toggleRowCheckbox(row){
    if(row.classList.contains('selected')){
      this.unselectRow(row);
    }else{
      this.selectRow(row);
    }
  }

  toggleAllCheckboxes(){
    Array.from(this.dom.bodyRows).forEach( brow => {
      if(this.dom.masterCheckbox.checked){
        this.selectRow(brow);
      }else {
        this.unselectRow(brow);
      }
    });
  }

  setMasterCheckboxState(){
    const numBodyRows = this.getNumberOfRows();
    const numCheckedRows = this.getNumberOfSelectedRows();
    this.dom.masterCheckbox.checked = numCheckedRows > 0;
    this.dom.masterCheckbox.indeterminate = numCheckedRows > 0 && numCheckedRows < numBodyRows;
  }

  getNumberOfSelectedRows(){
    const n = this.dom.table.querySelectorAll('tbody input[type="checkbox"]:checked').length;
    this.events.tableRowsSelected.detail.body = this.getNumberOfRows();
    this.events.tableRowsSelected.detail.selected = n;
    document.dispatchEvent(this.events.tableRowsSelected);
    return n;
  }

  getNumberOfRows(){
    return Array.from(this.dom.bodyRows).length;
  }

  selectRow(row){
    const checkbox = row.querySelector('input[type="checkbox"]');
    row.classList.add('selected');
    checkbox.checked = true;
  }

  unselectRow(row){
    const checkbox = row.querySelector('input[type="checkbox"]');
    row.classList.remove('selected');
    checkbox.checked = false;
  }

  // Returns true if the table contains the 'selectable' class
  isSelectable(){
    if(this.dom.table.classList.contains('selectable')){
      return true;
    }else {
      return false;
    }
  }

}
