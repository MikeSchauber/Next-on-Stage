import { Injectable } from '@angular/core';
import { CrudManagerService } from './crud-manager.service';
import { Festival, LineUpAct } from '../interfaces/formulare';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  showModal = false;
  showFestivalModal = false;
  showLineupModal = false;
  newFestival: Festival = {
    name: '',
    location: '',
    startDate: '',
    endDate: '',
    emoji: '',
    lineUp: [],
    stages: [],
  };
  newLineUpAct: LineUpAct = {
    artistName: '',
    timeBeginn: '',
    timeEnd: '',
    stage: '',
    date: '',
  };
  newStageName: string = '';
  constructor() {}

  clearFestivalForm() {
    this.newFestival = {
      name: '',
      location: '',
      startDate: '',
      endDate: '',
      emoji: '',
      lineUp: [],
      stages: [],
    };
  }

  clearLineUpForm() {
    this.newLineUpAct = {
      artistName: '',
      timeBeginn: '',
      timeEnd: '',
      stage: '',
      date: '',
    };
  }

  openModal(content: string) {
    if (content === 'festival') {
      this.showModal = true;
      this.showFestivalModal = true;
    } else {
      this.showModal = true;
      this.showLineupModal = true;
    }
  }

  closeModal() {
    this.showModal = false;
    this.showFestivalModal = false;
    this.showLineupModal = false;
    this.clearFestivalForm();
    this.clearLineUpForm();
  }

  addStage() {
    if (this.newStageName.trim()) {
      this.newFestival.stages.push(this.newStageName.trim());
      this.newStageName = ''; // Eingabefeld zurücksetzen
    }
  }

  removeStage(index: number) {
    this.newFestival.stages.splice(index, 1);
  }
}
