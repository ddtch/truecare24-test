import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusesMenuComponent } from './statuses-menu.component';

describe('StatusesMenuComponent', () => {
  let component: StatusesMenuComponent;
  let fixture: ComponentFixture<StatusesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
