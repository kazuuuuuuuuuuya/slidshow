let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_11.png?wb=60%2C60&ssl=1",
"https://pokemongo-get.com/wp-content/themes/simplicity2-child/images/pokemongo_unknown/2.png?1",
"https://pokemongo-get.com/wp-content/themes/simplicity2-child/images/pokemongo_unknown/3.png?1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_14.png?wb=60%2C60&ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_15.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_16.png?ssl=1",
"https://pokedex.pokemongo-raku.com/wp-content/uploads/images/pokemon/201_g.png",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_18.png?wb=60%2C60&ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_19.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_21.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_22.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_23.png?wb=120%2C120&ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_25.png?wb=60%2C60&ssl=1",
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
