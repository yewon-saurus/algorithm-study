select member_id, member_name, gender, concat(year(date_of_birth), '-', lpad(month(date_of_birth), 2, '0'), '-', day(date_of_birth)) as date_of_birth
from member_profile
where month(date_of_birth) = 3
and gender = 'w'
and tlno is not null;