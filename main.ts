controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    myEnemy = sprites.create(assets.image`ghost buster 2`, SpriteKind.Enemy)
    myEnemy.setPosition(151, 62)
    scene.setBackgroundImage(assets.image`lobby`)
    tiles.setCurrentTilemap(tilemap`level`)
    projectile = sprites.create(assets.image`beam`, SpriteKind.Projectile)
    myEnemy = sprites.createProjectileFromSprite(assets.image`beam`, myEnemy, 100, 0)
    myEnemy.setKind(SpriteKind.Projectile)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`myImage`, mySprite, -90, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`myImage`, mySprite, 90, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`hallway`)
    tiles.setCurrentTilemap(tilemap`level4`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`slimer`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`slimer1`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    scene.setBackgroundImage(img`
        aaaaaaaaaaaaaaaaaaaa1111111111111111111111111111111111111111111111111111111111111111111111111111111111aaaaaaaaaaaaaaaaaaaaabbb9999991111111111111111111111111111
        aaaaaaaaaaaaaaaaaaaaccccccccccc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1cccccccccaaaaaaaaaaaaaaaaaaaaaabbb9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaaaaaaccccccccccc1cccccccccccccccccccccccccccccc1ccccccccccccccccccccc1cccccc1cccccccccaaaaaaaaaaaaaaaaaaaaaabbb9999991cc111cccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaaaaaaacccccccccc1cccccccccccccc11111ccccccccccc1cccccccccccccccccccc111ccccc1ccccc1cccaaaaaaaaaaaaaaaaaaaaaabbb9999991cccc1cccccccc1cccccccc1ccc1
        aaaaaaaaaaaaaaaaaaaaacccccccccc1ccccccccccccc11ccccccccccccccc1cccccccccccccccccccccc11cccc1cccc1ccccaaaaaaaaaaaaaaaaaaaaaabbb9999991ccccccccccccc1ccccccccc1cc1
        aaaaaaaaaaaaaaaaaaaaacccccccccc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1cccc11cccaaaaaaaaaaaaaaaaaaaaaabbb9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaaaaaaacccccccccc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1cccccccccaaaaaaaaaaaaaaaaaaaaaabbb9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaaaaaaa11111111111111111111111111111111111111111111111111111111111111111111111111111111aaaaaaaaaaaaaaaaaaaaaabbb9999991111111111111111111111111111
        aaaaaaaaaaaaaaaaaaaaacccccccccc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1cccccccccaaaaaaaaaaaaaaaaaaaaaabbb9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaaaaaaacccccccccc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1cccccccccaaaaaaaaaaaaaaaaaaaaaabbb9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaaaaaaacccccccccc1cccccccccccccccccccccccccccccc1ccccc111cccccccccccccccccccc1cccccccccaaaaaaaaaaaaaaaaaaaaaabbb9999991ccc11cccccccc1cc1ccccccccc1
        aaaaaaaaaaaaaaaaaaaaacccccccccc1cccccccccccccccccccccccccccccc1cccc11cccccccccccccccccccccc1ccc111ccccaaaaaaaaaaaaaaaaaaaaabbb9999991ccc1ccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaaaaaaacccccccccc1cccccccccccccccccccccccccccccc1cccc1ccccccccccccccccccccccc1cc11ccccccaaaaaaaaaaaaaaaaaaaaabbb9999991ccc1ccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaaaaaaacccccccccc1cccccccccccccccccccccccccccccc1ccc11ccccccccccccccccccccccc1cc1cccccccaaaaaaaaaaaaaaaaaaaaabbb9999991cc1cccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaaaaaaacccccccccc1cccccccccccccccccccccccccccccc1ccc1cccccccccccccccccccccccc1cc1ccccccccaaaaaaaaaaaaaaaaaaaabbb9999991cc1cccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaaaaaaccccccccccc1cccccccccccccccccccccccccccccc1ccc1cccccccccccccccccccccccc1cc1ccccccccaaaaaaaaaaaaaaaaaaaabbb9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaaaaaaccccccccccc1cccccccccccccccccccccccccccccc1ccc1cccccccccccccccccccccccc1ccccccccccccaaaaaaaaaaaaaaaaaaabbb9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaaaaaaccccccccccc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1cccccccccccccaaaaaaaaaaaaaaaaaabbb9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaaaaacccccccccccc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1cccccccccccccaaaaaaaaaaaaaaaaaabbb9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaaaaacccccccccc1111111cc11ccccccccccccccccccc1111111ccccccccccccccccccccccc1111111cccccccccaaaaaaaaaaaaaaaaaaabb9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaaaaaccccccccc1cccccc11ccc111ccccccccccccccc1ccccccc1ccccccccccccccccccccc1ccccccc1ccccccccaaaaaaaaaaaaaaaaaaabb9999991ccccccccccccc1ccccccccc11c1
        aaaaaaaaaaaaaaaaaaccccccccc111cccc11c1ccccccccccccccccccc11ccccccc11ccccccccccccccccccc111cccccc11ccccccccaaaaaaaaaaaaaaaaaabb9999991ccccccccccccc1ccccccccc1cc1
        aaaaaaaaaaaaaaaaaacccccccc1cc1ccc11ccc1ccccccccccccccccc1cc1cccc111c1ccccccccccccccccc1cc11cccc11c1cccccccaaaaaaaaaaaaaaaaaabb9999991ccccccccccccc1ccccccc11ccc1
        aaaaaaaaaaaaaaaaaacccccccc1ccc1c11cccc1ccccccccccccccccc1ccc1ccc1ccc1ccccccccccccccccc1ccc11cc1ccc1cccccccaaaaaaaaaaaaaaaaaabb9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaaaccccccccc1cccc1cccccc1ccccccccccccccccc1cccc111cccc1ccccccccccccccccc1cccc111cccc1ccccccccaaaaaaaaaaaaaaaaabb9999991111111111111111111111111111
        aaaaaaaaaaaaaaaaa1111111111cccc1cccccc1111111111111111111ccccc1ccccc1111111111111111111ccccc1ccccc111111111aaaaaaaaaaaaaaaaabb9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaaaccccccccc1cccc11ccccc1ccccccccccccccccc1ccccc1ccccc1ccccccccccccccccc1ccccc1ccccc1ccccccccaaaaaaaaaaaaaaaaabb9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaaacccccccccc1ccccc1ccccc1ccccccccccccccccc1ccccc1ccccc1ccccccccccccccccc1ccccc1ccccc1ccccccccaaaaaaaaaaaaaaaaabb9999991ccccccccccccc1ccccccc111cc1
        aaaaaaaaaaaaaaaacccccccccc1ccccc1ccccc1ccccccccccccccccc1ccccc1ccccc1ccccccccc1111111c1ccccc1ccccc1ccccccccaaaaaaaaaaaaaaaaabb9999991ccccccccccccc1ccccccccc1cc1
        aaaaaaaaaaaaaaaaccccccccccc1cccc1cccc1ccccccccccccccccccc1cccc1cccc1cccccccccc1cccccccc1cccc1cccc1cccccccccaaaaaaaaaaaaaaaaabb9999991ccccccccc1ccc1cccccccccccc1
        aaaaaaaaaaaaaaaacccccccccccc1ccc1ccc1ccccccccccccccccccccc1ccc1ccc1cccccccccc11ccccccccc1c111ccc1ccccccccccaaaaaaaaaaaaaaaaabb9999991ccccccccc1ccc1cccccccccccc1
        aaaaaaaaaaaaaaaaccccccccccccc1111111ccccccccccccccccccccccc1111111ccccccccccc1ccccccccccc1111111cccccccccccaaaaaaaaaaaaaaaaabb9999991ccccccccc11cc1cccccccccccc1
        aaaaaaaaaaaaaaacccccccccccccccc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1cccccccccccccccaaaaaaaaaaaaaaaaabb9999991cccccccccc1cc1cccccccccccc1
        aaaaaaaaaaaaaaacccccccccccccccc1cccccccccccccccccccccccccc1ccc1cccccccccccccccccccccccccccc1cccccccccccccccaaaaaaaaaaaaaaaaabb9999991cccccccccc1cc1cccccccccccc1
        aaaaaaaaaaaaaaaccccccccccccc1cc1ccccccccccccccccccccccccc1cccc1cccccccccccccccccccccccccccc1ccccccccccccccccaaaaaaaaaaaaaaaabb9999991cccccccccc1cc1cccccccccccc1
        aaaaaaaaaaaaaacccccccccccccc1cc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1cccccccccccccccc44444aaaaaaaaaaabb9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaaacccccccccccccc1cc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1cccccccccccccccc44444444aa44444abb9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaa4cccccccccccc1c1cc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1ccccccccccccccc1a444444444444444bb9999991111111111111111111111111111
        aaaaaaaaaa4444ccccccccccccc11cc1cccccccccccccccccccccccccccccc1cc1ccccccccccccccccccccccccc1ccccccccccccccccaaa4444444444444bb9999991ccccccccccccc1cccccccccccc1
        444444a4444444ccccccccccccccccc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1ccccccccccccccccaaaaaaa44444444abb9999991ccccccccccccc1cccccccccccc1
        4444444444444accccccccccccccccc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1cccccccccccccccccaaaaaaaaaaaaaaabb9999991ccccccccccccc1ccc1cccccccc1
        4444444444444111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111aaaaaaaaaaaaaaabb9999991ccccccccccccc1cc1ccccccccc1
        aa44444444aaacccccccccccccccccc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1cccccccccccccccccaaaaaaaaaaaaaaabb9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaacccccccccccccccccc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1cccccccccccccccccaaaaaaaaaaaaaaabb9999991ccc1cccccc1cc1ccc1cccccccc1
        aaaaaaaaaaaaac11111cccccccccccc1cccccccccccccccccccccccccccccc1ccc111cccccccccccccccccccccc1cccccccccccccccccaaaaaaaaaaaaaaabb9999991ccc1cccccc1cc1cccccccccccc1
        aaaaaaaaaaaaac1cccc1ccccccccccc1cccccccccccccccccccccccccccccc1cc1ccccccccccccccccccccccccc1cc111ccccccccccccaaaaaaaaaaaaaaabb9999991ccc1ccccccccc1cccccccccccc1
        aaaaaaaaaaaaacccccccccccccccccc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1cc1ccccccccccccccaaaaaaaaaaaaaaabb9999991ccc1ccccccccc1cccccccccccc1
        aaaaaaaaaaaaacccccccccccccccccc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1cccccccccccccccccaaaaaaaaaaaaaaabb9999991ccc1ccccccccc1cccccccccccc1
        aaaaaaaaaaaaacccccccccccccccccc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1ccccccccccccccccaaaaaaaaaaaaaaaabb9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaacccccccccccccccccc1ccc1cccccccccccccccccccccccccc1ccccccccccccccccccccccccc1cc1ccccccccccccccccaaaaaaaaaaaaaaaaab9999991cccc1cccccccc1cccccccccccc1
        aaaaaaaaaaaaacccccccccccccccccc1ccc1cccccccccccccccccccccccccc1ccccccccccccccccccccccccc1cc1ccccccccccccccccaaaaaaaaaaaaaaaaab9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaccccccccccccccccc1cccc11111ccccccccccccccccccccc1cccccccccccccccccccccccc1ccc1ccccccccccccccccaaaaaaaaaaaaaaaaab9999991cccccc1cccccc1cccccccccccc1
        aaaaaaaaaaaaaaccccccccccccccccc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1ccccccccccccccccaaaaaaaaaaaaaaa66b9999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaaaccccccccccccccccc1cccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccc1ccccccccccccccccaaaaaaaaaaaaaaa6779999991ccccccccccccc1cccccccccccc1
        aaaaaaaaaaaaaa111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111aaaaaaaaaaaaaaaa6677999991111111111111111111111111111
        aaaaaaaaaaaaaa999999999999999959999999999999999999999999999999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaa6666699999999999999999999999999999999
        aaaaaaaaaaaaaaa999999999999999559999999559999999999999999999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaa666669999999999999999999999999999999
        aaaaaaaaaaaaaaa999999999999999955999995599999999999999999999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaa766669999999999999999999999999999999
        aaaaaaaaaaaaaaa999999999999999995599955999999999999999999999999999999999999999999999999999999999999999999aaaaaaaaaaaaaaaaaaa766669999999999999999999999999999999
        aaaaaaaaaaaaaa9999999999999999999599559999999999999999999999999999999999999999999999999999999999999999999aaaaaaaaaaa6676aaaa776669999999999999999999999999999999
        aaaaaaaaaaaaaa9999999999999999999555599999999999999999999999999999999999999999999999999999999999999999999aaaaaaaaaa6667766aaa76669999999999999999999999999999999
        aaaaaaaaaaaaaa9999999999999555555555555555555559999999999999995555559999999999999999999999999999999999999aaaaaaaaaaaaaa66666677679966667777799999999999999999999
        aaaaaaaaaaaaaa99999999999995bbbbbbbbbbbbbbbbbb5999999995555555ffffff559999999999999999999999999999999999999aaaaaaaaaaaaa6666667679666666669999999999999999999999
        aaaaaaaaaaaaa999999999999995bb11111111177111bb599999995fffffffffffffff5599999999999999999999999999999999999aaaaaaaaaaaaaa676666666666666699999999999999999999999
        aaaaaaaaaaaaa999999999999995bb111111aaa77111bb599999995fffffffffffffff5599999999999999999999999999999999999aaaaaaaaaaaaaaa77766666777769999999999999999999999999
        aaaaaaaaaaaaa999999999999995bb1111117aa71111bb599999995ffff333333333ffff55599999999999999999999999999999999aaaaaaaaaaaaaaaaa776666766699999999999999999999999999
        aaaaaaaaaaaa9999999999999995bb11111777aaa111bb59999995ffff33333333333ffffff599999999999999999999999999999999aaaaaaaaaaaaaaaaaa6667669999999999999999999999999999
        aaaaaaaaaaaa9999999555999995bb111555111aa511bb59999995ff33333333333333fffff599999999999999999999999999999999a55aaaaaaa55aaaaaaa776699999559999999999999999999999
        aaaaaaaaaaaa9999995fff599995bb11555511115551bb5999995fff333333333333333ffff599999999999999999999999999999995fff5aaaaa5dd5555555555555555dd5999999999999999999999
        aaaaaaaaaaa9999995ffff599995bb15551111111111bb5999995fff333333333333333ffff599999999999999999999999999999995ffff5aaa5dddddddddddddddddddddd599999999999999999999
        aaaaaaaaaaa9999995fff5355995bb11111111111111bb5999995fff333333333333333ffff5999999999999999999999999999995535fff5aaaa555dddddddddddddddd555999999999999999999999
        aaaaaaaaaaa9999995fff5355595bbbbbbbbbbbbbbbbbb5995595ffffff33333333333fffff5555999999999999999999999999955535fff5aaaaaa55555555555555555599999999999999999999999
        aaaaaaaaaa99999995fff5333555bbbbbbbbbbbbbbbbbb595ff55fffffffffffffffffffff55fff599999999999999999999999553335fff5aaaaaa5d5ddddd55ddddd5d599999999999999999999999
        aaaaaaaaaa9999995ffff533335555555555555555555555ffff5fffffffffffffffffffff5ffff599999999999999999999999533335ffff5aaaaa5d5ddddd55ddddd5d599999999999999999999999
        aaaaaaaaaa9999995ffff533335999995ddddddddd599995ffff5fffffffffffffffffffff5ffff599999999999999999999999533335ffff5aaaaa5d5ddddd55ddddd5d599999999999999999999999
        aaaaaaaaa99999995fff5333335999995ddddddddd599995ffff55555555555555555555555ffff5999999999999999999999995333335fff5aaaaa5d5ddddd55ddddd5d599999999999999999999999
        aaaaaaaaa99999995fff5333335999995ddddddddd599995ffff553333333333333333333355fff5999999999999999999999995333335fff5aaa..5d5ddddd55ddddd5d599999999999999999999999
        aaaaaaaa........5fff5333335.....55555555555....5ffff533333333333333333333335fff5.......................5333335fff5.....5d5ddddd55ddddd5d5.......................
        aaaaaaa.........5fff5333335555.................5fff5533333333333333333333335fff5....................5555333335fff5...5555555555555555555555.....................
        aaaaaaa.........5fff533555ffff5555.............5fff5553333333333333333333335ffff5...............5555ffff555335fff5..5dddddddddddddddddddddd5....................
        aaaaaa..........5fff555fffffffffff5............5fffff55555555555555555555555ffff5..............5fffffffffff555fff5..555555555555555555555555....................
        aaaa............5ffff5fffffffffffff5...........5ffffffffffffffffffffffffffffffff5.............5fffffffffffff5ffff5..............................................
        aa..............5ffff5fffffffffffff5...........5ffffffffffffffffffffffffffffffff5.............5fffffffffffff5ffff5..............................................
        aa..............5ffff5fffffffffffff5...........5ffffffffffffffffffffffffffffffff5.............5fffffffffffff5ffff5..............................................
        a...............5ffff5ffffffffffffff5..........5ffffffffffffffffffffffffffffffff5............5ffffffffffffff5ffff5..............................................
        ................5ffff5ffffffffffffff5..........5ffffffffffffffffffffffffffffffff5............5ffffffffffffff5ffff5..............................................
        ................5ffff5ffffffffffffff5.....ddddd555555555555555555555555555555555dddddd.......5ffffffffffffff5ffff5..............................................
        ................5ffff5ffffffffffffff5.ddddddddddddddddddddddddddddddddddddddddddddddddddd....5ffffffffffffff5ffff5..............................................
        ................5ffff5ffffffffffffff5dddddddddddddddddddddddddddddddddddddddddddddddddddd...d5ffffffffffffff5ffff5..............................................
        ................5ffff5ffffffffffffff5dddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ffffffffffffff5ffff5..............................................
        ................5ffff5ffffffffffffff5dddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ffffffffffffff5ffff5..............................................
        ................5ffff5ffffffffffffff5dddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ffffffffffffff5ffff5..............................................
        ................5ffff5ffffffffffffff5dddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ffffffffffffff5ffff5..............................................
        ................5ffff5ffffffffffffff5dddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ffffffffffffff5ffff5..............................................
        ................5ffff5ffffffffffffff5dddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ffffffffffffff5ffff5..............................................
        ................5ffff5ffffffffffffff5dddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ffffffffffffff5ffff5..............................................
        .................55555fffffffffff5555dddddddddddddddddddddddddddddddddddddddddddddddddddddddd5555fffffffffff55555...............................................
        .....................555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555555555555...................................................
        ................................dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd..............................................................
        ..................................ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.................................................................
        ..................................ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.................................................................
        ...................................ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd..................................................................
        ...................................ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd..................................................................
        ...................................ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd....................................................................
        .....................................dddddddddddddddddddddddddddddddddddddddddddddddddddddd.....................................................................
        ......................................dddddddddddddddddddddddddddddddddddddddddddddddddd........................................................................
        ........................................ddddddddddddddddddddddddddddddddddddddddddddddd.........................................................................
        ...........................................ddddddddddddddddddddddddddddddddddddddddddd..........................................................................
        .............................................ddddddddddddddddddddddddddddddddddddddd............................................................................
        ................................................dddddddddddddddddddddddddddddddd................................................................................
        .....................................................ddddddddddddddddddddd......................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    tiles.setCurrentTilemap(tilemap`level6`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    scene.setBackgroundImage(assets.image`HOT DOG STAND`)
    tiles.setCurrentTilemap(tilemap`level2`)
})
let projectile: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`slimer`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundImage(assets.image`apartment`)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite, 90, 0)
mySprite.ay = 500
info.setLife(3)
game.onUpdateInterval(1000, function () {
    myEnemy = sprites.createProjectileFromSprite(assets.image`beam`, myEnemy, 60, 60)
})
