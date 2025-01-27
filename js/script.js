
// Funcionalidade Menu
let menu = $('.menu-mobile i')
let menuItems = $('.menu-mobile ul')

$(menu).click(function(){
    $(menuItems).slideToggle(function (e){
        if($(this).css('display') == 'block'){
            menu.addClass('fa-xmark')
            menu.removeClass('fa-bars')
        }else{
            menu.removeClass('fa-xmark')
            menu.addClass('fa-bars')
        }
    })
})

// Mascara contato

let telefone = $('input[name=telefone]')

telefone.mask('(99) 9 9999-9999')

