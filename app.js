let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    const banner = document.getElementById('installBanner');
    banner.style.display = 'flex';
});

async function installApp() {

    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    console.log('Installation:', outcome);

    deferredPrompt = null;

    document.getElementById('installBanner').style.display = 'none';
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(() => console.log('Service Worker OK'))
            .catch(err => console.log(err));
    });
}