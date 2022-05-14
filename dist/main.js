"use strict";
(_ => {
    var canvas = document.getElementById("canvas");
    var vContent = canvas.getContext("2d");
    (_ => {
        suitCanvasToWindow();
    })();
    window.onresize = suitCanvasToWindow;
    function suitCanvasToWindow() {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    }
    canvas.onpointerdown = e => {
    };
    canvas.onpointermove = e => {
    };
    canvas.onpointerup = e => {
    };
    canvas.onpointerenter = e => {
    };
    canvas.onpointerleave = e => {
    };
    canvas.oncontextmenu = e => {
        e.preventDefault();
    };
})();
//# sourceMappingURL=main.js.map