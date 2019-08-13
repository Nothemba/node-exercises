describe("Visitor Class" ,function(){
        
        beforeEach(function(){
         let Visitor = require('../visitor');
            visitor = new Visitor("emihle Tsheme", 22, "01/08/2019", "12:30", "Great", "Bonga")
        });
        it("Check if Visitor is defined", function(){
         expect(visitor).toBeDefined();
        });

describe('save()', function() {
   it('should be able to get values', function() {
       expect(visitor.save()).toBeDefined()
   })
   it("Should Create a file that saves the visitor's data.",function(){
      expect(visitor.save()).toEqual("File was saved");
    });
  
   it('should throw an error when the function is unable to create a new file ', function() {
       visitor = function () {
           throw ('Cannot save file');
       }
       expect(visitor).toThrow('Cannot save file');
   });
})
describe("load",function(){
    it('load function should be defined', function(){
        expect(visitor.load(1)).toBeDefined;
})
it("Should be able to take in a number as a parameter and return the corresponding file's data.",function(){
     let result = {"fullName":"emihle Tsheme","age":22,"VisitDate":"01/08/2019","VisitTime":"12:00","comments":"Great","assistant":"Bonga"}
    expect(visitor.load(1)).toEqual(result);
  });

    
})
})

 
 
  