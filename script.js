document.addEventListener("DOMContentLoaded", () => {
	
const cardDB = [
	
 /* --- RBC Canada Credit Cards (2025 Complete List) --- */

// PERSONAL - Travel & Rewards (Avion)
{ issuer:"RBC", network:"visa", category:"personal", name:"RBC Avion Visa Infinite Card", best:["✈️ Travel rewards","💼 Flexible redemption","🛡️ Comprehensive insurance"] },
{ issuer:"RBC", network:"visa", category:"personal", name:"RBC Avion Visa Infinite Privilege Card", best:["🛫 Luxury travel perks","🏎️ Priority airport services","⭐ 1.25 points per $1"] },
{ issuer:"RBC", network:"visa", category:"personal", name:"RBC Avion Visa Platinum", best:["✈️ Essential travel rewards","💳 No minimum income required"] },
{ issuer:"RBC", network:"visa", category:"personal", name:"RBC ION+ Visa Card", best:["🛒 3x points on groceries & gas","🍽️ Dining & streaming","💰 Low monthly fee"] },
{ issuer:"RBC", network:"visa", category:"personal", name:"RBC ION Visa Card", best:["🛍️ Everyday rewards","💳 No annual fee","⛽ Petro-Canada savings"] },

// PERSONAL - Cash Back
{ issuer:"RBC", network:"mastercard", category:"personal", name:"RBC Cash Back Preferred World Elite Mastercard", best:["💵 Premium cash back rate","📦 All purchases bonus"] },
{ issuer:"RBC", network:"mastercard", category:"personal", name:"RBC Cash Back Mastercard", best:["💵 Unlimited cash back","🛒 Grocery bonus","💳 No annual fee"] },

// PERSONAL - Shopping & Low Rate
{ issuer:"RBC", network:"visa", category:"personal", name:"moi RBC Visa", best:["🛒 Jean Coutu rewards","🎭 Metro & Brunet points","💳 No annual fee"] },
{ issuer:"RBC", network:"visa", category:"personal", name:"More Rewards RBC Visa", best:["🛒 Save-On-Foods points","🛍️ 700+ partner locations"] },
{ issuer:"RBC", network:"visa", category:"personal", name:"More Rewards RBC Visa Infinite", best:["🛒 Premium Save-On-Foods rewards","🛍️ High earn rate at partners"] },
{ issuer:"RBC", network:"visa", category:"personal", name:"RBC RateAdvantage Visa", best:["📉 Lowest interest rate","💳 Balance management"] },
{ issuer:"RBC", network:"visa", category:"personal", name:"RBC Visa Classic Low Rate Option", best:["📉 Fixed low interest","🛡️ Purchase security"] },
{ issuer:"RBC", network:"visa", category:"personal", name:"RBC U.S. Dollar Visa Gold", best:["🇺🇸 No FX fees on USD","🏨 U.S. travel rewards"] },

// THIRD-PARTY / CO-BRANDED
{ issuer:"RBC", network:"visa", category:"third-party", name:"RBC British Airways Visa Infinite", best:["✈️ Avios points","🌍 International travel","🎟️ Companion voucher"] },
{ issuer:"RBC", network:"mastercard", category:"third-party", name:"WestJet RBC World Elite Mastercard", best:["✈️ Annual round-trip voucher","🛫 First checked bag free","💸 WestJet dollars"] },
{ issuer:"RBC", network:"mastercard", category:"third-party", name:"WestJet RBC Mastercard", best:["✈️ Earn WestJet dollars","💳 Low annual fee"] },

// STUDENT
{ issuer:"RBC", network:"visa", category:"student", name:"RBC ION Visa for Students", best:["🎓 No annual fee","📱 Mobile device insurance","📚 Everyday points"] },
{ issuer:"RBC", network:"visa", category:"student", name:"RBC ION+ Visa for Students", best:["🎓 Annual fee rebate","🛒 High points on food/transport","🎮 Digital gaming rewards"] },
{ issuer:"RBC", network:"mastercard", category:"student", name:"RBC Cash Back Mastercard for Students", best:["🎓 Student cash back","🛒 Grocery spending","💳 No annual fee"] },
{ issuer:"RBC", network:"visa", category:"student", name:"RBC Avion Visa Platinum for Students", best:["🎓 Travel points for students","💳 Build credit history"] },

// BUSINESS
{ issuer:"RBC", network:"visa", category:"business", name:"RBC Avion Visa Business", best:["💼 Business travel rewards","📊 Expense tracking"] },
{ issuer:"RBC", network:"visa", category:"business", name:"RBC Avion Visa Infinite Business", best:["💼 Premium business perks","⭐ Higher earn rate"] },
{ issuer:"RBC", network:"mastercard", category:"business", name:"RBC Business Cash Back Mastercard", best:["💼 Business cash back","📦 Unlimited rewards"] },
{ issuer:"RBC", network:"visa", category:"business", name:"RBC Visa Business", best:["💼 Low fee business card","💳 Basic expense management"] },
{ issuer:"RBC", network:"visa", category:"business", name:"RBC Visa CreditLine for Small Business", best:["💼 Credit line access","📉 Flexible repayment"] },

/* --- TD Canada Trust Credit Cards --- */

// PERSONAL - Aeroplan (Travel)
{ issuer:"TD", network:"visa", category:"personal", name:"TD Aeroplan Visa Infinite Card", best:["✈️ Aeroplan points","🛫 First checked bag free","🛡️ Travel insurance"] },
{ issuer:"TD", network:"visa", category:"personal", name:"TD Aeroplan Visa Infinite Privilege Card", best:["🛫 Maple Leaf Lounge access","🏎️ Priority airport services","✈️ Premium Aeroplan earn rate"] },
{ issuer:"TD", network:"visa", category:"personal", name:"TD Aeroplan Visa Platinum Card", best:["✈️ Essential Aeroplan rewards","💳 No minimum income required"] },

// PERSONAL - TD Rewards (Travel & Shopping)
{ issuer:"TD", network:"visa", category:"personal", name:"TD First Class Travel Visa Infinite Card", best:["✈️ Booking via Expedia for TD","🎁 Scene+ point transfers","🌍 High earn on travel"] },
{ issuer:"TD", network:"visa", category:"personal", name:"TD Platinum Travel Visa Card", best:["⭐ Flexible TD Rewards","🛍️ Online shopping","💳 Mid-tier travel perks"] },
{ issuer:"TD", network:"visa", category:"personal", name:"TD Rewards Visa Card", best:["🛍️ Everyday points","💳 No annual fee","🎭 Movie & dining rewards"] },

// PERSONAL - Cash Back
{ issuer:"TD", network:"visa", category:"personal", name:"TD Cash Back Visa Infinite Card", best:["💵 3% on groceries & gas","📱 3% on recurring bills","🚗 TD Auto Club membership"] },
{ issuer:"TD", network:"visa", category:"personal", name:"TD Cash Back Visa Card", best:["💵 Cashback on groceries","⛽ Gas station rewards","💳 No annual fee"] },

// PERSONAL - Low Rate & USD
{ issuer:"TD", network:"visa", category:"personal", name:"TD Emerald Flex Rate Visa Card", best:["📉 Variable low interest","💳 Balance management"] },
{ issuer:"TD", network:"visa", category:"personal", name:"TD U.S. Dollar Visa Card", best:["🇺🇸 No FX fees on USD","🏨 U.S. shopping & travel"] },

// STUDENT
{ issuer:"TD", network:"visa", category:"student", name:"TD Rewards Visa Card for Students", best:["🎓 No annual fee","📚 Build credit history","🛒 Points on essentials"] },
{ issuer:"TD", network:"visa", category:"student", name:"TD Cash Back Visa Card for Students", best:["🎓 Student cashback","🛒 Groceries & gas","💳 No annual fee"] },
{ issuer:"TD", network:"visa", category:"student", name:"TD Aeroplan Visa Platinum Card for Students", best:["🎓 Travel points for students","✈️ Aeroplan rewards"] },

// BUSINESS
{ issuer:"TD", network:"visa", category:"business", name:"TD Aeroplan Visa Business Card", best:["💼 Business Aeroplan points","🛫 Travel benefits","📊 Expense management"] },
{ issuer:"TD", network:"visa", category:"business", name:"TD Business Select Viisa Card", best:["💼 Flexible reward options","💳 Low interest or rewards"] },
{ issuer:"TD", network:"visa", category:"business", name:"TD Business Travel Visa Card", best:["💼 Business TD Rewards","🌍 Travel-focused expenses"] },

/* --- Scotiabank Canada Credit Cards --- */

// PERSONAL - American Express (Scene+ Rewards)
{ issuer:"Scotiabank", network:"amex", category:"personal", name:"Scotiabank Gold American Express Card", best:["🛒 6x points at Sobeys/FreshCo","🍽️ 5x points on dining & movies","🌍 No foreign transaction fees"] },
{ issuer:"Scotiabank", network:"amex", category:"personal", name:"Scotiabank American Express Card", best:["🛍️ 3x points at Scene+ grocers","💳 No annual fee","🎭 2x points on entertainment"] },
{ issuer:"Scotiabank", network:"amex", category:"personal", name:"Scotiabank Platinum American Express Card", best:["🛫 10 free lounge visits","📉 Low 9.99% interest rate","⭐ 2x points on all spending"] },

// PERSONAL - Visa (Travel & Scene+)
{ issuer:"Scotiabank", network:"visa", category:"personal", name:"Scotiabank Passport Visa Infinite Card", best:["🌍 No foreign transaction fees","🛫 6 free airport lounge visits","🛒 3x points at Sobeys/Safeway"] },
{ issuer:"Scotiabank", network:"visa", category:"personal", name:"Scotiabank Passport Visa Infinite Privilege Card", best:["🛫 10 free lounge visits","✈️ 3x points on travel","🛡️ Luxury travel insurance"] },
{ issuer:"Scotiabank", network:"visa", category:"personal", name:"Scotiabank Scene+ Visa Card", best:["🎬 2x points at Cineplex","🛒 2x points at Sobeys/Home Hardware","💳 No annual fee"] },

// PERSONAL - Cash Back (Momentum Series)
{ issuer:"Scotiabank", network:"visa", category:"personal", name:"Scotia Momentum Visa Infinite Card", best:["💵 4% on groceries & recurring bills","⛽ 2% on gas & daily transit","🛡️ Mobile device insurance"] },
{ issuer:"Scotiabank", network:"visa", category:"personal", name:"Scotia Momentum Visa Card", best:["💵 2% on groceries, gas & drug stores","📉 2.99% balance transfer rate","💳 $39 annual fee"] },
{ issuer:"Scotiabank", network:"visa", category:"personal", name:"Scotia Momentum No-Fee Visa Card", best:["💵 1% on groceries & gas","💳 No annual fee","🛍️ Basic cashback"] },
{ issuer:"Scotiabank", network:"mastercard", category:"personal", name:"Scotia Momentum Mastercard", best:["💵 1% on all purchases","🛡️ Purchase security","💳 No annual fee"] },

// PERSONAL - Specialized (Low Rate & USD)
{ issuer:"Scotiabank", network:"visa", category:"personal", name:"Scotiabank Value Visa Card", best:["📉 12.99% low interest rate","💳 0.99% balance transfer offer","🛡️ No annual fee (1st year)"] },
{ issuer:"Scotiabank", network:"visa", category:"personal", name:"Scotiabank U.S. Dollar Visa Card", best:["🇺🇸 No currency conversion fees","🛍️ Shop US retailers in USD","🚗 Avis/Budget rental discounts"] },

// STUDENT
{ issuer:"Scotiabank", network:"visa", category:"student", name:"Scotiabank Scene+ Visa Card for Students", best:["🎓 No annual fee","📚 Build credit history","🛒 2x points at Sobeys/Safeway"] },
{ issuer:"Scotiabank", network:"amex", category:"student", name:"Scotiabank American Express Card for Students", best:["🎓 No annual fee","🛍️ 3x points at Scene+ grocers","📚 Student rewards"] },
{ issuer:"Scotiabank", network:"visa", category:"student", name:"Scotia Momentum No-Fee Visa Card for Students", best:["🎓 Student cashback","🛒 1% on groceries & gas","💳 No annual fee"] },
{ issuer:"Scotiabank", network:"visa", category:"student", name:"Scotiabank Value Visa Card for Students", best:["🎓 Low interest for students","📉 Build credit safely"] },

// BUSINESS
{ issuer:"Scotiabank", network:"visa", category:"business", name:"Scotiabank Passport Visa Infinite Business Card", best:["💼 1.5x points on all business spend","🌍 No foreign transaction fees","🛫 Priority Pass lounge access"] },
{ issuer:"Scotiabank", network:"visa", category:"business", name:"Scotia Momentum for Business Visa Card", best:["💼 3% cashback on gas & office spend","📊 Expense management tools","💵 1% on all other purchases"] },
{ issuer:"Scotiabank", network:"visa", category:"business", name:"Scotia Home Hardware PRO Visa Business Card", best:["🛠️ 1x point at Home Hardware","💼 Unsecured limit up to $150k","💳 No annual fee"] },

/* --- BMO Canada Credit Cards --- */

// PERSONAL - Lifestyle & Points (BMO Rewards / eclipse)
{ issuer:"BMO", network:"visa", category:"personal", name:"BMO eclipse Visa Infinite Card", best:["🍽️ 5x points on dining & groceries","⛽ 5x points on gas & transit","🎁 $50 annual lifestyle credit"] },
{ issuer:"BMO", network:"visa", category:"personal", name:"BMO eclipse Visa Infinite Privilege Card", best:["🛫 6 free airport lounge visits","⭐ 5x points on travel & dining","🏎️ Priority airport services"] },
{ issuer:"BMO", network:"visa", category:"personal", name:"BMO eclipse rise Visa Card", best:["🛍️ 5x points on online shopping","🎭 5x points on movies & music","💳 No annual fee"] },
{ issuer:"BMO", network:"mastercard", category:"personal", name:"BMO Ascend World Elite Mastercard", best:["✈️ 5x points on travel","🛫 4 free airport lounge visits","🛡️ Comprehensive travel insurance"] },

// PERSONAL - AIR MILES
{ issuer:"BMO", network:"mastercard", category:"personal", name:"BMO AIR MILES World Elite Mastercard", best:["✈️ 25% discount on flight redemptions","🛒 3x miles at partner stores","🛫 2 free airport lounge visits"] },
{ issuer:"BMO", network:"mastercard", category:"personal", name:"BMO AIR MILES Mastercard", best:["🛒 3x miles at AIR MILES partners","💳 No annual fee","⛽ Shell fuel discounts"] },

// PERSONAL - Cash Back
{ issuer:"BMO", network:"mastercard", category:"personal", name:"BMO CashBack World Elite Mastercard", best:["🛒 5% on groceries","🚕 4% on transit","🚗 Free roadside assistance"] },
{ issuer:"BMO", network:"mastercard", category:"personal", name:"BMO CashBack Mastercard", best:["🛒 3% on groceries","📱 1% on recurring bills","💳 No annual fee"] },

// PERSONAL - Low Rate
{ issuer:"BMO", network:"mastercard", category:"personal", name:"BMO Preferred Rate Mastercard", best:["📉 13.99% low interest rate","💳 Balance transfer offers"] },

// STUDENT
{ issuer:"BMO", network:"mastercard", category:"student", name:"BMO CashBack Mastercard for Students", best:["🎓 Student cashback","🛒 3% on groceries","💳 No annual fee"] },
{ issuer:"BMO", network:"mastercard", category:"student", name:"BMO AIR MILES Mastercard for Students", best:["🎓 Student travel points","🛒 3x miles at partners","💳 No annual fee"] },
{ issuer:"BMO", network:"visa", category:"student", name:"BMO eclipse rise Visa for Students", best:["🎓 No annual fee","🛍️ Points on mobile & streaming","📚 Build credit history"] },

// BUSINESS
{ issuer:"BMO", network:"mastercard", category:"business", name:"BMO Ascend World Elite Business Mastercard", best:["💼 4x points on gas & office spend","🛫 2 free airport lounge visits","🛡️ Liability waiver protection"] },
{ issuer:"BMO", network:"mastercard", category:"business", name:"BMO CashBack Business Mastercard", best:["💼 1.5% cashback on gas & office spend","💵 1.75% cashback at Shell","🛡️ Purchase protection"] },
{ issuer:"BMO", network:"mastercard", category:"business", name:"BMO AIR MILES No-Fee Business Mastercard", best:["💼 1.25x miles at Shell","🛒 1 mile per $20 spent","💳 No annual fee"] },
{ issuer:"BMO", network:"mastercard", category:"business", name:"BMO Rewards Business Mastercard", best:["💼 3x points on office supplies","📊 Detailed expense tracking","💳 $120 annual fee (waived 1st year)"] },

// THIRD-PARTY / CO-BRANDED
{ issuer:"BMO", network:"mastercard", category:"third-party", name:"BMO VIPorter World Elite Mastercard", best:["✈️ Porter Airlines perks","🛫 Lounge access","🛡️ Travel insurance"] },
{ issuer:"BMO", network:"mastercard", category:"third-party", name:"BMO Shell CashBack Mastercard", best:["⛽ 3% back at Shell","🛒 1.25% back on groceries","💳 No annual fee"] },

/* --- CIBC Canada Credit Cards --- */

// PERSONAL - Aventura (Travel & Points)
{ issuer:"CIBC", network:"visa", category:"personal", name:"CIBC Aventura Visa Infinite Card", best:["✈️ 4 free lounge visits","🌍 Flexible travel redemption","🛡️ NEXUS fee rebate"] },
{ issuer:"CIBC", network:"visa", category:"personal", name:"CIBC Aventura Visa Infinite Privilege Card", best:["🛫 6 free lounge visits","🏨 $200 annual travel credit","🏎️ Priority airport services"] },
{ issuer:"CIBC", network:"visa", category:"personal", name:"CIBC Aventura Gold Visa Card", best:["✈️ Mid-tier travel rewards","🛡️ Trip cancellation insurance","💰 $139 annual fee"] },
{ issuer:"CIBC", network:"visa", category:"personal", name:"CIBC Aventura Visa Card", best:["✈️ Basic travel points","💳 No annual fee","⛽ Journie gas savings"] },
{ issuer:"CIBC", network:"visa", category:"personal", name:"CIBC U.S. Dollar Aventura Gold Visa Card", best:["🇺🇸 Shop in USD without FX fees","✈️ Earn Aventura points on US spend"] },

// PERSONAL - Aeroplan (Travel)
{ issuer:"CIBC", network:"visa", category:"personal", name:"CIBC Aeroplan Visa Infinite Card", best:["✈️ Aeroplan points","🛫 First checked bag free","⛽ 1.5 pts on gas & groceries"] },
{ issuer:"CIBC", network:"visa", category:"personal", name:"CIBC Aeroplan Visa Infinite Privilege Card", best:["🛫 Maple Leaf Lounge access","✈️ Air Canada priority perks","⭐ Top-tier Aeroplan earn rate"] },
{ issuer:"CIBC", network:"visa", category:"personal", name:"CIBC Aeroplan Visa Card", best:["✈️ Entry-level Aeroplan","💳 No annual fee","🛍️ Earn points on every $1"] },

// PERSONAL - Dividend (Cash Back)
{ issuer:"CIBC", network:"visa", category:"personal", name:"CIBC Dividend Visa Infinite Card", best:["💵 4% on groceries & gas","🚕 2% on transit & dining","🛡️ Mobile device insurance"] },
{ issuer:"CIBC", network:"visa", category:"personal", name:"CIBC Dividend Platinum Visa Card", best:["💵 3% on groceries & gas","🚗 Auto rental insurance","💰 $99 annual fee"] },
{ issuer:"CIBC", network:"visa", category:"personal", name:"CIBC Dividend Visa Card", best:["💵 2% on groceries","💳 No annual fee","🛒 Daily cashback"] },

// PERSONAL - Specialized & Low Rate
{ issuer:"CIBC", network:"visa", category:"personal", name:"CIBC Select Visa Card", best:["📉 0% interest on balance transfers","💳 Low 13.99% interest rate"] },
{ issuer:"CIBC", network:"visa", category:"personal", name:"CIBC Classic Visa Card", best:["💳 Basic credit building","🛡️ Purchase security"] },

// THIRD-PARTY / CO-BRANDED (Costco)
{ issuer:"CIBC", network:"mastercard", category:"third-party", name:"CIBC Costco Mastercard", best:["🛒 3% at restaurants & Costco gas","💻 2% at Costco.ca","💳 No annual fee"] },
{ issuer:"CIBC", network:"mastercard", category:"third-party", name:"CIBC Costco World Mastercard", best:["🛒 Premium Costco rewards","📱 Mobile device insurance","💳 No annual fee"] },

// STUDENT
{ issuer:"CIBC", network:"visa", category:"student", name:"CIBC Aventura Visa Card for Students", best:["🎓 Student travel points","💳 No annual fee","📚 Build credit history"] },
{ issuer:"CIBC", network:"visa", category:"student", name:"CIBC Dividend Visa Card for Students", best:["🎓 Student cashback","🛒 2% on groceries","💳 No annual fee"] },
{ issuer:"CIBC", network:"visa", category:"student", name:"CIBC Aeroplan Visa Card for Students", best:["🎓 Student Aeroplan points","💳 No annual fee","✈️ Travel rewards"] },

// BUSINESS
{ issuer:"CIBC", network:"visa", category:"business", name:"CIBC Aventura Visa Card for Business", best:["💼 Business travel points","📊 Expense management","🌍 Flexible redemption"] },
{ issuer:"CIBC", network:"visa", category:"business", name:"CIBC Aeroplan Visa Business Card", best:["💼 Business Aeroplan points","🛫 Air Canada travel perks","🛡️ Liability waiver"] },
{ issuer:"CIBC", network:"visa", category:"business", name:"CIBC bizline Visa Card", best:["💼 Low interest rate for business","📉 Interest at CIBC Prime + 1.5%"] },
{ issuer:"CIBC", network:"mastercard", category:"business", name:"CIBC Costco Business Mastercard", best:["💼 Business cashback at Costco","🛒 3% on dining & fuel"] },

    /* --- Other Canadian --- */
    { issuer:"Rogers", network:"mastercard", category:"personal", name:"Rogers World Elite Mastercard", best:["🌍 No FX Fees","📱 Rogers rewards"] },
    { issuer: "walmart", network: "mastercard", category: "personal", name: "Fairstone Bank Of Canada Walmart Card", best: ["🛒 Walmart rewards", "💳 Everyday use"] },
    { issuer:"MBNA", network:"mastercard", category:"personal", name:"MBNA Rewards World Elite", best:["🛍 Shopping rewards","✈️ Travel"] },
    { issuer:"HSBC", network:"mastercard", category:"personal", name:"HSBC World Elite Mastercard", best:["🌍 Global travel","💱 No FX Fees"] },


    /* ===== UNITED STATES ===== */
	
	
/* --- Chase US Credit Cards --- */

// PERSONAL - Sapphire (Premium Travel)
{ issuer:"Chase", network:"visa", category:"personal", name:"Chase Sapphire Reserve®", best:["🛫 $300 Travel Credit","💎 Priority Pass Lounge access","🍴 3x on Dining & 10x on Chase Dining"] },
{ issuer:"Chase", network:"visa", category:"personal", name:"Chase Sapphire Preferred® Card", best:["✈️ 25% point value boost","🏨 $50 Annual Hotel Credit","🛡️ Primary Rental Car Insurance"] },

// PERSONAL - Freedom (Cash Back)
{ issuer:"Chase", network:"visa", category:"personal", name:"Chase Freedom Unlimited®", best:["💵 1.5% back on everything","🛒 3% on Drugstores","🍽️ 3% on Dining"] },
{ issuer:"Chase", network:"visa", category:"personal", name:"Chase Freedom Flex®", best:["📅 5% Rotating Quarterly Categories","🛒 3% on Drugstores","🛡️ Cell Phone Protection"] },
{ issuer:"Chase", network:"visa", category:"personal", name:"Chase Slate Edge®", best:["📉 Lower interest rate over time","📊 Credit building tools"] },

// PERSONAL - Airline & Hotel (Co-branded)
{ issuer:"Chase", network:"visa", category:"third-party", name:"United℠ Explorer Card", best:["✈️ Free checked bag","🛫 2 United Club passes yearly","🏎️ Priority boarding"] },
{ issuer:"Chase", network:"visa", category:"third-party", name:"United Quest℠ Card", best:["✈️ $125 United credit","🧳 2 free checked bags","⭐ 3x miles on United"] },
{ issuer:"Chase", network:"visa", category:"third-party", name:"United Club℠ Infinite Card", best:["💎 United Club membership","🧳 2 free checked bags","🛫 Premier Access travel services"] },
{ issuer:"Chase", network:"visa", category:"third-party", name:"Southwest Rapid Rewards® Priority Card", best:["✈️ $75 Southwest travel credit","🎟️ 4 Upgraded boardings","🎁 7,500 anniversary points"] },
{ issuer:"Chase", network:"visa", category:"third-party", name:"Marriott Bonvoy Boundless®", best:["🏨 Free Night Award yearly","⭐ Silver Elite Status","🛒 6x points at Marriott"] },
{ issuer:"Chase", network:"visa", category:"third-party", name:"World of Hyatt Credit Card", best:["🏨 Free Night at Category 1-4","⭐ Discoverist Status","🛒 9x total points at Hyatt"] },

// PERSONAL - Retail & Services (Co-branded)
{ issuer:"Chase", network:"visa", category:"third-party", name:"Prime Visa", best:["📦 5% back at Amazon & Whole Foods","🛒 2% at Gas Stations","🌍 No foreign transaction fees"] },
{ issuer:"Chase", network:"visa", category:"third-party", name:"Amazon Visa", best:["📦 3% back at Amazon & Whole Foods","🛒 2% at Gas Stations","💳 No annual fee"] },
{ issuer:"Chase", network:"mastercard", category:"third-party", name:"DoorDash Rewards Mastercard®", best:["🍽️ Free DashPass membership","🛒 4% back on DoorDash","⛽ 2% back on Gas"] },
{ issuer:"Chase", network:"mastercard", category:"third-party", name:"Instacart Mastercard®", best:["🛒 5% back on Instacart","⛽ 2% back on Gas","📱 2% on Streaming"] },
{ issuer:"Chase", network:"visa", category:"third-party", name:"Disney® Premier Visa® Card", best:["🏰 10% off Disney store/parks","🎬 2% back on Gas & Groceries","💳 $300 Statement Credit"] },

// STUDENT & NEW TO CREDIT
{ issuer:"Chase", network:"visa", category:"student", name:"Chase Freedom Rise℠", best:["🎓 1.5% cash back","📚 Build credit history","💳 No annual fee"] },

// BUSINESS - Ink Series
{ issuer:"Chase", network:"visa", category:"business", name:"Ink Business Preferred® Credit Card", best:["💼 3x on Travel & Shipping","📊 3x on Advertising/Social Media","🛡️ Cell Phone Protection"] },
{ issuer:"Chase", network:"visa", category:"business", name:"Ink Business Cash® Credit Card", best:["💼 5% on Office Supplies","📱 5% on Internet/Phone","💳 No annual fee"] },
{ issuer:"Chase", network:"visa", category:"business", name:"Ink Business Unlimited® Credit Card", best:["💼 1.5% back on all business spend","📊 Simple flat-rate rewards","💳 No annual fee"] },
{ issuer:"Chase", network:"visa", category:"business", name:"Ink Business Premier® Credit Card", best:["💼 2.5% back on purchases over $5k","💵 Unlimited 2% back on everything","🌍 No foreign transaction fees"] },

/* --- American Express US Credit Cards --- */

// PERSONAL - Membership Rewards (Travel & Lifestyle)
{ issuer:"Amex", network:"amex", category:"personal", name:"The Platinum Card®", best:["🛫 1,400+ Airport Lounges", "🏨 $200 Hotel Credit", "🎥 $240 Digital Entertainment Credit"] },
{ issuer:"Amex", network:"amex", category:"personal", name:"American Express® Gold Card", best:["🍽️ 4x on Dining worldwide","🛒 4x at US Supermarkets","✈️ 3x on Flights"] },
{ issuer:"Amex", network:"amex", category:"personal", name:"American Express® Green Card", best:["🚗 3x on Transit & Travel","🍽️ 3x on Dining","🛡️ CLEAR® Plus Credit"] },
{ issuer:"Amex", network:"amex", category:"personal", name:"Centurion® Card (The Black Card)", best:["💎 Invite-only prestige","🤴 Personal Concierge","🛫 Ultimate airport luxury"] },

// PERSONAL - Cash Back (Blue Cash Series)
{ issuer:"Amex", network:"amex", category:"personal", name:"Blue Cash Preferred® Card", best:["🛒 6% at US Supermarkets","📺 6% on US Streaming","⛽ 3% at US Gas Stations"] },
{ issuer:"Amex", network:"amex", category:"personal", name:"Blue Cash Everyday® Card", best:["🛒 3% at US Supermarkets","💻 3% on US Online Retail","⛽ 3% at US Gas Stations"] },
{ issuer:"Amex", network:"amex", category:"personal", name:"Cash Magnet® Card", best:["💵 Unlimited 1.5% Cash Back","💳 No annual fee"] },

// THIRD-PARTY - Delta Air Lines
{ issuer:"Amex", network:"amex", category:"third-party", name:"Delta SkyMiles® Reserve American Express Card", best:["🛫 Delta Sky Club Access","🎫 Annual Companion Certificate","🏎️ Priority Boarding"] },
{ issuer:"Amex", network:"amex", category:"third-party", name:"Delta SkyMiles® Platinum American Express Card", best:["🎫 Annual Companion Certificate","🧳 First Checked Bag Free","✈️ 3x on Delta spend"] },
{ issuer:"Amex", network:"amex", category:"third-party", name:"Delta SkyMiles® Gold American Express Card", best:["🧳 First Checked Bag Free","✈️ 2x on Delta & Dining","💳 $0 Intro Annual Fee"] },
{ issuer:"Amex", network:"amex", category:"third-party", name:"Delta SkyMiles® Blue American Express Card", best:["✈️ 2x on Delta & Dining","💳 No annual fee"] },

// THIRD-PARTY - Hotel Groups (Hilton & Marriott)
{ issuer:"Amex", network:"amex", category:"third-party", name:"Marriott Bonvoy Brilliant® American Express® Card", best:["🏨 Platinum Elite Status","🎟️ 85k Free Night Award","🍴 $300 Dining Credit"] },
{ issuer:"Amex", network:"amex", category:"third-party", name:"Marriott Bonvoy Bevy™ American Express® Card", best:["🏨 Gold Elite Status","⭐ 6x at Marriott properties"] },
{ issuer:"Amex", network:"amex", category:"third-party", name:"Hilton Honors American Express Aspire Card", best:["🏨 Diamond Elite Status","✈️ $200 Flight Credit","🎟️ Annual Free Night Award"] },
{ issuer:"Amex", network:"amex", category:"third-party", name:"Hilton Honors American Express Surpass® Card", best:["🏨 Gold Elite Status","🛒 6x at US Supermarkets/Gas","🍽️ 6x at US Restaurants"] },
{ issuer:"Amex", network:"amex", category:"third-party", name:"Hilton Honors American Express Card", best:["🏨 Silver Elite Status","💳 No annual fee"] },

// STUDENT (Note: Amex often suggests Blue Cash Everyday for students)
{ issuer:"Amex", network:"amex", category:"student", name:"Blue Cash Everyday® (Student Friendly)", best:["🎓 3% back on Groceries/Online","📚 No annual fee","📈 Build credit with Amex"] },

// BUSINESS
{ issuer:"Amex", network:"amex", category:"business", name:"The Business Platinum Card®", best:["💼 1.5x on large purchases (>$5k)","💻 $400 Dell Technologies Credit","🛫 Premium Lounge access"] },
{ issuer:"Amex", network:"amex", category:"business", name:"American Express® Business Gold Card", best:["📊 4x on top 2 spending categories","💻 $240 Flexible Business Credit"] },
{ issuer:"Amex", network:"amex", category:"business", name:"Blue Business® Plus Credit Card", best:["💼 2x points on all purchases","💳 No annual fee"] },
{ issuer:"Amex", network:"amex", category:"business", name:"Blue Business Cash™ Card", best:["💵 2% cash back on all purchases","💳 No annual fee"] },
{ issuer:"Amex", network:"amex", category:"business", name:"The Plum Card®", best:["📉 1.5% Early Pay Discount","🗓️ Up to 60 days to pay"] },
{ issuer:"Amex", network:"amex", category:"third-party", name:"Amazon Business Prime American Express Card", best:["📦 5% back at Amazon/Whole Foods","🛒 2% at Gas Stations/Restaurants"] },

/* --- Capital One US Credit Cards --- */

// PERSONAL - Venture (Travel Miles)
{ issuer:"Capital One", network:"visa", category:"personal", name:"Capital One Venture X Rewards", best:["🛫 Unlimited Airport Lounge access","🏨 $300 Annual Travel Credit","🎁 10k Anniversary Bonus Miles"] },
{ issuer:"Capital One", network:"visa", category:"personal", name:"Capital One Venture Rewards", best:["✈️ 2x miles on every purchase","🏎️ Global Entry/TSA PreCheck credit","🌍 No foreign transaction fees"] },
{ issuer:"Capital One", network:"mastercard", category:"personal", name:"Capital One VentureOne Rewards", best:["✈️ Earn travel miles","💳 No annual fee","🌍 0% foreign transaction fees"] },

// PERSONAL - Savor (Dining & Entertainment)
{ issuer:"Capital One", network:"mastercard", category:"personal", name:"Capital One Savor Rewards", best:["🍽️ 3% on Dining & Groceries","🎭 3% on Entertainment","📱 3% on Streaming services"] },
{ issuer:"Capital One", network:"mastercard", category:"personal", name:"Capital One Savor (Good Credit)", best:["🍽️ 3% on Dining","🛒 Earn rewards with Good credit","💳 No annual fee"] },

// PERSONAL - Quicksilver (Flat-rate Cash Back)
{ issuer:"Capital One", network:"visa", category:"personal", name:"Capital One Quicksilver Rewards", best:["💵 Unlimited 1.5% cash back","🛍️ Simple rewards structure","💳 No annual fee"] },
{ issuer:"Capital One", network:"mastercard", category:"personal", name:"Capital One QuicksilverOne Rewards", best:["📈 Build credit with rewards","💵 1.5% cash back","💳 $39 annual fee"] },

// PERSONAL - Credit Building (Platinum & Secured)
{ issuer:"Capital One", network:"mastercard", category:"personal", name:"Capital One Platinum", best:["📈 Build credit history","🛡️ No annual fee","💳 $0 fraud liability"] },
{ issuer:"Capital One", network:"mastercard", category:"personal", name:"Capital One Platinum Secured", best:["🛡️ Refundable security deposit","📈 Building credit from scratch"] },
{ issuer:"Capital One", network:"mastercard", category:"personal", name:"Capital One Quicksilver Secured", best:["💵 1.5% cash back while building credit","🛡️ Refundable deposit"] },

// THIRD-PARTY / CO-BRANDED
{ issuer:"Capital One", network:"mastercard", category:"third-party", name:"Capital One Walmart Rewards®", best:["📦 5% back at Walmart.com","🛒 2% back in-store/Gas","💳 No annual fee"] },
{ issuer:"Capital One", network:"mastercard", category:"third-party", name:"Bass Pro Shops CLUB Card", best:["🎣 2% back at Bass Pro/Cabela's","🎁 CLUB points for gear"] },
{ issuer:"Capital One", network:"mastercard", category:"third-party", name:"BJ's One™ Mastercard®", best:["🛒 3% back at BJ's Wholesale","⛽ 10¢ off/gal at BJ's Gas"] },

// STUDENT
{ issuer:"Capital One", network:"mastercard", category:"student", name:"Capital One Savor Student", best:["🎓 3% back on Dining & Groceries","📚 No annual fee","🎭 Student entertainment rewards"] },
{ issuer:"Capital One", network:"mastercard", category:"student", name:"Capital One Quicksilver Student", best:["🎓 1.5% flat cash back","📚 No annual fee","💳 Build credit while in school"] },

// BUSINESS - Spark & Venture X
{ issuer:"Capital One", network:"visa", category:"business", name:"Capital One Venture X Business", best:["💼 2x miles on every purchase","🛫 Unlimited Lounge access","📊 No preset spending limit"] },
{ issuer:"Capital One", network:"visa", category:"business", name:"Capital One Spark Cash Plus", best:["💵 Unlimited 2% cash back","💼 Annual fee refunded after $150k spend","📊 No preset spending limit"] },
{ issuer:"Capital One", network:"visa", category:"business", name:"Capital One Spark Miles for Business", best:["💼 2x travel miles","🛫 2 free lounge visits per year","🛡️ Global Entry credit"] },
{ issuer:"Capital One", network:"visa", category:"business", name:"Capital One Spark Cash Select", best:["💵 1.5% cash back","💳 No annual fee","💼 Simple business rewards"] },
{ issuer:"Capital One", network:"mastercard", category:"business", name:"Capital One Spark Classic", best:["📈 Build business credit","💵 1% unlimited cash back","💳 No annual fee"] },

/* --- Citi US Credit Cards --- */

// PERSONAL - ThankYou Rewards (Travel & Points)
{ issuer:"Citi", network:"mastercard", category:"personal", name:"Citi Strata Premier℠ Card", best:["✈️ 3x on Restaurants & Supermarkets","⛽ 3x on Gas & EV Charging","🏨 $100 Annual Hotel Benefit"] },
{ issuer:"Citi", network:"mastercard", category:"personal", name:"Citi Strata Elite℠ Card", best:["💎 12x points on Citi Travel","🏨 $300 Annual Hotel Credit","🛫 Luxury travel perks"] },
{ issuer:"Citi", network:"mastercard", category:"personal", name:"Citi Custom Cash® Card", best:["💵 5% back on top spend category","🛍️ Auto-adjusts to your spending","💳 No annual fee"] },
{ issuer:"Citi", network:"mastercard", category:"personal", name:"Citi Double Cash® Card", best:["💵 2% cash back on everything","📈 1% when you buy + 1% as you pay","💳 No annual fee"] },
{ issuer:"Citi", network:"mastercard", category:"personal", name:"Citi Rewards+® Card", best:["🔢 Rounds up points to nearest 10","🎁 10% points back on redemptions","💳 No annual fee"] },
{ issuer:"Citi", network:"mastercard", category:"personal", name:"Citi Strata℠ Card", best:["🛍️ 3x on Self-Select category","🛒 3x on Supermarkets & Transit","💳 No annual fee"] },

// PERSONAL - American Airlines (AAdvantage)
{ issuer:"Citi", network:"mastercard", category:"third-party", name:"Citi® / AAdvantage® Executive World Elite Mastercard®", best:["🛫 Admirals Club® membership","✈️ 4x miles on American Airlines","🏎️ Priority airport check-in"] },
{ issuer:"Citi", network:"mastercard", category:"third-party", name:"Citi® / AAdvantage® Platinum Select® World Elite Mastercard®", best:["🧳 First checked bag free","🏎️ Preferred boarding","✈️ 2x miles on Gas & Dining"] },
{ issuer:"Citi", network:"mastercard", category:"third-party", name:"American Airlines AAdvantage® MileUp® Card", best:["✈️ 2x miles at Grocery stores","🛍️ Earn miles with no annual fee"] },
{ issuer:"Citi", network:"mastercard", category:"third-party", name:"Citi® / AAdvantage® Globe™ Mastercard®", best:["🎟️ 4 Admirals Club® passes yearly","✈️ International travel rewards"] },

// PERSONAL - Cash Back & Retail (Co-branded)
{ issuer:"Citi", network:"visa", category:"third-party", name:"Costco Anywhere Visa® Card by Citi", best:["⛽ 4% on Gas & EV charging","🍽️ 3% on Restaurants & Travel","🛒 2% back at Costco"] },
{ issuer:"Citi", network:"visa", category:"third-party", name:"My Best Buy® Visa® Card", best:["💻 5% back at Best Buy","🛒 3% on Gas purchases","🍽️ 2% on Dining & Groceries"] },
{ issuer:"Citi", network:"mastercard", category:"third-party", name:"AT&T Points Plus® Card from Citi", best:["📱 $240 annual AT&T bill credit","⛽ 3x on Gas & EV charging"] },

// PERSONAL - Low Rate & Credit Building
{ issuer:"Citi", network:"mastercard", category:"personal", name:"Citi Simplicity® Card", best:["📉 21-month 0% Balance Transfer","🚫 No late fees or penalty APR","💳 Essential debt management"] },
{ issuer:"Citi", network:"mastercard", category:"personal", name:"Citi® Diamond Preferred® Card", best:["📉 21-month 0% Balance Transfer","📊 Free FICO® score access"] },
{ issuer:"Citi", network:"mastercard", category:"personal", name:"Citi® Secured Mastercard®", best:["📈 Build credit with a deposit","🛡️ No annual fee","🌐 Accepted worldwide"] },

// BUSINESS
{ issuer:"Citi", network:"mastercard", category:"business", name:"Citi® / AAdvantage Business™ World Elite Mastercard®", best:["💼 2x miles on Telecommunications","✈️ 2x miles on American Airlines","🛡️ Business liability waiver"] },
{ issuer:"Citi", network:"visa", category:"business", name:"Costco Anywhere Visa® Business Card by Citi", best:["💼 4% back on business fuel","🛒 2% back on Costco business hauls"] },

/* --- Discover US Credit Cards --- */

// PERSONAL - Cash Back (Rotating & Tiered)
{ issuer:"Discover", network:"discover", category:"personal", name:"Discover it® Cash Back", best:["📅 5% Rotating Categories (Amazon, Groceries, Gas)","💰 Unlimited First Year Cashback Match","💳 No annual fee"] },
{ issuer:"Discover", network:"discover", category:"personal", name:"Discover it® Chrome", best:["⛽ 2% at Gas Stations","🍽️ 2% at Restaurants","🛍️ Automatic cashback on daily essentials"] },
{ issuer:"Discover", network:"discover", category:"personal", name:"NHL® Discover it®", best:["🏒 5% Rotating Categories","🎁 10% off at NHLShop.com","🎨 Custom team designs"] },

// PERSONAL - Travel
{ issuer:"Discover", network:"discover", category:"personal", name:"Discover it® Miles", best:["✈️ 1.5x miles on every purchase","🌍 No foreign transaction fees","🎟️ Miles-for-Miles Match at year one"] },

// PERSONAL - Credit Building & Secured
{ issuer:"Discover", network:"discover", category:"personal", name:"Discover it® Secured Credit Card", best:["📈 Build credit with 2% back on Gas/Dining","🛡️ Refundable security deposit","🔍 Monthly FICO® score for free"] },

// STUDENT
{ issuer:"Discover", network:"student", category:"student", name:"Discover it® Student Cash Back", best:["🎓 5% Rotating Categories for students","📚 No credit score required to apply","💰 First year Cashback Match"] },
{ issuer:"Discover", network:"student", category:"student", name:"Discover it® Student Chrome", best:["🎓 2% at Gas Stations & Restaurants","📚 No annual fee","📈 Build credit while in school"] },

// BUSINESS
{ issuer:"Discover", network:"discover", category:"business", name:"Discover it® Business", best:["💼 1.5% cash back on all purchases","📊 Free employee cards","🛡️ $0 Fraud Liability Guarantee"] },


/* --- Bank of America US Credit Cards --- */

// PERSONAL - Cash Back (Customized & Unlimited)
{ issuer:"BofA", network:"visa", category:"personal", name:"Bank of America® Customized Cash Rewards", best:["🛍️ 3% in a category of your choice","🛒 2% at Grocery & Wholesale clubs","📈 Up to 5.25% with Preferred Rewards"] },
{ issuer:"BofA", network:"visa", category:"personal", name:"Bank of America® Unlimited Cash Rewards", best:["💵 Unlimited 1.5% cash back","🛡️ No annual fee","📈 Up to 2.62% with Preferred Rewards"] },

// PERSONAL - Travel & Points
{ issuer:"BofA", network:"visa", category:"personal", name:"Bank of America® Premium Rewards® Elite", best:["🏨 $100 Luxury Hotel Credit","🛫 $300 Airline Incidental Credit","🏎️ 20% savings on flights via portal"] },
{ issuer:"BofA", network:"visa", category:"personal", name:"Bank of America® Premium Rewards®", best:["✈️ 2x on Travel & Dining","🛫 $100 Airline Incidental Credit","🛡️ Global Entry/TSA PreCheck credit"] },
{ issuer:"BofA", network:"visa", category:"personal", name:"Bank of America® Travel Rewards", best:["✈️ 1.5 pts on all purchases","🌍 No foreign transaction fees","💳 No annual fee"] },

// THIRD-PARTY / CO-BRANDED (Airlines & Cruise)
{ issuer:"BofA", network:"visa", category:"third-party", name:"Alaska Airlines Visa® Credit Card", best:["✈️ Famous Companion Fare™ yearly","🧳 First checked bag free","⛽ 2x on Gas & EV charging"] },
{ issuer:"BofA", network:"visa", category:"third-party", name:"Air France KLM World Elite Mastercard®", best:["✈️ 60 XP anniversary bonus","🌍 3x miles on Air France/KLM","🛍️ 1.5x miles on all spend"] },
{ issuer:"BofA", network:"visa", category:"third-party", name:"Royal Caribbean® Rewards Visa®", best:["🛳️ 2x points on cruise spend","🌊 Points for onboard credit/upgrades","💳 No annual fee"] },
{ issuer:"BofA", network:"visa", category:"third-party", name:"Norwegian Cruise Line® World Mastercard®", best:["🛳️ 3x points on NCL purchases","🌊 1x point on everything else","💳 No annual fee"] },
{ issuer:"BofA", network:"visa", category:"third-party", name:"Susan G. Komen® Customized Cash Rewards", best:["🎀 Support breast cancer research","🛍️ 3% choice category rewards"] },

// PERSONAL - Low Rate & Credit Building
{ issuer:"BofA", network:"visa", category:"personal", name:"BankAmericard® Credit Card", best:["📉 0% Intro APR for 18 billing cycles","🚫 No penalty APR","💳 Best for balance transfers"] },
{ issuer:"BofA", network:"visa", category:"personal", name:"Bank of America® Customized Cash Rewards Secured", best:["📈 3% choice category while building credit","🛡️ Security deposit required"] },
{ issuer:"BofA", network:"visa", category:"personal", name:"Bank of America® Unlimited Cash Rewards Secured", best:["💵 1.5% cashback while building credit","🛡️ Security deposit required"] },

// STUDENT
{ issuer:"BofA", network:"visa", category:"student", name:"Bank of America® Customized Cash Rewards for Students", best:["🎓 Student choice rewards","🛒 2% at Groceries & Wholesale","💳 No annual fee"] },
{ issuer:"BofA", network:"visa", category:"student", name:"Bank of America® Travel Rewards for Students", best:["🎓 No foreign transaction fees","✈️ Flexible travel points","📚 Build credit history"] },
{ issuer:"BofA", network:"visa", category:"student", name:"Bank of America® Unlimited Cash Rewards for Students", best:["🎓 Simple 1.5% cashback for students","💳 No annual fee"] },
{ issuer:"BofA", network:"visa", category:"student", name:"BankAmericard® for Students", best:["🎓 0% Intro APR for student needs","📉 Low interest credit building"] },

// BUSINESS
{ issuer:"BofA", network:"mastercard", category:"business", name:"Business Advantage Customized Cash Rewards", best:["💼 3% in choice business category","🍽️ 2% on Dining spend","📊 Expense management tools"] },
{ issuer:"BofA", network:"mastercard", category:"business", name:"Business Advantage Unlimited Cash Rewards", best:["💼 1.5% cashback on all business spend","📈 Up to 2.62% with Preferred Rewards","💳 No annual fee"] },
{ issuer:"BofA", network:"mastercard", category:"business", name:"Business Advantage Travel Rewards", best:["💼 1.5 pts on all business spend","✈️ 3x points on BofA Travel Center","🌍 No foreign transaction fees"] },
{ issuer:"BofA", network:"mastercard", category:"business", name:"Bank of America® Platinum Plus® Mastercard® Business", best:["💼 Low intro APR on business purchases","🛡️ Business liability protection"] },

/* --- Wells Fargo US Credit Cards --- */

// PERSONAL - Autograph & Travel (Points)
{ issuer:"Wells Fargo", network:"visa", category:"personal", name:"Wells Fargo Autograph Journey℠ Card", best:["🏨 5x points on Hotels","✈️ 4x points on Airlines","🌍 No foreign transaction fees"] },
{ issuer:"Wells Fargo", network:"visa", category:"personal", name:"Wells Fargo Autograph℠ Card", best:["⛽ 3x on Gas & EV charging","🍽️ 3x on Dining & Streaming","🛡️ $600 Cell Phone Protection"] },

// PERSONAL - Lifestyle & Wellness (Attune)
{ issuer:"Wells Fargo", network:"mastercard", category:"personal", name:"Wells Fargo Attune℠ Card", best:["🧘 4x on Gyms & Spas","🎭 4x on Live Events & Movies","🌿 4x on Public Transit & Thrift stores"] },

// PERSONAL - Cash Back (Active Cash)
{ issuer:"Wells Fargo", network:"visa", category:"personal", name:"Wells Fargo Active Cash® Card", best:["💵 Unlimited 2% cash back on everything","💳 No annual fee","🛡️ $600 Cell Phone Protection"] },

// PERSONAL - Low Rate & Debt Management
{ issuer:"Wells Fargo", network:"visa", category:"personal", name:"Wells Fargo Reflect® Card", best:["📉 21-month 0% Intro APR","🚫 No annual fee","💳 Best for Balance Transfers"] },

// THIRD-PARTY / CO-BRANDED
{ issuer:"Wells Fargo", network:"mastercard", category:"third-party", name:"Bilt World Elite Mastercard®", best:["🏠 1x points on Rent (no fees)","🍽️ 3x on Dining","✈️ 1:1 Transfer to Travel Partners"] },
{ issuer:"Wells Fargo", network:"mastercard", category:"third-party", name:"Choice Privileges® Select Mastercard®", best:["🏨 10x points at Choice Hotels","🎁 30k Anniversary bonus points","⭐ Elite Gold Status"] },
{ issuer:"Wells Fargo", network:"mastercard", category:"third-party", name:"Choice Privileges® Mastercard®", best:["🏨 5x points at Choice Hotels","💳 No annual fee","🛒 3x on Groceries & Gas"] },
{ issuer:"Wells Fargo", network:"mastercard", category:"third-party", name:"One Key+™ Card", best:["✈️ 3% OneKeyCash on Expedia/Vrbo","🛫 Global Entry/TSA PreCheck credit","⭐ Gold Tier Status"] },
{ issuer:"Wells Fargo", network:"mastercard", category:"third-party", name:"One Key™ Card", best:["✈️ 3% OneKeyCash on Expedia/Vrbo","💳 No annual fee","⭐ Silver Tier Status"] },

// BUSINESS
{ issuer:"Wells Fargo", network:"mastercard", category:"business", name:"Signify Business Cash℠ Card", best:["💼 Unlimited 2% cash back","💳 No annual fee","🛫 Priority Pass membership (Pay-per-visit)"] },

/* --- BMO U.S. Credit Cards --- */

// PERSONAL - Flex Rewards (Points)
{ issuer:"BMO US", network:"mastercard", category:"personal", name:"BMO Escape Credit Card", best:["✈️ 4x on Airfare & Dining","🏨 3x on Hotels, Cruises & Tours","🎁 $240 Annual Hotel Credit (monthly installments)"] },
{ issuer:"BMO US", network:"mastercard", category:"personal", name:"BMO Premium Rewards Credit Card", best:["🛒 4x on Groceries & Dining","⛽ 4x on Gas & EV Charging","🎂 10% Anniversary point bonus"] },
{ issuer:"BMO US", network:"mastercard", category:"personal", name:"BMO Platinum Rewards Credit Card", best:["🛒 2x on Groceries & Gas","📱 Cell Phone Protection","💳 No annual fee"] },

// PERSONAL - Cash Back
{ issuer:"BMO US", network:"mastercard", category:"personal", name:"BMO Cash Back Credit Card", best:["📺 5% on Streaming & Cable","🛒 3% on Groceries & Gas","🚗 Master RoadAssist® service"] },

// PERSONAL - Low Rate & Debt Management
{ issuer:"BMO US", network:"mastercard", category:"personal", name:"BMO Platinum Credit Card", best:["📉 0% Intro APR on transfers (12 months)","🛡️ No annual fee","💳 Best for paying down debt"] },

// BUSINESS
{ issuer:"BMO US", network:"mastercard", category:"business", name:"BMO Business Platinum Rewards Credit Card", best:["💼 5x points on choice categories","💻 0% Intro APR on purchases","💳 No annual fee"] },
{ issuer:"BMO US", network:"mastercard", category:"business", name:"BMO Business Platinum Credit Card", best:["📉 Lowest business APR","🛡️ No annual fee","📊 0% Intro APR for 12 months"] },

// SPECIALIZED (Cross-Border / Private Wealth)
{ issuer:"BMO US", network:"mastercard", category:"private", name:"BMO Wealth Management Credit Card", best:["💎 5x on Airfare / 4x on Dining","🛫 $100 Annual Travel Credit","🏎️ NEXUS/Global Entry rebate"] },

];

const bankNameMap = {
// --- Canadian Banks ---
    "royal bank of canada": "RBC", 
    "rbc": "RBC", 
    "rbc royal bank": "RBC",
    
    "toronto dominion": "TD", 
    "td bank": "TD", 
    "td canada trust": "TD", 
	"Toronto-Dominion Bank": "TD",
    "td": "TD",
    
    "scotiabank": "Scotiabank", 
    "bank of nova scotia": "Scotiabank", 
	"The Bank Of Nova Scotia": "Scotiabank",
    "scotia": "Scotiabank",
    
    "bank of montreal": "BMO", 
    "bmo": "BMO", 
    "bmo harris": "BMO US", // To differentiate if needed
    
    "canadian imperial bank": "CIBC", 
    "cibc": "CIBC", 
    "canadian imperial bank of commerce": "CIBC",

    "national bank of canada": "National Bank",
    "nbc": "National Bank",
    "national bank": "National Bank",
	"fairstone bank of canada": "walmart",
    "fairstone": "walmart",
    "Rogers Bank": "Rogers",
	"HSBC": "HSBC",

    // --- U.S. Banks ---
    "chase": "Chase", 
    "jpmorgan": "Chase", 
    "jp morgan chase": "Chase", 
    "jpm": "Chase",
    
    "american express": "Amex", 
    "amex": "Amex", 
    "axp": "Amex",
    
    "capital one": "Capital One", 
    "cap 1": "Capital One", 
    "capone": "Capital One", 
    "c1": "Capital One",
    
    "wells fargo": "Wells Fargo", 
    "wells": "Wells Fargo", 
    "wf": "Wells Fargo",
    
    "citi": "Citi", 
    "citibank": "Citi", 
    "citigroup": "Citi",
    
    "bank of america": "Bank of America", 
    "bofa": "Bank of America", 
    "bof a": "Bank of America", 
    "bac": "Bank of America",
    
    "discover": "Discover", 
    "disc": "Discover",
    
    "us bank": "U.S. Bank", 
    "u.s. bank": "U.S. Bank", 
    "usb": "U.S. Bank",
    
    "barclays": "Barclays", 
    "barclays bank": "Barclays",
    
    "pnc": "PNC", 
    "pnc bank": "PNC",

    "goldman sachs": "Goldman Sachs",
    "apple card": "Goldman Sachs", // Since they issue the Apple Card
    
    "fidelity": "Fidelity",
    "charles schwab": "Schwab",
    "schwab": "Schwab",
	"Synchrony Bank": "Synchrony",
	"Amazon": "Amazon"
    };

/* --- 2. SELECTORS --- */
const binInput = document.getElementById("binInput");
const analyzeBtn = document.getElementById("analyzeBtn");
const message = document.getElementById("message");
const output = document.getElementById("output");
const selectionArea = document.getElementById("selection-area");
const step2Group = document.getElementById("step2-group");
const manualTypeWrapper = document.getElementById("manual-type-wrapper");
const typeSelect = document.getElementById("typeSelect");
const bankSelect = document.getElementById("bankSelect");
const categorySelect = document.getElementById("categorySelect");
const cardSelectionSub = document.getElementById("card-selection-sub");
const cardSelect = document.getElementById("cardSelect");
const finalResults = document.getElementById("final-results");
const step2Label = document.getElementById("step2-label");
const cardLabel = document.getElementById("card-label");

let currentNetwork = "";
let currentMappedIssuer = "";

/* --- 3. API CONFIGURATION --- */
const BIN_APIS = (bin) => [
    { name: "BinSearchLookup", url: `https://binsearchlookup.com/api/v1/${bin}`, proxy: true },
    { name: "HandyAPI", url: `https://data.handyapi.com/bin/${bin}`, proxy: true },
    { name: "BinsAPI", url: `https://binsapi.vercel.app/api/bin?bin=${bin}`, proxy: false },
    { name: "Binlist", url: `https://lookup.binlist.net/${bin}`, proxy: true },
    { name: "Moocher.io", url: `https://moocher.io/api/bin/${bin}`, proxy: true },
    { name: "PulsePST", url: `https://pulse.pst.net/api/bin/${bin}`, proxy: true },
    { name: "BinCheck", url: `https://api.bincheck.io/bin/${bin}`, proxy: true },
    { name: "APILayer", url: `https://api.apilayer.com/bincheck/${bin}`, headers: { "apikey": "YOUR_KEY" }, proxy: false },
    { name: "Bincodes", url: `https://api.bincodes.com/bin/json/YOUR_KEY/${bin}/`, proxy: true },
    { name: "Neutrino", url: `https://neutrinoapi.net/bin-lookup?bin-number=${bin}`, headers: { "User-ID": "YOUR_ID", "API-Key": "YOUR_KEY" }, proxy: false }
];

/* --- 4. CORE ANALYZE FUNCTION --- */
async function analyze() {
    const bin = binInput.value.replace(/\s/g, '').trim();
    resetUI();

    if (!/^\d{6,8}$/.test(bin)) {
        message.textContent = "Please enter 6-8 digits.";
        return;
    }

    const localCheck = getLocalCardData(bin);
    if (localCheck.scheme === "unknown") {
        showError("❌ Invalid Card", "Unrecognized card. Please verify digits.");
        return;
    }

    let validData = null;
    let isManualMode = false;
    
    message.style.color = "#fbbf24";
    message.innerHTML = `⏳ Identifying card...`;

    console.group(`🔍 BIN Analysis: ${bin}`);
    const endpoints = BIN_APIS(bin);

    for (let i = 0; i < endpoints.length; i++) {
        const service = endpoints[i];
        const startTime = performance.now();
        try {
            const cb = `&t=${Date.now()}`;
            const finalUrl = service.url.includes('?') ? service.url + '&cb=' + Date.now() : service.url + '?' + cb.substring(1);
            const fetchUrl = service.proxy ? `https://corsproxy.io/?${encodeURIComponent(finalUrl)}` : finalUrl;
            
            const res = await fetch(fetchUrl, { headers: service.headers || {} });
            const duration = ((performance.now() - startTime) / 1000).toFixed(2);

            if (res.ok) {
                const raw = await res.json();
                const normalized = normalizeResponse(raw);
                if (normalized.scheme && normalized.scheme !== "unknown") {
                    console.log(`%c✅ #${i+1} ${service.name} SUCCESS (${duration}s)`, "color: #22c55e; font-weight: bold;");
                    validData = normalized;
                    break;
                }
            } else {
                console.log(`%c❌ #${i+1} ${service.name} (Status ${res.status})`, "color: #94a3b8;");
            }
        } catch (e) {
            console.log(`%c❌ #${i+1} ${service.name} (Error)`, "color: #ef4444;");
        }
    }
    console.groupEnd();

    if (!validData) {
        validData = localCheck;
        isManualMode = true;
        message.textContent = ""; 
    } else {
        message.style.color = "#22c55e";
        message.textContent = "Card Verified"; 
    }

    processCardData(validData, isManualMode);
}

function normalizeResponse(data) {
    // Basic status check if available
    if (data.Status && data.Status === "FAILED") return { scheme: "unknown" };

    return {
        scheme: (data.Scheme || data.scheme || data.brand || data.network || "unknown").toLowerCase(),
        type: (data.Type || data.type || data.card_type || "unknown").toLowerCase(),
        bankName: (data.Issuer || data.bank?.name || data.issuer || data.bank || data.name || ""),
        // Capturing Country code for validation
        countryCode: (data.Country?.A2 || data.country?.alpha2 || data.country_code || "")
    };
}

/* --- 5. THE CRITICAL MATCHING LOGIC --- */
function processCardData(data, isManualMode) {
    // LOGIC A: Debit Restriction
    if (data.type === "debit") {
        showError("⚠️ Debit Card", "Rewards logic only for Credit Cards.");
        return;
    }

    // LOGIC B: Geography Restriction (North America Only)
    const cc = data.countryCode ? data.countryCode.toUpperCase() : "";
    if (cc && cc !== "US" && cc !== "CA") {
        showError("🌐 Region Not Supported", "We currently only support cards from the US and Canada.");
        return;
    }

    currentNetwork = data.scheme.toLowerCase();
    currentMappedIssuer = "";
    const apiName = data.bankName.toLowerCase().trim();
    
    // STAGE 1: Check the bankNameMap
    for (const [fullName, shortName] of Object.entries(bankNameMap)) {
        if (apiName === fullName.toLowerCase() || apiName.includes(fullName.toLowerCase())) {
            currentMappedIssuer = shortName;
            break;
        }
    }

    // STAGE 2: If no map match, check first word
    if (!currentMappedIssuer && apiName) {
        const firstWord = apiName.split(' ')[0].replace(/[^a-z]/g, '');
        if (cardDB.some(c => c.issuer === firstWord)) {
            currentMappedIssuer = firstWord;
        }
    }

    const bankDisp = currentMappedIssuer ? currentMappedIssuer.toUpperCase() + " " : "";
    output.innerHTML = `
        <div class="verified-box">
            <div class="verified-text">✅ Identification Successful</div>
            <div class="card-summary">${bankDisp}${currentNetwork.toUpperCase()} CREDIT</div>
        </div>
    `;

    renderSelection(currentNetwork, isManualMode || !currentMappedIssuer);
}

function renderSelection(network, showManualBank) {
    selectionArea.style.display = "block";
    
    if (showManualBank) {
        step2Group.style.display = "block";
        manualTypeWrapper.style.display = "block";
        document.getElementById("bank-selection-group").style.display = "block";
        step2Label.textContent = "Step 2:"; 
        cardLabel.textContent = "Step 3:";

        bankSelect.innerHTML = '<option value="">-- Select Bank --</option>';
        const matches = cardDB.filter(c => c.network.toLowerCase().includes(network));
        [...new Set(matches.map(c => c.issuer))].sort().forEach(b => {
            const opt = document.createElement("option"); opt.value = b; opt.textContent = b.toUpperCase(); bankSelect.appendChild(opt);
        });
        cardSelectionSub.style.display = "none";
    } else {
        step2Group.style.display = "none";
        cardLabel.textContent = "Step 2:"; 
        cardSelectionSub.style.display = "block";
        updateAvailableCategories(currentMappedIssuer);
        filterAndPopulateCards();
    }
}

/* --- 6. FILTERING & UI HELPERS --- */
function updateAvailableCategories(bank) {
    const available = cardDB.filter(c => 
        c.network.toLowerCase().includes(currentNetwork) && c.issuer === bank
    );
    const existingCats = [...new Set(available.map(c => c.category))];
    
    Array.from(categorySelect.options).forEach(opt => {
        if (opt.value === "" || opt.value === "all") opt.style.display = "block";
        else opt.style.display = existingCats.includes(opt.value) ? "block" : "none";
    });
}

function filterAndPopulateCards() {
    const bank = currentMappedIssuer || bankSelect.value;
    const cat = categorySelect.value;
    if (!bank) return;

    let filtered = cardDB.filter(c => 
        c.network.toLowerCase().includes(currentNetwork) && c.issuer === bank
    );
    if (cat && cat !== "all") filtered = filtered.filter(c => c.category === cat);

    cardSelect.innerHTML = '<option value="">-- Select Your Card --</option>';
    if (filtered.length === 0) {
        const opt = document.createElement("option");
        opt.disabled = true; opt.textContent = "No cards found";
        cardSelect.appendChild(opt);
    } else {
        filtered.forEach(c => {
            const opt = document.createElement("option");
            opt.value = c.name; opt.textContent = c.name;
            cardSelect.appendChild(opt);
        });
    }
}

/* --- 7. EVENT LISTENERS & RESETS --- */
analyzeBtn.addEventListener("click", analyze);
bankSelect.addEventListener("change", (e) => {
    finalResults.innerHTML = "";
    categorySelect.value = "";
    if (!e.target.value) return;
    updateAvailableCategories(e.target.value);
    cardSelectionSub.style.display = "block";
    filterAndPopulateCards();
});
categorySelect.addEventListener("change", () => { finalResults.innerHTML = ""; filterAndPopulateCards(); });
cardSelect.addEventListener("change", (e) => {
    const card = cardDB.find(c => c.name === e.target.value);
    if (!card) { finalResults.innerHTML = ""; return; }
    finalResults.innerHTML = `<div class="results-box"><h3 style="color:white; margin:0 0 10px 0;">${card.name}</h3><ul style="padding-left:20px; color:#cbd5e1; line-height:1.6;">${card.best.map(i => `<li>${i}</li>`).join("")}</ul></div>`;
});

function resetUI() { output.innerHTML = ""; finalResults.innerHTML = ""; selectionArea.style.display = "none"; typeSelect.value = ""; categorySelect.value = ""; message.style.color = "#fbbf24"; }

function showError(t, d) { 
    output.innerHTML = `<div class="verified-box" style="border-color:#ef4444;"><div class="verified-text" style="color:#ef4444;">${t}</div><div class="card-summary">${d}</div></div>`; 
    selectionArea.style.display = "none"; 
    message.textContent = ""; 
}

function getLocalCardData(bin) {
    const f = bin[0], f2 = parseInt(bin.substring(0,2)), f4 = parseInt(bin.substring(0,4));
    let n = "unknown";
    if (f === "4") n = "visa";
    else if ((f2 >= 51 && f2 <= 55) || (f4 >= 2221 && f4 <= 2720)) n = "mastercard";
    else if (f2 === 34 || f2 === 37) n = "amex";
    return { scheme: n, type: "unknown", bankName: "", countryCode: "" };
}

binInput.addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 8) v = v.slice(0, 8);
    if (v.length > 4) v = v.slice(0, 4) + " " + v.slice(4, 8);
    e.target.value = v;
});
binInput.addEventListener("keypress", (e) => { if (e.key === "Enter") analyze(); });
});
