// Menu
let menu = $('.menu-mobile i')
let nav = $('.menu-mobile ul')

$(menu).click(function(){
    if($(nav).is(":hidden")){
        $(menu).removeClass('fa-bars')
        $(menu).addClass('fa-xmark')
    }else{
        $(menu).removeClass('fa-xmark')
        $(menu).addClass('fa-bars')
    }
    $(nav).slideToggle()
})
/////////


// menu scroll
$('nav a').click(function(){
    var href = $(this).attr('href');
    var offSetTop = $(href).offset().top;

    if(href == '#contato'){
        $('html,body').animate({'scrollTop':offSetTop});
    }else{
        $('html,body').animate({'scrollTop':offSetTop - 100});
    }

    return false;
})
/////////


// Mascaras do formulário
let telefone = $('#telefone')
telefone.mask('(99) 9 9999-9999')