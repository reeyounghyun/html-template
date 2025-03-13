/**
 * 다크모드 토글 기능 - 방식 5: jQuery 사용
 * jQuery의 $(document).ready를 사용하여 DOM이 준비되면 실행
 * 사용 전 jQuery 라이브러리가 로드되어 있어야 함
 */

$(document).ready(function() {
    // jQuery를 사용한 DOM 요소 참조
    const body = $('#body');
    const darkModeToggle = $('#darkModeToggle');
    
    // 로컬 스토리지에서 다크모드 설정 확인
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.attr('id', 'dark-mode');
    }
    
    // 다크모드 토글 버튼에 클릭 이벤트 추가
    darkModeToggle.on('click', function() {
        if (body.attr('id') === 'dark-mode') {
            // 다크모드 비활성화
            body.attr('id', '');
            localStorage.setItem('darkMode', null);
        } else {
            // 다크모드 활성화
            body.attr('id', 'dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        }
    });
});