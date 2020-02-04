// console.log("linked")
// console.log($)
$(document).ready(function() {

    let quote;
  
    function getNewQuote() {
      $.ajax({
        url: 'http://api.forismatic.com/api/1.0/',
        jsonp: 'jsonp',
        dataType: 'jsonp',
        data: {
          method: 'getQuote',
          lang: 'en',
          format: 'jsonp'
        },
        success: function(response) {
          quote = response.quoteText;
          $('#quote').text(response.quoteText);
          if (response.quoteAuthor) {
            $('#author').text('said by ' + response.quoteAuthor);
          } else {
            $('#author').text('- unknown');
          }
        }
      });
    }
    getNewQuote();
  // new quote and twitter button
    $('.get-quote').on('click', function(e) {
      e.preventDefault();
      getNewQuote();
    });
  
    $('.share-quote').on('click', function(e) {
      e.preventDefault();
      window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote));
    });

    // background color change every 5 seconds
     window.setInterval(function(){
         let randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
       $('body').css({'background-color' : randomColor,
       });
    
     }, 5000);
  
   });

// quote carousel

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("quotes");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}