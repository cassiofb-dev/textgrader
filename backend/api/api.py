from fastapi import FastAPI
from fastapi.responses import ORJSONResponse

app = FastAPI(default_response_class=ORJSONResponse)

@app.get("/")
def home():
  response = {
    "message": "Text Grade API OK! For help go to /docs endpoint."
  }

  return response

@app.get("/text_grade/")
async def text_grade(essay: str) -> dict[str, int]:
  response = {
    "grade": 100
  }

  return response
