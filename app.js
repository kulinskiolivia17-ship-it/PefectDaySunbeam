const API_KEY = "AIzaSyDjTfgw4na402WNMmCYzvkxqPClBfW0vbo";
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

const songs = localStorage.getItem('allEntries') || [];

console.log(songs);
// document.getElementById('songs').textContent = songs;

const songsJSON = JSON.parse(songs);

const songsContainer = document.getElementById("songs");

songsJSON.forEach(song => {
    const songCard = document.createElement("div");
    songCard.classList.add("song-card");

    songCard.innerHTML = `
    <h3 class="nomargin">${song.title}</h3>
    <a href="${song.url}" class="colored" target="_blank">Play Song</a>
    `

    console.log(song.title);

    songsContainer.appendChild(songCard);
})




async function searchVideos() {
    console.log("hello");

    const query = document.getElementById("query").value;

    try {
    const response = await fetch(`${BASE_URL}?part=snippet&q=${query}&type=video&key=${API_KEY}`);
    const data = await response.json();

    if (response.ok) {
        console.log(data);
      displayResults(data.items);
    } else {
      console.error("Error fetching videos:", data.error.message);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
}

function displayResults(videos) {
    console.log("in add entry!");
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; 

  videos.forEach((video) => {
    const videoElement = document.createElement("div");
    videoElement.classList.add("video");

    videoElement.innerHTML = `
      <h3>${video.snippet.title}</h3>
      <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}" />
      <a href="#" onclick="addEntry('${video.snippet.title}', 'https://www.youtube.com/watch?v=${video.id.videoId}'); return false;">Add Song</a>
      `;

    // <p>${video.snippet.description}</p>
    //   <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">Watch Video</a>

    resultsContainer.appendChild(videoElement);
  });
}

function addEntry(title, url)
{
    console.log("in add entry!");
    let existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null)
    {
        existingEntries = [];
    }

    let entryTitle = title;
    let entryUrl = url;

    let entry = {
        "title": entryTitle,
        "url": entryUrl
    };

    localStorage.setItem("entry", JSON.stringify(entry));
    existingEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
}

