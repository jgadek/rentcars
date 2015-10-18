function draw() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');


    var y = 60;
    rezerwacja(1, context, 150, y, 100, 'Jakub Gądek');
    rezerwacja(1, context, 350, y, 200, 'Jakub Gądek 2');
    rezerwacja(1, context, 650, y, 150, 'Jakub Gądek 3');
    rezerwacja(1, context, 900, y, 150, 'Jakub Gądek 4');
    rezerwacja(1, context, 1300, y, 150, 'Jakub Gądek 5');

    rezerwacja(2, context, 150, y, 200, 'Jakub Gądek');
    rezerwacja(2, context, 450, y, 150, 'Jakub Gądek 2');
    rezerwacja(2, context, 700, y, 100, 'Jakub Gądek 3');

    rezerwacja(3, context, 150, y, 150, 'Jakub Gądek');
    rezerwacja(3, context, 400, y, 100, 'Jakub Gądek 2');
    rezerwacja(3, context, 600, y, 200, 'Jakub Gądek 3');
    samochody(context);
}
/**
 * 
 * @param {type} lvl - poziom na którym ma się rysować element
 * @param {type} context - element canvas
 * @param {type} x - początkowy punkt prostokąta na osi x
 * @param {type} y - początkowy punkt prostokąta na osi y
 * @param {type} l - długość prostokąta
 * @param {type} text - tekst
 * @returns {undefined}
 */
function rezerwacja(lvl, context, x, y, l, text) {
    context.beginPath();
    context.strokeStyle = 'green';
    context.lineWidth = 1;
    context.fillStyle = 'green';
    context.moveTo(x, lvl * y);
    context.lineTo(x - 30, lvl * y + 20);
    context.lineTo(x, lvl * y + 40);
    context.moveTo(x + l, lvl * y);
    context.lineTo(x + l + 30, lvl * y + 20);
    context.lineTo(x + l, lvl * y + 40);
    context.fillRect(x, lvl * y, l, 40);
    context.fillStyle = 'white';
    context.fillText(text, x + 10, lvl * y + 20);
    context.stroke();
}

function samochody(context) {
    context.beginPath();
    context.fillStyle = 'grey';
    context.fillRect(0, 0, 120, 300);
    context.fillStyle = 'white';
    context.font = "12px Arial";
    context.fillText('Lista samochodów:', 10, 20);
    context.font = "10px Arial";
    context.fillText('marka samochodu 1', 10, 40);
    context.fillText('marka samochodu 2', 10, 60);
    context.fillText('marka samochodu 3', 10, 80);
    context.fillText('marka samochodu 4', 10, 100);
    context.fillText('marka samochodu 5', 10, 120);
    context.stroke();

}