input.onButtonPressed(Button.A, function () {
    发射点.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    子弹 = game.createSprite(发射点.get(LedSpriteProperty.X), 发射点.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        发射点.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
        if (子弹.isTouching(目标)) {
            game.addScore(1)
            music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
            子弹.delete()
            目标.delete()
        } else if (子弹.get(LedSpriteProperty.Y) <= 0) {
            子弹.delete()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    发射点.move(1)
})
let 目标: game.LedSprite = null
let 子弹: game.LedSprite = null
let 发射点: game.LedSprite = null
发射点 = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    目标 = game.createSprite(randint(0, 4), 0)
    basic.pause(200)
    目标.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        目标.move(1)
        basic.pause(500)
    }
    if (目标.isTouching(发射点)) {
        game.gameOver()
    } else if (目标.isTouchingEdge()) {
        目标.delete()
    }
})
