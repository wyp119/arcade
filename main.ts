namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleInnerNorthEast, function (sprite, location) {
    game.over(true)
})
tiles.setTilemap(tiles.createTilemap(
            hex`10001000343536371f1f1f1f1f1f1f1f2d2526273c3d3e381f1f1f1f1f1f1f1f2c2124283b3f40391f48464646471f1f302322292f42413a1f441f1f1f441f1f2e3132331f441f1f1f4346471f441f1f1f44441f1f441f1f1f1f1f441f441f1f1f44441f1f434646464646451f441f48464b4b461f1f1f1f1f1f1f1f1f441f441f1f1f1f1f4846464646464646451f434646471f1f441f1f1f1f1f1f1f1f1f1f1f1f441f1f43464646471f4846471f484646451f1f1f1f1f1f441f441f441f441f1f1f1f1f48464646451f441f441f434646471f1f441f1f1f1f1f441f441f1f1f1f441f1f434646464646451f4346464646451f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f`,
            img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . 2 . . . . . 2 2 . . . . 
. . . . 2 . 2 2 2 . 2 2 . . . . 
2 . 2 2 2 . . . 2 . 2 2 2 . . 2 
2 . 2 2 2 2 2 . 2 . 2 2 2 . . 2 
2 . . . . . . . 2 . 2 . . . . . 
2 2 2 2 2 2 2 2 2 . 2 . 2 2 2 2 
2 . . . . . . . . . 2 . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . 2 . . . 2 . . . . 2 
2 2 2 2 2 . 2 . 2 . 2 . 2 2 2 2 
2 . . . . . 2 . 2 . 2 . . . . 2 
2 . 2 2 2 2 2 . 2 . 2 2 2 2 . 2 
2 . . . . . . . 2 . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundWest,sprites.builtin.oceanDepths9,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles6,sprites.builtin.forestTiles2,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles10,sprites.builtin.forestTiles29,sprites.builtin.forestTiles14,sprites.builtin.forestTiles15,sprites.builtin.forestTiles11,sprites.builtin.forestTiles7,sprites.builtin.forestTiles12,sprites.builtin.forestTiles20,sprites.builtin.oceanSand0,sprites.builtin.forestTiles27,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouth0,sprites.vehicle.roadTurn3,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn4,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn1,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection1,sprites.vehicle.roadIntersection4],
            TileScale.Sixteen
        ))
let mySprite = sprites.create(img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.greenInnerNorthWest)
game.showLongText("按A开始游戏", DialogLayout.Bottom)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
info.startCountdown(35)
