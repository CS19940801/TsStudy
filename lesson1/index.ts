let hello: string = "Hello TypeScript";
document.querySelector('#app').innerHTML = hello;


// 枚举类型

enum Role {
    C = 1,
    B = 9,
    D,
    XJ,
    WW
}

/*
    "use strict"; 反向映射
    var Role;
    (function (Role) {
        Role[Role["C"] = 1] = "C";
        Role[Role["B"] = 9] = "B";
        Role[Role["D"] = 10] = "D";
        Role[Role["XJ"] = 11] = "XJ";
        Role[Role["WW"] = 12] = "WW";
    })(Role || (Role = {}));

    console.log(Role)
    {
        1: "C"
        9: "B"
        10: "D"
        11: "XJ"
        12: "WW"
        B: 9
        C: 1
        D: 10
        WW: 12
        XJ: 11
        __proto__: Object
    }
*/ 
console.log(Role);


