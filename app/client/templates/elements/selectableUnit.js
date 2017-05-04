/**
Template Controllers

@module Templates
*/

/**
The balance template

@class [template] elements_balance
@constructor
*/

/**
The available units

@property selectableUnits
*/
selectableUnits = [{
    text: 'SOIL',
    value: 'ether'
}];


// Aprils fool
if (moment().format('MM-DD')=='04-01') {
    selectableUnits.push({ text: 'SZABO', value: 'szabo'},
        { text: 'SHANNON', value: 'shannon'},
        { text: 'LOVELACE', value: 'lovelace'},
        { text: 'BABBAGE', value: 'babbage'},
        { text: 'WEI', value: 'wei'},
        { text: 'NOETHER', value: 'noether'})
}

Template['elements_selectableUnit'].helpers({
    /**
    Gets currently selected unit

    @method (selectedUnit)
    */
    'selectedUnit': function(){
        var unit = _.find(selectableUnits, function(unit){
            return unit.value === EthTools.getUnit();
        });

        if(unit)
            return unit.value;
    },
    /**
    Return the selectable units

    @method (selectedUnit)
    */
    'units': function(){
        return selectableUnits;
    }
});

Template['elements_selectableUnit'].events({
    /**
    Select the current section, based on the radio inputs value.

    @event change .inline-form
    */
    'change .inline-form': function(e, template, value){
        EthTools.setUnit(value);
    }
});
