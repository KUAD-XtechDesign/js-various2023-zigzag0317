//参考: https://nnc-studio.jp/plugin/2022/01/12/js-photoswipe/
photoswipeSimplify.init();

//順番に表示
$(".pics_list img").each(function(index,element){
  setTimeout(function(){ 
    $(element).fadeIn();
  },index*200)
})

const CLASSNAME = "-visible";
const TIMEOUT = 1500;
const $target = $(".title");

setInterval(() => {
  $target.addClass(CLASSNAME);
  setTimeout(() => {
    $target.removeClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT * 2);

let sound;

//音源用意
let sound_list=[
  new Audio('../dummy_sound/sound05.mp3'),
];

function soundPlay(index){
  sound.loop=true;//ループ再生設定
  sound.play();//再生
}

function volumeUp(){
  if(sound.volume<=0.6){//音量が0.6以下なら
    sound.volume +=0.05;//ボリューム上げる
    setTimeout(volumeUp,100);//少し待って繰り返し(再帰)
  }
}
	
