CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    bio TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    author_id INTEGER,
    title VARCHAR NOT NULL,
    content TEXT NOT NULL,
    published BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW(),
    CONSTRAINT fk_author
        FOREIGN KEY(author_id)
        REFERENCES authors(id)
        ON DELETE CASCADE
);

-- Índices
CREATE INDEX idx_authors_email
ON authors(email);

CREATE INDEX idx_posts_author_id
ON posts(author_id);