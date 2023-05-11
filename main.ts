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
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeLifeBy(-1)
})
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
game.setDialogFrame(img`
    8888.....88....888....888...8888.
    867788..8768..86768..8678.887768.
    8767768.877788676768877788677678.
    87767768676778776778776786776778.
    .877876667767877677876778678778..
    .867786686766867676866766687768..
    ..8666868867688686886768686668...
    .88866688888888888888888866688...
    8777768866666666666666668886688..
    86767768666666666666666688677778.
    .8776678666666666666666686776768.
    ..87766866666666666666668766778..
    ..8888886666666666666666866778...
    .86776886666666666666666888888...
    8677776866666666666666668867768..
    87666688666666666666666686777768.
    86777768666666666666666688666678.
    .8677688666666666666666686777768.
    ..88888866666666666666668867768..
    ..8776686666666666666666888888...
    .87766786666666666666666866778...
    8676776866666666666666668766778..
    87777688666666666666666686776768.
    .8866888666666666666666688677778.
    ..88666888888888888888888666888..
    ..8666868676886868867688686668...
    .867786667668676768667686687768..
    .877876877678776778767766678778..
    87767768767787767787767686776778.
    876776887778867676887778.8677678.
    867788.8768..86768..8678..887768.
    8888...888....888....88.....8888.
    .................................
    `)
