import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentesComponent } from './presidentes.component';

describe('PresidentesComponent', () => {
  let component: PresidentesComponent;
  let fixture: ComponentFixture<PresidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresidentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
