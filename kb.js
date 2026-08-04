/* ============================================================================
   Collaborate Cayuga — Concept Site Knowledge Base
   Single source of truth. Drives page sections, industry modals, header search,
   and the assistant. Edit content HERE only.

   Collaborate Cayuga is the shared front door for Cayuga County's economic
   development agencies. CCIDA hosts and operates the platform; partner agencies
   are surfaced through the routing module in the `partners` block below.

   Content assembled from public sources, retrieved July 2026.
   Items tagged confirm:true are shown with a ⚑ marker and must be verified by
   CCIDA before any public launch.
   ========================================================================== */

window.CCIDA_KB = {
  meta: {
    org: "Collaborate Cayuga",
    short: "Collaborate Cayuga",
    host: "Cayuga County Industrial Development Agency",
    tagline: "Ask Once. The Whole County Answers.",
    retrieved: "July 2026",
    address: "188 Genesee Street, Auburn, NY 13021",
    mailing: "P.O. Box 262, Auburn, NY 13021",
    phone: "(315) 612-7775",
    email: "director@cayugacountyida.org",
    ctaLabel: "Start a Confidential Conversation"
  },

  /* -------------------------------------------------------------- partners
     The routing module. Every role description below is inferred from the
     agency's general type and is flagged for CCIDA confirmation. Only the
     CCIDA URL is known; partner URLs are to be supplied by CCIDA. */
  partnersNote: "Collaborate Cayuga is a shared front door, not a replacement for the agencies behind it. Tell us what you need and we point you at the right desk — or, if you would rather choose yourself, start here.",
  partners: [
    {
      id: "ccida",
      name: "Cayuga County IDA",
      abbr: "CCIDA",
      role: "County-wide incentives & site development",
      blurb: "Payment in lieu of taxes agreements, sales and use tax exemptions, mortgage recording tax exemptions and tax-exempt bond financing for projects across Cayuga County, plus shovel-ready site identification.",
      bestFor: "Companies building, expanding or relocating a facility anywhere in Cayuga County.",
      url: "https://www.cayugacountyida.org",
      host: true
    },
    {
      id: "aida",
      name: "Auburn IDA",
      abbr: "AIDA",
      role: "City of Auburn projects",
      blurb: "The City of Auburn's industrial development agency, handling incentives and project financing for development inside the city limits — including the northwest quadrant Qualified Opportunity Zone.",
      bestFor: "Projects sited within the City of Auburn.",
      url: null,
      confirm: true
    },
    {
      id: "sbdc",
      name: "North Central SBDC",
      abbr: "SBDC",
      role: "Small business & startup advising",
      blurb: "No-cost, confidential advising for small businesses and startups: business planning, financing readiness, market research and government contracting support.",
      bestFor: "Small business owners, startups and entrepreneurs.",
      url: null,
      confirm: true
    },
    {
      id: "ccdc",
      name: "Cayuga County Development Corporation",
      abbr: "CCDC",
      role: "Business lending & gap financing",
      blurb: "Local development corporation providing loan capital and gap financing for small and mid-sized business projects that fall outside conventional bank lending.",
      bestFor: "Businesses seeking loan capital, working capital or gap financing.",
      url: null,
      confirm: true
    }
  ],

  /* ---------------------------------------------------------------- stats */
  stats: [
    { value: 270, prefix: "$", suffix: "M", label: "Single-project capital investment", note: "Cayuga Milk Ingredients two-phase expansion, opened June 2025" },
    { value: 40000, suffix: "+", label: "County workforce", note: "Concentrated in agriculture, manufacturing and services" },
    { value: 26, suffix: " mi", label: "To Syracuse", note: "⚑ Approximate drive. Interstate 90 / NYS Thruway runs the length of the county" },
    { value: 1, prefix: "#", label: "Agriculture producer in New York State", note: "Cayuga County leads NYS in agricultural production", static: true }
  ],

  /* ----------------------------------------------------------- industries */
  industries: [
    {
      id: "dairy",
      name: "Dairy & Food Processing",
      icon: "milk",
      blurb: "The number-one agricultural county in New York, with processing capacity already at scale and a farm base that supplies it.",
      body: [
        "Cayuga County is the leading agricultural producer in New York State, and that raw-material base has pulled processing capacity in behind it.",
        "Cayuga Milk Ingredients — owned by 22 farm families across 32 Finger Lakes farms — processes roughly 1.5 billion pounds of milk a year at its Eagle Drive site in the Town of Aurelius. In June 2025 the company opened a $270 million two-phase expansion, including a new 235,000-square-foot consumer goods plant with UHT/aseptic low-acid packaging systems. The project adds up to 150 jobs on top of an existing workforce of about 100, and supported more than 350 construction jobs during the build.",
        "For a food or beverage manufacturer, that means the hard part is already solved here: milk supply, processing infrastructure, aseptic packaging capability, cold chain, and a workforce that has done this work before."
      ],
      lookingFor: [
        "Dairy ingredient and protein processors",
        "Beverage and functional-drink co-packers",
        "Specialty food manufacturers needing aseptic or extended-shelf-life capability",
        "Cold storage and food-grade distribution"
      ]
    },
    {
      id: "plastics",
      name: "Advanced Plastics & Packaging",
      icon: "layers",
      blurb: "A deep, established polymer cluster in Auburn — blow molding, injection molding, and the tooling talent that goes with it.",
      body: [
        "Auburn has been a plastics town for decades. Currier Plastics, founded in 1982, runs blow molding and injection molding for the medical, health and beauty, food, beverage and electronics markets. Bo-Mer Plastics and Tessy Medical Products add further polymer processing capacity in the same labor shed.",
        "O-I Glass, the world's largest glass container manufacturer, operates in the region as well — which means packaging buyers can source both rigid plastic and glass from the same 30-mile radius.",
        "The practical advantage for a new entrant is the labor pool: process technicians, tooling and mold-maintenance staff, and quality personnel who already work to food-contact and medical standards."
      ],
      lookingFor: [
        "Injection and blow molders serving medical or food-contact markets",
        "Tooling, mold-making and automation suppliers",
        "Rigid and flexible packaging converters",
        "Resin compounding and recycling operations"
      ]
    },
    {
      id: "metals",
      name: "Metals & Steel Supply Chain",
      icon: "bolt",
      blurb: "Nucor Steel Auburn anchors a metals base that supports fabricators, machine shops, and equipment builders.",
      body: [
        "Nucor Steel Auburn is one of the county's largest industrial employers and anchors a regional metals supply chain. Around it sit fabricators, machine shops and equipment manufacturers — including D&W Diesel, a long-established provider of engine components and services, and AAI Power-Flo Technologies.",
        "Xylem, the global water technology manufacturer, also operates in the Auburn area, drawing on the same pool of welders, machinists, assemblers and industrial maintenance technicians.",
        "For metal-intensive operations, the value here is proximity to melt capacity plus a workforce already trained on industrial equipment."
      ],
      lookingFor: [
        "Steel service centers and metal fabricators",
        "Precision machining and CNC operations",
        "Industrial and agricultural equipment manufacturers",
        "Welding-intensive assembly operations"
      ]
    },
    {
      id: "medtech",
      name: "Medical Device & Life Sciences",
      icon: "pulse",
      blurb: "Regulated manufacturing already happens here — cleanroom molding, medical components, and a hospital system as the county's largest employer.",
      body: [
        "Tessy Medical Products and Currier Plastics both serve medical markets from the Auburn area, meaning validated, regulated manufacturing is an established practice in this labor shed rather than something a newcomer has to build from zero.",
        "Auburn Community Hospital is the largest single employer in Cayuga County, and Cayuga Community College supplies both allied-health and manufacturing-technician graduates into the local market.",
        "Companies that need ISO-class assembly, medical molding, or device sub-assembly find both the supplier base and the quality-trained workforce within a short drive."
      ],
      lookingFor: [
        "Medical device sub-assembly and contract manufacturers",
        "Cleanroom molding and single-use component producers",
        "Diagnostics and lab consumables manufacturers",
        "Sterilization, packaging and validation services"
      ]
    },
    {
      id: "agtech",
      name: "Ag Technology & Logistics",
      icon: "route",
      blurb: "Interstate 90 crosses the county, Syracuse is under 30 minutes, and the farm base makes Cayuga a live testbed for agricultural technology.",
      body: [
        "Interstate 90 — the New York State Thruway — runs east–west through Cayuga County, putting the county on the primary freight corridor between Boston, Albany, Syracuse, Rochester, Buffalo and the Midwest. Syracuse Hancock International Airport is roughly a 30-minute drive.",
        "That location, combined with the largest agricultural output in the state, makes the county a practical place to site controlled-environment agriculture, ag-equipment manufacturing, precision-agriculture technology, and food-grade distribution.",
        "Distribution operations get Thruway access without Thruway-corridor land costs; ag-tech companies get real farms and real processors willing to pilot."
      ],
      lookingFor: [
        "Controlled-environment agriculture and greenhouse operations",
        "Precision agriculture equipment and sensing technology",
        "Regional distribution and food-grade warehousing",
        "Renewable energy and anaerobic digestion tied to agriculture"
      ]
    }
  ],

  /* ---------------------------------------------------------------- sites */
  sitesNote: "Sample records shown to demonstrate the property module. Live listings, acreage, utilities and pricing to be supplied by CCIDA.",
  sites: [
    { name: "Auburn Opportunity Zone — Northwest Quadrant", type: "Business Park", acres: "Parcels to ~15 acres", zoning: "Commercial & Industrial", notes: "Qualified Opportunity Zone. Permitted uses include wholesale, storage, warehousing, distribution and printing, plus food processing, precision manufacturing, assembly and packaging. Parcels sized to allow future expansion.", sample: false },
    { name: "Eagle Drive Industrial Corridor — Aurelius", type: "Food & Dairy Processing", acres: "Contact CCIDA", zoning: "Industrial", notes: "Home to the Cayuga Milk Ingredients campus and its $270M two-phase expansion. Established heavy food-processing utilities and truck access.", sample: false },
    { name: "Thruway Exit Logistics Parcel", type: "Distribution", acres: "40 ± acres", zoning: "Industrial", notes: "Illustrates how a shovel-ready logistics site would be presented — utilities, rail access and drive-time data.", sample: true },
    { name: "Available Manufacturing Building", type: "Existing Building", acres: "85,000 sq ft", zoning: "Industrial", notes: "Illustrates the existing-building card — clear height, docks, power service, sprinkler and asking rate.", sample: true }
  ],

  /* ----------------------------------------------------------- incentives */
  incentives: [
    { name: "Payment In Lieu of Taxes (PILOT)", body: "Negotiated abatement of real property taxes on new construction and improvements, structured over a term of years so a project's tax burden phases in as it ramps up." },
    { name: "Sales & Use Tax Exemption", body: "Exemption from New York State and local sales tax on construction materials, furnishings and equipment purchased for an approved project." },
    { name: "Mortgage Recording Tax Exemption", body: "Exemption from the mortgage recording tax on financing for an approved project." },
    { name: "Tax-Exempt Bond Financing", body: "For qualifying manufacturers and not-for-profits, CCIDA can issue tax-exempt industrial development bonds, lowering the cost of long-term capital." },
    { name: "Technical Assistance & Site Support", body: "CCIDA works alongside applicants on site identification, permitting coordination, utility conversations and connections to state programs." },
    { name: "New York State Programs", body: "Projects may also access Empire State Development programs, Excelsior Jobs Program credits, and Central New York Regional Economic Development Council funding rounds.", confirm: true }
  ],

  /* ------------------------------------------------------------ employers */
  employers: [
    { name: "Auburn Community Hospital", sector: "Healthcare", note: "Largest employer in Cayuga County" },
    { name: "Nucor Steel Auburn", sector: "Steel" },
    { name: "Cayuga Milk Ingredients", sector: "Dairy Processing", note: "$270M expansion opened 2025" },
    { name: "Currier Plastics", sector: "Plastics", note: "Blow & injection molding since 1982" },
    { name: "O-I Glass", sector: "Glass Packaging" },
    { name: "Tessy Medical Products", sector: "Medical Devices" },
    { name: "Xylem", sector: "Water Technology" },
    { name: "D&W Diesel", sector: "Engine Components" },
    { name: "Bo-Mer Plastics", sector: "Plastics" },
    { name: "AAI Power-Flo Technologies", sector: "Industrial Equipment" }
  ],

  /* ------------------------------------------------------------ distances */
  distances: [
    { city: "Syracuse, NY", miles: 26 },
    { city: "Ithaca, NY", miles: 37 },
    { city: "Rochester, NY", miles: 65 },
    { city: "Buffalo, NY", miles: 140 },
    { city: "Albany, NY", miles: 150 },
    { city: "Toronto, ON", miles: 230 },
    { city: "New York City", miles: 265 },
    { city: "Boston, MA", miles: 310 }
  ],
  distancesNote: "Approximate driving distances from Auburn, NY. Confirm before publication.",

  /* ------------------------------------------------------------ workforce */
  workforce: [
    { label: "County population", value: "≈74,000", note: "2026 estimate" },
    { label: "County workforce", value: "40,000+", note: "Agriculture, manufacturing and services" },
    { label: "Training partner", value: "Cayuga CC", note: "Cayuga Community College — manufacturing technician and allied-health programs" },
    { label: "Commuting reach", value: "Syracuse", note: "Auburn sits inside the Syracuse metro labor market" }
  ],

  /* ------------------------------------------------------------- contacts */
  contacts: [
    { name: "Michael Miller", title: "CEO / Executive Director", email: "director@cayugacountyida.org" },
    { name: "Tracy Verrier", title: "Chief Financial Officer", email: "treasurer@cayugacountyida.org" }
  ],

  /* ------------------------------------------------------------------ faq */
  faq: [
    {
      q: "What is Collaborate Cayuga?",
      aliases: "collaborate cayuga what is this site platform one stop shop front door portal",
      a: "Collaborate Cayuga is the shared front door for economic development in Cayuga County. Rather than making you work out which agency handles what, it puts the county's economic development organizations in one place and routes you to the right one. Four agencies participate today: the Cayuga County IDA, the Auburn IDA, the North Central SBDC and the Cayuga County Development Corporation. The platform is hosted and operated by the Cayuga County IDA."
    },
    {
      q: "Which agency should I be talking to?",
      aliases: "who should i contact which agency route right person direct refer partner organizations agencies list",
      a: "It depends on what you need. Building, expanding or relocating a facility anywhere in the county — Cayuga County IDA. A project inside the City of Auburn — Auburn IDA. You are a small business or a startup and want advising — North Central SBDC. You need loan capital or gap financing — Cayuga County Development Corporation. If you are not sure, describe your project and we will point you at the right desk."
    },
    {
      q: "Are these agencies merging into a one-stop shop?",
      aliases: "one stop shop consolidate merge merger single agency future long term combine",
      a: "Cayuga County's economic development agencies are working toward a formal one-stop model. Collaborate Cayuga is the first step: a shared platform the agencies can use together now, ahead of that consolidation. Over time the intent is for this to become the single landing page for economic development in the county."
    },
    {
      q: "What does the CCIDA actually do?",
      aliases: "ida agency organization mission purpose role what do you do help support",
      a: "The Cayuga County Industrial Development Agency is a public-benefit corporation and the host of Collaborate Cayuga. It helps businesses locate, grow and expand in Cayuga County using financial incentives — PILOT agreements, sales tax and mortgage recording tax exemptions, and tax-exempt bond financing — along with technical assistance and help finding a site."
    },
    {
      q: "What incentives can I get?",
      aliases: "incentive abatement exemption benefit package grant credit financing assistance tax break relief pilot bond savings",
      a: "The core tools are a negotiated PILOT that phases in property taxes on new construction, exemption from state and local sales tax on construction materials and equipment, exemption from the mortgage recording tax, and for qualifying manufacturers, tax-exempt bond financing. What a specific project qualifies for depends on jobs, investment and the project's structure — that's a conversation with our Executive Director."
    },
    {
      q: "What industries is Cayuga County targeting?",
      a: "Five: dairy and food processing, advanced plastics and packaging, metals and the steel supply chain, medical device and life science manufacturing, and ag technology and logistics. Each is built on employers already operating here rather than on aspiration."
    },
    {
      q: "Do you have available sites and buildings?",
      aliases: "site building land acreage property park shovel ready industrial space square feet lease",
      a: "Yes. Cayuga County offers shovel-ready development sites, and the northwest quadrant of the City of Auburn is a Qualified Opportunity Zone with parcels up to roughly 15 acres suited to warehousing, distribution, food processing, precision manufacturing and packaging. For a current inventory matched to your specifications, contact CCIDA directly."
    },
    {
      q: "How far is Cayuga County from major markets?",
      a: "Auburn is about 26 miles from Syracuse, 65 from Rochester, 140 from Buffalo, 150 from Albany, and roughly 265 from New York City. Interstate 90 — the New York State Thruway — runs through the county, and Syracuse Hancock International Airport is about a half-hour drive."
    },
    {
      q: "What's the workforce like?",
      a: "The county has a workforce of more than 40,000 in a population of about 74,000, concentrated in agriculture, manufacturing and services. Because Auburn sits inside the Syracuse labor market, employers can recruit well beyond the county line. Cayuga Community College runs manufacturing technician and allied-health programs."
    },
    {
      q: "Who are the largest employers?",
      a: "Auburn Community Hospital is the largest. On the industrial side: Nucor Steel Auburn, Cayuga Milk Ingredients, Currier Plastics, O-I Glass, Tessy Medical Products, Xylem, D&W Diesel, Bo-Mer Plastics and AAI Power-Flo Technologies."
    },
    {
      q: "What's the biggest recent project here?",
      a: "Cayuga Milk Ingredients completed a $270 million two-phase expansion in the Town of Aurelius, formally opened in June 2025. It added a 235,000-square-foot consumer goods plant with UHT and aseptic packaging, and up to 150 new jobs on an existing base of about 100. The company is owned by 22 farm families across 32 Finger Lakes farms and processes about 1.5 billion pounds of milk a year."
    },
    {
      q: "Is my inquiry confidential?",
      a: "Yes. Site selection conversations are handled confidentially. Nothing about your project is shared publicly without your permission, and we routinely work under non-disclosure agreements."
    },
    {
      q: "Who do I talk to?",
      a: "For a location or expansion project, Michael Miller, CEO and Executive Director of the Cayuga County IDA, at director@cayugacountyida.org or (315) 612-7775. The office is at 188 Genesee Street in Auburn. If your question is really a small business, city-of-Auburn or financing question, we will hand you to the Auburn IDA, the North Central SBDC or the Cayuga County Development Corporation rather than making you start over."
    }
  ]
};
