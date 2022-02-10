// scrollindicator
window.addEventListener('DOMContentLoaded', function(){
    //스크롤 이벤트 처리
    window.addEventListener("scroll", function(event){
        if(document.querySelector('.progressbar') != null)setProgress();
    });
});

function setProgress() {          
    let currY = document.documentElement.scrollTop; 
    let totalY = document.documentElement.scrollHeight - document.documentElement.clientHeight;//전체 높이
    let percentage = (currY / totalY) * 100; 
    document.querySelector(".progress").style.width = percentage + "%"; 
}

// 인터랙션 요소 추가
(() => {
        const stepElems = document.querySelectorAll('.step');
        const bgElems = document.querySelectorAll('.step');
})();



const toggleBtn = document.querySelector('.navbar_toggleBtn');
const navMenu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});