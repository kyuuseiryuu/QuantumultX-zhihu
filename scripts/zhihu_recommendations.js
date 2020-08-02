/**
 * MitM api.zhihu.com
 * ^https://api\.zhihu\.com/appview/api/v4/answers/\d+/recommendations url script-response-body zhihu/zhihu_recommendations.js
 */

const body = JSON.parse($response.body);

function logAd(data) {
    let title = '--';
    switch (data.type) {
        case 'ad': title = data.ad_info.ad.brand.name; break;
        case 'km_card_ad': title = data.ad_info.qa_ad_event_card.header.text; break;
        case 'answer': title = data.question.title; break;
        case 'article': title = data.title; break;
        default: console.log('\n' + JSON.stringify(data, null, 2));
    }
    console.log(`\n${'-'.repeat(10)}\n知乎回答推荐【${title}】\n类型：${data.type}\n过滤：${shouldHide(data)}\n${'-'.repeat(10)}`);
}
function shouldHide(data) {
    return Boolean(data.ad_info);
}

const data = body.data.filter(e => {
    logAd(e);
    return !shouldHide(e);
});

body.data = data;
$done({ body: JSON.stringify(body) });
