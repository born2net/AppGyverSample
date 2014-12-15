angular.module('SteroidsApplication', [
    'supersonic'
]);

$(function () {
    var a = _.random(1,1000);
    $('#liList').append('<li>' + a + '</li>');
    $('#liList').append('<li>2</li>');
    $('#liList').append('<li>3</li>');

    setTimeout(function(){
        supersonic.logger.log('listening...!!!!');
        var unsubscribe = supersonic.data.channel('events').subscribe( function(message, reply) {
            alert('from : ' + message.from + ' ' + message.data);
            var msg = {
                from: 'app3',
                data: 'message 2'
            };
            reply(msg);
        });
    },2000);


});
