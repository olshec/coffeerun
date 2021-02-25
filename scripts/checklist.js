(function(window) {
    let App = window.App || {};
    let $ = window.jQuery;
    
    function CheckList(selector) {
        if(!selector) {
            throw new Error('No selector provided');
        }
        
        this.$element = $(selector);
        if(this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }
    
    function Row(coffeeOrder) {
        let $div = $('<div></div>', {
            'data-coffee-order': 'checkbox',
            'class': 'checkbox'
        });
        
        let $label = $('<label></label>');
        
        let $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: coffee.emailAddress
        });
        
        let description = coffee.size + ' ';
        if(coffee.flavor) {
            description += coffee.flavor + ' ';
        }
        
        description += coffeeOrder.coffee + ', ';
        description += ' (' + coffeeOrder.emailAddress + ')';
        description += ' [' + coffeeOrder.strength + 'x]';
        
        $label.append($checkbox);
        $label.append(description);
        $div.append($label);
        
        this.$element = $div;
    }
    
    App.CheckList = CheckList;
    window.App = App;
})(window);