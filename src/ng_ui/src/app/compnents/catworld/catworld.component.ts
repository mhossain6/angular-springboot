import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CatBreed, BreedMenu, Breed } from 'src/app/models/CatBreed';
import { CatBreedService } from '../../service/catbreedService';
import { BreedmenuComponent } from '../breedmenu/breedmenu.component';
import CatbreedComponent from '../catbreed/catbreed.component';


@Component({
  selector: 'my-app-catworld',
  templateUrl: './catworld.component.html',
  styleUrls: ['./catworld.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatworldComponent implements OnInit, OnChanges {
  breed_id: BehaviorSubject<string> = new BehaviorSubject('');

  breedMenuItems: BreedMenu[] = [];
  //menuLoaded: boolean = false;

  constructor(private catbreedService: CatBreedService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['breedMenuItems']) {
      console.log (this.breedMenuItems);
    }
  }

  ngOnInit(): void {
    this.loadCats();
    //this.ngOnChanges(new SimpleChange(null,this.breedMenuItems,true));
    console.log('menuitems:', this.breedMenuItems);
  }

  private loadCats() {
    this.catbreedService
      .getBreeds()
      .pipe()
      .subscribe(
        (data) => {
          //console.log(data);
          this.populateMenu(data);
          // this.catBreeds = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  private populateMenu(catBreeds: any[]) {
    try {
      if (undefined != catBreeds || null != catBreeds) {
        let menuItems: BreedMenu[] = [];
        catBreeds.forEach((breed: Breed) => {
          menuItems.push({
            id: undefined != breed.id ? breed.id : '',
            name: undefined != breed.name ? breed.name : '',
          });
        });
        this.breedMenuItems = menuItems;
      }
    } catch (error) {
      console.log(error);
    }
    console.log('breed menu items', this.breedMenuItems);

  }

  setSelectedOption(option: any) {
    console.log('in parent option', option);
      this.breed_id = option;
  }
}
