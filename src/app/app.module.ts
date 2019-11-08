import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppetizersComponent,
    CategoriesComponent,
    SidesComponent,
    DessertsComponent,
    MainCourseComponent,
    SaladsComponent,
    EventsComponent,
    BloodyComponent,
    MacroComponent,
    SummerComponent,
    CocktailComponent,
    AlbumComponent,
    
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
