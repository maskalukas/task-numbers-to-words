import {ISound} from "./interfaces";
import {TVolumeReducerProps} from "../redux/reducers/types";

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

    public runSound(): Promise<void|false> {
        if(this.volumeState.status) {
            const audio = new Audio(this.songsPath + this.songName);
            return audio.play();
        } else {
            return new Promise((resolve) => resolve(false))
        }

    }
}

export default Sound;
