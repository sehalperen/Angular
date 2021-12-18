import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerpersComponent } from './customerpers.component';

describe('CustomerpersComponent', () => {
  let component: CustomerpersComponent;
  let fixture: ComponentFixture<CustomerpersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerpersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
