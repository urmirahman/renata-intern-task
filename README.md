# Renata FrontEnd Task

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
Given Task:

- [x] [Build] Make a two page application for encryption/decryption message
- [x] [Data Processing] Dependent Dropdowns

### Tach Stack

- [x] React - For Front-End Library 🏡
- [x] TailWindCSS - For Simple Style 💄 & responsiveness ✨
- [x] CSS - Simple Animations 💫
- [x] SheetJS - For parsing excel data

## How to start

See LIVE here: [Renata Task Application](https://renata-frontend-task.netlify.app/)

Or

Install the dependencies and devDependencies and start the server.

```sh
npm install
npm start
```

✨ Simple!

## TasK One

#### Encryption Process:

1. Take an object of array of all alphabates

```sh
const alphabates = {
    upperCase:['A','B','C',...],
    lowerCase:['a','b','c',...]
}
```

2. Recieve the message from Input field
3. Generate a random number for _secret key_. between 1-25
4. Match the message letters with alphabate object to find index
5. Add the _secret key_. with index
6. Shift the letter number of _secret key_. times
7. Round up the letter if new index > 26
8. Concant the new shifted leeter starting with the _secret key_.
9. Finally replace the 'SPACE' with point (.)

#### Additional feature

Copy to clipboard to copy the result

#### Limitation

Only message of characters with uppercase or lowercase can be encoded.

#### Result

```sh
input: CATS And DOGS
output: 25BZSR.Zmc.CNFR
```

#### Decryption Process:

Reverse The Encryption process

1. Separate the _secret key_. from encode message
2. Find the letters from alphabate object
3. Subtract the _secret key_. from each index of letters
4. Shift back the letters by*secret key*. times
5. If new index < 0 round up the letter backward
6. Concat the decoded letters
7. Replace the point(.) with 'SPACE'

#### Limitation

Only characters with uppercase or lowercase, numbers and point(.) can be decoded.

#### Result

```sh
input:25BZSR.Zmc.CNFR
output:CATS And DOGS
```

## TasK Two

#### Web resource url Finded :

Data Processing from excel sheet:

1. Used SheetJs for parsing the data from excel sheet
2. Parsing the data from excel file within onload event

```sh
 var url = "data.xlsx"; // the excel file should be in public folder

  useEffect(() => {
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    oReq.onload = function (e) {
      var arraybuffer = oReq.response;

      /* convert data to binary string */
      var data = new Uint8Array(arraybuffer);
      var arr = [];
      for (var i = 0; i !== data.length; ++i)
        arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");

      /* Call XLSX */
      var workbook = XLSX.read(bstr, {
        type: "binary",
      });

      /* DO SOMETHING WITH workbook HERE */
      var first_sheet_name = workbook.SheetNames[0];
      /* Get worksheet */
      var worksheet = workbook.Sheets[first_sheet_name];
      var data__raw = XLSX.utils.sheet_to_json(worksheet, {
        raw: true,
      });
      console.log("line 33", data__raw);
      setFetchedData(data__raw);
      console.log(
        XLSX.utils.sheet_to_json(worksheet, {
          raw: true,
        })
      );
    };

    oReq.send();
    },[url])
```

3. Set the data in a react state
4. Map the first field Language in the Language Dropdown
5. After selecting the first dropdown option filter the fetched data according to the selected Laguage field.then map the second dropdown
6. Same process with the third dropdown after selecting the topic field from second dropdown
7. Finallay find the Iframe link after according to the value of three dropdown

#### Problem faced during solving the problem

1. All the W3school.com links are blocked by their Content Security Policy.That's why , all the links refuse to connect in the iFrame.
2. Parsing the Data from Excel sheet was tough.

#### Solutions:

1. For problem One Couldn't found any solution to show the url links because w3school refuse to connect because of there policies. Only in there domain Iframe works fine because of own domain.
2. First three Iframe link data is changed with other resource links in the excel file just to show the logic works fine.
3. A Default Link is provided in iFrame .
