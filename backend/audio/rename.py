import os

for dir in os.listdir("."):
    print(dir)
    if(os.path.isdir(dir)):

        for i, file in enumerate(os.listdir(dir)):
            old = os.path.join(dir,file)
            new = os.path.join(dir, str(i)+".mp3")
            os.rename(old,new)
    

