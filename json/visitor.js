
var count = 0;
 class Visitor {
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
    var fs = require('fs');
    this.Count();
    let file = JSON.stringify(this,null,2);
    fs.writeFile("visitor_"+ count +".json" ,file , function (err) {
       if(err)  throw err;
       
      });
      return "File was saved" 
  }
  load(i) {
    var fs = require('fs');
      fs.readFile("./visitor_" + i + ".json" , "utf8",(err, file) => {
       if (err) throw err;
       return file;
       
     });
     
}}
module.exports = Visitor;