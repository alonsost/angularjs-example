/*global angular  https://developer.mozilla.org/es/docs/Glossary/IIFE*/
(function () {
    const gem = {
        name: 'Dodecahedron',
        price: 2.95,
        description:'Some gems have hidden qualities beyond their luster, beyond their shine.. Dodecahedron is one of those gems.'
    }

	app = angular.module("gemStore", [])

    app.controller('StoreController', function(){
        this.product = gem
    })

}());