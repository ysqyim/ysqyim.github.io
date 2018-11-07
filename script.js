const searchButton = document.getElementById('searchButton');
const searchWord = document.getElementById('searchInput');

searchButton.addEventListener("click", getGiphy);


function getGiphy() {

	
    fetch("https://api.giphy.com/v1/gifs/search?q=" + searchWord.value  + "&api_key=1YOfE5g6JayGlLiiyR3EoIWra4MSNMTm&limit=30")
	
    .then((giphy) => giphy.json())
	
    .then(function(newGiphy) {

        console.log(newGiphy);
		

	    const resultContainer = document.getElementById('resultContainer');
        
        resultContainer.innerHTML = "";

        for (i = 0; i < newGiphy.data.length; i++)  {

	    	const imageUrl = newGiphy.data[i].images.original.url;

	    	const imgElement = document.createElement('img');

	    	imgElement.setAttribute('src', imageUrl);

            imgElement.setAttribute('class', 'giphyImage');

            resultContainer.appendChild(imgElement);
	    	
	    }
	  }).catch(err => null);
	}
