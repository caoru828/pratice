
if (!window['myliv']) {
	window['myliv'] = {};
}


if (!window['myliv']['AutoComplete']) {
	//网站自动完成类，xinput-自动完成的表单对象，xself-自动完成对象实例名(后面用于在单击时设置值会用到)，xcontainer-自动完成的容器
	myliv.AutoComplete = function(xinput, xself, xcontainer) {
		QKEXTDATA = [];	//已存在的列表数据，每个元素为一个显示的值
		QKTMPDATA = [];	//保存第一次查询的缓存列表
		QKMOVEPOS = -1;	//上下箭头的位置
		QKCACHEHEAD = '';//保存所有输入过的查询关键第一个字符，中间用;分隔
		QKSHOWTOP = 20;	//每次最多显示多少项
		QKVFUNC = null;	//显示列表行的函数
		QKFUNC = null;		//当点击值时，回调的函数
		QKISLOADED = false;//页面是否载入完成
		QKTYPE = '';		//类型up/down
		QKLASTTEXT = '';	//保存最后一次输入的文本
		QKQUERYOBJ = typeof xinput == 'object' ? xinput : null;//查询输入框对象
		QKSELFNAME = typeof xself == 'string' ? xself : 'AutoComplete';//自动完成对象实例名
		QKCONTAINER = typeof xcontainer == 'string' ? xcontainer : 'auto1';//自动完成对象实例名
		QKNOTHIDEOBJ = [];//注册页面单击事件后，所有不用关闭下面列表的对象
		QKCPOSITION = {left:0,top:0,height:0,width:0};//容器偏移位置{left:0,top:0,height:0,width:0}
		this.Char_A = "<line>";//String.fromCharCode(0),

		this.Char_B = "<itema>";//String.fromCharCode(1),

		this.Char_C = "<itemb>";//String.fromCharCode(2),

	}

	



	myliv.AutoComplete.prototype = {

		

		setCallBackBySelected : function(func) {

			QKFUNC = func;

		},

		

		setCallBackByViewItem : function(func) {

			QKVFUNC = func;

		},



		setNotHideElement : function(el) {

			QKNOTHIDEOBJ = el;



		},

	

		ID : function(str) {

			return document.getElementById(str);

		},

		

		TAG : function(obj, str) {

			return obj.getElementsByTagName(str);

		},

		

		getCoords : function(obj) {

			

			var box = obj.getBoundingClientRect(),

			doc = obj.ownerDocument,

			body = doc.body,

			html = doc.documentElement,

			clientTop = html.clientTop || body.clientTop || 0,

			clientLeft = html.clientLeft || body.clientLeft || 0,

			top = box.top + (self.pageYOffset || html.scrollTop || body.scrollTop ) - clientTop,

			left = box.left + (self.pageXOffset || html.scrollLeft || body.scrollLeft) - clientLeft

			/*

			var left = obj.offsetLeft || 0;

			var top = obj.offsetTop || 0;

			while (obj = obj.offsetParent) {

				left += eval(obj.offsetLeft);

				top += obj.offsetTop;

			}*/

			

			return { 'top': top, 'left': left };

		},



		queryGO : function(evt, obj, type, pos) {//执行查询



			if (typeof type == 'undefined') type = 'up';

			

			pos = pos || {};

			if (typeof pos.left == 'undefined') pos.left = 0;

			if (typeof pos.top == 'undefined') pos.top = 0;

			if (typeof pos.width == 'undefined') pos.width = 440;

			//if (typeof pos.height == 'undefined') pos.height = 0;

			QKCPOSITION = pos;

	

			QKQUERYOBJ = obj; QKTYPE = type;

			//if (!QKISLOADED) return false;//如果页面内容还未载入完，则不联想

	

			var keycode = evt.keyCode || evt.which; 

			if (type == 'down' && (38 == keycode || 40 == keycode)) {

				this.moveSelected(keycode, obj);

				

			} else if (type == 'up' && (38 != keycode && 40 != keycode)) {

				 this.searchKeyword(obj.value);

			}

	

			if (keycode == 13) {

				this.hideList(evt, false);

			}

		},

		

		searchKeyword : function(keyword) {//搜索关键字



			var qvalue = keyword; var scriptid = this.ID('_qauto_');

			if (qvalue.replace(/\s*/gi, '') == '') {

				this.ID(QKCONTAINER).style.display = 'none';

				return false;

			}

	

			//如果没有找到，或者是英文长度为1，则重新请求

			if (QKCACHEHEAD.indexOf((qvalue+';')) == -1 || (QKCACHEHEAD.indexOf((qvalue+';')) == -1 && /^[a-zA-Z]+$/gi.test(qvalue)) && qvalue.length == 1) {

			

				QKMOVEPOS = -1;

	

				var headtag = document.getElementsByTagName("head");

				if (headtag.length == 0) return '';

				if (scriptid){

					headtag[0].removeChild(scriptid);

				}

				var script = document.createElement('SCRIPT');

				script.src = "//www.easyicon.net/autocomplete_v2.php?q="+(qvalue)+"&mt="+(new Date()).getTime();

				script.charset = "utf-8"; script.id = '_qauto_'; headtag[0].appendChild(script);



				QKCACHEHEAD += qvalue + ';';

			} else {

				this.showAuto(qvalue);

			}

	

		},

		

		moveSelected : function(keycode, obj) {



			if (this.ID(QKCONTAINER).style.display == 'none') {

				return ;

			}

	

			var isfirst = false;

			

			var cpl = this.ID(QKCONTAINER);

			var ATag = this.TAG(cpl, 'A');

			if (ATag.length > 0) {

	

				if (QKMOVEPOS == -1){ //如果是第一次则保存文本

					QKLASTTEXT = obj.value; isfirst = true;

				}

				

				if (QKMOVEPOS >= 0 && QKMOVEPOS < ATag.length)

					ATag[QKMOVEPOS].className = "def";

	

				if (QKMOVEPOS < 0) QKMOVEPOS = ATag.length;

				if (QKMOVEPOS >= ATag.length) QKMOVEPOS = -1;

				if (isfirst && 38 == keycode) QKMOVEPOS = ATag.length;//如果第一次就上移，指向最后一个

					

				if (40 == keycode) QKMOVEPOS++;//下移

				if (38 == keycode) QKMOVEPOS--;//上移



				if (QKMOVEPOS == -2) QKMOVEPOS = ATag.length - 1;//如果连续上移，则指向最后一个

					

				if (QKMOVEPOS < 0 || QKMOVEPOS >= ATag.length) {//当没有指向时，则恢复原输入内容

					this.setQValue(QKLASTTEXT, -1, false);

				}

				

				try{

					if (QKMOVEPOS >= 0 && QKMOVEPOS < ATag.length) {

						ATag[QKMOVEPOS].className = "hot";



						var selText = "";

						var itemtext = ATag[QKMOVEPOS].getAttribute("itemtext");

						if (!itemtext) itemtext = "";



						this.setQValue(itemtext, false);

					}

				}catch(e){window.alert(e.message);}

			}

		},

		

		convertWord : function(obj) {

		

			//按回车键后有三种情况：

			//1、如果只有一个下拉列表值时，则直接用它搜索

			//2、如果有多个项，则直接用选中的项进行搜索

			//3、其它则直接用关键字搜索

	

			if (obj.value.replace(/\s*/gi, '') == '') return false;

			

			try{

				var nowauto = QKTMPDATA[obj.value][0].split(this.Char_A)[0];

	

				if (nowauto.length == 1) {

					obj.value = nowauto[0]; return false;

				} else if (nowauto.length > 1 && (QKMOVEPOS >= 0 && QKMOVEPOS < nowauto.length)) {

					obj.value = nowauto[QKMOVEPOS]; return false;

				} else {

					return false;

				}

			}catch(e){}

		},

		

		checkForm : function(obj) {//检测表单值

	

			if (obj.value.replace(/\s*/gi, '') == '' || obj.value.indexOf('请输入搜索关键字') != -1) {

				window.alert("请输入搜索关键字"); obj.focus(); return false;

			}

			

			this.convertWord(obj);

			return true;

		},

	

		queryOK : function(obj) {//查询完成

	

			if (obj.k == '') return ;

			if (obj.d.length > 0) {

				QKTMPDATA[obj.k] = obj.d;

			}

	

			this.showAuto(obj.k);

		},

	

		showAuto : function(key) {//显示自动



			var QueryList = QKTMPDATA[key] || [];

			var strHtml = [];

			//var func = ;



			try{

			for (var i=0, t = QueryList.length; i < QKSHOWTOP && i < t; i++) {

				queryword = QKTMPDATA[key][i];

				queryword = queryword.split('<line>');

				

				strHtml.push((typeof QKVFUNC == 'function' ? QKVFUNC(queryword) : this.getViewItem(queryword)));

			}

			}catch(e){window.alert(e.message);}

			

			this.ID(QKCONTAINER).innerHTML = '<ol>' + strHtml.join('') + '</ol>';

			if (strHtml.length > 0) {

				if (this.ID(QKCONTAINER).style.display == 'none') {

					this.ID(QKCONTAINER).style.display = '';

				}

				if (this.ID('bgiframe'))

					this.ID('bgiframe').style.height = this.ID(QKCONTAINER).clientHeight;

			} else {

				this.ID(QKCONTAINER).style.display = 'none';

			}

			

			var vpos = this.getCoords(QKQUERYOBJ);

			//var vpos = {xtop:QKQUERYOBJ.offsetTop, xleft:QKQUERYOBJ.offsetLeft};

			

			//alert(vpos.left);

			

			

			this.ID(QKCONTAINER).style.position="absolute";

			this.ID(QKCONTAINER).style.width = QKCPOSITION.width + 'px';

			this.ID(QKCONTAINER).style.left = (vpos.left  + QKCPOSITION.left) + 'px';

			this.ID(QKCONTAINER).style.top = (vpos.top + QKCPOSITION.top) + 'px';



			//if (QKCPOSITION.width > 0) 

		},

	

		setQValue : function(str, ishide) {//设置查询值

			

			if (QKQUERYOBJ == null) return ;

	

			QKQUERYOBJ.value = str;

			if (typeof ishide == 'undefined' || ishide) this.ID(QKCONTAINER).style.display = 'none';

		},

		

		//当bool为false 时强制隐藏

		hideList : function(e, bool) {



			var evt = e || window.event;

			var obj = evt.srcElement || evt.target;



			if (typeof bool == 'undefined') bool = true;



			if ((QKQUERYOBJ != obj && !this.checkNotHide(obj)) || !bool) {

				this.ID(QKCONTAINER).style.display = 'none';

			}

		},



		checkNotHide : function(el) {//检测非隐藏的对象，如果是返回true，否则返回false



			if (QKNOTHIDEOBJ.length == 0) return false;



			for (var i=0, t=QKNOTHIDEOBJ.length; i < t; i++) {

				if (QKNOTHIDEOBJ[i] == el) {

					return true;

				}

			}



			return false;			

		},

		

		getViewItem : function(item) {//默认没有定义显示项时的函数
			
			if(item[1]>=100){
			var tmpnum= '100+';
			}else{
			//var tmpnum= '约 '+ item[1] + ' 个图标';
			var tmpnum= '';
			}
			var str = '<li><a href="/iconsearch/'+item[0]+'/" onmouseover="this.className=\'hot\';" onmouseout="this.className=\'def\';" itemtext="'+item[0]+'"><span class="i_key">' + item[0] + '</span><span class="i_num">'+tmpnum+'</span></a></li>';

			

			this.pushExtData(item[0]);

	

			return str;

		},

		

		isExists : function(xname) {//检测指定

		

			var isexists = false;

			for (var i=0, t=QKEXTDATA.length; i<t; i++) {

				if (QKEXTDATA[i] == xname) {

					isexists = true; break;

				}

			}

			

			return isexists;

		},

		

		pushExtData : function(xdata) {//保存

			QKEXTDATA.push(xdata);

		},

		

		onLoad : function(e) {//已弃用

	

			QKISLOADED = true;



			if (QKQUERYOBJ != null) {//如果在页面载入完毕前用户输入过查询智能联想，则此时页面载入完后再执行

				var e = window.event || e;

				this.queryGO(e, QKQUERYOBJ, QKTYPE);

			}

		}

	}

}



if (typeof myliv.addAEvent != "function") {



	myliv.addAEvent = function(elm, evType, fn, useCapture) {

		if(elm.addEventListener) {

			return elm.addEventListener(evType, fn, useCapture);

		} else if(elm.attachEvent) {

			return elm.attachEvent('on' + evType,fn);

		} else {

			elm['on' + evType] = fn;

		}

	}

}

window.AutoComplete = new myliv.AutoComplete();



//function initAP(e) { AutoComplete.onLoad(e); }//载入

function clickAP(e) { AutoComplete.hideList(e); }//单击



myliv.addAEvent(document, 'click', clickAP, false);

//myliv.addAEvent(window, 'load', initAP, false);


