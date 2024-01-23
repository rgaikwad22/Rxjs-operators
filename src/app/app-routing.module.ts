import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { AsyncawaitComponent } from './asyncawait/asyncawait.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';

const routes: Routes = [
  {path: 'promise', component: PromiseComponent},
  {path: 'observable', component: ObservableComponent, children: [
    {path: '', component: ListComponent},
    {path: 'from-event', component: FromEventComponent},
    {path: 'interval', component: IntervalComponent},
    {path: 'of-from', component: OfFromComponent}
  ]},
  {path: 'asyncawait', component: AsyncawaitComponent},
  {path: '**', redirectTo: 'promise'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }