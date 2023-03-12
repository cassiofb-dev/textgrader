python -m venv venv

. venv/bin/activate

pip install -U pip

pip install -r requirements.txt

python requirements.py

uvicorn api.api:app --host 0.0.0.0 --reload
