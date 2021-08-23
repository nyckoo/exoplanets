from PIL import Image

def get_concat_h_multi_resize(im_list, resample=Image.BICUBIC):
    min_height = min(im.height for im in im_list)
    im_list_resize = [im.resize((int(im.width * min_height / im.height), min_height),resample=resample)
                      for im in im_list]
    total_width = sum(im.width for im in im_list_resize)
    dst = Image.new('RGB', (total_width, min_height))
    pos_x = 0
    for im in im_list_resize:
        dst.paste(im, (pos_x, 0))
        pos_x += im.width
    return dst

def createColorsImage():
    with open("rgb-values.txt") as f:
        linesTab = f.readlines()
        imgTab = []
        for x in linesTab:
            img = Image.new(mode = "RGB", size=(3,100), color=eval(x[:-2]))
            imgTab.append(img)
    return imgTab

get_concat_h_multi_resize(createColorsImage()).save("test.jpg")