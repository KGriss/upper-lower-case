document.getElementById("from").addEventListener("input", encrypt);

function encrypt(e) {
	let msg = e.target.value;
	let chars = "&é\"'(-è_çà)=azertyuiop^$qsdfghjklmù*wxcvbn,;:!1234567890°+AZERTYUIOP¨£QSDFGHJKLM%µWXCVBN?./§";
	let converted = "";
	
	for (let i=0;i<msg.length;i++) {
		let inChars = false;
		for (let key=0;key<chars.length;key++) {
			if (msg[i] === chars[key]) {
				inChars = true;
				converted += chars[(key+chars.length/2)%chars.length];
			}
		}
		if (! inChars) converted += msg[i];
	}
	document.getElementById("to").textContent = converted;
}