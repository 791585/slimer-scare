controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`lobby`)
    tiles.setCurrentTilemap(tilemap`level`)
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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`slimer`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`slimer1`)
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
    mySprite2 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    tiles.setTileAt(tiles.getTileLocation(14, 2), assets.tile`myTile18`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    info.changeLifeBy(-1)
})
let mySprite2: Sprite = null
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
