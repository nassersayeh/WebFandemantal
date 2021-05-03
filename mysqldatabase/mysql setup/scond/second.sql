select countries.name , count(cities.id) from 
countries join cities on countries.id = cities.country_id
group by countries.id
order by count(cities.id) desc;