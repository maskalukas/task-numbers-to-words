import {INotificationSms} from "./interfaces";

class NotificationSms implements INotificationSms {

    private readonly songsPath = process.env.PUBLIC_URL + "/songs/";

    private readonly songName: string;

    public constructor(songName: string) {
        this.songName = songName;
    }

    public runSong(): Promise<any> {
        const notifySong = new Audio(this.songsPath + this.songName);
        return notifySong.play();
    }
}

export default NotificationSms;
