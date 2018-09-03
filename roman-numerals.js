function toRoman(number){
    var romanDictionary = [{symbol : 'M', value : 1000}, {symbol: 'CM', value: 900 }, {symbol : 'D', value : 500}, {symbol: 'CD', value: 400}, {symbol: 'C', value: 100}, {symbol: 'XC' , value: 90},  {symbol: 'L', value: 50}, {symbol: 'XL', value: 40}, {symbol: 'X', value: 10}, {symbol: 'IX' , value: 9}, {symbol: 'V', value: 5}, {symbol: 'IV' , value: 4}, {symbol: 'I', value:1}];
    // console.log(number % romanDictionary[0].value);
    // console.log(Math.floor(2549/1000))
    var output = '';
    for(var i = 0; i < romanDictionary.length; i++){
        if(number >3000){
            return 'the number must be less than 3000';
        } else {
            if(number/romanDictionary[i].value >= 1){
                var count = Math.floor(number/romanDictionary[i].value);
                for(var j = 0; j < count ; j++){
                    output += romanDictionary[i].symbol;
                }
                number -= (romanDictionary[i].value)*count;
            }
        }
    }
    console.log(output);
    // console.log(4%1000);
}



toRoman(4);
toRoman(1646);