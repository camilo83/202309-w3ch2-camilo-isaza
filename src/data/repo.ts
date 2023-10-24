import { Adviser } from '../model/advisor';
import { Fighter } from '../model/fighter';
import { King } from '../model/king';
import { Squire } from '../model/squire';
import { Character } from '../model/character';

export function repo() {
  const characters: Character[] = [
    new King('Joffrey', 'Baratheon', 16, 2, '/img/joffrey.jpg'),
    new Fighter('Jaime', 'Lannister', 30, '/img/joffrey.jpg', 'Espadas', 8),
    new Fighter(
      'Daenerys',
      'Targaryen',
      30,
      '/img/joffrey.jpg',
      'Dragones',
      10
    ),
  ];

  characters.push(
    new Adviser('Tyrion', 'Lannister', 40, '/img/joffrey.jpg', characters[2])
  );
  characters.push(
    new Squire(
      'Bronn',
      'AguasNegras',
      54,
      0,
      characters[1] as Fighter,
      '/img/joffrey.jpg'
    )
  );
  characters[0].isAlive = false;
  return characters;
}
