document.addEventListener('DOMContentLoaded', () => {
    const gifForm = document.getElementById('gifForm');
    const gifContainer = document.getElementById('gifContainer');
    const removeGifsBtn = document.getElementById('removeGifsBtn');

    gifForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const searchTerm = document.getElementById('searchTerm').value;
        try {
            const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=YOUR_API_KEY`);
            const gifUrl = response.data.data[0].images.fixed_height.url; // Grabbing the URL of the first GIF
            appendGif(gifUrl);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });

    removeGifsBtn.addEventListener('click', () => {
        gifContainer.innerHTML = ''; // Clear all GIFs from the container
    });

    function appendGif(gifUrl) {
        const img = document.createElement('img');
        img.src = gifUrl;
        img.alt = 'GIF';
        gifContainer.appendChild(img);
    }
});