
// The search var
var search = "";
var startyear = 0;
var endyear = 0;
var numRec = 0;

var apiurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
apiurl += '?' + $.param({
  'api-key': "b4406f678e714d76b46b1198cc1e190b",
  'q': "search",
  'begin_date': "startyear",
  'end_date': "endyear"
});

$.ajax({
  url: apiurl,
  method: "GET"
}).done(function(result) {
  console.log(result);
  $(".subButton").on("click", function () {
    // In this case, the "this" keyword refers to the button that was clicked
    $(this).search = $("#InputTerms").append("#articles")
    $(this).startyear = $("#InputYear").append("#articles")
    $(this).endyear = $("#InputEndYear").append("#articles")
});

});