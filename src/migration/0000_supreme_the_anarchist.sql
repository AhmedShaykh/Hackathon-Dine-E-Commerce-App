CREATE TABLE IF NOT EXISTS Cart (
	id serial PRIMARY KEY NOT NULL,
	user_id varchar(255) NOT NULL,
	product_id varchar(255) NOT NULL,
	title varchar(255) NOT NULL,
	dressname varchar(255) NOT NULL,
	image text NOT NULL,
	price integer NOT NULL,
	quantity integer NOT NULL,
	total_price integer NOT NULL
);