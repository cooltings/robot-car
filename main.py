yVal = 0
xVal = 0


def on_forever():
    global xVal, yVal
    xVal = pins.analog_read_pin(AnalogPin.P0)
    yVal = pins.analog_read_pin(AnalogPin.P1)
    if xVal > 600:
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """)
    elif xVal < 400:
        basic.show_leds("""
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            """)
    elif yVal < 400:
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            """)
    elif yVal > 600:
        basic.show_leds("""
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            """)
    elif xVal == 501 and yVal == 509:
        basic.show_leds("""
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
    elif False:
        pass
    else:
        pass
basic.forever(on_forever)
