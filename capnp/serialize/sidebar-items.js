initSidebarItems({"fn":[["compute_serialized_size_in_words","Returns the number of words required to serialize the message."],["read_message","Reads a serialized message from a stream with the provided options."],["read_message_from_flat_slice","Reads a serialized message (including a segment table) from a flat slice of bytes, without copying. The slice is allowed to extend beyond the end of the message. On success, updates `slice` to point to the remaining bytes beyond the end of the message."],["try_read_message","Like read_message(), but returns None instead of an error if there are zero bytes left in `read`. This is useful for reading a message stream of unknown length – you call this function until it returns None."],["write_message","Writes the provided message to `write`."],["write_message_segments","Like `write_message()`, but takes a `ReaderSegments`, allowing it to be used on `message::Reader` objects (via `into_segments()`)."],["write_message_segments_to_words","Like `write_message_to_words()`, but takes a `ReaderSegments`, allowing it to be used on `message::Reader` objects (via `into_segments()`)."],["write_message_to_words","Constructs a flat vector containing the entire message, including a segment header."]],"struct":[["OwnedSegments","Owned memory containing a message’s segments sequentialized in a single contiguous buffer. The segments are guaranteed to be 8-byte aligned."],["SegmentLengthsBuilder","Helper object for constructing an `OwnedSegments` or a `SliceSegments`."],["SliceSegments","Segments read from a single flat slice of words."]]});