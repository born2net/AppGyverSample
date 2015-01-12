angular.module('SteroidsApplication', [
    'supersonic'
]);

$(function () {
    // var view = new supersonic.ui.View("../page2.html");
    var self = this;
    supersonic.ui.tabs.hide();
    var view2 = new supersonic.ui.View({
        location: "../page2.html",
        id: "page2"
    });

    view2.start();

    supersonic.logger.log('starting app');

    $('#switch1').on('click', function (e) {
        var p = _.random(2,9);
        supersonic.logger.debug('switching to page ' + p);
        supersonic.ui.tabs.select(p);
    });

    /*
    var view3 = new supersonic.ui.View({
        location: "../page3.html",
        id: "page3"
    });
    view3.start();

    $('#tapMe').on('click', function (e) {
        supersonic.ui.layers.push(view3);
    });
    */


});
