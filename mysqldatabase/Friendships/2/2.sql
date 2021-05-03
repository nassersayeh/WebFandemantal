select count(friendships.friend_id) as friendship_count from users 
join friendships on users.id = friendships.user_id
left join users as user2 on  users.id = friendships.user_id
;