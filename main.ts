scene.setBackgroundColor(7)
let playerImg = sprites.duck.duck2
let projectileImg1 = sprites.food.smallDrumstick
let projectileImg2 = sprites.food.bigHam
let item_Image = sprites.food.smallIceCream

// Create ducky sprite
let ducky = sprites.create(playerImg, SpriteKind.Player)
controller.moveSprite(ducky)
ducky.setFlag(SpriteFlag.StayInScreen, true)

// Spawn projectiles
game.onUpdateInterval(500, function() {
    let p = sprites.create(projectileImg1)
    p.setPosition(randint(0,160), 0)
    p.setVelocity(0, 50)
})

game.onUpdateInterval(500, function() {
    let p = sprites.create(projectileImg2)
    p.setPosition(0, randint(0,120))
    p.setVelocity(50, 0)
})