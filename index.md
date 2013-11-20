---
layout: page
title: HTTP/2.0
---

This is the home page for the effort to define HTTP/2.0, a major revision of
the Web's protocol. It is maintained by the [IETF HTTPbis Working
Group](http://trac.tools.ietf.org/wg/httpbis/trac/wiki).

## What is HTTP/2.0?

HTTP/2.0 is a replacement for how HTTP is expressed "on the wire." It is
**not** a ground-up rewrite of the protocol; HTTP methods, status codes and
semantics will be the same, and it should be possible to use the same APIs as
HTTP/1.x (possibly with some small additions) to represent the protocol.

The focus of the protocol is on performance; specifically, end-user perceived
latency, network and server resource usage. One major goal is to allow the use
of a single connection from browsers to a Web site.

The basis of the work is
[SPDY](http://tools.ietf.org/html/draft-mbelshe-httpbis-spdy-00). However, we
will be collecting issues against this document, as well as confirming
consensus over individual portions.

See [our charter](http://datatracker.ietf.org/wg/httpbis/charter/) for more
details of the scope of the work.

## Specifications

Our deliverables include:

* Hypertext Transfer Protocol version 2.0 - [current IETF draft](http://tools.ietf.org/html/draft-ietf-httpbis-http2/), [editors' copy](http://http2.github.com/http2-spec/)
* HPACK - Header Compression for HTTP/2.0 - [current IETF draft](http://tools.ietf.org/html/draft-ietf-httpbis-header-compression/), [editors' copy](http://http2.github.com/http2-spec/compression.html)

Both documents are available in our [specifications repository](https://github.com/http2/http2-spec).
 
You can track changes to the documents using the [commit log](https://github.com/http2/http2-spec/commits/master), also available in
[Atom](https://github.com/http2/http2-spec/commits/master.atom) and on
[Twitter](http://twitter.com/httpbis).

## Implementations

We track [known
implementations](https://github.com/http2/http2-spec/wiki/Implementations) of
HTTP/2.0. Right now the protocol is still changing quickly, so we do not expect
every draft we publish to be implemented; instead we nominate **implementation
drafts** for interop work.

Our implementation drafts have been:

1. [draft-04](http://tools.ietf.org/html/draft-ietf-httpbis-http2-04) - references [HPACK-00](http://tools.ietf.org/html/draft-ietf-httpbis-header-compression-00)
2. [draft-06](http://tools.ietf.org/html/draft-ietf-httpbis-http2-06) - references [HPACK-02](http://tools.ietf.org/html/draft-ietf-httpbis-header-compression-02)
3. [draft-08](http://tools.ietf.org/html/draft-ietf-httpbis-http2-08) - references [HPACK-04](http://tools.ietf.org/html/draft-ietf-httpbis-header-compression-04)


## Participate

As with all IETF Working Groups, almost all discussion and decisions are made
on our [mailing list](http://lists.w3.org/Archives/Public/ietf-http-wg/).
Joining this list is "joining" the Working Group, and is the best way to
participate. If you're new to this, you may also want to read the [Tao of the IETF](http://www.ietf.org/tao.html).

ALL contributors and participants in the Working Group (whether on the mailing
list, in physical meetings or on Github) MUST read and understand the
[NOTE WELL](http://www.ietf.org/NOTEWELL.html) statement.

We also meet face-to-face at most [IETF
meetings](http://www.ietf.org/meeting/), and sometimes in between at "interim"
meetings. During those meetings, we use an XMPP (Jabber) channel at
xmpp://httpbis@jabber.ietf.org?join ([logs](http://jabber.ietf.org/logs/httpbis/
archives)) provided by the IETF.

Meeting records and details of upcoming meetings can be found in our [Working Group materials](https://github.com/http2/wg_materials) repository.


### Issues

Discussion is most productive when it focuses on identified issues. Our [issues list](https://github.com/http2/http2-spec/issues) is kept on Github. Please see
the [guidelines for contributing](https://github.com/http2/http2-spec/blob/master/README.md#contribu
ting) **before** raising an issue.

We have two basic types of issues; "design" and "editorial".

**Design issues** need to be discussed by the Working Group to reach consensus.
This generally happens on the mailing list when the issue is raised, but the
editors sometimes incorporate a proposed resolution to a design issue in a
draft, so that the WG can see it in-situ. Such tickets aren't fully closed
until the group confirms the proposal after it is published.

**Editorial issues** can be resolved by the editors without consultation with
the group, although sometimes an editor will poll the group for advice.

Additionally, some issues are marked as **liaison issues**. This means that we
don't expect to resolve these on our own, but might reference (or even require)
the results of work elsewhere.

