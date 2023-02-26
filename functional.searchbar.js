whateverElement.addEventListener("event type", ()); {
}  //Brug af search bar - Match searching 


const searchInput = document.getElementById("searchInput"); 
//Her bruges 'constnat' så man kan søge samme ting igen + ved ikek om de to er den samme

//Event listner attached to the constant 
searchInput.addEventListener("input", (e)); {
    //Her declares and assigns the value of the event's target to a variable -> whatever is typed in the search bar
    let value = e.target.value

// Henter elemterne fra array katagorien "name" 
const namesFromDOM = document.getElementsByClassName("name");

//If-els princip -> check: if input exists - display if it does and dont display if not 
    const searchQuery = value.toLowerCase();

for (const nameElement of namesFromDOM) {
//Her ændres teh value for at exclude white space og alt der indskrives alt til lowercase(lowercase: for case insensitive comparisons)
    let namcatagoriese = nameElement.textContent.toLowerCase();
  
    if (namecatagories.includes(searchQuery)) {
        // found name matching search, display it
  
    nameElement.style.display = "block";
    } else {
    // no match, don't display name
  
    nameElement.style.display = "none";
      }
    }
}
//Her slettes tidligere søgninger 
const clearButton = document.getElementById('clear')
clearButton.addEventListener("click", () => {
});

//lige sættet ind
const searchinputwrapper = document.querySelector(".search-input-wrapper");
const searchinput = document.querySelector(".search-input input");
const searchicon = document.querySelector(".search-icon i");
const closeicon = document.querySelector(".search-input i ");

searchicon.addEventListener("click", () => {
  searchicon.parentElement.classList.add("change");
  searchinputwrapper.classList.add("change");

  setTimeout(() => {
    searchinput.focus();
  }, 1000);
});

closeicon.addEventListener("click", () => {
  searchicon.parentElement.classList.remove("change");
  searchinputwrapper.classList.remove("change");
});