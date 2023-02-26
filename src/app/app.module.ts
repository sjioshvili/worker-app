import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataModule } from './pages/data/data.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, AppRoutingModule, DataModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
