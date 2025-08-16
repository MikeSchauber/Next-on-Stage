import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalService } from './services/modal.service';
import { CrudManagerService } from './services/crud-manager.service';
import { AddFestivalModalComponent } from './add-festival-modal/add-festival-modal.component';
import { EditLineupModalComponent } from './edit-lineup-modal/edit-lineup-modal.component';
import { Festival } from './interfaces/formulare';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    AddFestivalModalComponent,
    EditLineupModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nextOnStage';
  constructor(
    public modalService: ModalService,
    public crudManager: CrudManagerService
  ) {}

  get activeFestival(): Festival | null {
    return this.crudManager.activeFestival;
  }
}
