var vs = {
    student: []
}

vs.student.push({id:1, name:"allan"});
var json = JSON.stringify(vs);

var fs = require('fs');
fs.writeFile('voting_system.json', json, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

fs.readFile('voting_system.json', (err, data)=>{
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object
    obj.student.push({id: 2, name:"mary"}); //add some data
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile('voting_system.json', json, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    })// write it back 
}});
