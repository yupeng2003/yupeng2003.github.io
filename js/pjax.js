(function() {
    // eslint-disable-next-line no-unused-vars
    let pjax;

    function initPjax() {
        try {
            const Pjax = window.Pjax || function() {};
            pjax = new Pjax({
                selectors: [
                    'head title',
                    '.columns',
                    '.navbar-start',
                    '.navbar-end',
                    '.searchbox',
                    '#back-to-top',
                    '[data-pjax]',
                    '.pjax-reload'
                ]
            });
        } catch (e) {
            console.warn('PJAX error: ' + e);
        }
    }

    // // Listen for start of Pjax
    // document.addEventListener('pjax:send', function() {
    //     return;
    //     // TODO pace start loading animation
    // })

    // // Listen for completion of Pjax
    // document.addEventListener('pjax:complete', function() {
    //     return;
    //     // TODO pace stop loading animation
    // })

    document.addEventListener('DOMContentLoaded', () => initPjax());
    document.addEventListener('DOMContentLoaded', function () {
        const weixinLink = document.querySelector('.weixin-link');
        const weixinPopup = document.querySelector('.weixin-popup');
    
        if (weixinLink && weixinPopup) {
            weixinLink.addEventListener('mouseover', function () {
                weixinPopup.style.display = 'block';
            });
    
            weixinLink.addEventListener('mouseout', function () {
                weixinPopup.style.display = 'none';
            });
        }
    });
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.no-pjax').forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault(); // 阻止默认行为
            });
        });
    });
    
    
}());
