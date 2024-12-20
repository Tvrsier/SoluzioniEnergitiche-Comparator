# Dockerfile for FastAPI Backend

from python:3.12-slim

WORKDIR /app

copy requirements.txt ./
run pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
