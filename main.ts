namespace SpriteKind {
    export const Item = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Item, function (sprite, otherSprite) {
    icecreamReset()
    info.changeScoreBy(1)
})
function icecreamReset () {
    icecream.setPosition(randint(0, 160), randint(20, 120))
    icecream.say("here", 2000)
}
info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
    sprite.startEffect(effects.bubbles, 500)
})
let q: Sprite = null
let p: Sprite = null
let icecream: Sprite = null
scene.setBackgroundColor(7)
let playerImg = sprites.duck.duck2
let projectileImg1 = sprites.food.smallDrumstick
let projectileImg2 = sprites.food.smallDonut
let item_Image = sprites.food.smallIceCream
icecream = sprites.create(item_Image, SpriteKind.Item)
icecreamReset()

info.setLife(20)
info.startCountdown(20)

// Create ducky sprite
let ducky = sprites.create(playerImg, SpriteKind.Player)
controller.moveSprite(ducky)
ducky.setFlag(SpriteFlag.StayInScreen, true)
// Spawn projectiles
game.onUpdateInterval(500, function () {
    p = sprites.create(projectileImg1, SpriteKind.Projectile)
    p.setPosition(randint(0, 160), 0)
    p.setVelocity(0, 50)
})
game.onUpdateInterval(500, function () {
    q = sprites.create(projectileImg2, SpriteKind.Projectile)
    q.setPosition(0, randint(0, 120))
    q.setVelocity(50, 0)
})
