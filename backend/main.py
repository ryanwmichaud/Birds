from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

#app.mount("/audio", StaticFiles(directory="audio"),name="audio")
#print("ok")

app.mount("/audio", StaticFiles(directory="audio"), name="audio")

app.mount("/images", StaticFiles(directory="images"), name="images" )


@app.get("/") #called whenever receive a request to the URL "/" using a GET operation
async def root():
    return 23