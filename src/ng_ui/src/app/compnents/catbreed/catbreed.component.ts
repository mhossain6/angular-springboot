import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  SimpleChange,
} from '@angular/core';
import { CatBreedService } from '../../service/catbreedService';
import { Breed, CatBreed } from '../../models/CatBreed';

@Component({
  selector: 'my-app-catbreed',
  templateUrl: './catbreed.component.html',
  styleUrls: ['./catbreed.component.css'],
})
export class CatbreedComponent implements OnInit, OnChanges {
  @Input() breed_id: any = '';

  breed: any;
  photo_url: string | undefined;

  constructor(private catbreedService: CatBreedService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.getBreedInfo();
  }

  ngOnInit(): void {
    this.getBreedInfo();
  }

  private getBreedInfo() {
    console.log('getBreedInfo : breed_id', this.breed_id);

    this.catbreedService
      .getBreed(this.breed_id)
      .pipe()
      .subscribe(
        (data) => {
          this.populateData(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  private populateData(data: any[]) {
    try {
      if (undefined == data || data.length == 0) return;

      console.log('Breed info:', data);

      if (undefined != data[0].breeds[0]) {
        this.breed = data[0].breeds[0];
        console.log('breed:', this.breed);
        this.photo_url = data[0].url;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default CatbreedComponent;
