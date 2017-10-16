var LIU00414 = {
    init: function () {
        let myBox = document.createElement('div');
        let boxes = document.getElementById('boxes');
        myBox.classList.add('box');
        myBox.textContent = 'LIU00414';
        boxes.appendChild(myBox);
        myBox.addEventListener('click', changecolor);
        myBox.addEventListener('mouseover', togglehighlight);
        myBox.addEventListener('mouseout', togglehighlight);


        function togglehighlight(ev) {
            ev.currentTarget.classList.toggle('highlight');

        }

        function changecolor(ev) {
            function color() {
                return Math.ceil(Math.random() * 255);
            }
            let randomColor1 = 'rgb(' + color() + ',' + color() + ',' + color() + ')';
            let randomColor2 = 'rgb(' + color() + ',' + color() + ',' + color() + ')';
            ev.currentTarget.style.borderColor = randomColor1;
            ev.currentTarget.style.backgroundColor = randomColor2;
            ev.currentTarget.style.cursor='pointer';
            console.log('randomColor');
        }
    }
}
