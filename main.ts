controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (TRex.isHittingTile(CollisionDirection.Bottom)) {
        TRex.vy = -220
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
let exit2 = 0
let exit = 0
let projectile: Sprite = null
let TRex: Sprite = null
scene.setBackgroundColor(13)
TRex = sprites.create(assets.image`tRex`, SpriteKind.Player)
TRex.setPosition(20, 70)
TRex.ay = 400
tiles.setCurrentTilemap(tilemap`level2`)
game.onUpdateInterval(1500, function () {
    projectile = sprites.createProjectileFromSide(assets.image`cactus`, randint(-200, -120), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
    exit += 1
    if (exit > 4) {
        exit2 = randint(1, 10)
        if (exit2 == 5) {
            pause(100)
            projectile = sprites.createProjectileFromSide(assets.image`fly`, randint(-120, -100), 0)
            tiles.placeOnTile(projectile, tiles.getTileLocation(9, 3))
        } else if (exit2 == 10) {
            projectile = sprites.createProjectileFromSide(assets.image`cactus0`, randint(-200, -100), 0)
            tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
        }
    }
})
