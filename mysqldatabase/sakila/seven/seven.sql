select  film.title , film.description,film.release_year,film.rating,film.special_features , category.name
from  film , category
join film_category on category.category_id = film_category.category_id
where film.rental_rate=2.99;