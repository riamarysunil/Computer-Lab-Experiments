def WaterJugSolver(amt1, amt2, jug1, jug2, aim, path):
    if((amt1, amt2) in path):
        return
    path.append((amt1, amt2))
    if(amt1 == aim or amt2 == aim):
        print("Path:", path)
        return
    WaterJugSolver(0, amt2, jug1, jug2, aim, path)
    WaterJugSolver(amt1, 0, jug1, jug2, aim, path)
    WaterJugSolver(jug1, amt2, jug1, jug2, aim, path)
    WaterJugSolver(amt1, jug2, jug1, jug2, aim, path)
    WaterJugSolver(min(amt1 + amt2, jug1), max(0, amt1 + amt2 - jug1), jug1, jug2, aim, path)
    WaterJugSolver(max(0, amt1 + amt2 - jug2), min(amt1 + amt2, jug2), jug1, jug2, aim, path)
jug1 = int(input("Enter the capacity of Jug 1: "))
jug2 = int(input("Enter the capacity of Jug 2: "))
aim = int(input("Enter the amount of water to be present in any one jug: "))
WaterJugSolver(0, 0, jug1, jug2, aim, [])
