import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatworldComponent } from './catworld.component';

describe('CatworldComponent', () => {
  let component: CatworldComponent;
  let fixture: ComponentFixture<CatworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatworldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatworldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
