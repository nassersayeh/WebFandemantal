select film.title , film.description , film.release_year , film.rating , film.special_features
from  film 
where film.rating = 'G' and film.special_features like('behind the scenes');