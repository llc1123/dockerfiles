FROM golang:alpine AS builder
WORKDIR /
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN git clone --depth=1 --branch v0.4.8 https://github.com/p4gefau1t/trojan-go.git
WORKDIR /trojan-go
RUN go build -tags "server auth_redis" -ldflags "-s -w" -o ./trojan

FROM alpine:latest
WORKDIR /root
COPY --from=builder /trojan-go/trojan /root/

ENTRYPOINT ["./trojan", "-config"]
CMD ["config.json"]
