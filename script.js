const phone='60122844359';
const wa=(msg)=>`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
document.querySelectorAll('.wa-link').forEach(a=>{
  a.href=wa(a.dataset.message||'Hi Fazrul, saya nak tanya tentang solar.');
  a.target='_blank'; a.rel='noopener';
});
const bill=document.getElementById('bill');
const range=document.getElementById('billRange');
const sizeEl=document.getElementById('systemSize');
const offsetEl=document.getElementById('offset');
const annualEl=document.getElementById('annual');
const calcWa=document.getElementById('calcWhatsapp');
let type='home';
function money(v){return Math.round(v).toLocaleString('en-MY')}
function updateCalc(v){
  v=Math.max(50,Number(v)||0);
  bill.value=v;
  if(v<=3000) range.value=v; else range.value=3000;
  const divisor=type==='home'?60:72;
  const kWp=Math.max(1.5,v/divisor);
  const low=v*(type==='home'?.60:.50);
  const high=v*(type==='home'?.90:.82);
  sizeEl.textContent=`${kWp.toFixed(1)} kWp`;
  offsetEl.textContent=`RM${money(low)}–RM${money(high)}/bln`;
  annualEl.textContent=`RM${money(low*12)}–RM${money(high*12)}`;
  calcWa.href=wa(`Hi Fazrul, saya buat quick check di website. Bil saya sekitar RM${money(v)}/bulan (${type==='home'?'rumah':'bisnes'}). Website anggarkan screening awal sekitar ${kWp.toFixed(1)} kWp dengan potensi offset RM${money(low)}–RM${money(high)}/bulan. Boleh semak betul-betul untuk saya?`);
  calcWa.target='_blank'; calcWa.rel='noopener';
}
bill.addEventListener('input',e=>updateCalc(e.target.value));
range.addEventListener('input',e=>updateCalc(e.target.value));
document.querySelectorAll('.choice').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.choice').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); type=btn.dataset.type; updateCalc(bill.value);
}));
updateCalc(500);

const navToggle=document.querySelector('.nav-toggle'), nav=document.querySelector('.nav');
navToggle.addEventListener('click',()=>{nav.classList.toggle('open');navToggle.setAttribute('aria-expanded',nav.classList.contains('open'))});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.getElementById('leadForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('leadName').value.trim();
  const b=document.getElementById('leadBill').value.trim();
  const loc=document.getElementById('leadLocation').value.trim();
  const t=document.getElementById('leadType').value;
  window.open(wa(`Hi Fazrul, saya ${name}. Saya nak free solar consultation.\n\nJenis premis: ${t}\nLokasi: ${loc}\nBil elektrik: RM${b}/bulan\n\nBoleh bantu semak sistem yang sesuai?`),'_blank','noopener');
});
