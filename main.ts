let push = 0
let yVal = 0
let xVal = 0
let rotating = 0
let yVal_ang = 0
let xVal_ang = 0
radio.setGroup(1)
basic.forever(function () {
    xVal_ang = pins.analogReadPin(AnalogPin.P2)
    yVal_ang = pins.analogReadPin(AnalogPin.P3)
    if (xVal_ang > 600) {
        rotating = 1
        radio.sendString("left0")
        basic.showLeds(`
            . . # # .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (xVal_ang < 400) {
        rotating = 1
        radio.sendString("right0")
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (yVal_ang < 400) {
        rotating = 1
        radio.sendString("up0")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (yVal_ang > 600) {
        rotating = 1
        radio.sendString("down0")
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        rotating = 0
    }
})
basic.forever(function () {
    xVal = pins.analogReadPin(AnalogPin.P0)
    yVal = pins.analogReadPin(AnalogPin.P1)
    push = pins.analogReadPin(AnalogPin.P10)
    if (xVal > 600) {
        radio.sendString("left")
    } else if (xVal < 400) {
        radio.sendString("right")
    } else if (yVal < 400) {
        radio.sendString("up")
    } else if (yVal > 600) {
        radio.sendString("down")
    } else if (xVal > 490 && xVal < 510 && (xVal_ang > 490 && yVal_ang < 510)) {
        radio.sendString("bothstop")
    } else if (rotating == 1) {
    	
    } else {
        radio.sendString("bothstop")
    }
})
