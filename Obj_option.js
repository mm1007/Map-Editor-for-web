ipX;
ipY;
ipS;

function create_opt_b() {
    apply = createButton("適用");
    ipX = createInput('');
    ipY = createInput('');
    ipS = createInput('');
    createP("X").position(500, 720);
    createP("Y").position(500, 750);
    createP("Size").position(490, 780);
    apply.position(750, 790);
    ipX.position(525, 738);
    ipY.position(525, 768);
    ipS.position(525, 798);
    apply.mousePressed(apply_c)
}

function obj_info(x, y, s) {
    ipX.value(x)
    ipY.value(y)
    ipS.value(s)
}

function apply_c() {
    print(select)
    if (select == -1)
        return
    for (let i = 0; i < obj_data.length; i++) {
        if (i == select) {
            obj_data[i].x = ipX.value();
            obj_data[i].y = ipY.value();
            obj_data[i].s = ipS.value();
            break;
        }
    }
}