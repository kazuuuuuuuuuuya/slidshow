let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_11.png?wb=60%2C60&ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_31.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_14.png?wb=60%2C60&ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_15.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_16.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_13.png?wb=120%2C120&ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_18.png?wb=60%2C60&ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_19.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_21.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_22.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_23.png?wb=120%2C120&ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_25.png?wb=60%2C60&ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_36.png?wb=60%2C60&ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_12.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_24.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_17.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_20.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_26.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_27.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_28.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_29.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_30.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_32.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_33.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_34.png?ssl=1",
"https://i0.wp.com/storage.googleapis.com/images.gamepedia.jp/pokemon/master/m201_35.png?ssl=1"
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
  }, 500);
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
