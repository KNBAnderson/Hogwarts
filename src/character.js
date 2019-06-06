import { PotterInfo } from "./potterApi";
import $ from 'jquery';
let potterInfo = new PotterInfo();  // create instance of PotterInfo class



export class Character {
  constructor() {
    this.spellsLearned =[];
    this.year = 1;
    this.classmates = [];
  }

    

  // sortHouse() {
  //   let that = this;
    // let potterInfo = new PotterInfo();  // create instance of PotterInfo class
  //   let promise = potterInfo.getHouse();  // call the instance method and pass in user input
  //   promise.then(function(response) {
  //     let body = JSON.parse(response);
  //     that.house = body;
  //     $('.houseName').text(that.house);
  //     console.log("char", that.house);
  //   }, function(error) {
  //     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  //   });
  // }


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
    console.log(classmates);
    this.classmates = classmates;

  });
  }
 



  // showClassmates(house) {
  //   let that = this;
  //   let potterInfo = new PotterInfo();  // create instance of PotterInfo class
  //   let promise = potterInfo.getClassmates(house);  // call the instance method and pass in user input
  //   promise.then(function(response) {
  //     let body = JSON.parse(response);
  //     that.classmates = body.main;
  //     console.log("classmates", that.classmates);
  //   }, function(error) {
  //     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  //   });
  // }

}



