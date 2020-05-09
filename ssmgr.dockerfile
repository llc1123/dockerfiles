FROM node:13-alpine

RUN npm -g i shadowsocks-manager@latest --unsafe-perm

ENTRYPOINT [ "/usr/local/bin/ssmgr" ]
CMD [ "-c", "/root/.ssmgr/s.yml" ]