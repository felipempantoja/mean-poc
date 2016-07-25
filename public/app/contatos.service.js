"use strict";

app.factory('ContatosService', function($resource) {

    return $resource('/contatos/:id', {id: '@id'});
});
