/**
 * MitM: 113.59.43.66, api.zhihu.com
 * ^https://113\.59\.43\.66/commercial_api/launch_v2 url script-response-body zhihu/zhihu_launch.js
 * ^https://api\.zhihu\.com/commercial_api/launch_v2 url script-response-body zhihu/zhihu_launch.js
 * 
 */

 const launch = JSON.stringify({ ads: [] })
 
 console.log('\n拦截知乎 launch AD');

 $done({ body: JSON.stringify({ launch }) });

