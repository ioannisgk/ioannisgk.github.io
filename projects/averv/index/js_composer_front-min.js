function getColumnsCount(t){for(var e=!1,i=1;0==e;){if(t.hasClass("columns_count_"+i))return e=!0,i;i++}}function getSizeName(){var t="",e=jQuery(window).width();return e>1170?t="desktop_wide":e>960&&e<1169?t="desktop":e>768&&e<959?t="tablet":e>300&&e<767?t="mobile":e<300&&(t="mobile_portrait"),t}function loadScript(t,e,i){var n=document.createElement("script");n.type="text/javascript",n.readyState&&(n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,i())}),n.src=t,e.get(0).appendChild(n)}function wpb_prepare_tab_content(t,e){var i=e.panel||e.newPanel,n=i.find(".vc_pie_chart:not(.vc_ready)"),a=i.find('[data-ride="vc_carousel"]'),o,r;if(vc_carouselBehaviour(),vc_plugin_flexslider(i),n.length&&jQuery.fn.vcChat&&n.vcChat(),a.length&&jQuery.fn.carousel&&a.carousel("resizeAction"),o=i.find(".isotope"),r=i.find(".wpb_gmaps_widget"),o.length>0&&o.isotope("layout"),r.length&&!r.is(".map_ready")){var s=r.find("iframe");s.attr("src",s.attr("src")),r.addClass("map_ready")}i.parents(".isotope").length&&i.parents(".isotope").each(function(){jQuery(this).isotope("layout")})}document.documentElement.className+=" js_active ",document.documentElement.className+="ontouchstart"in document.documentElement?" vc_mobile ":" vc_desktop ",function(){var t=["-webkit-","-o-","-moz-","-ms-",""];for(var e in t)t[e]+"transform"in document.documentElement.style&&(document.documentElement.className+=" vc_transform ")}(),jQuery(window).load(function(){});var vc_js=function(){vc_twitterBehaviour(),vc_toggleBehaviour(),vc_tabsBehaviour(),vc_accordionBehaviour(),vc_teaserGrid(),vc_carouselBehaviour(),vc_slidersBehaviour(),vc_prettyPhoto(),vc_googleplus(),vc_pinterest(),vc_progress_bar(),vc_plugin_flexslider(),vc_google_fonts(),window.setTimeout(vc_waypoints,1500)};if(jQuery(document).ready(function(t){}),jQuery("body").hasClass("compose-mode")&&(jQuery(".wpb_animate_when_almost_visible").removeClass("wpb_animate_when_almost_visible"),jQuery(".verve_counter").each(function(){var t=jQuery(this);t.counter({autoStart:!0,duration:parseInt(t.attr("data-duration"),10),countFrom:t.attr("data-origin"),countTo:t.attr("data-counter"),runOnce:!0,placeholder:"",easing:"easeOutCubic",onStart:function(){},onComplete:function(){},numberFormatter:function(t){return Math.ceil(t)}})}),jQuery(".vc_progress_bar").find(".vc_single_bar").each(function(){var t=jQuery(this),e=t.find(".vc_bar"),i=e.data("percentage-value");t.css({opacity:"1"}),e.css({width:i+"%"})})),"function"!=typeof window.vc_plugin_flexslider)function vc_plugin_flexslider(t){var e;(t?t.find(".wpb_flexslider"):jQuery(".wpb_flexslider")).each(function(){var t=jQuery(this),e=800,i=1e3*parseInt(t.attr("data-interval")),n=t.attr("data-flex_fx"),a=!0;0==i&&(a=!1),t.is(":visible")&&t.flexslider({animation:n,slideshow:a,slideshowSpeed:i,sliderSpeed:800,smoothHeight:!0})})}if("function"!=typeof window.vc_twitterBehaviour)function vc_twitterBehaviour(){jQuery(".wpb_twitter_widget .tweets").each(function(t){var e=jQuery(this),i=e.attr("data-tw_name");tw_count=e.attr("data-tw_count"),e.tweet({username:i,join_text:"auto",avatar_size:0,count:tw_count,template:"{avatar}{join}{text}{time}",auto_join_text_default:"",auto_join_text_ed:"",auto_join_text_ing:"",auto_join_text_reply:"",auto_join_text_url:"",loading_text:'<span class="loading_tweets">loading tweets...</span>'})})}if("function"!=typeof window.vc_googleplus)function vc_googleplus(){jQuery(".wpb_googleplus").length>0&&function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://apis.google.com/js/plusone.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()}if("function"!=typeof window.vc_pinterest)function vc_pinterest(){jQuery(".wpb_pinterest").length>0&&function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://assets.pinterest.com/js/pinit.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()}if("function"!=typeof window.vc_progress_bar)function vc_progress_bar(){void 0!==jQuery.fn.waypoint&&(is_mobile()?jQuery(".vc_progress_bar").find(".vc_single_bar").each(function(){var t=jQuery(this),e=t.find(".vc_bar"),i=e.data("percentage-value");t.css({opacity:"1"}),e.css({width:i+"%"})}):jQuery(".vc_progress_bar").waypoint(function(){jQuery(this).find(".vc_single_bar").each(function(t){var e=jQuery(this),i=e.find(".vc_bar"),n=i.data("percentage-value");setTimeout(function(){e.css({opacity:"1"}),i.css({width:n+"%"})},200*t)})},{offset:"95%"}))}if("function"!=typeof window.vc_waypoints)function vc_waypoints(){void 0!==jQuery.fn.waypoint&&(is_mobile()?(jQuery(".wpb_animate_when_almost_visible").removeClass("wpb_animate_when_almost_visible"),jQuery(".verve_counter").each(function(){var t=jQuery(this);t.counter({autoStart:!0,duration:parseInt(t.attr("data-duration"),10),countFrom:t.attr("data-origin"),countTo:t.attr("data-counter"),runOnce:!0,placeholder:"",easing:"easeOutCubic",onStart:function(){},onComplete:function(){},numberFormatter:function(t){return Math.ceil(t)}})})):(jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation,.vrv_manual_anim)").waypoint(function(){var t=jQuery(this);if(t.is('[class*="delay-"]')){for(var e=t.attr("class").split(" "),i=0,n=0;n<e.length;n++)if("delay-"===e[n].substr(0,6)){i=e[n].substr(6,e[n].length);break}setTimeout(function(){t.addClass("wpb_start_animation")},parseInt(i,10)+100)}else setTimeout(function(){t.addClass("wpb_start_animation")},parseInt(i,10)+300)},{offset:"90%"}),jQuery(".verve_counter").waypoint(function(){var t=jQuery(this);t.counter({autoStart:!0,duration:parseInt(t.attr("data-duration"),10),countFrom:t.attr("data-origin"),countTo:t.attr("data-counter"),runOnce:!0,placeholder:"0",easing:"easeOutCubic",onStart:function(){},onComplete:function(){},numberFormatter:function(t){return Math.ceil(t)}})},{offset:"85%"})))}if("function"!=typeof window.vc_toggleBehaviour)function vc_toggleBehaviour(){jQuery(".wpb_toggle").unbind("click").click(function(t){if(jQuery(this).next().is(":animated"))return!1;jQuery(this).hasClass("wpb_toggle_title_active")?jQuery(this).removeClass("wpb_toggle_title_active").next().slideUp(500):jQuery(this).addClass("wpb_toggle_title_active").next().slideDown(500)}),jQuery(".wpb_toggle_content").each(function(t){0==jQuery(this).next().is("h4.wpb_toggle")&&jQuery('<div class="last_toggle_el_margin"></div>').insertAfter(this)})}if("function"!=typeof window.vc_tabsBehaviour)function vc_tabsBehaviour(){jQuery(function(t){t(document.body).off("click.preview","a")}),jQuery(".wpb_tabs, .wpb_tour").each(function(t){var e,i=jQuery(this).attr("data-interval"),n=[];e=jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({show:function(t,e){},beforeActivate:function(t,e){var i=e.panel||e.newPanel},activate:function(t,e){var i=e.panel||e.newPanel}}),jQuery(this).find(".wpb_tab").each(function(){n.push(this.id)})})}if("function"!=typeof window.vc_accordionBehaviour)function vc_accordionBehaviour(){jQuery(".wpb_accordion").each(function(t){var e,i=jQuery(this).attr("data-interval"),n=!isNaN(jQuery(this).data("active-tab"))&&parseInt(jQuery(this).data("active-tab"))>0&&parseInt(jQuery(this).data("active-tab"))-1,a=!1===n||"yes"===jQuery(this).data("collapsible"),o={header:"verve_fa-plus",activeHeader:"verve_fa-minus"};e=jQuery(this).find(".wpb_accordion_wrapper").accordion({header:"> div > h3",icons:o,autoHeight:!1,heightStyle:"content",active:n,collapsible:a,navigation:!0,activate:function(t,e){vc_carouselBehaviour();var i=e.panel||e.newPanel}})})}if("function"!=typeof window.vc_teaserGrid)function vc_teaserGrid(){var t={fitrows:"fitRows",masonry:"masonry"};jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function(){var e=jQuery(this),i=e.find(".wpb_thumbnails"),n=i.attr("data-layout-mode");i.isotope({itemSelector:".isotope-item",layoutMode:null==t[n]?"fitRows":t[n]}),e.find(".categories_filter a").data("isotope",i).click(function(t){t.preventDefault();var e=jQuery(this).data("isotope");jQuery(this).parent().parent().find(".active").removeClass("active"),jQuery(this).parent().addClass("active"),e.isotope({filter:jQuery(this).attr("data-filter")})}),jQuery(window).bind("load resize",function(){i.isotope("layout")})})}if("function"!=typeof window.vc_carouselBehaviour)function vc_carouselBehaviour(t){var e;(t?t.find(".wpb_carousel"):jQuery(".wpb_carousel")).each(function(){var t=jQuery(this);if(!0!==t.data("carousel_enabled")&&t.is(":visible")){t.data("carousel_enabled",!0);var e=jQuery(this).width(),i=getColumnsCount(jQuery(this)),n=500;jQuery(this).hasClass("columns_count_1")&&(n=900);var a=jQuery(this).find(".wpb_thumbnails-fluid li");a.css({"margin-right":a.css("margin-left"),"margin-left":0}),jQuery(this).find(".wpb_wrapper:eq(0)").jCarouselLite({btnNext:jQuery(this).find(".next"),btnPrev:jQuery(this).find(".prev"),visible:i,speed:n}).width("100%");var o=jQuery(this).find("ul.wpb_thumbnails-fluid");o.width(o.width()+300),jQuery(window).resize(function(){var t;screen_size!=(screen_size=getSizeName())&&window.setTimeout("location.reload()",20)})}})}if("function"!=typeof window.vc_slidersBehaviour)function vc_slidersBehaviour(){jQuery(".wpb_gallery_slides").each(function(t){var e=jQuery(this),i=0;if(e.hasClass("wpb_image_grid")){var n=e.find(".wpb_image_grid_ul");n.isotope({itemSelector:".isotope-item",layoutMode:"fitRows"}),jQuery(window).load(function(){n.isotope("layout")})}})}if("function"!=typeof window.vc_prettyPhoto)function vc_prettyPhoto(){}if("function"!=typeof window.vc_google_fonts)function vc_google_fonts(){}var screen_size=getSizeName();!function(t){"use strict";function e(e,n){var a;return a=Array.prototype.slice.call(arguments,1),this.each(function(){var o,r;(r=(o=t(this)).data("vc.accordion"))||(r=new i(o,t.extend(!0,{},n)),o.data("vc.accordion",r)),"string"==typeof e&&r[e].apply(r,a)})}var i,n,a,o;(i=function(t,e){this.$element=t,this.activeClass="vc_active",this.animatingClass="vc_animating",this.useCacheFlag=void 0,this.$target=void 0,this.$targetContent=void 0,this.selector=void 0,this.$container=void 0,this.animationDuration=void 0,this.index=0}).transitionEvent=function(){var t,e,i;for(t in i=document.createElement("vcFakeElement"),e={transition:"transitionend",MSTransition:"msTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"})if(void 0!==i.style[t])return e[t]},i.emulateTransitionEnd=function(t,e){var n,a;a=!1,e||(e=250),t.one(i.transitionName,function(){a=!0}),setTimeout(n=function(){a||t.trigger(i.transitionName)},e)},i.DEFAULT_TYPE="collapse",i.transitionName=i.transitionEvent(),i.prototype.controller=function(t){var n;n=this.$element,"string"!=typeof t&&(t=n.data("vcAction")||this.getContainer().data("vcAction")),void 0===t&&(t=i.DEFAULT_TYPE),"string"==typeof t&&e.call(n,t)},i.prototype.isCacheUsed=function(){var t,e;return e=this,t=function(){return!1!==e.$element.data("vcUseCache")},void 0===this.useCacheFlag&&(this.useCacheFlag=t()),this.useCacheFlag},i.prototype.getSelector=function(){var t,e;return e=this.$element,t=function(){var t;return(t=e.data("vcTarget"))||(t=e.attr("href")),t},this.isCacheUsed()?(void 0===this.selector&&(this.selector=t()),this.selector):t()},i.prototype.findContainer=function(){var e;return(e=this.$element.closest(this.$element.data("vcContainer"))).length||(e=t("body")),e},i.prototype.getContainer=function(){return this.isCacheUsed()?(void 0===this.$container&&(this.$container=this.findContainer()),this.$container):this.findContainer()},i.prototype.getTarget=function(){var t;return t=this.getSelector(),this.isCacheUsed()?(void 0===this.$target&&(this.$target=this.getContainer().find(t)),this.$target):this.getContainer().find(t)},i.prototype.getTargetContent=function(){var t,e;return t=this.getTarget(),this.isCacheUsed()?(void 0===this.$targetContent&&(e=t,t.data("vcContent")&&((e=t.find(t.data("vcContent"))).length||(e=t)),this.$targetContent=e),this.$targetContent):t.data("vcContent")&&(e=t.find(t.data("vcContent"))).length?e:t},i.prototype.getTriggers=function(){var e;return e=0,this.getContainer().find("[data-vc-accordion]").each(function(){var i,n;void 0===(i=(n=t(this)).data("vc.accordion"))&&(n.vcAccordion(),i=n.data("vc.accordion")),i&&i.setIndex&&i.setIndex(e++)})},i.prototype.setIndex=function(t){this.index=t},i.prototype.getIndex=function(){return this.index},i.prototype.triggerEvent=function(e){var i;"string"==typeof e&&(i=t.Event(e),this.$element.trigger(i))},i.prototype.getActiveTriggers=function(){var e;return e=this.getTriggers().filter(function(){var e,i;return(i=(e=t(this)).data("vc.accordion")).getTarget().hasClass(i.activeClass)})},i.prototype.changeLocationHash=function(){var t,e;(e=this.getTarget()).length&&(t=e.attr("id")),t&&(history.pushState?history.pushState(null,null,"#"+t):location.hash="#"+t)},i.prototype.isActive=function(){return this.getTarget().hasClass(this.activeClass)},i.prototype.getAnimationDuration=function(){var t,e;return e=this,t=function(){var t,i;return i=(i=(t=e.getTargetContent()).css("transition-duration")).split(",")[0],!!parseFloat(i)&&i},this.isCacheUsed()?(void 0===this.animationDuration&&(this.animationDuration=t()),this.animationDuration):t()},i.prototype.isAnimated=function(){return!!this.getAnimationDuration()},i.prototype.show=function(){var t,e,n;t=(e=this).getTarget(),n=e.getTargetContent(),e.isActive()||(e.isAnimated()?(e.triggerEvent("beforeShow.vc.accordion"),t.queue(function(a){n.one(i.transitionName,function(){t.removeClass(e.animatingClass),n.attr("style",""),e.triggerEvent("afterShow.vc.accordion")}),i.emulateTransitionEnd(n),a()}).queue(function(t){n.css({position:"absolute",visibility:"hidden",display:"block"});var e=n.height();n.data("vcHeight",e),n.attr("style",""),t()}).queue(function(t){n.height(0),n.css("padding-top",0),n.css("padding-bottom",0),t()}).queue(function(i){t.addClass(e.animatingClass),t.addClass(e.activeClass),e.changeLocationHash(),e.triggerEvent("show.vc.accordion"),i()}).queue(function(t){var e=n.data("vcHeight");n.height(e),n.css("padding-top",""),n.css("padding-bottom",""),t()})):(t.addClass(e.activeClass),e.triggerEvent("show.vc.accordion")))},i.prototype.hide=function(){var t,e,n;t=(e=this).getTarget(),n=e.getTargetContent(),e.isActive()&&(e.isAnimated()?(e.triggerEvent("beforeHide.vc.accordion"),t.queue(function(a){n.one(i.transitionName,function(){t.removeClass(e.animatingClass),n.attr("style",""),e.triggerEvent("afterHide.vc.accordion")}),i.emulateTransitionEnd(n),a()}).queue(function(i){t.addClass(e.animatingClass),t.removeClass(e.activeClass),e.triggerEvent("hide.vc.accordion"),i()}).queue(function(t){var e=n.height();n.height(e),t()}).queue(function(t){n.height(0),n.css("padding-top",0),n.css("padding-bottom",0),t()})):(t.removeClass(e.activeClass),e.triggerEvent("hide.vc.accordion")))},i.prototype.toggle=function(){var t;t=this.$element,this.isActive()?e.call(t,"hide"):e.call(t,"show")},i.prototype.collapse=function(){var t,i;t=this.$element,(i=this.getActiveTriggers().filter(function(){return t[0]!==this})).length&&e.call(i,"hide"),e.call(t,"show")},i.prototype.collapseAll=function(){var t,i;t=this.$element,(i=this.getActiveTriggers().filter(function(){return t[0]!==this})).length&&e.call(i,"hide"),e.call(t,"toggle")},i.prototype.showNext=function(){var t,i,n;if(t=this.getTriggers(),i=this.getActiveTriggers(),t.length){var a;if(i.length)(a=i.eq(i.length-1).vcAccordion().data("vc.accordion"))&&a.getIndex&&(n=a.getIndex());-1<n&&n+1<t.length?e.call(t.eq(n+1),"controller"):e.call(t.eq(0),"controller")}},i.prototype.showPrev=function(){var t,i,n;if(t=this.getTriggers(),i=this.getActiveTriggers(),t.length){var a;if(i.length)(a=i.eq(i.length-1).vcAccordion().data("vc.accordion"))&&a.getIndex&&(n=a.getIndex());-1<n?0<=n-1?e.call(t.eq(n-1),"controller"):e.call(t.eq(t.length-1),"controller"):e.call(t.eq(0),"controller")}},i.prototype.showAt=function(t){var i;(i=this.getTriggers()).length&&t&&t<i.length&&e.call(i.eq(t),"controller")},a=t.fn.vcAccordion,t.fn.vcAccordion=e,t.fn.vcAccordion.Constructor=i,t.fn.vcAccordion.noConflict=function(){return t.fn.vcAccordion=a,this},n=function(i){var n;n=t(this),i.preventDefault(),e.call(n,"controller")},o=function(){var e,i,n,a,o,r;a=.3,o=300,r=0,(e=window.location.hash)&&(i=t(e)).length&&(n=i.find("[data-vc-accordion]")).length&&(setTimeout(function(){t("html, body").animate({scrollTop:i.offset().top-.3*t(window).height()},0)},300),n.trigger("click"))},t(document).on("click.vc.accordion.data-api","[data-vc-accordion]",n),t(document).ready(o)}(window.jQuery),function(t){"use strict";function e(e,n){var a;return a=Array.prototype.slice.call(arguments,1),this.each(function(){var o,r;(r=(o=t(this)).data("vc.tabs"))||(r=new i(o,t.extend(!0,{},n)),o.data("vc.tabs",r)),"string"==typeof e&&r[e].apply(r,a)})}var i,n,a,o;(i=function(e,i){this.$element=t(e),this.activeClass="vc_active",this.tabSelector="[data-vc-tab]",this.useCacheFlag=void 0,this.$target=void 0,this.selector=void 0,this.$targetTab=void 0,this.$relatedAccordion=void 0,this.$container=void 0}).prototype.isCacheUsed=function(){var t,e;return e=this,t=function(){return!1!==e.$element.data("vcUseCache")},void 0===this.useCacheFlag&&(this.useCacheFlag=t()),this.useCacheFlag},i.prototype.getContainer=function(){return this.isCacheUsed()?(void 0===this.$container&&(this.$container=this.findContainer()),this.$container):this.findContainer()},i.prototype.findContainer=function(){var e;return(e=this.$element.closest(this.$element.data("vcContainer"))).length||(e=t("body")),e},i.prototype.getContainerAccordion=function(){return this.getContainer().find("[data-vc-accordion]")},i.prototype.getSelector=function(){var t,e;return e=this.$element,t=function(){var t;return(t=e.data("vcTarget"))||(t=e.attr("href")),t},this.isCacheUsed()?(void 0===this.selector&&(this.selector=t()),this.selector):t()},i.prototype.getTarget=function(){var t;return t=this.getSelector(),this.isCacheUsed()?(void 0===this.$target&&(this.$target=this.getContainer().find(t)),this.$target):this.getContainer().find(t)},i.prototype.getRelatedAccordion=function(){var e,i;return e=this,i=function(){var i;if((i=e.getContainerAccordion().filter(function(){var i,n;return void 0===(n=(i=t(this)).data("vc.accordion"))&&(i.vcAccordion(),n=i.data("vc.accordion")),e.getSelector()===n.getSelector()})).length)return i},this.isCacheUsed()?(void 0===this.$relatedAccordion&&(this.$relatedAccordion=i()),this.$relatedAccordion):i()},i.prototype.triggerEvent=function(e){var i;"string"==typeof e&&(i=t.Event(e),this.$element.trigger(i))},i.prototype.getTargetTab=function(){var t;return t=this.$element,this.isCacheUsed()?(void 0===this.$targetTab&&(this.$targetTab=t.closest(this.tabSelector)),this.$targetTab):t.closest(this.tabSelector)},i.prototype.tabClick=function(){this.getRelatedAccordion().trigger("click")},i.prototype.show=function(){this.getTargetTab().hasClass(this.activeClass)||(this.triggerEvent("show.vc.tab"),this.getTargetTab().addClass(this.activeClass))},i.prototype.hide=function(){this.getTargetTab().hasClass(this.activeClass)&&(this.triggerEvent("hide.vc.tab"),this.getTargetTab().removeClass(this.activeClass))},n=t.fn.vcTabs,t.fn.vcTabs=e,t.fn.vcTabs.Constructor=i,t.fn.vcTabs.noConflict=function(){return t.fn.vcTabs=n,this},a=function(i){var n;n=t(this),i.preventDefault(),e.call(n,"tabClick")},o=function(i){var n;void 0===(n=t(i.target).data("vc.accordion")).getRelatedTab&&(n.getRelatedTab=function(){var e;return e=function(){var e;return e=n.getContainer().find("[data-vc-tabs]").filter(function(){var e,i;return void 0===(i=(e=t(this)).data("vc.accordion"))&&e.vcAccordion(),(i=e.data("vc.accordion")).getSelector()===n.getSelector()})},n.isCacheUsed()?(void 0===n.relatedTab&&(n.relatedTab=e()),n.relatedTab):e()}),e.call(n.getRelatedTab(),i.type)},t(document).on("click.vc.tabs.data-api","[data-vc-tabs]",a),t(document).on("show.vc.accordion hide.vc.accordion",o)}(window.jQuery),function(t){"use strict";function e(){t("[data-vc-tta-autoplay]").each(function(){t(this).vcTtaAutoPlay()})}var i,n,a;i=function(e,i){var a;return a=Array.prototype.slice.call(arguments,1),this.each(function(){var o,r;(r=(o=t(this)).data("vc.tta.autoplay"))||(r=new n(o,t.extend(!0,{},n.DEFAULTS,o.data("vc-tta-autoplay"),i)),o.data("vc.tta.autoplay",r)),"string"==typeof e?r[e].apply(r,a):r.start(a)})},(n=function(t,e){this.$element=t,this.options=e}).DEFAULTS={delay:5e3,pauseOnHover:!0,stopOnClick:!0},n.prototype.show=function(){this.$element.find("[data-vc-accordion]:eq(0)").vcAccordion("showNext")},n.prototype.hasTimer=function(){return void 0!==this.$element.data("vc.tta.autoplay.timer")},n.prototype.setTimer=function(t){this.$element.data("vc.tta.autoplay.timer",t)},n.prototype.getTimer=function(){return this.$element.data("vc.tta.autoplay.timer")},n.prototype.deleteTimer=function(){this.$element.removeData("vc.tta.autoplay.timer")},n.prototype.start=function(){function t(t){t.preventDefault&&t.preventDefault(),a.hasTimer()&&i.call(n,"stop")}function e(t){t.preventDefault&&t.preventDefault(),a.hasTimer()&&i.call(n,"mouseleave"===t.type?"resume":"pause")}var n,a;n=this.$element,a=this,this.hasTimer()||(this.setTimer(window.setInterval(this.show.bind(this),this.options.delay)),this.options.stopOnClick&&n.on("click.vc.tta.autoplay.data-api","[data-vc-accordion]",t),this.options.pauseOnHover&&n.hover(e))},n.prototype.resume=function(){this.hasTimer()&&this.setTimer(window.setInterval(this.show.bind(this),this.options.delay))},n.prototype.stop=function(){this.pause(),this.deleteTimer(),this.$element.off("click.vc.tta.autoplay.data-api mouseenter mouseleave")},n.prototype.pause=function(){var t;void 0!==(t=this.getTimer())&&window.clearInterval(t)},a=t.fn.vcTtaAutoPlay,t.fn.vcTtaAutoPlay=i,t.fn.vcTtaAutoPlay.Constructor=n,t.fn.vcTtaAutoPlay.noConflict=function(){return t.fn.vcTtaAutoPlay=a,this},t(document).ready(e)}(window.jQuery);