import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NavCard = resolveComponent("NavCard");
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="搜索引擎" tabindex="-1"><a class="header-anchor" href="#搜索引擎" aria-hidden="true">#</a> 搜索引擎</h2>`);
  _push(ssrRenderComponent(_component_NavCard, { arr: '[{"title":"百度","url":"https://www.baidu.com/","desc":"中文搜索引擎","icon":"/navicon/baidu.ico"},{"title":"必应","url":"https://cn.bing.com/","desc":"优秀的国内外搜索引擎","icon":"/navicon/bing.ico"},{"title":"谷歌","url":"https://www.google.com/","desc":"被墙的国内外搜索引擎","icon":"/navicon/google.ico"},{"title":"找代码","url":"https://www.programcreek.com/java-api-examples/index.php","desc":"搜一下某个类的使用方法","icon":"/navicon/java.ico"}]' }, null, _parent));
  _push(`<h2 id="开源社区" tabindex="-1"><a class="header-anchor" href="#开源社区" aria-hidden="true">#</a> 开源社区</h2>`);
  _push(ssrRenderComponent(_component_NavCard, { arr: '[{"title":"Dromara","url":"https://gitee.com/dromara","desc":"孵化HuTool的优秀开源社区","icon":"/navicon/dromara.ico"},{"title":"OSRC","url":"https://www.osrc.com/","desc":"开源运行时社区","icon":"/navicon/oscr.ico"},{"title":"Doocs","url":"https://doocs.gitee.io/#/README_CN","desc":"非常友好的技术社区","icon":"/navicon/doocs.ico"}]' }, null, _parent));
  _push(`<h2 id="优质博客" tabindex="-1"><a class="header-anchor" href="#优质博客" aria-hidden="true">#</a> 优质博客</h2>`);
  _push(ssrRenderComponent(_component_NavCard, { arr: '[{"title":"阮一峰","url":"https://www.ruanyifeng.com/","desc":"阮一峰的个人网站","icon":"/navicon/ruan.ico"},{"title":"Road2Coding","url":"https://r2coding.com/#/","desc":"程序羊博客","icon":"/navicon/r2coding.png"},{"title":"大都督","url":"https://www.yuque.com/renyong-jmovm/dadudu","desc":"大都督周瑜的技术博客","icon":"/navicon/yuque.png"},{"title":"Gitstar","url":"https://gitstar-ranking.com/","desc":"Github项目获赞数排名","icon":"/navicon/gr.ico"},{"title":"JeeWeiXin","url":"https://jeeweixin.com/","desc":"微信小程序技术博客","icon":"/navicon/jeeweixin.ico"},{"title":"潘子夜","url":"https://www.panziye.com/","desc":"潘子夜个人博客","icon":"/navicon/panziye.ico"},{"title":"徐靖峰","url":"https://www.cnkirito.moe/","desc":"徐靖峰的个人博客","icon":"/navicon/xujingfeng.jpg"},{"title":"芋道源码","url":"https://www.iocoder.cn/","desc":"源码聚集地","icon":"/navicon/github.ico"},{"title":"全栈","url":"https://www.pdai.tech/","desc":"全栈知识体系","icon":"/navicon/pdai.ico"},{"title":"程序猿DD","url":"https://blog.didispace.com/","desc":"程序猿DD的个人博客","icon":"/navicon/dd.jpg"},{"title":"labuladong","url":"https://labuladong.gitee.io/algo/","desc":"labuladong的算法小抄","icon":"/navicon/github.ico"}]' }, null, _parent));
  _push(`<h2 id="在线工具" tabindex="-1"><a class="header-anchor" href="#在线工具" aria-hidden="true">#</a> 在线工具</h2>`);
  _push(ssrRenderComponent(_component_NavCard, { arr: '[{"title":"下载加速","url":"https://toolwa.com/github/","desc":"Github下载加速","icon":"/navicon/github.ico"},{"title":"菜鸟工具","url":"https://c.runoob.com/","desc":"菜鸟教程提供的工具集","icon":"/navicon/cainiao.ico"},{"title":"工具集","url":"https://tool.oschina.net/","desc":"开源中国提供的工具集","icon":"/navicon/oschina.ico"},{"title":"程序员","url":"https://tool.lu/","desc":"程序员的工具箱","icon":"/navicon/chengxuyuan.ico"},{"title":"脚本之家","url":"http://tools.jb51.net/","desc":"脚本之家提供的工具箱","icon":"/navicon/jiaoben.ico"},{"title":"W3C","url":"https://123.w3cschool.cn/webtools","desc":"W3C School旗下提供的工具箱","icon":"/navicon/w3c.ico"},{"title":"云转换","url":"https://cloudconvert.com/","desc":"在线转化","icon":"/navicon/yun.png"}]' }, null, _parent));
  _push(`<h2 id="在线教程" tabindex="-1"><a class="header-anchor" href="#在线教程" aria-hidden="true">#</a> 在线教程</h2>`);
  _push(ssrRenderComponent(_component_NavCard, { arr: '[{"title":"Electron","url":"https://www.electronjs.org/","desc":"electron官方文档","icon":"/navicon/electron.svg"},{"title":"IDEA","url":"https://idea.javaguide.cn/","desc":"IDEA高效使用指南","icon":"/navicon/idea.svg"},{"title":"QuickRef","url":"https://quickref.me/","desc":"快速学习各种语言的语法","icon":"/navicon/quickref.png"},{"title":"中文网","url":"http://c.biancheng.net/","desc":"C语言中文网","icon":"/navicon/c.ico"},{"title":"菜鸟教程","url":"https://www.runoob.com/","desc":"菜鸟在线教程","icon":"/navicon/runoob.ico"},{"title":"W3C","url":"https://www.w3cschool.cn/tutorial","desc":"w3c在线基础教程","icon":"/navicon/w3c.ico"},{"title":"w3school","url":"https://www.w3school.com.cn/index.html","desc":"领先的web技术教程","icon":"/navicon/w3school.png"}]' }, null, _parent));
  _push(`<h2 id="文档相关" tabindex="-1"><a class="header-anchor" href="#文档相关" aria-hidden="true">#</a> 文档相关</h2>`);
  _push(ssrRenderComponent(_component_NavCard, { arr: '[{"title":"在线MD","url":"https://markdown.com.cn/editor/","desc":"在线编写MarkDown","icon":"/navicon/github.ico"},{"title":"hope","url":"https://vuepress-theme-hope.gitee.io/v2/zh/","desc":"一个优秀静态博客搭建工具","icon":"/navicon/hope.svg"}]' }, null, _parent));
  _push(`<h2 id="其他导航" tabindex="-1"><a class="header-anchor" href="#其他导航" aria-hidden="true">#</a> 其他导航</h2>`);
  _push(ssrRenderComponent(_component_NavCard, { arr: '[{"title":"极下解析","url":"https://jixia.ltd/","desc":"百度云外链解析","icon":"/navicon/jixia.ico"},{"title":"MyOctoCat","url":"https://myoctocat.com/","desc":"程序员头像","icon":"/navicon/github.ico"},{"title":"LeetCode","url":"https://leetcode.cn/","desc":"刷题网站","icon":"/navicon/leetcode.ico"},{"title":"Jar包下载","url":"https://search.maven.org/","desc":"Jar包个版本下载","icon":"/navicon/jar.ico"},{"title":"ghelper","url":"http://ghelper.net/","desc":"看世界","icon":"/navicon/ghelper.png"},{"title":"Maven仓库","url":"https://mvnrepository.com/","desc":"Maven官方仓库","icon":"/navicon/mvn.ico"}]' }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/quicknav/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
