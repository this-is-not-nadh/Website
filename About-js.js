document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('[data-tab-content]');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the target content ID from the button's data attribute
            const targetId = button.dataset.tabTarget;
            const targetContent = document.querySelector(targetId);

            // Deactivate all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate the clicked button and its corresponding content
            button.classList.add('active');
            targetContent.classList.add('active');
        });
    });
});

// Music player
const songs = [
            {
                title: "世間知らずの宇宙飛行士",
                artist: "ONE OK ROCK",
                album: "Zankyo Reference",
                year: "2011",
                spotifyUrl: "https://open.spotify.com/track/4md1JyYuvSFZ5OvUKJpSid?si=723787ebbb4341f6",
                imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e1/Zankyo_Reference_Ok_One_Rock_Album.jpg"
            },
            {
                title: "Purple Haze",
                artist: "Jimi Hendrix",
                album: "Are You Experienced",
                year: "1967",
                spotifyUrl: "https://open.spotify.com/track/0wJoRiX5K5BxlqZTolB2LD?si=c5534af477d94aee",
                imageUrl: "https://images.genius.com/f609014752c6aa89e3706a6e6509e47c.1000x1000x1.jpg"
            },
            {
                title: "You and I",
                artist: "Anarbor",
                album: "Free Your Mind",
                year: "2009",
                spotifyUrl: "https://open.spotify.com/track/2iIxheqTYiaRm1Xn2hJlY8?si=ccfe9fefa2f0438c",
                imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/68/Free_Your_Mind_album_cover.jpg"
            }
        ];

        // Function to create a song card element from a song object
        function createSongCard(song) {
            // Create the main anchor element
            const card = document.createElement('a');
            card.className = 'song-card';
            card.href = song.spotifyUrl;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';

            // Create the album art image
            const albumArt = document.createElement('img');
            albumArt.className = 'album-art';
            albumArt.src = song.imageUrl;
            albumArt.alt = `${song.title} album art`;
            albumArt.onerror = () => {
                albumArt.src = 'https://placehold.co/80x80/1a202c/e2e8f0?text=No+Art';
            };

            // Create the text content container
            const textContent = document.createElement('div');
            textContent.className = 'text-content';

            // Create the domain link text
            const domainLink = document.createElement('span');
            domainLink.className = 'domain-link';
            domainLink.textContent = 'open.spotify.com';

            // Create the song title
            const songTitle = document.createElement('h3');
            songTitle.className = 'song-title';
            songTitle.textContent = song.title;

            // Create the song details
            const songDetails = document.createElement('p');
            songDetails.className = 'song-details';
            songDetails.textContent = `${song.artist} · ${song.album} · Song · ${song.year}`;

            // Append all the text elements to the text container
            textContent.appendChild(domainLink);
            textContent.appendChild(songTitle);
            textContent.appendChild(songDetails);

            // Append the image and text container to the main card
            card.appendChild(albumArt);
            card.appendChild(textContent);

            return card;
        }

        // Get the container element and add the cards
        window.onload = function() {
            const container = document.getElementById('song-cards-container');
            if (container) {
                songs.forEach(song => {
                    const cardElement = createSongCard(song);
                    container.appendChild(cardElement);
                });
            } else {
                console.error("Could not find the 'song-cards-container' element.");
            }
        };