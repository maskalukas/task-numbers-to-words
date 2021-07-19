import {TVolumeReducerProps} from "../redux/reducers/types";
import {ISound} from "./interfaces";

/** @inheritDoc */
class Sound implements ISound {

    /**
     * The base path to the sounds folder.
     */
    private readonly songsPath = process.env.PUBLIC_URL + "/songs/";
    /**
     * The current song name that will be triggered.
     */
    private readonly songName: string;

    /**
     * The default song name.
     */
    private static DEFAULT_SONG_NAME = "beep.mp3";

    /** @inheritDoc */
    private readonly volumeState: TVolumeReducerProps;

    public constructor(volumeState: TVolumeReducerProps, songName?: string) {
        this.volumeState = volumeState;

        if(songName) {
            this.songName = songName;
        } else {
            this.songName = Sound.DEFAULT_SONG_NAME;
        }
    }

    /** @inheritDoc */
    public runSound(): void {
        if(this.volumeState.status) {
            const audio = new Audio(this.songsPath + this.songName);
            audio.play();
        }
    }
}

export default Sound;
