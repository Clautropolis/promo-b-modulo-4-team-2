SELECT * FROM Projects;
SELECT * FROM Authors;

SELECT Authors.name, Projects.name
FROM Authors, Projects
WHERE Projects.fk_author = Authors.idAuthor
AND Authors.name = 'Idoia';