import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesarrollosComponent } from './desarrollos/desarrollos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatTabsModule, MatFormField, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatTableModule, MatSelectModule, MatRadioModule } from '@angular/material';
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
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { StickComponent } from './stick/stick.component';
import { PreviewComponent } from './home/preview/preview.component';
import { PreviewComponentProperties } from './properties/preview/preview.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SliderModule } from 'angular-image-slider';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { DialogSeeMoreComponent } from './about-us/dialog-see-more/dialog-see-more.component';
import { AvisoPrivacidadComponent } from './aviso-privacidad/aviso-privacidad.component';

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
    PreviewComponent,
    PreviewComponentProperties,
    StickComponent,
    NewsletterComponent,
    DialogSeeMoreComponent,
    AvisoPrivacidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SliderModule,
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
    MatTableModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSelectModule,
    MatRadioModule,
    MatCarouselModule.forRoot(),
    MatCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBRJy3OD4q4_BAx__3fZGlEXGwQHMB5YU4'
    }),
  ],
  exports: [
    MatCarouselModule
  ],
  providers: [],
  entryComponents:[
    PreviewComponent,
    PreviewComponentProperties,
    NewsletterComponent,
    DialogSeeMoreComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
