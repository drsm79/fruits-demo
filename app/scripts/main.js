require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        pouchdb: '../bower_components/pouchdb/dist/pouchdb',
        typeahead: '../bower_components/typeahead.js/dist/typeahead.jquery',
        app: '../scripts/app'
    },
    shim: {
        // jqueryui: {
        //     deps: ['jquery']
        // },
        // 'typeahead.js': {
        //     deps: ['jquery']
        // }
    }
    // enforceDefine: true
});

require(['app', 'jquery', 'pouchdb', 'typeahead'], function (app, $, pouchdb, typeahead) {
    'use strict';
    app.initialize();
});
