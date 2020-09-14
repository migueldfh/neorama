import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'neorama';
  @ViewChild(MatSidenavContainer, {static: true}) sidenavContainer: MatSidenavContainer;

  ngAfterViewInit() {
    this.sidenavContainer.scrollable.elementScrolled().subscribe(resp=>{
      console.log("afterview: ", resp);
    });
  }
}
