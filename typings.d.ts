declare module '@eds/*' {
    export class Gauge {
        constructor(element: HTMLElement);
        init();
        dom: Object;
    }
    export class Datepicker {
        constructor(element: HTMLElement);
        init();
        dom: Object;
    }
    export class Calendar {
        constructor(element: HTMLElement);
        init();
        dom: Object;
    }
}