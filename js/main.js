let button = document.getElementById('menu_fixed__button');
let main = document.getElementById('hidden');
let navi = document.getElementById('nav_wrapper');
let link = document.getElementById('nav_wrapper');
let menuOpen = false;
navi?.classList.add('start');


function eventHandler() {
    if (!menuOpen) {
        button?.classList.add('open');
        menuOpen = true;
        navi?.classList.remove("start");
        navi?.classList.remove('close');
        main.style.visibility = "hidden";

    } else {
        button?.classList.remove("open");
        menuOpen = false;
        navi?.classList.remove("start");
        navi?.classList.add('close');
        main.style.visibility = "visible";

    }
}

function linkClose() {
    menuOpen = false;
    navi?.classList.remove("start");
    navi?.classList.add('close');
    button?.classList.remove("open");
    main.style.visibility = "visible";

}
button.onclick = eventHandler;
link.onclick = linkClose;




let magnifier = document.getElementById("menu_fixed__magnifier2");
let searching = document.getElementById("menu_fixed__magnifier");
let body = document.querySelector("body");
let header = document.getElementById("headerColor");
let searchOpen = false;

function pageSearch() {

    if (!searchOpen) {
        searchOpen = true;
        searching?.classList.add('active');
        //body.style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, #000000 100%)"
        //header.style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, #000000 100%)"
        body.style.opacity = "0.6";
       // header.style.opacity = "0.2";
    } else {
        searchOpen = false
        searching?.classList.remove('active');
        // body.style.background = "white"
        // header.style.background = " linear-gradient(to bottom, #1269EC 80%, white 20%)";
        body.style.opacity = "1";

        //  body.style.background = "white";
    }
}
const searchInput2 = document.querySelector("input");
searchInput2.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        searchOpen = false
        searching?.classList.remove('active');
        // body.style.background = "white"
        // header.style.background = " linear-gradient(to bottom, #1269EC 80%, white 20%)";
        body.style.opacity = "1";
    }
});
magnifier.onclick = pageSearch;

//Szukaj--------------
const searchInput = document.querySelector("input");
const ul = document.getElementById("main");
const li = [...document.getElementsByClassName("main__item")];
const searchWord = e => {
    const currentWord = e.target.value.toUpperCase();
    let result = li;
    result = result.filter(li => li.textContent?.toUpperCase().includes(currentWord));
    ul.textContent = '';
    result.forEach(name => ul?.appendChild(name));
}
searchInput?.addEventListener('input', searchWord);


// Koniec Szukaj------













// no to paginacja


let ElementsOfCars = [document.getElementById("main")];
let OneElementsOfCars = document.getElementById("main__item");
ElementsOfCars = [OneElementsOfCars];














const ulTag = document.getElementById("ul");
let totalPages = 20;
function element(totalPages, page) {
    let liTag = ``;
    let activeLi;
    let beforePages = page - 1;
    let aafterPages = page + 1;

    if (page > 1) {
        liTag += `<li><a class="pagination__page" href="#">
        <span class="pagination__page-- arrow"><img src="./assets/arrow.svg" alt="wstecz"></span></a></li>`;
    }

    if (page > 2) {
        liTag += `        <li><a class="pagination__page" href="#">
<span class="pagination__page--">1</span>
</a></li>`;
    }
    liTag += `<li><span class="dots">...</span></li>`;
    for (let pageLenght = beforePages; pageLenght <= aafterPages; pageLenght++) {
        if (page == pageLenght) {
            activeLi = "active";
        } else {
            activeLi = "";
        }
        activeLi = "";
        liTag += `<li><a class="pagination__page" href="#">
        <span class="pagination__page--">${pageLenght}</span></a></li>`;
    }
    liTag += `<li><span class="dots">...</span></li>`;

    if (page < totalPages) {
        liTag += ` <li><a class="pagination__page" href="#">
<span class="pagination__page--">`+ totalPages + `</span>
</a></li>`;
    }
    // @ts-ignore
    ulTag.innerHTML = liTag;
}
element(totalPages, 5);



const plusButton = document.getElementById("plus");
const texts = document.querySelectorAll("#text");

let fontSize = 16;

plusButton.addEventListener("click", function() {
  fontSize += 2;
  texts.forEach(text => {
    text.style.fontSize = `${fontSize}px`;
  });

  if (fontSize >= 22) {
    fontSize = 16;
    texts.forEach(text => {
      text.style.fontSize = `${fontSize}px`;
    });
  }
});


