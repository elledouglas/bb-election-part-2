document.addEventListener("DOMContentLoaded", function() {

  // Imaginationvar !

var voteButton = document.createElement('button');
var submitButton = document.createElement('submit');

$.ajax({
  url: 'https://bb-election-api.herokuapp.com/',
  method: 'GET',
  data: ["name"]["votes"],
  dataType: 'json'

}).done(function(data){
  console.log(data post ajax)

for (i = 0; i < data.candidates.length; i++) {
  var name = data.candidates[i].name
  var votes = data.candidates[i].votes


var text = document.createElement('div');
  text.innerHTML= name + votes;
  candidates.append('text')

  console.log('listItem')

var form = document.createElement('form');
listItem.append(form);



  console.log('form')
}
}
})
});
