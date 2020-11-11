const  request  = require("supertest");

const app = require("../src/app");

describe('Convert to Roman Numerals',  () =>{
    it('should receive Invalid number when number 0 is passed', async () => {

        const response = await request(app)
        .post("/convertToRomanNumerals")
        .send({
            arabic_number : 0
        });
        expect(response.body.error).toEqual("Invalid number for Romans");
    });

    it('should receive I when number 1 is passed', async () => {

        const response = await request(app)
        .post("/convertToRomanNumerals")
        .send({
            arabic_number : 1
        });
        expect(response.body.numeral).toEqual("I");
    });

    it('should receive IV when number 4 is passed', async () => {

        const response = await request(app)
        .post("/convertToRomanNumerals")
        .send({
            arabic_number : 4
        });
        expect(response.body.numeral).toEqual("IV");
    });

    it('should receive XVIII when number 18 is passed', async () => {

        const response = await request(app)
        .post("/convertToRomanNumerals")
        .send({
            arabic_number : 18
        });
        expect(response.body.numeral).toEqual("XVIII");
    });


    it('should receive XLIX when number 49 is passed', async () => {

        const response = await request(app)
        .post("/convertToRomanNumerals")
        .send({
            arabic_number : 49
        });
        expect(response.body.numeral).toEqual("XLIX");
    });

    it('should receive L when number 50 is passed', async () => {

        const response = await request(app)
        .post("/convertToRomanNumerals")
        .send({
            arabic_number : 50
        });
        expect(response.body.numeral).toEqual("L");
    });


    it('should receive CDXCII when number 492 is passed', async () => {

        const response = await request(app)
        .post("/convertToRomanNumerals")
        .send({
            arabic_number : 492
        });
        expect(response.body.numeral).toEqual("CDXCII");
    });

    it('should receive MMX when number 2010 is passed', async () => {

        const response = await request(app)
        .post("/convertToRomanNumerals")
        .send({
            arabic_number : 2010
        });
        expect(response.body.numeral).toEqual("MMX");
    });

    it('should receive MMDCCCLXXXVIII when number 2888 is passed', async () => {

        const response = await request(app)
        .post("/convertToRomanNumerals")
        .send({
            arabic_number : 2888
        });
        expect(response.body.numeral).toEqual("MMDCCCLXXXVIII");
    });

    it('should receive Invalid number when number 3200 is passed', async () => {

        const response = await request(app)
        .post("/convertToRomanNumerals")
        .send({
            arabic_number : 3200
        });
        expect(response.body.error).toEqual("Invalid number for Romans");
    });


})


describe('Convert to Arabic number', () =>{
    it('should receive 1 when numeral I is passed', async () => {
        const response = await request(app)
        .post("/convertToArabicNumbers")
        .send({
            roman_numeral : 'I'
        });
        expect(response.body.arabic_number).toEqual(1);
    });

    it('should receive 4 when numeral IV is passed', async () => {
        const response = await request(app)
        .post("/convertToArabicNumbers")
        .send({
            roman_numeral : 'IV'
        });
        expect(response.body.arabic_number).toEqual(4);
    });

    it('should receive 16 when numeral XVI is passed', async () => {
        const response = await request(app)
        .post("/convertToArabicNumbers")
        .send({
            roman_numeral : 'XVI'
        });
        expect(response.body.arabic_number).toEqual(16);
    });

    it('should receive 49 when numeral XLIX is passed', async () => {
        const response = await request(app)
        .post("/convertToArabicNumbers")
        .send({
            roman_numeral : 'XLIX'
        });
        expect(response.body.arabic_number).toEqual(49);
    });
    it('should receive 98 when numeral XCVIII is passed', async () => {
        const response = await request(app)
        .post("/convertToArabicNumbers")
        .send({
            roman_numeral : 'XCVIII'
        });
        expect(response.body.arabic_number).toEqual(98);
    });

    it('should receive 1994 when numeral MCMXCIV is passed', async () => {
        const response = await request(app)
        .post("/convertToArabicNumbers")
        .send({
            roman_numeral : 'MCMXCIV'
        });
        expect(response.body.arabic_number).toEqual(1994);
    });

    it('should receive 2336 when numeral MMCCCXXXVI is passed', async () => {
        const response = await request(app)
        .post("/convertToArabicNumbers")
        .send({
            roman_numeral : 'MMCCCXXXVI'
        });
        expect(response.body.arabic_number).toEqual(2336);
    });
})
