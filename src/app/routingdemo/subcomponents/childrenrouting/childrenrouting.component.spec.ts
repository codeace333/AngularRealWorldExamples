import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenroutingComponent } from './childrenrouting.component';

describe('ChildrenroutingComponent', () => {
  let component: ChildrenroutingComponent;
  let fixture: ComponentFixture<ChildrenroutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenroutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
