angular.module('SteroidsApplication', [
    'supersonic'
]);
var self = this;
$(function () {
    $('#myTitle').text('second world');

    var view = new supersonic.ui.View("/index.html");

    $('#back').on('click', function (e) {
        supersonic.ui.layers.push(view)
    });

    $('#random').on('click', function (e) {
        $('#header1').text(_.random(1,10));
    })

    $('#openModal').on('click',function(e){
        var modalView = new supersonic.ui.View("/modal.html");
        var options = {
            animate: false
        };
        supersonic.ui.modal.show(modalView, options);
    });

    $('#reload').on('click', function (e) {
        supersonic.logger.debug(self);
        self.stop();
        self.start();
    });

    setTimeout(function () {
        $('#leftDrawer').hide();
        supersonic.ui.views.find("leftDrawer").then( function(leftDrawer) {
            alert(leftDrawer.hide());
            $(leftDrawer).empty();
        });
    }, 3000)
});
