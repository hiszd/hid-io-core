initSidebarItems({"constant":[["COPY_FROM_PARENT","`xcb::COPY_FROM_PARENT` can be used for many `xcb::create_window` parameters"],["CURRENT_TIME","`xcb::CURRENT_TIME` can be used in most requests that take an `xcb::Timestamp`"],["NONE","`xcb::NONE` is the universal null resource or null atom parameter value for many core X requests"],["NO_SYMBOL","`xcb::NO_SYMBOL` fills in unused entries in `xcb::Keysym` tables"],["X_PROTOCOL","Current protocol version"],["X_PROTOCOL_REVISION","Current minor version"],["X_TCP_PORT","X_TCP_PORT + display number = server port for TCP transport"]],"enum":[["ConnError","Error type that is returned by `Connection::has_error`"]],"fn":[["cast_error","Casts the generic error to the right error. Assumes that the given error is really the correct type."],["cast_event","Casts the generic event to the right event. Assumes that the given event is really the correct type."],["pack_bitfield","pack bitfields tuples into vector usable for FFI requests"]],"struct":[["Connection","xcb::Connection handles communication with the X server. It wraps an `xcb_connection_t` object and will call `xcb_disconnect` when the `Connection` goes out of scope"],["Cookie","wraps a cookie as returned by a request function. Instantiations of `Cookie` that are not `VoidCookie` should provide a `get_reply` method to return a `Reply`"],["Error","`Error` wraps a pointer to `xcb_*_error_t` this pointer will be freed when the `Error` goes out of scope"],["Event","`Event` wraps a pointer to `xcb_*_event_t` this pointer will be freed when the `Event` goes out of scope"],["QueryExtensionData",""],["Reply","Wraps a pointer to a `xcb_*_reply_t` the pointer is freed when the `Reply` goes out of scope"],["StructPtr","`StructPtr` is a wrapper for pointer to struct owned by XCB that must not be freed it is instead bound to the lifetime of its parent that it borrows immutably"]],"trait":[["Zero",""]],"type":[["AuthInfo",""],["ConnResult",""],["Extension","Opaque type used as key for `Connection::get_extension_data`"],["GenericError",""],["GenericEvent",""],["GenericReply",""],["VoidCookie",""]]});