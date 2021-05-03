-- insert into users (first_name , last_name, created_at , updated_at   )  values('nasser','sayeh', now() , now());
select  id into @uid from users   where first_name = 'nasser';
insert into friendships ( user_id,friend_id ,created_at , updated_at) values(@uid,'4' , now() , now());
-- delete from users where id = 10 ;
