let x, i;
x = document.getElementsByClassName("overlay");

for (i = 0; i < x.length; i++){
    compsreImages(x[i]);
}

function compsreImages(img) {

    console.log(img)

    let slaider, cliked = 0, w, h;
    w = img.offsetWidth;
    h = img.offsetHeight;

    img.style.width = (w / 2) + "px";
    slaider = document.createElement("DIV");
    slaider.setAttribute("class", "slaider");

    img.parentElement.insertBefore(slaider, img);

    slaider.style.top = (h / 2) - (slaider.offsetHeight / 2) + "px";
    slaider.style.left = (w / 2) - (slaider.offsetWidth / 2) + "px";

    slaider.addEventListener("mousedown", slaiderStart);
    window.addEventListener("mouseup", slaiderFinish);
    slaider.addEventListener("touchstart", slaiderStart);
    window.addEventListener("touchend", slaiderFinish);
    function slaiderStart(e) {
        e.preventDefault();

        cliked = 1;

        window.addEventListener("mousemove", slaiderMove);
        window.addEventListener("touchmove", slaiderMove);
    }

    function slaiderFinish() {
        cliked = 0;
    }

    function slaiderMove(e) {
        let pos;
        if (cliked == 0) return false;
        pos = getCursorPos(e);

        if (pos < 0) pos = 0;
        if (pos > w) pos = w;

        slaide(pos);
    }

    function getCursorPos(e) {
        let a, x = 0;

        e = (e.chengedTouches) ? e.chengedTouches[0] : e;
        a = img.getBoundingClientRect();
        x = e.pageX - a.left;
        x = x - window.pageXOffset;
        return x;
    }

    function slaide(x) {
        img.style.width = x + "px";
        slaider.style.left = img.offsetWidth - (slaider.offsetWidth / 2) + "px";
    }
}   

