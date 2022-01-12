function scuberGreetingForFeet(freeSample){
  // Write your code here!
  let result;
  if (freeSample <= 400){
    result = 'This one is on me!';
  } else if (freeSample > 2500) {
    result = 'No can do.';
  } else if (freeSample > 2000){
    result = 'I will gladly take your thirty bucks.';
  } 
  return result;
}

function ternaryCheckCity(city){
  // Write your code here!
  let result;
  if (city == 'NYC') {
     result = 'Ok, sounds good.';
  } else {
    result = 'No go.';
  }
 return result;
}

function switchOnCharmFromTip(generousTip){
  // Write your code here!
 
 switch (generousTip) {
    case 'generous':
     return 'Thank you so much.';
    break;

    case 'not as generous':
     return 'Thank you.';
    break;

    case 'thanks for everything': 
      return 'Bye.';
    break;
  } 
}