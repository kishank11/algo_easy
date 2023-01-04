export function validateSub(array: number[], sequence: number[]) {
    // Write your code here.
    let seqIdx=0;
    for(const value of array){
     if(seqIdx==sequence.length)
     {
      break;
     }
     if(sequence[seqIdx]==value)
     {
     seqIdx++;
     }

    }
    return seqIdx=== sequence.length;
  }
const ans =validateSub([1,32,43,431],[32,23,23,122]);

console.log(ans)