export type Category = 'King' | 'Fighter' | 'Advisor' | 'Squire';

export abstract class Character {
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  protected personalQuote: string;
  category!: Category;
  imageUrl: string;

  constructor(name: string, family: string, age: number, imageUrl: string) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.personalQuote = '';
    this.isAlive = true;
    this.imageUrl = imageUrl;
  }

  talk() {
    return this.personalQuote;
  }

  dead() {
    this.isAlive = false;
  }
}
