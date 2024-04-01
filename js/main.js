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
        fetchSongInfo(song) {
            this.selectedTrack = song;

            const API_KEY = '132bba6cefe591d8b6c9b76745bb1338';
            const track = song.name;

            fetch(`https://ws.audioscrobbler.com/2.0/?method=track.getInfo&artist=beyonce&track=${track}&api_key=${API_KEY}&format=json`)
                .then(response => response.json())
                .then(data => {
                    if (data.track) {
                        const trackInfo = data.track;
                        this.selectedTrack.albumName = trackInfo.album.title ? trackInfo.album.title[0]: 'Not available';
                        this.selectedTrack.albumPictureUrl = trackInfo.album.image ? trackInfo.album.image[3]['#text']:'';
                        this.selectedTrack.audioUrl = trackInfo.url? trackInfo.url:'';
                    } else {
                        console.error('No track data found');
                        this.error = 'No track data found';
                    }
                })
                .catch(error => {
                    console.error('An error occurred while fetching track info from Last.fm:', error);
                    this.error = "An error occurred while fetching track info from Last.fm.";
                });

            fetch(`http://localhost/songs-api/public/songs/${song.id}`)
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        this.selectedTrack.albumName = data.album.albumname ? data.album.albumname: 'Not available';
                        this.selectedTrack.albumPictureUrl = data.picture.picturename ? data.album.albumname :'';
                        this.selectedTrack.audioUrl = data.filename ? data.filename: '';
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
