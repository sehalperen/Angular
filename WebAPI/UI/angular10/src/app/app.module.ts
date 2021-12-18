import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerpersComponent } from './customerpers/customerpers.component';
import { ShowCusComponent } from './customerpers/show-cus/show-cus.component';
import { AddEditCusComponent } from './customerpers/add-edit-cus/add-edit-cus.component';
import { DetailsComponent } from './details/details.component';
import { ShowDetComponent } from './details/show-det/show-det.component';
import { AddEditDetComponent } from './details/add-edit-det/add-edit-det.component';
import { SharedService } from './shared.service';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerpersComponent,
    ShowCusComponent,
    AddEditCusComponent,
    DetailsComponent,
    ShowDetComponent,
    AddEditDetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
