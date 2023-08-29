CREATE DATABASE budget_tracker;

CREATE TABLE categories_input (
    input_category_id serial PRIMARY KEY,
    input_category_name varchar(32) NOT NULL
);

CREATE TABLE categories_output (
    output_category_id serial PRIMARY KEY,
    output_category_name varchar(32) NOT NULL
);

CREATE TABLE transaction (
    id serial PRIMARY KEY,
    balance float DEFAULT 0
);

-- default
INSERT INTO transaction (balance) VALUES (0);

CREATE TABLE history (
    id serial PRIMARY KEY,
    summa int NOT NULL,
    input_id int DEFAULT NULL,
    output_id int DEFAULT NULL,
    created_at timestamptz DEFAULT current_timestamp,
    FOREIGN KEY (input_id) REFERENCES categories_input (input_category_id),
    FOREIGN KEY (output_id) REFERENCES categories_output (output_category_id)
);