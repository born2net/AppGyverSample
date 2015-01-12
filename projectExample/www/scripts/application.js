angular.module('SteroidsApplication', [
    'supersonic'
]);

$(function () {
    // var view = new supersonic.ui.View("../page2.html");
    var self = this;
    var view = new supersonic.ui.View({
        location: "../page2.html",
        id: "page2"
    });
    supersonic.logger.log(view.getLocation())
    view.start();

    $('#myTitle').text('first world 2');
    $('#tapMe').on('click', function (e) {
        supersonic.ui.layers.push(view)
    });

    $().on('click', function () {
        if (counter % 2) {
            $(this).css({backgroundColor: 'red'});
        } else {
            $(this).css({backgroundColor: 'white'});
        }
    });

    $('#myHomeButton,#myHomeButton2').on('click', function () {
        $(this).css({backgroundColor: '#00B4FE'}).delay(100).queue(function(){
            $(this).css({backgroundColor: 'white'});
            $(this).dequeue();
        });
    });


    setTimeout(function () {
        var leftDrawer = new steroids.views.WebView("drawer.html");

        function updateDrawer() {
            steroids.drawers.update({
                left: leftDrawer
            });
        }

        leftDrawer.preload({}, {
            onSuccess: updateDrawer
        });

        supersonic.ui.tabs.show();

    }, 2000);

    setTimeout(function () {
        supersonic.logger.log('sending...');
        var msg = {
            from: 'app',
            data: 'message 1'
        };
        supersonic.data.channel('events').publish(msg);
    }, 6000);

    var unsubscribe = supersonic.data.channel('events').subscribe(function (message, reply) {
        if (message.from == 'app')
            return;
        alert('from : ' + message.from + ' ' + message.data);
    });

});
