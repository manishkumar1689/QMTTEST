import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router, RoutesRecognized, ActivatedRoute } from '@angular/router';

@Injectable({
providedIn: 'root'
})
export class AppBarService {

    private _title = new BehaviorSubject<string>('');
    private _subTitle = new BehaviorSubject<string>('');
    private _menuTitle = new BehaviorSubject<string>('Menu');

    public Title = this._title.asObservable();
    public SubTitle = this._subTitle.asObservable();
    public MenuTitle = this._menuTitle.asObservable();

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        router.events.subscribe(event => {
            if (event instanceof RoutesRecognized) {
                const route = event.state.root.firstChild;
                if(route.data.title)
                {
                    this._title.next(route.data.title);
                }
                if(route.data.subtitle)
                {
                    this._subTitle.next(route.data.subtitle);
                }
            }
        });
    }

    public SetTitle(text : string) : void
    {
        this._title.next(text);
    }

    public SetSubTitle(text : string) : void
    {
        this._subTitle.next(text);
    }

    public SetMenuTitle(text : string) : void
    {
        this._menuTitle.next(text);
    }
}