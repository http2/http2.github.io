---
layout: front
title: HTTP/2
---

This is the home page for the effort to define HTTP/2, a major revision of
the Web's protocol. It is maintained by the [IETF HTTP Working
Group](https://httpwg.github.io/).

_See also [HTTP/2 JP](https://github.com/http2jp), maintained by the Japanese HTTP/2 community._

## What is HTTP/2?

HTTP/2 is a replacement for how HTTP is expressed "on the wire." It is
**not** a ground-up rewrite of the protocol; HTTP methods, status codes and
semantics will be the same, and it should be possible to use the same APIs as
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

## Specifications

HTTP/2 is comprised of two specifications:

* Hypertext Transfer Protocol version 2 - [current IETF draft](http://tools.ietf.org/html/draft-ietf-httpbis-http2/), [editors' copy](http://http2.github.com/http2-spec/)
* HPACK - Header Compression for HTTP/2 - [current IETF draft](http://tools.ietf.org/html/draft-ietf-httpbis-header-compression/), [editors' copy](http://http2.github.com/http2-spec/compression.html)

These documents are available in our [specifications repository](https://github.com/http2/http2-spec).
 
You can track changes to the documents using the [commit log](https://github.com/http2/http2-spec/commits/master), also available in
[Atom](https://github.com/http2/http2-spec/commits/master.atom) and on
[Twitter](http://twitter.com/httpbis).

## Implementations

We track [known
implementations](https://github.com/http2/http2-spec/wiki/Implementations) of
HTTP/2. Right now the protocol is still changing quickly, so we do not expect
every draft we publish to be implemented; instead we nominate **implementation
drafts** for interop work.

Our implementation drafts have been:

1. [draft-04](http://tools.ietf.org/html/draft-ietf-httpbis-http2-04) - references [HPACK-00](http://tools.ietf.org/html/draft-ietf-httpbis-header-compression-00) (interop in [Hamburg](https://github.com/http2/wg_materials/tree/master/interim-13-08))
2. [draft-06](http://tools.ietf.org/html/draft-ietf-httpbis-http2-06) - references [HPACK-02](http://tools.ietf.org/html/draft-ietf-httpbis-header-compression-02) (interop in [Seattle](https://github.com/http2/wg_materials/tree/master/interim-13-10))
3. [draft-09](http://tools.ietf.org/html/draft-ietf-httpbis-http2-09) - references [HPACK-05](http://tools.ietf.org/html/draft-ietf-httpbis-header-compression-05) (interop was in [Zurich](https://github.com/http2/wg_materials/tree/master/interim-14-01))
4. [draft-12](http://tools.ietf.org/html/draft-ietf-httpbis-http2-12) - references [HPACK-07](http://tools.ietf.org/html/draft-ietf-httpbis-header-compression-07) (interop in [New York](https://github.com/http2/wg_materials/tree/master/interim-14-06))
5. [draft-13](http://tools.ietf.org/html/draft-ietf-httpbis-http2-13) - references [HPACK-08](http://tools.ietf.org/html/draft-ietf-httpbis-header-compression-08)
6. [draft-14](http://tools.ietf.org/html/draft-ietf-httpbis-http2-14) - references [HPACK-09](http://tools.ietf.org/html/draft-ietf-httpbis-header-compression-09) (**current**)





