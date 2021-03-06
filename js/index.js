/*
 *  Render hero icon objects
 */
const twiconlist = ["twicon-td-flag","twicon-roc-flag","twicon-main-island","twicon-penghu-islands","twicon-kinmen-island","twicon-green-island","twicon-lamay-island","twicon-gueishan-island","twicon-orchid-island","twicon-cks-hall","twicon-gate-cks","twicon-president-office","twicon-taipei101","twicon-np-mus","twicon-shrine-tp","twicon-longshan-tmp","twicon-sys-hall","twicon-confucius-tmp","twicon-xingtian-tmp","twicon-nt-mus","twicon-grand-hotel","twicon-228-park","twicon-san-domingo","twicon-raohe-nm","twicon-red-house","twicon-beimen","twicon-xiaonanmen","twicon-taipei-stn","twicon-zeelandia","twicon-eg-castle","twicon-provintia","twicon-hy-statue","twicon-85tower","twicon-fb-stn","twicon-dt-pagoda","twicon-rosary-church","twicon-longteng-brg","twicon-ly-mus","twicon-lovers-brg","twicon-hotspring-mus","twicon-tunghai-uni","twicon-taichung-park","twicon-queens-head","twicon-ntc-theater","twicon-bagua","twicon-foguangshan","twicon-vase-rock","twicon-tropic-cancer","twicon-fuguijiao-lh","twicon-yuweng-lh","twicon-eluanbi-lh","twicon-kano-staue","twicon-ershawan","twicon-dahu-park","twicon-balloon","twicon-taiwan-rw","twicon-taipei-mrt","twicon-alishan-rw","twicon-high-speed-rail","twicon-gondola","twicon-youbike","twicon-yami-boat","twicon-dragon-boat","twicon-lantern1","twicon-lantern2","twicon-sky-lantern","twicon-taiwanese-bag","twicon-postbox1","twicon-postbox2","twicon-jug","twicon-tea-pot","twicon-tapioca","twicon-beer","twicon-apple-cider","twicon-couplets","twicon-fortune","twicon-electric-pot","twicon-slipper","twicon-flying-fish","twicon-black-bear","twicon-trash","twicon-recycling","twicon-queue-box","twicon-bicycle-lane","twicon-red-man","twicon-green-man","twicon-l-nh-insurance","twicon-l-pixnet","twicon-l-17live","twicon-l-wemo","twicon-l-dcard","twicon-l-easy-card","twicon-l-ipass","twicon-l-youbike","twicon-l-luxgen","twicon-l-post","twicon-l-taiwan-rw","twicon-l-taipei-mrt","twicon-l-kaoxiong-mrt"];
window.onload = function(){
  var iconlist = document.getElementsByClassName("hero_icons")[0];

  for (var i=0; i<twiconlist.length; i++){
    var htmlcode = '<div><div><span class="' + twiconlist[i] + '"></span></div></div>';
    iconlist.innerHTML += htmlcode;
  }
}

/*
 *  Generate JSON
 */
// var heroiconslist = document.getElementsByClassName("hero_icons")[0];
// var lis = heroiconslist.getElementsByTagName("span");
// var twiconclass = [];
// for(var i=0; i<lis.length; i++){
// var classname = lis[i].className;
// twiconclass.push(classname);
// }
// console.log(JSON.stringify(twiconclass));