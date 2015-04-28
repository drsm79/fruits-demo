# fruits-demo

## Install & run

    npm install && bower install
    grunt server

## Issues
typeahead.js exports itself with the following define:

    define("typeahead", [ "jquery" ], function(a0) {
        return factory(a0);
    });

Require.js really doesn't like things with a `.js` in the name. The best fix
I've come up with is editing line 9 of typeahead.jquery.js to remove the `.js`
from the exported module, but that's not really cricket...

I did get it to work by tricking require into pulling in the right js file by
having a named path in `main.js` and then using the full `typeahead.js` module
name in the define call in `app.js`. Not only is this super hokey, it breaks
when the `grunt deploy` task minifies and bundles up the code.