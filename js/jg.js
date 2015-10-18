/**
 * 
 * @param {type} nav - kliknięty element DOM
 * @returns {undefined}
 */
function moveCanvas(nav) {
    var actual = nav.dataset.actual;
    var direct = nav.dataset.direct;
    var newActual = 0;
    if (direct === 'left') {
        newActual = parseInt(actual) - 25;

    } else if (direct === 'right') {
        newActual = parseInt(actual) + 25;
    }
    else if (direct === 'center') {
        newActual = 0;
    }
    draw(newActual);

    document.getElementById("canvas-el-to-left").dataset.actual = newActual;
    document.getElementById("canvas-el-to-right").dataset.actual = newActual;


}
/**
 * 
 * @param {type} start - pozycja od której ma rysować bloczki
 * @returns {undefined}
 */
function draw(start) {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    var y = 60;
    rezerwacja(1, context, 150, y, 100, 'Jakub Gądek', start);
    rezerwacja(1, context, 350, y, 200, 'Jakub Gądek 2', start);
    rezerwacja(1, context, 650, y, 150, 'Jakub Gądek 3', start);
    rezerwacja(1, context, 900, y, 150, 'Jakub Gądek 4', start);
    rezerwacja(1, context, 1300, y, 150, 'Jakub Gądek 5', start);

    rezerwacja(2, context, 150, y, 200, 'Jakub Gądek', start);
    rezerwacja(2, context, 450, y, 150, 'Jakub Gądek 2', start);
    rezerwacja(2, context, 700, y, 100, 'Jakub Gądek 3', start);

    rezerwacja(3, context, 150, y, 150, 'Jakub Gądek', start);
    rezerwacja(3, context, 400, y, 100, 'Jakub Gądek 2', start);
    rezerwacja(3, context, 600, y, 200, 'Jakub Gądek 3', start);
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
 * @param {type} start - zmienna pomocnicza do przesuwania grafik
 * @returns {undefined}
 */
function rezerwacja(lvl, context, x, y, l, text, start) {
    context.beginPath();
    context.strokeStyle = 'green';
    context.lineWidth = 1;
    context.fillStyle = 'green';
    context.moveTo(x + start, lvl * y);
    context.lineTo(x - 30 + start, lvl * y + 20);
    context.lineTo(x + start, lvl * y + 40);
    context.moveTo(x + l + start, lvl * y);
    context.lineTo(x + l + 30 + start, lvl * y + 20);
    context.lineTo(x + l + start, lvl * y + 40);
    context.fillRect(x + start, lvl * y, l, 40);
    context.fillStyle = 'white';
    context.fillText(text, x + 10 + start, lvl * y + 20);
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