import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingsubcompComponent } from './routingsubcomp.component';

describe('RoutingsubcompComponent', () => {
  let component: RoutingsubcompComponent;
  let fixture: ComponentFixture<RoutingsubcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingsubcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingsubcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
