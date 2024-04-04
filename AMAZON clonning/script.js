const imgs = document.querySelectorAll('.header-slider ul img');
const prevbutton = document.querySelector('.control-prev');
const nextbutton = document.querySelector('.control-next');

let n = 0;

function changeslide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

changeslide()

prevbutton.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeslide()
});
nextbutton.addEventListener('click', (e) => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeslide();
});
const scrollcontainer = document.querySelectorAll('.products');
for  (const item of scrollcontainer) {
item.addEventListener('wheel', (evt)=>{
evt.preventDefault();
item.scrollLeft += evt.deltaY;
})
}