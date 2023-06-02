$(".phone").mask("+7(999)999-99-99");

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('#slider-next').addEventListener('click', function(){
    offset += 900;
    if(offset > 1800){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});
document.querySelector('#slider-prev').addEventListener('click', function(){
    offset -= 900;
    if(offset < 0){
        offset = 1800;
    }
    sliderLine.style.left = -offset + 'px';
});


document.querySelector('#main1').addEventListener('click', function(){
    if(document.getElementById('main1').style.height == 2000 + 'px'){
        document.getElementById('main1').style.height = 80 + 'px';
        document.getElementById('img1').style.transform = 'rotate(0deg)';
    } else {
        document.getElementById('main1').style.height = 2000 + 'px';
        document.getElementById('img1').style.transform = 'rotate(180deg)';
    }
});

document.querySelector('#main2').addEventListener('click', function(){
    if(document.getElementById('main2').style.height == 560 + 'px'){
        document.getElementById('main2').style.height = 80 + 'px';
        document.getElementById('img2').style.transform = 'rotate(0deg)';
    } else {
        document.getElementById('main2').style.height = 560 + 'px';
        document.getElementById('img2').style.transform = 'rotate(180deg)';
    }
});

document.querySelector('#main3').addEventListener('click', function(){
    if(document.getElementById('main3').style.height == 2080 + 'px'){
        document.getElementById('main3').style.height = 80 + 'px';
        document.getElementById('img3').style.transform = 'rotate(0deg)';
    } else {
        document.getElementById('main3').style.height = 2080 + 'px';
        document.getElementById('img3').style.transform = 'rotate(180deg)';
    }
});

document.querySelector('#main4').addEventListener('click', function(){
    if(document.getElementById('main4').style.height == 2160 + 'px'){
        document.getElementById('main4').style.height = 80 + 'px';
        document.getElementById('img4').style.transform = 'rotate(0deg)';
    } else {
        document.getElementById('main4').style.height = 2160 + 'px';
        document.getElementById('img4').style.transform = 'rotate(180deg)';
    }
});

document.querySelector('#main5').addEventListener('click', function(){
    if(document.getElementById('main5').style.height == 480 + 'px'){
        document.getElementById('main5').style.height = 80 + 'px';
        document.getElementById('img5').style.transform = 'rotate(0deg)';
    } else {
        document.getElementById('main5').style.height = 480 + 'px';
        document.getElementById('img5').style.transform = 'rotate(180deg)';
    }
});

document.querySelector('#main6').addEventListener('click', function(){
    if(document.getElementById('main6').style.height == 1680 + 'px'){
        document.getElementById('main6').style.height = 80 + 'px';
        document.getElementById('img6').style.transform = 'rotate(0deg)';
    } else {
        document.getElementById('main6').style.height = 1680 + 'px';
        document.getElementById('img6').style.transform = 'rotate(180deg)';
    }
});

document.querySelector('#main7').addEventListener('click', function(){
    if(document.getElementById('main7').style.height == 1200 + 'px'){
        document.getElementById('main7').style.height = 80 + 'px';
        document.getElementById('img7').style.transform = 'rotate(0deg)';
    } else {
        document.getElementById('main7').style.height = 1200 + 'px';
        document.getElementById('img7').style.transform = 'rotate(180deg)';
    }
});

document.querySelector('#main8').addEventListener('click', function(){
    if(document.getElementById('main8').style.height == 720 + 'px'){
        document.getElementById('main8').style.height = 80 + 'px';
        document.getElementById('img8').style.transform = 'rotate(0deg)';
    } else {
        document.getElementById('main8').style.height = 720 + 'px';
        document.getElementById('img8').style.transform = 'rotate(180deg)';
    }
});

document.querySelector('#main9').addEventListener('click', function(){
    if(document.getElementById('main9').style.height == 640 + 'px'){
        document.getElementById('main9').style.height = 80 + 'px';
        document.getElementById('img9').style.transform = 'rotate(0deg)';
    } else {
        document.getElementById('main9').style.height = 640 + 'px';
        document.getElementById('img9').style.transform = 'rotate(180deg)';
    }
});

document.querySelector('#main10').addEventListener('click', function(){
    if(document.getElementById('main10').style.height == 1200 + 'px'){
        document.getElementById('main10').style.height = 80 + 'px';
        document.getElementById('img10').style.transform = 'rotate(0deg)';
    } else {
        document.getElementById('main10').style.height = 1200 + 'px';
        document.getElementById('img10').style.transform = 'rotate(180deg)';
    }
});

document.querySelector('#main11').addEventListener('click', function(){
    if(document.getElementById('main11').style.height == 640 + 'px'){
        document.getElementById('main11').style.height = 80 + 'px';
        document.getElementById('img11').style.transform = 'rotate(0deg)';
    } else {
        document.getElementById('main11').style.height = 640 + 'px';
        document.getElementById('img11').style.transform = 'rotate(180deg)';
    }
});

document.querySelector('#main12').addEventListener('click', function(){
    if(document.getElementById('main12').style.height == 1840 + 'px'){
        document.getElementById('main12').style.height = 80 + 'px';
        document.getElementById('img12').style.transform = 'rotate(0deg)';
    } else {
        document.getElementById('main12').style.height = 1840 + 'px';
        document.getElementById('img12').style.transform = 'rotate(180deg)';
    }
});

document.querySelector('#main13').addEventListener('click', function(){
    if(document.getElementById('main13').style.height == 160 + 'px'){
        document.getElementById('main13').style.height = 80 + 'px';
        document.getElementById('img13').style.transform = 'rotate(0deg)';
    } else {
        document.getElementById('main13').style.height = 160 + 'px';
        document.getElementById('img13').style.transform = 'rotate(180deg)';
    }
});

document.querySelector('#main14').addEventListener('click', function(){
    if(document.getElementById('main14').style.height == 1600 + 'px'){
        document.getElementById('main14').style.height = 80 + 'px';
        document.getElementById('img14').style.transform = 'rotate(0deg)';
    } else {
        document.getElementById('main14').style.height = 1600 + 'px';
        document.getElementById('img14').style.transform = 'rotate(180deg)';
    }
});

document.querySelector('#main15').addEventListener('click', function(){
    if(document.getElementById('main15').style.height == 240 + 'px'){
        document.getElementById('main15').style.height = 80 + 'px';
        document.getElementById('img15').style.transform = 'rotate(0deg)';
    } else {
        document.getElementById('main15').style.height = 240 + 'px';
        document.getElementById('img15').style.transform = 'rotate(180deg)';
    }
});

document.querySelector('#main16').addEventListener('click', function(){
    if(document.getElementById('main16').style.height == 240 + 'px'){
        document.getElementById('main16').style.height = 80 + 'px';
        document.getElementById('img16').style.transform = 'rotate(0deg)';
    } else {
        document.getElementById('main16').style.height = 240 + 'px';
        document.getElementById('img16').style.transform = 'rotate(180deg)';
    }
});