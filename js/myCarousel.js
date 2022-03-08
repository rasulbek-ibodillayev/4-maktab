window.addEventListener("DOMContentLoaded", () => 
{
    let index = 0;
    const rasmlar = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5', 'pic6', 'pic7', 'pic8', 'pic9', 'pic10'];
    let myDiv = document.querySelector('#carouselCard');
    class myCarousel
    {
        constructor(rasm)
        {
            this.rasm = rasm;
        }
        render()
        {
            let carousel = document.createElement('div');
            carousel.classList.add('carousel_item');
            carousel.innerHTML = 
            `
               <img src="/pictures/${this.rasm}.jpg" alt="4-maktab">
            `;
            myDiv.append(carousel);
        }
    }
    for(let i = 0;i < 10;i ++)
    {
        new myCarousel(rasmlar[i]).render();
    }
    let 
    myDivs = document.querySelectorAll('.carousel_item');
    let toLeft = document.querySelector('#toLeft');
    let toRight = document.querySelector('#toRight');
    toRight.style.display = 'none';
    for(let i = 0;i < myDivs.length;i ++)
    {
        if(i == 0)
        {
            let item = myDivs[i];
            item.style.height = '60vh';
            item.style.width = '30%';
            item.style.left = '0';
            item.style.zIndex = 1;
            item.style.opacity = 0.5;
        }
        else if(i == 1)
        {
            let item = myDivs[i];
            item.style.height = '80vh';
            item.style.width = '50%';
            item.style.left = '25%';
            item.style.zIndex = 2;
            item.style.opacity = 1;
            item.style.boxShadow = '0 0 1rem rgba(51,107,254,0.7)';
        }
        else if(i == 2)
        {
            let item = myDivs[i];
            item.style.height = '60vh';
            item.style.width = '30%';
            item.style.left = '70%';
            item.style.zIndex = 1;
            item.style.opacity = 0.5;
        }
        else
        {
            let item = myDivs[i];
            item.style.left = '100%';
        }
    }
    document.querySelector("#toLeft").addEventListener('click', () =>
    {
        toRight.style.display = 'block';
        if(index < 7)
        {
            let item = myDivs[index ++];
            item.style.left = '-30%';
            item.zIndex = 0;
            let itemLeft = myDivs[index];
            itemLeft.style.left = '0';
            itemLeft.style.height = '60vh';
            itemLeft.style.width = '30%';
            itemLeft.style.zIndex = 1;
            itemLeft.style.opacity = 0.5;
            itemLeft.style.boxShadow = '';
            let itemCenter = myDivs[index + 1];
            itemCenter.style.left = '25%';
            itemCenter.style.height = '80vh';
            itemCenter.style.width = '50%';
            itemCenter.style.zIndex = 2;
            itemCenter.style.opacity = 1;
            itemCenter.style.boxShadow = '0 0 1rem rgba(51,107,254,0.7)';
            let itemRight = myDivs[index + 2];
            itemRight.style.left = '70%';
            itemRight.style.height = '60vh';
            itemRight.style.width = '30%';
            itemRight.style.zIndex = 1;
            itemRight.style.opacity = 0.5;
            itemRight.style.boxShadow = '';
        }
        if(index == 7) toLeft.style.display = 'none';
    });

    document.querySelector("#toRight").addEventListener('click', () =>
    {
        toLeft.style.display = 'block';
        if(index > 0)
        {
            let item = myDivs[index + 2];
            item.style.left = '100%';
            item.zIndex = 0;
            let itemLeft = myDivs[index + 1];
            itemLeft.style.left = '70%';
            itemLeft.style.height = '60vh';
            itemLeft.style.width = '30%';
            itemLeft.style.zIndex = 1;
            itemLeft.style.opacity = 0.5;
            itemLeft.style.boxShadow = '';
            let itemCenter = myDivs[index];
            itemCenter.style.left = '25%';
            itemCenter.style.height = '80vh';
            itemCenter.style.width = '50%';
            itemCenter.style.zIndex = 2;
            itemCenter.style.opacity = 1;
            itemCenter.style.boxShadow = '0 0 1rem rgba(51,107,254,0.7)';
            let itemRight = myDivs[index - 1];
            itemRight.style.left = '0';
            itemRight.style.height = '60vh';
            itemRight.style.width = '30%';
            itemRight.style.zIndex = 1;
            itemRight.style.opacity = 0.5;
            itemRight.style.boxShadow = '';
            index --;
        }
        if(index == 0) toRight.style.display = 'none';
    });
    
});