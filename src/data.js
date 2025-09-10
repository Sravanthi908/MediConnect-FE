// data.js
const data = [
  // General Hospitals
  { id: 1, img: "https://images.unsplash.com/photo-1588776814546-8b267a6fbb01?auto=format&fit=crop&w=800&q=80", name: "City General Hospital", availableDoctors: 25, category: "general", description: "A multi-specialty hospital offering 24/7 emergency care, advanced diagnostics, and outpatient services." },
  { id: 2, img: "https://images.unsplash.com/photo-1588776814130-242b823d1b6e?auto=format&fit=crop&w=800&q=80", name: "Sunrise Medical Center", availableDoctors: 18, category: "general", description: "Well-equipped hospital providing quality healthcare, surgery, and family medicine." },
  { id: 3, img: "https://images.unsplash.com/photo-1588776814058-72c2f042b33f?auto=format&fit=crop&w=800&q=80", name: "MetroCare Hospital", availableDoctors: 40, category: "general", description: "A leading healthcare institution known for modern facilities, expert doctors, and patient care." },
  { id: 4, img: "https://images.unsplash.com/photo-1588776814272-6b0d6712b16e?auto=format&fit=crop&w=800&q=80", name: "Green Valley Hospital", availableDoctors: 12, category: "general", description: "Trusted hospital with experienced physicians, outpatient services, and diagnostic labs." },
  { id: 5, img: "https://images.unsplash.com/photo-1588776814040-07bdfd7f35e2?auto=format&fit=crop&w=800&q=80", name: "Global Health Institute", availableDoctors: 30, category: "general", description: "Internationally recognized hospital offering advanced treatments and medical research facilities." },
  { id: 22, img: "https://images.unsplash.com/photo-1588776814376-4d08a5584f5e?auto=format&fit=crop&w=800&q=80", name: "Wellness Multi-Specialty Hospital", availableDoctors: 28, category: "general", description: "A multi-specialty hospital with departments for all major medical fields." },
  { id: 37, img: "https://images.unsplash.com/photo-1588776814331-dc2a82e0c9c1?auto=format&fit=crop&w=800&q=80", name: "PulseCare Multi-Specialty Hospital", availableDoctors: 21, category: "general", description: "Comprehensive hospital with 24/7 emergency, ICU, and advanced imaging." },
  { id: 38, img: "https://images.unsplash.com/photo-1588776814293-06cdefe3d4e0?auto=format&fit=crop&w=800&q=80", name: "Elite Health Hospital", availableDoctors: 27, category: "general", description: "Premium hospital offering world-class healthcare and modern facilities." },

  // Women’s Hospitals
  { id: 6, img: "https://images.unsplash.com/photo-1588776814036-4667ecb7620e?auto=format&fit=crop&w=800&q=80", name: "Lotus Women’s Hospital", availableDoctors: 15, category: "women", description: "Specialized hospital for women’s health, maternity, and gynecological services." },
  { id: 7, img: "https://images.unsplash.com/photo-1588776814137-611d37b269b2?auto=format&fit=crop&w=800&q=80", name: "Grace Maternity Center", availableDoctors: 10, category: "women", description: "Dedicated hospital for maternity care, women’s wellness, and newborn health." },
  { id: 8, img: "https://images.unsplash.com/photo-1588776814178-89b462e2edc6?auto=format&fit=crop&w=800&q=80", name: "Hope Women’s Clinic", availableDoctors: 8, category: "women", description: "Women-focused healthcare clinic offering consultations, diagnostics, and specialized treatments." },
  { id: 9, img: "https://images.unsplash.com/photo-1588776814256-0d5d8497c6ab?auto=format&fit=crop&w=800&q=80", name: "Sri Devi Hospital", availableDoctors: 14, category: "women", description: "Trusted women’s hospital with facilities for maternity, fertility, and preventive health." },
  { id: 10, img: "https://images.unsplash.com/photo-1588776814263-0e7d1a41e6e4?auto=format&fit=crop&w=800&q=80", name: "Shakti Women’s Healthcare", availableDoctors: 11, category: "women", description: "Comprehensive women’s hospital focusing on holistic care and wellness." },
  { id: 26, img: "https://images.unsplash.com/photo-1588776814307-583a61b9d4df?auto=format&fit=crop&w=800&q=80", name: "CarePlus Maternity Center", availableDoctors: 12, category: "women", description: "Women’s hospital focusing on maternity and postnatal care." },
  { id: 27, img: "https://images.unsplash.com/photo-1588776814400-1c7a2c12d5f2?auto=format&fit=crop&w=800&q=80", name: "Bloom Women’s Hospital", availableDoctors: 15, category: "women", description: "Specialty hospital for fertility, gynecology, and maternal health." },
  { id: 28, img: "https://images.unsplash.com/photo-1588776814418-1d9f6c3f0b34?auto=format&fit=crop&w=800&q=80", name: "RoseCare Women’s Clinic", availableDoctors: 9, category: "women", description: "Women-centered healthcare center offering all essential services." },
  { id: 29, img: "https://images.unsplash.com/photo-1588776814428-8d7b1c9f8cde?auto=format&fit=crop&w=800&q=80", name: "Mother’s Hope Hospital", availableDoctors: 11, category: "women", description: "Dedicated maternity and gynecology hospital with specialist doctors." },
  { id: 30, img: "https://images.unsplash.com/photo-1588776814438-abcdef123456?auto=format&fit=crop&w=800&q=80", name: "Trinity Women’s Health", availableDoctors: 13, category: "women", description: "Women’s hospital providing preventive care, maternity, and wellness." },

  // Cardiology Hospitals
  { id: 11, img: "https://images.unsplash.com/photo-1588776814500-xyz123?auto=format&fit=crop&w=800&q=80", name: "Heart Care Hospital", availableDoctors: 20, category: "cardiology", description: "Advanced cardiac care hospital with specialized surgeons and modern facilities." },
  { id: 31, img: "https://images.unsplash.com/photo-1588776814510-abc123?auto=format&fit=crop&w=800&q=80", name: "Pearl Heart Institute", availableDoctors: 19, category: "cardiology", description: "Cardiology hospital with advanced surgery and heart care units." },

  // Orthopedic Hospitals
  { id: 12, img: "https://images.unsplash.com/photo-1588776814520-orthopedic1?auto=format&fit=crop&w=800&q=80", name: "Silverline Orthopedic Center", availableDoctors: 9, category: "orthopedic", description: "Expert orthopedic hospital providing bone and joint treatments." },
  { id: 32, img: "https://images.unsplash.com/photo-1588776814530-orthopedic2?auto=format&fit=crop&w=800&q=80", name: "Golden Bone Hospital", availableDoctors: 14, category: "orthopedic", description: "Specialized orthopedic hospital for joint replacement and trauma care." },
  { id: 34, img: "https://images.unsplash.com/photo-1588776814540-orthopedic3?auto=format&fit=crop&w=800&q=80", name: "Titanium Ortho Center", availableDoctors: 10, category: "orthopedic", description: "Advanced orthopedic hospital for bones, spine, and sports injuries." },
  { id: 39, img: "https://images.unsplash.com/photo-1588776814550-orthopedic4?auto=format&fit=crop&w=800&q=80", name: "OrthoPlus Joint Center", availableDoctors: 12, category: "orthopedic", description: "Center of excellence for joint replacement, arthroscopy, and sports medicine." },

  // Dental Hospitals
  { id: 13, img: "https://images.unsplash.com/photo-1588776814560-dental1?auto=format&fit=crop&w=800&q=80", name: "Golden Smile Dental Hospital", availableDoctors: 7, category: "dental", description: "Trusted dental hospital offering cosmetic and surgical dentistry." },
  { id: 33, img: "https://images.unsplash.com/photo-1588776814570-dental2?auto=format&fit=crop&w=800&q=80", name: "Silver Smile Dental Care", availableDoctors: 8, category: "dental", description: "Modern dental clinic providing orthodontics and cosmetic care." },
  { id: 38, img: "https://images.unsplash.com/photo-1588776814580-dental3?auto=format&fit=crop&w=800&q=80", name: "Crestline Dental Studio", availableDoctors: 9, category: "dental", description: "Dental hospital specializing in implants, root canals, and smile design." },

  // Ophthalmology Hospitals
  { id: 14, img: "https://images.unsplash.com/photo-1588776814590-eye1?auto=format&fit=crop&w=800&q=80", name: "Diamond Eye Hospital", availableDoctors: 16, category: "ophthalmology", description: "Eye care hospital offering advanced vision correction and surgery." },
  { id: 24, img: "https://images.unsplash.com/photo-1588776814600-eye2?auto=format&fit=crop&w=800&q=80", name: "VisionCare Eye Institute", availableDoctors: 18, category: "ophthalmology", description: "Renowned hospital for advanced eye care and laser surgery." },

  // Dermatology Hospitals
  { id: 15, img: "https://images.unsplash.com/photo-1588776814610-derma1?auto=format&fit=crop&w=800&q=80", name: "Gemstone Skin & Hair Clinic", availableDoctors: 5, category: "dermatology", description: "Specialized skin and hair care hospital with modern treatments." },
  { id: 35, img: "https://images.unsplash.com/photo-1588776814620-derma2?auto=format&fit=crop&w=800&q=80", name: "Leatherstone Skin Clinic", availableDoctors: 6, category: "dermatology", description: "Skin and cosmetic care hospital with modern laser technology." },

  // Men’s Hospitals
  { id: 16, img: "https://images.unsplash.com/photo-1588776814630-men1?auto=format&fit=crop&w=800&q=80", name: "Apollo Men’s Health Center", availableDoctors: 14, category: "men", description: "Hospital dedicated to men’s health, fitness, and preventive check-ups." },
  { id: 17, img: "https://images.unsplash.com/photo-1588776814640-men2?auto=format&fit=crop&w=800&q=80", name: "Men’s Wellness Clinic", availableDoctors: 9, category: "men", description: "Healthcare center offering men’s wellness, urology, and lifestyle treatments." },
  { id: 18, img: "https://images.unsplash.com/photo-1588776814650-men3?auto=format&fit=crop&w=800&q=80", name: "Starlight Men’s Hospital", availableDoctors: 12, category: "men", description: "Multi-specialty hospital focusing on men’s health and rehabilitation." },
  { id: 19, img: "https://images.unsplash.com/photo-1588776814660-men4?auto=format&fit=crop&w=800&q=80", name: "PrimeCare Men’s Health", availableDoctors: 10, category: "men", description: "Modern healthcare unit with experienced doctors for men’s health issues." },
  { id: 20, img: "https://images.unsplash.com/photo-1588776814670-men5?auto=format&fit=crop&w=800&q=80", name: "Healthy Life Men’s Clinic", availableDoctors: 6, category: "men", description: "Clinic providing holistic men’s healthcare and wellness programs." },

  // Pediatrics Hospitals
  { id: 21, img: "https://images.unsplash.com/photo-1588776814680-pedia1?auto=format&fit=crop&w=800&q=80", name: "Harmony Children’s Hospital", availableDoctors: 22, category: "pediatrics", description: "Child-friendly hospital offering pediatric care and neonatal services." },
  { id: 40, img: "https://images.unsplash.com/photo-1588776814690-pedia2?auto=format&fit=crop&w=800&q=80", name: "Rainbow Children’s Hospital", availableDoctors: 20, category: "pediatrics", description: "Pediatric super-specialty with NICU/PICU and comprehensive child care." },

  // Rehabilitation Hospitals
  { id: 23, img: "https://images.unsplash.com/photo-1588776814700-rehab1?auto=format&fit=crop&w=800&q=80", name: "PlayLife Rehabilitation Center", availableDoctors: 7, category: "rehabilitation", description: "Specialized hospital for physiotherapy, rehabilitation, and recovery." },

  // Neurology Hospitals
  { id: 25, img: "https://images.unsplash.com/photo-1588776814710-neuro1?auto=format&fit=crop&w=800&q=80", name: "ConnectLife Neurology Hospital", availableDoctors: 10, category: "neurology", description: "Hospital specializing in brain, nerves, and neurological disorders." },

  // ENT Hospitals
  { id: 36, img: "https://images.unsplash.com/photo-1588776814720-ent1?auto=format&fit=crop&w=800&q=80", name: "Harmony ENT Hospital", availableDoctors: 11, category: "ent", description: "Specialized ENT hospital for ear, nose, and throat treatments." },
];

export default data;
