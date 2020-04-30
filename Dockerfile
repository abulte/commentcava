FROM nikolaik/python-nodejs:latest
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code/backend
COPY backend/requirements.txt /code/backend/
RUN pip install -r requirements.txt
WORKDIR /code/frontend
COPY frontend/package.json /code/frontend/
COPY frontend/yarn.lock /code/frontend/
RUN yarn install
COPY . /code/
RUN yarn build
