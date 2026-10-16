import { Routes } from '@angular/router';

import { MainLayout } from './layouts/main-layout/main-layout';
import { Home } from './pages/home/home';
import { ProperitePage } from './pages/properite-page/properite-page';
import { ProperiteDetails } from './pages/properite-details/properite-details';
import { ContactHome } from './pages/contact-home/contact-home';


export const routes: Routes = [

  {
    path: '',
    component: MainLayout,

    children: [

      {
        path: '',
        component: Home
      },

      {
        path: 'properitePage',
        component: ProperitePage
      },

      {
        path: 'properiteDetails',
        component: ProperiteDetails
      },

      {
        path: 'contactHome',
        component: ContactHome
      }

    ]
  }

];