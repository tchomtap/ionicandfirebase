import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentPage } from './component';
import { UserDefinedComponent } from '../../components/user-defined/user-defined';
import { UserDefinedInputOutputComponent } from '../../components/user-defined-input-output/user-defined-input-output';

@NgModule({
  declarations: [
    ComponentPage,
    UserDefinedComponent,
    UserDefinedInputOutputComponent
  ],
  imports: [
    IonicPageModule.forChild(ComponentPage),
  ],
  exports: [
    ComponentPage
  ]
})
export class ComponentPageModule {}
