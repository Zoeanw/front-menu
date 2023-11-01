function start () {
    Start_spil = controller.A.isPressed()
}
let Start_spil = false
effects.starField.startScreenEffect()
let mySprite2 = sprites.create(img`
    ....................
    ..111111111111111...
    .11fffffffffffff11..
    .11fffffffffffff11..
    .11fffffffff888f11..
    .11fffffffffffff11..
    .11fffffffffffff11..
    ..111111111111111...
    ....11111111111.....
    .......11111........
    ...1111111111111....
    .111111111111111111.
    ....11111111111.....
    ....11111111111.....
    ....11111111111.....
    ....11111111111.....
    ....11111111111.....
    ......11...11.......
    ......11...11.......
    ...11111...11111....
    `, SpriteKind.Player)
scene.setBackgroundImage(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `)
mySprite2.setPosition(74, 102)
story.spriteSayText(mySprite2, "Explore & Find the objects ")
start()
