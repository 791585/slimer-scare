let mySprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(assets.image`slimer`, SpriteKind.Player)
    scene.setBackgroundImage(assets.image`apartment`)
})
