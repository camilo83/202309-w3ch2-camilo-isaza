import { Character } from './character';

export class King extends Character {
  kingdomYears: number;

  constructor(
    name: string,
    family: string,
    age: number,
    kingdomYears: number,
    imageUrl: string
  ) {
    super(name, family, age, imageUrl);
    this.kingdomYears = kingdomYears;
    this.personalQuote = 'Vais a morir todos';
    this.category = 'King';
  }
}
