function FindProxyForURL(url, host) {
  // Route all traffic through German proxies, fallback to direct connection
  return " PROXY 57.129.81.201:8080; DIRECT";

}

