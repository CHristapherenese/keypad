function _4_NumberSet () {
    if (R1 == 1 && C1 == 1) {
        keyboard.type("1")
    }
    if (R1 == 1 && C2 == 1) {
        keyboard.type("2")
    }
    if (R1 == 1 && C3 == 1) {
        keyboard.type("3")
    }
    if (R2 == 1 && C1 == 1) {
        keyboard.type("4")
    }
    if (R2 == 1 && C2 == 1) {
        keyboard.type("5")
    }
    if (R2 == 1 && C3 == 1) {
        keyboard.type("6")
    }
    if (R3 == 1 && C1 == 1) {
        keyboard.type("7")
    }
    if (R3 == 1 && C2 == 1) {
        keyboard.type("8")
    }
    if (R3 == 1 && C3 == 1) {
        keyboard.type("9")
    }
    if (R4 == 1 && C2 == 1) {
        keyboard.type("0")
    }
}
function enter () {
    keyboard.type("")
}
function DriverAction () {
    if (R1 == 1 && C4 == 1) {
        EnableChat()
        keyboard.type("!EOL")
        _4_NumberSet()
    }
    if (R2 == 1 && C4 == 1) {
        EnableChat()
        keyboard.type("!black")
        _4_NumberSet()
    }
    if (R3 == 1 && C4 == 1) {
        EnableChat()
        keyboard.type("!dq")
        _4_NumberSet()
    }
    if (R4 == 1 && C4 == 1) {
        EnableChat()
        keyboard.type("!clear")
        _4_NumberSet()
    }
}
function EnableChat () {
    keyboard.key("t", KeyboardKeyEvent.Press)
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
function ScanDelay () {
    pause(100)
}
input.buttonD12.onEvent(ButtonEvent.Click, function () {
    EnableChat()
    keyboard.type("!yellow")
    enter()
    pins.D13.digitalWrite(true)
})
function ButtonScanCol () {
    pins.D5.digitalWrite(false)
    pins.D6.digitalWrite(false)
    pins.D9.digitalWrite(false)
    pins.D10.digitalWrite(false)
    if (input.buttonA1.isPressed()) {
        C1 = 1
        ScanRow = 1
    } else {
        C1 = 0
    }
    if (input.buttonA2.isPressed()) {
        C2 = 1
        ScanRow = 1
    } else {
        C2 = 0
    }
    if (input.buttonA3.isPressed()) {
        C3 = 1
        ScanRow = 1
    } else {
        C3 = 0
    }
    if (input.buttonA4.isPressed()) {
        C4 = 1
        ScanRow = 1
    } else {
        C4 = 0
    }
}
function ButtonScanRow () {
    pins.A1.digitalWrite(false)
    pins.A2.digitalWrite(false)
    pins.A3.digitalWrite(false)
    pins.A4.digitalWrite(false)
    if (input.buttonD5.isPressed()) {
        R1 = 1
        DriverAction()
    } else {
        R1 = 0
    }
    if (input.buttonD6.isPressed()) {
        R2 = 1
        DriverAction()
    } else {
        R2 = 0
    }
    if (input.buttonD9.isPressed()) {
        R3 = 1
        DriverAction()
    } else {
        R3 = 0
    }
    if (input.buttonD10.isPressed()) {
        R4 = 1
        DriverAction()
    } else {
        R4 = 0
    }
}
let ScanRow = 0
let C4 = 0
let R4 = 0
let R3 = 0
let R2 = 0
let C3 = 0
let C2 = 0
let C1 = 0
let R1 = 0
pins.D11.digitalWrite(false)
forever(function () {
    if (ScanRow == 0) {
        ButtonScanCol()
    } else {
        ButtonScanRow()
    }
})
