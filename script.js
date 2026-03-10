function copyToClipboard() {
    const code = document.getElementById('referralCode').innerText;
    const btn = document.getElementById('copyBtn');

    navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.innerText;
        btn.innerText = 'COPIED!';
        btn.style.backgroundColor = '#2ebd85'; // Success Green
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = '#474d57';
        }, 2000);
    }).catch(err => {
        console.error('Copy failed', err);
        alert('Failed to copy code. Please select and copy manually.');
    });
}
