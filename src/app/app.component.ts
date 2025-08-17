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

  getCurrentAndNextActs() {
    if (!this.crudManager.activeFestival) return [];

    const now = new Date();

    // sortiere alle Acts nach Startzeit
    const acts = this.crudManager.activeFestival.lineUp
      .map((act: any) => {
        const start = new Date(`${act.date}T${act.timeBeginn}`);
        const end = new Date(`${act.date}T${act.timeEnd}`);
        return { ...act, start, end };
      })
      .sort((a, b) => a.start.getTime() - b.start.getTime());

    // Act, der gerade läuft
    const current = acts.find((a) => now >= a.start && now <= a.end);

    // Nächster Act (der in der Zukunft startet)
    const next = acts.find((a) => a.start > now);

    // Rückgabe: wenn current da ist -> [current, next], sonst nur [next]
    if (current && next) return [current, next];
    if (current) return [current];
    if (next) return [next];
    return [];
  }

  isCurrentAct(act: any): boolean {
    const now = new Date();
    const start = new Date(`${act.date}T${act.timeBeginn}`);
    const end = new Date(`${act.date}T${act.timeEnd}`);
    return now >= start && now <= end;
  }
}
