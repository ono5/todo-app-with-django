FROM python:3.7-alpine
MAINTAINER Kanagawa Dev.

ENV PYTHONUNBUFFERED 1

RUN apk add --update --no-cache postgresql-client jpeg-dev
RUN apk add --update --no-cache --virtual .tmp-build-deps \
      gcc libc-dev linux-headers postgresql-dev musl-dev zlib zlib-dev

COPY ./requirements.txt /requirements.txt
RUN pip install --upgrade pip && pip install -r /requirements.txt
RUN apk del .tmp-build-deps

RUN addgroup -g 1000 app && \
    adduser -u 1000 -G app -D app

# 静的ファイル格納用フォルダを作成
RUN mkdir /public
RUN chown app:app /public
# chownの下で設定する(rootになってしまうため、userの書き換えができなくなる)
VOLUME /public

RUN mkdir /app
WORKDIR /app
COPY ./app/ /app

USER app
