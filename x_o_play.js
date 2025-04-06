let turn = 'X'; // מי מתחיל
const buttons = document.querySelectorAll('.toggle-btn');
const winnerMessage = document.getElementById('winner-message');

buttons.forEach(button => {
    button.textContent = ''; // מתחילים עם כפתורים ריקים
    button.addEventListener('click', function () {
        if (this.textContent === '' && !winnerMessage.textContent) { // רק אם הכפתור ריק ולא הוכרז מנצח
            this.textContent = turn;  // שים X או O
            if (checkWinner(turn)) { // בדוק אם יש מנצח
                winnerMessage.textContent = `השחקן ${turn} ניצח!`;
                disableBoard();
                return;
            }
            if (isDraw()) { // בדיקת תיקו
                winnerMessage.textContent = "המשחק נגמר בתיקו!";
                return;
            }
            turn = (turn === 'X') ? 'O' : 'X'; // החלפת תור
        }
    });
});

// פונקציה לבדיקת ניצחון
function checkWinner(player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // שורות
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // עמודות
        [0, 4, 8], [2, 4, 6]            // אלכסונים
    ];

    return winPatterns.some(pattern =>
        pattern.every(index => buttons[index].textContent === player)
    );
}

// פונקציה לבדיקה אם הלוח מלא (תיקו)
function isDraw() {
    return [...buttons].every(button => button.textContent !== '');
}

// השבתת כל הכפתורים אחרי ניצחון
function disableBoard() {
    buttons.forEach(button => button.classList.add('disabled'));
}

// פונקציה לאיפוס המשחק
function resetGame() {
    winnerMessage.textContent = '';
    buttons.forEach(button => {
        button.textContent = '';
        button.classList.remove('disabled');
    });
    turn = 'X'; // חזרה להתחלה
}