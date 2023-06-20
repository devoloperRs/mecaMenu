function changeImgR() {
    var img = document.getElementById('changer');
    img.src = 'pizza.png';
    var documentRight = document.getElementById('info-text-1');
    documentRight.style.display = 'flex';
    var mainImg = document.getElementById('info-text-0');
    mainImg.style.display = 'none';
    var mainImg = document.getElementById('info-text-2');
    mainImg.style.display = 'none';
    var mainImg = document.getElementById('info-text-3');
    mainImg.style.display = 'none';
    var mainImg = document.getElementById('info-text-4');
    mainImg.style.display = 'none';
}
function changeImgL() {
    var img_left = document.getElementById('changer');
    img_left.src = 'checken.png';
    var documentLeft = document.getElementById('info-text-2');
    documentLeft.style.display = 'flex';
    var mainImg = document.getElementById('info-text-0');
    mainImg.style.display = 'none';
    var mainImg = document.getElementById('info-text-1');
    mainImg.style.display = 'none';
    var mainImg = document.getElementById('info-text-3');
    mainImg.style.display = 'none';
    var mainImg = document.getElementById('info-text-4');
    mainImg.style.display = 'none';
}

function changeImgR2() {
    var img2 = document.getElementById('changer');
    img2.src = 'nodel 1.png';
    var documentRight2 = document.getElementById('info-text-3');
    documentRight2.style.display = 'flex';
    var mainImg = document.getElementById('info-text-0');
    mainImg.style.display = 'none';
    var mainImg = document.getElementById('info-text-1');
    mainImg.style.display = 'none';
    var mainImg = document.getElementById('info-text-2');
    mainImg.style.display = 'none';
    var mainImg = document.getElementById('info-text-4');
    mainImg.style.display = 'none';
}
function changeImgL2() {
    var img_left2 = document.getElementById('changer');
    img_left2.src = 'nodel 3.png';
    var documentLeft2 = document.getElementById('info-text-4');
    documentLeft2.style.display = 'flex';
    var mainImg = document.getElementById('info-text-0');
    mainImg.style.display = 'none';
    var mainImg = document.getElementById('info-text-1');
    mainImg.style.display = 'none';
    var mainImg = document.getElementById('info-text-2');
    mainImg.style.display = 'none';
    var mainImg = document.getElementById('info-text-3');
    mainImg.style.display = 'none';
}

// swiper menu
// order style repalay
function order(){
    var show = document.getElementById('order-replay');
    show.style.display='flex';
    var blendMode = document.getElementById('back-blend');
    blendMode.style.display='block';
}
function ok(){
    var show = document.getElementById('order-replay');
    show.style.display='none';
    var blendMode = document.getElementById('back-blend');
    blendMode.style.display='none';
}
