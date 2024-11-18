let radio_group = 77
radio.setGroup(radio_group)
basic.showNumber(radio_group)
input.setAccelerometerRange(AcceleratorRange.EightG)
loops.everyInterval(100, function () {
    radio.sendValue("x", input.acceleration(Dimension.X) / 1000)
    radio.sendValue("y", input.acceleration(Dimension.Y) / 1000)
    radio.sendValue("z", input.acceleration(Dimension.Z) / 1000)
    radio.sendValue("acc", input.acceleration(Dimension.Strength) / 1000)
    led.toggle(2, 2)
})
