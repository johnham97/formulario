import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  exports: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UsuariosModule { }
