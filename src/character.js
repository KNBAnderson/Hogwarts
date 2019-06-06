import { PotterInfo } from "./potterApi";
import $ from 'jquery';
let potterInfo = new PotterInfo();

export class Character {
  constructor() {
    this.spellsLearned = [];
    this.year = 1;
  }

  populateClass() {
    potterInfo.getHouse()
      .then(response => {
        let body = JSON.parse(response);
        let house = body;
        this.house = house;
        $('.houseName').text(this.house);
        return potterInfo.getClassmates(this.house);
      })
      .then(response => {
        let classmatesResponse = JSON.parse(response);
        let classmates = [];
        classmatesResponse.forEach(classmate => {
          classmates.push(classmate.name);
          $('#classList').append(`<li>${classmate.name}</li>`);
        })
        this.classmates = classmates;
        return potterInfo.getSpells();
      })
      .then(response => {
        let spellsResponse = JSON.parse(response);
        let spells = [];
        spellsResponse.forEach(spell => {
          spells.push(spell);
        })
        console.log("hello", spells);
        this.allSpells = spells;
      });
  }

  randomize(arr) {
    let max = arr.length - 1;
    let min = 0;
    let random = Math.floor(Math.random() * (max + 1 - min)) + min;
    return arr[random];
  }
  
}
