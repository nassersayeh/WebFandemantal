
select film.title, film.description, film.release_year, film.rating, film.special_features, category.name as genre, actor.first_name, actor.last_name 
from film 
join film_category on film.film_id = film_category.film_id 
join category on film_category.category_id = category.category_id 
join film_actor on film.film_id = film_actor.film_id 
join actor on film_actor.actor_id = actor.actor_id
where category.name = 'Action' and actor.first_name = 'SANDRA' and actor.last_name = 'KILMER'