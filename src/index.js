import {Character} from './character';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  let me = new Character();
  $('#sortButton').click(function() {
    me.sortHouse();
  })
  

});