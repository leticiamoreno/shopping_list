//lets create a wrapper function that waits for the DOM to load. 
//$ its a way to wake up the DOM.-- hey document, when you are readdy, do the following function.
//jquery is not the most popular as it used to be 
//slide taggle -- append this ires .. some of the methods on jquery 
$(document).ready(function(){
  //we want to add an event list/ create event list like the unclick we did in the calculator 
  
  //add event listener that listens for a click on the id #add.
  //we'll see this following a lot-- as its for repeat.. for removing, adding.. we'll see this a lot. 
  $("#add").click(function() {
    
    //grab the user input
    var userInput = $("input[name=shoppinglistitem]").val();
    //there are usually flashes going on in the back 
//select the add -- the add will grab the value.
//The .val() method is primarily used to get the values of form elements such as input, select and textarea. When called on an empty collection, it returns undefined.
    
    //test to make sure we are grabbing value
    console.log(userInput);
   
    //add user input to the DOM as a list
    $('.list').append('<li>' + '<input class="checked-item" type="checkbox">' + userInput + '</li>' )
    //we want to create in the way that we wait dfor the user . and it'll add as the user is interacting. 
    //here in append, we'll pass some HTML
    
    //did this because it was not working
    return false;
    
  })
  
  //Keep track of the user toggling each item and create an event listener
//   $(document).on("click", ".checked-item", function(){
    
//     //capture the current list item user is clicking on
//     //because we dont know how many lists / items we'll put 
//     //this special keyword  -- wathever we click on, we pass it as this
//     //when we pass it, and we check on, i'll return to 
//     $(this).parent().toggleClass("is-it-checked");
//   })
    
// //ad and event listener to the check button
//  $('checked-item').on('click', function(e)
//  {
//    console.log(e);
//    //prevent the default browser/form action from happening
//    e.preventDefault();
//    //remove the checked item
//    $('is-it-checked').remove();
//  })

    $(document).on('click', '.checked-item', function() {
      // capture the current list item user is clicking on
      $(this).parent().toggleClass('it-is-checked');
    });
    
    // add an event listener to the check button
    $('.checked').on('click', function(e) {
      
      // prevent the default action on the event
      e.preventDefault();
      
      // remove the checked items
      $('.it-is-checked').remove();
    });
    
 $('.reset-list').on('click', function(e)
 {
   console.log(e);
   //prevent the default browser/form action from happening
   e.preventDefault();
   $('li').remove();
 })
})
