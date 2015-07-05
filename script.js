$(function() {


 //create new todo object from form data
  var toDoTask = $("#task-name").val();
  var toDoDesc = $("#task-desc").val();
  var toDoData = {name: toDoTask, description: toDoDesc}

  var newToDoList = $("#new_to_do_list");
  var newItemForm = $("#new_task");
  var tasklist = $("#task-list");

var templatingFunction = _.template($('#task-list-template').html());

var toDoItems = [
  {todo: "Clean Up", description: "vacuum"},
  {todo: "Read", description: "Underscore Docs"},
  {todo: "Study", description: "Homework"}
];

_.each(toDoItems, function (item, index) {
  console.log(item);
  var itemView = $(templatingFunction(item));
  //$pet.attr('data-index', index);
  tasklist.append(itemView);
  console.log(itemView);
});

  newToDoList.on("submit", function(event) {
    event.preventDefault();
    toDoTask = $("#task-name").val();
    toDoDesc = $("#task-desc").val();
    console.log('form submitted!');
    console.log(toDoTask + ' ' + toDoDesc);
     
 
tasklist.append('<li class="task">' + toDoTask + '  ' + toDoDesc + '</li>');

   });
});


//add a click event handler to mark task done
 var $taskUL = $("#task-list");

$taskUL.on("click", ".task", function(event) {
  console.log(this); 
  console.log($("this"));
  $(this).children().addClass("done");
  $(this).addClass("done");

});



