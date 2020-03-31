import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MurrayComponent } from './murray.component';

describe('MurrayComponent', () => {
  let component: MurrayComponent;
  let fixture: ComponentFixture<MurrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MurrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MurrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
