export function twoSum(array:number[], target: number){
  let left = 0, right = array.length -1
   while(left < right){
     const sum = array[left] + array[right]
     if(sum === target) return [array[left], array[right]]
     else if(sum > target) right --
     else left++
   }
   return []
}
