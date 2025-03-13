/**
 * 다크모드 토글 기능 - 방식 3: window.onload 이벤트 사용
 * 페이지의 모든 리소스(이미지, 스타일시트 등)가 로드된 후 실행
 */

window.onload = function() {
    // DOM 요소 참조
    const body = document.getElementById('body');
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // 로컬 스토리지에서 다크모드 설정 확인
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.id = 'dark-mode';
    }
    
    // 다크모드 토글 버튼에 클릭 이벤트 추가
    darkModeToggle.addEventListener('click', () => {
        if (body.id === 'dark-mode') {
            // 다크모드 비활성화
            body.id = '';
            localStorage.setItem('darkMode', null);
        } else {
            // 다크모드 활성화
            body.id = 'dark-mode';
            localStorage.setItem('darkMode', 'enabled');
        }
    });
};