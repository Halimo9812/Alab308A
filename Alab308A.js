//Counter Variable//

let counter = 0 //Global variable

function increment(){
  try {

   counter++;
   increment()
} catch (e) {
    console.log(counter);
    console.error(e)
}
}
increment();