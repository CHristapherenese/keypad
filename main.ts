function enter () {
    keyboard.type("")
}
input.buttonD11.onEvent(ButtonEvent.Click, function () {
    EnableChat()
    keyboard.type("!RED")
    enter()
})
function EnableChat () {
    keyboard.key("q", KeyboardKeyEvent.Press)
    pause(100)
}
function clear () {
    R1 = 0
    R2 = 0
    R3 = 0
    R4 = 0
    C1 = 0
    C2 = 0
    C3 = 0
    C4 = 0
}
input.buttonD12.onEvent(ButtonEvent.Click, function () {
    EnableChat()
    keyboard.type("!YELLOW")
    enter()
})
function DrvActnScan () {
    if (input.buttonD5.isPressed()) {
        EnableChat()
        keyboard.type("!EOL")
        Scan = 1
    } else {
        R1 = 0
    }
    if (input.buttonD6.isPressed()) {
        EnableChat()
        keyboard.type("!black")
        Scan = 1
    } else {
        R2 = 0
    }
    if (input.buttonD9.isPressed()) {
        EnableChat()
        keyboard.type("!dq")
        Scan = 1
    } else {
        R3 = 0
    }
    if (input.buttonD10.isPressed()) {
        EnableChat()
        keyboard.type("!clear")
        Scan = 1
    } else {
        R4 = 0
    }
}
function ButtonScanCol () {
    if (input.buttonA1.isPressed()) {
        C1 = 1
        Scan = 2
    } else {
        C1 = 0
    }
    if (input.buttonA2.isPressed()) {
        C2 = 1
        Scan = 2
    } else {
        C2 = 0
    }
    if (input.buttonA3.isPressed()) {
        C3 = 1
        Scan = 2
    } else {
        C3 = 0
    }
    if (input.buttonA4.isPressed()) {
        C4 = 1
        Scan = 2
    } else {
        C4 = 0
    }
}
function NumberSet () {
    if (R1 == 1 && C1 == 1) {
        keyboard.type("1")
        clear()
        Scan = 1
    }
    if (R1 == 1 && C2 == 1) {
        keyboard.type("2")
        clear()
        Scan = 1
    }
    if (R1 == 1 && C3 == 1) {
        keyboard.type("3")
        clear()
        Scan = 1
    }
    if (R2 == 1 && C1 == 1) {
        keyboard.type("4")
        clear()
        Scan = 1
    }
    if (R2 == 1 && C2 == 1) {
        keyboard.type("5")
        clear()
        Scan = 1
    }
    if (R2 == 1 && C3 == 1) {
        keyboard.type("6")
        clear()
        Scan = 1
    }
    if (R3 == 1 && C1 == 1) {
        keyboard.type("7")
        clear()
        Scan = 1
    }
    if (R3 == 1 && C2 == 1) {
        keyboard.type("8")
        clear()
        Scan = 1
    }
    if (R3 == 1 && C3 == 1) {
        keyboard.type("9")
        clear()
        Scan = 1
    }
    if (R4 == 1 && C2 == 1) {
        keyboard.type("0")
        clear()
        Scan = 1
    }
}
function ButtonScanRow () {
    if (input.buttonD5.isPressed()) {
        R1 = 1
        Scan = 3
    } else {
        R1 = 0
    }
    if (input.buttonD6.isPressed()) {
        R2 = 1
        Scan = 3
    } else {
        R2 = 0
    }
    if (input.buttonD9.isPressed()) {
        R3 = 1
        Scan = 3
    } else {
        R3 = 0
    }
    if (input.buttonD10.isPressed()) {
        R4 = 1
        Scan = 3
    } else {
        R4 = 0
    }
}
let C4 = 0
let C3 = 0
let C2 = 0
let C1 = 0
let R4 = 0
let R3 = 0
let R2 = 0
let R1 = 0
let Scan = 0
pins.D13.digitalWrite(false)
Scan = 0
clear()
forever(function () {
    if (Scan == 0) {
        DrvActnScan()
    } else if (Scan == 1) {
        ButtonScanCol()
    } else if (Scan == 2) {
        ButtonScanRow()
    } else if (Scan == 3) {
        NumberSet()
    } else {
        for (let index = 0; index < 3; index++) {
            pins.D13.digitalWrite(true)
            pause(500)
            pins.D13.digitalWrite(false)
            pause(500)
        }
        pause(2000)
    }
})
