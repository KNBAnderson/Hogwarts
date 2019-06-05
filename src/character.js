import { PotterInfo } from "./potterApi";
import $ from 'jquery';

export class Character {
  constructor() {
    this.spellsLearned =[];
    this.year = 1;
    this.classmates = [];
  }

  

  sortHouse() {
    let that = this;
    let potterInfo = new PotterInfo();  // create instance of PotterInfo class
    let promise = potterInfo.getHouse();  // call the instance method and pass in user input
    promise.then(function(response) {
      let body = JSON.parse(response);
      that.house = body;
      $('.houseName').text(that.house);
      console.log("char", that.house);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  }

  showClassmates() {
    let that = this;
    let potterInfo = new PotterInfo();  // create instance of PotterInfo class
    let promise = potterInfo.getClassmates(this.house);  // call the instance method and pass in user input
    promise.then(function(response) {
      let body = JSON.parse(response);
      that.house = body;
      console.log("classmates", that.classmates);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  }

}



