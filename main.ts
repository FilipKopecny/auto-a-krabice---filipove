input.onSound(DetectedSound.Loud, function () {
    if (spustene == 0) {
        spustene += 1
        Rover.MotorRunDual(255, 251)
    }
})
let spustene = 0
spustene = 0
basic.forever(function () {
    if (Rover.Ultrasonic() < 10) {
        Rover.MotorStopAll(MotorActions.Stop)
    }
})
