(function(window) {
    let App = window.App || {};
    
    let Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch.com$/.test(email);
        }
    };
    
    App.Validation = Validation;
    window.App = App;
})(window);