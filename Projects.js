export const projectsStorage =[`import pyautogui 
import keyboard

while True:
    if keyboard.is_pressed("shift"):
        x, y = pyautogui.position()
        print(x, y)
        quit()

`]