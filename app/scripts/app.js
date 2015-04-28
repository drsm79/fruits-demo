/*global define */
define(['jquery', 'jqueryui', 'typeahead', 'pouchdb'], function() {
    'use strict';
    var local = new PouchDB('fruits');

    function addFruit () {
        local.post({'fruit': $('#fruit').val()}).then(function (argument) {
            console.log(argument);
        });
        $('#fruit').val('');
        primeTypeahead();
    }

    function substringMatcher (strs) {
      return function findMatches(q, cb) {
        var matches, substrRegex;

        // an array that will be populated with substring matches
        matches = [];

        // regex used to determine if a string contains the substring `q`
        substrRegex = new RegExp(q, 'i');

        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function(i, str) {
          if (substrRegex.test(str)) {
            matches.push(str);
          }
        });

        cb(matches);
      };
    };

    function primeTypeahead(){
        local.allDocs({include_docs: true}).then(function (result) {
            // body...
            var fruits = [];
            for (var i = result.rows.length - 1; i >= 0; i--) {
                fruits.push(result.rows[i].doc.fruit);
            };
            console.log(fruits);
            $('#fruit').typeahead({});
            $('#fruit').autocomplete({
                source: fruits,
                appendTo: "#fruit",
                delay: 50
            });;

        });
    }

    $('#add').click(addFruit);

    var initialize = function (){
        console.log('Running jQuery %s in initialize', $().jquery);
        console.log('Running jqueryui %s in initialize', $.ui.version);
        console.log('Running pouchdb %s', PouchDB.version);
        primeTypeahead();
    };

   return {
      initialize : initialize
   };
});