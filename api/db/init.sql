
use movietone;

CREATE TABLE movies
(
        id VARCHAR(255) NOT NULL PRIMARY KEY ,
        title VARCHAR(255) NOT NULL,
        genre VARCHAR(255),
        actors VARCHAR(255),
        year INT(11) NOT NULL,
        rating INT(11),
        createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP DEFAULT  CURRENT_TIMESTAMP
);
