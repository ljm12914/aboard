(_=>{
    var canvas = document.getElementById("canvas")! as HTMLCanvasElement;
    var vContent = canvas.getContext("2d")!;
    (_=>{ //初始化程序
        suitCanvasToWindow();
    })();
    window.onresize = suitCanvasToWindow;
    function suitCanvasToWindow(){
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    }
    canvas.onpointerdown = e=>{

    }
    canvas.onpointermove = e=>{

    }
    canvas.onpointerup = e=>{

    }
    canvas.onpointerenter = e=>{

    }
    canvas.onpointerleave = e=>{
        
    }
    canvas.oncontextmenu = e=>{
        e.preventDefault();
        //todo:显示菜单
    }
})();