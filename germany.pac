function FindProxyForURL(url, host) {
  // Route all traffic through German proxies, fallback to direct connection
  return "PROXY 178.63.66.84:3128; PROXY 88.99.7.143:8080; DIRECT";

}
