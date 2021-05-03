select languages.language , languages.percentage 
from languages 
where languages.percentage > 89
order by languages.percentage desc;