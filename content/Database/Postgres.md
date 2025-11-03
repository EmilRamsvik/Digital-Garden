---
created: 2023-12-04T13:14
updated: 2025-09-11T08:53
tags:
  - article
  - data-engineering
  - database
  - database/-relational-database
  - database/sql
  - digital-garden
  - json
  - open-source
  - postgresql
  - sql
Finished: false
---
# Postgres

Open-source database. 
I prefer Postgres for my "only" SQL work as it is very powerful and can be amended a lot. Knowing databases is a super skill. 

I think Postgres is way above the rest as it is efficient, open-source and performant. It is a super nice skill to have and work on this. 




### JSON and JSONB in Postgres

PostgreSQL offers native support for JSON data types. This feature allows you to store, query, and manipulate JSON data directly in PostgreSQL.
- **JSON**: Stores data as text; parsing is done every time you fetch the data.
- **JSONB**: Stores data in a binary format; parsing is done during insert, making reads faster.

Inserting JSON Data
```sql
INSERT INTO my_table (id, json_data)
VALUES (1, '{"key": "value", "array": [1, 2, 3]}');
```
Querying JSON Data
```sql
SELECT json_data->>'key' FROM my_table WHERE id = 1;
```
This query will return `'value'`.

**Advanced Queries**
You can also perform complex queries on JSON data.
```sql
SELECT json_data->'array'->>1 FROM my_table WHERE id = 1;
```
This query will return `2` because it accesses the second element in the "array" field.
PostgreSQL provides a variety of JSON functions like `json_array_length`, `json_each`, and more.
```sql
SELECT json_array_length(json_data->'array') FROM my_table WHERE id = 1;
```
This query will return `3`, the length of the array.

You can create indexes on JSONB columns for faster query performance.
```sql
CREATE INDEX idx_json_data ON my_table USING gin (json_data);
```
This feature is particularly useful for applications that need to store and query JSON data efficiently, without having to rely on external data stores or serialization/deserialization of JSON data.

## Links
- [Postgres database lingo explained](https://avestura.dev/blog/explaining-the-postgres-meme)





# Links
- 

# Thoughts 
- Open source is probably the best way of approaching databases, makes it easier to migrate later. 



