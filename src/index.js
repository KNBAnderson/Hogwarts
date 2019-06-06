import {Character} from './character';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  let me = new Character();
  // me.populateSpells();
  $('#sortButton').click(function() {
    me.populateClass();
    $('#beforeSorting').hide();
    $('#afterSorting').show();
  })
});