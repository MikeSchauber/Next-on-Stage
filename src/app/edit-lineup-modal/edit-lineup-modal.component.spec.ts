import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLineupModalComponent } from './edit-lineup-modal.component';

describe('EditLineupModalComponent', () => {
  let component: EditLineupModalComponent;
  let fixture: ComponentFixture<EditLineupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditLineupModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLineupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
