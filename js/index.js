var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized = false;

var big_image; 
var scroll;
var project_content;
var $project;
scroll = ( 2500 - $(window).width() ) / $(window).width();

var $ScrollTop;
var $ScrollBot;

var pixels;

var modal;
var $project_content;

var test = true;        

var timerStart = Date.now();
var delay;

var no_of_elements = 0;
var window_height;
var window_width;

var content_opacity = 0;
var content_transition = 0;
var no_touch_screen = false;

var burger_menu;
var openLightbox=false;
var worksdata=new Array(9);

$(document).ready(function(){
    BrowserDetect.init();
    
    if(BrowserDetect.browser === 'Explorer' && BrowserDetect.version <= 9){
        $('body').html(better_browser);   
    }

    window_width = $(window).width();
    window_height = $(window).height();

    burger_menu = $('nav').hasClass('navbar-burger') ? true : false;
    
    if (!Modernizr.touch){
        $('body').addClass('no-touch');
        no_touch_screen = true;
    }
    
    rubik.initAnimationsCheck();
    
    // Init navigation toggle for small screens   
    if(window_width < 979 || burger_menu){
        rubik.initRightMenu();   
    }

    if(window_width < 979){
        $('.over-area').each(function(){
            var click = $(this).attr("onClick");
            if(click === ''){
                src = "rubik.showModal(this)";
                $(this).attr("onClick", src);
            }
        });
        
        rubik.checkResponsiveImage();
    } 
    
    
    
    if($('#contactUsMap').length !== 0){
        rubik.initGoogleMaps();   
    }
    
    if($('.content-with-opacity').length != 0){
        content_opacity = 1;
    }
    
    //作品集內容
    //親子故宮-坤輿全圖
    worksdata[0]=new workdataContent();
    worksdata[0].technology="ActionScript、硬體加速、Starling、Socket、XML讀檔";
    worksdata[0].intro="此作品為體感互動劇場。主要負責牆面互動內容撰寫，系統接收感測器所傳送的的值進行視覺變化，並利用Socket與地面數位內容進行串接，達到同步效果。";
    //光影旅行者－陳澄波百二互動展-時空長廊
    worksdata[1]=new workdataContent();
    worksdata[1].technology="C#、動態UI、Socket接收感測值";
    worksdata[1].intro="介紹陳澄波四個時期的作品，系統定期的去做變動。使用者站在自己感興趣的畫作前面，畫面會顯示相關的詳細內容，更可用手揮動看其它相關的畫作內容。";
    // 圓明園-四季
    worksdata[2]=new workdataContent();
    worksdata[2].technology="C#、Socket、接受感測訊號、連續貼圖、影片撥放";
    worksdata[2].intro="此作品主要是圓明園特展一項互動作品，作品中展現了當年乾隆下江南所懷念的四季風光，此風光景色也可以再圓明園中感受到。作品主要在一個廊道空間內，空間內的牆壁與地板能夠透過SOCKEET連接，使多媒體能夠同步展現，使經過的民眾能透過多媒體融入於本作品所營造的四季氛圍中。並透過Kinect感應，再場景中的雲會跟隨使用者的步伐，而冬季氛圍若是踩在破冰上，魚則則會躍出，增添趣味感。";
    //科博館-親子探索背包
    worksdata[3]=new workdataContent();
    worksdata[3].technology="ActionScript、後台API連接";
    worksdata[3].intro="此APP提供了各種不同的套裝知識任務系列，透過此APP拍攝展品的QRcode可以開啟針對該APP開發的數位互動學習內容，藉由闖關獲得虛擬寶物，參觀的民眾除了展品看板知識外有更深入的學習。APP也記錄了使用者的學習記錄。";
    //V&A千年中國民畫展-九龍
    worksdata[4]=new workdataContent();
    worksdata[4].technology="C#、ActionScript、Socket";
    worksdata[4].intro="此裝置於V&A千年中國民畫展展出，內容使用南宋陳容的《九龍圖》和明代仇英的《潯陽送別圖》。互動可以隨參觀民眾的腳步產生變化、著色，把古典名畫以生動的形式展現出來。";
    //新北市圖-資訊方塊
    worksdata[5]=new workdataContent();
    worksdata[5].technology="ActionScript、後台API連接、多單元整合";
    worksdata[5].intro="此裝置分布在新北市圖館內各樓層，依照各樓層不同的屬性可透過後台設定該樓層所開的功能。讓民眾可以對館內有更深的了解，也可掌握館內資訊。內容包含：樓層導覽、貴賓留影、新到雜誌、訪客留言版、問卷調查……。";
    //台大2016全國檔案聯展-拍照系統
    worksdata[6]=new workdataContent();
    worksdata[6].technology="JavaScript、HTML、CSS、JQuery、Node.js、MongoDb";
    worksdata[6].intro="此為去背拍照系統，民眾可以挑選各大學背景進行合成。系統為三台主機，兩台為索號、編輯照片主機，一台為去背主機。負責編輯照片主機的部分，可提供民眾索號以等待叫號拍照與後續拍照編輯、寄送E-mail、上傳至FB粉絲團，";
    //科博館-科博教學趣
    worksdata[7]=new workdataContent();
    worksdata[7].technology="ActionScript、後台API連接";
    worksdata[7].intro="此APP讓老師可以線上科博館的「科博教學趣網站」上網登入預約行程，老師可帶著班級至科博館按照學習單的內容，透過拍照、繪畫、問答、選擇、導引的方式去了解、觀察館內的展品，更深刻的學習知識。";
    //光影旅行者－陳澄波百二互動展-自畫像
    worksdata[8]=new workdataContent();
    worksdata[8].technology="C#、連續貼圖、人臉偵測、Arduino連接";
    worksdata[8].intro="當拿起裝置旁的帽子，站在鏡子前，系統偵測到人臉後，鏡子將轉換為螢幕，螢幕即撥放陳澄波有名的名言。";

    
    $('#basic_content').show();
    $('#award_content').hide();
    $('#paper_content').hide();
    $('.about_me_submenu ul').find("li").eq(0).css('text-decoration','underline');
    var now_content=0;
    $('.about_me_submenu ul li').on("mousedown", function () {
          var self   = $(this),
              index  = self.index(),
              text   = self.text();

          console.log(text + ' ' + index);
         $('.about_me_submenu ul li').css('text-decoration','none');
         $(self).css('text-decoration','underline');
          switch(index){
              case 1:
                  now_content=1;
                  $('#basic_content').hide();
                  $('#award_content').show();
                  $('#paper_content').hide();

                  break;
              case 2:
                  now_content=2;
                  $('#basic_content').hide();
                  $('#award_content').hide();
                  $('#paper_content').show();
                 
                  break;
              case  0:
              default:
                  now_content=0;
                  $('#basic_content').show();
                  $('#award_content').hide();
                  $('#paper_content').hide();
                 
                  break;
          }
    })
    .on('mouseover',function(){
         $(this).css('text-decoration','underline');
        
    })
        .on('mouseout',function(){
         if(now_content!=$(this).index()){
             $(this).css('text-decoration','none');
         }
        
    });
    
    

            
            $('.work_img').hover(
                function(){
                    var moveY=($(this).height())- ($(this).find('span').height());
                    $(this).find('span').animate({
                        top:moveY 
                    }, 300);
                },
                function(){
                    $(this).find('span').animate({
                        top: "100%"
                    }, 300);
                   
                }
            );
    
    
    
    //打開作品介紹
    $('.work_img').mousedown(function(){
        console.log("按下作品!"+$(this).attr('id'));
        //將內容填入
        var index=String($(this).attr('id')).split("work_").join("");
        nowTitle=$(this).find("span").text();
        nowTechnology=worksdata[index-1].technology;
        nowContent=worksdata[index-1].intro;
        nowImg=$(this).find("img").attr('src');
        $('#lightbox-title').text(nowTitle);
        $('#lightbox-content-technology').find('p').text(nowTechnology);
        $('#lightbox-content-intro').find('p').text(nowContent);
        $('#lightbox-img').attr('src',nowImg);
        //打開lightbox
        $(".lightbox-target").css({
                opacity: 1,
                top: 0,
                bottom: 0
            
          }
        );
        $('.lightbox-close').css({'top':'5px',
                                  'right':'5px'});
        
        openLightbox=!openLightbox;
    });
    
    $('.lightbox-close').mousedown(function(){
        //關閉lightbox
        $(".lightbox-target").css({"opacity":"0",
                                    "top":"-100%",
                                    "bottom":"",
                                    "top":"-80px"});
        $('.lightbox-close').css('top','-80px');
        openLightbox=!openLightbox;
    });
    
    


    $('body').on({
    'mousewheel': function(e) {
            if (openLightbox) {
                e.preventDefault();
                e.stopPropagation();
            }
            }
        })
    });

$(window).on('scroll',function(){
   if(window_width > 980){
        rubik.checkScrollForParallax();
   }
   
   rubik.checkScrollForTransparentNavbar();    
         
});
function workdataContent()
{
　this.technology;
　this.intro;
} 
$(window).load(function(){
    
    //after the content is loaded we reinitialize all the waypoints for the animations
    rubik.initAnimationsCheck();
    
});  

//activate collapse right menu when the windows is resized 
$(window).resize(function(){
    if($(window).width() < 979){
        rubik.initRightMenu();   
    }
    if($(window).width() > 979 && !burger_menu){
        $('nav').removeClass('navbar-burger');
        rubik.misc.navbar_menu_visible = 1;
        navbar_initialized = false;
    }
});

$('a[data-scroll="true"]').click(function(e){         
    var scroll_target = $(this).data('id');
    var scroll_trigger = $(this).data('scroll');
    
    if(scroll_trigger == true && scroll_target !== undefined){
        e.preventDefault();
        
        $('html, body').animate({
             scrollTop: $(scroll_target).offset().top - 50
        }, 1000);
    }
                
});


//rubik fc
rubik = {
    misc:{
        navbar_menu_visible: 0
    },
    initAnimationsCheck: function(){
        
        $('[class*="add-animation"]').each(function(){
           offset_diff = 30;
           if($(this).hasClass('title')){
               offset_diff = 110;
           }
           
           var waypoints = $(this).waypoint(function(direction) {
                if(direction == 'down'){
                        $(this.element).addClass('animate');    
                   } else {
                       $(this.element).removeClass('animate');
                   }
                }, {
                  offset: window_height - offset_diff
           });
        });
  
    },
    initRightMenu: function(){  
         if(!navbar_initialized){
            $nav = $('nav');
            $nav.addClass('navbar-burger');
             
            $navbar = $nav.find('.navbar-collapse').first().clone(true);
            $navbar.css('min-height', window.screen.height);
              
            ul_content = '';
             
            $navbar.children('ul').each(function(){
                content_buff = $(this).html();
                ul_content = ul_content + content_buff;   
            });
             
            ul_content = '<ul class="nav navbar-nav">' + ul_content + '</ul>';
            $navbar.html(ul_content);
             
            $('body').append($navbar);
                            
            background_image = $navbar.data('nav-image');
            if(background_image !== undefined){
                $navbar.css('background',"url('" + background_image + "')")
                       .removeAttr('data-nav-image')
                       .css('background-size',"cover")
                       .addClass('has-image');                
            }
             
            $toggle = $('.navbar-toggle');
             
            $navbar.find('a').removeClass('btn btn-round btn-default');
            $navbar.find('button').removeClass('btn-round btn-fill btn-info btn-primary btn-success btn-danger btn-warning btn-neutral');
            $navbar.find('button').addClass('btn-simple btn-block');

            $link = $navbar.find('a');
            
            $link.click(function(e){
                var scroll_target = $(this).data('id');
                var scroll_trigger = $(this).data('scroll');
                
                if(scroll_trigger == true && scroll_target !== undefined){
                    e.preventDefault();

                    $('html, body').animate({
                         scrollTop: $(scroll_target).offset().top - 50
                    }, 1000);
                }
                
             });

            
            $toggle.click(function (){    

                if(rubik.misc.navbar_menu_visible == 1) {                    
                    $('html').removeClass('nav-open'); 
                    rubik.misc.navbar_menu_visible = 0;
                    $('#bodyClick').remove();
                     setTimeout(function(){
                        $toggle.removeClass('toggled');
                     }, 550);
                
                } else {
                    setTimeout(function(){
                        $toggle.addClass('toggled');
                    }, 580);
                    
                    div = '<div id="bodyClick"></div>';
                    $(div).appendTo("body").click(function() {
                        $('html').removeClass('nav-open');
                        rubik.misc.navbar_menu_visible = 0;
                        $('#bodyClick').remove();
                         setTimeout(function(){
                            $toggle.removeClass('toggled');
                         }, 550);
                    });
                   
                    $('html').addClass('nav-open');
                    rubik.misc.navbar_menu_visible = 1;
                    
                }
            });
            navbar_initialized = true;
        }
   
    },

    checkResponsiveImage: function(){
      
        $('.section-header > div > img, .section-header video').each(function(){
            var $image = $(this);
            var src = $image.attr("responsive-src");
    
            if(!src){
               src = $image.attr('src'); 
            }
    
            div = '<div class="responsive-background" style="background-image:url(' + src + ')"/>';
            $image.after(div);
            $image.addClass('hidden-xs'); 
        });
    },  
    
    checkScrollForTransparentNavbar: debounce(function() {	
        	if($(document).scrollTop() > 560 ) {
                if(transparent) {
                    transparent = false;
                    $('nav[role="navigation"]').removeClass('navbar-transparent');
                }
            } else {
                if( !transparent ) {
                    transparent = true;
                    $('nav[role="navigation"]').addClass('navbar-transparent');
                }
            }
    }, 17),
    
    checkScrollForParallax: debounce(function() {	

        	no_of_elements = 0;
        	$('.parallax').each(function() {
        	    var $elem = $(this);
        	    
        	    if(isElementInViewport($elem)){
                  var parent_top = $elem.offset().top;          
                  var window_bottom = $(window).scrollTop();
                  var $image = $elem.find('img')
                              	  
            	  oVal = ((window_bottom - parent_top) / 3);
                  $image.css('transform','translate3d(0px, ' + oVal + 'px, 0px)');    
        	    }
            });
    		
    }, 6),
    
    checkScrollForContentTransitions: debounce(function() {
         $('.content-with-opacity').each(function() {
             var $content = $(this);
             
             if(isElementInViewport($content)){          
                  var window_top = $(window).scrollTop();
            	  opacityVal = 1 - (window_top / 230);
                  
                  if(opacityVal < 0){
                      opacityVal = 0;
                      return;
                  } else {
                    $content.css('opacity',opacityVal);    
                  }
                      
        	    }            
         });
    }, 6),
    
    showModal: function(button){
        var id = $(button).data('target');
        var $project = $(button).closest('.project');
        
        var scrollTop = $(window).scrollTop();
        var distanceTop = $project.offset().top;

        var projectTop = distanceTop - scrollTop; 
        var projectLeft = $project.offset().left;
        var projectHeight = $project.innerHeight();
        var projectWidth = $project.innerWidth();

        modal = $('#' + id);

        $(modal).css({
         'top'  :    projectTop,
         'left' :    projectLeft, 
         'width' :   projectWidth,
         'height' :  projectHeight,
         'z-index'  : '1032'
        });
        
        $(modal).addClass('has-background');
        
        setTimeout(function(){
           $(modal).addClass('open');
        },30);

        setTimeout(function(){
           $('body').addClass('noscroll');
           $(modal).addClass('scroll');
        },1000);
    
        $('.icon-close').click(function(){
          $project_content = $(this).closest('.project-content');
          $project_content.removeClass('open scroll');
          
          $('body').removeClass("noscroll");
          //$('a').removeClass('no-opacity');
            setTimeout(function(){
                $project_content.removeClass('has-background');
                setTimeout(function(){    
                    $project_content.removeAttr('style');     
                }, 450); 
            },500);
        });
    },
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};


function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}


var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            this.versionSearchString = data[i].subString;

            if (dataString.indexOf(data[i].subString) !== -1) {
                return data[i].identity;
            }
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index === -1) {
            return;
        }

        var rv = dataString.indexOf("rv:");
        if (this.versionSearchString === "Trident" && rv !== -1) {
            return parseFloat(dataString.substring(rv + 3));
        } else {
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        }
    },

    dataBrowser: [
        {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
        {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
        {string: navigator.userAgent, subString: "Safari", identity: "Safari"},
        {string: navigator.userAgent, subString: "Opera", identity: "Opera"}
    ]

};

var better_browser = '<div class="container"><div class="better-browser row"><div class="col-md-2"></div><div class="col-md-8"><h3>We are sorry but it looks like your Browser doesn\'t support our website Features. In order to get the full experience please download a new version of your favourite browser.</h3></div><div class="col-md-2"></div><br><div class="col-md-4"><a href="https://www.mozilla.org/ro/firefox/new/" class="btn btn-warning">Mozilla</a><br></div><div class="col-md-4"><a href="https://www.google.com/chrome/browser/desktop/index.html" class="btn ">Chrome</a><br></div><div class="col-md-4"><a href="http://windows.microsoft.com/en-us/internet-explorer/ie-11-worldwide-languages" class="btn">Internet Explorer</a><br></div><br><br><h4>Thank you!</h4></div></div>';