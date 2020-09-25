import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarActionComponent } from './snackbar-action.component';

describe('SnackbarActionComponent', () => {
  let component: SnackbarActionComponent;
  let fixture: ComponentFixture<SnackbarActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
