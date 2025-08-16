import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../services/modal.service';
import { CrudManagerService } from '../services/crud-manager.service';

@Component({
  selector: 'app-edit-lineup-modal',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-lineup-modal.component.html',
  styleUrl: './edit-lineup-modal.component.scss',
})
export class EditLineupModalComponent {
  constructor(
    public modalService: ModalService,
    public crudManager: CrudManagerService
  ) {
    this.sortLineUp();
  }

  sortLineUp() {
    // Gehe alle Festivals durch
    this.crudManager.festivals.forEach((festival) => {
      // Sortiere das LineUp nach Datum und Uhrzeit
      festival.lineUp.sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.timeBeginn}`);
        const dateB = new Date(`${b.date}T${b.timeBeginn}`);
        return dateA.getTime() - dateB.getTime();
      });
    });
  }

  openPicker(input: HTMLInputElement) {
    input.showPicker();
  }
}
