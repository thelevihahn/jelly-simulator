namespace SpriteKind {
    export const Jelly = SpriteKind.create()
}
function Jellinate (myImage: Image) {
    newJellyX = 80
    newJellyY = 60
    newJellyBeing = []
    for (let indexY = 0; indexY <= 16; indexY++) {
        for (let indexX = 0; indexX <= 16; indexX++) {
            if (myImage.getPixel(indexX, indexY) != 0) {
                picture = image.create(1, 1)
                picture.fillRect(0, 0, 1, 1, myImage.getPixel(indexX, indexY))
                newJelly = sprites.create(picture, SpriteKind.Jelly)
                newJelly.setPosition(indexX + newJellyX, indexY + newJellyY)
                newJellyBeing.push(newJelly)
            }
        }
    }
    return newJellyBeing
}
sprites.onCreated(SpriteKind.Jelly, function (sprite) {
    sprite.setVelocity(0, 0)
    sprite.setBounceOnWall(true)
})
function SetJellyBeingAcceleration (JellyBeing: Sprite[], AX: number, AY: number) {
    for (let value1 of JellyBeing) {
        value1.ax = AX
        value1.ay = AY
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value1 of sprites.allOfKind(SpriteKind.Jelly)) {
        value1.setVelocity(randint(-50, 50), randint(-50, 0))
    }
})
let picture: Image = null
let newJellyBeing: Sprite[] = []
let newJellyY = 0
let newJellyX = 0
let newJelly: Sprite = null
scene.setBackgroundColor(9)
let JellyMan = Jellinate(assets.image`myImage`)
let environment: Sprite[] = []
for (let indexX = 0; indexX <= 160; indexX++) {
    newJelly = sprites.create(img`
        2 
        `, SpriteKind.Jelly)
    newJelly.setPosition(indexX, 90)
    environment.push(newJelly)
}
game.onUpdate(function () {
    if (controller.up.isPressed()) {
        SetJellyBeingAcceleration(JellyMan, 0, -25)
    } else if (controller.down.isPressed()) {
        SetJellyBeingAcceleration(JellyMan, 0, 25)
    } else if (controller.right.isPressed()) {
        SetJellyBeingAcceleration(JellyMan, 25, 0)
    } else if (controller.left.isPressed()) {
        SetJellyBeingAcceleration(JellyMan, -25, 0)
    } else {
        SetJellyBeingAcceleration(JellyMan, 0, 0)
    }
})
