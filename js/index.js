window.addEventListener('DOMContentLoaded', function(){
    /* Loader */
    let loader = document.querySelector('.loader');
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    },2000);
    /* / Loader */
    /* Scroll */
    window.addEventListener('scroll', 
    function()
    {
        this.document.getElementById('header').classList.toggle('active', window.scrollY > 0);
    });
    /* / Scroll */
    /* menu */
    $(document).ready(function(){
        $('.menu').click(function(){
            if(! $('.menuIcons').hasClass('menuActive'))
            {
                $('.menuIcons').addClass('menuActive');
                $('.menu').css('z-index','5');
                setTimeout(() => {
                    $('.menu .menuIcons ul').css('visibility','visible');
                }, 250);
                
            }
            else
            {
                $('.menuIcons').removeClass('menuActive');
                setTimeout(() => {
                    $('.menu .menuIcons ul').css('visibility','hidden');
                }, 500);
                
                
                setTimeout(()=>{
                    $('.menu').css('z-index','1');
                },1000);
                
            }
        });
    });
    /* / menu */
});
