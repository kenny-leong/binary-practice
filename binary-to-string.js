function binaryToString(binaryBlob) {
  let strList = binaryBlob.split('');
  let str = '';
  let count = 0;

  for (let i=0;i<strList.length;i++) {
    str += strList[i];
    count++;

    if (count%8==0) {
      str += ','
    }
  }

  strList = str.split(',');
  str = '';

  strList.forEach(element => {
    let int = parseInt(element, 2);
    str += String.fromCharCode(int);
  });
  return str;
}

/* Comment in the code below to run local tests */
console.log(binaryToString('010000010100001001000011')); // 'ABC'
console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;
