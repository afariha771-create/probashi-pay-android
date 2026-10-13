const defaultRates=[
 {country:"সৌদি আরব",currency:"রিয়াল (SAR)",rate:0,code:"sa"},
 {country:"সংযুক্ত আরব আমিরাত",currency:"দিরহাম (AED)",rate:0,code:"ae"},
 {country:"কাতার",currency:"রিয়াল (QAR)",rate:0,code:"qa"},
 {country:"মালয়েশিয়া",currency:"রিঙ্গিত (MYR)",rate:0,code:"my"},
 {country:"রোমানিয়া",currency:"লিউ (RON)",rate:0,code:"ro"}
];
const $=id=>document.getElementById(id);
let rates=JSON.parse(localStorage.getItem("pp_rates")||"null")||defaultRates;
let transactions=JSON.parse(localStorage.getItem("pp_txns")||"[]");
let isAdmin=false;
const money=n=>"৳"+Number(n).toLocaleString("bn-BD",{maximumFractionDigits:2});
function save(){localStorage.setItem("pp_rates",JSON.stringify(rates));localStorage.setItem("pp_txns",JSON.stringify(transactions))}
function renderRates(){$("ratesBody").innerHTML=rates.map(r=>`<tr><td>${r.country}</td><td>${r.currency}</td><td class="rate-number">${r.rate?money(r.rate):"রেট সেট হয়নি"}</td></tr>`).join("");$("rateCount").textContent=rates.length;$("rateCountry").innerHTML=rates.map((r,i)=>`<option value="${i}">${r.country}</option>`).join("");}
function renderTxns(){$("txnBody").innerHTML=transactions.length?transactions.slice().reverse().map(t=>`<tr><td>${escapeHtml(t.name)}</td><td>${money(t.amount)}</td><td>${t.status}</td><td>${t.date}</td></tr>`).join(""):'<tr><td colspan="4">এখনও কোনো রেকর্ড নেই।</td></tr>';$("txnCount").textContent=transactions.length;$("totalAmount").textContent=money(transactions.filter(t=>t.status==="Completed").reduce((s,t)=>s+Number(t.amount),0))}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
$("loginForm").addEventListener("submit",e=>{e.preventDefault();const email=$("email").value.trim();if($("password").value.length<4)return;isAdmin=email.toLowerCase().includes("admin");$("userLabel").textContent=isAdmin?"অ্যাডমিন":"গ্রাহক";$("loginView").classList.add("hidden");$("appView").classList.remove("hidden");$("logoutBtn").classList.remove("hidden");$("adminPanel").classList.toggle("hidden",!isAdmin);$("todayLabel").textContent=new Date().toLocaleDateString("bn-BD",{year:"numeric",month:"short",day:"numeric"});renderRates();renderTxns();});
$("logoutBtn").addEventListener("click",()=>{isAdmin=false;$("loginView").classList.remove("hidden");$("appView").classList.add("hidden");$("logoutBtn").classList.add("hidden");$("adminPanel").classList.add("hidden");$("password").value=""});
$("txnForm").addEventListener("submit",e=>{e.preventDefault();transactions.push({name:$("txnName").value.trim(),amount:Number($("txnAmount").value),status:$("txnStatus").value,date:new Date().toLocaleDateString("bn-BD")});save();renderTxns();e.target.reset()});
$("rateForm").addEventListener("submit",e=>{e.preventDefault();if(!isAdmin){alert("অ্যাডমিন অনুমতি প্রয়োজন");return}rates[Number($("rateCountry").value)].rate=Number($("rateValue").value);save();renderRates();alert("ডেমো রেট আপডেট হয়েছে")});
$("year").textContent=new Date().getFullYear();renderRates();renderTxns();
if("serviceWorker" in navigator && location.protocol.startsWith("http"))navigator.serviceWorker.register("./sw.js").catch(()=>{});
