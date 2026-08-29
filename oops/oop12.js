// polymorphism

class Mediplayer{
    play(){
        console.log("Play media. ");
    }
}
class Video extends Mediplayer{
    play(){
        console.log("Play video player. ");
    }
}
class Music extends Mediplayer{
    play(){
        console.log("Play music player. ");
    }
}

let a = new Video();
let b = new Music();

a.play();
b.play();