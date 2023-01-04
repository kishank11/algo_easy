def classPhotos(redShirtHeights, blueShirtHeights):
    # Write your code here.
    redShirtHeights.sort(reverse=True)
    blueShirtHeights.sort(reverse=True)
    shirtColorInFirstRow = "RED" if redShirtHeights[0] < blueShirtHeights[0] else "BLUE"
    for idx in range(len(redShirtHeights)):
        redShirtHeight = redShirtHeights[idx]
        blueShirtHeight = blueShirtHeights[idx]

        if shirtColorInFirstRow == "RED":
            if redShirtHeight >= blueShirtHeight:
                return False
        elif blueShirtHeight >= redShirtHeight:
            return False
    return True


print(classPhotos([4, 2], [3, 1]))
