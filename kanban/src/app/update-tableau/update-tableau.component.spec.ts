import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTableauComponent } from './update-tableau.component';

describe('UpdateTableauComponent', () => {
  let component: UpdateTableauComponent;
  let fixture: ComponentFixture<UpdateTableauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTableauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
