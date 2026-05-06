interface MediaPlayer{
    play():void;
    pause():void;
    stop():void;
    
}

class MusicPlayer implements MediaPlayer{

    play(): void {
        console.log('Playing music....');
    }

    pause(): void {
        console.log('Muisc pause');
    }

    stop(): void {
        console.log('Music Stoped');
    }

}

const myPlayer = new MusicPlayer();
myPlayer.play();
myPlayer.pause();
myPlayer.stop();
