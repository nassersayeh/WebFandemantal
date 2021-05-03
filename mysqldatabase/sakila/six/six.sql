select film.film_id , film.title , actor.actor_id
from  film 
join film_actor on film.film_id = film_actor.film_id
join actor on film_actor.actor_id = actor.actor_id
where film.film_id=369;