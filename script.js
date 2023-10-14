const API_KEY = "5gSqAllWcDCPLN7n1Gd2sdjF604vRmq3zYREJZzUGd8";


const formElement = document.querySelector("form");
const inputElement = document.getElementById("searchinput");
const searchResults = document.querySelector(".search-results")

const showMore = document.querySelector(".showmorebtn");


let inputData = ""; //it will store all the words that user is typing in the search box

//initialse default page number nad when user click on show more btn ,it will increase

let page=1;

async function searchImages()
{
    inputData = inputElement.value;
    const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${API_KEY}`;

    const response = await fetch(URL);
    const data = await response.json();

    const results = data.results;

    if(page===1)
    {
        searchResults.innerText ="";
    }

    results.map((result)=>{
       const imageWrapper = document.createElement('div');
       imageWrapper.classList.add('search-result');
       const image = document.createElement('img');
       image.src=result.urls.small;
       image.alt = result.alt_description;
       const imagelink  = document.createElement('a');
       imagelink.href = result.links.html;
       imagelink.target = "_blank";
       imagelink.textContent = result.alt_description;

       imageWrapper.appendChild(image);
       imageWrapper.appendChild(imagelink);
       searchResults.appendChild(imageWrapper);

        
    })
    page++;
    if(page>1)
    {
        showMore.style.display = "flex";
    }
}

formElement.addEventListener("submit",function(event)
{
    event.preventDefault();
    page=1;
    searchImages();

});

showMore.addEventListener("click",()=>
{
  
    searchImages();

});