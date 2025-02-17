//sectionDOM
const $mainContent = document.querySelector('#js-gridBox');
//selectDOM
const $select = document.querySelector('#js-gridSlc');
//All optionDOM
const $options = $select.querySelectorAll('[id ^= "js-gridOpt"]');

//選択されたselectの内容により処理を分岐する関数（ハンドラー）
const changeHandler = (e) => {
    const selDg = e.currentTarget.options[e.currentTarget.selectedIndex].getAttribute('data-grid');

    // ボックスを作成するための親要素を取得
    const $boxContainer = document.getElementById('js-boxContainer');

    // 既存のボックスをクリア
    $boxContainer.innerHTML = '';

    // グリッドのクラスをリセット
    $boxContainer.classList.remove('grid-4', 'grid-2', 'grid-1', 'flexible');

    if (selDg === '1') {
        // 4×4のグリッドを適用
        $boxContainer.classList.add('grid-4');
        for (let i = 0; i < 16; i++) {
            const box = document.createElement('div');
            box.className = 'box'; // ボックスのクラス名を設定
            // 01から16までの数字を設定
            box.textContent = String(i + 1).padStart(2, '0');
            $boxContainer.appendChild(box);
        }
    } else if (selDg === '2') {
        // 2×2のグリッドを適用
        $boxContainer.classList.add('grid-2');
        for (let i = 0; i < 4; i++) {
            const box = document.createElement('div');
            box.className = 'box';
            // 01から０４までの数字を設定
            box.textContent = String(i + 1).padStart(2, '0');
            $boxContainer.appendChild(box);
        }
    } else if (selDg === '3') {
        // 1×6のグリッドを適用
        $boxContainer.classList.add('grid-1');
        for (let i = 0; i < 6; i++) {
            const box = document.createElement('div');
            box.className = 'box';
            // 01から０６までの数字を設定
            box.textContent = String(i + 1).padStart(2, '0');
            $boxContainer.appendChild(box);
        }
    } else {
        $boxContainer.classList.add('flexible');
        for (let i = 0; i < 24; i++) {
            const box = document.createElement('div');
            box.className = 'box';
            // 01から24までの数字を設定
            box.textContent = String(i + 1).padStart(2, '0');
            $boxContainer.appendChild(box);
        }
        alert('画面の大きさを変更してみて下さい')
    }
}
// 初期表示のためにchangeHandlerを呼び出す
changeHandler({ currentTarget: $select });


// セレクトボタンのイベントリスナーを追加
$select.addEventListener('change', (e) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (!isAuthenticated || isAuthenticated !== 'true') {
        e.preventDefault();
        $select.disabled = true; // セレクトボタンを無効化
        console.log('call change!!!')
        alert('ログインが必要です。');
    } else {
        changeHandler(e); // 認証されている場合の処理
        $select.disabled = false; // セレクトボタンを有効化
    }
});

//ログインボタン
const $loginBtn = document.querySelector('#js-loginBtn')
$loginBtn.addEventListener('click', () => {
    //ログイン画面に遷移
    window.location.href = './assets/HTML/home.html'
})