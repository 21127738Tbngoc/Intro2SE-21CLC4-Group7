let isSearching = false;

const searchLabel = document.querySelector('.search-label')
const searchDropdown = document.querySelector('.search-dropdown')
const quitSearch = document.querySelector('.quit-search')

const navbarContainer = document.querySelector('.search-box')

function toggleSearch()
{
    if(isSearching === false)
    {
        searchLabel.classList.remove('disable-search-label');
        searchDropdown.classList.remove('open-search-dropdown');
        isSearching = true;
    }
    else {
        searchLabel.classList.add('disable-search-label');
        searchDropdown.classList.add('open-search-dropdown');
        isSearching = false
    }
}

searchLabel.addEventListener('click', toggleSearch);
quitSearch.addEventListener('click', toggleSearch)

navbarContainer.addEventListener('click', function(event){
    event.stopPropagation()
})