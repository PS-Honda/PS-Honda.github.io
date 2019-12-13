function decryption()
{
    var results = '';
    var respond = document.getElementById('input_decryp').value;
    respond = respond.substr(1, respond.length -2);   
    var nOs = Math.round(parseInt(parseInt(respond.length)) / 32);
    var oNe = parseInt(parseInt(nOs) % 2); 
    var getPRIMITIVE = getPrimitive(nOs);
    if (isNaN(parseInt(getPRIMITIVE))) { console.log('Out of dictionary'); return false; } 
    var toBinarySET = [];
    for (let i = 0; i < nOs; i++ )
    {   
        var tmpBinary = '';
        if (i == 0) {tmpBinary = respond.substr(0 , 32);}
        else if (i > 0) {tmpBinary = respond.substr((32*i), 32);}
        if (oNe === 0) {
            let tmpDigi = tmpBinary.substr(0,1);
            tmpBinary = tmpBinary.substr(1, tmpBinary.length) + tmpDigi;
        }
        else if (oNe === 1) {
            let tmpDigi = tmpBinary.substr(0, 2);
            tmpBinary = tmpBinary.substr(2, tmpBinary.length) + tmpDigi;
        }
        var tmpZero = 0;
        for (let j = 0; j < 32; j++) 
        {
            let singleZero = tmpBinary.substr(j, 1);
            if (singleZero == '1' ) break;
            else tmpZero++;
        }
        tmpBinary = tmpBinary.substr(tmpZero);
        tmpBinary = parseInt(tmpBinary, 2).toString(10);
        let divideRES = parseInt(tmpBinary) / parseInt(getPRIMITIVE);
        results = results + String.fromCharCode(divideRES);
        
    }
    var output = document.getElementById('output_decryp').value = results;
}