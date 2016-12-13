
$(function() {
        $("#my-books").on('mouseover', function() {
          $("#my-books").hide(2000);
        }),
        function() {
          $("#my-books").show(2000);
        };
      });

 // $(function() {
 //   $('ul.parent > li').hover(function() {
 //     $(this).find('ul.child').show(500);
 //   }, function() {
 //     $(this).find('ul.child').hide(500)
 //   })
 // });
