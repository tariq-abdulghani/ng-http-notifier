import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHttpNotifierComponent } from './ng-http-notifier.component';

describe('NgHttpNotifierComponent', () => {
  let component: NgHttpNotifierComponent;
  let fixture: ComponentFixture<NgHttpNotifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgHttpNotifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgHttpNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
