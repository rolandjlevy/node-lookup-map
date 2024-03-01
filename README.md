# Node.js: duplicate check using a lookup-map

For a duplicate check on an array of 10,000+ objects rather than iterating over each object in the array it is more performant to convert the array into a lookup map and check against the object keys. The array of objects represents the entries from a db table. The sql in transform-into-json.sql queries the db table and generates the JSON for the lookup map.

