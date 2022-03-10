basic.forever(function () {
    for (let index = 0; index < 1000; index++) {
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Forever)
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(750)
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # . # .
            `)
        basic.pause(750)
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            # # # # #
            `)
        basic.pause(750)
        basic.showLeds(`
            . . # # #
            . . # . .
            . . # . .
            . . # . .
            # # # . .
            `)
        basic.pause(750)
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(750)
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        basic.pause(750)
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
        basic.pause(750)
        basic.showIcon(IconNames.Heart)
        basic.pause(750)
    }
})
