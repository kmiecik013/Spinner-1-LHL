let time = 0; 
const animateArray = ["|", "/", "-", "|", "\\"] ; 

  for (let i = 0; i < animateArray.length; i++){
    time += 100
  //console.log(frames,time);
  
  setTimeout(() => {
    process.stdout.write(`\r${animateArray[i]}  `)
  }, time);
}  


/*
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|    ');
}, 800);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1100);
*/