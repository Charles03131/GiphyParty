

const form=document.querySelector("#searchform");
const searchInput=document.querySelector("#searchinput");
const subBtn=document.querySelector("#sub_btn");
const deleteBtn=document.querySelector("#delete");
const giphyArea=document.querySelector("#giphyarea");



subBtn.addEventListener("click",function(e){
  e.preventDefault(); 
getGiphy();
searchInput.value='';
console.log(searchInput.value);


});



async function getGiphy(){
  const response=await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchInput.value}&api_key=TYVxz0g48xQKiDQ2pbRM1p567CqIPrUy&limit=25`);
  console.log(response.data);
  let randomIdx=Math.floor(Math.random()*25)+1;
  const url=response.data.data[randomIdx].images.original.url;
  
let newGif=document.createElement('img');
   newGif.setAttribute('src',url);
  

 giphyArea.append(newGif);

console.log(newGif);
}


deleteBtn.addEventListener("click",function(e){

  e.preventDefault();

  $('#giphyarea').empty();

})
