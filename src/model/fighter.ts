import { Character } from './character';

export class Fighter extends Character {
  weapon: string;
  skill: number;

  constructor(
    name: string,
    family: string,
    age: number,
    imageUrl: string,
    weapon: string,
    skill: number
  ) {
    super(name, family, age, imageUrl);
    this.personalQuote = 'Primero pego y luego pregunto';
    this.weapon = weapon;
    this.skill = skill;
    this.imageUrl = imageUrl;
    this.category = 'Fighter';
  }
}
