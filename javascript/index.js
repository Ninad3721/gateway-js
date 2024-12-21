$(document).ready(function () {
  const taskInput = $("#taskInput");
  const addTaskButton = $("#addTaskButton");
  const taskList = $("#taskList");
  const filterTasks = $("#filterTasks");

  // Add Task
  addTaskButton.on("click", function () {
    const taskValue = taskInput.val().trim();

    if (taskValue === "") {
      alert("Please enter a task.");
      return;
    }

    const listItem = $("<li></li>");

    const taskText = $("<span></span>").text(taskValue);
    const actionContainer = $("<div></div>");

    const completeButton = $("<button></button>")
      .text("Mark Complete")
      .addClass("action-btn complete-btn");

    const deleteButton = $("<button></button>")
      .text("Delete")
      .addClass("action-btn delete-btn");

    actionContainer.append(completeButton, deleteButton);
    listItem.append(taskText, actionContainer);

    taskList.append(listItem.hide().fadeIn("slow"));

    taskInput.val("");

    // Mark Task as Complete
    completeButton.on("click", function () {
      listItem.css("background-color", "#d4edda");
      listItem.toggleClass("completed");
    });

    // Delete Task
    deleteButton.on("click", function () {
      listItem.fadeOut("slow", function () {
        $(this).remove();
      });
    });

    filterTasks.on("change", function () {
      const filterValue = $(this).val();

      if (filterValue === "all") {
        $("#taskList li").show();
      } else if (filterValue === "completed") {
        $("#taskList li").hide();
        $("#taskList li.completed").show();
      } else if (filterValue === "pending") {
        $("#taskList li").hide();
        $("#taskList li:not(.completed)").show();
      }
    });
  });
});
