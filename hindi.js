      
        const audio = document.getElementById('musicPlayer');
        const tracks = [
            'songs/hindi/128-Main Nikla Gaddi Leke - Gadar 2 128 Kbps.mp3',
            'songs/hindi/128-Oonchi Oonchi Deewarein - Yaariyan 2 128 Kbps.mp3',
            'songs/hindi/Om-Deva-Deva-Namah.mp3',
            'songs/hindi/Tu-Aake-Dekhle.mp3',
            'songs/hindi/128-What Jhumka - Rocky Aur Rani Kii Prem Kahaani 128 Kbps.mp3'
        ];
                let currentTrackIndex = 0;
       
        // function playPause() {
        //     if (audio.paused) {
        //         audio.play();
        //     } else {
        //         audio.pause();
        //     }
        // }
        currentTrackIndex = (currentTrackIndex) % tracks.length;
        audio.src = tracks[currentTrackIndex];
       
        function playPause(){            
            //audio.src = tracks[currentTrackIndex];

            //document.getElementById('track_title').innerText = tracks[currentTrackIndex];
            let title = tracks[currentTrackIndex];
            //title.substr(14,);
            document.getElementById('track_title').innerText = title.substr(14,);
            if(audio.paused){
                audio.play();
              
            }else if(audio.played){
                audio.pause();
            }else{
                console.log("ee")
            }
        }
        function nextTrack() {
            currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
            //console.log(currentTrackIndex)
            audio.src = tracks[currentTrackIndex];
            let title = tracks[currentTrackIndex];
            
            document.getElementById('track_title').innerText = title.substr(14,);
            audio.play();
        }

        function prevTrack() {
            currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
            audio.src = tracks[currentTrackIndex];
            let title = tracks[currentTrackIndex];
            document.getElementById('track_title').innerText = title.substr(14,);
            audio.play();
        }
