
$('button#submit').click(function(){
    let userName=$('input#myname').val()
    if(userName==""){
        alert("please fill the required fields")
    }
    else {
        alert(`${userName}, we have received your message.Thank you for reaching out to us`)

    } 
    $(document).ready(function(){
        $(":reset").css("background-color", "transparent");
      });
   
});
$('.design').click(function(){
    $('img#design').toggle()
    $('.des').toggle()
})
$('.development').click(function(){
    $('img#dev').toggle()
    $('.dev').toggle()
})
$('.product').click(function(){
    $('img#product').toggle()
    $('.prod').toggle()
})
$(document).ready(function(){
     
    $('#work4').mouseover(function(){
       
        $('#overlay').show() 
    }).mouseout(function(){
        $("#overlay").hide()
    })
    $('#work3').mouseover(function(){
        $("#overlay1").show()
    }).mouseout(function(){
        $('#overlay1').hide()
    })
    $('#work2').mouseover(function(){
        $('#overlay2').show() 
    }).mouseout(function(){
        $("#overlay2").hide()
    })
    $('#work1').mouseover(function(){
        $("#overlay3").show()
    }).mouseout(function(){
        $('#overlay3').hide()
    })
    $('#work5').mouseover(function(){
        $('#overlay4').show() 
    }).mouseout(function(){
        $("#overlay4").hide()
    })
    $('#work6').mouseover(function(){
        $("#overlay5").show()
    }).mouseout(function(){
        $('#overlay5').hide()
    })
    $('#work7').mouseover(function(){
        $('#overlay6').show() 
    }).mouseout(function(){
        $("#overlay6").hide()
    })
    $('#work8').mouseover(function(){
        $("#overlay7").show()
    }).mouseout(function(){
        $('#overlay7').hide()
    })

})