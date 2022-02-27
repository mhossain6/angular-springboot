import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatbreedComponent } from './catbreed.component';

describe('CatbreedComponent', () => {
  let component: CatbreedComponent;
  let fixture: ComponentFixture<CatbreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatbreedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatbreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
