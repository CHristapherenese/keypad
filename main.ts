let C1 = 0
let C2 = 0
let C3 = 0
let C4 = 0
let R1 = 0
let R2 = 0
let R3 = 0
let R4 = 0
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
function _1_DriverNumber () {
    _2_ButtonScan()
    _3_ButtonSet()
    _4_NumberSet()
}
function _2_ButtonScan () {
    pins.A1.digitalWrite(true)
    pins.A1.digitalWrite(false)
    pins.A2.digitalWrite(true)
    pins.A2.digitalWrite(false)
    pins.A3.digitalWrite(true)
    pins.A3.digitalWrite(false)
    pins.A4.digitalWrite(true)
    pins.A4.digitalWrite(false)
    pins.D5.digitalWrite(true)
    pins.D5.digitalWrite(false)
    pins.D6.digitalWrite(true)
    pins.D6.digitalWrite(false)
    pins.D9.digitalWrite(true)
    pins.D9.digitalWrite(false)
    pins.D10.digitalWrite(true)
    pins.D10.digitalWrite(false)
}
forever(function () {
    _1_DriverNumber()
})
