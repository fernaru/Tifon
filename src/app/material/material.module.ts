import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatFormFieldModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatToolbarModule
  ],
  exports: [
    MatFormFieldModule,
    MatToolbarModule
  ],
})
export class MaterialModule { }
