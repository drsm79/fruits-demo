require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        pouchdb: '../bower_components/pouchdb/dist/pouchdb',
        jqueryui: '../bower_components/jqueryui/jquery-ui',
        typeahead: '../bower_components/typeahead.js/dist/typeahead.jquery',
    },
    shim: {
        jqueryui: {
            deps: ['jquery']
        },
        typeahead: {
            deps: ['jquery']
        }
    }
    // enforceDefine: true
});

require(['app', 'jquery', 'pouchdb'], function (app, $, pouchdb) {
    'use strict';
    app.initialize();
});
