FROM alpine:latest AS builder
WORKDIR /
RUN apk update \
 && apk add ca-certificates wget \
 && update-ca-certificates \
 && mkdir releases
RUN wget -O out.tar.xz https://github.com/shadowsocks/shadowsocks-rust/releases/download/v1.8.10/shadowsocks-v1.8.10-stable.x86_64-unknown-linux-musl.tar.xz
RUN tar -xf out.tar.xz -C /releases

FROM alpine:latest
WORKDIR /root
COPY --from=builder /releases /usr/local/bin/
