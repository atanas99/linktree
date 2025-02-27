ALTER TABLE users
    ADD COLUMN name VARCHAR(255),
    ADD COLUMN surname VARCHAR(255),
    ADD COLUMN content BYTEA;

ALTER TABLE users
    RENAME COLUMN username TO email;