import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { CrudManagerService } from '../services/crud-manager.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-festival-modal',
  imports: [FormsModule],
  templateUrl: './add-festival-modal.component.html',
  styleUrl: './add-festival-modal.component.scss',
})
export class AddFestivalModalComponent {
  constructor(
    public modalService: ModalService,
    public crudManager: CrudManagerService
  ) {}
}
