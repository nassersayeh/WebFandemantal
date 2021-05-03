select  users.first_name, count(friendships.friend_id) as friendship_number from users 
join friendships on users.id = friendships.user_id
left join users as user2 on  users.id = friendships.user_id
group by users.id
;