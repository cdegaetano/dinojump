controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ..............dddd......
    .............ddddd....d.
    .............ddd2dd..ddd
    ............ddd22dddddfd
    .........fffdddddddddddd
    .........ffddddddddddd..
    .......ff..ddddddddddddd
    dd.....fff.ddddddddddd..
    dd.....fff.dddddffff....
    ddd...fffdddddddddd.....
    .dd...fddddddddddd......
    .ddddddddddddddddd......
    ..ddddddddddddddd.......
    ...dddddddddddddd.......
    ...ddddddddddddd........
    .....dddddd..ddd........
    ......ddd....ddd........
    ......ddd....ddd........
    ......ddd.....dd........
    .......dd.....dd........
    .......dd.....dd........
    `, SpriteKind.Player)
mySprite.ay = 400
controller.moveSprite(mySprite)
