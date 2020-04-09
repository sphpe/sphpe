var searchInput = document.getElementById("search-input");
var placeHolder = document.getElementById("place-holder-content");
var searchResults = document.getElementById("search-results");
var resultItems = document.querySelectorAll(".search-result-item");
var searchItemResult = document.getElementById("search-item-result");
var searchResult = document.getElementById("search-result");
var searchItemResultTitle = document.getElementById("search-item-result-title");

searchInput.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        event.preventDefault();
        placeHolder.style.display = "none";
        searchResults.style.display = "block";
    }
});

function clearSearchResult() {
    placeHolder.style.display = "block";
    searchResults.style.display = "none";

    searchResult.style.display = "block";
    searchItemResult.classList.remove("show");
}

for(var i = 0; i<resultItems.length; i++){
    resultItems[i].addEventListener("click", function() {
        searchResult.style.display = "none";
        searchItemResult.classList.add("show");
        searchItemResultTitle.innerHTML = this.innerHTML + " :";
    });
}