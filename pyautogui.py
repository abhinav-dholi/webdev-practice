import pyautogui, time

time.sleep(5)
file = open("send.txt",'r')

for word in file:
    pyautogui.typewrite(word)
    pyautogui.pre("enter")