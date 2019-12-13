function encryption(){
    var text = document.getElementById('input_encryp').value;

    var toBinarySET = [];
    var result = null;

    let tmpASCII = null;
    let multipleRES = 0;
    let tmpBinary = 0;

    var oNe = parseInt(parseInt(text.length)%2);        
    var getPRIMITIVE = getPrimitive(parseInt(text.length));
    if(isNaN(parseInt(getPRIMITIVE))) {console.log('Out of dictionary'); return false;}
    else
    {
        for (let i = 0; i < text.length; i++) 
        {
            tmpASCII = text.charAt(i).charCodeAt(0);
            multipleRES = parseInt(tmpASCII)* parseInt(getPRIMITIVE);
            tmpBinary = multipleRES.toString(2);
            let pl = tmpBinary.length;
            let zeroFillment = '';
            for(let j = pl; j<32;j++)
            {
                zeroFillment = zeroFillment+"0";
            }
            tmpBinary = zeroFillment + tmpBinary;
            if(oNe === 0 )
            {
                let tmpDigi =  tmpBinary.substr(tmpBinary.length - 1);
                tmpBinary = tmpDigi + tmpBinary.substr(0,tmpBinary.length - 1);
            }
            else if(oNe === 1 )
            {
                let tmpDigi = tmpBinary.substr(tmpBinary.length - 2);
                tmpBinary = tmpDigi + tmpBinary.substr(0, tmpBinary.length - 2);
            }
            toBinarySET.push(tmpBinary);
        }
        result = toBinarySET.toString().replace(/,/g, "");
        result = '1' + result + '1';
        var output = document.getElementById('output_encryp').value = result;
    }      
}