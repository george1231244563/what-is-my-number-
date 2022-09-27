radio.onReceivedNumber(function (receivedNumber) {
    if (0 == 0) {
        basic.showString("yes")
        random_number = randint(0, 10)
    } else {
        basic.showString("no")
    }
})
input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    radio.setGroup(number)
})
let random_number = 0
let number = 0
number = 0
radio.setGroup(68)
random_number = randint(0, 10)
basic.forever(function () {
	
})
