document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter-value');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');

    // データの読み込み
    let count = parseInt(localStorage.getItem('counter_value')) || 0;

    // 表示の更新関数
    const updateDisplay = () => {
        counterDisplay.textContent = count;
        counterDisplay.classList.add('pulse');
        setTimeout(() => counterDisplay.classList.remove('pulse'), 200);

        localStorage.setItem('counter_value', count);
    };

    // 初期表示
    updateDisplay();

    // +1 ボタン
    incrementBtn.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    decrementBtn.addEventListener('click', () => {
        count--;
        updateDisplay();
    });

    // Reset ボタン
    resetBtn.addEventListener('click', () => {
        // 確認ダイアログを出すのもよいですが、シンプルさを優先して即リセット
        count = 0;
        updateDisplay();
    });
});
