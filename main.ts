function initRoomsDoors () {
    listRoomDoors = [
    "GP",
    "PL",
    "PL",
    "GL",
    "G",
    "DP",
    "GPL",
    "L",
    "GDP",
    "GDL",
    "P",
    "DPL",
    "L",
    "GD",
    "GD",
    "GP",
    "PL",
    "PL",
    "DL",
    "GD",
    "GP",
    "L",
    "P",
    "PL",
    "DL"
    ]
}
function initStartAndWinRoom () {
    myWinRoom = 61
    myRoomNo = 11
}
function doCalculateNextRoomNo () {
    if (aktualnyKierunekGDPL == "G") {
        myRoomNo = myRoomNo + 10
    }
    if (aktualnyKierunekGDPL == "P") {
        myRoomNo = myRoomNo + 1
    }
    if (aktualnyKierunekGDPL == "D") {
        myRoomNo = myRoomNo + -10
    }
    if (aktualnyKierunekGDPL == "L") {
        myRoomNo = myRoomNo + -1
    }
}
function onWin () {
    basic.showIcon(IconNames.Heart)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
}
input.onButtonPressed(Button.A, function () {
    displayNavigationArrows()
})
function doCalculateNextRoomIndex () {
    myRoomListIndex = listRoomNo.indexOf(convertToText(myRoomNo))
    myRoomDoors = listRoomDoors[myRoomListIndex]
}
function showOnStart () {
    images.iconImage(IconNames.Ghost).showImage(0)
}
function displayNavigationArrows () {
    myRoomDoorsWithX = "X" + myRoomDoors
    if (aktualnyKierunek >= myRoomDoorsWithX.length) {
        aktualnyKierunek = 0
    }
    aktualnyKierunekGDPL = myRoomDoorsWithX.substr(aktualnyKierunek, 1)
    if (aktualnyKierunekGDPL == "G") {
        images.arrowImage(ArrowNames.North).showImage(0)
    } else if (aktualnyKierunekGDPL == "P") {
        images.arrowImage(ArrowNames.East).showImage(0)
    } else if (aktualnyKierunekGDPL == "D") {
        images.arrowImage(ArrowNames.South).showImage(0)
    } else if (aktualnyKierunekGDPL == "L") {
        images.arrowImage(ArrowNames.West).showImage(0)
    } else {
        images.createImage(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `).showImage(0)
    }
    aktualnyKierunek = aktualnyKierunek + 1
}
function resetNavigationArrows () {
    aktualnyKierunek = 0
    aktualnyKierunekGDPL = "X"
}
function resetAll () {
    initRoomsDoors()
    initRoomNo()
    resetNavigationArrows()
    initStartAndWinRoom()
    doCalculateNextRoomIndex()
    showOnStart()
}
function displayRoom () {
    images.createImage(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `).showImage(0)
    if (myRoomDoors.indexOf("G") > -1) {
        led.plotBrightness(2, 0, 0)
    }
    if (myRoomDoors.indexOf("D") > -1) {
        led.plotBrightness(2, 4, 0)
    }
    if (myRoomDoors.indexOf("P") > -1) {
        led.plotBrightness(4, 2, 0)
    }
    if (myRoomDoors.indexOf("L") > -1) {
        led.plotBrightness(0, 2, 0)
    }
}
function showNextRoom () {
    doCalculateNextRoomNo()
    if (myRoomNo == myWinRoom) {
        onWin()
    } else {
        if (aktualnyKierunekGDPL != "X") {
            doCalculateNextRoomIndex()
        }
        displayRoom()
        resetNavigationArrows()
    }
}
input.onButtonPressed(Button.B, function () {
    if (myRoomNo == myWinRoom) {
        resetAll()
    } else {
        showNextRoom()
    }
})
function initRoomNo () {
    listRoomNo = [
    "11",
    "12",
    "13",
    "14",
    "15",
    "21",
    "22",
    "23",
    "24",
    "25",
    "31",
    "32",
    "33",
    "34",
    "35",
    "41",
    "42",
    "43",
    "44",
    "45",
    "51",
    "52",
    "53",
    "54",
    "55"
    ]
}
let aktualnyKierunek = 0
let myRoomDoorsWithX = ""
let myRoomDoors = ""
let listRoomNo: string[] = []
let myRoomListIndex = 0
let aktualnyKierunekGDPL = ""
let myRoomNo = 0
let myWinRoom = 0
let listRoomDoors: string[] = []
resetAll()
