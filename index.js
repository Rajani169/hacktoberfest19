function colorChange() {
    $( 'span' ).delay(1000).fadeOut(1000,function(){
    $(this).text('PROFESSIONAL');
    }).fadeIn(1000).delay(1000).fadeOut(1000,function(){
        $(this).text('HEURISTIC');
    }).fadeIn(1000).delay(1000).fadeOut(1000,function(){
        $(this).text('ADVANCED');
    
    }).fadeIn(1000);
    }
  
    $(document).ready(function(){
    var colorLooper = setInterval(function() {
    colorChange();
    }, 1000);
    });