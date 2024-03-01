# Node.js: duplicate check using a lookup-map

This is for doing a duplicate check on an array of 10,000+ objects which comes from a db table. Rather than iterating over each object in the array it is more performant to convert the array into a lookup map and just check against the object keys.
