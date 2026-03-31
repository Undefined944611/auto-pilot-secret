controller.combos.attachCombo("Up Up Down Down Left Left Right Down", function () {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    Auto_Pilot = 1
})
let Auto_Pilot = 0
controller.combos.setTimeout(3000)
forever(function () {
    if (Auto_Pilot == 1) {
        let statusbar: StatusBarSprite = null
        pause(500)
        statusbar.value += 5
    }
})
