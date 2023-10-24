import { Character } from './character';

export class Adviser extends Character {
  advisorBoss: Character;

  constructor(
    name: string,
    family: string,
    age: number,
    imageUrl: string,
    advisorBoss: Character
  ) {
    super(name, family, age, imageUrl);
    this.personalQuote = 'No sé por qué, pero creo que voy a morir pronto';
    this.advisorBoss = advisorBoss;
    this.category = 'Advisor';
  }
}
