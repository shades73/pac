function FindProxyForURL(url, host) {
  // Route all traffic through German proxies, fallback to direct connection
  return "PROXY 46.4.96.137:1080; PROXY 185.93.88.18:8080; DIRECT";
}