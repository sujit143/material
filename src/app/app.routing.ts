import { RouterModule, Routes } from '@angular/router';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { EdituserComponent } from './userdisplay/edituser/edituser.component';
import { MainNavComponent } from './main-nav/main-nav.component';



const arr : Routes=[

  {path:'',component:UserdisplayComponent},
  {path:'main-nav', component:MainNavComponent},
    {path:'edituser/:user_email', component:EdituserComponent}

];

export const routing=RouterModule.forRoot(arr);
