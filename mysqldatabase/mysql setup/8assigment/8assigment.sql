select region , count(id) as number_countries
from countries
group by region
order by count(id) desc