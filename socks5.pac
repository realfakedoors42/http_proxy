function FindProxyForURL(url, host) {

  if (isInNet(host, "10.0.0.0", "255.0.0.0")) {
    return "DIRECT";
  }

  return "SOCKS5 dfk4vR3bPu4zSZN7HxNZeSd7:Kierkagaard1!@us-atl.pvdata.host:1080; " +  
         "SOCKS5 dfk4vR3bPu4zSZN7HxNZeSd7:Kierkagaard1!@us-buf.pvdata.host:1080; " +
         "SOCKS5 dfk4vR3bPu4zSZN7HxNZeSd7:Kierkagaard1!@us-chi.pvdata.host:1080; " +
         "SOCKS5 dfk4vR3bPu4zSZN7HxNZeSd7:Kierkagaard1!@us-dal.pvdata.host:1080; " +
         "SOCKS5 dfk4vR3bPu4zSZN7HxNZeSd7:Kierkagaard1!@us-den.pvdata.host:1080; " +
         "SOCKS5 dfk4vR3bPu4zSZN7HxNZeSd7:Kierkagaard1!@us-las.pvdata.host:1080; " +
         "SOCKS5 dfk4vR3bPu4zSZN7HxNZeSd7:Kierkagaard1!@us-los.pvdata.host:1080; " +
         "SOCKS5 dfk4vR3bPu4zSZN7HxNZeSd7:Kierkagaard1!@us-mia.pvdata.host:1080; " +
         "SOCKS5 dfk4vR3bPu4zSZN7HxNZeSd7:Kierkagaard1!@us-jer.pvdata.host:1080; " +
         "SOCKS5 dfk4vR3bPu4zSZN7HxNZeSd7:Kierkagaard1!@us-nyc.pvdata.host:1080; " +
         "SOCKS5 dfk4vR3bPu4zSZN7HxNZeSd7:Kierkagaard1!@us-pho.pvdata.host:1080; " +
         "SOCKS5 dfk4vR3bPu4zSZN7HxNZeSd7:Kierkagaard1!@us-sea.pvdata.host:1080";

}
