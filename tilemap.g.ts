// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000010101010100000002020202020202020202020202020000020202020202020202020202020202000202020202020202020202020101010002020202020202010101020202020202000202000102020202020202020202020100020202020202020202020202020101010002020202020002020202020201010101000202020002020202020201010101010101000202020202020101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 2 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 2 . 
. . . . . . . 2 2 2 . . . . . . 
. . . . 2 . . . . . . . . . . . 
2 . . . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . 2 
2 2 2 . . . . . . . . . . . 2 2 
2 2 2 2 2 . . . . . . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile6,myTiles.tile7], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000101010100000000000000000000000001010000000001010000000000000000000000000000000101000000000000000000000000000000000000000105010100000000000000000000000101000000000000000000000301020101000000000100000000000101010101010000000001010000000000000000000000000000050101000000000000000000000000000104030101010101010401010101010102010101040101010101010301010102`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . 
2 2 . . . . 2 2 . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . . . . . . 2 2 2 2 
. . . . . . . . . . . 2 2 . . . 
. . . . . . . 2 2 2 2 2 . . . . 
2 . . . . . 2 2 2 2 2 2 . . . . 
2 2 . . . . . . . . . . . . . . 
2 2 2 . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile4,myTiles.tile8], TileScale.Sixteen);
            case "level":
            case "level3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101000000000000000000000000000101010101000000000000000000000000010101010000000000000000000000000000000000000001010000000000000000000000000001010100000000000000000000000001010101000000000000000000000101010000000000000000000000000101010100000000000000000001010000000000000000000000000001010100000000000000000000010100000000000000000000000001010101000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . 2 2 2 2 2 . . . . . 
. . . . . . . 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . 2 2 2 2 
. . . . . . . . . . 2 2 2 . . . 
. . . . . . . . . 2 2 2 2 . . . 
. . . . . . 2 2 . . . . . . . . 
. . . . . 2 2 2 . . . . . . . . 
. . 2 2 . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile7":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
