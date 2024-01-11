document.addEventListener("DOMContentLoaded", function () {
    let cells = document.querySelectorAll('#field td');
    let i = 0;

    function isVictory(cells) {
        let combs = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let comb of combs) {
            if (
                cells[comb[0]].textContent == cells[comb[1]].textContent &&
                cells[comb[1]].textContent == cells[comb[2]].textContent &&
                cells[comb[0]].textContent != ''
            ) {
                return true;
            }
        }

        return false;
    }

    for (let cell of cells) {
        cell.addEventListener('click', function step() {
            if (this.textContent === '') {
                this.textContent = ['X', 'O'][i % 2];

                if (isVictory(cells)) {
                    alert(this.textContent + ' wins!');
                } else if (i == 8) {
                    alert('It\'s a draw!');
                }

                i++;
                this.removeEventListener('click', step);
            }
        });
    }
});
