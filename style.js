const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

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
           <a href="./Book's Page/loadedBook.html"><img class="book-img" src="${values.image_url}"/></a>
            <div class="book-quote">
                <p>${values.Quote1}</p>
            </div>
        </div>
    </div>`;
    });
    document.getElementById("book__section").innerHTML= bookList
})}
