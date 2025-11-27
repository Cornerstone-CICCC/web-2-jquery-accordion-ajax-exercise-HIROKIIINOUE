$(function () {
  // your code here
  $(".accordion-header").on("click", function () {
    $(this).next(".accordion-content").slideToggle();
  });

  $("button").on("click", function () {
    $.ajax({
      url: "https://dummyjson.com/todos",
      method: "GET",
      success: function (data) {
        data.todos.forEach((todo) => {
          $("ul").append(`<li>${todo.todo}</li>`);
        });
      },
      error: function (err) {
        console.error(err);
      },
    });
  });
});
