// src/data/hospitals.js
export const hospitals = [
  {
    id: 1,
    name: "City General Hospital",
    address: "123 Main St, New York, NY 10001",
    phone: "(212) 555-1234",
    email: "info@citygeneral.com",
    website: "https://citygeneral.com",
    description: "A leading healthcare provider with state-of-the-art facilities and expert medical staff.",
    specialties: ["Cardiology", "Neurology", "Orthopedics", "Pediatrics"],
    rating: 4.7,
    reviews: 342,
    image: "/images/hospitals/city-general.jpg",
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Cardiology", hours: "Mon-Fri: 8AM-6PM" },
      { name: "Pediatrics", hours: "Mon-Sat: 8AM-8PM" },
      { name: "Radiology", hours: "Mon-Fri: 7AM-7PM" }
    ],
    facilities: ["ICU", "Emergency Room", "Surgical Suites", "Imaging Center", "Pharmacy", "Cafeteria"],
    insuranceAccepted: ["Aetna", "Blue Cross", "Cigna", "UnitedHealth", "Medicare"]
  },
  {
    id: 2,
    name: "Mercy Medical Center",
    address: "456 Oak Ave, Los Angeles, CA 90001",
    phone: "(323) 555-5678",
    email: "contact@mercymedical.org",
    website: "https://mercymedical.org",
    description: "Compassionate care with advanced medical technology and a focus on patient-centered treatment.",
    specialties: ["Oncology", "Maternity", "Geriatrics", "Rehabilitation"],
    rating: 4.5,
    reviews: 287,
    image: "/images/hospitals/mercy-medical.jpg",
    location: {
      lat: 34.0522,
      lng: -118.2437
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Oncology", hours: "Mon-Fri: 8AM-5PM" },
      { name: "Maternity", hours: "24/7" },
      { name: "Rehab", hours: "Mon-Sat: 9AM-6PM" }
    ],
    facilities: ["Cancer Center", "Birth Center", "Rehab Unit", "Diagnostic Lab", "Physical Therapy", "Chapel"],
    insuranceAccepted: ["Aetna", "Blue Shield", "Kaiser", "Health Net", "Medi-Cal"]
  },
  {
    id: 3,
    name: "University Medical Center",
    address: "789 University Blvd, Chicago, IL 60601",
    phone: "(312) 555-9012",
    email: "info@umc.edu",
    website: "https://umc.edu",
    description: "Teaching hospital affiliated with the University of Chicago, offering cutting-edge treatments and clinical trials.",
    specialties: ["Transplant", "Cardiothoracic Surgery", "Endocrinology", "Rheumatology"],
    rating: 4.8,
    reviews: 421,
    image: "/images/hospitals/university-medical.jpg",
    location: {
      lat: 41.8781,
      lng: -87.6298
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Transplant", hours: "Mon-Fri: 7AM-7PM" },
      { name: "Research", hours: "Mon-Fri: 9AM-5PM" },
      { name: "Surgery", hours: "Mon-Sat: 7AM-9PM" }
    ],
    facilities: ["Transplant Center", "Research Labs", "Surgical Suites", "Medical Library", "Simulation Center", "Cafeteria"],
    insuranceAccepted: ["Blue Cross", "UnitedHealth", "Aetna", "Cigna", "Humana"]
  },
  {
    id: 4,
    name: "St. Mary's Hospital",
    address: "321 Health Park Dr, Miami, FL 33101",
    phone: "(305) 555-3456",
    email: "info@stmarys.org",
    website: "https://stmarys.org",
    description: "Faith-based healthcare provider with a focus on community wellness and preventive care.",
    specialties: ["Family Medicine", "Women's Health", "Mental Health", "Diabetes Care"],
    rating: 4.4,
    reviews: 198,
    image: "/images/hospitals/st-marys.jpg",
    location: {
      lat: 25.7617,
      lng: -80.1918
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Family Practice", hours: "Mon-Sat: 8AM-8PM" },
      { name: "Behavioral Health", hours: "Mon-Fri: 8AM-6PM" },
      { name: "Diabetes Clinic", hours: "Tue & Thu: 9AM-4PM" }
    ],
    facilities: ["Family Practice", "Women's Center", "Mental Health Unit", "Diabetes Clinic", "Chapel", "Community Education"],
    insuranceAccepted: ["Aetna", "Blue Cross", "Cigna", "Florida Blue", "Medicare"]
  },
  {
    id: 5,
    name: "Mountain View Regional Hospital",
    address: "555 Summit Rd, Denver, CO 80201",
    phone: "(303) 555-7890",
    email: "contact@mountainviewhealth.com",
    website: "https://mountainviewhealth.com",
    description: "Specialized care in a beautiful mountain setting with focus on orthopedics and sports medicine.",
    specialties: ["Orthopedics", "Sports Medicine", "Physical Therapy", "Pain Management"],
    rating: 4.6,
    reviews: 256,
    image: "/images/hospitals/mountain-view.jpg",
    location: {
      lat: 39.7392,
      lng: -104.9903
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Orthopedics", hours: "Mon-Fri: 7AM-6PM" },
      { name: "Sports Medicine", hours: "Mon-Sat: 8AM-5PM" },
      { name: "Rehab", hours: "Mon-Sat: 8AM-7PM" }
    ],
    facilities: ["Orthopedic Institute", "Sports Medicine Center", "Rehab Gym", "Imaging Center", "Physical Therapy", "Cafeteria"],
    insuranceAccepted: ["Aetna", "Blue Cross", "UnitedHealth", "Kaiser", "Medicare"]
  },
  {
    id: 6,
    name: "Riverside Community Hospital",
    address: "888 Riverfront Way, Seattle, WA 98101",
    phone: "(206) 555-2468",
    email: "info@riversidehealth.org",
    website: "https://riversidehealth.org",
    description: "Community-focused hospital with comprehensive services and a commitment to local health initiatives.",
    specialties: ["Primary Care", "Geriatrics", "Home Health", "Palliative Care"],
    rating: 4.3,
    reviews: 174,
    image: "/images/hospitals/riverside.jpg",
    location: {
      lat: 47.6062,
      lng: -122.3321
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Primary Care", hours: "Mon-Sat: 8AM-8PM" },
      { name: "Senior Health", hours: "Mon-Fri: 9AM-5PM" },
      { name: "Home Health", hours: "Mon-Fri: 8AM-6PM" }
    ],
    facilities: ["Primary Care Clinic", "Senior Health Center", "Home Health Services", "Palliative Care Unit", "Community Room", "Pharmacy"],
    insuranceAccepted: ["Regence", "Premera", "Aetna", "Cigna", "Medicare"]
  },
  {
    id: 7,
    name: "Phoenix Regional Medical Center",
    address: "101 Desert Sky Blvd, Phoenix, AZ 85001",
    phone: "(602) 555-1122",
    email: "info@phoenixregional.com",
    website: "https://phoenixregional.com",
    description: "Advanced medical center serving the Southwest with specialized treatment programs.",
    specialties: ["Cardiology", "Oncology", "Neurology", "Bariatric Surgery"],
    rating: 4.5,
    reviews: 312,
    image: "/images/hospitals/phoenix-regional.jpg",
    location: {
      lat: 33.4484,
      lng: -112.0740
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Cardiology", hours: "Mon-Fri: 7AM-7PM" },
      { name: "Oncology", hours: "Mon-Fri: 8AM-6PM" },
      { name: "Bariatrics", hours: "Mon-Fri: 8AM-5PM" }
    ],
    facilities: ["Heart Institute", "Cancer Center", "Neuroscience Institute", "Bariatric Surgery Center", "Imaging", "Rehab"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealth", "Medicare"]
  },
  {
    id: 8,
    name: "Boston Medical Center",
    address: "72 Commonwealth Ave, Boston, MA 02101",
    phone: "(617) 555-3344",
    email: "contact@bostonmedical.org",
    website: "https://bostonmedical.org",
    description: "Academic medical center with a commitment to providing exceptional care regardless of ability to pay.",
    specialties: ["Internal Medicine", "Pediatrics", "Surgery", "Infectious Disease"],
    rating: 4.6,
    reviews: 398,
    image: "/images/hospitals/boston-medical.jpg",
    location: {
      lat: 42.3601,
      lng: -71.0589
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Internal Medicine", hours: "Mon-Fri: 8AM-6PM" },
      { name: "Pediatrics", hours: "Mon-Sat: 8AM-8PM" },
      { name: "Surgery", hours: "Mon-Fri: 7AM-7PM" }
    ],
    facilities: ["Emergency Department", "Surgical Suites", "Pediatric Unit", "Imaging Center", "Laboratory", "Pharmacy"],
    insuranceAccepted: ["Blue Cross", "Harvard Pilgrim", "Tufts", "Aetna", "Medicare"]
  },
  {
    id: 9,
    name: "Dallas Heart Hospital",
    address: "777 Forest Ln, Dallas, TX 75230",
    phone: "(214) 555-5566",
    email: "info@dallasheart.com",
    website: "https://dallasheart.com",
    description: "Specialized cardiac care hospital with advanced cardiovascular treatments and research.",
    specialties: ["Cardiology", "Cardiothoracic Surgery", "Vascular Medicine", "Electrophysiology"],
    rating: 4.8,
    reviews: 445,
    image: "/images/hospitals/dallas-heart.jpg",
    location: {
      lat: 32.7767,
      lng: -96.7970
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Cardiac Cath Lab", hours: "Mon-Fri: 7AM-7PM" },
      { name: "Cardiac Surgery", hours: "Mon-Fri: 7AM-6PM" },
      { name: "Cardiac Rehab", hours: "Mon-Sat: 8AM-6PM" }
    ],
    facilities: ["Cardiac Catheterization Labs", "Hybrid OR", "Cardiac ICU", "Electrophysiology Lab", "Rehab Center", "Imaging"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealth", "Medicare"]
  },
  {
    id: 10,
    name: "San Francisco General Hospital",
    address: "1001 Potrero Ave, San Francisco, CA 94110",
    phone: "(415) 555-7788",
    email: "info@sfgeneral.org",
    website: "https://sfgeneral.org",
    description: "Level 1 trauma center and public hospital serving the diverse population of San Francisco.",
    specialties: ["Trauma Care", "Emergency Medicine", "Infectious Disease", "Psychiatry"],
    rating: 4.2,
    reviews: 267,
    image: "/images/hospitals/sf-general.jpg",
    location: {
      lat: 37.7576,
      lng: -122.4076
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Trauma", hours: "24/7" },
      { name: "Psychiatry", hours: "Mon-Fri: 8AM-8PM" },
      { name: "Infectious Disease", hours: "Mon-Fri: 8AM-6PM" }
    ],
    facilities: ["Trauma Center", "Emergency Department", "Psychiatric Unit", "Isolation Rooms", "Imaging", "Lab"],
    insuranceAccepted: ["Blue Shield", "Health Net", "Kaiser", "Anthem", "Medi-Cal"]
  },
  {
    id: 11,
    name: "Atlanta Medical Center",
    address: "303 Parkway Dr NE, Atlanta, GA 30312",
    phone: "(404) 555-9900",
    email: "info@atlantamedcenter.com",
    website: "https://atlantamedcenter.com",
    description: "Comprehensive healthcare services with a focus on community wellness and education.",
    specialties: ["Emergency Medicine", "Orthopedics", "Women's Health", "Neurology"],
    rating: 4.4,
    reviews: 321,
    image: "/images/hospitals/atlanta-medical.jpg",
    location: {
      lat: 33.7490,
      lng: -84.3880
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Orthopedics", hours: "Mon-Fri: 7AM-6PM" },
      { name: "Women's Health", hours: "Mon-Sat: 8AM-8PM" },
      { name: "Neurology", hours: "Mon-Fri: 8AM-5PM" }
    ],
    facilities: ["Emergency Department", "Orthopedic Institute", "Women's Center", "Neuroscience Center", "Imaging", "Rehab"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealth", "Medicare"]
  },
  {
    id: 12,
    name: "Minneapolis Heart Institute",
    address: "920 E 28th St, Minneapolis, MN 55407",
    phone: "(612) 555-2233",
    email: "info@mplsheart.org",
    website: "https://mplsheart.org",
    description: "Nationally recognized leader in cardiovascular care and research.",
    specialties: ["Cardiology", "Cardiothoracic Surgery", "Vascular Medicine", "Preventive Cardiology"],
    rating: 4.9,
    reviews: 512,
    image: "/images/hospitals/minneapolis-heart.jpg",
    location: {
      lat: 44.9778,
      lng: -93.2650
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Cardiac Cath Lab", hours: "Mon-Fri: 7AM-7PM" },
      { name: "Cardiac Surgery", hours: "Mon-Fri: 7AM-6PM" },
      { name: "Preventive Cardiology", hours: "Mon-Fri: 8AM-5PM" }
    ],
    facilities: ["Cardiac Catheterization Labs", "Hybrid OR", "Cardiac ICU", "Research Labs", "Rehab Center", "Imaging"],
    insuranceAccepted: ["Blue Cross Blue Shield", "HealthPartners", "Medica", "UCare", "Medicare"]
  },
  {
    id: 13,
    name: "Detroit Medical Center",
    address: "4201 St Antoine St, Detroit, MI 48201",
    phone: "(313) 555-4455",
    email: "info@detroitmedical.org",
    website: "https://detroitmedical.org",
    description: "Leading academic medical center with comprehensive services and cutting-edge research.",
    specialties: ["Oncology", "Neurology", "Transplant", "Emergency Medicine"],
    rating: 4.3,
    reviews: 289,
    image: "/images/hospitals/detroit-medical.jpg",
    location: {
      lat: 42.3314,
      lng: -83.0458
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Oncology", hours: "Mon-Fri: 8AM-6PM" },
      { name: "Neurology", hours: "Mon-Fri: 8AM-5PM" },
      { name: "Transplant", hours: "Mon-Fri: 7AM-7PM" }
    ],
    facilities: ["Cancer Center", "Neuroscience Institute", "Transplant Center", "Emergency Department", "Imaging", "Lab"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealth", "Medicare"]
  },
  {
    id: 14,
    name: "Portland Medical Center",
    address: "505 NW 12th Ave, Portland, OR 97209",
    phone: "(503) 555-6677",
    email: "info@portlandmed.com",
    website: "https://portlandmed.com",
    description: "Community-focused hospital with holistic approach to healthcare and wellness.",
    specialties: ["Family Medicine", "Alternative Medicine", "Mental Health", "Women's Health"],
    rating: 4.5,
    reviews: 234,
    image: "/images/hospitals/portland-medical.jpg",
    location: {
      lat: 45.5152,
      lng: -122.6784
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Family Practice", hours: "Mon-Sat: 8AM-8PM" },
      { name: "Mental Health", hours: "Mon-Fri: 8AM-6PM" },
      { name: "Women's Health", hours: "Mon-Sat: 8AM-8PM" }
    ],
    facilities: ["Family Practice Clinic", "Mental Health Unit", "Women's Center", "Alternative Medicine Clinic", "Imaging", "Pharmacy"],
    insuranceAccepted: ["Regence", "Blue Cross Blue Shield", "Aetna", "Cigna", "Medicare"]
  },
  {
    id: 15,
    name: "Las Vegas General Hospital",
    address: "901 Rancho Lane, Las Vegas, NV 89106",
    phone: "(702) 555-7788",
    email: "info@lvgeneral.com",
    website: "https://lvgeneral.com",
    description: "Full-service hospital serving the Las Vegas valley with 24/7 emergency care.",
    specialties: ["Emergency Medicine", "Cardiology", "Orthopedics", "Bariatric Surgery"],
    rating: 4.2,
    reviews: 198,
    image: "/images/hospitals/las-vegas-general.jpg",
    location: {
      lat: 36.1699,
      lng: -115.1398
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Cardiology", hours: "Mon-Fri: 8AM-6PM" },
      { name: "Orthopedics", hours: "Mon-Fri: 7AM-6PM" },
      { name: "Bariatrics", hours: "Mon-Fri: 8AM-5PM" }
    ],
    facilities: ["Emergency Department", "Heart Center", "Orthopedic Institute", "Bariatric Surgery Center", "Imaging", "Rehab"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealth", "Medicare"]
  },
  {
    id: 16,
    name: "Nashville Medical Center",
    address: "1211 21st Ave S, Nashville, TN 37212",
    phone: "(615) 555-8899",
    email: "info@nashvillemed.com",
    website: "https://nashvillemed.com",
    description: "Comprehensive healthcare services with a focus on music industry professionals.",
    specialties: ["Orthopedics", "Voice Disorders", "Hearing Disorders", "Sports Medicine"],
    rating: 4.6,
    reviews: 312,
    image: "/images/hospitals/nashville-medical.jpg",
    location: {
      lat: 36.1627,
      lng: -86.7816
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Orthopedics", hours: "Mon-Fri: 7AM-6PM" },
      { name: "Voice Center", hours: "Mon-Fri: 8AM-5PM" },
      { name: "Sports Medicine", hours: "Mon-Sat: 8AM-6PM" }
    ],
    facilities: ["Orthopedic Institute", "Voice Center", "Hearing Center", "Sports Medicine Clinic", "Imaging", "Rehab"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealth", "Medicare"]
  },
  {
    id: 17,
    name: "Kansas City Heart Hospital",
    address: "4321 Washington St, Kansas City, MO 64111",
    phone: "(816) 555-9900",
    email: "info@kcheart.com",
    website: "https://kcheart.com",
    description: "Specialized cardiac care with advanced treatments and personalized patient care.",
    specialties: ["Cardiology", "Cardiothoracic Surgery", "Vascular Medicine", "Electrophysiology"],
    rating: 4.7,
    reviews: 387,
    image: "/images/hospitals/kansas-city-heart.jpg",
    location: {
      lat: 39.0997,
      lng: -94.5786
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Cardiac Cath Lab", hours: "Mon-Fri: 7AM-7PM" },
      { name: "Cardiac Surgery", hours: "Mon-Fri: 7AM-6PM" },
      { name: "Cardiac Rehab", hours: "Mon-Sat: 8AM-6PM" }
    ],
    facilities: ["Cardiac Catheterization Labs", "Hybrid OR", "Cardiac ICU", "Electrophysiology Lab", "Rehab Center", "Imaging"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealth", "Medicare"]
  },
  {
    id: 18,
    name: "Orlando Health Central Hospital",
    address: "2201 Lucien Way, Orlando, FL 32801",
    phone: "(407) 555-1122",
    email: "info@orlandohealth.org",
    website: "https://orlandohealth.org",
    description: "Comprehensive healthcare services with a focus on central Florida residents.",
    specialties: ["Emergency Medicine", "Pediatrics", "Orthopedics", "Women's Health"],
    rating: 4.4,
    reviews: 267,
    image: "/images/hospitals/orlando-health.jpg",
    location: {
      lat: 28.5383,
      lng: -81.3792
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Pediatrics", hours: "Mon-Sat: 8AM-8PM" },
      { name: "Orthopedics", hours: "Mon-Fri: 7AM-6PM" },
      { name: "Women's Health", hours: "Mon-Sat: 8AM-8PM" }
    ],
    facilities: ["Emergency Department", "Pediatric Unit", "Orthopedic Institute", "Women's Center", "Imaging", "Rehab"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "Cigna", "Florida Blue", "Medicare"]
  },
  {
    id: 19,
    name: "Sacramento Medical Center",
    address: "2025 Morse Ave, Sacramento, CA 95825",
    phone: "(916) 555-2233",
    email: "info@sacramentomed.org",
    website: "https://sacramentomed.org",
    description: "Community hospital with comprehensive services and specialized care programs.",
    specialties: ["Cardiology", "Oncology", "Neurology", "Orthopedics"],
    rating: 4.3,
    reviews: 234,
    image: "/images/hospitals/sacramento-medical.jpg",
    location: {
      lat: 38.5816,
      lng: -121.4944
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Cardiology", hours: "Mon-Fri: 8AM-6PM" },
      { name: "Oncology", hours: "Mon-Fri: 8AM-5PM" },
      { name: "Neurology", hours: "Mon-Fri: 8AM-5PM" }
    ],
    facilities: ["Heart Center", "Cancer Center", "Neuroscience Institute", "Orthopedic Institute", "Imaging", "Rehab"],
    insuranceAccepted: ["Blue Shield", "Aetna", "Cigna", "UnitedHealth", "Medi-Cal"]
  },
  {
    id: 20,
    name: "Cleveland Clinic",
    address: "9500 Euclid Ave, Cleveland, OH 44195",
    phone: "(216) 555-3344",
    email: "info@clevelandclinic.org",
    website: "https://clevelandclinic.org",
    description: "World-renowned academic medical center with leading specialists and research programs.",
    specialties: ["Cardiology", "Neurology", "Gastroenterology", "Urology"],
    rating: 4.9,
    reviews: 678,
    image: "/images/hospitals/cleveland-clinic.jpg",
    location: {
      lat: 41.5049,
      lng: -81.6095
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Cardiology", hours: "Mon-Fri: 7AM-7PM" },
      { name: "Neurology", hours: "Mon-Fri: 8AM-5PM" },
      { name: "Gastroenterology", hours: "Mon-Fri: 8AM-5PM" }
    ],
    facilities: ["Heart & Vascular Institute", "Neurological Institute", "Digestive Disease Institute", "Urology Institute", "Imaging", "Research"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealth", "Medicare"]
  },
  {
    id: 21,
    name: "Baltimore General Hospital",
    address: "111 N Calvert St, Baltimore, MD 21202",
    phone: "(410) 555-4455",
    email: "info@baltimoregeneral.com",
    website: "https://baltimoregeneral.com",
    description: "Urban hospital serving the diverse population of Baltimore with comprehensive care.",
    specialties: ["Emergency Medicine", "Internal Medicine", "Surgery", "Pediatrics"],
    rating: 4.2,
    reviews: 189,
    image: "/images/hospitals/baltimore-general.jpg",
    location: {
      lat: 39.2904,
      lng: -76.6122
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Internal Medicine", hours: "Mon-Fri: 8AM-6PM" },
      { name: "Surgery", hours: "Mon-Fri: 7AM-7PM" },
      { name: "Pediatrics", hours: "Mon-Sat: 8AM-8PM" }
    ],
    facilities: ["Emergency Department", "Surgical Suites", "Medical Units", "Pediatric Unit", "Imaging", "Lab"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealth", "Medicare"]
  },
  {
    id: 22,
    name: "Houston Methodist Hospital",
    address: "6565 Fannin St, Houston, TX 77030",
    phone: "(713) 555-6677",
    email: "info@houstonmethodist.org",
    website: "https://houstonmethodist.org",
    description: "Academic medical center with nationally recognized programs in multiple specialties.",
    specialties: ["Cardiology", "Oncology", "Neurology", "Transplant"],
    rating: 4.8,
    reviews: 567,
    image: "/images/hospitals/houston-methodist.jpg",
    location: {
      lat: 29.7604,
      lng: -95.3698
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Cardiology", hours: "Mon-Fri: 7AM-7PM" },
      { name: "Oncology", hours: "Mon-Fri: 8AM-6PM" },
      { name: "Transplant", hours: "Mon-Fri: 7AM-7PM" }
    ],
    facilities: ["Heart & Vascular Institute", "Cancer Center", "Neuroscience Institute", "Transplant Center", "Research", "Imaging"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealth", "Medicare"]
  },
  {
    id: 23,
    name: "Philadelphia General Hospital",
    address: "3400 Spruce St, Philadelphia, PA 19104",
    phone: "(215) 555-7788",
    email: "info@philageneral.com",
    website: "https://philageneral.com",
    description: "Comprehensive healthcare services with a focus on medical education and research.",
    specialties: ["Emergency Medicine", "Internal Medicine", "Surgery", "Psychiatry"],
    rating: 4.3,
    reviews: 245,
    image: "/images/hospitals/philadelphia-general.jpg",
    location: {
      lat: 39.9526,
      lng: -75.1652
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Internal Medicine", hours: "Mon-Fri: 8AM-6PM" },
      { name: "Surgery", hours: "Mon-Fri: 7AM-7PM" },
      { name: "Psychiatry", hours: "Mon-Fri: 8AM-6PM" }
    ],
    facilities: ["Emergency Department", "Medical Units", "Surgical Suites", "Psychiatric Unit", "Imaging", "Lab"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealth", "Medicare"]
  },
  {
    id: 24,
    name: "Denver Health Medical Center",
    address: "777 Bannock St, Denver, CO 80204",
    phone: "(303) 555-8899",
    email: "info@denverhealth.org",
    website: "https://denverhealth.org",
    description: "Community-focused hospital with comprehensive services and public health initiatives.",
    specialties: ["Emergency Medicine", "Internal Medicine", "Pediatrics", "Public Health"],
    rating: 4.4,
    reviews: 312,
    image: "/images/hospitals/denver-health.jpg",
    location: {
      lat: 39.7392,
      lng: -104.9903
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Internal Medicine", hours: "Mon-Fri: 8AM-6PM" },
      { name: "Pediatrics", hours: "Mon-Sat: 8AM-8PM" },
      { name: "Public Health", hours: "Mon-Fri: 8AM-5PM" }
    ],
    facilities: ["Emergency Department", "Medical Units", "Pediatric Unit", "Public Health Clinic", "Imaging", "Lab"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealth", "Medicare"]
  },
  {
    id: 25,
    name: "Miami Children's Hospital",
    address: "3100 SW 62nd Ave, Miami, FL 33146",
    phone: "(305) 555-9900",
    email: "info@miamichildrens.org",
    website: "https://miamichildrens.org",
    description: "Dedicated pediatric hospital with specialized care for children of all ages.",
    specialties: ["Pediatrics", "Pediatric Surgery", "Neonatology", "Pediatric Oncology"],
    rating: 4.7,
    reviews: 423,
    image: "/images/hospitals/miami-childrens.jpg",
    location: {
      lat: 25.7576,
      lng: -80.1918
    },
    departments: [
      { name: "Emergency", hours: "24/7" },
      { name: "Pediatric Surgery", hours: "Mon-Fri: 7AM-7PM" },
      { name: "Neonatal ICU", hours: "24/7" },
      { name: "Pediatric Oncology", hours: "Mon-Fri: 8AM-5PM" }
    ],
    facilities: ["Emergency Department", "Pediatric ICU", "Neonatal ICU", "Surgical Suites", "Cancer Center", "Rehab"],
    insuranceAccepted: ["Blue Cross Blue Shield", "Aetna", "Cigna", "Florida Blue", "Medicaid"]
  }
];