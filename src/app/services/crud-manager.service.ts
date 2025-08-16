import { Injectable } from '@angular/core';
import { ModalService } from './modal.service';
import { Festival } from '../interfaces/formulare';

@Injectable({
  providedIn: 'root',
})
export class CrudManagerService {
  festivals: Festival[] = [];

  activeFestival!: Festival | null;

  editingIndex: number | null = null;
  constructor(private modalService: ModalService) {
    this.loadFestivals(); // Festivals beim Start laden
  }

  // Festival aktivieren
  setActiveFestival(festival: Festival) {
    localStorage.setItem('activeFestival', JSON.stringify(this.festivals));
    this.activeFestival = festival;
  }

  /** Add Festival und speichere in LocalStorage */
  addFestival(form: any) {
    if (form.valid) {
      this.festivals.push({ ...this.modalService.newFestival });
      this.saveFestivals(); // speichern
      this.modalService.closeModal();
    }
  }

  /** Speichern in LocalStorage */
  saveFestivals() {
    localStorage.setItem('festivals', JSON.stringify(this.festivals));
    localStorage.setItem('activeFestival', JSON.stringify(this.activeFestival));
  }

  /** Laden aus LocalStorage */
  loadFestivals() {
    const stored = localStorage.getItem('festivals');
    const storedActive = localStorage.getItem('activeFestival');
    if (stored) {
      this.festivals = JSON.parse(stored);
    }
    if (storedActive) {
      this.activeFestival = JSON.parse(storedActive);
    }
  }

  editLineUpAct(
    festival: Festival,
    index: number,
    lineUpContainer: HTMLHeadingElement
  ) {
    this.editingIndex = index;
    const act = festival.lineUp[index];
    // Werte ins Modal/Formular laden
    this.modalService.newLineUpAct = { ...act };
    setTimeout(() => {
      lineUpContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 50);
  }

  addLineUpAct(festival: Festival, form: any) {
    if (!form.valid) return;

    if (this.editingIndex !== null) {
      // Bearbeiten
      festival.lineUp[this.editingIndex] = {
        ...this.modalService.newLineUpAct,
      };
      this.editingIndex = null; // zurücksetzen
    } else {
      // Neues Act hinzufügen
      festival.lineUp.push({ ...this.modalService.newLineUpAct });
    }

    // Formular zurücksetzen
    this.modalService.newLineUpAct = {
      artistName: '',
      date: '',
      timeBeginn: '',
      timeEnd: '',
      stage: '',
    };
    form.resetForm();
    this.saveFestivals(); // LocalStorage speichern
  }

  removeLineUpAct(festival: Festival, index: number) {
    festival.lineUp.splice(index, 1);
    this.editingIndex = null;
    this.saveFestivals();
  }

  clearLineUpForm() {
    this.editingIndex = null;
    this.modalService.clearLineUpForm();
  }

  closeLineUpForm() {
    this.editingIndex = null;
    this.modalService.clearLineUpForm();
    this.modalService.closeModal();
  }
}
