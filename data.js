const W=t=>'https://wa.me/66993913143?text='+encodeURIComponent(t),
I=i=>!i?'':i.startsWith('http')?i:'https://images.unsplash.com/photo-'+i+'?w=700&q=80',
C={Thailand:['🛕','Thailand','Temples, islands, street food and jungle – our home turf.'],
Vietnam:['🏮','Vietnam','Limestone bays, lantern towns and buzzing cities.'],
Bali:['🌴','Bali, Indonesia','Rice terraces, cliff-top temples and surf beaches.'],
Malaysia:['🌆','Malaysia','Skyscrapers, heritage streets, highlands and Borneo wildlife.']},
pex=(n)=>'https://images.pexels.com/photos/'+n+'/pexels-photo-'+n+'.jpeg?auto=compress&w=700',
D=`Bangkok|Thailand|Central Thailand|Grand Palace · Street food · Chao Phraya|1508009603885
Phuket|Thailand|Andaman Coast|Beaches · Phi Phi · Old Town|1528360983277
Chiang Mai|Thailand|Northern Thailand|Temples · Night bazaar · Elephants|1598935898639
Krabi|Thailand|Andaman Coast|Railay · 4 Islands · Snorkelling|1537953773345
Koh Samui|Thailand|Gulf of Thailand|Villas · Ang Thong · Full moon|1589394815804
Pattaya|Thailand|Eastern Thailand|Coral Island · Water parks · Nightlife|1503788311183
Ayutthaya|Thailand|Ancient Capital|UNESCO ruins · Temples · Boat ride|${pex('36768902')}
Chiang Rai|Thailand|Northern Thailand|White Temple · Golden Triangle · Tea|${pex('16986823')}
Hua Hin|Thailand|Gulf Coast|Royal beach town · Night market · Golf|
Kanchanaburi|Thailand|Western Thailand|River Kwai · Erawan Falls · Bamboo rafts|
Phang Nga Bay|Thailand|Andaman Coast|James Bond Island · Sea kayaking · Caves|
Koh Phi Phi|Thailand|Andaman Coast|Maya Bay · Viking Cave · Snorkelling|
Koh Tao|Thailand|Gulf of Thailand|Scuba diving · Turtles · Shark Bay|
Koh Lipe|Thailand|Satun Province|White sand · Clear water · Coral reefs|
Pai|Thailand|Northern Thailand|Canyon · Hot springs · Backpacker vibe|
Sukhothai|Thailand|Central Thailand|Historical park · Cycling · Lantern festival|
Khao Yai|Thailand|North-East Thailand|National park · Vineyards · Wildlife|
Koh Chang|Thailand|Eastern Thailand|Waterfalls · Kayaking · Quiet beaches|
Hanoi & Halong Bay|Vietnam|Northern Vietnam|Old Quarter · Cruise · Water puppets|1528127269322
Hoi An & Da Nang|Vietnam|Central Vietnam|Ancient town · Ba Na Hills · Beaches|1559592413-7cec4d0cae2b
Ho Chi Minh City|Vietnam|Southern Vietnam|Cu Chi tunnels · Markets · Mekong|1583417319070-4a69db38a482
Sapa|Vietnam|Northern Vietnam|Rice terraces · Trekking · Hill tribes|
Ninh Binh|Vietnam|Northern Vietnam|Trang An boats · Tam Coc · Bai Dinh|
Phu Quoc|Vietnam|Southern Islands|Resorts · Sunset Town · Snorkelling|
Nha Trang|Vietnam|South-Central Coast|Island hopping · Mud baths · VinWonders|
Hue|Vietnam|Central Vietnam|Imperial city · Royal tombs · Perfume River|
Da Lat|Vietnam|Central Highlands|Pine hills · Waterfalls · Flower gardens|
Mekong Delta|Vietnam|Southern Vietnam|Floating markets · Coconut groves · Homestays|
Ubud|Bali|Central Bali|Rice terraces · Monkey Forest · Swings|1518548419970-58e3b4079ab2
Nusa Penida|Bali|Island Off Bali|Kelingking · Manta rays · Crystal Bay|1604999333679-b86d54738315
Bali Beaches|Bali|South Bali|Kuta · Jimbaran · Sunset seafood|1537996194471-e657df975ab4
Seminyak|Bali|South Bali|Beach clubs · Boutiques · Fine dining|
Canggu|Bali|South-West Bali|Surf · Cafés · Rice-field views|
Uluwatu|Bali|Bukit Peninsula|Cliff temple · Kecak dance · Blue Point|
Nusa Dua|Bali|South Bali|Luxury resorts · Water sports · Calm beaches|
Kintamani|Bali|Highlands|Mount Batur sunrise · Hot springs · Lake views|
Sanur|Bali|East Coast|Sunrise beach · Family stays · Cycling|
Kuala Lumpur|Malaysia|Peninsular Malaysia|Petronas Towers · Batu Caves · Shopping|1596422846543-75c6fc197f07
Langkawi|Malaysia|Kedah|Sky Bridge · Cable car · Island hopping|${pex('30630819')}
Penang|Malaysia|Northern Malaysia|George Town · Street art · Hawker food|
Cameron Highlands|Malaysia|Pahang|Tea plantations · Strawberry farms · Mossy forest|
Malacca|Malaysia|Southern Malaysia|UNESCO old town · Jonker Street · River cruise|
Genting Highlands|Malaysia|Pahang|Theme park · Cable car · Casino resort|
Kota Kinabalu|Malaysia|Sabah, Borneo|Island hopping · Mount Kinabalu · Sunset|
Kuching|Malaysia|Sarawak, Borneo|Cat city · Orangutans · Longhouses|
Perhentian Islands|Malaysia|East Coast|Turquoise bays · Turtles · Diving|`.split('\n').map(r=>r.split('|')),
P=`Bangkok & Pattaya Charm|Thailand|5D / 4N|Hotel · Transfers · Coral Island · Sightseeing|Family|1552465011-b4e21bf6e79a
Phuket Island Escape|Thailand|6D / 5N|Beach · Phi Phi · Island hopping|Family,Adventure|1528360983277
Krabi & Phi Phi Islands|Thailand|7D / 6N|Longtail boat · Snorkelling · 4 Islands|Adventure|1537953773345
Chiang Mai & Chiang Rai Culture|Thailand|6D / 5N|Temples · Elephant sanctuary · White Temple|Family|1598935898639
Koh Samui Honeymoon|Thailand|5D / 4N|Beach villa · Candle-light dinner · Ang Thong|Honeymoon,Luxury|1589394815804
Best of Thailand|Thailand|10D / 9N|Bangkok · Chiang Mai · Phuket|Family,Luxury|1506665531195
Hua Hin & Kanchanaburi Getaway|Thailand|4D / 3N|River Kwai · Erawan Falls · Beach|Family|
Phang Nga & James Bond Island|Thailand|5D / 4N|Sea kayaking · Caves · Sunset cruise|Adventure,Honeymoon|
Koh Tao & Koh Samui Dive Escape|Thailand|7D / 6N|Scuba · Snorkelling · Beach clubs|Adventure|
Ayutthaya & Sukhothai Heritage|Thailand|4D / 3N|Ancient ruins · Temples · Cycling|Family|${pex('36768902')}
Hanoi & Halong Bay Cruise|Vietnam|6D / 5N|Cruise · Old Quarter · Ninh Binh|Family,Luxury|1528127269322
Hoi An & Da Nang Discovery|Vietnam|5D / 4N|Ancient town · Ba Na Hills · Beach|Family|1559592413-7cec4d0cae2b
Vietnam Classic: Hanoi to Saigon|Vietnam|10D / 9N|Halong Bay · Hoi An · Mekong Delta|Family,Luxury|1583417319070-4a69db38a482
Sapa Trekking & Ninh Binh|Vietnam|5D / 4N|Rice terraces · Trekking · Trang An boats|Adventure|
Phu Quoc Beach Honeymoon|Vietnam|5D / 4N|Sea-view resort · Sunset Town · Island tour|Honeymoon,Luxury|
Nha Trang & Da Lat Escape|Vietnam|6D / 5N|Island hopping · Highlands · Cable car|Family|
Bali Ubud & Beaches|Bali|6D / 5N|Rice terraces · Temples · Beach|Family,Honeymoon|1555400038-63f5ba517a47
Nusa Penida Adventure|Bali|5D / 4N|Island tour · Snorkelling · Kelingking|Adventure|1604999333679-b86d54738315
Bali Honeymoon Villa Retreat|Bali|6D / 5N|Private pool villa · Uluwatu · Spa|Honeymoon,Luxury|1537996194471-e657df975ab4
Bali Family Fun|Bali|6D / 5N|Water sports · Safari park · Beach|Family|
Seminyak, Canggu & Uluwatu|Bali|7D / 6N|Surf lesson · Beach clubs · Kecak dance|Adventure|
Kuala Lumpur & Langkawi|Malaysia|6D / 5N|Petronas · Cable car · Beaches|Family,Honeymoon|1596422846543-75c6fc197f07
Penang & Cameron Highlands|Malaysia|5D / 4N|George Town · Tea plantations · Street food|Family|1669812848176-593dcd49f308
Kota Kinabalu Borneo Adventure|Malaysia|6D / 5N|Island hopping · Wildlife · Sunset cruise|Adventure|
KL, Genting & Malacca Family Tour|Malaysia|5D / 4N|Theme park · Heritage town · Twin Towers|Family|
Langkawi Luxury Honeymoon|Malaysia|5D / 4N|Resort stay · Sunset cruise · Spa|Honeymoon,Luxury|`.split('\n').map(r=>r.split('|')),
K={"Bangkok": "bangkok", "Phuket": "phuket", "Chiang Mai": "chiangmai", "Krabi": "krabi", "Koh Samui": "samui", "Pattaya": "pattaya", "Ayutthaya": "ayutthaya", "Chiang Rai": "chiangrai,temple", "Hua Hin": "huahin", "Kanchanaburi": "kanchanaburi", "Phang Nga Bay": "phangnga", "Koh Phi Phi": "phiphi", "Koh Tao": "kohtao", "Koh Lipe": "kohlipe", "Pai": "pai,thailand", "Sukhothai": "sukhothai", "Khao Yai": "khaoyai", "Koh Chang": "kohchang", "Hanoi & Halong Bay": "halongbay", "Hoi An & Da Nang": "hoian", "Ho Chi Minh City": "saigon", "Sapa": "sapa,vietnam", "Ninh Binh": "ninhbinh", "Phu Quoc": "phuquoc", "Nha Trang": "nhatrang", "Hue": "hue,vietnam", "Da Lat": "dalat", "Mekong Delta": "mekong,delta", "Ubud": "ubud", "Nusa Penida": "nusapenida", "Bali Beaches": "bali,beach", "Seminyak": "seminyak", "Canggu": "canggu", "Uluwatu": "uluwatu", "Nusa Dua": "nusadua", "Kintamani": "kintamani", "Sanur": "sanur", "Kuala Lumpur": "kualalumpur", "Langkawi": "langkawi", "Penang": "penang", "Cameron Highlands": "cameronhighlands", "Malacca": "malacca", "Genting Highlands": "genting", "Kota Kinabalu": "kotakinabalu", "Kuching": "kuching", "Perhentian Islands": "perhentian"},CK={"Thailand": "thailand,travel", "Vietnam": "vietnam,travel", "Bali": "bali", "Malaysia": "malaysia,travel"},
kw=(n,c)=>{if(K[n])return K[n];const h=D.find(d=>K[d[0]]&&n.toLowerCase().includes(d[0].split(' &')[0].toLowerCase()));return h?K[h[0]]:CK[c]},
FK=(n,c)=>{const k=kw(n,c);let h=0;for(const ch of n)h+=ch.charCodeAt(0);return 'https://loremflickr.com/700/500/'+k+'?lock='+h},
ok=i=>i&&(i.startsWith('http')||i.includes('-')),
pic=(i,alt,c)=>`<em class="ph">${C[c][0]}</em><img loading="lazy" ${ok(i)&&i.startsWith('http')||ok(i)?'src="'+I(i)+'" ':''}data-q="${wq(alt,c)}" alt="${alt}" onerror="wk(this)">`,
chips=s=>'<div class="chips">'+s.split(' · ').map(x=>`<span>${x}</span>`).join('')+'</div>',
dCard=([n,c,r,t,i])=>`<div class="lc" data-c="${c}"><div class="li g-${c}">${pic(i,n,c)}<span>${r}</span></div><div class="lb"><h3>${n}</h3>${chips(t)}<div class="lf"><a href="packages.html?c=${c}">View packages →</a><a class="btn" href="${W('Hi, I would like to visit '+n+' – please share options.')}">Enquire</a></div></div></div>`,
pCard=([n,c,d,t,s,i])=>`<div class="pc" data-c="${c}" data-s="${s}"><div class="pi g-${c}">${pic(i,n,c)}<span>${C[c][1]}</span><b class="dur">🕐 ${d}</b></div><div class="pb"><div class="chips st">${s.split(',').map(x=>`<span>${x}</span>`).join('')}</div><h3>${n}</h3>${chips(t)}<div class="f"><span>Custom quote · Flights optional</span><a class="btn" href="${W(n+' ('+d+') enquiry')}">Get Quote</a></div></div></div>`;

function wq(n,c){n=n.split(/ & |, | to |: /)[0].replace(/\b(Escape|Charm|Honeymoon|Adventure|Family|Fun|Luxury|Discovery|Culture|Heritage|Getaway|Cruise|Retreat|Villa|Dive|Trekking|Classic|Tour|Best of|Beach|Beaches|Island)\b/g,'').replace(/^KL$/,'Kuala Lumpur').replace(/\s+/g,' ').trim();return (n+' '+C[c][1]).replace(/"/g,'')}
const wc={};
function wk(im){if(im.dataset.d){im.style.display='none';return}const q=im.dataset.q;if(!q)return;im.dataset.d=1;
(wc[q]=wc[q]||fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrlimit=6&prop=pageimages&piprop=thumbnail&pithumbsize=700&gsrsearch='+encodeURIComponent(q)).then(r=>r.json()).then(j=>{const p=Object.values(j.query.pages).sort((a,b)=>a.index-b.index).find(p=>p.thumbnail&&!/map|flag|locator|logo|seal|coat|emblem/i.test(p.thumbnail.source));return p?p.thumbnail.source:''}).catch(()=>'')).then(u=>{if(u){im.style.display='';im.src=u}else im.style.display='none'})}
const wl=()=>document.querySelectorAll('img[data-q]:not([src])').forEach(wk);
new MutationObserver(wl).observe(document.documentElement,{childList:true,subtree:true});document.addEventListener('DOMContentLoaded',wl);
