document.addEventListener('DOMContentLoaded', function () {
    var infoLists = document.querySelectorAll('.info-list');
    infoLists.forEach(function(list) {
        let isDown = false;
        let startY;
        let scrollTop;

        list.addEventListener('mousedown', function(e) {
            isDown = true;
            list.classList.add('dragging');
            startY = e.pageY - list.getBoundingClientRect().top;
            scrollTop = list.scrollTop;
            e.preventDefault();
        });

        document.addEventListener('mousemove', function(e) {
            if (!isDown) return;
            const y = e.pageY - list.getBoundingClientRect().top;
            const walk = (y - startY) * 1.2; // sensibilidad
            list.scrollTop = scrollTop - walk;
        });

        document.addEventListener('mouseup', function() {
            isDown = false;
            list.classList.remove('dragging');
        });
    });
});