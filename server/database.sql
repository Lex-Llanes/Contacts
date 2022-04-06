CREATE DATABASE contacts;

CREATE TABLE contactinfo(
    contact_id SERIAL PRIMARY KEY,
    last_name VARCHAR(255),
    first_name VARCHAR(255),
    email VARCHAR(255),
    phone_number INTEGER,
    notes TEXT
);