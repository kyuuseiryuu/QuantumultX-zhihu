/**
 * ^https://api\.zhihu\.com/moments/recommend url script-response-body zhihu/zhihu_ad.js
 */

const body = JSON.parse($response.body);
console.log('\n知乎广告拦截触发');
body.data = body.data.filter(e => {
    if (e.ad) {
        console.log(`\n知乎广告：${e.action_text}`);
    }
    return !e.ad;
});

$done({ body: JSON.stringify(body) });