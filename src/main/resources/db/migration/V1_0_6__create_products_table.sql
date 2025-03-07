CREATE TABLE products
(
    id      BIGINT PRIMARY KEY,
    url     VARCHAR(255),
    name    VARCHAR(255),
    user_id BIGINT,
    content BYTEA,
    category VARCHAR(255)
);
CREATE SEQUENCE PRODUCT_ID_SEQ START WITH 100001;
ALTER TABLE products
    ALTER COLUMN ID SET DEFAULT nextval('PRODUCT_ID_SEQ');

ALTER TABLE products
    ADD CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES users (id);