const { createApp } = Vue;

createApp({
    created() {
        const lastFmApiKey = '132bba6cefe591d8b6c9b76745bb1338';
        const artist = 'Beyoncé';
        const lastFmUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=${lastFmApiKey}&limit=10&format=json`;

        fetch(lastFmUrl)
            .then(response => response.json())
            .then(data => {
                    if (data.toptracks.track) {
                        this.songsData = data.toptracks.track;
                } else {
                    console.error('No top tracks found for Beyoncé');
                    this.error = 'No top tracks found for Beyoncé';
                }
            })
            .catch(error => {
                console.error('An error occurred while fetching top tracks from Last.fm:', error);
                this.error = 'An error occurred while fetching top tracks from Last.fm.';
            });
    },

    data() {
        return {
            songsData: [],
            selectedTrack: "",
            error: ''
        };
    },
        
    methods: {
            fetchSongInfo(gettoptracks){
                this.selectedTrack.albumName=""
                this.selectedTrack.albumPictureUrl="",
                this.selectedTrack.audioUrl="",
                this.error = false;
                let music = gettoptracks;
                let topMusic = music["crazyinlove.mp3","singleladies.mp3","irreplaceable.mp3","crazyinlove-ft-jayz.mp3","ifiwasaboy.mp3","sweetdreams.mp3","loveontop.mp3", "halo.mp3","cuffit.mp3","runtheworld.mp3"];

            
                fetch(`http://localhost/songs-api/public/songs/${topMusic}`)

                .then(response => response.json())
                .then(data => {
                    if (data) {
                        this.selectedTrack.albumName = song.albumname ? song.albumname: 'Not available';
                        this.selectedTrack.albumPictureUrl = song.pictureUrl ? song.albumname :'not available';
                        this.selectedTrack.audioUrl = song.filename ? song.filename: 'not available';
                    } else {
                        console.error("error");
                        this.error = 'No data found from songs';
                    }
                })
                .catch(error => {
                    console.error('cant fetch songs info from the songs API:', error);
                    this.error = "cant fetch songs info from the songs API :(";
                });
        }
    }
}).mount('#app');
