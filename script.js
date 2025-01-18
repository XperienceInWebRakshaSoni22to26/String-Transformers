const inputdata = document.querySelector('.inputdata');
const lowercasetext = document.querySelector('.lowercase span');
const uppercasetext = document.querySelector('.uppercase span');
const camelcasetext = document.querySelector('.camelcase span');
const pascalcasetext = document.querySelector('.pascalcase span');
const snakecasetext = document.querySelector('.snakecase span');
const kebabcasetext = document.querySelector('.kebabcase span');
const trimcasetext = document.querySelector('.trim span');


function firstlettercapital(str) {
    const firstletter = str[0].toUpperCase();
    const remainletter = str.slice(1, str.length);
    return firstletter + remainletter;
}

function camelcase(string) {
    const lowercasestring = string.toLowerCase();
    const splitlowercasestring = lowercasestring.split(" ");

    const finalcamelcase = splitlowercasestring.map((val, i) => {
        if (i == 0) {
            return val;
        }
        return firstlettercapital(val);


    });
    return finalcamelcase.join(' ');

}

function pascalcase(string) {
    const lowercasestring = string.toLowerCase();
    const splitlowercasestring = lowercasestring.split(" ");

    const finalcamelcase = splitlowercasestring.map((val, i) => {

        return firstlettercapital(val);


    });
    return finalcamelcase.join(' ');

}

function snakecase(string) {
    const snakestring = string.split(" ");

    return snakestring.join('_');

}

function kebabcase(string) {
    const kebabstring = string.split(" ");

    return kebabstring.join('-');

}

function trimcase(string) {
    const trimstring = string.split(" ");

    return trimstring.join('');

}

inputdata.addEventListener('input', () => {
    const inputvalue = inputdata.value;
    const lowercaseoutput = inputvalue.toLowerCase();
    const uppercaseoutput = inputvalue.toUpperCase();
    const camelcaseoutput = camelcase(inputvalue);
    const pascalcaseoutput = pascalcase(inputvalue);
    const snakecaseoutput = snakecase(inputvalue);
    const kebabcaseoutput = kebabcase(inputvalue);
    const trimcaseoutput = trimcase(inputvalue);

    lowercasetext.innerText = lowercaseoutput;
    uppercasetext.innerText = uppercaseoutput;
    camelcasetext.innerText = camelcaseoutput;
    pascalcasetext.innerText = pascalcaseoutput;
    snakecasetext.innerText = snakecaseoutput;
    kebabcasetext.innerText = kebabcaseoutput;
    trimcasetext.innerText = trimcaseoutput;
});