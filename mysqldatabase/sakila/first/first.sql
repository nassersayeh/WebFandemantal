select customer.first_name as first_name , customer.last_name as last_name, customer.email , address.address 
from customer
join address on  customer.address_id = address.address_id
where address.city_id = 312;