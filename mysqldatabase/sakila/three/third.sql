select   actor_id ,film.title , film.description , film.release_year
from  film 
jOIN film_actor ON film.film_id = film_actor.film_id 
where film_actor.actor_id = 5;