FROM golang:alpine AS builder
WORKDIR /
COPY ./ ./trojan-go
WORKDIR /trojan-go
RUN go build -tags "server auth_redis" -ldflags "-s -w" -o ./trojan

FROM alpine:latest
WORKDIR /root
COPY --from=builder /trojan-go/trojan /root/

ENTRYPOINT ["./trojan", "-config"]
CMD ["config.json"]