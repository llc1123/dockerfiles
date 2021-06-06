module.exports = {
  "proxies": [],
  "proxy-groups": [
    {
      "name": "🔰国外流量",
      "type": "select",
      "proxies": [
        "placeholder",
        "🚀直接连接"
      ]
    },
    {
      "name": "⚓️其他流量",
      "type": "select",
      "proxies": [
        "🔰国外流量",
        "🚀直接连接"
      ]
    },
    {
      "name": "✈️Telegram",
      "type": "select",
      "proxies": [
        "🔰国外流量",
        "placeholder"
      ]
    },
    {
      "name": "🍎苹果服务",
      "type": "select",
      "proxies": [
        "🔰国外流量",
        "🚀直接连接"
      ]
    },
    {
      "name": "🚀直接连接",
      "type": "select",
      "proxies": [
        "DIRECT"
      ]
    }
  ],
  "rule-providers": {
    "reject": {
      "type": "http",
      "behavior": "domain",
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
      "path": "./ruleset/reject.yaml",
      "interval": 86400
    },
    "icloud": {
      "type": "http",
      "behavior": "domain",
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
      "path": "./ruleset/icloud.yaml",
      "interval": 86400
    },
    "apple": {
      "type": "http",
      "behavior": "domain",
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
      "path": "./ruleset/apple.yaml",
      "interval": 86400
    },
    "google": {
      "type": "http",
      "behavior": "domain",
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
      "path": "./ruleset/google.yaml",
      "interval": 86400
    },
    "proxy": {
      "type": "http",
      "behavior": "domain",
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
      "path": "./ruleset/proxy.yaml",
      "interval": 86400
    },
    "direct": {
      "type": "http",
      "behavior": "domain",
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
      "path": "./ruleset/direct.yaml",
      "interval": 86400
    },
    "private": {
      "type": "http",
      "behavior": "domain",
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
      "path": "./ruleset/private.yaml",
      "interval": 86400
    },
    "telegramcidr": {
      "type": "http",
      "behavior": "ipcidr",
      "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
      "path": "./ruleset/telegramcidr.yaml",
      "interval": 86400
    }
  },
  "rules": [
    "PROCESS-NAME,v2ray,DIRECT",
    "PROCESS-NAME,Surge%203,DIRECT",
    "PROCESS-NAME,ss-local,DIRECT",
    "PROCESS-NAME,privoxy,DIRECT",
    "PROCESS-NAME,trojan,DIRECT",
    "PROCESS-NAME,trojan-go,DIRECT",
    "PROCESS-NAME,naive,DIRECT",
    "PROCESS-NAME,Thunder,DIRECT",
    "PROCESS-NAME,DownloadService,DIRECT",
    "PROCESS-NAME,qBittorrent,DIRECT",
    "PROCESS-NAME,Transmission,DIRECT",
    "PROCESS-NAME,fdm,DIRECT",
    "PROCESS-NAME,aria2c,DIRECT",
    "PROCESS-NAME,Folx,DIRECT",
    "PROCESS-NAME,NetTransport,DIRECT",
    "PROCESS-NAME,uTorrent,DIRECT",
    "PROCESS-NAME,WebTorrent,DIRECT",
    "RULE-SET,private,DIRECT",
    "RULE-SET,reject,REJECT",
    "RULE-SET,icloud,🍎苹果服务",
    "RULE-SET,apple,🍎苹果服务",
    "RULE-SET,google,🔰国外流量",
    "RULE-SET,proxy,🔰国外流量",
    "RULE-SET,direct,DIRECT",
    "RULE-SET,telegramcidr,✈️Telegram",
    "GEOIP,,DIRECT",
    "GEOIP,CN,DIRECT",
    "MATCH,⚓️其他流量"
  ]
}