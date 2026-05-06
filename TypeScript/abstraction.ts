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


// uisng abstract class

abstract class flower{
   abstract smell():void;
   abstract color():void;
   abstract temarature():void
}

class rose extends flower{
    smell(): void {
        console.log('Good Smell');
        
    }
    color(): void {
        console.log('red');
        
    }
    temarature(): void {
        console.log('slightly clod');
        
    }

}

const flower1 = new rose()
flower1.color();
flower1.smell();
flower1.temarature();
