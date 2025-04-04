CREATE TABLE links
(
    id      BIGINT PRIMARY KEY,
    url     VARCHAR(255),
    name    VARCHAR(255),
    user_id BIGINT
);
CREATE SEQUENCE LINK_ID_SEQ START WITH 1001;
ALTER TABLE links
    ALTER COLUMN ID SET DEFAULT nextval('LINK_ID_SEQ');