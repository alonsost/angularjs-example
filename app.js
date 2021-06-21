/*global angular  https://developer.mozilla.org/es/docs/Glossary/IIFE*/
(function () {
    const gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description:'Some gems have hidden qualities beyond their luster, beyond their      shine.. Dodecahedron is one of those gems.',
            canPurchase: false,
            soldOut: false
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description:'Some gems have hidden qualities beyond their luster, beyond their shine.. Pentagonal is one of those gems.',
            canPurchase: false,
            soldOut: false
        }
    ]

	app = angular.module("gemStore", [])

    app.controller('StoreController', function(){
        this.products = gems
    })

}());