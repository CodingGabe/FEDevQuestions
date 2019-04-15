// 1: how could you improve the following code?
// Assume that you have access to a styles.css file
$(document).ready(function() {
  $('.foo #bar').css('color', 'red');
  $('.foo #bar').css('border', '1px solid blue');
  $('.foo #bar').text('new text!');
  $('.foo #bar').click(function() {
    $(this).attr('title', 'new title');
    $(this).width('100px');
  });

  $('.foo #bar').click();
});

// * Answer

// I would simply change the CSS file's styles
.foo #bar {
  color: red;
  border: 1px solid blue;
  width: 100px;
}

$(document).ready(function() {
  // set variable to avoid repititveness
  var elem = $('.foo #bar');

  elem.text('new text!');
  elem.click( function() {
    $(this).attr('title', 'new title');
  })
  
  elem.click();
});




// 2: If you needed to inject content into the 4th div via JS or jQuery from the <head> of the document
// without using document.ready how would you accomplish this?
<html>
<head>
// Your script runs here!
</head>
<body>
<h1>Placeholder test for H1</h1>
<div class="element"></div>
<div class="element"></div>
<div class="element"></div>
<div class="element"></div>

</body>
</html>


// Answer

<head>

  // My script runs here!
  // For this, I would go the fastest, shortest route and slap some jQuery in.
  // Load in the latest min version of jQuery
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.slim.min.js"></script>

  // using jQuery, select the 4th Div and add some content by the append function.

  $('.element:nth-child(4)').append('<p>Injected content</p>'));

</head>





// 3: how could you rewrite the following code to make it shorter?
(function(d, $){
  $('li.foo a').attr('title', 'i am foo');
  $('li.bar a').attr('title', 'i am bar');
  $('li.baz a').attr('title', 'i am baz');
  $('li.bop a').attr('title', 'i am bop');
})(dojo, dojo.query);


// * Answer

// this one through me for a loop aka a forLoop. get it? 
// After some more research on ES6, i used a for loop to insert array items to avoid repititeveness
var list = ['foo', 'bar', 'baz', 'bop'];

list.forEach(function (i) {
  dojo.query('li.${i} a').attr('title', 'i am ${i}');
});




// 4: given the following data structure, write code that returns an array
// containing the name of each item, followed by a comma-separated list of
// the item's extras, if it has any. e.g.
//
//    [ "Salad (Chicken, Steak, Shrimp)", ... ]
//
// (you can assume the jQuery library is available)
var menuItems = [
  {
    id : 1,
    name : 'Salad',
    extras : [
      'Chicken', 'Steak', 'Shrimp'
    ]
  },

  {
    id : 2,
    name : 'Potato',
    extras : [
      'Bacon', 'Sour Cream', 'Shrimp'
    ]
  },

  {
    id : 3,
    name : 'Sandwich',
    extras : [
      'Turkey', 'Bacon'
    ]
  },

  {
    id : 4,
    name : 'Bread'
  }
];

// * Answer

(function () {
  // Another tough one as I am not the best jQuery Dev
  // Using jQuery, I created an empty array to start which will be called produced the food
  food = [];

  // Looping through the menu objects, I need to create a string of each item and push it to the array
  menuItems.forEach(function (item) {
    // Using OOP, get the name of each item and assign variable
    var itemString = item.name;
    // check to see if any items have extras
    // using jQuery's .map is super clutch in this issue as it applies a function to each object and maps results into a new array
    if (item.extras) {
      extras = item.extras.map(function (extra) { return " " + extra });
      // apply parentheses like the example
      itemString += " (" + extras + ")";
    }
    // push menuItems into the empty array
    food.push(itemString);
  });

  return food;

})(); 




// 5: what is the faulty logic in the following code? how would you fix it?
var date = new Date(),
    day = date.getDate(),
    month = date.getMonth(),
    dates = [];

for (var i = 0; i <= 5; i++) {
  dates.push(month + '/' + (day + i));
}

console.log('The next five days are ', dates.join(', '));

// Answer

// Looks great, the logic is faulty simply because when using getMonth(), the index starts at 0.
// So January is 0. By adding + 1 you will get the correct month
var month = date.getMonth() + 1;