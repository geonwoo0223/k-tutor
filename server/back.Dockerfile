# back.Dockerfile

FROM python:3.8.5

ENV PYTHONUNBUFFERED 1

RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/

RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt

ADD . /code/