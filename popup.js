// ============================================
// 1. WELCOME POPUP
// ============================================
function showWelcomePopup() {
  const popup = document.createElement('div');
  popup.id = 'welcomePopup';
  popup.innerHTML = `
    <div style="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;">
      <div style="background:#f0f0f0;border:3px solid #000;border-radius:16px;padding:40px;max-width:400px;width:90%;text-align:center;box-shadow:6px 6px 0 #000;position:relative;">
        <button onclick="document.getElementById('welcomePopup').remove()" style="position:absolute;top:12px;right:16px;background:none;border:none;font-size:1.4rem;cursor:pointer;font-weight:900;">✕</button>
        <div style="font-size:3rem;">👟</div>
        <h2 style="font-family:'Bebas Neue',sans-serif;font-size:2rem;letter-spacing:4px;color:#000;margin:10px 0 8px;">WELCOME TO M-KICKS!</h2>
        <p style="font-family:'DM Mono',monospace;font-size:.8rem;color:#444;line-height:1.7;margin-bottom:20px;">Nairobi's freshest sneaker brand.<br>Style from the ground up — Est. 2026.</p>
        <button onclick="document.getElementById('welcomePopup').remove();showRegistrationPopup();" style="background:#000;color:#f0f0f0;border:2px solid #000;padding:12px 28px;border-radius:8px;font-family:'DM Mono',monospace;font-size:.75rem;letter-spacing:2px;font-weight:700;cursor:pointer;margin-right:8px;margin-bottom:8px;">REGISTER NOW</button>
        <button onclick="document.getElementById('welcomePopup').remove()" style="background:transparent;color:#000;border:2px solid #000;padding:12px 28px;border-radius:8px;font-family:'DM Mono',monospace;font-size:.75rem;letter-spacing:2px;font-weight:700;cursor:pointer;">EXPLORE SITE</button>
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
    <div style="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;">
      <div
