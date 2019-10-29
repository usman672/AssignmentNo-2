import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'technology-list',
  children: [
    {
      path: '',
      loadChildren:
        './technology-list/technology-list.module#TechnologyListPageModule'
    },
    {
      path: ':movieyear',
      loadChildren: './technology/technology.module#TechnologyPageModule'
    }
  ]
},
  
  { path: 'add-new', loadChildren: './add-new/add-new.module#AddNewPageModule' },
  { path: 'technology-list', loadChildren: './technology-list/technology-list.module#TechnologyListPageModule' },
  { path: 'technology', loadChildren: './technology/technology.module#TechnologyPageModule' }
   //loadChildren: './movies-list/movies-list.module#MoviesListPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
