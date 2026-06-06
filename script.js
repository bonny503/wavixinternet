const whatsappNumber = "254704770170";

const projects = [
  {
    title: "Apartment Wi-Fi Distribution",
    location: "Nairobi apartment block",
    scope: "GPON router setup, CAT6 riser cabling and tenant Wi-Fi coverage",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=80",
    photoSlot: "Replace with: assets/projects/apartment-internet.jpg",
  },
  {
    title: "Commercial CCTV Coverage",
    location: "Business premises",
    scope: "Camera positioning, NVR setup, remote viewing and night monitoring",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1100&q=80",
    photoSlot: "Replace with: assets/projects/business-cctv.jpg",
  },
  {
    title: "Home Network Upgrade",
    location: "Residential house",
    scope: "Router replacement, used TP-Link access point setup and cable testing",
    image: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?auto=format&fit=crop&w=1100&q=80",
    photoSlot: "Replace with: assets/projects/home-network.jpg",
  },
  {
    title: "Estate Outdoor Cabling",
    location: "Real estate compound",
    scope: "Outdoor CAT6 runs, weather-safe routing and switch configuration",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=80",
    photoSlot: "Replace with: assets/projects/outdoor-cat6.jpg",
  },
  {
    title: "Shop Camera Installation",
    location: "Retail shop",
    scope: "Indoor CCTV, phone viewing, cable concealment and DVR training",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1100&q=80",
    photoSlot: "Replace with: assets/projects/shop-cameras.jpg",
  },
  {
    title: "Building Router Cabinet",
    location: "Commercial building",
    scope: "Router cabinet cleanup, labelled cables and tested network points",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1100&q=80",
    photoSlot: "Replace with: assets/projects/router-cabinet.jpg",
  },
];

const products = [
  {
    name: "HG8546M GPON / XPON Router",
    price: "From 28 USDT",
    image: "assets/products/huawei-hg8546m-router.jpeg",
    features: ["Fiber-ready router", "Good for homes and small offices", "Installation available"],
  },
  {
    name: "CAT6 Indoor Cable",
    price: "From 0.35 USDT per metre",
    image: "assets/products/cat6-outdoor-blue.jpeg",
    features: ["For rooms, offices and router points", "Neat trunking option", "Tested after installation"],
  },
  {
    name: "CAT6 Outdoor Cable",
    price: "From 0.55 USDT per metre",
    image: "assets/products/cat6-outdoor-voltacomm.jpeg",
    features: ["For estates and outdoor runs", "Weather-resistant routing", "Pole or wall path planning"],
  },
  {
    name: "Used Tenda Routers",
    price: "From 15 USDT",
    image: "assets/products/three-antenna-router.jpeg",
    features: ["Tested used units", "Good for Wi-Fi extension", "Setup support included"],
  },
  {
    name: "Used TP-Link Routers",
    price: "From 18 USDT",
    image: "assets/products/router-front-box.jpeg",
    features: ["Tested before sale", "Home and office use", "Can be configured as access point"],
  },
  {
    name: "CCTV Camera Kits",
    price: "From 120 USDT",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1100&q=80",
    features: ["DVR/NVR options", "Remote phone viewing", "Indoor and outdoor cameras"],
  },
];

const pricePlans = [
  {
    name: "Home Internet Setup",
    price: "45 USDT / USDC / RLUSD",
    badge: "Starter",
    features: ["Router configuration", "1 to 2 rooms", "Basic cable management", "Wi-Fi name and password setup"],
  },
  {
    name: "Apartment Network Setup",
    price: "180 USDT / USDC / RLUSD",
    badge: "Popular",
    featured: true,
    features: ["Site survey", "GPON/XPON planning", "CAT6 cabling estimate", "Tenant Wi-Fi layout"],
  },
  {
    name: "Business CCTV Setup",
    price: "220 USDT / USDC / RLUSD",
    badge: "Security",
    features: ["Camera placement", "DVR/NVR configuration", "Phone viewing", "User training"],
  },
  {
    name: "Commercial Building Project",
    price: "650 USDT+ / USDC / RLUSD",
    badge: "Custom",
    features: ["Multi-floor planning", "Network cabinet", "CCTV and internet integration", "Maintenance option"],
  },
  {
    name: "Router Setup Only",
    price: "20 USDT / USDC / RLUSD",
    badge: "Fast",
    features: ["Router login setup", "Wi-Fi password", "Basic troubleshooting", "Placement advice"],
  },
  {
    name: "Cabling Labour",
    price: "From 0.75 USDT per metre",
    badge: "CAT6",
    features: ["Indoor or outdoor routing", "Cable termination", "Testing", "Trunking quoted separately"],
  },
];

function renderProjects() {
  const projectGrid = document.querySelector("#projectGrid");
  projectGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <img src="${project.image}" alt="${project.title}">
          <div>
            <h3>${project.title}</h3>
            <p>${project.scope}</p>
            <div class="project-meta">
              <span>${project.location}</span>
              <span>${project.photoSlot}</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderProducts() {
  const shopGrid = document.querySelector("#shopGrid");
  shopGrid.innerHTML = products
    .map(
      (product) => `
        <article class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <div>
            <h3>${product.name}</h3>
            <strong class="product-price">${product.price}</strong>
            <ul>
              ${product.features.map((feature) => `<li>${feature}</li>`).join("")}
            </ul>
            <a class="outline-button" href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi Wavix Internet, is ${product.name} available?`)}" target="_blank" rel="noreferrer">Check Stock</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderPrices() {
  const pricingGrid = document.querySelector("#pricingGrid");
  pricingGrid.innerHTML = pricePlans
    .map(
      (plan) => `
        <article class="price-card ${plan.featured ? "featured" : ""}">
          <span class="price-badge">${plan.badge}</span>
          <h3>${plan.name}</h3>
          <div class="plan-price">${plan.price}</div>
          <p>Starting estimate before site survey.</p>
          <ul>
            ${plan.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
          <a class="primary-button" href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi Wavix Internet, I want a quote for ${plan.name}.`)}" target="_blank" rel="noreferrer">Request This</a>
        </article>
      `
    )
    .join("");
}

function normalizeKenyaPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("254")) return `+${digits}`;
  if (digits.startsWith("0")) return `+254${digits.slice(1)}`;
  if (digits.length === 9) return `+254${digits}`;
  return phone.trim();
}

document.querySelector("#quoteForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const buildingType = document.querySelector("#buildingType").value;
  const serviceNeeded = document.querySelector("#serviceNeeded").value;
  const location = document.querySelector("#quoteLocation").value.trim();
  const phone = normalizeKenyaPhone(document.querySelector("#quotePhone").value);
  const details = document.querySelector("#quoteDetails").value.trim() || "No extra details yet.";
  const message = [
    "Hi Wavix Internet, I need an installation quote.",
    `Building type: ${buildingType}.`,
    `Service: ${serviceNeeded}.`,
    `Location: ${location}.`,
    `My phone: ${phone}.`,
    `Details: ${details}`,
  ].join(" ");

  document.querySelector("#quoteNote").textContent = "Opening WhatsApp with your quote details.";
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noreferrer");
});

renderProjects();
renderProducts();
renderPrices();
