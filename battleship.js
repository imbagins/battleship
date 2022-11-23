var ranLoc = Math.floor(Math.random() * 5);
var loc1 = ranLoc;
var loc2 = 4;
var loc3 = 5;
var boom = 0; //hits количество попаданий
var shot; //текущая попытка выстрела guess
var shots = 0;
var bottom = false; //isSunk когда крабль пойдет на дноЮ будет тру

while (bottom == false) {
    shot = prompt("Привет! Давай, поиграем в Морской бой? В 7 клетках по горизонтали спрятался трехпалубник. Найди его за маленькое количество попыток. Нажми цифру от 0 до 6:");
    if (shot < 0 || shot > 6) {
        alert("Не понимаю тебя :( Введи цифру от 0 до 6");
        } else {
        shots = shots + 1;

        if (shot == loc1 || shots == loc2 ||shots == loc3) {
            
            alert("Ты попал! Продолжаем)");
            boom = boom + 1;

            if (boom == 3) {
                bottom = true;
                alert("Корабль потоплен...");
                }
           } else { alert("Мимо!");
        }
       
        }
}

var stats = "Ты сделал " + shots + " выстрелов по полю, " +
 "твоя меткость равна " + (3/shots);
alert(stats);
