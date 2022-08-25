function categorySelection(num) {

  if (num === 1) {
    return 'Best Consumer Solution';
  } else if (num === 2) {
    return 'Most Innovative Solution';
  } else if (num === 3) {
    return 'Best Gaming Solution';
  } else if (num === 4) {
    return 'Best Health Solution';
  } else if (num === 5) {
    return 'Best Agricultural Solution';
  } else if (num === 6) {
    return 'Best Educational Solution';
  } else if (num === 7) {
    return 'Best Financial Solution';
  } else if (num === 8) {
    return 'Best Hackathon Solution';
  } else if (num === 9) {
    return 'Best “South African” Solution';
  } else if (num === 10) {
    return 'Best Campus Cup Solution';
  } else if (num === 11) {
    return 'Best African Solution';
  }
}
let num = Math.floor(Math.random() * 13);

console.log("MTN Business App of the Year in the year 2022 WIN PREDICTION IS "+categorySelection(num));
let start = window.prompt("Press ENTER to predict Or type 'Start")
