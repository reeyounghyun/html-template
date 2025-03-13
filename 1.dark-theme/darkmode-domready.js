/**
 * 다크모드 토글 기능 - 방식 4: DOMContentLoaded 이벤트와 즉시 실행 함수(IIFE) 사용
 * DOM이 완전히 로드된 후 실행되며, 코드 스코프가 격리됨
 */

(function() {
    /**
     * DOM 요소 참조 및 이벤트 설정 함수
     */
    function init() {
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
    }

    // DOM이 준비되었는지 확인하고 적절한 타이밍에 init 함수 실행
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        // 이미 DOM이 준비된 상태
        setTimeout(init, 1);
    } else {
        // DOM이 아직 로드 중인 상태
        document.addEventListener('DOMContentLoaded', init);
    }
})();