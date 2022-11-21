import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { image: './assets/heroesimages/DrStone.webp', id: 11, name: 'Dr Stone' },
  { image: './assets/heroesimages/the-batman.gif', id: 12, name: 'Batman' },
  { image: './assets/heroesimages/yasuo.webp', id: 13, name: 'Yasuo' },
  { image: './assets/heroesimages/rimuru.jpg', id: 14, name: 'Rimuru' },
  { image: './assets/heroesimages/deku.webp', id: 15, name: 'Deku' },
  { image: './assets/heroesimages/eren.webp', id: 16, name: 'Eren' },
  { image: './assets/heroesimages/kirito.jpg', id: 17, name: 'Kirito' },
  { image: './assets/heroesimages/braum.jpg', id: 18, name: 'Braum' },
  { image: './assets/heroesimages/luffy.jpg', id: 19, name: 'Luffy' },
  { image: './assets/heroesimages/link.jpg', id: 20, name: 'Link' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}