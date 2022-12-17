const accordionItem = document.querySelectorAll('.accordion-item')

accordionItem.forEach( item => {
    
    const accordionHead = item.querySelector('.accordion-header')

    accordionHead.addEventListener('click', ()=>{
        const acorrdionContent = item.querySelector('.accordion-content')
        const active =  document.querySelector('.active')

        verify( item, acorrdionContent, active)
    })
});

function verify( item, content, contentActive){
    const iconitem = item.querySelector(".icon");
    const iconItemActive = document.querySelectorAll(".icon");
    iconItemActive.forEach((item) => (item.innerHTML = "+"));

    if( contentActive ){
        contentActive.style.height = 0;
        contentActive.classList.remove('active');
    }

    if( content !== contentActive){
        content.classList.add('active');
        iconitem.innerHTML = "-";
        content.style.height = content.scrollHeight + 5 + "px";
    }
}