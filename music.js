class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Kusura Bakma", "Blok3","1.jpg","1.mp3"),    
    new Music("Kaykay", "Era7capone","2.jpg","2.mp3"),    
    new Music("Bay Bay", "Era7capone","3.jpg","3.mp3")    
];
