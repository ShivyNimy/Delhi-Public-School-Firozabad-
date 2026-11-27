/* Delhi Public School Firozabad — interactive logic */
'use strict';

/* ───────── Facilities ───────── */
const FACILITIES = [
  { icon: 'M12 2 2 8.5 12 15l10-6.5L12 2zM4 10.5V17c0 1.7 3.6 3.5 8 3.5s8-1.8 8-3.5v-6.5l-8 5.2-8-5.2z', name: 'Smart Classrooms', desc: 'Interactive multimedia classrooms for concept-first learning' },
  { icon: 'M9 3v2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4V3H9zm-2 6h10v2H7V9z', name: 'AR / VR Lab', desc: 'Augmented & virtual reality immersive experiences' },
  { icon: 'M13 2 3 14h7l-1 8 12-14h-7l-1-6z', name: 'Physics Lab', desc: '71 m² hands-on experimentation lab' },
  { icon: 'M9 2h6v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm1 6h4v2h-4V8z', name: 'Chemistry Lab', desc: '71 m² guided practical chemistry learning' },
  { icon: 'M11 2h2v4h4l2-2 1.4 1.4-2 2V12a6 6 0 0 1-5 5.9V22h-6v-4.1A6 6 0 0 1 7.6 12V7.4l-2-2L7 4l2 2h2V2z', name: 'Biology Lab', desc: '71 m² life-sciences discovery space' },
  { icon: 'M4 4h16v16H4V4zm2 4h12v2H6V8zm0 4h7v2H6v-2zm0 4h12v2H6v-2z', name: 'Maths Lab', desc: '70 m² manipulatives & visual maths' },
  { icon: 'M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm2 2v8h14V7H5zm3 12h8v2H8v-2z', name: 'Computer Science Lab', desc: '84.2 m² multimedia computer lab' },
  { icon: 'M5 4h9a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3 3V4zm2 3v12.1A4.7 4.7 0 0 1 8 19h6V7H7z', name: 'Library', desc: 'A quiet, well-stocked reading & research hub' },
  { icon: 'M12 3 1 9l11 6 9-4.9V17h2V9L12 3zM5 13.2V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.8l-7 3.8-7-3.8z', name: 'Music Room', desc: 'Instruments, vocals & music appreciation' },
  { icon: 'M13.5 2a2.5 2.5 0 0 1 2.5 2.5c0 1-.6 1.8-1.4 2.3L21 16.5a2.6 2.6 0 0 1-4.9 1.9l-2.6 1.6-6.5-13A2.5 2.5 0 0 1 13.5 2z', name: 'Dance Room', desc: 'Classical & contemporary dance training' },
  { icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 0 1 7.7 6h-3.1A5 5 0 0 0 12 7a5 5 0 0 0-4.6 3H6.3A8 8 0 0 1 12 4zm0 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z', name: 'Indoor Games', desc: 'Chess, carrom, table tennis & more' },
  { icon: 'M6.2 6.2a10 10 0 0 1 11.6 0l1.4-1.4A12 12 0 0 0 4.8 4.8l1.4 1.4zM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a5 5 0 0 1 4.9 4.1l1.9-.6A7 7 0 0 0 12 17a7 7 0 0 0-6.8 2.5l1.9.6A5 5 0 0 1 12 16z', name: 'Sports & Swimming', desc: 'Cricket, swimming, taekwondo & athletics grounds' }
];
const facGrid = document.getElementById('facGrid');
if (facGrid) {
  facGrid.innerHTML = FACILITIES.map(f => `
    <div class="fac">
      <div class="fac-icon"><svg class="icon" viewBox="0 0 24 24" style="width:26px;height:26px"><path d="${f.icon}"/></svg></div>
      <h3>${f.name}</h3>
      <p>${f.desc}</p>
    </div>`).join('');
}

/* ───────── Faculty directory (public professional info only) ───────── */
const FACULTY = [
  {dept:'Computer Science', name:'Harendra Pal Singh', role:'PGT · HOD', hod:true},
  {dept:'Computer Science', name:'Monika Jain', role:'PGT'},
  {dept:'Computer Science', name:'Ashi Dubey', role:'PRT'},
  {dept:'English', name:'Ankit Shukla', role:'PGT · HOD', hod:true},
  {dept:'English', name:'Neela Mishra', role:'TGT'},
  {dept:'English', name:'Priya Jain', role:'TGT'},
  {dept:'English', name:'Shalini Gautam', role:'TGT'},
  {dept:'English', name:'Neha Yadav', role:'TGT'},
  {dept:'English', name:'Vaishali Kapoor', role:'PRT'},
  {dept:'English', name:'Anjali Agarwal', role:'PRT'},
  {dept:'English', name:'Priyanshi Saraswat', role:'PRT'},
  {dept:'Hindi', name:'Uma Rani Dwivedi', role:'PGT · HOD', hod:true},
  {dept:'Hindi', name:'Seema Jain', role:'TGT'},
  {dept:'Hindi', name:'Reena Sharma', role:'TGT'},
  {dept:'Hindi', name:'Shivani Mishra', role:'PRT'},
  {dept:'Maths', name:'Bhawna Sharma', role:'PGT · HOD', hod:true},
  {dept:'Maths', name:'Udit Singh Gour', role:'PGT'},
  {dept:'Maths', name:'Zeeshan Ahmed', role:'TGT'},
  {dept:'Maths', name:'Umesh Chandra', role:'TGT'},
  {dept:'Maths', name:'Paras Jain', role:'PRT'},
  {dept:'Maths', name:'Pooja Gupta', role:'PRT'},
  {dept:'Maths', name:'Anamika Gupta', role:'PRT'},
  {dept:'Science', name:'Abhishek Sharma', role:'PGT · Physics'},
  {dept:'Science', name:'Anu Sharma', role:'PGT · Chemistry'},
  {dept:'Science', name:'Pawan Kumar Parashar', role:'PGT · Biology'},
  {dept:'Science', name:'Kenika Agarwal', role:'TGT'},
  {dept:'Science', name:'Shruti Bharadwaj', role:'TGT'},
  {dept:'Social Science', name:'Savita Rawat', role:'PGT · HOD · Political Science & Psychology', hod:true},
  {dept:'Social Science', name:'Rachna Bhatt', role:'TGT'},
  {dept:'Social Science', name:'Devansh Agarwal', role:'TGT'},
  {dept:'Physical Education', name:'Narendra Singh', role:'PGT · HOD · Physical Education', hod:true},
  {dept:'Physical Education', name:'Jitendra Kumar Sharma', role:'PHE · Cricket Coach'},
  {dept:'Physical Education', name:'Anuradha Gautama', role:'PHE · Swimming Coach (Female)'},
  {dept:'Physical Education', name:'Ranjeet Singh', role:'PHE · Swimming Coach (Male)'},
  {dept:'Physical Education', name:'Diya Gola', role:'PHE · Taekwondo Coach'},
  {dept:'Commerce', name:'Parul Hajela', role:'PGT · Business Studies & Accounting'},
  {dept:'Commerce', name:'Nitin Kumar Jain', role:'PGT · Economics'},
  {dept:'Social Science', name:'Neeraj Singh', role:'PGT · History'},
  {dept:'EVS', name:'Gulsanowar Ansari', role:'PRT · EVS'},
  {dept:'Languages', name:'Akash Saraswat', role:'TGT · French'},
  {dept:'Languages', name:'Chandra Mohan', role:'TGT · Sanskrit'},
  {dept:'Fine Arts', name:'Deepti Chaudhary', role:'PGT · Fine Arts'},
  {dept:'Fine Arts', name:'Richa Agrawal', role:'PRT · Fine Arts'},
  {dept:'Dance', name:'Satish Kumar Gautam', role:'PGT · Dance'},
  {dept:'Dance', name:'Shalu Diwakar', role:'PRT · Dance'},
  {dept:'Music', name:'Rohan Singh', role:'PGT · Music'},
  {dept:'Music', name:'Shalini Vashishta', role:'TGT · Music'},
  {dept:'NCC & Hindi', name:'Reena Sharma', role:'NCC Officer · Hindi PRT'},
  {dept:'Primary Wing', name:'Akshara Bansal', role:'PRT'},
  {dept:'Primary Wing', name:'Darshika Singh', role:'PRT'},
  {dept:'Primary Wing', name:'Ishika Gupta', role:'PRT'},
  {dept:'Primary Wing', name:'Kajal Yadav', role:'PRT'},
  {dept:'Primary Wing', name:'Neha Pippal', role:'PRT'},
  {dept:'Primary Wing', name:'Prachi Gupta', role:'PRT'},
  {dept:'Primary Wing', name:'Richa Khare', role:'PRT'},
  {dept:'Primary Wing', name:'Samriddhi Rawat', role:'PRT'},
  {dept:'Primary Wing', name:'Shalini Yadav', role:'PRT'},
  {dept:'Library & Labs', name:'Laeeque Ahmad', role:'Librarian'},
  {dept:'Library & Labs', name:'Abhishek Baghel', role:'Lab Technician'}
];
const ADMIN = [
  { name:'Jyotsna Singh', role:'Sr. Administrator' },
  { name:'Uma Sharma', role:'HR Manager' },
  { name:'Archit Singhal', role:'Transport Incharge' },
  { name:'Divya Godwani', role:'Sr. Admission Counselor' },
  { name:'Satyam Parihar', role:'Accountant' },
  { name:'Shree Krisha Jha', role:'IT Incharge' },
  { name:'Sanjay Yadav', role:'Estate Manager' },
  { name:'Vipin Kumar', role:'Store Incharge' },
  { name:'Shivendra Sharma', role:'Graphic Designer' }
];

const grid = document.getElementById('facultyGrid');
const countEl = document.getElementById('facultyCount');
const searchEl = document.getElementById('facultySearch');
const deptEl = document.getElementById('facultyDept');
const adminGrid = document.getElementById('adminGrid');

function initials(name){
  return name.replace(/\(.*?\)/g,'').trim().split(/\s+/).map(w => w[0]).slice(0,2).join('').toUpperCase();
}
function renderFaculty(){
  if (!grid) return;
  const q = (searchEl.value || '').trim().toLowerCase();
  const dept = deptEl.value;
  const matches = FACULTY.filter(t => {
    const hay = `${t.name} ${t.dept} ${t.role}`.toLowerCase();
    return (!dept || t.dept === dept) && (!q || hay.includes(q));
  });
  grid.innerHTML = matches.map(t => `
    <div class="tcard">
      <div class="avatar" aria-hidden="true">${initials(t.name)}</div>
      <div><strong>${t.name}${t.hod ? '<span class="badge-hod">HOD</span>' : ''}</strong><span>${t.dept} · ${t.role}</span></div>
    </div>`).join('') || '<p style="color:var(--muted)">No faculty match your search.</p>';
  countEl.textContent = `Showing ${matches.length} of ${FACULTY.length} teaching staff listed on the official site.`;
}
if (grid && searchEl && deptEl) {
  [...new Set(FACULTY.map(t => t.dept))].sort().forEach(d => {
    const opt = document.createElement('option');
    opt.value = d; opt.textContent = d;
    deptEl.appendChild(opt);
  });
  searchEl.addEventListener('input', renderFaculty);
  deptEl.addEventListener('change', renderFaculty);
  renderFaculty();
}
if (adminGrid) {
  adminGrid.innerHTML = ADMIN.map(a => `<div class="admin-item"><b>${a.name}</b><span>${a.role}</span></div>`).join('');
}

/* ───────── FAQ ───────── */
const FAQS = [
  { q:'Is Delhi Public School Firozabad affiliated to CBSE?', a:'Yes. DPS Firozabad is affiliated to the Central Board of Secondary Education (CBSE), New Delhi — Affiliation No. 2133064, School Code 61225.' },
  { q:'When was the school established?', a:'Delhi Public School, Firozabad was established in 2017 and is managed by Smt. Maya Devi Charitable Trust under the aegis of the Delhi Public School Society, East of Kailash, New Delhi.' },
  { q:'Which classes does the school offer?', a:'Classes from Nursery to Class X, English medium, co-educational, day school. The school has also announced online senior-secondary (Class XI/XII) provision for 2025–26 — contact the office for the latest.' },
  { q:'Is the school residential (boarding)?', a:'No. DPS Firozabad is a day school and does not offer boarding or hostel facilities.' },
  { q:'Where is the campus located?', a:'Vill. Daulatpur, New Bypass (Bamba Road), Firozabad, Uttar Pradesh — 283203. It is spread over approximately 11 acres (41,920 m²).' },
  { q:'Who is the Principal?', a:'Dr. Gaurav Dubey (M.Sc., B.Ed., Ph.D.) is the Principal of Delhi Public School, Firozabad.' },
  { q:'What are the board examination results?', a:'The school recorded a 100% pass rate in Class X board examinations in 2020–21 (39/39) and 2021–22 (55/55), and has produced Board, District and Mandal toppers for four consecutive years.' },
  { q:'How do I apply for admission?', a:'Call +91 70887 44411 / 70887 44422 or email enquiry@dpsfirozabad.com, or fill the online form at dpsfzd.coradius.in. Admission is based on performance and seat availability; the session runs April–March.' },
  { q:'What is the school rating?', a:'DPS Firozabad is rated 4.9 out of 5 on SchoolMyKids (9 reviews) — among the highest for any school in the Firozabad region.' },
  { q:'Does the school share private data about students or staff?', a:'No. This page publishes only information the school itself has made public — official disclosures, public ratings and professional faculty listings. No personal contact details, addresses or other private information are published.' }
];
const faqList = document.getElementById('faqList');
if (faqList) {
  faqList.innerHTML = FAQS.map(f => `
    <details class="faq-item"><summary>${f.q}</summary><p>${f.a}</p></details>`).join('');
}

/* ───────── Animated counters ───────── */
const counters = document.querySelectorAll('.counter');
if (counters.length && 'IntersectionObserver' in window) {
  const fmt = (v, el) => {
    if (el.dataset.plain === 'true') return String(Math.round(v));
    if (el.dataset.format === 'comma') return Math.round(v).toLocaleString('en-IN');
    const dec = Number(el.dataset.decimal || 0);
    return v.toFixed(dec) + (el.dataset.suffix || '');
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.target);
      const dur = 1400, start = performance.now();
      const tick = now => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(2, -10 * p);
        el.textContent = fmt(target * (p === 1 ? 1 : eased), el);
        if (p < 1) requestAnimationFrame(tick); else el.textContent = fmt(target, el);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(c => io.observe(c));
}

/* ───────── Mobile menu ───────── */
const burger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  mobileMenu.addEventListener('click', e => {
    if (e.target.tagName === 'A') mobileMenu.classList.remove('open');
  });
}

/* ───────── Footer year ───────── */
document.querySelectorAll('.js-year').forEach(el => { el.textContent = new Date().getFullYear(); });
