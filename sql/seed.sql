SET client_encoding = 'UTF8';

-- Authors
INSERT INTO authors (name, email, bio)
VALUES
('Juan Pérez', 'juan@example.com', 'Backend developer and tech writer'),
('María Gómez', 'maria@example.com', 'Frontend developer passionate about UX'),
('Lucas Fernández', 'lucas@example.com', 'Fullstack developer and blogger');

-- Posts
INSERT INTO posts (author_id, title, content, published)
VALUES
(1, 'Introducción a Node.js', 'Node.js es un entorno de ejecución para JavaScript.', true),

(1, 'Aprendiendo Express', 'Express facilita la creación de APIs en Node.js.', true),

(2, 'CSS Grid vs Flexbox', 'Ambos sistemas ayudan a crear layouts modernos.', true),

(3, 'Qué es PostgreSQL', 'PostgreSQL es una base de datos relacional open source.', false),

(3, 'Buenas prácticas REST', 'Las APIs REST deben ser consistentes y escalables.', true);