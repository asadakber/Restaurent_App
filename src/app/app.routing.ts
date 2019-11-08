import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AppetizersComponent } from './components/appetizers/appetizers.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SidesComponent } from './components/sides/sides.component';
import { DessertsComponent } from './components/desserts/desserts.component';
import { MainCourseComponent } from './components/main-course/main-course.component';
import { SaladsComponent } from './components/salads/salads.component';
import { EventsComponent } from './components/events/events.component';
import { BloodyComponent } from './pages/bloody/bloody.component';
import { MacroComponent } from './pages/macro/macro.component';
import { SummerComponent } from './pages/summer/summer.component';
import { CocktailComponent } from './pages/cocktail/cocktail.component';
import { AlbumComponent } from './components/album/album.component';

export const router: Routes = [
   {
       path: '',
       redirectTo: 'home',
       pathMatch: 'full'
   },

   {
       path: 'home',
       component: HomeComponent
   },

   {
        path: 'appetizers',
        component: AppetizersComponent
   },

   {
        path: 'category',
        component: CategoriesComponent
   },

   {
        path: 'sides',
        component: SidesComponent
   },

   {
        path: 'desserts',
        component: DessertsComponent
   },

   {
        path: 'maincourse',
        component: MainCourseComponent
   },

   {
        path: 'salads',
        component: SaladsComponent
   },

   {
        path: 'events',
        component: EventsComponent
    },

    {
        path: 'bloody',
        component: BloodyComponent
    },

    {
        path: 'macro',
        component: MacroComponent
    },

    {
        path: 'summer',
        component: SummerComponent
    },

    {
        path: 'cocktail',
        component: CocktailComponent
    },

    {
        path: 'album',
        component: AlbumComponent
    },

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router)