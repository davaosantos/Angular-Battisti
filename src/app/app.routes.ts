import { Routes , RouterModule} from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { NgModule, Pipe } from '@angular/core';

export const routes: Routes = [
    {path : '', component : FirstComponentComponent},
    {path : 'list', component : ListRenderComponent},
    {path : 'pipes', component : Pipe}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
