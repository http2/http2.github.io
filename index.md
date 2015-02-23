---
layout: front
title: HTTP/2
---
	
_See also [HTTP/2 JP](https://github.com/http2jp), maintained by the Japanese HTTP/2 community._

## What is HTTP/2?

HTTP/2 is a replacement for how HTTP is expressed "on the wire." It is
**not** a ground-up rewrite of the protocol; HTTP methods, status codes and
semantics are the same, and it should be possible to use the same APIs as
HTTP/1.x (possibly with some small additions) to represent the protocol.

The focus of the protocol is on performance; specifically, end-user perceived
latency, network and server resource usage. One major goal is to allow the use
of a single connection from browsers to a Web site.

The basis of the work was
[SPDY](http://tools.ietf.org/html/draft-mbelshe-httpbis-spdy-00), but HTTP/2
has evolved to take the community's input into account, incorporating several
improvements in the process.

See [our charter](http://datatracker.ietf.org/wg/httpbis/charter/) for more
details of the scope of the work, as well as our [Frequently Asked
Questions](/faq/).

## Status

HTTP/2 is nearly done standardization; it has been approved by the
[IESG](http://www.ietf.org/iesg/), and is in the [RFC
Editor's publication queue](http://www.rfc-editor.org/queue2.html#draft-ietf-httpbis-http2).


## Specifications

HTTP/2 is comprised of two specifications:

* Hypertext Transfer Protocol version 2 - [current IETF draft](http://tools.ietf.org/html/draft-ietf-httpbis-http2/), [editors' copy](http://http2.github.com/http2-spec/)
* HPACK - Header Compression for HTTP/2 - [current IETF draft](http://tools.ietf.org/html/draft-ietf-httpbis-header-compression/), [editors' copy](http://http2.github.com/http2-spec/compression.html)
 
 
## Implementations

We track [known
implementations](https://github.com/http2/http2-spec/wiki/Implementations) of
HTTP/2 on our wiki. 
