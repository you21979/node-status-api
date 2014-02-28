var http = require('http');
var api = require('../');

var custom = {};
var server = http.createServer(api.apihandler(custom));
custom['/http'] = api.http(server);
server.listen(9000, function(){
    console.log('ok');
});
