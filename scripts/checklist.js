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
    
    CheckList.prototype.addClickHandler = function(fn) {
        this.$element.on('click', 'input', function(event){
            let email = event.target.value;
            this.removeRow(email);
            fn(email);
        }.bind(this));
    };
    
    CheckList.prototype.addRow = function(coffeeOrder) {
        //Remove all rows with current email
        this.removeRow(coffeeOrder.emailAddress);
        
        //Create new row with information from order coffee
        let rowElement = new Row(coffeeOrder);
        
        //Add property $element for new row in list
        this.$element.append(rowElement.$element);
    };
    
    CheckList.prototype.removeRow = function(email) {
        this.$element
            .find('[value="' + email + '"]')
            .closest('[data-coffee-order="checkbox"]')
            .remove();
    }
    
    function Row(coffeeOrder) {
        let $div = $('<div></div>', {
            'data-coffee-order': 'checkbox',
            'class': 'checkbox'
        });
        
        let $label = $('<label></label>');
        
        let $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: coffeeOrder.emailAddress
        });
        
        let description = coffeeOrder.size + ' ';
        if(coffeeOrder.flavor) {
            description += coffeeOrder.flavor + ' ';
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