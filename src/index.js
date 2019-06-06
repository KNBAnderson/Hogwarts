import {Character} from './character';
import $ from 'jquery';
import './styles.css';
import { classBody } from '@babel/types';

$(document).ready(function() {
  let me = new Character();
  $('.currentYear').text(me.year);
  let promise = new Promise(function(resolve, reject) {
    me.populateClass();
  });

  $('#sortButton').click(function() {
    promise
      .then(response => { 
        if(me.house === "Gryffindor") {
          $('body').addClass("red");
          console.log("red");
        } else if (me.house === "Hufflepuff") {
          $('body').addClass("yellow");
          console.log("yellow");

        } else if (me.house === "Slytherin") {
          $('body').addClass("green");
          console.log("green");

        } else if (me.house === "Ravenclaw") {
          $('body').addClass("blue");
          console.log("blue");
          
        } else {
          console.log("asyncs got ya down");
        }
        $('#beforeSorting').hide();
        $('#afterSorting').show();
      })
  })
    

  $('#viewClassmates').on('click', function() {
    $('#classList').toggle();
  });
});