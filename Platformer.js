(function () { "use strict";
var $hxClasses = {};
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var DateTools = function() { };
$hxClasses["DateTools"] = DateTools;
DateTools.__name__ = ["DateTools"];
DateTools.delta = function(d,t) {
	var t1 = d.getTime() + t;
	var d1 = new Date();
	d1.setTime(t1);
	return d1;
};
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,__class__: EReg
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
IMap.prototype = {
	__class__: IMap
};
Math.__name__ = ["Math"];
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
};
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.htmlEscape = function(s,quotes) {
	s = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
	if(quotes) return s.split("\"").join("&quot;").split("'").join("&#039;"); else return s;
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
var com = {};
com.isartdigital = {};
com.isartdigital.plateformer = {};
com.isartdigital.plateformer.Main = function() {
	this.frames = 0;
	PIXI.EventTarget.call(this);
	this.stage = new PIXI.Stage(10066329);
	this.renderer = PIXI.autoDetectRenderer((function($this) {
		var $r;
		var this1 = com.isartdigital.utils.system.DeviceCapabilities.get_width();
		var $int = this1;
		$r = $int < 0?4294967296.0 + $int:$int + 0.0;
		return $r;
	}(this)),(function($this) {
		var $r;
		var this2 = com.isartdigital.utils.system.DeviceCapabilities.get_height();
		var int1 = this2;
		$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
		return $r;
	}(this)));
	window.document.body.appendChild(this.renderer.view);
	var lConfig = new PIXI.JsonLoader("config.json");
	lConfig.addEventListener("loaded",$bind(this,this.preloadAssets));
	lConfig.load();
};
$hxClasses["com.isartdigital.plateformer.Main"] = com.isartdigital.plateformer.Main;
com.isartdigital.plateformer.Main.__name__ = ["com","isartdigital","plateformer","Main"];
com.isartdigital.plateformer.Main.main = function() {
	com.isartdigital.plateformer.Main.getInstance();
};
com.isartdigital.plateformer.Main.getInstance = function() {
	if(com.isartdigital.plateformer.Main.instance == null) com.isartdigital.plateformer.Main.instance = new com.isartdigital.plateformer.Main();
	return com.isartdigital.plateformer.Main.instance;
};
com.isartdigital.plateformer.Main.__super__ = PIXI.EventTarget;
com.isartdigital.plateformer.Main.prototype = $extend(PIXI.EventTarget.prototype,{
	preloadAssets: function(pEvent) {
		pEvent.target.removeEventListener("loaded",$bind(this,this.preloadAssets));
		com.isartdigital.utils.Config.init((js.Boot.__cast(pEvent.target , PIXI.JsonLoader)).json);
		if(com.isartdigital.utils.Config.get_debug()) com.isartdigital.utils.Debug.getInstance().init(this);
		if(com.isartdigital.utils.Config.get_data().boxAlpha != null) com.isartdigital.utils.game.StateGraphic.boxAlpha = com.isartdigital.utils.Config.get_data().boxAlpha;
		if(com.isartdigital.utils.Config.get_data().animAlpha != null) com.isartdigital.utils.game.StateGraphic.animAlpha = com.isartdigital.utils.Config.get_data().animAlpha;
		com.isartdigital.utils.game.GameStage.getInstance().set_scaleMode(com.isartdigital.utils.game.GameStageScale.SHOW_ALL);
		com.isartdigital.utils.game.GameStage.getInstance().init($bind(this,this.render),2048,1366);
		com.isartdigital.utils.system.DeviceCapabilities.displayFullScreenButton();
		this.stage.addChild(com.isartdigital.utils.game.GameStage.getInstance());
		window.addEventListener("resize",$bind(this,this.resize));
		this.resize();
		com.isartdigital.utils.system.DeviceCapabilities.init(0.5,0.375,0.25);
		var lLoader = new com.isartdigital.utils.loader.Loader();
		lLoader.addAssetFile(com.isartdigital.utils.system.DeviceCapabilities.textureType + "/screens_graphics.json");
		lLoader.addEventListener("LoaderEvent.COMPLETE",$bind(this,this.loadAssets));
		lLoader.load();
	}
	,loadAssets: function(pEvent) {
		pEvent.target.removeEventListener("LoaderEvent.COMPLETE",$bind(this,this.loadAssets));
		com.isartdigital.utils.game.StateGraphic.addTextures(com.isartdigital.utils.loader.Loader.getContent(com.isartdigital.utils.system.DeviceCapabilities.textureType + "/screens_graphics.json"));
		var lLoader = new com.isartdigital.utils.loader.Loader();
		lLoader.addAssetFile(com.isartdigital.utils.system.DeviceCapabilities.textureType + "/decor_graphics.json");
		lLoader.addTxtFile("leveldesign/level1.json");
		lLoader.addTxtFile("leveldesign/level2.json");
		lLoader.addTxtFile("leveldesign/level3.json");
		lLoader.addTxtFile("leveldesign/level4.json");
		lLoader.addTxtFile("boxes.json");
		lLoader.addTxtFile("anchors.json");
		lLoader.addSoundFile("sounds.json");
		lLoader.addAssetFile(com.isartdigital.utils.system.DeviceCapabilities.textureType + "/buttons.json");
		lLoader.addEventListener("LoaderEvent.PROGRESS",$bind(this,this.onLoadProgress));
		lLoader.addEventListener("LoaderEvent.COMPLETE",$bind(this,this.onLoadComplete));
		com.isartdigital.plateformer.ui.UIManager.getInstance().openScreen(com.isartdigital.plateformer.ui.GraphicLoader.getInstance());
		window.requestAnimationFrame($bind(this,this.gameLoop));
		lLoader.load();
	}
	,onLoadProgress: function(pEvent) {
		com.isartdigital.plateformer.ui.GraphicLoader.getInstance().update(pEvent.data.loaded / pEvent.data.total);
	}
	,onLoadComplete: function(pEvent) {
		pEvent.target.removeEventListener("LoaderEvent.PROGRESS",$bind(this,this.onLoadProgress));
		pEvent.target.removeEventListener("LoaderEvent.COMPLETE",$bind(this,this.onLoadComplete));
		com.isartdigital.utils.game.StateGraphic.addTextures(com.isartdigital.utils.loader.Loader.getContent(com.isartdigital.utils.system.DeviceCapabilities.textureType + "/buttons.json"));
		com.isartdigital.utils.game.StateGraphic.addTextures(com.isartdigital.utils.loader.Loader.getContent(com.isartdigital.utils.system.DeviceCapabilities.textureType + "/decor_graphics.json"));
		com.isartdigital.utils.game.StateGraphic.addBoxes(com.isartdigital.utils.loader.Loader.getContent("boxes.json"));
		com.isartdigital.plateformer.ui.UIManager.getInstance().openScreen(com.isartdigital.plateformer.ui.screens.TitleCard.getInstance());
	}
	,gameLoop: function() {
		haxe.Timer.delay($bind(this,this.gameLoop),16);
		this.render();
		this.dispatchEvent("GameEvent.GAME_LOOP");
	}
	,resize: function(pEvent) {
		this.renderer.resize((function($this) {
			var $r;
			var this1 = com.isartdigital.utils.system.DeviceCapabilities.get_width();
			var $int = this1;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}(this)),(function($this) {
			var $r;
			var this2 = com.isartdigital.utils.system.DeviceCapabilities.get_height();
			var int1 = this2;
			$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
			return $r;
		}(this)));
		com.isartdigital.utils.game.GameStage.getInstance().resize();
	}
	,render: function() {
		if(this.frames++ % 2 == 0) this.renderer.render(this.stage); else this.stage.updateTransform();
	}
	,destroy: function() {
		window.removeEventListener("resize",$bind(this,this.resize));
		com.isartdigital.plateformer.Main.instance = null;
	}
	,__class__: com.isartdigital.plateformer.Main
});
com.isartdigital.plateformer.game = {};
com.isartdigital.plateformer.game.GameManager = function() {
	this._lose = false;
	this._win = false;
	this.screenLimit = new PIXI.Rectangle(0,0,0,0);
	this.retryObj = [];
	this.cptLoseTotal = 60;
	this.cptLose = 0;
};
$hxClasses["com.isartdigital.plateformer.game.GameManager"] = com.isartdigital.plateformer.game.GameManager;
com.isartdigital.plateformer.game.GameManager.__name__ = ["com","isartdigital","plateformer","game","GameManager"];
com.isartdigital.plateformer.game.GameManager.getInstance = function() {
	if(com.isartdigital.plateformer.game.GameManager.instance == null) com.isartdigital.plateformer.game.GameManager.instance = new com.isartdigital.plateformer.game.GameManager();
	return com.isartdigital.plateformer.game.GameManager.instance;
};
com.isartdigital.plateformer.game.GameManager.prototype = {
	saveForRetry: function(pObj) {
		if(!this._win) {
			this.retryObj.push(pObj);
			return true;
		} else return false;
	}
	,destroyRetryObj: function() {
		com.isartdigital.utils.ArrayUtils.destroyArray(this.retryObj);
	}
	,addRetryObj: function() {
		var i = this.retryObj.length;
		while(--i >= 0) this.currentLevel.generateObj(this.retryObj.pop());
		var _g = 0;
		var _g1 = com.isartdigital.plateformer.game.sprites.mobile.Enemy.list;
		while(_g < _g1.length) {
			var lEnemy = _g1[_g];
			++_g;
			lEnemy.setLife();
		}
	}
	,set_win: function(pWin) {
		if(pWin) {
			this._win = pWin;
			this.addPowerUp();
			com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().setModeWin();
			this.saveCollectedPieces();
		}
		return this._lose;
	}
	,getPowerUp: function() {
		return this.powerUp;
	}
	,addPowerUp: function() {
		com.isartdigital.plateformer.game.utils.SaveManager.getInstance().savePowerUpUnlocked(this.powerUp);
	}
	,set_lose: function(pLose) {
		if(pLose) {
			this._lose = pLose;
			com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().dead = true;
		}
		return this._lose;
	}
	,addCollectedPieces: function(pInstanceName) {
		this.dataPieces.addPieces(pInstanceName);
		com.isartdigital.plateformer.ui.hud.Hud.getInstance().updateTextPieces();
	}
	,removeCollectedPieces: function(pInstanceName) {
		this.dataPieces.removePieces(pInstanceName);
		com.isartdigital.plateformer.ui.hud.Hud.getInstance().updateTextPieces();
	}
	,start: function(pLevelGenerator,pDataPieces,pPowerUp) {
		this.powerUp = pPowerUp;
		this.dataPieces = pDataPieces;
		com.isartdigital.plateformer.ui.UIManager.getInstance().startGame();
		com.isartdigital.plateformer.ui.hud.Hud.getInstance().setDataPieces(pDataPieces);
		this.currentLevel = pLevelGenerator;
		this.currentLevel.readLevel();
		this.background2 = new com.isartdigital.plateformer.game.sprites.Background2();
		com.isartdigital.utils.game.GameStage.getInstance().getGameContainer().addChild(this.background2);
		this.background1 = new com.isartdigital.plateformer.game.sprites.Background1();
		com.isartdigital.utils.game.GameStage.getInstance().getGameContainer().addChild(this.background1);
		com.isartdigital.utils.game.GameStage.getInstance().getGameContainer().addChild(com.isartdigital.plateformer.game.sprites.GamePlane.getInstance());
		com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance());
		com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().start();
		com.isartdigital.utils.game.Camera.getInstance().start();
		com.isartdigital.plateformer.ui.CheatPanel.getInstance().setPlayer();
		com.isartdigital.plateformer.ui.CheatPanel.getInstance().setCamera();
		com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().start();
		this.background1.start();
		this.background2.start();
		com.isartdigital.plateformer.Main.getInstance().addEventListener("GameEvent.GAME_LOOP",$bind(this,this.gameLoop));
		this.screenLimit = com.isartdigital.utils.system.DeviceCapabilities.getScreenRect(com.isartdigital.plateformer.game.sprites.GamePlane.getInstance());
		this.setupPowerUp();
	}
	,setupPowerUp: function() {
		var _g = 0;
		var _g1 = com.isartdigital.plateformer.game.utils.SaveManager.getInstance().powerUpUnlocked;
		while(_g < _g1.length) {
			var powerUpName = _g1[_g];
			++_g;
			com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().addPowerUp(powerUpName);
		}
	}
	,checkWinLose: function() {
		if(this._win) this.set_win(this._win);
		if(this._lose) this.set_lose(this._lose);
	}
	,saveCollectedPieces: function() {
		this.dataPieces.save();
	}
	,gameLoop: function() {
		this.screenLimit = com.isartdigital.utils.system.DeviceCapabilities.getScreenRect(com.isartdigital.plateformer.game.sprites.GamePlane.getInstance());
		var _g = 0;
		var _g1 = com.isartdigital.plateformer.game.utils.Mobile.list;
		while(_g < _g1.length) {
			var lMobile = _g1[_g];
			++_g;
			lMobile.doAction();
		}
		if(!this._lose && !this._win) {
			var _g2 = 0;
			var _g11 = com.isartdigital.plateformer.game.sprites.immobile.CheckPoint.list;
			while(_g2 < _g11.length) {
				var lCheckPoint = _g11[_g2];
				++_g2;
				lCheckPoint.doAction();
			}
			com.isartdigital.utils.game.Camera.getInstance().move();
		} else this.reStart();
		this.checkWinLose();
		this.currentLevel.clipObj();
	}
	,getBackgroundY: function() {
		return com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().y + this.currentLevel.getBackgroundY();
	}
	,reStart: function() {
		if(this._lose) {
			if(this.cptLose++ == this.cptLoseTotal) {
				this._lose = false;
				this.addRetryObj();
				this.cptLose = 0;
				com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().start();
				com.isartdigital.utils.game.Camera.getInstance().setPosition();
			}
		} else if(this._win) {
			if(this.playerOutOfScreen()) {
				com.isartdigital.plateformer.ui.UIManager.getInstance().openPopin(com.isartdigital.plateformer.ui.popin.Win.getInstance());
				this.pause();
			}
		}
	}
	,playerOutOfScreen: function() {
		var lRect = this.screenLimit;
		if(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().x > lRect.width + lRect.x || com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().y > lRect.height + lRect.y || com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().x + com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().width <= lRect.x || com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().y < lRect.y) return true; else return false;
	}
	,destroy: function() {
		this.destroyRetryObj();
		this.retryObj = null;
		com.isartdigital.plateformer.Main.getInstance().removeEventListener("GameEvent.GAME_LOOP",$bind(this,this.gameLoop));
		com.isartdigital.plateformer.ui.CheatPanel.getInstance().clear();
		com.isartdigital.plateformer.ui.UIManager.getInstance().closeHud();
		var i = com.isartdigital.plateformer.game.utils.Immobile.immobileList.length - 1;
		while(i >= 0) {
			com.isartdigital.plateformer.game.utils.Immobile.immobileList[i].destroy();
			i -= 1;
		}
		var i1 = com.isartdigital.plateformer.game.utils.Mobile.list.length - 1;
		while(i1 >= 0) {
			com.isartdigital.plateformer.game.utils.Mobile.list[i1].destroy();
			i1 -= 1;
		}
		var i2 = com.isartdigital.plateformer.game.sprites.immobile.CheckPoint.list.length - 1;
		while(i2 >= 0) {
			com.isartdigital.plateformer.game.sprites.immobile.CheckPoint.list[i2].destroy();
			i2 -= 1;
		}
		com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.listObj = new Array();
		com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.listObj = new Array();
		com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic.listObj = new Array();
		com.isartdigital.utils.game.GameStage.getInstance().getGameContainer().removeChild(com.isartdigital.plateformer.game.sprites.GamePlane.getInstance());
		com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().destroy();
		com.isartdigital.utils.game.GameStage.getInstance().getGameContainer().removeChildren();
		com.isartdigital.utils.game.Camera.getInstance().destroy();
		com.isartdigital.plateformer.game.GameManager.instance = null;
	}
	,pause: function() {
		com.isartdigital.plateformer.Main.getInstance().removeEventListener("GameEvent.GAME_LOOP",$bind(this,this.gameLoop));
	}
	,resume: function() {
		com.isartdigital.plateformer.Main.getInstance().addEventListener("GameEvent.GAME_LOOP",$bind(this,this.gameLoop));
	}
	,__class__: com.isartdigital.plateformer.game.GameManager
};
var pixi = {};
pixi.display = {};
pixi.display.DisplayObject = function() {
	PIXI.DisplayObject.call(this);
	this.name = "";
};
$hxClasses["pixi.display.DisplayObject"] = pixi.display.DisplayObject;
pixi.display.DisplayObject.__name__ = ["pixi","display","DisplayObject"];
pixi.display.DisplayObject.__super__ = PIXI.DisplayObject;
pixi.display.DisplayObject.prototype = $extend(PIXI.DisplayObject.prototype,{
	__class__: pixi.display.DisplayObject
});
pixi.display.DisplayObjectContainer = function() {
	PIXI.DisplayObjectContainer.call(this);
};
$hxClasses["pixi.display.DisplayObjectContainer"] = pixi.display.DisplayObjectContainer;
pixi.display.DisplayObjectContainer.__name__ = ["pixi","display","DisplayObjectContainer"];
pixi.display.DisplayObjectContainer.__super__ = PIXI.DisplayObjectContainer;
pixi.display.DisplayObjectContainer.prototype = $extend(PIXI.DisplayObjectContainer.prototype,{
	getChildByName: function(name) {
		var _g1 = 0;
		var _g = this.children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.children[i].name == name) return this.children[i];
		}
		return null;
	}
	,applyScale: function(pixelRatio) {
		if(pixelRatio > 0) this.scale.set(1 / pixelRatio,1 / pixelRatio);
	}
	,__class__: pixi.display.DisplayObjectContainer
});
com.isartdigital.utils = {};
com.isartdigital.utils.game = {};
com.isartdigital.utils.game.GameObject = function() {
	pixi.display.DisplayObjectContainer.call(this);
	this.setModeVoid();
};
$hxClasses["com.isartdigital.utils.game.GameObject"] = com.isartdigital.utils.game.GameObject;
com.isartdigital.utils.game.GameObject.__name__ = ["com","isartdigital","utils","game","GameObject"];
com.isartdigital.utils.game.GameObject.__super__ = pixi.display.DisplayObjectContainer;
com.isartdigital.utils.game.GameObject.prototype = $extend(pixi.display.DisplayObjectContainer.prototype,{
	setModeVoid: function() {
		this.doAction = $bind(this,this.doActionVoid);
	}
	,doActionVoid: function() {
	}
	,setModeNormal: function() {
		this.doAction = $bind(this,this.doActionNormal);
	}
	,doActionNormal: function() {
	}
	,start: function() {
		this.setModeNormal();
	}
	,destroy: function() {
		this.setModeVoid();
	}
	,__class__: com.isartdigital.utils.game.GameObject
});
com.isartdigital.utils.game.StateGraphic = function(pAssetName,pAnchor) {
	this.boxType = com.isartdigital.utils.game.BoxType.NONE;
	this.DEFAULT_STATE = "";
	com.isartdigital.utils.game.GameObject.call(this);
	if(pAssetName != null) {
		this.assetName = pAssetName;
		this.setState(this.DEFAULT_STATE);
		if(pAnchor != null) this.anim.anchor = pAnchor;
	}
};
$hxClasses["com.isartdigital.utils.game.StateGraphic"] = com.isartdigital.utils.game.StateGraphic;
com.isartdigital.utils.game.StateGraphic.__name__ = ["com","isartdigital","utils","game","StateGraphic"];
com.isartdigital.utils.game.StateGraphic.set_textureDigits = function(pDigits) {
	com.isartdigital.utils.game.StateGraphic.digits = "";
	var _g = 0;
	while(_g < pDigits) {
		var i = _g++;
		com.isartdigital.utils.game.StateGraphic.digits += "0";
	}
	return com.isartdigital.utils.game.StateGraphic.textureDigits = pDigits;
};
com.isartdigital.utils.game.StateGraphic.addTextures = function(pJson) {
	var lFrames = Reflect.field(pJson,"frames");
	if(com.isartdigital.utils.game.StateGraphic.texturesDefinition == null) com.isartdigital.utils.game.StateGraphic.texturesDefinition = new haxe.ds.StringMap();
	if(com.isartdigital.utils.game.StateGraphic.digits == null) com.isartdigital.utils.game.StateGraphic.set_textureDigits(com.isartdigital.utils.game.StateGraphic.textureDigits);
	var lID;
	var lNum;
	var _g = 0;
	var _g1 = Reflect.fields(lFrames);
	while(_g < _g1.length) {
		var lID1 = _g1[_g];
		++_g;
		lID1 = lID1.split(".")[0];
		lNum = Std.parseInt(HxOverrides.substr(lID1,-1 * com.isartdigital.utils.game.StateGraphic.textureDigits,null));
		if(lNum != null) lID1 = HxOverrides.substr(lID1,0,lID1.length - com.isartdigital.utils.game.StateGraphic.textureDigits);
		if(com.isartdigital.utils.game.StateGraphic.texturesDefinition.get(lID1) == null) {
			var v;
			if(lNum == null) v = 1; else v = lNum;
			com.isartdigital.utils.game.StateGraphic.texturesDefinition.set(lID1,v);
			v;
		} else if(lNum > com.isartdigital.utils.game.StateGraphic.texturesDefinition.get(lID1)) {
			com.isartdigital.utils.game.StateGraphic.texturesDefinition.set(lID1,lNum);
			lNum;
		}
	}
	if(com.isartdigital.utils.game.StateGraphic.texturesCache == null) com.isartdigital.utils.game.StateGraphic.texturesCache = new haxe.ds.StringMap();
};
com.isartdigital.utils.game.StateGraphic.clearTextures = function(pJson) {
	var lFrames = Reflect.field(pJson,"frames");
	if(com.isartdigital.utils.game.StateGraphic.texturesDefinition == null) return;
	var lID;
	var lNum;
	var _g = 0;
	var _g1 = Reflect.fields(lFrames);
	while(_g < _g1.length) {
		var lID1 = _g1[_g];
		++_g;
		lID1 = lID1.split(".")[0];
		lNum = Std.parseInt(HxOverrides.substr(lID1,-1 * com.isartdigital.utils.game.StateGraphic.textureDigits,null));
		if(lNum != null) lID1 = HxOverrides.substr(lID1,0,lID1.length - com.isartdigital.utils.game.StateGraphic.textureDigits);
		com.isartdigital.utils.game.StateGraphic.texturesDefinition.set(lID1,null);
		null;
		com.isartdigital.utils.game.StateGraphic.texturesCache.set(lID1,null);
		null;
	}
};
com.isartdigital.utils.game.StateGraphic.addBoxes = function(pJson) {
	if(com.isartdigital.utils.game.StateGraphic.boxesCache == null) com.isartdigital.utils.game.StateGraphic.boxesCache = new haxe.ds.StringMap();
	var lItem;
	var lObj;
	var _g = 0;
	var _g1 = Reflect.fields(pJson);
	while(_g < _g1.length) {
		var lName = _g1[_g];
		++_g;
		lItem = Reflect.field(pJson,lName);
		var v = new haxe.ds.StringMap();
		com.isartdigital.utils.game.StateGraphic.boxesCache.set(lName,v);
		v;
		var _g2 = 0;
		var _g3 = Reflect.fields(lItem);
		while(_g2 < _g3.length) {
			var lObjName = _g3[_g2];
			++_g2;
			lObj = Reflect.field(lItem,lObjName);
			if(lObj.type == "Rectangle") {
				var this1 = com.isartdigital.utils.game.StateGraphic.boxesCache.get(lName);
				var v1 = new PIXI.Rectangle(lObj.x,lObj.y,lObj.width,lObj.height);
				this1.set(lObjName,v1);
				v1;
			} else if(lObj.type == "Ellipse") {
				var this2 = com.isartdigital.utils.game.StateGraphic.boxesCache.get(lName);
				var v2 = new PIXI.Ellipse(lObj.x,lObj.y,lObj.width / 2,lObj.height / 2);
				this2.set(lObjName,v2);
				v2;
			} else if(lObj.type == "Circle") {
				var this3 = com.isartdigital.utils.game.StateGraphic.boxesCache.get(lName);
				var v3 = new PIXI.Circle(lObj.x,lObj.y,lObj.radius);
				this3.set(lObjName,v3);
				v3;
			} else if(lObj.type == "Point") {
				var this4 = com.isartdigital.utils.game.StateGraphic.boxesCache.get(lName);
				var v4 = new PIXI.Point(lObj.x,lObj.y);
				this4.set(lObjName,v4);
				v4;
			}
		}
	}
};
com.isartdigital.utils.game.StateGraphic.addAnchors = function(pJson) {
	if(com.isartdigital.utils.game.StateGraphic.anchorsCache == null) com.isartdigital.utils.game.StateGraphic.anchorsCache = new haxe.ds.StringMap();
	var lPoint;
	var _g = 0;
	var _g1 = Reflect.fields(pJson);
	while(_g < _g1.length) {
		var lName = _g1[_g];
		++_g;
		lPoint = Reflect.field(pJson,lName);
		var v = new PIXI.Point(lPoint.x,lPoint.y);
		com.isartdigital.utils.game.StateGraphic.anchorsCache.set(lName,v);
		v;
	}
};
com.isartdigital.utils.game.StateGraphic.__super__ = com.isartdigital.utils.game.GameObject;
com.isartdigital.utils.game.StateGraphic.prototype = $extend(com.isartdigital.utils.game.GameObject.prototype,{
	setAnimEnd: function() {
		this.isAnimEnd = true;
	}
	,setState: function(pState,pLoop,pAutoPlay,pStart) {
		if(pStart == null) pStart = 0;
		if(pAutoPlay == null) pAutoPlay = true;
		if(pLoop == null) pLoop = false;
		if(this.state == pState) return;
		if(this.assetName == null) this.assetName = Type.getClassName(Type.getClass(this)).split(".").pop();
		this.state = pState;
		if(this.anim == null) {
			this.anim = new PIXI.MovieClip(this.getTextures(this.state));
			this.anim.scale.set(1 / com.isartdigital.utils.system.DeviceCapabilities.textureRatio,1 / com.isartdigital.utils.system.DeviceCapabilities.textureRatio);
			if(com.isartdigital.utils.game.StateGraphic.animAlpha < 1) this.anim.alpha = com.isartdigital.utils.game.StateGraphic.animAlpha;
			this.addChild(this.anim);
		} else this.anim.textures = this.getTextures(this.state);
		this.isAnimEnd = false;
		this.anim.onComplete = $bind(this,this.setAnimEnd);
		this.anim.loop = pLoop;
		if(this.anim.totalFrames > 1) this.anim.gotoAndStop(pStart); else this.anim.gotoAndStop(0);
		if(pAutoPlay) this.anim.play();
		if(this.getAnchor(pState,this.anim) != null) this.anim.anchor = this.getAnchor(pState,this.anim);
		if(this.box == null) {
			if(this.boxType == com.isartdigital.utils.game.BoxType.SELF) {
				this.box = this.anim;
				return;
			} else {
				this.box = new pixi.display.DisplayObjectContainer();
				if(this.boxType != com.isartdigital.utils.game.BoxType.NONE) this.createBox();
			}
			this.addChild(this.box);
		} else if(this.boxType == com.isartdigital.utils.game.BoxType.MULTIPLE) {
			this.removeChild(this.box);
			this.box = new pixi.display.DisplayObjectContainer();
			this.createBox();
			this.addChild(this.box);
		}
	}
	,createBox: function() {
		var lBoxes = this.getBox((this.boxType == com.isartdigital.utils.game.BoxType.MULTIPLE?this.state + "_":"") + "box");
		var lChild;
		var $it0 = lBoxes.keys();
		while( $it0.hasNext() ) {
			var lBox = $it0.next();
			lChild = new PIXI.Graphics();
			lChild.alpha = com.isartdigital.utils.game.StateGraphic.boxAlpha;
			lChild.beginFill(16720418);
			if(Std["is"](lBoxes.get(lBox),PIXI.Rectangle)) lChild.drawRect(lBoxes.get(lBox).x,lBoxes.get(lBox).y,lBoxes.get(lBox).width,lBoxes.get(lBox).height); else if(Std["is"](lBoxes.get(lBox),PIXI.Ellipse)) lChild.drawEllipse(lBoxes.get(lBox).x,lBoxes.get(lBox).y,lBoxes.get(lBox).width,lBoxes.get(lBox).height); else if(Std["is"](lBoxes.get(lBox),PIXI.Circle)) lChild.drawCircle(lBoxes.get(lBox).x,lBoxes.get(lBox).y,lBoxes.get(lBox).radius); else if(Std["is"](lBoxes.get(lBox),PIXI.Point)) lChild.drawCircle(0,0,10);
			lChild.endFill();
			lChild.updateCache();
			lChild.name = lBox;
			if(Std["is"](lBoxes.get(lBox),PIXI.Point)) lChild.position.set(lBoxes.get(lBox).x,lBoxes.get(lBox).y); else lChild.hitArea = lBoxes.get(lBox);
			this.box.addChild(lChild);
		}
		this.box.renderable = false;
	}
	,update: function() {
		if(this.stage == null) {
			com.isartdigital.utils.Debug.warn("Vous essayez de mettre à jour un StateGraphic qui n'est pas attaché à la DisplayList, la mise à jour est ignorée.");
			return;
		}
		this.updateTransform();
		this.box.updateTransform();
	}
	,getTextures: function(pState) {
		var lID;
		if(pState == this.DEFAULT_STATE) lID = this.assetName + ""; else lID = this.assetName + "_" + pState + "";
		if(com.isartdigital.utils.game.StateGraphic.texturesCache.get(lID) == null) {
			var lFrames = com.isartdigital.utils.game.StateGraphic.texturesDefinition.get(lID);
			if((function($this) {
				var $r;
				var $int = lFrames;
				$r = $int < 0?4294967296.0 + $int:$int + 0.0;
				return $r;
			}(this)) == 1) {
				var v = [PIXI.Texture.fromFrame(lID + ".png")];
				com.isartdigital.utils.game.StateGraphic.texturesCache.set(lID,v);
				v;
			} else {
				var v1 = new Array();
				com.isartdigital.utils.game.StateGraphic.texturesCache.set(lID,v1);
				v1;
				var _g1 = 1;
				var _g = lFrames + 1;
				while(_g1 < _g) {
					var i = _g1++;
					com.isartdigital.utils.game.StateGraphic.texturesCache.get(lID).push(PIXI.Texture.fromFrame(lID + HxOverrides.substr(com.isartdigital.utils.game.StateGraphic.digits + i,-1 * com.isartdigital.utils.game.StateGraphic.textureDigits,null) + ".png"));
				}
			}
		}
		return com.isartdigital.utils.game.StateGraphic.texturesCache.get(lID);
	}
	,getBox: function(pState) {
		return com.isartdigital.utils.game.StateGraphic.boxesCache.get(this.assetName + "_" + pState);
	}
	,getAnchor: function(pState,pAnim) {
		if(com.isartdigital.utils.game.StateGraphic.anchorsCache == null) return null;
		var lAnchorName = this.assetName;
		if(pState != "") lAnchorName += "_" + pState;
		var lAnchorPos = com.isartdigital.utils.game.StateGraphic.anchorsCache.get(lAnchorName);
		if(lAnchorPos == null) return null;
		var lAnchorRatio = new PIXI.Point(lAnchorPos.x / this.anim.width * -1,lAnchorPos.y / this.anim.height * -1);
		return lAnchorRatio;
	}
	,pause: function() {
		if(this.anim != null) this.anim.stop();
	}
	,resume: function() {
		if(this.anim != null) this.anim.play();
	}
	,get_hitBox: function() {
		return this.box;
	}
	,get_hitPoints: function() {
		return null;
	}
	,destroy: function() {
		if(this.anim != null && this.anim.playing) this.anim.stop();
		this.removeChild(this.anim);
		this.anim = null;
		this.removeChild(this.box);
		this.box = null;
		com.isartdigital.utils.game.GameObject.prototype.destroy.call(this);
	}
	,__class__: com.isartdigital.utils.game.StateGraphic
});
com.isartdigital.plateformer.game.utils = {};
com.isartdigital.plateformer.game.utils.PositionnedObject = function() {
	this.spawnerInfo = null;
	com.isartdigital.utils.game.StateGraphic.call(this);
	this.boxType = com.isartdigital.utils.game.BoxType.SIMPLE;
};
$hxClasses["com.isartdigital.plateformer.game.utils.PositionnedObject"] = com.isartdigital.plateformer.game.utils.PositionnedObject;
com.isartdigital.plateformer.game.utils.PositionnedObject.__name__ = ["com","isartdigital","plateformer","game","utils","PositionnedObject"];
com.isartdigital.plateformer.game.utils.PositionnedObject.__super__ = com.isartdigital.utils.game.StateGraphic;
com.isartdigital.plateformer.game.utils.PositionnedObject.prototype = $extend(com.isartdigital.utils.game.StateGraphic.prototype,{
	init: function(lInfo) {
		this.spawnerInfo = lInfo;
		this.x = lInfo.x;
		this.y = lInfo.y;
		this.rotation = Math.PI / 180 * lInfo.rotation;
		this.scale.x = lInfo.scaleX;
		this.scale.y = lInfo.scaleY;
		this.assetName = lInfo.type;
		this.objName = lInfo.instanceName;
		this.setState(this.DEFAULT_STATE);
		this.anim.animationSpeed = 0.5;
	}
	,__class__: com.isartdigital.plateformer.game.utils.PositionnedObject
});
com.isartdigital.plateformer.game.utils.Mobile = function() {
	this.detectionDist = 0;
	this.gravity = 2;
	this.minHSpeed = 1;
	this.maxVSpeed = 50;
	this.maxHSpeed = 14;
	this.friction = new PIXI.Point(1,1);
	this.acceleration = new PIXI.Point(0,0);
	this.speed = new PIXI.Point(0,0);
	com.isartdigital.plateformer.game.utils.PositionnedObject.call(this);
};
$hxClasses["com.isartdigital.plateformer.game.utils.Mobile"] = com.isartdigital.plateformer.game.utils.Mobile;
com.isartdigital.plateformer.game.utils.Mobile.__name__ = ["com","isartdigital","plateformer","game","utils","Mobile"];
com.isartdigital.plateformer.game.utils.Mobile.__super__ = com.isartdigital.plateformer.game.utils.PositionnedObject;
com.isartdigital.plateformer.game.utils.Mobile.prototype = $extend(com.isartdigital.plateformer.game.utils.PositionnedObject.prototype,{
	start: function() {
		com.isartdigital.plateformer.game.utils.PositionnedObject.prototype.start.call(this);
		com.isartdigital.utils.ArrayUtils.addIfAlone(this,com.isartdigital.plateformer.game.utils.Mobile.list);
	}
	,move: function() {
		this.speed.x += this.acceleration.x;
		this.speed.y += this.acceleration.y;
		this.speed.x *= this.friction.x;
		this.speed.y *= this.friction.y;
		this.speed.x = (this.speed.x < 0?-1:1) * Math.min(Math.abs(this.speed.x),this.maxHSpeed);
		this.speed.y = (this.speed.y < 0?-1:1) * Math.min(Math.abs(this.speed.y),this.maxVSpeed);
		this.x += this.speed.x;
		this.y += this.speed.y;
		if(Math.abs(this.speed.x) < this.minHSpeed) this.speed.x = 0;
		this.acceleration.set(0,0);
	}
	,flipLeft: function() {
		this.scale.x = -1;
	}
	,flipRight: function() {
		this.scale.x = 1;
	}
	,flipUp: function() {
	}
	,flipDown: function() {
	}
	,canLeft: function(pPoint) {
		if(this.leftBlock != null && this.leftBlock.parent != null) {
			if(this.testPoint([this.leftBlock],pPoint) == this.leftBlock) return false;
		}
		return !this.hitLeft(pPoint);
	}
	,canRight: function(pPoint) {
		if(this.rightBlock != null && this.rightBlock.parent != null) {
			if(this.testPoint([this.rightBlock],pPoint) == this.rightBlock) return false;
		}
		return !this.hitRight(pPoint);
	}
	,hitRight: function(pPoint) {
		var lCollision = this.testPoint(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list,pPoint);
		if(lCollision != null) {
			this.rightBlock = js.Boot.__cast(lCollision , com.isartdigital.plateformer.game.utils.Immobile);
			this.x = this.rightBlock.x + this.rightBlock.get_hitBox().x - (this.get_hitBox().x + this.get_hitBox().width / 2);
			return true;
		}
		return false;
	}
	,hitLeft: function(pPoint) {
		var lCollision = this.testPoint(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list,pPoint);
		if(lCollision != null) {
			this.leftBlock = js.Boot.__cast(lCollision , com.isartdigital.plateformer.game.utils.Immobile);
			this.x = this.leftBlock.x + this.leftBlock.get_hitBox().x + this.leftBlock.get_hitBox().width + this.get_hitBox().width / 2;
			return true;
		}
		return false;
	}
	,testPoint: function(pList,pPoint) {
		var _g1 = 0;
		var _g = pList.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(com.isartdigital.utils.game.CollisionManager.hitTestPoint((js.Boot.__cast(pList[i] , com.isartdigital.utils.game.StateGraphic)).get_hitBox(),pPoint)) return js.Boot.__cast(pList[i] , com.isartdigital.utils.game.StateGraphic);
		}
		return null;
	}
	,destroy: function() {
		com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().removeChild(this);
		com.isartdigital.plateformer.game.utils.Mobile.list.splice(HxOverrides.indexOf(com.isartdigital.plateformer.game.utils.Mobile.list,this,0),1);
		com.isartdigital.plateformer.game.utils.PositionnedObject.prototype.destroy.call(this);
	}
	,__class__: com.isartdigital.plateformer.game.utils.Mobile
});
com.isartdigital.plateformer.game.utils.ScrollingPlane = function() {
	this.parts = new Array();
	this.MARGIN = 100;
	com.isartdigital.plateformer.game.utils.Mobile.call(this);
	this.setAnchorPart();
	this.setParts();
	this.setSpeed();
	this.parts.sort(function(a,b) {
		if(a.x < b.x) return -1;
		if(a.x > b.x) return 1;
		return 0;
	});
};
$hxClasses["com.isartdigital.plateformer.game.utils.ScrollingPlane"] = com.isartdigital.plateformer.game.utils.ScrollingPlane;
com.isartdigital.plateformer.game.utils.ScrollingPlane.__name__ = ["com","isartdigital","plateformer","game","utils","ScrollingPlane"];
com.isartdigital.plateformer.game.utils.ScrollingPlane.__super__ = com.isartdigital.plateformer.game.utils.Mobile;
com.isartdigital.plateformer.game.utils.ScrollingPlane.prototype = $extend(com.isartdigital.plateformer.game.utils.Mobile.prototype,{
	setAnchorPart: function() {
		this.anchorPart = new PIXI.Point(0,0);
	}
	,setParts: function() {
	}
	,setNextPart: function(pSprite) {
		pSprite.x = this.parts[this.parts.length - 1].x + this.parts[this.parts.length - 1].width;
		this.parts.push(pSprite);
		this.addChild(pSprite);
	}
	,setSpeed: function() {
		this.speed.set(1,1);
	}
	,move: function() {
		this.x = com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().position.x * this.speed.x;
	}
	,doActionNormal: function() {
		this.move();
		if((function($this) {
			var $r;
			var $int = $this.MARGIN;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}(this)) + (this.toLocal(this.parts[0].position,this.parent).x + this.parts[0].width) + this.x - com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().x < this.toLocal(new PIXI.Point(com.isartdigital.plateformer.game.GameManager.getInstance().screenLimit.x,com.isartdigital.plateformer.game.GameManager.getInstance().screenLimit.y),this.parent).x) {
			var lPart = this.parts.shift();
			lPart.x = this.parts[this.parts.length - 1].x + this.parts[this.parts.length - 1].width - 2;
			this.parts.push(lPart);
		} else if(this.toLocal(this.parts[this.parts.length - 1].position,this.parent).x - (function($this) {
			var $r;
			var int1;
			{
				var int2 = $this.MARGIN;
				if(int2 < 0) int1 = 4294967296.0 + int2; else int1 = int2 + 0.0;
			}
			$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
			return $r;
		}(this)) + this.x - com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().x > this.toLocal(new PIXI.Point(com.isartdigital.plateformer.game.GameManager.getInstance().screenLimit.x,com.isartdigital.plateformer.game.GameManager.getInstance().screenLimit.y),this.parent).x + com.isartdigital.plateformer.game.GameManager.getInstance().screenLimit.width) {
			var lPart1 = this.parts.pop();
			lPart1.x = this.parts[0].x - lPart1.width + 2;
			this.parts.unshift(lPart1);
		}
	}
	,__class__: com.isartdigital.plateformer.game.utils.ScrollingPlane
});
com.isartdigital.plateformer.game.sprites = {};
com.isartdigital.plateformer.game.sprites.Background1 = function() {
	this.MARGIN_HEIGHT = 30;
	com.isartdigital.plateformer.game.utils.ScrollingPlane.call(this);
};
$hxClasses["com.isartdigital.plateformer.game.sprites.Background1"] = com.isartdigital.plateformer.game.sprites.Background1;
com.isartdigital.plateformer.game.sprites.Background1.__name__ = ["com","isartdigital","plateformer","game","sprites","Background1"];
com.isartdigital.plateformer.game.sprites.Background1.__super__ = com.isartdigital.plateformer.game.utils.ScrollingPlane;
com.isartdigital.plateformer.game.sprites.Background1.prototype = $extend(com.isartdigital.plateformer.game.utils.ScrollingPlane.prototype,{
	setAnchorPart: function() {
		this.anchorPart = new PIXI.Point(0,1);
	}
	,start: function() {
		com.isartdigital.plateformer.game.utils.ScrollingPlane.prototype.start.call(this);
	}
	,setSpeed: function() {
		this.speed.set(1,0.7);
	}
	,move: function() {
		com.isartdigital.plateformer.game.utils.ScrollingPlane.prototype.move.call(this);
		this.y = com.isartdigital.plateformer.game.GameManager.getInstance().getBackgroundY() + this.MARGIN_HEIGHT + 300;
	}
	,setParts: function() {
		var lSprite = new com.isartdigital.utils.game.StateGraphic("background2_part1",this.anchorPart);
		this.addChild(lSprite);
		this.parts.push(lSprite);
		this.setNextPart(new com.isartdigital.utils.game.StateGraphic("background2_part2",this.anchorPart));
		this.setNextPart(new com.isartdigital.utils.game.StateGraphic("background2_part3",this.anchorPart));
	}
	,__class__: com.isartdigital.plateformer.game.sprites.Background1
});
com.isartdigital.plateformer.game.sprites.Background2 = function() {
	this.MARGIN_HEIGHT = 30;
	com.isartdigital.plateformer.game.utils.ScrollingPlane.call(this);
};
$hxClasses["com.isartdigital.plateformer.game.sprites.Background2"] = com.isartdigital.plateformer.game.sprites.Background2;
com.isartdigital.plateformer.game.sprites.Background2.__name__ = ["com","isartdigital","plateformer","game","sprites","Background2"];
com.isartdigital.plateformer.game.sprites.Background2.__super__ = com.isartdigital.plateformer.game.utils.ScrollingPlane;
com.isartdigital.plateformer.game.sprites.Background2.prototype = $extend(com.isartdigital.plateformer.game.utils.ScrollingPlane.prototype,{
	setSpeed: function() {
		this.speed.set(0.7,1);
	}
	,move: function() {
		com.isartdigital.plateformer.game.utils.ScrollingPlane.prototype.move.call(this);
	}
	,setParts: function() {
		var lPart = new com.isartdigital.utils.game.StateGraphic("background1_part1",this.anchorPart);
		this.addChild(lPart);
		this.parts.push(lPart);
		this.setNextPart(new com.isartdigital.utils.game.StateGraphic("background1_part2",this.anchorPart));
		this.setNextPart(new com.isartdigital.utils.game.StateGraphic("background1_part3",this.anchorPart));
	}
	,__class__: com.isartdigital.plateformer.game.sprites.Background2
});
com.isartdigital.plateformer.game.sprites.GamePlane = function() {
	com.isartdigital.utils.game.GameObject.call(this);
};
$hxClasses["com.isartdigital.plateformer.game.sprites.GamePlane"] = com.isartdigital.plateformer.game.sprites.GamePlane;
com.isartdigital.plateformer.game.sprites.GamePlane.__name__ = ["com","isartdigital","plateformer","game","sprites","GamePlane"];
com.isartdigital.plateformer.game.sprites.GamePlane.getInstance = function() {
	if(com.isartdigital.plateformer.game.sprites.GamePlane.instance == null) com.isartdigital.plateformer.game.sprites.GamePlane.instance = new com.isartdigital.plateformer.game.sprites.GamePlane();
	return com.isartdigital.plateformer.game.sprites.GamePlane.instance;
};
com.isartdigital.plateformer.game.sprites.GamePlane.__super__ = com.isartdigital.utils.game.GameObject;
com.isartdigital.plateformer.game.sprites.GamePlane.prototype = $extend(com.isartdigital.utils.game.GameObject.prototype,{
	doActionNormal: function() {
		com.isartdigital.utils.game.GameObject.prototype.doActionNormal.call(this);
	}
	,destroy: function() {
		com.isartdigital.utils.game.GameObject.prototype.destroy.call(this);
		com.isartdigital.plateformer.game.sprites.GamePlane.instance = null;
	}
	,__class__: com.isartdigital.plateformer.game.sprites.GamePlane
});
com.isartdigital.utils.ui = {};
com.isartdigital.utils.ui.InfoGraphic = function(pAssetName,pAnchor) {
	com.isartdigital.utils.game.StateGraphic.call(this,pAssetName,pAnchor);
	this.initStyle();
	this.txt = new PIXI.Text("",this.defaultStyle);
	this.start();
};
$hxClasses["com.isartdigital.utils.ui.InfoGraphic"] = com.isartdigital.utils.ui.InfoGraphic;
com.isartdigital.utils.ui.InfoGraphic.__name__ = ["com","isartdigital","utils","ui","InfoGraphic"];
com.isartdigital.utils.ui.InfoGraphic.__super__ = com.isartdigital.utils.game.StateGraphic;
com.isartdigital.utils.ui.InfoGraphic.prototype = $extend(com.isartdigital.utils.game.StateGraphic.prototype,{
	initStyle: function() {
		this.defaultStyle = { font : "80px Arial", fill : "#000000", align : "center"};
	}
	,setText: function(pText) {
		this.txt.setText(pText);
	}
	,setModeNormal: function() {
		this.setState(this.DEFAULT_STATE);
		this.txt.anchor.set(0.5,0.5);
		this.addChild(this.txt);
		com.isartdigital.utils.game.StateGraphic.prototype.setModeNormal.call(this);
	}
	,__class__: com.isartdigital.utils.ui.InfoGraphic
});
com.isartdigital.plateformer.game.sprites.InfoPoint = function() {
	com.isartdigital.utils.ui.InfoGraphic.call(this,"Collectable",new PIXI.Point(0.5,0.5));
	this.txt.y = 150;
};
$hxClasses["com.isartdigital.plateformer.game.sprites.InfoPoint"] = com.isartdigital.plateformer.game.sprites.InfoPoint;
com.isartdigital.plateformer.game.sprites.InfoPoint.__name__ = ["com","isartdigital","plateformer","game","sprites","InfoPoint"];
com.isartdigital.plateformer.game.sprites.InfoPoint.__super__ = com.isartdigital.utils.ui.InfoGraphic;
com.isartdigital.plateformer.game.sprites.InfoPoint.prototype = $extend(com.isartdigital.utils.ui.InfoGraphic.prototype,{
	__class__: com.isartdigital.plateformer.game.sprites.InfoPoint
});
com.isartdigital.plateformer.game.sprites.immobile = {};
com.isartdigital.plateformer.game.sprites.immobile.CheckPoint = function() {
	com.isartdigital.plateformer.game.utils.PositionnedObject.call(this);
	com.isartdigital.plateformer.game.sprites.immobile.CheckPoint.list.push(this);
};
$hxClasses["com.isartdigital.plateformer.game.sprites.immobile.CheckPoint"] = com.isartdigital.plateformer.game.sprites.immobile.CheckPoint;
com.isartdigital.plateformer.game.sprites.immobile.CheckPoint.__name__ = ["com","isartdigital","plateformer","game","sprites","immobile","CheckPoint"];
com.isartdigital.plateformer.game.sprites.immobile.CheckPoint.__super__ = com.isartdigital.plateformer.game.utils.PositionnedObject;
com.isartdigital.plateformer.game.sprites.immobile.CheckPoint.prototype = $extend(com.isartdigital.plateformer.game.utils.PositionnedObject.prototype,{
	doActionNormal: function() {
		com.isartdigital.plateformer.game.utils.PositionnedObject.prototype.doActionNormal.call(this);
		if(com.isartdigital.utils.game.CollisionManager.hitTestObject(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().get_hitBox(),this.get_hitBox())) this.onPlayerCollision();
	}
	,onPlayerCollision: function() {
		com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().setSpawn(this.position);
		com.isartdigital.plateformer.game.GameManager.getInstance().destroyRetryObj();
		this.setModeUsed();
	}
	,setModeUsed: function() {
		this.setState("used");
		this.setModeVoid();
	}
	,destroy: function() {
		com.isartdigital.plateformer.game.utils.PositionnedObject.prototype.destroy.call(this);
		com.isartdigital.plateformer.game.sprites.immobile.CheckPoint.list.splice(HxOverrides.indexOf(com.isartdigital.plateformer.game.sprites.immobile.CheckPoint.list,this,0),1);
	}
	,__class__: com.isartdigital.plateformer.game.sprites.immobile.CheckPoint
});
com.isartdigital.plateformer.game.utils.Immobile = function() {
	com.isartdigital.plateformer.game.utils.PositionnedObject.call(this);
	com.isartdigital.plateformer.game.utils.Immobile.immobileList.push(this);
};
$hxClasses["com.isartdigital.plateformer.game.utils.Immobile"] = com.isartdigital.plateformer.game.utils.Immobile;
com.isartdigital.plateformer.game.utils.Immobile.__name__ = ["com","isartdigital","plateformer","game","utils","Immobile"];
com.isartdigital.plateformer.game.utils.Immobile.__super__ = com.isartdigital.plateformer.game.utils.PositionnedObject;
com.isartdigital.plateformer.game.utils.Immobile.prototype = $extend(com.isartdigital.plateformer.game.utils.PositionnedObject.prototype,{
	popObj: function() {
		com.isartdigital.plateformer.game.utils.Immobile.immobileList.push(this);
		com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(this);
	}
	,unPopObj: function() {
		com.isartdigital.plateformer.game.utils.Immobile.immobileList.splice(HxOverrides.indexOf(com.isartdigital.plateformer.game.utils.Immobile.immobileList,this,0),1);
		this.parent.removeChild(this);
	}
	,destroy: function() {
		com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().removeChild(this);
		com.isartdigital.plateformer.game.utils.Immobile.immobileList.splice(HxOverrides.indexOf(com.isartdigital.plateformer.game.utils.Immobile.immobileList,this,0),1);
		com.isartdigital.plateformer.game.utils.PositionnedObject.prototype.destroy.call(this);
	}
	,__class__: com.isartdigital.plateformer.game.utils.Immobile
});
com.isartdigital.plateformer.game.sprites.immobile.Decor = function() {
	com.isartdigital.plateformer.game.utils.Immobile.call(this);
	this.boxType = com.isartdigital.utils.game.BoxType.SIMPLE;
};
$hxClasses["com.isartdigital.plateformer.game.sprites.immobile.Decor"] = com.isartdigital.plateformer.game.sprites.immobile.Decor;
com.isartdigital.plateformer.game.sprites.immobile.Decor.__name__ = ["com","isartdigital","plateformer","game","sprites","immobile","Decor"];
com.isartdigital.plateformer.game.sprites.immobile.Decor.__super__ = com.isartdigital.plateformer.game.utils.Immobile;
com.isartdigital.plateformer.game.sprites.immobile.Decor.prototype = $extend(com.isartdigital.plateformer.game.utils.Immobile.prototype,{
	__class__: com.isartdigital.plateformer.game.sprites.immobile.Decor
});
com.isartdigital.plateformer.game.sprites.immobile.decors = {};
com.isartdigital.plateformer.game.sprites.immobile.decors.Wall = function() {
	com.isartdigital.plateformer.game.sprites.immobile.Decor.call(this);
	com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list.push(this);
};
$hxClasses["com.isartdigital.plateformer.game.sprites.immobile.decors.Wall"] = com.isartdigital.plateformer.game.sprites.immobile.decors.Wall;
com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.__name__ = ["com","isartdigital","plateformer","game","sprites","immobile","decors","Wall"];
com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.__super__ = com.isartdigital.plateformer.game.sprites.immobile.Decor;
com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.prototype = $extend(com.isartdigital.plateformer.game.sprites.immobile.Decor.prototype,{
	getTypeOfWall: function() {
		return this.assetName;
	}
	,popObj: function() {
		com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list.push(this);
		com.isartdigital.plateformer.game.sprites.immobile.Decor.prototype.popObj.call(this);
	}
	,addFromObjList: function() {
		com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.listObj.push(this);
	}
	,unPopObj: function() {
		com.isartdigital.plateformer.game.sprites.immobile.Decor.prototype.unPopObj.call(this);
		com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list.splice(HxOverrides.indexOf(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list,this,0),1);
		this.addFromObjList();
	}
	,destroy: function() {
		com.isartdigital.plateformer.game.sprites.immobile.Decor.prototype.destroy.call(this);
		com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list.splice(HxOverrides.indexOf(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list,this,0),1);
	}
	,__class__: com.isartdigital.plateformer.game.sprites.immobile.decors.Wall
});
com.isartdigital.plateformer.game.sprites.immobile.decors.Destructible = function() {
	com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.call(this);
	this.start();
	com.isartdigital.plateformer.game.sprites.immobile.decors.Destructible.list.push(this);
};
$hxClasses["com.isartdigital.plateformer.game.sprites.immobile.decors.Destructible"] = com.isartdigital.plateformer.game.sprites.immobile.decors.Destructible;
com.isartdigital.plateformer.game.sprites.immobile.decors.Destructible.__name__ = ["com","isartdigital","plateformer","game","sprites","immobile","decors","Destructible"];
com.isartdigital.plateformer.game.sprites.immobile.decors.Destructible.__super__ = com.isartdigital.plateformer.game.sprites.immobile.decors.Wall;
com.isartdigital.plateformer.game.sprites.immobile.decors.Destructible.prototype = $extend(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.prototype,{
	onEnemyBomb: function() {
		com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().onDestructibleDestroy(this);
		com.isartdigital.plateformer.game.GameManager.getInstance().saveForRetry(this.spawnerInfo);
		this.destroy();
	}
	,destroy: function() {
		com.isartdigital.plateformer.game.sprites.immobile.decors.Destructible.list.splice(HxOverrides.indexOf(com.isartdigital.plateformer.game.sprites.immobile.decors.Destructible.list,this,0),1);
		com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.prototype.destroy.call(this);
	}
	,__class__: com.isartdigital.plateformer.game.sprites.immobile.decors.Destructible
});
com.isartdigital.plateformer.game.sprites.immobile.decors.EndLevel = function() {
	com.isartdigital.plateformer.game.sprites.immobile.CheckPoint.call(this);
};
$hxClasses["com.isartdigital.plateformer.game.sprites.immobile.decors.EndLevel"] = com.isartdigital.plateformer.game.sprites.immobile.decors.EndLevel;
com.isartdigital.plateformer.game.sprites.immobile.decors.EndLevel.__name__ = ["com","isartdigital","plateformer","game","sprites","immobile","decors","EndLevel"];
com.isartdigital.plateformer.game.sprites.immobile.decors.EndLevel.__super__ = com.isartdigital.plateformer.game.sprites.immobile.CheckPoint;
com.isartdigital.plateformer.game.sprites.immobile.decors.EndLevel.prototype = $extend(com.isartdigital.plateformer.game.sprites.immobile.CheckPoint.prototype,{
	onPlayerCollision: function() {
		this.setModeVoid();
		com.isartdigital.utils.sounds.SoundManager.playSound("win");
		com.isartdigital.plateformer.game.GameManager.getInstance().set_win(true);
	}
	,__class__: com.isartdigital.plateformer.game.sprites.immobile.decors.EndLevel
});
com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic = function() {
	com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.call(this);
	this.start();
};
$hxClasses["com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic"] = com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic;
com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic.__name__ = ["com","isartdigital","plateformer","game","sprites","immobile","decors","KillZoneStatic"];
com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic.__super__ = com.isartdigital.plateformer.game.sprites.immobile.decors.Wall;
com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic.prototype = $extend(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.prototype,{
	addFromObjList: function() {
		com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic.listObj.push(this);
	}
	,setModeNormal: function() {
		com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.prototype.setModeNormal.call(this);
		this.setState(this.DEFAULT_STATE,true);
	}
	,__class__: com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic
});
com.isartdigital.plateformer.game.sprites.immobile.decors.Platform = function() {
	com.isartdigital.plateformer.game.utils.Immobile.call(this);
	com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.list.push(this);
};
$hxClasses["com.isartdigital.plateformer.game.sprites.immobile.decors.Platform"] = com.isartdigital.plateformer.game.sprites.immobile.decors.Platform;
com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.__name__ = ["com","isartdigital","plateformer","game","sprites","immobile","decors","Platform"];
com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.__super__ = com.isartdigital.plateformer.game.utils.Immobile;
com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.prototype = $extend(com.isartdigital.plateformer.game.utils.Immobile.prototype,{
	setModeNormal: function() {
		com.isartdigital.plateformer.game.utils.Immobile.prototype.setModeNormal.call(this);
		this.setState(this.DEFAULT_STATE);
	}
	,getTypeOfPlatform: function() {
		return this.assetName;
	}
	,popObj: function() {
		com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.list.push(this);
		com.isartdigital.plateformer.game.utils.Immobile.prototype.popObj.call(this);
	}
	,unPopObj: function() {
		com.isartdigital.plateformer.game.utils.Immobile.prototype.unPopObj.call(this);
		com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.list.splice(HxOverrides.indexOf(com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.list,this,0),1);
		com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.listObj.push(this);
	}
	,destroy: function() {
		com.isartdigital.plateformer.game.utils.Immobile.prototype.destroy.call(this);
		com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.list.splice(HxOverrides.indexOf(com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.list,this,0),1);
	}
	,__class__: com.isartdigital.plateformer.game.sprites.immobile.decors.Platform
});
com.isartdigital.plateformer.game.sprites.mobile = {};
com.isartdigital.plateformer.game.sprites.mobile.Collectable = function() {
	this.list = new Array();
	com.isartdigital.plateformer.game.utils.Mobile.call(this);
	this.list.push(this);
	this.boxType = com.isartdigital.utils.game.BoxType.SIMPLE;
	this.detectionDist = 500;
};
$hxClasses["com.isartdigital.plateformer.game.sprites.mobile.Collectable"] = com.isartdigital.plateformer.game.sprites.mobile.Collectable;
com.isartdigital.plateformer.game.sprites.mobile.Collectable.__name__ = ["com","isartdigital","plateformer","game","sprites","mobile","Collectable"];
com.isartdigital.plateformer.game.sprites.mobile.Collectable.__super__ = com.isartdigital.plateformer.game.utils.Mobile;
com.isartdigital.plateformer.game.sprites.mobile.Collectable.prototype = $extend(com.isartdigital.plateformer.game.utils.Mobile.prototype,{
	init: function(lInfo) {
		com.isartdigital.plateformer.game.utils.Mobile.prototype.init.call(this,lInfo);
		if(lInfo != null) this.instanceName = lInfo.instanceName; else this.instanceName = this.spawnerInfo.instanceName;
	}
	,doActionNormal: function() {
		com.isartdigital.plateformer.game.utils.Mobile.prototype.doActionNormal.call(this);
		if(this.hitPlayer()) this.onHit();
		if(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().hasMagnet() && com.isartdigital.utils.MathUtils.getDistance(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().position,this.position) <= this.detectionDist) this.setModeUpgrade();
	}
	,setModeUpgrade: function() {
		this.doAction = $bind(this,this.doActionUpgrade);
	}
	,addGhostSprite: function() {
		this.setState("ghost");
		this.alpha = 0.8;
	}
	,getInstanceName: function() {
		return this.instanceName;
	}
	,doActionUpgrade: function() {
		this.setSpeed();
		this.move();
		if(this.hitPlayer()) this.onHit();
	}
	,setSpeed: function() {
		var lPosPlayer = com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().getCenter();
		this.direction = com.isartdigital.utils.MathUtils.getDirection(lPosPlayer,this.position);
		this.speed.set(Math.cos(this.direction) * 60,Math.sin(this.direction) * 60);
	}
	,onHit: function() {
		com.isartdigital.plateformer.game.GameManager.getInstance().addCollectedPieces(this.instanceName);
		com.isartdigital.plateformer.game.GameManager.getInstance().saveForRetry(this.spawnerInfo);
		this.destroy();
	}
	,hitPlayer: function() {
		if(com.isartdigital.utils.game.CollisionManager.hitTestObject(this.get_hitBox(),com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().get_hitBox())) {
			com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().cptCollectables++;
			com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().checkShield();
			return true;
		}
		return false;
	}
	,__class__: com.isartdigital.plateformer.game.sprites.mobile.Collectable
});
com.isartdigital.plateformer.game.sprites.mobile.MobilePath = function() {
	this.accelerationNormal = 8;
	com.isartdigital.plateformer.game.utils.Mobile.call(this);
	this.acceleration.set(this.accelerationNormal,0);
};
$hxClasses["com.isartdigital.plateformer.game.sprites.mobile.MobilePath"] = com.isartdigital.plateformer.game.sprites.mobile.MobilePath;
com.isartdigital.plateformer.game.sprites.mobile.MobilePath.__name__ = ["com","isartdigital","plateformer","game","sprites","mobile","MobilePath"];
com.isartdigital.plateformer.game.sprites.mobile.MobilePath.__super__ = com.isartdigital.plateformer.game.utils.Mobile;
com.isartdigital.plateformer.game.sprites.mobile.MobilePath.prototype = $extend(com.isartdigital.plateformer.game.utils.Mobile.prototype,{
	init: function(lInfo) {
		com.isartdigital.plateformer.game.utils.Mobile.prototype.init.call(this,lInfo);
		if(lInfo != null) this.pathEndX = lInfo.pathEndX; else this.pathEndX = this.spawnerInfo.pathEndX;
		if(lInfo != null) this.pathEndY = lInfo.pathEndY; else this.pathEndY = this.spawnerInfo.pathEndY;
		if(lInfo != null) this.pathStartX = lInfo.pathStartX; else this.pathStartX = this.spawnerInfo.pathStartX;
		if(lInfo != null) this.pathStartY = lInfo.pathStartY; else this.pathStartY = this.spawnerInfo.pathStartY;
	}
	,checkHitPlayer: function() {
		if(com.isartdigital.utils.game.CollisionManager.hitTestObject(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().get_hitBox(),this.get_hitBox())) com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().takeDamage();
	}
	,doNotMove: function() {
		this.acceleration.set(0,0);
	}
	,checkLimitsPath: function() {
		if(this.pathEndX == 0 && this.pathEndY == 0 && this.pathStartX == 0 && this.pathStartY == 0) this.doNotMove(); else if(this.pathStartY == 0 && this.pathEndY == 0) {
			if(this.x <= this.pathStartX) this.flipRight(); else if(this.x >= this.pathEndX) this.flipLeft();
		} else if(this.pathStartX == 0 && this.pathEndX == 0) {
			if(this.y <= this.pathStartY) this.flipDown(); else if(this.y >= this.pathEndY) this.flipUp();
		}
	}
	,__class__: com.isartdigital.plateformer.game.sprites.mobile.MobilePath
});
com.isartdigital.plateformer.game.sprites.mobile.Enemy = function() {
	this.hurtCount = null;
	this.hurtTime = 30;
	this.life = 1;
	this.scream = true;
	this.cptDeathEnd = 60;
	this.cptDeath = 0;
	this.cptEnd = 100;
	this.cpt = 0;
	this.frictionGround = 1;
	com.isartdigital.plateformer.game.sprites.mobile.MobilePath.call(this);
	com.isartdigital.plateformer.game.sprites.mobile.Enemy.list.push(this);
	this.setLife();
};
$hxClasses["com.isartdigital.plateformer.game.sprites.mobile.Enemy"] = com.isartdigital.plateformer.game.sprites.mobile.Enemy;
com.isartdigital.plateformer.game.sprites.mobile.Enemy.__name__ = ["com","isartdigital","plateformer","game","sprites","mobile","Enemy"];
com.isartdigital.plateformer.game.sprites.mobile.Enemy.__super__ = com.isartdigital.plateformer.game.sprites.mobile.MobilePath;
com.isartdigital.plateformer.game.sprites.mobile.Enemy.prototype = $extend(com.isartdigital.plateformer.game.sprites.mobile.MobilePath.prototype,{
	destroy: function() {
		com.isartdigital.plateformer.game.sprites.mobile.Enemy.list.splice(HxOverrides.indexOf(com.isartdigital.plateformer.game.sprites.mobile.Enemy.list,this,0),1);
		com.isartdigital.plateformer.game.sprites.mobile.MobilePath.prototype.destroy.call(this);
	}
	,setLife: function() {
	}
	,start: function() {
		com.isartdigital.plateformer.game.sprites.mobile.MobilePath.prototype.start.call(this);
		this.setState("wait");
	}
	,setModeNormal: function() {
		this.doAction = $bind(this,this.doActionNormal);
		this.setState("wait");
	}
	,setModeWalk: function() {
		this.setState("walk");
		this.doAction = $bind(this,this.doActionWalk);
		this.friction.set(this.frictionGround,1);
		this.anim.loop = true;
	}
	,setModeAttack: function() {
		this.setState("hurt");
		this.doAction = $bind(this,this.doActionAttack);
		this.anim.loop = true;
	}
	,doActionNormal: function() {
		this.checkBulletHit();
	}
	,isInScreen: function() {
		var lRect = com.isartdigital.plateformer.game.GameManager.getInstance().screenLimit;
		if(lRect.x < this.x && lRect.x + lRect.width > this.x) return true;
		return false;
	}
	,playerIsThere: function() {
		var distance = com.isartdigital.utils.MathUtils.getDistance(this.position,com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().position);
		if(distance >= this.detectionDist) this.setModeNormal();
	}
	,doActionWalk: function() {
		this.checkLimitsPath();
		this.move();
		this.checkBulletHit();
	}
	,checkBulletHit: function() {
		var i = com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer.list.length;
		while(--i >= 0) if(com.isartdigital.utils.game.CollisionManager.hitTestObject(com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer.list[i].get_hitBox(),this.get_hitBox())) this.onShootPlayerCollision(com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer.list[i]);
	}
	,onShootPlayerCollision: function(shootPlayer) {
		this.takeDamage(shootPlayer.damage);
		shootPlayer.setModeEnd();
	}
	,takeDamage: function(pDamage) {
		if(pDamage == null) pDamage = 1;
		this.life -= pDamage;
		if(this.life <= 0) {
			com.isartdigital.plateformer.game.GameManager.getInstance().saveForRetry(this.spawnerInfo);
			this.setModeDeath();
		} else this.setModeHurt();
	}
	,setModeHurt: function() {
		this.doAction = $bind(this,this.doActionHurt);
		this.setState("hurt");
		this.hurtCount = this.hurtTime;
	}
	,doActionHurt: function() {
		if(this.hurtCount-- <= 0) {
			this.hurtCount = null;
			this.setModeNormal();
		}
	}
	,doActionAttack: function() {
		if(com.isartdigital.utils.MathUtils.getDistance(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().position,this.position) >= this.detectionDist) this.setModeNormal();
	}
	,doActionWalkAttack: function() {
		this.checkLimitsPath();
		this.move();
		if(com.isartdigital.utils.MathUtils.getDistance(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().position,this.position) >= this.detectionDist) this.setModeNormal();
	}
	,setModeDeath: function() {
		this.doAction = $bind(this,this.doActionDeath);
		this.setState("hurt");
		com.isartdigital.utils.sounds.SoundManager.playSound("enemy_die");
		this.acceleration.set(0,50);
	}
	,doActionDeath: function() {
		this.alpha = Math.sin(this.cptDeath);
		if(this.toDestroy()) this.destroy();
	}
	,toDestroy: function() {
		if(this.cptDeath++ >= this.cptDeathEnd) return true; else return false;
	}
	,flipLeft: function() {
		com.isartdigital.plateformer.game.sprites.mobile.MobilePath.prototype.flipLeft.call(this);
		this.acceleration.x = -this.accelerationNormal;
	}
	,flipRight: function() {
		com.isartdigital.plateformer.game.sprites.mobile.MobilePath.prototype.flipRight.call(this);
		this.acceleration.x = this.accelerationNormal;
	}
	,__class__: com.isartdigital.plateformer.game.sprites.mobile.Enemy
});
com.isartdigital.plateformer.game.sprites.mobile.Player = function() {
	this.invulnerableCount = null;
	this.cptCollectables = 0;
	this.shield = false;
	this.godMode = false;
	this.dead = false;
	this.cooldownCounter = 0;
	this.shootCounter = 0;
	this.jumpToleranceCounter = 0;
	this.lastJump = false;
	this.cptWin = 0;
	this.impulseCounter = 0;
	this.spawnPosition = new PIXI.Point(0,0);
	this.hadShield = false;
	this.hadMagnet = false;
	this.hadSuperShoot = false;
	this.hadDoubleJump = false;
	com.isartdigital.plateformer.game.utils.Mobile.call(this);
	this.start();
	if(com.isartdigital.utils.system.DeviceCapabilities.get_system() == "Desktop") this.controller = new com.isartdigital.plateformer.game.utils.ControllerKeyboard(); else this.controller = new com.isartdigital.plateformer.game.utils.ControllerTouch();
	this.boxType = com.isartdigital.utils.game.BoxType.SIMPLE;
};
$hxClasses["com.isartdigital.plateformer.game.sprites.mobile.Player"] = com.isartdigital.plateformer.game.sprites.mobile.Player;
com.isartdigital.plateformer.game.sprites.mobile.Player.__name__ = ["com","isartdigital","plateformer","game","sprites","mobile","Player"];
com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance = function() {
	if(com.isartdigital.plateformer.game.sprites.mobile.Player.instance == null) com.isartdigital.plateformer.game.sprites.mobile.Player.instance = new com.isartdigital.plateformer.game.sprites.mobile.Player();
	return com.isartdigital.plateformer.game.sprites.mobile.Player.instance;
};
com.isartdigital.plateformer.game.sprites.mobile.Player.__super__ = com.isartdigital.plateformer.game.utils.Mobile;
com.isartdigital.plateformer.game.sprites.mobile.Player.prototype = $extend(com.isartdigital.plateformer.game.utils.Mobile.prototype,{
	get_Controller: function() {
		return this.controller;
	}
	,start: function() {
		this.cptCollectables = 0;
		com.isartdigital.plateformer.game.utils.Mobile.prototype.start.call(this);
		this.scale.x = 1;
		this.visible = true;
		this.position.set(this.spawnPosition.x,this.spawnPosition.y);
		this.dead = false;
	}
	,setSpawn: function(pSpawn) {
		this.spawnPosition = pSpawn;
	}
	,get_hitBox: function() {
		return this.box.getChildByName("mcGlobalBox");
	}
	,getBottom: function() {
		return this.box.toGlobal(this.box.getChildByName("mcFall").position);
	}
	,getBottomCan: function() {
		return this.box.toGlobal(this.box.getChildByName("mcFallCan").position);
	}
	,getTopCan: function() {
		return this.box.toGlobal(this.box.getChildByName("mcJumpCan").position);
	}
	,getTop: function() {
		return this.box.toGlobal(this.box.getChildByName("mcJump").position);
	}
	,getCenter: function() {
		return com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().toLocal(this.box.toGlobal(this.box.getChildByName("mcCenter").position));
	}
	,getCenterObject: function() {
		return this.box.getChildByName("mcCenter");
	}
	,getRight: function() {
		if(this.get_Right().x > this.get_Left().x) return this.get_Right(); else return this.get_Left();
	}
	,getRightCan: function() {
		if(this.get_LeftCan().x > this.get_RightCan().x) return this.get_LeftCan(); else return this.get_RightCan();
	}
	,getLeft: function() {
		if(this.get_Right().x < this.get_Left().x) return this.get_Right(); else return this.get_Left();
	}
	,getLeftCan: function() {
		if(this.get_LeftCan().x < this.get_RightCan().x) return this.get_LeftCan(); else return this.get_RightCan();
	}
	,get_Right: function() {
		return this.box.toGlobal(this.box.getChildByName("mcRight").position);
	}
	,get_RightCan: function() {
		return this.box.toGlobal(this.box.getChildByName("mcRightCan").position);
	}
	,get_Left: function() {
		return this.box.toGlobal(this.box.getChildByName("mcLeft").position);
	}
	,get_LeftCan: function() {
		return this.box.toGlobal(this.box.getChildByName("mcLeftCan").position);
	}
	,get_Camera: function() {
		return this.box.getChildByName("mcCamera");
	}
	,get_ShootDep: function() {
		return com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().toLocal(this.box.toGlobal(this.box.getChildByName("mcShoot").position));
	}
	,get_ShootDir: function() {
		if(this.scale.x > 0) this.dirShoot = 10; else if(this.scale.x < 0) this.dirShoot = -10;
		return com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().toLocal(this.box.toGlobal(new PIXI.Point((function($this) {
			var $r;
			var $int = $this.dirShoot;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}(this)) + this.box.getChildByName("mcShoot").x,this.box.getChildByName("mcShoot").y)));
	}
	,canFall: function() {
		if(this.floor != null && this.testPoint([this.floor],this.getBottomCan()) == this.floor) return false;
		return !this.hitFloor(this.getBottomCan());
	}
	,canJump: function() {
		if(this.testPoint(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list,this.getTopCan()) != null) return false;
		return this.controller.get_jump() && !this.lastJump;
	}
	,canDoubleJump: function() {
		return this.hadDoubleJump && this.canJump() && !this.hasDoubleJump;
	}
	,canJumpTolerance: function() {
		this.jumpToleranceCounter--;
		return this.canJump() && this.jumpToleranceCounter > 0;
	}
	,canLeft: function(pPoint) {
		return com.isartdigital.plateformer.game.utils.Mobile.prototype.canLeft.call(this,pPoint);
	}
	,canRight: function(pPoint) {
		return com.isartdigital.plateformer.game.utils.Mobile.prototype.canRight.call(this,pPoint);
	}
	,moveLeft: function() {
		if(Type.getClass(this.leftBlock) == com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic) this.takeDamage();
		return this.scale.x < 0 && this.speed.x != 0;
	}
	,moveRight: function() {
		if(this.rightBlock != null && this.rightBlock.parent != null) {
			if(Type.getClass(this.rightBlock) == com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic) this.takeDamage();
		}
		return this.scale.x > 0 && this.speed.x != 0;
	}
	,setModeNormal: function() {
		com.isartdigital.plateformer.game.utils.Mobile.prototype.setModeNormal.call(this);
		this.setState("wait",true);
		this.anim.animationSpeed = 0.5;
	}
	,setModeWalk: function() {
		this.setState("walk",true);
		this.anim.animationSpeed = 0.7;
		this.doAction = $bind(this,this.doActionWalk);
		this.friction.set(0.5,0);
	}
	,setModeJump: function() {
		if(this.doAction == $bind(this,this.doActionFall) || this.doAction == $bind(this,this.doActionJump) || this.doAction == $bind(this,this.doActionJumpShoot)) this.hasDoubleJump = true;
		com.isartdigital.utils.sounds.SoundManager.playSound("jump");
		this.setState("jump");
		this.friction.set(0.95,0.95);
		this.impulseCounter = 0;
		this.doAction = $bind(this,this.doActionJump);
		this.anim.animationSpeed = 0.5;
	}
	,setModeFall: function() {
		this.jumpToleranceCounter = 0;
		this.setState("fall");
		this.friction.set(0.95,0.95);
		this.doAction = $bind(this,this.doActionFall);
		this.anim.animationSpeed = 0.5;
	}
	,setModeReception: function() {
		this.hasDoubleJump = false;
		this.setState("reception");
		com.isartdigital.utils.sounds.SoundManager.playSound("reception");
		this.friction.set(0.5,0);
		this.doAction = $bind(this,this.doActionReception);
		this.anim.animationSpeed = 0.5;
	}
	,setModeDeath: function() {
		this.setState("hurt");
		this.anim.animationSpeed = 0.5;
		com.isartdigital.utils.sounds.SoundManager.playSound("player_death");
		this.acceleration.set(0,-50);
		this.friction.set(1,1);
		this.doAction = $bind(this,this.doActionDeath);
	}
	,setModeWin: function() {
		this.godMode = true;
		if(this.canFall()) this.setModeFallWin(); else this.setModeDoWin();
	}
	,setModeDoWin: function() {
		this.setState("walk",true);
		this.acceleration.set(0,0);
		this.friction.set(1,1);
		this.doAction = $bind(this,this.doActionWin);
	}
	,setModeFallWin: function() {
		this.setState("fall");
		this.friction.set(0.95,0.95);
		this.anim.animationSpeed = 0.5;
		this.doAction = $bind(this,this.doActionFallWin);
	}
	,doActionFallWin: function() {
		this.acceleration.y += this.gravity;
		this.move();
		if(this.hitFloor()) this.setModeDoWin();
	}
	,doActionWin: function() {
		this.acceleration.set(16,0);
		this.doActionFallWin();
		this.flipRight();
		if(this.cptWin++ >= 60) this.x += this.acceleration.x;
	}
	,stop: function() {
		this.doAction = $bind(this,this.doActionVoid);
	}
	,setModeWaitShoot: function(currentFrame) {
		if(currentFrame == null) currentFrame = 0;
		if((function($this) {
			var $r;
			var b = $this.anim.totalFrames;
			$r = (function($this) {
				var $r;
				var aNeg = b < 0;
				var bNeg = currentFrame < 0;
				$r = aNeg != bNeg?aNeg:b >= currentFrame;
				return $r;
			}($this));
			return $r;
		}(this))) {
			this.setState("waitShoot");
			this.anim.gotoAndPlay(currentFrame);
			this.doAction = $bind(this,this.doActionWaitShoot);
		} else this.setModeNormal();
		this.anim.animationSpeed = 0.5;
	}
	,setModeWalkShoot: function(currentFrame) {
		if(currentFrame == null) currentFrame = 0;
		if((function($this) {
			var $r;
			var b = $this.anim.totalFrames;
			$r = (function($this) {
				var $r;
				var aNeg = b < 0;
				var bNeg = currentFrame < 0;
				$r = aNeg != bNeg?aNeg:b >= currentFrame;
				return $r;
			}($this));
			return $r;
		}(this))) {
			this.setState("walkShoot");
			this.anim.gotoAndPlay(currentFrame);
			this.doAction = $bind(this,this.doActionWalkShoot);
		} else this.setModeWalk();
		this.anim.animationSpeed = 0.75;
	}
	,setModeJumpShoot: function(currentFrame) {
		if(currentFrame == null) currentFrame = 0;
		if(this.doAction == $bind(this,this.doActionFall) || this.doAction == $bind(this,this.doActionJump) || this.doAction == $bind(this,this.doActionJumpShoot)) this.hasDoubleJump = true;
		if((function($this) {
			var $r;
			var b = $this.anim.totalFrames;
			$r = (function($this) {
				var $r;
				var aNeg = b < 0;
				var bNeg = currentFrame < 0;
				$r = aNeg != bNeg?aNeg:b >= currentFrame;
				return $r;
			}($this));
			return $r;
		}(this))) {
			this.setState("jumpShoot");
			this.anim.gotoAndPlay(currentFrame);
			this.doAction = $bind(this,this.doActionJumpShoot);
		} else {
			this.setState("jump");
			this.doAction = $bind(this,this.doActionJump);
		}
		this.anim.animationSpeed = 0.5;
	}
	,setModeFallShoot: function(currentFrame) {
		if(currentFrame == null) currentFrame = 0;
		this.friction.set(0.95,0.95);
		this.jumpToleranceCounter = 0;
		if((function($this) {
			var $r;
			var b = $this.anim.totalFrames;
			$r = (function($this) {
				var $r;
				var aNeg = b < 0;
				var bNeg = currentFrame < 0;
				$r = aNeg != bNeg?aNeg:b >= currentFrame;
				return $r;
			}($this));
			return $r;
		}(this))) {
			this.setState("fallShoot");
			this.anim.gotoAndPlay(currentFrame);
			this.doAction = $bind(this,this.doActionFallShoot);
		} else this.setModeFall();
		this.anim.animationSpeed = 0.5;
	}
	,setModeReceptionShoot: function(currentFrame) {
		if(currentFrame == null) currentFrame = 0;
		if((function($this) {
			var $r;
			var b = $this.anim.totalFrames;
			$r = (function($this) {
				var $r;
				var aNeg = b < 0;
				var bNeg = currentFrame < 0;
				$r = aNeg != bNeg?aNeg:b >= currentFrame;
				return $r;
			}($this));
			return $r;
		}(this))) {
			this.hasDoubleJump = false;
			this.friction.set(0.5,0);
			this.setState("receptionShoot");
			this.anim.gotoAndPlay(currentFrame);
			this.doAction = $bind(this,this.doActionReceptionShoot);
			com.isartdigital.utils.sounds.SoundManager.playSound("reception");
		} else this.setModeReception();
		this.anim.animationSpeed = 0.5;
	}
	,doActionWaitShoot: function() {
		if(this.controller.get_left() && !this.controller.get_right() && this.canLeft(this.getLeftCan()) || this.controller.get_right() && !this.controller.get_left() && this.canRight(this.getRightCan())) this.setModeWalkShoot(this.anim.currentFrame); else if(this.canJump()) this.setModeJump(); else if(this.canFall()) this.setModeFallShoot(this.anim.currentFrame);
		this.actionShoot($bind(this,this.setModeWaitShoot));
		this.lastJump = this.controller.get_jump();
		if(this.isAnimEnd) this.setModeNormal();
		this.checkInvulnerableCount();
		if(this.dead) this.setModeDeath();
	}
	,doActionWalkShoot: function() {
		this.actionMove();
		this.move();
		this.actionCollisionMove();
		this.actionShoot($bind(this,this.setModeWalkShoot));
		if(this.canJump()) this.setModeJump(); else if(this.canFall()) {
			this.setModeFallShoot(this.anim.currentFrame);
			this.jumpToleranceCounter = 8;
		} else if(Math.abs(this.speed.x) < 1 && Math.abs(this.speed.y) < 1) this.setModeWaitShoot(this.anim.currentFrame);
		this.lastJump = this.controller.get_jump();
		if(this.isAnimEnd) this.setModeWalk();
		this.checkInvulnerableCount();
		if(this.dead) this.setModeDeath();
	}
	,doActionJumpShoot: function() {
		this.actionMove();
		if((function($this) {
			var $r;
			var a = $this.impulseCounter++;
			$r = (function($this) {
				var $r;
				var aNeg = 2 < 0;
				var bNeg = a < 0;
				$r = aNeg != bNeg?aNeg:2 > a;
				return $r;
			}($this));
			return $r;
		}(this))) this.acceleration.y = -50;
		if(!this.controller.get_jump()) this.impulseCounter = 2;
		this.actionShoot($bind(this,this.setModeJumpShoot));
		this.acceleration.y += this.gravity;
		this.move();
		this.actionCollisionMove();
		if(this.canDoubleJump()) this.setModeJumpShoot(this.anim.currentFrame); else if(this.speed.y >= 0) this.setModeFallShoot(this.anim.currentFrame); else if(this.hitCeil(this.getTop())) {
			this.speed.y = 0;
			this.setModeFallShoot(this.anim.currentFrame);
		}
		this.lastJump = this.controller.get_jump();
		if(this.isAnimEnd) {
			this.setState("jump");
			this.doAction = $bind(this,this.doActionJump);
		}
		this.checkInvulnerableCount();
		if(this.dead) this.setModeDeath();
	}
	,doActionFallShoot: function() {
		this.actionMove();
		this.acceleration.y += this.gravity;
		this.move();
		this.actionShoot($bind(this,this.setModeFallShoot));
		if(this.canDoubleJump() || this.canJumpTolerance()) this.setModeJumpShoot(this.anim.currentFrame);
		this.actionCollisionMove();
		if(this.hitFloor()) this.setModeReceptionShoot(this.anim.currentFrame);
		this.lastJump = this.controller.get_jump();
		if(this.isAnimEnd) this.setModeFall();
		this.checkInvulnerableCount();
		if(this.dead) this.setModeDeath();
	}
	,doActionReceptionShoot: function() {
		this.actionMove();
		this.actionShoot($bind(this,this.setModeReceptionShoot));
		this.move();
		if(this.isAnimEnd) {
			if(Math.abs(this.speed.x) < 1) this.setModeWaitShoot(this.anim.currentFrame); else this.setModeWalkShoot(this.anim.currentFrame);
		}
		if(this.isAnimEnd) this.setModeReception();
		this.checkInvulnerableCount();
		if(this.dead) this.setModeDeath();
	}
	,doActionNormal: function() {
		if(this.controller.get_left() && !this.controller.get_right() && this.canLeft(this.getLeftCan()) || this.controller.get_right() && !this.controller.get_left() && this.canRight(this.getRightCan())) this.setModeWalk(); else if(this.canJump()) this.setModeJump(); else if(this.canFall() && !com.isartdigital.plateformer.game.GameManager.getInstance().playerOutOfScreen()) this.setModeFall();
		this.lastJump = this.controller.get_jump();
		this.actionShoot($bind(this,this.setModeWaitShoot));
		this.checkInvulnerableCount();
		if(this.dead) this.setModeDeath();
	}
	,doActionWalk: function() {
		this.actionMove();
		this.move();
		this.actionCollisionMove();
		if(this.canJump()) this.setModeJump(); else if(this.canFall()) {
			this.setModeFall();
			this.jumpToleranceCounter = 8;
		} else if(Math.abs(this.speed.x) < 1 && Math.abs(this.speed.y) < 1) this.setModeNormal();
		this.lastJump = this.controller.get_jump();
		this.actionShoot($bind(this,this.setModeWalkShoot));
		this.checkInvulnerableCount();
		if(this.dead) this.setModeDeath();
	}
	,doActionJump: function() {
		this.actionMove();
		if((function($this) {
			var $r;
			var a = $this.impulseCounter++;
			$r = (function($this) {
				var $r;
				var aNeg = 2 < 0;
				var bNeg = a < 0;
				$r = aNeg != bNeg?aNeg:2 > a;
				return $r;
			}($this));
			return $r;
		}(this))) this.acceleration.y = -50;
		if(!this.controller.get_jump()) this.impulseCounter = 2;
		this.acceleration.y += this.gravity;
		this.move();
		this.actionCollisionMove();
		if(this.canDoubleJump()) this.setModeJump(); else if(this.speed.y >= 0) this.setModeFall(); else if(this.hitCeil(this.getTop())) {
			this.speed.y = 0;
			this.setModeFall();
		}
		this.lastJump = this.controller.get_jump();
		this.actionShoot($bind(this,this.setModeJumpShoot));
		this.checkInvulnerableCount();
		if(this.dead) this.setModeDeath();
	}
	,doActionFall: function() {
		this.actionMove();
		this.acceleration.y += this.gravity;
		this.move();
		if(this.canDoubleJump() || this.canJumpTolerance()) this.setModeJump();
		this.actionCollisionMove();
		if(this.hitFloor()) this.setModeReception();
		this.lastJump = this.controller.get_jump();
		this.actionShoot($bind(this,this.setModeFallShoot));
		this.checkInvulnerableCount();
		if(this.dead) this.setModeDeath();
	}
	,doActionReception: function() {
		this.actionMove();
		this.move();
		if(this.isAnimEnd) {
			if(Math.abs(this.speed.x) < 1) this.setModeNormal(); else this.setModeWalk();
		}
		this.actionShoot($bind(this,this.setModeReceptionShoot));
		this.checkInvulnerableCount();
		if(this.dead) this.setModeDeath();
	}
	,doActionDeath: function() {
		if(com.isartdigital.plateformer.Main.getInstance().frames % 3 == 0) this.visible = false; else this.visible = true;
	}
	,actionShoot: function(pSetMode) {
		this.cooldownCounter--;
		if(this.controller.get_fire()) {
			this.shootCounter++;
			if(this.shootCounter == 50 && this.hadSuperShoot) com.isartdigital.utils.sounds.SoundManager.playSound("super_shoot_charged");
		} else if(this.shootCounter >= 50) {
			this.createSuperShoot();
			this.shootCounter = 0;
			pSetMode();
		} else if(this.cooldownCounter <= 0 && this.shootCounter > 0) {
			this.cooldownCounter = 28;
			this.createShoot();
			this.shootCounter = 0;
			pSetMode();
		}
	}
	,actionMove: function() {
		if(this.controller.get_left() && !this.controller.get_right() && this.canLeft(this.getLeftCan())) {
			this.flipLeft();
			this.acceleration.x = -50;
		} else if(this.controller.get_right() && !this.controller.get_left() && this.canRight(this.getRightCan())) {
			this.flipRight();
			this.acceleration.x = 50;
		}
	}
	,actionCollisionMove: function() {
		if(this.moveRight()) {
			if(this.hitRight(this.getRight())) this.speed.x = 0;
		} else if(this.moveLeft()) {
			if(this.hitLeft(this.getLeft())) this.speed.x = 0;
		}
	}
	,onDestructibleDestroy: function(pDestructible) {
		if(this.floor == pDestructible) this.floor = null;
	}
	,hitFloor: function(pPoint) {
		if(pPoint == null) pPoint = this.getBottom();
		var lCollision = this.testPoint(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list,pPoint);
		if(lCollision == null) lCollision = this.testPoint(com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.list,pPoint);
		if(lCollision != null) {
			if(Type.getClass(lCollision) == com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic) this.takeDamage(); else {
				this.floor = js.Boot.__cast(lCollision , com.isartdigital.plateformer.game.utils.Immobile);
				this.y = this.floor.y + this.floor.get_hitBox().y;
				return true;
			}
		}
		return false;
	}
	,hitCeil: function(pPoint) {
		if(pPoint == null) pPoint = this.getTop();
		var lCollision = this.testPoint(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list,pPoint);
		if(lCollision != null) {
			if(Type.getClass(lCollision) == com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic) this.takeDamage(); else {
				this.y = lCollision.y + lCollision.get_hitBox().height + this.get_hitBox().height;
				return true;
			}
		}
		return false;
	}
	,takeDamage: function() {
		if(!this.shield && !this.godMode && this.invulnerableCount == null) {
			com.isartdigital.plateformer.game.GameManager.getInstance().set_lose(true);
			this.dead = true;
			this.floor = null;
			this.leftBlock = null;
			this.rightBlock = null;
		} else if(this.shield && !this.godMode) {
			this.shield = false;
			com.isartdigital.plateformer.game.sprites.mobile.Shield.getInstance().destroy();
			this.invulnerableCount++;
		}
	}
	,checkInvulnerableCount: function() {
		if(this.invulnerableCount != null) {
			this.invulnerableCount++;
			if(this.invulnerableCount % 5 == 0) this.removeChild(com.isartdigital.plateformer.game.sprites.mobile.Shield.getInstance()); else this.addChild(com.isartdigital.plateformer.game.sprites.mobile.Shield.getInstance());
			if(this.invulnerableCount == 50) this.invulnerableCount = null;
		}
	}
	,createShoot: function() {
		com.isartdigital.utils.sounds.SoundManager.playSound("player_shoot");
		var lShoot = new com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer(this.get_ShootDep().x,this.get_ShootDep().y,com.isartdigital.utils.MathUtils.getDirection(this.get_ShootDir(),this.get_ShootDep()));
		com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(lShoot);
		lShoot.start();
		lShoot.update();
	}
	,createSuperShoot: function() {
		if(!this.hadSuperShoot) this.createShoot(); else {
			var lSuperShoot = new com.isartdigital.plateformer.game.sprites.mobile.shoots.SuperShootPlayer(this.get_ShootDep().x,this.get_ShootDep().y,com.isartdigital.utils.MathUtils.getDirection(this.get_ShootDir(),this.get_ShootDep()));
			com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(lSuperShoot);
			com.isartdigital.utils.sounds.SoundManager.playSound("player_super_shoot");
			lSuperShoot.start();
			lSuperShoot.update();
		}
	}
	,checkShield: function() {
		if(!this.hadShield) return;
		if(this.cptCollectables == 10) {
			this.addChild(com.isartdigital.plateformer.game.sprites.mobile.Shield.getInstance());
			com.isartdigital.plateformer.game.sprites.mobile.Shield.getInstance().start();
			this.shield = true;
			this.cptCollectables = 0;
		}
	}
	,destroy: function() {
		this.controller.destroy();
		com.isartdigital.plateformer.game.utils.Mobile.prototype.destroy.call(this);
		com.isartdigital.plateformer.game.sprites.mobile.Player.instance = null;
	}
	,addPowerUp: function(pPowerUpName) {
		if(pPowerUpName == "Double Jump") this.hadDoubleJump = true; else if(pPowerUpName == "Super Shoot") this.hadSuperShoot = true; else if(pPowerUpName == "Magnet") this.hadMagnet = true; else if(pPowerUpName == "Shield") this.hadShield = true;
	}
	,hasMagnet: function() {
		return this.hadMagnet;
	}
	,__class__: com.isartdigital.plateformer.game.sprites.mobile.Player
});
com.isartdigital.plateformer.game.sprites.mobile.Shield = function() {
	com.isartdigital.plateformer.game.utils.Mobile.call(this);
	this.x = 0;
	this.y = -100;
};
$hxClasses["com.isartdigital.plateformer.game.sprites.mobile.Shield"] = com.isartdigital.plateformer.game.sprites.mobile.Shield;
com.isartdigital.plateformer.game.sprites.mobile.Shield.__name__ = ["com","isartdigital","plateformer","game","sprites","mobile","Shield"];
com.isartdigital.plateformer.game.sprites.mobile.Shield.getInstance = function() {
	if(com.isartdigital.plateformer.game.sprites.mobile.Shield.instance == null) com.isartdigital.plateformer.game.sprites.mobile.Shield.instance = new com.isartdigital.plateformer.game.sprites.mobile.Shield();
	return com.isartdigital.plateformer.game.sprites.mobile.Shield.instance;
};
com.isartdigital.plateformer.game.sprites.mobile.Shield.__super__ = com.isartdigital.plateformer.game.utils.Mobile;
com.isartdigital.plateformer.game.sprites.mobile.Shield.prototype = $extend(com.isartdigital.plateformer.game.utils.Mobile.prototype,{
	setModeNormal: function() {
		com.isartdigital.plateformer.game.utils.Mobile.prototype.setModeNormal.call(this);
		this.setState("begin",true);
	}
	,destroy: function() {
		com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().removeChild(this);
		com.isartdigital.plateformer.game.sprites.mobile.Shield.instance = null;
	}
	,__class__: com.isartdigital.plateformer.game.sprites.mobile.Shield
});
com.isartdigital.plateformer.game.sprites.mobile.Shoot = function(pX,pY,pDirection) {
	com.isartdigital.plateformer.game.utils.Mobile.call(this);
	this.maxHSpeed = 100;
	this.maxVSpeed = 100;
	this.x = pX;
	this.y = pY;
	this.boxType = com.isartdigital.utils.game.BoxType.SIMPLE;
	this.direction = pDirection;
	this.rotation = pDirection;
	this.setSpeed();
	com.isartdigital.plateformer.game.sprites.mobile.Shoot.list.push(this);
};
$hxClasses["com.isartdigital.plateformer.game.sprites.mobile.Shoot"] = com.isartdigital.plateformer.game.sprites.mobile.Shoot;
com.isartdigital.plateformer.game.sprites.mobile.Shoot.__name__ = ["com","isartdigital","plateformer","game","sprites","mobile","Shoot"];
com.isartdigital.plateformer.game.sprites.mobile.Shoot.__super__ = com.isartdigital.plateformer.game.utils.Mobile;
com.isartdigital.plateformer.game.sprites.mobile.Shoot.prototype = $extend(com.isartdigital.plateformer.game.utils.Mobile.prototype,{
	setModeNormal: function() {
		com.isartdigital.plateformer.game.utils.Mobile.prototype.setModeNormal.call(this);
		this.setState("begin");
		this.anim.play();
	}
	,setModeEnd: function() {
		this.setState("end");
		this.doAction = $bind(this,this.doActionEnd);
	}
	,doActionNormal: function() {
		this.move();
		this.hitTest(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list);
		if(this.parent != null) {
			if(this.hitPlayer()) this.onPlayerHit();
		}
		if(this.parent != null) this.exitTest();
	}
	,onPlayerHit: function() {
		com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().takeDamage();
		this.setModeEnd();
	}
	,doActionEnd: function() {
		if(this.isAnimEnd) this.destroy();
	}
	,hitPlayer: function() {
		if(com.isartdigital.utils.game.CollisionManager.hitTestObject(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().get_hitBox(),this.get_hitBox())) return true;
		return false;
	}
	,hitTest: function(pList) {
		var i = pList.length;
		while(--i >= 0) if(com.isartdigital.utils.game.CollisionManager.hitTestObject((js.Boot.__cast(pList[i] , com.isartdigital.utils.game.StateGraphic)).get_hitBox(),this.get_hitBox())) {
			this.setModeEnd();
			break;
		}
	}
	,exitTest: function() {
		var lRect = com.isartdigital.plateformer.game.GameManager.getInstance().screenLimit;
		if(this.x >= lRect.width + lRect.x || this.y >= lRect.height + lRect.y || this.x <= lRect.x || this.y <= lRect.y) this.destroy();
	}
	,setSpeed: function() {
	}
	,destroy: function() {
		com.isartdigital.plateformer.game.sprites.mobile.Shoot.list.splice(HxOverrides.indexOf(com.isartdigital.plateformer.game.sprites.mobile.Shoot.list,this,0),1);
		com.isartdigital.plateformer.game.utils.Mobile.prototype.destroy.call(this);
	}
	,__class__: com.isartdigital.plateformer.game.sprites.mobile.Shoot
});
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath = {};
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.KillZoneDynamic = function() {
	com.isartdigital.plateformer.game.sprites.mobile.MobilePath.call(this);
	this.accelerationNormal = 5;
};
$hxClasses["com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.KillZoneDynamic"] = com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.KillZoneDynamic;
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.KillZoneDynamic.__name__ = ["com","isartdigital","plateformer","game","sprites","mobile","mobilesPath","KillZoneDynamic"];
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.KillZoneDynamic.__super__ = com.isartdigital.plateformer.game.sprites.mobile.MobilePath;
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.KillZoneDynamic.prototype = $extend(com.isartdigital.plateformer.game.sprites.mobile.MobilePath.prototype,{
	setModeNormal: function() {
		com.isartdigital.plateformer.game.sprites.mobile.MobilePath.prototype.setModeNormal.call(this);
		if(this.pathStartY != 0 && this.pathEndY != 0) this.acceleration.set(0,this.accelerationNormal); else if(this.pathEndX != 0 && this.pathStartX != 0) this.acceleration.set(this.accelerationNormal,0);
		this.friction.set(1,1);
		this.setState("");
	}
	,move: function() {
		this.x += this.acceleration.x;
		this.y += this.acceleration.y;
	}
	,doActionNormal: function() {
		this.move();
		this.checkLimitsPath();
		this.checkHitPlayer();
	}
	,flipUp: function() {
		this.acceleration.y = -this.accelerationNormal;
	}
	,flipDown: function() {
		this.acceleration.y = this.accelerationNormal;
	}
	,flipLeft: function() {
		this.acceleration.x = -this.accelerationNormal;
	}
	,flipRight: function() {
		this.acceleration.x = this.accelerationNormal;
	}
	,__class__: com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.KillZoneDynamic
});
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies = {};
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyBomb = function() {
	this.distanceAttack = 400;
	this.accelerationGround = 5;
	this.rayonExplosion = 250;
	this.explosionDelay = 50;
	com.isartdigital.plateformer.game.sprites.mobile.Enemy.call(this);
	this.detectionDist = 750;
};
$hxClasses["com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyBomb"] = com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyBomb;
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyBomb.__name__ = ["com","isartdigital","plateformer","game","sprites","mobile","mobilesPath","enemies","EnemyBomb"];
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyBomb.__super__ = com.isartdigital.plateformer.game.sprites.mobile.Enemy;
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyBomb.prototype = $extend(com.isartdigital.plateformer.game.sprites.mobile.Enemy.prototype,{
	doActionNormal: function() {
		com.isartdigital.plateformer.game.sprites.mobile.Enemy.prototype.doActionNormal.call(this);
		if(com.isartdigital.utils.MathUtils.getDistance(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().position,this.position) <= this.detectionDist) this.setModeWalk();
	}
	,doActionWalk: function() {
		com.isartdigital.plateformer.game.sprites.mobile.Enemy.prototype.doActionWalk.call(this);
		if(com.isartdigital.utils.MathUtils.getDistance(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().position,this.position) <= this.distanceAttack) this.setModeAttack();
	}
	,doActionAttack: function() {
		if(this.explosionDelay-- <= 0) this.explode();
	}
	,onShootPlayerCollision: function(shootPlayer) {
		if(Type.getClass(shootPlayer) == com.isartdigital.plateformer.game.sprites.mobile.shoots.SuperShootPlayer) {
			this.explode();
			shootPlayer.destroy();
		} else shootPlayer.reverseDirection();
	}
	,getHitBoxExplosion: function() {
		return this.box.getChildByName("mcExplosion");
	}
	,setModeWalk: function() {
		com.isartdigital.plateformer.game.sprites.mobile.Enemy.prototype.setModeWalk.call(this);
		if(this.scream) {
			com.isartdigital.utils.sounds.SoundManager.playSound("enemy_walk_spot");
			this.scream = false;
		}
	}
	,explode: function() {
		var i = com.isartdigital.plateformer.game.sprites.immobile.decors.Destructible.list.length;
		while(--i >= 0) if(com.isartdigital.utils.game.CollisionManager.hitTestObject(com.isartdigital.plateformer.game.sprites.immobile.decors.Destructible.list[i].get_hitBox(),this.getHitBoxExplosion())) com.isartdigital.plateformer.game.sprites.immobile.decors.Destructible.list[i].onEnemyBomb();
		if(com.isartdigital.utils.game.CollisionManager.hitTestObject(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().get_hitBox(),this.getHitBoxExplosion())) com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().takeDamage();
		com.isartdigital.plateformer.game.GameManager.getInstance().saveForRetry(this.spawnerInfo);
		com.isartdigital.utils.sounds.SoundManager.playSound("explosion_bomb");
		this.destroy();
	}
	,__class__: com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyBomb
});
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyFire = function() {
	com.isartdigital.plateformer.game.sprites.mobile.Enemy.call(this);
	this.detectionDist = 2000;
	this.cptEnd = 80;
	this.accelerationNormal = 6;
	this.acceleration.set(this.accelerationNormal,0);
};
$hxClasses["com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyFire"] = com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyFire;
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyFire.__name__ = ["com","isartdigital","plateformer","game","sprites","mobile","mobilesPath","enemies","EnemyFire"];
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyFire.__super__ = com.isartdigital.plateformer.game.sprites.mobile.Enemy;
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyFire.prototype = $extend(com.isartdigital.plateformer.game.sprites.mobile.Enemy.prototype,{
	setLife: function() {
		this.life = 4;
	}
	,get_ShootDep: function() {
		return com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().toLocal(this.box.toGlobal(this.box.getChildByName("mcShootEnemyDep").position));
	}
	,get_ShootDir: function() {
		if(this.scale.x > 0) this.dirShoot = 10; else if(this.scale.x < 0) this.dirShoot = -10;
		return com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().toLocal(this.box.toGlobal(new PIXI.Point((function($this) {
			var $r;
			var $int = $this.dirShoot;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}(this)) + this.box.getChildByName("mcShootEnemyDep").x,this.box.getChildByName("mcShootEnemyDep").y)));
	}
	,setModeWalkAttack: function() {
		this.setState("waitShoot");
		this.doAction = $bind(this,this.doActionWalkAttack);
		this.friction.set(this.frictionGround,1);
	}
	,doActionNormal: function() {
		this.checkHitPlayer();
		com.isartdigital.plateformer.game.sprites.mobile.Enemy.prototype.doActionNormal.call(this);
		if(com.isartdigital.utils.MathUtils.getDistance(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().position,this.position) <= this.detectionDist) this.setModeWalk();
	}
	,doActionHurt: function() {
		com.isartdigital.plateformer.game.sprites.mobile.Enemy.prototype.setModeHurt.call(this);
		this.cpt++;
		if(this.cpt >= this.cptEnd) {
			this.createShoot();
			this.cpt = 0;
		}
	}
	,doActionWalk: function() {
		com.isartdigital.plateformer.game.sprites.mobile.Enemy.prototype.doActionWalk.call(this);
		this.checkHitPlayer();
		if(this.isInScreen()) this.cpt++;
		if(this.cpt >= this.cptEnd) {
			this.setModeWalkAttack();
			this.cpt = 0;
		}
		this.playerIsThere();
	}
	,doActionWalkAttack: function() {
		if(this.isInScreen()) this.createShoot();
		if(this.isAnimEnd) this.setModeNormal();
	}
	,createShoot: function() {
		var lShoot = new com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyFire(this.get_ShootDep().x,this.get_ShootDep().y,com.isartdigital.utils.MathUtils.getDirection(this.get_ShootDir(),this.get_ShootDep()));
		com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(lShoot);
		lShoot.start();
		lShoot.update();
		this.setModeWalk();
		com.isartdigital.utils.sounds.SoundManager.playSound("enemy_shoot");
	}
	,setModeWalk: function() {
		com.isartdigital.plateformer.game.sprites.mobile.Enemy.prototype.setModeWalk.call(this);
		if(this.scream) {
			com.isartdigital.utils.sounds.SoundManager.playSound("enemy_shoot_spot");
			this.scream = false;
		}
	}
	,setModeHurt: function() {
		com.isartdigital.plateformer.game.sprites.mobile.Enemy.prototype.setModeHurt.call(this);
		this.doRotation();
	}
	,doRotation: function() {
		if(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().position.x >= this.position.x && this.scale.x == -1) this.scale.x = 1; else if(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().position.x <= this.position.x && this.scale.x == 1) this.scale.x = -1;
	}
	,__class__: com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyFire
});
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemySpeed = function() {
	com.isartdigital.plateformer.game.sprites.mobile.Enemy.call(this);
	this.detectionDist = 2000;
};
$hxClasses["com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemySpeed"] = com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemySpeed;
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemySpeed.__name__ = ["com","isartdigital","plateformer","game","sprites","mobile","mobilesPath","enemies","EnemySpeed"];
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemySpeed.__super__ = com.isartdigital.plateformer.game.sprites.mobile.Enemy;
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemySpeed.prototype = $extend(com.isartdigital.plateformer.game.sprites.mobile.Enemy.prototype,{
	setLife: function() {
		this.life = 2;
	}
	,doActionNormal: function() {
		if(com.isartdigital.utils.MathUtils.getDistance(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().position,this.position) <= this.detectionDist) this.setModeWalk();
		com.isartdigital.plateformer.game.sprites.mobile.Enemy.prototype.doActionNormal.call(this);
	}
	,setModeWalk: function() {
		com.isartdigital.plateformer.game.sprites.mobile.Enemy.prototype.setModeWalk.call(this);
		if(this.scream) {
			com.isartdigital.utils.sounds.SoundManager.playSound("enemy_walk_spot");
			this.scream = false;
		}
	}
	,doActionWalk: function() {
		com.isartdigital.plateformer.game.sprites.mobile.Enemy.prototype.doActionWalk.call(this);
		if(com.isartdigital.utils.MathUtils.getDistance(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().position,this.position) >= this.detectionDist) this.setModeNormal();
		this.checkHitPlayer();
	}
	,__class__: com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemySpeed
});
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyTurret = function() {
	this.cptShootLaunch = 20;
	this.cptShoot = 0;
	com.isartdigital.plateformer.game.sprites.mobile.Enemy.call(this);
	this.detectionDist = 1800;
};
$hxClasses["com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyTurret"] = com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyTurret;
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyTurret.__name__ = ["com","isartdigital","plateformer","game","sprites","mobile","mobilesPath","enemies","EnemyTurret"];
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyTurret.__super__ = com.isartdigital.plateformer.game.sprites.mobile.Enemy;
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyTurret.prototype = $extend(com.isartdigital.plateformer.game.sprites.mobile.Enemy.prototype,{
	setModeAttack: function() {
		this.setState("wait");
		if(this.scream) {
			com.isartdigital.utils.sounds.SoundManager.playSound("enemy_walk_spot");
			this.scream = false;
		}
		this.doAction = $bind(this,this.doActionAttack);
		this.anim.loop = true;
		this.anim.animationSpeed = 0.3;
	}
	,doActionNormal: function() {
		com.isartdigital.plateformer.game.sprites.mobile.Enemy.prototype.doActionNormal.call(this);
		if(com.isartdigital.utils.MathUtils.getDistance(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().position,this.position) <= this.detectionDist) this.setModeAttack();
	}
	,doActionAttack: function() {
		this.checkHitPlayer();
		this.cpt++;
		if(this.cpt == this.cptEnd) {
			this.setModeShoot();
			this.cpt = 0;
		}
		if(com.isartdigital.utils.MathUtils.getDistance(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().position,this.position) >= this.detectionDist) this.setModeNormal();
		this.checkBulletHit();
	}
	,doRotation: function() {
		if(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().position.x <= this.position.x && this.scale.x == -1) this.scale.x = 1; else if(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().position.x >= this.position.x && this.scale.x == 1) this.scale.x = -1;
	}
	,setModeShoot: function() {
		this.doAction = $bind(this,this.doActionShoot);
		this.setState("waitShoot");
	}
	,doActionShoot: function() {
		this.doRotation();
		this.cptShoot++;
		if(this.cptShoot == this.cptShootLaunch) this.createShoot();
		if(this.isAnimEnd) {
			this.setModeAttack();
			this.cptShoot = 0;
		}
		this.playerIsThere();
		if(!this.isInScreen()) this.setModeNormal();
		this.checkBulletHit();
		this.checkHitPlayer();
	}
	,createShoot: function() {
		var lShoot = new com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyTurret(this.x,this.y - this.height / 2,com.isartdigital.utils.MathUtils.getDirection(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().position,this.position));
		com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(lShoot);
		lShoot.start();
	}
	,__class__: com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyTurret
});
com.isartdigital.plateformer.game.sprites.mobile.shoots = {};
com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyFire = function(pX,pY,pDirection) {
	com.isartdigital.plateformer.game.sprites.mobile.Shoot.call(this,pX,pY,pDirection);
};
$hxClasses["com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyFire"] = com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyFire;
com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyFire.__name__ = ["com","isartdigital","plateformer","game","sprites","mobile","shoots","ShootEnemyFire"];
com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyFire.__super__ = com.isartdigital.plateformer.game.sprites.mobile.Shoot;
com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyFire.prototype = $extend(com.isartdigital.plateformer.game.sprites.mobile.Shoot.prototype,{
	setSpeed: function() {
		if(this.direction > 0) this.speed.x -= com.isartdigital.plateformer.game.sprites.mobile.Shoot.SHOOT_SPEED / 2; else if(this.direction == 0) this.speed.x += com.isartdigital.plateformer.game.sprites.mobile.Shoot.SHOOT_SPEED / 2;
	}
	,__class__: com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyFire
});
com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyTurret = function(pX,pY,pDirection) {
	com.isartdigital.plateformer.game.sprites.mobile.Shoot.call(this,pX,pY,pDirection);
};
$hxClasses["com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyTurret"] = com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyTurret;
com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyTurret.__name__ = ["com","isartdigital","plateformer","game","sprites","mobile","shoots","ShootEnemyTurret"];
com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyTurret.__super__ = com.isartdigital.plateformer.game.sprites.mobile.Shoot;
com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyTurret.prototype = $extend(com.isartdigital.plateformer.game.sprites.mobile.Shoot.prototype,{
	hitTest: function(pList) {
	}
	,doActionNormal: function() {
		com.isartdigital.plateformer.game.sprites.mobile.Shoot.prototype.doActionNormal.call(this);
		this.rotation += 0.3;
	}
	,setSpeed: function() {
		this.speed.set(Math.cos(this.direction) * com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyTurret.SHOOT_SPEED_TURRET,Math.sin(this.direction) * com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyTurret.SHOOT_SPEED_TURRET);
	}
	,__class__: com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyTurret
});
com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer = function(pX,pY,pDirection) {
	this.friendly = true;
	this.damage = 1;
	com.isartdigital.plateformer.game.sprites.mobile.Shoot.call(this,pX,pY,pDirection);
	com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer.list.push(this);
};
$hxClasses["com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer"] = com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer;
com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer.__name__ = ["com","isartdigital","plateformer","game","sprites","mobile","shoots","ShootPlayer"];
com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer.__super__ = com.isartdigital.plateformer.game.sprites.mobile.Shoot;
com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer.prototype = $extend(com.isartdigital.plateformer.game.sprites.mobile.Shoot.prototype,{
	setSpeed: function() {
		if(this.direction > 0) this.speed.x -= com.isartdigital.plateformer.game.sprites.mobile.Shoot.SHOOT_SPEED; else if(this.direction == 0) this.speed.x += com.isartdigital.plateformer.game.sprites.mobile.Shoot.SHOOT_SPEED;
	}
	,onPlayerHit: function() {
		if(!this.friendly) {
			com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().takeDamage();
			this.setModeEnd();
		}
	}
	,reverseDirection: function() {
		if(this.friendly) {
			this.speed.x *= -0.5;
			this.scale.x *= -1;
			this.friendly = false;
		}
	}
	,destroy: function() {
		com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer.list.splice(HxOverrides.indexOf(com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer.list,this,0),1);
		com.isartdigital.plateformer.game.sprites.mobile.Shoot.prototype.destroy.call(this);
	}
	,__class__: com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer
});
com.isartdigital.plateformer.game.sprites.mobile.shoots.SuperShootPlayer = function(pX,pY,pDirection) {
	com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer.call(this,pX,pY,pDirection);
	this.damage = 2;
};
$hxClasses["com.isartdigital.plateformer.game.sprites.mobile.shoots.SuperShootPlayer"] = com.isartdigital.plateformer.game.sprites.mobile.shoots.SuperShootPlayer;
com.isartdigital.plateformer.game.sprites.mobile.shoots.SuperShootPlayer.__name__ = ["com","isartdigital","plateformer","game","sprites","mobile","shoots","SuperShootPlayer"];
com.isartdigital.plateformer.game.sprites.mobile.shoots.SuperShootPlayer.__super__ = com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer;
com.isartdigital.plateformer.game.sprites.mobile.shoots.SuperShootPlayer.prototype = $extend(com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer.prototype,{
	doActionNormal: function() {
		this.move();
		this.hitDestructibleTest(com.isartdigital.plateformer.game.sprites.immobile.decors.Destructible.list);
		if(this.parent != null) {
			this.hitTest(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list);
			this.exitTest();
		}
	}
	,hitDestructibleTest: function(pList) {
		var i = pList.length;
		while(--i >= 0) if(com.isartdigital.utils.game.CollisionManager.hitTestObject(pList[i].get_hitBox(),this.get_hitBox())) {
			com.isartdigital.plateformer.game.GameManager.getInstance().saveForRetry(pList[i].spawnerInfo);
			pList[i].destroy();
			this.setModeEnd();
			break;
		}
	}
	,setModeEnd: function() {
		this.destroy();
	}
	,__class__: com.isartdigital.plateformer.game.sprites.mobile.shoots.SuperShootPlayer
});
com.isartdigital.plateformer.game.utils.Controller = function() {
};
$hxClasses["com.isartdigital.plateformer.game.utils.Controller"] = com.isartdigital.plateformer.game.utils.Controller;
com.isartdigital.plateformer.game.utils.Controller.__name__ = ["com","isartdigital","plateformer","game","utils","Controller"];
com.isartdigital.plateformer.game.utils.Controller.prototype = {
	get_left: function() {
		return false;
	}
	,get_right: function() {
		return false;
	}
	,get_fire: function() {
		return false;
	}
	,get_jump: function() {
		return false;
	}
	,destroy: function() {
	}
	,__class__: com.isartdigital.plateformer.game.utils.Controller
};
com.isartdigital.plateformer.game.utils.ControllerKeyboard = function() {
	this.inputs = new Array();
	com.isartdigital.plateformer.game.utils.Controller.call(this);
	window.addEventListener("keydown",$bind(this,this.onKeyDown));
	window.addEventListener("keyup",$bind(this,this.onKeyUp));
};
$hxClasses["com.isartdigital.plateformer.game.utils.ControllerKeyboard"] = com.isartdigital.plateformer.game.utils.ControllerKeyboard;
com.isartdigital.plateformer.game.utils.ControllerKeyboard.__name__ = ["com","isartdigital","plateformer","game","utils","ControllerKeyboard"];
com.isartdigital.plateformer.game.utils.ControllerKeyboard.__super__ = com.isartdigital.plateformer.game.utils.Controller;
com.isartdigital.plateformer.game.utils.ControllerKeyboard.prototype = $extend(com.isartdigital.plateformer.game.utils.Controller.prototype,{
	get_left: function() {
		if(this.inputs[37]) return true;
		return false;
	}
	,get_right: function() {
		if(this.inputs[39]) return true;
		return false;
	}
	,get_fire: function() {
		if(this.inputs[32]) return true;
		return false;
	}
	,get_jump: function() {
		if(this.inputs[38]) return true;
		return false;
	}
	,onKeyDown: function(pEvent) {
		this.inputs[pEvent.keyCode] = true;
	}
	,onKeyUp: function(pEvent) {
		this.inputs[pEvent.keyCode] = false;
	}
	,destroy: function() {
		window.removeEventListener("keydown",$bind(this,this.onKeyDown));
		window.removeEventListener("keyup",$bind(this,this.onKeyUp));
	}
	,__class__: com.isartdigital.plateformer.game.utils.ControllerKeyboard
});
com.isartdigital.plateformer.game.utils.ControllerTouch = function() {
	com.isartdigital.plateformer.game.utils.Controller.call(this);
	window.addEventListener("touchstart",$bind(this,this.onTouchStart));
	window.addEventListener("touchmove",$bind(this,this.updateButtons));
	window.addEventListener("touchend",$bind(this,this.onTouchEnd));
	this.btnFire = com.isartdigital.plateformer.ui.hud.Hud.getInstance().btnFire;
	this.btnJump = com.isartdigital.plateformer.ui.hud.Hud.getInstance().btnJump;
	this.btnLeft = com.isartdigital.plateformer.ui.hud.Hud.getInstance().btnLeft;
	this.btnRight = com.isartdigital.plateformer.ui.hud.Hud.getInstance().btnRight;
};
$hxClasses["com.isartdigital.plateformer.game.utils.ControllerTouch"] = com.isartdigital.plateformer.game.utils.ControllerTouch;
com.isartdigital.plateformer.game.utils.ControllerTouch.__name__ = ["com","isartdigital","plateformer","game","utils","ControllerTouch"];
com.isartdigital.plateformer.game.utils.ControllerTouch.__super__ = com.isartdigital.plateformer.game.utils.Controller;
com.isartdigital.plateformer.game.utils.ControllerTouch.prototype = $extend(com.isartdigital.plateformer.game.utils.Controller.prototype,{
	onTouchStart: function(pEvent) {
		var lEvent;
		lEvent = js.Boot.__cast(pEvent , TouchEvent);
		var changedTouches = lEvent.changedTouches;
		var _g = 0;
		while(_g < changedTouches.length) {
			var touch = changedTouches[_g];
			++_g;
			if(this.hitScreenPartLeft(touch)) {
				com.isartdigital.plateformer.ui.hud.Hud.getInstance().setBtnMovePos(new PIXI.Point(touch.clientX / com.isartdigital.utils.game.GameStage.getInstance().ratioResize,touch.clientY / com.isartdigital.utils.game.GameStage.getInstance().ratioResize));
				com.isartdigital.plateformer.ui.hud.Hud.getInstance().showButtonMove();
			} else if(this.hitScreenPartRight(touch)) {
				com.isartdigital.plateformer.ui.hud.Hud.getInstance().setBtnActionPos(new PIXI.Point(touch.clientX / com.isartdigital.utils.game.GameStage.getInstance().ratioResize,touch.clientY / com.isartdigital.utils.game.GameStage.getInstance().ratioResize));
				com.isartdigital.plateformer.ui.hud.Hud.getInstance().showButtonAction();
			}
		}
		this.updateButtons(pEvent);
	}
	,onTouchEnd: function(pEvent) {
		var lEvent;
		lEvent = js.Boot.__cast(pEvent , TouchEvent);
		var changedTouches = lEvent.touches;
		var leftScreenPartTouched = false;
		var rightScreenPartTouched = false;
		var _g = 0;
		while(_g < changedTouches.length) {
			var touch = changedTouches[_g];
			++_g;
			if(this.hitScreenPartLeft(touch)) leftScreenPartTouched = true;
			if(this.hitScreenPartRight(touch)) rightScreenPartTouched = true;
		}
		if(!leftScreenPartTouched) com.isartdigital.plateformer.ui.hud.Hud.getInstance().hideButtonMove();
		if(!rightScreenPartTouched) com.isartdigital.plateformer.ui.hud.Hud.getInstance().hideButtonAction();
		this.updateButtons(pEvent);
	}
	,updateButtons: function(pEvent) {
		var lEvent;
		lEvent = js.Boot.__cast(pEvent , TouchEvent);
		var changedTouches = lEvent.touches;
		var downedFire = false;
		var downedJump = false;
		var downedLeft = false;
		var downedRight = false;
		var _g = 0;
		while(_g < changedTouches.length) {
			var touch = changedTouches[_g];
			++_g;
			if(this.hitBtnLeft(touch)) downedLeft = true;
			if(this.hitBtnRight(touch)) downedRight = true;
			if(this.hitBtnJump(touch)) downedJump = true;
			if(this.hitBtnFire(touch)) downedFire = true;
		}
		if(downedLeft) this.btnLeft.mouseover(null); else this.btnLeft.mouseout(null);
		if(downedRight) this.btnRight.mouseover(null); else this.btnRight.mouseout(null);
		if(downedFire) this.btnFire.mouseover(null); else this.btnFire.mouseout(null);
		if(downedJump) this.btnJump.mouseover(null); else this.btnJump.mouseout(null);
	}
	,hitScreenPartLeft: function(touch) {
		return touch.clientX < (function($this) {
			var $r;
			var a = com.isartdigital.utils.system.DeviceCapabilities.get_width();
			$r = (function($this) {
				var $r;
				var $int = a;
				$r = $int < 0?4294967296.0 + $int:$int + 0.0;
				return $r;
			}($this)) / (function($this) {
				var $r;
				var int1 = 2;
				$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
				return $r;
			}($this));
			return $r;
		}(this));
	}
	,hitScreenPartRight: function(touch) {
		return touch.clientX > (function($this) {
			var $r;
			var a = com.isartdigital.utils.system.DeviceCapabilities.get_width();
			$r = (function($this) {
				var $r;
				var $int = a;
				$r = $int < 0?4294967296.0 + $int:$int + 0.0;
				return $r;
			}($this)) / (function($this) {
				var $r;
				var int1 = 2;
				$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
				return $r;
			}($this));
			return $r;
		}(this));
	}
	,hitBtnLeft: function(touch) {
		return com.isartdigital.utils.game.CollisionManager.hitTestPoint(this.btnLeft,new PIXI.Point(touch.clientX,touch.clientY));
	}
	,hitBtnRight: function(touch) {
		return com.isartdigital.utils.game.CollisionManager.hitTestPoint(this.btnRight,new PIXI.Point(touch.clientX,touch.clientY));
	}
	,hitBtnJump: function(touch) {
		return com.isartdigital.utils.game.CollisionManager.hitTestPoint(this.btnJump,new PIXI.Point(touch.clientX,touch.clientY));
	}
	,hitBtnFire: function(touch) {
		return com.isartdigital.utils.game.CollisionManager.hitTestPoint(this.btnFire,new PIXI.Point(touch.clientX,touch.clientY));
	}
	,get_left: function() {
		return this.btnLeft.stateButton == com.isartdigital.plateformer.ui.buttons.ButtonState.OVER;
	}
	,get_right: function() {
		return this.btnRight.stateButton == com.isartdigital.plateformer.ui.buttons.ButtonState.OVER;
	}
	,get_fire: function() {
		return this.btnFire.stateButton == com.isartdigital.plateformer.ui.buttons.ButtonState.OVER;
	}
	,get_jump: function() {
		return this.btnJump.stateButton == com.isartdigital.plateformer.ui.buttons.ButtonState.OVER;
	}
	,destroy: function() {
		window.removeEventListener("touchstart",$bind(this,this.onTouchStart));
		window.removeEventListener("touchmove",$bind(this,this.updateButtons));
		window.removeEventListener("touchend",$bind(this,this.onTouchEnd));
	}
	,__class__: com.isartdigital.plateformer.game.utils.ControllerTouch
});
com.isartdigital.plateformer.game.utils.DataPiecesLevel = function(pAllPieces,pIdLevel) {
	this.collectedPieces = new Array();
	this.allPieces = pAllPieces;
	this.idLevel = pIdLevel;
	this.loadCollectedPieces();
};
$hxClasses["com.isartdigital.plateformer.game.utils.DataPiecesLevel"] = com.isartdigital.plateformer.game.utils.DataPiecesLevel;
com.isartdigital.plateformer.game.utils.DataPiecesLevel.__name__ = ["com","isartdigital","plateformer","game","utils","DataPiecesLevel"];
com.isartdigital.plateformer.game.utils.DataPiecesLevel.prototype = {
	get_totalPieces: function() {
		return this.allPieces.length;
	}
	,get_nbCollectedPieces: function() {
		return this.collectedPieces.length;
	}
	,addPieces: function(pInstanceName) {
		com.isartdigital.utils.ArrayUtils.addIfAlone(pInstanceName,this.collectedPieces);
	}
	,save: function() {
		com.isartdigital.plateformer.game.utils.SaveManager.getInstance().saveCollectedPieces(this.idLevel,this.collectedPieces);
	}
	,removePieces: function(pInstanceName) {
		this.collectedPieces.splice(HxOverrides.indexOf(this.collectedPieces,pInstanceName,0),1);
	}
	,loadCollectedPieces: function() {
		this.collectedPieces = com.isartdigital.plateformer.game.utils.SaveManager.getInstance().getPiecesCollectedNames(this.idLevel);
		com.isartdigital.utils.ArrayUtils.cleanDouble(this.collectedPieces);
		com.isartdigital.utils.ArrayUtils.keepCommonValue(this.collectedPieces,this.allPieces);
	}
	,__class__: com.isartdigital.plateformer.game.utils.DataPiecesLevel
};
com.isartdigital.plateformer.game.utils.LevelGenerator = function(pId,pSpawners) {
	this.offSet = 1;
	this.objList = [];
	this.displayCell = null;
	this.backgroundY = null;
	this.sizeCell = 280;
	this.spawners = new Array();
	this.id = pId;
	var _g = 0;
	var _g1 = Reflect.fields(pSpawners);
	while(_g < _g1.length) {
		var spawnerName = _g1[_g];
		++_g;
		this.spawners.push(new com.isartdigital.plateformer.game.utils.Spawner(spawnerName,Reflect.field(pSpawners,spawnerName)));
	}
	this.displayCell = new PIXI.Rectangle(0,0,0,0);
};
$hxClasses["com.isartdigital.plateformer.game.utils.LevelGenerator"] = com.isartdigital.plateformer.game.utils.LevelGenerator;
com.isartdigital.plateformer.game.utils.LevelGenerator.__name__ = ["com","isartdigital","plateformer","game","utils","LevelGenerator"];
com.isartdigital.plateformer.game.utils.LevelGenerator.prototype = {
	getPieces: function() {
		var lPieces = new Array();
		var _g = 0;
		var _g1 = this.spawners;
		while(_g < _g1.length) {
			var lSpawner = _g1[_g];
			++_g;
			if(lSpawner.type == "Collectable") lPieces.push(lSpawner.instanceName);
		}
		return lPieces;
	}
	,getBackgroundY: function() {
		if(this.backgroundY != null) return this.backgroundY;
		var _g = 0;
		var _g1 = this.spawners;
		while(_g < _g1.length) {
			var lSpawner = _g1[_g];
			++_g;
			if(lSpawner.type == "Ground") {
				this.backgroundY = lSpawner.y;
				return this.backgroundY;
			}
		}
		return null;
	}
	,addObj: function(lDisplayCells) {
		var i = this.objList.length;
		while(--i >= 0) {
			if(this.objList[i].used) continue;
			if(this.inRow(this.objList[i].row,lDisplayCells) && this.inCol(this.objList[i].col,lDisplayCells)) {
				this.generateObj(this.objList[i]);
				this.objList[i].used = true;
			}
		}
	}
	,inCol: function(pCol,lDisplayCells) {
		var _g = 0;
		while(_g < pCol.length) {
			var lCol = pCol[_g];
			++_g;
			if(lCol >= lDisplayCells.y && lCol <= lDisplayCells.height) return true;
		}
		return false;
	}
	,inRow: function(pRow,lDisplayCells) {
		var _g = 0;
		while(_g < pRow.length) {
			var lRow = pRow[_g];
			++_g;
			if(lRow >= lDisplayCells.x && lRow <= lDisplayCells.width) return true;
		}
		return false;
	}
	,removeObj: function(lDisplayCells) {
		var i = com.isartdigital.plateformer.game.utils.Immobile.immobileList.length;
		while(--i >= 0) {
			var lObj = com.isartdigital.plateformer.game.utils.Immobile.immobileList[i];
			if(Type.getClass(lObj) == com.isartdigital.plateformer.game.sprites.immobile.decors.Destructible) {
			} else if(lDisplayCells.x > Math.floor((lObj.x + lObj.width) / this.sizeCell)) {
				this.unUsed(lObj.objName);
				lObj.unPopObj();
			} else if(lDisplayCells.width < Math.floor(lObj.x / this.sizeCell)) {
				this.unUsed(lObj.objName);
				lObj.unPopObj();
			} else if(lDisplayCells.y > Math.floor((lObj.y + lObj.height) / this.sizeCell)) {
				this.unUsed(lObj.objName);
				lObj.unPopObj();
			} else if(lDisplayCells.height < Math.floor(lObj.y / this.sizeCell)) {
				this.unUsed(lObj.objName);
				lObj.unPopObj();
			}
		}
	}
	,unUsed: function(lInstanceName) {
		if(lInstanceName == null) return;
		var _g = 0;
		var _g1 = this.objList;
		while(_g < _g1.length) {
			var lSpawner = _g1[_g];
			++_g;
			if(lSpawner.instanceName == lInstanceName) {
				lSpawner.used = false;
				break;
			}
		}
	}
	,clipObj: function() {
		var lDisplayCells = this.getDisplayCells();
		if(lDisplayCells.x == this.displayCell.x && lDisplayCells.y == this.displayCell.y) return; else {
			if(!com.isartdigital.plateformer.game.GameManager.getInstance().playerOutOfScreen()) this.removeObj(lDisplayCells);
			this.addObj(lDisplayCells);
			this.displayCell = lDisplayCells;
		}
	}
	,getDisplayCells: function() {
		var x = Math.floor(com.isartdigital.plateformer.game.GameManager.getInstance().screenLimit.x / 280) - 2;
		var width = Math.floor((com.isartdigital.plateformer.game.GameManager.getInstance().screenLimit.x + com.isartdigital.plateformer.game.GameManager.getInstance().screenLimit.width) / 280) + 1;
		var y = Math.floor(com.isartdigital.plateformer.game.GameManager.getInstance().screenLimit.y / 280) - 1;
		var height = Math.floor((com.isartdigital.plateformer.game.GameManager.getInstance().screenLimit.y + com.isartdigital.plateformer.game.GameManager.getInstance().screenLimit.height) / 280) + 1;
		return new PIXI.Rectangle(x,y,width,height);
	}
	,readLevel: function() {
		var _g = 0;
		var _g1 = this.spawners;
		while(_g < _g1.length) {
			var lSpawner = _g1[_g];
			++_g;
			if(lSpawner.type.indexOf("Wall") >= 0 || lSpawner.type.indexOf("Limit") >= 0 || lSpawner.type.indexOf("Ground") >= 0 || lSpawner.type.indexOf("Platform") >= 0 || lSpawner.type.indexOf("Bridge") >= 0 || lSpawner.type.indexOf("KillZoneStatic") >= 0) {
				this.objList.push(lSpawner);
				lSpawner.used = true;
			}
			this.generateObj(lSpawner);
		}
	}
	,generateObj: function(lSpawner) {
		if(lSpawner.type == "Player") com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().spawnPosition.set(lSpawner.x,lSpawner.y); else if(lSpawner.type.indexOf("Wall") >= 0 || lSpawner.type.indexOf("Limit") >= 0 || lSpawner.type.indexOf("Ground") >= 0) {
			if(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.listObj.length >= 1) {
				var _g = 0;
				var _g1 = com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.listObj;
				while(_g < _g1.length) {
					var lWall = _g1[_g];
					++_g;
					if(lWall.getTypeOfWall() == lSpawner.type) {
						com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.listObj.splice(HxOverrides.indexOf(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.listObj,lWall,0),1);
						lWall.init(lSpawner);
						lWall.start();
						lWall.popObj();
						return;
					}
				}
			}
			var lWall1 = new com.isartdigital.plateformer.game.sprites.immobile.decors.Wall();
			lWall1.init(lSpawner);
			lWall1.start();
			com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(lWall1);
		} else if(lSpawner.type == "Collectable") {
			var lObj = new com.isartdigital.plateformer.game.sprites.mobile.Collectable();
			lObj.init(lSpawner);
			lObj.start();
			com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(lObj);
			com.isartdigital.plateformer.game.GameManager.getInstance().removeCollectedPieces(lSpawner.instanceName);
			var _g2 = 0;
			var _g11 = com.isartdigital.plateformer.game.utils.SaveManager.getInstance().getPiecesCollectedNames(this.id);
			while(_g2 < _g11.length) {
				var instance = _g11[_g2];
				++_g2;
				if(instance == lObj.getInstanceName()) lObj.addGhostSprite();
			}
		} else if(lSpawner.type.indexOf("Platform") >= 0 || lSpawner.type.indexOf("Bridge") >= 0) {
			if(com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.listObj.length >= 1) {
				var _g3 = 0;
				var _g12 = com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.listObj;
				while(_g3 < _g12.length) {
					var lPlatform = _g12[_g3];
					++_g3;
					if(lPlatform.getTypeOfPlatform() == lSpawner.type) {
						com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.listObj.splice(HxOverrides.indexOf(com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.listObj,lPlatform,0),1);
						lPlatform.init(lSpawner);
						lPlatform.start();
						lPlatform.popObj();
						return;
					}
				}
			}
			var lObj1 = new com.isartdigital.plateformer.game.sprites.immobile.decors.Platform();
			lObj1.init(lSpawner);
			lObj1.start();
			com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(lObj1);
		} else if(lSpawner.type.indexOf("KillZoneDynamic") >= 0) {
			var lObj2 = new com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.KillZoneDynamic();
			lObj2.init(lSpawner);
			lObj2.start();
			com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(lObj2);
		} else if(lSpawner.type.indexOf("KillZoneStatic") >= 0) {
			if(com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic.listObj.length >= 1) {
				var lKillZone = com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic.listObj.pop();
				lKillZone.init(lSpawner);
				lKillZone.start();
				lKillZone.popObj();
			} else {
				var lObj3 = new com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic();
				lObj3.init(lSpawner);
				lObj3.start();
				com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(lObj3);
			}
		} else if(lSpawner.type == "Destructible") {
			var lObj4 = new com.isartdigital.plateformer.game.sprites.immobile.decors.Destructible();
			lObj4.init(lSpawner);
			lObj4.start();
			com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(lObj4);
		} else if(lSpawner.type == "EnemyTurret") {
			var lObj5 = new com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyTurret();
			lObj5.init(lSpawner);
			lObj5.start();
			com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(lObj5);
		} else if(lSpawner.type == "EnemyBomb") {
			var lObj6 = new com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyBomb();
			lObj6.init(lSpawner);
			lObj6.start();
			com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(lObj6);
		} else if(lSpawner.type == "EnemyFire") {
			var lObj7 = new com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyFire();
			lObj7.init(lSpawner);
			lObj7.start();
			com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(lObj7);
		} else if(lSpawner.type == "EnemySpeed") {
			var lObj8 = new com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemySpeed();
			lObj8.init(lSpawner);
			lObj8.start();
			com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(lObj8);
		} else if(lSpawner.type == "CheckPoint") {
			var lObj9;
			lObj9 = new com.isartdigital.plateformer.game.sprites.immobile.CheckPoint();
			lObj9.init(lSpawner);
			lObj9.start();
			com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(lObj9);
		} else if(lSpawner.type == "EndLevel") {
			var lObj10 = new com.isartdigital.plateformer.game.sprites.immobile.decors.EndLevel();
			lObj10.init(lSpawner);
			lObj10.start();
			com.isartdigital.plateformer.game.sprites.GamePlane.getInstance().addChild(lObj10);
		}
	}
	,__class__: com.isartdigital.plateformer.game.utils.LevelGenerator
};
com.isartdigital.plateformer.game.utils.SaveManager = function() {
};
$hxClasses["com.isartdigital.plateformer.game.utils.SaveManager"] = com.isartdigital.plateformer.game.utils.SaveManager;
com.isartdigital.plateformer.game.utils.SaveManager.__name__ = ["com","isartdigital","plateformer","game","utils","SaveManager"];
com.isartdigital.plateformer.game.utils.SaveManager.getInstance = function() {
	if(com.isartdigital.plateformer.game.utils.SaveManager.instance == null) com.isartdigital.plateformer.game.utils.SaveManager.instance = new com.isartdigital.plateformer.game.utils.SaveManager();
	return com.isartdigital.plateformer.game.utils.SaveManager.instance;
};
com.isartdigital.plateformer.game.utils.SaveManager.prototype = {
	init: function() {
		this.loadSave();
	}
	,getPiecesCollectedNames: function(idLevel) {
		var lCollectedPieces = new Array();
		if(js.Cookie.exists("level" + idLevel + "Pieces")) {
			var lJsonStr = js.Cookie.get("level" + idLevel + "Pieces");
			var lJson = JSON.parse(lJsonStr);
			var _g = 0;
			while(_g < lJson.length) {
				var lInstanceName = lJson[_g];
				++_g;
				lCollectedPieces.push(lInstanceName);
			}
		}
		return lCollectedPieces;
	}
	,saveCollectedPieces: function(pIdLevel,pCollectedPieces) {
		js.Cookie.set("level" + pIdLevel + "Pieces",JSON.stringify(pCollectedPieces));
	}
	,savePowerUpUnlocked: function(pPowerName) {
		com.isartdigital.utils.ArrayUtils.addIfAlone(pPowerName,this.powerUpUnlocked);
		js.Cookie.set("powerUpUnlocked",JSON.stringify(this.powerUpUnlocked));
	}
	,loadSave: function() {
		if(!js.Cookie.exists("levelSelectOrder")) {
			this.levelSelectOrder = new Array();
			var _g = 0;
			while(_g < 4) {
				var i = _g++;
				this.levelSelectOrder.push(i);
			}
			this.levelSelectOrder = com.isartdigital.utils.ArrayUtils.shuffle(this.levelSelectOrder);
			js.Cookie.set("levelSelectOrder",JSON.stringify(this.levelSelectOrder));
		} else this.levelSelectOrder = JSON.parse(js.Cookie.get("levelSelectOrder"));
		this.dataPieces = new haxe.ds.StringMap();
		var _g1 = 1;
		var _g2 = 4 + 1;
		while(_g1 < _g2) {
			var i1 = _g1++;
			var value = new com.isartdigital.plateformer.game.utils.DataPiecesLevel(com.isartdigital.plateformer.game.utils.SpawnerGenerator.getInstance().levelGenerators.get("level" + i1).getPieces(),i1);
			this.dataPieces.set("level" + i1,value);
		}
		if(js.Cookie.exists("powerUpUnlocked")) this.powerUpUnlocked = JSON.parse(js.Cookie.get("powerUpUnlocked")); else this.powerUpUnlocked = new Array();
	}
	,destroy: function() {
		com.isartdigital.plateformer.game.utils.SaveManager.instance = null;
	}
	,__class__: com.isartdigital.plateformer.game.utils.SaveManager
};
com.isartdigital.plateformer.game.utils.Spawner = function(pName,pParams) {
	this.used = false;
	this.col = [];
	this.row = [];
	this.instanceName = pName;
	this.rotation = Reflect.field(pParams,"rotation");
	this.scaleX = Reflect.field(pParams,"scaleX");
	this.scaleY = Reflect.field(pParams,"scaleY");
	this.type = Reflect.field(pParams,"type");
	this.x = Reflect.field(pParams,"x");
	this.y = Reflect.field(pParams,"y");
	this.row.push(Math.floor(this.x / 280));
	if(Math.floor((this.x + Reflect.field(pParams,"width")) / 280) == this.row[0] + 1) this.row.push(this.row[0] + 1); else if(Math.floor((this.x + Reflect.field(pParams,"width")) / 280) == this.row[0] + 2) {
		this.row.push(this.row[0] + 1);
		this.row.push(this.row[0] + 2);
	}
	this.col.push(Math.floor(this.y / 280));
	if(Math.floor((this.y + Reflect.field(pParams,"height")) / 280) == this.col[0] + 1) this.col.push(this.col[0] + 1); else if(Math.floor((this.y + Reflect.field(pParams,"height")) / 280) == this.col[0] + 1) {
		this.col.push(this.col[0] + 1);
		this.col.push(this.col[0] + 2);
	}
	if(Object.prototype.hasOwnProperty.call(pParams,"pathStartX")) this.pathStartX = Reflect.field(pParams,"pathStartX");
	if(Object.prototype.hasOwnProperty.call(pParams,"pathStartY")) this.pathStartY = Reflect.field(pParams,"pathStartY");
	if(Object.prototype.hasOwnProperty.call(pParams,"pathEndX")) this.pathEndX = Reflect.field(pParams,"pathEndX");
	if(Object.prototype.hasOwnProperty.call(pParams,"pathEndY")) this.pathEndY = Reflect.field(pParams,"pathEndY");
};
$hxClasses["com.isartdigital.plateformer.game.utils.Spawner"] = com.isartdigital.plateformer.game.utils.Spawner;
com.isartdigital.plateformer.game.utils.Spawner.__name__ = ["com","isartdigital","plateformer","game","utils","Spawner"];
com.isartdigital.plateformer.game.utils.Spawner.prototype = {
	__class__: com.isartdigital.plateformer.game.utils.Spawner
};
com.isartdigital.plateformer.game.utils.SpawnerGenerator = function() {
	this.levelGenerators = new haxe.ds.StringMap();
	var _g1 = 1;
	var _g = 4 + 1;
	while(_g1 < _g) {
		var i = _g1++;
		var value = new com.isartdigital.plateformer.game.utils.LevelGenerator(i,com.isartdigital.utils.loader.Loader.getContent("leveldesign/level" + i + ".json"));
		this.levelGenerators.set("level" + i,value);
	}
};
$hxClasses["com.isartdigital.plateformer.game.utils.SpawnerGenerator"] = com.isartdigital.plateformer.game.utils.SpawnerGenerator;
com.isartdigital.plateformer.game.utils.SpawnerGenerator.__name__ = ["com","isartdigital","plateformer","game","utils","SpawnerGenerator"];
com.isartdigital.plateformer.game.utils.SpawnerGenerator.getInstance = function() {
	if(com.isartdigital.plateformer.game.utils.SpawnerGenerator.instance == null) com.isartdigital.plateformer.game.utils.SpawnerGenerator.instance = new com.isartdigital.plateformer.game.utils.SpawnerGenerator();
	return com.isartdigital.plateformer.game.utils.SpawnerGenerator.instance;
};
com.isartdigital.plateformer.game.utils.SpawnerGenerator.prototype = {
	destroy: function() {
		com.isartdigital.plateformer.game.utils.SpawnerGenerator.instance = null;
	}
	,__class__: com.isartdigital.plateformer.game.utils.SpawnerGenerator
};
com.isartdigital.plateformer.ui = {};
com.isartdigital.plateformer.ui.CheatPanel = function() {
	this.init();
};
$hxClasses["com.isartdigital.plateformer.ui.CheatPanel"] = com.isartdigital.plateformer.ui.CheatPanel;
com.isartdigital.plateformer.ui.CheatPanel.__name__ = ["com","isartdigital","plateformer","ui","CheatPanel"];
com.isartdigital.plateformer.ui.CheatPanel.getInstance = function() {
	if(com.isartdigital.plateformer.ui.CheatPanel.instance == null) com.isartdigital.plateformer.ui.CheatPanel.instance = new com.isartdigital.plateformer.ui.CheatPanel();
	return com.isartdigital.plateformer.ui.CheatPanel.instance;
};
com.isartdigital.plateformer.ui.CheatPanel.prototype = {
	init: function() {
		if(com.isartdigital.utils.Config.get_debug() && com.isartdigital.utils.Config.get_data().cheat) this.gui = new dat.gui.GUI();
	}
	,setPlayer: function() {
		if(this.gui == null) return;
		var lPlayer = this.gui.addFolder("Player");
		lPlayer.add(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance(),"state").listen();
		lPlayer.add(com.isartdigital.plateformer.game.GameManager.getInstance(),"_win").listen();
		var lPosition = lPlayer.addFolder("position");
		lPosition.open();
		lPosition.add(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance(),"x",-2000,2000).listen();
		lPosition.add(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance(),"y",-2000,2000).listen();
		var lLife = lPlayer.addFolder("Life");
		lLife.open();
		var lSpeed = lPlayer.addFolder("speed");
		lSpeed.open();
		var lAcc = lPlayer.addFolder("acceleration");
		lAcc.open();
		var lParams = lPlayer.addFolder("paramètres");
		lParams.open();
		var lPowerUp = lPlayer.addFolder("Power Up");
		lPowerUp.open();
		lSpeed.add(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().speed,"x").listen();
		lSpeed.add(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().speed,"y").listen();
		lAcc.add(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().acceleration,"x").listen();
		lAcc.add(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().acceleration,"y").listen();
		lLife.add(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance(),"godMode").listen();
	}
	,setCamera: function() {
		if(this.gui == null) return;
		var lCamera = this.gui.addFolder("Caméra");
		lCamera.add(com.isartdigital.utils.game.Camera.getInstance(),"delayForWainting").min(1).max(100).listen();
		lCamera.add(com.isartdigital.utils.game.Camera.getInstance(),"delayForMoving").min(1).max(100).listen();
		lCamera.add(com.isartdigital.utils.game.Camera.getInstance(),"delayForCenter").min(1).max(100).listen();
		lCamera.open();
		var lParams = lCamera.addFolder("paramètres");
		lParams.open();
		var lInertiaMax = lCamera.addFolder("inertia Max");
		lParams.open();
		var lInertiaMin = lCamera.addFolder("inertia Min");
		lParams.open();
		lInertiaMax.add(com.isartdigital.utils.game.Camera.getInstance().inertiaMax,"x").min(1).max(100).listen();
		lInertiaMax.add(com.isartdigital.utils.game.Camera.getInstance().inertiaMax,"y").min(1).max(100).listen();
		lInertiaMin.add(com.isartdigital.utils.game.Camera.getInstance().inertiaMin,"x").min(1).max(100).listen();
		lInertiaMin.add(com.isartdigital.utils.game.Camera.getInstance().inertiaMin,"y").min(1).max(100).listen();
	}
	,setScroll: function() {
		if(this.gui == null) return;
		var lScroll = this.gui.addFolder("Scroll");
		lScroll.open();
		var lBackground1 = lScroll.addFolder("Background1");
		lBackground1.open();
		var lBackground2 = lScroll.addFolder("Background2");
		lBackground2.open();
		var lGamePlane = lScroll.addFolder("GamePlane");
		lGamePlane.open();
		var lScreenLimit = lScroll.addFolder("screenLimit");
		lScreenLimit.open();
		lBackground1.add(com.isartdigital.plateformer.game.GameManager.getInstance().background1,"x").listen();
		lBackground2.add(com.isartdigital.plateformer.game.GameManager.getInstance().background2,"x").listen();
		lGamePlane.add(com.isartdigital.plateformer.game.sprites.GamePlane.getInstance(),"x").listen();
		lScreenLimit.add(com.isartdigital.plateformer.game.GameManager.getInstance().screenLimit,"x").listen();
	}
	,clear: function() {
		if(this.gui == null) return;
		this.gui.destroy();
		this.init();
	}
	,destroy: function() {
		this.trail.destroy();
		this.trail = null;
		com.isartdigital.plateformer.ui.CheatPanel.instance = null;
	}
	,__class__: com.isartdigital.plateformer.ui.CheatPanel
};
com.isartdigital.utils.ui.UIComponent = function() {
	this.modalImage = "alpha_bg";
	this._modal = true;
	pixi.display.DisplayObjectContainer.call(this);
};
$hxClasses["com.isartdigital.utils.ui.UIComponent"] = com.isartdigital.utils.ui.UIComponent;
com.isartdigital.utils.ui.UIComponent.__name__ = ["com","isartdigital","utils","ui","UIComponent"];
com.isartdigital.utils.ui.UIComponent.__super__ = pixi.display.DisplayObjectContainer;
com.isartdigital.utils.ui.UIComponent.prototype = $extend(pixi.display.DisplayObjectContainer.prototype,{
	open: function() {
		if(this.isOpened) return;
		this.isOpened = true;
		this.set_modal(this._modal);
		com.isartdigital.utils.game.GameStage.getInstance().addEventListener("GameStageEvent.RESIZE",$bind(this,this.onResize));
		this.onResize();
	}
	,get_modal: function() {
		return this._modal;
	}
	,set_modal: function(pModal) {
		this._modal = pModal;
		if(this._modal) {
			if(this.modalZone == null) {
				this.modalZone = new com.isartdigital.utils.game.StateGraphic(this.modalImage);
				this.modalZone.interactive = true;
				this.modalZone.click = this.modalZone.tap = $bind(this,this.stopPropagation);
			}
			if(this.parent != null) this.parent.addChildAt(this.modalZone,this.parent.getChildIndex(this));
		} else if(this.modalZone != null) {
			if(this.modalZone.parent != null) this.modalZone.parent.removeChild(this.modalZone);
			this.modalZone = null;
		}
		return this._modal;
	}
	,stopPropagation: function(pEvent) {
	}
	,close: function() {
		if(!this.isOpened) return;
		this.isOpened = false;
		this.set_modal(false);
		this.destroy();
	}
	,onResize: function(pEvent) {
		if(this.get_modal()) com.isartdigital.utils.ui.UIPosition.setPosition(this.modalZone,"fitScreen");
	}
	,destroy: function() {
		this.close();
	}
	,__class__: com.isartdigital.utils.ui.UIComponent
});
com.isartdigital.utils.ui.Screen = function() {
	com.isartdigital.utils.ui.UIComponent.call(this);
	this.modalImage = "black_bg";
};
$hxClasses["com.isartdigital.utils.ui.Screen"] = com.isartdigital.utils.ui.Screen;
com.isartdigital.utils.ui.Screen.__name__ = ["com","isartdigital","utils","ui","Screen"];
com.isartdigital.utils.ui.Screen.__super__ = com.isartdigital.utils.ui.UIComponent;
com.isartdigital.utils.ui.Screen.prototype = $extend(com.isartdigital.utils.ui.UIComponent.prototype,{
	__class__: com.isartdigital.utils.ui.Screen
});
com.isartdigital.plateformer.ui.GraphicLoader = function() {
	com.isartdigital.utils.ui.Screen.call(this);
	var lBg = new com.isartdigital.utils.game.StateGraphic("preload_bg",new PIXI.Point(0.5,0.5));
	this.addChild(lBg);
	this.loaderBar = new com.isartdigital.utils.game.StateGraphic("preload",new PIXI.Point(0,0.5));
	this.loaderBar.x = -this.loaderBar.width / 2 + 35;
	this.addChild(this.loaderBar);
	this.loaderBar.scale.x = 0;
};
$hxClasses["com.isartdigital.plateformer.ui.GraphicLoader"] = com.isartdigital.plateformer.ui.GraphicLoader;
com.isartdigital.plateformer.ui.GraphicLoader.__name__ = ["com","isartdigital","plateformer","ui","GraphicLoader"];
com.isartdigital.plateformer.ui.GraphicLoader.getInstance = function() {
	if(com.isartdigital.plateformer.ui.GraphicLoader.instance == null) com.isartdigital.plateformer.ui.GraphicLoader.instance = new com.isartdigital.plateformer.ui.GraphicLoader();
	return com.isartdigital.plateformer.ui.GraphicLoader.instance;
};
com.isartdigital.plateformer.ui.GraphicLoader.__super__ = com.isartdigital.utils.ui.Screen;
com.isartdigital.plateformer.ui.GraphicLoader.prototype = $extend(com.isartdigital.utils.ui.Screen.prototype,{
	update: function(pProgress) {
		this.loaderBar.scale.x = pProgress;
	}
	,destroy: function() {
		com.isartdigital.plateformer.ui.GraphicLoader.instance = null;
		com.isartdigital.utils.ui.Screen.prototype.destroy.call(this);
	}
	,__class__: com.isartdigital.plateformer.ui.GraphicLoader
});
com.isartdigital.plateformer.ui.UIManager = function() {
	this.popins = [];
};
$hxClasses["com.isartdigital.plateformer.ui.UIManager"] = com.isartdigital.plateformer.ui.UIManager;
com.isartdigital.plateformer.ui.UIManager.__name__ = ["com","isartdigital","plateformer","ui","UIManager"];
com.isartdigital.plateformer.ui.UIManager.getInstance = function() {
	if(com.isartdigital.plateformer.ui.UIManager.instance == null) com.isartdigital.plateformer.ui.UIManager.instance = new com.isartdigital.plateformer.ui.UIManager();
	return com.isartdigital.plateformer.ui.UIManager.instance;
};
com.isartdigital.plateformer.ui.UIManager.prototype = {
	openScreen: function(pScreen) {
		this.closeScreens();
		com.isartdigital.utils.game.GameStage.getInstance().getScreensContainer().addChild(pScreen);
		pScreen.open();
	}
	,closeScreens: function() {
		var lContainer = com.isartdigital.utils.game.GameStage.getInstance().getScreensContainer();
		while(lContainer.children.length > 0) {
			var lCurrent;
			lCurrent = js.Boot.__cast(lContainer.getChildAt(lContainer.children.length - 1) , com.isartdigital.utils.ui.Screen);
			lContainer.removeChild(lCurrent);
			lCurrent.close();
		}
	}
	,openPopin: function(pPopin) {
		this.popins.push(pPopin);
		com.isartdigital.utils.game.GameStage.getInstance().getPopinsContainer().addChild(pPopin);
		pPopin.open();
	}
	,closeCurrentPopin: function() {
		if(this.popins.length == 0) return;
		var lCurrent = this.popins.pop();
		com.isartdigital.utils.game.GameStage.getInstance().getPopinsContainer().removeChild(lCurrent);
		lCurrent.close();
	}
	,openHud: function() {
		com.isartdigital.utils.game.GameStage.getInstance().getHudContainer().addChild(com.isartdigital.plateformer.ui.hud.Hud.getInstance());
		com.isartdigital.plateformer.ui.hud.Hud.getInstance().open();
	}
	,closeHud: function() {
		com.isartdigital.utils.game.GameStage.getInstance().getHudContainer().removeChild(com.isartdigital.plateformer.ui.hud.Hud.getInstance());
		com.isartdigital.plateformer.ui.hud.Hud.getInstance().close();
	}
	,startGame: function() {
		this.closeScreens();
		this.openHud();
	}
	,destroy: function() {
		com.isartdigital.plateformer.ui.UIManager.instance = null;
	}
	,__class__: com.isartdigital.plateformer.ui.UIManager
};
com.isartdigital.utils.ui.Button = function() {
	this.stateButton = com.isartdigital.plateformer.ui.buttons.ButtonState.UP;
	com.isartdigital.utils.ui.InfoGraphic.call(this);
	this.boxType = com.isartdigital.utils.game.BoxType.SELF;
	this.interactive = true;
	this.buttonMode = true;
	this.onMouseOver = $bind(this,this._mouseVoid);
	this.onMouseDown = $bind(this,this._mouseVoid);
	this.onClick = $bind(this,this._mouseVoid);
	this.onMouseOut = $bind(this,this._mouseVoid);
	this.click = this.touchend = $bind(this,this._click);
	this.mousedown = this.touchstart = $bind(this,this._mouseDown);
	this.mouseover = this.touchmove = $bind(this,this._mouseOver);
	this.mouseupoutside = this.touchendoutside = this.mouseout = $bind(this,this._mouseOut);
	this.txt = new PIXI.Text("",this.upStyle);
	this.start();
};
$hxClasses["com.isartdigital.utils.ui.Button"] = com.isartdigital.utils.ui.Button;
com.isartdigital.utils.ui.Button.__name__ = ["com","isartdigital","utils","ui","Button"];
com.isartdigital.utils.ui.Button.__super__ = com.isartdigital.utils.ui.InfoGraphic;
com.isartdigital.utils.ui.Button.prototype = $extend(com.isartdigital.utils.ui.InfoGraphic.prototype,{
	initStyle: function() {
		com.isartdigital.utils.ui.InfoGraphic.prototype.initStyle.call(this);
		this.upStyle = { font : "80px Arial", fill : "#000000", align : "center"};
		this.overStyle = { font : "80px Arial", fill : "#AAAAAA", align : "center"};
		this.downStyle = { font : "80px Arial", fill : "#FFFFFF", align : "center"};
	}
	,setModeNormal: function() {
		com.isartdigital.utils.ui.InfoGraphic.prototype.setModeNormal.call(this);
		this.anim.anchor.set(0.5,0.5);
		this.anim.gotoAndStop(0);
	}
	,_mouseVoid: function() {
	}
	,_click: function(pEvent) {
		this.anim.gotoAndStop(0);
		this.txt.setStyle(this.upStyle);
		this.onClick(pEvent);
		this.stateButton = com.isartdigital.plateformer.ui.buttons.ButtonState.CLICK;
	}
	,_mouseDown: function(pEvent) {
		this.anim.gotoAndStop(2);
		this.txt.setStyle(this.downStyle);
		this.onMouseDown(pEvent);
		this.stateButton = com.isartdigital.plateformer.ui.buttons.ButtonState.CLICK;
	}
	,_mouseOver: function(pEvent) {
		this.anim.gotoAndStop(1);
		this.txt.setStyle(this.overStyle);
		this.onMouseOver(pEvent);
		this.stateButton = com.isartdigital.plateformer.ui.buttons.ButtonState.OVER;
	}
	,_mouseOut: function(pEvent) {
		this.anim.gotoAndStop(0);
		this.txt.setStyle(this.upStyle);
		this.onMouseOut(pEvent);
		this.stateButton = com.isartdigital.plateformer.ui.buttons.ButtonState.UP;
	}
	,__class__: com.isartdigital.utils.ui.Button
});
com.isartdigital.plateformer.ui.buttons = {};
com.isartdigital.plateformer.ui.buttons.ButtonAgain = function() {
	com.isartdigital.utils.ui.Button.call(this);
	this.setText("Recommencer");
};
$hxClasses["com.isartdigital.plateformer.ui.buttons.ButtonAgain"] = com.isartdigital.plateformer.ui.buttons.ButtonAgain;
com.isartdigital.plateformer.ui.buttons.ButtonAgain.__name__ = ["com","isartdigital","plateformer","ui","buttons","ButtonAgain"];
com.isartdigital.plateformer.ui.buttons.ButtonAgain.__super__ = com.isartdigital.utils.ui.Button;
com.isartdigital.plateformer.ui.buttons.ButtonAgain.prototype = $extend(com.isartdigital.utils.ui.Button.prototype,{
	__class__: com.isartdigital.plateformer.ui.buttons.ButtonAgain
});
com.isartdigital.plateformer.ui.buttons.ButtonBackMenu = function() {
	this.textWin = { font : "70px Arial", fill : "#ffffff"};
	com.isartdigital.utils.ui.Button.call(this);
	this.text = new PIXI.Text("Menu",this.textWin);
	this.text.anchor.set(0.5,0.5);
	this.addChild(this.text);
};
$hxClasses["com.isartdigital.plateformer.ui.buttons.ButtonBackMenu"] = com.isartdigital.plateformer.ui.buttons.ButtonBackMenu;
com.isartdigital.plateformer.ui.buttons.ButtonBackMenu.__name__ = ["com","isartdigital","plateformer","ui","buttons","ButtonBackMenu"];
com.isartdigital.plateformer.ui.buttons.ButtonBackMenu.__super__ = com.isartdigital.utils.ui.Button;
com.isartdigital.plateformer.ui.buttons.ButtonBackMenu.prototype = $extend(com.isartdigital.utils.ui.Button.prototype,{
	__class__: com.isartdigital.plateformer.ui.buttons.ButtonBackMenu
});
com.isartdigital.plateformer.ui.buttons.ButtonFire = function() {
	com.isartdigital.utils.ui.Button.call(this);
	this.anim.anchor.set(0.5,0.5);
};
$hxClasses["com.isartdigital.plateformer.ui.buttons.ButtonFire"] = com.isartdigital.plateformer.ui.buttons.ButtonFire;
com.isartdigital.plateformer.ui.buttons.ButtonFire.__name__ = ["com","isartdigital","plateformer","ui","buttons","ButtonFire"];
com.isartdigital.plateformer.ui.buttons.ButtonFire.__super__ = com.isartdigital.utils.ui.Button;
com.isartdigital.plateformer.ui.buttons.ButtonFire.prototype = $extend(com.isartdigital.utils.ui.Button.prototype,{
	__class__: com.isartdigital.plateformer.ui.buttons.ButtonFire
});
com.isartdigital.plateformer.ui.buttons.ButtonJump = function() {
	com.isartdigital.utils.ui.Button.call(this);
	this.anim.anchor.set(0.5,1);
};
$hxClasses["com.isartdigital.plateformer.ui.buttons.ButtonJump"] = com.isartdigital.plateformer.ui.buttons.ButtonJump;
com.isartdigital.plateformer.ui.buttons.ButtonJump.__name__ = ["com","isartdigital","plateformer","ui","buttons","ButtonJump"];
com.isartdigital.plateformer.ui.buttons.ButtonJump.__super__ = com.isartdigital.utils.ui.Button;
com.isartdigital.plateformer.ui.buttons.ButtonJump.prototype = $extend(com.isartdigital.utils.ui.Button.prototype,{
	__class__: com.isartdigital.plateformer.ui.buttons.ButtonJump
});
com.isartdigital.plateformer.ui.buttons.ButtonLeft = function() {
	com.isartdigital.utils.ui.Button.call(this);
	this.anim.anchor.set(1,0.5);
};
$hxClasses["com.isartdigital.plateformer.ui.buttons.ButtonLeft"] = com.isartdigital.plateformer.ui.buttons.ButtonLeft;
com.isartdigital.plateformer.ui.buttons.ButtonLeft.__name__ = ["com","isartdigital","plateformer","ui","buttons","ButtonLeft"];
com.isartdigital.plateformer.ui.buttons.ButtonLeft.__super__ = com.isartdigital.utils.ui.Button;
com.isartdigital.plateformer.ui.buttons.ButtonLeft.prototype = $extend(com.isartdigital.utils.ui.Button.prototype,{
	__class__: com.isartdigital.plateformer.ui.buttons.ButtonLeft
});
com.isartdigital.plateformer.ui.buttons.ButtonLevel = function() {
	this.titleStyle = { font : "90px Arial", fill : "#fff", align : "center"};
	com.isartdigital.utils.ui.Button.call(this);
	this.onClick = $bind(this,this.launchLevel);
	this.dataPieces = this.getDataPieces();
	this.infoPoints = new com.isartdigital.plateformer.game.sprites.InfoPoint();
	this.infoPoints.y = 300;
	this.addChild(this.infoPoints);
	var lInfos;
	lInfos = (function($this) {
		var $r;
		var this1 = $this.dataPieces.get_nbCollectedPieces();
		$r = Std.string((function($this) {
			var $r;
			var $int = this1;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}($this)));
		return $r;
	}(this)) + " / " + (function($this) {
		var $r;
		var this2 = $this.dataPieces.get_totalPieces();
		$r = Std.string((function($this) {
			var $r;
			var int1 = this2;
			$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
			return $r;
		}($this)));
		return $r;
	}(this));
	if(this.dataPieces != null) this.pointsTxt = new PIXI.Text(lInfos,this.titleStyle);
	this.pointsTxt.x = 185;
	this.pointsTxt.y = this.infoPoints.y + 100;
	this.addChild(this.pointsTxt);
};
$hxClasses["com.isartdigital.plateformer.ui.buttons.ButtonLevel"] = com.isartdigital.plateformer.ui.buttons.ButtonLevel;
com.isartdigital.plateformer.ui.buttons.ButtonLevel.__name__ = ["com","isartdigital","plateformer","ui","buttons","ButtonLevel"];
com.isartdigital.plateformer.ui.buttons.ButtonLevel.__super__ = com.isartdigital.utils.ui.Button;
com.isartdigital.plateformer.ui.buttons.ButtonLevel.prototype = $extend(com.isartdigital.utils.ui.Button.prototype,{
	get_levelName: function() {
		return null;
	}
	,resize: function(pPartSize) {
		this.infoPoints.x = pPartSize / 2;
		this.txt.x = pPartSize / 2;
	}
	,setMask: function(screenMask) {
		this.anim.mask = screenMask;
	}
	,getDataPieces: function() {
		var key = this.get_levelName();
		return com.isartdigital.plateformer.game.utils.SaveManager.getInstance().dataPieces.get(key);
	}
	,initStyle: function() {
		this.defaultStyle = { font : "80px Arial", fill : "#FF45F2", align : "center"};
	}
	,setModeNormal: function() {
		com.isartdigital.utils.ui.Button.prototype.setModeNormal.call(this);
		this.anim.anchor.set(0,0.5);
	}
	,launchLevel: function() {
		com.isartdigital.utils.sounds.SoundManager.getSound("menu").stop();
		com.isartdigital.utils.sounds.SoundManager.playSound("player_shoot");
		var lLoader = new com.isartdigital.utils.loader.Loader();
		lLoader.addAssetFile(com.isartdigital.utils.system.DeviceCapabilities.textureType + "/" + this.get_levelName() + "/characters_graphics.json");
		lLoader.addAssetFile(com.isartdigital.utils.system.DeviceCapabilities.textureType + "/" + this.get_levelName() + "/decor_graphics.json");
		lLoader.addAssetFile(com.isartdigital.utils.system.DeviceCapabilities.textureType + "/" + this.get_levelName() + "/background.json");
		lLoader.addTxtFile("anchors/" + this.get_levelName() + ".json");
		lLoader.addEventListener("LoaderEvent.PROGRESS",$bind(this,this.onLoadProgress));
		lLoader.addEventListener("LoaderEvent.COMPLETE",$bind(this,this.onLoadComplete));
		com.isartdigital.plateformer.ui.UIManager.getInstance().openScreen(com.isartdigital.plateformer.ui.GraphicLoader.getInstance());
		com.isartdigital.utils.sounds.SoundManager.playSound("menu",true);
		lLoader.load();
	}
	,onLoadProgress: function(pEvent) {
		com.isartdigital.plateformer.ui.GraphicLoader.getInstance().update(pEvent.data.loaded / pEvent.data.total);
	}
	,onLoadComplete: function(pEvent) {
		pEvent.target.removeEventListener("LoaderEvent.PROGRESS",$bind(this,this.onLoadProgress));
		pEvent.target.removeEventListener("LoaderEvent.COMPLETE",$bind(this,this.onLoadComplete));
		com.isartdigital.utils.game.StateGraphic.addTextures(com.isartdigital.utils.loader.Loader.getContent(com.isartdigital.utils.system.DeviceCapabilities.textureType + "/" + this.get_levelName() + "/characters_graphics.json"));
		com.isartdigital.utils.game.StateGraphic.addTextures(com.isartdigital.utils.loader.Loader.getContent(com.isartdigital.utils.system.DeviceCapabilities.textureType + "/" + this.get_levelName() + "/decor_graphics.json"));
		com.isartdigital.utils.game.StateGraphic.addTextures(com.isartdigital.utils.loader.Loader.getContent(com.isartdigital.utils.system.DeviceCapabilities.textureType + "/" + this.get_levelName() + "/background.json"));
		com.isartdigital.utils.game.StateGraphic.addAnchors(com.isartdigital.utils.loader.Loader.getContent("anchors/" + this.get_levelName() + ".json"));
		com.isartdigital.plateformer.game.GameManager.getInstance().start(this.getLevelGenerator(),this.dataPieces,this.powerUp);
	}
	,getLevelGenerator: function() {
		var key = this.get_levelName();
		return com.isartdigital.plateformer.game.utils.SpawnerGenerator.getInstance().levelGenerators.get(key);
	}
	,__class__: com.isartdigital.plateformer.ui.buttons.ButtonLevel
});
com.isartdigital.plateformer.ui.buttons.ButtonLevel1 = function() {
	com.isartdigital.plateformer.ui.buttons.ButtonLevel.call(this);
	this.powerUp = "Super Shoot";
};
$hxClasses["com.isartdigital.plateformer.ui.buttons.ButtonLevel1"] = com.isartdigital.plateformer.ui.buttons.ButtonLevel1;
com.isartdigital.plateformer.ui.buttons.ButtonLevel1.__name__ = ["com","isartdigital","plateformer","ui","buttons","ButtonLevel1"];
com.isartdigital.plateformer.ui.buttons.ButtonLevel1.__super__ = com.isartdigital.plateformer.ui.buttons.ButtonLevel;
com.isartdigital.plateformer.ui.buttons.ButtonLevel1.prototype = $extend(com.isartdigital.plateformer.ui.buttons.ButtonLevel.prototype,{
	get_levelName: function() {
		return "level1";
	}
	,__class__: com.isartdigital.plateformer.ui.buttons.ButtonLevel1
});
com.isartdigital.plateformer.ui.buttons.ButtonLevel2 = function() {
	com.isartdigital.plateformer.ui.buttons.ButtonLevel.call(this);
	this.powerUp = "Double Jump";
};
$hxClasses["com.isartdigital.plateformer.ui.buttons.ButtonLevel2"] = com.isartdigital.plateformer.ui.buttons.ButtonLevel2;
com.isartdigital.plateformer.ui.buttons.ButtonLevel2.__name__ = ["com","isartdigital","plateformer","ui","buttons","ButtonLevel2"];
com.isartdigital.plateformer.ui.buttons.ButtonLevel2.__super__ = com.isartdigital.plateformer.ui.buttons.ButtonLevel;
com.isartdigital.plateformer.ui.buttons.ButtonLevel2.prototype = $extend(com.isartdigital.plateformer.ui.buttons.ButtonLevel.prototype,{
	get_levelName: function() {
		return "level2";
	}
	,__class__: com.isartdigital.plateformer.ui.buttons.ButtonLevel2
});
com.isartdigital.plateformer.ui.buttons.ButtonLevel3 = function() {
	com.isartdigital.plateformer.ui.buttons.ButtonLevel.call(this);
	this.powerUp = "Magnet";
};
$hxClasses["com.isartdigital.plateformer.ui.buttons.ButtonLevel3"] = com.isartdigital.plateformer.ui.buttons.ButtonLevel3;
com.isartdigital.plateformer.ui.buttons.ButtonLevel3.__name__ = ["com","isartdigital","plateformer","ui","buttons","ButtonLevel3"];
com.isartdigital.plateformer.ui.buttons.ButtonLevel3.__super__ = com.isartdigital.plateformer.ui.buttons.ButtonLevel;
com.isartdigital.plateformer.ui.buttons.ButtonLevel3.prototype = $extend(com.isartdigital.plateformer.ui.buttons.ButtonLevel.prototype,{
	get_levelName: function() {
		return "level3";
	}
	,__class__: com.isartdigital.plateformer.ui.buttons.ButtonLevel3
});
com.isartdigital.plateformer.ui.buttons.ButtonLevel4 = function() {
	com.isartdigital.plateformer.ui.buttons.ButtonLevel.call(this);
	this.powerUp = "Shield";
};
$hxClasses["com.isartdigital.plateformer.ui.buttons.ButtonLevel4"] = com.isartdigital.plateformer.ui.buttons.ButtonLevel4;
com.isartdigital.plateformer.ui.buttons.ButtonLevel4.__name__ = ["com","isartdigital","plateformer","ui","buttons","ButtonLevel4"];
com.isartdigital.plateformer.ui.buttons.ButtonLevel4.__super__ = com.isartdigital.plateformer.ui.buttons.ButtonLevel;
com.isartdigital.plateformer.ui.buttons.ButtonLevel4.prototype = $extend(com.isartdigital.plateformer.ui.buttons.ButtonLevel.prototype,{
	get_levelName: function() {
		return "level4";
	}
	,__class__: com.isartdigital.plateformer.ui.buttons.ButtonLevel4
});
com.isartdigital.plateformer.ui.buttons.ButtonPause = function() {
	com.isartdigital.utils.ui.Button.call(this);
};
$hxClasses["com.isartdigital.plateformer.ui.buttons.ButtonPause"] = com.isartdigital.plateformer.ui.buttons.ButtonPause;
com.isartdigital.plateformer.ui.buttons.ButtonPause.__name__ = ["com","isartdigital","plateformer","ui","buttons","ButtonPause"];
com.isartdigital.plateformer.ui.buttons.ButtonPause.__super__ = com.isartdigital.utils.ui.Button;
com.isartdigital.plateformer.ui.buttons.ButtonPause.prototype = $extend(com.isartdigital.utils.ui.Button.prototype,{
	__class__: com.isartdigital.plateformer.ui.buttons.ButtonPause
});
com.isartdigital.plateformer.ui.buttons.ButtonQuit = function() {
	com.isartdigital.utils.ui.Button.call(this);
	this.setText("Quitter");
};
$hxClasses["com.isartdigital.plateformer.ui.buttons.ButtonQuit"] = com.isartdigital.plateformer.ui.buttons.ButtonQuit;
com.isartdigital.plateformer.ui.buttons.ButtonQuit.__name__ = ["com","isartdigital","plateformer","ui","buttons","ButtonQuit"];
com.isartdigital.plateformer.ui.buttons.ButtonQuit.__super__ = com.isartdigital.utils.ui.Button;
com.isartdigital.plateformer.ui.buttons.ButtonQuit.prototype = $extend(com.isartdigital.utils.ui.Button.prototype,{
	__class__: com.isartdigital.plateformer.ui.buttons.ButtonQuit
});
com.isartdigital.plateformer.ui.buttons.ButtonResume = function() {
	this.textMenu = { font : "70px Arial", fill : "#ffffff"};
	com.isartdigital.utils.ui.Button.call(this);
	this.text = new PIXI.Text("Reprendre",this.textMenu);
	this.text.anchor.set(0.5,0.5);
	this.addChild(this.text);
};
$hxClasses["com.isartdigital.plateformer.ui.buttons.ButtonResume"] = com.isartdigital.plateformer.ui.buttons.ButtonResume;
com.isartdigital.plateformer.ui.buttons.ButtonResume.__name__ = ["com","isartdigital","plateformer","ui","buttons","ButtonResume"];
com.isartdigital.plateformer.ui.buttons.ButtonResume.__super__ = com.isartdigital.utils.ui.Button;
com.isartdigital.plateformer.ui.buttons.ButtonResume.prototype = $extend(com.isartdigital.utils.ui.Button.prototype,{
	__class__: com.isartdigital.plateformer.ui.buttons.ButtonResume
});
com.isartdigital.plateformer.ui.buttons.ButtonRight = function() {
	com.isartdigital.utils.ui.Button.call(this);
	this.anim.anchor.set(0,0.5);
};
$hxClasses["com.isartdigital.plateformer.ui.buttons.ButtonRight"] = com.isartdigital.plateformer.ui.buttons.ButtonRight;
com.isartdigital.plateformer.ui.buttons.ButtonRight.__name__ = ["com","isartdigital","plateformer","ui","buttons","ButtonRight"];
com.isartdigital.plateformer.ui.buttons.ButtonRight.__super__ = com.isartdigital.utils.ui.Button;
com.isartdigital.plateformer.ui.buttons.ButtonRight.prototype = $extend(com.isartdigital.utils.ui.Button.prototype,{
	__class__: com.isartdigital.plateformer.ui.buttons.ButtonRight
});
com.isartdigital.plateformer.ui.buttons.ButtonSoundOff = function() {
	com.isartdigital.utils.ui.Button.call(this);
};
$hxClasses["com.isartdigital.plateformer.ui.buttons.ButtonSoundOff"] = com.isartdigital.plateformer.ui.buttons.ButtonSoundOff;
com.isartdigital.plateformer.ui.buttons.ButtonSoundOff.__name__ = ["com","isartdigital","plateformer","ui","buttons","ButtonSoundOff"];
com.isartdigital.plateformer.ui.buttons.ButtonSoundOff.__super__ = com.isartdigital.utils.ui.Button;
com.isartdigital.plateformer.ui.buttons.ButtonSoundOff.prototype = $extend(com.isartdigital.utils.ui.Button.prototype,{
	__class__: com.isartdigital.plateformer.ui.buttons.ButtonSoundOff
});
com.isartdigital.plateformer.ui.buttons.ButtonSoundOn = function() {
	com.isartdigital.utils.ui.Button.call(this);
};
$hxClasses["com.isartdigital.plateformer.ui.buttons.ButtonSoundOn"] = com.isartdigital.plateformer.ui.buttons.ButtonSoundOn;
com.isartdigital.plateformer.ui.buttons.ButtonSoundOn.__name__ = ["com","isartdigital","plateformer","ui","buttons","ButtonSoundOn"];
com.isartdigital.plateformer.ui.buttons.ButtonSoundOn.__super__ = com.isartdigital.utils.ui.Button;
com.isartdigital.plateformer.ui.buttons.ButtonSoundOn.prototype = $extend(com.isartdigital.utils.ui.Button.prototype,{
	__class__: com.isartdigital.plateformer.ui.buttons.ButtonSoundOn
});
com.isartdigital.plateformer.ui.buttons.ButtonState = $hxClasses["com.isartdigital.plateformer.ui.buttons.ButtonState"] = { __ename__ : true, __constructs__ : ["OVER","CLICK","UP"] };
com.isartdigital.plateformer.ui.buttons.ButtonState.OVER = ["OVER",0];
com.isartdigital.plateformer.ui.buttons.ButtonState.OVER.__enum__ = com.isartdigital.plateformer.ui.buttons.ButtonState;
com.isartdigital.plateformer.ui.buttons.ButtonState.CLICK = ["CLICK",1];
com.isartdigital.plateformer.ui.buttons.ButtonState.CLICK.__enum__ = com.isartdigital.plateformer.ui.buttons.ButtonState;
com.isartdigital.plateformer.ui.buttons.ButtonState.UP = ["UP",2];
com.isartdigital.plateformer.ui.buttons.ButtonState.UP.__enum__ = com.isartdigital.plateformer.ui.buttons.ButtonState;
com.isartdigital.plateformer.ui.hud = {};
com.isartdigital.plateformer.ui.hud.Hud = function() {
	com.isartdigital.utils.ui.Screen.call(this);
	this._modal = false;
	this.piece = new com.isartdigital.utils.game.StateGraphic("Collectable",new PIXI.Point(0.5,0.5));
	this.piece.width = 80;
	this.piece.height = 80;
	this.addChild(this.piece);
	this.textPieces = new PIXI.Text("");
	this.textPieces.anchor.set(0.5,0.5);
	this.addChild(this.textPieces);
	this.buttonPause = new com.isartdigital.plateformer.ui.buttons.ButtonPause();
	this.addChild(this.buttonPause);
	this.buttonPause.onClick = $bind(this,this.pause);
	this.buttonSoundOn = new com.isartdigital.plateformer.ui.buttons.ButtonSoundOn();
	this.addChild(this.buttonSoundOn);
	this.buttonSoundOn.onClick = $bind(this,this.soundOn);
	this.buttonSoundOff = new com.isartdigital.plateformer.ui.buttons.ButtonSoundOff();
	this.addChild(this.buttonSoundOff);
	this.buttonSoundOff.onClick = $bind(this,this.soundOff);
	if(com.isartdigital.utils.system.DeviceCapabilities.get_system() != "Desktop") {
		this.btnLeft = new com.isartdigital.plateformer.ui.buttons.ButtonLeft();
		this.btnRight = new com.isartdigital.plateformer.ui.buttons.ButtonRight();
		this.btnFire = new com.isartdigital.plateformer.ui.buttons.ButtonFire();
		this.btnJump = new com.isartdigital.plateformer.ui.buttons.ButtonJump();
		this.btnFirePos = new PIXI.Point(0,0);
		this.btnJumpPos = new PIXI.Point(0,0);
		this.btnLeftPos = new PIXI.Point(0,0);
		this.btnRightPos = new PIXI.Point(0,0);
		this.addChild(this.btnLeft);
		this.addChild(this.btnRight);
		this.addChild(this.btnJump);
		this.addChild(this.btnFire);
		this.hideButtonMove();
		this.hideButtonAction();
	}
};
$hxClasses["com.isartdigital.plateformer.ui.hud.Hud"] = com.isartdigital.plateformer.ui.hud.Hud;
com.isartdigital.plateformer.ui.hud.Hud.__name__ = ["com","isartdigital","plateformer","ui","hud","Hud"];
com.isartdigital.plateformer.ui.hud.Hud.getInstance = function() {
	if(com.isartdigital.plateformer.ui.hud.Hud.instance == null) com.isartdigital.plateformer.ui.hud.Hud.instance = new com.isartdigital.plateformer.ui.hud.Hud();
	return com.isartdigital.plateformer.ui.hud.Hud.instance;
};
com.isartdigital.plateformer.ui.hud.Hud.__super__ = com.isartdigital.utils.ui.Screen;
com.isartdigital.plateformer.ui.hud.Hud.prototype = $extend(com.isartdigital.utils.ui.Screen.prototype,{
	setBtnMovePos: function(pPoint) {
		this.btnLeftPos.set(pPoint.x - 100.,pPoint.y);
		this.btnRightPos.set(pPoint.x + 100.,pPoint.y);
		this.onResize();
	}
	,setBtnActionPos: function(pPoint) {
		this.btnJumpPos.set(pPoint.x,pPoint.y - 200);
		this.btnFirePos.set(pPoint.x,pPoint.y);
		this.onResize();
	}
	,showButtonMove: function() {
		this.btnLeft.visible = true;
		this.btnRight.visible = true;
	}
	,showButtonAction: function() {
		this.btnJump.visible = true;
		this.btnFire.visible = true;
	}
	,hideButtonMove: function() {
		this.btnLeft.visible = false;
		this.btnRight.visible = false;
	}
	,hideButtonAction: function() {
		this.btnJump.visible = false;
		this.btnFire.visible = false;
	}
	,setDataPieces: function(pDataPieces) {
		this.dataPieces = pDataPieces;
		this.updateTextPieces();
	}
	,updateTextPieces: function() {
		if(this.dataPieces != null) this.textPieces.setText((function($this) {
			var $r;
			var this1 = $this.dataPieces.get_nbCollectedPieces();
			$r = Std.string((function($this) {
				var $r;
				var $int = this1;
				$r = $int < 0?4294967296.0 + $int:$int + 0.0;
				return $r;
			}($this)));
			return $r;
		}(this)) + "/" + (function($this) {
			var $r;
			var this2 = $this.dataPieces.get_totalPieces();
			$r = Std.string((function($this) {
				var $r;
				var int1 = this2;
				$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
				return $r;
			}($this)));
			return $r;
		}(this)));
	}
	,onResize: function(pEvent) {
		com.isartdigital.utils.ui.UIPosition.setPosition(this.buttonPause,"topLeft",150,80);
		com.isartdigital.utils.ui.UIPosition.setPosition(this.buttonSoundOn,"topLeft",530,80);
		com.isartdigital.utils.ui.UIPosition.setPosition(this.buttonSoundOff,"topLeft",this.buttonSoundOn.width + 650,80);
		com.isartdigital.utils.ui.UIPosition.setPosition(this.textPieces,"topRight",150,80);
		com.isartdigital.utils.ui.UIPosition.setPosition(this.piece,"topRight",250,80);
		if(com.isartdigital.utils.system.DeviceCapabilities.get_system() != "Desktop") {
			com.isartdigital.utils.ui.UIPosition.setPosition(this.btnLeft,"topLeft",this.btnLeftPos.x,this.btnLeftPos.y);
			com.isartdigital.utils.ui.UIPosition.setPosition(this.btnRight,"topLeft",this.btnRightPos.x,this.btnRightPos.y);
			com.isartdigital.utils.ui.UIPosition.setPosition(this.btnJump,"topLeft",this.btnJumpPos.x,this.btnJumpPos.y);
			com.isartdigital.utils.ui.UIPosition.setPosition(this.btnFire,"topLeft",this.btnFirePos.x,this.btnFirePos.y);
		}
	}
	,pause: function(pEvent) {
		com.isartdigital.plateformer.game.GameManager.getInstance().pause();
		com.isartdigital.plateformer.ui.UIManager.getInstance().closeCurrentPopin();
		com.isartdigital.plateformer.ui.UIManager.getInstance().openPopin(com.isartdigital.plateformer.ui.popin.Pause.getInstance());
		com.isartdigital.utils.sounds.SoundManager.getSound("win").stop();
	}
	,soundOn: function(pEvent) {
		com.isartdigital.utils.sounds.SoundManager.unmute();
	}
	,soundOff: function(pEvent) {
		com.isartdigital.utils.sounds.SoundManager.mute();
	}
	,destroy: function() {
		com.isartdigital.plateformer.ui.hud.Hud.instance = null;
		com.isartdigital.utils.ui.Screen.prototype.destroy.call(this);
	}
	,__class__: com.isartdigital.plateformer.ui.hud.Hud
});
com.isartdigital.utils.ui.Popin = function() {
	com.isartdigital.utils.ui.UIComponent.call(this);
};
$hxClasses["com.isartdigital.utils.ui.Popin"] = com.isartdigital.utils.ui.Popin;
com.isartdigital.utils.ui.Popin.__name__ = ["com","isartdigital","utils","ui","Popin"];
com.isartdigital.utils.ui.Popin.__super__ = com.isartdigital.utils.ui.UIComponent;
com.isartdigital.utils.ui.Popin.prototype = $extend(com.isartdigital.utils.ui.UIComponent.prototype,{
	__class__: com.isartdigital.utils.ui.Popin
});
com.isartdigital.plateformer.ui.popin = {};
com.isartdigital.plateformer.ui.popin.Confirm = function() {
	com.isartdigital.utils.ui.Popin.call(this);
	this.background = new PIXI.Sprite(PIXI.Texture.fromImage(com.isartdigital.utils.Config.get_assetsPath() + "Confirm.png"));
	this.background.anchor.set(0.5,0.5);
	this.addChild(this.background);
	this.interactive = true;
	this.buttonMode = true;
	this.click = this.tap = $bind(this,this.onClick);
};
$hxClasses["com.isartdigital.plateformer.ui.popin.Confirm"] = com.isartdigital.plateformer.ui.popin.Confirm;
com.isartdigital.plateformer.ui.popin.Confirm.__name__ = ["com","isartdigital","plateformer","ui","popin","Confirm"];
com.isartdigital.plateformer.ui.popin.Confirm.getInstance = function() {
	if(com.isartdigital.plateformer.ui.popin.Confirm.instance == null) com.isartdigital.plateformer.ui.popin.Confirm.instance = new com.isartdigital.plateformer.ui.popin.Confirm();
	return com.isartdigital.plateformer.ui.popin.Confirm.instance;
};
com.isartdigital.plateformer.ui.popin.Confirm.__super__ = com.isartdigital.utils.ui.Popin;
com.isartdigital.plateformer.ui.popin.Confirm.prototype = $extend(com.isartdigital.utils.ui.Popin.prototype,{
	onClick: function(pData) {
		com.isartdigital.utils.sounds.SoundManager.playSound("click");
		com.isartdigital.plateformer.ui.UIManager.getInstance().closeCurrentPopin();
	}
	,destroy: function() {
		com.isartdigital.plateformer.ui.popin.Confirm.instance = null;
		com.isartdigital.utils.ui.Popin.prototype.destroy.call(this);
	}
	,__class__: com.isartdigital.plateformer.ui.popin.Confirm
});
com.isartdigital.plateformer.ui.popin.Lose = function() {
	com.isartdigital.utils.ui.Popin.call(this);
	this.text = new PIXI.Text("Perdu !!!");
	this.buttonBackMenu = new com.isartdigital.plateformer.ui.buttons.ButtonBackMenu();
	this.buttonAgain = new com.isartdigital.plateformer.ui.buttons.ButtonAgain();
	this.buttonBackMenu.y = 200;
	this.text.y = -200;
	this.text.anchor.set(0.5,0.5);
	this.addChild(this.text);
	this.addChild(this.buttonBackMenu);
	this.addChild(this.buttonAgain);
	this.buttonBackMenu.onClick = $bind(this,this.backLvlSelect);
	this.buttonAgain.onClick = $bind(this,this.tryAgain);
};
$hxClasses["com.isartdigital.plateformer.ui.popin.Lose"] = com.isartdigital.plateformer.ui.popin.Lose;
com.isartdigital.plateformer.ui.popin.Lose.__name__ = ["com","isartdigital","plateformer","ui","popin","Lose"];
com.isartdigital.plateformer.ui.popin.Lose.getInstance = function() {
	if(com.isartdigital.plateformer.ui.popin.Lose.instance == null) com.isartdigital.plateformer.ui.popin.Lose.instance = new com.isartdigital.plateformer.ui.popin.Lose();
	return com.isartdigital.plateformer.ui.popin.Lose.instance;
};
com.isartdigital.plateformer.ui.popin.Lose.__super__ = com.isartdigital.utils.ui.Popin;
com.isartdigital.plateformer.ui.popin.Lose.prototype = $extend(com.isartdigital.utils.ui.Popin.prototype,{
	tryAgain: function(pEvent) {
		com.isartdigital.plateformer.game.GameManager.getInstance().destroy();
		com.isartdigital.plateformer.ui.UIManager.getInstance().closeCurrentPopin();
	}
	,backLvlSelect: function(pEvent) {
		com.isartdigital.plateformer.game.GameManager.getInstance().destroy();
		com.isartdigital.plateformer.ui.UIManager.getInstance().openScreen(com.isartdigital.plateformer.ui.screens.LevelSelect.getInstance());
		com.isartdigital.plateformer.ui.UIManager.getInstance().closeCurrentPopin();
	}
	,destroy: function() {
		com.isartdigital.plateformer.ui.popin.Lose.instance = null;
	}
	,__class__: com.isartdigital.plateformer.ui.popin.Lose
});
com.isartdigital.plateformer.ui.popin.Pause = function() {
	this.textPause = { font : "70px Arial", fill : "#ffffff"};
	com.isartdigital.utils.ui.Popin.call(this);
	this.text = new PIXI.Text("Pause",this.textPause);
	this.buttonBackMenu = new com.isartdigital.plateformer.ui.buttons.ButtonBackMenu();
	this.buttonResume = new com.isartdigital.plateformer.ui.buttons.ButtonResume();
	this.buttonBackMenu.y = 200;
	this.text.y = -200;
	this.text.anchor.set(0.5,0.5);
	this.addChild(this.text);
	this.addChild(this.buttonBackMenu);
	this.addChild(this.buttonResume);
	this.buttonBackMenu.onClick = $bind(this,this.quit);
	this.buttonResume.onClick = $bind(this,this.resume);
};
$hxClasses["com.isartdigital.plateformer.ui.popin.Pause"] = com.isartdigital.plateformer.ui.popin.Pause;
com.isartdigital.plateformer.ui.popin.Pause.__name__ = ["com","isartdigital","plateformer","ui","popin","Pause"];
com.isartdigital.plateformer.ui.popin.Pause.getInstance = function() {
	if(com.isartdigital.plateformer.ui.popin.Pause.instance == null) com.isartdigital.plateformer.ui.popin.Pause.instance = new com.isartdigital.plateformer.ui.popin.Pause();
	return com.isartdigital.plateformer.ui.popin.Pause.instance;
};
com.isartdigital.plateformer.ui.popin.Pause.__super__ = com.isartdigital.utils.ui.Popin;
com.isartdigital.plateformer.ui.popin.Pause.prototype = $extend(com.isartdigital.utils.ui.Popin.prototype,{
	resume: function(pEvent) {
		com.isartdigital.plateformer.game.GameManager.getInstance().resume();
		com.isartdigital.plateformer.ui.UIManager.getInstance().closeCurrentPopin();
	}
	,quit: function(pEvent) {
		com.isartdigital.plateformer.game.GameManager.getInstance().destroy();
		com.isartdigital.plateformer.ui.UIManager.getInstance().openScreen(com.isartdigital.plateformer.ui.screens.LevelSelect.getInstance());
		com.isartdigital.plateformer.ui.UIManager.getInstance().closeCurrentPopin();
	}
	,destroy: function() {
		com.isartdigital.plateformer.ui.popin.Pause.instance = null;
	}
	,__class__: com.isartdigital.plateformer.ui.popin.Pause
});
com.isartdigital.plateformer.ui.popin.Win = function() {
	this.textWin = { font : "90px Arial", fill : "#ffffff", align : "center"};
	com.isartdigital.utils.ui.Popin.call(this);
	this.text = new PIXI.Text(com.isartdigital.plateformer.game.GameManager.getInstance().getPowerUp() + " Obtenu",this.textWin);
	this.buttonBackMenu = new com.isartdigital.plateformer.ui.buttons.ButtonBackMenu();
	this.buttonBackMenu.y = 200;
	this.text.y = -200;
	this.text.anchor.set(0.5,0.5);
	this.addChild(this.text);
	this.addChild(this.buttonBackMenu);
	com.isartdigital.utils.sounds.SoundManager.getSound("menu").stop();
	this.buttonBackMenu.onClick = $bind(this,this.backLvlSelect);
};
$hxClasses["com.isartdigital.plateformer.ui.popin.Win"] = com.isartdigital.plateformer.ui.popin.Win;
com.isartdigital.plateformer.ui.popin.Win.__name__ = ["com","isartdigital","plateformer","ui","popin","Win"];
com.isartdigital.plateformer.ui.popin.Win.getInstance = function() {
	if(com.isartdigital.plateformer.ui.popin.Win.instance == null) com.isartdigital.plateformer.ui.popin.Win.instance = new com.isartdigital.plateformer.ui.popin.Win();
	return com.isartdigital.plateformer.ui.popin.Win.instance;
};
com.isartdigital.plateformer.ui.popin.Win.__super__ = com.isartdigital.utils.ui.Popin;
com.isartdigital.plateformer.ui.popin.Win.prototype = $extend(com.isartdigital.utils.ui.Popin.prototype,{
	backLvlSelect: function(pEvent) {
		com.isartdigital.plateformer.game.GameManager.getInstance().destroy();
		com.isartdigital.utils.sounds.SoundManager.getSound("win").stop();
		com.isartdigital.utils.sounds.SoundManager.playSound("menu");
		com.isartdigital.plateformer.ui.UIManager.getInstance().openScreen(com.isartdigital.plateformer.ui.screens.LevelSelect.getInstance());
		com.isartdigital.plateformer.ui.UIManager.getInstance().closeCurrentPopin();
	}
	,destroy: function() {
		com.isartdigital.plateformer.ui.popin.Win.instance = null;
	}
	,__class__: com.isartdigital.plateformer.ui.popin.Win
});
com.isartdigital.plateformer.ui.screens = {};
com.isartdigital.plateformer.ui.screens.FinalWin = function() {
	com.isartdigital.utils.ui.Screen.call(this);
	this.background = new PIXI.Sprite(PIXI.Texture.fromImage(com.isartdigital.utils.Config.get_assetsPath() + "TitleCard_bg.png"));
	this.background.anchor.set(0.5,0.5);
	this.text = new PIXI.Text("Tu as fini le jeu à 100%! GG maggle");
	this.buttonBackMenu = new com.isartdigital.plateformer.ui.buttons.ButtonBackMenu();
	this.buttonBackMenu.y = 200;
	this.click = this.tap = $bind(this,this.onClick);
	this.text.y = -200;
	this.text.anchor.set(0.5,0.5);
	this.addChild(this.background);
	this.addChild(this.text);
	this.addChild(this.buttonBackMenu);
	this.buttonBackMenu.onClick = $bind(this,this.backToMenu);
};
$hxClasses["com.isartdigital.plateformer.ui.screens.FinalWin"] = com.isartdigital.plateformer.ui.screens.FinalWin;
com.isartdigital.plateformer.ui.screens.FinalWin.__name__ = ["com","isartdigital","plateformer","ui","screens","FinalWin"];
com.isartdigital.plateformer.ui.screens.FinalWin.getInstance = function() {
	if(com.isartdigital.plateformer.ui.screens.FinalWin.instance == null) com.isartdigital.plateformer.ui.screens.FinalWin.instance = new com.isartdigital.plateformer.ui.screens.FinalWin();
	return com.isartdigital.plateformer.ui.screens.FinalWin.instance;
};
com.isartdigital.plateformer.ui.screens.FinalWin.__super__ = com.isartdigital.utils.ui.Screen;
com.isartdigital.plateformer.ui.screens.FinalWin.prototype = $extend(com.isartdigital.utils.ui.Screen.prototype,{
	onClick: function(pData) {
		com.isartdigital.plateformer.ui.UIManager.getInstance().openScreen(com.isartdigital.plateformer.ui.screens.TitleCard.getInstance());
	}
	,backToMenu: function(pEvent) {
		com.isartdigital.plateformer.game.GameManager.getInstance().destroy();
		com.isartdigital.plateformer.ui.UIManager.getInstance().openScreen(com.isartdigital.plateformer.ui.screens.TitleCard.getInstance());
		com.isartdigital.plateformer.ui.UIManager.getInstance().closeScreens();
	}
	,destroy: function() {
		com.isartdigital.plateformer.ui.screens.FinalWin.instance = null;
		com.isartdigital.utils.ui.Screen.prototype.destroy.call(this);
	}
	,__class__: com.isartdigital.plateformer.ui.screens.FinalWin
});
com.isartdigital.plateformer.ui.screens.LevelSelect = function() {
	this.buttons = new Array();
	com.isartdigital.utils.ui.Screen.call(this);
	com.isartdigital.plateformer.game.utils.SaveManager.getInstance().init();
	this.buttons.push(new com.isartdigital.plateformer.ui.buttons.ButtonLevel1());
	this.buttons.push(new com.isartdigital.plateformer.ui.buttons.ButtonLevel2());
	this.buttons.push(new com.isartdigital.plateformer.ui.buttons.ButtonLevel3());
	this.buttons.push(new com.isartdigital.plateformer.ui.buttons.ButtonLevel4());
	this.buttonOrder = com.isartdigital.plateformer.game.utils.SaveManager.getInstance().levelSelectOrder;
	var _g = 0;
	while(_g < 4) {
		var i = _g++;
		this.addChild(this.buttons[this.buttonOrder[i]]);
	}
	var screenMask = new PIXI.Graphics();
	screenMask.beginFill(0);
	screenMask.drawRect(-1214.,-768.,2428,1536);
	screenMask.endFill();
	this.addChild(screenMask);
	this.buttons[this.buttonOrder[3]].setMask(screenMask);
	this.cleanAsset();
	com.isartdigital.plateformer.Main.getInstance().addEventListener("GameEvent.GAME_LOOP",$bind(this,this.doActionResize));
};
$hxClasses["com.isartdigital.plateformer.ui.screens.LevelSelect"] = com.isartdigital.plateformer.ui.screens.LevelSelect;
com.isartdigital.plateformer.ui.screens.LevelSelect.__name__ = ["com","isartdigital","plateformer","ui","screens","LevelSelect"];
com.isartdigital.plateformer.ui.screens.LevelSelect.getInstance = function() {
	if(com.isartdigital.plateformer.ui.screens.LevelSelect.instance == null) com.isartdigital.plateformer.ui.screens.LevelSelect.instance = new com.isartdigital.plateformer.ui.screens.LevelSelect();
	return com.isartdigital.plateformer.ui.screens.LevelSelect.instance;
};
com.isartdigital.plateformer.ui.screens.LevelSelect.__super__ = com.isartdigital.utils.ui.Screen;
com.isartdigital.plateformer.ui.screens.LevelSelect.prototype = $extend(com.isartdigital.utils.ui.Screen.prototype,{
	cleanAsset: function() {
		var _g = 0;
		var _g1 = this.buttons;
		while(_g < _g1.length) {
			var button = _g1[_g];
			++_g;
			com.isartdigital.utils.game.StateGraphic.clearTextures(com.isartdigital.utils.loader.Loader.getContent(com.isartdigital.utils.system.DeviceCapabilities.textureType + "/" + button.get_levelName() + "/characters_graphics.json"));
			com.isartdigital.utils.game.StateGraphic.clearTextures(com.isartdigital.utils.loader.Loader.getContent(com.isartdigital.utils.system.DeviceCapabilities.textureType + "/" + button.get_levelName() + "/decor_graphics.json"));
			com.isartdigital.utils.game.StateGraphic.clearTextures(com.isartdigital.utils.loader.Loader.getContent(com.isartdigital.utils.system.DeviceCapabilities.textureType + "/" + button.get_levelName() + "/background.json"));
		}
	}
	,getPartSize: function(pTotalWidth) {
		if(pTotalWidth > 2428) return (function($this) {
			var $r;
			var $int = 2428;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}(this)) / (function($this) {
			var $r;
			var int1 = 4;
			$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
			return $r;
		}(this)); else if(pTotalWidth < 2048) return (function($this) {
			var $r;
			var int2 = 2048;
			$r = int2 < 0?4294967296.0 + int2:int2 + 0.0;
			return $r;
		}(this)) / (function($this) {
			var $r;
			var int3 = 4;
			$r = int3 < 0?4294967296.0 + int3:int3 + 0.0;
			return $r;
		}(this));
		return pTotalWidth / (function($this) {
			var $r;
			var int4;
			{
				var int5 = 4;
				if(int5 < 0) int4 = 4294967296.0 + int5; else int4 = int5 + 0.0;
			}
			$r = int4 < 0?4294967296.0 + int4:int4 + 0.0;
			return $r;
		}(this));
	}
	,doActionResize: function(pEvent) {
		this.partSize = this.getPartSize(com.isartdigital.utils.system.DeviceCapabilities.getScreenRect(this).width);
		if(this.partSize != this.previousPartSize) {
			this.buttons[this.buttonOrder[0]].x = -this.partSize * 2;
			this.buttons[this.buttonOrder[1]].x = -this.partSize;
			this.buttons[this.buttonOrder[2]].x = 0;
			this.buttons[this.buttonOrder[3]].x = this.partSize;
			var _g = 0;
			var _g1 = this.buttons;
			while(_g < _g1.length) {
				var lButton = _g1[_g];
				++_g;
				lButton.resize(this.partSize);
			}
			this.previousPartSize = this.partSize;
		}
	}
	,destroy: function() {
		com.isartdigital.plateformer.Main.getInstance().removeEventListener("GameEvent.GAME_LOOP",$bind(this,this.doActionResize));
		com.isartdigital.plateformer.ui.screens.LevelSelect.instance = null;
		com.isartdigital.utils.ui.Screen.prototype.destroy.call(this);
	}
	,__class__: com.isartdigital.plateformer.ui.screens.LevelSelect
});
com.isartdigital.plateformer.ui.screens.TitleCard = function() {
	this.titleStyle = { font : "90px Arial", fill : "#ffffff", align : "center"};
	com.isartdigital.utils.ui.Screen.call(this);
	this.background = new com.isartdigital.utils.game.StateGraphic("TitleCard_bg",new PIXI.Point(0.5,0.5));
	com.isartdigital.plateformer.ui.screens.TitleCard.title = new PIXI.Text("SVOBODA",this.titleStyle);
	com.isartdigital.utils.sounds.SoundManager.playSound("menu",true);
	this.addChild(this.background);
	this.addChild(com.isartdigital.plateformer.ui.screens.TitleCard.title);
	com.isartdigital.plateformer.ui.screens.TitleCard.title.anchor.set(0.5,4.60);
	this.interactive = true;
	this.buttonMode = true;
	this.click = this.tap = $bind(this,this.onClick);
};
$hxClasses["com.isartdigital.plateformer.ui.screens.TitleCard"] = com.isartdigital.plateformer.ui.screens.TitleCard;
com.isartdigital.plateformer.ui.screens.TitleCard.__name__ = ["com","isartdigital","plateformer","ui","screens","TitleCard"];
com.isartdigital.plateformer.ui.screens.TitleCard.getInstance = function() {
	if(com.isartdigital.plateformer.ui.screens.TitleCard.instance == null) com.isartdigital.plateformer.ui.screens.TitleCard.instance = new com.isartdigital.plateformer.ui.screens.TitleCard();
	return com.isartdigital.plateformer.ui.screens.TitleCard.instance;
};
com.isartdigital.plateformer.ui.screens.TitleCard.__super__ = com.isartdigital.utils.ui.Screen;
com.isartdigital.plateformer.ui.screens.TitleCard.prototype = $extend(com.isartdigital.utils.ui.Screen.prototype,{
	onClick: function(pData) {
		com.isartdigital.utils.sounds.SoundManager.playSound("player_shoot");
		com.isartdigital.plateformer.ui.UIManager.getInstance().openScreen(com.isartdigital.plateformer.ui.screens.LevelSelect.getInstance());
	}
	,destroy: function() {
		com.isartdigital.plateformer.ui.screens.TitleCard.instance = null;
		com.isartdigital.utils.ui.Screen.prototype.destroy.call(this);
	}
	,__class__: com.isartdigital.plateformer.ui.screens.TitleCard
});
com.isartdigital.utils.ArrayUtils = function() { };
$hxClasses["com.isartdigital.utils.ArrayUtils"] = com.isartdigital.utils.ArrayUtils;
com.isartdigital.utils.ArrayUtils.__name__ = ["com","isartdigital","utils","ArrayUtils"];
com.isartdigital.utils.ArrayUtils.destroyArray = function(pArray) {
	var i = pArray.length;
	while(--i >= 0) pArray.pop();
};
com.isartdigital.utils.ArrayUtils.shuffle = function(pArray) {
	var lArray = new Array();
	var lRandomIndex;
	while(pArray.length > 0) {
		lRandomIndex = Math.floor(Math.random() * pArray.length);
		lArray.push(pArray[lRandomIndex]);
		pArray.splice(lRandomIndex,1);
	}
	return lArray;
};
com.isartdigital.utils.ArrayUtils.addIfAlone = function(pValue,pArray) {
	if((function($this) {
		var $r;
		var x = pValue;
		$r = HxOverrides.indexOf(pArray,x,0);
		return $r;
	}(this)) == -1) {
		pArray.push(pValue);
		return true;
	}
	return false;
};
com.isartdigital.utils.ArrayUtils.cleanDouble = function(pArray) {
	var i = pArray.length;
	while((function($this) {
		var $r;
		var a = --i;
		var aNeg = a < 0;
		var bNeg = -1 < 0;
		$r = aNeg != bNeg?aNeg:a > -1;
		return $r;
	}(this))) if((function($this) {
		var $r;
		var _g1 = HxOverrides.indexOf(pArray,pArray[i],0);
		var _g = i;
		$r = (function($this) {
			var $r;
			var $int = _g;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}($this)) != _g1;
		return $r;
	}(this))) pArray.splice(i,1);
};
com.isartdigital.utils.ArrayUtils.keepCommonValue = function(pArray1,pArray2) {
	var i = pArray1.length;
	while((function($this) {
		var $r;
		var a = --i;
		var aNeg = a < 0;
		var bNeg = -1 < 0;
		$r = aNeg != bNeg?aNeg:a > -1;
		return $r;
	}(this))) if(HxOverrides.indexOf(pArray2,pArray1[i],0) == -1) pArray1.splice(i,1);
};
com.isartdigital.utils.Config = function() { };
$hxClasses["com.isartdigital.utils.Config"] = com.isartdigital.utils.Config;
com.isartdigital.utils.Config.__name__ = ["com","isartdigital","utils","Config"];
com.isartdigital.utils.Config.init = function(pConfig) {
	var _g = 0;
	var _g1 = Reflect.fields(pConfig);
	while(_g < _g1.length) {
		var i = _g1[_g];
		++_g;
		Reflect.setField(com.isartdigital.utils.Config._data,i,Reflect.field(pConfig,i));
	}
	if(com.isartdigital.utils.Config._data.version == null) com.isartdigital.utils.Config._data.version = "0.0.0";
	if(com.isartdigital.utils.Config._data.language == null) com.isartdigital.utils.Config._data.language = HxOverrides.substr(window.navigator.language,0,2);
	if(com.isartdigital.utils.Config._data.languages == []) com.isartdigital.utils.Config._data.languages.push(com.isartdigital.utils.Config._data.language);
	if(com.isartdigital.utils.Config._data.debug == null) com.isartdigital.utils.Config._data.debug = false;
	if(com.isartdigital.utils.Config._data.fps == null) com.isartdigital.utils.Config._data.fps = false;
	if(com.isartdigital.utils.Config._data.qrcode == null) com.isartdigital.utils.Config._data.qrcode = false;
	if(com.isartdigital.utils.Config._data.langPath == null) com.isartdigital.utils.Config._data.langPath = "";
	if(com.isartdigital.utils.Config._data.assetsPath == null) com.isartdigital.utils.Config._data.assetsPath = "";
	if(com.isartdigital.utils.Config._data.soundsPath == null) com.isartdigital.utils.Config._data.soundsPath = "";
};
com.isartdigital.utils.Config.get_data = function() {
	return com.isartdigital.utils.Config._data;
};
com.isartdigital.utils.Config.get_version = function() {
	return com.isartdigital.utils.Config._data.version;
};
com.isartdigital.utils.Config.get_language = function() {
	return com.isartdigital.utils.Config.get_data().language;
};
com.isartdigital.utils.Config.get_languages = function() {
	return com.isartdigital.utils.Config.get_data().languages;
};
com.isartdigital.utils.Config.get_debug = function() {
	return com.isartdigital.utils.Config.get_data().debug;
};
com.isartdigital.utils.Config.get_fps = function() {
	return com.isartdigital.utils.Config.get_data().fps;
};
com.isartdigital.utils.Config.get_qrcode = function() {
	return com.isartdigital.utils.Config.get_data().qrcode;
};
com.isartdigital.utils.Config.get_langPath = function() {
	return com.isartdigital.utils.Config._data.langPath;
};
com.isartdigital.utils.Config.get_assetsPath = function() {
	return com.isartdigital.utils.Config._data.assetsPath;
};
com.isartdigital.utils.Config.get_soundsPath = function() {
	return com.isartdigital.utils.Config._data.soundsPath;
};
com.isartdigital.utils.Debug = function() {
};
$hxClasses["com.isartdigital.utils.Debug"] = com.isartdigital.utils.Debug;
com.isartdigital.utils.Debug.__name__ = ["com","isartdigital","utils","Debug"];
com.isartdigital.utils.Debug.getInstance = function() {
	if(com.isartdigital.utils.Debug.instance == null) com.isartdigital.utils.Debug.instance = new com.isartdigital.utils.Debug();
	return com.isartdigital.utils.Debug.instance;
};
com.isartdigital.utils.Debug.error = function(pArg) {
	console.error(pArg);
};
com.isartdigital.utils.Debug.warn = function(pArg) {
	console.warn(pArg);
};
com.isartdigital.utils.Debug.table = function(pArg) {
	console.table(pArg);
};
com.isartdigital.utils.Debug.info = function(pArg) {
	console.info(pArg);
};
com.isartdigital.utils.Debug.prototype = {
	init: function(pGameDispatcher) {
		if(com.isartdigital.utils.Config.get_fps()) {
			this.stats = new Stats();
			this.stats.domElement.style.position = "absolute";
			this.stats.domElement.style.left = "0px";
			this.stats.domElement.style.top = "0px";
			window.document.body.appendChild(this.stats.domElement);
			pGameDispatcher.addEventListener("GameEvent.GAME_LOOP",$bind(this,this.updateStats));
		}
		if(com.isartdigital.utils.Config.get_qrcode()) {
			var lQr = new Image();
			lQr.style.position = "absolute";
			lQr.style.right = "0px";
			lQr.style.bottom = "0px";
			var lSize = Std["int"](0.35 * com.isartdigital.utils.system.DeviceCapabilities.getSizeFactor());
			lQr.src = "https://chart.googleapis.com/chart?chs=" + lSize + "x" + lSize + "&cht=qr&chl=" + window.location.href + "&choe=UTF-8";
			window.document.body.appendChild(lQr);
		}
	}
	,updateStats: function(pEvent) {
		this.stats.end();
		this.stats.begin();
	}
	,__class__: com.isartdigital.utils.Debug
};
com.isartdigital.utils.MathUtils = function() {
};
$hxClasses["com.isartdigital.utils.MathUtils"] = com.isartdigital.utils.MathUtils;
com.isartdigital.utils.MathUtils.__name__ = ["com","isartdigital","utils","MathUtils"];
com.isartdigital.utils.MathUtils.getDistance = function(pPointA,pPointB) {
	return Math.sqrt(Math.pow(pPointA.x - pPointB.x,2) + Math.pow(pPointA.y - pPointB.y,2));
};
com.isartdigital.utils.MathUtils.getDirection = function(pPointA,pPointB) {
	return Math.atan2(pPointA.y - pPointB.y,pPointA.x - pPointB.x);
};
com.isartdigital.utils.MathUtils.prototype = {
	__class__: com.isartdigital.utils.MathUtils
};
com.isartdigital.utils.effetcs = {};
com.isartdigital.utils.effetcs.Trail = function(pTarget,pFrequency,pPersistence) {
	if(pPersistence == null) pPersistence = 0;
	if(pFrequency == null) pFrequency = 0;
	this.oldPos = new PIXI.Point(0,0);
	this.list = [];
	this.counter = 0;
	com.isartdigital.utils.game.GameObject.call(this);
	this.target = pTarget;
	this.frequency = Math.max(0,Math.min(pFrequency,1)) * 4;
	this.persistence = 0.95 + Math.max(0,Math.min(pPersistence,1)) / 20;
	this.target.parent.addChildAt(this,this.target.parent.getChildIndex(this.target));
	this.start();
};
$hxClasses["com.isartdigital.utils.effetcs.Trail"] = com.isartdigital.utils.effetcs.Trail;
com.isartdigital.utils.effetcs.Trail.__name__ = ["com","isartdigital","utils","effetcs","Trail"];
com.isartdigital.utils.effetcs.Trail.__super__ = com.isartdigital.utils.game.GameObject;
com.isartdigital.utils.effetcs.Trail.prototype = $extend(com.isartdigital.utils.game.GameObject.prototype,{
	setModeNormal: function() {
		com.isartdigital.utils.game.GameObject.prototype.setModeNormal.call(this);
		com.isartdigital.plateformer.Main.getInstance().addEventListener("GameEvent.GAME_LOOP",this.doAction);
	}
	,doActionNormal: function() {
		var _g1 = 0;
		var _g = this.list.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.list[i].scale.x *= this.persistence;
			this.list[i].scale.y *= this.persistence;
			this.list[i].alpha *= this.persistence;
		}
		if(this.list.length > 0 && this.list[0].scale.x < 0.1) this.removeChild(this.list.shift());
		if((function($this) {
			var $r;
			var a = ++$this.counter;
			$r = (function($this) {
				var $r;
				var $int = a;
				$r = $int < 0?4294967296.0 + $int:$int + 0.0;
				return $r;
			}($this)) > $this.frequency;
			return $r;
		}(this)) && (this.oldPos.x != this.target.x || this.oldPos.y != this.target.y)) {
			var lCircle = new pixi.display.DisplayObjectContainer();
			var lGraph = new PIXI.Graphics();
			lGraph.beginFill(16777215);
			lGraph.drawCircle(0,0,20);
			lGraph.endFill();
			lCircle.position = this.target.position.clone();
			lCircle.addChild(lGraph);
			this.addChild(lCircle);
			this.list.push(lCircle);
			this.counter = 0;
		}
		this.oldPos = this.target.position.clone();
	}
	,destroy: function() {
		com.isartdigital.plateformer.Main.getInstance().removeEventListener("GameEvent.GAME_LOOP",this.doAction);
		this.target.parent.removeChild(this);
		this.target = null;
		com.isartdigital.utils.game.GameObject.prototype.destroy.call(this);
	}
	,__class__: com.isartdigital.utils.effetcs.Trail
});
com.isartdigital.utils.events = {};
com.isartdigital.utils.events.EventTarget = function() {
	PIXI.EventTarget.call(this);
};
$hxClasses["com.isartdigital.utils.events.EventTarget"] = com.isartdigital.utils.events.EventTarget;
com.isartdigital.utils.events.EventTarget.__name__ = ["com","isartdigital","utils","events","EventTarget"];
com.isartdigital.utils.events.EventTarget.__super__ = PIXI.EventTarget;
com.isartdigital.utils.events.EventTarget.prototype = $extend(PIXI.EventTarget.prototype,{
	__class__: com.isartdigital.utils.events.EventTarget
});
com.isartdigital.utils.events.GameEvent = function(target,name,data) {
	PIXI.Event.call(this,target,name,data);
};
$hxClasses["com.isartdigital.utils.events.GameEvent"] = com.isartdigital.utils.events.GameEvent;
com.isartdigital.utils.events.GameEvent.__name__ = ["com","isartdigital","utils","events","GameEvent"];
com.isartdigital.utils.events.GameEvent.__super__ = PIXI.Event;
com.isartdigital.utils.events.GameEvent.prototype = $extend(PIXI.Event.prototype,{
	__class__: com.isartdigital.utils.events.GameEvent
});
com.isartdigital.utils.events.GameStageEvent = function(target,name,data) {
	PIXI.Event.call(this,target,name,data);
};
$hxClasses["com.isartdigital.utils.events.GameStageEvent"] = com.isartdigital.utils.events.GameStageEvent;
com.isartdigital.utils.events.GameStageEvent.__name__ = ["com","isartdigital","utils","events","GameStageEvent"];
com.isartdigital.utils.events.GameStageEvent.__super__ = PIXI.Event;
com.isartdigital.utils.events.GameStageEvent.prototype = $extend(PIXI.Event.prototype,{
	__class__: com.isartdigital.utils.events.GameStageEvent
});
com.isartdigital.utils.events.LoaderEvent = function(target,name,data) {
	PIXI.Event.call(this,target,name,data);
};
$hxClasses["com.isartdigital.utils.events.LoaderEvent"] = com.isartdigital.utils.events.LoaderEvent;
com.isartdigital.utils.events.LoaderEvent.__name__ = ["com","isartdigital","utils","events","LoaderEvent"];
com.isartdigital.utils.events.LoaderEvent.__super__ = PIXI.Event;
com.isartdigital.utils.events.LoaderEvent.prototype = $extend(PIXI.Event.prototype,{
	__class__: com.isartdigital.utils.events.LoaderEvent
});
com.isartdigital.utils.game.BoxType = $hxClasses["com.isartdigital.utils.game.BoxType"] = { __ename__ : true, __constructs__ : ["NONE","SIMPLE","MULTIPLE","SELF"] };
com.isartdigital.utils.game.BoxType.NONE = ["NONE",0];
com.isartdigital.utils.game.BoxType.NONE.__enum__ = com.isartdigital.utils.game.BoxType;
com.isartdigital.utils.game.BoxType.SIMPLE = ["SIMPLE",1];
com.isartdigital.utils.game.BoxType.SIMPLE.__enum__ = com.isartdigital.utils.game.BoxType;
com.isartdigital.utils.game.BoxType.MULTIPLE = ["MULTIPLE",2];
com.isartdigital.utils.game.BoxType.MULTIPLE.__enum__ = com.isartdigital.utils.game.BoxType;
com.isartdigital.utils.game.BoxType.SELF = ["SELF",3];
com.isartdigital.utils.game.BoxType.SELF.__enum__ = com.isartdigital.utils.game.BoxType;
com.isartdigital.utils.game.Camera = function() {
	this.lastPosition = new PIXI.Point(0,0);
	this.lastInput = [];
	this.delayForCenter = 1;
	this.delayForMoving = 1;
	this.delayForWainting = 120;
	this.delayV = 60;
	this.countV = 0;
	this.delayH = 120;
	this.countH = 0;
	this.inertiaMin = new PIXI.Point(43,10);
	this.inertiaMinWaiting = new PIXI.Point(80,10);
	this.inertiaMinMoving = new PIXI.Point(43,10);
	this.inertiaMax = new PIXI.Point(60,20);
	this.inertiaMaxWaiting = new PIXI.Point(80,20);
	this.inertiaMaxMoving = new PIXI.Point(60,20);
};
$hxClasses["com.isartdigital.utils.game.Camera"] = com.isartdigital.utils.game.Camera;
com.isartdigital.utils.game.Camera.__name__ = ["com","isartdigital","utils","game","Camera"];
com.isartdigital.utils.game.Camera.getInstance = function() {
	if(com.isartdigital.utils.game.Camera.instance == null) com.isartdigital.utils.game.Camera.instance = new com.isartdigital.utils.game.Camera();
	return com.isartdigital.utils.game.Camera.instance;
};
com.isartdigital.utils.game.Camera.prototype = {
	start: function() {
		com.isartdigital.utils.game.Camera.getInstance().setTarget(com.isartdigital.plateformer.game.sprites.GamePlane.getInstance());
		this.setModeIsMoving();
	}
	,setModeIsMoving: function() {
		this.resetLastInput();
		this.inertiaMax = this.inertiaMaxMoving;
		this.inertiaMin = this.inertiaMinMoving;
		this.setFocus(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().get_Camera());
		this.doMove = $bind(this,this.doMoveMoving);
	}
	,doMoveMoving: function() {
		this.changePosition(true);
	}
	,checkLastInput: function() {
		if(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().get_Controller().get_left() || com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().get_Controller().get_right() || com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().get_Controller().get_jump()) {
			if(this.lastInput[0]) this.resetLastInput();
			this.lastInput.push(false);
		} else {
			if(!this.lastInput[0]) this.resetLastInput();
			this.lastInput.push(true);
		}
		if((function($this) {
			var $r;
			var $int = $this.delayForWainting;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}(this)) == this.lastInput.length && this.lastInput[0] && this.doMove != $bind(this,this.doMoveIsWaiting)) this.setModeIsWaiting(); else if((function($this) {
			var $r;
			var int1 = $this.delayForMoving;
			$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
			return $r;
		}(this)) == this.lastInput.length && !this.lastInput[0] && this.doMove != $bind(this,this.doMoveMoving)) this.setModeIsMoving();
	}
	,setModeIsWaiting: function() {
		this.resetLastInput();
		this.inertiaMax = this.inertiaMaxWaiting;
		this.inertiaMin = this.inertiaMinWaiting;
		this.setFocus(com.isartdigital.plateformer.game.sprites.mobile.Player.getInstance().getCenterObject());
		this.doMove = $bind(this,this.doMoveIsWaiting);
	}
	,doMoveIsWaiting: function() {
		if(this.outOfMarge() || (function($this) {
			var $r;
			var a = $this.lastInput.length;
			var b = $this.delayForCenter;
			var aNeg = a < 0;
			var bNeg = b < 0;
			$r = aNeg != bNeg?aNeg:a >= b;
			return $r;
		}(this))) this.changePosition(true);
		this.checkLastInput();
	}
	,outOfMarge: function() {
		var limit = com.isartdigital.plateformer.game.GameManager.getInstance().screenLimit;
		if(this.focus.x > limit.x + limit.width / 3 && this.focus.x < limit.x + limit.width - limit.width / 3 && this.focus.y > limit.y + limit.height / 3 && this.focus.y < limit.y + limit.height - limit.height / 4) return false; else return true;
	}
	,resetLastInput: function() {
		this.lastInput.splice(0,this.lastInput.length);
	}
	,setTarget: function(pTarget) {
		if(pTarget.stage == null) {
			com.isartdigital.utils.Debug.warn("L'élément que vous voulez cibler n'est pas attaché à la DisplayList, l'action est ignorée.");
			return;
		}
		this.target = pTarget;
	}
	,setFocus: function(pFocus) {
		this.focus = pFocus;
	}
	,changePosition: function(pDelay) {
		if(pDelay == null) pDelay = true;
		this.countH++;
		this.countV++;
		var lCenter = com.isartdigital.utils.system.DeviceCapabilities.getScreenRect(this.target.parent);
		var lFocus = this.target.toLocal(this.focus.position,this.focus.parent);
		var lInertiaX;
		if(pDelay) lInertiaX = this.getInertiaX(); else lInertiaX = 1;
		var lInertiaY;
		if(pDelay) lInertiaY = this.getInertiaY(); else lInertiaY = 1;
		var lDeltaX = (lCenter.x + lCenter.width / 2 - lFocus.x - this.target.x) / lInertiaX;
		var lDeltaY = (lCenter.y + lCenter.height / 2 - lFocus.y - this.target.y) / lInertiaY;
		if(!this.canMoveX(lDeltaX) && pDelay) lDeltaX = 0;
		if(!this.canMoveY(lDeltaY) && pDelay) lDeltaY = 0;
		this.target.x += lDeltaX;
		this.target.y += lDeltaY;
	}
	,canMoveX: function(lDeltaX) {
		var lCenter = com.isartdigital.plateformer.game.GameManager.getInstance().screenLimit;
		var i = com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list.length;
		while(--i >= 0) if(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list[i].getTypeOfWall().indexOf("LimitLeft") >= 0 && lDeltaX > 0) {
			if(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list[i].x > lCenter.x - com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list[i].width / 2) return false;
		} else if(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list[i].getTypeOfWall().indexOf("LimitRight") >= 0 && lDeltaX < 0) {
			if(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list[i].x < lCenter.x + lCenter.width - com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list[i].width / 2) return false;
		}
		return true;
	}
	,canMoveY: function(lDeltaY) {
		var lCenter = com.isartdigital.plateformer.game.GameManager.getInstance().screenLimit;
		var i = com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list.length;
		while(--i >= 0) if(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list[i].getTypeOfWall().indexOf("Ground") >= 0 && lDeltaY < 0) {
			if(com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list[i].y < lCenter.y + lCenter.height - com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list[i].height / 2) return false;
		}
		return true;
	}
	,getInertiaX: function() {
		if((function($this) {
			var $r;
			var a = $this.countH;
			var b = $this.delayH;
			var aNeg = a < 0;
			var bNeg = b < 0;
			$r = aNeg != bNeg?aNeg:a > b;
			return $r;
		}(this))) return this.inertiaMin.x;
		return this.inertiaMax.x + (function($this) {
			var $r;
			var $int = $this.countH;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}(this)) * (this.inertiaMin.x - this.inertiaMax.x) / (function($this) {
			var $r;
			var int1;
			{
				var int2 = $this.delayH;
				if(int2 < 0) int1 = 4294967296.0 + int2; else int1 = int2 + 0.0;
			}
			$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
			return $r;
		}(this));
	}
	,getInertiaY: function() {
		if((function($this) {
			var $r;
			var a = $this.countV;
			var b = $this.delayV;
			var aNeg = a < 0;
			var bNeg = b < 0;
			$r = aNeg != bNeg?aNeg:a > b;
			return $r;
		}(this))) return this.inertiaMin.y;
		return this.inertiaMax.y + (function($this) {
			var $r;
			var $int = $this.countV;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}(this)) * (this.inertiaMin.y - this.inertiaMax.y) / (function($this) {
			var $r;
			var int1;
			{
				var int2 = $this.delayV;
				if(int2 < 0) int1 = 4294967296.0 + int2; else int1 = int2 + 0.0;
			}
			$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
			return $r;
		}(this));
	}
	,setPosition: function() {
		com.isartdigital.utils.game.GameStage.getInstance().render();
		this.changePosition(false);
	}
	,move: function() {
		this.doMove();
	}
	,resetX: function() {
		this.countH = 0;
	}
	,resetY: function() {
		this.countV = 0;
	}
	,destroy: function() {
		com.isartdigital.utils.game.Camera.instance = null;
	}
	,__class__: com.isartdigital.utils.game.Camera
};
com.isartdigital.utils.game.CollisionManager = function() {
};
$hxClasses["com.isartdigital.utils.game.CollisionManager"] = com.isartdigital.utils.game.CollisionManager;
com.isartdigital.utils.game.CollisionManager.__name__ = ["com","isartdigital","utils","game","CollisionManager"];
com.isartdigital.utils.game.CollisionManager.hitTestObject = function(pObjectA,pObjectB) {
	if(pObjectA.stage == null || pObjectB.stage == null) {
		com.isartdigital.utils.Debug.warn("L'élément que vous ciblez n'est pas attaché à la DisplayList, le test de collision retourne false.");
		return false;
	}
	return com.isartdigital.utils.game.CollisionManager.getIntersection(pObjectA.getBounds(),pObjectB.getBounds());
};
com.isartdigital.utils.game.CollisionManager.hitTestPoint = function(pItem,pGlobalPoint) {
	if(pItem.stage == null) {
		com.isartdigital.utils.Debug.warn("L'élément que vous ciblez n'est pas attaché à la DisplayList, le test de collision retourne false.");
		return false;
	}
	var lPoint = pItem.toLocal(pGlobalPoint);
	var x = lPoint.x;
	var y = lPoint.y;
	if(pItem.hitArea != null && pItem.hitArea.contains != null) return pItem.hitArea.contains(x,y); else if(js.Boot.__instanceof(pItem,PIXI.Sprite)) {
		var lSprite;
		lSprite = js.Boot.__cast(pItem , PIXI.Sprite);
		var lWidth = lSprite.texture.frame.width;
		var lHeight = lSprite.texture.frame.height;
		var lX1 = -lWidth * lSprite.anchor.x;
		var lY1;
		if(x > lX1 && x < lX1 + lWidth) {
			lY1 = -lHeight * lSprite.anchor.y;
			if(y > lY1 && y < lY1 + lHeight) return true;
		}
	} else if(js.Boot.__instanceof(pItem,PIXI.Graphics)) {
		var lGraphicsData = pItem.graphicsData;
		var _g1 = 0;
		var _g = lGraphicsData.length;
		while(_g1 < _g) {
			var i = _g1++;
			var lData = lGraphicsData[i];
			if(!lData.fill) continue;
			if(lData.shape != null && lData.shape.contains(x,y)) return true;
		}
	} else if(js.Boot.__instanceof(pItem,pixi.display.DisplayObjectContainer)) {
		var lContainer;
		lContainer = js.Boot.__cast(pItem , pixi.display.DisplayObjectContainer);
		var lLength = lContainer.children.length;
		var _g2 = 0;
		while(_g2 < lLength) {
			var i1 = _g2++;
			if(com.isartdigital.utils.game.CollisionManager.hitTestPoint(lContainer.children[i1],pGlobalPoint)) return true;
		}
	}
	return false;
};
com.isartdigital.utils.game.CollisionManager.hasCollision = function(pHitBoxA,pHitBoxB,pPointsA,pPointsB) {
	if(pHitBoxA == null || pHitBoxB == null) return false;
	if(!com.isartdigital.utils.game.CollisionManager.hitTestObject(pHitBoxA,pHitBoxB)) return false;
	if(pPointsA == null && pPointsB == null) return true;
	if(pPointsA != null) return com.isartdigital.utils.game.CollisionManager.testPoints(pPointsA,pHitBoxB);
	if(pPointsB != null) return com.isartdigital.utils.game.CollisionManager.testPoints(pPointsB,pHitBoxA);
	return false;
};
com.isartdigital.utils.game.CollisionManager.getIntersection = function(pRectA,pRectB) {
	return !(pRectB.x > pRectA.x + pRectA.width || pRectB.x + pRectB.width < pRectA.x || pRectB.y > pRectA.y + pRectA.height || pRectB.y + pRectB.height < pRectA.y);
};
com.isartdigital.utils.game.CollisionManager.testPoints = function(pHitPoints,pHitBox) {
	var lLength = pHitPoints.length;
	var _g = 0;
	while(_g < lLength) {
		var i = _g++;
		if(com.isartdigital.utils.game.CollisionManager.hitTestPoint(pHitBox,pHitPoints[i])) return true;
	}
	return false;
};
com.isartdigital.utils.game.CollisionManager.prototype = {
	__class__: com.isartdigital.utils.game.CollisionManager
};
com.isartdigital.utils.game.GameStage = function() {
	this._safeZone = new PIXI.Rectangle(0,0,2048,1366);
	this._scaleMode = com.isartdigital.utils.game.GameStageScale.SHOW_ALL;
	this._alignMode = com.isartdigital.utils.game.GameStageAlign.CENTER;
	pixi.display.DisplayObjectContainer.call(this);
	this.gameContainer = new pixi.display.DisplayObjectContainer();
	this.addChild(this.gameContainer);
	this.screensContainer = new pixi.display.DisplayObjectContainer();
	this.addChild(this.screensContainer);
	this.hudContainer = new pixi.display.DisplayObjectContainer();
	this.addChild(this.hudContainer);
	this.popinsContainer = new pixi.display.DisplayObjectContainer();
	this.addChild(this.popinsContainer);
	this.eventTarget = new com.isartdigital.utils.events.EventTarget();
};
$hxClasses["com.isartdigital.utils.game.GameStage"] = com.isartdigital.utils.game.GameStage;
com.isartdigital.utils.game.GameStage.__name__ = ["com","isartdigital","utils","game","GameStage"];
com.isartdigital.utils.game.GameStage.getInstance = function() {
	if(com.isartdigital.utils.game.GameStage.instance == null) com.isartdigital.utils.game.GameStage.instance = new com.isartdigital.utils.game.GameStage();
	return com.isartdigital.utils.game.GameStage.instance;
};
com.isartdigital.utils.game.GameStage.__super__ = pixi.display.DisplayObjectContainer;
com.isartdigital.utils.game.GameStage.prototype = $extend(pixi.display.DisplayObjectContainer.prototype,{
	init: function(pRender,pSafeZoneWidth,pSafeZoneHeight,centerGameContainer,centerScreensContainer,centerPopinContainer) {
		if(centerPopinContainer == null) centerPopinContainer = true;
		if(centerScreensContainer == null) centerScreensContainer = true;
		if(centerGameContainer == null) centerGameContainer = false;
		if(pSafeZoneHeight == null) pSafeZoneHeight = 1366;
		if(pSafeZoneWidth == null) pSafeZoneWidth = 2048;
		this._render = pRender;
		this._safeZone = new PIXI.Rectangle(0,0,(function($this) {
			var $r;
			var $int = pSafeZoneWidth;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}(this)),(function($this) {
			var $r;
			var int1 = pSafeZoneHeight;
			$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
			return $r;
		}(this)));
		if(centerGameContainer) {
			this.gameContainer.x = this.get_safeZone().width / 2;
			this.gameContainer.y = this.get_safeZone().height / 2;
		}
		if(centerScreensContainer) {
			this.screensContainer.x = this.get_safeZone().width / 2;
			this.screensContainer.y = this.get_safeZone().height / 2;
		}
		if(centerPopinContainer) {
			this.popinsContainer.x = this.get_safeZone().width / 2;
			this.popinsContainer.y = this.get_safeZone().height / 2;
		}
	}
	,resize: function() {
		var lWidth = com.isartdigital.utils.system.DeviceCapabilities.get_width();
		var lHeight = com.isartdigital.utils.system.DeviceCapabilities.get_height();
		this.ratioResize = Math.round(10000 * Math.min((function($this) {
			var $r;
			var $int = lWidth;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}(this)) / this.get_safeZone().width,(function($this) {
			var $r;
			var int1 = lHeight;
			$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
			return $r;
		}(this)) / this.get_safeZone().height)) / 10000;
		if(this.get_scaleMode() == com.isartdigital.utils.game.GameStageScale.SHOW_ALL) this.scale.set(this.ratioResize,this.ratioResize); else this.scale.set(1,1);
		if(this.get_alignMode() == com.isartdigital.utils.game.GameStageAlign.LEFT || this.get_alignMode() == com.isartdigital.utils.game.GameStageAlign.TOP_LEFT || this.get_alignMode() == com.isartdigital.utils.game.GameStageAlign.BOTTOM_LEFT) this.x = 0; else if(this.get_alignMode() == com.isartdigital.utils.game.GameStageAlign.RIGHT || this.get_alignMode() == com.isartdigital.utils.game.GameStageAlign.TOP_RIGHT || this.get_alignMode() == com.isartdigital.utils.game.GameStageAlign.BOTTOM_RIGHT) this.x = (function($this) {
			var $r;
			var int2 = lWidth;
			$r = int2 < 0?4294967296.0 + int2:int2 + 0.0;
			return $r;
		}(this)) - this.get_safeZone().width * this.scale.x; else this.x = ((function($this) {
			var $r;
			var int3 = lWidth;
			$r = int3 < 0?4294967296.0 + int3:int3 + 0.0;
			return $r;
		}(this)) - this.get_safeZone().width * this.scale.x) / 2;
		if(this.get_alignMode() == com.isartdigital.utils.game.GameStageAlign.TOP || this.get_alignMode() == com.isartdigital.utils.game.GameStageAlign.TOP_LEFT || this.get_alignMode() == com.isartdigital.utils.game.GameStageAlign.TOP_RIGHT) this.y = 0; else if(this.get_alignMode() == com.isartdigital.utils.game.GameStageAlign.BOTTOM || this.get_alignMode() == com.isartdigital.utils.game.GameStageAlign.BOTTOM_LEFT || this.get_alignMode() == com.isartdigital.utils.game.GameStageAlign.BOTTOM_RIGHT) this.y = (function($this) {
			var $r;
			var int4 = lHeight;
			$r = int4 < 0?4294967296.0 + int4:int4 + 0.0;
			return $r;
		}(this)) - this.get_safeZone().height * this.scale.y; else this.y = ((function($this) {
			var $r;
			var int5 = lHeight;
			$r = int5 < 0?4294967296.0 + int5:int5 + 0.0;
			return $r;
		}(this)) - this.get_safeZone().height * this.scale.y) / 2;
		this.render();
		this.eventTarget.dispatchEvent("GameStageEvent.RESIZE",{ width : lWidth, height : lHeight});
	}
	,render: function() {
		if(this._render != null) this._render();
	}
	,get_alignMode: function() {
		return this._alignMode;
	}
	,set_alignMode: function(pAlign) {
		this._alignMode = pAlign;
		this.resize();
		return this._alignMode;
	}
	,get_scaleMode: function() {
		return this._scaleMode;
	}
	,set_scaleMode: function(pScale) {
		this._scaleMode = pScale;
		this.resize();
		return this._scaleMode;
	}
	,get_safeZone: function() {
		return this._safeZone;
	}
	,getGameContainer: function() {
		return this.gameContainer;
	}
	,getScreensContainer: function() {
		return this.screensContainer;
	}
	,getHudContainer: function() {
		return this.hudContainer;
	}
	,getPopinsContainer: function() {
		return this.popinsContainer;
	}
	,addEventListener: function(pType,pListener) {
		this.eventTarget.addEventListener(pType,pListener);
	}
	,removeEventListener: function(pType,pListener) {
		this.eventTarget.removeEventListener(pType,pListener);
	}
	,destroy: function() {
		this.eventTarget = null;
		com.isartdigital.utils.game.GameStage.instance = null;
	}
	,__class__: com.isartdigital.utils.game.GameStage
});
com.isartdigital.utils.game.GameStageAlign = $hxClasses["com.isartdigital.utils.game.GameStageAlign"] = { __ename__ : true, __constructs__ : ["TOP","TOP_LEFT","TOP_RIGHT","CENTER","LEFT","RIGHT","BOTTOM","BOTTOM_LEFT","BOTTOM_RIGHT"] };
com.isartdigital.utils.game.GameStageAlign.TOP = ["TOP",0];
com.isartdigital.utils.game.GameStageAlign.TOP.__enum__ = com.isartdigital.utils.game.GameStageAlign;
com.isartdigital.utils.game.GameStageAlign.TOP_LEFT = ["TOP_LEFT",1];
com.isartdigital.utils.game.GameStageAlign.TOP_LEFT.__enum__ = com.isartdigital.utils.game.GameStageAlign;
com.isartdigital.utils.game.GameStageAlign.TOP_RIGHT = ["TOP_RIGHT",2];
com.isartdigital.utils.game.GameStageAlign.TOP_RIGHT.__enum__ = com.isartdigital.utils.game.GameStageAlign;
com.isartdigital.utils.game.GameStageAlign.CENTER = ["CENTER",3];
com.isartdigital.utils.game.GameStageAlign.CENTER.__enum__ = com.isartdigital.utils.game.GameStageAlign;
com.isartdigital.utils.game.GameStageAlign.LEFT = ["LEFT",4];
com.isartdigital.utils.game.GameStageAlign.LEFT.__enum__ = com.isartdigital.utils.game.GameStageAlign;
com.isartdigital.utils.game.GameStageAlign.RIGHT = ["RIGHT",5];
com.isartdigital.utils.game.GameStageAlign.RIGHT.__enum__ = com.isartdigital.utils.game.GameStageAlign;
com.isartdigital.utils.game.GameStageAlign.BOTTOM = ["BOTTOM",6];
com.isartdigital.utils.game.GameStageAlign.BOTTOM.__enum__ = com.isartdigital.utils.game.GameStageAlign;
com.isartdigital.utils.game.GameStageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",7];
com.isartdigital.utils.game.GameStageAlign.BOTTOM_LEFT.__enum__ = com.isartdigital.utils.game.GameStageAlign;
com.isartdigital.utils.game.GameStageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",8];
com.isartdigital.utils.game.GameStageAlign.BOTTOM_RIGHT.__enum__ = com.isartdigital.utils.game.GameStageAlign;
com.isartdigital.utils.game.GameStageScale = $hxClasses["com.isartdigital.utils.game.GameStageScale"] = { __ename__ : true, __constructs__ : ["NO_SCALE","SHOW_ALL"] };
com.isartdigital.utils.game.GameStageScale.NO_SCALE = ["NO_SCALE",0];
com.isartdigital.utils.game.GameStageScale.NO_SCALE.__enum__ = com.isartdigital.utils.game.GameStageScale;
com.isartdigital.utils.game.GameStageScale.SHOW_ALL = ["SHOW_ALL",1];
com.isartdigital.utils.game.GameStageScale.SHOW_ALL.__enum__ = com.isartdigital.utils.game.GameStageScale;
com.isartdigital.utils.loader = {};
com.isartdigital.utils.loader.Loader = function() {
	PIXI.EventTarget.call(this);
	com.isartdigital.utils.Debug.info("========== Loader: Initialisation ==========");
	this.txtFiles = [];
	this.assetsFiles = [];
	this.soundsList = [];
	this.soundsFiles = [];
};
$hxClasses["com.isartdigital.utils.loader.Loader"] = com.isartdigital.utils.loader.Loader;
com.isartdigital.utils.loader.Loader.__name__ = ["com","isartdigital","utils","loader","Loader"];
com.isartdigital.utils.loader.Loader.getContent = function(pFile) {
	var key = com.isartdigital.utils.Config.get_assetsPath() + pFile;
	return com.isartdigital.utils.loader.Loader.txtLoaded.get(key);
};
com.isartdigital.utils.loader.Loader.__super__ = PIXI.EventTarget;
com.isartdigital.utils.loader.Loader.prototype = $extend(PIXI.EventTarget.prototype,{
	addTxtFile: function(pUrl) {
		com.isartdigital.utils.Debug.info("Loader: addTxtFile = " + com.isartdigital.utils.Config.get_assetsPath() + pUrl);
		this.txtFiles.push(com.isartdigital.utils.Config.get_assetsPath() + pUrl);
	}
	,addAssetFile: function(pUrl) {
		com.isartdigital.utils.Debug.info("Loader: addAssetFile = " + com.isartdigital.utils.Config.get_assetsPath() + pUrl);
		this.assetsFiles.unshift(com.isartdigital.utils.Config.get_assetsPath() + pUrl);
	}
	,addSoundFile: function(pUrl) {
		com.isartdigital.utils.Debug.info("Loader: addSoundFile = " + com.isartdigital.utils.Config.get_soundsPath() + pUrl);
		this.soundsList.push(com.isartdigital.utils.Config.get_soundsPath() + pUrl);
	}
	,load: function() {
		com.isartdigital.utils.Debug.info("---------- Loader: Chargement ----------");
		this.loaded = 0;
		this.loadSoundsLists();
	}
	,loadSoundsLists: function() {
		if(this.soundsList.length > 0) {
			var lLoader = new PIXI.JsonLoader(this.soundsList.shift());
			lLoader.addEventListener("loaded",$bind(this,this.onSoundsListsLoaded));
			lLoader.load();
		} else {
			this.nbFiles = this.txtFiles.length + this.assetsFiles.length + this.soundsFiles.length;
			this.loadNext();
		}
	}
	,onSoundsListsLoaded: function(pEvent) {
		com.isartdigital.utils.Debug.info("Loader: " + Std.string(pEvent.target.url) + " chargé");
		pEvent.target.removeEventListener("loaded",$bind(this,this.onSoundsListsLoaded));
		var lList = (js.Boot.__cast(pEvent.target , PIXI.JsonLoader)).json;
		this.addSounds(Reflect.field(lList,"fxs"),false,Reflect.field(lList,"extensions"));
		this.addSounds(Reflect.field(lList,"musics"),true,Reflect.field(lList,"extensions"));
		this.loadSoundsLists();
	}
	,addSounds: function(pList,pLoop,pExtensions) {
		var _g = 0;
		var _g1 = Reflect.fields(pList);
		while(_g < _g1.length) {
			var lID = _g1[_g];
			++_g;
			this.soundsFiles.push({ name : lID, options : { urls : (function($this) {
				var $r;
				var _g2 = [];
				{
					var _g4 = 0;
					var _g3 = pExtensions.length;
					while(_g4 < _g3) {
						var i = _g4++;
						_g2.push(com.isartdigital.utils.Config.get_soundsPath() + lID + "." + pExtensions[i]);
					}
				}
				$r = _g2;
				return $r;
			}(this)), volume : Reflect.field(pList,lID) / 100, loop : pLoop, onload : $bind(this,this.onSoundLoaded)}});
		}
	}
	,loadNext: function() {
		if(this.txtFiles.length > 0) {
			var lLoader = new PIXI.JsonLoader(this.txtFiles.shift());
			lLoader.addEventListener("loaded",$bind(this,this.onTxtLoaded));
			lLoader.load();
		} else if(this.assetsFiles != null) {
			var lLoader1 = new PIXI.AssetLoader(this.assetsFiles);
			lLoader1.addEventListener("onProgress",$bind(this,this.onAssetLoaded));
			lLoader1.load();
		} else if(this.soundsFiles.length > 0) com.isartdigital.utils.sounds.SoundManager.addSound(this.soundsFiles[0].name,new window.Howl(this.soundsFiles[0].options)); else this.onComplete();
	}
	,onTxtLoaded: function(pEvent) {
		pEvent.target.removeEventListener("loaded",$bind(this,this.onTxtLoaded));
		var k = pEvent.target.url;
		var v = (js.Boot.__cast(pEvent.target , PIXI.JsonLoader)).json;
		com.isartdigital.utils.loader.Loader.txtLoaded.set(k,v);
		v;
		this.currentLoadComplete();
		com.isartdigital.utils.Debug.info("Loader: " + Std.string(pEvent.target.url) + " chargé (" + this.loaded + "/" + this.nbFiles + ")");
		this.loadNext();
	}
	,onAssetLoaded: function(pEvent) {
		if(js.Boot.__instanceof(pEvent.content.loader,PIXI.JsonLoader)) {
			var k = pEvent.content.loader.url;
			var v = (js.Boot.__cast(pEvent.content.loader , PIXI.JsonLoader)).json;
			com.isartdigital.utils.loader.Loader.txtLoaded.set(k,v);
			v;
		}
		this.currentLoadComplete();
		com.isartdigital.utils.Debug.info("Loader: " + pEvent.target.assetURLs[pEvent.target.loadCount] + " chargé (" + this.loaded + "/" + this.nbFiles + ")");
		if(pEvent.target.loadCount == 0) {
			pEvent.target.removeEventListener("onProgress",$bind(this,this.onAssetLoaded));
			this.assetsFiles = null;
			this.loadNext();
		}
	}
	,onSoundLoaded: function() {
		this.currentLoadComplete();
		com.isartdigital.utils.Debug.info("Loader: Son " + this.soundsFiles[0].name + " chargé (" + this.loaded + "/" + this.nbFiles + ")");
		this.soundsFiles.shift();
		this.loadNext();
	}
	,currentLoadComplete: function() {
		this.loaded++;
		this.dispatchEvent("LoaderEvent.PROGRESS",{ loaded : this.loaded, total : this.nbFiles});
	}
	,onComplete: function() {
		com.isartdigital.utils.Debug.info("---------- Loader: Fin ----------");
		this.dispatchEvent("LoaderEvent.COMPLETE");
	}
	,__class__: com.isartdigital.utils.loader.Loader
});
com.isartdigital.utils.sounds = {};
com.isartdigital.utils.sounds.StateSounds = $hxClasses["com.isartdigital.utils.sounds.StateSounds"] = { __ename__ : true, __constructs__ : ["MUTE","UNMUTE"] };
com.isartdigital.utils.sounds.StateSounds.MUTE = ["MUTE",0];
com.isartdigital.utils.sounds.StateSounds.MUTE.__enum__ = com.isartdigital.utils.sounds.StateSounds;
com.isartdigital.utils.sounds.StateSounds.UNMUTE = ["UNMUTE",1];
com.isartdigital.utils.sounds.StateSounds.UNMUTE.__enum__ = com.isartdigital.utils.sounds.StateSounds;
com.isartdigital.utils.sounds.SoundManager = function() {
};
$hxClasses["com.isartdigital.utils.sounds.SoundManager"] = com.isartdigital.utils.sounds.SoundManager;
com.isartdigital.utils.sounds.SoundManager.__name__ = ["com","isartdigital","utils","sounds","SoundManager"];
com.isartdigital.utils.sounds.SoundManager.addSound = function(pName,pSound) {
	if(com.isartdigital.utils.sounds.SoundManager.list == null) com.isartdigital.utils.sounds.SoundManager.list = new haxe.ds.StringMap();
	com.isartdigital.utils.sounds.SoundManager.list.set(pName,pSound);
	pSound;
};
com.isartdigital.utils.sounds.SoundManager.getSound = function(pName) {
	return com.isartdigital.utils.sounds.SoundManager.list.get(pName);
};
com.isartdigital.utils.sounds.SoundManager.playSound = function(pName,pLoop) {
	if(pLoop == null) pLoop = false;
	if(com.isartdigital.utils.sounds.SoundManager.stateMute == com.isartdigital.utils.sounds.StateSounds.UNMUTE) com.isartdigital.utils.sounds.SoundManager.getSound(pName).play().loop(pLoop);
};
com.isartdigital.utils.sounds.SoundManager.mute = function() {
	var $it0 = com.isartdigital.utils.sounds.SoundManager.list.iterator();
	while( $it0.hasNext() ) {
		var lSound = $it0.next();
		lSound.mute();
	}
	com.isartdigital.utils.sounds.SoundManager.getSound("menu").stop();
	com.isartdigital.utils.sounds.SoundManager.stateMute = com.isartdigital.utils.sounds.StateSounds.MUTE;
};
com.isartdigital.utils.sounds.SoundManager.unmute = function() {
	var $it0 = com.isartdigital.utils.sounds.SoundManager.list.iterator();
	while( $it0.hasNext() ) {
		var lSound = $it0.next();
		lSound.unmute();
	}
	com.isartdigital.utils.sounds.SoundManager.getSound("menu").play();
	com.isartdigital.utils.sounds.SoundManager.stateMute = com.isartdigital.utils.sounds.StateSounds.UNMUTE;
};
com.isartdigital.utils.sounds.SoundManager.prototype = {
	__class__: com.isartdigital.utils.sounds.SoundManager
};
com.isartdigital.utils.system = {};
com.isartdigital.utils.system.DeviceCapabilities = function() { };
$hxClasses["com.isartdigital.utils.system.DeviceCapabilities"] = com.isartdigital.utils.system.DeviceCapabilities;
com.isartdigital.utils.system.DeviceCapabilities.__name__ = ["com","isartdigital","utils","system","DeviceCapabilities"];
com.isartdigital.utils.system.DeviceCapabilities.get_height = function() {
	return window.innerHeight;
};
com.isartdigital.utils.system.DeviceCapabilities.get_width = function() {
	return window.innerWidth;
};
com.isartdigital.utils.system.DeviceCapabilities.get_system = function() {
	if(new EReg("IEMobile","i").match(window.navigator.userAgent)) return "IEMobile"; else if(new EReg("iPhone|iPad|iPod","i").match(window.navigator.userAgent)) return "iOS"; else if(new EReg("BlackBerry","i").match(window.navigator.userAgent)) return "BlackBerry"; else if(new EReg("PlayBook","i").match(window.navigator.userAgent)) return "BlackBerry PlayBook"; else if(new EReg("Android","i").match(window.navigator.userAgent)) return "Android"; else return "Desktop";
};
com.isartdigital.utils.system.DeviceCapabilities.displayFullScreenButton = function() {
	if(!new EReg("(iPad|iPhone|iPod)","g").match(window.navigator.userAgent) && !new EReg("MSIE","i").match(window.navigator.userAgent)) {
		window.document.onfullscreenchange = com.isartdigital.utils.system.DeviceCapabilities.onChangeFullScreen;
		window.document.onwebkitfullscreenchange = com.isartdigital.utils.system.DeviceCapabilities.onChangeFullScreen;
		window.document.onmozfullscreenchange = com.isartdigital.utils.system.DeviceCapabilities.onChangeFullScreen;
		window.document.onmsfullscreenchange = com.isartdigital.utils.system.DeviceCapabilities.onChangeFullScreen;
		com.isartdigital.utils.system.DeviceCapabilities.fullScreenButton = new Image();
		com.isartdigital.utils.system.DeviceCapabilities.fullScreenButton.style.position = "absolute";
		com.isartdigital.utils.system.DeviceCapabilities.fullScreenButton.style.right = "0px";
		com.isartdigital.utils.system.DeviceCapabilities.fullScreenButton.style.top = "0px";
		com.isartdigital.utils.system.DeviceCapabilities.fullScreenButton.style.cursor = "pointer";
		com.isartdigital.utils.system.DeviceCapabilities.fullScreenButton.width = Std["int"](com.isartdigital.utils.system.DeviceCapabilities.getSizeFactor() * 0.075);
		com.isartdigital.utils.system.DeviceCapabilities.fullScreenButton.height = Std["int"](com.isartdigital.utils.system.DeviceCapabilities.getSizeFactor() * 0.075);
		com.isartdigital.utils.system.DeviceCapabilities.fullScreenButton.onclick = com.isartdigital.utils.system.DeviceCapabilities.enterFullscreen;
		com.isartdigital.utils.system.DeviceCapabilities.fullScreenButton.src = com.isartdigital.utils.Config.get_assetsPath() + "fullscreen.png";
		window.document.body.appendChild(com.isartdigital.utils.system.DeviceCapabilities.fullScreenButton);
	}
};
com.isartdigital.utils.system.DeviceCapabilities.enterFullscreen = function(pEvent) {
	var lDocElm = window.document.documentElement;
	if($bind(lDocElm,lDocElm.requestFullscreen) != null) lDocElm.requestFullscreen(); else if(lDocElm.mozRequestFullScreen != null) lDocElm.mozRequestFullScreen(); else if(lDocElm.webkitRequestFullScreen != null) lDocElm.webkitRequestFullScreen(); else if(lDocElm.msRequestFullscreen != null) lDocElm.msRequestFullscreen();
};
com.isartdigital.utils.system.DeviceCapabilities.exitFullscreen = function() {
	if(($_=window.document,$bind($_,$_.exitFullscreen)) != null) window.document.exitFullscreen(); else if(window.document.mozCancelFullScreen != null) window.document.mozCancelFullScreen(); else if(window.document.webkitCancelFullScreen != null) window.document.webkitCancelFullScreen(); else if(window.document.msExitFullscreen) window.document.msExitFullscreen();
};
com.isartdigital.utils.system.DeviceCapabilities.onChangeFullScreen = function(pEvent) {
	if(window.document.fullScreen || (window.document.mozFullScreen || (window.document.webkitIsFullScreen || window.document.msFullscreenElement))) com.isartdigital.utils.system.DeviceCapabilities.fullScreenButton.style.display = "none"; else com.isartdigital.utils.system.DeviceCapabilities.fullScreenButton.style.display = "block";
	pEvent.preventDefault();
};
com.isartdigital.utils.system.DeviceCapabilities.getSizeFactor = function() {
	var lSize = Math.floor(Math.min(window.screen.width,window.screen.height));
	if(com.isartdigital.utils.system.DeviceCapabilities.get_system() == "Desktop") lSize /= 3;
	return lSize;
};
com.isartdigital.utils.system.DeviceCapabilities.getScreenRect = function(pTarget) {
	if(pTarget.stage == null) {
		com.isartdigital.utils.Debug.warn("L'élément que vous ciblez n'est pas attaché à la DisplayList, le repositionnement est ignoré.");
		return null;
	}
	var lTopLeft = new PIXI.Point(0,0);
	var lBottomRight = new PIXI.Point((function($this) {
		var $r;
		var this1 = com.isartdigital.utils.system.DeviceCapabilities.get_width();
		var $int = this1;
		$r = $int < 0?4294967296.0 + $int:$int + 0.0;
		return $r;
	}(this)),(function($this) {
		var $r;
		var this2 = com.isartdigital.utils.system.DeviceCapabilities.get_height();
		var int1 = this2;
		$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
		return $r;
	}(this)));
	lTopLeft = pTarget.toLocal(lTopLeft);
	lBottomRight = pTarget.toLocal(lBottomRight);
	return new PIXI.Rectangle(lTopLeft.x,lTopLeft.y,lBottomRight.x - lTopLeft.x,lBottomRight.y - lTopLeft.y);
};
com.isartdigital.utils.system.DeviceCapabilities.scaleViewport = function() {
	if(com.isartdigital.utils.system.DeviceCapabilities.get_system() == "IEMobile") return;
	com.isartdigital.utils.system.DeviceCapabilities.screenRatio = window.devicePixelRatio;
	window.document.write("<meta name=\"viewport\" content=\"initial-scale=" + Math.round(100 / com.isartdigital.utils.system.DeviceCapabilities.screenRatio) / 100 + ", user-scalable=no, minimal-ui\">");
};
com.isartdigital.utils.system.DeviceCapabilities.init = function(pHd,pMd,pLd) {
	if(pLd == null) pLd = 0.25;
	if(pMd == null) pMd = 0.5;
	if(pHd == null) pHd = 1;
	com.isartdigital.utils.system.DeviceCapabilities.texturesRatios.set("hd",pHd);
	pHd;
	com.isartdigital.utils.system.DeviceCapabilities.texturesRatios.set("md",pMd);
	pMd;
	com.isartdigital.utils.system.DeviceCapabilities.texturesRatios.set("ld",pLd);
	pLd;
	if(com.isartdigital.utils.Config.get_data().texture != null && com.isartdigital.utils.Config.get_data().texture != "") com.isartdigital.utils.system.DeviceCapabilities.textureType = com.isartdigital.utils.Config.get_data().texture; else {
		var lRatio = Math.min(window.screen.width * com.isartdigital.utils.system.DeviceCapabilities.screenRatio / com.isartdigital.utils.game.GameStage.getInstance().get_safeZone().width,window.screen.height * com.isartdigital.utils.system.DeviceCapabilities.screenRatio / com.isartdigital.utils.game.GameStage.getInstance().get_safeZone().height);
		if(lRatio <= 0.25) com.isartdigital.utils.system.DeviceCapabilities.textureType = "ld"; else if(lRatio <= 0.5) com.isartdigital.utils.system.DeviceCapabilities.textureType = "md"; else com.isartdigital.utils.system.DeviceCapabilities.textureType = "hd";
	}
	com.isartdigital.utils.system.DeviceCapabilities.textureRatio = com.isartdigital.utils.system.DeviceCapabilities.texturesRatios.get(com.isartdigital.utils.system.DeviceCapabilities.textureType);
};
com.isartdigital.utils.ui.Keyboard = function() {
};
$hxClasses["com.isartdigital.utils.ui.Keyboard"] = com.isartdigital.utils.ui.Keyboard;
com.isartdigital.utils.ui.Keyboard.__name__ = ["com","isartdigital","utils","ui","Keyboard"];
com.isartdigital.utils.ui.Keyboard.prototype = {
	__class__: com.isartdigital.utils.ui.Keyboard
};
com.isartdigital.utils.ui.UIPosition = function() {
};
$hxClasses["com.isartdigital.utils.ui.UIPosition"] = com.isartdigital.utils.ui.UIPosition;
com.isartdigital.utils.ui.UIPosition.__name__ = ["com","isartdigital","utils","ui","UIPosition"];
com.isartdigital.utils.ui.UIPosition.setPosition = function(pTarget,pPosition,pOffsetX,pOffsetY) {
	if(pOffsetY == null) pOffsetY = 0;
	if(pOffsetX == null) pOffsetX = 0;
	if(pTarget.stage == null) {
		com.isartdigital.utils.Debug.warn("L'élément que vous voulez repositionner n'est pas attaché à la DisplayList, le repositionnement est ignoré.");
		return;
	}
	var lScreen = com.isartdigital.utils.system.DeviceCapabilities.getScreenRect(pTarget.parent);
	var lTopLeft = new PIXI.Point(lScreen.x,lScreen.y);
	var lBottomRight = new PIXI.Point(lScreen.x + lScreen.width,lScreen.y + lScreen.height);
	if(pPosition == "top" || pPosition == "topLeft" || pPosition == "topRight") pTarget.y = lTopLeft.y + pOffsetY;
	if(pPosition == "bottom" || pPosition == "bottomLeft" || pPosition == "bottomRight") pTarget.y = lBottomRight.y - pOffsetY;
	if(pPosition == "left" || pPosition == "topLeft" || pPosition == "bottomLeft") pTarget.x = lTopLeft.x + pOffsetX;
	if(pPosition == "right" || pPosition == "topRight" || pPosition == "bottomRight") pTarget.x = lBottomRight.x - pOffsetX;
	if(pPosition == "fitWidth" || pPosition == "fitScreen") {
		pTarget.x = lTopLeft.x;
		pTarget.width = lBottomRight.x - lTopLeft.x;
	}
	if(pPosition == "fitHeight" || pPosition == "fitScreen") {
		pTarget.y = lTopLeft.y;
		pTarget.height = lBottomRight.y - lTopLeft.y;
	}
};
com.isartdigital.utils.ui.UIPosition.prototype = {
	__class__: com.isartdigital.utils.ui.UIPosition
};
var haxe = {};
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe.Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
};
haxe.ds = {};
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,__class__: haxe.ds.StringMap
};
haxe.io = {};
haxe.io.Eof = function() { };
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
};
haxe.unit = {};
haxe.unit.TestCase = function() {
};
$hxClasses["haxe.unit.TestCase"] = haxe.unit.TestCase;
haxe.unit.TestCase.__name__ = ["haxe","unit","TestCase"];
haxe.unit.TestCase.prototype = {
	setup: function() {
	}
	,tearDown: function() {
	}
	,print: function(v) {
		haxe.unit.TestRunner.print(v);
	}
	,assertTrue: function(b,c) {
		this.currentTest.done = true;
		if(b == false) {
			this.currentTest.success = false;
			this.currentTest.error = "expected true but was false";
			this.currentTest.posInfos = c;
			throw this.currentTest;
		}
	}
	,assertFalse: function(b,c) {
		this.currentTest.done = true;
		if(b == true) {
			this.currentTest.success = false;
			this.currentTest.error = "expected false but was true";
			this.currentTest.posInfos = c;
			throw this.currentTest;
		}
	}
	,assertEquals: function(expected,actual,c) {
		this.currentTest.done = true;
		if(actual != expected) {
			this.currentTest.success = false;
			this.currentTest.error = "expected '" + Std.string(expected) + "' but was '" + Std.string(actual) + "'";
			this.currentTest.posInfos = c;
			throw this.currentTest;
		}
	}
	,__class__: haxe.unit.TestCase
};
haxe.unit.TestRunner = function() { };
$hxClasses["haxe.unit.TestRunner"] = haxe.unit.TestRunner;
haxe.unit.TestRunner.__name__ = ["haxe","unit","TestRunner"];
haxe.unit.TestRunner.print = function(v) {
	var msg = js.Boot.__string_rec(v,"");
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) {
		msg = msg.split("\n").join("<br/>");
		d.innerHTML += StringTools.htmlEscape(msg) + "<br/>";
	} else if(typeof process != "undefined" && process.stdout != null && process.stdout.write != null) process.stdout.write(msg); else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
haxe.unit.TestStatus = function() { };
$hxClasses["haxe.unit.TestStatus"] = haxe.unit.TestStatus;
haxe.unit.TestStatus.__name__ = ["haxe","unit","TestStatus"];
haxe.unit.TestStatus.prototype = {
	__class__: haxe.unit.TestStatus
};
var js = {};
js.Boot = function() { };
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
};
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
};
js.Cookie = function() { };
$hxClasses["js.Cookie"] = js.Cookie;
js.Cookie.__name__ = ["js","Cookie"];
js.Cookie.set = function(name,value,expireDelay,path,domain) {
	var s = name + "=" + encodeURIComponent(value);
	if(expireDelay != null) {
		var d = DateTools.delta(new Date(),expireDelay * 1000);
		s += ";expires=" + d.toGMTString();
	}
	if(path != null) s += ";path=" + path;
	if(domain != null) s += ";domain=" + domain;
	window.document.cookie = s;
};
js.Cookie.all = function() {
	var h = new haxe.ds.StringMap();
	var a = window.document.cookie.split(";");
	var _g = 0;
	while(_g < a.length) {
		var e = a[_g];
		++_g;
		e = StringTools.ltrim(e);
		var t = e.split("=");
		if(t.length < 2) continue;
		h.set(t[0],decodeURIComponent(t[1].split("+").join(" ")));
	}
	return h;
};
js.Cookie.get = function(name) {
	return js.Cookie.all().get(name);
};
js.Cookie.exists = function(name) {
	return js.Cookie.all().exists(name);
};
pixi.DomDefinitions = function() { };
$hxClasses["pixi.DomDefinitions"] = pixi.DomDefinitions;
pixi.DomDefinitions.__name__ = ["pixi","DomDefinitions"];
pixi.renderers = {};
pixi.renderers.IRenderer = function() { };
$hxClasses["pixi.renderers.IRenderer"] = pixi.renderers.IRenderer;
pixi.renderers.IRenderer.__name__ = ["pixi","renderers","IRenderer"];
pixi.renderers.IRenderer.prototype = {
	__class__: pixi.renderers.IRenderer
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
com.isartdigital.plateformer.Main.CONFIG_PATH = "config.json";
com.isartdigital.plateformer.Main.DELAY_GAMELOOP = 16;
com.isartdigital.plateformer.game.GameManager.LEVEL_NUMBER = 4;
com.isartdigital.utils.game.StateGraphic.ANIM_SUFFIX = "";
com.isartdigital.utils.game.StateGraphic.BOX_SUFFIX = "box";
com.isartdigital.utils.game.StateGraphic.textureDigits = 4;
com.isartdigital.utils.game.StateGraphic.animAlpha = 1;
com.isartdigital.utils.game.StateGraphic.boxAlpha = 0;
com.isartdigital.plateformer.game.utils.Mobile.list = [];
com.isartdigital.plateformer.game.sprites.immobile.CheckPoint.list = new Array();
com.isartdigital.plateformer.game.sprites.immobile.CheckPoint.USED = "used";
com.isartdigital.plateformer.game.utils.Immobile.immobileList = new Array();
com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.list = new Array();
com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.listObj = new Array();
com.isartdigital.plateformer.game.sprites.immobile.decors.Wall.objMax = 20;
com.isartdigital.plateformer.game.sprites.immobile.decors.Destructible.list = [];
com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic.listObj = new Array();
com.isartdigital.plateformer.game.sprites.immobile.decors.KillZoneStatic.objMax = 20;
com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.list = [];
com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.listObj = new Array();
com.isartdigital.plateformer.game.sprites.immobile.decors.Platform.objMax = 20;
com.isartdigital.plateformer.game.sprites.mobile.Collectable.DETECTION_DISTANCE = 500;
com.isartdigital.plateformer.game.sprites.mobile.Collectable.PIECE_SPEED = 60;
com.isartdigital.plateformer.game.sprites.mobile.Collectable.ADDED = "ghost";
com.isartdigital.plateformer.game.sprites.mobile.Enemy.WAIT_STATE = "wait";
com.isartdigital.plateformer.game.sprites.mobile.Enemy.WALK_STATE = "walk";
com.isartdigital.plateformer.game.sprites.mobile.Enemy.HURT_STATE = "hurt";
com.isartdigital.plateformer.game.sprites.mobile.Enemy.WAITSHOOT_STATE = "waitShoot";
com.isartdigital.plateformer.game.sprites.mobile.Enemy.list = new Array();
com.isartdigital.plateformer.game.sprites.mobile.Player.DOUBLE_JUMP = "Double Jump";
com.isartdigital.plateformer.game.sprites.mobile.Player.SUPER_SHOOT = "Super Shoot";
com.isartdigital.plateformer.game.sprites.mobile.Player.MAGNET = "Magnet";
com.isartdigital.plateformer.game.sprites.mobile.Player.SHIELD = "Shield";
com.isartdigital.plateformer.game.sprites.mobile.Player.WAIT_STATE = "wait";
com.isartdigital.plateformer.game.sprites.mobile.Player.FALL_STATE = "fall";
com.isartdigital.plateformer.game.sprites.mobile.Player.JUMP_STATE = "jump";
com.isartdigital.plateformer.game.sprites.mobile.Player.WALK_STATE = "walk";
com.isartdigital.plateformer.game.sprites.mobile.Player.RECEPTION_STATE = "reception";
com.isartdigital.plateformer.game.sprites.mobile.Player.WAIT_SHOOT_STATE = "waitShoot";
com.isartdigital.plateformer.game.sprites.mobile.Player.FALL_SHOOT_STATE = "fallShoot";
com.isartdigital.plateformer.game.sprites.mobile.Player.JUMP_SHOOT_STATE = "jumpShoot";
com.isartdigital.plateformer.game.sprites.mobile.Player.WALK_SHOOT_STATE = "walkShoot";
com.isartdigital.plateformer.game.sprites.mobile.Player.RECEPTION_SHOOT_STATE = "receptionShoot";
com.isartdigital.plateformer.game.sprites.mobile.Player.HURT_STATE = "hurt";
com.isartdigital.plateformer.game.sprites.mobile.Player.accelerationGround = 16;
com.isartdigital.plateformer.game.sprites.mobile.Player.accelerationAir = 50;
com.isartdigital.plateformer.game.sprites.mobile.Player.frictionGround = 0.5;
com.isartdigital.plateformer.game.sprites.mobile.Player.frictionAir = 0.95;
com.isartdigital.plateformer.game.sprites.mobile.Player.impulse = 50;
com.isartdigital.plateformer.game.sprites.mobile.Player.impulseDuration = 2;
com.isartdigital.plateformer.game.sprites.mobile.Player.cptWinEnd = 60;
com.isartdigital.plateformer.game.sprites.mobile.Player.JUMP_TOLERANCE = 8;
com.isartdigital.plateformer.game.sprites.mobile.Player.shootPowerMinCounter = 50;
com.isartdigital.plateformer.game.sprites.mobile.Player.minShootCounter = 10;
com.isartdigital.plateformer.game.sprites.mobile.Player.COOLDOWN = 28;
com.isartdigital.plateformer.game.sprites.mobile.Player.nbCollectablesForShield = 10;
com.isartdigital.plateformer.game.sprites.mobile.Player.invulnerableTime = 50;
com.isartdigital.plateformer.game.sprites.mobile.Shield.BEGIN_STATE = "begin";
com.isartdigital.plateformer.game.sprites.mobile.Shield.END_STATE = "end";
com.isartdigital.plateformer.game.sprites.mobile.Shoot.SHOOT_SPEED = 40;
com.isartdigital.plateformer.game.sprites.mobile.Shoot.BEGIN_STATE = "begin";
com.isartdigital.plateformer.game.sprites.mobile.Shoot.END_STATE = "end";
com.isartdigital.plateformer.game.sprites.mobile.Shoot.list = new Array();
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemyFire.LIFE = 4;
com.isartdigital.plateformer.game.sprites.mobile.mobilesPath.enemies.EnemySpeed.LIFE = 2;
com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootEnemyTurret.SHOOT_SPEED_TURRET = 25;
com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer.list = new Array();
com.isartdigital.plateformer.game.sprites.mobile.shoots.ShootPlayer.REDUCER_FACTOR = 0.5;
com.isartdigital.plateformer.game.sprites.mobile.shoots.SuperShootPlayer.SUPER_SHOOT_STATE = "SuperShootPlayer_begin";
com.isartdigital.plateformer.game.utils.LevelGenerator.PLAYER = "Player";
com.isartdigital.plateformer.game.utils.LevelGenerator.COLLECTIBLE = "Collectable";
com.isartdigital.plateformer.game.utils.LevelGenerator.CHECKPOINT = "CheckPoint";
com.isartdigital.plateformer.game.utils.LevelGenerator.ENDLEVEL = "EndLevel";
com.isartdigital.plateformer.game.utils.LevelGenerator.WALL = "Wall";
com.isartdigital.plateformer.game.utils.LevelGenerator.KILL_ZONE_STATIC = "KillZoneStatic";
com.isartdigital.plateformer.game.utils.LevelGenerator.KILL_ZONE_DYNAMIC = "KillZoneDynamic";
com.isartdigital.plateformer.game.utils.LevelGenerator.PLATEFORME = "Platform";
com.isartdigital.plateformer.game.utils.LevelGenerator.BRIDGE = "Bridge";
com.isartdigital.plateformer.game.utils.LevelGenerator.LIMITEMAP = "Limit";
com.isartdigital.plateformer.game.utils.LevelGenerator.GROUND = "Ground";
com.isartdigital.plateformer.game.utils.LevelGenerator.DESTRUCTIBLE = "Destructible";
com.isartdigital.plateformer.game.utils.LevelGenerator.ENEMY_TURRET = "EnemyTurret";
com.isartdigital.plateformer.game.utils.LevelGenerator.ENEMY_FIRE = "EnemyFire";
com.isartdigital.plateformer.game.utils.LevelGenerator.ENEMY_BOMB = "EnemyBomb";
com.isartdigital.plateformer.game.utils.LevelGenerator.ENEMY_SPEED = "EnemySpeed";
com.isartdigital.utils.ui.Button.UP = 0;
com.isartdigital.utils.ui.Button.OVER = 1;
com.isartdigital.utils.ui.Button.DOWN = 2;
com.isartdigital.plateformer.ui.hud.Hud.DISTANCE_TOUCH_BUTTON = 200;
com.isartdigital.plateformer.ui.hud.Hud.MARGIN_TOP = 80;
com.isartdigital.plateformer.ui.screens.LevelSelect.MIN_WIDTH_GRAPHIC_ZONE = 2048;
com.isartdigital.plateformer.ui.screens.LevelSelect.MAX_WIDTH_GRAPHIC_ZONE = 2428;
com.isartdigital.plateformer.ui.screens.LevelSelect.MAX_HEIGHT_GRAPHIC_ZONE = 1536;
com.isartdigital.utils.Config._data = { };
com.isartdigital.utils.Debug.QR_SIZE = 0.35;
com.isartdigital.utils.events.GameEvent.GAME_LOOP = "GameEvent.GAME_LOOP";
com.isartdigital.utils.events.GameStageEvent.RESIZE = "GameStageEvent.RESIZE";
com.isartdigital.utils.events.LoaderEvent.PROGRESS = "LoaderEvent.PROGRESS";
com.isartdigital.utils.events.LoaderEvent.COMPLETE = "LoaderEvent.COMPLETE";
com.isartdigital.utils.game.GameStage.SAFE_ZONE_WIDTH = 2048;
com.isartdigital.utils.game.GameStage.SAFE_ZONE_HEIGHT = 1366;
com.isartdigital.utils.loader.Loader.txtLoaded = new haxe.ds.StringMap();
com.isartdigital.utils.sounds.SoundManager.FX = "fxs";
com.isartdigital.utils.sounds.SoundManager.MUSIC = "musics";
com.isartdigital.utils.sounds.SoundManager.stateMute = com.isartdigital.utils.sounds.StateSounds.UNMUTE;
com.isartdigital.utils.system.DeviceCapabilities.SYSTEM_ANDROID = "Android";
com.isartdigital.utils.system.DeviceCapabilities.SYSTEM_IOS = "iOS";
com.isartdigital.utils.system.DeviceCapabilities.SYSTEM_BLACKBERRY = "BlackBerry";
com.isartdigital.utils.system.DeviceCapabilities.SYSTEM_BB_PLAYBOOK = "BlackBerry PlayBook";
com.isartdigital.utils.system.DeviceCapabilities.SYSTEM_WINDOWS_MOBILE = "IEMobile";
com.isartdigital.utils.system.DeviceCapabilities.SYSTEM_DESKTOP = "Desktop";
com.isartdigital.utils.system.DeviceCapabilities.ICON_SIZE = 0.075;
com.isartdigital.utils.system.DeviceCapabilities.TEXTURE_NO_SCALE = "";
com.isartdigital.utils.system.DeviceCapabilities.TEXTURE_HD = "hd";
com.isartdigital.utils.system.DeviceCapabilities.TEXTURE_MD = "md";
com.isartdigital.utils.system.DeviceCapabilities.TEXTURE_LD = "ld";
com.isartdigital.utils.system.DeviceCapabilities.texturesRatios = (function($this) {
	var $r;
	var _g = new haxe.ds.StringMap();
	_g.set("hd",1);
	_g.set("md",0.5);
	_g.set("ld",0.25);
	$r = _g;
	return $r;
}(this));
com.isartdigital.utils.system.DeviceCapabilities.textureRatio = 1;
com.isartdigital.utils.system.DeviceCapabilities.textureType = "";
com.isartdigital.utils.system.DeviceCapabilities.screenRatio = 1;
com.isartdigital.utils.ui.Keyboard.A = 65;
com.isartdigital.utils.ui.Keyboard.B = 66;
com.isartdigital.utils.ui.Keyboard.C = 67;
com.isartdigital.utils.ui.Keyboard.D = 68;
com.isartdigital.utils.ui.Keyboard.E = 69;
com.isartdigital.utils.ui.Keyboard.F = 70;
com.isartdigital.utils.ui.Keyboard.G = 71;
com.isartdigital.utils.ui.Keyboard.H = 72;
com.isartdigital.utils.ui.Keyboard.I = 73;
com.isartdigital.utils.ui.Keyboard.J = 74;
com.isartdigital.utils.ui.Keyboard.K = 75;
com.isartdigital.utils.ui.Keyboard.L = 76;
com.isartdigital.utils.ui.Keyboard.M = 77;
com.isartdigital.utils.ui.Keyboard.N = 78;
com.isartdigital.utils.ui.Keyboard.O = 79;
com.isartdigital.utils.ui.Keyboard.P = 80;
com.isartdigital.utils.ui.Keyboard.Q = 81;
com.isartdigital.utils.ui.Keyboard.R = 82;
com.isartdigital.utils.ui.Keyboard.S = 83;
com.isartdigital.utils.ui.Keyboard.T = 84;
com.isartdigital.utils.ui.Keyboard.U = 85;
com.isartdigital.utils.ui.Keyboard.V = 86;
com.isartdigital.utils.ui.Keyboard.W = 87;
com.isartdigital.utils.ui.Keyboard.X = 88;
com.isartdigital.utils.ui.Keyboard.Y = 89;
com.isartdigital.utils.ui.Keyboard.Z = 90;
com.isartdigital.utils.ui.Keyboard.NUMBER_0 = 48;
com.isartdigital.utils.ui.Keyboard.NUMBER_1 = 49;
com.isartdigital.utils.ui.Keyboard.NUMBER_2 = 50;
com.isartdigital.utils.ui.Keyboard.NUMBER_3 = 51;
com.isartdigital.utils.ui.Keyboard.NUMBER_4 = 52;
com.isartdigital.utils.ui.Keyboard.NUMBER_5 = 53;
com.isartdigital.utils.ui.Keyboard.NUMBER_6 = 54;
com.isartdigital.utils.ui.Keyboard.NUMBER_7 = 55;
com.isartdigital.utils.ui.Keyboard.NUMBER_8 = 56;
com.isartdigital.utils.ui.Keyboard.NUMBER_9 = 57;
com.isartdigital.utils.ui.Keyboard.NUMPAD_0 = 96;
com.isartdigital.utils.ui.Keyboard.NUMPAD_1 = 97;
com.isartdigital.utils.ui.Keyboard.NUMPAD_2 = 98;
com.isartdigital.utils.ui.Keyboard.NUMPAD_3 = 99;
com.isartdigital.utils.ui.Keyboard.NUMPAD_4 = 100;
com.isartdigital.utils.ui.Keyboard.NUMPAD_5 = 101;
com.isartdigital.utils.ui.Keyboard.NUMPAD_6 = 102;
com.isartdigital.utils.ui.Keyboard.NUMPAD_7 = 103;
com.isartdigital.utils.ui.Keyboard.NUMPAD_8 = 104;
com.isartdigital.utils.ui.Keyboard.NUMPAD_9 = 105;
com.isartdigital.utils.ui.Keyboard.NUMPAD_ADD = 107;
com.isartdigital.utils.ui.Keyboard.NUMPAD_DECIMAL = 110;
com.isartdigital.utils.ui.Keyboard.NUMPAD_DIVIDE = 111;
com.isartdigital.utils.ui.Keyboard.NUMPAD_ENTER = 108;
com.isartdigital.utils.ui.Keyboard.NUMPAD_MULTIPLY = 106;
com.isartdigital.utils.ui.Keyboard.NUMPAD_SUBTRACT = 109;
com.isartdigital.utils.ui.Keyboard.F1 = 112;
com.isartdigital.utils.ui.Keyboard.F2 = 113;
com.isartdigital.utils.ui.Keyboard.F3 = 114;
com.isartdigital.utils.ui.Keyboard.F4 = 115;
com.isartdigital.utils.ui.Keyboard.F5 = 116;
com.isartdigital.utils.ui.Keyboard.F6 = 117;
com.isartdigital.utils.ui.Keyboard.F7 = 118;
com.isartdigital.utils.ui.Keyboard.F8 = 119;
com.isartdigital.utils.ui.Keyboard.F9 = 120;
com.isartdigital.utils.ui.Keyboard.F10 = 121;
com.isartdigital.utils.ui.Keyboard.F11 = 122;
com.isartdigital.utils.ui.Keyboard.F12 = 123;
com.isartdigital.utils.ui.Keyboard.F13 = 124;
com.isartdigital.utils.ui.Keyboard.F14 = 125;
com.isartdigital.utils.ui.Keyboard.F15 = 126;
com.isartdigital.utils.ui.Keyboard.LEFT = 37;
com.isartdigital.utils.ui.Keyboard.UP = 38;
com.isartdigital.utils.ui.Keyboard.RIGHT = 39;
com.isartdigital.utils.ui.Keyboard.DOWN = 40;
com.isartdigital.utils.ui.Keyboard.BACKSLASH = 220;
com.isartdigital.utils.ui.Keyboard.BACKSPACE = 8;
com.isartdigital.utils.ui.Keyboard.CAPS_LOCK = 20;
com.isartdigital.utils.ui.Keyboard.COMMA = 188;
com.isartdigital.utils.ui.Keyboard.COMMAND = 15;
com.isartdigital.utils.ui.Keyboard.CONTROL = 17;
com.isartdigital.utils.ui.Keyboard.DELETE = 46;
com.isartdigital.utils.ui.Keyboard.END = 35;
com.isartdigital.utils.ui.Keyboard.ENTER = 13;
com.isartdigital.utils.ui.Keyboard.EQUAL = 187;
com.isartdigital.utils.ui.Keyboard.ESCAPE = 27;
com.isartdigital.utils.ui.Keyboard.HOME = 36;
com.isartdigital.utils.ui.Keyboard.INSERT = 45;
com.isartdigital.utils.ui.Keyboard.LEFTBRACKET = 219;
com.isartdigital.utils.ui.Keyboard.MINUS = 189;
com.isartdigital.utils.ui.Keyboard.PAGE_DOWN = 34;
com.isartdigital.utils.ui.Keyboard.PAGE_UP = 33;
com.isartdigital.utils.ui.Keyboard.PERIOD = 190;
com.isartdigital.utils.ui.Keyboard.QUOTE = 222;
com.isartdigital.utils.ui.Keyboard.RIGHTBRACKET = 221;
com.isartdigital.utils.ui.Keyboard.SEMICOLON = 186;
com.isartdigital.utils.ui.Keyboard.SHIFT = 16;
com.isartdigital.utils.ui.Keyboard.SLASH = 191;
com.isartdigital.utils.ui.Keyboard.SPACE = 32;
com.isartdigital.utils.ui.Keyboard.TAB = 9;
com.isartdigital.utils.ui.Keyboard.MENU = 16777234;
com.isartdigital.utils.ui.Keyboard.SEARCH = 16777247;
com.isartdigital.utils.ui.Keyboard.KEY_DOWN = "keydown";
com.isartdigital.utils.ui.Keyboard.KEY_UP = "keyup";
com.isartdigital.utils.ui.UIPosition.LEFT = "left";
com.isartdigital.utils.ui.UIPosition.RIGHT = "right";
com.isartdigital.utils.ui.UIPosition.TOP = "top";
com.isartdigital.utils.ui.UIPosition.BOTTOM = "bottom";
com.isartdigital.utils.ui.UIPosition.TOP_LEFT = "topLeft";
com.isartdigital.utils.ui.UIPosition.TOP_RIGHT = "topRight";
com.isartdigital.utils.ui.UIPosition.BOTTOM_LEFT = "bottomLeft";
com.isartdigital.utils.ui.UIPosition.BOTTOM_RIGHT = "bottomRight";
com.isartdigital.utils.ui.UIPosition.FIT_WIDTH = "fitWidth";
com.isartdigital.utils.ui.UIPosition.FIT_HEIGHT = "fitHeight";
com.isartdigital.utils.ui.UIPosition.FIT_SCREEN = "fitScreen";
com.isartdigital.plateformer.Main.main();
})();
