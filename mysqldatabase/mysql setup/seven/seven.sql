select countries.name as country_name, cities.name as city_name, cities.district , cities.population
from cities
join countries on cities.country_id = countries.id
where countries.name = 'Argentina' and cities.district = 'Buenos Aires ' and cities.population > 500000;