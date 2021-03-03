(function (window) {
    let App = window.App || {};
    let Promise = window.Promise;
    
    function DataStore() {
        console.log('running the DataStore function');
        this.data = {};
    }
    
    function promiseResolveWith(value) {
        let promise = new Promise(function(resolve, reject){
            resolve(value);
        });
        return promise;
    }
    
    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
        return promiseResolveWith(null);
    };
    
    DataStore.prototype.get = function(key) {
        return promiseResolveWith(this.data[key]);
    };
    
    DataStore.prototype.getAll = function () {
        return promiseResolveWith(this.data);
    };
    
    DataStore.prototype.remove = function(key) {
        delete this.data[key];
        return promiseResolveWith(null);
    };
    
    App.DataStore = DataStore;
    window.App = App;
})(window);