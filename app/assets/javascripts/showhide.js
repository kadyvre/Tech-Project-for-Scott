$(document).ready(function(){
  var button = $('.button1');
  var container = $('.tohide');
  container.toggleClass('-tohide').toggle();
  
  button.click(function() {
    container.toggleClass('-tohide').toggle(1000);
  });
});