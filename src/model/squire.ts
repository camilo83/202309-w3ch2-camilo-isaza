import { Character } from './character';
import { Fighter } from './fighter';

export class Squire extends Character {
  servilityGrade: number;
  patron: Fighter;

  constructor(
    name: string,
    family: string,
    age: number,
    servilityGrade: number,
    patron: Fighter,
    imageUrl: string
  ) {
    super(name, family, age, imageUrl);
    this.personalQuote = 'Soy un loser';
    this.servilityGrade = servilityGrade;
    this.patron = patron;
    this.category = 'Squire';
  }
}
