$(document).ready(function() {
      var button = $('.button1');
      var button2 = $('.button2')
      var container = $('.tohide');
      container.toggleClass('-tohide').toggle();

      button.click(function() {
          container.toggleClass('-tohide').toggle(1000);
        });
        button2.click(function() {
          container.toggleClass('-tohide').toggle(1000);
        });
      });