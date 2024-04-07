import styles from "./package.module.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleArrowLeft,
	faCircleArrowRight,
	faCircleXmark,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import { IoIosArrowDown, IoIosArrowUp, IoIosStar } from "react-icons/io";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import WhatsAppButton from "../../components/whatsapp/Whatsapp";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
// import { sliderSettings } from "./common";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data1 = {
	Sr_no: 393,
	Package_name: "Romantic Rajasthan with Khajuraho Varanasi",
	Reviews: "(1 review)",
	Review_star: "4.0",
	Main_style: "In-depth Cultural",
	Destination:
		"New Delhi, Jaipur, Pushkar, Udaipur, Bundi, Ranthambore National Park, Fatehpur Sikri, Agra, Orchha, Khajuraho, Varanasi+9 more",
	Age_range: "2 to 90 year olds",
	Country_region: "Northern India",
	Operated_in: "English, German, Italian, French, Spanish+4 more",
	Operator:
		"World Travel Experiences This operator has high review ratings and responds promptly to enquiries",
	Price: "$1,315",
	itinerary:
		"Start and end in New Delhi! With the In-depth Cultural tour Romantic Rajasthan with Khajuraho Varanasi, you have a 15 days tour package taking you through New Delhi, India and 10 other destinations in India. Romantic Rajasthan with Khajuraho Varanasi includes accommodation in a hotel as well as an expert guide, meals, transport and more.",
	imagelist: ['//cdn.tourradar.com/s3/cities/260x203/7751_010362.jpg', '//cdn.tourradar.com/s3/cities/260x203/7755_b60433.jpg', '//cdn.tourradar.com/s3/cities/260x203/15360_1749b9.jpg', '//cdn.tourradar.com/s3/cities/260x203/7762_28ce34.jpg'],
	// imagelist: [],
	map_link:
		"data:image/svg+xml;charset=UTF-8,%3Csvg%20width='1171'%20height='320'%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E",
	Duration: "15 days",
	img_link: "//cdn.tourradar.com/s3/tour/360x210/175677_dfcc23e1.jpg",
	days: [
		{
			title: "Day 1\n                           New Delhi",
			description:
				"Meeting and assistance on arrival at the airport, our representative will meet to welcome and escort you by a private chauffeur driven car and transfer to hotel.\nDelhi, capital city of the Federal Republic of India. It is one of India's fastest growing cities. It has sprawled over the West Bank of the river Yamuna, straddling the river. Delhi blends an historic past and a vibrant present. Delhi has some of the finest museums in the country. New Delhi was proclaimed the capital of India by the British architect Sir Edwin Lutyens (1869-1944) & is tree-lined & spacious. \u00a0Legend has it that the Pandavas, the September heroes of the epic Mahabharata, originally founded Delhi, then called Indraprastha, around 1200 B.C. Present day Delhi is built around the ruins of seven ancient cities. Overnight stay at Hotel in Delhi.",
		},
		{
			title:
				"Day 2\n                           New Delhi - Old & New Delhi sightseeing",
			description:
				"Morning combined city tour of North & South Delhi, visiting Old Delhi: the majestic Red Fort, a marvel in red sandstone, Jama Masjid, the largest mosque in India, both built by emperor Shah Jahan of Taj Mahal fame, Rajghat - memorial of Mahatma Gandhi & a Rickshaw ride past through the silver street in Chandani Chowk, Later take a sight seeing tour of New Delhi includes Rashtrapati Bhawan, one-time imperial residence of the British viceroys; the India Gate, a memorial raised in honour of the Indian soldiers martyred during the Afghan war; the Laxmi Narayan Temple, built by the Birlas, one of India\u2019s leading industrial families. Overnight stay at Hotel in Delhi",
		},
		{
			title:
				"Day 3\n                           Delhi \u2013 Jaipur (265km 5hrs)",
			description:
				"After breakfast depart by surface to Jaipur, on arrival check in at Hotel. \u00a0Jaipur Widely known as the \u2018Pink City. This city is colour washed pink to welcome Prince Albert, the consort of Queen Victoria of England who visited India in 1883 A.D. The city was founded in 1727 A.D by one of the greatest ruler Jai Singh II. Jaipur is surrounded by hills on three sides, crowned by formidable forts and majestic palaces, mansions and gardens. Jaipur is the only city in the world, which is sub-divided in to nine rectangular sectors symbolizing nine divisions of PUSHKAR universe. Jaipur is the first planned city designed in accordance with \u2018Shilpa Shastra\u2019- epochal treatise of Hindu architecture.\u00a0\nAfternoon you will enjoy the Turban Tying experiences, Saree tying experiences for Ladies, Astrologist and Palmist activities in Jaipur. Only in Group booking. Overnight stay at Hotel in Jaipur.",
		},
		{
			title: "Day 4\n                           In Jaipur",
			description:
				"Today after breakfast explore the Pink City with an excursion to Amber Fort, situated just outside the city, enjoy the experience of Jeep Ride to and from the top of the hill on which the fort is situated.\u00a0\nAfternoon sightseeing tour of City Palace in the heart of Jaipur is known for its blend of Rajasthani and Mughal architecture. Not far away is the Central Museum. Jantar Mantar is the largest of the five observatories built by Sawai Jai Singh. The Hawa Mahal or the Palace of Winds was constructed for the royal ladies to watch the royal processions without being seen, all monuments are located in the vicinity of City Palace Complex of Jaipur. Afternoon is kept free to visit the famous Markets of Textiles, Gems, Carpets, and handicrafts. Jaipur is an ideal place for buying souvenirs. Overnight stay at Hotel in Jaipur.",
		},
		{
			title: "Day 5\n                           Jaipur- Pushkar (135km 3 hrs)",
			description:
				"Morning after breakfast drive to Pushkar, arrive and transfer to hotel. Afternoon Visit while in Pushkar are the Brahma Temple, Gau Ghat, Nag Hill, Markendeya Rishi Ashram, Pap Mochini Temple, Agastya Muni Ashram and Gaya Kund. Besides, the picturesque lake, the Savitri Temple, and the Pushkar Bazaar are also worth a visit. Overnight stay at Hotel in Pushkar.\u00a0",
		},
		{
			title:
				"Day 6\n                           Pushkar - Deogarh - Udaipur (by Surface 350 km 6 hrs)",
			description:
				"Breakfast at the hotel and drive to Udaipur. En route visit Deogarh Fort, known as the Castle of Gods, is one of the least known, most remote and most charming of hotels. Enjoying to explore the property Deogarh Palace and its surrounds. You can either enjoy the countryside with a guide, visiting small villages around Deogarh and get a closer look at rural life of the local inhabitants.\n\u00a0\nUdaipur, \u201cthe City of Dawn,\u201d is a kaleidoscope of fairy tale palaces, lakes, temples, gardens, and narrow streets that carry the tales of a heroic past. The reflection of these building in the placid waters of the Lake Pichola is an enticing sight. Upon arrival in Udaipur, check-in at the hotel. Overnight stay the hotel.\u00a0",
		},
		{
			title: "Day 7\n                           Udaipur",
			description:
				"Morning after Breakfast at the Hotel, Get ready to explore the culture & places here in Udaipur. Go for a tour visiting places like City Palace, City Palace Museum, Udai Sagar Lake, Jagdish Temple, Lake Palace. The City Palace and Museum is considered as the largest palace complex in Rajasthan. Saheliyon Ki Bari is a small ornamental garden.\n\nAn evening 01 hour boat-ride on Lake Pichola visiting many Ghats (banks) and enjoy excellent views of the Lake Palace and City Palace. Overnight stay the hotel.\u00a0\n",
		},
		{
			title:
				"Day 8\n                           Udaipur - Bundi (by surface 266 5hrs)",
			description:
				"Morning after breakfast drive to Bundi.Arrive and check inn to hotel. afternoon visit the Taragarh or Star Fort. Perched on a thickly wooded hill is a marvelous white fort with a huge reservoir that once supplied water to the palace.Chatrasagar is a fascinating pavilion of a gallery of miniature murals. Elaborate colorful paintings on the walls depict scenes from the 'Ragamala' 'Raaslila' -- the Radha-Krishna story.Sukh Mahal is a magnificent summer palace on the Sukh Sagar Lake amid the lush surroundings of a beautiful garden. An underground tunnel is believed to run from the Sukh Mahal to the old palace. Overnight stay at hotel in Bundi.\u00a0",
		},
		{
			title:
				"Day 9\n                           Bundi - Ranthambore (by surface 135 - 5hrs)",
			description:
				"Morning after breakfast drive down to Ranthambore. Ranthambore, one of India's finest wild life locations is near Sawai Madhopur, about 100 kms south-east of Ajmer in Rajasthan. It encompasses nearly 152 sq. miles of dry deciduous forest in south western Rajasthan. In the heart of this forest the Aravali and Vindhya hill ranges meet. The park, consisting of numerous valleys and hill top flats is set between these ranges.\u00a0\n\nArrive Ranthambore and transfer to Jungle resort. After lunch you will take afternoon game drive to Ranthambore National Park with naturalist by jeep or canter. Dinner and overnight stay at the resort in Ranthambore.\n",
		},
		{
			title: "Day 10\n                           Ranthambore",
			description:
				"An early morning drive to the dense jungle of Ranthambore with naturalist by open top roof canter or jeep (subject to availability) for tiger tracking and explore wildlife. The jungle visits lasts for about three hours. Return to the resort for breakfast time. There is time to relax and enjoy the facilities of your hotel, maybe take a dip in the pool for a break from the heat of the day. You can also explore the wild surroundings.\u00a0\n\nAfter lunch visit to Ranthambore Fort. it will take approx. two hours to complete, return at you hotel at dusk. Have tea and coffee. Overnight spent in the hotel or resort.\u00a0\n",
		},
		{
			title:
				"Day 11\n                           Ranthambore - Fatehpur Sikri - Agra (By Surface 6 hrs)",
			description:
				"Morning after breakfast check out the hotel and drive to Agra. En-route \u00a0visit Fatehpur Sikri. Fatehpur Sikri. Fatehpur Sikri - Established in 1451 as the capital of the Muslim Nawabs, Fatehpur was taken over by the Rajputs of the Shekhawati region in the 18th century. The main attractions here are the Mahavir Prasad Goenka Haveli, the Gauri Shankar Haveli, the Nand Lal Devra Haveli, the Harikrishnan Das Sarogi Haveli, and a 17th-century baoli or step-well.\n\nOn arrival transfer to Hotel. \u00a0Agra is famous as being home to one of the Seven Wonders of the World-the Taj Mahal. Pleasant towns with comparatively slow pace, craftsmen who are descendant of those who worked under the Mughals know Agra for its superb inlay work on marble and soapstone. The city is also famous for its carpets, gold thread embroidery and leather shoes. Agra, and the nearby city of Fatehpur Sikri, is conveniently close to Delhi. Besides the Taj Mahal are Agra Fort, Sikandra, Ram Bagh and Itmad-Ud-Daulah.-35 kms away are the imperial ruins of the Mughal city, Fatehpur Sikri. Agra is an old city and it is said that its name was derived from Agrabanad, a forest that finds mention in the epic Mahabharata.\u00a0\nOvernight stay at Hotel in Agra\n",
		},
		{
			title: "Day 12\n                           Agra ",
			description:
				"After breakfast visit to witness one of most beautiful among the seven wonders of the world: \u00a0Taj Mahal with its\u2019 speculative view. Taj Mahal, the architectural modern day wonder of the world; this monument is a fine example of the fusion of many architectural styles is one of the wonders of the modern world. Taj, endowed it with some of the loveliest buildings in the world.\u00a0\n\nThe tour continues with a visit Agra Fort, designed and built by Akbar in 1565 A.D., built with barricaded wall of red sand stone; it houses the beautiful Pearl Mosque and numerous palaces including the Jahangir Mahal, Diwan-i-Khas, Diwan-i-Am, Macchhi Bhawan, Nagina Masjid, Meena Bazar, \u00a0Moti Masjid, Sheesh Mahal, Musamman Burj where from \u00a0Taj Mahal is visible in all its beauty from one side of the fort. So very ironically, Emperor Sahahjahan, prisoner of his son Aurangzeb in his old age was put in a cell from where he could gaze at the Taj Mahal at a distance, from his cell in the fort. \u00a0Overnight stay at Hotel in Agra.",
		},
		{
			title:
				"Day 13\n                           Agra - Jhansi by train - Orcha - Khajuraho by surface 165km 4hrs",
			description:
				"After breakfast transfer to railway station to board train for Jhansi, On arrival straight drive to Khajuraho, En route visit Orcha \u2013Orchha means 'hidden', it is situated on the banks of the river Betwa. Arrive Orchha by afternoon and visit Jehangir Mahal, Chaturbhuj Temple, Laxminarayan temple, Chhatris (Cenotaphs).\u00a0\n\nContinue drive to Khajuraho, On arrival check in at Hotel.\u00a0\nKhajuraho situated in the heart of northern part of the state Madhya Pradesh in India. It is famous for its Splendid temples. Exquisitely carved temples in stones. Apart from the temples, Khajuraho is a small village but a thousand years ago it was a large city. These temples were built during the reign of the Chandela dynasty. Khajuraho is also famous for its legendary Khajuraho dance festival.\u00a0\n\nOvernight stay at Hotel in Khajuraho.\n",
		},
		{
			title:
				"Day 14\n                           Khajuraho - satna (overnight train for Varanasi in A/c Sleeper Coach) ",
			description:
				"Morning visit City tour visiting the Western Group, Ornament monument in Khajuraho are listed as a World Heritage site by UNESCO and appeared on list of seven wonders of India. They were built in the years 950 \u2013 1050. It is interesting how they were built. It is said that many artists had to work on them because they are really in good quality. But the biggest mystery is their erotic theme. We still don\u2019t know why exactly temples contain erotic carving so far. There is a theory they are the remains of magical and shamanic rituals which guaranteed fertility and protection from evil forces.\u00a0\nIt has 14 temples. The Chaunsath Yogini, Lalguan Mahadev, Parvati, Varaha, Matangesvara, Lakshmana, Vishvanath and Nandi, Chitragupta, Devi Jagdamba and Kandariya Mahadeo temples belong to this group. The Eastern Group, 2.4 km from the Tourist Office, consists of seven temples (four Jain and three Hindu). The Parsvanath, Adinath, Shantinath, and Ghantai temples belong to the Jains while the Vamana, Javari and Brahma are Hindu temples.\u00a0\nEvening transfer to Khajuraho railway station to board on train for Varanasi. Overnight on board.\u00a0",
		},
		{
			title: "Day 15\n                           Arrive Varanasi ",
			description:
				"On arrival at Railway station meet & transfer to hotel. \u00a0\u00a0\nMorning arrive at Varanasi. On arrival meet & transfer to Hotel \u00a0and complete the check-in formalities. Get freshened up. Thereafter, embark on a short trip to Sarnath, a popular Buddhist religious site. One of the four most important sacred sites of Buddhism, it has the deer park where Gautama Buddha first taught the 'Dharma' after attaining enlightenment. Back to Varanasi in the afternoon for city tour including Alamgir Mosque, also known as Beni Madhav Ka Darera, Dasaswamedh Ghat, popular for evening Ganga Aarti, and the Bharat Mata Temple- positioned in the Mahatma Gandhi Kashi Vidyapith campus. The evening is scheduled for the mesmerizing ceremony of Ganga Aarti, a lifetime opportunity.\nOvernight at hotel.\u00a0\n",
		},
		{
			title: "Day 16\n                           Varanasi - Delhi - Depart",
			description:
				"Morning after breakfast, check-out from hotel & transfer to Varanasi airport to board flight for Delhi. On arrival board on flight for onward destination.\u00a0",
		},
	],
	intro:
		"A desolate desert beauty with fascinating past, the past laced with glorious moments of chivalry and mystic romance...welcome to Rajasthan! The land blessed with scorching sun and golden sands. Land full of forts and palaces, land telling the tales of romance and valour, the land full of hospitable people. Steeped in rich culture and basked in glory. The Trip combines the spiritual attractions of the famous Hindu pilgrimage city of Varanasi and the world famous heritage site of the erotic temples of Khajuraho in the mix to give you the perfect experience. On a whole, this trip promises to take you on a walk through some of the most visited and most famous attractions that make India one of the most visited destinations in the world. .......welcome to the romance of Rajasthan.",
};

const included = [
	{
		title: "Accommodation",
		description: "Accommodations using 03-star hotels (can be upgraded to 4 or 5 stars). 02 Nights Accommodation at Castle Deogarh & Fort Chanwa. Please be aware that all accommodations are subject to change until 4-6 weeks before the departure date. Final accommodation details will be provided to you with your finalized travel documents.",
		isIncluded: true
	},
	{
		title: "Guide",
		description: "Experienced English-speaking guide during sightseeing at each place",
		isIncluded: true
	},
	{
		title: "Meals",
		description: "Daily Breakfasts (11 Breakfasts). All Meals at Castle Sardargarh & Fort Chanwa (02 Lunches & 02 Dinners). This tour offers Jain, Vegetarian, Vegan and Halal food options on request.Simply let Swastik India Journeys know the food option that you prefer.",
		isIncluded: true
	},
	{
		title: "Additional Servies",
		description: "Taxes, Arrival and departure transfers, Charging facilities.",
		isIncluded: true
	},
	{
		title: "Transport",
		description: "Transportation using Air-Conditioned Vehicle. English Speaking Driver throughout the tour",
		isIncluded: true
	},
	{
		title: "Flights",
		description: "International and domestic flights not included.",
		isIncluded: false
	},
	{
		title: "Insurance",
		description: "Insurance not included. Travel insurance is required for all of our tours.",
		isIncluded: false
	},
];

const images = {
	"Agra": "https://cdn.tourradar.com/s3/cities/520x406/7755_b60433.jpg",
	"New Delhi": "https://cdn.tourradar.com/s3/cities/520x406/7751_010362.jpg",
	"Taj Mahal": "https://cdn.tourradar.com/s3/cities/520x406/35574_b0a101.jpg",
	"Ranthambore National Park": "https://cdn.tourradar.com/s3/cities/520x406/15360_1749b9.jpg",
	"Fatehpur Sikri": "https://cdn.tourradar.com/s3/cities/520x406/13505_5990e1.jpg",
	"Jaipur": "https://cdn.tourradar.com/s3/cities/260x203/7762_28ce34.jpg",
	"Jaisalmer": "https://cdn.tourradar.com/s3/cities/520x406/7758_6463e6.jpg",
	"Pushkar": "https://cdn.tourradar.com/s3/cities/520x406/7761_d8b7ae.jpg",
	"Mumbai": "https://images.unsplash.com/photo-1580581096469-8afb38d3dbd5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	"Udaipur": "https://cdn.tourradar.com/s3/cities/260x203/7755_b60433.jpg",
	"Varanasi": "https://cdn.tourradar.com/s3/tour/750x400/248978_64854380d686b.jpg",
	"Kochi (Cochin)": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTq0AaJWBs7dAgjF1Ts6tNwF7-c7bmLHCqFbyWxfgkpsyHG8krvglkLfPtoJtybt65MZcdspD6Cj2qXbuIwmiRMS03FzK8-WLxqaRnnew",
	"Alleppey": "https://cdn.tourradar.com/s3/cities/520x406/11655_7a7a91.jpg",
	"Kumarakom": "https://cdn.tourradar.com/s3/cities/520x406/11654_9609a5.jpg",
	"Munnar": "https://cdn.tourradar.com/s3/cities/520x406/11652_49297b.jpg",
	"Thekkady": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Thekkady.jpg/1280px-Thekkady.jpg",
	"Thiruvananthapuram": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQuzXO4wlvqCKAkSaZMrd_G9dDnFnNwLCSxavce3rC9ok7COYPELsGrtCVlo7TOit1seW4sOKOXE2rwWF3tE52c1_66ZCJonRpCVW4R-w",
	"Kovalam": "https://upload.wikimedia.org/wikipedia/commons/0/0e/01KovalamBeach%26Kerala.jpg",
	"Eranakulam National Park": "https://lh5.googleusercontent.com/p/AF1QipOokRkXSZRtAxessG0mlFuF3F_CSWJBT3yl47yf=w675-h390-n-k-no",
	"Periyar National Park": "https://lh5.googleusercontent.com/p/AF1QipOy0-a-2jCEflOm4wAvsn7ARM26W-aJG9dpNLsa=w675-h390-n-k-no",
	"Srinagar": "https://cdn.tourradar.com/s3/tour/750x400/264967_65886474bc600.jpg",
	"Sonamarg": "https://lh5.googleusercontent.com/p/AF1QipOiX-B1t0ku_3TokD6v38yC4Di7zBXO-GTgkkWi=w743-h429-n-k-no",
	"Jammu": "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS-zyRhcq4wt7QM4FEJgfy4nJ6NEgVdX_tDxSYbCuEN70QKd_H3BSchVg3LkmjAndGyc-6A7o5eE73JJYlqB1x-DODclpZz4tBEggM3bg",
	"Gulmarg": "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTe5nSlJAgWpy7nPaLAVxWQTMVdxJlE5bVSxDLPr41b-Fwpaw7rs64kZRHVkktuDBT8fLBW63nND6yIMI7sWig9FqH1_-Km_RaBO-stzw",
	"Pahalgam": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQjTtAT0KhDsg7Oitvf_0YUY91AgzbDiTUw4IwqEi8LMHXHLQFplvOAy7SzKTgg6EdU7CYiywFCSdL_ExRIPsC2kbrQckeZr0LhHwNXwA",
	"Kargil": "https://lh5.googleusercontent.com/p/AF1QipPyBY0C3QQfT4kxY78fJiSGtw5FqmA42-DehTcK=w743-h429-n-k-no",
	"Bangalore": "https://lh5.googleusercontent.com/p/AF1QipNHvBtoADn3vXrixppCjv6seso2g07iqNJ-sbWS=w743-h429-n-k-no",
	"Chennai (Madras)": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRrJU5EgHBqNgfMlM7DGumQADE8BLF7CC4d8Ne-YDrs-JSkvhIskiX3C9Vgh89HfHq-ewqBe2peIOvaCOGls0l35JUyEjixvuVfNgrgxQ",
	"Mysuru": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSnjRmd9PR7HVyVEWTh0qChNsoHLdN8tW8kYoz7LA0_btU6osNQdmGZOBX3C5G6s98-ikl157kPGuXZiuCKH04iEg5qT_7B1pbY60CRuA",
	"Tirupathi": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSAXX3qTxKjLrcr4IcagH-QDnzEKeTtfRwuYV_wgq3S_85bM4qMxmjhYOrUhs6zkWyvaiYWGFdtA403d3MbPtYl7bTfaXgcizDhLogUmg",
	"Rameshwaram": "https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/rameswaram-temple-1656167436_f2c551193bb7d4bc6f70.webp",
	"Goa": "https://lh5.googleusercontent.com/p/AF1QipPYzTMa04TL6vtKx_9uavtElupMEPOY0MxBsEB1=w743-h429-n-k-no",
}

const SliderButtons = () => {
	const swiper = useSwiper()
	return (
		<div className="r-buttons flexCenter">
			<button onClick={() => swiper.slidePrev()}>&lt;</button>
			<button onClick={() => swiper.slideNext()}>&gt;</button>
		</div>
	)
}

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "black" }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block", background: "green" }}
			onClick={onClick}
		/>
	);
}

const Package = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];

	// const count = location.search.substring(1);
	const count = location.search.split('=')[1];

	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(true);

	const { data, loading } = useFetch(`${process.env.REACT_APP_LINK}/packages/find/${id}`);
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleOpen = (i) => {
		setSlideNumber(i);
		setOpen(true);
	};

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />
	};

	const handleMove = (direction) => {
		let newSlideNumber;

		if (direction === "l") {
			newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
		}
		setSlideNumber(newSlideNumber);
	};

	const [isExpanded, setIsExpanded] = useState(false);
	const [isExpanded1, setIsExpanded1] = useState(false);
	const [expandedDays, setExpandedDays] = useState({});

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
		// Reset all days to expanded or collapsed based on isExpanded
		const newExpandedDays = {};
		data1.days.forEach((_, index) => {
			newExpandedDays[index] = !isExpanded;
		});
		setExpandedDays(newExpandedDays);
	};
	const toggleExpand1 = () => {
		setIsExpanded1(!isExpanded1);
	};

	const toggleDescription = (index) => {
		setExpandedDays((prevState) => ({
			...prevState,
			[index]: !prevState[index],
		}));
	};

	if (data && data.Destination || data.imagelist) {
		const destinations = data.Destination.split(",");
		const dest1 = destinations.map((d) => d.trim());
		const dest = dest1.filter((d) => images[d]);
		console.log(dest);
		console.log(data.imagelist);
		console.log(images[dest[0]]);

		return (
			<div>
				<Navbar />
				<Header type="list" />
				{loading ? (
					"loading"
				) : (
					<div className={styles.packageContainer}>
						{/* {open && (
							<div className="slider">
								<FontAwesomeIcon
									icon={faCircleXmark}
									className="close"
									onClick={() => setOpen(false)}
								/>
								<FontAwesomeIcon
									icon={faCircleArrowLeft}
									className="arrow"
									onClick={() => handleMove("l")}
								/>
								<img src={data.img_link} alt="" className="sliderImg" />
								<div className="sliderWrapper">
									<img src={data.img_link} alt="" className="sliderImg" />
								</div>
								<FontAwesomeIcon
									icon={faCircleArrowRight}
									className="arrow"
									onClick={() => handleMove("r")}
								/>
							</div>
						)} */}
						<div className={styles.packageWrapper}>
							<img src={data.img_link} alt="" className={styles.packageImg} />
							<div className={styles.packageDetails}>
								<h1 className={styles.packageTitle}>{data.Package_name}</h1>
								<div className={styles.duration}>
									<span className={styles.destinations}>{data.Duration}</span>
									<span className={styles.destinations}>
										{data.Review}
										<IoIosStar></IoIosStar>
									</span>
								</div>
								<div>
									Start and end in{" "}
									<span className={styles.destinations}>
										<b>{data && data.Destination && data.Destination.split(",")[0]}</b>
									</span>
								</div>
								<div className={styles.contents}>
									<div className={styles.details}>
										<p>Tour Operator: </p>
										<span className={styles.detailsText}>{data.Operator}</span>
									</div>
									<div className={styles.details}>
										<p>Age Range: </p>
										<span className={styles.detailsText}>{data.Age_range}</span>
									</div>
									<div className={styles.details}>
										<p>Travel Style: </p>
										<span className={styles.detailsText}>{data.Main_style}</span>
									</div>
									<div className={styles.details}>
										<p>Opearted in: </p>
										<span className={styles.detailsText}>{data.Operated_in}</span>
									</div>
								</div>
								<span className={styles.packagePrice}>  ₹{data && data.Price && Number(data.Price.replace(/,/g, "") * (count > 1 ? count : 1)).toLocaleString()}</span>
								<button className={styles.bookNow}>Call now to enquire OR</button>
								<WhatsAppButton phoneNumber='1234567890' message={"Inquire about package:" + data.Package_name} />
							</div>
						</div>
						<div className={styles.imageContainer}>
							<h2>Places You'll See</h2>
							<div className={styles.packageImages}>
								{dest.length < 5 ?
									dest.map((location, i) =>
										<div className={styles.imageItem} key={i}>
											<img
												className={styles.image}
												src={images[location]}
												alt={dest[location]}
											/>
											<h4>{location}</h4>
										</div>
									) :
									<Swiper
										modules={[Autoplay, Navigation, Pagination, Scrollbar]}
										spaceBetween={10}
										slidesPerView={4}
										// navigation={true}
										// pagination={{ clickable: true }}
										scrollbar={{ draggable: true }}
										autoplay={{
											delay: 2500,
											disableOnInteraction: false,
										}}
									>
										{data.imagelist && data.imagelist.length > 1 ?
											(data.imagelist.map((img, i) =>
												<SwiperSlide key={i}>
													<div className={styles.imageItem} key={i}>
														<img className={styles.image} src={img} alt={`Destination ${i}`} />
														<h4>{data.Destination.split(',')[i]}</h4>
													</div>
												</SwiperSlide>
											)) : (
												dest.map((location, i) =>
													<SwiperSlide key={i}>
														<div className={styles.imageItem} key={i}>
															<img
																className={styles.image}
																src={images[location]}
																alt={dest[location]}
															/>
															<h4>{location}</h4>
														</div>
													</SwiperSlide>
												)
											)
										}
									</Swiper>
								}
							</div>
						</div>
						<div className={styles.packageInfo}>
							<div className={styles.itineraryContainer}>
								<h2>Itinerary</h2>
								<div className={styles.itinerary}>{data.itinerary || data1.itinerary}</div>
							</div>
							<div className={styles.introContainer}>
								<div className={styles.intro}>
									<h2>Introduction</h2>
									<p>{data.intro}</p>
								</div>
								<button onClick={toggleExpand}>
									{isExpanded ? "Hide All" : "Expand All"}
								</button>
								<div className={styles.days}>
									{data && data.days && data.days.map((day, i) => (
										<div key={i} className={styles.day}>
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
												}}
											>
												<h4>{day.title}</h4>
												<button onClick={() => toggleDescription(i)}>
													{expandedDays[i] ? (
														<IoIosArrowUp />
													) : (
														<IoIosArrowDown />
													)}
												</button>
											</div>
											<p style={{ display: expandedDays[i] ? "block" : "none" }}>
												{day.description}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className={styles.includedContainer}>
							<h2>What's Included</h2>
							<button onClick={toggleExpand1}>
								{isExpanded1 ? "Hide All" : "Expand All"}
							</button>
							<div className={styles.included}>
								{included.map((item, i) => (
									<div key={i} className={styles.includedItem}>
										<div style={{ display: 'flex', gap: '10px' }}>
											{item.isIncluded ? (
												<FaCheckCircle style={{ color: 'green', fontSize: '24px' }} />
											) : (
												<FaTimesCircle style={{ color: 'red', fontSize: '24px' }} />
											)}
											<h4>{item.title}</h4>
										</div>
										<p style={{ display: isExpanded1 ? "block" : "none" }}>
											{item.description}
										</p>
									</div>
								))}
							</div>
						</div>
						<br />
						<br />
						<br />
						<MailList />
						<br /><br />
						<Footer />
					</div>
				)}
				{/* {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />} */}
			</div>
		);
	}
};

export default Package;
