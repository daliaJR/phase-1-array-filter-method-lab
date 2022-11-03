// Code your solution here
// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function findMatching(arr,stringName){
    let newArr = arr.filter((e)=>{       
        if(e.toLowerCase() === stringName.toLowerCase())
        return e;
        
    })
    return newArr;
}
// console.log(findMatching(drivers,"Bobby"));

function fuzzyMatch(arr,stringName){ //(drivers. 'Sa)
    let newArr = arr.filter((e)=>{
        let len = stringName.length;
        
        for(let i = 0;i<len;i++){
            if(e.charAt(i).toLowerCase() ===  stringName.charAt(i).toLowerCase()){
                return e;
            }
        }
       
    })
    return newArr;
}

// console.log(fuzzyMatch(drivers,"Sa"));

function matchName(arr,stringName){

    let newArr = arr.filter((e)=>{
        if(e.name === stringName){
            return e;
        }
        
    });
    return newArr;
}

