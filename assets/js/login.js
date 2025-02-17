//Sing inボタン
const $singInform = document.querySelector('#js-loginForm');
$singInform.addEventListener('submit', e => {
    e.preventDefault();
    const $email = document.getElementById('js-username');
    const $password = document.getElementById('js-password');

    //入力値をemail,passwordに保存
    let email = $email.value;
    let password = $password.value;

    // ローカルストレージにユーザー情報を保存
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    // 認証成功時にisAuthenticatedを設定
    localStorage.setItem('isAuthenticated', 'true');

    // 入力をリセット
    $email.value = ''
    $password.value = ''

    alert('Sign in できました。ご登録ありがとうございます。')

    window.location.href = '../../index.html'; // home.htmlに遷移

});

//aタグsignup
const $signUp = document.querySelector('#js-signup');

const handleSignUpClick = (e) => {
    e.preventDefault();
    const isAuthenticated = localStorage.isAuthenticated === 'true';
    if (isAuthenticated && confirm('前回のログイン情報を使ってログインしますか？')) {
        //isAuthenticatedがtrueの場合、index.htmlに遷移する
        redirectToHomePage();
    } else {
        alert('アカウント情報が見つかりません。ログインフォームからログインして下さい。')
    }
}

//ホームページにリダイレクトする関数
const redirectToHomePage = () => window.location.href = '../../index.html';


$signUp.addEventListener('click', handleSignUpClick);

