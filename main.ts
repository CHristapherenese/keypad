function _3_ButtonSet () {
    if (input.buttonA1.isPressed()) {
        C1 = 1
    } else {
        C1 = 0
    }
    if (input.buttonA2.isPressed()) {
        C2 = 1
    } else {
        C2 = 0
    }
    if (input.buttonA3.isPressed()) {
        C3 = 1
    } else {
        C3 = 0
    }
    if (input.buttonA4.isPressed()) {
        C4 = 1
    } else {
        C4 = 0
    }
    if (input.buttonD5.isPressed()) {
        R1 = 1
    } else {
        R1 = 0
    }
    if (input.buttonD6.isPressed()) {
        R2 = 1
    } else {
        R2 = 0
    }
    if (input.buttonD9.isPressed()) {
        R3 = 1
    } else {
        R3 = 0
    }
    if (input.buttonD10.isPressed()) {
        R4 = 1
    } else {
        R4 = 0
    }
}
function _4_NumberSet () {
    if (R1 == 1 || C1 == 1) {
        keyboard.type("1")
    }
    if (R1 == 1 || C2 == 1) {
        keyboard.type("2")
    }
    if (R1 == 1 || C3 == 1) {
        keyboard.type("3")
    }
    if (R2 == 1 || C1 == 1) {
        keyboard.type("4")
    }
    if (R2 == 1 || C2 == 1) {
        keyboard.type("5")
    }
    if (R2 == 1 || C3 == 1) {
        keyboard.type("6")
    }
    if (R3 == 1 || C1 == 1) {
        keyboard.type("7")
    }
    if (R3 == 1 || C2 == 1) {
        keyboard.type("8")
    }
    if (R3 == 1 || C3 == 1) {
        keyboard.type("9")
    }
    if (R4 == 1 || C2 == 1) {
        keyboard.type("0")
    }
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
})
function EnableChat () {
    keyboard.key("q", KeyboardKeyEvent.Press)
    pause(100)
}
function ScanDelay () {
    pause(100)
}
function ButtonScanCol () {
    pins.A1.digitalWrite(true)
    ScanDelay()
    pins.A1.digitalWrite(false)
    pins.A2.digitalWrite(true)
    ScanDelay()
    pins.A2.digitalWrite(false)
    pins.A3.digitalWrite(true)
    ScanDelay()
    pins.A3.digitalWrite(false)
    pins.A4.digitalWrite(true)
    ScanDelay()
    pins.A4.digitalWrite(false)
}
function ButtonScanRow () {
    pins.D5.digitalWrite(true)
    ScanDelay()
    pins.D5.digitalWrite(false)
    pins.D6.digitalWrite(true)
    ScanDelay()
    pins.D6.digitalWrite(false)
    pins.D9.digitalWrite(true)
    ScanDelay()
    pins.D9.digitalWrite(false)
    pins.D10.digitalWrite(true)
    ScanDelay()
    pins.D10.digitalWrite(false)
}
let C4 = 0
let C3 = 0
let C2 = 0
let C1 = 0
let R4 = 0
let R3 = 0
let R2 = 0
let R1 = 0
pins.D10.digitalWrite(false)
R1 = 0
R2 = 0
R3 = 0
R4 = 0
C1 = 0
C2 = 0
C3 = 0
C4 = 0
forever(function () {
	
})
