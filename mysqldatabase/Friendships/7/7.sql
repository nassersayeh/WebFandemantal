select users.first_name, users.last_name, user2.first_name as friend_first_name, user2.last_name as friend_last_name
from users
left join friendships ON users.id = friendships.user_id
left join  users AS user2 ON friendships.friend_id = user2.id
order by friend_first_name ;
