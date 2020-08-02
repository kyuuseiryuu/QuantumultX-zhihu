/**
 * ^https://api\.zhihu\.com/topstory/recommend script-response-body zhihu/zhihu_topstory.js
 */



const body = JSON.parse($response.body);
console.log('\n知乎广告拦截触发: topstory/recommend');
body.data = body.data.filter(e => {
    if (e.extra && e.extra.type === 'answer') {
        return true;
    }
    console.log(JSON.stringify(e));
    return false;
});

$done({ body: JSON.stringify(body) });

