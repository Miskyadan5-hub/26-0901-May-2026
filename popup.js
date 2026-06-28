// ============================================
// 1. WELCOME POPUP
// ============================================
function showWelcomePopup() {
  const popup = document.createElement('div');
  popup.id = 'welcomePopup';
  popup.innerHTML = `
    <div style="
      position:fixed;inset:0;background:rgba(0,0,0,0.6);
      z-index:9999;display:flex;align-items:center;justify-content:center;
    ">
      <div style="
        background:#f0f0f0;border:3px solid #000;border-radius:16px;
        padding:40px;max-width:400px;width:90%;text-align:center;
        box-shadow:6px 6px 0 #000;position:relative;
      ">
        <button onclick="document.getElementById('welcomePopup').remove()" style="
          position:absolute;top:12px;right:16px;background:none;
          border:none;font-size:1.4rem;cursor:pointer;font-weight:900;
        ">✕</button>
        <div style="font-size:3rem;">👟</div>
        <h2 style="
          font-family:'Bebas Neue',sans-serif;font-size:2rem;
          letter-spacing:4px;color:#000;margin:10px 0 8px;
        ">WELCOME TO M-KICKS!</h2>
        <p style="
          font-family:'DM Mono',monospace;font-size:.8rem;
          color:#444;line-height:1.7;margin-bottom:20px;
        ">Nairobi's freshest sneaker brand.<br>Style from the ground up — Est. 2026.</p>
        <button onclick="document.getElementById('welcomePopup').remove();showRegistrationPopup();" style="
          background:#000;color:#f0f0f0;border:2px solid #000;
          padding:12px 28px;border-radius:8px;font-family:'DM Mono',monospace;
          font-size:.75rem;letter-spacing:2px;font-weight:700;cursor:pointer;
          margin-right:8px;
        ">REGISTER NOW</button>
        <button onclick="document.getElementById('welcomePopup').remove()" style="
          background:transparent;color:#000;border:2px solid #000;
          padding:12px 28px;border-radius:8px;font-family:'DM Mono',monospace;
          font-size:.75rem;letter-spacing:2px;font-weight:700;cursor:pointer;
        ">EXPLORE SITE</button>
      </div>
    </div>
  `;
  document.body.appendChild(popup);
}

// ============================================
// 2. REGISTRATION POPUP
// ============================================
function showRegistrationPopup() {
  const popup = document.createElement('div');
  popup.id = 'registrationPopup';
  popup.innerHTML = `
    <div style="
      position:fixed;inset:0;background:rgba(0,0,0,0.6);
      z-index:9999;display:flex;align-items:center;justify-content:center;
    ">
      <div style="
        background:#f0f0f0;border:3px solid #000;border-radius:16px;
        padding:40px;max-width:420px;width:90%;text-align:center;
        box-shadow:6px 6px 0 #000;position:relative;
      ">
        <button onclick="document.getElementById('registrationPopup').remove()" style="
          position:absolute;top:12px;right:16px;background:none;
          border:none;font-size:1.4rem;cursor:pointer;font-weight:900;
        ">✕</button>
        <div style="font-size:2.5rem;">📝</div>
        <h2 style="
          font-family:'Bebas Neue',sans-serif;font-size:2rem;
          letter-spacing:4px;color:#000;margin:10px 0 4px;
        ">CREATE ACCOUNT</h2>
        <p style="
          font-family:'DM Mono',monospace;font-size:.75rem;
          color:#444;margin-bottom:20px;
        ">Join the M-Kicks family today</p>

        <div style="text-align:left;">
          <label style="
            display:block;font-family:'DM Mono',monospace;font-size:.65rem;
            letter-spacing:2px;font-weight:700;color:#000;
            margin-bottom:5px;text-transform:uppercase;
          ">Full Name *</label>
          <input id="regName" type="text" placeholder="Misky Adan" style="
            width:100%;padding:10px 14px;border:2px solid #000;
            border-radius:8px;font-family:'DM Mono',monospace;font-size:.8rem;
            background:#fff;color:#000;outline:none;
            box-sizing:border-box;margin-bottom:4px;
          ">
          <span id="regNameErr" style="color:#cc0000;font-size:.68rem;font-family:'DM Mono',monospace;display:block;margin-bottom:12px;"></span>

          <label style="
            display:block;font-family:'DM Mono',monospace;font-size:.65rem;
            letter-spacing:2px;font-weight:700;color:#000;
            margin-bottom:5px;text-transform:uppercase;
          ">Email Address *</label>
          <input id="regEmail" type="email" placeholder="you@example.com" style="
            width:100%;padding:10px 14px;border:2px solid #000;
            border-radius:8px;font-family:'DM Mono',monospace;font-size:.8rem;
            background:#fff;color:#000;outline:none;
            box-sizing:border-box;margin-bottom:4px;
          ">
          <span id="regEmailErr" style="color:#cc0000;font-size:.68rem;font-family:'DM Mono',monospace;display:block;margin-bottom:12px;"></span>

          <label style="
            display:block;font-family:'DM Mono',monospace;font-size:.65rem;
            letter-spacing:2px;font-weight:700;color:#000;
            margin-bottom:5px;text-transform:uppercase;
          ">Phone Number *</label>
          <input id="regPhone" type="tel" placeholder="+254 700 000 000" style="
            width:100%;padding:10px 14px;border:2px solid #000;
            border-radius:8px;font-family:'DM Mono',monospace;font-size:.8rem;
            background:#fff;color:#000;outline:none;
            box-sizing:border-box;margin-bottom:4px;
          ">
          <span id="regPhoneErr" style="color:#cc0000;font-size:.68rem;font-family:'DM Mono',monospace;display:block;margin-bottom:16px;"></span>

          <button onclick="submitRegistration()" style="
            width:100%;background:#000;color:#f0f0f0;border:2px solid #000;
            padding:13px;border-radius:8px;font-family:'DM Mono',monospace;
            font-size:.75rem;letter-spacing:2px;font-weight:700;cursor:pointer;
          ">CREATE MY ACCOUNT →</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(popup);
}

function submitRegistration() {
  const name  = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  document.getElementById('regNameErr').textContent  = '';
  document.getElementById('regEmailErr').textContent = '';
  document.getElementById('regPhoneErr').textContent = '';
  let ok = true;

  if (!name)  { document.getElementById('regNameErr').textContent  = 'Please enter your name.'; ok = false; }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('regEmailErr').textContent = 'Please enter a valid email.'; ok = false;
  }
  if (!phone) { document.getElementById('regPhoneErr').textContent = 'Please enter your phone number.'; ok = false; }
  if (!ok) return;

  document.getElementById('registrationPopup').remove();
  showDiscountPopup(email);
}

// ============================================
// 3. DISCOUNT POPUP
// ============================================
function showDiscountPopup(email) {
  const popup = document.createElement('div');
  popup.id = 'discountPopup';
  popup.innerHTML = `
    <div style="
      position:fixed;inset:0;background:rgba(0,0,0,0.6);
      z-index:9999;display:flex;align-items:center;justify-content:center;
    ">
      <div style="
        background:#f0f0f0;border:3px solid #000;border-radius:16px;
        padding:50px 40px;max-width:420px;width:90%;text-align:center;
        box-shadow:6px 6px 0 #000;position:relative;
      ">
        <button onclick="document.getElementById('discountPopup').remove()" style="
          position:absolute;top:12px;right:16px;background:none;
          border:none;font-size:1.4rem;cursor:pointer;font-weight:900;
        ">✕</button>
        <div style="font-size:3rem;">🎉</div>
        <h2 style="
          font-family:'Bebas Neue',sans-serif;font-size:2rem;
          letter-spacing:4px;color:#000;margin:14px 0 8px;
        ">YOU'RE IN!</h2>
        <p style="font-family:'DM Mono',monospace;font-size:.8rem;color:#444;margin-bottom:6px;">
          Welcome to M-Kicks! Your discount code:
        </p>
        <p style="
          font-family:'Bebas Neue',sans-serif;font-size:2rem;letter-spacing:6px;
          color:#000;border:3px solid #000;padding:14px;border-radius:10px;
          margin:16px 0;
        ">MKICKS20</p>
        <p style="font-family:'DM Mono',monospace;font-size:.72rem;color:#555;margin-bottom:20px;">
          20% OFF your first order.<br>Code sent to <strong>${email}</strong>
        </p>
        <a href="collection.html" style="
          display:inline-block;background:#000;color:#f0f0f0;
          border:2px solid #000;padding:12px 32px;border-radius:8px;
          font-family:'DM Mono',monospace;font-size:.75rem;letter-spacing:2px;
          font-weight:700;text-decoration:none;
        ">SHOP NOW →</a>
      </div>
    </div>
  `;
  document.body.appendChild(popup);
}

// ============================================
// AUTO START — shows welcome popup on load
// ============================================
window.addEventListener('load', () => {
  setTimeout(showWelcomePopup, 1500);
});
