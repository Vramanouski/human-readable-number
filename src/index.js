
  module.exports = function toReadable (number) {
    let edi = number % 10;
    let des = Math.floor(number % 100 / 10);
    let sot = Math.floor(number / 100);
    let result = 0;
    let check = number % 10;
    switch (edi) {
        case 1:
        edi = 'one';
        break;

        case 2:
        edi = 'two';
        break;

        case 3:
        edi = 'three';
        break;

        case 4:
        edi = 'four';
        break;

        case 5:
        edi = 'five';
        break;

        case 6:
        edi = 'six';
        break;

        case 7:
        edi = 'seven';
        break;

        case 8:
        edi = 'eight';
        break;

        case 9:
        edi = 'nine';
        break;

            default:
            edi ='';
    }


    switch (des) {
        case 1:
        des = '1'
        break;

        case 2:
        des = 'twenty';
        break;

        case 3:
        des = 'thirty';
        break;

        case 4:
        des = 'forty';
        break;

        case 5:
        des = 'fifty';
        break;

        case 6:
        des = 'sixty';
        break;

        case 7:
        des = 'seventy';
        break;

        case 8:
        des = 'eighty';
        break;

        case 9:
        des = 'ninety';
        break;

            default:
            des ='';
    }


    if (des == '1' && edi == 'one') { des = 'eleven';  edi = '';}
    if (des == '1' && edi == 'two') { des = 'twelve';  edi = '';}
    if (des == '1' && edi == 'three') { des = 'thirteen';  edi = '';}
    if (des == '1' && edi == 'four') { des = 'fourteen';  edi = '';}
    if (des == '1' && edi == 'five') { des = 'fifteen';  edi = '';}
    if (des == '1' && edi == 'six') { des = 'sixteen';  edi = '';}
    if (des == '1' && edi == 'seven') { des = 'seventeen';  edi = '';}
    if (des == '1' && edi == 'eight') { des = 'eighteen';  edi = '';}
    if (des == '1' && edi == 'nine') { des = 'nineteen';  edi = '';}
    if (des == '1' && edi == '') { des = 'ten';  edi = '';}



    switch (sot) {
        case 1:
        sot = 'one hundred';
        break;

        case 2:
        sot = 'two hundred';
        break;

        case 3:
        sot = 'three hundred';
        break;

        case 4:
        sot = 'four hundred';
        break;

        case 5:
        sot = 'five hundred';
        break;

        case 6:
        sot = 'six hundred';
        break;

        case 7:
        sot = 'seven hundred';
        break;

        case 8:
        sot = 'eight hundred';
        break;

        case 9:
        sot = 'nine hundred';
        break;

            default:
            sot ='';
    }

if (check == 0 && sot == '' && des == '') {
    result = 'zero';
} else if (sot == '' && des == '') {
    result = `${edi}`;
} else if (edi == '' && des ==''){
    result = `${sot}`;
} else if (des == '' && sot != ''){ 
    result = `${sot}` + ' ' + `${edi}`;
} else if (edi == '' && sot != '') {
    result = `${sot}` + ' ' + `${des}`;
} else  if (sot == '' && edi != '') {
    result = `${des}`+ ' ' + `${edi}`; 
} else  if (sot == '' && edi == '') {
    result = `${des}`; 
} else  if (sot == '' && des == '') {
    result = `${edi}`;
} else {
    result = `${sot}` + ' ' + `${des}`+ ' ' + `${edi}`;

}

    return result;
}
