function clicar_icon() {
    let i_share = window.document.querySelector('span.icon_share')
    let icon = window.document.querySelector('div.michelle')
    let icon2 = window.document.querySelector('div.icons')
    let share = window.document.querySelector('span.share')
        
        if (icon2.style.display === 'none' || icon.style.display === '') {
        icon.style.display = 'none'
        icon2.style.display = 'flex'
        }else{
            icon.style.display = 'flex'
            icon2.style.display = 'none'
        }
       
        
        if(innerWidth >= 768 && icon.style.display === 'none'){
        icon.style.display = 'flex'
        share.style.display = 'none'
        i_share.style.background = 'url("images/icon-share-2.svg") no-repeat #707a85 center center'
    } else if(innerWidth >= 768 && icon.style.display === 'flex'){
        icon.style.display = 'flex'
        share.style.display = 'none'
        i_share.style.background = 'url("images/icon-share.svg") no-repeat #ecf2f8 center center'
    }
}
function share() {
    let icon = window.document.querySelector('div.michelle')
    let icon2 = window.document.querySelector('div.icons')
    let share = window.document.querySelector('span.share')
    if(icon.style.display === 'none'){
        icon2.style.display = 'none'
        icon.style.display = 'flex'
        
    }
    

}

