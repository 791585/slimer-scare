scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`lobby`)
    tiles.setCurrentTilemap(tilemap`level`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    let if_right = false
    if (if_right == false) {
        projectile = sprites.createProjectileFromSprite(assets.image`myImage`, mySprite, -50, 0)
    } else if (if_right == true) {
        projectile = sprites.createProjectileFromSprite(assets.image`myImage`, mySprite, 50, 0)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`hallway`)
    tiles.setCurrentTilemap(tilemap`level4`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile19`, function (sprite, location) {
    statusbar.value += 0
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`slimer`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    myEnemy = sprites.create(assets.image`myImage1`, SpriteKind.Player)
    info.changeLifeBy(-1)
    if (!(myEnemy)) {
        statusbar.setColor(10, 5)
        statusbar.value = 100
        statusbar.value += -1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`slimer1`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbar.value += -5
    sprites.destroy(projectile)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`apartment`)
    tiles.setCurrentTilemap(tilemap`level0`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`room`)
    tiles.setCurrentTilemap(tilemap`level6`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`HOT DOG STAND`)
    tiles.setCurrentTilemap(tilemap`level2`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`roof`)
    tiles.setCurrentTilemap(tilemap`level5`)
    mySprite.setVelocity(0, 50)
    tiles.setTileAt(tiles.getTileLocation(14, 2), assets.tile`myTile18`)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    myEnemy.follow(mySprite, 50)
    statusbar.attachToSprite(myEnemy)
    statusbar.setLabel("HP")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeLifeBy(1)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . 4 4 7 4 4 6 5 . . . . . . 
        . . 5 4 5 6 5 4 7 6 5 . . . . . 
        . 5 7 7 7 6 7 7 7 7 7 5 . . . . 
        . 5 6 7 7 7 7 7 7 7 7 7 . . . . 
        8 8 5 7 1 2 2 2 2 2 7 7 7 5 . . 
        4 a 8 2 3 3 2 3 3 2 5 7 5 7 5 . 
        a 4 a 8 3 3 3 2 2 7 5 7 7 6 5 . 
        8 4 4 a 8 5 7 7 7 5 7 7 5 6 6 . 
        . 8 a 4 8 7 7 7 7 6 6 6 6 6 6 5 
        . . 8 8 5 5 5 5 5 5 6 6 6 6 6 . 
        . . . . . . 6 6 6 6 6 6 6 6 5 . 
        . . . . . . . 5 5 5 6 6 5 5 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . d d d d d d d d d d d 
        . . . . . . . d d d d d d d . . 
        `,img`
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . 4 4 7 4 4 6 5 . . . . . . 
        . . 5 4 5 6 5 4 7 6 5 . . . . . 
        . 5 7 7 7 6 7 7 7 7 7 5 . . . . 
        . 5 6 7 7 7 7 7 7 7 7 7 . . . . 
        . 8 8 7 1 2 2 2 2 2 7 7 7 5 . . 
        8 4 a 8 3 3 2 3 3 2 5 7 5 7 5 . 
        8 a 4 a 8 3 3 2 2 7 5 7 7 6 5 . 
        . 8 4 4 a 8 7 7 7 5 7 7 5 6 6 . 
        . . 8 a 4 8 7 7 7 6 6 6 6 6 6 5 
        . . . 8 8 5 5 5 5 5 6 6 6 6 6 . 
        . . . . . . 6 6 6 6 6 6 6 6 5 . 
        . . . . . . . 5 5 5 6 6 5 5 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . d d d d d d d d d d d 
        . . . . . . . d d d d d d d . . 
        `,img`
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . 4 4 7 4 4 6 5 . . . . . . 
        . . 5 4 5 6 5 4 7 6 5 . . . . . 
        . 5 7 7 7 6 7 7 7 7 7 5 . . . . 
        . 5 6 7 7 7 7 7 7 7 7 7 . . . . 
        . 5 8 8 1 2 2 2 2 2 7 7 7 5 . . 
        . 8 4 a 8 3 2 3 3 2 5 7 5 7 5 . 
        . 8 a 4 a 8 3 2 2 7 5 7 7 6 5 . 
        . . 8 4 4 a 8 7 7 5 7 7 5 6 6 . 
        . . . 8 a 4 8 7 7 6 6 6 6 6 6 5 
        . . . . 8 5 5 5 5 5 6 6 6 6 6 . 
        . . . . . . 6 6 6 6 6 6 6 6 5 . 
        . . . . . . . 5 5 5 6 6 5 5 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . d d d d d d d d d d d 
        . . . . . . . d d d d d d d . . 
        `,img`
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . 4 4 7 4 4 6 5 . . . . . . 
        . . 5 4 5 6 5 4 7 6 5 . . . . . 
        . 5 7 7 7 6 7 7 7 7 7 5 . . . . 
        . 5 6 7 7 7 7 7 7 7 7 7 . . . . 
        . 5 7 8 8 8 8 2 2 2 7 7 7 5 . . 
        . 5 7 4 a a a a 3 2 5 7 5 7 5 . 
        . 5 7 a 4 a 4 a a 7 5 7 7 6 5 . 
        . . 5 7 4 4 a 8 7 5 7 7 5 6 6 . 
        . . . 5 8 a 4 8 7 6 6 6 6 6 6 5 
        . . . . 5 7 5 5 5 5 6 6 6 6 6 . 
        . . 8 . . 5 6 6 6 6 6 6 6 6 5 . 
        . . . 8 . . 5 5 5 5 6 6 5 5 . . 
        . . . . . . . . . . . . . . . . 
        . 8 . . . d d d d d d d d d d d 
        . . . . . . . d d d d d d d . . 
        `,img`
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . 4 4 7 4 4 6 5 . . . . . . 
        . . 5 4 5 6 5 4 7 6 5 . . . . . 
        . 5 7 7 7 6 7 7 7 7 7 5 . . . . 
        . 5 6 7 7 7 7 7 7 7 7 7 . . . . 
        . 5 7 7 8 8 8 8 8 8 7 7 7 5 . . 
        . 5 7 7 a a a a 3 8 5 7 5 7 5 . 
        . 5 7 8 4 a 4 a a 7 5 7 7 6 5 . 
        . . 5 7 8 4 a 8 7 5 7 7 5 6 6 . 
        . . . 5 7 8 4 8 7 6 6 6 6 6 6 5 
        . . . . 5 7 5 5 5 5 6 6 6 6 6 . 
        . . 8 . . 5 6 6 6 6 6 6 6 6 5 . 
        . . . 8 . . 5 5 5 5 6 6 5 5 . . 
        . . . . . . . . . . . . . . . . 
        . 8 . . . d d d d d d d d d d d 
        . . . . . . . d d d d d d d . . 
        `,img`
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . 4 4 7 4 4 6 5 . . . . . . 
        . . 5 4 5 6 5 4 7 6 5 . . . . . 
        . 5 7 7 7 6 7 7 7 7 7 5 . . . . 
        . 5 6 7 7 7 7 7 7 7 7 7 . . . . 
        . 5 7 7 7 7 7 7 2 7 7 7 7 5 . . 
        . 5 7 2 2 1 2 2 2 7 5 7 5 7 5 . 
        . 5 7 2 2 2 2 2 7 7 5 7 7 6 5 . 
        . . 5 7 7 7 7 7 7 5 7 7 5 6 6 . 
        . . . 5 7 7 7 7 7 6 6 6 6 6 6 5 
        . . . . 5 7 5 5 5 5 6 6 6 6 6 . 
        . . 8 . . 5 6 6 6 6 6 6 6 6 5 . 
        . . . 8 . . 5 5 5 5 6 6 5 5 . . 
        . . . . . . . . . . . . . . . . 
        . 8 . . . d d d d d d d d d d d 
        . . . . . . . d d d d d d d . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    info.changeLifeBy(-1)
})
let myEnemy: Sprite = null
let statusbar: StatusBarSprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`slimer`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundImage(assets.image`apartment`)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite, 90, 0)
mySprite.ay = 500
info.setLife(5)
game.showLongText("Who you gonna call?", DialogLayout.Bottom)
game.showLongText("GHOSTBUSTERS!", DialogLayout.Bottom)
