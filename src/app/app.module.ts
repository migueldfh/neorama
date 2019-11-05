import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesarrollosComponent } from './desarrollos/desarrollos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatTabsModule, MatFormField, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { MenuComponent } from './menu/menu.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PropertiesComponent } from './properties/properties.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    DesarrollosComponent,
    MenuComponent,
    HomeComponent,
    AboutUsComponent,
    PropertiesComponent,
    FooterComponent,
    ServicesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule, 
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBRJy3OD4q4_BAx__3fZGlEXGwQHMB5YU4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
