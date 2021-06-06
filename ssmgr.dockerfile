FROM node:13-alpine

RUN apk add --no-cache tzdata
ENV TZ Asia/Shanghai
RUN npm -g i shadowsocks-manager@latest --unsafe-perm

COPY clash.js /usr/local/lib/node_modules/shadowsocks-manager/plugins/webgui/server/clash.js

ENTRYPOINT [ "/usr/local/bin/ssmgr" ]
CMD [ "-c", "/root/.ssmgr/s.yml" ]
