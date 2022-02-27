export class Breed {

  id: string | undefined;
  name: string | undefined;
  description: string | undefined;
  child_friendly: string | undefined;
  vcahospitals_url: string | undefined;
  wikipedia_url: string | undefined;

  constructor() {}
}

export class CatBreed {
  breeds: Breed[] = [] ;
  id: string | undefined;
  url: string | undefined;
  width: number | undefined;
  height: number | undefined;

  constructor() {
     
  }
}

export class BreedMenu {
    id: string ='';
    name: string ='';
}

export default CatBreed;
