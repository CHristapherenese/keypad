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
    }
    if (R2 == 1 && C4 == 1) {
        EnableChat()
        keyboard.type("!black")
    }
    if (R3 == 1 && C4 == 1) {
        EnableChat()
        keyboard.type("!dq")
    }
    if (R4 == 1 && C4 == 1) {
        EnableChat()
        keyboard.type("!clear")
    }
}
input.buttonD11.onEvent(ButtonEvent.Click, function () {
    EnableChat()
    keyboard.type("!yellow")
    enter()
    pins.D13.digitalWrite(true)
})
function EnableChat () {
    keyboard.key("t", KeyboardKeyEvent.Press)
    pause(100)
}
function ScanDelay () {
    pause(100)
}
function ButtonScanCol () {
    pins.D5.digitalWrite(false)
    pins.D6.digitalWrite(false)
    pins.D9.digitalWrite(false)
    pins.D10.digitalWrite(false)
}
function ButtonScanRow () {
    pins.D5.digitalWrite(true)
    pins.D6.digitalWrite(true)
    pins.D9.digitalWrite(true)
    pins.D10.digitalWrite(true)
    pins.A1.digitalWrite(false)
    pins.A2.digitalWrite(false)
    pins.A2.digitalWrite(false)
    pins.A2.digitalWrite(false)
}
let C4 = 0
let C3 = 0
let C2 = 0
let C1 = 0
let R4 = 0
let R3 = 0
let R2 = 0
let R1 = 0
pins.D10.digitalWrite(true)
R1 = 0
R2 = 0
R3 = 0
R4 = 0
C1 = 0
C2 = 0
C3 = 0
C4 = 0
forever(function () {
    ButtonScanCol()
    DriverAction()
})
