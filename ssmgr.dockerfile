FROM node:13-alpine

RUN apk add --no-cache tzdata
ENV TZ America/Los_Angeles
RUN npm -g i shadowsocks-manager@latest --unsafe-perm

ENTRYPOINT [ "/usr/local/bin/ssmgr" ]
CMD [ "-c", "/root/.ssmgr/s.yml" ]
