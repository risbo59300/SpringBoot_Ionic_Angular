import { TodoComponent } from './todo.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@
NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [TodoComponent],
  exports: [TodoComponent],
})
export class TodoComponentModule {}


