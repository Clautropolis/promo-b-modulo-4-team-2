
CREATE TABLE Projects (
idProject int auto_increment primary key,
name varchar(45) not null,
slogan varchar(200) not null,
repo text not null,
demo text not null,
technologies varchar(500) not null,
description text not null,
image text not null
);

CREATE TABLE Authors (
idAuthor int auto_increment primary key,
name varchar(45) not null,
job varchar(45) not null,
photo text not null
);
-- Añadir la columna de la foreign key en la tabla
ALTER TABLE Projects ADD COLUMN fk_author INT;

-- Asignar a la foreign key el valor del id de la tabla de autoras
ALTER TABLE Projects ADD FOREIGN KEY (fk_author)
REFERENCES Authors (idAuthor);

INSERT INTO Projects (name, slogan, repo, demo, technologies, description, image)
VALUES ('El taller', 'ven a realizar tus piezas de cerámica', 'https://github.com/Clautropolis/promo-b-modulo-4-team-2.git', 'https://adalab.es/', 'react, html, css, js, vite, node', 'Leave hair everywhere fooled again thinking the dog likes me or make meme, make cute face dismember a mouse and then regurgitate parts of it on the family room floor or going to catch the red dot today going to catch the red dot today sitting in a box yet lay on arms while youre using the keyboard. Stand in front of the computer screen lick the curtain just to be annoying and meow meow you are my owner so here is a dead rat for grass smells good, munch, munch, chomp, chomp. I love cuddles hell is other people cat fur is the new black .', 'https://labois.com/wp-content/uploads/2022/05/ceramista-artesana-taller-handmade-1-scaled.jpg' ),
('El patio de Luisa', 'donde la música independiente encuentra su voz', 'https://github.com/Clautropolis/promo-b-modulo-4-team-2.git', 'https://adalab.es/', 'react, html, css, js, vite, node', 'Leave hair everywhere fooled again thinking the dog likes me or make meme, make cute face dismember a mouse and then regurgitate parts of it on the family room floor or going to catch the red dot today going to catch the red dot today sitting in a box yet lay on arms while youre using the keyboard. Stand in front of the computer screen lick the curtain just to be annoying and meow meow you are my owner so here is a dead rat for grass smells good, munch, munch, chomp, chomp. I love cuddles hell is other people cat fur is the new black .', 'https://www.mahoudrid.com/wp-content/uploads/2021/08/El-Patio-Mahou-Jardin.jpg'),
('La casa de gatos', 'ven a tomarte algo con los gatos', 'https://github.com/Clautropolis/promo-b-modulo-4-team-2.git', 'https://adalab.es/', 'react, html, css, js, vite, node', 'Leave hair everywhere fooled again thinking the dog likes me or make meme, make cute face dismember a mouse and then regurgitate parts of it on the family room floor or going to catch the red dot today going to catch the red dot today sitting in a box yet lay on arms while youre using the keyboard. Stand in front of the computer screen lick the curtain just to be annoying and meow meow you are my owner so here is a dead rat for grass smells good, munch, munch, chomp, chomp. I love cuddles hell is other people cat fur is the new black .', 'https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2017/11/08115727/23270328_364098904011439_3297433820673234076_o.jpg'),
('El espacio exterior', 'hasta el infinito y más allá', 'https://github.com/Clautropolis/promo-b-modulo-4-team-2.git', 'https://adalab.es/', 'react, html, css, js, vite, node', 'Leave hair everywhere fooled again thinking the dog likes me or make meme, make cute face dismember a mouse and then regurgitate parts of it on the family room floor or going to catch the red dot today going to catch the red dot today sitting in a box yet lay on arms while youre using the keyboard. Stand in front of the computer screen lick the curtain just to be annoying and meow meow you are my owner so here is a dead rat for grass smells good, munch, munch, chomp, chomp. I love cuddles hell is other people cat fur is the new black .', 'https://static.nationalgeographicla.com/files/styles/image_3200/public/01-edge-of-space-sts080-759-038_orig.jpg?w=1900&h=1900');

INSERT INTO Authors (name, job, photo)
VALUES ('Mel', 'ceramista', 'https://st3.depositphotos.com/6462898/17953/i/600/depositphotos_179530926-stock-photo-passport-picture-asian-young-woman.jpg'),
('Claudia', 'cuidadora de gatos', 'https://static.cegos.es/content/uploads/2023/03/01165224/GettyImages-1300321639.jpg'),
('Gemma', 'emprendedora', 'https://imagenes.eltiempo.com/files/image_1200_535/files/fp/uploads/2024/03/19/65f9d492598ea.r_d.1079-279-5658.jpeg'),
('Idoia', 'investigadora', 'https://st3.depositphotos.com/10614052/32691/i/450/depositphotos_326919082-stock-photo-portrait-of-young-asian-woman.jpg');

USE freedb_firstProject2025;
DESCRIBE Projects;
