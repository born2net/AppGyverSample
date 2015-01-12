angular.module('SteroidsApplication', [
    'supersonic'
]);
var self = this;
$(function () {
    $('#myTitle').text('second world');

    var index = new supersonic.ui.View("/index.html");

    $('#switch2').on('click', function (e) {
        supersonic.ui.tabs.select(0);
    });

});
