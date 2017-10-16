var LIU00414 = {
    init: function () {
        let myBox = document.createElement('div');
        let boxes = document.getElementById('boxes');
        myBox.classList.add('box');
        myBox.textContent = 'LIU00414';
        boxes.appendChild(d);
        myBox.addEventListener('click', changecolor);
        myBox.addEventListener('mouseover', togglehighlight);
        myBox.addEventListener('mouseout', togglehighlight);
console.log('randomColor');

    function togglehighlight(ev) {
        ev.currentTarget.classList.toggle('highlight');

    }

    function changecolor(ev) {
        function color() {
            return Math.ceil(Math.random() * 255);
        }
        let randomColor = 'rgb(' + color() + ',' + color() + ',' + color() + ')';
        ev.currentTarget.style.borderColor = randomColor;
        ev.currentTarget.style.backgroundColor = randomColor;
        console.log('randomColor');
    }
    }
}
