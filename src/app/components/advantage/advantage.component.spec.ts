import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantageComponent } from './advantage.component';

describe('AdvantagesComponent', () => {
  let component: AdvantageComponent;
  let fixture: ComponentFixture<AdvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvantageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
