import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowMenuItemComponent } from './window-menu-item.component';

describe('WindowMenuItemComponent', () => {
  let component: WindowMenuItemComponent;
  let fixture: ComponentFixture<WindowMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
