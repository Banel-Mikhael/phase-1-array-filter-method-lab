// Code your solution here
function findMatching(array,name){

   const result=array.filter(item => item.toUpperCase()==name.toUpperCase())

   if(result !== undefined){
 
    return result
   } else{
    undefined
   }
}

function fuzzyMatch(array,letter){
    
   //  const result=array.filter(name => name.charAt(0).toUpperCase()===letter.toUpperCase())
   const result=array.filter(name => name.startsWith(letter));
    return result
}

function matchName(array,name){
    const result =array.filter(item => item.name ===name)

    return result
}