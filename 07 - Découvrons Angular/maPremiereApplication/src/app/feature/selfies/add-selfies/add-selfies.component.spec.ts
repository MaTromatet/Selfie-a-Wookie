import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSelfiesComponent } from './add-selfies.component';

describe('AddSelfiesComponent', () => {
  let component: AddSelfiesComponent;
  let fixture: ComponentFixture<AddSelfiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSelfiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSelfiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
