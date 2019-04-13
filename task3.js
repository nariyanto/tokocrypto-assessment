function compare(a, b) {
  // console.log(a)
  const dateA = a.date.toUpperCase();
  const dateB = b.date.toUpperCase();
  
  let comparison = 0;
  if (dateA > dateB) {
    comparison = 1;
  } else if (dateA < dateB) {
    comparison = -1;
  }
  return comparison;
}

function digitsCount(n) {
  var count = 0;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }

  return count;
}

function createNewFile(cont) {
  let arr = cont.split("\n");
  let tempArray = [];
  let arrDate = [];
  let arrCat = [];

  for (i=0; i<arr.length; i++) {
    let x = arr[i].split(',');
    if (x.length == 3) {
      let date = x[2].trim()
      let category = x[1].trim()
      let filename = x[0].trim()
      let arr = [];

      arrDate.push(date)
      if (arrCat.indexOf(category) < 0) {
        arrCat.push(category)
      }
      arr = {date:date, filename:filename}
      if (category in tempArray) {
        tempArray[category].push(arr)
      } else {
        tempArray[category] = []
        tempArray[category].push(arr)
      }
    }
  }

  // console.log(tempArray)
  var newArr = []
  arrCat.forEach(element => {
    // console.log(tempArray[element])
    let countFile = tempArray[element].length
    let countDigit = digitsCount(countFile);
    let counter = 0;
    tempArray[element].sort(compare).forEach(obj => {
      counter += 1
      newFilename = element + counter.toString().padStart(countDigit, '0') + obj.filename.substring(obj.filename.length-4);
      newArr[obj.date] = newFilename
    })
  });

  // console.log(arrDate)
  arrDate.forEach(el => {
    console.log(newArr[el])
  });
}

let cont = `selfie.jpg, Malang, 20100101341509
abdul.png, Surabaya, 20090101140815
Temanteman.png, Malang, 20130905071413
Eiffel.jpg, Balikpapan, 20150723030802
pisatower.jpg, Balikpapan, 20150722235959
arif.ipg, Surabaya, 20150805030200
bismalam.png, Balikpapan, 20150911120000
batu.jpg, Malang, 20130906154022
a.png, Malang, 20160513133300
b.jpg, Malang, 20160102151222
c.jpg, Malang, 20160102143430
d.jpg, Malang, 20160102151501
e.png, Malang, 20160102094909
f.png, Malang, 20160102100533
g.jpg, Malang, 20160229221311`;

createNewFile(cont); 