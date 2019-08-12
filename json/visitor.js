

var fs = require('fs');
var count = 0;
module.exports = class Visitor {
  constructor ( name,surname, date, time, assistant, comments){
      this.name = name ;
      this.surname = surname;
      this.date = date;
      this.time = time;
      this.comments = comments;
      this.assistant = assistant;
      
  }
   Count() {
      count += 1;
  }
  save() {
    this.Count();
    let file = JSON.stringify(this,null,2);
    fs.writeFile("visitor_" + count,file , function (err) {
       if(err)  throw err;
        console.log("File was saved")  
       
   });
  }
  load(i) {
      fs.readFile("./visitor_" + i, "utf8",(err, file) => {
       if (err) throw err;
       console.log(file);
     });
}}
