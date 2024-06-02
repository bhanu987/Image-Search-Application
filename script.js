let  ACCESS_KEY = 'QnMCMLtE2TjRhwQJJS_zl5rXNTyVH6Z3tFtNam6U2Ww'


let search_btn = document.getElementById('search-btn');


//TtUrE0KQ-p47U-49nXqQNsIWi43L_yQdY9zLNiG8CAE  secret key

//https://api.unsplash.com/photos/random?query=your_keyword&page=your_page_number&client_id=YOUR_ACCESS_KEY


search_btn.addEventListener('click',()=>{

    console.log("inside event listener")
    let input =  document.getElementById('inputText').value
    console.log(input)
    fetchTheAPI(input);

    card_div.innerHTML= "";
})

let card_div = document.getElementById('card-section')

let fetchTheAPI = async (query)=>{

    
console.log(query)

//https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${API_KEY}`
let API_URL = `https://api.unsplash.com/search/photos?query=${query}&page=1&client_id=${ACCESS_KEY}`;

    console.log(API_URL)


    let firstAwait = await fetch(API_URL);
    let response = await firstAwait.json();

    console.log(response.results);

    console.log(typeof(response))

    createCards(response.results);


}

function createCards(data){
data.forEach(element => {

    card_div.innerHTML += 

    `
    <div class="flex card">
        <img src="${element.urls.small}" alt="${element.alt_description
        }">
        <div> <a href="${element.links.html}">${element.alt_description}</a></div>
    </div>
    `;
    
});
   

}
