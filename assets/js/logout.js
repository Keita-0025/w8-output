// ログアウトボタンのDOMを取得
const $logoutBtn = document.querySelector('#js-logoutBtn');

// ログアウト処理を行う関数
const logout = () => {
    // ログイン認証を'false'
    localStorage.isAuthenticated = 'false';
    alert('ログアウトしました。');
}

const clickHandler = () => {
    const confirmLogout = confirm('本当にログアウトしますか？');
    if (confirmLogout) {
        logout();
    } else {
        alert('ログアウトをキャンセルしました。');
    }
}


$logoutBtn.addEventListener('click', clickHandler)