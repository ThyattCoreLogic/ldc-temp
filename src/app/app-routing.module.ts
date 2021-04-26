import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailsComponent} from './_@pages/details/details.component';
import {LoginComponent} from './_@pages/login/login.component';
import {ListComponent} from './_@pages/list/list.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'details',
        component: DetailsComponent,
    },
    {
        path: 'list',
        component: ListComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
