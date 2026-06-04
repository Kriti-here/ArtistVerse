let users = [ 
    {
        name: "Renuka Panwar",
        pic: "/showUsers/images/renuka.jpg",
        desc: "A powerful female vocalist celebrated for hits like '52 Gaj Ka Daman'.",
        songs: ["52 Gaj Ka Daman", "Chatak Matak", "Kabootar", "Chunni Mein"]
    },
    {
        name: "Ajay Hooda",
        pic: "/showUsers/images/ajay.jpg",
        desc: "A popular model and singer known for modern Haryanvi anthems like 'Taagdi'.",
        songs: ["Taagdi", "Solid Body", "Bahu Zamidar Ki", "Left Right"]
    },
    {
        name: "Fazil Puria",
        pic: "/showUsers/images/fazil.jpg",
        desc: "A versatile artist who blends rap and traditional sounds, famous for 'Chull'.",
        songs: ["Kar Gayi Chull", "Jimmy Choo", "2 Many Girls", "Pallo Latke"]
    },
    {
        name: "Masoom Sharma",
        pic: "/showUsers/images/masoom.jpg",
        desc: "An energetic singer with a versatile range, a favorite in live performances.",
        songs: ["2 Gyand", "Kala Tikka", "Badnam Gabru", "Pistol"]
    },
    {
        name: "Cheema Y",
        pic: "/showUsers/images/cheema.jpg",
        desc: "Punjabi-Canadian rapper and lyricist known for bold tracks like 'California Love' and 'Trump' — often features in Haryanvi-influenced playlists and collaborations.",
        songs: ["California Love", "Trump", "Munda Punjabi", "Shots"]
    },
    {
        name: "Niharika Tiwari",
        pic: "/showUsers/images/niharika.jpg",
        desc: "Popular Haryanvi performer and dancer known for energetic stage presence and appearances in viral Haryanvi music videos.",
        songs: ["Desi Nakhre", "Gajban", "Thada Bhartar (Video Feature)"]
    },
    {
        name: "Arijit Singh",
        pic: "/showUsers/images/arijit-singh.jpg",
        desc: "One of India's most celebrated playback singers, known for soulful melodies and romantic hits.",
        songs: ["Tum Hi Ho", "Channa Mereya", "Kesariya", "Agar Tum Saath Ho"]
    },
    {
        name: "Shreya Ghoshal",
        pic: "/showUsers/images/shreya-ghoshal.jpg",
        desc: "A versatile playback singer renowned for her melodious voice across multiple languages.",
        songs: ["Deewani Mastani", "Tum Kya Mile", "Sunn Raha Hai", "Teri Ore"]
    },
    {
        name: "Sonu Nigam",
        pic: "/showUsers/images/sonu-nigam.jpg",
        desc: "A legendary singer known for his expressive vocals and timeless Bollywood songs.",
        songs: ["Kal Ho Naa Ho", "Abhi Mujh Mein Kahin", "Main Agar Kahoon", "Suraj Hua Maddham"]
    },
    {
        name: "KK",
        pic: "/showUsers/images/kk.jpg",
        desc: "An iconic voice remembered for emotional and evergreen Bollywood tracks.",
        songs: ["Yaaron", "Pal", "Dil Ibaadat", "Ankhon Mein Teri"]
    },
    {
        name: "Jubin Nautiyal",
        pic: "/showUsers/images/jubin-nautiyal.jpg",
        desc: "A modern playback sensation famous for romantic and heartfelt songs.",
        songs: ["Raataan Lambiyan", "Tum Hi Aana", "Tujhe Kitna Chahein Aur", "Humnava Mere"]
    },
    {
        name: "Sunidhi Chauhan",
        pic: "/showUsers/images/sunidhi-chauhan.jpg",
        desc: "A powerhouse vocalist recognized for her dynamic and versatile singing.",
        songs: ["Kamli", "Sheila Ki Jawani", "Beedi Jalaile", "Sami Sami"]
    },
    {
        name: "Mohit Chauhan",
        pic: "/showUsers/images/mohit-chauhan.jpg",
        desc: "Known for his soothing voice and memorable romantic songs.",
        songs: ["Kun Faya Kun", "Tum Se Hi", "Nadaan Parindey", "Pee Loon"]
    },
    {
        name: "Atif Aslam",
        pic: "/showUsers/images/atif-aslam.jpg",
        desc: "A celebrated singer admired for his soulful voice and emotional performances.",
        songs: ["Tajdar-e-Haram", "Tera Hone Laga Hoon", "Dil Diyan Gallan", "Jeena Jeena"]
    },
    {
        name: "Darshan Raval",
        pic: "/showUsers/images/darshan-raval.jpg",
        desc: "A youth icon known for romantic singles and independent music.",
        songs: ["Tera Zikr", "Chogada", "Kamariya", "Ek Tarfa"]
    },  
    {
        name: "Badshah",
        pic: "/showUsers/images/badshah.jpg",
        desc: "A leading rapper and music producer behind numerous party anthems.",
        songs: ["Jugnu", "DJ Waley Babu", "Genda Phool", "Paani Paani"]
    },
    {
        name: "Diljit Dosanjh",
        pic: "/showUsers/images/diljit-dosanjh.jpg",
        desc: "A global Punjabi music star known for energetic performances and hit tracks.",
        songs: ["Lover", "Proper Patola", "Do You Know", "G.O.A.T."]
    },
    {
        name: "A. R. Rahman",
        pic: "/showUsers/images/ar-rahman.jpg",
        desc: "An Oscar-winning composer and singer who transformed Indian music.",
        songs: ["Jai Ho", "Dil Se Re", "Maa Tujhe Salaam", "Khwaja Mere Khwaja"]
    },
    {
        name: "Mika Singh",
        pic: "/showUsers/images/mika-singh.jpg",
        desc: "Known for his energetic singing style and entertaining stage presence.",
        songs: ["Subah Hone Na De", "Mauja Hi Mauja", "Jumme Ki Raat", "Sawan Mein Lag Gayi Aag"]
    },
    {
        name: "B Praak",
        pic: "/showUsers/images/b-praak.jpg",
        desc: "A soulful singer and composer famous for emotional Punjabi and Hindi songs.",
        songs: ["Filhall", "Teri Mitti", "Mann Bharryaa", "Ranjha"]
    },
    {
        name: "Guru Randhawa",
        pic: "/showUsers/images/guru-randhawa.jpg",
        desc: "A Punjabi pop sensation known for catchy and internationally popular tracks.",
        songs: ["High Rated Gabru", "Lahore", "Suit Suit", "Dance Meri Rani"]
    },
    {
        name: "Harrdy Sandhu",
        pic: "/showUsers/images/harrdy-sandhu.jpg",
        desc: "A singer and performer famous for romantic Punjabi hits.",
        songs: ["Bijlee Bijlee", "Kya Baat Ay", "Soch", "Naah"]
    },
    {
        name: "Jass Manak",
        pic: "/showUsers/images/jass-manak.jpg",
        desc: "A Punjabi singer celebrated for youthful and chart-topping songs.",
        songs: ["Prada", "Lehanga", "Suit Punjabi", "Boss"]
    },
    {
        name: "Parmish Verma",
        pic: "/showUsers/images/parmish-verma.jpg",
        desc: "A singer and entertainer known for modern Punjabi music.",
        songs: ["Gaal Ni Kadni", "Shada", "Le Chakk Main Aa Gaya", "Diamond Da Chhalla"]
    },
    {
        name: "Karan Aujla",
        pic: "/showUsers/images/karan-aujla.jpg",
        desc: "A leading Punjabi artist recognized for his songwriting and hit singles.",
        songs: ["Softly", "Admirin' You", "White Brown Black", "Don't Look"]
    },
    {
        name: "Shubh",
        pic: "/showUsers/images/shubh.jpg",
        desc: "A rising Punjabi music star known for modern hip-hop influences.",
        songs: ["We Rollin", "Elevated", "No Love", "Cheques"]
    },
    {
        name: "Yo Yo Honey Singh",
        pic: "/showUsers/images/honey-singh.jpg",
        desc: "A pioneering rapper who popularized commercial hip-hop in India.",
        songs: ["Blue Eyes", "Dope Shope", "Brown Rang", "Love Dose"]
    },
    {
        name: "Raftaar",
        pic: "/showUsers/images/raftaar.jpg",
        desc: "A rapper and music producer known for fast-paced lyrics and energetic songs.",
        songs: ["Swag Mera Desi", "Mantriyaan", "All Black", "Sheikh Chilli"]
    },  
    {
        name: "Emiway Bantai",
        pic: "/showUsers/images/emiway-bantai.jpg",
        desc: "An independent rapper admired for his unique style and large fan base.",
        songs: ["Machayenge", "Machayenge 4", "Bantai", "Khaana Badosh"]
    },
    {
        name: "MC Stan",
        pic: "/showUsers/images/mc-stan.jpg",
        desc: "A contemporary rapper known for his distinct voice and street-inspired music.",
        songs: ["Basti Ka Hasti", "Tadipaar", "Ek Din Pyaar", "Insaan"]
    },
    {
        name: "King",
        pic: "/showUsers/images/king.jpg",
        desc: "A singer and rapper who gained popularity with modern pop and hip-hop tracks.",
        songs: ["Tu Aake Dekhle", "Maan Meri Jaan", "Oops", "Pablo"]
    },  
    {
        name: "Stebin Ben",
        pic: "/showUsers/images/stebin-ben.jpg",
        desc: "A playback singer known for romantic and emotional songs.",
        songs: ["Thoda Thoda Pyaar", "Baarish Ban Jaana", "Rula Ke Gaya Ishq", "Mera Dil Bhi Kitna Pagal Hai"]
    },
    {
        name: "Armaan Malik",
        pic: "/showUsers/images/armaan-malik.jpg",
        desc: "A versatile singer with a strong presence in Bollywood and independent music.",
        songs: ["Bol Do Na Zara", "Control", "Pehla Pyaar", "Chale Aana"]
    },
    {
        name: "Palak Muchhal",
        pic: "/showUsers/images/palak-muchhal.jpg",
        desc: "A melodious playback singer admired for her sweet and expressive voice.",
        songs: ["Kaun Tujhe", "Chahun Main Ya Naa", "Prem Ratan Dhan Payo", "Teri Meri Kahani"]
    },
    {
        name: "Monali Thakur",
        pic: "/showUsers/images/monali-thakur.jpg",
        desc: "An award-winning singer known for her versatility and charm.",
        songs: ["Moh Moh Ke Dhaage", "Sawaar Loon", "Badri Ki Dulhania", "Zara Zara Touch Me"]
    },
    {
        name: "Kanika Kapoor",
        pic: "/showUsers/images/kanika-kapoor.jpg",
        desc: "A playback singer famous for upbeat and trendy Bollywood tracks.",
        songs: ["Baby Doll", "Chittiyaan Kalaiyaan", "Lovely", "Oo Antava (Hindi)"]
    },
    {
        name: "Tulsi Kumar",
        pic: "/showUsers/images/tulsi-kumar.jpg",
        desc: "A popular singer known for romantic and devotional songs.",
        songs: ["Soch Na Sake", "Hum Mar Jayenge", "Tum Jo Aaye", "O Saki Saki"]
    },  
    {
        name: "Sachet Tandon",
        pic: "/showUsers/images/sachet-tandon.jpg",
        desc: "A singer and composer recognized for emotional and powerful songs.",
        songs: ["Bekhayali", "Maiyya Mainu", "Shiv Tandav Stotram", "Humraah"]
    },
    {
        name: "Parampara Tandon",
        pic: "/showUsers/images/parampara-tandon.jpg",
        desc: "A talented vocalist known for modern Bollywood hits.",
        songs: ["Mere Baad", "Chhore Dheet", "Pal Pal Dil Ke Paas", "Takleefein"]
    },
    {
        name: "Gulzaar Chhaniwala",
        pic: "/showUsers/images/gulzaar-chhaniwala.jpg",
        desc: "A prominent Haryanvi singer known for storytelling and unique style.",
        songs: ["Jug Jug Jeeve", "Filter Shot", "Yamraaj", "Dada Ravan"]
    },
    {
        name: "KD Desi Rock",
        pic: "/showUsers/images/kd-desi-rock.jpg",
        desc: "A Haryanvi rapper and singer famous for desi-themed music.",
        songs: ["Haryanvi Mashup", "Pachtaoge", "Chora Jaat Ka", "Desi Hip Hop"]
    },
    {
        name: "Khasa Aala Chahar",
        pic: "/showUsers/images/khasa-aala-chahar.jpg",
        desc: "A popular Haryanvi artist known for rustic and relatable songs.",
        songs: ["Hostel Life", "Mohtarma", "Loot Liya", "Father Saab"]
    },
    {
        name: "Amit Saini Rohtakiya",
        pic: "/showUsers/images/amit-saini-rohtakiya.jpg",
        desc: "A leading Haryanvi singer celebrated for energetic tracks.",
        songs: ["Khalnayak", "Dialogue", "Fukre", "Zameer"]
    },
    {
        name: "Ruchika Jangid",
        pic: "/showUsers/images/ruchika-jangid.jpg",
        desc: "A talented Haryanvi singer known for her vibrant vocal style.",
        songs: ["Coco Cola", "Gajban", "Tagdi 2", "Chundri Jaipur Te"]
    },
    {
        name: "Diler Kharkiya",
        pic: "/showUsers/images/diler-kharkiya.jpg",
        desc: "A singer and performer famous for modern Haryanvi hits.",
        songs: ["Lilo Chaman", "Moto", "Wish", "Sapna"]
    }   
];

// let main = document.querySelector('.main');
function showUsers(arr){
    arr.forEach(user => {
       let card = document.createElement('div'); 
       card.classList.add('card');
       card.style.backgroundImage = `url(${user.pic})`;

       let h3= document.createElement('h3');
       h3.textContent = user.name;
 
    //    let p = document.createElement('p');
    //    p.textContent = user.desc;

       card.appendChild(h3);
    //    card.appendChild(p);

       document.querySelector('.main').appendChild(card);
       console.dir(card);

       //Display their description and songs on clicking the card
       card.addEventListener("click", function(){
            let pg = document.createElement("div");
            pg.classList.add("pg");

            let closeBtn = document.createElement("span");
            closeBtn.textContent = "X";

            let name = document.createElement("h2");
            name.textContent = user.name;

            let desc = document.createElement("p");
            desc.textContent = user.desc;

            let songsList = document.createElement("ul");
            let songsHeading = document.createElement("h3");
            songsHeading.textContent = "Popular Songs:";
            songsList.appendChild(songsHeading);
            user.songs.forEach(song => {
                let li = document.createElement("li");
                li.textContent = song;
                songsList.appendChild(li);
            });

            pg.appendChild(closeBtn);
            pg.appendChild(name);
            pg.appendChild(desc);
            pg.appendChild(songsList);
            document.querySelector(".container").appendChild(pg);
            let overlay = document.createElement("div");
            overlay.classList.add("overlay");
            document.body.appendChild(overlay);

            // close on clicking overlay
            overlay.addEventListener("click", function(){
                pg.remove();
                overlay.remove();
            })
            closeBtn.addEventListener("click", function(){
                pg.remove();
                overlay.remove();
            });
       })
            
    });
}
showUsers(users);


// Search functionality
let inp = document.querySelector("input");
inp.addEventListener('input', (e) => {

    let val = e.target.value.toLowerCase();
    let filteredUsers = users.filter(user => user.name.toLowerCase().includes(val));
    // Clear the main container
    document.querySelector('.main').replaceChildren();
    // Show the filtered users
    showUsers(filteredUsers);
});