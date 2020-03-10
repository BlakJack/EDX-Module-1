const fs = require('fs');
fs.readFile('customer-data.csv', "utf8", (err, data) =>{
        if(err) console.error(err);
        data = data.split("\r\n");
        let keys = data[0].split(",");
        let jsonArr = [];
        for(let i =1; i<data.length; i++){
                let vals = data[i].split(",");
                jsonArr[i-1] = {};
                for(let j = 0; j<keys.length; j++){
                        jsonArr[i-1][keys[j]] = vals[j];
                }
        }
        console.log(jsonArr);
})
