---
layout: post
title:  "Is there any dockerized Rendertron for better SEO for JavaScript web apps?"
date:   2019-12-03
categories: docker
author: yuci_gou
excerpt_separator: <!--more-->
---

Many frontend frameworks rely on JavaScript to show content. This can mean Google might take some time to index your content or update the indexed content.

In addition to server side rendering techniques such Nuxt.js, Next.js, etc., another workaround option is to implement dynamic rendering, such as [Rendertron][1].

Rendertron is designed to enable your Progressive Web App (PWA) to serve the correct content to any bot that doesn't render or execute JavaScript. Rendertron runs as a standalone HTTP server. Rendertron renders requested pages using [Headless Chrome][2], auto-detecting when your PWA has completed loading and serializes the response back to the original request.

[![enter image description here][3]][3]
(Image from https://developers.google.com/search/docs/guides/dynamic-rendering)

It would be nice if we have Rendertron running as a general dockerized service, serving static HTML pages to crawlers, social media, and so on.

Any dockerized Rendertron?


  [1]: https://github.com/GoogleChrome/rendertron
  [2]: https://developers.google.com/web/tools/puppeteer/articles/ssr
  [3]: https://i.stack.imgur.com/QtHym.jpg

<!--more-->

Here is [a forked repo of Rendertron][1], with only Dockerfile, and docker-compose.yaml (optional) added. 

The purpose of this forked repo is to dockerize Rendertron, so that it can be deployed as a Docker container.

The Dockerfile looks like this:

**Dockerfile**
```
FROM ubuntu:18.10

RUN apt-get update
RUN apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs

RUN apt-get install -y build-essential
RUN apt-get install -y gconf-service libasound2 libatk1.0-0 \
    libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
    libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 \
    libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 \
    libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 \
    libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 \
    libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 \
    lsb-release xdg-utils wget

RUN groupadd -g 999 worker && \
    useradd -r -m -u 999 -g worker worker
USER worker

RUN mkdir -p /home/worker/rendertron
WORKDIR /home/worker/rendertron

COPY . ./
RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
```
You can build the Docker image: `docker build .`

Or you can try using docker-compose to build and run it:
```
docker-compose up -d
```

**docker-compose.yaml**

```
version: '3'

services:
  app:
    build:
      context: .
      dockerfile: ./Dockerfile
    ports:
      - "80:3000"
```

Now you can test it in your browser, with JavaScript disabled:

[![enter image description here][2]][2]


  [1]: https://github.com/yucigou/rendertron
  [2]: https://i.stack.imgur.com/7g9HR.png
