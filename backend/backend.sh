python -m venv venv

. venv/bin/activate

pip install -U pip

uvicorn api.api:app --host 0.0.0.0 --reload
