import os, nltk

from urllib import request

def setup_ntlk():
  nltk.download('punkt')

  print('NLTK PUNKT setup finished')

def setup_datalake():
  ESSAY_PATH = 'core/datalake/essay/raw'
  ESSAY_LINK = 'https://zenodo.org/record/7641696/files/essays.xlsx?download=1'

  os.makedirs(ESSAY_PATH, exist_ok=True)

  ESSAY_FILE = f"{ESSAY_PATH}/essays.xlsx"

  if os.path.isfile(ESSAY_FILE) == False:
    request.urlretrieve(ESSAY_LINK, ESSAY_FILE)

  SHORT_ANSWER_PATH = 'core/datalake/short_answer/raw'
  SHORT_ANSWER_LINK = 'https://zenodo.org/record/7641696/files/short_answers.xlsx?download=1'

  os.makedirs(SHORT_ANSWER_PATH, exist_ok=True)

  SHORT_ANSWER_FILE = f"{SHORT_ANSWER_PATH}/short_answers.xlsx"

  if os.path.isfile(SHORT_ANSWER_FILE) == False:
    request.urlretrieve(SHORT_ANSWER_LINK, SHORT_ANSWER_FILE)

  print('Datalake setup finished')

if __name__ == '__main__':
  setup_ntlk()
  setup_datalake()
