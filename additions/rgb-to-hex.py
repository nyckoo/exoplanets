import json
import os

path = os.getcwd() + "\\kelvin-to-rgb.json"

def convertionModule(file):
    with open(file) as f:
        data = '"{}"'.format(json.load(f))
        strDict = json.loads(data)
        justDict = eval(strDict)
    rgbFile = open("rgb-values.txt","w")
    for val in justDict.values():
        rgbFile.write(str(tuple(val))+",\n") # RGB format
        #sngLine = str('"#%02x%02x%02x",' % (val[0],val[1],val[2])) # HEX format

convertionModule(path)