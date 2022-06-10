const currentHour = moment().hours();


//const currentHour = 12;  //I'm retyping this late at night and want to see that my loop is working properly.  setting 
//the current hour to 12 will allow me to see the blocks as different colors after 5pm

//loop through time blocks and apply classes based on time
$(".time-block").each(function(){
    console.log($(this).attr("id"))
    const blockHour = parseInt($(this).attr("id"))
    const blockTextEl = $(this).find("textarea");
    if (blockHour === currentHour){
        blockTextEl.addClass("present");
    }
    else if (blockHour < currentHour){
        blockTextEl.addClass("past");
    }
    else {
        blockTextEl.addClass("future");
    }
})

//I'm going to add an event listener to the save buttons that will put the textarea into local storage

$(".saveBtn").on("click", function(){
    const button = $(this);
    const textArea = button.siblings("textarea");  //textarea element is a sibling of the button element in my html
    const value = textArea.val();   //stores the info from the textarea in a constant so we can send it to local storage
    const key = button.parent().attr("id");  //gets the id of the time block we're dealing with, so we can use local storage (key, value)syntax
    localStorage.setItem(key, value);
})

//Need to add persistence so that tasks will be loaded from localstorage into the corresponding time blocks when page is opened or refreshed

$("#9").find("textarea").val(localStorage.getItem("9"));

$("#10").find("textarea").val(localStorage.getItem("10"));

$("#11").find("textarea").val(localStorage.getItem("11"));

$("#12").find("textarea").val(localStorage.getItem("12"));

$("#13").find("textarea").val(localStorage.getItem("13"));

$("#14").find("textarea").val(localStorage.getItem("14"));

$("#15").find("textarea").val(localStorage.getItem("15"));

$("#16").find("textarea").val(localStorage.getItem("16"));

$("#17").find("textarea").val(localStorage.getItem("17"));








