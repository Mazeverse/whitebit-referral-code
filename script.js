function copyToClipboard() {
    const code = document.getElementById('referralCode').innerText;
    const btn = document.getElementById('copyBtn');
    navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.innerText;
        btn.innerText = 'COPIED!';
        btn.style.background = '#2ebd85';
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = '#474d57';
        }, 1500);
    });
}
