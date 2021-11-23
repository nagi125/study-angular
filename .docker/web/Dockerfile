FROM node:16-alpine

RUN apk update && \
    apk add git make g++ && \
    apk add --no-cache curl && \
    curl -o- -L https://yarnpkg.com/install.sh | sh && \
    yarn global add @angular-devkit/build-angular @angular/cli

ENV TZ Asia/Tokyo
ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH

WORKDIR /app

CMD ["/bin/ash"]
