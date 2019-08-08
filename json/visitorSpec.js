const Visitor = require('./visitor')
visitor = new Visitor("Emihle", 21, "21/07/2019", "10:30", "Good", "Bonga")
describe('save()', function() {
   it('should be able to get values', function() {
       expect(visitor.save()).toBeDefined()
   })
  
   it('should throw an error when the function is unable to create a new file ', () => {
       visitor = function () {
           throw ('Cannot save file');
       }
       expect(visitor).toThrow('Cannot save file');
   });
})
describe('load()', function(){
  it('should be called ', function() {
    expect(visitor.load(1)).toHaveBeenCalled();
});
it('should return json file', () => {
    expect(visitor.load(1)).toEqual({
        fullName: "Emihle Tsheme",
        age: 21,
        date: "21/07/2019",
        time:  "10:30",
        comments: "Good",
        assistent: "Bonga",
    });
})
})
  



