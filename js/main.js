// scrollindicator

window.addEventListener('DOMContentLoaded', function(){
    //스크롤 이벤트 처리
    window.addEventListener("scroll", function(event){
        if(document.querySelector('.progressbar') != null)setProgress();
    });
});

function setProgress() {          
    let currY = document.documentElement.scrollTop;//스크롤한 높이
    let totalY = document.documentElement.scrollHeight - document.documentElement.clientHeight;//전체 높이
    let percentage = (currY / totalY) * 100;//퍼센트 값
    document.querySelector(".progress").style.width = percentage + "%";//프로그래스바 너비 변경
}

// "currY" 변수는 현재 뷰포트 상단 Y 좌표.

// "totalY"는 전체 콘텐츠 높이에서 현재 웹브라우저 뷰포트 영역 높이를 뺀 값 
// 기준 Y 좌표가 뷰포트 상단 Y 좌표이기 때문에 맨 아래로 스크롤했을 때
// 프로그래스 바가 100%가 되려면 
// 전체 콘텐츠 높이에서 현재 뷰포트 높이만큼을 빼줘야 함

// will-change 요소에 예상되는 변화를 브라우저에게 힌트로 줌! 최적화 빠름.(성능문제해결을 위한 마지막 수단이 목적임!)
// 실제 요소가 변화 전, 미리 최적화 함! = 페이지 반응성 증가 // 남발x
// transform , opacity 


// -------------------------------------
// 인터랙션 요소 추가



(() => {

        const stepElems = document.querySelectorAll('.step');
        const bgElems = document.querySelectorAll('.step');
        

})();
// 전역변수 사용 회피 위해 즉시실행 익명 함수만들기
// arrow펑션으로 anonymous function 만들어서 ( 괄호로 묶고 )   ();실행해준것
// 지역변수.라서 밖에서 접근 못함 //충돌을 피하기 위해 지역변수를 주로 씀! 함수자체는호출을해야 실행이되니 바로 실행까지 해줬다



