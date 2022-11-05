"use strict";

const searchSubmit = document.getElementById('searchbutton');
searchSubmit.addEventListener('click', e => {
  e.preventDefault();
  let searchItem = document.getElementById('searchinput').value,
  result = document.getElementById("book-listing"),
  newHtml = '',
  j = 0;
  jQuery.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + searchItem,
    dataType: "json",
    success: function (data) {
      console.log(data.items);
      if (data.items) {
        document.getElementById("intro").style.display = 'none';
        result.innerHTML = '';
        for (let i = 0; i < data.items.length < 9; i++) {
          if (j === 8) return;
          var item = data.items[i];
          let imgZoom = item.volumeInfo.imageLinks.thumbnail.replace('zoom=1', 'zoom=10');
          newHtml = '<article class="book-card">';
          if (item.volumeInfo.imageLinks.thumbnail) {
            newHtml += '<div class="book-card--img"><img src="' + imgZoom + '" alt="' + item.volumeInfo.title + ' book thumbnail" /></div>';
          }
          newHtml += '<div class="book-card--info">';
          newHtml += '<h4 class="book-title">' + item.volumeInfo.title + '</h4>';
          newHtml += '<p class="book-authors"><strong>Authors: </strong>' + item.volumeInfo.authors + '</p>';
          if (item.volumeInfo.description) {
            newHtml += '<p class="book-description">' + item.volumeInfo.description.slice(0, 300) + '</p>';
          }
          newHtml += '<a role="button" title="link to book details" href="' + item.volumeInfo.infoLink + '" class="book-detail-link btn" target="_blank">Link</a>';
          newHtml += '</div">';
          newHtml += '</article">';
          result.innerHTML += newHtml;
          j++;
        }
      } else {
        document.getElementById("intro").innerHTML = "No Books found. Please search again.";
      }
    },
    error: function (response) {
      document.getElementById("intro").innerHTML = response;
    },
    type: 'GET'
  });
});

const selectBookListLayout = document.getElementsByClassName('slectBookListLayout')[0];
selectBookListLayout.addEventListener('click', () => {
  let value = selectBookListLayout.options[selectBookListLayout.selectedIndex].value;
  if (value == 'list') {
    document.getElementsByClassName('book-listing')[0].classList.add("list");
  } else {
    document.getElementsByClassName('book-listing')[0].classList.remove("list");
  }
});
