
  $("#hover-button").on("mouseenter", function() {
  $("#myModal").modal("show");
  });


$(function() {

 //create new blog post object and comments from form data
  var newBlogPost = $("#blog-post").val();
  var newComment = $("#blog-comment").val();
  var blogData = {name: newBlogPost, description: newComment}

  var newBlogPost = $("#new_blog_post");
  var newItemForm = $("#new_task");
  var blogPosts = $("#old-blog-posts");

var templatingFunction = _.template($('#old-blog-posts-template').html());

var blogItems = [
  {blog: "Last night, I spent an amazing time watching fireworks on a rooftop in downtown Oakland with my beautiful queer community.", comment: "Those sparklers made the night shine!"},
  {blog: "Read",     comment: "Underscore Docs"},
  {blog: "Study",    comment: "Homework"}
];

_.each(blogItems, function (item, index) {
  console.log(item);
  var itemView = $(templatingFunction(item));
  blogPosts.append(itemView);
  console.log(itemView);
});

  newBlogPost.on("submit", function(event) {
    event.preventDefault();
    newBlogPost = $("#blog-post").val();
    newComment = $("#blog-comment").val();
    console.log('form submitted!');
    console.log(newBlogPost + ' ' + newComment);
     
 
blogPosts.append('<p class="blog">' + newBlogPost + '  ' + newComment + '</p>');

   });
});


//add a click event handler to mark task done
 var $blogarticle = $("#old-blog-posts");

$blogarticle.on("click", ".task", function(event) {
  console.log(this); 
  console.log($("this"));
  $(this).children().addClass("done");
  $(this).addClass("done");

});





