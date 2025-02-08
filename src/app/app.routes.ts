import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {VrijwilligersComponent} from "./components/vrijwilligers/vrijwilligers.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'vrijwilligers',
        component: VrijwilligersComponent
      }
    ]
  }
];
