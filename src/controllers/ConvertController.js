
class ConvertController{


    getRomanNumeral(arabic_number){
        return [
            {number: 1, numeral:'I'},
            {number: 4, numeral:'IV'},
            {number: 5, numeral:'V'},
            {number: 9, numeral:'IX'},
            {number: 10,numeral: 'X'},
            {number: 40,numeral: 'XL'},
            {number: 50,numeral: 'L'},
            {number: 90,numeral: 'XC'},
            {number: 100, numeral: 'C'},
            {number: 400, numeral: 'CD'},
            {number: 500, numeral: 'D'},
            {number: 900, numeral: 'CM'},
            {number: 1000,numeral:  'M'}

        ];
    }
    
    async convertToRomanNumerals(req, res){
        let {arabic_number} = req.body;
        let roman_numeral = "";
        if(arabic_number <= 0 || arabic_number > 3000){
            return res.status(200).send({error: 'Invalid number for Romans'})
        }

        do{
            const roman_numeral_ret = this.getRomanNumeral().reverse().find(numeral => numeral.number <= arabic_number);
            roman_numeral += roman_numeral_ret.numeral;
            arabic_number -= roman_numeral_ret.number;

        }while(arabic_number > 0)

        if(roman_numeral){
            return res.status(200).send({numeral: roman_numeral});
        }
        
    }

    async convertToArabicNumbers(req, res){
        let {roman_numeral} = req.body;
        var _regexp = /^((\(M\)){0,3})(\(C\)\(M\)|\(C\)\(D\)|(\(D\))?(\(C\)){0,3})(\(X\)\(C\)|\(X\)\(L\)|(\(L\))?(\(X\)){0,3})(M\(X\)|M\(V\)|(\(V\))?)(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
        if(_regexp.test(roman_numeral)) {
            roman_numeral = roman_numeral.split('');
            let total = 0;
        
            for(let i = 0; i < roman_numeral.length; i++){
                let first = this.getRomanNumeral().find(numeral => numeral.numeral === roman_numeral[i]);
                let second = this.getRomanNumeral().find(numeral => numeral.numeral === roman_numeral[i+1]);
                if(first){
                    first = first.number
                }
                if(second){
                    second = second.number
                }
                if(first < second){
                    total -= (first);
                }else{
                    total += (first);
                }
        
            }
            return res.status(200).send({arabic_number: total});
        }else{
            return res.status(200).send({error: 'Invalid roman numeral'});
        }
        
 
    }

    
}

module.exports = new ConvertController();