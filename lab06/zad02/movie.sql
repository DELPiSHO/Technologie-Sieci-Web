CREATE TABLE Movie (
    Id SERIAL,
    Name VARCHAR NOT NULL,
    Genre VARCHAR NOT NULL,
    ReleaseYear INT NOT NULL
)

INSERT INTO public.movie(
	name, genre, releaseyear)
	VALUES ('matrix','action', 2003),
	('6 Underground', 'action', 2019),
	('Rambo IV','thriller',2007),
	('Fast and Furius VII','action',2015),
	('Jumanji','adventure',2017),
	('Terminator II','thriller',1991);