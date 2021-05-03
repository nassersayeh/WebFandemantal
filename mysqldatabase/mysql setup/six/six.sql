select name , government_form , capital , life_expectancy
from countries 
where government_form = 'Constitutional Monarchy' and capital > 200 and life_expectancy > 75;
;