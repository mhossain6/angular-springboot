import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Breed, CatBreed, BreedMenu } from '../../models/CatBreed';
import { CatBreedService } from '../../service/catbreedService';

@Component({
  selector: 'my-app-breedmenu',
  templateUrl: './breedmenu.component.html',
  styleUrls: ['./breedmenu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreedmenuComponent implements OnInit, OnChanges {
  @Output() optionSelected = new EventEmitter<string>();
  breedMenuItems: BreedMenu[] = [];

  private _data = new BehaviorSubject<BreedMenu[]>([]);

  // change data to use getter and setter
  @Input()
  set data(value) {
    this._data.next(value);
  }

  get data() {
    return this._data.getValue();
  }

  ngOnInit() {
    this._data.subscribe((x) => {
      this.breedMenuItems = this._data.value;
    });
  }

  selectOption(option: string) {
    this.optionSelected.emit(option);
  }

  constructor(private catbreedService: CatBreedService) {
    //this.loadCats();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) this.breedMenuItems = this._data.value;
  }

  OnClick(breed: string) {
    console.log('on menu click', breed);
    this.selectOption(breed);
  }
}
