import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

declare const $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    // tslint:disable-next-line:variable-name
    constructor(
        public router: Router,
        private renderer: Renderer2,
    ) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                const url = event['url'];
                if (url === '/') {
                    console.log('login');
                    this.renderer.addClass(document.body, 'layout-login');
                } else if (url === '/list') {
                    this.renderer.addClass(document.body, 'sticky-footer');
                    this.renderer.removeClass(document.body, 'layout-login');
                } else {
                    console.log('everything else');
                    this.renderer.removeClass(document.body, 'layout-login');
                }
            }
        });
    }

    ngOnInit() {
        // $('[data-toggle="tooltip"]').tooltip();
    }
}
