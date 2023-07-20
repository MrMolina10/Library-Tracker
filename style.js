const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")


hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});




function getBook (){
    document.getElementById('output').innerHTML="";
    fetch("https://openlibrary.org/search.json?q="+document.getElementById("inputBtn").value)
    .then(a =>a.json())
    .then(response =>{
        for(let i =0; i<1; i++){
            document.getElementById("output").innerHTML+="<h2 class= 'output__title'>"+response.docs[i].title+"</h2>"+'<p class= "output__para">'+response.docs[i].author_name[0]+"</p><br><img class='output__img' src ='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'><br>"+"<p class='output__quote'>"+response.docs[i].first_sentence[0]+"</p>";
        }
    })
};



showAll.addEventListener('click', function(){
    allEmloyees();
})

function allEmloyees(){

fetch("https://example-data.draftbit.com/books?_limit=240").then((data) =>{
    //console.log(data)
    return data.json(); //Converted to object
}).then((objectData) => {
    console.log(objectData[0].title);
    let bookList = "";
    objectData.map((values) =>{
        bookList += `<div class="container">
        <h1 class="book-title">${values.title}</h1>
           <img class="book-img" src="${values.image_url}"/></a>
            <div class="book-quote">
                <p>${values.Quote1}</p>
            </div>
        </div>
    </div>`;
    });
    document.getElementById("book__section").innerHTML= bookList
})}




