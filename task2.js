/* Return true if arr2[] is a subset  
of arr1[] */
function isSubset(arr1 = [], arr2 = [], m, n) 
{ 
  let i = 0; 
  let j = 0; 
  for (i = 0; i < n; i++) 
  { 
    for (j = 0; j < m; j++) 
      if(arr2[i] == arr1[j]) 
        break; 
      
    if (j == m) 
      return false; 
  } 
    
  return true; 
} 

arr1 = [1, 2, 0, 5, 8, 1, 3]; 
arr2 = [3, 0, 5, 2]; 
  
let m = arr1.length; 
let n = arr2.length; 

if(isSubset(arr1, arr2, m, n)) 
  console.log( arr2 + " is "
          + "subset of " + arr1); 
else
  console.log(arr2 + " is "
      + "not a subset of " + arr1); 