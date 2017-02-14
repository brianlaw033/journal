var Counter = require('./../js/journal.js').journalModule;
$(document).ready(function(){
  $(window).keyup(function(){
  var content = $('#content').val();
  var contentLowercase = content.toLowerCase();
  var wordArray = contentLowercase.split(' ');
  var characterArray = contentLowercase.split('');
  var sentenceArray = content.split('. ');
  var simpleCounter = new Counter("hot pink");
  var word_count = simpleCounter.wordCount(contentLowercase, wordArray);
  var vowel_count = simpleCounter.vowelCount(contentLowercase, characterArray);
  var consonant_count = simpleCounter.consonantCount(contentLowercase, characterArray);
  var first_sen = simpleCounter.firstSen(content, sentenceArray, wordArray);
  $('#wordCount').text(word_count);
  $('#vowelCount').text(vowel_count);
  $('#consonantCount').text(consonant_count);
  $('#1stSen').text(first_sen);
});
});
