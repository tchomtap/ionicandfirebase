import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StructurePage } from './structure';
import { StructureComponentIonicComponent } from '../../components/structure-component-ionic/structure-component-ionic';
import { StructurePipeIonicPipe } from '../../pipes/structure-pipe-ionic/structure-pipe-ionic';
import { StructureDirectiveIonicDirective } from '../../directives/structure-directive-ionic/structure-directive-ionic';

@NgModule({
  declarations: [
    StructurePage,
    StructureComponentIonicComponent,
    StructurePipeIonicPipe,
    StructureDirectiveIonicDirective
  ],
  imports: [
    IonicPageModule.forChild(StructurePage),
  ],
  exports: [
    StructurePage
  ]
})
export class StructurePageModule {}
