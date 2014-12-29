var numbers		= [];
var CONST_DIALOG_CONTAINER = 'dialogContainer';
var CACHE_CONTAINER = 'cacheDiv';

var sitemapElement 	= null;
var loginElement 	= null;

var blob = null;

function viewPicture (url, pname, W, H) {
     var image = new Image (),
		 winH = 0,
		 winW = 0,
		 X = 0,
		 Y = 0;

     image.src = url;

     winW = ((W != null) ? W + 16 : 620);
     winH = ((H < 492) ? H : 492);
     X = (window.screen.availWidth / 2) - (winW / 2);

     if (window.screen.availHeight - 24 < winH) {
          Y = 0;
          winW += 18;
          winH = window.screen.availHeight - 24;
     } else {
          Y = (window.screen.availHeight / 2) - (winH / 2 + 12);
     }

	 params = "scrollbars=yes,status=no,resizable=1,width=" + winW + ",height=" + winH + ",left=" + X + ",top=" + Y;

	 wID = window.open ('', name, params);

	 with (wID.document) {
          open ();
          write ('<hmtl><head><title>'+pname+'</title></head><body style="margin:0; padding:0; text-align:center">');
          write ('<img src="'+url+'" width="'+W+'" height="'+H+'" border="0" alt="'+pname+'" title="'+pname+'" align="center" /></body></html>');
          close ();
     }
}

function viewFormAction ()
{
	var onCompleteResponse = function(response)
	{
		document.location.href="#Acontact_form";
		//new Insertion.After( this.parentNode.parentNode,response.responseText);
		//alert(response.responseText );
		new Insertion.After( this.parentNode.parentNode, response.responseText );
		if ( this.parentNode.tagName == 'EM' )
		{
			this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
		}
	};
	
	new Ajax.Request(
		'common/form1.html',
		{parameters:'',onComplete:onCompleteResponse.bind(this),method:'get'}
	);
	
	return false;
}

var Utils = {

   getElementsComputedStyle: function ( htmlElement, cssProperty, mozillaEquivalentCSS) {
      if ( arguments.length == 2 )
         mozillaEquivalentCSS = cssProperty;

      var el = $(htmlElement);
   },

   toDocumentPosition: function(element) {
      return this._toAbsolute(element,true);
   },

   _toAbsolute: function(element,accountForDocScroll) {

      if ( navigator.userAgent.toLowerCase().indexOf("msie") == -1 )
         return this._toAbsoluteMozilla(element,accountForDocScroll);

      var x = 0;
      var y = 0;
      var parent = element;
      while ( parent ) {

         var borderXOffset = 0;
         var borderYOffset = 0;
         if ( parent != element ) {
            var borderXOffset = parseInt(this.getElementsComputedStyle(parent, "borderLeftWidth" ));
            var borderYOffset = parseInt(this.getElementsComputedStyle(parent, "borderTopWidth" ));
            borderXOffset = isNaN(borderXOffset) ? 0 : borderXOffset;
            borderYOffset = isNaN(borderYOffset) ? 0 : borderYOffset;
         }

         x += parent.offsetLeft - parent.scrollLeft + borderXOffset;
         y += parent.offsetTop - parent.scrollTop + borderYOffset;
         parent = parent.offsetParent;
      }

      if ( accountForDocScroll ) {
         x += this.docScrollLeft();
         y += this.docScrollTop();
      }

      return { x:x, y:y };
   },

   _toAbsoluteMozilla: function(element,accountForDocScroll) {
      var x = 0;
      var y = 0;
      var parent = element;
      while ( parent ) {
         x += parent.offsetLeft;
         y += parent.offsetTop;
         parent = parent.offsetParent;
      }

      parent = element;
      while ( parent &&
              parent != document.body &&
              parent != document.documentElement ) {
         if ( parent.scrollLeft  )
            x -= parent.scrollLeft;
         if ( parent.scrollTop )
            y -= parent.scrollTop;
         parent = parent.parentNode;
         
      }

      return { x:x, y:y };
   },

   docScrollLeft: function() {
      if ( window.pageXOffset )
         return window.pageXOffset;
      else if ( document.documentElement && document.documentElement.scrollLeft )
         return document.documentElement.scrollLeft;
      else if ( document.body )
         return document.body.scrollLeft;
      else
         return 0;
   },

   docScrollTop: function() {
      if ( window.pageYOffset )
         return window.pageYOffset;
      else if ( document.documentElement && document.documentElement.scrollTop )
         return document.documentElement.scrollTop;
      else if ( document.body )
         return document.body.scrollTop;
      else
         return 0;
   }

};

function gotoLocation(){
	document.location.href=this.href;
}

window.onload = function(){
	window.Login 	= new CDialog('blob_login', 'common/login.html');
	window.SiteMap = new CDialog('blob_sitemap', 'common/site-map2.html');
	
	window.blob1 	= new CDialog('blob1', 'common/blob1.html');
	window.blob2 	= new CDialog('blob2', 'common/blob2.html');
	window.blob3 	= new CDialog('blob3', 'common/blob3.html');
	window.blob4 	= new CDialog('blob4', 'common/blob4.html');
	window.blob5 	= new CDialog('blob5', 'common/blob5.html');
	
	var body = $('main');
	
	var dialogContainer = document.createElement('div');
	dialogContainer.id	= CONST_DIALOG_CONTAINER;
	body.appendChild(dialogContainer);
	
	var cmap 	= document.getElementById('cmap');
	if ( cmap )
	{
		var links 	= cmap.getElementsByTagName('a');
		for ( var i = 0; i<links.length; i++ ){
			links[i].onmouseover 		= window['blob'+(i+1)].actionBlob.bind(window['blob'+(i+1)]);
			links[i].onclick			= links[i].href;
			numbers[links[i].className] = links[i];
		}
		
		var benefits	= document.getElementById('benefits');
		var text 		= benefits.getElementsByTagName('div');
		for ( var i = 0; i<text.length; i++ ){
			//text[i].onmouseover = window['blob'+(i+1)].actionBlob.bind(window['blob'+(i+1)]);
			//text[i].onmouseout 	= window['blob'+(i+1)].hideTimerSet.bind(window['blob'+(i+1)]);
			text[i].onclick 	= function() { document.location.href=links[i].href; return false; };
		}
	}
	
	var topNav = document.getElementsByClassName('top_nav',$('header'));
	if ( topNav && topNav.length>0 ){
		var topNavLinks = topNav[0].getElementsByTagName('a');
		for ( var i=0; i<topNavLinks.length; i++ ){
			if ( topNavLinks[i].firstChild && topNavLinks[i].firstChild.nodeValue == 'Карта сайта' )
			{
				sitemapElement = topNavLinks[i];
				continue;
			}
			if ( topNavLinks[i].firstChild && topNavLinks[i].firstChild.nodeValue == 'Client Area' )
			{
				loginElement = topNavLinks[i];
				continue;
			}
		}
		
	}
	if ( sitemapElement ){
		sitemapElement.onmouseover = SiteMap.actionBlob.bind(SiteMap);
	}
	if ( loginElement ){
		loginElement.onmouseover = Login.actionBlob.bind(Login);
	}
	
	var contacts = document.getElementsByClassName('contact-us-form',$('body_container3'));
	for ( var i = 0; i < contacts.length; i++ ){
		contacts[i].onclick = window['viewFormAction'];
	}
	
	var casestudies = document.getElementsByClassName('case-study-image-container',$('body_container3'));
	if ( casestudies && casestudies.length > 0 ){
		var hover = function (){
			var scr_links = this.getElementsByTagName('a');
			for ( var i = 0; i < scr_links.length; i++ ){
				scr_links[i].className = 'anone';
			}
		};
		
		var hout = function (){
			var scr_links = this.getElementsByTagName('a');
			for ( var i = 0; i < scr_links.length; i++ ){
				scr_links[i].className = 'aunderline';
			}
		};
		
		for ( var i = 0; i < casestudies.length; i++ ){
			casestudies[i].onmouseover 	= hover;
			casestudies[i].onmouseout 	= hout;
		}
	}
}

var tt;
var CDialog = Class.create();
CDialog.prototype = {
	
	initialize: function ( id, url )
	{
		this.dialogName = id;
		this.timer;
		this.hideTimeOut = 200;
		this.cache = [];
		this.url = url;
		this.preload();
	},
	
	clearContainer: function()
	{
		$(CONST_DIALOG_CONTAINER).innerHTML = '';
	},
	
	hide: function ()
	{
		if ( this.isOpened() )
		{
			var dlg = $(this.dialogName);
			dlg.style.left 	= '-2000px';
			blob = null;
			//$(CONST_DIALOG_CONTAINER).innerHTML='';
		}
	},
	
	hideTimerSet: function()
	{
		this.timer = setTimeout(this.hide.bind(this), this.hideTimeOut);
	},
	
	hideTimerReset: function() 
	{
		if (this.timer) clearTimeout(this.timer);
	},
	
	isOpened: function()
	{
		var dlg = $(this.dialogName);
		if ( dlg && (dlg.style.left == '-2000px' || dlg.style.left == '') )
		{
			return false;
		}
		return true;
	},
	
	actionBlob: function(){
		this.hideTimerReset();
		if ( this.isOpened() ) return;
		if(blob!=null) {blob.hide();}
		blob = this;
		this.onCompleteResponse();
	},
	
	preload: function() {
		new Ajax.Updater(
			{success:CONST_DIALOG_CONTAINER},
			this.url,
			{asynchronous:true, parameters:'',onComplete:this.cacheIt.bind(this),method:'get'}
		);
	},
	
	cacheIt: function(response){
		if ( response ){
			this.cache[this.dialogName] = response.responseText;
			//body = $('main');
			this.cacheDiv = document.createElement("div");
			this.cacheDiv.innerHTML = this.cache[this.dialogName];
			this.cacheDiv.id = "cache_"+this.cacheDiv.firstChild.id;
			this.cacheDiv.firstChild.id = this.cacheDiv.firstChild.id;
			document.body.appendChild(this.cacheDiv);
			$(this.dialogName).style.display = 'block';
			$(this.dialogName).style.left = '-2000px';
		}
	},
		
	onCompleteResponse: function ( response ){
		var dlg = $(this.dialogName);
		//if ( response )
			//this.cache[this.dialogName] = response.responseText;
			
		switch ( this.dialogName ){
			case 'blob_sitemap':
				//Element.setOpacity(this.dialogName,0.7);
				window.step3=new Date().getTime()
				var pos = Utils.toDocumentPosition(sitemapElement.parentNode);
				dlg.style.left 		= (pos.x-150)+'px';
				dlg.style.top 		= (pos.y+38)+'px';
				dlg.style.display	= 'block';
				//sitemapElement.onmouseover 	= this.hideTimerReset.bind(this);
				sitemapElement.onmouseout 	= this.hideTimerSet.bind(this);
				//new Effect.Appear(this.dialogName);
			break;
			
			case 'blob_login':
				//Element.setOpacity(this.dialogName,0.7);
				var pos = Utils.toDocumentPosition(loginElement.parentNode);
				dlg.style.left 		= (pos.x-50)+'px';
				dlg.style.top 		= (pos.y+38)+'px';
				dlg.style.display	= 'block';
				//loginElement.onmouseover 	= this.hideTimerReset.bind(this);
				loginElement.onmouseout 	= this.hideTimerSet.bind(this);
				//new Effect.Appear(this.dialogName);
			break;
			
			case 'blob1':
			case 'blob2':
			case 'blob3':
			case 'blob4':
			case 'blob5':
				//Element.setOpacity(this.dialogName,0.8);
				var pos = Utils.toDocumentPosition(numbers[this.dialogName]);
				dlg.style.left 		= (pos.x+22)+'px';
				dlg.style.top 		= (pos.y+42)+'px';
				dlg.style.display	= 'block';
				numbers[this.dialogName].onmouseout 	= this.hideTimerSet.bind(this);
			break;
		}
		
		dlg.onmouseover 	= this.hideTimerReset.bind(this);
		dlg.onmouseout 		= this.hideTimerSet.bind(this);
	}
	
}



function getObj (_idElement, _objParent) {

	var objElement = null;  

	if (!_objParent) {
		_objParent = document;
	}

	if (document.getElementById) {
		objElement = _objParent.getElementById (_idElement); 
	}
	
	return objElement;
}

function checkForm (_this, _listFieldIDMandatory, _listFieldIDEmail, _objMessageContainerID, _listMessageID) {

	var arrFieldIDMandatory = new Array (),
		arrFieldIDEmail = new Array (),
		arrMessageID = new Array (),
		objMessageContainer = getObj (_objMessageContainerID),
		regExpEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (_listFieldIDMandatory != null) {
		arrFieldIDMandatory = _listFieldIDMandatory.split (',');
	}

	if (_listFieldIDEmail != null) {
		arrFieldIDEmail = _listFieldIDEmail.split (',');
	}

	if (_listMessageID != null) {
		arrMessageID = _listMessageID.split (',');
	}

	for (var indexFieldMandatory = 0; indexFieldMandatory < arrFieldIDMandatory.length; indexFieldMandatory++) {

		if (getObj (arrFieldIDMandatory[indexFieldMandatory]).value == '') {

			objMessageContainer.style.display = 'block';
			getObj (arrMessageID[0]).style.display = 'block';
			getObj (arrMessageID[1]).style.display = 'none';

			return false;
		}
	}

	for (var indexFieldEmail = 0; indexFieldEmail < arrFieldIDEmail.length; indexFieldEmail++) {

		if (!regExpEmail.test (getObj (arrFieldIDEmail[indexFieldEmail]).value)) {

			objMessageContainer.style.display = 'block';
			getObj (arrMessageID[0]).style.display = 'none';
			getObj (arrMessageID[1]).style.display = 'block';

			return false;
		}
	}

	_this.submit ();
}

imgs = ['bb', 'bl', 'br', 'lb', 'point', 'point1', 'point3', 'point4', 'point5', 'rb', 'rb_ie', 'tb', 'tl', 'tr'];
ii = Array();
for(i in imgs){
	ii[i] = new Image();
	ii[i].src = '/img/tips_'+imgs[i]+'.png';
}

function bubb(obj, mode) {
	//alert(mode);
	$('mb'+obj).style.display = (mode == 1) ? "block" : "none";
}