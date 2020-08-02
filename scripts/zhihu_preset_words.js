/**
 * ^https://api\.zhihu\.com/search/preset_words script-response-body zhihu/zhihu_preset_words.js
 */
const body = JSON.parse($response.body);
console.log('\n知乎广告拦截触发: preset_words');
body.preset_words.words = [];

$done({ body: JSON.stringify(body) });