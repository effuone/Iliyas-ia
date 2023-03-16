CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(256) NOT NULL,
    last_name VARCHAR(256) NOT NULL,
    email VARCHAR(256) NOT NULL, 
    password_hash VARCHAR(256) NOT NULL
);

CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    path VARCHAR(255) NOT NULL
);

CREATE TABLE news (
    id SERIAL PRIMARY KEY,
    image_id INT REFERENCES documents (id)  ON UPDATE CASCADE ON DELETE CASCADE,
    description TEXT NOT NULL,
    planned_date DATE NOT NULL,
)

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL,
    creation_date DATE NOT NULL,
    program_type INT NOT NULL
);

CREATE TABLE projects_documents (
    project_id INT REFERENCES projects (id) ON UPDATE CASCADE ON DELETE CASCADE,
    document_id INT REFERENCES documents (id)  ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT PK_ProjectsDocuments PRIMARY KEY (project, document_id)
);