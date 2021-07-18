import {TVolumeReducerProps} from "../redux/reducers/types";
import {ISound} from "./interfaces";

class Sound implements ISound {

    private readonly songsPath = process.env.PUBLIC_URL + "/songs/";

    private readonly songName: string;

    private static DEFAULT_SONG_NAME = "beep.mp3";

    private readonly volumeState: TVolumeReducerProps;

    public constructor(volumeState: TVolumeReducerProps, songName?: string) {
        this.volumeState = volumeState;

        if(songName) {
            this.songName = songName;
        } else {
            this.songName = Sound.DEFAULT_SONG_NAME;
        }
    }

    public runSound(): void {
        if(this.volumeState.status) {
            const audio = new Audio(this.songsPath + this.songName);
            audio.play();
        }
    }
}

export default Sound;
