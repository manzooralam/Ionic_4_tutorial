import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab3Page } from './tab3.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { FormsModule, FormBuilder, ControlContainer, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  providers:[ ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
