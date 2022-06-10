//const currentHour = moment().hours();
const currentHour = 12;  //I'm retyping this late at night and want to see that my loop is working properly.  setting 
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

