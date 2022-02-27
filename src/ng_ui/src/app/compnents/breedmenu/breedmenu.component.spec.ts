import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedmenuComponent } from './breedmenu.component';

describe('BreedmenuComponent', () => {
  let component: BreedmenuComponent;
  let fixture: ComponentFixture<BreedmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
