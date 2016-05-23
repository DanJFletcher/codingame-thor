import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.
# ---
# Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.

 # light_x: the X position of the light of power
 # light_y: the Y position of the light of power
 # initial_tx: Thor's starting X position
 # initial_ty: Thor's starting Y position
lightX, lightY, initialTX, initialTY = [int(i) for i in raw_input().split()]
thorX = initialTX
thorY = initialTY
directionX = ""
directionY = ""
# game loop
while 1:
    remaining_turns = int(input())  # The remaining amount of turns Thor can move. Do not remove this line.
    directionX = ""
    directionY = ""
    
    if (thorX > lightX):
        directionX = "W"
        thorX += 1
    elif (thorX < lightX):
        directionX = "E"
        thorX -= 1
    
    if (thorY > lightY):
        directionY = "N"
        thorY -= 1
    elif (thorY < lightY):
        directionY = "S"
        thorY += 1
    
    
    # Write an action using print
    # To debug: print("Debug messages...", file=sys.stderr)

    # A single line providing the move to be made: N NE E SE S SW W or NW
    print directionY + directionX;

