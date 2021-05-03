select cities.name, cities.population 
from cities 
join countries on cities.country_id = countries.id
 where countries.name = 'Mexico' and cities.population > 500000
order by cities.population desc;