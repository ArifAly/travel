// =====================
// TOUR DATA
// =====================
const TOURS = [
  {
    id: 1,
    title: "Alpine Adventure Trek",
    location: "Swiss Alps, Switzerland",
    category: "adventure",
    days: 7,
    price: 1299,
    rating: 5.0,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900",
    description: "Embark on the ultimate alpine adventure through Switzerland's most breathtaking mountain landscapes. Traverse iconic peaks, crystal-clear lakes, and charming villages as you immerse yourself in the raw beauty of the Swiss Alps. This carefully crafted trekking experience combines thrilling outdoor activities with authentic Swiss culture and world-class hospitality.",
    highlights: [
      "Trek to the Jungfraujoch — Top of Europe",
      "Paragliding over Interlaken",
      "Visit Grindelwald and Lauterbrunnen valleys",
      "Scenic train ride on the Bernina Express",
      "Swiss cheese and chocolate tasting",
      "Stay in mountain lodge with panoramic views",
      "Guided glacier walk on Aletsch Glacier",
      "Fondue dinner with local mountain guides"
    ],
    stats: { duration: "7 Days", groupSize: "Max 12", difficulty: "Moderate", altitude: "3,454m" },
    itinerary: [
      { day: 1, title: "Arrival in Zurich — Welcome to Switzerland", desc: "Arrive at Zurich International Airport. Private transfer to your luxury hotel in Interlaken. Evening welcome dinner featuring traditional Swiss fondue with your group and guides. Trip briefing and equipment check.", activities: ["Airport Transfer", "Hotel Check-in", "Welcome Dinner", "Trip Briefing"], meals: ["Dinner"] },
      { day: 2, title: "Jungfraujoch — Top of Europe", desc: "Take the legendary cogwheel train to Jungfraujoch at 3,454m — the highest railway station in Europe. Explore the Ice Palace, walk on the glacier, and enjoy panoramic views of the Aletsch Glacier. Afternoon descent to Grindelwald for exploration.", activities: ["Cogwheel Train", "Ice Palace", "Glacier Walk", "Panoramic Views"], meals: ["Breakfast", "Lunch"] },
      { day: 3, title: "Lauterbrunnen Valley & Trümmelbach Falls", desc: "Hike through the stunning Lauterbrunnen valley, home to 72 waterfalls. Visit the dramatic Trümmelbach Falls inside the mountain. Afternoon option: paragliding over Interlaken with certified instructors (additional cost).", activities: ["Valley Hiking", "Waterfall Tour", "Optional Paragliding", "Village Exploration"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Grindelwald First — Mountain Activities", desc: "Take the gondola to Grindelwald First (2,168m). Experience the thrilling First Cliff Walk, First Flyer zip line, and mountain cart descents. Spectacular views of the Eiger North Face throughout the day.", activities: ["Gondola Ride", "Cliff Walk", "First Flyer", "Mountain Cart"], meals: ["Breakfast", "Lunch"] },
      { day: 5, title: "Bernina Express Scenic Rail Journey", desc: "Board the UNESCO-listed Bernina Express for one of the world's most scenic train journeys. Cross the Landwasser Viaduct, traverse Pontresina, and arrive in St. Moritz for an afternoon of luxury exploration.", activities: ["Bernina Express", "Viaduct Crossing", "St. Moritz Exploration", "Luxury Shopping"], meals: ["Breakfast", "Dinner"] },
      { day: 6, title: "Aletsch Glacier Guided Trek", desc: "Full-day guided trek on the mighty Aletsch Glacier — the largest glacier in the Alps. Your expert mountain guide will lead you safely across the ice with crampons provided. Evening farewell celebration dinner.", activities: ["Glacier Trek", "Crampons Experience", "Ice Cave Visit", "Farewell Dinner"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 7, title: "Departure Day", desc: "After breakfast, private transfer to Zurich Airport for your onward journey. Take home memories of snow-capped peaks, mountain adventures, and authentic Swiss hospitality that will last a lifetime.", activities: ["Breakfast", "Hotel Checkout", "Airport Transfer"], meals: ["Breakfast"] }
    ],
    includes: ["7 nights mountain lodge accommodation", "Daily breakfast + selected meals as listed", "Professional UIAGM-certified mountain guide", "All internal train and cable car passes", "Glacier trek crampons and equipment", "Airport transfers (arrival and departure)", "Welcome and farewell dinners", "24/7 emergency support"],
    excludes: ["International flights", "Travel insurance (required)", "Optional activities (paragliding, etc.)", "Personal expenses and tips", "Alcoholic beverages", "Single room supplement (+$280)"]
  },
  {
    id: 2,
    title: "Bali Island Paradise",
    location: "Bali, Indonesia",
    category: "beach",
    days: 10,
    price: 1599,
    rating: 4.5,
    reviews: 214,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900",
    description: "Discover the magical island of Bali — where ancient temples meet pristine beaches, lush rice terraces cascade down volcanic hillsides, and the warmth of Balinese culture embraces you at every turn. From surfing the legendary waves of Kuta to meditating in sacred Ubud, this 10-day journey captures the very soul of the Island of the Gods.",
    highlights: [
      "Private villa with infinity pool overlooking rice fields",
      "Sunrise hike up Mount Batur volcano",
      "Traditional Balinese cooking class in Ubud",
      "Sunset at Tanah Lot sea temple",
      "Surfing lesson at Kuta Beach",
      "Tegalalang Rice Terrace trek",
      "Balinese massage and spa experience",
      "Private beach dinner under the stars"
    ],
    stats: { duration: "10 Days", groupSize: "Max 14", difficulty: "Easy", altitude: "1,717m" },
    itinerary: [
      { day: 1, title: "Arrival in Denpasar — Welcome to Bali", desc: "Arrive at Ngurah Rai International Airport. Traditional flower garland welcome ceremony. Transfer to your private villa in Seminyak. Evening sunset cocktails at Potato Head Beach Club.", activities: ["Airport Welcome", "Villa Check-in", "Sunset Cocktails"], meals: ["Dinner"] },
      { day: 2, title: "Seminyak & Kuta Beach — Sun and Surf", desc: "Morning surf lesson with certified instructors at Kuta Beach — suitable for complete beginners. Afternoon beach relaxation. Evening explore Seminyak's world-famous restaurant and bar scene.", activities: ["Surf Lesson", "Beach Time", "Seminyak Dining", "Nightlife Exploration"], meals: ["Breakfast"] },
      { day: 3, title: "Ubud — Heart of Balinese Culture", desc: "Transfer to Ubud, Bali's cultural heartland. Visit the Sacred Monkey Forest, Ubud Palace, and the vibrant traditional market. Afternoon traditional Balinese dance performance.", activities: ["Monkey Forest", "Ubud Palace", "Traditional Market", "Dance Show"], meals: ["Breakfast", "Lunch"] },
      { day: 4, title: "Tegalalang Rice Terraces & Cooking Class", desc: "Morning trek through the stunning Tegalalang UNESCO rice terraces. Afternoon traditional Balinese cooking class — learn to make sate, nasi goreng, and lawar. Enjoy your creations for dinner!", activities: ["Rice Terrace Trek", "Cooking Class", "Market Visit", "Dinner from class"], meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Mount Batur Sunrise Volcano Hike", desc: "3am departure for the legendary Mount Batur sunrise hike. Reach the summit at 1,717m just as the sun rises over Mount Agung and the caldera lake. Scrambled eggs cooked on volcanic steam at the top!", activities: ["Pre-Dawn Hike", "Summit Sunrise", "Volcano Eggs", "Caldera Views"], meals: ["Breakfast"] },
      { day: 6, title: "Tanah Lot & West Bali Temples", desc: "Full-day temple tour visiting the iconic sea temple of Tanah Lot at sunset. Also explore Pura Taman Ayun (Royal Temple) and Pura Batukaru on Mount Batukaru, surrounded by ancient jungle.", activities: ["Tanah Lot Temple", "Taman Ayun Temple", "Jungle Walk", "Sunset Photography"], meals: ["Breakfast", "Lunch"] },
      { day: 7, title: "Nusa Penida Island Day Trip", desc: "Full-day island hopping to Nusa Penida by speedboat. Visit the famous Kelingking cliff viewpoint, Angel's Billabong natural pool, Broken Beach, and Crystal Bay for snorkeling.", activities: ["Speedboat", "Kelingking Cliff", "Natural Pools", "Snorkeling"], meals: ["Breakfast", "Lunch"] },
      { day: 8, title: "Spa Day & Balinese Wellness", desc: "Morning at leisure. Afternoon 3-hour traditional Balinese spa ritual: full body massage, flower petal bath, and Boreh herbal body scrub. Evening private beach dinner with live acoustic music.", activities: ["Balinese Massage", "Herbal Treatment", "Flower Bath", "Private Beach Dinner"], meals: ["Breakfast", "Dinner"] },
      { day: 9, title: "Amed & East Bali Snorkeling", desc: "Drive to East Bali through volcanic landscape. Snorkeling and diving at Amed's famous coral reefs — home to the USAT Liberty shipwreck. Visit traditional salt-making villages.", activities: ["Snorkeling", "USAT Liberty Wreck", "Salt Village", "Local Seafood Lunch"], meals: ["Breakfast", "Lunch"] },
      { day: 10, title: "Farewell & Departure", desc: "Final morning at leisure to enjoy your villa pool and Bali's magic one last time. Transfer to Denpasar Airport for your departure. Until we meet again — Sampai Jumpa!", activities: ["Free Morning", "Last Swim", "Airport Transfer"], meals: ["Breakfast"] }
    ],
    includes: ["10 nights private villa accommodation", "Daily breakfast + selected meals", "Certified surf instructor (Day 2)", "All temple entrance fees", "Traditional cooking class", "Mount Batur volcano hike guide", "Nusa Penida day trip by speedboat", "3-hour Balinese spa treatment", "All transfers and air-con transport"],
    excludes: ["International flights", "Travel insurance (required)", "Visa on Arrival ($35)", "Optional diving courses", "Personal shopping expenses", "Single villa supplement (+$420)"]
  },
  {
    id: 3,
    title: "Japanese Cultural Journey",
    location: "Kyoto & Tokyo, Japan",
    category: "cultural",
    days: 8,
    price: 2199,
    rating: 5.0,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=900",
    description: "Journey through the captivating contrasts of Japan — from ancient imperial temples and zen gardens of Kyoto to the dazzling neon-lit streets and futuristic skyline of Tokyo. This thoughtfully curated 8-day cultural immersion takes you beyond the tourist trail, into the living traditions of one of the world's most fascinating civilisations.",
    highlights: [
      "Private tea ceremony with a kimono-clad tea master",
      "Fushimi Inari shrine thousand torii gates at dawn",
      "Bullet train (Shinkansen) journey Tokyo-Kyoto",
      "Stay in a traditional Japanese Ryokan inn",
      "Arashiyama Bamboo Grove at sunrise",
      "Tsukiji outer market sushi breakfast tour",
      "Nara deer park and Todai-ji temple",
      "Tokyo TeamLab Planets digital art museum"
    ],
    stats: { duration: "8 Days", groupSize: "Max 10", difficulty: "Easy", altitude: "599m" },
    itinerary: [
      { day: 1, title: "Arrival in Tokyo — Konnichiwa Japan!", desc: "Arrive at Narita or Haneda Airport. Welcome by your English-Japanese bilingual guide. Transfer to your hotel in Shinjuku. Evening stroll through Shinjuku's dazzling Golden Gai alleyways and izakaya bars.", activities: ["Airport Welcome", "Hotel Check-in", "Shinjuku Exploration", "Izakaya Dinner"], meals: ["Dinner"] },
      { day: 2, title: "Tokyo Highlights — Past Meets Future", desc: "Full day Tokyo exploration: Senso-ji Temple in Asakusa, Akihabara electronics district, Shibuya Crossing (world's busiest intersection), Harajuku's Takeshita Street, and dinner in Ginza.", activities: ["Senso-ji Temple", "Shibuya Crossing", "Harajuku Street", "Akihabara"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "TeamLab & Tsukiji Market", desc: "Early morning Tsukiji outer market sushi breakfast tour with your guide. Afternoon at TeamLab Planets — Tokyo's spectacular digital art museum where you walk through immersive art installations. Evening sushi-making class.", activities: ["Tsukiji Market Tour", "TeamLab Planets", "Sushi Making Class", "Digital Art"], meals: ["Breakfast", "Lunch"] },
      { day: 4, title: "Shinkansen to Kyoto — The Ancient Capital", desc: "Board the famous Shinkansen bullet train to Kyoto. Check in to your traditional Ryokan inn. Afternoon visit to Kinkaku-ji (Golden Pavilion) and Ryoan-ji zen rock garden. Traditional Kaiseki multi-course dinner.", activities: ["Bullet Train", "Ryokan Check-in", "Golden Pavilion", "Zen Garden", "Kaiseki Dinner"], meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "Fushimi Inari & Nishiki Market", desc: "Pre-dawn departure to Fushimi Inari Shrine to experience the magical thousand torii gates in golden morning light without the crowds. Afternoon explore Nishiki Market — Kyoto's vibrant covered street market.", activities: ["Dawn Torii Gates", "Fushimi Inari", "Nishiki Market", "Street Food Tour"], meals: ["Breakfast", "Lunch"] },
      { day: 6, title: "Arashiyama & Tea Ceremony", desc: "Early morning Arashiyama Bamboo Grove walk at sunrise. Visit Tenryu-ji Zen garden. Afternoon traditional tea ceremony in a private tatami room with a master tea practitioner, wearing kimono.", activities: ["Bamboo Grove", "Tenryu-ji Garden", "Tea Ceremony", "Kimono Wearing"], meals: ["Breakfast", "Lunch"] },
      { day: 7, title: "Nara Day Trip — Sacred Deer Park", desc: "Day trip to Nara — Japan's first permanent capital. Roam freely with the sacred, free-roaming deer in Nara Park. Visit the awe-inspiring Todai-ji temple housing Japan's largest bronze Buddha (15m tall).", activities: ["Nara Deer Park", "Todai-ji Temple", "Giant Buddha", "Kasuga Shrine"], meals: ["Breakfast", "Dinner"] },
      { day: 8, title: "Farewell & Departure from Osaka", desc: "Morning at leisure for last-minute shopping in Kyoto's Gion district. Transfer to Osaka Kansai Airport for departure. Sayonara — until Japan calls you back!", activities: ["Gion Shopping", "Last Temple Visit", "Airport Transfer"], meals: ["Breakfast"] }
    ],
    includes: ["4 nights Tokyo boutique hotel", "3 nights traditional Ryokan inn (Kyoto)", "Daily breakfast + selected meals", "Shinkansen bullet train pass", "English-speaking cultural guide throughout", "Tea ceremony in private tatami room", "TeamLab Planets entrance", "Tsukiji market food tour", "All entrance fees to temples and sites"],
    excludes: ["International flights", "Travel insurance (required)", "Japan Rail Pass upgrade", "Personal shopping expenses", "Optional activities", "Single supplement (+$380)"]
  },
  {
    id: 4,
    title: "Dubai Luxury Escape",
    location: "Dubai, UAE",
    category: "luxury",
    days: 6,
    price: 3499,
    rating: 5.0,
    reviews: 97,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900",
    description: "Experience the pinnacle of luxury travel in Dubai — a city where architectural marvels pierce the sky, golden deserts shimmer at the edge of the city, and world-class hospitality sets the global standard. Stay in the iconic Burj Al Arab, dine at Michelin-star restaurants, and discover the authentic soul of old Dubai. This is luxury travel, redefined.",
    highlights: [
      "Stay at the iconic 7-star Burj Al Arab hotel",
      "Private desert safari with Bedouin dinner under stars",
      "Helicopter tour over the Palm Jumeirah and skyline",
      "Burj Khalifa At the Top — world's highest observation deck",
      "Private yacht cruise along Dubai Marina",
      "Gold Souk and Spice Souk walking tour",
      "Ski Dubai — indoor ski resort in the desert",
      "Private chef cooking class at a royal villa"
    ],
    stats: { duration: "6 Days", groupSize: "Max 8", difficulty: "Easy", altitude: "828m" },
    itinerary: [
      { day: 1, title: "Arrival — Welcome to the City of Gold", desc: "VIP airport meet-and-greet with private limousine transfer to the Burj Al Arab. Champagne welcome on arrival. Afternoon at leisure to explore the iconic hotel. Evening dinner at Al Mahara underwater restaurant.", activities: ["VIP Transfer", "Burj Al Arab Check-in", "Champagne Welcome", "Underwater Dining"], meals: ["Dinner"] },
      { day: 2, title: "Burj Khalifa & Downtown Dubai", desc: "Visit the world's tallest building — Burj Khalifa At the Top (floors 124 & 148). Explore the Dubai Mall (world's largest). Evening Dubai Fountain show from a private waterfront terrace with cocktails.", activities: ["Burj Khalifa Observation", "Dubai Mall", "Fountain Show", "Sky Views"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Desert Safari & Bedouin Experience", desc: "Afternoon private desert safari in luxury 4x4s: dune bashing, sandboarding, camel riding. Exclusive private Bedouin camp with henna painting, falconry, and a lavish BBQ dinner under a billion stars.", activities: ["Dune Bashing", "Sandboarding", "Camel Riding", "Falconry", "Bedouin Dinner"], meals: ["Breakfast", "Dinner"] },
      { day: 4, title: "Helicopter Tour & Palm Jumeirah", desc: "Morning private helicopter tour over Dubai's iconic skyline — the Palm, World Islands, Burj Khalifa, and coastline. Afternoon visit to Atlantis Aquaventure Waterpark or private beach. Evening yacht cruise.", activities: ["Helicopter Tour", "Palm Jumeirah", "Private Yacht", "Waterpark Option"], meals: ["Breakfast", "Lunch"] },
      { day: 5, title: "Old Dubai & Ski Dubai", desc: "Morning authentic Dubai: abra boat across Dubai Creek, Gold Souk, and Spice Souk with a private guide. Afternoon: Ski Dubai — hit the slopes at the world's largest indoor ski resort inside a shopping mall, in the middle of the desert!", activities: ["Gold Souk", "Spice Souk", "Dubai Creek Abra", "Ski Dubai"], meals: ["Breakfast", "Dinner"] },
      { day: 6, title: "Spa Morning & Departure", desc: "Morning indulge in a 2-hour Hammam spa treatment at the Burj Al Arab's exclusive Talise Spa. Farewell Michelin-star brunch. Private limousine transfer to Dubai International Airport. Ma'a salama!", activities: ["Hammam Spa", "Farewell Brunch", "Limousine Transfer"], meals: ["Breakfast", "Brunch"] }
    ],
    includes: ["6 nights Burj Al Arab (Junior Suite)", "Daily breakfast + selected meals", "Private limousine transfers throughout", "Helicopter city tour (40 min)", "Private desert safari + Bedouin camp dinner", "Burj Khalifa At the Top tickets", "Private yacht cruise (2 hours)", "2-hour Hammam spa treatment", "Gold & Spice Souk guided tour"],
    excludes: ["International flights", "Travel insurance (recommended)", "Additional dining and drinks", "Ski equipment rental at Ski Dubai", "Personal shopping", "Visa fees (if applicable)"]
  },
  {
    id: 5,
    title: "Patagonia Wild Expedition",
    location: "Patagonia, Argentina & Chile",
    category: "adventure",
    days: 12,
    price: 2899,
    rating: 4.5,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900",
    description: "Venture to the raw, wind-swept edge of the world where jagged granite towers pierce the sky, ancient glaciers calve into turquoise lakes, and condors ride thermals above primeval landscapes. Patagonia is one of Earth's last true wildernesses — and our 12-day expedition takes you deep into its heart across both the Chilean and Argentine sides of this magnificent region.",
    highlights: [
      "Trek the legendary W-Circuit in Torres del Paine",
      "Witness the sunrise at the iconic Torres del Paine granite towers",
      "Perito Moreno Glacier ice-trekking with crampons",
      "Kayaking on Lake Grey among floating icebergs",
      "Wildlife watching: condors, pumas, guanacos, and flamingos",
      "Border crossing into Chile via Los Glaciares National Park",
      "Camping under the Milky Way in pristine wilderness",
      "Authentic Argentine asado gaucho dinner"
    ],
    stats: { duration: "12 Days", groupSize: "Max 10", difficulty: "Challenging", altitude: "2,400m" },
    itinerary: [
      { day: 1, title: "Arrival in El Calafate, Argentina", desc: "Arrive in El Calafate, gateway to the glaciers. Equipment check and expedition briefing. Evening gaucho asado dinner at a traditional estancia with folk music performance.", activities: ["Airport Transfer", "Equipment Check", "Expedition Briefing", "Gaucho Dinner"], meals: ["Dinner"] },
      { day: 2, title: "Perito Moreno Glacier — Ice Trekking", desc: "Full day at the magnificent Perito Moreno Glacier — one of the world's few advancing glaciers. Mini-trekking with crampons on the glacier surface with expert ice guides. Watch and hear spectacular ice calvings.", activities: ["Boat to Glacier", "Crampon Trek", "Ice Cave Exploration", "Calving Viewpoint"], meals: ["Breakfast", "Lunch"] },
      { day: 3, title: "Los Glaciares National Park — Laguna de los Tres", desc: "Epic full-day hike to Laguna de los Tres at the base of Mount Fitz Roy (3,405m). The dramatic granite spire reflected in the milky glacial lake is one of Patagonia's most iconic views.", activities: ["Fitz Roy Hike", "Laguna de los Tres", "Granite Tower Views", "Wildlife Spotting"], meals: ["Breakfast", "Packed Lunch"] },
      { day: 4, title: "Border Crossing to Chile — Torres del Paine", desc: "Scenic drive through steppe landscapes and border crossing into Chile. Arrive at Torres del Paine National Park — a UNESCO Biosphere Reserve. Briefing for the W-Circuit trek beginning tomorrow.", activities: ["Border Crossing", "Scenic Drive", "Park Arrival", "Trek Preparation"], meals: ["Breakfast", "Dinner"] },
      { day: 5, title: "W-Circuit — Mirador Las Torres (Day 1)", desc: "Begin the legendary W-Circuit trek. Today's highlight: the long hike to the iconic Mirador Las Torres — watching the granite towers glow at sunrise is an experience that defies description.", activities: ["Torres Hike", "Granite Tower Sunrise", "Mirador Viewpoint", "Camp Setup"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 6, title: "Valle del Francés — Hanging Glaciers", desc: "Trek through the Valle del Francés (Valley of the French) — a dramatic amphitheater of hanging glaciers and rock faces. Listen for the thunderous boom of glacier and rock avalanches echoing through the valley.", activities: ["French Valley Hike", "Hanging Glaciers", "Condor Spotting", "Panoramic Views"], meals: ["Breakfast", "Packed Lunch", "Dinner"] },
      { day: 7, title: "Grey Glacier — Kayaking Among Icebergs", desc: "Trek to the breathtaking Grey Glacier and brilliant turquoise Lake Grey. Afternoon kayaking through floating icebergs calved from the glacier. Camp on the lakeshore with glacier views.", activities: ["Grey Glacier Trek", "Iceberg Kayaking", "Lake Camp", "Photography"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 8, title: "W-Circuit Completion — Paine Grande", desc: "Complete the W-Circuit trekking back through the park. Hot showers and comfort after days of camping! Evening rest and celebrate the achievement with your trekking companions.", activities: ["Final Trek Leg", "Circuit Completion", "Hot Showers", "Celebration Dinner"], meals: ["Breakfast", "Lunch", "Dinner"] },
      { day: 9, title: "Puerto Natales — Rest & Exploration", desc: "Leisure day in the charming town of Puerto Natales — gateway to Torres del Paine. Browse local artisan shops, visit the Cueva del Milodón prehistoric cave, and enjoy a proper restaurant meal.", activities: ["Puerto Natales Walk", "Milodón Cave", "Artisan Shopping", "Restaurant Dinner"], meals: ["Breakfast", "Dinner"] },
      { day: 10, title: "Tierra del Fuego — End of the World", desc: "Day trip to Tierra del Fuego National Park — the southernmost national park on Earth. Hike trails along the Beagle Channel, visit the Fin del Mundo (End of the World) train, and feel truly at the edge of the planet.", activities: ["End of World Train", "Beagle Channel", "Southern Hike", "Wildlife"], meals: ["Breakfast", "Lunch"] },
      { day: 11, title: "Ushuaia — The World's Southernmost City", desc: "Explore Ushuaia, proudly claiming the title of world's southernmost city. Visit the prison museum, take a boat tour of the Beagle Channel to spot penguins and sea lions. Spectacular farewell dinner overlooking the channel.", activities: ["Prison Museum", "Beagle Channel Boat", "Penguin Spotting", "Farewell Dinner"], meals: ["Breakfast", "Dinner"] },
      { day: 12, title: "Departure from Ushuaia", desc: "Final morning in Patagonia. Last views of mountains and glaciers before your flight out of Ushuaia back to Buenos Aires or Santiago. This wilderness will stay with you forever.", activities: ["Hotel Checkout", "Airport Transfer", "Departure"], meals: ["Breakfast"] }
    ],
    includes: ["4 nights hotel accommodation", "7 nights tented camp accommodation", "All meals during trek (Days 5–8)", "Daily breakfast throughout", "Professional Patagonia trekking guide", "Crampon ice trek on Perito Moreno", "Kayaking on Lake Grey", "All park entrance fees", "Camping equipment (tent, sleeping bag, mat)"],
    excludes: ["International flights to/from El Calafate", "Travel insurance (required)", "Personal trekking gear (boots, layers)", "Optional horseback riding", "Alcoholic beverages", "Single accommodation supplement (+$560)"]
  },
  {
    id: 6,
    title: "Greek Islands Odyssey",
    location: "Santorini, Mykonos & Athens, Greece",
    category: "cultural beach",
    days: 9,
    price: 2099,
    rating: 5.0,
    reviews: 241,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=900",
    description: "Set sail on an unforgettable odyssey through the sun-drenched Greek islands. From the iconic white-and-blue clifftop villages of Santorini perched above the ancient volcanic caldera, to the glamorous beaches and windmills of Mykonos, and the millennia of history in Athens — this 9-day journey captures the eternal magic of Greece in all its glory.",
    highlights: [
      "Watch the world-famous Santorini caldera sunset from Oia",
      "Sail the Aegean on a private yacht day trip",
      "Guided tour of the Acropolis and Parthenon",
      "Catamaran cruise around Santorini's caldera",
      "Wine tasting at a Santorini volcanic winery",
      "Mykonos windmills and Little Venice at sunset",
      "Delos island archaeological tour",
      "Greek cooking class with a local family"
    ],
    stats: { duration: "9 Days", groupSize: "Max 12", difficulty: "Easy", altitude: "156m" },
    itinerary: [
      { day: 1, title: "Arrival in Athens — The Ancient Capital", desc: "Arrive at Athens International Airport. Transfer to your boutique hotel in the historic Plaka district, at the foot of the Acropolis. Evening introductory walk through Plaka's charming lanes and dinner at a traditional taverna.", activities: ["Hotel Transfer", "Plaka Walk", "Taverna Dinner", "Acropolis Night View"], meals: ["Dinner"] },
      { day: 2, title: "Athens — Acropolis & Ancient Agora", desc: "Morning guided tour of the Acropolis (UNESCO World Heritage Site) and the magnificent Parthenon. Explore the Ancient Agora — birthplace of democracy. Afternoon New Acropolis Museum. Evening rooftop dinner.", activities: ["Acropolis Tour", "Parthenon", "Ancient Agora", "New Museum", "Rooftop Dinner"], meals: ["Breakfast", "Dinner"] },
      { day: 3, title: "Flight to Santorini — The Jewel of the Aegean", desc: "Morning flight to Santorini. Transfer to your clifftop cave hotel in Imerovigli with caldera views. Afternoon explore the charming village. Sunset wine tasting at an estate winery overlooking the volcano.", activities: ["Flight Transfer", "Cave Hotel Check-in", "Village Stroll", "Wine Tasting", "Caldera Sunset"], meals: ["Breakfast"] },
      { day: 4, title: "Santorini Caldera Catamaran Cruise", desc: "Full-day catamaran sailing cruise around Santorini's caldera. Swim in the natural hot springs at the active volcano, snorkel in crystal waters, visit the Red and White beaches, and enjoy a BBQ lunch on board.", activities: ["Catamaran Sail", "Hot Springs", "Snorkeling", "Red Beach", "BBQ Lunch"], meals: ["Breakfast", "Lunch"] },
      { day: 5, title: "Oia at Sunrise & Black Sand Beaches", desc: "Pre-dawn walk to Oia — the most photographed village in Greece — to watch the sunrise paint the white houses pink and gold. Afternoon at Perissa and Perivolos black volcanic sand beaches.", activities: ["Oia Sunrise", "Photography", "Black Sand Beach", "Beach Club"], meals: ["Breakfast", "Dinner"] },
      { day: 6, title: "Ferry to Mykonos — The Island of Winds", desc: "Morning ferry from Santorini to glamorous Mykonos. Check in to your boutique hotel. Afternoon explore the iconic Mykonos Town (Chora): the famous windmills, Little Venice, and the narrow whitewashed labyrinthine streets.", activities: ["Ferry Journey", "Windmills Visit", "Little Venice", "Chora Exploration"], meals: ["Breakfast"] },
      { day: 7, title: "Delos Archaeological Island Tour", desc: "Morning boat to the sacred island of Delos — mythical birthplace of Apollo and Artemis, and one of the most important archaeological sites in Greece. Afternoon leisure on Mykonos' famous beaches: Psarou, Paradise, or Super Paradise.", activities: ["Delos Ruins Tour", "Apollo Sanctuary", "Beach Afternoon", "Sunset Cocktails"], meals: ["Breakfast", "Lunch"] },
      { day: 8, title: "Mykonos Beach Day & Greek Cooking Class", desc: "Morning beach day at the stunning Ornos or Agios Ioannis beach. Afternoon traditional Greek cooking class with a local family: learn to make spanakopita, moussaka, and baklava. Feast on your creations for dinner!", activities: ["Beach Morning", "Cooking Class", "Moussaka Making", "Farewell Dinner"], meals: ["Breakfast", "Dinner"] },
      { day: 9, title: "Departure Day", desc: "Final morning coffee at a clifftop café watching the Aegean sparkle. Flight from Mykonos to Athens for your international connection. Carry the blue and white of Greece in your heart always. Yassas!", activities: ["Farewell Coffee", "Airport Transfer", "Athens Connection"], meals: ["Breakfast"] }
    ],
    includes: ["2 nights Athens boutique hotel", "3 nights Santorini clifftop cave hotel", "3 nights Mykonos boutique hotel", "Daily breakfast + selected meals", "Domestic flights (Athens–Santorini, Mykonos–Athens)", "Santorini–Mykonos ferry tickets", "Acropolis & Ancient Agora guided tour", "Caldera catamaran cruise", "Delos archaeological guided tour", "Greek cooking class with local family"],
    excludes: ["International flights", "Travel insurance (recommended)", "Optional day trips", "Personal expenses", "Alcoholic beverages", "Single supplement (+$460)"]
  }
];

// =====================
// GOOGLE SHEETS CONFIG
// ----------------------
// Paste your published Google Sheet CSV URL below.
// See SHEETS_SETUP.txt for step-by-step instructions.
// =====================
const GOOGLE_SHEET_URL = 'YOUR_GOOGLE_SHEET_CSV_URL';

// =====================
// STATE
// =====================
let selectedTourId = null;
let calendarYear = new Date().getFullYear();
let calendarMonth = new Date().getMonth();
let selectedDate = null;
let pax = { adults: 2, children: 0, infants: 0 };

// Cache: { tourId: { 'YYYY-MM-DD': { status, spots, notes } } }
let availabilityCache = null;    // null = not yet fetched
let fetchPromise = null;         // deduplicate concurrent fetches

// =====================
// FETCH AVAILABILITY FROM GOOGLE SHEETS
// =====================
async function fetchAvailability() {
  // Return cached data immediately if already loaded
  if (availabilityCache !== null) return availabilityCache;

  // Check admin-managed availability first
  const adminAvail = localStorage.getItem('wv_availability');
  if (adminAvail) {
    try {
      const parsed = JSON.parse(adminAvail);
      if (parsed && Object.keys(parsed).length > 0) {
        availabilityCache = {};
        Object.entries(parsed).forEach(([tid, dates]) => {
          const tourId = parseInt(tid);
          availabilityCache[tourId] = {};
          Object.entries(dates).forEach(([date, value]) => {
            // New format: array of slots — aggregate to single status for calendar
            if (Array.isArray(value)) {
              if (value.length === 0) return;
              const statuses  = value.map(s => s.status || 'available');
              let aggStatus   = 'sold-out';
              if (statuses.includes('available'))     aggStatus = 'available';
              else if (statuses.includes('limited'))  aggStatus = 'limited';
              const totalSpots = value.reduce((sum, s) => sum + (parseInt(s.spots) || 0), 0);
              const times = value.filter(s => s.time).map(s => s.time).join(', ');
              const notes = times ? `Departures: ${times}` : (value[0].notes || '');
              availabilityCache[tourId][date] = { status: aggStatus, spots: totalSpots, notes };
            } else {
              // Old flat format — use as-is
              availabilityCache[tourId][date] = value;
            }
          });
        });
        return availabilityCache;
      }
    } catch(e) {}
  }

  // Deduplicate: if a fetch is already in flight, wait for it
  if (fetchPromise) return fetchPromise;

  // Sheet not configured — use demo data silently
  if (GOOGLE_SHEET_URL === 'YOUR_GOOGLE_SHEET_CSV_URL') {
    availabilityCache = buildDemoAvailability();
    return availabilityCache;
  }

  fetchPromise = (async () => {
    try {
      const res = await fetch(GOOGLE_SHEET_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const csv = await res.text();
      availabilityCache = parseSheetCSV(csv);
    } catch (err) {
      console.warn('⚠️ Could not load availability sheet. Using demo data.', err);
      availabilityCache = buildDemoAvailability();
    }
    fetchPromise = null;
    return availabilityCache;
  })();

  return fetchPromise;
}

// Parse the CSV exported from Google Sheets
// Expected columns: Tour ID | Tour Name | Date (YYYY-MM-DD) | Status | Spots | Notes
function parseSheetCSV(csv) {
  const result = {};
  const rows = csv.trim().split('\n');

  // Skip header row (row 0)
  for (let i = 1; i < rows.length; i++) {
    const cols = splitCSVRow(rows[i]);
    if (cols.length < 4) continue;

    const tourId  = parseInt(cols[0]);
    const date    = cols[2].trim();                         // YYYY-MM-DD
    const status  = cols[3].trim().toLowerCase();           // available / limited / sold-out
    const spots   = parseInt(cols[4]) || 0;
    const notes   = cols[5] ? cols[5].trim() : '';

    if (!tourId || !date || !status) continue;
    if (!['available','limited','sold-out'].includes(status)) continue;

    if (!result[tourId]) result[tourId] = {};
    result[tourId][date] = { status, spots, notes };
  }

  return result;
}

// Handles quoted fields and commas inside quotes
function splitCSVRow(row) {
  const cols = [];
  let cur = '', inQuote = false;
  for (let i = 0; i < row.length; i++) {
    if (row[i] === '"') { inQuote = !inQuote; continue; }
    if (row[i] === ',' && !inQuote) { cols.push(cur); cur = ''; continue; }
    cur += row[i];
  }
  cols.push(cur);
  return cols;
}

// Fallback demo data (used when sheet not configured or fetch fails)
function buildDemoAvailability() {
  const cache = {};
  const today = new Date();
  TOURS.forEach(tour => {
    cache[tour.id] = {};
    for (let m = 0; m < 4; m++) {
      const yr = today.getFullYear() + Math.floor((today.getMonth() + m) / 12);
      const mo = (today.getMonth() + m) % 12;
      const days = new Date(yr, mo + 1, 0).getDate();
      for (let d = 1; d <= days; d++) {
        const dt = new Date(yr, mo, d);
        if (dt <= today) continue;
        const hash = (tour.id * 17 + d * 7 + mo * 31) % 10;
        const key = `${yr}-${String(mo+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
        if (hash < 4)      cache[tour.id][key] = { status: 'available', spots: 8 + (hash % 4), notes: '' };
        else if (hash < 6) cache[tour.id][key] = { status: 'limited',   spots: 1 + (hash % 3), notes: 'Limited spots' };
        else if (hash < 7) cache[tour.id][key] = { status: 'sold-out',  spots: 0,               notes: 'Fully booked' };
      }
    }
  });
  return cache;
}

// Convenience: get availability for one tour from the cache
function getAvailability(tourId) {
  if (!availabilityCache) return {};
  return availabilityCache[tourId] || {};
}

// =====================
// RENDER TOUR CARDS
// =====================
function renderTours(filter = 'all') {
  const grid = document.getElementById('tourGrid');
  let tours = filter === 'all' ? TOURS : TOURS.filter(t => t.category.includes(filter));

  const sortVal = document.getElementById('sortSelect').value;
  tours = [...tours];
  if (sortVal === 'price-asc') tours.sort((a,b) => a.price - b.price);
  else if (sortVal === 'price-desc') tours.sort((a,b) => b.price - a.price);
  else if (sortVal === 'duration-asc') tours.sort((a,b) => a.days - b.days);
  else if (sortVal === 'duration-desc') tours.sort((a,b) => b.days - a.days);

  const stars = r => {
    let s = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(r)) s += '<i class="fas fa-star"></i>';
      else if (i - r < 1) s += '<i class="fas fa-star-half-alt"></i>';
      else s += '<i class="far fa-star"></i>';
    }
    return s;
  };

  grid.innerHTML = tours.map(t => `
    <div class="tour-card-full${selectedTourId === t.id ? ' selected' : ''}" onclick="openTour(${t.id})">
      <div class="tour-card-img" style="background-image:url('${t.image}')">
        <span class="tour-card-badge badge-${t.category.split(' ')[0]}">${t.category.split(' ')[0].charAt(0).toUpperCase()+t.category.split(' ')[0].slice(1)}</span>
      </div>
      <div class="tour-card-body">
        <div class="tour-card-meta">
          <span><i class="fas fa-map-marker-alt"></i>${t.location}</span>
          <span><i class="fas fa-clock"></i>${t.days} Days</span>
        </div>
        <h3>${t.title}</h3>
        <div class="tour-card-rating">${stars(t.rating)} <span>(${t.reviews} reviews)</span></div>
        <div class="tour-card-footer">
          <div class="tour-card-price">
            <span class="price-from">From </span>
            <span class="price">$${t.price.toLocaleString()}</span>
            <span class="price-per"> /person</span>
          </div>
          <button class="view-tour-btn"><i class="fas fa-eye"></i> View Tour</button>
        </div>
      </div>
    </div>
  `).join('');
}

// =====================
// OPEN TOUR DETAIL
// =====================
async function openTour(id) {
  const tour = TOURS.find(t => t.id === id);
  if (!tour) return;
  selectedTourId = id;
  selectedDate = null;
  pax = { adults: 2, children: 0, infants: 0 };

  // Re-render cards to show selected state
  renderTours(document.querySelector('.filter-btn.active').dataset.filter);

  const section = document.getElementById('tourDetailSection');
  section.style.display = 'block';

  // Hero
  const _gs  = tour.stats?.groupSize || (tour.groupSize ? `Max ${tour.groupSize}` : '');
  const _dif = tour.stats?.difficulty || tour.difficulty || '';
  document.getElementById('detailHero').innerHTML = `
    <div style="
      height:420px;
      border-radius:var(--radius);
      background:url('${tour.image}') center/cover no-repeat;
      position:relative;overflow:hidden;margin-bottom:0;">
      <div class="detail-hero-overlay">
        <div class="detail-hero-text">
          <h2>${tour.title}</h2>
          <div class="detail-meta">
            <span><i class="fas fa-map-marker-alt"></i>${tour.location}</span>
            <span><i class="fas fa-clock"></i>${tour.days} Days</span>
            ${_gs  ? `<span><i class="fas fa-users"></i>${_gs.replace('Max ','Max ')}</span>` : ''}
            ${_dif ? `<span><i class="fas fa-signal"></i>${_dif}</span>` : ''}
          </div>
        </div>
      </div>
    </div>`;

  // Overview stats
  const _alt = tour.stats?.altitude || null;
  document.getElementById('overviewStats').innerHTML = `
    <div class="overview-stat"><i class="fas fa-clock"></i><span class="stat-val">${tour.days} Days</span><span class="stat-lbl">Duration</span></div>
    ${_gs  ? `<div class="overview-stat"><i class="fas fa-users"></i><span class="stat-val">${_gs}</span><span class="stat-lbl">Group Size</span></div>` : ''}
    ${_dif ? `<div class="overview-stat"><i class="fas fa-signal"></i><span class="stat-val">${_dif}</span><span class="stat-lbl">Difficulty</span></div>` : ''}
    ${_alt ? `<div class="overview-stat"><i class="fas fa-mountain"></i><span class="stat-val">${_alt}</span><span class="stat-lbl">Max Altitude</span></div>` : ''}`;

  document.getElementById('tourDescription').textContent = tour.description;

  document.getElementById('highlightsBox').innerHTML = `
    <h4><i class="fas fa-star" style="color:var(--primary);margin-right:8px;"></i>Tour Highlights</h4>
    <ul class="highlights-list">
      ${tour.highlights.map(h => `<li><i class="fas fa-check-circle"></i>${h}</li>`).join('')}
    </ul>`;

  // Itinerary
  const _itinerary = Array.isArray(tour.itinerary) && tour.itinerary.length > 0 ? tour.itinerary : null;
  document.getElementById('itineraryList').innerHTML = _itinerary
    ? _itinerary.map((day, i) => `
        <div class="itinerary-item">
          <div class="itinerary-header${i === 0 ? ' open' : ''}" onclick="toggleDay(this)">
            <span class="day-badge">Day ${day.day}</span>
            <h4>${day.title}</h4>
            <i class="fas fa-chevron-down toggle-icon"></i>
          </div>
          <div class="itinerary-body${i === 0 ? ' open' : ''}">
            <p>${day.desc}</p>
            <div class="itinerary-activities">
              ${(day.activities||[]).map(a => `<span class="activity-tag"><i class="fas fa-check"></i>${a}</span>`).join('')}
            </div>
            <div class="meal-info">
              ${(day.meals||[]).map(m => `<span class="meal-tag"><i class="fas fa-utensils"></i>${m}</span>`).join('')}
            </div>
          </div>
        </div>`).join('')
    : `<p style="color:var(--text-light);padding:20px 0;font-style:italic;">Detailed itinerary coming soon. Contact us for a full day-by-day breakdown.</p>`;

  // Includes
  const _inc = Array.isArray(tour.includes) ? tour.includes : [];
  const _exc = Array.isArray(tour.excludes) ? tour.excludes : [];
  document.getElementById('includesGrid').innerHTML = `
    <div class="includes-col">
      <h4><i class="fas fa-check-circle"></i> What's Included</h4>
      <ul class="includes-list">
        ${_inc.length ? _inc.map(i => `<li><i class="fas fa-check inc-icon"></i>${i}</li>`).join('') : '<li style="color:var(--text-light)">Details coming soon</li>'}
      </ul>
    </div>
    <div class="includes-col">
      <h4><i class="fas fa-times-circle"></i> Not Included</h4>
      <ul class="includes-list">
        ${_exc.length ? _exc.map(e => `<li><i class="fas fa-times exc-icon"></i>${e}</li>`).join('') : '<li style="color:var(--text-light)">Details coming soon</li>'}
      </ul>
    </div>`;

  // Widget
  document.getElementById('widgetPrice').textContent = `$${tour.price.toLocaleString()}`;
  const stars = r => Array.from({length:5},(_,i)=>`<i class="fas fa-star${i+1>Math.ceil(r)?'-empty':i<Math.floor(r)?'':'-half-alt'}"></i>`).join('');
  document.getElementById('widgetRating').innerHTML = `${stars(tour.rating)}<span>${tour.reviews} reviews</span>`;

  // Reset PAX display
  updatePaxDisplay();
  updatePriceBreakdown();

  // Calendar — show spinner, fetch sheet data, then render
  calendarYear = new Date().getFullYear();
  calendarMonth = new Date().getMonth();
  document.getElementById('selectedDateInfo').style.display = 'none';
  showCalendarLoading(true);

  // Scroll immediately so user sees the loading state
  setTimeout(() => {
    document.getElementById('tourDetailSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);

  await fetchAvailability();
  showCalendarLoading(false);
  renderCalendar();
}

function showCalendarLoading(on) {
  const grid = document.getElementById('calendarGrid');
  const nav  = document.querySelector('.calendar-nav');
  if (on) {
    grid.innerHTML = `
      <div class="cal-loading" style="grid-column:span 7;text-align:center;padding:28px 0;color:var(--text-light);">
        <i class="fas fa-spinner fa-spin" style="font-size:1.6rem;color:var(--primary);display:block;margin-bottom:8px;"></i>
        <span style="font-size:0.85rem;">Loading availability...</span>
      </div>`;
    nav.style.opacity = '0.4';
    nav.style.pointerEvents = 'none';
  } else {
    nav.style.opacity = '';
    nav.style.pointerEvents = '';
  }
}

// =====================
// ITINERARY ACCORDION
// =====================
function toggleDay(header) {
  const body = header.nextElementSibling;
  const isOpen = header.classList.contains('open');
  header.classList.toggle('open', !isOpen);
  body.classList.toggle('open', !isOpen);
}

// =====================
// TABS
// =====================
document.addEventListener('click', e => {
  if (e.target.classList.contains('tab-btn')) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    document.getElementById('tab-' + e.target.dataset.tab).classList.add('active');
  }
});

// =====================
// PAX
// =====================
function changePax(type, delta) {
  if (type === 'adults') {
    pax.adults = Math.max(1, Math.min(20, pax.adults + delta));
  } else if (type === 'children') {
    pax.children = Math.max(0, Math.min(10, pax.children + delta));
  } else {
    pax.infants = Math.max(0, Math.min(10, pax.infants + delta));
  }
  updatePaxDisplay();
  updatePriceBreakdown();
}

function updatePaxDisplay() {
  document.getElementById('pax-adults').textContent = pax.adults;
  document.getElementById('pax-children').textContent = pax.children;
  document.getElementById('pax-infants').textContent = pax.infants;
}

// =====================
// CALENDAR
// =====================
function renderCalendar() {
  const tour = TOURS.find(t => t.id === selectedTourId);
  if (!tour) return;

  const avail = getAvailability(tour.id); // { 'YYYY-MM-DD': { status, spots, notes } }
  const today = new Date();
  today.setHours(0,0,0,0);

  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  document.getElementById('calMonthLabel').textContent = `${months[calendarMonth]} ${calendarYear}`;

  const firstDay = new Date(calendarYear, calendarMonth, 1).getDay();
  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  const dayNames = ['Su','Mo','Tu','We','Th','Fr','Sa'];

  let html = dayNames.map(d => `<div class="cal-day-name">${d}</div>`).join('');
  for (let i = 0; i < firstDay; i++) html += `<div class="cal-day empty"></div>`;

  for (let d = 1; d <= daysInMonth; d++) {
    const key = `${calendarYear}-${String(calendarMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const dt  = new Date(calendarYear, calendarMonth, d);
    const isToday = dt.getTime() === today.getTime();
    const isPast  = dt < today;
    const entry   = avail[key];       // { status, spots, notes } or undefined

    let cls = 'cal-day';
    if (isPast) {
      cls += ' past';
    } else if (selectedDate === key) {
      cls += ` selected ${entry ? entry.status : ''}`;
    } else if (entry) {
      cls += ` ${entry.status}`;
    } else {
      cls += ' past'; // no departure on this date
    }
    if (isToday) cls += ' today';

    const clickable = !isPast && entry && entry.status !== 'sold-out';
    const title = entry
      ? (entry.spots > 0 ? `${entry.spots} spot${entry.spots > 1 ? 's' : ''} left` : entry.status)
      : '';
    html += `<div class="${cls}"${clickable ? ` onclick="selectDate('${key}')" title="${title}"` : ''}${!clickable && entry?.status === 'sold-out' ? ' title="Sold Out"' : ''}>${d}</div>`;
  }

  document.getElementById('calendarGrid').innerHTML = html;
}

function changeMonth(delta) {
  calendarMonth += delta;
  if (calendarMonth < 0) { calendarMonth = 11; calendarYear--; }
  if (calendarMonth > 11) { calendarMonth = 0; calendarYear++; }
  renderCalendar();
}

function selectDate(key) {
  selectedDate = key;
  renderCalendar();

  const tour  = TOURS.find(t => t.id === selectedTourId);
  const entry = getAvailability(tour.id)[key] || {};
  const d = new Date(key + 'T00:00:00');
  const returnDate = new Date(d);
  returnDate.setDate(returnDate.getDate() + tour.days - 1);

  const fmt = dt => dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  // Spots display
  let spotsText = '';
  if (entry.spots > 0 && entry.status === 'limited') {
    spotsText = `<span style="color:#e65100;font-weight:700;">⚠️ Only ${entry.spots} spot${entry.spots > 1 ? 's' : ''} left!</span>`;
  } else if (entry.spots > 0) {
    spotsText = `${entry.spots} spots available`;
  }
  const noteText = entry.notes ? ` &bull; ${entry.notes}` : '';

  const info = document.getElementById('selectedDateInfo');
  info.style.display = 'block';
  info.innerHTML = `
    <strong><i class="fas fa-plane-departure"></i> ${fmt(d)}</strong> &rarr; <strong>${fmt(returnDate)}</strong><br>
    <small style="color:var(--text-light)">${tour.days} days &bull; ${spotsText}${noteText}</small>`;

  updatePriceBreakdown();

  const btn = document.getElementById('bookNowBtn');
  btn.disabled = false;
  btn.innerHTML = '<i class="fas fa-lock"></i> Book This Tour';
}

// =====================
// PRICE BREAKDOWN
// =====================
function updatePriceBreakdown() {
  const tour = TOURS.find(t => t.id === selectedTourId);
  if (!tour) return;

  const adultTotal = tour.price * pax.adults;
  const childTotal = Math.round(tour.price * 0.8) * pax.children;
  const total = adultTotal + childTotal;

  let lines = `<div class="price-line"><span class="line-label">Adults × ${pax.adults}</span><span>$${adultTotal.toLocaleString()}</span></div>`;
  if (pax.children > 0) lines += `<div class="price-line"><span class="line-label">Children × ${pax.children} (20% off)</span><span>$${childTotal.toLocaleString()}</span></div>`;
  if (pax.infants > 0) lines += `<div class="price-line"><span class="line-label">Infants × ${pax.infants}</span><span>Free</span></div>`;
  lines += `<div class="price-line"><span class="line-label">Taxes & Fees</span><span>Included</span></div>`;

  document.getElementById('priceLines').innerHTML = lines;
  document.getElementById('priceTotal').textContent = `$${total.toLocaleString()}`;
}

// =====================
// EMAILJS CONFIGURATION
// ----------------------
// 1. Go to https://www.emailjs.com and create a FREE account
// 2. Add your Email Service (Gmail recommended): Dashboard → Email Services → Add New Service
// 3. Create an Email Template: Dashboard → Email Templates → Create New Template
//    Use the template content provided in the README or comments below
// 4. Replace the three values below with your own from the EmailJS dashboard
// =====================
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';       // Account → General → Public Key
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';       // Email Services → your service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';      // Email Templates → your template ID

// Admin email — change this to the email address that should receive bookings
const ADMIN_EMAIL = 'admin@wondervoyage.com';

// Initialize EmailJS
if (typeof emailjs !== 'undefined') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

// =====================
// BOOKING — Step 1: Open Modal
// =====================
function handleBooking() {
  const tour = TOURS.find(t => t.id === selectedTourId);
  if (!tour || !selectedDate) return;

  const d = new Date(selectedDate + 'T00:00:00');
  const returnDate = new Date(d);
  returnDate.setDate(returnDate.getDate() + tour.days - 1);
  const fmt = dt => dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const total = (tour.price * pax.adults) + (Math.round(tour.price * 0.8) * pax.children);
  const paxParts = [
    `${pax.adults} Adult${pax.adults > 1 ? 's' : ''}`,
    pax.children > 0 ? `${pax.children} Child${pax.children > 1 ? 'ren' : ''}` : '',
    pax.infants > 0 ? `${pax.infants} Infant${pax.infants > 1 ? 's' : ''}` : ''
  ].filter(Boolean);

  // Fill summary bar
  document.getElementById('modalSummaryBar').innerHTML = `
    <div class="summary-item"><i class="fas fa-map-marker-alt"></i><div><span>Tour</span><strong>${tour.title}</strong></div></div>
    <div class="summary-item"><i class="fas fa-plane-departure"></i><div><span>Departs</span><strong>${fmt(d)}</strong></div></div>
    <div class="summary-item"><i class="fas fa-plane-arrival"></i><div><span>Returns</span><strong>${fmt(returnDate)}</strong></div></div>
    <div class="summary-item"><i class="fas fa-users"></i><div><span>Travelers</span><strong>${paxParts.join(', ')}</strong></div></div>
    <div class="summary-item highlight"><i class="fas fa-tag"></i><div><span>Est. Total</span><strong>$${total.toLocaleString()}</strong></div></div>`;

  // Reset form and show step 1
  document.getElementById('bookingForm').reset();
  document.getElementById('modalStep1').style.display = 'block';
  document.getElementById('modalStep2').style.display = 'none';
  document.getElementById('submitBtn').disabled = false;
  document.getElementById('submitBtn').innerHTML = '<i class="fas fa-paper-plane"></i> Send Booking Request';
  document.getElementById('bookingModal').style.display = 'flex';
}

// =====================
// BOOKING — Step 2: Submit & Send Email
// =====================
function submitBooking(e) {
  e.preventDefault();

  const tour = TOURS.find(t => t.id === selectedTourId);
  const firstName  = document.getElementById('guestFirstName').value.trim();
  const lastName   = document.getElementById('guestLastName').value.trim();
  const email      = document.getElementById('guestEmail').value.trim();
  const phone      = document.getElementById('guestPhone').value.trim();
  const nationality = document.getElementById('guestNationality').value.trim();
  const source     = document.getElementById('guestSource').value;
  const requests   = document.getElementById('guestRequests').value.trim();

  if (!firstName || !lastName || !email || !phone) {
    showFormError('Please fill in all required fields.');
    return;
  }

  const d = new Date(selectedDate + 'T00:00:00');
  const returnDate = new Date(d);
  returnDate.setDate(returnDate.getDate() + tour.days - 1);
  const fmt = dt => dt.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });

  const adultTotal  = tour.price * pax.adults;
  const childTotal  = Math.round(tour.price * 0.8) * pax.children;
  const grandTotal  = adultTotal + childTotal;
  const bookingRef  = 'WV-' + Date.now().toString(36).toUpperCase().slice(-6);
  const bookingTime = new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' });

  const paxLines = [
    `Adults: ${pax.adults} × $${tour.price.toLocaleString()} = $${adultTotal.toLocaleString()}`,
    pax.children > 0 ? `Children: ${pax.children} × $${Math.round(tour.price*0.8).toLocaleString()} (20% off) = $${childTotal.toLocaleString()}` : '',
    pax.infants > 0  ? `Infants: ${pax.infants} × Free` : ''
  ].filter(Boolean).join('\n');

  // EmailJS template parameters — these map to {{variable}} in your EmailJS template
  const templateParams = {
    // Admin destination
    admin_email:      ADMIN_EMAIL,

    // Booking reference
    booking_ref:      bookingRef,
    booking_date:     bookingTime,

    // Tour details
    tour_id:          selectedTourId,
    tour_name:        tour.title,
    destination:      tour.location,
    category:         tour.category.charAt(0).toUpperCase() + tour.category.slice(1),
    duration:         `${tour.days} days`,
    departure_date:   fmt(d),
    departure_date_raw: selectedDate,
    return_date:      fmt(returnDate),

    // Travelers
    adults:           pax.adults,
    children:         pax.children,
    infants:          pax.infants,
    total_travelers:  pax.adults + pax.children + pax.infants,
    pax_breakdown:    paxLines,

    // Pricing
    price_per_person: `$${tour.price.toLocaleString()}`,
    total_price:      `$${grandTotal.toLocaleString()}`,

    // Guest info
    guest_name:       `${firstName} ${lastName}`,
    guest_email:      email,
    guest_phone:      phone,
    guest_nationality: nationality || 'Not provided',
    heard_from:       source || 'Not specified',
    special_requests: requests || 'None',

    // Reply-to so admin can directly reply to guest
    reply_to:         email
  };

  // Show loading state
  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  // Send via EmailJS
  if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then(() => { saveBookingToStorage(templateParams, bookingRef); showSuccessScreen(firstName, bookingRef, email); })
      .catch(err => {
        console.error('EmailJS error:', err);
        showFormError('Failed to send. Please email us directly at ' + ADMIN_EMAIL);
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Booking Request';
      });
  } else {
    // EmailJS not configured yet — show setup reminder in console, still show success UI for demo
    console.warn('⚠️ EmailJS not configured. Set EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, and EMAILJS_TEMPLATE_ID in tours.js');
    console.table(templateParams);
    setTimeout(() => { saveBookingToStorage(templateParams, bookingRef); showSuccessScreen(firstName, bookingRef, email); }, 800);
  }
}

function saveBookingToStorage(params, ref) {
  try {
    const bookings = JSON.parse(localStorage.getItem('wv_bookings') || '[]');
    bookings.unshift({
      ...params,
      booking_ref: ref,
      status: 'pending',
      receivedAt: new Date().toISOString()
    });
    localStorage.setItem('wv_bookings', JSON.stringify(bookings));

    // Reduce available spots for the booked date
    consumeAvailabilitySpots(params.tour_id, params.departure_date_raw, params.total_travelers || 1);
  } catch(e) {}
}

function consumeAvailabilitySpots(tourId, dateKey, count) {
  if (!tourId || !dateKey || !count) return;
  try {
    const avail = JSON.parse(localStorage.getItem('wv_availability') || '{}');
    if (!avail[tourId] || !avail[tourId][dateKey]) return;

    const value = avail[tourId][dateKey];

    if (Array.isArray(value)) {
      // New slot-array format — reduce spots starting from the first available slot
      let remaining = count;
      value.forEach(slot => {
        if (remaining <= 0 || slot.status === 'sold-out') return;
        const deduct  = Math.min(remaining, slot.spots || 0);
        slot.spots    = Math.max(0, (slot.spots || 0) - deduct);
        remaining    -= deduct;
        if (slot.spots === 0)      slot.status = 'sold-out';
        else if (slot.spots <= 3)  slot.status = 'limited';
        else                       slot.status = 'available';
      });
    } else {
      // Old flat format
      value.spots  = Math.max(0, (value.spots || 0) - count);
      if (value.spots === 0)      value.status = 'sold-out';
      else if (value.spots <= 3)  value.status = 'limited';
      else                        value.status = 'available';
    }

    localStorage.setItem('wv_availability', JSON.stringify(avail));

    // Invalidate in-memory cache so calendar reflects the update immediately
    availabilityCache = null;
  } catch(e) {}
}

function showSuccessScreen(firstName, ref, guestEmail) {
  document.getElementById('modalStep1').style.display = 'none';
  document.getElementById('modalStep2').style.display = 'block';
  document.getElementById('successMessage').innerHTML =
    `Hi <strong>${firstName}</strong>, your booking request for <strong>${TOURS.find(t=>t.id===selectedTourId)?.title}</strong> has been received!`;
  document.getElementById('successRef').innerHTML =
    `<span>Booking Reference</span><strong>${ref}</strong>`;
  document.getElementById('successMessage').insertAdjacentHTML('afterend',
    `<p style="font-size:0.88rem;color:var(--text-light);margin-top:4px">Confirmation sent to <strong>${guestEmail}</strong></p>`);
}

function showFormError(msg) {
  let err = document.getElementById('formError');
  if (!err) {
    err = document.createElement('p');
    err.id = 'formError';
    err.className = 'form-error';
    document.getElementById('bookingForm').prepend(err);
  }
  err.textContent = msg;
  err.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function closeModal() {
  document.getElementById('bookingModal').style.display = 'none';
}

document.getElementById('bookingModal').addEventListener('click', e => {
  if (e.target === document.getElementById('bookingModal')) closeModal();
});

// =====================
// FILTERS & SORT
// =====================
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTours(btn.dataset.filter);
  });
});
document.getElementById('sortSelect').addEventListener('change', () => {
  renderTours(document.querySelector('.filter-btn.active').dataset.filter);
});

// =====================
// NAVBAR SCROLL
// =====================
window.addEventListener('scroll', () => {
  const btt = document.getElementById('backToTop');
  if (btt) btt.classList.toggle('visible', window.scrollY > 300);
});

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// =====================
// INIT
// =====================

// Load admin-managed tours if available
const _storedTours = localStorage.getItem('wv_tours');
if (_storedTours) {
  try {
    const _adminTours = JSON.parse(_storedTours);
    if (_adminTours && _adminTours.length > 0) {
      TOURS.splice(0, TOURS.length, ..._adminTours.map(t => {
        // merge with existing full tour data (itinerary etc) if same id
        const existing = TOURS.find(e => e.id === t.id);
        return existing ? { ...existing, ...t } : t;
      }));
    }
  } catch(e) {}
}

renderTours();

// Auto-open tour from URL param: tours.html?tour=2
(function() {
  const params = new URLSearchParams(window.location.search);
  const tourParam = parseInt(params.get('tour'));
  if (tourParam && TOURS.find(t => t.id === tourParam)) {
    openTour(tourParam);
    setTimeout(() => {
      const detail = document.getElementById('tourDetailSection');
      if (detail) detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  }
})();
