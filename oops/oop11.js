// polymorphism
class Mediplayer{
    play(){
        console.log("Play media. ");
    }
}

// By using extends Mediplayer, you are telling JavaScript (and other developers): "Both Video and Music are guaranteed to have ALL the methods that Mediplayer has."

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