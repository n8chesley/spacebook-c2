/*
INDIVIDUAL PROJECT EXERCISE 1: Create a function that creates a new post object
and add it to a posts array.
  - Each post object should have two properties: text (the user's input, a string)
and id (a number, dynamically generated).
  - Each id should be unique to that post (no two post objects should have the same id).

INDIVIDUAL PROJECT EXERCISE 2: Create a second function that adds all the posts
in the posts array to the posts div. In addition, add the id to the element with
our data attribute. Each post element should look something like this:
  <p class="post" data-id="1">Hey man! I'm a post!</p>

INDIVIDUAL PROJECT EXERCISE 3: Change your code so that each post element also
has a "remove" button:
  <p class="post" data-id="1"> <a href="#" class="remove">remove</a> Hey man! I'm a post!</p>
  When the button gets clicked, remove it from the page.
*/

var postsArray = [];
var uniqueId = 0;

var newPost = function (inputText) {
  uniqueId += 1;
  obj = {};
  obj.text = inputText;
  obj.id = uniqueId;
  postsArray.push(obj);
};

var addToDiv = function () {
  $(".posts").find('p').remove();
  for (i = 0; i < postsArray.length; i++) {
  $(".posts").append("<p class='post' data-id="+(postsArray[i]["id"])+"><a href='#' class='remove'>remove</a>"+" - "+"</p>");
  $(".posts p:last").append((postsArray[i]["text"])+" - "+"Hey man! I'm a post!");
  $(".posts p:last").append("<br><input type='text' id='post-comment' placeholder='Comment Text'>");
  $(".posts p:last").append("    <input type='text' id='post-commentName' placeholder='Commenter Name'>");
  $(".posts p:last").append("    <button type='button' class='btn btn-primary add-comment'>Post</button>");
}
};

  $('.posts').on('click', 'p', function () {
  var removeId = $(this).data().id;
  $(this).remove();
  for (i = 0; i < postsArray.length; i++) {
    if (postsArray[i]["id"] === removeId) {
      postsArray.splice((i), 1);
    }
  }
});

$('.add-post').click(function () {
  var formInput = $('#post-name').val();
  newPost(formInput);
  addToDiv();
});
