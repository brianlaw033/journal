(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Counter(skinName) {
  this.skin = skinName;
}

Counter.prototype.wordCount = function(contentLowercase, wordArray) {
  var word_count = 0;
  if (contentLowercase === ''){
    word_count += 0;
  }else{
  word_count += wordArray.length;
  }
  return word_count;
};

Counter.prototype.vowelCount = function(contentLowercase, characterArray) {
  var vowel_count = 0;
  for (x = 0; x < characterArray.length; x++) {
        for (a = 0; a < x; a++){
            switch (characterArray[x].charAt(a)){
                case 'a': vowel_count++;break;
                case 'e': vowel_count++;break;
                case 'i': vowel_count++;break;
                case 'o': vowel_count++;break;
                case 'u': vowel_count++;break;
                case 'y': vowel_count++;break;
            }
        }
    }
  return vowel_count;
};

Counter.prototype.consonantCount = function(contentLowercase, characterArray) {
  var consonant_count = 0;
  for (x = 0; x < characterArray.length; x++) {
        for (a = 0; a < x; a++){
            switch (characterArray[x].charAt(a)){
                case 'b': consonant_count++;break;
                case 'c': consonant_count++;break;
                case 'd': consonant_count++;break;
                case 'f': consonant_count++;break;
                case 'g': consonant_count++;break;
                case 'h': consonant_count++;break;
                case 'j': consonant_count++;break;
                case 'k': consonant_count++;break;
                case 'l': consonant_count++;break;
                case 'm': consonant_count++;break;
                case 'n': consonant_count++;break;
                case 'p': consonant_count++;break;
                case 'q': consonant_count++;break;
                case 'r': consonant_count++;break;
                case 's': consonant_count++;break;
                case 't': consonant_count++;break;
                case 'v': consonant_count++;break;
                case 'w': consonant_count++;break;
                case 'x': consonant_count++;break;
                case 'y': consonant_count++;break;
                case 'z': consonant_count++;break;
            }
        }
    }
  return consonant_count;
};

Counter.prototype.firstSen = function(content, sentenceArray){
  var first_sen = '';
  var senWordarray = sentenceArray[0].split(' ');
  if (senWordarray.length > 8){
    for (i=0; i<=7;i++){
      first_sen += senWordarray[i]+" ";
  }
}else{
  first_sen = sentenceArray[0];
  }
  return first_sen;
};

exports.journalModule = Counter;

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
