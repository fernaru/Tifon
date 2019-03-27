import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatFormFieldModule, MatInputModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatToolbarModule
  ],
  exports: [
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule
  ],
})
export class MaterialModule { }
