const API_KEY = "AIzaSyDjTfgw4na402WNMmCYzvkxqPClBfW0vbo";
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

async function searchVideos() {

    const query = document.getElementById("query").value;

    try {
    const response = await fetch(`${BASE_URL}?part=snippet&q=${query}&type=video&key=${API_KEY}`);
    const data = await response.json();

    if (response.ok) {
      displayResults(data.items);
    } else {
      console.error("Error fetching videos:", data.error.message);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
}

