import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainFormComponent } from './main-form/main-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MainDragdropComponent } from './main-dragdrop/main-dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MainTableComponent } from './main-table/main-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { HttpClientModule } from '@angular/common/http';
import { EdituserComponent } from './userdisplay/edituser/edituser.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainFormComponent,
    MainDragdropComponent,
    MainTableComponent,
    UserdisplayComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    DragDropModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    HttpClientModule,
    routing




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
