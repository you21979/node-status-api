module.exports = function(httpinstance){
    return function(u, callback){
        httpinstance.getConnections(function(err, val){
            callback(err, {connections:val});
        });
    };
}
