select customer.first_name,customer.last_name,customer.email,address.address
from  customer 
jOIN address ON customer.address_id = address.address_id 
join store on customer.store_id = store.store_id
where customer.store_id = 1 and address.city_id = 1 and 42 and 312 and 459 ;