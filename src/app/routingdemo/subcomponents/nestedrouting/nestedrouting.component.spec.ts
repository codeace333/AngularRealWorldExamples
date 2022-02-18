import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedroutingComponent } from './nestedrouting.component';

describe('NestedroutingComponent', () => {
  let component: NestedroutingComponent;
  let fixture: ComponentFixture<NestedroutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedroutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
