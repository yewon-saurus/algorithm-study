select sum(price) as TOTAL_PRICE
from item_info
where rarity = 'legend'
group by rarity;