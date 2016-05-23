/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor does not follow your orders.
 **/

var inputs = readline().split(' ');
var LX = parseInt(inputs[0]); // the X position of the light of power
var LY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position
var posX = initialTX;
var posY = initialTY;

// game loop
while (true) {
    var E = parseInt(readline()); // The level of Thor's remaining energy, representing the number of moves he can still make.

    // Write an action using print()
    
    // if thor is NorthWest - move SouthEast
    if (posY < LY && posX < LX) {
        print('SE');
        
        posY += 1;
        posX += 1;
        printErr('posY: ' + posY + '\n' + 'posX: ' + posX);
    }
    
    // if thor is NorthEast of flag - move SouthWest
    if (posY < LY && posX > LX) {
        print('SW');
        posX -= 1;
        posY +=1;
        printErr('posY: ' + posY + '\n' + 'posX: ' + posX);
    }
    
    // if thor is SouthWest - move NorthEast
    if (posY > LY && posX < LX) {
        print('NE');
        posX += 1;
        posY -= 1;
        printErr('posY: ' + posY + '\n' + 'posX: ' + posX);
    }
    
    //if thor is SouthEast - move NorthWest
    if (posY > LY && posX > LX) {
        posX -= 1;
        posY -= 1;
        printErr('posY: ' + posY + '\n' + 'posX: ' + posX);
    }
    
    // if thor is west of flag move east
    if (posY == LY && posX < LX) {
        print('E');
        posX += 1;
    }
    
    // if thor is south - move North
    if (posY > LY && posX == LX) {
        print('N');
        posY -= 1;
        printErr('posY: ' + posY + '\n' + 'posX: ' + posX);
    }
    
    // if thor is East of flag - move West
    if (posY == LY && posX > LX) {
        print('W');
        posX -= 1;
        printErr('posY: ' + posY + '\n' + 'posX: ' + posX);
    }
    
    // if thor is North - move South
    if (posY < LY && posX == LX) {
        print('S');
        posY += 1;
        printErr('posY: ' + posY + '\n' + 'posX: ' + posX);
    }

}