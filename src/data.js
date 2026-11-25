// Edit this file to update the site. Empty strings ('') for linkedin/github are hidden.
export const links = {
  email: 'tanishapurohit77@gmail.com',
  phone: '+918104993150',
  phoneDisplay: '+91 81049 93150',
  whatsapp: 'https://wa.me/918104993150',
  linkedin: '',   // full LinkedIn profile URL
  github: '',     // full GitHub profile URL
  resume: '/resume.pdf'
}

export const profile = {
  name: 'Tanisha Purohit',
  role: 'Aspiring AI Engineer | Software Engineer',
  location: 'Mumbai, Maharashtra, India',
  intro: 'Computer Engineering undergraduate working across Python, backend development, machine learning and NLP.',
  summary: 'Computer Engineering undergraduate (B.E., 2027) with a foundation in Python, Machine Learning, NLP, and Generative AI. Experienced in developing REST APIs, working with MongoDB, and building semantic search and embedding-based recommendation systems using Sentence Transformers and cosine similarity. Developing RAG-based applications using document processing, vector search, and LLM integration, with an interest in building scalable, intelligent AI solutions.'
}

export const stats = [
  { to: 8.97, decimals: 2, label: 'CGPA (out of 10)' },
  { to: 10, decimals: 1, label: 'SGPA in Semester 6' },
  { to: 10, suffix: 'k+', label: 'alumni records integrated' },
  { to: 3, label: 'AI projects in the works' }
]

export const skills = [
  { title: 'Programming Languages', icon: 'Code2', items: ['Python', 'Java', 'JavaScript'] },
  { title: 'AI / Machine Learning', icon: 'BrainCircuit', items: ['Machine Learning', 'NLP', 'RAG', 'Embeddings', 'Semantic Search', 'Cosine Similarity', 'Sentence Transformers', 'Gemini API', 'FAISS', 'BERT', 'Scikit-learn', 'Random Forest', 'XGBoost', 'SVM', 'PCA'] },
  { title: 'Backend Development', icon: 'Server', items: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Frontend Development', icon: 'LayoutDashboard', items: ['React', 'Tailwind CSS', 'Streamlit', 'HTML', 'CSS'] },
  { title: 'Database and Tools', icon: 'Database', items: ['MongoDB', 'Git', 'GitHub', 'VS Code'] }
]

export const projects = [
  {
    name: 'AlumniSync',
    subtitle: 'Intelligent Alumni Networking and Career Platform',
    badge: 'Full-Stack AI Project',
    emphasis: 'fullstack',
    description: 'Developed a full-stack platform connecting students and alumni through profiles, networking, and mentorship recommendations.',
    points: [
      'Built AI-based mentor matching using Sentence Transformer embeddings and cosine similarity.',
      'Developed REST APIs with role-based access and privacy controls for alumni data.',
      'Integrated approximately 800 student and 10,000 alumni records into MongoDB.'
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'FastAPI', 'Sentence Transformers']
  },
  {
    name: 'DocuMind',
    subtitle: 'RAG-Based AI Document Question Answering System',
    badge: 'RAG + Generative AI',
    emphasis: 'rag',
    description: 'Developing a RAG application that answers user queries using information from uploaded PDF documents.',
    points: [
      'Building document-processing and embedding pipelines with text extraction, chunking, and Sentence Transformers.',
      'Integrating FAISS-based semantic retrieval with Gemini API for context-aware responses.'
    ],
    tags: ['Python', 'FastAPI', 'Gemini API', 'Sentence Transformers', 'FAISS', 'Streamlit']
  },
  {
    name: 'SmartHire',
    subtitle: 'AI-Powered Resume and Job Matching System',
    badge: '',
    emphasis: '',
    description: 'Developing a resume-to-job matching system using NLP and semantic embeddings.',
    points: ['Building job relevance scoring.', 'Skill-gap identification.', 'Personalized recommendations.'],
    tags: ['Python', 'NLP', 'Sentence Transformers', 'Streamlit']
  }
]

export const experience = [
  { title: 'Data Analytics Job Simulation', org: 'Deloitte Australia (Forage)', icon: 'BarChart3', note: 'Virtual job simulation in data analytics.' },
  { title: 'Full Stack Web Development', org: 'AMG Technologies LLP (Eduversity)', icon: 'Award', note: 'Certification in full stack web development.' }
]

export const education = {
  degree: 'B.E. Computer Engineering',
  school: 'New Horizon Institute of Technology and Management, Thane',
  year: '2027',
  cgpa: '8.97 / 10'
}

export const leadership = [
  { icon: 'Users', text: 'General Secretary, Computer Department Council (2026–27)' },
  { icon: 'Trophy', text: 'Achieved 10.0/10 SGPA in Semester 6' },
  { icon: 'Handshake', text: 'Volunteered at college job fairs, coordinating with recruiters and students' },
  { icon: 'Mic', text: 'Anchored at the annual college fest' }
]
