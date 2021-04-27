import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EnsembleAngular} from '@corelogic/ensemble-angular';
import { AgGridModule } from 'ag-grid-angular';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { MainNavComponent } from './_@shared/main-nav/main-nav.component';
import { DetailsComponent } from './_@pages/details/details.component';
import { LoginComponent } from './_@pages/login/login.component';
import { FooterComponent } from './_@shared/footer/footer.component';
import { ListComponent } from './_@pages/list/list.component';

@NgModule({
    declarations: [
        AppComponent,
        MainNavComponent,
        DetailsComponent,
        LoginComponent,
        FooterComponent,
        ListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        EnsembleAngular,
        AgGridModule.withComponents([])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
