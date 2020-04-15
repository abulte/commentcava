FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code/backend
COPY backend/requirements.txt /code/backend/
RUN pip install -r requirements.txt
COPY . /code/
