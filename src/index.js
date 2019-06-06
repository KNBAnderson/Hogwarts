import {Character} from './character';
import $ from 'jquery';
import './styles.css';
import { classBody } from '@babel/types';
import welcome from './img/WelcomeToNewYear.jpg';

$(document).ready(function() {
  let me = new Character();
  $('.currentYear').text(me.year);
  

  $('#sortButton').click(() => {
    let promise = new Promise(function(resolve, reject) {
      me.populateClass();
    });

    setTimeout(() => {
      if(me.house === "Gryffindor") {
        $('body').addClass("red");
      } else if (me.house === "Hufflepuff") {
        $('body').addClass("yellow");
      } else if (me.house === "Slytherin") {
        $('body').addClass("green");
      } else if (me.house === "Ravenclaw") {
        $('body').addClass("blue");
      } else {
        console.log("asyncs got ya down");
      }
      $('.houseName').text(me.house);
      $('#beforeSorting').hide();
      $('#afterSorting').show();
    }, 1000)
  }); 

  $('#viewClassmates').on('click', function() {
    $('#classList').toggle();
  });
});