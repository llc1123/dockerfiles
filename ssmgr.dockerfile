FROM node:13-alpine

RUN npm -g i shadowsocks-manager@latest --unsafe-perm

ENTRYPOINT [ "ssmgr", '-c' ]
CMD [ "/root/.ssmgr/s.yml" ]