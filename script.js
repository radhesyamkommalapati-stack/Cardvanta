document.addEventListener("DOMContentLoaded", () => {

  /* ================= CARD DATABASE ================= */
  const cardDB = [
    /* --- RBC --- */
    { issuer:"RBC", network:"Visa Infinite", name:"RBC Avion Visa Infinite Card", best:["✈️ Travel rewards","💼 Flexible redemption"] },
    { issuer:"RBC", network:"Visa Infinite", name:"RBC Avion Visa Infinite Privilege Card", best:["✈️ Premium travel","🛫 Lounge access"] },
    { issuer:"RBC", network:"Visa", name:"RBC ION+ Visa Card", best:["🛒 Everyday points","🍽 Restaurants"] },
    { issuer:"RBC", network:"Mastercard", name:"RBC WestJet World Elite Mastercard", best:["✈️ WestJet travel","🛫 Companion voucher"] },
    { issuer:"RBC", network:"Mastercard", name:"RBC Cash Back Mastercard", best:["💵 Cashback","📦 Everyday spending"] },
    { issuer:"RBC", network:"Visa", name:"RBC ION Visa Card", best:["🛒 Points on everyday spend","💰 No-fee or low fee option"] },
    { issuer:"RBC", network:"Mastercard", name:"RBC Enhanced Cash Back Mastercard", best:["💵 Higher cashback","🛍️ Daily purchases"] },
    { issuer:"RBC", network:"Visa", name:"RBC ION Visa Student Card", best:["🎓 Build credit","📚 Student spending"] },
    { issuer:"RBC", network:"Mastercard", name:"RBC Cash Back Mastercard Student", best:["🎓 Student cashback","🛒 Everyday use"] },

    /* --- TD --- */
    { issuer:"TD", network:"Visa Infinite", name:"TD Aeroplan Visa Infinite Card", best:["✈️ Aeroplan points","🛫 Travel perks"] },
    { issuer:"TD", network:"Visa Infinite", name:"TD Aeroplan Visa Infinite Privilege Card", best:["✈️ Premium Aeroplan rewards","🛫 First checked bag"] },
    { issuer:"TD", network:"Visa Infinite", name:"TD First Class Travel Visa Infinite Card", best:["✈️ Flexible travel points","🌍 Travel benefits"] },
    { issuer:"TD", network:"Visa", name:"TD Cash Back Visa Card", best:["💵 Cashback","🛍️ Everyday purchases"] },
    { issuer:"TD", network:"Visa Infinite", name:"TD Cash Back Visa Infinite Card", best:["💵 Higher cashback","🛒 Regular spend"] },
    { issuer:"TD", network:"Visa", name:"TD Rewards Visa Card", best:["⭐ Rewards points","🍽 Dining"] },
    { issuer:"TD", network:"Visa", name:"TD Student Visa Card", best:["🎓 Build credit","📚 Student expenses"] },

    /* --- Scotiabank --- */
{ issuer:"Scotiabank", network:"Amex", name:"Scotiabank American Express", best:["🎁 Scene+ rewards","🛍 Everyday spending"] },
{ issuer:"Scotiabank", network:"Amex", name:"Scotiabank Gold American Express", best:["✈️ Travel","🍽 Dining","🎭 Entertainment"] },
{ issuer:"Scotiabank", network:"Amex", name:"Scotiabank Platinum American Express", best:["✈️ Premium travel","🛫 Lounge & insurance perks"] },
{ issuer:"Scotiabank", network:"Visa Infinite", name:"Scotiabank Passport Visa Infinite Card", best:["✈️ Travel","🌍 No FX fees","🥂 Dining"] },
{ issuer:"Scotiabank", network:"Visa Infinite", name:"Scotia Momentum Visa Infinite Card", best:["💵 High cashback","🛍 Groceries","📱 Bills"] },
{ issuer:"Scotiabank", network:"Visa", name:"Scotiabank Scene+ Visa Card", best:["🎬 Entertainment","🎁 Scene+ points"] },
{ issuer:"Scotiabank", network:"Visa", name:"Scotia Momentum Visa Card", best:["💵 Cashback","🛒 Everyday spends"] },
{ issuer:"Scotiabank", network:"Visa", name:"Scotia Momentum No-Fee Visa Card", best:["💵 Cashback","💳 No annual fee"] },
{ issuer:"Scotiabank", network:"Visa", name:"Scotiabank Value Visa Card", best:["📉 Low-interest","💳 Everyday use"] },
{ issuer:"Scotiabank", network:"Visa", name:"Scotiabank U.S. Dollar Visa Card", best:["💳 U.S. purchases","🌍 Travel"] },
{ issuer:"Scotiabank", network:"Visa", name:"Scotia Momentum Mastercard Credit Card", best:["💵 Cashback","🛍 Everyday purchases"] },
{ issuer:"Scotiabank", network:"Visa", name:"L’earn Visa Card", best:["📈 Build credit","💳 Everyday use"] },
{ issuer:"Scotiabank", network:"Visa", name:"Scotiabank Scene+ Visa Student Card", best:["🎓 Student rewards","📚 Build credit"] },
{ issuer:"Scotiabank", network:"Visa", name:"Scotia Momentum Visa Student Card", best:["🎓 Student cashback","🛒 Everyday purchases"] },
{ issuer:"Scotiabank", network:"Visa", name:"Scotia Momentum No-Fee Visa Student Card", best:["🎓 Student no-fee cashback","📚 Build credit"] },
{ issuer:"Scotiabank", network:"Visa", name:"Scotiabank Value Visa Student Card", best:["🎓 Student low interest","📚 Build credit"] },
{ issuer:"Scotiabank", network:"Amex", name:"Scotiabank American Express Student Card", best:["🎓 Scene+ points","📚 Student rewards"] },
{ issuer:"Scotiabank", network:"Visa", name:"Scotia Home Hardware PRO Visa Business Card", best:["💼 Business spending","🎁 Scene+ points"] },
{ issuer:"Scotiabank", network:"Visa Infinite", name:"Scotiabank Passport Visa Infinite Business Card", best:["💼 Business travel rewards","✈️ Scene+ points"] },
{ issuer:"Scotiabank", network:"Visa", name:"Scotia Momentum for Business Visa Card", best:["💼 Business cashback","🛒 Everyday business expenses"] },

{ issuer:"BMO", network:"Mastercard", name:"BMO AIR MILES Mastercard", best:["✈️ AIR MILES","🎁 Merchandise & travel"] },
{ issuer:"BMO", network:"Mastercard", name:"BMO AIR MILES World Elite Mastercard", best:["✈️ AIR MILES bonus","🌍 Travel rewards"] },
{ issuer:"BMO", network:"Visa Infinite", name:"BMO Eclipse Visa Infinite Card", best:["✈️ Points travel","🛍️ Everyday rewards"] },
{ issuer:"BMO", network:"Mastercard", name:"BMO CashBack World Elite Mastercard", best:["💵 High cashback","🛍️ Daily spending"] },
{ issuer:"BMO", network:"Mastercard", name:"BMO CashBack Mastercard", best:["💵 Cashback","📦 Everyday use"] },
{ issuer:"BMO", network:"Mastercard", name:"BMO Rewards Mastercard", best:["⭐ Points","🍽 Dining"] },
{ issuer:"BMO", network:"Mastercard", name:"BMO CashBack Mastercard for Students", best:["🎓 Student cashback","🛒 Everyday spend"] },

{ issuer:"CIBC", network:"Visa Infinite", name:"CIBC Aventura Visa Infinite Card", best:["✈️ Aventura points","🛫 Travel redemption"] },
{ issuer:"CIBC", network:"Visa Infinite", name:"CIBC Aeroplan Visa Infinite Card", best:["✈️ Aeroplan points","🛫 Travel perks"] },
{ issuer:"CIBC", network:"Visa", name:"CIBC Aventura Visa Card", best:["✈️ Aventura points","🛍️ Everyday earn"] },
{ issuer:"CIBC", network:"Visa", name:"CIBC Aeroplan Visa Card", best:["✈️ Aeroplan points","🚗 Travel & retail"] },
{ issuer:"CIBC", network:"Visa Infinite", name:"CIBC Dividend Visa Infinite Card", best:["💵 High cashback","🛒 Groceries & bills"] },
{ issuer:"CIBC", network:"Visa", name:"CIBC Dividend Visa Card", best:["💵 Cashback","📦 Everyday everyday purchases"] },
{ issuer:"CIBC", network:"Mastercard", name:"CIBC Costco® Mastercard", best:["💵 Cash back Costco","🛍️ Everyday spending"] },
{ issuer:"CIBC", network:"Mastercard", name:"CIBC Adapta™ Mastercard", best:["⭐ Adapta points","📊 Top categories bonus"] },
{ issuer:"CIBC", network:"Visa", name:"CIBC Dividend Visa Card for Students", best:["🎓 Student cashback","🛒 Daily spend"] },
{ issuer:"CIBC", network:"Visa", name:"CIBC Aventura Visa Card for Students", best:["🎓 Aventura points","📚 Everyday"] },
{ issuer:"CIBC", network:"Visa", name:"CIBC Aeroplan Visa Card for Students", best:["🎓 Aeroplan points","🌍 Travel"] },
{ issuer:"CIBC", network:"Visa", name:"CIBC Aventura Visa Card for Business", best:["💼 Business rewards","✈️ Travel"] },
{ issuer:"CIBC", network:"Visa", name:"CIBC Aeroplan Visa Business Card", best:["💼 Business travel points","🛫 Travel perks"] },
{ issuer:"CIBC", network:"Mastercard", name:"CIBC Costco Business Mastercard", best:["💼 Costco business spend","💵 Cashback"] },
{ issuer:"CIBC", network:"Visa", name:"CIBC bizline Visa Card", best:["💼 Business low interest","📊 Expense management"] },

{ issuer:"Rogers", network:"Mastercard", name:"Rogers World Elite Mastercard", best:["🌍 No FX Fees","📱 Rogers"] },
{ issuer:"Walmart", network:"Mastercard", name:"Fairstone Bank Of Canada", best:["🛒 Groceries","💳 Everyday"] },
{ issuer:"MBNA", network:"Mastercard", name:"MBNA Rewards World Elite", best:["🛍 Shopping","✈️ Travel"] },
{ issuer:"HSBC", network:"Mastercard", name:"HSBC World Elite Mastercard", best:["🌍 Travel","💱 No FX Fees"] },

/* ===== UNITED STATES ===== */
{ issuer:"Chase", network:"Visa/Mastercard", name:"Chase Sapphire Preferred® Card", best:["✈️ Travel","🍽 Dining","⭐ Rewards"] },
{ issuer:"Chase", network:"Visa", name:"Chase Sapphire Reserve®", best:["✈️ Premium travel","🛫 Lounge access","⭐ High rewards"] },
{ issuer:"Chase", network:"Visa", name:"Chase Freedom Unlimited®", best:["💵 Cashback","🛍 Everyday spending"] },
{ issuer:"Chase", network:"Visa", name:"Chase Freedom Flex®", best:["💵 Rotating bonus categories","🛒 Flex rewards"] },
{ issuer:"Chase", network:"Visa", name:"Chase Ink Business Unlimited®", best:["💼 Business cashback","📦 Everyday business"] },
{ issuer:"Chase", network:"Visa", name:"Chase Ink Business Cash®", best:["💼 Business categories","📊 Business spend"] },
{ issuer:"Chase", network:"Visa", name:"Chase Ink Business Preferred®", best:["✈️ Business travel","⭐ Rewards"] },
{ issuer:"Chase", network:"Visa", name:"Chase Amazon Prime Visa Card", best:["🛒 Amazon purchases","💵 Cashback"] },
{ issuer:"Chase", network:"Visa", name:"Chase United℠ Explorer Card", best:["✈️ United travel benefits","🧳 Travel perks"] },
{ issuer:"Chase", network:"Visa", name:"Chase United Quest℠ Card", best:["✈️ United rewards","⭐ Enhanced travel perks"] },

{ issuer:"American Express", network:"Amex", name:"The Platinum Card® from American Express", best:["✈️ Premium travel","🛫 Lounge access","🛍 Luxury perks"] },
{ issuer:"American Express", network:"Amex", name:"American Express® Gold Card", best:["🍽 Dining","🛒 Groceries","✈️ Travel points"] },
{ issuer:"American Express", network:"Amex", name:"Blue Cash Preferred® Card", best:["💵 High cash back on groceries & streaming"] },
{ issuer:"American Express", network:"Amex", name:"American Express® Green Card", best:["🌍 Travel rewards","✈️ Flexible points"] },
{ issuer:"American Express", network:"Amex", name:"Amex EveryDay® Card", best:["🛍 Everyday rewards","💸 No annual fee"] },
{ issuer:"American Express", network:"Amex", name:"Amex EveryDay Preferred®", best:["⭐ Points","🍽 Groceries"] },
{ issuer:"American Express", network:"Amex", name:"American Express® Cash Magnet® Card", best:["💵 Flat cash back"] },

{ issuer:"Capital One", network:"Visa/Mastercard", name:"Capital One Venture Rewards Credit Card", best:["✈️ Travel miles","🌍 Flexible redemption"] },
{ issuer:"Capital One", network:"Visa/Mastercard", name:"Capital One Venture X Rewards Credit Card", best:["✈️ Premium travel","🛫 Lounge access"] },
{ issuer:"Capital One", network:"Visa/Mastercard", name:"Capital One Quicksilver Cash Rewards Credit Card", best:["💵 Flat cash back","🛍 Everyday spend"] },
{ issuer:"Capital One", network:"Visa/Mastercard", name:"Capital One Savor Cash Rewards Credit Card", best:["🍽 Dining","🎉 Entertainment","💵 Cashback"] },
{ issuer:"Capital One", network:"Visa/Mastercard", name:"Capital One Walmart Rewards Mastercard", best:["🛒 Walmart purchases","💵 Cashback"] },
{ issuer:"Capital One", network:"Visa/Mastercard", name:"Capital One VentureOne Rewards Credit Card", best:["🌍 Travel rewards","💵 No fee"] },

{ issuer:"Citi", network:"Visa/Mastercard", name:"Citi® Double Cash Card", best:["💵 Cashback","🛍 Everyday spending"] },
{ issuer:"Citi", network:"Visa/Mastercard", name:"Citi Custom Cash® Card", best:["💵 Category-based cash back"] },
{ issuer:"Citi", network:"Visa/Mastercard", name:"Citi Premier® Card", best:["✈️ Travel points","🍽 Dining","🛒 Everyday"] },
{ issuer:"Citi", network:"Visa/Mastercard", name:"Citi Rewards+® Card", best:["⭐ Points","💵 Round-up rewards"] },
{ issuer:"Citi", network:"Visa/Mastercard", name:"Citi® / AAdvantage® Platinum Select® World Elite Mastercard®", best:["✈️ American Airlines miles","🛫 Travel perks"] },

{ issuer:"Bank of America", network:"Visa/Mastercard", name:"Bank of America® Customized Cash Rewards Credit Card", best:["💵 Cashback","🎯 Reward categories"] },
{ issuer:"Bank of America", network:"Visa/Mastercard", name:"Bank of America® Unlimited Cash Rewards Credit Card", best:["💵 Flat cash back","🛍 Everyday use"] },
{ issuer:"Bank of America", network:"Visa/Mastercard", name:"Bank of America® Travel Rewards Credit Card", best:["✈️ Travel rewards","📦 No annual fee"] },
{ issuer:"Bank of America", network:"Visa/Mastercard", name:"Bank of America® Premium Rewards® Credit Card", best:["✈️ Travel","⭐ Higher rewards","🍽 Dining"] },
{ issuer:"Bank of America", network:"Visa/Mastercard", name:"BankAmericard® Credit Card", best:["📉 Low APR","💳 Everyday balance handling"] },

{ issuer:"Wells Fargo", network:"Visa/Mastercard", name:"Wells Fargo Active Cash® Card", best:["💵 Flat cash back","🛍 Everyday spend"] },
{ issuer:"Wells Fargo", network:"Visa/Mastercard", name:"Wells Fargo Reflect® Card", best:["💳 Long intro APR","📉 Balance transfer"] },
{ issuer:"Wells Fargo", network:"Visa/Mastercard", name:"Wells Fargo Autograph® Card", best:["⭐ Rewards","🍽 Dining","🛫 Travel"] },
{ issuer:"Wells Fargo", network:"Visa/Mastercard", name:"Bilt Rewards Mastercard®", best:["🏠 Earn on rent","⭐ Points"] },

{ issuer:"Discover", network:"Discover", name:"Discover it® Cash Back", best:["💵 Rotating categories","🛍 Cashback"] },
{ issuer:"Discover", network:"Discover", name:"Discover it® Miles", best:["✈️ Travel miles","💵 Simple rewards"] },
{ issuer:"Discover", network:"Discover", name:"Discover it® Student Cash Back", best:["🎓 Student cashback","🛍 Everyday spend"] },
{ issuer:"Discover", network:"Discover", name:"Discover it® Chrome", best:["💵 Gas & dining cashback","🛍 Everyday use"] },

{ issuer:"U.S. Bank", network:"Visa/Mastercard", name:"U.S. Bank Visa® Platinum Card", best:["💳 Low APR","📉 Balance transfer"] },
{ issuer:"U.S. Bank", network:"Visa/Mastercard", name:"U.S. Bank Cash+® Visa Signature® Card", best:["🛒 Category cash back","💵 Everyday purchases"] },
{ issuer:"U.S. Bank", network:"Visa/Mastercard", name:"U.S. Bank Altitude® Go Visa Signature® Card", best:["📱 Mobile wallet spend rewards","🍔 Dining"] },
{ issuer:"U.S. Bank", network:"Visa/Mastercard", name:"U.S. Bank Altitude® Reserve Card", best:["✈️ Travel rewards","⭐ Premium perks"] },

{ issuer:"Barclays", network:"Mastercard", name:"Barclays AAdvantage® Aviator® Red World Elite Mastercard®", best:["✈️ American Airlines miles","🛫 Travel perks"] },
{ issuer:"Barclays", network:"Visa/Mastercard", name:"Barclays JetBlue Plus Card", best:["✈️ JetBlue rewards","⭐ Travel perks"] },
{ issuer:"Barclays", network:"Visa/Mastercard", name:"Barclays Wyndham Earner Plus Credit Card", best:["🏨 Hotel points","⭐ Rewards"] },
{ issuer:"Barclays", network:"Visa/Mastercard", name:"Barclays Choice Privileges™ Mastercard", best:["🏨 Hotel rewards","⭐ Travel"] },

{ issuer:"PNC", network:"Visa", name:"PNC Core® Visa® Credit Card", best:["📉 Low APR","💳 Everyday use"] },
{ issuer:"PNC", network:"Visa", name:"PNC Cash Rewards® Visa® Credit Card", best:["💵 Cash back","🛍 Everyday"] },
{ issuer:"PNC", network:"Visa", name:"PNC Premier Traveler® Visa Signature® Credit Card", best:["✈️ Travel rewards","⭐ Bonus points"] },

{ issuer:"Synchrony", network:"Mastercard", name:"PayPal Cashback Mastercard", best:["💰 Cashback","🌐 Online"] },
{ issuer:"Amazon", network:"Visa", name:"Amazon Prime Rewards Visa Signature Card", best:["🛒 Amazon & Whole Foods 5%","💵 Cashback"] },
{ issuer:"Amazon", network:"Visa", name:"Amazon Rewards Visa Signature Card", best:["🛍 Amazon purchases","💵 Cashback"] }
];


  /* ================= BANK NAME MAP ================= */
  const bankNameMap = {
    "Royal Bank Of Canada": "RBC",
    "Toronto-Dominion Bank": "TD",
    "TD Canada Trust": "TD",
    "Bank Of Montreal": "BMO",
    "Canadian Imperial Bank Of Commerce": "CIBC",
    "The Bank Of Nova Scotia": "Scotiabank",
    "Scotiabank": "Scotiabank",
	"Fairstone Bank Of Canada": "Walmart",
    "Rogers Bank": "Rogers",
    "HSBC": "HSBC",
    "American Express": "American Express",
    "Capital One": "Capital One",
    "Citi": "Citi",
    "Bank of America": "Bank of America",
    "Wells Fargo": "Wells Fargo",
    "Discover": "Discover",
    "US Bank": "U.S. Bank",
    "Barclays": "Barclays",
    "PNC Bank": "PNC",
    "Synchrony Bank": "Synchrony",
    "Amazon": "Amazon"
  };

/* ================= UI ELEMENTS ================= */
  const binInput = document.getElementById("binInput");
  const analyzeBtn = document.getElementById("analyzeBtn");
  const message = document.getElementById("message");
  const output = document.getElementById("output");
  const selectionArea = document.getElementById("selection-area");
  const cardSelect = document.getElementById("cardSelect");
  const finalResults = document.getElementById("final-results");

  analyzeBtn.addEventListener("click", analyze);

  /* ================= LOCAL FALLBACK LOGIC ================= */
  function getLocalCardData(bin) {
    const firstDigit = bin[0];
    const firstTwo = bin.substring(0, 2);
    let network = "Unknown";
    if (firstDigit === "4") network = "visa";
    else if (firstTwo >= "51" && firstTwo <= "55") network = "mastercard";
    else if (firstTwo === "34" || firstTwo === "37") network = "amex";
    return { scheme: network, type: "credit", bank: { name: "" } };
  }

  /* ================= CORE ANALYZE FUNCTION ================= */
  async function analyze() {
    const bin = binInput.value.trim();

    // Reset UI
    message.textContent = "Verifying..."; 
    output.innerHTML = "";
    finalResults.innerHTML = "";
    selectionArea.style.display = "none";
    cardSelect.innerHTML = `<option value="">-- Choose your card --</option>`;

    if (!/^\d{6,8}$/.test(bin)) {
      message.textContent = "Please enter 6-8 digits.";
      return;
    }

    try {
      /**
       * FIX: Instead of calling a local Node.js route (/bin/), 
       * we use a public API via a CORS proxy.
       */
      const apiUrl = `https://lookup.binlist.net/${bin}`;
      const proxiedUrl = `https://corsproxy.io/?${encodeURIComponent(apiUrl)}`;
      
      const res = await fetch(proxiedUrl);
      
      let data;
      let isFallback = false;

      if (!res.ok) {
        // If API fails (e.g., 429 rate limit), use local detection logic
        data = getLocalCardData(bin);
        isFallback = true;
      } else {
        data = await res.json();
      }

      // Clear "Verifying..." message
      message.textContent = isFallback ? "Using local identification (Limit reached)." : "";

      // Match the bank name from API to your internal map
      const rawBankName = data.bank?.name || "";
      let mappedIssuer = "";
      for (const [fullName, shortName] of Object.entries(bankNameMap)) {
        if (rawBankName.toLowerCase().includes(fullName.toLowerCase())) {
          mappedIssuer = shortName;
          break;
        }
      }

      const network = (data.scheme || data.network || "").toLowerCase();
      const type = (data.type || "").toLowerCase();
      const displayName = mappedIssuer ? `${mappedIssuer} ${network}` : `${network}`;
      
      output.innerHTML = `
        <div class="verified-box">
          <div class="verified-text">✅ ${isFallback ? 'Network Identified' : 'Verified'}</div>
          <div class="card-summary">${displayName.toUpperCase()} ${type.toUpperCase()}</div>
        </div>
      `;

      // Filter database for matching cards
      const matches = cardDB.filter(c => {
        const networkMatch = c.network.toLowerCase().includes(network);
        if (mappedIssuer) {
          return c.issuer.toLowerCase() === mappedIssuer.toLowerCase() && networkMatch;
        }
        return networkMatch;
      });

      if (matches.length > 0) {
        matches.forEach(card => {
          const opt = document.createElement("option");
          opt.value = card.name;
          opt.textContent = `${card.issuer} - ${card.name}`;
          cardSelect.appendChild(opt);
        });
        selectionArea.style.display = "block";
      } else {
        message.textContent = "We couldn't match this card to our rewards database.";
      }

    } catch (err) {
      console.error("Fetch error:", err);
      message.textContent = "An error occurred connecting to the service.";
    }
  }

  /* ================= FINAL CARD SELECTION ================= */
  cardSelect.addEventListener("change", e => {
    const selectedName = e.target.value;
    if (!selectedName) return;
    const card = cardDB.find(c => c.name === selectedName);
    if (!card) return;

    selectionArea.style.display = "none";
    message.textContent = "";

    finalResults.innerHTML = `
      <div class="results-box">
        <h3>${card.name}</h3>
        <label>Best Uses</label>
        <ul>${card.best.map(b => `<li>${b}</li>`).join("")}</ul>
        
        <div class="action-group">
          <button id="changeTypeBtn" class="secondary-btn">Change Card Type</button>
          <button onclick="location.reload()" class="primary-btn">New Search</button>
        </div>
      </div>
    `;

    document.getElementById("changeTypeBtn").addEventListener("click", () => {
      finalResults.innerHTML = "";
      selectionArea.style.display = "block";
    });
  });
});
