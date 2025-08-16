import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFestivalModalComponent } from './add-festival-modal.component';

describe('AddFestivalModalComponent', () => {
  let component: AddFestivalModalComponent;
  let fixture: ComponentFixture<AddFestivalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFestivalModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFestivalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
