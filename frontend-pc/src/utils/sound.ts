import {ISound} from "./interfaces";

class Sound implements ISound {

    private readonly songsPath = process.env.PUBLIC_URL + "/songs/";

    private readonly songName: string;

    private static DEFAULT_SONG_NAME = "beep.mp3";

    public constructor(songName?: string) {
        if(songName) {
            this.songName = songName;
        } else {
            this.songName = Sound.DEFAULT_SONG_NAME;
        }
    }

    public runSound(): Promise<any> {
        const audio = new Audio(this.songsPath + this.songName);
        return audio.play();
    }
}

export default Sound;
