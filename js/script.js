
$('button#submit').click(function(){
    alert(myname + 'we have received your message.Thank you for reaching out')
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