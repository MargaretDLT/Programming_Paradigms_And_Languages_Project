
CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	notes varchar NOT NULL,
	artist text NOT NULL,
	playlist text NOT NULL
);

INSERT INTO songs (id, song_title, notes, artist, playlist) 
VALUES (1, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4', 'Ludwig Van Beethoven','Bangers'),
	(2, 'Happy Birthday', 'C4 C4 D4 C4 F4 E4 C4 C4 D4 C4 F4 E4 C4 C4 C5 A4 F4 F4 E4 D4 Bb4 A4 F4 G4 F4', 'Patty Hale', 'Birthday Bangers'),
	(3, 'Mary had a Little Lamb', 'E4 D4 C4 D4 E4 E4 E4 D4 D4 D4 E4 G4 G4 E4 D4 C4 D4 E4 E4 E4 E4 D4 D4 E4 D4 C4', 'Sarah J. Hale', 'Nursery Rhymes')
