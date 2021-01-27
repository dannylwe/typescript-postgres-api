CREATE DATABASE typescript;

\c typescript;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email) VALUES ('joe', 'joe@email.com'), ('jane', 'jane@email.com');