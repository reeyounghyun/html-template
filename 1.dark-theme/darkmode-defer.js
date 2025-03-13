/**
 * 다크모드 토글 기능 - 방식 2: defer 속성 사용
 * HTML 파싱이 완료된 후 실행됨
 * HTML 헤드 내에 <script defer src="darkmode-defer.js"></script> 형태로 포함
 */

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