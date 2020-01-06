import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesarrollosComponent } from './desarrollos/desarrollos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatTabsModule, MatFormField, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatTableModule, } from '@angular/material';
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
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardSucursalesComponent } from './dashboard-sucursales/dashboard-sucursales.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DashboardSucursalComponent } from './dashboard-sucursal/dashboard-sucursal.component';
import { DialogAddConsultorComponent } from './dashboard-sucursal/dialog-add-consultor/dialog-add-consultor.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StickComponent } from './stick/stick.component';
import { DashboardPropiedadesComponent } from './dashboard-propiedades/dashboard-propiedades.component';
import { PreviewComponent } from './home/preview/preview.component';
import { DashboardPropiedadComponent } from './dashboard-propiedad/dashboard-propiedad.component';
import { DialogAgregarPropiedadComponent } from './dashboard-propiedades/dialog-agregar-propiedad/dialog-agregar-propiedad.component';
import { DashboardBuzonComponent } from './dashboard-buzon/dashboard-buzon.component';
import { DashboardBitacoraComponent } from './dashboard-bitacora/dashboard-bitacora.component';
// import { NgxSpinnerModule } from 'ngx-spinner';
import { DialogAddNoteComponent } from './dashboard-bitacora/dialog-add-note/dialog-add-note.component';
import { DialogSendEmailComponent } from './dashboard-buzon/dialog-send-email/dialog-send-email.component';
// import { CarouselDirective } from './about-us/carousel.directive';
import { NewsletterComponent } from './newsletter/newsletter.component';

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
    DashboardComponent,
    LoginComponent,
    DashboardSucursalesComponent,
    DashboardSucursalComponent,
    DialogAddConsultorComponent,
    PreviewComponent,
    StickComponent,
    DashboardPropiedadesComponent,
    DashboardPropiedadComponent,
    DialogAgregarPropiedadComponent,
    DashboardBuzonComponent,
    DashboardBitacoraComponent,
    DialogAddNoteComponent,
    DialogSendEmailComponent,
    NewsletterComponent
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
    MatTableModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    FlexLayoutModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBRJy3OD4q4_BAx__3fZGlEXGwQHMB5YU4'
    })
  ],
  providers: [],
  entryComponents:[
    DialogAddConsultorComponent,
    PreviewComponent,
    DialogAgregarPropiedadComponent,
    DialogAddNoteComponent,
    NewsletterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
