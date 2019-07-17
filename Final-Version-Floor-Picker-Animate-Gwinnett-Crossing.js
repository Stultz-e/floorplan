(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Final_Version_Floor_Picker_Animate_Gwinnett_Crossing_atlas_", frames: [[0,0,3879,2565],[3144,2567,931,791],[2102,2567,1040,722],[3070,3360,980,661],[0,2567,1079,801],[1081,2567,1019,741],[2102,3291,966,709],[0,3370,906,678],[1978,4002,727,727],[2707,4023,670,703],[1081,3310,895,731]]}
];


// symbols:



(lib.Asset1 = function() {
	this.initialize(ss["Final_Version_Floor_Picker_Animate_Gwinnett_Crossing_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.building5000 = function() {
	this.initialize(ss["Final_Version_Floor_Picker_Animate_Gwinnett_Crossing_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Building1000nds = function() {
	this.initialize(ss["Final_Version_Floor_Picker_Animate_Gwinnett_Crossing_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.building1000shadow = function() {
	this.initialize(ss["Final_Version_Floor_Picker_Animate_Gwinnett_Crossing_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Building2000 = function() {
	this.initialize(ss["Final_Version_Floor_Picker_Animate_Gwinnett_Crossing_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.building2000shadow = function() {
	this.initialize(ss["Final_Version_Floor_Picker_Animate_Gwinnett_Crossing_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.building3000 = function() {
	this.initialize(ss["Final_Version_Floor_Picker_Animate_Gwinnett_Crossing_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Building3000shadow = function() {
	this.initialize(ss["Final_Version_Floor_Picker_Animate_Gwinnett_Crossing_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Building4000 = function() {
	this.initialize(ss["Final_Version_Floor_Picker_Animate_Gwinnett_Crossing_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.building4000shadow = function() {
	this.initialize(ss["Final_Version_Floor_Picker_Animate_Gwinnett_Crossing_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.building5000shadow = function() {
	this.initialize(ss["Final_Version_Floor_Picker_Animate_Gwinnett_Crossing_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.unt5000downsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.building5000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,302.6,257.1);


(lib.unt5_f1_apt2over = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjEEsIAAgQIgaAAIAAhGICmAAIAABHIgaAAIAAAPgAguDxIAAglIkbAAIAAn3IKTAAIAAGnIiyAAIAAB1g");
	this.shape.setTransform(32.975,29.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,60);


(lib.f3apt20copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ai5ETIAAgPIgbAAIAAoWICfAAIAAARIBZAAIAAgRICwAAIAAHwIjcAAIAAAlIgdAAIAAAQg");
	this.shape.setTransform(21.25,27.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ai5ETIAAgPIgbAAIAAoWICfAAIAAARIBZAAIAAgRICwAAIAAHwIjcAAIAAAlIgdAAIAAAQg");
	this.shape_1.setTransform(21.25,27.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ai5ETIAAgPIgbAAIAAoWICfAAIAAARIBZAAIAAgRICwAAIAAHwIjcAAIAAAlIgdAAIAAAQg");
	this.shape_2.setTransform(21.25,27.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ai5ETIAAgPIgbAAIAAoWICfAAIAAARIBZAAIAAgRICwAAIAAHwIjcAAIAAAlIgdAAIAAAQg");
	this.shape_3.setTransform(21.25,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.5,55);


(lib.f3apt19copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AA3ESIAAgKIhZAAIAAAKIixAAIAAnwIDaAAIAAgpIAeAAIAAgKICXAAIAAAKIAXAAIAAIZg");
	this.shape.setTransform(21.15,27.375);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AA3ESIAAgKIhZAAIAAAKIixAAIAAnwIDaAAIAAgpIAeAAIAAgKICXAAIAAAKIAXAAIAAIZg");
	this.shape_1.setTransform(21.15,27.375);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AA3ESIAAgKIhZAAIAAAKIixAAIAAnwIDaAAIAAgpIAeAAIAAgKICXAAIAAAKIAXAAIAAIZg");
	this.shape_2.setTransform(21.15,27.375);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("AA3ESIAAgKIhZAAIAAAKIixAAIAAnwIDaAAIAAgpIAeAAIAAgKICXAAIAAAKIAXAAIAAIZg");
	this.shape_3.setTransform(21.15,27.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.3,54.8);


(lib.f3apt18copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAlETIAAgQIghAAIAAgnIjdAAIAAnuIC7AAIAAARIBWAAIAAgRIChAAIAAIWIgcAAIAAAPg");
	this.shape.setTransform(21.75,27.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAlETIAAgQIghAAIAAgnIjdAAIAAnuIC7AAIAAARIBWAAIAAgRIChAAIAAIWIgcAAIAAAPg");
	this.shape_1.setTransform(21.75,27.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAlETIAAgQIghAAIAAgnIjdAAIAAnuIC7AAIAAARIBWAAIAAgRIChAAIAAIWIgcAAIAAAPg");
	this.shape_2.setTransform(21.75,27.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AAlETIAAgQIghAAIAAgnIjdAAIAAnuIC7AAIAAARIBWAAIAAgRIChAAIAAIWIgcAAIAAAPg");
	this.shape_3.setTransform(21.75,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.5,55);


(lib.f3apt17copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ag+ElIAAgKIhcAAIAAAKIihAAIAAofIC/AAIAAghIAqAAIAAgKICgAAIAAAKIAnAAIAACRIDHAAIAAGvg");
	this.shape.setTransform(31.625,29.35);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ag+ElIAAgKIhcAAIAAAKIihAAIAAofIC/AAIAAghIAqAAIAAgKICgAAIAAAKIAnAAIAACRIDHAAIAAGvg");
	this.shape_1.setTransform(31.625,29.35);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ag+ElIAAgKIhcAAIAAAKIihAAIAAofIC/AAIAAghIAqAAIAAgKICgAAIAAAKIAnAAIAACRIDHAAIAAGvg");
	this.shape_2.setTransform(31.625,29.35);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("Ag+ElIAAgKIhcAAIAAAKIihAAIAAofIC/AAIAAghIAqAAIAAgKICgAAIAAAKIAnAAIAACRIDHAAIAAGvg");
	this.shape_3.setTransform(31.625,29.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.3,58.7);


(lib.f3apt16copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkMhHIAAAAIg8g8IADgCQAWgWgLggIgQgcIAegdIETAAIAAgQIBjAAIAAARIEAAAIAAGtIjAAAIhLBLg");
	this.shape.setTransform(33.05,26.05);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkMhHIAAAAIg8g8IADgCQAWgWgLggIgQgcIAegdIETAAIAAgQIBjAAIAAARIEAAAIAAGtIjAAAIhLBLg");
	this.shape_1.setTransform(33.05,26.05);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkMhHIAAAAIg8g8IADgCQAWgWgLggIgQgcIAegdIETAAIAAgQIBjAAIAAARIEAAAIAAGtIjAAAIhLBLg");
	this.shape_2.setTransform(33.05,26.05);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkMhHIAAAAIg8g8IADgCQAWgWgLggIgQgcIAegdIETAAIAAgQIBjAAIAAARIEAAAIAAGtIjAAAIhLBLg");
	this.shape_3.setTransform(33.05,26.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.1,52.1);


(lib.f3apt15copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ACXElIAAgKIhTAAIAAAKIl+AAIAAmvIDKAAIAAiRIAnAAIAAgKICbAAIAAAKIArAAIAAAhIC+AAIAAIfg");
	this.shape.setTransform(31.5,29.35);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ACXElIAAgKIhTAAIAAAKIl+AAIAAmvIDKAAIAAiRIAnAAIAAgKICbAAIAAAKIArAAIAAAhIC+AAIAAIfg");
	this.shape_1.setTransform(31.5,29.35);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ACXElIAAgKIhTAAIAAAKIl+AAIAAmvIDKAAIAAiRIAnAAIAAgKICbAAIAAAKIArAAIAAAhIC+AAIAAIfg");
	this.shape_2.setTransform(31.5,29.35);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("ACXElIAAgKIhTAAIAAAKIl+AAIAAmvIDKAAIAAiRIAnAAIAAgKICbAAIAAAKIArAAIAAAhIC+AAIAAIfg");
	this.shape_3.setTransform(31.5,29.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,58.7);


(lib.f3apt14copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjwFMIAAkKIgSAAIAAhbIAQAAIAAkXIAagbIAcAOQAgAKAZgYIA7A9IFLFLIhHBGIAADJg");
	this.shape.setTransform(25.925,33.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjwFMIAAkKIgSAAIAAhbIAQAAIAAkXIAagbIAcAOQAgAKAZgYIA7A9IFLFLIhHBGIAADJg");
	this.shape_1.setTransform(25.925,33.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjwFMIAAkKIgSAAIAAhbIAQAAIAAkXIAagbIAcAOQAgAKAZgYIA7A9IFLFLIhHBGIAADJg");
	this.shape_2.setTransform(25.925,33.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjwFMIAAkKIgSAAIAAhbIAQAAIAAkXIAagbIAcAOQAgAKAZgYIA7A9IFLFLIhHBGIAADJg");
	this.shape_3.setTransform(25.925,33.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.9,66.3);


(lib.f3apt13copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjrEXIAAjtIgqAAIAAgmIgNAAIAAjjIANAAIAAgrIAtAAIAAgNIDhAAIAAANIAoAAIAAArIECAAIAAD5IgMAAIAABYIALAAIAAClg");
	this.shape.setTransform(29.1,27.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjrEXIAAjtIgqAAIAAgmIgNAAIAAjjIANAAIAAgrIAtAAIAAgNIDhAAIAAANIAoAAIAAArIECAAIAAD5IgMAAIAABYIALAAIAAClg");
	this.shape_1.setTransform(29.1,27.95);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjrEXIAAjtIgqAAIAAgmIgNAAIAAjjIANAAIAAgrIAtAAIAAgNIDhAAIAAANIAoAAIAAArIECAAIAAD5IgMAAIAABYIALAAIAAClg");
	this.shape_2.setTransform(29.1,27.95);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("AjrEXIAAjtIgqAAIAAgmIgNAAIAAjjIANAAIAAgrIAtAAIAAgNIDhAAIAAANIAoAAIAAArIECAAIAAD5IgMAAIAABYIALAAIAAClg");
	this.shape_3.setTransform(29.1,27.95);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.2,55.9);


(lib.f3apt12copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDZIAAiaIAOAAIAAhhIgMAAIAAi2IHtAAIAADiIAlAAIAAAhIAPAAIAACVIgPAAIAAAZg");
	this.shape.setTransform(27.425,21.675);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDZIAAiaIAOAAIAAhhIgMAAIAAi2IHtAAIAADiIAlAAIAAAhIAPAAIAACVIgPAAIAAAZg");
	this.shape_1.setTransform(27.425,21.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDZIAAiaIAOAAIAAhhIgMAAIAAi2IHtAAIAADiIAlAAIAAAhIAPAAIAACVIgPAAIAAAZg");
	this.shape_2.setTransform(27.425,21.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDZIAAiaIAOAAIAAhhIgMAAIAAi2IHtAAIAADiIAlAAIAAAhIAPAAIAACVIgPAAIAAAZg");
	this.shape_3.setTransform(27.425,21.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,43.4);


(lib.f3apt11copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjrDYIAAgtIgWAAIAAgaIgNAAIAAiBIANAAIAAgYIAYAAIAAjPIH4AAIAACtIgMAAIAABdIAMAAIAAClg");
	this.shape.setTransform(27.075,21.625);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjrDYIAAgtIgWAAIAAgaIgNAAIAAiBIANAAIAAgYIAYAAIAAjPIH4AAIAACtIgMAAIAABdIAMAAIAAClg");
	this.shape_1.setTransform(27.075,21.625);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjrDYIAAgtIgWAAIAAgaIgNAAIAAiBIANAAIAAgYIAYAAIAAjPIH4AAIAACtIgMAAIAABdIAMAAIAAClg");
	this.shape_2.setTransform(27.075,21.625);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("AjrDYIAAgtIgWAAIAAgaIgNAAIAAiBIANAAIAAgYIAYAAIAAjPIH4AAIAACtIgMAAIAABdIAMAAIAAClg");
	this.shape_3.setTransform(27.075,21.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.2,43.3);


(lib.f3apt10copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDUIgBixIALAAIAAhSIgKAAIAAikIIVAAIAAAbIAPAAIAACWIgPAAIAAAeIgnAAIAADYg");
	this.shape.setTransform(27.475,21.175);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDUIgBixIALAAIAAhSIgKAAIAAikIIVAAIAAAbIAPAAIAACWIgPAAIAAAeIgnAAIAADYg");
	this.shape_1.setTransform(27.475,21.175);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDUIgBixIALAAIAAhSIgKAAIAAikIIVAAIAAAbIAPAAIAACWIgPAAIAAAeIgnAAIAADYg");
	this.shape_2.setTransform(27.475,21.175);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDUIgBixIALAAIAAhSIgKAAIAAikIIVAAIAAAbIAPAAIAACWIgPAAIAAAeIgnAAIAADYg");
	this.shape_3.setTransform(27.475,21.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,42.4);


(lib.f3apt9copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjpDaIAAjSIgZAAIAAgaIgMAAIAAh6IAMAAIAAgcIAYAAIAAgxIH5AAIAAGzg");
	this.shape.setTransform(27.125,21.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjpDaIAAjSIgZAAIAAgaIgMAAIAAh6IAMAAIAAgcIAYAAIAAgxIH5AAIAAGzg");
	this.shape_1.setTransform(27.125,21.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjpDaIAAjSIgZAAIAAgaIgMAAIAAh6IAMAAIAAgcIAYAAIAAgxIH5AAIAAGzg");
	this.shape_2.setTransform(27.125,21.8);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("AjpDaIAAjSIgZAAIAAgaIgMAAIAAh6IAMAAIAAgcIAYAAIAAgxIH5AAIAAGzg");
	this.shape_3.setTransform(27.125,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,43.6);


(lib.f3apt7copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkBg3IBHhHIAAjRIGvAAIAAEQIANAAIAABjIgOAAIAAEMIgcAcQgKgJgQgEQgfgKgYAYIgCADg");
	this.shape.setTransform(25.8,33.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkBg3IBHhHIAAjRIGvAAIAAEQIANAAIAABjIgOAAIAAEMIgcAcQgKgJgQgEQgfgKgYAYIgCADg");
	this.shape_1.setTransform(25.8,33.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkBg3IBHhHIAAjRIGvAAIAAEQIANAAIAABjIgOAAIAAEMIgcAcQgKgJgQgEQgfgKgYAYIgCADg");
	this.shape_2.setTransform(25.8,33.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("AkBg3IBHhHIAAjRIGvAAIAAEQIANAAIAABjIgOAAIAAEMIgcAcQgKgJgQgEQgfgKgYAYIgCADg");
	this.shape_3.setTransform(25.8,33.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.6,67.1);


(lib.f3apt6copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhPEoIAAgSIgpAAIAAiFIDlAAIAACFIgpAAIAAASgAk2D4IAAofICaAAIAAAXIBcAAIAAgXIF3AAIAAGuIm5AAIAABxg");
	this.shape.setTransform(31.1,29.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhPEoIAAgSIgpAAIAAiFIDlAAIAACFIgpAAIAAASgAk2D4IAAofICaAAIAAAXIBcAAIAAgXIF3AAIAAGuIm5AAIAABxg");
	this.shape_1.setTransform(31.1,29.6);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhPEoIAAgSIgpAAIAAiFIDlAAIAACFIgpAAIAAASgAk2D4IAAofICaAAIAAAXIBcAAIAAgXIF3AAIAAGuIm5AAIAABxg");
	this.shape_2.setTransform(31.1,29.6);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhPEoIAAgSIgpAAIAAiFIDlAAIAACFIgpAAIAAASgAk2D4IAAofICaAAIAAAXIBcAAIAAgXIF3AAIAAGuIm5AAIAABxg");
	this.shape_3.setTransform(31.1,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.2,59.2);


(lib.f3apt5copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ag+EAIAAgMIkPAAIAAmsIDLAAIBHhHIGFGGQgVAXAKAfQAFAQAKALIgcAcIkVAAIAAAMg");
	this.shape.setTransform(33.425,25.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ag+EAIAAgMIkPAAIAAmsIDLAAIBHhHIGFGGQgVAXAKAfQAFAQAKALIgcAcIkVAAIAAAMg");
	this.shape_1.setTransform(33.425,25.625);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ag+EAIAAgMIkPAAIAAmsIDLAAIBHhHIGFGGQgVAXAKAfQAFAQAKALIgcAcIkVAAIAAAMg");
	this.shape_2.setTransform(33.425,25.625);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("Ag+EAIAAgMIkPAAIAAmsIDLAAIBHhHIGFGGQgVAXAKAfQAFAQAKALIgcAcIkVAAIAAAMg");
	this.shape_3.setTransform(33.425,25.625);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.9,51.3);


(lib.f3apt4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhHEmIAAgQIgoAAIAAiLIDoAAIAACQIgnAAIAAALgACDD5IAAh4Im8AAIAAmmIF4AAIAAAVIBgAAIAAgVICbAAIAAIeg");
	this.shape.setTransform(31.425,29.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhHEmIAAgQIgoAAIAAiLIDoAAIAACQIgnAAIAAALgACDD5IAAh4Im8AAIAAmmIF4AAIAAAVIBgAAIAAgVICbAAIAAIeg");
	this.shape_1.setTransform(31.425,29.425);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhHEmIAAgQIgoAAIAAiLIDoAAIAACQIgnAAIAAALgACDD5IAAh4Im8AAIAAmmIF4AAIAAAVIBgAAIAAgVICbAAIAAIeg");
	this.shape_2.setTransform(31.425,29.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhHEmIAAgQIgoAAIAAiLIDoAAIAACQIgnAAIAAALgACDD5IAAh4Im8AAIAAmmIF4AAIAAAVIBgAAIAAgVICbAAIAAIeg");
	this.shape_3.setTransform(31.425,29.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.9,58.9);


(lib.f3apt3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAnELIAAgNIhSAAIAAANIisAAIAAm0IDfAAIAAg/IDQAAIAAHzgAjSiuIAAg2IAvAAIAAgZIAXAAIAAgNIB0AAIAAANIAbAAIAABPg");
	this.shape.setTransform(21.625,26.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAnELIAAgNIhSAAIAAANIisAAIAAm0IDfAAIAAg/IDQAAIAAHzgAjSiuIAAg2IAvAAIAAgZIAXAAIAAgNIB0AAIAAANIAbAAIAABPg");
	this.shape_1.setTransform(21.625,26.7);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAnELIAAgNIhSAAIAAANIisAAIAAm0IDfAAIAAg/IDQAAIAAHzgAjSiuIAAg2IAvAAIAAgZIAXAAIAAgNIB0AAIAAANIAbAAIAABPg");
	this.shape_2.setTransform(21.625,26.7);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("AAnELIAAgNIhSAAIAAANIisAAIAAm0IDfAAIAAg/IDQAAIAAHzgAjSiuIAAg2IAvAAIAAgZIAXAAIAAgNIB0AAIAAANIAbAAIAABPg");
	this.shape_3.setTransform(21.625,26.7);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.3,53.4);


(lib.f3apt2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjEEsIAAgQIgaAAIAAhGICmAAIAABHIgaAAIAAAPgAguDxIAAglIkbAAIAAn3IKTAAIAAGnIiyAAIAAB1g");
	this.shape.setTransform(32.975,29.975);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjEEsIAAgQIgaAAIAAhGICmAAIAABHIgaAAIAAAPgAguDxIAAglIkbAAIAAn3IKTAAIAAGnIiyAAIAAB1g");
	this.shape_1.setTransform(32.975,29.975);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjEEsIAAgQIgaAAIAAhGICmAAIAABHIgaAAIAAAPgAguDxIAAglIkbAAIAAn3IKTAAIAAGnIiyAAIAAB1g");
	this.shape_2.setTransform(32.975,29.975);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjEEsIAAgQIgaAAIAAhGICmAAIAABHIgaAAIAAAPgAguDxIAAglIkbAAIAAn3IKTAAIAAGnIiyAAIAAB1g");
	this.shape_3.setTransform(32.975,29.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,60);


(lib.f3apt1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAuEIIAAgNIhdAAIAAANIiiAAIAAnrIDEAAIAABAIDfAAIAAGrgAgDitIAAhNIAVAAIAAgNIB1AAIAAANIAXAAIAAAXIA0AAIAAA2g");
	this.shape.setTransform(21.025,26.35);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAuEIIAAgNIhdAAIAAANIiiAAIAAnrIDEAAIAABAIDfAAIAAGrgAgDitIAAhNIAVAAIAAgNIB1AAIAAANIAXAAIAAAXIA0AAIAAA2g");
	this.shape_1.setTransform(21.025,26.35);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAuEIIAAgNIhdAAIAAANIiiAAIAAnrIDEAAIAABAIDfAAIAAGrgAgDitIAAhNIAVAAIAAgNIB1AAIAAANIAXAAIAAAXIA0AAIAAA2g");
	this.shape_2.setTransform(21.025,26.35);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("AAuEIIAAgNIhdAAIAAANIiiAAIAAnrIDEAAIAABAIDfAAIAAGrgAgDitIAAhNIAVAAIAAgNIB1AAIAAANIAXAAIAAAXIA0AAIAAA2g");
	this.shape_3.setTransform(21.025,26.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.1,52.7);


(lib.f3a8copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ABUEsIAAgNIgdAAIAAhEICxAAIAABBIggAAIAAAQgAiYD7IAAh4Ii0AAIAAmuIGQAAIAAAaIBmAAIAAgaICjAAIAAH8IkgAAIAAAqg");
	this.shape.setTransform(33.275,29.975);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ABUEsIAAgNIgdAAIAAhEICxAAIAABBIggAAIAAAQgAiYD7IAAh4Ii0AAIAAmuIGQAAIAAAaIBmAAIAAgaICjAAIAAH8IkgAAIAAAqg");
	this.shape_1.setTransform(33.275,29.975);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ABUEsIAAgNIgdAAIAAhEICxAAIAABBIggAAIAAAQgAiYD7IAAh4Ii0AAIAAmuIGQAAIAAAaIBmAAIAAgaICjAAIAAH8IkgAAIAAAqg");
	this.shape_2.setTransform(33.275,29.975);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ABUEsIAAgNIgdAAIAAhEICxAAIAABBIggAAIAAAQgAiYD7IAAh4Ii0AAIAAmuIGQAAIAAAaIBmAAIAAgaICjAAIAAH8IkgAAIAAAqg");
	this.shape_3.setTransform(33.275,29.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.6,60);


(lib.f2apt20copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ai5ETIAAgPIgbAAIAAoWICfAAIAAARIBZAAIAAgRICwAAIAAHwIjcAAIAAAlIgdAAIAAAQg");
	this.shape.setTransform(21.25,27.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ai5ETIAAgPIgbAAIAAoWICfAAIAAARIBZAAIAAgRICwAAIAAHwIjcAAIAAAlIgdAAIAAAQg");
	this.shape_1.setTransform(21.25,27.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ai5ETIAAgPIgbAAIAAoWICfAAIAAARIBZAAIAAgRICwAAIAAHwIjcAAIAAAlIgdAAIAAAQg");
	this.shape_2.setTransform(21.25,27.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ai5ETIAAgPIgbAAIAAoWICfAAIAAARIBZAAIAAgRICwAAIAAHwIjcAAIAAAlIgdAAIAAAQg");
	this.shape_3.setTransform(21.25,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.5,55);


(lib.f2apt19copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AA3ESIAAgKIhZAAIAAAKIixAAIAAnwIDaAAIAAgpIAeAAIAAgKICXAAIAAAKIAXAAIAAIZg");
	this.shape.setTransform(21.15,27.375);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AA3ESIAAgKIhZAAIAAAKIixAAIAAnwIDaAAIAAgpIAeAAIAAgKICXAAIAAAKIAXAAIAAIZg");
	this.shape_1.setTransform(21.15,27.375);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AA3ESIAAgKIhZAAIAAAKIixAAIAAnwIDaAAIAAgpIAeAAIAAgKICXAAIAAAKIAXAAIAAIZg");
	this.shape_2.setTransform(21.15,27.375);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AA3ESIAAgKIhZAAIAAAKIixAAIAAnwIDaAAIAAgpIAeAAIAAgKICXAAIAAAKIAXAAIAAIZg");
	this.shape_3.setTransform(21.15,27.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.3,54.8);


(lib.f2apt18copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAlETIAAgQIghAAIAAgnIjdAAIAAnuIC7AAIAAARIBWAAIAAgRIChAAIAAIWIgcAAIAAAPg");
	this.shape.setTransform(21.75,27.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAlETIAAgQIghAAIAAgnIjdAAIAAnuIC7AAIAAARIBWAAIAAgRIChAAIAAIWIgcAAIAAAPg");
	this.shape_1.setTransform(21.75,27.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAlETIAAgQIghAAIAAgnIjdAAIAAnuIC7AAIAAARIBWAAIAAgRIChAAIAAIWIgcAAIAAAPg");
	this.shape_2.setTransform(21.75,27.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AAlETIAAgQIghAAIAAgnIjdAAIAAnuIC7AAIAAARIBWAAIAAgRIChAAIAAIWIgcAAIAAAPg");
	this.shape_3.setTransform(21.75,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.5,55);


(lib.f2apt17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ag+ElIAAgKIhcAAIAAAKIihAAIAAofIC/AAIAAghIAqAAIAAgKICgAAIAAAKIAnAAIAACRIDHAAIAAGvg");
	this.shape.setTransform(31.625,29.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0B59E").s().p("Ag+ElIAAgKIhcAAIAAAKIihAAIAAofIC/AAIAAghIAqAAIAAgKICgAAIAAAKIAnAAIAACRIDHAAIAAGvg");
	this.shape_1.setTransform(31.625,29.35);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ag+ElIAAgKIhcAAIAAAKIihAAIAAofIC/AAIAAghIAqAAIAAgKICgAAIAAAKIAnAAIAACRIDHAAIAAGvg");
	this.shape_2.setTransform(31.625,29.35);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ag+ElIAAgKIhcAAIAAAKIihAAIAAofIC/AAIAAghIAqAAIAAgKICgAAIAAAKIAnAAIAACRIDHAAIAAGvg");
	this.shape_3.setTransform(31.625,29.35);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.3,58.7);


(lib.f2apt16copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkMhHIAAAAIg8g8IADgCQAWgWgLggIgQgcIAegdIETAAIAAgQIBjAAIAAARIEAAAIAAGtIjAAAIhLBLg");
	this.shape.setTransform(33.05,26.05);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkMhHIAAAAIg8g8IADgCQAWgWgLggIgQgcIAegdIETAAIAAgQIBjAAIAAARIEAAAIAAGtIjAAAIhLBLg");
	this.shape_1.setTransform(33.05,26.05);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkMhHIAAAAIg8g8IADgCQAWgWgLggIgQgcIAegdIETAAIAAgQIBjAAIAAARIEAAAIAAGtIjAAAIhLBLg");
	this.shape_2.setTransform(33.05,26.05);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkMhHIAAAAIg8g8IADgCQAWgWgLggIgQgcIAegdIETAAIAAgQIBjAAIAAARIEAAAIAAGtIjAAAIhLBLg");
	this.shape_3.setTransform(33.05,26.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.1,52.1);


(lib.f2apt15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ACXElIAAgKIhTAAIAAAKIl+AAIAAmvIDKAAIAAiRIAnAAIAAgKICbAAIAAAKIArAAIAAAhIC+AAIAAIfg");
	this.shape.setTransform(31.5,29.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0B59E").s().p("ACXElIAAgKIhTAAIAAAKIl+AAIAAmvIDKAAIAAiRIAnAAIAAgKICbAAIAAAKIArAAIAAAhIC+AAIAAIfg");
	this.shape_1.setTransform(31.5,29.35);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ACXElIAAgKIhTAAIAAAKIl+AAIAAmvIDKAAIAAiRIAnAAIAAgKICbAAIAAAKIArAAIAAAhIC+AAIAAIfg");
	this.shape_2.setTransform(31.5,29.35);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ACXElIAAgKIhTAAIAAAKIl+AAIAAmvIDKAAIAAiRIAnAAIAAgKICbAAIAAAKIArAAIAAAhIC+AAIAAIfg");
	this.shape_3.setTransform(31.5,29.35);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,58.7);


(lib.f2apt14copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjwFMIAAkKIgSAAIAAhbIAQAAIAAkXIAagbIAcAOQAgAKAZgYIA7A9IFLFLIhHBGIAADJg");
	this.shape.setTransform(25.925,33.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjwFMIAAkKIgSAAIAAhbIAQAAIAAkXIAagbIAcAOQAgAKAZgYIA7A9IFLFLIhHBGIAADJg");
	this.shape_1.setTransform(25.925,33.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjwFMIAAkKIgSAAIAAhbIAQAAIAAkXIAagbIAcAOQAgAKAZgYIA7A9IFLFLIhHBGIAADJg");
	this.shape_2.setTransform(25.925,33.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjwFMIAAkKIgSAAIAAhbIAQAAIAAkXIAagbIAcAOQAgAKAZgYIA7A9IFLFLIhHBGIAADJg");
	this.shape_3.setTransform(25.925,33.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.9,66.3);


(lib.f2apt13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjrEXIAAjtIgqAAIAAgmIgNAAIAAjjIANAAIAAgrIAtAAIAAgNIDhAAIAAANIAoAAIAAArIECAAIAAD5IgMAAIAABYIALAAIAAClg");
	this.shape.setTransform(29.1,27.95);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjrEXIAAjtIgqAAIAAgmIgNAAIAAjjIANAAIAAgrIAtAAIAAgNIDhAAIAAANIAoAAIAAArIECAAIAAD5IgMAAIAABYIALAAIAAClg");
	this.shape_1.setTransform(29.1,27.95);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjrEXIAAjtIgqAAIAAgmIgNAAIAAjjIANAAIAAgrIAtAAIAAgNIDhAAIAAANIAoAAIAAArIECAAIAAD5IgMAAIAABYIALAAIAAClg");
	this.shape_2.setTransform(29.1,27.95);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjrEXIAAjtIgqAAIAAgmIgNAAIAAjjIANAAIAAgrIAtAAIAAgNIDhAAIAAANIAoAAIAAArIECAAIAAD5IgMAAIAABYIALAAIAAClg");
	this.shape_3.setTransform(29.1,27.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.2,55.9);


(lib.f2apt12copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDZIAAiaIAOAAIAAhhIgMAAIAAi2IHtAAIAADiIAlAAIAAAhIAPAAIAACVIgPAAIAAAZg");
	this.shape.setTransform(27.425,21.675);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDZIAAiaIAOAAIAAhhIgMAAIAAi2IHtAAIAADiIAlAAIAAAhIAPAAIAACVIgPAAIAAAZg");
	this.shape_1.setTransform(27.425,21.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDZIAAiaIAOAAIAAhhIgMAAIAAi2IHtAAIAADiIAlAAIAAAhIAPAAIAACVIgPAAIAAAZg");
	this.shape_2.setTransform(27.425,21.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDZIAAiaIAOAAIAAhhIgMAAIAAi2IHtAAIAADiIAlAAIAAAhIAPAAIAACVIgPAAIAAAZg");
	this.shape_3.setTransform(27.425,21.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,43.4);


(lib.f2apt11copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjrDYIAAgtIgWAAIAAgaIgNAAIAAiBIANAAIAAgYIAYAAIAAjPIH4AAIAACtIgMAAIAABdIAMAAIAAClg");
	this.shape.setTransform(27.075,21.625);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjrDYIAAgtIgWAAIAAgaIgNAAIAAiBIANAAIAAgYIAYAAIAAjPIH4AAIAACtIgMAAIAABdIAMAAIAAClg");
	this.shape_1.setTransform(27.075,21.625);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjrDYIAAgtIgWAAIAAgaIgNAAIAAiBIANAAIAAgYIAYAAIAAjPIH4AAIAACtIgMAAIAABdIAMAAIAAClg");
	this.shape_2.setTransform(27.075,21.625);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjrDYIAAgtIgWAAIAAgaIgNAAIAAiBIANAAIAAgYIAYAAIAAjPIH4AAIAACtIgMAAIAABdIAMAAIAAClg");
	this.shape_3.setTransform(27.075,21.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.2,43.3);


(lib.f2apt10copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDUIgBixIALAAIAAhSIgKAAIAAikIIVAAIAAAbIAPAAIAACWIgPAAIAAAeIgnAAIAADYg");
	this.shape.setTransform(27.475,21.175);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDUIgBixIALAAIAAhSIgKAAIAAikIIVAAIAAAbIAPAAIAACWIgPAAIAAAeIgnAAIAADYg");
	this.shape_1.setTransform(27.475,21.175);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDUIgBixIALAAIAAhSIgKAAIAAikIIVAAIAAAbIAPAAIAACWIgPAAIAAAeIgnAAIAADYg");
	this.shape_2.setTransform(27.475,21.175);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDUIgBixIALAAIAAhSIgKAAIAAikIIVAAIAAAbIAPAAIAACWIgPAAIAAAeIgnAAIAADYg");
	this.shape_3.setTransform(27.475,21.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,42.4);


(lib.f2apt9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjpDaIAAjSIgZAAIAAgaIgMAAIAAh6IAMAAIAAgcIAYAAIAAgxIH5AAIAAGzg");
	this.shape.setTransform(27.125,21.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjpDaIAAjSIgZAAIAAgaIgMAAIAAh6IAMAAIAAgcIAYAAIAAgxIH5AAIAAGzg");
	this.shape_1.setTransform(27.125,21.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjpDaIAAjSIgZAAIAAgaIgMAAIAAh6IAMAAIAAgcIAYAAIAAgxIH5AAIAAGzg");
	this.shape_2.setTransform(27.125,21.8);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjpDaIAAjSIgZAAIAAgaIgMAAIAAh6IAMAAIAAgcIAYAAIAAgxIH5AAIAAGzg");
	this.shape_3.setTransform(27.125,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,43.6);


(lib.f2apt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkBg3IBHhHIAAjRIGvAAIAAEQIANAAIAABjIgOAAIAAEMIgcAcQgKgJgQgEQgfgKgYAYIgCADg");
	this.shape.setTransform(25.8,33.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkBg3IBHhHIAAjRIGvAAIAAEQIANAAIAABjIgOAAIAAEMIgcAcQgKgJgQgEQgfgKgYAYIgCADg");
	this.shape_1.setTransform(25.8,33.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkBg3IBHhHIAAjRIGvAAIAAEQIANAAIAABjIgOAAIAAEMIgcAcQgKgJgQgEQgfgKgYAYIgCADg");
	this.shape_2.setTransform(25.8,33.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkBg3IBHhHIAAjRIGvAAIAAEQIANAAIAABjIgOAAIAAEMIgcAcQgKgJgQgEQgfgKgYAYIgCADg");
	this.shape_3.setTransform(25.8,33.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.6,67.1);


(lib.f2apt6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhPEoIAAgSIgpAAIAAiFIDlAAIAACFIgpAAIAAASgAk2D4IAAofICaAAIAAAXIBcAAIAAgXIF3AAIAAGuIm5AAIAABxg");
	this.shape.setTransform(31.1,29.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhPEoIAAgSIgpAAIAAiFIDlAAIAACFIgpAAIAAASgAk2D4IAAofICaAAIAAAXIBcAAIAAgXIF3AAIAAGuIm5AAIAABxg");
	this.shape_1.setTransform(31.1,29.6);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhPEoIAAgSIgpAAIAAiFIDlAAIAACFIgpAAIAAASgAk2D4IAAofICaAAIAAAXIBcAAIAAgXIF3AAIAAGuIm5AAIAABxg");
	this.shape_2.setTransform(31.1,29.6);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhPEoIAAgSIgpAAIAAiFIDlAAIAACFIgpAAIAAASgAk2D4IAAofICaAAIAAAXIBcAAIAAgXIF3AAIAAGuIm5AAIAABxg");
	this.shape_3.setTransform(31.1,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.2,59.2);


(lib.f2apt5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ag+EAIAAgMIkPAAIAAmsIDLAAIBHhHIGFGGQgVAXAKAfQAFAQAKALIgcAcIkVAAIAAAMg");
	this.shape.setTransform(33.425,25.625);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ag+EAIAAgMIkPAAIAAmsIDLAAIBHhHIGFGGQgVAXAKAfQAFAQAKALIgcAcIkVAAIAAAMg");
	this.shape_1.setTransform(33.425,25.625);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ag+EAIAAgMIkPAAIAAmsIDLAAIBHhHIGFGGQgVAXAKAfQAFAQAKALIgcAcIkVAAIAAAMg");
	this.shape_2.setTransform(33.425,25.625);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ag+EAIAAgMIkPAAIAAmsIDLAAIBHhHIGFGGQgVAXAKAfQAFAQAKALIgcAcIkVAAIAAAMg");
	this.shape_3.setTransform(33.425,25.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.9,51.3);


(lib.f2apt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhHEmIAAgQIgoAAIAAiLIDoAAIAACQIgnAAIAAALgACDD5IAAh4Im8AAIAAmmIF4AAIAAAVIBgAAIAAgVICbAAIAAIeg");
	this.shape.setTransform(31.425,29.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhHEmIAAgQIgoAAIAAiLIDoAAIAACQIgnAAIAAALgACDD5IAAh4Im8AAIAAmmIF4AAIAAAVIBgAAIAAgVICbAAIAAIeg");
	this.shape_1.setTransform(31.425,29.425);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhHEmIAAgQIgoAAIAAiLIDoAAIAACQIgnAAIAAALgACDD5IAAh4Im8AAIAAmmIF4AAIAAAVIBgAAIAAgVICbAAIAAIeg");
	this.shape_2.setTransform(31.425,29.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhHEmIAAgQIgoAAIAAiLIDoAAIAACQIgnAAIAAALgACDD5IAAh4Im8AAIAAmmIF4AAIAAAVIBgAAIAAgVICbAAIAAIeg");
	this.shape_3.setTransform(31.425,29.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.9,58.9);


(lib.f2apt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAnELIAAgNIhSAAIAAANIisAAIAAm0IDfAAIAAg/IDQAAIAAHzgAjSiuIAAg2IAvAAIAAgZIAXAAIAAgNIB0AAIAAANIAbAAIAABPg");
	this.shape.setTransform(21.625,26.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAnELIAAgNIhSAAIAAANIisAAIAAm0IDfAAIAAg/IDQAAIAAHzgAjSiuIAAg2IAvAAIAAgZIAXAAIAAgNIB0AAIAAANIAbAAIAABPg");
	this.shape_1.setTransform(21.625,26.7);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAnELIAAgNIhSAAIAAANIisAAIAAm0IDfAAIAAg/IDQAAIAAHzgAjSiuIAAg2IAvAAIAAgZIAXAAIAAgNIB0AAIAAANIAbAAIAABPg");
	this.shape_2.setTransform(21.625,26.7);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AAnELIAAgNIhSAAIAAANIisAAIAAm0IDfAAIAAg/IDQAAIAAHzgAjSiuIAAg2IAvAAIAAgZIAXAAIAAgNIB0AAIAAANIAbAAIAABPg");
	this.shape_3.setTransform(21.625,26.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.3,53.4);


(lib.f2apt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAuEIIAAgNIhdAAIAAANIiiAAIAAnrIDEAAIAABAIDfAAIAAGrgAgDitIAAhNIAVAAIAAgNIB1AAIAAANIAXAAIAAAXIA0AAIAAA2g");
	this.shape.setTransform(21.025,26.35);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAuEIIAAgNIhdAAIAAANIiiAAIAAnrIDEAAIAABAIDfAAIAAGrgAgDitIAAhNIAVAAIAAgNIB1AAIAAANIAXAAIAAAXIA0AAIAAA2g");
	this.shape_1.setTransform(21.025,26.35);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAuEIIAAgNIhdAAIAAANIiiAAIAAnrIDEAAIAABAIDfAAIAAGrgAgDitIAAhNIAVAAIAAgNIB1AAIAAANIAXAAIAAAXIA0AAIAAA2g");
	this.shape_2.setTransform(21.025,26.35);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AAuEIIAAgNIhdAAIAAANIiiAAIAAnrIDEAAIAABAIDfAAIAAGrgAgDitIAAhNIAVAAIAAgNIB1AAIAAANIAXAAIAAAXIA0AAIAAA2g");
	this.shape_3.setTransform(21.025,26.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.1,52.7);


(lib.f2a8copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ABUEsIAAgNIgdAAIAAhEICxAAIAABBIggAAIAAAQgAiYD7IAAh4Ii0AAIAAmuIGQAAIAAAaIBmAAIAAgaICjAAIAAH8IkgAAIAAAqg");
	this.shape.setTransform(33.275,29.975);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ABUEsIAAgNIgdAAIAAhEICxAAIAABBIggAAIAAAQgAiYD7IAAh4Ii0AAIAAmuIGQAAIAAAaIBmAAIAAgaICjAAIAAH8IkgAAIAAAqg");
	this.shape_1.setTransform(33.275,29.975);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ABUEsIAAgNIgdAAIAAhEICxAAIAABBIggAAIAAAQgAiYD7IAAh4Ii0AAIAAmuIGQAAIAAAaIBmAAIAAgaICjAAIAAH8IkgAAIAAAqg");
	this.shape_2.setTransform(33.275,29.975);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ABUEsIAAgNIgdAAIAAhEICxAAIAABBIggAAIAAAQgAiYD7IAAh4Ii0AAIAAmuIGQAAIAAAaIBmAAIAAgaICjAAIAAH8IkgAAIAAAqg");
	this.shape_3.setTransform(33.275,29.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.6,60);


(lib.f1apt20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ai5ETIAAgPIgbAAIAAoWICfAAIAAARIBZAAIAAgRICwAAIAAHwIjcAAIAAAlIgdAAIAAAQg");
	this.shape.setTransform(21.25,27.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ai5ETIAAgPIgbAAIAAoWICfAAIAAARIBZAAIAAgRICwAAIAAHwIjcAAIAAAlIgdAAIAAAQg");
	this.shape_1.setTransform(21.25,27.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ai5ETIAAgPIgbAAIAAoWICfAAIAAARIBZAAIAAgRICwAAIAAHwIjcAAIAAAlIgdAAIAAAQg");
	this.shape_2.setTransform(21.25,27.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ai5ETIAAgPIgbAAIAAoWICfAAIAAARIBZAAIAAgRICwAAIAAHwIjcAAIAAAlIgdAAIAAAQg");
	this.shape_3.setTransform(21.25,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.5,55);


(lib.f1apt19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AA3ESIAAgKIhZAAIAAAKIixAAIAAnwIDaAAIAAgpIAeAAIAAgKICXAAIAAAKIAXAAIAAIZg");
	this.shape.setTransform(21.15,27.375);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AA3ESIAAgKIhZAAIAAAKIixAAIAAnwIDaAAIAAgpIAeAAIAAgKICXAAIAAAKIAXAAIAAIZg");
	this.shape_1.setTransform(21.15,27.375);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AA3ESIAAgKIhZAAIAAAKIixAAIAAnwIDaAAIAAgpIAeAAIAAgKICXAAIAAAKIAXAAIAAIZg");
	this.shape_2.setTransform(21.15,27.375);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("AA3ESIAAgKIhZAAIAAAKIixAAIAAnwIDaAAIAAgpIAeAAIAAgKICXAAIAAAKIAXAAIAAIZg");
	this.shape_3.setTransform(21.15,27.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.3,54.8);


(lib.f1apt18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAlETIAAgQIghAAIAAgnIjdAAIAAnuIC7AAIAAARIBWAAIAAgRIChAAIAAIWIgcAAIAAAPg");
	this.shape.setTransform(21.75,27.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAlETIAAgQIghAAIAAgnIjdAAIAAnuIC7AAIAAARIBWAAIAAgRIChAAIAAIWIgcAAIAAAPg");
	this.shape_1.setTransform(21.75,27.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAlETIAAgQIghAAIAAgnIjdAAIAAnuIC7AAIAAARIBWAAIAAgRIChAAIAAIWIgcAAIAAAPg");
	this.shape_2.setTransform(21.75,27.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AAlETIAAgQIghAAIAAgnIjdAAIAAnuIC7AAIAAARIBWAAIAAgRIChAAIAAIWIgcAAIAAAPg");
	this.shape_3.setTransform(21.75,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.5,55);


(lib.f1apt17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ag+ElIAAgKIhcAAIAAAKIihAAIAAofIC/AAIAAghIAqAAIAAgKICgAAIAAAKIAnAAIAACRIDHAAIAAGvg");
	this.shape.setTransform(31.625,29.35);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ag+ElIAAgKIhcAAIAAAKIihAAIAAofIC/AAIAAghIAqAAIAAgKICgAAIAAAKIAnAAIAACRIDHAAIAAGvg");
	this.shape_1.setTransform(31.625,29.35);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ag+ElIAAgKIhcAAIAAAKIihAAIAAofIC/AAIAAghIAqAAIAAgKICgAAIAAAKIAnAAIAACRIDHAAIAAGvg");
	this.shape_2.setTransform(31.625,29.35);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("Ag+ElIAAgKIhcAAIAAAKIihAAIAAofIC/AAIAAghIAqAAIAAgKICgAAIAAAKIAnAAIAACRIDHAAIAAGvg");
	this.shape_3.setTransform(31.625,29.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.3,58.7);


(lib.f1apt16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkMhHIAAAAIg8g8IADgCQAWgWgLggIgQgcIAegdIETAAIAAgQIBjAAIAAARIEAAAIAAGtIjAAAIhLBLg");
	this.shape.setTransform(33.05,26.05);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkMhHIAAAAIg8g8IADgCQAWgWgLggIgQgcIAegdIETAAIAAgQIBjAAIAAARIEAAAIAAGtIjAAAIhLBLg");
	this.shape_1.setTransform(33.05,26.05);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkMhHIAAAAIg8g8IADgCQAWgWgLggIgQgcIAegdIETAAIAAgQIBjAAIAAARIEAAAIAAGtIjAAAIhLBLg");
	this.shape_2.setTransform(33.05,26.05);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkMhHIAAAAIg8g8IADgCQAWgWgLggIgQgcIAegdIETAAIAAgQIBjAAIAAARIEAAAIAAGtIjAAAIhLBLg");
	this.shape_3.setTransform(33.05,26.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.1,52.1);


(lib.f1apt15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ACXElIAAgKIhTAAIAAAKIl+AAIAAmvIDKAAIAAiRIAnAAIAAgKICbAAIAAAKIArAAIAAAhIC+AAIAAIfg");
	this.shape.setTransform(31.5,29.35);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ACXElIAAgKIhTAAIAAAKIl+AAIAAmvIDKAAIAAiRIAnAAIAAgKICbAAIAAAKIArAAIAAAhIC+AAIAAIfg");
	this.shape_1.setTransform(31.5,29.35);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ACXElIAAgKIhTAAIAAAKIl+AAIAAmvIDKAAIAAiRIAnAAIAAgKICbAAIAAAKIArAAIAAAhIC+AAIAAIfg");
	this.shape_2.setTransform(31.5,29.35);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("ACXElIAAgKIhTAAIAAAKIl+AAIAAmvIDKAAIAAiRIAnAAIAAgKICbAAIAAAKIArAAIAAAhIC+AAIAAIfg");
	this.shape_3.setTransform(31.5,29.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,58.7);


(lib.f1apt14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjwFMIAAkKIgSAAIAAhbIAQAAIAAkXIAagbIAcAOQAgAKAZgYIA7A9IFLFLIhHBGIAADJg");
	this.shape.setTransform(25.925,33.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjwFMIAAkKIgSAAIAAhbIAQAAIAAkXIAagbIAcAOQAgAKAZgYIA7A9IFLFLIhHBGIAADJg");
	this.shape_1.setTransform(25.925,33.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjwFMIAAkKIgSAAIAAhbIAQAAIAAkXIAagbIAcAOQAgAKAZgYIA7A9IFLFLIhHBGIAADJg");
	this.shape_2.setTransform(25.925,33.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjwFMIAAkKIgSAAIAAhbIAQAAIAAkXIAagbIAcAOQAgAKAZgYIA7A9IFLFLIhHBGIAADJg");
	this.shape_3.setTransform(25.925,33.15);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.9,66.3);


(lib.f1apt13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjrEXIAAjtIgqAAIAAgmIgNAAIAAjjIANAAIAAgrIAtAAIAAgNIDhAAIAAANIAoAAIAAArIECAAIAAD5IgMAAIAABYIALAAIAAClg");
	this.shape.setTransform(29.1,27.95);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjrEXIAAjtIgqAAIAAgmIgNAAIAAjjIANAAIAAgrIAtAAIAAgNIDhAAIAAANIAoAAIAAArIECAAIAAD5IgMAAIAABYIALAAIAAClg");
	this.shape_1.setTransform(29.1,27.95);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjrEXIAAjtIgqAAIAAgmIgNAAIAAjjIANAAIAAgrIAtAAIAAgNIDhAAIAAANIAoAAIAAArIECAAIAAD5IgMAAIAABYIALAAIAAClg");
	this.shape_2.setTransform(29.1,27.95);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("AjrEXIAAjtIgqAAIAAgmIgNAAIAAjjIANAAIAAgrIAtAAIAAgNIDhAAIAAANIAoAAIAAArIECAAIAAD5IgMAAIAABYIALAAIAAClg");
	this.shape_3.setTransform(29.1,27.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.2,55.9);


(lib.f1apt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDZIAAiaIAOAAIAAhhIgMAAIAAi2IHtAAIAADiIAlAAIAAAhIAPAAIAACVIgPAAIAAAZg");
	this.shape.setTransform(27.425,21.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDZIAAiaIAOAAIAAhhIgMAAIAAi2IHtAAIAADiIAlAAIAAAhIAPAAIAACVIgPAAIAAAZg");
	this.shape_1.setTransform(27.425,21.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDZIAAiaIAOAAIAAhhIgMAAIAAi2IHtAAIAADiIAlAAIAAAhIAPAAIAACVIgPAAIAAAZg");
	this.shape_2.setTransform(27.425,21.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDZIAAiaIAOAAIAAhhIgMAAIAAi2IHtAAIAADiIAlAAIAAAhIAPAAIAACVIgPAAIAAAZg");
	this.shape_3.setTransform(27.425,21.675);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,43.4);


(lib.f1apt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjrDYIAAgtIgWAAIAAgaIgNAAIAAiBIANAAIAAgYIAYAAIAAjPIH4AAIAACtIgMAAIAABdIAMAAIAAClg");
	this.shape.setTransform(27.075,21.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjrDYIAAgtIgWAAIAAgaIgNAAIAAiBIANAAIAAgYIAYAAIAAjPIH4AAIAACtIgMAAIAABdIAMAAIAAClg");
	this.shape_1.setTransform(27.075,21.625);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjrDYIAAgtIgWAAIAAgaIgNAAIAAiBIANAAIAAgYIAYAAIAAjPIH4AAIAACtIgMAAIAABdIAMAAIAAClg");
	this.shape_2.setTransform(27.075,21.625);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("AjrDYIAAgtIgWAAIAAgaIgNAAIAAiBIANAAIAAgYIAYAAIAAjPIH4AAIAACtIgMAAIAABdIAMAAIAAClg");
	this.shape_3.setTransform(27.075,21.625);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.2,43.3);


(lib.f1apt10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDUIgBixIALAAIAAhSIgKAAIAAikIIVAAIAAAbIAPAAIAACWIgPAAIAAAeIgnAAIAADYg");
	this.shape.setTransform(27.475,21.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDUIgBixIALAAIAAhSIgKAAIAAikIIVAAIAAAbIAPAAIAACWIgPAAIAAAeIgnAAIAADYg");
	this.shape_1.setTransform(27.475,21.175);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDUIgBixIALAAIAAhSIgKAAIAAikIIVAAIAAAbIAPAAIAACWIgPAAIAAAeIgnAAIAADYg");
	this.shape_2.setTransform(27.475,21.175);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDUIgBixIALAAIAAhSIgKAAIAAikIIVAAIAAAbIAPAAIAACWIgPAAIAAAeIgnAAIAADYg");
	this.shape_3.setTransform(27.475,21.175);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,42.4);


(lib.f1apt9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjpDaIAAjSIgZAAIAAgaIgMAAIAAh6IAMAAIAAgcIAYAAIAAgxIH5AAIAAGzg");
	this.shape.setTransform(27.125,21.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjpDaIAAjSIgZAAIAAgaIgMAAIAAh6IAMAAIAAgcIAYAAIAAgxIH5AAIAAGzg");
	this.shape_1.setTransform(27.125,21.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjpDaIAAjSIgZAAIAAgaIgMAAIAAh6IAMAAIAAgcIAYAAIAAgxIH5AAIAAGzg");
	this.shape_2.setTransform(27.125,21.8);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("AjpDaIAAjSIgZAAIAAgaIgMAAIAAh6IAMAAIAAgcIAYAAIAAgxIH5AAIAAGzg");
	this.shape_3.setTransform(27.125,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,43.6);


(lib.f1apt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkBg3IBHhHIAAjRIGvAAIAAEQIANAAIAABjIgOAAIAAEMIgcAcQgKgJgQgEQgfgKgYAYIgCADg");
	this.shape.setTransform(25.8,33.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkBg3IBHhHIAAjRIGvAAIAAEQIANAAIAABjIgOAAIAAEMIgcAcQgKgJgQgEQgfgKgYAYIgCADg");
	this.shape_1.setTransform(25.8,33.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkBg3IBHhHIAAjRIGvAAIAAEQIANAAIAABjIgOAAIAAEMIgcAcQgKgJgQgEQgfgKgYAYIgCADg");
	this.shape_2.setTransform(25.8,33.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("AkBg3IBHhHIAAjRIGvAAIAAEQIANAAIAABjIgOAAIAAEMIgcAcQgKgJgQgEQgfgKgYAYIgCADg");
	this.shape_3.setTransform(25.8,33.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.6,67.1);


(lib.f1apt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhPEoIAAgSIgpAAIAAiFIDlAAIAACFIgpAAIAAASgAk2D4IAAofICaAAIAAAXIBcAAIAAgXIF3AAIAAGuIm5AAIAABxg");
	this.shape.setTransform(31.1,29.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhPEoIAAgSIgpAAIAAiFIDlAAIAACFIgpAAIAAASgAk2D4IAAofICaAAIAAAXIBcAAIAAgXIF3AAIAAGuIm5AAIAABxg");
	this.shape_1.setTransform(31.1,29.6);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhPEoIAAgSIgpAAIAAiFIDlAAIAACFIgpAAIAAASgAk2D4IAAofICaAAIAAAXIBcAAIAAgXIF3AAIAAGuIm5AAIAABxg");
	this.shape_2.setTransform(31.1,29.6);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhPEoIAAgSIgpAAIAAiFIDlAAIAACFIgpAAIAAASgAk2D4IAAofICaAAIAAAXIBcAAIAAgXIF3AAIAAGuIm5AAIAABxg");
	this.shape_3.setTransform(31.1,29.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.2,59.2);


(lib.f1apt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ag+EAIAAgMIkPAAIAAmsIDLAAIBHhHIGFGGQgVAXAKAfQAFAQAKALIgcAcIkVAAIAAAMg");
	this.shape.setTransform(33.425,25.625);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ag+EAIAAgMIkPAAIAAmsIDLAAIBHhHIGFGGQgVAXAKAfQAFAQAKALIgcAcIkVAAIAAAMg");
	this.shape_1.setTransform(33.425,25.625);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ag+EAIAAgMIkPAAIAAmsIDLAAIBHhHIGFGGQgVAXAKAfQAFAQAKALIgcAcIkVAAIAAAMg");
	this.shape_2.setTransform(33.425,25.625);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("Ag+EAIAAgMIkPAAIAAmsIDLAAIBHhHIGFGGQgVAXAKAfQAFAQAKALIgcAcIkVAAIAAAMg");
	this.shape_3.setTransform(33.425,25.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.9,51.3);


(lib.f1apt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhHEmIAAgQIgoAAIAAiLIDoAAIAACQIgnAAIAAALgACDD5IAAh4Im8AAIAAmmIF4AAIAAAVIBgAAIAAgVICbAAIAAIeg");
	this.shape.setTransform(31.425,29.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhHEmIAAgQIgoAAIAAiLIDoAAIAACQIgnAAIAAALgACDD5IAAh4Im8AAIAAmmIF4AAIAAAVIBgAAIAAgVICbAAIAAIeg");
	this.shape_1.setTransform(31.425,29.425);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhHEmIAAgQIgoAAIAAiLIDoAAIAACQIgnAAIAAALgACDD5IAAh4Im8AAIAAmmIF4AAIAAAVIBgAAIAAgVICbAAIAAIeg");
	this.shape_2.setTransform(31.425,29.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhHEmIAAgQIgoAAIAAiLIDoAAIAACQIgnAAIAAALgACDD5IAAh4Im8AAIAAmmIF4AAIAAAVIBgAAIAAgVICbAAIAAIeg");
	this.shape_3.setTransform(31.425,29.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.9,58.9);


(lib.f1apt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAnELIAAgNIhSAAIAAANIisAAIAAm0IDfAAIAAg/IDQAAIAAHzgAjSiuIAAg2IAvAAIAAgZIAXAAIAAgNIB0AAIAAANIAbAAIAABPg");
	this.shape.setTransform(21.625,26.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAnELIAAgNIhSAAIAAANIisAAIAAm0IDfAAIAAg/IDQAAIAAHzgAjSiuIAAg2IAvAAIAAgZIAXAAIAAgNIB0AAIAAANIAbAAIAABPg");
	this.shape_1.setTransform(21.625,26.7);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAnELIAAgNIhSAAIAAANIisAAIAAm0IDfAAIAAg/IDQAAIAAHzgAjSiuIAAg2IAvAAIAAgZIAXAAIAAgNIB0AAIAAANIAbAAIAABPg");
	this.shape_2.setTransform(21.625,26.7);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("AAnELIAAgNIhSAAIAAANIisAAIAAm0IDfAAIAAg/IDQAAIAAHzgAjSiuIAAg2IAvAAIAAgZIAXAAIAAgNIB0AAIAAANIAbAAIAABPg");
	this.shape_3.setTransform(21.625,26.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.3,53.4);


(lib.f1apt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjEEsIAAgQIgaAAIAAhGICmAAIAABHIgaAAIAAAPgAguDxIAAglIkbAAIAAn3IKTAAIAAGnIiyAAIAAB1g");
	this.shape.setTransform(32.975,29.975);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjEEsIAAgQIgaAAIAAhGICmAAIAABHIgaAAIAAAPgAguDxIAAglIkbAAIAAn3IKTAAIAAGnIiyAAIAAB1g");
	this.shape_1.setTransform(32.975,29.975);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjEEsIAAgQIgaAAIAAhGICmAAIAABHIgaAAIAAAPgAguDxIAAglIkbAAIAAn3IKTAAIAAGnIiyAAIAAB1g");
	this.shape_2.setTransform(32.975,29.975);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjEEsIAAgQIgaAAIAAhGICmAAIAABHIgaAAIAAAPgAguDxIAAglIkbAAIAAn3IKTAAIAAGnIiyAAIAAB1g");
	this.shape_3.setTransform(32.975,29.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,60);


(lib.f1apt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAuEIIAAgNIhdAAIAAANIiiAAIAAnrIDEAAIAABAIDfAAIAAGrgAgDitIAAhNIAVAAIAAgNIB1AAIAAANIAXAAIAAAXIA0AAIAAA2g");
	this.shape.setTransform(21.025,26.35);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAuEIIAAgNIhdAAIAAANIiiAAIAAnrIDEAAIAABAIDfAAIAAGrgAgDitIAAhNIAVAAIAAgNIB1AAIAAANIAXAAIAAAXIA0AAIAAA2g");
	this.shape_1.setTransform(21.025,26.35);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAuEIIAAgNIhdAAIAAANIiiAAIAAnrIDEAAIAABAIDfAAIAAGrgAgDitIAAhNIAVAAIAAgNIB1AAIAAANIAXAAIAAAXIA0AAIAAA2g");
	this.shape_2.setTransform(21.025,26.35);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.239)").s().p("AAuEIIAAgNIhdAAIAAANIiiAAIAAnrIDEAAIAABAIDfAAIAAGrgAgDitIAAhNIAVAAIAAgNIB1AAIAAANIAXAAIAAAXIA0AAIAAA2g");
	this.shape_3.setTransform(21.025,26.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.1,52.7);


(lib.f1a8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ABUEsIAAgNIgdAAIAAhEICxAAIAABBIggAAIAAAQgAiYD7IAAh4Ii0AAIAAmuIGQAAIAAAaIBmAAIAAgaICjAAIAAH8IkgAAIAAAqg");
	this.shape.setTransform(33.275,29.975);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_1 copy 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ABUEsIAAgNIgdAAIAAhEICxAAIAABBIggAAIAAAQgAiYD7IAAh4Ii0AAIAAmuIGQAAIAAAaIBmAAIAAgaICjAAIAAH8IkgAAIAAAqg");
	this.shape_1.setTransform(33.275,29.975);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1 copy
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ABUEsIAAgNIgdAAIAAhEICxAAIAABBIggAAIAAAQgAiYD7IAAh4Ii0AAIAAmuIGQAAIAAAaIBmAAIAAgaICjAAIAAH8IkgAAIAAAqg");
	this.shape_2.setTransform(33.275,29.975);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ABUEsIAAgNIgdAAIAAhEICxAAIAABBIggAAIAAAQgAiYD7IAAh4Ii0AAIAAmuIGQAAIAAAaIBmAAIAAgaICjAAIAAH8IkgAAIAAAqg");
	this.shape_3.setTransform(33.275,29.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.6,60);


(lib.unt4_f3_apt15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ACWEmIAAgMIhQAAIAAAMIl+AAIAAmrIDDAAIAAiUIAnAAIAAgNICcAAIAAANIAsAAIAAAhIC/AAIAAIeg");
	this.shape.setTransform(31.325,29.45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ACWEmIAAgMIhQAAIAAAMIl+AAIAAmrIDDAAIAAiUIAnAAIAAgNICcAAIAAANIAsAAIAAAhIC/AAIAAIeg");
	this.shape_1.setTransform(31.325,29.45);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ACWEmIAAgMIhQAAIAAAMIl+AAIAAmrIDDAAIAAiUIAnAAIAAgNICcAAIAAANIAsAAIAAAhIC/AAIAAIeg");
	this.shape_2.setTransform(31.325,29.45);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ACWEmIAAgMIhQAAIAAAMIl+AAIAAmrIDDAAIAAiUIAnAAIAAgNICcAAIAAANIAsAAIAAAhIC/AAIAAIeg");
	this.shape_3.setTransform(31.325,29.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,58.9);


(lib.unt4_f3_apt14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhIEmIAAgNIgoAAIAAiOIjNAAIAAmwIGDAAIAAAKIBRAAIAAgKICnAAIAAIbIi/AAIAAAjIgmAAIAAANg");
	this.shape.setTransform(31.8,29.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhIEmIAAgNIgoAAIAAiOIjNAAIAAmwIGDAAIAAAKIBRAAIAAgKICnAAIAAIbIi/AAIAAAjIgmAAIAAANg");
	this.shape_1.setTransform(31.8,29.4);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhIEmIAAgNIgoAAIAAiOIjNAAIAAmwIGDAAIAAAKIBRAAIAAgKICnAAIAAIbIi/AAIAAAjIgmAAIAAANg");
	this.shape_2.setTransform(31.8,29.4);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhIEmIAAgNIgoAAIAAiOIjNAAIAAmwIGDAAIAAAKIBRAAIAAgKICnAAIAAIbIi/AAIAAAjIgmAAIAAANg");
	this.shape_3.setTransform(31.8,29.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.6,58.8);


(lib.unt4_f3_apt13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ACWEmIAAgMIhPAAIAAAMImEAAIAAmrIDLAAIAAiUIAoAAIAAgNICcAAIAAANIApAAIAAAgIDDAAIAAIfg");
	this.shape.setTransform(31.75,29.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ACWEmIAAgMIhPAAIAAAMImEAAIAAmrIDLAAIAAiUIAoAAIAAgNICcAAIAAANIApAAIAAAgIDDAAIAAIfg");
	this.shape_1.setTransform(31.75,29.45);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ACWEmIAAgMIhPAAIAAAMImEAAIAAmrIDLAAIAAiUIAoAAIAAgNICcAAIAAANIApAAIAAAgIDDAAIAAIfg");
	this.shape_2.setTransform(31.75,29.45);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ACWEmIAAgMIhPAAIAAAMImEAAIAAmrIDLAAIAAiUIAoAAIAAgNICcAAIAAANIApAAIAAAgIDDAAIAAIfg");
	this.shape_3.setTransform(31.75,29.45);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,58.9);


(lib.unt4_f3_apt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhQEmIAAgNIgoAAIAAgjIjCAAIAAobICnAAIAAAKIBOAAIAAgJIGAAAIAAGsIjFAAIAACPIgsAAIAAAPg");
	this.shape.setTransform(31.525,29.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhQEmIAAgNIgoAAIAAgjIjCAAIAAobICnAAIAAAKIBOAAIAAgJIGAAAIAAGsIjFAAIAACPIgsAAIAAAPg");
	this.shape_1.setTransform(31.525,29.4);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhQEmIAAgNIgoAAIAAgjIjCAAIAAobICnAAIAAAKIBOAAIAAgJIGAAAIAAGsIjFAAIAACPIgsAAIAAAPg");
	this.shape_2.setTransform(31.525,29.4);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhQEmIAAgNIgoAAIAAgjIjCAAIAAobICnAAIAAAKIBOAAIAAgJIGAAAIAAGsIjFAAIAACPIgsAAIAAAPg");
	this.shape_3.setTransform(31.525,29.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.1,58.8);


(lib.unt4_f3_apt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhFEmIAAgMIhQAAIAAAMIimAAIAAofIC+AAIAAggIAoAAIAAgNICeAAIAAANIApAAIAACVIDJAAIAAGqg");
	this.shape.setTransform(31.55,29.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhFEmIAAgMIhQAAIAAAMIimAAIAAofIC+AAIAAggIAoAAIAAgNICeAAIAAANIApAAIAACVIDJAAIAAGqg");
	this.shape_1.setTransform(31.55,29.45);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhFEmIAAgMIhQAAIAAAMIimAAIAAofIC+AAIAAggIAoAAIAAgNICeAAIAAANIApAAIAACVIDJAAIAAGqg");
	this.shape_2.setTransform(31.55,29.45);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhFEmIAAgMIhQAAIAAAMIimAAIAAofIC+AAIAAggIAoAAIAAgNICeAAIAAANIApAAIAACVIDJAAIAAGqg");
	this.shape_3.setTransform(31.55,29.45);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.1,58.9);


(lib.unt4_f3_apt10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ah6C9IjWAAIAAmtIEQAAIAAgNIBgAAIAAANIEWAAIAWAWIgNAcQgIAgAaAYImKGDg");
	this.shape.setTransform(33.675,25.35);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ah6C9IjWAAIAAmtIEQAAIAAgNIBgAAIAAANIEWAAIAWAWIgNAcQgIAgAaAYImKGDg");
	this.shape_1.setTransform(33.675,25.35);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ah6C9IjWAAIAAmtIEQAAIAAgNIBgAAIAAANIEWAAIAWAWIgNAcQgIAgAaAYImKGDg");
	this.shape_2.setTransform(33.675,25.35);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ah6C9IjWAAIAAmtIEQAAIAAgNIBgAAIAAANIEWAAIAWAWIgNAcQgIAgAaAYImKGDg");
	this.shape_3.setTransform(33.675,25.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.4,50.7);


(lib.unt4_f3_apt9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkkEdIAAiqIANAAIAAhZIgNAAIAAj6IEBAAIAAgvIArAAIAAgNIDkAAIAAANIAsAAIAAAsIANAAIAADjIgNAAIAAAtIgvAAIAADwg");
	this.shape.setTransform(29.3,28.475);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkkEdIAAiqIANAAIAAhZIgNAAIAAj6IEBAAIAAgvIArAAIAAgNIDkAAIAAANIAsAAIAAAsIANAAIAADjIgNAAIAAAtIgvAAIAADwg");
	this.shape_1.setTransform(29.3,28.475);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkkEdIAAiqIANAAIAAhZIgNAAIAAj6IEBAAIAAgvIArAAIAAgNIDkAAIAAANIAsAAIAAAsIANAAIAADjIgNAAIAAAtIgvAAIAADwg");
	this.shape_2.setTransform(29.3,28.475);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkkEdIAAiqIANAAIAAhZIgNAAIAAj6IEBAAIAAgvIArAAIAAgNIDkAAIAAANIAsAAIAAAsIANAAIAADjIgNAAIAAAtIgvAAIAADwg");
	this.shape_3.setTransform(29.3,28.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.6,57);


(lib.unt4_f3_apt8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ai1FOIAAjOIhLhKIGKmDQAaAYAdgHQAPgEAJgIIAbAaIAAEPIANAAIAABkIgNAAIAAEJg");
	this.shape.setTransform(25.675,33.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ai1FOIAAjOIhLhKIGKmDQAaAYAdgHQAPgEAJgIIAbAaIAAEPIANAAIAABkIgNAAIAAEJg");
	this.shape_1.setTransform(25.675,33.425);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ai1FOIAAjOIhLhKIGKmDQAaAYAdgHQAPgEAJgIIAbAaIAAEPIANAAIAABkIgNAAIAAEJg");
	this.shape_2.setTransform(25.675,33.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ai1FOIAAjOIhLhKIGKmDQAaAYAdgHQAPgEAJgIIAbAaIAAEPIANAAIAABkIgNAAIAAEJg");
	this.shape_3.setTransform(25.675,33.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.4,66.9);


(lib.unt4_f3_apt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkmE7IAAiiIANAAIAAhZIgNAAIAAl7IGwAAIAADJICQAAIAAAoIANAAIAACdIgNAAIAAAoIggAAIAADAg");
	this.shape.setTransform(29.5,31.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkmE7IAAiiIANAAIAAhZIgNAAIAAl7IGwAAIAADJICQAAIAAAoIANAAIAACdIgNAAIAAAoIggAAIAADAg");
	this.shape_1.setTransform(29.5,31.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkmE7IAAiiIANAAIAAhZIgNAAIAAl7IGwAAIAADJICQAAIAAAoIANAAIAACdIgNAAIAAAoIggAAIAADAg");
	this.shape_2.setTransform(29.5,31.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkmE7IAAiiIANAAIAAhZIgNAAIAAl7IGwAAIAADJICQAAIAAAoIANAAIAACdIgNAAIAAAoIggAAIAADAg");
	this.shape_3.setTransform(29.5,31.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,63.1);


(lib.unt4_f3_apt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkBDUIAAgbIgNAAIAAiTIANAAIAAgdIAkAAIAAjdIHsAAIAAC1IgKAAIAABTIAKAAIAACgg");
	this.shape.setTransform(27.125,21.25);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkBDUIAAgbIgNAAIAAiTIANAAIAAgdIAkAAIAAjdIHsAAIAAC1IgKAAIAABTIAKAAIAACgg");
	this.shape_1.setTransform(27.125,21.25);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkBDUIAAgbIgNAAIAAiTIANAAIAAgdIAkAAIAAjdIHsAAIAAC1IgKAAIAABTIAKAAIAACgg");
	this.shape_2.setTransform(27.125,21.25);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkBDUIAAgbIgNAAIAAiTIANAAIAAgdIAkAAIAAjdIHsAAIAAC1IgKAAIAABTIAKAAIAACgg");
	this.shape_3.setTransform(27.125,21.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,42.5);


(lib.unt4_f3_apt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkmE7IAAl8IANAAIAAhXIgNAAIAAijIIgAAIAADAIAhAAIAAAmIAMAAIAACdIgMAAIAAAqIiRAAIAADJg");
	this.shape.setTransform(29.5,31.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkmE7IAAl8IANAAIAAhXIgNAAIAAijIIgAAIAADAIAhAAIAAAmIAMAAIAACdIgMAAIAAAqIiRAAIAADJg");
	this.shape_1.setTransform(29.5,31.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkmE7IAAl8IANAAIAAhXIgNAAIAAijIIgAAIAADAIAhAAIAAAmIAMAAIAACdIgMAAIAAAqIiRAAIAADJg");
	this.shape_2.setTransform(29.5,31.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkmE7IAAl8IANAAIAAhXIgNAAIAAijIIgAAIAADAIAhAAIAAAmIAMAAIAACdIgMAAIAAAqIiRAAIAADJg");
	this.shape_3.setTransform(29.5,31.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,63.1);


(lib.unt4_f3_apt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjaDUIAAjbIgnAAIAAgdIgNAAIAAiSIANAAIAAgdIIQAAIAACgIgKAAIAABaIAKAAIAACtg");
	this.shape.setTransform(27.125,21.175);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjaDUIAAjbIgnAAIAAgdIgNAAIAAiSIANAAIAAgdIIQAAIAACgIgKAAIAABaIAKAAIAACtg");
	this.shape_1.setTransform(27.125,21.175);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjaDUIAAjbIgnAAIAAgdIgNAAIAAiSIANAAIAAgdIIQAAIAACgIgKAAIAABaIAKAAIAACtg");
	this.shape_2.setTransform(27.125,21.175);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjaDUIAAjbIgnAAIAAgdIgNAAIAAiSIANAAIAAgdIIQAAIAACgIgKAAIAABaIAKAAIAACtg");
	this.shape_3.setTransform(27.125,21.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,42.4);


(lib.unt4_f3_apt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDTIAAiqIAMAAIAAhaIgMAAIAAiiIHuAAIAADaIApAAIAAAbIAMAAIAACVIgMAAIAAAcg");
	this.shape.setTransform(27.425,21.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDTIAAiqIAMAAIAAhaIgMAAIAAiiIHuAAIAADaIApAAIAAAbIAMAAIAACVIgMAAIAAAcg");
	this.shape_1.setTransform(27.425,21.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDTIAAiqIAMAAIAAhaIgMAAIAAiiIHuAAIAADaIApAAIAAAbIAMAAIAACVIgMAAIAAAcg");
	this.shape_2.setTransform(27.425,21.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDTIAAiqIAMAAIAAhaIgMAAIAAiiIHuAAIAADaIApAAIAAAbIAMAAIAACVIgMAAIAAAcg");
	this.shape_3.setTransform(27.425,21.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.3);


(lib.unt4_f3_apt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkCDUIAAgeIgOAAIAAiTIAOAAIAAgcIApAAIAAjaIHqAAIAACzIgLAAIAABUIALAAIAACgg");
	this.shape.setTransform(27.25,21.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkCDUIAAgeIgOAAIAAiTIAOAAIAAgcIApAAIAAjaIHqAAIAACzIgLAAIAABUIALAAIAACgg");
	this.shape_1.setTransform(27.25,21.225);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkCDUIAAgeIgOAAIAAiTIAOAAIAAgcIApAAIAAjaIHqAAIAACzIgLAAIAABUIALAAIAACgg");
	this.shape_2.setTransform(27.25,21.225);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkCDUIAAgeIgOAAIAAiTIAOAAIAAgcIApAAIAAjaIHqAAIAACzIgLAAIAABUIALAAIAACgg");
	this.shape_3.setTransform(27.25,21.225);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.5,42.5);


(lib.unt4_f3_apt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDUIAAieIAMAAIAAhXIgMAAIAAizIIXAAIAAAaIAMAAIAACbIgMAAIAAAYIgoAAIAADbg");
	this.shape.setTransform(27.425,21.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDUIAAieIAMAAIAAhXIgMAAIAAizIIXAAIAAAaIAMAAIAACbIgMAAIAAAYIgoAAIAADbg");
	this.shape_1.setTransform(27.425,21.25);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDUIAAieIAMAAIAAhXIgMAAIAAizIIXAAIAAAaIAMAAIAACbIgMAAIAAAYIgoAAIAADbg");
	this.shape_2.setTransform(27.425,21.25);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDUIAAieIAMAAIAAhXIgMAAIAAizIIXAAIAAAaIAMAAIAACbIgMAAIAAAYIgoAAIAADbg");
	this.shape_3.setTransform(27.425,21.25);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.5);


(lib.unt4_f2_apt15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ACWEmIAAgMIhQAAIAAAMIl+AAIAAmrIDDAAIAAiUIAnAAIAAgNICcAAIAAANIAsAAIAAAhIC/AAIAAIeg");
	this.shape.setTransform(31.325,29.45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ACWEmIAAgMIhQAAIAAAMIl+AAIAAmrIDDAAIAAiUIAnAAIAAgNICcAAIAAANIAsAAIAAAhIC/AAIAAIeg");
	this.shape_1.setTransform(31.325,29.45);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ACWEmIAAgMIhQAAIAAAMIl+AAIAAmrIDDAAIAAiUIAnAAIAAgNICcAAIAAANIAsAAIAAAhIC/AAIAAIeg");
	this.shape_2.setTransform(31.325,29.45);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ACWEmIAAgMIhQAAIAAAMIl+AAIAAmrIDDAAIAAiUIAnAAIAAgNICcAAIAAANIAsAAIAAAhIC/AAIAAIeg");
	this.shape_3.setTransform(31.325,29.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,58.9);


(lib.unt4_f2_apt14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhIEmIAAgNIgoAAIAAiOIjNAAIAAmwIGDAAIAAAKIBRAAIAAgKICnAAIAAIbIi/AAIAAAjIgmAAIAAANg");
	this.shape.setTransform(31.8,29.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhIEmIAAgNIgoAAIAAiOIjNAAIAAmwIGDAAIAAAKIBRAAIAAgKICnAAIAAIbIi/AAIAAAjIgmAAIAAANg");
	this.shape_1.setTransform(31.8,29.4);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhIEmIAAgNIgoAAIAAiOIjNAAIAAmwIGDAAIAAAKIBRAAIAAgKICnAAIAAIbIi/AAIAAAjIgmAAIAAANg");
	this.shape_2.setTransform(31.8,29.4);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhIEmIAAgNIgoAAIAAiOIjNAAIAAmwIGDAAIAAAKIBRAAIAAgKICnAAIAAIbIi/AAIAAAjIgmAAIAAANg");
	this.shape_3.setTransform(31.8,29.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.6,58.8);


(lib.unt4_f2_apt13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ACWEmIAAgMIhPAAIAAAMImEAAIAAmrIDLAAIAAiUIAoAAIAAgNICcAAIAAANIApAAIAAAgIDDAAIAAIfg");
	this.shape.setTransform(31.75,29.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ACWEmIAAgMIhPAAIAAAMImEAAIAAmrIDLAAIAAiUIAoAAIAAgNICcAAIAAANIApAAIAAAgIDDAAIAAIfg");
	this.shape_1.setTransform(31.75,29.45);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ACWEmIAAgMIhPAAIAAAMImEAAIAAmrIDLAAIAAiUIAoAAIAAgNICcAAIAAANIApAAIAAAgIDDAAIAAIfg");
	this.shape_2.setTransform(31.75,29.45);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ACWEmIAAgMIhPAAIAAAMImEAAIAAmrIDLAAIAAiUIAoAAIAAgNICcAAIAAANIApAAIAAAgIDDAAIAAIfg");
	this.shape_3.setTransform(31.75,29.45);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,58.9);


(lib.unt4_f2_apt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhQEmIAAgNIgoAAIAAgjIjCAAIAAobICnAAIAAAKIBOAAIAAgJIGAAAIAAGsIjFAAIAACPIgsAAIAAAPg");
	this.shape.setTransform(31.525,29.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhQEmIAAgNIgoAAIAAgjIjCAAIAAobICnAAIAAAKIBOAAIAAgJIGAAAIAAGsIjFAAIAACPIgsAAIAAAPg");
	this.shape_1.setTransform(31.525,29.4);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhQEmIAAgNIgoAAIAAgjIjCAAIAAobICnAAIAAAKIBOAAIAAgJIGAAAIAAGsIjFAAIAACPIgsAAIAAAPg");
	this.shape_2.setTransform(31.525,29.4);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhQEmIAAgNIgoAAIAAgjIjCAAIAAobICnAAIAAAKIBOAAIAAgJIGAAAIAAGsIjFAAIAACPIgsAAIAAAPg");
	this.shape_3.setTransform(31.525,29.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.1,58.8);


(lib.unt4_f2_apt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhFEmIAAgMIhQAAIAAAMIimAAIAAofIC+AAIAAggIAoAAIAAgNICeAAIAAANIApAAIAACVIDJAAIAAGqg");
	this.shape.setTransform(31.55,29.45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhFEmIAAgMIhQAAIAAAMIimAAIAAofIC+AAIAAggIAoAAIAAgNICeAAIAAANIApAAIAACVIDJAAIAAGqg");
	this.shape_1.setTransform(31.55,29.45);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhFEmIAAgMIhQAAIAAAMIimAAIAAofIC+AAIAAggIAoAAIAAgNICeAAIAAANIApAAIAACVIDJAAIAAGqg");
	this.shape_2.setTransform(31.55,29.45);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhFEmIAAgMIhQAAIAAAMIimAAIAAofIC+AAIAAggIAoAAIAAgNICeAAIAAANIApAAIAACVIDJAAIAAGqg");
	this.shape_3.setTransform(31.55,29.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.1,58.9);


(lib.unt4_f2_apt10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ah6C9IjWAAIAAmtIEQAAIAAgNIBgAAIAAANIEWAAIAWAWIgNAcQgIAgAaAYImKGDg");
	this.shape.setTransform(33.675,25.35);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ah6C9IjWAAIAAmtIEQAAIAAgNIBgAAIAAANIEWAAIAWAWIgNAcQgIAgAaAYImKGDg");
	this.shape_1.setTransform(33.675,25.35);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ah6C9IjWAAIAAmtIEQAAIAAgNIBgAAIAAANIEWAAIAWAWIgNAcQgIAgAaAYImKGDg");
	this.shape_2.setTransform(33.675,25.35);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ah6C9IjWAAIAAmtIEQAAIAAgNIBgAAIAAANIEWAAIAWAWIgNAcQgIAgAaAYImKGDg");
	this.shape_3.setTransform(33.675,25.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.4,50.7);


(lib.unt4_f2_apt9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkkEdIAAiqIANAAIAAhZIgNAAIAAj6IEBAAIAAgvIArAAIAAgNIDkAAIAAANIAsAAIAAAsIANAAIAADjIgNAAIAAAtIgvAAIAADwg");
	this.shape.setTransform(29.3,28.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkkEdIAAiqIANAAIAAhZIgNAAIAAj6IEBAAIAAgvIArAAIAAgNIDkAAIAAANIAsAAIAAAsIANAAIAADjIgNAAIAAAtIgvAAIAADwg");
	this.shape_1.setTransform(29.3,28.475);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkkEdIAAiqIANAAIAAhZIgNAAIAAj6IEBAAIAAgvIArAAIAAgNIDkAAIAAANIAsAAIAAAsIANAAIAADjIgNAAIAAAtIgvAAIAADwg");
	this.shape_2.setTransform(29.3,28.475);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkkEdIAAiqIANAAIAAhZIgNAAIAAj6IEBAAIAAgvIArAAIAAgNIDkAAIAAANIAsAAIAAAsIANAAIAADjIgNAAIAAAtIgvAAIAADwg");
	this.shape_3.setTransform(29.3,28.475);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.6,57);


(lib.unt4_f2_apt8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ai1FOIAAjOIhLhKIGKmDQAaAYAdgHQAPgEAJgIIAbAaIAAEPIANAAIAABkIgNAAIAAEJg");
	this.shape.setTransform(25.675,33.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ai1FOIAAjOIhLhKIGKmDQAaAYAdgHQAPgEAJgIIAbAaIAAEPIANAAIAABkIgNAAIAAEJg");
	this.shape_1.setTransform(25.675,33.425);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ai1FOIAAjOIhLhKIGKmDQAaAYAdgHQAPgEAJgIIAbAaIAAEPIANAAIAABkIgNAAIAAEJg");
	this.shape_2.setTransform(25.675,33.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ai1FOIAAjOIhLhKIGKmDQAaAYAdgHQAPgEAJgIIAbAaIAAEPIANAAIAABkIgNAAIAAEJg");
	this.shape_3.setTransform(25.675,33.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.4,66.9);


(lib.unt4_f2_apt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkmE7IAAiiIANAAIAAhZIgNAAIAAl7IGwAAIAADJICQAAIAAAoIANAAIAACdIgNAAIAAAoIggAAIAADAg");
	this.shape.setTransform(29.5,31.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkmE7IAAiiIANAAIAAhZIgNAAIAAl7IGwAAIAADJICQAAIAAAoIANAAIAACdIgNAAIAAAoIggAAIAADAg");
	this.shape_1.setTransform(29.5,31.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkmE7IAAiiIANAAIAAhZIgNAAIAAl7IGwAAIAADJICQAAIAAAoIANAAIAACdIgNAAIAAAoIggAAIAADAg");
	this.shape_2.setTransform(29.5,31.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkmE7IAAiiIANAAIAAhZIgNAAIAAl7IGwAAIAADJICQAAIAAAoIANAAIAACdIgNAAIAAAoIggAAIAADAg");
	this.shape_3.setTransform(29.5,31.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,63.1);


(lib.unt4_f2_apt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkBDUIAAgbIgNAAIAAiTIANAAIAAgdIAkAAIAAjdIHsAAIAAC1IgKAAIAABTIAKAAIAACgg");
	this.shape.setTransform(27.125,21.25);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkBDUIAAgbIgNAAIAAiTIANAAIAAgdIAkAAIAAjdIHsAAIAAC1IgKAAIAABTIAKAAIAACgg");
	this.shape_1.setTransform(27.125,21.25);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkBDUIAAgbIgNAAIAAiTIANAAIAAgdIAkAAIAAjdIHsAAIAAC1IgKAAIAABTIAKAAIAACgg");
	this.shape_2.setTransform(27.125,21.25);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkBDUIAAgbIgNAAIAAiTIANAAIAAgdIAkAAIAAjdIHsAAIAAC1IgKAAIAABTIAKAAIAACgg");
	this.shape_3.setTransform(27.125,21.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,42.5);


(lib.unt4_f2_apt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkmE7IAAl8IANAAIAAhXIgNAAIAAijIIgAAIAADAIAhAAIAAAmIAMAAIAACdIgMAAIAAAqIiRAAIAADJg");
	this.shape.setTransform(29.5,31.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkmE7IAAl8IANAAIAAhXIgNAAIAAijIIgAAIAADAIAhAAIAAAmIAMAAIAACdIgMAAIAAAqIiRAAIAADJg");
	this.shape_1.setTransform(29.5,31.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkmE7IAAl8IANAAIAAhXIgNAAIAAijIIgAAIAADAIAhAAIAAAmIAMAAIAACdIgMAAIAAAqIiRAAIAADJg");
	this.shape_2.setTransform(29.5,31.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkmE7IAAl8IANAAIAAhXIgNAAIAAijIIgAAIAADAIAhAAIAAAmIAMAAIAACdIgMAAIAAAqIiRAAIAADJg");
	this.shape_3.setTransform(29.5,31.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,63.1);


(lib.unt4_f2_apt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjaDUIAAjbIgnAAIAAgdIgNAAIAAiSIANAAIAAgdIIQAAIAACgIgKAAIAABaIAKAAIAACtg");
	this.shape.setTransform(27.125,21.175);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjaDUIAAjbIgnAAIAAgdIgNAAIAAiSIANAAIAAgdIIQAAIAACgIgKAAIAABaIAKAAIAACtg");
	this.shape_1.setTransform(27.125,21.175);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjaDUIAAjbIgnAAIAAgdIgNAAIAAiSIANAAIAAgdIIQAAIAACgIgKAAIAABaIAKAAIAACtg");
	this.shape_2.setTransform(27.125,21.175);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjaDUIAAjbIgnAAIAAgdIgNAAIAAiSIANAAIAAgdIIQAAIAACgIgKAAIAABaIAKAAIAACtg");
	this.shape_3.setTransform(27.125,21.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,42.4);


(lib.unt4_f2_apt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDTIAAiqIAMAAIAAhaIgMAAIAAiiIHuAAIAADaIApAAIAAAbIAMAAIAACVIgMAAIAAAcg");
	this.shape.setTransform(27.425,21.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDTIAAiqIAMAAIAAhaIgMAAIAAiiIHuAAIAADaIApAAIAAAbIAMAAIAACVIgMAAIAAAcg");
	this.shape_1.setTransform(27.425,21.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDTIAAiqIAMAAIAAhaIgMAAIAAiiIHuAAIAADaIApAAIAAAbIAMAAIAACVIgMAAIAAAcg");
	this.shape_2.setTransform(27.425,21.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDTIAAiqIAMAAIAAhaIgMAAIAAiiIHuAAIAADaIApAAIAAAbIAMAAIAACVIgMAAIAAAcg");
	this.shape_3.setTransform(27.425,21.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.3);


(lib.unt4_f2_apt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkCDUIAAgeIgOAAIAAiTIAOAAIAAgcIApAAIAAjaIHqAAIAACzIgLAAIAABUIALAAIAACgg");
	this.shape.setTransform(27.25,21.225);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkCDUIAAgeIgOAAIAAiTIAOAAIAAgcIApAAIAAjaIHqAAIAACzIgLAAIAABUIALAAIAACgg");
	this.shape_1.setTransform(27.25,21.225);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkCDUIAAgeIgOAAIAAiTIAOAAIAAgcIApAAIAAjaIHqAAIAACzIgLAAIAABUIALAAIAACgg");
	this.shape_2.setTransform(27.25,21.225);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkCDUIAAgeIgOAAIAAiTIAOAAIAAgcIApAAIAAjaIHqAAIAACzIgLAAIAABUIALAAIAACgg");
	this.shape_3.setTransform(27.25,21.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.5,42.5);


(lib.unt4_f2_apt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDUIAAieIAMAAIAAhXIgMAAIAAizIIXAAIAAAaIAMAAIAACbIgMAAIAAAYIgoAAIAADbg");
	this.shape.setTransform(27.425,21.25);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDUIAAieIAMAAIAAhXIgMAAIAAizIIXAAIAAAaIAMAAIAACbIgMAAIAAAYIgoAAIAADbg");
	this.shape_1.setTransform(27.425,21.25);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDUIAAieIAMAAIAAhXIgMAAIAAizIIXAAIAAAaIAMAAIAACbIgMAAIAAAYIgoAAIAADbg");
	this.shape_2.setTransform(27.425,21.25);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDUIAAieIAMAAIAAhXIgMAAIAAizIIXAAIAAAaIAMAAIAACbIgMAAIAAAYIgoAAIAADbg");
	this.shape_3.setTransform(27.425,21.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.5);


(lib.unt4_f1_apt15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ACWEmIAAgMIhQAAIAAAMIl+AAIAAmrIDDAAIAAiUIAnAAIAAgNICcAAIAAANIAsAAIAAAhIC/AAIAAIeg");
	this.shape.setTransform(31.325,29.45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ACWEmIAAgMIhQAAIAAAMIl+AAIAAmrIDDAAIAAiUIAnAAIAAgNICcAAIAAANIAsAAIAAAhIC/AAIAAIeg");
	this.shape_1.setTransform(31.325,29.45);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ACWEmIAAgMIhQAAIAAAMIl+AAIAAmrIDDAAIAAiUIAnAAIAAgNICcAAIAAANIAsAAIAAAhIC/AAIAAIeg");
	this.shape_2.setTransform(31.325,29.45);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ACWEmIAAgMIhQAAIAAAMIl+AAIAAmrIDDAAIAAiUIAnAAIAAgNICcAAIAAANIAsAAIAAAhIC/AAIAAIeg");
	this.shape_3.setTransform(31.325,29.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,58.9);


(lib.unt4_f1_apt14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhIEmIAAgNIgoAAIAAiOIjNAAIAAmwIGDAAIAAAKIBRAAIAAgKICnAAIAAIbIi/AAIAAAjIgmAAIAAANg");
	this.shape.setTransform(31.8,29.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhIEmIAAgNIgoAAIAAiOIjNAAIAAmwIGDAAIAAAKIBRAAIAAgKICnAAIAAIbIi/AAIAAAjIgmAAIAAANg");
	this.shape_1.setTransform(31.8,29.4);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhIEmIAAgNIgoAAIAAiOIjNAAIAAmwIGDAAIAAAKIBRAAIAAgKICnAAIAAIbIi/AAIAAAjIgmAAIAAANg");
	this.shape_2.setTransform(31.8,29.4);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhIEmIAAgNIgoAAIAAiOIjNAAIAAmwIGDAAIAAAKIBRAAIAAgKICnAAIAAIbIi/AAIAAAjIgmAAIAAANg");
	this.shape_3.setTransform(31.8,29.4);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.6,58.8);


(lib.unt4_f1_apt13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ACWEmIAAgMIhPAAIAAAMImEAAIAAmrIDLAAIAAiUIAoAAIAAgNICcAAIAAANIApAAIAAAgIDDAAIAAIfg");
	this.shape.setTransform(31.75,29.45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ACWEmIAAgMIhPAAIAAAMImEAAIAAmrIDLAAIAAiUIAoAAIAAgNICcAAIAAANIApAAIAAAgIDDAAIAAIfg");
	this.shape_1.setTransform(31.75,29.45);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ACWEmIAAgMIhPAAIAAAMImEAAIAAmrIDLAAIAAiUIAoAAIAAgNICcAAIAAANIApAAIAAAgIDDAAIAAIfg");
	this.shape_2.setTransform(31.75,29.45);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ACWEmIAAgMIhPAAIAAAMImEAAIAAmrIDLAAIAAiUIAoAAIAAgNICcAAIAAANIApAAIAAAgIDDAAIAAIfg");
	this.shape_3.setTransform(31.75,29.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,58.9);


(lib.unt4_f1_apt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhQEmIAAgNIgoAAIAAgjIjCAAIAAobICnAAIAAAKIBOAAIAAgJIGAAAIAAGsIjFAAIAACPIgsAAIAAAPg");
	this.shape.setTransform(31.525,29.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhQEmIAAgNIgoAAIAAgjIjCAAIAAobICnAAIAAAKIBOAAIAAgJIGAAAIAAGsIjFAAIAACPIgsAAIAAAPg");
	this.shape_1.setTransform(31.525,29.4);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhQEmIAAgNIgoAAIAAgjIjCAAIAAobICnAAIAAAKIBOAAIAAgJIGAAAIAAGsIjFAAIAACPIgsAAIAAAPg");
	this.shape_2.setTransform(31.525,29.4);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhQEmIAAgNIgoAAIAAgjIjCAAIAAobICnAAIAAAKIBOAAIAAgJIGAAAIAAGsIjFAAIAACPIgsAAIAAAPg");
	this.shape_3.setTransform(31.525,29.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.1,58.8);


(lib.unt4_f1_apt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhFEmIAAgMIhQAAIAAAMIimAAIAAofIC+AAIAAggIAoAAIAAgNICeAAIAAANIApAAIAACVIDJAAIAAGqg");
	this.shape.setTransform(31.55,29.45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhFEmIAAgMIhQAAIAAAMIimAAIAAofIC+AAIAAggIAoAAIAAgNICeAAIAAANIApAAIAACVIDJAAIAAGqg");
	this.shape_1.setTransform(31.55,29.45);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhFEmIAAgMIhQAAIAAAMIimAAIAAofIC+AAIAAggIAoAAIAAgNICeAAIAAANIApAAIAACVIDJAAIAAGqg");
	this.shape_2.setTransform(31.55,29.45);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhFEmIAAgMIhQAAIAAAMIimAAIAAofIC+AAIAAggIAoAAIAAgNICeAAIAAANIApAAIAACVIDJAAIAAGqg");
	this.shape_3.setTransform(31.55,29.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.1,58.9);


(lib.unt4_f1_apt10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ah6C9IjWAAIAAmtIEQAAIAAgNIBgAAIAAANIEWAAIAWAWIgNAcQgIAgAaAYImKGDg");
	this.shape.setTransform(33.675,25.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ah6C9IjWAAIAAmtIEQAAIAAgNIBgAAIAAANIEWAAIAWAWIgNAcQgIAgAaAYImKGDg");
	this.shape_1.setTransform(33.675,25.35);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ah6C9IjWAAIAAmtIEQAAIAAgNIBgAAIAAANIEWAAIAWAWIgNAcQgIAgAaAYImKGDg");
	this.shape_2.setTransform(33.675,25.35);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ah6C9IjWAAIAAmtIEQAAIAAgNIBgAAIAAANIEWAAIAWAWIgNAcQgIAgAaAYImKGDg");
	this.shape_3.setTransform(33.675,25.35);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.4,50.7);


(lib.unt4_f1_apt9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkkEdIAAiqIANAAIAAhZIgNAAIAAj6IEBAAIAAgvIArAAIAAgNIDkAAIAAANIAsAAIAAAsIANAAIAADjIgNAAIAAAtIgvAAIAADwg");
	this.shape.setTransform(29.3,28.475);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkkEdIAAiqIANAAIAAhZIgNAAIAAj6IEBAAIAAgvIArAAIAAgNIDkAAIAAANIAsAAIAAAsIANAAIAADjIgNAAIAAAtIgvAAIAADwg");
	this.shape_1.setTransform(29.3,28.475);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkkEdIAAiqIANAAIAAhZIgNAAIAAj6IEBAAIAAgvIArAAIAAgNIDkAAIAAANIAsAAIAAAsIANAAIAADjIgNAAIAAAtIgvAAIAADwg");
	this.shape_2.setTransform(29.3,28.475);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkkEdIAAiqIANAAIAAhZIgNAAIAAj6IEBAAIAAgvIArAAIAAgNIDkAAIAAANIAsAAIAAAsIANAAIAADjIgNAAIAAAtIgvAAIAADwg");
	this.shape_3.setTransform(29.3,28.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.6,57);


(lib.unt4_f1_apt8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ai1FOIAAjOIhLhKIGKmDQAaAYAdgHQAPgEAJgIIAbAaIAAEPIANAAIAABkIgNAAIAAEJg");
	this.shape.setTransform(25.675,33.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ai1FOIAAjOIhLhKIGKmDQAaAYAdgHQAPgEAJgIIAbAaIAAEPIANAAIAABkIgNAAIAAEJg");
	this.shape_1.setTransform(25.675,33.425);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ai1FOIAAjOIhLhKIGKmDQAaAYAdgHQAPgEAJgIIAbAaIAAEPIANAAIAABkIgNAAIAAEJg");
	this.shape_2.setTransform(25.675,33.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ai1FOIAAjOIhLhKIGKmDQAaAYAdgHQAPgEAJgIIAbAaIAAEPIANAAIAABkIgNAAIAAEJg");
	this.shape_3.setTransform(25.675,33.425);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.4,66.9);


(lib.unt4_f1_apt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkmE7IAAiiIANAAIAAhZIgNAAIAAl7IGwAAIAADJICQAAIAAAoIANAAIAACdIgNAAIAAAoIggAAIAADAg");
	this.shape.setTransform(29.5,31.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkmE7IAAiiIANAAIAAhZIgNAAIAAl7IGwAAIAADJICQAAIAAAoIANAAIAACdIgNAAIAAAoIggAAIAADAg");
	this.shape_1.setTransform(29.5,31.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkmE7IAAiiIANAAIAAhZIgNAAIAAl7IGwAAIAADJICQAAIAAAoIANAAIAACdIgNAAIAAAoIggAAIAADAg");
	this.shape_2.setTransform(29.5,31.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkmE7IAAiiIANAAIAAhZIgNAAIAAl7IGwAAIAADJICQAAIAAAoIANAAIAACdIgNAAIAAAoIggAAIAADAg");
	this.shape_3.setTransform(29.5,31.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,63.1);


(lib.unt4_f1_apt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkBDUIAAgbIgNAAIAAiTIANAAIAAgdIAkAAIAAjdIHsAAIAAC1IgKAAIAABTIAKAAIAACgg");
	this.shape.setTransform(27.125,21.25);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkBDUIAAgbIgNAAIAAiTIANAAIAAgdIAkAAIAAjdIHsAAIAAC1IgKAAIAABTIAKAAIAACgg");
	this.shape_1.setTransform(27.125,21.25);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkBDUIAAgbIgNAAIAAiTIANAAIAAgdIAkAAIAAjdIHsAAIAAC1IgKAAIAABTIAKAAIAACgg");
	this.shape_2.setTransform(27.125,21.25);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkBDUIAAgbIgNAAIAAiTIANAAIAAgdIAkAAIAAjdIHsAAIAAC1IgKAAIAABTIAKAAIAACgg");
	this.shape_3.setTransform(27.125,21.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,42.5);


(lib.unt4_f1_apt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkmE7IAAl8IANAAIAAhXIgNAAIAAijIIgAAIAADAIAhAAIAAAmIAMAAIAACdIgMAAIAAAqIiRAAIAADJg");
	this.shape.setTransform(29.5,31.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkmE7IAAl8IANAAIAAhXIgNAAIAAijIIgAAIAADAIAhAAIAAAmIAMAAIAACdIgMAAIAAAqIiRAAIAADJg");
	this.shape_1.setTransform(29.5,31.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkmE7IAAl8IANAAIAAhXIgNAAIAAijIIgAAIAADAIAhAAIAAAmIAMAAIAACdIgMAAIAAAqIiRAAIAADJg");
	this.shape_2.setTransform(29.5,31.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkmE7IAAl8IANAAIAAhXIgNAAIAAijIIgAAIAADAIAhAAIAAAmIAMAAIAACdIgMAAIAAAqIiRAAIAADJg");
	this.shape_3.setTransform(29.5,31.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,63.1);


(lib.unt4_f1_apt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjaDUIAAjbIgnAAIAAgdIgNAAIAAiSIANAAIAAgdIIQAAIAACgIgKAAIAABaIAKAAIAACtg");
	this.shape.setTransform(27.125,21.175);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjaDUIAAjbIgnAAIAAgdIgNAAIAAiSIANAAIAAgdIIQAAIAACgIgKAAIAABaIAKAAIAACtg");
	this.shape_1.setTransform(27.125,21.175);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjaDUIAAjbIgnAAIAAgdIgNAAIAAiSIANAAIAAgdIIQAAIAACgIgKAAIAABaIAKAAIAACtg");
	this.shape_2.setTransform(27.125,21.175);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjaDUIAAjbIgnAAIAAgdIgNAAIAAiSIANAAIAAgdIIQAAIAACgIgKAAIAABaIAKAAIAACtg");
	this.shape_3.setTransform(27.125,21.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,42.4);


(lib.unt4_f1_apt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDTIAAiqIAMAAIAAhaIgMAAIAAiiIHuAAIAADaIApAAIAAAbIAMAAIAACVIgMAAIAAAcg");
	this.shape.setTransform(27.425,21.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDTIAAiqIAMAAIAAhaIgMAAIAAiiIHuAAIAADaIApAAIAAAbIAMAAIAACVIgMAAIAAAcg");
	this.shape_1.setTransform(27.425,21.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDTIAAiqIAMAAIAAhaIgMAAIAAiiIHuAAIAADaIApAAIAAAbIAMAAIAACVIgMAAIAAAcg");
	this.shape_2.setTransform(27.425,21.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDTIAAiqIAMAAIAAhaIgMAAIAAiiIHuAAIAADaIApAAIAAAbIAMAAIAACVIgMAAIAAAcg");
	this.shape_3.setTransform(27.425,21.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.3);


(lib.unt4_f1_apt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkCDUIAAgeIgOAAIAAiTIAOAAIAAgcIApAAIAAjaIHqAAIAACzIgLAAIAABUIALAAIAACgg");
	this.shape.setTransform(27.25,21.225);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkCDUIAAgeIgOAAIAAiTIAOAAIAAgcIApAAIAAjaIHqAAIAACzIgLAAIAABUIALAAIAACgg");
	this.shape_1.setTransform(27.25,21.225);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkCDUIAAgeIgOAAIAAiTIAOAAIAAgcIApAAIAAjaIHqAAIAACzIgLAAIAABUIALAAIAACgg");
	this.shape_2.setTransform(27.25,21.225);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkCDUIAAgeIgOAAIAAiTIAOAAIAAgcIApAAIAAjaIHqAAIAACzIgLAAIAABUIALAAIAACgg");
	this.shape_3.setTransform(27.25,21.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.5,42.5);


(lib.unt4_f1_apt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDUIAAieIAMAAIAAhXIgMAAIAAizIIXAAIAAAaIAMAAIAACbIgMAAIAAAYIgoAAIAADbg");
	this.shape.setTransform(27.425,21.25);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDUIAAieIAMAAIAAhXIgMAAIAAizIIXAAIAAAaIAMAAIAACbIgMAAIAAAYIgoAAIAADbg");
	this.shape_1.setTransform(27.425,21.25);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDUIAAieIAMAAIAAhXIgMAAIAAizIIXAAIAAAaIAMAAIAACbIgMAAIAAAYIgoAAIAADbg");
	this.shape_2.setTransform(27.425,21.25);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDUIAAieIAMAAIAAhXIgMAAIAAizIIXAAIAAAaIAMAAIAACbIgMAAIAAAYIgoAAIAADbg");
	this.shape_3.setTransform(27.425,21.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.5);


(lib.unt3_f3_apt17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjpEbIAAjwIgrAAIAAgrIgOAAIAAjnIAOAAIAAglIApAAIAAgOIDlAAIAAAOIAoAAIAAAsIEBAAIAAD6IgNAAIAABZIANAAIAACog");
	this.shape.setTransform(29.05,28.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjpEbIAAjwIgrAAIAAgrIgOAAIAAjnIAOAAIAAglIApAAIAAgOIDlAAIAAAOIAoAAIAAAsIEBAAIAAD6IgNAAIAABZIANAAIAACog");
	this.shape_1.setTransform(29.05,28.3);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjpEbIAAjwIgrAAIAAgrIgOAAIAAjnIAOAAIAAglIApAAIAAgOIDlAAIAAAOIAoAAIAAAsIEBAAIAAD6IgNAAIAABZIANAAIAACog");
	this.shape_2.setTransform(29.05,28.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjpEbIAAjwIgrAAIAAgrIgOAAIAAjnIAOAAIAAglIApAAIAAgOIDlAAIAAAOIAoAAIAAAsIEBAAIAAD6IgNAAIAABZIANAAIAACog");
	this.shape_3.setTransform(29.05,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.1,56.6);


(lib.unt3_f3_apt16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkKDXIAAmtIH0AAIAADNIAUAAIAAAWIANAAIAAB+IgNAAIAAAbIgVAAIAAAxg");
	this.shape.setTransform(26.675,21.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkKDXIAAmtIH0AAIAADNIAUAAIAAAWIANAAIAAB+IgNAAIAAAbIgVAAIAAAxg");
	this.shape_1.setTransform(26.675,21.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkKDXIAAmtIH0AAIAADNIAUAAIAAAWIANAAIAAB+IgNAAIAAAbIgVAAIAAAxg");
	this.shape_2.setTransform(26.675,21.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkKDXIAAmtIH0AAIAADNIAUAAIAAAWIANAAIAAB+IgNAAIAAAbIgVAAIAAAxg");
	this.shape_3.setTransform(26.675,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.4,43);


(lib.unt3_f3_apt15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkQE6IAAjPIgXAAIAAgbIgNAAIAAidIANAAIAAgZIATAAIAAjTIJJAAIAAGLIgMAAIAABPIAMAAIAACZg");
	this.shape.setTransform(30.925,31.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkQE6IAAjPIgXAAIAAgbIgNAAIAAidIANAAIAAgZIATAAIAAjTIJJAAIAAGLIgMAAIAABPIAMAAIAACZg");
	this.shape_1.setTransform(30.925,31.4);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkQE6IAAjPIgXAAIAAgbIgNAAIAAidIANAAIAAgZIATAAIAAjTIJJAAIAAGLIgMAAIAABPIAMAAIAACZg");
	this.shape_2.setTransform(30.925,31.4);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkQE6IAAjPIgXAAIAAgbIgNAAIAAidIANAAIAAgZIATAAIAAjTIJJAAIAAGLIgMAAIAABPIAMAAIAACZg");
	this.shape_3.setTransform(30.925,31.4);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.9,62.8);


(lib.unt3_f3_apt14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkKDYIAAmvIHzAAIAAAvIAVAAIAAAaIANAAIAAB6IgNAAIAAAdIgWAAIAADPg");
	this.shape.setTransform(26.675,21.625);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkKDYIAAmvIHzAAIAAAvIAVAAIAAAaIANAAIAAB6IgNAAIAAAdIgWAAIAADPg");
	this.shape_1.setTransform(26.675,21.625);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkKDYIAAmvIHzAAIAAAvIAVAAIAAAaIANAAIAAB6IgNAAIAAAdIgWAAIAADPg");
	this.shape_2.setTransform(26.675,21.625);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkKDYIAAmvIHzAAIAAAvIAVAAIAAAaIANAAIAAB6IgNAAIAAAdIgWAAIAADPg");
	this.shape_3.setTransform(26.675,21.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.4,43.3);


(lib.unt3_f3_apt13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkVE/IAAjXIgTAAIAAgXIgMAAIAAihIAMAAIAAgXIAYAAIAAjXIJFAAIAAGNIgMAAIAABSIAMAAIAACeg");
	this.shape.setTransform(30.925,31.875);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkVE/IAAjXIgTAAIAAgXIgMAAIAAihIAMAAIAAgXIAYAAIAAjXIJFAAIAAGNIgMAAIAABSIAMAAIAACeg");
	this.shape_1.setTransform(30.925,31.875);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkVE/IAAjXIgTAAIAAgXIgMAAIAAihIAMAAIAAgXIAYAAIAAjXIJFAAIAAGNIgMAAIAABSIAMAAIAACeg");
	this.shape_2.setTransform(30.925,31.875);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkVE/IAAjXIgTAAIAAgXIgMAAIAAihIAMAAIAAgXIAYAAIAAjXIJFAAIAAGNIgMAAIAABSIAMAAIAACeg");
	this.shape_3.setTransform(30.925,31.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.9,63.8);


(lib.unt3_f3_apt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AiKFKQgbgbgfAKIgZAQIgTgUIAAkWIgNAAIAAhjIANAAIAAkHIGnAAIAADNIBHBFImGGFg");
	this.shape.setTransform(25.375,33.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AiKFKQgbgbgfAKIgZAQIgTgUIAAkWIgNAAIAAhjIANAAIAAkHIGnAAIAADNIBHBFImGGFg");
	this.shape_1.setTransform(25.375,33.2);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AiKFKQgbgbgfAKIgZAQIgTgUIAAkWIgNAAIAAhjIANAAIAAkHIGnAAIAADNIBHBFImGGFg");
	this.shape_2.setTransform(25.375,33.2);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AiKFKQgbgbgfAKIgZAQIgTgUIAAkWIgNAAIAAhjIANAAIAAkHIGnAAIAADNIBHBFImGGFg");
	this.shape_3.setTransform(25.375,33.2);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.8,66.4);


(lib.unt3_f3_apt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkDDTIAAgaIgNAAIAAiWIANAAIAAgdIApAAIAAjYIHrAAIAACxIgMAAIAABTIAMAAIAAChg");
	this.shape.setTransform(27.3,21.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkDDTIAAgaIgNAAIAAiWIANAAIAAgdIApAAIAAjYIHrAAIAACxIgMAAIAABTIAMAAIAAChg");
	this.shape_1.setTransform(27.3,21.1);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkDDTIAAgaIgNAAIAAiWIANAAIAAgdIApAAIAAjYIHrAAIAACxIgMAAIAABTIAMAAIAAChg");
	this.shape_2.setTransform(27.3,21.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkDDTIAAgaIgNAAIAAiWIANAAIAAgdIApAAIAAjYIHrAAIAACxIgMAAIAABTIAMAAIAAChg");
	this.shape_3.setTransform(27.3,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.6,42.2);


(lib.unt3_f3_apt10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AgiEBIAAgNIkMAAIgfgfQAKgJAEgOQAJgdgYgbIgBAAIGGmGIBNBLIDMAAIAAGpIkNAAIAAANg");
	this.shape.setTransform(33.575,25.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AgiEBIAAgNIkMAAIgfgfQAKgJAEgOQAJgdgYgbIgBAAIGGmGIBNBLIDMAAIAAGpIkNAAIAAANg");
	this.shape_1.setTransform(33.575,25.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AgiEBIAAgNIkMAAIgfgfQAKgJAEgOQAJgdgYgbIgBAAIGGmGIBNBLIDMAAIAAGpIkNAAIAAANg");
	this.shape_2.setTransform(33.575,25.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AgiEBIAAgNIkMAAIgfgfQAKgJAEgOQAJgdgYgbIgBAAIGGmGIBNBLIDMAAIAAGpIkNAAIAAANg");
	this.shape_3.setTransform(33.575,25.675);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.2,51.4);


(lib.unt3_f3_apt9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjdDUIAAjZIgmAAIAAgeIgNAAIAAiZIANAAIAAgXIIUAAIAACjIgMAAIAABTIAMAAIAACxg");
	this.shape.setTransform(27.3,21.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjdDUIAAjZIgmAAIAAgeIgNAAIAAiZIANAAIAAgXIIUAAIAACjIgMAAIAABTIAMAAIAACxg");
	this.shape_1.setTransform(27.3,21.175);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjdDUIAAjZIgmAAIAAgeIgNAAIAAiZIANAAIAAgXIIUAAIAACjIgMAAIAABTIAMAAIAACxg");
	this.shape_2.setTransform(27.3,21.175);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjdDUIAAjZIgmAAIAAgeIgNAAIAAiZIANAAIAAgXIIUAAIAACjIgMAAIAABTIAMAAIAACxg");
	this.shape_3.setTransform(27.3,21.175);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.6,42.4);


(lib.unt3_f3_apt8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhPE0IAAgMIggAAIAAgTIjKAAIAApIIF/AAIAAANIBXAAIAAgNICdAAIAAJIIjUAAIAAATIgfAAIAAAMg");
	this.shape.setTransform(31.35,30.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhPE0IAAgMIggAAIAAgTIjKAAIAApIIF/AAIAAANIBXAAIAAgNICdAAIAAJIIjUAAIAAATIgfAAIAAAMg");
	this.shape_1.setTransform(31.35,30.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhPE0IAAgMIggAAIAAgTIjKAAIAApIIF/AAIAAANIBXAAIAAgNICdAAIAAJIIjUAAIAAATIgfAAIAAAMg");
	this.shape_2.setTransform(31.35,30.8);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhPE0IAAgMIggAAIAAgTIjKAAIAApIIF/AAIAAANIBXAAIAAgNICdAAIAAJIIjUAAIAAATIgfAAIAAAMg");
	this.shape_3.setTransform(31.35,30.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,61.6);


(lib.unt3_f3_apt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhNE0IAAgMIgZAAIAAgTIjWAAIAApIIGIAAIAAANIBWAAIAAgNICbAAIAAJGIjVAAIAAAVIgXAAIAAAMg");
	this.shape.setTransform(31.675,30.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhNE0IAAgMIgZAAIAAgTIjWAAIAApIIGIAAIAAANIBWAAIAAgNICbAAIAAJGIjVAAIAAAVIgXAAIAAAMg");
	this.shape_1.setTransform(31.675,30.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhNE0IAAgMIgZAAIAAgTIjWAAIAApIIGIAAIAAANIBWAAIAAgNICbAAIAAJGIjVAAIAAAVIgXAAIAAAMg");
	this.shape_2.setTransform(31.675,30.8);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhNE0IAAgMIgZAAIAAgTIjWAAIAApIIGIAAIAAANIBWAAIAAgNICbAAIAAJGIjVAAIAAAVIgXAAIAAAMg");
	this.shape_3.setTransform(31.675,30.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.4,61.6);


(lib.unt3_f3_apt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ACUEjIAAgMIhRAAIAAAMImCAAIAAmpIDNAAIAAiQIAqAAIAAgMICZAAIAAAMIArAAIAAAeIDEAAIAAIbg");
	this.shape.setTransform(31.95,29.125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ACUEjIAAgMIhRAAIAAAMImCAAIAAmpIDNAAIAAiQIAqAAIAAgMICZAAIAAAMIArAAIAAAeIDEAAIAAIbg");
	this.shape_1.setTransform(31.95,29.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ACUEjIAAgMIhRAAIAAAMImCAAIAAmpIDNAAIAAiQIAqAAIAAgMICZAAIAAAMIArAAIAAAeIDEAAIAAIbg");
	this.shape_2.setTransform(31.95,29.125);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ACUEjIAAgMIhRAAIAAAMImCAAIAAmpIDNAAIAAiQIAqAAIAAgMICZAAIAAAMIArAAIAAAeIDEAAIAAIbg");
	this.shape_3.setTransform(31.95,29.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.9,58.3);


(lib.unt3_f3_apt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAQEOIAAgNIgXAAIAAgcIjRAAIAAnyICuAAIAAANIBWAAIAAgNICsAAIAAH4Ig1AAIAAAWIgWAAIAAANg");
	this.shape.setTransform(21.65,27);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAQEOIAAgNIgXAAIAAgcIjRAAIAAnyICuAAIAAANIBWAAIAAgNICsAAIAAH4Ig1AAIAAAWIgWAAIAAANg");
	this.shape_1.setTransform(21.65,27);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAQEOIAAgNIgXAAIAAgcIjRAAIAAnyICuAAIAAANIBWAAIAAgNICsAAIAAH4Ig1AAIAAAWIgWAAIAAANg");
	this.shape_2.setTransform(21.65,27);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AAQEOIAAgNIgXAAIAAgcIjRAAIAAnyICuAAIAAANIBWAAIAAgNICsAAIAAH4Ig1AAIAAAWIgWAAIAAANg");
	this.shape_3.setTransform(21.65,27);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.3,54);


(lib.unt3_f3_apt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhCEjIAAgMIhYAAIAAAMIigAAIAAobIC7AAIAAgeIArAAIAAgMICbAAIAAAMIAmAAIAACQIDOAAIAAGpg");
	this.shape.setTransform(31.5,29.125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhCEjIAAgMIhYAAIAAAMIigAAIAAobIC7AAIAAgeIArAAIAAgMICbAAIAAAMIAmAAIAACQIDOAAIAAGpg");
	this.shape_1.setTransform(31.5,29.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhCEjIAAgMIhYAAIAAAMIigAAIAAobIC7AAIAAgeIArAAIAAgMICbAAIAAAMIAmAAIAACQIDOAAIAAGpg");
	this.shape_2.setTransform(31.5,29.125);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhCEjIAAgMIhYAAIAAAMIigAAIAAobIC7AAIAAgeIArAAIAAgMICbAAIAAAMIAmAAIAACQIDOAAIAAGpg");
	this.shape_3.setTransform(31.5,29.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,58.3);


(lib.unt3_f3_apt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AiLEOIAAgMIgdAAIAAgYIguAAIAAn4ICuAAIAAANIBQAAIAAgNICvAAIAAH0IjNAAIAAAcIgdAAIAAAMg");
	this.shape.setTransform(21.475,27.05);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AiLEOIAAgMIgdAAIAAgYIguAAIAAn4ICuAAIAAANIBQAAIAAgNICvAAIAAH0IjNAAIAAAcIgdAAIAAAMg");
	this.shape_1.setTransform(21.475,27.05);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AiLEOIAAgMIgdAAIAAgYIguAAIAAn4ICuAAIAAANIBQAAIAAgNICvAAIAAH0IjNAAIAAAcIgdAAIAAAMg");
	this.shape_2.setTransform(21.475,27.05);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AiLEOIAAgMIgdAAIAAgYIguAAIAAn4ICuAAIAAANIBQAAIAAgNICvAAIAAH0IjNAAIAAAcIgdAAIAAAMg");
	this.shape_3.setTransform(21.475,27.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,54.1);


(lib.unt3_f3_apt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AiVEeIAAgMIhfAAIAAAMIjIAAIACobIDKAAIAAgUIAYAAIAAgMIC+AAIAAAMIAXAAIAACFIHAAAIAAGqg");
	this.shape.setTransform(44.45,28.625);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AiVEeIAAgMIhfAAIAAAMIjIAAIACobIDKAAIAAgUIAYAAIAAgMIC+AAIAAAMIAXAAIAACFIHAAAIAAGqg");
	this.shape_1.setTransform(44.45,28.625);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AiVEeIAAgMIhfAAIAAAMIjIAAIACobIDKAAIAAgUIAYAAIAAgMIC+AAIAAAMIAXAAIAACFIHAAAIAAGqg");
	this.shape_2.setTransform(44.45,28.625);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AiVEeIAAgMIhfAAIAAAMIjIAAIACobIDKAAIAAgUIAYAAIAAgMIC+AAIAAAMIAXAAIAACFIHAAAIAAGqg");
	this.shape_3.setTransform(44.45,28.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.9,57.3);


(lib.unt3_f3_apt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjcEfIAAgNIgWAAIAAgUIjKAAIAAocIDNAAIAAANIBSAAIAAgNIJaAAIAAGxIm+AAIAAB/IgcAAIAAANg");
	this.shape.setTransform(44.525,28.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjcEfIAAgNIgWAAIAAgUIjKAAIAAocIDNAAIAAANIBSAAIAAgNIJaAAIAAGxIm+AAIAAB/IgcAAIAAANg");
	this.shape_1.setTransform(44.525,28.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjcEfIAAgNIgWAAIAAgUIjKAAIAAocIDNAAIAAANIBSAAIAAgNIJaAAIAAGxIm+AAIAAB/IgcAAIAAANg");
	this.shape_2.setTransform(44.525,28.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjcEfIAAgNIgWAAIAAgUIjKAAIAAocIDNAAIAAANIBSAAIAAgNIJaAAIAAGxIm+AAIAAB/IgcAAIAAANg");
	this.shape_3.setTransform(44.525,28.675);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.1,57.4);


(lib.unt3_f2_apt17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjpEbIAAjwIgrAAIAAgrIgOAAIAAjnIAOAAIAAglIApAAIAAgOIDlAAIAAAOIAoAAIAAAsIEBAAIAAD6IgNAAIAABZIANAAIAACog");
	this.shape.setTransform(29.05,28.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjpEbIAAjwIgrAAIAAgrIgOAAIAAjnIAOAAIAAglIApAAIAAgOIDlAAIAAAOIAoAAIAAAsIEBAAIAAD6IgNAAIAABZIANAAIAACog");
	this.shape_1.setTransform(29.05,28.3);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjpEbIAAjwIgrAAIAAgrIgOAAIAAjnIAOAAIAAglIApAAIAAgOIDlAAIAAAOIAoAAIAAAsIEBAAIAAD6IgNAAIAABZIANAAIAACog");
	this.shape_2.setTransform(29.05,28.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjpEbIAAjwIgrAAIAAgrIgOAAIAAjnIAOAAIAAglIApAAIAAgOIDlAAIAAAOIAoAAIAAAsIEBAAIAAD6IgNAAIAABZIANAAIAACog");
	this.shape_3.setTransform(29.05,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.1,56.6);


(lib.unt3_f2_apt16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkKDXIAAmtIH0AAIAADNIAUAAIAAAWIANAAIAAB+IgNAAIAAAbIgVAAIAAAxg");
	this.shape.setTransform(26.675,21.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkKDXIAAmtIH0AAIAADNIAUAAIAAAWIANAAIAAB+IgNAAIAAAbIgVAAIAAAxg");
	this.shape_1.setTransform(26.675,21.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkKDXIAAmtIH0AAIAADNIAUAAIAAAWIANAAIAAB+IgNAAIAAAbIgVAAIAAAxg");
	this.shape_2.setTransform(26.675,21.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkKDXIAAmtIH0AAIAADNIAUAAIAAAWIANAAIAAB+IgNAAIAAAbIgVAAIAAAxg");
	this.shape_3.setTransform(26.675,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.4,43);


(lib.unt3_f2_apt15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkQE6IAAjPIgXAAIAAgbIgNAAIAAidIANAAIAAgZIATAAIAAjTIJJAAIAAGLIgMAAIAABPIAMAAIAACZg");
	this.shape.setTransform(30.925,31.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkQE6IAAjPIgXAAIAAgbIgNAAIAAidIANAAIAAgZIATAAIAAjTIJJAAIAAGLIgMAAIAABPIAMAAIAACZg");
	this.shape_1.setTransform(30.925,31.4);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkQE6IAAjPIgXAAIAAgbIgNAAIAAidIANAAIAAgZIATAAIAAjTIJJAAIAAGLIgMAAIAABPIAMAAIAACZg");
	this.shape_2.setTransform(30.925,31.4);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkQE6IAAjPIgXAAIAAgbIgNAAIAAidIANAAIAAgZIATAAIAAjTIJJAAIAAGLIgMAAIAABPIAMAAIAACZg");
	this.shape_3.setTransform(30.925,31.4);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.9,62.8);


(lib.unt3_f2_apt14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkKDYIAAmvIHzAAIAAAvIAVAAIAAAaIANAAIAAB6IgNAAIAAAdIgWAAIAADPg");
	this.shape.setTransform(26.675,21.625);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkKDYIAAmvIHzAAIAAAvIAVAAIAAAaIANAAIAAB6IgNAAIAAAdIgWAAIAADPg");
	this.shape_1.setTransform(26.675,21.625);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkKDYIAAmvIHzAAIAAAvIAVAAIAAAaIANAAIAAB6IgNAAIAAAdIgWAAIAADPg");
	this.shape_2.setTransform(26.675,21.625);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkKDYIAAmvIHzAAIAAAvIAVAAIAAAaIANAAIAAB6IgNAAIAAAdIgWAAIAADPg");
	this.shape_3.setTransform(26.675,21.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.4,43.3);


(lib.unt3_f2_apt13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkVE/IAAjXIgTAAIAAgXIgMAAIAAihIAMAAIAAgXIAYAAIAAjXIJFAAIAAGNIgMAAIAABSIAMAAIAACeg");
	this.shape.setTransform(30.925,31.875);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkVE/IAAjXIgTAAIAAgXIgMAAIAAihIAMAAIAAgXIAYAAIAAjXIJFAAIAAGNIgMAAIAABSIAMAAIAACeg");
	this.shape_1.setTransform(30.925,31.875);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkVE/IAAjXIgTAAIAAgXIgMAAIAAihIAMAAIAAgXIAYAAIAAjXIJFAAIAAGNIgMAAIAABSIAMAAIAACeg");
	this.shape_2.setTransform(30.925,31.875);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkVE/IAAjXIgTAAIAAgXIgMAAIAAihIAMAAIAAgXIAYAAIAAjXIJFAAIAAGNIgMAAIAABSIAMAAIAACeg");
	this.shape_3.setTransform(30.925,31.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.9,63.8);


(lib.unt3_f2_apt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AiKFKQgbgbgfAKIgZAQIgTgUIAAkWIgNAAIAAhjIANAAIAAkHIGnAAIAADNIBHBFImGGFg");
	this.shape.setTransform(25.375,33.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AiKFKQgbgbgfAKIgZAQIgTgUIAAkWIgNAAIAAhjIANAAIAAkHIGnAAIAADNIBHBFImGGFg");
	this.shape_1.setTransform(25.375,33.2);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AiKFKQgbgbgfAKIgZAQIgTgUIAAkWIgNAAIAAhjIANAAIAAkHIGnAAIAADNIBHBFImGGFg");
	this.shape_2.setTransform(25.375,33.2);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AiKFKQgbgbgfAKIgZAQIgTgUIAAkWIgNAAIAAhjIANAAIAAkHIGnAAIAADNIBHBFImGGFg");
	this.shape_3.setTransform(25.375,33.2);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.8,66.4);


(lib.unt3_f2_apt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkDDTIAAgaIgNAAIAAiWIANAAIAAgdIApAAIAAjYIHrAAIAACxIgMAAIAABTIAMAAIAAChg");
	this.shape.setTransform(27.3,21.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkDDTIAAgaIgNAAIAAiWIANAAIAAgdIApAAIAAjYIHrAAIAACxIgMAAIAABTIAMAAIAAChg");
	this.shape_1.setTransform(27.3,21.1);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkDDTIAAgaIgNAAIAAiWIANAAIAAgdIApAAIAAjYIHrAAIAACxIgMAAIAABTIAMAAIAAChg");
	this.shape_2.setTransform(27.3,21.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkDDTIAAgaIgNAAIAAiWIANAAIAAgdIApAAIAAjYIHrAAIAACxIgMAAIAABTIAMAAIAAChg");
	this.shape_3.setTransform(27.3,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.6,42.2);


(lib.unt3_f2_apt10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AgiEBIAAgNIkMAAIgfgfQAKgJAEgOQAJgdgYgbIgBAAIGGmGIBNBLIDMAAIAAGpIkNAAIAAANg");
	this.shape.setTransform(33.575,25.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AgiEBIAAgNIkMAAIgfgfQAKgJAEgOQAJgdgYgbIgBAAIGGmGIBNBLIDMAAIAAGpIkNAAIAAANg");
	this.shape_1.setTransform(33.575,25.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AgiEBIAAgNIkMAAIgfgfQAKgJAEgOQAJgdgYgbIgBAAIGGmGIBNBLIDMAAIAAGpIkNAAIAAANg");
	this.shape_2.setTransform(33.575,25.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AgiEBIAAgNIkMAAIgfgfQAKgJAEgOQAJgdgYgbIgBAAIGGmGIBNBLIDMAAIAAGpIkNAAIAAANg");
	this.shape_3.setTransform(33.575,25.675);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.2,51.4);


(lib.unt3_f2_apt9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjdDUIAAjZIgmAAIAAgeIgNAAIAAiZIANAAIAAgXIIUAAIAACjIgMAAIAABTIAMAAIAACxg");
	this.shape.setTransform(27.3,21.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjdDUIAAjZIgmAAIAAgeIgNAAIAAiZIANAAIAAgXIIUAAIAACjIgMAAIAABTIAMAAIAACxg");
	this.shape_1.setTransform(27.3,21.175);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjdDUIAAjZIgmAAIAAgeIgNAAIAAiZIANAAIAAgXIIUAAIAACjIgMAAIAABTIAMAAIAACxg");
	this.shape_2.setTransform(27.3,21.175);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjdDUIAAjZIgmAAIAAgeIgNAAIAAiZIANAAIAAgXIIUAAIAACjIgMAAIAABTIAMAAIAACxg");
	this.shape_3.setTransform(27.3,21.175);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.6,42.4);


(lib.unt3_f2_apt8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhPE0IAAgMIggAAIAAgTIjKAAIAApIIF/AAIAAANIBXAAIAAgNICdAAIAAJIIjUAAIAAATIgfAAIAAAMg");
	this.shape.setTransform(31.35,30.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhPE0IAAgMIggAAIAAgTIjKAAIAApIIF/AAIAAANIBXAAIAAgNICdAAIAAJIIjUAAIAAATIgfAAIAAAMg");
	this.shape_1.setTransform(31.35,30.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhPE0IAAgMIggAAIAAgTIjKAAIAApIIF/AAIAAANIBXAAIAAgNICdAAIAAJIIjUAAIAAATIgfAAIAAAMg");
	this.shape_2.setTransform(31.35,30.8);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhPE0IAAgMIggAAIAAgTIjKAAIAApIIF/AAIAAANIBXAAIAAgNICdAAIAAJIIjUAAIAAATIgfAAIAAAMg");
	this.shape_3.setTransform(31.35,30.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,61.6);


(lib.unt3_f2_apt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhNE0IAAgMIgZAAIAAgTIjWAAIAApIIGIAAIAAANIBWAAIAAgNICbAAIAAJGIjVAAIAAAVIgXAAIAAAMg");
	this.shape.setTransform(31.675,30.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhNE0IAAgMIgZAAIAAgTIjWAAIAApIIGIAAIAAANIBWAAIAAgNICbAAIAAJGIjVAAIAAAVIgXAAIAAAMg");
	this.shape_1.setTransform(31.675,30.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhNE0IAAgMIgZAAIAAgTIjWAAIAApIIGIAAIAAANIBWAAIAAgNICbAAIAAJGIjVAAIAAAVIgXAAIAAAMg");
	this.shape_2.setTransform(31.675,30.8);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhNE0IAAgMIgZAAIAAgTIjWAAIAApIIGIAAIAAANIBWAAIAAgNICbAAIAAJGIjVAAIAAAVIgXAAIAAAMg");
	this.shape_3.setTransform(31.675,30.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.4,61.6);


(lib.unt3_f2_apt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ACUEjIAAgMIhRAAIAAAMImCAAIAAmpIDNAAIAAiQIAqAAIAAgMICZAAIAAAMIArAAIAAAeIDEAAIAAIbg");
	this.shape.setTransform(31.95,29.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ACUEjIAAgMIhRAAIAAAMImCAAIAAmpIDNAAIAAiQIAqAAIAAgMICZAAIAAAMIArAAIAAAeIDEAAIAAIbg");
	this.shape_1.setTransform(31.95,29.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ACUEjIAAgMIhRAAIAAAMImCAAIAAmpIDNAAIAAiQIAqAAIAAgMICZAAIAAAMIArAAIAAAeIDEAAIAAIbg");
	this.shape_2.setTransform(31.95,29.125);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ACUEjIAAgMIhRAAIAAAMImCAAIAAmpIDNAAIAAiQIAqAAIAAgMICZAAIAAAMIArAAIAAAeIDEAAIAAIbg");
	this.shape_3.setTransform(31.95,29.125);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.9,58.3);


(lib.unt3_f2_apt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAQEOIAAgNIgXAAIAAgcIjRAAIAAnyICuAAIAAANIBWAAIAAgNICsAAIAAH4Ig1AAIAAAWIgWAAIAAANg");
	this.shape.setTransform(21.65,27);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAQEOIAAgNIgXAAIAAgcIjRAAIAAnyICuAAIAAANIBWAAIAAgNICsAAIAAH4Ig1AAIAAAWIgWAAIAAANg");
	this.shape_1.setTransform(21.65,27);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAQEOIAAgNIgXAAIAAgcIjRAAIAAnyICuAAIAAANIBWAAIAAgNICsAAIAAH4Ig1AAIAAAWIgWAAIAAANg");
	this.shape_2.setTransform(21.65,27);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AAQEOIAAgNIgXAAIAAgcIjRAAIAAnyICuAAIAAANIBWAAIAAgNICsAAIAAH4Ig1AAIAAAWIgWAAIAAANg");
	this.shape_3.setTransform(21.65,27);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.3,54);


(lib.unt3_f2_apt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhCEjIAAgMIhYAAIAAAMIigAAIAAobIC7AAIAAgeIArAAIAAgMICbAAIAAAMIAmAAIAACQIDOAAIAAGpg");
	this.shape.setTransform(31.5,29.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhCEjIAAgMIhYAAIAAAMIigAAIAAobIC7AAIAAgeIArAAIAAgMICbAAIAAAMIAmAAIAACQIDOAAIAAGpg");
	this.shape_1.setTransform(31.5,29.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhCEjIAAgMIhYAAIAAAMIigAAIAAobIC7AAIAAgeIArAAIAAgMICbAAIAAAMIAmAAIAACQIDOAAIAAGpg");
	this.shape_2.setTransform(31.5,29.125);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhCEjIAAgMIhYAAIAAAMIigAAIAAobIC7AAIAAgeIArAAIAAgMICbAAIAAAMIAmAAIAACQIDOAAIAAGpg");
	this.shape_3.setTransform(31.5,29.125);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,58.3);


(lib.unt3_f2_apt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AiLEOIAAgMIgdAAIAAgYIguAAIAAn4ICuAAIAAANIBQAAIAAgNICvAAIAAH0IjNAAIAAAcIgdAAIAAAMg");
	this.shape.setTransform(21.475,27.05);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AiLEOIAAgMIgdAAIAAgYIguAAIAAn4ICuAAIAAANIBQAAIAAgNICvAAIAAH0IjNAAIAAAcIgdAAIAAAMg");
	this.shape_1.setTransform(21.475,27.05);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AiLEOIAAgMIgdAAIAAgYIguAAIAAn4ICuAAIAAANIBQAAIAAgNICvAAIAAH0IjNAAIAAAcIgdAAIAAAMg");
	this.shape_2.setTransform(21.475,27.05);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AiLEOIAAgMIgdAAIAAgYIguAAIAAn4ICuAAIAAANIBQAAIAAgNICvAAIAAH0IjNAAIAAAcIgdAAIAAAMg");
	this.shape_3.setTransform(21.475,27.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,54.1);


(lib.unt3_f2_apt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AiVEeIAAgMIhfAAIAAAMIjIAAIACobIDKAAIAAgUIAYAAIAAgMIC+AAIAAAMIAXAAIAACFIHAAAIAAGqg");
	this.shape.setTransform(44.45,28.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AiVEeIAAgMIhfAAIAAAMIjIAAIACobIDKAAIAAgUIAYAAIAAgMIC+AAIAAAMIAXAAIAACFIHAAAIAAGqg");
	this.shape_1.setTransform(44.45,28.625);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AiVEeIAAgMIhfAAIAAAMIjIAAIACobIDKAAIAAgUIAYAAIAAgMIC+AAIAAAMIAXAAIAACFIHAAAIAAGqg");
	this.shape_2.setTransform(44.45,28.625);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AiVEeIAAgMIhfAAIAAAMIjIAAIACobIDKAAIAAgUIAYAAIAAgMIC+AAIAAAMIAXAAIAACFIHAAAIAAGqg");
	this.shape_3.setTransform(44.45,28.625);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.9,57.3);


(lib.unt3_f2_apt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjcEfIAAgNIgWAAIAAgUIjKAAIAAocIDNAAIAAANIBSAAIAAgNIJaAAIAAGxIm+AAIAAB/IgcAAIAAANg");
	this.shape.setTransform(44.525,28.675);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjcEfIAAgNIgWAAIAAgUIjKAAIAAocIDNAAIAAANIBSAAIAAgNIJaAAIAAGxIm+AAIAAB/IgcAAIAAANg");
	this.shape_1.setTransform(44.525,28.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjcEfIAAgNIgWAAIAAgUIjKAAIAAocIDNAAIAAANIBSAAIAAgNIJaAAIAAGxIm+AAIAAB/IgcAAIAAANg");
	this.shape_2.setTransform(44.525,28.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjcEfIAAgNIgWAAIAAgUIjKAAIAAocIDNAAIAAANIBSAAIAAgNIJaAAIAAGxIm+AAIAAB/IgcAAIAAANg");
	this.shape_3.setTransform(44.525,28.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.1,57.4);


(lib.unt3_f1_apt17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjpEbIAAjwIgrAAIAAgrIgOAAIAAjnIAOAAIAAglIApAAIAAgOIDlAAIAAAOIAoAAIAAAsIEBAAIAAD6IgNAAIAABZIANAAIAACog");
	this.shape.setTransform(29.05,28.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjpEbIAAjwIgrAAIAAgrIgOAAIAAjnIAOAAIAAglIApAAIAAgOIDlAAIAAAOIAoAAIAAAsIEBAAIAAD6IgNAAIAABZIANAAIAACog");
	this.shape_1.setTransform(29.05,28.3);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjpEbIAAjwIgrAAIAAgrIgOAAIAAjnIAOAAIAAglIApAAIAAgOIDlAAIAAAOIAoAAIAAAsIEBAAIAAD6IgNAAIAABZIANAAIAACog");
	this.shape_2.setTransform(29.05,28.3);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjpEbIAAjwIgrAAIAAgrIgOAAIAAjnIAOAAIAAglIApAAIAAgOIDlAAIAAAOIAoAAIAAAsIEBAAIAAD6IgNAAIAABZIANAAIAACog");
	this.shape_3.setTransform(29.05,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.1,56.6);


(lib.unt3_f1_apt16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkKDXIAAmtIH0AAIAADNIAUAAIAAAWIANAAIAAB+IgNAAIAAAbIgVAAIAAAxg");
	this.shape.setTransform(26.675,21.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkKDXIAAmtIH0AAIAADNIAUAAIAAAWIANAAIAAB+IgNAAIAAAbIgVAAIAAAxg");
	this.shape_1.setTransform(26.675,21.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkKDXIAAmtIH0AAIAADNIAUAAIAAAWIANAAIAAB+IgNAAIAAAbIgVAAIAAAxg");
	this.shape_2.setTransform(26.675,21.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkKDXIAAmtIH0AAIAADNIAUAAIAAAWIANAAIAAB+IgNAAIAAAbIgVAAIAAAxg");
	this.shape_3.setTransform(26.675,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.4,43);


(lib.unt3_f1_apt15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkQE6IAAjPIgXAAIAAgbIgNAAIAAidIANAAIAAgZIATAAIAAjTIJJAAIAAGLIgMAAIAABPIAMAAIAACZg");
	this.shape.setTransform(30.925,31.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkQE6IAAjPIgXAAIAAgbIgNAAIAAidIANAAIAAgZIATAAIAAjTIJJAAIAAGLIgMAAIAABPIAMAAIAACZg");
	this.shape_1.setTransform(30.925,31.4);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkQE6IAAjPIgXAAIAAgbIgNAAIAAidIANAAIAAgZIATAAIAAjTIJJAAIAAGLIgMAAIAABPIAMAAIAACZg");
	this.shape_2.setTransform(30.925,31.4);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkQE6IAAjPIgXAAIAAgbIgNAAIAAidIANAAIAAgZIATAAIAAjTIJJAAIAAGLIgMAAIAABPIAMAAIAACZg");
	this.shape_3.setTransform(30.925,31.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.9,62.8);


(lib.unt3_f1_apt14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkKDYIAAmvIHzAAIAAAvIAVAAIAAAaIANAAIAAB6IgNAAIAAAdIgWAAIAADPg");
	this.shape.setTransform(26.675,21.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkKDYIAAmvIHzAAIAAAvIAVAAIAAAaIANAAIAAB6IgNAAIAAAdIgWAAIAADPg");
	this.shape_1.setTransform(26.675,21.625);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkKDYIAAmvIHzAAIAAAvIAVAAIAAAaIANAAIAAB6IgNAAIAAAdIgWAAIAADPg");
	this.shape_2.setTransform(26.675,21.625);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkKDYIAAmvIHzAAIAAAvIAVAAIAAAaIANAAIAAB6IgNAAIAAAdIgWAAIAADPg");
	this.shape_3.setTransform(26.675,21.625);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.4,43.3);


(lib.unt3_f1_apt13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkVE/IAAjXIgTAAIAAgXIgMAAIAAihIAMAAIAAgXIAYAAIAAjXIJFAAIAAGNIgMAAIAABSIAMAAIAACeg");
	this.shape.setTransform(30.925,31.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkVE/IAAjXIgTAAIAAgXIgMAAIAAihIAMAAIAAgXIAYAAIAAjXIJFAAIAAGNIgMAAIAABSIAMAAIAACeg");
	this.shape_1.setTransform(30.925,31.875);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkVE/IAAjXIgTAAIAAgXIgMAAIAAihIAMAAIAAgXIAYAAIAAjXIJFAAIAAGNIgMAAIAABSIAMAAIAACeg");
	this.shape_2.setTransform(30.925,31.875);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkVE/IAAjXIgTAAIAAgXIgMAAIAAihIAMAAIAAgXIAYAAIAAjXIJFAAIAAGNIgMAAIAABSIAMAAIAACeg");
	this.shape_3.setTransform(30.925,31.875);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.9,63.8);


(lib.unt3_f1_apt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AiKFKQgbgbgfAKIgZAQIgTgUIAAkWIgNAAIAAhjIANAAIAAkHIGnAAIAADNIBHBFImGGFg");
	this.shape.setTransform(25.375,33.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AiKFKQgbgbgfAKIgZAQIgTgUIAAkWIgNAAIAAhjIANAAIAAkHIGnAAIAADNIBHBFImGGFg");
	this.shape_1.setTransform(25.375,33.2);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AiKFKQgbgbgfAKIgZAQIgTgUIAAkWIgNAAIAAhjIANAAIAAkHIGnAAIAADNIBHBFImGGFg");
	this.shape_2.setTransform(25.375,33.2);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AiKFKQgbgbgfAKIgZAQIgTgUIAAkWIgNAAIAAhjIANAAIAAkHIGnAAIAADNIBHBFImGGFg");
	this.shape_3.setTransform(25.375,33.2);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.8,66.4);


(lib.unt3_f1_apt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkDDTIAAgaIgNAAIAAiWIANAAIAAgdIApAAIAAjYIHrAAIAACxIgMAAIAABTIAMAAIAAChg");
	this.shape.setTransform(27.3,21.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkDDTIAAgaIgNAAIAAiWIANAAIAAgdIApAAIAAjYIHrAAIAACxIgMAAIAABTIAMAAIAAChg");
	this.shape_1.setTransform(27.3,21.1);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkDDTIAAgaIgNAAIAAiWIANAAIAAgdIApAAIAAjYIHrAAIAACxIgMAAIAABTIAMAAIAAChg");
	this.shape_2.setTransform(27.3,21.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkDDTIAAgaIgNAAIAAiWIANAAIAAgdIApAAIAAjYIHrAAIAACxIgMAAIAABTIAMAAIAAChg");
	this.shape_3.setTransform(27.3,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.6,42.2);


(lib.unt3_f1_apt10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AgiEBIAAgNIkMAAIgfgfQAKgJAEgOQAJgdgYgbIgBAAIGGmGIBNBLIDMAAIAAGpIkNAAIAAANg");
	this.shape.setTransform(33.575,25.675);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AgiEBIAAgNIkMAAIgfgfQAKgJAEgOQAJgdgYgbIgBAAIGGmGIBNBLIDMAAIAAGpIkNAAIAAANg");
	this.shape_1.setTransform(33.575,25.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AgiEBIAAgNIkMAAIgfgfQAKgJAEgOQAJgdgYgbIgBAAIGGmGIBNBLIDMAAIAAGpIkNAAIAAANg");
	this.shape_2.setTransform(33.575,25.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AgiEBIAAgNIkMAAIgfgfQAKgJAEgOQAJgdgYgbIgBAAIGGmGIBNBLIDMAAIAAGpIkNAAIAAANg");
	this.shape_3.setTransform(33.575,25.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.2,51.4);


(lib.unt3_f1_apt9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjdDUIAAjZIgmAAIAAgeIgNAAIAAiZIANAAIAAgXIIUAAIAACjIgMAAIAABTIAMAAIAACxg");
	this.shape.setTransform(27.3,21.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjdDUIAAjZIgmAAIAAgeIgNAAIAAiZIANAAIAAgXIIUAAIAACjIgMAAIAABTIAMAAIAACxg");
	this.shape_1.setTransform(27.3,21.175);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjdDUIAAjZIgmAAIAAgeIgNAAIAAiZIANAAIAAgXIIUAAIAACjIgMAAIAABTIAMAAIAACxg");
	this.shape_2.setTransform(27.3,21.175);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjdDUIAAjZIgmAAIAAgeIgNAAIAAiZIANAAIAAgXIIUAAIAACjIgMAAIAABTIAMAAIAACxg");
	this.shape_3.setTransform(27.3,21.175);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.6,42.4);


(lib.unt3_f1_apt8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhPE0IAAgMIggAAIAAgTIjKAAIAApIIF/AAIAAANIBXAAIAAgNICdAAIAAJIIjUAAIAAATIgfAAIAAAMg");
	this.shape.setTransform(31.35,30.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhPE0IAAgMIggAAIAAgTIjKAAIAApIIF/AAIAAANIBXAAIAAgNICdAAIAAJIIjUAAIAAATIgfAAIAAAMg");
	this.shape_1.setTransform(31.35,30.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhPE0IAAgMIggAAIAAgTIjKAAIAApIIF/AAIAAANIBXAAIAAgNICdAAIAAJIIjUAAIAAATIgfAAIAAAMg");
	this.shape_2.setTransform(31.35,30.8);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhPE0IAAgMIggAAIAAgTIjKAAIAApIIF/AAIAAANIBXAAIAAgNICdAAIAAJIIjUAAIAAATIgfAAIAAAMg");
	this.shape_3.setTransform(31.35,30.8);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,61.6);


(lib.unt3_f1_apt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhNE0IAAgMIgZAAIAAgTIjWAAIAApIIGIAAIAAANIBWAAIAAgNICbAAIAAJGIjVAAIAAAVIgXAAIAAAMg");
	this.shape.setTransform(31.675,30.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhNE0IAAgMIgZAAIAAgTIjWAAIAApIIGIAAIAAANIBWAAIAAgNICbAAIAAJGIjVAAIAAAVIgXAAIAAAMg");
	this.shape_1.setTransform(31.675,30.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhNE0IAAgMIgZAAIAAgTIjWAAIAApIIGIAAIAAANIBWAAIAAgNICbAAIAAJGIjVAAIAAAVIgXAAIAAAMg");
	this.shape_2.setTransform(31.675,30.8);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhNE0IAAgMIgZAAIAAgTIjWAAIAApIIGIAAIAAANIBWAAIAAgNICbAAIAAJGIjVAAIAAAVIgXAAIAAAMg");
	this.shape_3.setTransform(31.675,30.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.4,61.6);


(lib.unt3_f1_apt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ACUEjIAAgMIhRAAIAAAMImCAAIAAmpIDNAAIAAiQIAqAAIAAgMICZAAIAAAMIArAAIAAAeIDEAAIAAIbg");
	this.shape.setTransform(31.95,29.125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ACUEjIAAgMIhRAAIAAAMImCAAIAAmpIDNAAIAAiQIAqAAIAAgMICZAAIAAAMIArAAIAAAeIDEAAIAAIbg");
	this.shape_1.setTransform(31.95,29.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ACUEjIAAgMIhRAAIAAAMImCAAIAAmpIDNAAIAAiQIAqAAIAAgMICZAAIAAAMIArAAIAAAeIDEAAIAAIbg");
	this.shape_2.setTransform(31.95,29.125);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ACUEjIAAgMIhRAAIAAAMImCAAIAAmpIDNAAIAAiQIAqAAIAAgMICZAAIAAAMIArAAIAAAeIDEAAIAAIbg");
	this.shape_3.setTransform(31.95,29.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.9,58.3);


(lib.unt3_f1_apt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAQEOIAAgNIgXAAIAAgcIjRAAIAAnyICuAAIAAANIBWAAIAAgNICsAAIAAH4Ig1AAIAAAWIgWAAIAAANg");
	this.shape.setTransform(21.65,27);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAQEOIAAgNIgXAAIAAgcIjRAAIAAnyICuAAIAAANIBWAAIAAgNICsAAIAAH4Ig1AAIAAAWIgWAAIAAANg");
	this.shape_1.setTransform(21.65,27);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAQEOIAAgNIgXAAIAAgcIjRAAIAAnyICuAAIAAANIBWAAIAAgNICsAAIAAH4Ig1AAIAAAWIgWAAIAAANg");
	this.shape_2.setTransform(21.65,27);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AAQEOIAAgNIgXAAIAAgcIjRAAIAAnyICuAAIAAANIBWAAIAAgNICsAAIAAH4Ig1AAIAAAWIgWAAIAAANg");
	this.shape_3.setTransform(21.65,27);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.3,54);


(lib.unt3_f1_apt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhCEjIAAgMIhYAAIAAAMIigAAIAAobIC7AAIAAgeIArAAIAAgMICbAAIAAAMIAmAAIAACQIDOAAIAAGpg");
	this.shape.setTransform(31.5,29.125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhCEjIAAgMIhYAAIAAAMIigAAIAAobIC7AAIAAgeIArAAIAAgMICbAAIAAAMIAmAAIAACQIDOAAIAAGpg");
	this.shape_1.setTransform(31.5,29.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhCEjIAAgMIhYAAIAAAMIigAAIAAobIC7AAIAAgeIArAAIAAgMICbAAIAAAMIAmAAIAACQIDOAAIAAGpg");
	this.shape_2.setTransform(31.5,29.125);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhCEjIAAgMIhYAAIAAAMIigAAIAAobIC7AAIAAgeIArAAIAAgMICbAAIAAAMIAmAAIAACQIDOAAIAAGpg");
	this.shape_3.setTransform(31.5,29.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,58.3);


(lib.unt3_f1_apt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AiLEOIAAgMIgdAAIAAgYIguAAIAAn4ICuAAIAAANIBQAAIAAgNICvAAIAAH0IjNAAIAAAcIgdAAIAAAMg");
	this.shape.setTransform(21.475,27.05);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AiLEOIAAgMIgdAAIAAgYIguAAIAAn4ICuAAIAAANIBQAAIAAgNICvAAIAAH0IjNAAIAAAcIgdAAIAAAMg");
	this.shape_1.setTransform(21.475,27.05);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AiLEOIAAgMIgdAAIAAgYIguAAIAAn4ICuAAIAAANIBQAAIAAgNICvAAIAAH0IjNAAIAAAcIgdAAIAAAMg");
	this.shape_2.setTransform(21.475,27.05);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AiLEOIAAgMIgdAAIAAgYIguAAIAAn4ICuAAIAAANIBQAAIAAgNICvAAIAAH0IjNAAIAAAcIgdAAIAAAMg");
	this.shape_3.setTransform(21.475,27.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43,54.1);


(lib.unt3_f1_apt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AiVEeIAAgMIhfAAIAAAMIjIAAIACobIDKAAIAAgUIAYAAIAAgMIC+AAIAAAMIAXAAIAACFIHAAAIAAGqg");
	this.shape.setTransform(44.45,28.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AiVEeIAAgMIhfAAIAAAMIjIAAIACobIDKAAIAAgUIAYAAIAAgMIC+AAIAAAMIAXAAIAACFIHAAAIAAGqg");
	this.shape_1.setTransform(44.45,28.625);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AiVEeIAAgMIhfAAIAAAMIjIAAIACobIDKAAIAAgUIAYAAIAAgMIC+AAIAAAMIAXAAIAACFIHAAAIAAGqg");
	this.shape_2.setTransform(44.45,28.625);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AiVEeIAAgMIhfAAIAAAMIjIAAIACobIDKAAIAAgUIAYAAIAAgMIC+AAIAAAMIAXAAIAACFIHAAAIAAGqg");
	this.shape_3.setTransform(44.45,28.625);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.9,57.3);


(lib.unt3_f1_apt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjcEfIAAgNIgWAAIAAgUIjKAAIAAocIDNAAIAAANIBSAAIAAgNIJaAAIAAGxIm+AAIAAB/IgcAAIAAANg");
	this.shape.setTransform(44.525,28.675);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjcEfIAAgNIgWAAIAAgUIjKAAIAAocIDNAAIAAANIBSAAIAAgNIJaAAIAAGxIm+AAIAAB/IgcAAIAAANg");
	this.shape_1.setTransform(44.525,28.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjcEfIAAgNIgWAAIAAgUIjKAAIAAocIDNAAIAAANIBSAAIAAgNIJaAAIAAGxIm+AAIAAB/IgcAAIAAANg");
	this.shape_2.setTransform(44.525,28.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjcEfIAAgNIgWAAIAAgUIjKAAIAAocIDNAAIAAANIBSAAIAAgNIJaAAIAAGxIm+AAIAAB/IgcAAIAAANg");
	this.shape_3.setTransform(44.525,28.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.1,57.4);


(lib.unt2_f3_apt30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDSIAAixIAMAAIAAhNIgMAAIAAilIIXAAIAAAeIAMAAIAACUIgMAAIAAAbIgoAAIAADWg");
	this.shape.setTransform(27.425,21.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDSIAAixIAMAAIAAhNIgMAAIAAilIIXAAIAAAeIAMAAIAACUIgMAAIAAAbIgoAAIAADWg");
	this.shape_1.setTransform(27.425,21.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDSIAAixIAMAAIAAhNIgMAAIAAilIIXAAIAAAeIAMAAIAACUIgMAAIAAAbIgoAAIAADWg");
	this.shape_2.setTransform(27.425,21.025);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDSIAAixIAMAAIAAhNIgMAAIAAilIIXAAIAAAeIAMAAIAACUIgMAAIAAAbIgoAAIAADWg");
	this.shape_3.setTransform(27.425,21.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.1);


(lib.unt2_f3_apt29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjtEYIAAjvIgqAAIAAgoIgNAAIAAjjIANAAIAAgpIApAAIAAgMIDoAAIAAAMIAnAAIAAAuIEEAAIAAD7IgNAAIAABSIANAAIAACog");
	this.shape.setTransform(29.275,28.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjtEYIAAjvIgqAAIAAgoIgNAAIAAjjIANAAIAAgpIApAAIAAgMIDoAAIAAAMIAnAAIAAAuIEEAAIAAD7IgNAAIAABSIANAAIAACog");
	this.shape_1.setTransform(29.275,28.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjtEYIAAjvIgqAAIAAgoIgNAAIAAjjIANAAIAAgpIApAAIAAgMIDoAAIAAAMIAnAAIAAAuIEEAAIAAD7IgNAAIAABSIANAAIAACog");
	this.shape_2.setTransform(29.275,28.025);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjtEYIAAjvIgqAAIAAgoIgNAAIAAjjIANAAIAAgpIApAAIAAgMIDoAAIAAAMIAnAAIAAAuIEEAAIAAD7IgNAAIAABSIANAAIAACog");
	this.shape_3.setTransform(29.275,28.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.6,56.1);


(lib.unt2_f3_apt28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDVIAAiqIAMAAIAAhIIgMAAIAAi3IHvAAIAADbIAnAAIAAAbIANAAIAACWIgMAAIAAAdg");
	this.shape.setTransform(27.425,21.325);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDVIAAiqIAMAAIAAhIIgMAAIAAi3IHvAAIAADbIAnAAIAAAbIANAAIAACWIgMAAIAAAdg");
	this.shape_1.setTransform(27.425,21.325);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDVIAAiqIAMAAIAAhIIgMAAIAAi3IHvAAIAADbIAnAAIAAAbIANAAIAACWIgMAAIAAAdg");
	this.shape_2.setTransform(27.425,21.325);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDVIAAiqIAMAAIAAhIIgMAAIAAi3IHvAAIAADbIAnAAIAAAbIANAAIAACWIgMAAIAAAdg");
	this.shape_3.setTransform(27.425,21.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.7);


(lib.unt2_f3_apt27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjsDZIAAgzIgUAAIAAgZIgNAAIAAh/IANAAIAAgVIAVAAIAAjRIH5AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape.setTransform(27,21.725);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjsDZIAAgzIgUAAIAAgZIgNAAIAAh/IANAAIAAgVIAVAAIAAjRIH5AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_1.setTransform(27,21.725);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjsDZIAAgzIgUAAIAAgZIgNAAIAAh/IANAAIAAgVIAVAAIAAjRIH5AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_2.setTransform(27,21.725);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjsDZIAAgzIgUAAIAAgZIgNAAIAAh/IANAAIAAgVIAVAAIAAjRIH5AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_3.setTransform(27,21.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,43.5);


(lib.unt2_f3_apt26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDWIAAi4IAMAAIAAhNIgMAAIAAimIIXAAIAAAYIAMAAIAACYIgMAAIAAAeIgoAAIAADdg");
	this.shape.setTransform(27.425,21.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDWIAAi4IAMAAIAAhNIgMAAIAAimIIXAAIAAAYIAMAAIAACYIgMAAIAAAeIgoAAIAADdg");
	this.shape_1.setTransform(27.425,21.425);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDWIAAi4IAMAAIAAhNIgMAAIAAimIIXAAIAAAYIAMAAIAACYIgMAAIAAAeIgoAAIAADdg");
	this.shape_2.setTransform(27.425,21.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDWIAAi4IAMAAIAAhNIgMAAIAAimIIXAAIAAAYIAMAAIAACYIgMAAIAAAeIgoAAIAADdg");
	this.shape_3.setTransform(27.425,21.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.9);


(lib.unt2_f3_apt25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjpDXIAAjNIgZAAIAAgdIgMAAIAAh8IAMAAIAAgXIAXAAIAAgwIH6AAIAACsIgMAAIAABSIAMAAIAACvg");
	this.shape.setTransform(27.125,21.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjpDXIAAjNIgZAAIAAgdIgMAAIAAh8IAMAAIAAgXIAXAAIAAgwIH6AAIAACsIgMAAIAABSIAMAAIAACvg");
	this.shape_1.setTransform(27.125,21.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjpDXIAAjNIgZAAIAAgdIgMAAIAAh8IAMAAIAAgXIAXAAIAAgwIH6AAIAACsIgMAAIAABSIAMAAIAACvg");
	this.shape_2.setTransform(27.125,21.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjpDXIAAjNIgZAAIAAgdIgMAAIAAh8IAMAAIAAgXIAXAAIAAgwIH6AAIAACsIgMAAIAABSIAMAAIAACvg");
	this.shape_3.setTransform(27.125,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,43);


(lib.unt2_f3_apt24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjdESIAAgbIg4ABIA1g0IAAoiIGsAAIAADPIBKBJIlHFHIgEADIhaBbg");
	this.shape.setTransform(27.75,35.125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjdESIAAgbIg4ABIA1g0IAAoiIGsAAIAADPIBKBJIlHFHIgEADIhaBbg");
	this.shape_1.setTransform(27.75,35.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjdESIAAgbIg4ABIA1g0IAAoiIGsAAIAADPIBKBJIlHFHIgEADIhaBbg");
	this.shape_2.setTransform(27.75,35.125);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjdESIAAgbIg4ABIA1g0IAAoiIGsAAIAADPIBKBJIlHFHIgEADIhaBbg");
	this.shape_3.setTransform(27.75,35.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.5,70.3);


(lib.unt2_f3_apt23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjrDYIAAgwIgXAAIAAgZIgMAAIAAiAIAMAAIAAgWIAZAAIAAjRIH4AAIAACxIgMAAIAABQIAMAAIAACvg");
	this.shape.setTransform(27.125,21.65);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjrDYIAAgwIgXAAIAAgZIgMAAIAAiAIAMAAIAAgWIAZAAIAAjRIH4AAIAACxIgMAAIAABQIAMAAIAACvg");
	this.shape_1.setTransform(27.125,21.65);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjrDYIAAgwIgXAAIAAgZIgMAAIAAiAIAMAAIAAgWIAZAAIAAjRIH4AAIAACxIgMAAIAABQIAMAAIAACvg");
	this.shape_2.setTransform(27.125,21.65);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjrDYIAAgwIgXAAIAAgZIgMAAIAAiAIAMAAIAAgWIAZAAIAAjRIH4AAIAACxIgMAAIAABQIAMAAIAACvg");
	this.shape_3.setTransform(27.125,21.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,43.3);


(lib.unt2_f3_apt22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjqDZIAAjRIgYAAIAAgaIgMAAIAAh7IANAAIAAgYIAVAAIAAgzIH7AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape.setTransform(27.1,21.675);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjqDZIAAjRIgYAAIAAgaIgMAAIAAh7IANAAIAAgYIAVAAIAAgzIH7AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_1.setTransform(27.1,21.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjqDZIAAjRIgYAAIAAgaIgMAAIAAh7IANAAIAAgYIAVAAIAAgzIH7AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_2.setTransform(27.1,21.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjqDZIAAjRIgYAAIAAgaIgMAAIAAh7IANAAIAAgYIAVAAIAAgzIH7AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_3.setTransform(27.1,21.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.2,43.4);


(lib.unt2_f3_apt21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjlEkIAAgNIgnAAIAAgtIgNAAIAAjkIANAAIAAgoIAnAAIAAkBIECAAIAAANIBUAAIAAgNICpAAIAAIMIjuAAIAAAuIgqAAIAAANg");
	this.shape.setTransform(28.2,29.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjlEkIAAgNIgnAAIAAgtIgNAAIAAjkIANAAIAAgoIAnAAIAAkBIECAAIAAANIBUAAIAAgNICpAAIAAIMIjuAAIAAAuIgqAAIAAANg");
	this.shape_1.setTransform(28.2,29.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjlEkIAAgNIgnAAIAAgtIgNAAIAAjkIANAAIAAgoIAnAAIAAkBIECAAIAAANIBUAAIAAgNICpAAIAAIMIjuAAIAAAuIgqAAIAAANg");
	this.shape_2.setTransform(28.2,29.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjlEkIAAgNIgnAAIAAgtIgNAAIAAjkIANAAIAAgoIAnAAIAAkBIECAAIAAANIBUAAIAAgNICpAAIAAIMIjuAAIAAAuIgqAAIAAANg");
	this.shape_3.setTransform(28.2,29.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.4,58.3);


(lib.unt2_f3_apt20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjxDdIgnAAIhHhGIBbhbIAAAAIFKlLIBGBHIDUAAIAAGtIomAAIgrAqg");
	this.shape.setTransform(35.175,27.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjxDdIgnAAIhHhGIBbhbIAAAAIFKlLIBGBHIDUAAIAAGtIomAAIgrAqg");
	this.shape_1.setTransform(35.175,27.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjxDdIgnAAIhHhGIBbhbIAAAAIFKlLIBGBHIDUAAIAAGtIomAAIgrAqg");
	this.shape_2.setTransform(35.175,27.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjxDdIgnAAIhHhGIBbhbIAAAAIFKlLIBGBHIDUAAIAAGtIomAAIgrAqg");
	this.shape_3.setTransform(35.175,27.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.4,54.3);


(lib.unt2_f3_apt19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhPEvIAAgeIgtAAIAAgjIi9AAIAAocICmAAIAAANIBRAAIAAgNIF8AAIAAGtIjCAAIAACSIgmAAIAAAeg");
	this.shape.setTransform(31.35,30.275);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhPEvIAAgeIgtAAIAAgjIi9AAIAAocICmAAIAAANIBRAAIAAgNIF8AAIAAGtIjCAAIAACSIgmAAIAAAeg");
	this.shape_1.setTransform(31.35,30.275);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhPEvIAAgeIgtAAIAAgjIi9AAIAAocICmAAIAAANIBRAAIAAgNIF8AAIAAGtIjCAAIAACSIgmAAIAAAeg");
	this.shape_2.setTransform(31.35,30.275);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhPEvIAAgeIgtAAIAAgjIi9AAIAAocICmAAIAAANIBRAAIAAgNIF8AAIAAGtIjCAAIAACSIgmAAIAAAeg");
	this.shape_3.setTransform(31.35,30.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,60.6);


(lib.unt2_f3_apt18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjQEbIAAoXIAVAAIAAgeICgAAIAAAeIARAAIAAAoIDbAAIAAHvg");
	this.shape.setTransform(20.925,28.275);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjQEbIAAoXIAVAAIAAgeICgAAIAAAeIARAAIAAAoIDbAAIAAHvg");
	this.shape_1.setTransform(20.925,28.275);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjQEbIAAoXIAVAAIAAgeICgAAIAAAeIARAAIAAAoIDbAAIAAHvg");
	this.shape_2.setTransform(20.925,28.275);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjQEbIAAoXIAVAAIAAgeICgAAIAAAeIARAAIAAAoIDbAAIAAHvg");
	this.shape_3.setTransform(20.925,28.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.9,56.6);


(lib.unt2_f3_apt17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhLEZIAAgeIgbAAIAAgQIjYAAIAAn3ICqAAIAAgMIBhAAIAAAMIFyAAIAAH3IjRAAIAAAQIggAAIAAAeg");
	this.shape.setTransform(31.875,28.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhLEZIAAgeIgbAAIAAgQIjYAAIAAn3ICqAAIAAgMIBhAAIAAAMIFyAAIAAH3IjRAAIAAAQIggAAIAAAeg");
	this.shape_1.setTransform(31.875,28.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhLEZIAAgeIgbAAIAAgQIjYAAIAAn3ICqAAIAAgMIBhAAIAAAMIFyAAIAAH3IjRAAIAAAQIggAAIAAAeg");
	this.shape_2.setTransform(31.875,28.125);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhLEZIAAgeIgbAAIAAgQIjYAAIAAn3ICqAAIAAgMIBhAAIAAAMIFyAAIAAH3IjRAAIAAAQIggAAIAAAeg");
	this.shape_3.setTransform(31.875,28.125);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.8,56.3);


(lib.unt2_f3_apt16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ak8EVIAAoKIDvAAIAAgfICbAAIAAAfIDvAAIAAIKg");
	this.shape.setTransform(31.725,27.725);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ak8EVIAAoKIDvAAIAAgfICbAAIAAAfIDvAAIAAIKg");
	this.shape_1.setTransform(31.725,27.725);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ak8EVIAAoKIDvAAIAAgfICbAAIAAAfIDvAAIAAIKg");
	this.shape_2.setTransform(31.725,27.725);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ak8EVIAAoKIDvAAIAAgfICbAAIAAAfIDvAAIAAIKg");
	this.shape_3.setTransform(31.725,27.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,55.5);


(lib.unt2_f3_apt15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ak8EvIAApdIJ4AAIAAJdg");
	this.shape.setTransform(31.65,30.275);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ak8EvIAApdIJ4AAIAAJdg");
	this.shape_1.setTransform(31.65,30.275);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ak8EvIAApdIJ4AAIAAJdg");
	this.shape_2.setTransform(31.65,30.275);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ak8EvIAApdIJ4AAIAAJdg");
	this.shape_3.setTransform(31.65,30.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.3,60.6);


(lib.unt2_f3_apt14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjQEbIAAnvIDbAAIAAgoIASAAIAAgeICfAAIAAAeIAVAAIAAIXg");
	this.shape.setTransform(20.925,28.275);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjQEbIAAnvIDbAAIAAgoIASAAIAAgeICfAAIAAAeIAVAAIAAIXg");
	this.shape_1.setTransform(20.925,28.275);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjQEbIAAnvIDbAAIAAgoIASAAIAAgeICfAAIAAAeIAVAAIAAIXg");
	this.shape_2.setTransform(20.925,28.275);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjQEbIAAnvIDbAAIAAgoIASAAIAAgeICfAAIAAAeIAVAAIAAIXg");
	this.shape_3.setTransform(20.925,28.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.9,56.6);


(lib.unt2_f3_apt13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhNEZIAAgfIggABIAAgQIjRAAIAAn3IFyAAIAAgMIBhAAIAAAMICqAAIAAH3IjYAAIAAAPIgbAAIAAAfg");
	this.shape.setTransform(31.875,28.125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhNEZIAAgfIggABIAAgQIjRAAIAAn3IFyAAIAAgMIBhAAIAAAMICqAAIAAH3IjYAAIAAAPIgbAAIAAAfg");
	this.shape_1.setTransform(31.875,28.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhNEZIAAgfIggABIAAgQIjRAAIAAn3IFyAAIAAgMIBhAAIAAAMICqAAIAAH3IjYAAIAAAPIgbAAIAAAfg");
	this.shape_2.setTransform(31.875,28.125);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhNEZIAAgfIggABIAAgQIjRAAIAAn3IFyAAIAAgMIBhAAIAAAMICqAAIAAH3IjYAAIAAAPIgbAAIAAAfg");
	this.shape_3.setTransform(31.875,28.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.8,56.3);


(lib.unt2_f3_apt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ADVD5IAAABIolAAIAAmtIDTAAIBGhGIGIGBQgYAYAKAhQAFARAJALIgdAdg");
	this.shape.setTransform(33.725,25.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ADVD5IAAABIolAAIAAmtIDTAAIBGhGIGIGBQgYAYAKAhQAFARAJALIgdAdg");
	this.shape_1.setTransform(33.725,25.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ADVD5IAAABIolAAIAAmtIDTAAIBGhGIGIGBQgYAYAKAhQAFARAJALIgdAdg");
	this.shape_2.setTransform(33.725,25.025);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ADVD5IAAABIolAAIAAmtIDTAAIBGhGIGIGBQgYAYAKAhQAFARAJALIgdAdg");
	this.shape_3.setTransform(33.725,25.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.5,50.1);


(lib.unt2_f3_apt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhQEvIAAgeIgoAAIAAiSIjBAAIAAmtIF7AAIAAANIBRAAIAAgNICnAAIAAIcIi9AAIAAAjIgtAAIAAAeg");
	this.shape.setTransform(31.35,30.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhQEvIAAgeIgoAAIAAiSIjBAAIAAmtIF7AAIAAANIBRAAIAAgNICnAAIAAIcIi9AAIAAAjIgtAAIAAAeg");
	this.shape_1.setTransform(31.35,30.275);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhQEvIAAgeIgoAAIAAiSIjBAAIAAmtIF7AAIAAANIBRAAIAAgNICnAAIAAIcIi9AAIAAAjIgtAAIAAAeg");
	this.shape_2.setTransform(31.35,30.275);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhQEvIAAgeIgoAAIAAiSIjBAAIAAmtIF7AAIAAANIBRAAIAAgNICnAAIAAIcIi9AAIAAAjIgtAAIAAAeg");
	this.shape_3.setTransform(31.35,30.275);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,60.6);


(lib.unt2_f3_apt10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ADHE/QgigKgXAYImJmBIBKhKIAAjPIGtAAIAAKBIgaAZQgLgJgQgFg");
	this.shape.setTransform(25.15,33.35);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ADHE/QgigKgXAYImJmBIBKhKIAAjPIGtAAIAAKBIgaAZQgLgJgQgFg");
	this.shape_1.setTransform(25.15,33.35);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ADHE/QgigKgXAYImJmBIBKhKIAAjPIGtAAIAAKBIgaAZQgLgJgQgFg");
	this.shape_2.setTransform(25.15,33.35);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ADHE/QgigKgXAYImJmBIBKhKIAAjPIGtAAIAAKBIgaAZQgLgJgQgFg");
	this.shape_3.setTransform(25.15,33.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.3,66.7);


(lib.unt2_f3_apt9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AgBEkIAAgNIgqAAIAAguIjuAAIAAoMICoAAIAAANIBVAAIAAgNIEBAAIAAEBIApAAIAAAoIAMAAIAADkIgMAAIAAAtIgpAAIAAANg");
	this.shape.setTransform(28.2,29.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AgBEkIAAgNIgqAAIAAguIjuAAIAAoMICoAAIAAANIBVAAIAAgNIEBAAIAAEBIApAAIAAAoIAMAAIAADkIgMAAIAAAtIgpAAIAAANg");
	this.shape_1.setTransform(28.2,29.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AgBEkIAAgNIgqAAIAAguIjuAAIAAoMICoAAIAAANIBVAAIAAgNIEBAAIAAEBIApAAIAAAoIAMAAIAADkIgMAAIAAAtIgpAAIAAANg");
	this.shape_2.setTransform(28.2,29.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AgBEkIAAgNIgqAAIAAguIjuAAIAAoMICoAAIAAANIBVAAIAAgNIEBAAIAAEBIApAAIAAAoIAMAAIAADkIgMAAIAAAtIgpAAIAAANg");
	this.shape_3.setTransform(28.2,29.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.4,58.3);


(lib.unt2_f3_apt8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkODZIAAiwIANAAIAAhTIgNAAIAAiuIH7AAIAAAyIAVAAIAAAZIANAAIAAB6IgMAAIAAAaIgXAAIAADSg");
	this.shape.setTransform(27.1,21.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkODZIAAiwIANAAIAAhTIgNAAIAAiuIH7AAIAAAyIAVAAIAAAZIANAAIAAB6IgMAAIAAAaIgXAAIAADSg");
	this.shape_1.setTransform(27.1,21.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkODZIAAiwIANAAIAAhTIgNAAIAAiuIH7AAIAAAyIAVAAIAAAZIANAAIAAB6IgMAAIAAAaIgXAAIAADSg");
	this.shape_2.setTransform(27.1,21.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkODZIAAiwIANAAIAAhTIgNAAIAAiuIH7AAIAAAyIAVAAIAAAZIANAAIAAB6IgMAAIAAAaIgXAAIAADSg");
	this.shape_3.setTransform(27.1,21.675);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.2,43.4);


(lib.unt2_f3_apt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkODZIAAiwIAMAAIAAhQIgMAAIAAixIH4AAIAADSIAZAAIAAAVIAMAAIAACAIgMAAIAAAZIgXAAIAAAxg");
	this.shape.setTransform(27.125,21.675);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkODZIAAiwIAMAAIAAhQIgMAAIAAixIH4AAIAADSIAZAAIAAAVIAMAAIAACAIgMAAIAAAZIgXAAIAAAxg");
	this.shape_1.setTransform(27.125,21.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkODZIAAiwIAMAAIAAhQIgMAAIAAixIH4AAIAADSIAZAAIAAAVIAMAAIAACAIgMAAIAAAZIgXAAIAAAxg");
	this.shape_2.setTransform(27.125,21.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkODZIAAiwIAMAAIAAhQIgMAAIAAixIH4AAIAADSIAZAAIAAAVIAMAAIAACAIgMAAIAAAZIgXAAIAAAxg");
	this.shape_3.setTransform(27.125,21.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,43.4);


(lib.unt2_f3_apt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjdDWIAAjdIgoAAIAAgeIgNAAIAAiYIANAAIAAgYIIXAAIAACmIgMAAIAABNIAMAAIAAC4g");
	this.shape.setTransform(27.45,21.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjdDWIAAjdIgoAAIAAgeIgNAAIAAiYIANAAIAAgYIIXAAIAACmIgMAAIAABNIAMAAIAAC4g");
	this.shape_1.setTransform(27.45,21.425);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjdDWIAAjdIgoAAIAAgeIgNAAIAAiYIANAAIAAgYIIXAAIAACmIgMAAIAABNIAMAAIAAC4g");
	this.shape_2.setTransform(27.45,21.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjdDWIAAjdIgoAAIAAgeIgNAAIAAiYIANAAIAAgYIIXAAIAACmIgMAAIAABNIAMAAIAAC4g");
	this.shape_3.setTransform(27.45,21.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.9);


(lib.unt2_f3_apt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkODXIAAivIAMAAIAAhSIgMAAIAAisIH6AAIAAAwIAXAAIAAAXIAMAAIAAB8IgMAAIAAAdIgZAAIAADNg");
	this.shape.setTransform(27.125,21.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkODXIAAivIAMAAIAAhSIgMAAIAAisIH6AAIAAAwIAXAAIAAAXIAMAAIAAB8IgMAAIAAAdIgZAAIAADNg");
	this.shape_1.setTransform(27.125,21.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkODXIAAivIAMAAIAAhSIgMAAIAAisIH6AAIAAAwIAXAAIAAAXIAMAAIAAB8IgMAAIAAAdIgZAAIAADNg");
	this.shape_2.setTransform(27.125,21.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkODXIAAivIAMAAIAAhSIgMAAIAAisIH6AAIAAAwIAXAAIAAAXIAMAAIAAB8IgMAAIAAAdIgZAAIAADNg");
	this.shape_3.setTransform(27.125,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,43);


(lib.unt2_f3_apt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkFDVIAAgdIgNAAIAAiWIAPAAIAAgbIAmAAIAAjbIHvAAIAAC3IgMAAIAABIIAMAAIAACqg");
	this.shape.setTransform(27.45,21.325);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkFDVIAAgdIgNAAIAAiWIAPAAIAAgbIAmAAIAAjbIHvAAIAAC3IgMAAIAABIIAMAAIAACqg");
	this.shape_1.setTransform(27.45,21.325);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkFDVIAAgdIgNAAIAAiWIAPAAIAAgbIAmAAIAAjbIHvAAIAAC3IgMAAIAABIIAMAAIAACqg");
	this.shape_2.setTransform(27.45,21.325);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkFDVIAAgdIgNAAIAAiWIAPAAIAAgbIAmAAIAAjbIHvAAIAAC3IgMAAIAABIIAMAAIAACqg");
	this.shape_3.setTransform(27.45,21.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.7);


(lib.unt2_f3_apt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkNDZIAAivIANAAIAAhTIgNAAIAAivIH5AAIAADRIAVAAIAAAVIANAAIAAB/IgNAAIAAAZIgUAAIAAAzg");
	this.shape.setTransform(27,21.725);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkNDZIAAivIANAAIAAhTIgNAAIAAivIH5AAIAADRIAVAAIAAAVIANAAIAAB/IgNAAIAAAZIgUAAIAAAzg");
	this.shape_1.setTransform(27,21.725);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkNDZIAAivIANAAIAAhTIgNAAIAAivIH5AAIAADRIAVAAIAAAVIANAAIAAB/IgNAAIAAAZIgUAAIAAAzg");
	this.shape_2.setTransform(27,21.725);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkNDZIAAivIANAAIAAhTIgNAAIAAivIH5AAIAADRIAVAAIAAAVIANAAIAAB/IgNAAIAAAZIgUAAIAAAzg");
	this.shape_3.setTransform(27,21.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,43.5);


(lib.unt2_f3_apt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjdDSIAAjWIgoAAIAAgbIgNAAIAAiUIANAAIAAgeIIXAAIAAClIgMAAIAABNIAMAAIAACxg");
	this.shape.setTransform(27.45,21.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjdDSIAAjWIgoAAIAAgbIgNAAIAAiUIANAAIAAgeIIXAAIAAClIgMAAIAABNIAMAAIAACxg");
	this.shape_1.setTransform(27.45,21.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjdDSIAAjWIgoAAIAAgbIgNAAIAAiUIANAAIAAgeIIXAAIAAClIgMAAIAABNIAMAAIAACxg");
	this.shape_2.setTransform(27.45,21.025);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjdDSIAAjWIgoAAIAAgbIgNAAIAAiUIANAAIAAgeIIXAAIAAClIgMAAIAABNIAMAAIAACxg");
	this.shape_3.setTransform(27.45,21.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.1);


(lib.unt2_f3_apt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkkEYIAAioIANAAIAAhSIgNAAIAAj7IEEAAIAAguIAnAAIAAgMIDoAAIAAAMIApAAIAAApIANAAIAADjIgNAAIAAApIgqAAIAADug");
	this.shape.setTransform(29.275,28.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkkEYIAAioIANAAIAAhSIgNAAIAAj7IEEAAIAAguIAnAAIAAgMIDoAAIAAAMIApAAIAAApIANAAIAADjIgNAAIAAApIgqAAIAADug");
	this.shape_1.setTransform(29.275,28.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkkEYIAAioIANAAIAAhSIgNAAIAAj7IEEAAIAAguIAnAAIAAgMIDoAAIAAAMIApAAIAAApIANAAIAADjIgNAAIAAApIgqAAIAADug");
	this.shape_2.setTransform(29.275,28.025);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkkEYIAAioIANAAIAAhSIgNAAIAAj7IEEAAIAAguIAnAAIAAgMIDoAAIAAAMIApAAIAAApIANAAIAADjIgNAAIAAApIgqAAIAADug");
	this.shape_3.setTransform(29.275,28.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.6,56.1);


(lib.unt2_f2_apt30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDSIAAixIAMAAIAAhNIgMAAIAAilIIXAAIAAAeIAMAAIAACUIgMAAIAAAbIgoAAIAADWg");
	this.shape.setTransform(27.425,21.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDSIAAixIAMAAIAAhNIgMAAIAAilIIXAAIAAAeIAMAAIAACUIgMAAIAAAbIgoAAIAADWg");
	this.shape_1.setTransform(27.425,21.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDSIAAixIAMAAIAAhNIgMAAIAAilIIXAAIAAAeIAMAAIAACUIgMAAIAAAbIgoAAIAADWg");
	this.shape_2.setTransform(27.425,21.025);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDSIAAixIAMAAIAAhNIgMAAIAAilIIXAAIAAAeIAMAAIAACUIgMAAIAAAbIgoAAIAADWg");
	this.shape_3.setTransform(27.425,21.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.1);


(lib.unt2_f2_apt29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjtEYIAAjvIgqAAIAAgoIgNAAIAAjjIANAAIAAgpIApAAIAAgMIDoAAIAAAMIAnAAIAAAuIEEAAIAAD7IgNAAIAABSIANAAIAACog");
	this.shape.setTransform(29.275,28.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjtEYIAAjvIgqAAIAAgoIgNAAIAAjjIANAAIAAgpIApAAIAAgMIDoAAIAAAMIAnAAIAAAuIEEAAIAAD7IgNAAIAABSIANAAIAACog");
	this.shape_1.setTransform(29.275,28.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjtEYIAAjvIgqAAIAAgoIgNAAIAAjjIANAAIAAgpIApAAIAAgMIDoAAIAAAMIAnAAIAAAuIEEAAIAAD7IgNAAIAABSIANAAIAACog");
	this.shape_2.setTransform(29.275,28.025);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjtEYIAAjvIgqAAIAAgoIgNAAIAAjjIANAAIAAgpIApAAIAAgMIDoAAIAAAMIAnAAIAAAuIEEAAIAAD7IgNAAIAABSIANAAIAACog");
	this.shape_3.setTransform(29.275,28.025);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.6,56.1);


(lib.unt2_f2_apt28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDVIAAiqIAMAAIAAhIIgMAAIAAi3IHvAAIAADbIAnAAIAAAbIANAAIAACWIgMAAIAAAdg");
	this.shape.setTransform(27.425,21.325);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDVIAAiqIAMAAIAAhIIgMAAIAAi3IHvAAIAADbIAnAAIAAAbIANAAIAACWIgMAAIAAAdg");
	this.shape_1.setTransform(27.425,21.325);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDVIAAiqIAMAAIAAhIIgMAAIAAi3IHvAAIAADbIAnAAIAAAbIANAAIAACWIgMAAIAAAdg");
	this.shape_2.setTransform(27.425,21.325);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDVIAAiqIAMAAIAAhIIgMAAIAAi3IHvAAIAADbIAnAAIAAAbIANAAIAACWIgMAAIAAAdg");
	this.shape_3.setTransform(27.425,21.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.7);


(lib.unt2_f2_apt27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjsDZIAAgzIgUAAIAAgZIgNAAIAAh/IANAAIAAgVIAVAAIAAjRIH5AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape.setTransform(27,21.725);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjsDZIAAgzIgUAAIAAgZIgNAAIAAh/IANAAIAAgVIAVAAIAAjRIH5AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_1.setTransform(27,21.725);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjsDZIAAgzIgUAAIAAgZIgNAAIAAh/IANAAIAAgVIAVAAIAAjRIH5AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_2.setTransform(27,21.725);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjsDZIAAgzIgUAAIAAgZIgNAAIAAh/IANAAIAAgVIAVAAIAAjRIH5AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_3.setTransform(27,21.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,43.5);


(lib.unt2_f2_apt26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDWIAAi4IAMAAIAAhNIgMAAIAAimIIXAAIAAAYIAMAAIAACYIgMAAIAAAeIgoAAIAADdg");
	this.shape.setTransform(27.425,21.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDWIAAi4IAMAAIAAhNIgMAAIAAimIIXAAIAAAYIAMAAIAACYIgMAAIAAAeIgoAAIAADdg");
	this.shape_1.setTransform(27.425,21.425);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDWIAAi4IAMAAIAAhNIgMAAIAAimIIXAAIAAAYIAMAAIAACYIgMAAIAAAeIgoAAIAADdg");
	this.shape_2.setTransform(27.425,21.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDWIAAi4IAMAAIAAhNIgMAAIAAimIIXAAIAAAYIAMAAIAACYIgMAAIAAAeIgoAAIAADdg");
	this.shape_3.setTransform(27.425,21.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.9);


(lib.unt2_f2_apt25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjpDXIAAjNIgZAAIAAgdIgMAAIAAh8IAMAAIAAgXIAXAAIAAgwIH6AAIAACsIgMAAIAABSIAMAAIAACvg");
	this.shape.setTransform(27.125,21.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjpDXIAAjNIgZAAIAAgdIgMAAIAAh8IAMAAIAAgXIAXAAIAAgwIH6AAIAACsIgMAAIAABSIAMAAIAACvg");
	this.shape_1.setTransform(27.125,21.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjpDXIAAjNIgZAAIAAgdIgMAAIAAh8IAMAAIAAgXIAXAAIAAgwIH6AAIAACsIgMAAIAABSIAMAAIAACvg");
	this.shape_2.setTransform(27.125,21.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjpDXIAAjNIgZAAIAAgdIgMAAIAAh8IAMAAIAAgXIAXAAIAAgwIH6AAIAACsIgMAAIAABSIAMAAIAACvg");
	this.shape_3.setTransform(27.125,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,43);


(lib.unt2_f2_apt24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjdESIAAgbIg4ABIA1g0IAAoiIGsAAIAADPIBKBJIlHFHIgEADIhaBbg");
	this.shape.setTransform(27.75,35.125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjdESIAAgbIg4ABIA1g0IAAoiIGsAAIAADPIBKBJIlHFHIgEADIhaBbg");
	this.shape_1.setTransform(27.75,35.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjdESIAAgbIg4ABIA1g0IAAoiIGsAAIAADPIBKBJIlHFHIgEADIhaBbg");
	this.shape_2.setTransform(27.75,35.125);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjdESIAAgbIg4ABIA1g0IAAoiIGsAAIAADPIBKBJIlHFHIgEADIhaBbg");
	this.shape_3.setTransform(27.75,35.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.5,70.3);


(lib.unt2_f2_apt23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjrDYIAAgwIgXAAIAAgZIgMAAIAAiAIAMAAIAAgWIAZAAIAAjRIH4AAIAACxIgMAAIAABQIAMAAIAACvg");
	this.shape.setTransform(27.125,21.65);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjrDYIAAgwIgXAAIAAgZIgMAAIAAiAIAMAAIAAgWIAZAAIAAjRIH4AAIAACxIgMAAIAABQIAMAAIAACvg");
	this.shape_1.setTransform(27.125,21.65);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjrDYIAAgwIgXAAIAAgZIgMAAIAAiAIAMAAIAAgWIAZAAIAAjRIH4AAIAACxIgMAAIAABQIAMAAIAACvg");
	this.shape_2.setTransform(27.125,21.65);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjrDYIAAgwIgXAAIAAgZIgMAAIAAiAIAMAAIAAgWIAZAAIAAjRIH4AAIAACxIgMAAIAABQIAMAAIAACvg");
	this.shape_3.setTransform(27.125,21.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,43.3);


(lib.unt2_f2_apt22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjqDZIAAjRIgYAAIAAgaIgMAAIAAh7IANAAIAAgYIAVAAIAAgzIH7AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape.setTransform(27.1,21.675);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjqDZIAAjRIgYAAIAAgaIgMAAIAAh7IANAAIAAgYIAVAAIAAgzIH7AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_1.setTransform(27.1,21.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjqDZIAAjRIgYAAIAAgaIgMAAIAAh7IANAAIAAgYIAVAAIAAgzIH7AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_2.setTransform(27.1,21.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjqDZIAAjRIgYAAIAAgaIgMAAIAAh7IANAAIAAgYIAVAAIAAgzIH7AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_3.setTransform(27.1,21.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.2,43.4);


(lib.unt2_f2_apt21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjlEkIAAgNIgnAAIAAgtIgNAAIAAjkIANAAIAAgoIAnAAIAAkBIECAAIAAANIBUAAIAAgNICpAAIAAIMIjuAAIAAAuIgqAAIAAANg");
	this.shape.setTransform(28.2,29.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjlEkIAAgNIgnAAIAAgtIgNAAIAAjkIANAAIAAgoIAnAAIAAkBIECAAIAAANIBUAAIAAgNICpAAIAAIMIjuAAIAAAuIgqAAIAAANg");
	this.shape_1.setTransform(28.2,29.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjlEkIAAgNIgnAAIAAgtIgNAAIAAjkIANAAIAAgoIAnAAIAAkBIECAAIAAANIBUAAIAAgNICpAAIAAIMIjuAAIAAAuIgqAAIAAANg");
	this.shape_2.setTransform(28.2,29.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjlEkIAAgNIgnAAIAAgtIgNAAIAAjkIANAAIAAgoIAnAAIAAkBIECAAIAAANIBUAAIAAgNICpAAIAAIMIjuAAIAAAuIgqAAIAAANg");
	this.shape_3.setTransform(28.2,29.15);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.4,58.3);


(lib.unt2_f2_apt20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjxDdIgnAAIhHhGIBbhbIAAAAIFKlLIBGBHIDUAAIAAGtIomAAIgrAqg");
	this.shape.setTransform(35.175,27.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjxDdIgnAAIhHhGIBbhbIAAAAIFKlLIBGBHIDUAAIAAGtIomAAIgrAqg");
	this.shape_1.setTransform(35.175,27.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjxDdIgnAAIhHhGIBbhbIAAAAIFKlLIBGBHIDUAAIAAGtIomAAIgrAqg");
	this.shape_2.setTransform(35.175,27.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjxDdIgnAAIhHhGIBbhbIAAAAIFKlLIBGBHIDUAAIAAGtIomAAIgrAqg");
	this.shape_3.setTransform(35.175,27.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.4,54.3);


(lib.unt2_f2_apt19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhPEvIAAgeIgtAAIAAgjIi9AAIAAocICmAAIAAANIBRAAIAAgNIF8AAIAAGtIjCAAIAACSIgmAAIAAAeg");
	this.shape.setTransform(31.35,30.275);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhPEvIAAgeIgtAAIAAgjIi9AAIAAocICmAAIAAANIBRAAIAAgNIF8AAIAAGtIjCAAIAACSIgmAAIAAAeg");
	this.shape_1.setTransform(31.35,30.275);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhPEvIAAgeIgtAAIAAgjIi9AAIAAocICmAAIAAANIBRAAIAAgNIF8AAIAAGtIjCAAIAACSIgmAAIAAAeg");
	this.shape_2.setTransform(31.35,30.275);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhPEvIAAgeIgtAAIAAgjIi9AAIAAocICmAAIAAANIBRAAIAAgNIF8AAIAAGtIjCAAIAACSIgmAAIAAAeg");
	this.shape_3.setTransform(31.35,30.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,60.6);


(lib.unt2_f2_apt18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjQEbIAAoXIAVAAIAAgeICgAAIAAAeIARAAIAAAoIDbAAIAAHvg");
	this.shape.setTransform(20.925,28.275);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjQEbIAAoXIAVAAIAAgeICgAAIAAAeIARAAIAAAoIDbAAIAAHvg");
	this.shape_1.setTransform(20.925,28.275);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjQEbIAAoXIAVAAIAAgeICgAAIAAAeIARAAIAAAoIDbAAIAAHvg");
	this.shape_2.setTransform(20.925,28.275);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjQEbIAAoXIAVAAIAAgeICgAAIAAAeIARAAIAAAoIDbAAIAAHvg");
	this.shape_3.setTransform(20.925,28.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.9,56.6);


(lib.unt2_f2_apt17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhLEZIAAgeIgbAAIAAgQIjYAAIAAn3ICqAAIAAgMIBhAAIAAAMIFyAAIAAH3IjRAAIAAAQIggAAIAAAeg");
	this.shape.setTransform(31.875,28.125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhLEZIAAgeIgbAAIAAgQIjYAAIAAn3ICqAAIAAgMIBhAAIAAAMIFyAAIAAH3IjRAAIAAAQIggAAIAAAeg");
	this.shape_1.setTransform(31.875,28.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhLEZIAAgeIgbAAIAAgQIjYAAIAAn3ICqAAIAAgMIBhAAIAAAMIFyAAIAAH3IjRAAIAAAQIggAAIAAAeg");
	this.shape_2.setTransform(31.875,28.125);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhLEZIAAgeIgbAAIAAgQIjYAAIAAn3ICqAAIAAgMIBhAAIAAAMIFyAAIAAH3IjRAAIAAAQIggAAIAAAeg");
	this.shape_3.setTransform(31.875,28.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.8,56.3);


(lib.unt2_f2_apt16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ak8EVIAAoKIDvAAIAAgfICbAAIAAAfIDvAAIAAIKg");
	this.shape.setTransform(31.725,27.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ak8EVIAAoKIDvAAIAAgfICbAAIAAAfIDvAAIAAIKg");
	this.shape_1.setTransform(31.725,27.725);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ak8EVIAAoKIDvAAIAAgfICbAAIAAAfIDvAAIAAIKg");
	this.shape_2.setTransform(31.725,27.725);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ak8EVIAAoKIDvAAIAAgfICbAAIAAAfIDvAAIAAIKg");
	this.shape_3.setTransform(31.725,27.725);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,55.5);


(lib.unt2_f2_apt15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ak8EvIAApdIJ4AAIAAJdg");
	this.shape.setTransform(31.65,30.275);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ak8EvIAApdIJ4AAIAAJdg");
	this.shape_1.setTransform(31.65,30.275);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ak8EvIAApdIJ4AAIAAJdg");
	this.shape_2.setTransform(31.65,30.275);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ak8EvIAApdIJ4AAIAAJdg");
	this.shape_3.setTransform(31.65,30.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.3,60.6);


(lib.unt2_f2_apt14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjQEbIAAnvIDbAAIAAgoIASAAIAAgeICfAAIAAAeIAVAAIAAIXg");
	this.shape.setTransform(20.925,28.275);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjQEbIAAnvIDbAAIAAgoIASAAIAAgeICfAAIAAAeIAVAAIAAIXg");
	this.shape_1.setTransform(20.925,28.275);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjQEbIAAnvIDbAAIAAgoIASAAIAAgeICfAAIAAAeIAVAAIAAIXg");
	this.shape_2.setTransform(20.925,28.275);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjQEbIAAnvIDbAAIAAgoIASAAIAAgeICfAAIAAAeIAVAAIAAIXg");
	this.shape_3.setTransform(20.925,28.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.9,56.6);


(lib.unt2_f2_apt13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhNEZIAAgfIggABIAAgQIjRAAIAAn3IFyAAIAAgMIBhAAIAAAMICqAAIAAH3IjYAAIAAAPIgbAAIAAAfg");
	this.shape.setTransform(31.875,28.125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhNEZIAAgfIggABIAAgQIjRAAIAAn3IFyAAIAAgMIBhAAIAAAMICqAAIAAH3IjYAAIAAAPIgbAAIAAAfg");
	this.shape_1.setTransform(31.875,28.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhNEZIAAgfIggABIAAgQIjRAAIAAn3IFyAAIAAgMIBhAAIAAAMICqAAIAAH3IjYAAIAAAPIgbAAIAAAfg");
	this.shape_2.setTransform(31.875,28.125);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhNEZIAAgfIggABIAAgQIjRAAIAAn3IFyAAIAAgMIBhAAIAAAMICqAAIAAH3IjYAAIAAAPIgbAAIAAAfg");
	this.shape_3.setTransform(31.875,28.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.8,56.3);


(lib.unt2_f2_apt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ADVD5IAAABIolAAIAAmtIDTAAIBGhGIGIGBQgYAYAKAhQAFARAJALIgdAdg");
	this.shape.setTransform(33.725,25.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ADVD5IAAABIolAAIAAmtIDTAAIBGhGIGIGBQgYAYAKAhQAFARAJALIgdAdg");
	this.shape_1.setTransform(33.725,25.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ADVD5IAAABIolAAIAAmtIDTAAIBGhGIGIGBQgYAYAKAhQAFARAJALIgdAdg");
	this.shape_2.setTransform(33.725,25.025);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ADVD5IAAABIolAAIAAmtIDTAAIBGhGIGIGBQgYAYAKAhQAFARAJALIgdAdg");
	this.shape_3.setTransform(33.725,25.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.5,50.1);


(lib.unt2_f2_apt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhQEvIAAgeIgoAAIAAiSIjBAAIAAmtIF7AAIAAANIBRAAIAAgNICnAAIAAIcIi9AAIAAAjIgtAAIAAAeg");
	this.shape.setTransform(31.35,30.275);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhQEvIAAgeIgoAAIAAiSIjBAAIAAmtIF7AAIAAANIBRAAIAAgNICnAAIAAIcIi9AAIAAAjIgtAAIAAAeg");
	this.shape_1.setTransform(31.35,30.275);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhQEvIAAgeIgoAAIAAiSIjBAAIAAmtIF7AAIAAANIBRAAIAAgNICnAAIAAIcIi9AAIAAAjIgtAAIAAAeg");
	this.shape_2.setTransform(31.35,30.275);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhQEvIAAgeIgoAAIAAiSIjBAAIAAmtIF7AAIAAANIBRAAIAAgNICnAAIAAIcIi9AAIAAAjIgtAAIAAAeg");
	this.shape_3.setTransform(31.35,30.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,60.6);


(lib.unt2_f2_apt10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ADHE/QgigKgXAYImJmBIBKhKIAAjPIGtAAIAAKBIgaAZQgLgJgQgFg");
	this.shape.setTransform(25.15,33.35);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ADHE/QgigKgXAYImJmBIBKhKIAAjPIGtAAIAAKBIgaAZQgLgJgQgFg");
	this.shape_1.setTransform(25.15,33.35);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ADHE/QgigKgXAYImJmBIBKhKIAAjPIGtAAIAAKBIgaAZQgLgJgQgFg");
	this.shape_2.setTransform(25.15,33.35);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ADHE/QgigKgXAYImJmBIBKhKIAAjPIGtAAIAAKBIgaAZQgLgJgQgFg");
	this.shape_3.setTransform(25.15,33.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.3,66.7);


(lib.unt2_f2_apt9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AgBEkIAAgNIgqAAIAAguIjuAAIAAoMICoAAIAAANIBVAAIAAgNIEBAAIAAEBIApAAIAAAoIAMAAIAADkIgMAAIAAAtIgpAAIAAANg");
	this.shape.setTransform(28.2,29.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AgBEkIAAgNIgqAAIAAguIjuAAIAAoMICoAAIAAANIBVAAIAAgNIEBAAIAAEBIApAAIAAAoIAMAAIAADkIgMAAIAAAtIgpAAIAAANg");
	this.shape_1.setTransform(28.2,29.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AgBEkIAAgNIgqAAIAAguIjuAAIAAoMICoAAIAAANIBVAAIAAgNIEBAAIAAEBIApAAIAAAoIAMAAIAADkIgMAAIAAAtIgpAAIAAANg");
	this.shape_2.setTransform(28.2,29.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AgBEkIAAgNIgqAAIAAguIjuAAIAAoMICoAAIAAANIBVAAIAAgNIEBAAIAAEBIApAAIAAAoIAMAAIAADkIgMAAIAAAtIgpAAIAAANg");
	this.shape_3.setTransform(28.2,29.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.4,58.3);


(lib.unt2_f2_apt8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkODZIAAiwIANAAIAAhTIgNAAIAAiuIH7AAIAAAyIAVAAIAAAZIANAAIAAB6IgMAAIAAAaIgXAAIAADSg");
	this.shape.setTransform(27.1,21.675);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkODZIAAiwIANAAIAAhTIgNAAIAAiuIH7AAIAAAyIAVAAIAAAZIANAAIAAB6IgMAAIAAAaIgXAAIAADSg");
	this.shape_1.setTransform(27.1,21.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkODZIAAiwIANAAIAAhTIgNAAIAAiuIH7AAIAAAyIAVAAIAAAZIANAAIAAB6IgMAAIAAAaIgXAAIAADSg");
	this.shape_2.setTransform(27.1,21.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkODZIAAiwIANAAIAAhTIgNAAIAAiuIH7AAIAAAyIAVAAIAAAZIANAAIAAB6IgMAAIAAAaIgXAAIAADSg");
	this.shape_3.setTransform(27.1,21.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.2,43.4);


(lib.unt2_f2_apt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkODZIAAiwIAMAAIAAhQIgMAAIAAixIH4AAIAADSIAZAAIAAAVIAMAAIAACAIgMAAIAAAZIgXAAIAAAxg");
	this.shape.setTransform(27.125,21.675);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkODZIAAiwIAMAAIAAhQIgMAAIAAixIH4AAIAADSIAZAAIAAAVIAMAAIAACAIgMAAIAAAZIgXAAIAAAxg");
	this.shape_1.setTransform(27.125,21.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkODZIAAiwIAMAAIAAhQIgMAAIAAixIH4AAIAADSIAZAAIAAAVIAMAAIAACAIgMAAIAAAZIgXAAIAAAxg");
	this.shape_2.setTransform(27.125,21.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkODZIAAiwIAMAAIAAhQIgMAAIAAixIH4AAIAADSIAZAAIAAAVIAMAAIAACAIgMAAIAAAZIgXAAIAAAxg");
	this.shape_3.setTransform(27.125,21.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,43.4);


(lib.unt2_f2_apt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjdDWIAAjdIgoAAIAAgeIgNAAIAAiYIANAAIAAgYIIXAAIAACmIgMAAIAABNIAMAAIAAC4g");
	this.shape.setTransform(27.45,21.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjdDWIAAjdIgoAAIAAgeIgNAAIAAiYIANAAIAAgYIIXAAIAACmIgMAAIAABNIAMAAIAAC4g");
	this.shape_1.setTransform(27.45,21.425);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjdDWIAAjdIgoAAIAAgeIgNAAIAAiYIANAAIAAgYIIXAAIAACmIgMAAIAABNIAMAAIAAC4g");
	this.shape_2.setTransform(27.45,21.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjdDWIAAjdIgoAAIAAgeIgNAAIAAiYIANAAIAAgYIIXAAIAACmIgMAAIAABNIAMAAIAAC4g");
	this.shape_3.setTransform(27.45,21.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.9);


(lib.unt2_f2_apt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkODXIAAivIAMAAIAAhSIgMAAIAAisIH6AAIAAAwIAXAAIAAAXIAMAAIAAB8IgMAAIAAAdIgZAAIAADNg");
	this.shape.setTransform(27.125,21.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkODXIAAivIAMAAIAAhSIgMAAIAAisIH6AAIAAAwIAXAAIAAAXIAMAAIAAB8IgMAAIAAAdIgZAAIAADNg");
	this.shape_1.setTransform(27.125,21.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkODXIAAivIAMAAIAAhSIgMAAIAAisIH6AAIAAAwIAXAAIAAAXIAMAAIAAB8IgMAAIAAAdIgZAAIAADNg");
	this.shape_2.setTransform(27.125,21.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkODXIAAivIAMAAIAAhSIgMAAIAAisIH6AAIAAAwIAXAAIAAAXIAMAAIAAB8IgMAAIAAAdIgZAAIAADNg");
	this.shape_3.setTransform(27.125,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,43);


(lib.unt2_f2_apt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkFDVIAAgdIgNAAIAAiWIAPAAIAAgbIAmAAIAAjbIHvAAIAAC3IgMAAIAABIIAMAAIAACqg");
	this.shape.setTransform(27.45,21.325);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkFDVIAAgdIgNAAIAAiWIAPAAIAAgbIAmAAIAAjbIHvAAIAAC3IgMAAIAABIIAMAAIAACqg");
	this.shape_1.setTransform(27.45,21.325);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkFDVIAAgdIgNAAIAAiWIAPAAIAAgbIAmAAIAAjbIHvAAIAAC3IgMAAIAABIIAMAAIAACqg");
	this.shape_2.setTransform(27.45,21.325);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkFDVIAAgdIgNAAIAAiWIAPAAIAAgbIAmAAIAAjbIHvAAIAAC3IgMAAIAABIIAMAAIAACqg");
	this.shape_3.setTransform(27.45,21.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.7);


(lib.unt2_f2_apt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkNDZIAAivIANAAIAAhTIgNAAIAAivIH5AAIAADRIAVAAIAAAVIANAAIAAB/IgNAAIAAAZIgUAAIAAAzg");
	this.shape.setTransform(27,21.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,43.5);


(lib.unt2_f2_apt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjdDSIAAjWIgoAAIAAgbIgNAAIAAiUIANAAIAAgeIIXAAIAAClIgMAAIAABNIAMAAIAACxg");
	this.shape.setTransform(27.45,21.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjdDSIAAjWIgoAAIAAgbIgNAAIAAiUIANAAIAAgeIIXAAIAAClIgMAAIAABNIAMAAIAACxg");
	this.shape_1.setTransform(27.45,21.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjdDSIAAjWIgoAAIAAgbIgNAAIAAiUIANAAIAAgeIIXAAIAAClIgMAAIAABNIAMAAIAACxg");
	this.shape_2.setTransform(27.45,21.025);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjdDSIAAjWIgoAAIAAgbIgNAAIAAiUIANAAIAAgeIIXAAIAAClIgMAAIAABNIAMAAIAACxg");
	this.shape_3.setTransform(27.45,21.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.1);


(lib.unt2_f2_apt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkkEYIAAioIANAAIAAhSIgNAAIAAj7IEEAAIAAguIAnAAIAAgMIDoAAIAAAMIApAAIAAApIANAAIAADjIgNAAIAAApIgqAAIAADug");
	this.shape.setTransform(29.275,28.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkkEYIAAioIANAAIAAhSIgNAAIAAj7IEEAAIAAguIAnAAIAAgMIDoAAIAAAMIApAAIAAApIANAAIAADjIgNAAIAAApIgqAAIAADug");
	this.shape_1.setTransform(29.275,28.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkkEYIAAioIANAAIAAhSIgNAAIAAj7IEEAAIAAguIAnAAIAAgMIDoAAIAAAMIApAAIAAApIANAAIAADjIgNAAIAAApIgqAAIAADug");
	this.shape_2.setTransform(29.275,28.025);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkkEYIAAioIANAAIAAhSIgNAAIAAj7IEEAAIAAguIAnAAIAAgMIDoAAIAAAMIApAAIAAApIANAAIAADjIgNAAIAAApIgqAAIAADug");
	this.shape_3.setTransform(29.275,28.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.6,56.1);


(lib.unt2_f1_apt30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDSIAAixIAMAAIAAhNIgMAAIAAilIIXAAIAAAeIAMAAIAACUIgMAAIAAAbIgoAAIAADWg");
	this.shape.setTransform(27.425,21.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDSIAAixIAMAAIAAhNIgMAAIAAilIIXAAIAAAeIAMAAIAACUIgMAAIAAAbIgoAAIAADWg");
	this.shape_1.setTransform(27.425,21.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDSIAAixIAMAAIAAhNIgMAAIAAilIIXAAIAAAeIAMAAIAACUIgMAAIAAAbIgoAAIAADWg");
	this.shape_2.setTransform(27.425,21.025);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDSIAAixIAMAAIAAhNIgMAAIAAilIIXAAIAAAeIAMAAIAACUIgMAAIAAAbIgoAAIAADWg");
	this.shape_3.setTransform(27.425,21.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.1);


(lib.unt2_f1_apt29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjtEYIAAjvIgqAAIAAgoIgNAAIAAjjIANAAIAAgpIApAAIAAgMIDoAAIAAAMIAnAAIAAAuIEEAAIAAD7IgNAAIAABSIANAAIAACog");
	this.shape.setTransform(29.275,28.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjtEYIAAjvIgqAAIAAgoIgNAAIAAjjIANAAIAAgpIApAAIAAgMIDoAAIAAAMIAnAAIAAAuIEEAAIAAD7IgNAAIAABSIANAAIAACog");
	this.shape_1.setTransform(29.275,28.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjtEYIAAjvIgqAAIAAgoIgNAAIAAjjIANAAIAAgpIApAAIAAgMIDoAAIAAAMIAnAAIAAAuIEEAAIAAD7IgNAAIAABSIANAAIAACog");
	this.shape_2.setTransform(29.275,28.025);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjtEYIAAjvIgqAAIAAgoIgNAAIAAjjIANAAIAAgpIApAAIAAgMIDoAAIAAAMIAnAAIAAAuIEEAAIAAD7IgNAAIAABSIANAAIAACog");
	this.shape_3.setTransform(29.275,28.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.6,56.1);


(lib.unt2_f1_apt28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDVIAAiqIAMAAIAAhIIgMAAIAAi3IHvAAIAADbIAnAAIAAAbIANAAIAACWIgMAAIAAAdg");
	this.shape.setTransform(27.425,21.325);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDVIAAiqIAMAAIAAhIIgMAAIAAi3IHvAAIAADbIAnAAIAAAbIANAAIAACWIgMAAIAAAdg");
	this.shape_1.setTransform(27.425,21.325);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDVIAAiqIAMAAIAAhIIgMAAIAAi3IHvAAIAADbIAnAAIAAAbIANAAIAACWIgMAAIAAAdg");
	this.shape_2.setTransform(27.425,21.325);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDVIAAiqIAMAAIAAhIIgMAAIAAi3IHvAAIAADbIAnAAIAAAbIANAAIAACWIgMAAIAAAdg");
	this.shape_3.setTransform(27.425,21.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.7);


(lib.unt2_f1_apt27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjsDZIAAgzIgUAAIAAgZIgNAAIAAh/IANAAIAAgVIAVAAIAAjRIH5AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape.setTransform(27,21.725);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjsDZIAAgzIgUAAIAAgZIgNAAIAAh/IANAAIAAgVIAVAAIAAjRIH5AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_1.setTransform(27,21.725);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjsDZIAAgzIgUAAIAAgZIgNAAIAAh/IANAAIAAgVIAVAAIAAjRIH5AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_2.setTransform(27,21.725);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjsDZIAAgzIgUAAIAAgZIgNAAIAAh/IANAAIAAgVIAVAAIAAjRIH5AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_3.setTransform(27,21.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,43.5);


(lib.unt2_f1_apt26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkRDWIAAi4IAMAAIAAhNIgMAAIAAimIIXAAIAAAYIAMAAIAACYIgMAAIAAAeIgoAAIAADdg");
	this.shape.setTransform(27.425,21.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkRDWIAAi4IAMAAIAAhNIgMAAIAAimIIXAAIAAAYIAMAAIAACYIgMAAIAAAeIgoAAIAADdg");
	this.shape_1.setTransform(27.425,21.425);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkRDWIAAi4IAMAAIAAhNIgMAAIAAimIIXAAIAAAYIAMAAIAACYIgMAAIAAAeIgoAAIAADdg");
	this.shape_2.setTransform(27.425,21.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkRDWIAAi4IAMAAIAAhNIgMAAIAAimIIXAAIAAAYIAMAAIAACYIgMAAIAAAeIgoAAIAADdg");
	this.shape_3.setTransform(27.425,21.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.9);


(lib.unt2_f1_apt25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjpDXIAAjNIgZAAIAAgdIgMAAIAAh8IAMAAIAAgXIAXAAIAAgwIH6AAIAACsIgMAAIAABSIAMAAIAACvg");
	this.shape.setTransform(27.125,21.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjpDXIAAjNIgZAAIAAgdIgMAAIAAh8IAMAAIAAgXIAXAAIAAgwIH6AAIAACsIgMAAIAABSIAMAAIAACvg");
	this.shape_1.setTransform(27.125,21.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjpDXIAAjNIgZAAIAAgdIgMAAIAAh8IAMAAIAAgXIAXAAIAAgwIH6AAIAACsIgMAAIAABSIAMAAIAACvg");
	this.shape_2.setTransform(27.125,21.5);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjpDXIAAjNIgZAAIAAgdIgMAAIAAh8IAMAAIAAgXIAXAAIAAgwIH6AAIAACsIgMAAIAABSIAMAAIAACvg");
	this.shape_3.setTransform(27.125,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,43);


(lib.unt2_f1_apt24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjdESIAAgbIg4ABIA1g0IAAoiIGsAAIAADPIBKBJIlHFHIgEADIhaBbg");
	this.shape.setTransform(27.75,35.125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjdESIAAgbIg4ABIA1g0IAAoiIGsAAIAADPIBKBJIlHFHIgEADIhaBbg");
	this.shape_1.setTransform(27.75,35.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjdESIAAgbIg4ABIA1g0IAAoiIGsAAIAADPIBKBJIlHFHIgEADIhaBbg");
	this.shape_2.setTransform(27.75,35.125);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjdESIAAgbIg4ABIA1g0IAAoiIGsAAIAADPIBKBJIlHFHIgEADIhaBbg");
	this.shape_3.setTransform(27.75,35.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.5,70.3);


(lib.unt2_f1_apt23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjrDYIAAgwIgXAAIAAgZIgMAAIAAiAIAMAAIAAgWIAZAAIAAjRIH4AAIAACxIgMAAIAABQIAMAAIAACvg");
	this.shape.setTransform(27.125,21.65);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjrDYIAAgwIgXAAIAAgZIgMAAIAAiAIAMAAIAAgWIAZAAIAAjRIH4AAIAACxIgMAAIAABQIAMAAIAACvg");
	this.shape_1.setTransform(27.125,21.65);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjrDYIAAgwIgXAAIAAgZIgMAAIAAiAIAMAAIAAgWIAZAAIAAjRIH4AAIAACxIgMAAIAABQIAMAAIAACvg");
	this.shape_2.setTransform(27.125,21.65);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjrDYIAAgwIgXAAIAAgZIgMAAIAAiAIAMAAIAAgWIAZAAIAAjRIH4AAIAACxIgMAAIAABQIAMAAIAACvg");
	this.shape_3.setTransform(27.125,21.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,43.3);


(lib.unt2_f1_apt22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjqDZIAAjRIgYAAIAAgaIgMAAIAAh7IANAAIAAgYIAVAAIAAgzIH7AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape.setTransform(27.1,21.675);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjqDZIAAjRIgYAAIAAgaIgMAAIAAh7IANAAIAAgYIAVAAIAAgzIH7AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_1.setTransform(27.1,21.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjqDZIAAjRIgYAAIAAgaIgMAAIAAh7IANAAIAAgYIAVAAIAAgzIH7AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_2.setTransform(27.1,21.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjqDZIAAjRIgYAAIAAgaIgMAAIAAh7IANAAIAAgYIAVAAIAAgzIH7AAIAACvIgNAAIAABTIANAAIAACvg");
	this.shape_3.setTransform(27.1,21.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.2,43.4);


(lib.unt2_f1_apt21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjlEkIAAgNIgnAAIAAgtIgNAAIAAjkIANAAIAAgoIAnAAIAAkBIECAAIAAANIBUAAIAAgNICpAAIAAIMIjuAAIAAAuIgqAAIAAANg");
	this.shape.setTransform(28.2,29.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjlEkIAAgNIgnAAIAAgtIgNAAIAAjkIANAAIAAgoIAnAAIAAkBIECAAIAAANIBUAAIAAgNICpAAIAAIMIjuAAIAAAuIgqAAIAAANg");
	this.shape_1.setTransform(28.2,29.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjlEkIAAgNIgnAAIAAgtIgNAAIAAjkIANAAIAAgoIAnAAIAAkBIECAAIAAANIBUAAIAAgNICpAAIAAIMIjuAAIAAAuIgqAAIAAANg");
	this.shape_2.setTransform(28.2,29.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjlEkIAAgNIgnAAIAAgtIgNAAIAAjkIANAAIAAgoIAnAAIAAkBIECAAIAAANIBUAAIAAgNICpAAIAAIMIjuAAIAAAuIgqAAIAAANg");
	this.shape_3.setTransform(28.2,29.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.4,58.3);


(lib.unt2_f1_apt20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjxDdIgnAAIhHhGIBbhbIAAAAIFKlLIBGBHIDUAAIAAGtIomAAIgrAqg");
	this.shape.setTransform(35.175,27.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjxDdIgnAAIhHhGIBbhbIAAAAIFKlLIBGBHIDUAAIAAGtIomAAIgrAqg");
	this.shape_1.setTransform(35.175,27.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjxDdIgnAAIhHhGIBbhbIAAAAIFKlLIBGBHIDUAAIAAGtIomAAIgrAqg");
	this.shape_2.setTransform(35.175,27.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjxDdIgnAAIhHhGIBbhbIAAAAIFKlLIBGBHIDUAAIAAGtIomAAIgrAqg");
	this.shape_3.setTransform(35.175,27.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.4,54.3);


(lib.unt2_f1_apt19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhPEvIAAgeIgtAAIAAgjIi9AAIAAocICmAAIAAANIBRAAIAAgNIF8AAIAAGtIjCAAIAACSIgmAAIAAAeg");
	this.shape.setTransform(31.35,30.275);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhPEvIAAgeIgtAAIAAgjIi9AAIAAocICmAAIAAANIBRAAIAAgNIF8AAIAAGtIjCAAIAACSIgmAAIAAAeg");
	this.shape_1.setTransform(31.35,30.275);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhPEvIAAgeIgtAAIAAgjIi9AAIAAocICmAAIAAANIBRAAIAAgNIF8AAIAAGtIjCAAIAACSIgmAAIAAAeg");
	this.shape_2.setTransform(31.35,30.275);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhPEvIAAgeIgtAAIAAgjIi9AAIAAocICmAAIAAANIBRAAIAAgNIF8AAIAAGtIjCAAIAACSIgmAAIAAAeg");
	this.shape_3.setTransform(31.35,30.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,60.6);


(lib.unt2_f1_apt18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjQEbIAAoXIAVAAIAAgeICgAAIAAAeIARAAIAAAoIDbAAIAAHvg");
	this.shape.setTransform(20.925,28.275);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjQEbIAAoXIAVAAIAAgeICgAAIAAAeIARAAIAAAoIDbAAIAAHvg");
	this.shape_1.setTransform(20.925,28.275);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjQEbIAAoXIAVAAIAAgeICgAAIAAAeIARAAIAAAoIDbAAIAAHvg");
	this.shape_2.setTransform(20.925,28.275);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjQEbIAAoXIAVAAIAAgeICgAAIAAAeIARAAIAAAoIDbAAIAAHvg");
	this.shape_3.setTransform(20.925,28.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.9,56.6);


(lib.unt2_f1_apt17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhLEZIAAgeIgbAAIAAgQIjYAAIAAn3ICqAAIAAgMIBhAAIAAAMIFyAAIAAH3IjRAAIAAAQIggAAIAAAeg");
	this.shape.setTransform(31.875,28.125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhLEZIAAgeIgbAAIAAgQIjYAAIAAn3ICqAAIAAgMIBhAAIAAAMIFyAAIAAH3IjRAAIAAAQIggAAIAAAeg");
	this.shape_1.setTransform(31.875,28.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhLEZIAAgeIgbAAIAAgQIjYAAIAAn3ICqAAIAAgMIBhAAIAAAMIFyAAIAAH3IjRAAIAAAQIggAAIAAAeg");
	this.shape_2.setTransform(31.875,28.125);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhLEZIAAgeIgbAAIAAgQIjYAAIAAn3ICqAAIAAgMIBhAAIAAAMIFyAAIAAH3IjRAAIAAAQIggAAIAAAeg");
	this.shape_3.setTransform(31.875,28.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.8,56.3);


(lib.unt2_f1_apt16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ak8EVIAAoKIDvAAIAAgfICbAAIAAAfIDvAAIAAIKg");
	this.shape.setTransform(31.725,27.725);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ak8EVIAAoKIDvAAIAAgfICbAAIAAAfIDvAAIAAIKg");
	this.shape_1.setTransform(31.725,27.725);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ak8EVIAAoKIDvAAIAAgfICbAAIAAAfIDvAAIAAIKg");
	this.shape_2.setTransform(31.725,27.725);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ak8EVIAAoKIDvAAIAAgfICbAAIAAAfIDvAAIAAIKg");
	this.shape_3.setTransform(31.725,27.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,55.5);


(lib.unt2_f1_apt15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ak8EvIAApdIJ4AAIAAJdg");
	this.shape.setTransform(31.65,30.275);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ak8EvIAApdIJ4AAIAAJdg");
	this.shape_1.setTransform(31.65,30.275);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ak8EvIAApdIJ4AAIAAJdg");
	this.shape_2.setTransform(31.65,30.275);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ak8EvIAApdIJ4AAIAAJdg");
	this.shape_3.setTransform(31.65,30.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.3,60.6);


(lib.unt2_f1_apt14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjQEbIAAnvIDbAAIAAgoIASAAIAAgeICfAAIAAAeIAVAAIAAIXg");
	this.shape.setTransform(20.925,28.275);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjQEbIAAnvIDbAAIAAgoIASAAIAAgeICfAAIAAAeIAVAAIAAIXg");
	this.shape_1.setTransform(20.925,28.275);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjQEbIAAnvIDbAAIAAgoIASAAIAAgeICfAAIAAAeIAVAAIAAIXg");
	this.shape_2.setTransform(20.925,28.275);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjQEbIAAnvIDbAAIAAgoIASAAIAAgeICfAAIAAAeIAVAAIAAIXg");
	this.shape_3.setTransform(20.925,28.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.9,56.6);


(lib.unt2_f1_apt13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhNEZIAAgfIggABIAAgQIjRAAIAAn3IFyAAIAAgMIBhAAIAAAMICqAAIAAH3IjYAAIAAAPIgbAAIAAAfg");
	this.shape.setTransform(31.875,28.125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhNEZIAAgfIggABIAAgQIjRAAIAAn3IFyAAIAAgMIBhAAIAAAMICqAAIAAH3IjYAAIAAAPIgbAAIAAAfg");
	this.shape_1.setTransform(31.875,28.125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhNEZIAAgfIggABIAAgQIjRAAIAAn3IFyAAIAAgMIBhAAIAAAMICqAAIAAH3IjYAAIAAAPIgbAAIAAAfg");
	this.shape_2.setTransform(31.875,28.125);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhNEZIAAgfIggABIAAgQIjRAAIAAn3IFyAAIAAgMIBhAAIAAAMICqAAIAAH3IjYAAIAAAPIgbAAIAAAfg");
	this.shape_3.setTransform(31.875,28.125);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.8,56.3);


(lib.unt2_f1_apt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ADVD5IAAABIolAAIAAmtIDTAAIBGhGIGIGBQgYAYAKAhQAFARAJALIgdAdg");
	this.shape.setTransform(33.725,25.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ADVD5IAAABIolAAIAAmtIDTAAIBGhGIGIGBQgYAYAKAhQAFARAJALIgdAdg");
	this.shape_1.setTransform(33.725,25.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ADVD5IAAABIolAAIAAmtIDTAAIBGhGIGIGBQgYAYAKAhQAFARAJALIgdAdg");
	this.shape_2.setTransform(33.725,25.025);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ADVD5IAAABIolAAIAAmtIDTAAIBGhGIGIGBQgYAYAKAhQAFARAJALIgdAdg");
	this.shape_3.setTransform(33.725,25.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.5,50.1);


(lib.unt2_f1_apt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhQEvIAAgeIgoAAIAAiSIjBAAIAAmtIF7AAIAAANIBRAAIAAgNICnAAIAAIcIi9AAIAAAjIgtAAIAAAeg");
	this.shape.setTransform(31.35,30.275);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhQEvIAAgeIgoAAIAAiSIjBAAIAAmtIF7AAIAAANIBRAAIAAgNICnAAIAAIcIi9AAIAAAjIgtAAIAAAeg");
	this.shape_1.setTransform(31.35,30.275);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhQEvIAAgeIgoAAIAAiSIjBAAIAAmtIF7AAIAAANIBRAAIAAgNICnAAIAAIcIi9AAIAAAjIgtAAIAAAeg");
	this.shape_2.setTransform(31.35,30.275);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhQEvIAAgeIgoAAIAAiSIjBAAIAAmtIF7AAIAAANIBRAAIAAgNICnAAIAAIcIi9AAIAAAjIgtAAIAAAeg");
	this.shape_3.setTransform(31.35,30.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,60.6);


(lib.unt2_f1_apt10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ADHE/QgigKgXAYImJmBIBKhKIAAjPIGtAAIAAKBIgaAZQgLgJgQgFg");
	this.shape.setTransform(25.15,33.35);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ADHE/QgigKgXAYImJmBIBKhKIAAjPIGtAAIAAKBIgaAZQgLgJgQgFg");
	this.shape_1.setTransform(25.15,33.35);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ADHE/QgigKgXAYImJmBIBKhKIAAjPIGtAAIAAKBIgaAZQgLgJgQgFg");
	this.shape_2.setTransform(25.15,33.35);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ADHE/QgigKgXAYImJmBIBKhKIAAjPIGtAAIAAKBIgaAZQgLgJgQgFg");
	this.shape_3.setTransform(25.15,33.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.3,66.7);


(lib.unt2_f1_apt9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AgBEkIAAgNIgqAAIAAguIjuAAIAAoMICoAAIAAANIBVAAIAAgNIEBAAIAAEBIApAAIAAAoIAMAAIAADkIgMAAIAAAtIgpAAIAAANg");
	this.shape.setTransform(28.2,29.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AgBEkIAAgNIgqAAIAAguIjuAAIAAoMICoAAIAAANIBVAAIAAgNIEBAAIAAEBIApAAIAAAoIAMAAIAADkIgMAAIAAAtIgpAAIAAANg");
	this.shape_1.setTransform(28.2,29.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AgBEkIAAgNIgqAAIAAguIjuAAIAAoMICoAAIAAANIBVAAIAAgNIEBAAIAAEBIApAAIAAAoIAMAAIAADkIgMAAIAAAtIgpAAIAAANg");
	this.shape_2.setTransform(28.2,29.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AgBEkIAAgNIgqAAIAAguIjuAAIAAoMICoAAIAAANIBVAAIAAgNIEBAAIAAEBIApAAIAAAoIAMAAIAADkIgMAAIAAAtIgpAAIAAANg");
	this.shape_3.setTransform(28.2,29.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.4,58.3);


(lib.unt2_f1_apt8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkODZIAAiwIANAAIAAhTIgNAAIAAiuIH7AAIAAAyIAVAAIAAAZIANAAIAAB6IgMAAIAAAaIgXAAIAADSg");
	this.shape.setTransform(27.1,21.675);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkODZIAAiwIANAAIAAhTIgNAAIAAiuIH7AAIAAAyIAVAAIAAAZIANAAIAAB6IgMAAIAAAaIgXAAIAADSg");
	this.shape_1.setTransform(27.1,21.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkODZIAAiwIANAAIAAhTIgNAAIAAiuIH7AAIAAAyIAVAAIAAAZIANAAIAAB6IgMAAIAAAaIgXAAIAADSg");
	this.shape_2.setTransform(27.1,21.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkODZIAAiwIANAAIAAhTIgNAAIAAiuIH7AAIAAAyIAVAAIAAAZIANAAIAAB6IgMAAIAAAaIgXAAIAADSg");
	this.shape_3.setTransform(27.1,21.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.2,43.4);


(lib.unt2_f1_apt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkODZIAAiwIAMAAIAAhQIgMAAIAAixIH4AAIAADSIAZAAIAAAVIAMAAIAACAIgMAAIAAAZIgXAAIAAAxg");
	this.shape.setTransform(27.125,21.675);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkODZIAAiwIAMAAIAAhQIgMAAIAAixIH4AAIAADSIAZAAIAAAVIAMAAIAACAIgMAAIAAAZIgXAAIAAAxg");
	this.shape_1.setTransform(27.125,21.675);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkODZIAAiwIAMAAIAAhQIgMAAIAAixIH4AAIAADSIAZAAIAAAVIAMAAIAACAIgMAAIAAAZIgXAAIAAAxg");
	this.shape_2.setTransform(27.125,21.675);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkODZIAAiwIAMAAIAAhQIgMAAIAAixIH4AAIAADSIAZAAIAAAVIAMAAIAACAIgMAAIAAAZIgXAAIAAAxg");
	this.shape_3.setTransform(27.125,21.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,43.4);


(lib.unt2_f1_apt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjdDWIAAjdIgoAAIAAgeIgNAAIAAiYIANAAIAAgYIIXAAIAACmIgMAAIAABNIAMAAIAAC4g");
	this.shape.setTransform(27.45,21.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjdDWIAAjdIgoAAIAAgeIgNAAIAAiYIANAAIAAgYIIXAAIAACmIgMAAIAABNIAMAAIAAC4g");
	this.shape_1.setTransform(27.45,21.425);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjdDWIAAjdIgoAAIAAgeIgNAAIAAiYIANAAIAAgYIIXAAIAACmIgMAAIAABNIAMAAIAAC4g");
	this.shape_2.setTransform(27.45,21.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjdDWIAAjdIgoAAIAAgeIgNAAIAAiYIANAAIAAgYIIXAAIAACmIgMAAIAABNIAMAAIAAC4g");
	this.shape_3.setTransform(27.45,21.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.9);


(lib.unt2_f1_apt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkODXIAAivIAMAAIAAhSIgMAAIAAisIH6AAIAAAwIAXAAIAAAXIAMAAIAAB8IgMAAIAAAdIgZAAIAADNg");
	this.shape.setTransform(27.125,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.3,43);


(lib.unt2_f1_apt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkFDVIAAgdIgNAAIAAiWIAPAAIAAgbIAmAAIAAjbIHvAAIAAC3IgMAAIAABIIAMAAIAACqg");
	this.shape.setTransform(27.45,21.325);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkFDVIAAgdIgNAAIAAiWIAPAAIAAgbIAmAAIAAjbIHvAAIAAC3IgMAAIAABIIAMAAIAACqg");
	this.shape_1.setTransform(27.45,21.325);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkFDVIAAgdIgNAAIAAiWIAPAAIAAgbIAmAAIAAjbIHvAAIAAC3IgMAAIAABIIAMAAIAACqg");
	this.shape_2.setTransform(27.45,21.325);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkFDVIAAgdIgNAAIAAiWIAPAAIAAgbIAmAAIAAjbIHvAAIAAC3IgMAAIAABIIAMAAIAACqg");
	this.shape_3.setTransform(27.45,21.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.7);


(lib.unt2_f1_apt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkNDZIAAivIANAAIAAhTIgNAAIAAivIH5AAIAADRIAVAAIAAAVIANAAIAAB/IgNAAIAAAZIgUAAIAAAzg");
	this.shape.setTransform(27,21.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,43.5);


(lib.unt2_f1_apt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjdDSIAAjWIgoAAIAAgbIgNAAIAAiUIANAAIAAgeIIXAAIAAClIgMAAIAABNIAMAAIAACxg");
	this.shape.setTransform(27.45,21.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjdDSIAAjWIgoAAIAAgbIgNAAIAAiUIANAAIAAgeIIXAAIAAClIgMAAIAABNIAMAAIAACxg");
	this.shape_1.setTransform(27.45,21.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjdDSIAAjWIgoAAIAAgbIgNAAIAAiUIANAAIAAgeIIXAAIAAClIgMAAIAABNIAMAAIAACxg");
	this.shape_2.setTransform(27.45,21.025);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjdDSIAAjWIgoAAIAAgbIgNAAIAAiUIANAAIAAgeIIXAAIAAClIgMAAIAABNIAMAAIAACxg");
	this.shape_3.setTransform(27.45,21.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,42.1);


(lib.unt2_f1_apt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkkEYIAAioIANAAIAAhSIgNAAIAAj7IEEAAIAAguIAnAAIAAgMIDoAAIAAAMIApAAIAAApIANAAIAADjIgNAAIAAApIgqAAIAADug");
	this.shape.setTransform(29.275,28.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkkEYIAAioIANAAIAAhSIgNAAIAAj7IEEAAIAAguIAnAAIAAgMIDoAAIAAAMIApAAIAAApIANAAIAADjIgNAAIAAApIgqAAIAADug");
	this.shape_1.setTransform(29.275,28.025);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkkEYIAAioIANAAIAAhSIgNAAIAAj7IEEAAIAAguIAnAAIAAgMIDoAAIAAAMIApAAIAAApIANAAIAADjIgNAAIAAApIgqAAIAADug");
	this.shape_2.setTransform(29.275,28.025);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkkEYIAAioIANAAIAAhSIgNAAIAAj7IEEAAIAAguIAnAAIAAgMIDoAAIAAAMIApAAIAAApIANAAIAADjIgNAAIAAApIgqAAIAADug");
	this.shape_3.setTransform(29.275,28.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.6,56.1);


(lib.unt1_f3_apt18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjhEiIAAj/IgrAAIAAgsIgMAAIAAjhIAMAAIAAgpIArAAIAAgOIDkAAIAAANIAkAAIAAAtIDyAAIAAIJg");
	this.shape.setTransform(28.125,28.975);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjhEiIAAj/IgrAAIAAgsIgMAAIAAjhIAMAAIAAgpIArAAIAAgOIDkAAIAAANIAkAAIAAAtIDyAAIAAIJg");
	this.shape_1.setTransform(28.125,28.975);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjhEiIAAj/IgrAAIAAgsIgMAAIAAjhIAMAAIAAgpIArAAIAAgOIDkAAIAAANIAkAAIAAAtIDyAAIAAIJg");
	this.shape_2.setTransform(28.125,28.975);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjhEiIAAj/IgrAAIAAgsIgMAAIAAjhIAMAAIAAgpIArAAIAAgOIDkAAIAAANIAkAAIAAAtIDyAAIAAIJg");
	this.shape_3.setTransform(28.125,28.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.3,58);


(lib.unt1_f3_apt17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ADHEkIAAgFInfAAIAAoJIDxAAIAAgtIAlAAIAAgMIDkAAIAAANIArAAIAAAqIAMAAIAADgIgMAAIAAAsIgrAAIAAEEg");
	this.shape.setTransform(28.125,29.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ADHEkIAAgFInfAAIAAoJIDxAAIAAgtIAlAAIAAgMIDkAAIAAANIArAAIAAAqIAMAAIAADgIgMAAIAAAsIgrAAIAAEEg");
	this.shape_1.setTransform(28.125,29.225);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ADHEkIAAgFInfAAIAAoJIDxAAIAAgtIAlAAIAAgMIDkAAIAAANIArAAIAAAqIAMAAIAADgIgMAAIAAAsIgrAAIAAEEg");
	this.shape_2.setTransform(28.125,29.225);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ADHEkIAAgFInfAAIAAoJIDxAAIAAgtIAlAAIAAgMIDkAAIAAANIArAAIAAAqIAMAAIAADgIgMAAIAAAsIgrAAIAAEEg");
	this.shape_3.setTransform(28.125,29.225);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.3,58.5);


(lib.unt1_f3_apt16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjjDYIAAgyIgcAAIAAgaIgNAAIAAh6IANAAIAAgdIAZAAIAAjMIAgAAIAAAFIBgAAIAAgFIEhAAIAAAFIBSAAIAACoIgLAAIAABUIALAAIAACug");
	this.shape.setTransform(26.875,21.575);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjjDYIAAgyIgcAAIAAgaIgNAAIAAh6IANAAIAAgdIAZAAIAAjMIAgAAIAAAFIBgAAIAAgFIEhAAIAAAFIBSAAIAACoIgLAAIAABUIALAAIAACug");
	this.shape_1.setTransform(26.875,21.575);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjjDYIAAgyIgcAAIAAgaIgNAAIAAh6IANAAIAAgdIAZAAIAAjMIAgAAIAAAFIBgAAIAAgFIEhAAIAAAFIBSAAIAACoIgLAAIAABUIALAAIAACug");
	this.shape_2.setTransform(26.875,21.575);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjjDYIAAgyIgcAAIAAgaIgNAAIAAh6IANAAIAAgdIAZAAIAAjMIAgAAIAAAFIBgAAIAAgFIEhAAIAAAFIBSAAIAACoIgLAAIAABUIALAAIAACug");
	this.shape_3.setTransform(26.875,21.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.8,43.2);


(lib.unt1_f3_apt15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkGDSIAAiwIgRAAIAAhIIARAAIAAilIGZAAIAAgGIBXAAIAADMIAhAAIAAAcIANAAIAACdIgNAAIAAAeg");
	this.shape.setTransform(27.975,20.95);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkGDSIAAiwIgRAAIAAhIIARAAIAAilIGZAAIAAgGIBXAAIAADMIAhAAIAAAcIANAAIAACdIgNAAIAAAeg");
	this.shape_1.setTransform(27.975,20.95);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkGDSIAAiwIgRAAIAAhIIARAAIAAilIGZAAIAAgGIBXAAIAADMIAhAAIAAAcIANAAIAACdIgNAAIAAAeg");
	this.shape_2.setTransform(27.975,20.95);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkGDSIAAiwIgRAAIAAhIIARAAIAAilIGZAAIAAgGIBXAAIAADMIAhAAIAAAcIANAAIAACdIgNAAIAAAeg");
	this.shape_3.setTransform(27.975,20.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,41.9);


(lib.unt1_f3_apt14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Aj/g1IBBhBIAAjTIGoAAIAAEUIAWAAIAABXIgWAAIAAEQIgVAVQgKgIgNgFQgigMgcAcg");
	this.shape.setTransform(25.6,32.975);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Aj/g1IBBhBIAAjTIGoAAIAAEUIAWAAIAABXIgWAAIAAEQIgVAVQgKgIgNgFQgigMgcAcg");
	this.shape_1.setTransform(25.6,32.975);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Aj/g1IBBhBIAAjTIGoAAIAAEUIAWAAIAABXIgWAAIAAEQIgVAVQgKgIgNgFQgigMgcAcg");
	this.shape_2.setTransform(25.6,32.975);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Aj/g1IBBhBIAAjTIGoAAIAAEUIAWAAIAABXIgWAAIAAEQIgVAVQgKgIgNgFQgigMgcAcg");
	this.shape_3.setTransform(25.6,32.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,66);


(lib.unt1_f3_apt13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkGDTIAAijIgRAAIAAhZIARAAIAAiqIIRAAIAAAfIANAAIAACeIgNAAIAAAbIgkAAIAADOg");
	this.shape.setTransform(27.975,21.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkGDTIAAijIgRAAIAAhZIARAAIAAiqIIRAAIAAAfIANAAIAACeIgNAAIAAAbIgkAAIAADOg");
	this.shape_1.setTransform(27.975,21.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkGDTIAAijIgRAAIAAhZIARAAIAAiqIIRAAIAAAfIANAAIAACeIgNAAIAAAbIgkAAIAADOg");
	this.shape_2.setTransform(27.975,21.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkGDTIAAijIgRAAIAAhZIARAAIAAiqIIRAAIAAAfIANAAIAACeIgNAAIAAAbIgkAAIAADOg");
	this.shape_3.setTransform(27.975,21.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,42.3);


(lib.unt1_f3_apt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ADRDWIAAgFInXAAIAAigIgRAAIAAhWIARAAIAAiwIILAAIAAAhIATAAIAACbIgNAAIAAAhIgjAAIAADOg");
	this.shape.setTransform(27.975,21.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ADRDWIAAgFInXAAIAAigIgRAAIAAhWIARAAIAAiwIILAAIAAAhIATAAIAACbIgNAAIAAAhIgjAAIAADOg");
	this.shape_1.setTransform(27.975,21.425);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ADRDWIAAgFInXAAIAAigIgRAAIAAhWIARAAIAAiwIILAAIAAAhIATAAIAACbIgNAAIAAAhIgjAAIAADOg");
	this.shape_2.setTransform(27.975,21.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ADRDWIAAgFInXAAIAAigIgRAAIAAhWIARAAIAAiwIILAAIAAAhIATAAIAACbIgNAAIAAAhIgjAAIAADOg");
	this.shape_3.setTransform(27.975,21.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,42.9);


(lib.unt1_f3_apt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ABTEtIAAgMIgfAAIAAglIjOAAIAAh2Ii6AAIAAmtIGdAAIAAAMIBhAAIAAgMICJAAIAAgFIAiAAIAAH/IhpAAIAABNIgdAAIAAANg");
	this.shape.setTransform(34.075,30.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ABTEtIAAgMIgfAAIAAglIjOAAIAAh2Ii6AAIAAmtIGdAAIAAAMIBhAAIAAgMICJAAIAAgFIAiAAIAAH/IhpAAIAABNIgdAAIAAANg");
	this.shape_1.setTransform(34.075,30.1);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ABTEtIAAgMIgfAAIAAglIjOAAIAAh2Ii6AAIAAmtIGdAAIAAAMIBhAAIAAgMICJAAIAAgFIAiAAIAAH/IhpAAIAABNIgdAAIAAANg");
	this.shape_2.setTransform(34.075,30.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ABTEtIAAgMIgfAAIAAglIjOAAIAAh2Ii6AAIAAmtIGdAAIAAAMIBhAAIAAgMICJAAIAAgFIAiAAIAAH/IhpAAIAABNIgdAAIAAANg");
	this.shape_3.setTransform(34.075,30.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.2,60.2);


(lib.unt1_f3_apt10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ag1D/IAAgLIkaAAIAAmnIDVAAIBLhLIF/F/IgBABQgdAdAMAhQAFAOAJAKIgcAcIkQAAIAAALg");
	this.shape.setTransform(33.6,25.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ag1D/IAAgLIkaAAIAAmnIDVAAIBLhLIF/F/IgBABQgdAdAMAhQAFAOAJAKIgcAcIkQAAIAAALg");
	this.shape_1.setTransform(33.6,25.475);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ag1D/IAAgLIkaAAIAAmnIDVAAIBLhLIF/F/IgBABQgdAdAMAhQAFAOAJAKIgcAcIkQAAIAAALg");
	this.shape_2.setTransform(33.6,25.475);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ag1D/IAAgLIkaAAIAAmnIDVAAIBLhLIF/F/IgBABQgdAdAMAhQAFAOAJAKIgcAcIkQAAIAAALg");
	this.shape_3.setTransform(33.6,25.475);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.2,51);


(lib.unt1_f3_apt9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ah3EdIAAgcIjGAAIAAoeICjAAIAAANIBfAAIAAgNIF5AAIAAGtIjDAAIAACNg");
	this.shape.setTransform(31.75,28.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ah3EdIAAgcIjGAAIAAoeICjAAIAAANIBfAAIAAgNIF5AAIAAGtIjDAAIAACNg");
	this.shape_1.setTransform(31.75,28.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ah3EdIAAgcIjGAAIAAoeICjAAIAAANIBfAAIAAgNIF5AAIAAGtIjDAAIAACNg");
	this.shape_2.setTransform(31.75,28.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ah3EdIAAgcIjGAAIAAoeICjAAIAAANIBfAAIAAgNIF5AAIAAGtIjDAAIAACNg");
	this.shape_3.setTransform(31.75,28.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,57.1);


(lib.unt1_f3_apt8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAwEMIAAgNIhbAAIAAANIiqAAIAAn0IDMAAIAAgWIAaAAIAAgNIB6AAIAAAMIAaAAIAAAXIAwAAIAAH0g");
	this.shape.setTransform(21.35,26.775);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAwEMIAAgNIhbAAIAAANIiqAAIAAn0IDMAAIAAgWIAaAAIAAgNIB6AAIAAAMIAaAAIAAAXIAwAAIAAH0g");
	this.shape_1.setTransform(21.35,26.775);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAwEMIAAgNIhbAAIAAANIiqAAIAAn0IDMAAIAAgWIAaAAIAAgNIB6AAIAAAMIAaAAIAAAXIAwAAIAAH0g");
	this.shape_2.setTransform(21.35,26.775);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AAwEMIAAgNIhbAAIAAANIiqAAIAAn0IDMAAIAAgWIAaAAIAAgNIB6AAIAAAMIAaAAIAAAXIAwAAIAAH0g");
	this.shape_3.setTransform(21.35,26.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.7,53.6);


(lib.unt1_f3_apt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhzEdIAAiRIjHAAIAAmpIGBAAIAAANIBXAAIAAgNICdAAIAAIeIi5AAIAAAcg");
	this.shape.setTransform(31.5,28.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhzEdIAAiRIjHAAIAAmpIGBAAIAAANIBXAAIAAgNICdAAIAAIeIi5AAIAAAcg");
	this.shape_1.setTransform(31.5,28.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhzEdIAAiRIjHAAIAAmpIGBAAIAAANIBXAAIAAgNICdAAIAAIeIi5AAIAAAcg");
	this.shape_2.setTransform(31.5,28.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhzEdIAAiRIjHAAIAAmpIGBAAIAAANIBXAAIAAgNICdAAIAAIeIi5AAIAAAcg");
	this.shape_3.setTransform(31.5,28.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,57.1);


(lib.unt1_f3_apt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AClEyIAAgMIhcAAIAAAMImFAAIAApGIDQAAIAAgRIAaAAIAAgNICgAAIAAANIAaAAIAAAUIDVAAIAAJDg");
	this.shape.setTransform(31.675,30.65);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AClEyIAAgMIhcAAIAAAMImFAAIAApGIDQAAIAAgRIAaAAIAAgNICgAAIAAANIAaAAIAAAUIDVAAIAAJDg");
	this.shape_1.setTransform(31.675,30.65);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AClEyIAAgMIhcAAIAAAMImFAAIAApGIDQAAIAAgRIAaAAIAAgNICgAAIAAANIAaAAIAAAUIDVAAIAAJDg");
	this.shape_2.setTransform(31.675,30.65);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AClEyIAAgMIhcAAIAAAMImFAAIAApGIDQAAIAAgRIAaAAIAAgNICgAAIAAANIAaAAIAAAUIDVAAIAAJDg");
	this.shape_3.setTransform(31.675,30.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.4,61.3);


(lib.unt1_f3_apt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ah9EdIAAgaIi+AAIAAogICjAAIAAANIBZAAIAAgNIF7AAIAAGpIjEAAIAACRg");
	this.shape.setTransform(31.625,28.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ah9EdIAAgaIi+AAIAAogICjAAIAAANIBZAAIAAgNIF7AAIAAGpIjEAAIAACRg");
	this.shape_1.setTransform(31.625,28.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ah9EdIAAgaIi+AAIAAogICjAAIAAANIBZAAIAAgNIF7AAIAAGpIjEAAIAACRg");
	this.shape_2.setTransform(31.625,28.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ah9EdIAAgaIi+AAIAAogICjAAIAAANIBZAAIAAgNIF7AAIAAGpIjEAAIAACRg");
	this.shape_3.setTransform(31.625,28.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.3,57.1);


(lib.unt1_f3_apt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhHEyIAAgMIhcAAIAAAMIiTAAIAAh0IgFAAIAAkhIAFAAIAAhuIgFAAIAAhCIDWAAIAAgSIAWAAIAAgNICeAAIAAANIAcAAIAAARIDRAAIAAJGg");
	this.shape.setTransform(31.625,30.65);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhHEyIAAgMIhcAAIAAAMIiTAAIAAh0IgFAAIAAkhIAFAAIAAhuIgFAAIAAhCIDWAAIAAgSIAWAAIAAgNICeAAIAAANIAcAAIAAARIDRAAIAAJGg");
	this.shape_1.setTransform(31.625,30.65);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhHEyIAAgMIhcAAIAAAMIiTAAIAAh0IgFAAIAAkhIAFAAIAAhuIgFAAIAAhCIDWAAIAAgSIAWAAIAAgNICeAAIAAANIAcAAIAAARIDRAAIAAJGg");
	this.shape_2.setTransform(31.625,30.65);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhHEyIAAgMIhcAAIAAAMIiTAAIAAh0IgFAAIAAkhIAFAAIAAhuIgFAAIAAhCIDWAAIAAgSIAWAAIAAgNICeAAIAAANIAcAAIAAARIDRAAIAAJGg");
	this.shape_3.setTransform(31.625,30.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.3,61.3);


(lib.unt1_f3_apt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ah1EdIAAiPIjEAAIAAgcIAGAAIAAmPIFzAAIAAAMIBcAAIAAgMICeAAIAAIgIi7AAIAAAag");
	this.shape.setTransform(31.35,28.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ah1EdIAAiPIjEAAIAAgcIAGAAIAAmPIFzAAIAAAMIBcAAIAAgMICeAAIAAIgIi7AAIAAAag");
	this.shape_1.setTransform(31.35,28.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ah1EdIAAiPIjEAAIAAgcIAGAAIAAmPIFzAAIAAAMIBcAAIAAgMICeAAIAAIgIi7AAIAAAag");
	this.shape_2.setTransform(31.35,28.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ah1EdIAAiPIjEAAIAAgcIAGAAIAAmPIFzAAIAAAMIBcAAIAAgMICeAAIAAIgIi7AAIAAAag");
	this.shape_3.setTransform(31.35,28.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,57.1);


(lib.unt1_f3_apt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AnAEgIAAmwIHBAAIAAiCIAeAAIAAgNIC3AAIAAANIAfAAIAAASIDMAAIAAAXIgFAAIAAEEIAFAAIAACMIgFAAIAAB0IjKAAIAAgNIhbAAIAAANIntAAIAAAFg");
	this.shape.setTransform(44.925,28.775);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AnAEgIAAmwIHBAAIAAiCIAeAAIAAgNIC3AAIAAANIAfAAIAAASIDMAAIAAAXIgFAAIAAEEIAFAAIAACMIgFAAIAAB0IjKAAIAAgNIhbAAIAAANIntAAIAAAFg");
	this.shape_1.setTransform(44.925,28.775);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AnAEgIAAmwIHBAAIAAiCIAeAAIAAgNIC3AAIAAANIAfAAIAAASIDMAAIAAAXIgFAAIAAEEIAFAAIAACMIgFAAIAAB0IjKAAIAAgNIhbAAIAAANIntAAIAAAFg");
	this.shape_2.setTransform(44.925,28.775);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AnAEgIAAmwIHBAAIAAiCIAeAAIAAgNIC3AAIAAANIAfAAIAAASIDMAAIAAAXIgFAAIAAEEIAFAAIAACMIgFAAIAAB0IjKAAIAAgNIhbAAIAAANIntAAIAAAFg");
	this.shape_3.setTransform(44.925,28.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.9,57.6);


(lib.unt1_f3_apt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAfEgIAAgNIgeAAIAAiCInBAAIAAmwIJcAAIAAANIBRAAIAAgNIDUAAIAAIgIjMAAIAAASIgfAAIAAANg");
	this.shape.setTransform(44.925,28.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAfEgIAAgNIgeAAIAAiCInBAAIAAmwIJcAAIAAANIBRAAIAAgNIDUAAIAAIgIjMAAIAAASIgfAAIAAANg");
	this.shape_1.setTransform(44.925,28.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAfEgIAAgNIgeAAIAAiCInBAAIAAmwIJcAAIAAANIBRAAIAAgNIDUAAIAAIgIjMAAIAAASIgfAAIAAANg");
	this.shape_2.setTransform(44.925,28.8);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AAfEgIAAgNIgeAAIAAiCInBAAIAAmwIJcAAIAAANIBRAAIAAgNIDUAAIAAIgIjMAAIAAASIgfAAIAAANg");
	this.shape_3.setTransform(44.925,28.8);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.9,57.6);


(lib.unt1_f2_apt18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjhEiIAAj/IgrAAIAAgsIgMAAIAAjhIAMAAIAAgpIArAAIAAgOIDkAAIAAANIAkAAIAAAtIDyAAIAAIJg");
	this.shape.setTransform(28.125,28.975);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjhEiIAAj/IgrAAIAAgsIgMAAIAAjhIAMAAIAAgpIArAAIAAgOIDkAAIAAANIAkAAIAAAtIDyAAIAAIJg");
	this.shape_1.setTransform(28.125,28.975);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjhEiIAAj/IgrAAIAAgsIgMAAIAAjhIAMAAIAAgpIArAAIAAgOIDkAAIAAANIAkAAIAAAtIDyAAIAAIJg");
	this.shape_2.setTransform(28.125,28.975);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjhEiIAAj/IgrAAIAAgsIgMAAIAAjhIAMAAIAAgpIArAAIAAgOIDkAAIAAANIAkAAIAAAtIDyAAIAAIJg");
	this.shape_3.setTransform(28.125,28.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.3,58);


(lib.unt1_f2_apt17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ADHEkIAAgFInfAAIAAoJIDxAAIAAgtIAlAAIAAgMIDkAAIAAANIArAAIAAAqIAMAAIAADgIgMAAIAAAsIgrAAIAAEEg");
	this.shape.setTransform(28.125,29.225);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ADHEkIAAgFInfAAIAAoJIDxAAIAAgtIAlAAIAAgMIDkAAIAAANIArAAIAAAqIAMAAIAADgIgMAAIAAAsIgrAAIAAEEg");
	this.shape_1.setTransform(28.125,29.225);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ADHEkIAAgFInfAAIAAoJIDxAAIAAgtIAlAAIAAgMIDkAAIAAANIArAAIAAAqIAMAAIAADgIgMAAIAAAsIgrAAIAAEEg");
	this.shape_2.setTransform(28.125,29.225);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ADHEkIAAgFInfAAIAAoJIDxAAIAAgtIAlAAIAAgMIDkAAIAAANIArAAIAAAqIAMAAIAADgIgMAAIAAAsIgrAAIAAEEg");
	this.shape_3.setTransform(28.125,29.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.3,58.5);


(lib.unt1_f2_apt16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjjDYIAAgyIgcAAIAAgaIgNAAIAAh6IANAAIAAgdIAZAAIAAjMIAgAAIAAAFIBgAAIAAgFIEhAAIAAAFIBSAAIAACoIgLAAIAABUIALAAIAACug");
	this.shape.setTransform(26.875,21.575);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjjDYIAAgyIgcAAIAAgaIgNAAIAAh6IANAAIAAgdIAZAAIAAjMIAgAAIAAAFIBgAAIAAgFIEhAAIAAAFIBSAAIAACoIgLAAIAABUIALAAIAACug");
	this.shape_1.setTransform(26.875,21.575);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjjDYIAAgyIgcAAIAAgaIgNAAIAAh6IANAAIAAgdIAZAAIAAjMIAgAAIAAAFIBgAAIAAgFIEhAAIAAAFIBSAAIAACoIgLAAIAABUIALAAIAACug");
	this.shape_2.setTransform(26.875,21.575);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjjDYIAAgyIgcAAIAAgaIgNAAIAAh6IANAAIAAgdIAZAAIAAjMIAgAAIAAAFIBgAAIAAgFIEhAAIAAAFIBSAAIAACoIgLAAIAABUIALAAIAACug");
	this.shape_3.setTransform(26.875,21.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.8,43.2);


(lib.unt1_f2_apt15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkGDSIAAiwIgRAAIAAhIIARAAIAAilIGZAAIAAgGIBXAAIAADMIAhAAIAAAcIANAAIAACdIgNAAIAAAeg");
	this.shape.setTransform(27.975,20.95);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkGDSIAAiwIgRAAIAAhIIARAAIAAilIGZAAIAAgGIBXAAIAADMIAhAAIAAAcIANAAIAACdIgNAAIAAAeg");
	this.shape_1.setTransform(27.975,20.95);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkGDSIAAiwIgRAAIAAhIIARAAIAAilIGZAAIAAgGIBXAAIAADMIAhAAIAAAcIANAAIAACdIgNAAIAAAeg");
	this.shape_2.setTransform(27.975,20.95);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkGDSIAAiwIgRAAIAAhIIARAAIAAilIGZAAIAAgGIBXAAIAADMIAhAAIAAAcIANAAIAACdIgNAAIAAAeg");
	this.shape_3.setTransform(27.975,20.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,41.9);


(lib.unt1_f2_apt14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Aj/g1IBBhBIAAjTIGoAAIAAEUIAWAAIAABXIgWAAIAAEQIgVAVQgKgIgNgFQgigMgcAcg");
	this.shape.setTransform(25.6,32.975);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Aj/g1IBBhBIAAjTIGoAAIAAEUIAWAAIAABXIgWAAIAAEQIgVAVQgKgIgNgFQgigMgcAcg");
	this.shape_1.setTransform(25.6,32.975);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Aj/g1IBBhBIAAjTIGoAAIAAEUIAWAAIAABXIgWAAIAAEQIgVAVQgKgIgNgFQgigMgcAcg");
	this.shape_2.setTransform(25.6,32.975);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Aj/g1IBBhBIAAjTIGoAAIAAEUIAWAAIAABXIgWAAIAAEQIgVAVQgKgIgNgFQgigMgcAcg");
	this.shape_3.setTransform(25.6,32.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,66);


(lib.unt1_f2_apt13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkGDTIAAijIgRAAIAAhZIARAAIAAiqIIRAAIAAAfIANAAIAACeIgNAAIAAAbIgkAAIAADOg");
	this.shape.setTransform(27.975,21.15);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkGDTIAAijIgRAAIAAhZIARAAIAAiqIIRAAIAAAfIANAAIAACeIgNAAIAAAbIgkAAIAADOg");
	this.shape_1.setTransform(27.975,21.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkGDTIAAijIgRAAIAAhZIARAAIAAiqIIRAAIAAAfIANAAIAACeIgNAAIAAAbIgkAAIAADOg");
	this.shape_2.setTransform(27.975,21.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkGDTIAAijIgRAAIAAhZIARAAIAAiqIIRAAIAAAfIANAAIAACeIgNAAIAAAbIgkAAIAADOg");
	this.shape_3.setTransform(27.975,21.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,42.3);


(lib.unt1_f2_apt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ADRDWIAAgFInXAAIAAigIgRAAIAAhWIARAAIAAiwIILAAIAAAhIATAAIAACbIgNAAIAAAhIgjAAIAADOg");
	this.shape.setTransform(27.975,21.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ADRDWIAAgFInXAAIAAigIgRAAIAAhWIARAAIAAiwIILAAIAAAhIATAAIAACbIgNAAIAAAhIgjAAIAADOg");
	this.shape_1.setTransform(27.975,21.425);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ADRDWIAAgFInXAAIAAigIgRAAIAAhWIARAAIAAiwIILAAIAAAhIATAAIAACbIgNAAIAAAhIgjAAIAADOg");
	this.shape_2.setTransform(27.975,21.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ADRDWIAAgFInXAAIAAigIgRAAIAAhWIARAAIAAiwIILAAIAAAhIATAAIAACbIgNAAIAAAhIgjAAIAADOg");
	this.shape_3.setTransform(27.975,21.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,42.9);


(lib.unt1_f2_apt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ABTEtIAAgMIgfAAIAAglIjOAAIAAh2Ii6AAIAAmtIGdAAIAAAMIBhAAIAAgMICJAAIAAgFIAiAAIAAH/IhpAAIAABNIgdAAIAAANg");
	this.shape.setTransform(34.075,30.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ABTEtIAAgMIgfAAIAAglIjOAAIAAh2Ii6AAIAAmtIGdAAIAAAMIBhAAIAAgMICJAAIAAgFIAiAAIAAH/IhpAAIAABNIgdAAIAAANg");
	this.shape_1.setTransform(34.075,30.1);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ABTEtIAAgMIgfAAIAAglIjOAAIAAh2Ii6AAIAAmtIGdAAIAAAMIBhAAIAAgMICJAAIAAgFIAiAAIAAH/IhpAAIAABNIgdAAIAAANg");
	this.shape_2.setTransform(34.075,30.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ABTEtIAAgMIgfAAIAAglIjOAAIAAh2Ii6AAIAAmtIGdAAIAAAMIBhAAIAAgMICJAAIAAgFIAiAAIAAH/IhpAAIAABNIgdAAIAAANg");
	this.shape_3.setTransform(34.075,30.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.2,60.2);


(lib.unt1_f2_apt10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ag1D/IAAgLIkaAAIAAmnIDVAAIBLhLIF/F/IgBABQgdAdAMAhQAFAOAJAKIgcAcIkQAAIAAALg");
	this.shape.setTransform(33.6,25.475);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ag1D/IAAgLIkaAAIAAmnIDVAAIBLhLIF/F/IgBABQgdAdAMAhQAFAOAJAKIgcAcIkQAAIAAALg");
	this.shape_1.setTransform(33.6,25.475);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ag1D/IAAgLIkaAAIAAmnIDVAAIBLhLIF/F/IgBABQgdAdAMAhQAFAOAJAKIgcAcIkQAAIAAALg");
	this.shape_2.setTransform(33.6,25.475);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ag1D/IAAgLIkaAAIAAmnIDVAAIBLhLIF/F/IgBABQgdAdAMAhQAFAOAJAKIgcAcIkQAAIAAALg");
	this.shape_3.setTransform(33.6,25.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.2,51);


(lib.unt1_f2_apt9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ah3EdIAAgcIjGAAIAAoeICjAAIAAANIBfAAIAAgNIF5AAIAAGtIjDAAIAACNg");
	this.shape.setTransform(31.75,28.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ah3EdIAAgcIjGAAIAAoeICjAAIAAANIBfAAIAAgNIF5AAIAAGtIjDAAIAACNg");
	this.shape_1.setTransform(31.75,28.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ah3EdIAAgcIjGAAIAAoeICjAAIAAANIBfAAIAAgNIF5AAIAAGtIjDAAIAACNg");
	this.shape_2.setTransform(31.75,28.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ah3EdIAAgcIjGAAIAAoeICjAAIAAANIBfAAIAAgNIF5AAIAAGtIjDAAIAACNg");
	this.shape_3.setTransform(31.75,28.55);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,57.1);


(lib.unt1_f2_apt8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAwEMIAAgNIhbAAIAAANIiqAAIAAn0IDMAAIAAgWIAaAAIAAgNIB6AAIAAAMIAaAAIAAAXIAwAAIAAH0g");
	this.shape.setTransform(21.35,26.775);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAwEMIAAgNIhbAAIAAANIiqAAIAAn0IDMAAIAAgWIAaAAIAAgNIB6AAIAAAMIAaAAIAAAXIAwAAIAAH0g");
	this.shape_1.setTransform(21.35,26.775);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAwEMIAAgNIhbAAIAAANIiqAAIAAn0IDMAAIAAgWIAaAAIAAgNIB6AAIAAAMIAaAAIAAAXIAwAAIAAH0g");
	this.shape_2.setTransform(21.35,26.775);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AAwEMIAAgNIhbAAIAAANIiqAAIAAn0IDMAAIAAgWIAaAAIAAgNIB6AAIAAAMIAaAAIAAAXIAwAAIAAH0g");
	this.shape_3.setTransform(21.35,26.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.7,53.6);


(lib.unt1_f2_apt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhzEdIAAiRIjHAAIAAmpIGBAAIAAANIBXAAIAAgNICdAAIAAIeIi5AAIAAAcg");
	this.shape.setTransform(31.5,28.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhzEdIAAiRIjHAAIAAmpIGBAAIAAANIBXAAIAAgNICdAAIAAIeIi5AAIAAAcg");
	this.shape_1.setTransform(31.5,28.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhzEdIAAiRIjHAAIAAmpIGBAAIAAANIBXAAIAAgNICdAAIAAIeIi5AAIAAAcg");
	this.shape_2.setTransform(31.5,28.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhzEdIAAiRIjHAAIAAmpIGBAAIAAANIBXAAIAAgNICdAAIAAIeIi5AAIAAAcg");
	this.shape_3.setTransform(31.5,28.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,57.1);


(lib.unt1_f2_apt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AClEyIAAgMIhcAAIAAAMImFAAIAApGIDQAAIAAgRIAaAAIAAgNICgAAIAAANIAaAAIAAAUIDVAAIAAJDg");
	this.shape.setTransform(31.675,30.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(4));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AClEyIAAgMIhcAAIAAAMImFAAIAApGIDQAAIAAgRIAaAAIAAgNICgAAIAAANIAaAAIAAAUIDVAAIAAJDg");
	this.shape_1.setTransform(31.675,30.65);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AClEyIAAgMIhcAAIAAAMImFAAIAApGIDQAAIAAgRIAaAAIAAgNICgAAIAAANIAaAAIAAAUIDVAAIAAJDg");
	this.shape_2.setTransform(31.675,30.65);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AClEyIAAgMIhcAAIAAAMImFAAIAApGIDQAAIAAgRIAaAAIAAgNICgAAIAAANIAaAAIAAAUIDVAAIAAJDg");
	this.shape_3.setTransform(31.675,30.65);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.4,61.3);


(lib.unt1_f2_apt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ah9EdIAAgaIi+AAIAAogICjAAIAAANIBZAAIAAgNIF7AAIAAGpIjEAAIAACRg");
	this.shape.setTransform(31.625,28.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ah9EdIAAgaIi+AAIAAogICjAAIAAANIBZAAIAAgNIF7AAIAAGpIjEAAIAACRg");
	this.shape_1.setTransform(31.625,28.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ah9EdIAAgaIi+AAIAAogICjAAIAAANIBZAAIAAgNIF7AAIAAGpIjEAAIAACRg");
	this.shape_2.setTransform(31.625,28.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ah9EdIAAgaIi+AAIAAogICjAAIAAANIBZAAIAAgNIF7AAIAAGpIjEAAIAACRg");
	this.shape_3.setTransform(31.625,28.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.3,57.1);


(lib.unt1_f2_apt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhHEyIAAgMIhcAAIAAAMIiTAAIAAh0IgFAAIAAkhIAFAAIAAhuIgFAAIAAhCIDWAAIAAgSIAWAAIAAgNICeAAIAAANIAcAAIAAARIDRAAIAAJGg");
	this.shape.setTransform(31.625,30.65);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhHEyIAAgMIhcAAIAAAMIiTAAIAAh0IgFAAIAAkhIAFAAIAAhuIgFAAIAAhCIDWAAIAAgSIAWAAIAAgNICeAAIAAANIAcAAIAAARIDRAAIAAJGg");
	this.shape_1.setTransform(31.625,30.65);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhHEyIAAgMIhcAAIAAAMIiTAAIAAh0IgFAAIAAkhIAFAAIAAhuIgFAAIAAhCIDWAAIAAgSIAWAAIAAgNICeAAIAAANIAcAAIAAARIDRAAIAAJGg");
	this.shape_2.setTransform(31.625,30.65);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhHEyIAAgMIhcAAIAAAMIiTAAIAAh0IgFAAIAAkhIAFAAIAAhuIgFAAIAAhCIDWAAIAAgSIAWAAIAAgNICeAAIAAANIAcAAIAAARIDRAAIAAJGg");
	this.shape_3.setTransform(31.625,30.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.3,61.3);


(lib.unt1_f2_apt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ah1EdIAAiPIjEAAIAAgcIAGAAIAAmPIFzAAIAAAMIBcAAIAAgMICeAAIAAIgIi7AAIAAAag");
	this.shape.setTransform(31.35,28.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ah1EdIAAiPIjEAAIAAgcIAGAAIAAmPIFzAAIAAAMIBcAAIAAgMICeAAIAAIgIi7AAIAAAag");
	this.shape_1.setTransform(31.35,28.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ah1EdIAAiPIjEAAIAAgcIAGAAIAAmPIFzAAIAAAMIBcAAIAAgMICeAAIAAIgIi7AAIAAAag");
	this.shape_2.setTransform(31.35,28.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ah1EdIAAiPIjEAAIAAgcIAGAAIAAmPIFzAAIAAAMIBcAAIAAgMICeAAIAAIgIi7AAIAAAag");
	this.shape_3.setTransform(31.35,28.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,57.1);


(lib.unt1_f2_apt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AnAEgIAAmwIHBAAIAAiCIAeAAIAAgNIC3AAIAAANIAfAAIAAASIDMAAIAAAXIgFAAIAAEEIAFAAIAACMIgFAAIAAB0IjKAAIAAgNIhbAAIAAANIntAAIAAAFg");
	this.shape.setTransform(44.925,28.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(5));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AnAEgIAAmwIHBAAIAAiCIAeAAIAAgNIC3AAIAAANIAfAAIAAASIDMAAIAAAXIgFAAIAAEEIAFAAIAACMIgFAAIAAB0IjKAAIAAgNIhbAAIAAANIntAAIAAAFg");
	this.shape_1.setTransform(44.925,28.775);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(5).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AnAEgIAAmwIHBAAIAAiCIAeAAIAAgNIC3AAIAAANIAfAAIAAASIDMAAIAAAXIgFAAIAAEEIAFAAIAACMIgFAAIAAB0IjKAAIAAgNIhbAAIAAANIntAAIAAAFg");
	this.shape_2.setTransform(44.925,28.775);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AnAEgIAAmwIHBAAIAAiCIAeAAIAAgNIC3AAIAAANIAfAAIAAASIDMAAIAAAXIgFAAIAAEEIAFAAIAACMIgFAAIAAB0IjKAAIAAgNIhbAAIAAANIntAAIAAAFg");
	this.shape_3.setTransform(44.925,28.775);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.9,57.6);


(lib.unt1_f2_apt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAfEgIAAgNIgeAAIAAiCInBAAIAAmwIJcAAIAAANIBRAAIAAgNIDUAAIAAIgIjMAAIAAASIgfAAIAAANg");
	this.shape.setTransform(44.925,28.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAfEgIAAgNIgeAAIAAiCInBAAIAAmwIJcAAIAAANIBRAAIAAgNIDUAAIAAIgIjMAAIAAASIgfAAIAAANg");
	this.shape_1.setTransform(44.925,28.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAfEgIAAgNIgeAAIAAiCInBAAIAAmwIJcAAIAAANIBRAAIAAgNIDUAAIAAIgIjMAAIAAASIgfAAIAAANg");
	this.shape_2.setTransform(44.925,28.8);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AAfEgIAAgNIgeAAIAAiCInBAAIAAmwIJcAAIAAANIBRAAIAAgNIDUAAIAAIgIjMAAIAAASIgfAAIAAANg");
	this.shape_3.setTransform(44.925,28.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.9,57.6);


(lib.unt1_f1_apt18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjhEiIAAj/IgrAAIAAgsIgMAAIAAjhIAMAAIAAgpIArAAIAAgOIDkAAIAAANIAkAAIAAAtIDyAAIAAIJg");
	this.shape.setTransform(28.125,28.975);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjhEiIAAj/IgrAAIAAgsIgMAAIAAjhIAMAAIAAgpIArAAIAAgOIDkAAIAAANIAkAAIAAAtIDyAAIAAIJg");
	this.shape_1.setTransform(28.125,28.975);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjhEiIAAj/IgrAAIAAgsIgMAAIAAjhIAMAAIAAgpIArAAIAAgOIDkAAIAAANIAkAAIAAAtIDyAAIAAIJg");
	this.shape_2.setTransform(28.125,28.975);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjhEiIAAj/IgrAAIAAgsIgMAAIAAjhIAMAAIAAgpIArAAIAAgOIDkAAIAAANIAkAAIAAAtIDyAAIAAIJg");
	this.shape_3.setTransform(28.125,28.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.3,58);


(lib.unt1_f1_apt17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ADHEkIAAgFInfAAIAAoJIDxAAIAAgtIAlAAIAAgMIDkAAIAAANIArAAIAAAqIAMAAIAADgIgMAAIAAAsIgrAAIAAEEg");
	this.shape.setTransform(28.125,29.225);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ADHEkIAAgFInfAAIAAoJIDxAAIAAgtIAlAAIAAgMIDkAAIAAANIArAAIAAAqIAMAAIAADgIgMAAIAAAsIgrAAIAAEEg");
	this.shape_1.setTransform(28.125,29.225);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ADHEkIAAgFInfAAIAAoJIDxAAIAAgtIAlAAIAAgMIDkAAIAAANIArAAIAAAqIAMAAIAADgIgMAAIAAAsIgrAAIAAEEg");
	this.shape_2.setTransform(28.125,29.225);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ADHEkIAAgFInfAAIAAoJIDxAAIAAgtIAlAAIAAgMIDkAAIAAANIArAAIAAAqIAMAAIAADgIgMAAIAAAsIgrAAIAAEEg");
	this.shape_3.setTransform(28.125,29.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.3,58.5);


(lib.unt1_f1_apt16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AjjDYIAAgyIgcAAIAAgaIgNAAIAAh6IANAAIAAgdIAZAAIAAjMIAgAAIAAAFIBgAAIAAgFIEhAAIAAAFIBSAAIAACoIgLAAIAABUIALAAIAACug");
	this.shape.setTransform(26.875,21.575);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AjjDYIAAgyIgcAAIAAgaIgNAAIAAh6IANAAIAAgdIAZAAIAAjMIAgAAIAAAFIBgAAIAAgFIEhAAIAAAFIBSAAIAACoIgLAAIAABUIALAAIAACug");
	this.shape_1.setTransform(26.875,21.575);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AjjDYIAAgyIgcAAIAAgaIgNAAIAAh6IANAAIAAgdIAZAAIAAjMIAgAAIAAAFIBgAAIAAgFIEhAAIAAAFIBSAAIAACoIgLAAIAABUIALAAIAACug");
	this.shape_2.setTransform(26.875,21.575);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AjjDYIAAgyIgcAAIAAgaIgNAAIAAh6IANAAIAAgdIAZAAIAAjMIAgAAIAAAFIBgAAIAAgFIEhAAIAAAFIBSAAIAACoIgLAAIAABUIALAAIAACug");
	this.shape_3.setTransform(26.875,21.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.8,43.2);


(lib.unt1_f1_apt15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkGDSIAAiwIgRAAIAAhIIARAAIAAilIGZAAIAAgGIBXAAIAADMIAhAAIAAAcIANAAIAACdIgNAAIAAAeg");
	this.shape.setTransform(27.975,20.95);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkGDSIAAiwIgRAAIAAhIIARAAIAAilIGZAAIAAgGIBXAAIAADMIAhAAIAAAcIANAAIAACdIgNAAIAAAeg");
	this.shape_1.setTransform(27.975,20.95);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkGDSIAAiwIgRAAIAAhIIARAAIAAilIGZAAIAAgGIBXAAIAADMIAhAAIAAAcIANAAIAACdIgNAAIAAAeg");
	this.shape_2.setTransform(27.975,20.95);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkGDSIAAiwIgRAAIAAhIIARAAIAAilIGZAAIAAgGIBXAAIAADMIAhAAIAAAcIANAAIAACdIgNAAIAAAeg");
	this.shape_3.setTransform(27.975,20.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,41.9);


(lib.unt1_f1_apt14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Aj/g1IBBhBIAAjTIGoAAIAAEUIAWAAIAABXIgWAAIAAEQIgVAVQgKgIgNgFQgigMgcAcg");
	this.shape.setTransform(25.6,32.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(6));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Aj/g1IBBhBIAAjTIGoAAIAAEUIAWAAIAABXIgWAAIAAEQIgVAVQgKgIgNgFQgigMgcAcg");
	this.shape_1.setTransform(25.6,32.975);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(6).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Aj/g1IBBhBIAAjTIGoAAIAAEUIAWAAIAABXIgWAAIAAEQIgVAVQgKgIgNgFQgigMgcAcg");
	this.shape_2.setTransform(25.6,32.975);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(5).to({_off:false},0).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Aj/g1IBBhBIAAjTIGoAAIAAEUIAWAAIAABXIgWAAIAAEQIgVAVQgKgIgNgFQgigMgcAcg");
	this.shape_3.setTransform(25.6,32.975);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,66);


(lib.unt1_f1_apt13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AkGDTIAAijIgRAAIAAhZIARAAIAAiqIIRAAIAAAfIANAAIAACeIgNAAIAAAbIgkAAIAADOg");
	this.shape.setTransform(27.975,21.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(6));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AkGDTIAAijIgRAAIAAhZIARAAIAAiqIIRAAIAAAfIANAAIAACeIgNAAIAAAbIgkAAIAADOg");
	this.shape_1.setTransform(27.975,21.15);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(6).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AkGDTIAAijIgRAAIAAhZIARAAIAAiqIIRAAIAAAfIANAAIAACeIgNAAIAAAbIgkAAIAADOg");
	this.shape_2.setTransform(27.975,21.15);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(5).to({_off:false},0).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AkGDTIAAijIgRAAIAAhZIARAAIAAiqIIRAAIAAAfIANAAIAACeIgNAAIAAAbIgkAAIAADOg");
	this.shape_3.setTransform(27.975,21.15);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,42.3);


(lib.unt1_f1_apt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ADRDWIAAgFInXAAIAAigIgRAAIAAhWIARAAIAAiwIILAAIAAAhIATAAIAACbIgNAAIAAAhIgjAAIAADOg");
	this.shape.setTransform(27.975,21.425);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ADRDWIAAgFInXAAIAAigIgRAAIAAhWIARAAIAAiwIILAAIAAAhIATAAIAACbIgNAAIAAAhIgjAAIAADOg");
	this.shape_1.setTransform(27.975,21.425);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ADRDWIAAgFInXAAIAAigIgRAAIAAhWIARAAIAAiwIILAAIAAAhIATAAIAACbIgNAAIAAAhIgjAAIAADOg");
	this.shape_2.setTransform(27.975,21.425);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ADRDWIAAgFInXAAIAAigIgRAAIAAhWIARAAIAAiwIILAAIAAAhIATAAIAACbIgNAAIAAAhIgjAAIAADOg");
	this.shape_3.setTransform(27.975,21.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56,42.9);


(lib.unt1_f1_apt11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("ABTEtIAAgMIgfAAIAAglIjOAAIAAh2Ii6AAIAAmtIGdAAIAAAMIBhAAIAAgMICJAAIAAgFIAiAAIAAH/IhpAAIAABNIgdAAIAAANg");
	this.shape.setTransform(34.075,30.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("ABTEtIAAgMIgfAAIAAglIjOAAIAAh2Ii6AAIAAmtIGdAAIAAAMIBhAAIAAgMICJAAIAAgFIAiAAIAAH/IhpAAIAABNIgdAAIAAANg");
	this.shape_1.setTransform(34.075,30.1);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("ABTEtIAAgMIgfAAIAAglIjOAAIAAh2Ii6AAIAAmtIGdAAIAAAMIBhAAIAAgMICJAAIAAgFIAiAAIAAH/IhpAAIAABNIgdAAIAAANg");
	this.shape_2.setTransform(34.075,30.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("ABTEtIAAgMIgfAAIAAglIjOAAIAAh2Ii6AAIAAmtIGdAAIAAAMIBhAAIAAgMICJAAIAAgFIAiAAIAAH/IhpAAIAABNIgdAAIAAANg");
	this.shape_3.setTransform(34.075,30.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.2,60.2);


(lib.unt1_f1_apt10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ag1D/IAAgLIkaAAIAAmnIDVAAIBLhLIF/F/IgBABQgdAdAMAhQAFAOAJAKIgcAcIkQAAIAAALg");
	this.shape.setTransform(33.6,25.475);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ag1D/IAAgLIkaAAIAAmnIDVAAIBLhLIF/F/IgBABQgdAdAMAhQAFAOAJAKIgcAcIkQAAIAAALg");
	this.shape_1.setTransform(33.6,25.475);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ag1D/IAAgLIkaAAIAAmnIDVAAIBLhLIF/F/IgBABQgdAdAMAhQAFAOAJAKIgcAcIkQAAIAAALg");
	this.shape_2.setTransform(33.6,25.475);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ag1D/IAAgLIkaAAIAAmnIDVAAIBLhLIF/F/IgBABQgdAdAMAhQAFAOAJAKIgcAcIkQAAIAAALg");
	this.shape_3.setTransform(33.6,25.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.2,51);


(lib.unt1_f1_apt9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ah3EdIAAgcIjGAAIAAoeICjAAIAAANIBfAAIAAgNIF5AAIAAGtIjDAAIAACNg");
	this.shape.setTransform(31.75,28.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(6));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ah3EdIAAgcIjGAAIAAoeICjAAIAAANIBfAAIAAgNIF5AAIAAGtIjDAAIAACNg");
	this.shape_1.setTransform(31.75,28.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(6).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ah3EdIAAgcIjGAAIAAoeICjAAIAAANIBfAAIAAgNIF5AAIAAGtIjDAAIAACNg");
	this.shape_2.setTransform(31.75,28.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(5).to({_off:false},0).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ah3EdIAAgcIjGAAIAAoeICjAAIAAANIBfAAIAAgNIF5AAIAAGtIjDAAIAACNg");
	this.shape_3.setTransform(31.75,28.55);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.5,57.1);


(lib.unt1_f1_apt8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAwEMIAAgNIhbAAIAAANIiqAAIAAn0IDMAAIAAgWIAaAAIAAgNIB6AAIAAAMIAaAAIAAAXIAwAAIAAH0g");
	this.shape.setTransform(21.35,26.775);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAwEMIAAgNIhbAAIAAANIiqAAIAAn0IDMAAIAAgWIAaAAIAAgNIB6AAIAAAMIAaAAIAAAXIAwAAIAAH0g");
	this.shape_1.setTransform(21.35,26.775);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAwEMIAAgNIhbAAIAAANIiqAAIAAn0IDMAAIAAgWIAaAAIAAgNIB6AAIAAAMIAaAAIAAAXIAwAAIAAH0g");
	this.shape_2.setTransform(21.35,26.775);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AAwEMIAAgNIhbAAIAAANIiqAAIAAn0IDMAAIAAgWIAaAAIAAgNIB6AAIAAAMIAaAAIAAAXIAwAAIAAH0g");
	this.shape_3.setTransform(21.35,26.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.7,53.6);


(lib.unt1_f1_apt7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhzEdIAAiRIjHAAIAAmpIGBAAIAAANIBXAAIAAgNICdAAIAAIeIi5AAIAAAcg");
	this.shape.setTransform(31.5,28.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhzEdIAAiRIjHAAIAAmpIGBAAIAAANIBXAAIAAgNICdAAIAAIeIi5AAIAAAcg");
	this.shape_1.setTransform(31.5,28.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhzEdIAAiRIjHAAIAAmpIGBAAIAAANIBXAAIAAgNICdAAIAAIeIi5AAIAAAcg");
	this.shape_2.setTransform(31.5,28.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhzEdIAAiRIjHAAIAAmpIGBAAIAAANIBXAAIAAgNICdAAIAAIeIi5AAIAAAcg");
	this.shape_3.setTransform(31.5,28.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63,57.1);


(lib.unt1_f1_apt6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AClEyIAAgMIhcAAIAAAMImFAAIAApGIDQAAIAAgRIAaAAIAAgNICgAAIAAANIAaAAIAAAUIDVAAIAAJDg");
	this.shape.setTransform(31.675,30.65);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AClEyIAAgMIhcAAIAAAMImFAAIAApGIDQAAIAAgRIAaAAIAAgNICgAAIAAANIAaAAIAAAUIDVAAIAAJDg");
	this.shape_1.setTransform(31.675,30.65);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AClEyIAAgMIhcAAIAAAMImFAAIAApGIDQAAIAAgRIAaAAIAAgNICgAAIAAANIAaAAIAAAUIDVAAIAAJDg");
	this.shape_2.setTransform(31.675,30.65);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AClEyIAAgMIhcAAIAAAMImFAAIAApGIDQAAIAAgRIAaAAIAAgNICgAAIAAANIAaAAIAAAUIDVAAIAAJDg");
	this.shape_3.setTransform(31.675,30.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.4,61.3);


(lib.unt1_f1_apt5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ah9EdIAAgaIi+AAIAAogICjAAIAAANIBZAAIAAgNIF7AAIAAGpIjEAAIAACRg");
	this.shape.setTransform(31.625,28.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ah9EdIAAgaIi+AAIAAogICjAAIAAANIBZAAIAAgNIF7AAIAAGpIjEAAIAACRg");
	this.shape_1.setTransform(31.625,28.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ah9EdIAAgaIi+AAIAAogICjAAIAAANIBZAAIAAgNIF7AAIAAGpIjEAAIAACRg");
	this.shape_2.setTransform(31.625,28.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ah9EdIAAgaIi+AAIAAogICjAAIAAANIBZAAIAAgNIF7AAIAAGpIjEAAIAACRg");
	this.shape_3.setTransform(31.625,28.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.3,57.1);


(lib.unt1_f1_apt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AhHEyIAAgMIhcAAIAAAMIiTAAIAAh0IgFAAIAAkhIAFAAIAAhuIgFAAIAAhCIDWAAIAAgSIAWAAIAAgNICeAAIAAANIAcAAIAAARIDRAAIAAJGg");
	this.shape.setTransform(31.625,30.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(6));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AhHEyIAAgMIhcAAIAAAMIiTAAIAAh0IgFAAIAAkhIAFAAIAAhuIgFAAIAAhCIDWAAIAAgSIAWAAIAAgNICeAAIAAANIAcAAIAAARIDRAAIAAJGg");
	this.shape_1.setTransform(31.625,30.65);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(6).to({_off:false},0).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AhHEyIAAgMIhcAAIAAAMIiTAAIAAh0IgFAAIAAkhIAFAAIAAhuIgFAAIAAhCIDWAAIAAgSIAWAAIAAgNICeAAIAAANIAcAAIAAARIDRAAIAAJGg");
	this.shape_2.setTransform(31.625,30.65);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(5).to({_off:false},0).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AhHEyIAAgMIhcAAIAAAMIiTAAIAAh0IgFAAIAAkhIAFAAIAAhuIgFAAIAAhCIDWAAIAAgSIAWAAIAAgNICeAAIAAANIAcAAIAAARIDRAAIAAJGg");
	this.shape_3.setTransform(31.625,30.65);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(4).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,63.3,61.3);


(lib.unt1_f1_apt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("Ah1EdIAAiPIjEAAIAAgcIAGAAIAAmPIFzAAIAAAMIBcAAIAAgMICeAAIAAIgIi7AAIAAAag");
	this.shape.setTransform(31.35,28.55);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("Ah1EdIAAiPIjEAAIAAgcIAGAAIAAmPIFzAAIAAAMIBcAAIAAgMICeAAIAAIgIi7AAIAAAag");
	this.shape_1.setTransform(31.35,28.55);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("Ah1EdIAAiPIjEAAIAAgcIAGAAIAAmPIFzAAIAAAMIBcAAIAAgMICeAAIAAIgIi7AAIAAAag");
	this.shape_2.setTransform(31.35,28.55);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("Ah1EdIAAiPIjEAAIAAgcIAGAAIAAmPIFzAAIAAAMIBcAAIAAgMICeAAIAAIgIi7AAIAAAag");
	this.shape_3.setTransform(31.35,28.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,57.1);


(lib.unt1_f1_apt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AnAEgIAAmwIHBAAIAAiCIAeAAIAAgNIC3AAIAAANIAfAAIAAASIDMAAIAAAXIgFAAIAAEEIAFAAIAACMIgFAAIAAB0IjKAAIAAgNIhbAAIAAANIntAAIAAAFg");
	this.shape.setTransform(44.925,28.775);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AnAEgIAAmwIHBAAIAAiCIAeAAIAAgNIC3AAIAAANIAfAAIAAASIDMAAIAAAXIgFAAIAAEEIAFAAIAACMIgFAAIAAB0IjKAAIAAgNIhbAAIAAANIntAAIAAAFg");
	this.shape_1.setTransform(44.925,28.775);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AnAEgIAAmwIHBAAIAAiCIAeAAIAAgNIC3AAIAAANIAfAAIAAASIDMAAIAAAXIgFAAIAAEEIAFAAIAACMIgFAAIAAB0IjKAAIAAgNIhbAAIAAANIntAAIAAAFg");
	this.shape_2.setTransform(44.925,28.775);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AnAEgIAAmwIHBAAIAAiCIAeAAIAAgNIC3AAIAAANIAfAAIAAASIDMAAIAAAXIgFAAIAAEEIAFAAIAACMIgFAAIAAB0IjKAAIAAgNIhbAAIAAANIntAAIAAAFg");
	this.shape_3.setTransform(44.925,28.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.9,57.6);


(lib.unt1_f1_apt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#754666").s().p("AAfEgIAAgNIgeAAIAAiCInBAAIAAmwIJcAAIAAANIBRAAIAAgNIDUAAIAAIgIjMAAIAAASIgfAAIAAANg");
	this.shape.setTransform(44.925,28.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#754666").s().p("AAfEgIAAgNIgeAAIAAiCInBAAIAAmwIJcAAIAAANIBRAAIAAgNIDUAAIAAIgIjMAAIAAASIgfAAIAAANg");
	this.shape_1.setTransform(44.925,28.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AAfEgIAAgNIgeAAIAAiCInBAAIAAmwIJcAAIAAANIBRAAIAAgNIDUAAIAAIgIjMAAIAAASIgfAAIAAANg");
	this.shape_2.setTransform(44.925,28.8);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(192,181,158,0.2)").s().p("AAfEgIAAgNIgeAAIAAiCInBAAIAAmwIJcAAIAAANIBRAAIAAgNIDUAAIAAIgIjMAAIAAASIgfAAIAAANg");
	this.shape_3.setTransform(44.925,28.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89.9,57.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.building1000shadow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,318.5,214.8), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.building2000shadow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,331.2,240.8), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Building3000shadow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294.5,220.4);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.building4000shadow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,217.8,228.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.building5000shadow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,290.9,237.6), null);


(lib.oversymbolgraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Building4000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236.3,236.3);


(lib.overnup3000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.building3000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314,230.4);


(lib.overnup2000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Building2000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350.7,260.3);


(lib.overnup1000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Building1000nds();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,338,234.7);


(lib.garden = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Asset1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.garden, new cjs.Rectangle(0,0,1260.6,833.6), null);


(lib.Backbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#221F20").s().p("AiiAAICihSIAAA/ICjAAIAAAnIijAAIAAA/g");
	this.shape.setTransform(14.6539,14.631,0.4483,0.4483);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhmBoQgrgsgBg8QABg8ArgqQAqgrA8gBQA8ABAsArQArAqAAA8QAAA8grAsQgsArg8AAQg8AAgqgrg");
	this.shape_1.setTransform(14.65,14.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AANAbIgTgbIgIAIIAAATIgIAAIAAg1IAIAAIAAAaIAagaIAJAAIgVAWIAWAfg");
	this.shape_2.setTransform(44.5,15.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAZQgGgEgDgHQgCgHAAgHQAAgIADgGQADgHAHgDQAFgDAGAAQAJAAAGAEQAFAEACAIIgHABQgCgGgEgCQgDgDgGAAQgFAAgEADQgEADgCAFQgCAFAAAFQAAAGACAGQADAFAEACQAEADAEAAQAGAAAEgDQAEgEACgHIAHACQgCAJgGAFQgGAEgJAAQgIAAgFgDg");
	this.shape_3.setTransform(39,15.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARAbIgGgQIgWAAIgGAQIgHAAIAVg1IAGAAIAWA1gAgDgKIgGAPIARAAIgFgOIgDgMIgDALg");
	this.shape_4.setTransform(33.65,15.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAbIAAg1IAUAAQAGAAAEABQAEACACADQACAEAAAEQAAADgCADQgCADgEACQAFABADADQADAEAAAEQAAAEgCAEIgEAFIgGACIgJABgAgMAVIAMAAIAFAAIAEgCIADgDQABgCAAgDQAAgDgCgCQgBgCgDgBIgHgBIgMAAgAgMgDIALAAIAGgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgDgCgCQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgIgBIgKAAg");
	this.shape_5.setTransform(28.625,15.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiiAAICihSIAAA/ICjAAIAAAnIijAAIAAA/g");
	this.shape_6.setTransform(14.6539,14.631,0.4483,0.4483);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,29.3);


(lib._5000upsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.building5000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,302.6,257.1);


(lib._5000overmoviesymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.building5000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,302.6,257.1);


(lib._5000floorpick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.building5000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,302.6,257.1);


(lib._5000downsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.building5000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,302.6,257.1);


(lib._4000upsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Building4000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236.3,236.3);


(lib._4000hitsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Building4000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236.3,236.3);


(lib._4000downsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Building4000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236.3,236.3);


(lib._4000backgroundsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Building4000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236.3,236.3);


(lib._3000upsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.building3000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314,230.4);


(lib._3000hitsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.building3000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314,230.4);


(lib._3000downsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.building3000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314,230.4);


(lib._2000upsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Building2000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350.7,260.3);


(lib._2000hitsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Building2000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350.7,260.3);


(lib._2000downsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Building2000();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350.7,260.3);


(lib._1000upsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Building1000nds();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,338,234.7);


(lib._1000hitsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Building1000nds();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1000hitsymbol, new cjs.Rectangle(0,0,338,234.7), null);


(lib._1000downsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Building1000nds();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._1000downsymbol, new cjs.Rectangle(0,0,338,234.7), null);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.f2apt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.unt5_f1_apt2over();
	this.instance.parent = this;
	this.instance.setTransform(33,29.9,1,1,0,0,0,33,29.9);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.unt5_f1_apt2over();
	this.instance_1.parent = this;
	this.instance_1.setTransform(33,29.9,1,1,0,0,0,33,29.9);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0B59E").s().p("AjEEsIAAgQIgaAAIAAhGICmAAIAABHIgaAAIAAAPgAguDxIAAglIkbAAIAAn3IKTAAIAAGnIiyAAIAAB1g");
	this.shape.setTransform(32.975,29.975);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(192,181,158,0.2)").s().p("AjEEsIAAgQIgaAAIAAhGICmAAIAABHIgaAAIAAAPgAguDxIAAglIkbAAIAAn3IKTAAIAAGnIiyAAIAAB1g");
	this.shape_1.setTransform(32.975,29.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,60);


(lib.Unt5_floor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.unt5_f3_apt20 = new lib.f3apt20copy2();
	this.unt5_f3_apt20.name = "unt5_f3_apt20";
	this.unt5_f3_apt20.parent = this;
	this.unt5_f3_apt20.setTransform(346.65,98.5,1,1,0,0,0,21.3,27.5);
	new cjs.ButtonHelper(this.unt5_f3_apt20, 0, 1, 2, false, new lib.f3apt20copy2(), 3);

	this.unt5_f3_apt19 = new lib.f3apt19copy2();
	this.unt5_f3_apt19.name = "unt5_f3_apt19";
	this.unt5_f3_apt19.parent = this;
	this.unt5_f3_apt19.setTransform(352.4,31.35,1,1,0,0,0,21.2,27.4);
	new cjs.ButtonHelper(this.unt5_f3_apt19, 0, 1, 2, false, new lib.f3apt19copy2(), 3);

	this.unt5_f3_apt18 = new lib.f3apt18copy2();
	this.unt5_f3_apt18.name = "unt5_f3_apt18";
	this.unt5_f3_apt18.parent = this;
	this.unt5_f3_apt18.setTransform(303.65,98.5,1,1,0,0,0,21.8,27.5);
	new cjs.ButtonHelper(this.unt5_f3_apt18, 0, 1, 2, false, new lib.f3apt18copy2(), 3);

	this.unt5_f3_apt17 = new lib.f3apt17copy();
	this.unt5_f3_apt17.name = "unt5_f3_apt17";
	this.unt5_f3_apt17.parent = this;
	this.unt5_f3_apt17.setTransform(299.55,29.4,1,1,0,0,0,31.6,29.4);
	new cjs.ButtonHelper(this.unt5_f3_apt17, 0, 1, 2, false, new lib.f3apt17copy(), 3);

	this.unt5_f3_apt16 = new lib.f3apt16copy2();
	this.unt5_f3_apt16.name = "unt5_f3_apt16";
	this.unt5_f3_apt16.parent = this;
	this.unt5_f3_apt16.setTransform(248.75,95.45,1,1,0,0,0,33,26.1);
	new cjs.ButtonHelper(this.unt5_f3_apt16, 0, 1, 2, false, new lib.f3apt16copy2(), 3);

	this.unt5_f3_apt15 = new lib.f3apt15copy();
	this.unt5_f3_apt15.name = "unt5_f3_apt15";
	this.unt5_f3_apt15.parent = this;
	this.unt5_f3_apt15.setTransform(236.45,29.4,1,1,0,0,0,31.5,29.4);
	new cjs.ButtonHelper(this.unt5_f3_apt15, 0, 1, 2, false, new lib.f3apt15copy(), 3);

	this.unt5_f3_apt14 = new lib.f3apt14copy2();
	this.unt5_f3_apt14.name = "unt5_f3_apt14";
	this.unt5_f3_apt14.parent = this;
	this.unt5_f3_apt14.setTransform(229.15,115.3,1,1,0,0,0,25.9,33.1);
	new cjs.ButtonHelper(this.unt5_f3_apt14, 0, 1, 2, false, new lib.f3apt14copy2(), 3);

	this.unt5_f3_apt13 = new lib.f3apt13copy();
	this.unt5_f3_apt13.name = "unt5_f3_apt13";
	this.unt5_f3_apt13.parent = this;
	this.unt5_f3_apt13.setTransform(163.15,41.35,1,1,0,0,0,29.1,27.9);
	new cjs.ButtonHelper(this.unt5_f3_apt13, 0, 1, 2, false, new lib.f3apt13copy(), 3);

	this.unt5_f3_apt11 = new lib.f3apt11copy2();
	this.unt5_f3_apt11.name = "unt5_f3_apt11";
	this.unt5_f3_apt11.parent = this;
	this.unt5_f3_apt11.setTransform(165.15,90.95,1,1,0,0,0,27.1,21.6);
	new cjs.ButtonHelper(this.unt5_f3_apt11, 0, 1, 2, false, new lib.f3apt11copy2(), 3);

	this.unt5_f3_apt12 = new lib.f3apt12copy2();
	this.unt5_f3_apt12.name = "unt5_f3_apt12";
	this.unt5_f3_apt12.parent = this;
	this.unt5_f3_apt12.setTransform(232.25,170.2,1,1,0,0,0,27.4,21.7);
	new cjs.ButtonHelper(this.unt5_f3_apt12, 0, 1, 2, false, new lib.f3apt12copy2(), 3);

	this.unt5_f3_apt10 = new lib.f3apt10copy2();
	this.unt5_f3_apt10.name = "unt5_f3_apt10";
	this.unt5_f3_apt10.parent = this;
	this.unt5_f3_apt10.setTransform(232.15,213.05,1,1,0,0,0,27.4,21.2);
	new cjs.ButtonHelper(this.unt5_f3_apt10, 0, 1, 2, false, new lib.f3apt10copy2(), 3);

	this.unt5_f3_apt9 = new lib.f3apt9copy();
	this.unt5_f3_apt9.name = "unt5_f3_apt9";
	this.unt5_f3_apt9.parent = this;
	this.unt5_f3_apt9.setTransform(165.05,134.4,1,1,0,0,0,27.1,21.8);
	new cjs.ButtonHelper(this.unt5_f3_apt9, 0, 1, 2, false, new lib.f3apt9copy(), 3);

	this.unt5_f3_apt8 = new lib.f3a8copy2();
	this.unt5_f3_apt8.name = "unt5_f3_apt8";
	this.unt5_f3_apt8.parent = this;
	this.unt5_f3_apt8.setTransform(227.3,276.75,1,1,0,0,0,33.3,29.9);
	new cjs.ButtonHelper(this.unt5_f3_apt8, 0, 1, 2, false, new lib.f3a8copy2(), 3);

	this.unt5_f3_apt7 = new lib.f3apt7copy();
	this.unt5_f3_apt7.name = "unt5_f3_apt7";
	this.unt5_f3_apt7.parent = this;
	this.unt5_f3_apt7.setTransform(167.7,189.7,1,1,0,0,0,25.8,33.5);
	new cjs.ButtonHelper(this.unt5_f3_apt7, 0, 1, 2, false, new lib.f3apt7copy(), 3);

	this.unt5_f3_apt6 = new lib.f3apt6copy2();
	this.unt5_f3_apt6.name = "unt5_f3_apt6";
	this.unt5_f3_apt6.parent = this;
	this.unt5_f3_apt6.setTransform(161.9,276.45,1,1,0,0,0,31.1,29.6);
	new cjs.ButtonHelper(this.unt5_f3_apt6, 0, 1, 2, false, new lib.f3apt6copy2(), 3);

	this.unt5_f3_apt5 = new lib.f3apt5copy2();
	this.unt5_f3_apt5.name = "unt5_f3_apt5";
	this.unt5_f3_apt5.parent = this;
	this.unt5_f3_apt5.setTransform(147.9,209.8,1,1,0,0,0,33.4,25.6);
	new cjs.ButtonHelper(this.unt5_f3_apt5, 0, 1, 2, false, new lib.f3apt5copy2(), 3);

	this.unt5_f3_apt4 = new lib.f3apt4copy();
	this.unt5_f3_apt4.name = "unt5_f3_apt4";
	this.unt5_f3_apt4.parent = this;
	this.unt5_f3_apt4.setTransform(98.35,276.25,1,1,0,0,0,31.4,29.4);
	new cjs.ButtonHelper(this.unt5_f3_apt4, 0, 1, 2, false, new lib.f3apt4copy(), 3);

	this.unt5_f3_apt3 = new lib.f3apt3copy();
	this.unt5_f3_apt3.name = "unt5_f3_apt3";
	this.unt5_f3_apt3.parent = this;
	this.unt5_f3_apt3.setTransform(92.85,207.5,1,1,0,0,0,21.6,26.7);
	new cjs.ButtonHelper(this.unt5_f3_apt3, 0, 1, 2, false, new lib.f3apt3copy(), 3);

	this.unt5_f3_apt2 = new lib.f3apt2copy();
	this.unt5_f3_apt2.name = "unt5_f3_apt2";
	this.unt5_f3_apt2.parent = this;
	this.unt5_f3_apt2.setTransform(33,276.75,1,1,0,0,0,33,29.9);
	new cjs.ButtonHelper(this.unt5_f3_apt2, 0, 1, 2, false, new lib.f3apt2copy(), 3);

	this.unt5_f3_apt1 = new lib.f3apt1copy();
	this.unt5_f3_apt1.name = "unt5_f3_apt1";
	this.unt5_f3_apt1.parent = this;
	this.unt5_f3_apt1.setTransform(49.7,207.4,1,1,0,0,0,21,26.4);
	new cjs.ButtonHelper(this.unt5_f3_apt1, 0, 1, 2, false, new lib.f3apt1copy(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt5_f3_apt1},{t:this.unt5_f3_apt2},{t:this.unt5_f3_apt3},{t:this.unt5_f3_apt4},{t:this.unt5_f3_apt5},{t:this.unt5_f3_apt6},{t:this.unt5_f3_apt7},{t:this.unt5_f3_apt8},{t:this.unt5_f3_apt9},{t:this.unt5_f3_apt10},{t:this.unt5_f3_apt12},{t:this.unt5_f3_apt11},{t:this.unt5_f3_apt13},{t:this.unt5_f3_apt14},{t:this.unt5_f3_apt15},{t:this.unt5_f3_apt16},{t:this.unt5_f3_apt17},{t:this.unt5_f3_apt18},{t:this.unt5_f3_apt19},{t:this.unt5_f3_apt20}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Unt5_floor3, new cjs.Rectangle(0,0,373.5,306.8), null);


(lib.Unt5_Floor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.unt5_f2_apt20 = new lib.f2apt20copy();
	this.unt5_f2_apt20.name = "unt5_f2_apt20";
	this.unt5_f2_apt20.parent = this;
	this.unt5_f2_apt20.setTransform(346.65,98.5,1,1,0,0,0,21.3,27.5);
	new cjs.ButtonHelper(this.unt5_f2_apt20, 0, 1, 2, false, new lib.f2apt20copy(), 3);

	this.unt5_f2_apt19 = new lib.f2apt19copy();
	this.unt5_f2_apt19.name = "unt5_f2_apt19";
	this.unt5_f2_apt19.parent = this;
	this.unt5_f2_apt19.setTransform(352.4,31.35,1,1,0,0,0,21.2,27.4);
	new cjs.ButtonHelper(this.unt5_f2_apt19, 0, 1, 2, false, new lib.f2apt19copy(), 3);

	this.unt5_f2_apt18 = new lib.f2apt18copy();
	this.unt5_f2_apt18.name = "unt5_f2_apt18";
	this.unt5_f2_apt18.parent = this;
	this.unt5_f2_apt18.setTransform(303.65,98.5,1,1,0,0,0,21.8,27.5);
	new cjs.ButtonHelper(this.unt5_f2_apt18, 0, 1, 2, false, new lib.f2apt18copy(), 3);

	this.unt5_f2_apt17 = new lib.f2apt17();
	this.unt5_f2_apt17.name = "unt5_f2_apt17";
	this.unt5_f2_apt17.parent = this;
	this.unt5_f2_apt17.setTransform(299.55,29.4,1,1,0,0,0,31.6,29.4);
	new cjs.ButtonHelper(this.unt5_f2_apt17, 0, 1, 2, false, new lib.f2apt17(), 3);

	this.unt5_f2_apt16 = new lib.f2apt16copy();
	this.unt5_f2_apt16.name = "unt5_f2_apt16";
	this.unt5_f2_apt16.parent = this;
	this.unt5_f2_apt16.setTransform(248.75,95.45,1,1,0,0,0,33,26.1);
	new cjs.ButtonHelper(this.unt5_f2_apt16, 0, 1, 2, false, new lib.f2apt16copy(), 3);

	this.unt5_f2_apt15 = new lib.f2apt15();
	this.unt5_f2_apt15.name = "unt5_f2_apt15";
	this.unt5_f2_apt15.parent = this;
	this.unt5_f2_apt15.setTransform(236.45,29.4,1,1,0,0,0,31.5,29.4);
	new cjs.ButtonHelper(this.unt5_f2_apt15, 0, 1, 2, false, new lib.f2apt15(), 3);

	this.unt5_f2_apt14 = new lib.f2apt14copy();
	this.unt5_f2_apt14.name = "unt5_f2_apt14";
	this.unt5_f2_apt14.parent = this;
	this.unt5_f2_apt14.setTransform(229.15,115.3,1,1,0,0,0,25.9,33.1);
	new cjs.ButtonHelper(this.unt5_f2_apt14, 0, 1, 2, false, new lib.f2apt14copy(), 3);

	this.unt5_f2_apt13 = new lib.f2apt13();
	this.unt5_f2_apt13.name = "unt5_f2_apt13";
	this.unt5_f2_apt13.parent = this;
	this.unt5_f2_apt13.setTransform(163.15,41.35,1,1,0,0,0,29.1,27.9);
	new cjs.ButtonHelper(this.unt5_f2_apt13, 0, 1, 2, false, new lib.f2apt13(), 3);

	this.unt5_f2_apt11 = new lib.f2apt11copy();
	this.unt5_f2_apt11.name = "unt5_f2_apt11";
	this.unt5_f2_apt11.parent = this;
	this.unt5_f2_apt11.setTransform(165.15,90.95,1,1,0,0,0,27.1,21.6);
	new cjs.ButtonHelper(this.unt5_f2_apt11, 0, 1, 2, false, new lib.f2apt11copy(), 3);

	this.unt5_f2_apt12 = new lib.f2apt12copy();
	this.unt5_f2_apt12.name = "unt5_f2_apt12";
	this.unt5_f2_apt12.parent = this;
	this.unt5_f2_apt12.setTransform(232.25,170.2,1,1,0,0,0,27.4,21.7);
	new cjs.ButtonHelper(this.unt5_f2_apt12, 0, 1, 2, false, new lib.f2apt12copy(), 3);

	this.unt5_f2_apt10 = new lib.f2apt10copy();
	this.unt5_f2_apt10.name = "unt5_f2_apt10";
	this.unt5_f2_apt10.parent = this;
	this.unt5_f2_apt10.setTransform(232.15,213.05,1,1,0,0,0,27.4,21.2);
	new cjs.ButtonHelper(this.unt5_f2_apt10, 0, 1, 2, false, new lib.f2apt10copy(), 3);

	this.unt5_f2_apt9 = new lib.f2apt9();
	this.unt5_f2_apt9.name = "unt5_f2_apt9";
	this.unt5_f2_apt9.parent = this;
	this.unt5_f2_apt9.setTransform(165.05,134.4,1,1,0,0,0,27.1,21.8);
	new cjs.ButtonHelper(this.unt5_f2_apt9, 0, 1, 2, false, new lib.f2apt9(), 3);

	this.unt5_f2_apt8 = new lib.f2a8copy();
	this.unt5_f2_apt8.name = "unt5_f2_apt8";
	this.unt5_f2_apt8.parent = this;
	this.unt5_f2_apt8.setTransform(227.3,276.75,1,1,0,0,0,33.3,29.9);
	new cjs.ButtonHelper(this.unt5_f2_apt8, 0, 1, 2, false, new lib.f2a8copy(), 3);

	this.unt5_f2_apt7 = new lib.f2apt7();
	this.unt5_f2_apt7.name = "unt5_f2_apt7";
	this.unt5_f2_apt7.parent = this;
	this.unt5_f2_apt7.setTransform(167.7,189.7,1,1,0,0,0,25.8,33.5);
	new cjs.ButtonHelper(this.unt5_f2_apt7, 0, 1, 2, false, new lib.f2apt7(), 3);

	this.unt5_f2_apt6 = new lib.f2apt6copy();
	this.unt5_f2_apt6.name = "unt5_f2_apt6";
	this.unt5_f2_apt6.parent = this;
	this.unt5_f2_apt6.setTransform(161.9,276.45,1,1,0,0,0,31.1,29.6);
	new cjs.ButtonHelper(this.unt5_f2_apt6, 0, 1, 2, false, new lib.f2apt6copy(), 3);

	this.unt5_f2_apt5 = new lib.f2apt5copy();
	this.unt5_f2_apt5.name = "unt5_f2_apt5";
	this.unt5_f2_apt5.parent = this;
	this.unt5_f2_apt5.setTransform(147.9,209.8,1,1,0,0,0,33.4,25.6);
	new cjs.ButtonHelper(this.unt5_f2_apt5, 0, 1, 2, false, new lib.f2apt5copy(), 3);

	this.unt5_f2_apt4 = new lib.f2apt4();
	this.unt5_f2_apt4.name = "unt5_f2_apt4";
	this.unt5_f2_apt4.parent = this;
	this.unt5_f2_apt4.setTransform(98.35,276.25,1,1,0,0,0,31.4,29.4);
	new cjs.ButtonHelper(this.unt5_f2_apt4, 0, 1, 2, false, new lib.f2apt4(), 3);

	this.unt5_f2_apt3 = new lib.f2apt3();
	this.unt5_f2_apt3.name = "unt5_f2_apt3";
	this.unt5_f2_apt3.parent = this;
	this.unt5_f2_apt3.setTransform(92.85,207.5,1,1,0,0,0,21.6,26.7);
	new cjs.ButtonHelper(this.unt5_f2_apt3, 0, 1, 2, false, new lib.f2apt3(), 3);

	this.unt5_f2_apt2 = new lib.f2apt2();
	this.unt5_f2_apt2.name = "unt5_f2_apt2";
	this.unt5_f2_apt2.parent = this;
	this.unt5_f2_apt2.setTransform(33,276.75,1,1,0,0,0,33,29.9);
	new cjs.ButtonHelper(this.unt5_f2_apt2, 0, 1, 2, false, new lib.f2apt2(), 3);

	this.unt5_f2_apt1 = new lib.f2apt1();
	this.unt5_f2_apt1.name = "unt5_f2_apt1";
	this.unt5_f2_apt1.parent = this;
	this.unt5_f2_apt1.setTransform(49.7,207.4,1,1,0,0,0,21,26.4);
	new cjs.ButtonHelper(this.unt5_f2_apt1, 0, 1, 2, false, new lib.f2apt1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt5_f2_apt1},{t:this.unt5_f2_apt2},{t:this.unt5_f2_apt3},{t:this.unt5_f2_apt4},{t:this.unt5_f2_apt5},{t:this.unt5_f2_apt6},{t:this.unt5_f2_apt7},{t:this.unt5_f2_apt8},{t:this.unt5_f2_apt9},{t:this.unt5_f2_apt10},{t:this.unt5_f2_apt12},{t:this.unt5_f2_apt11},{t:this.unt5_f2_apt13},{t:this.unt5_f2_apt14},{t:this.unt5_f2_apt15},{t:this.unt5_f2_apt16},{t:this.unt5_f2_apt17},{t:this.unt5_f2_apt18},{t:this.unt5_f2_apt19},{t:this.unt5_f2_apt20}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Unt5_Floor2, new cjs.Rectangle(0,0,373.5,306.8), null);


(lib.Unt5_Floor1_apartments = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.unt5_f1_apt1 = new lib.f1apt1();
	this.unt5_f1_apt1.name = "unt5_f1_apt1";
	this.unt5_f1_apt1.parent = this;
	this.unt5_f1_apt1.setTransform(49.7,207.4,1,1,0,0,0,21,26.4);
	new cjs.ButtonHelper(this.unt5_f1_apt1, 0, 1, 2, false, new lib.f1apt1(), 3);

	this.unt5_f1_apt2 = new lib.f1apt2();
	this.unt5_f1_apt2.name = "unt5_f1_apt2";
	this.unt5_f1_apt2.parent = this;
	this.unt5_f1_apt2.setTransform(33,276.75,1,1,0,0,0,33,29.9);
	new cjs.ButtonHelper(this.unt5_f1_apt2, 0, 1, 2, false, new lib.f1apt2(), 3);

	this.unt5_f1_apt3 = new lib.f1apt3();
	this.unt5_f1_apt3.name = "unt5_f1_apt3";
	this.unt5_f1_apt3.parent = this;
	this.unt5_f1_apt3.setTransform(92.85,207.5,1,1,0,0,0,21.6,26.7);
	new cjs.ButtonHelper(this.unt5_f1_apt3, 0, 1, 2, false, new lib.f1apt3(), 3);

	this.unt5_f1_apt4 = new lib.f1apt4();
	this.unt5_f1_apt4.name = "unt5_f1_apt4";
	this.unt5_f1_apt4.parent = this;
	this.unt5_f1_apt4.setTransform(98.35,276.25,1,1,0,0,0,31.4,29.4);
	new cjs.ButtonHelper(this.unt5_f1_apt4, 0, 1, 2, false, new lib.f1apt4(), 3);

	this.unt5_f1_apt5 = new lib.f1apt5();
	this.unt5_f1_apt5.name = "unt5_f1_apt5";
	this.unt5_f1_apt5.parent = this;
	this.unt5_f1_apt5.setTransform(147.9,209.8,1,1,0,0,0,33.4,25.6);
	new cjs.ButtonHelper(this.unt5_f1_apt5, 0, 1, 2, false, new lib.f1apt5(), 3);

	this.unt5_f1_apt6 = new lib.f1apt6();
	this.unt5_f1_apt6.name = "unt5_f1_apt6";
	this.unt5_f1_apt6.parent = this;
	this.unt5_f1_apt6.setTransform(161.9,276.45,1,1,0,0,0,31.1,29.6);
	new cjs.ButtonHelper(this.unt5_f1_apt6, 0, 1, 2, false, new lib.f1apt6(), 3);

	this.unt5_f1_apt7 = new lib.f1apt7();
	this.unt5_f1_apt7.name = "unt5_f1_apt7";
	this.unt5_f1_apt7.parent = this;
	this.unt5_f1_apt7.setTransform(167.7,189.7,1,1,0,0,0,25.8,33.5);
	new cjs.ButtonHelper(this.unt5_f1_apt7, 0, 1, 2, false, new lib.f1apt7(), 3);

	this.unt5_f1_apt8 = new lib.f1a8();
	this.unt5_f1_apt8.name = "unt5_f1_apt8";
	this.unt5_f1_apt8.parent = this;
	this.unt5_f1_apt8.setTransform(227.3,276.75,1,1,0,0,0,33.3,29.9);
	new cjs.ButtonHelper(this.unt5_f1_apt8, 0, 1, 2, false, new lib.f1a8(), 3);

	this.unt5_f1_apt9 = new lib.f1apt9();
	this.unt5_f1_apt9.name = "unt5_f1_apt9";
	this.unt5_f1_apt9.parent = this;
	this.unt5_f1_apt9.setTransform(165.05,134.4,1,1,0,0,0,27.1,21.8);
	new cjs.ButtonHelper(this.unt5_f1_apt9, 0, 1, 2, false, new lib.f1apt9(), 3);

	this.unt5_f1_apt10 = new lib.f1apt10();
	this.unt5_f1_apt10.name = "unt5_f1_apt10";
	this.unt5_f1_apt10.parent = this;
	this.unt5_f1_apt10.setTransform(232.15,213.05,1,1,0,0,0,27.4,21.2);
	new cjs.ButtonHelper(this.unt5_f1_apt10, 0, 1, 2, false, new lib.f1apt10(), 3);

	this.unt5_f1_apt11 = new lib.f1apt11();
	this.unt5_f1_apt11.name = "unt5_f1_apt11";
	this.unt5_f1_apt11.parent = this;
	this.unt5_f1_apt11.setTransform(165.15,90.95,1,1,0,0,0,27.1,21.6);
	new cjs.ButtonHelper(this.unt5_f1_apt11, 0, 1, 2, false, new lib.f1apt11(), 3);

	this.unt5_f1_apt12 = new lib.f1apt12();
	this.unt5_f1_apt12.name = "unt5_f1_apt12";
	this.unt5_f1_apt12.parent = this;
	this.unt5_f1_apt12.setTransform(232.25,170.2,1,1,0,0,0,27.4,21.7);
	new cjs.ButtonHelper(this.unt5_f1_apt12, 0, 1, 2, false, new lib.f1apt12(), 3);

	this.unt5_f1_apt13 = new lib.f1apt13();
	this.unt5_f1_apt13.name = "unt5_f1_apt13";
	this.unt5_f1_apt13.parent = this;
	this.unt5_f1_apt13.setTransform(163.15,41.35,1,1,0,0,0,29.1,27.9);
	new cjs.ButtonHelper(this.unt5_f1_apt13, 0, 1, 2, false, new lib.f1apt13(), 3);

	this.unt5_f1_apt14 = new lib.f1apt14();
	this.unt5_f1_apt14.name = "unt5_f1_apt14";
	this.unt5_f1_apt14.parent = this;
	this.unt5_f1_apt14.setTransform(229.15,115.3,1,1,0,0,0,25.9,33.1);
	new cjs.ButtonHelper(this.unt5_f1_apt14, 0, 1, 2, false, new lib.f1apt14(), 3);

	this.unt5_f1_apt15 = new lib.f1apt15();
	this.unt5_f1_apt15.name = "unt5_f1_apt15";
	this.unt5_f1_apt15.parent = this;
	this.unt5_f1_apt15.setTransform(236.45,29.4,1,1,0,0,0,31.5,29.4);
	new cjs.ButtonHelper(this.unt5_f1_apt15, 0, 1, 2, false, new lib.f1apt15(), 3);

	this.unt5_f1_apt16 = new lib.f1apt16();
	this.unt5_f1_apt16.name = "unt5_f1_apt16";
	this.unt5_f1_apt16.parent = this;
	this.unt5_f1_apt16.setTransform(248.75,95.45,1,1,0,0,0,33,26.1);
	new cjs.ButtonHelper(this.unt5_f1_apt16, 0, 1, 2, false, new lib.f1apt16(), 3);

	this.unt5_f1_apt17 = new lib.f1apt17();
	this.unt5_f1_apt17.name = "unt5_f1_apt17";
	this.unt5_f1_apt17.parent = this;
	this.unt5_f1_apt17.setTransform(299.55,29.4,1,1,0,0,0,31.6,29.4);
	new cjs.ButtonHelper(this.unt5_f1_apt17, 0, 1, 2, false, new lib.f1apt17(), 3);

	this.unt5_f1_apt18 = new lib.f1apt18();
	this.unt5_f1_apt18.name = "unt5_f1_apt18";
	this.unt5_f1_apt18.parent = this;
	this.unt5_f1_apt18.setTransform(303.65,98.5,1,1,0,0,0,21.8,27.5);
	new cjs.ButtonHelper(this.unt5_f1_apt18, 0, 1, 2, false, new lib.f1apt18(), 3);

	this.unt5_f1_apt19 = new lib.f1apt19();
	this.unt5_f1_apt19.name = "unt5_f1_apt19";
	this.unt5_f1_apt19.parent = this;
	this.unt5_f1_apt19.setTransform(352.4,31.35,1,1,0,0,0,21.2,27.4);
	new cjs.ButtonHelper(this.unt5_f1_apt19, 0, 1, 2, false, new lib.f1apt19(), 3);

	this.unt5_f1_apt20 = new lib.f1apt20();
	this.unt5_f1_apt20.name = "unt5_f1_apt20";
	this.unt5_f1_apt20.parent = this;
	this.unt5_f1_apt20.setTransform(346.65,98.5,1,1,0,0,0,21.3,27.5);
	new cjs.ButtonHelper(this.unt5_f1_apt20, 0, 1, 2, false, new lib.f1apt20(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt5_f1_apt20},{t:this.unt5_f1_apt19},{t:this.unt5_f1_apt18},{t:this.unt5_f1_apt17},{t:this.unt5_f1_apt16},{t:this.unt5_f1_apt15},{t:this.unt5_f1_apt14},{t:this.unt5_f1_apt13},{t:this.unt5_f1_apt12},{t:this.unt5_f1_apt11},{t:this.unt5_f1_apt10},{t:this.unt5_f1_apt9},{t:this.unt5_f1_apt8},{t:this.unt5_f1_apt7},{t:this.unt5_f1_apt6},{t:this.unt5_f1_apt5},{t:this.unt5_f1_apt4},{t:this.unt5_f1_apt3},{t:this.unt5_f1_apt2},{t:this.unt5_f1_apt1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Unt5_Floor1_apartments, new cjs.Rectangle(0,0,373.5,306.8), null);


(lib.unt4floor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.unt4_f3_apt1 = new lib.unt4_f3_apt1();
	this.unt4_f3_apt1.name = "unt4_f3_apt1";
	this.unt4_f3_apt1.parent = this;
	this.unt4_f3_apt1.setTransform(244.9,255.6,1,1,0,0,0,27.4,21.3);
	new cjs.ButtonHelper(this.unt4_f3_apt1, 0, 1, 2, false, new lib.unt4_f3_apt1(), 3);

	this.unt4_f3_apt2 = new lib.unt4_f3_apt2();
	this.unt4_f3_apt2.name = "unt4_f3_apt2";
	this.unt4_f3_apt2.parent = this;
	this.unt4_f3_apt2.setTransform(177.35,255.55,1,1,0,0,0,27.3,21.2);
	new cjs.ButtonHelper(this.unt4_f3_apt2, 0, 1, 2, false, new lib.unt4_f3_apt2(), 3);

	this.unt4_f3_apt3 = new lib.unt4_f3_apt3();
	this.unt4_f3_apt3.name = "unt4_f3_apt3";
	this.unt4_f3_apt3.parent = this;
	this.unt4_f3_apt3.setTransform(244.9,213.2,1,1,0,0,0,27.4,21.2);
	new cjs.ButtonHelper(this.unt4_f3_apt3, 0, 1, 2, false, new lib.unt4_f3_apt3(), 3);

	this.unt4_f3_apt4 = new lib.unt4_f3_apt4();
	this.unt4_f3_apt4.name = "unt4_f3_apt4";
	this.unt4_f3_apt4.parent = this;
	this.unt4_f3_apt4.setTransform(177.4,213.2,1,1,0,0,0,27.1,21.2);
	new cjs.ButtonHelper(this.unt4_f3_apt4, 0, 1, 2, false, new lib.unt4_f3_apt4(), 3);

	this.unt4_f3_apt5 = new lib.unt4_f3_apt5();
	this.unt4_f3_apt5.name = "unt4_f3_apt5";
	this.unt4_f3_apt5.parent = this;
	this.unt4_f3_apt5.setTransform(247,160.5,1,1,0,0,0,29.5,31.6);
	new cjs.ButtonHelper(this.unt4_f3_apt5, 0, 1, 2, false, new lib.unt4_f3_apt5(), 3);

	this.unt4_f3_apt6 = new lib.unt4_f3_apt6();
	this.unt4_f3_apt6.name = "unt4_f3_apt6";
	this.unt4_f3_apt6.parent = this;
	this.unt4_f3_apt6.setTransform(177.4,170.8,1,1,0,0,0,27.1,21.3);
	new cjs.ButtonHelper(this.unt4_f3_apt6, 0, 1, 2, false, new lib.unt4_f3_apt6(), 3);

	this.unt4_f3_apt7 = new lib.unt4_f3_apt7();
	this.unt4_f3_apt7.name = "unt4_f3_apt7";
	this.unt4_f3_apt7.parent = this;
	this.unt4_f3_apt7.setTransform(247,97.4,1,1,0,0,0,29.5,31.6);
	new cjs.ButtonHelper(this.unt4_f3_apt7, 0, 1, 2, false, new lib.unt4_f3_apt7(), 3);

	this.unt4_f3_apt8 = new lib.unt4_f3_apt8();
	this.unt4_f3_apt8.name = "unt4_f3_apt8";
	this.unt4_f3_apt8.parent = this;
	this.unt4_f3_apt8.setTransform(180.2,116.05,1,1,0,0,0,25.7,33.4);
	new cjs.ButtonHelper(this.unt4_f3_apt8, 0, 1, 2, false, new lib.unt4_f3_apt8(), 3);

	this.unt4_f3_apt9 = new lib.unt4_f3_apt9();
	this.unt4_f3_apt9.name = "unt4_f3_apt9";
	this.unt4_f3_apt9.parent = this;
	this.unt4_f3_apt9.setTransform(246.8,37.25,1,1,0,0,0,29.3,28.4);
	new cjs.ButtonHelper(this.unt4_f3_apt9, 0, 1, 2, false, new lib.unt4_f3_apt9(), 3);

	this.unt4_f3_apt10 = new lib.unt4_f3_apt10();
	this.unt4_f3_apt10.name = "unt4_f3_apt10";
	this.unt4_f3_apt10.parent = this;
	this.unt4_f3_apt10.setTransform(160.25,96.15,1,1,0,0,0,33.6,25.4);
	new cjs.ButtonHelper(this.unt4_f3_apt10, 0, 1, 2, false, new lib.unt4_f3_apt10(), 3);

	this.unt4_f3_apt11 = new lib.unt4_f3_apt11();
	this.unt4_f3_apt11.name = "unt4_f3_apt11";
	this.unt4_f3_apt11.parent = this;
	this.unt4_f3_apt11.setTransform(173.25,29.4,1,1,0,0,0,31.6,29.4);
	new cjs.ButtonHelper(this.unt4_f3_apt11, 0, 1, 2, false, new lib.unt4_f3_apt11(), 3);

	this.unt4_f3_apt12 = new lib.unt4_f3_apt12();
	this.unt4_f3_apt12.name = "unt4_f3_apt12";
	this.unt4_f3_apt12.parent = this;
	this.unt4_f3_apt12.setTransform(95.1,101.4,1,1,0,0,0,31.5,29.4);
	new cjs.ButtonHelper(this.unt4_f3_apt12, 0, 1, 2, false, new lib.unt4_f3_apt12(), 3);

	this.unt4_f3_apt13 = new lib.unt4_f3_apt13();
	this.unt4_f3_apt13.name = "unt4_f3_apt13";
	this.unt4_f3_apt13.parent = this;
	this.unt4_f3_apt13.setTransform(109.95,29.4,1,1,0,0,0,31.8,29.4);
	new cjs.ButtonHelper(this.unt4_f3_apt13, 0, 1, 2, false, new lib.unt4_f3_apt13(), 3);

	this.unt4_f3_apt14 = new lib.unt4_f3_apt14();
	this.unt4_f3_apt14.name = "unt4_f3_apt14";
	this.unt4_f3_apt14.parent = this;
	this.unt4_f3_apt14.setTransform(31.8,101.4,1,1,0,0,0,31.8,29.4);
	new cjs.ButtonHelper(this.unt4_f3_apt14, 0, 1, 2, false, new lib.unt4_f3_apt14(), 3);

	this.unt4_f3_apt15 = new lib.unt4_f3_apt15();
	this.unt4_f3_apt15.name = "unt4_f3_apt15";
	this.unt4_f3_apt15.parent = this;
	this.unt4_f3_apt15.setTransform(46.8,29.4,1,1,0,0,0,31.3,29.4);
	new cjs.ButtonHelper(this.unt4_f3_apt15, 0, 1, 2, false, new lib.unt4_f3_apt15(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt4_f3_apt15},{t:this.unt4_f3_apt14},{t:this.unt4_f3_apt13},{t:this.unt4_f3_apt12},{t:this.unt4_f3_apt11},{t:this.unt4_f3_apt10},{t:this.unt4_f3_apt9},{t:this.unt4_f3_apt8},{t:this.unt4_f3_apt7},{t:this.unt4_f3_apt6},{t:this.unt4_f3_apt5},{t:this.unt4_f3_apt4},{t:this.unt4_f3_apt3},{t:this.unt4_f3_apt2},{t:this.unt4_f3_apt1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.unt4floor3, new cjs.Rectangle(0,0,276.5,276.8), null);


(lib.unt4floor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.unt4_f2_apt1 = new lib.unt4_f2_apt1();
	this.unt4_f2_apt1.name = "unt4_f2_apt1";
	this.unt4_f2_apt1.parent = this;
	this.unt4_f2_apt1.setTransform(244.9,255.6,1,1,0,0,0,27.4,21.3);
	new cjs.ButtonHelper(this.unt4_f2_apt1, 0, 1, 2, false, new lib.unt4_f2_apt1(), 3);

	this.unt4_f2_apt2 = new lib.unt4_f2_apt2();
	this.unt4_f2_apt2.name = "unt4_f2_apt2";
	this.unt4_f2_apt2.parent = this;
	this.unt4_f2_apt2.setTransform(177.35,255.55,1,1,0,0,0,27.3,21.2);
	new cjs.ButtonHelper(this.unt4_f2_apt2, 0, 1, 2, false, new lib.unt4_f2_apt2(), 3);

	this.unt4_f2_apt3 = new lib.unt4_f2_apt3();
	this.unt4_f2_apt3.name = "unt4_f2_apt3";
	this.unt4_f2_apt3.parent = this;
	this.unt4_f2_apt3.setTransform(244.9,213.2,1,1,0,0,0,27.4,21.2);
	new cjs.ButtonHelper(this.unt4_f2_apt3, 0, 1, 2, false, new lib.unt4_f2_apt3(), 3);

	this.unt4_f2_apt4 = new lib.unt4_f2_apt4();
	this.unt4_f2_apt4.name = "unt4_f2_apt4";
	this.unt4_f2_apt4.parent = this;
	this.unt4_f2_apt4.setTransform(177.4,213.2,1,1,0,0,0,27.1,21.2);
	new cjs.ButtonHelper(this.unt4_f2_apt4, 0, 1, 2, false, new lib.unt4_f2_apt4(), 3);

	this.unt4_f2_apt5 = new lib.unt4_f2_apt5();
	this.unt4_f2_apt5.name = "unt4_f2_apt5";
	this.unt4_f2_apt5.parent = this;
	this.unt4_f2_apt5.setTransform(247,160.5,1,1,0,0,0,29.5,31.6);
	new cjs.ButtonHelper(this.unt4_f2_apt5, 0, 1, 2, false, new lib.unt4_f2_apt5(), 3);

	this.unt4_f2_apt6 = new lib.unt4_f2_apt6();
	this.unt4_f2_apt6.name = "unt4_f2_apt6";
	this.unt4_f2_apt6.parent = this;
	this.unt4_f2_apt6.setTransform(177.4,170.8,1,1,0,0,0,27.1,21.3);
	new cjs.ButtonHelper(this.unt4_f2_apt6, 0, 1, 2, false, new lib.unt4_f2_apt6(), 3);

	this.unt4_f2_apt7 = new lib.unt4_f2_apt7();
	this.unt4_f2_apt7.name = "unt4_f2_apt7";
	this.unt4_f2_apt7.parent = this;
	this.unt4_f2_apt7.setTransform(247,97.4,1,1,0,0,0,29.5,31.6);
	new cjs.ButtonHelper(this.unt4_f2_apt7, 0, 1, 2, false, new lib.unt4_f2_apt7(), 3);

	this.unt4_f2_apt8 = new lib.unt4_f2_apt8();
	this.unt4_f2_apt8.name = "unt4_f2_apt8";
	this.unt4_f2_apt8.parent = this;
	this.unt4_f2_apt8.setTransform(180.2,116.05,1,1,0,0,0,25.7,33.4);
	new cjs.ButtonHelper(this.unt4_f2_apt8, 0, 1, 2, false, new lib.unt4_f2_apt8(), 3);

	this.unt4_f2_apt9 = new lib.unt4_f2_apt9();
	this.unt4_f2_apt9.name = "unt4_f2_apt9";
	this.unt4_f2_apt9.parent = this;
	this.unt4_f2_apt9.setTransform(246.8,37.25,1,1,0,0,0,29.3,28.4);
	new cjs.ButtonHelper(this.unt4_f2_apt9, 0, 1, 2, false, new lib.unt4_f2_apt9(), 3);

	this.unt4_f2_apt10 = new lib.unt4_f2_apt10();
	this.unt4_f2_apt10.name = "unt4_f2_apt10";
	this.unt4_f2_apt10.parent = this;
	this.unt4_f2_apt10.setTransform(160.25,96.15,1,1,0,0,0,33.6,25.4);
	new cjs.ButtonHelper(this.unt4_f2_apt10, 0, 1, 2, false, new lib.unt4_f2_apt10(), 3);

	this.unt4_f2_apt11 = new lib.unt4_f2_apt11();
	this.unt4_f2_apt11.name = "unt4_f2_apt11";
	this.unt4_f2_apt11.parent = this;
	this.unt4_f2_apt11.setTransform(173.25,29.4,1,1,0,0,0,31.6,29.4);
	new cjs.ButtonHelper(this.unt4_f2_apt11, 0, 1, 2, false, new lib.unt4_f2_apt11(), 3);

	this.unt4_f2_apt12 = new lib.unt4_f2_apt12();
	this.unt4_f2_apt12.name = "unt4_f2_apt12";
	this.unt4_f2_apt12.parent = this;
	this.unt4_f2_apt12.setTransform(95.1,101.4,1,1,0,0,0,31.5,29.4);
	new cjs.ButtonHelper(this.unt4_f2_apt12, 0, 1, 2, false, new lib.unt4_f2_apt12(), 3);

	this.unt4_f2_apt13 = new lib.unt4_f2_apt13();
	this.unt4_f2_apt13.name = "unt4_f2_apt13";
	this.unt4_f2_apt13.parent = this;
	this.unt4_f2_apt13.setTransform(109.95,29.4,1,1,0,0,0,31.8,29.4);
	new cjs.ButtonHelper(this.unt4_f2_apt13, 0, 1, 2, false, new lib.unt4_f2_apt13(), 3);

	this.unt4_f2_apt14 = new lib.unt4_f2_apt14();
	this.unt4_f2_apt14.name = "unt4_f2_apt14";
	this.unt4_f2_apt14.parent = this;
	this.unt4_f2_apt14.setTransform(31.8,101.4,1,1,0,0,0,31.8,29.4);
	new cjs.ButtonHelper(this.unt4_f2_apt14, 0, 1, 2, false, new lib.unt4_f2_apt14(), 3);

	this.unt4_f2_apt15 = new lib.unt4_f2_apt15();
	this.unt4_f2_apt15.name = "unt4_f2_apt15";
	this.unt4_f2_apt15.parent = this;
	this.unt4_f2_apt15.setTransform(46.8,29.4,1,1,0,0,0,31.3,29.4);
	new cjs.ButtonHelper(this.unt4_f2_apt15, 0, 1, 2, false, new lib.unt4_f2_apt15(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt4_f2_apt15},{t:this.unt4_f2_apt14},{t:this.unt4_f2_apt13},{t:this.unt4_f2_apt12},{t:this.unt4_f2_apt11},{t:this.unt4_f2_apt10},{t:this.unt4_f2_apt9},{t:this.unt4_f2_apt8},{t:this.unt4_f2_apt7},{t:this.unt4_f2_apt6},{t:this.unt4_f2_apt5},{t:this.unt4_f2_apt4},{t:this.unt4_f2_apt3},{t:this.unt4_f2_apt2},{t:this.unt4_f2_apt1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.unt4floor2, new cjs.Rectangle(0,0,276.5,276.8), null);


(lib.unt4floor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.unt4_f1_apt1 = new lib.unt4_f1_apt1();
	this.unt4_f1_apt1.name = "unt4_f1_apt1";
	this.unt4_f1_apt1.parent = this;
	this.unt4_f1_apt1.setTransform(244.9,255.6,1,1,0,0,0,27.4,21.3);
	new cjs.ButtonHelper(this.unt4_f1_apt1, 0, 1, 2, false, new lib.unt4_f1_apt1(), 3);

	this.unt4_f1_apt2 = new lib.unt4_f1_apt2();
	this.unt4_f1_apt2.name = "unt4_f1_apt2";
	this.unt4_f1_apt2.parent = this;
	this.unt4_f1_apt2.setTransform(177.35,255.55,1,1,0,0,0,27.3,21.2);
	new cjs.ButtonHelper(this.unt4_f1_apt2, 0, 1, 2, false, new lib.unt4_f1_apt2(), 3);

	this.unt4_f1_apt3 = new lib.unt4_f1_apt3();
	this.unt4_f1_apt3.name = "unt4_f1_apt3";
	this.unt4_f1_apt3.parent = this;
	this.unt4_f1_apt3.setTransform(244.9,213.2,1,1,0,0,0,27.4,21.2);
	new cjs.ButtonHelper(this.unt4_f1_apt3, 0, 1, 2, false, new lib.unt4_f1_apt3(), 3);

	this.unt4_f1_apt4 = new lib.unt4_f1_apt4();
	this.unt4_f1_apt4.name = "unt4_f1_apt4";
	this.unt4_f1_apt4.parent = this;
	this.unt4_f1_apt4.setTransform(177.4,213.2,1,1,0,0,0,27.1,21.2);
	new cjs.ButtonHelper(this.unt4_f1_apt4, 0, 1, 2, false, new lib.unt4_f1_apt4(), 3);

	this.unt4_f1_apt5 = new lib.unt4_f1_apt5();
	this.unt4_f1_apt5.name = "unt4_f1_apt5";
	this.unt4_f1_apt5.parent = this;
	this.unt4_f1_apt5.setTransform(247,160.5,1,1,0,0,0,29.5,31.6);
	new cjs.ButtonHelper(this.unt4_f1_apt5, 0, 1, 2, false, new lib.unt4_f1_apt5(), 3);

	this.unt4_f1_apt6 = new lib.unt4_f1_apt6();
	this.unt4_f1_apt6.name = "unt4_f1_apt6";
	this.unt4_f1_apt6.parent = this;
	this.unt4_f1_apt6.setTransform(177.4,170.8,1,1,0,0,0,27.1,21.3);
	new cjs.ButtonHelper(this.unt4_f1_apt6, 0, 1, 2, false, new lib.unt4_f1_apt6(), 3);

	this.unt4_f1_apt7 = new lib.unt4_f1_apt7();
	this.unt4_f1_apt7.name = "unt4_f1_apt7";
	this.unt4_f1_apt7.parent = this;
	this.unt4_f1_apt7.setTransform(247,97.4,1,1,0,0,0,29.5,31.6);
	new cjs.ButtonHelper(this.unt4_f1_apt7, 0, 1, 2, false, new lib.unt4_f1_apt7(), 3);

	this.unt4_f1_apt8 = new lib.unt4_f1_apt8();
	this.unt4_f1_apt8.name = "unt4_f1_apt8";
	this.unt4_f1_apt8.parent = this;
	this.unt4_f1_apt8.setTransform(180.2,116.05,1,1,0,0,0,25.7,33.4);
	new cjs.ButtonHelper(this.unt4_f1_apt8, 0, 1, 2, false, new lib.unt4_f1_apt8(), 3);

	this.unt4_f1_apt9 = new lib.unt4_f1_apt9();
	this.unt4_f1_apt9.name = "unt4_f1_apt9";
	this.unt4_f1_apt9.parent = this;
	this.unt4_f1_apt9.setTransform(246.8,37.25,1,1,0,0,0,29.3,28.4);
	new cjs.ButtonHelper(this.unt4_f1_apt9, 0, 1, 2, false, new lib.unt4_f1_apt9(), 3);

	this.unt4_f1_apt10 = new lib.unt4_f1_apt10();
	this.unt4_f1_apt10.name = "unt4_f1_apt10";
	this.unt4_f1_apt10.parent = this;
	this.unt4_f1_apt10.setTransform(160.25,96.15,1,1,0,0,0,33.6,25.4);
	new cjs.ButtonHelper(this.unt4_f1_apt10, 0, 1, 2, false, new lib.unt4_f1_apt10(), 3);

	this.unt4_f1_apt11 = new lib.unt4_f1_apt11();
	this.unt4_f1_apt11.name = "unt4_f1_apt11";
	this.unt4_f1_apt11.parent = this;
	this.unt4_f1_apt11.setTransform(173.25,29.4,1,1,0,0,0,31.6,29.4);
	new cjs.ButtonHelper(this.unt4_f1_apt11, 0, 1, 2, false, new lib.unt4_f1_apt11(), 3);

	this.unt4_f1_apt12 = new lib.unt4_f1_apt12();
	this.unt4_f1_apt12.name = "unt4_f1_apt12";
	this.unt4_f1_apt12.parent = this;
	this.unt4_f1_apt12.setTransform(95.1,101.4,1,1,0,0,0,31.5,29.4);
	new cjs.ButtonHelper(this.unt4_f1_apt12, 0, 1, 2, false, new lib.unt4_f1_apt12(), 3);

	this.unt4_f1_apt13 = new lib.unt4_f1_apt13();
	this.unt4_f1_apt13.name = "unt4_f1_apt13";
	this.unt4_f1_apt13.parent = this;
	this.unt4_f1_apt13.setTransform(109.95,29.4,1,1,0,0,0,31.8,29.4);
	new cjs.ButtonHelper(this.unt4_f1_apt13, 0, 1, 2, false, new lib.unt4_f1_apt13(), 3);

	this.unt4_f1_apt14 = new lib.unt4_f1_apt14();
	this.unt4_f1_apt14.name = "unt4_f1_apt14";
	this.unt4_f1_apt14.parent = this;
	this.unt4_f1_apt14.setTransform(31.8,101.4,1,1,0,0,0,31.8,29.4);
	new cjs.ButtonHelper(this.unt4_f1_apt14, 0, 1, 2, false, new lib.unt4_f1_apt14(), 3);

	this.unt4_f1_apt15 = new lib.unt4_f1_apt15();
	this.unt4_f1_apt15.name = "unt4_f1_apt15";
	this.unt4_f1_apt15.parent = this;
	this.unt4_f1_apt15.setTransform(46.8,29.4,1,1,0,0,0,31.3,29.4);
	new cjs.ButtonHelper(this.unt4_f1_apt15, 0, 1, 2, false, new lib.unt4_f1_apt15(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt4_f1_apt15},{t:this.unt4_f1_apt14},{t:this.unt4_f1_apt13},{t:this.unt4_f1_apt12},{t:this.unt4_f1_apt11},{t:this.unt4_f1_apt10},{t:this.unt4_f1_apt9},{t:this.unt4_f1_apt8},{t:this.unt4_f1_apt7},{t:this.unt4_f1_apt6},{t:this.unt4_f1_apt5},{t:this.unt4_f1_apt4},{t:this.unt4_f1_apt3},{t:this.unt4_f1_apt2},{t:this.unt4_f1_apt1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.unt4floor1, new cjs.Rectangle(0,0,276.5,276.8), null);


(lib.unt3_floor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.unt3_f3_apt17 = new lib.unt3_f3_apt17();
	this.unt3_f3_apt17.name = "unt3_f3_apt17";
	this.unt3_f3_apt17.parent = this;
	this.unt3_f3_apt17.setTransform(32.85,28.3,1,1,0,0,0,29.1,28.3);
	new cjs.ButtonHelper(this.unt3_f3_apt17, 0, 1, 2, false, new lib.unt3_f3_apt17(), 3);

	this.unt3_f3_apt16 = new lib.unt3_f3_apt16();
	this.unt3_f3_apt16.name = "unt3_f3_apt16";
	this.unt3_f3_apt16.parent = this;
	this.unt3_f3_apt16.setTransform(102.1,49.9,1,1,0,0,0,26.7,21.5);
	new cjs.ButtonHelper(this.unt3_f3_apt16, 0, 1, 2, false, new lib.unt3_f3_apt16(), 3);

	this.unt3_f3_apt15 = new lib.unt3_f3_apt15();
	this.unt3_f3_apt15.name = "unt3_f3_apt15";
	this.unt3_f3_apt15.parent = this;
	this.unt3_f3_apt15.setTransform(30.9,88,1,1,0,0,0,30.9,31.4);
	new cjs.ButtonHelper(this.unt3_f3_apt15, 0, 1, 2, false, new lib.unt3_f3_apt15(), 3);

	this.unt3_f3_apt14 = new lib.unt3_f3_apt14();
	this.unt3_f3_apt14.name = "unt3_f3_apt14";
	this.unt3_f3_apt14.parent = this;
	this.unt3_f3_apt14.setTransform(102.1,93,1,1,0,0,0,26.7,21.6);
	new cjs.ButtonHelper(this.unt3_f3_apt14, 0, 1, 2, false, new lib.unt3_f3_apt14(), 3);

	this.unt3_f3_apt13 = new lib.unt3_f3_apt13();
	this.unt3_f3_apt13.name = "unt3_f3_apt13";
	this.unt3_f3_apt13.parent = this;
	this.unt3_f3_apt13.setTransform(30.9,151.3,1,1,0,0,0,30.9,31.9);
	new cjs.ButtonHelper(this.unt3_f3_apt13, 0, 1, 2, false, new lib.unt3_f3_apt13(), 3);

	this.unt3_f3_apt12 = new lib.unt3_f3_apt12();
	this.unt3_f3_apt12.name = "unt3_f3_apt12";
	this.unt3_f3_apt12.parent = this;
	this.unt3_f3_apt12.setTransform(99.55,147.85,1,1,0,0,0,25.4,33.2);
	new cjs.ButtonHelper(this.unt3_f3_apt12, 0, 1, 2, false, new lib.unt3_f3_apt12(), 3);

	this.unt3_f3_apt11 = new lib.unt3_f3_apt11();
	this.unt3_f3_apt11.name = "unt3_f3_apt11";
	this.unt3_f3_apt11.parent = this;
	this.unt3_f3_apt11.setTransform(34.55,204.25,1,1,0,0,0,27.3,21.1);
	new cjs.ButtonHelper(this.unt3_f3_apt11, 0, 1, 2, false, new lib.unt3_f3_apt11(), 3);

	this.unt3_f3_apt10 = new lib.unt3_f3_apt10();
	this.unt3_f3_apt10.name = "unt3_f3_apt10";
	this.unt3_f3_apt10.parent = this;
	this.unt3_f3_apt10.setTransform(119.3,167.7,1,1,0,0,0,33.5,25.7);
	new cjs.ButtonHelper(this.unt3_f3_apt10, 0, 1, 2, false, new lib.unt3_f3_apt10(), 3);

	this.unt3_f3_apt9 = new lib.unt3_f3_apt9();
	this.unt3_f3_apt9.name = "unt3_f3_apt9";
	this.unt3_f3_apt9.parent = this;
	this.unt3_f3_apt9.setTransform(34.55,246.55,1,1,0,0,0,27.3,21.2);
	new cjs.ButtonHelper(this.unt3_f3_apt9, 0, 1, 2, false, new lib.unt3_f3_apt9(), 3);

	this.unt3_f3_apt8 = new lib.unt3_f3_apt8();
	this.unt3_f3_apt8.name = "unt3_f3_apt8";
	this.unt3_f3_apt8.parent = this;
	this.unt3_f3_apt8.setTransform(107.05,235.9,1,1,0,0,0,31.4,30.8);
	new cjs.ButtonHelper(this.unt3_f3_apt8, 0, 1, 2, false, new lib.unt3_f3_apt8(), 3);

	this.unt3_f3_apt7 = new lib.unt3_f3_apt7();
	this.unt3_f3_apt7.name = "unt3_f3_apt7";
	this.unt3_f3_apt7.parent = this;
	this.unt3_f3_apt7.setTransform(170.05,235.9,1,1,0,0,0,31.7,30.8);
	new cjs.ButtonHelper(this.unt3_f3_apt7, 0, 1, 2, false, new lib.unt3_f3_apt7(), 3);

	this.unt3_f3_apt6 = new lib.unt3_f3_apt6();
	this.unt3_f3_apt6.name = "unt3_f3_apt6";
	this.unt3_f3_apt6.parent = this;
	this.unt3_f3_apt6.setTransform(184.85,162.95,1,1,0,0,0,31.9,29.1);
	new cjs.ButtonHelper(this.unt3_f3_apt6, 0, 1, 2, false, new lib.unt3_f3_apt6(), 3);

	this.unt3_f3_apt5 = new lib.unt3_f3_apt5();
	this.unt3_f3_apt5.name = "unt3_f3_apt5";
	this.unt3_f3_apt5.parent = this;
	this.unt3_f3_apt5.setTransform(223.4,232.1,1,1,0,0,0,21.7,27);
	new cjs.ButtonHelper(this.unt3_f3_apt5, 0, 1, 2, false, new lib.unt3_f3_apt5(), 3);

	this.unt3_f3_apt4 = new lib.unt3_f3_apt4();
	this.unt3_f3_apt4.name = "unt3_f3_apt4";
	this.unt3_f3_apt4.parent = this;
	this.unt3_f3_apt4.setTransform(248.35,162.95,1,1,0,0,0,31.5,29.1);
	new cjs.ButtonHelper(this.unt3_f3_apt4, 0, 1, 2, false, new lib.unt3_f3_apt4(), 3);

	this.unt3_f3_apt3 = new lib.unt3_f3_apt3();
	this.unt3_f3_apt3.name = "unt3_f3_apt3";
	this.unt3_f3_apt3.parent = this;
	this.unt3_f3_apt3.setTransform(266.4,232.2,1,1,0,0,0,21.4,27.1);
	new cjs.ButtonHelper(this.unt3_f3_apt3, 0, 1, 2, false, new lib.unt3_f3_apt3(), 3);

	this.unt3_f3_apt2 = new lib.unt3_f3_apt2();
	this.unt3_f3_apt2.name = "unt3_f3_apt2";
	this.unt3_f3_apt2.parent = this;
	this.unt3_f3_apt2.setTransform(346.2,163.45,1,1,0,0,0,44.5,28.6);
	new cjs.ButtonHelper(this.unt3_f3_apt2, 0, 1, 2, false, new lib.unt3_f3_apt2(), 3);

	this.unt3_f3_apt1 = new lib.unt3_f3_apt1();
	this.unt3_f3_apt1.name = "unt3_f3_apt1";
	this.unt3_f3_apt1.parent = this;
	this.unt3_f3_apt1.setTransform(346.2,233.55,1,1,0,0,0,44.5,28.7);
	new cjs.ButtonHelper(this.unt3_f3_apt1, 0, 1, 2, false, new lib.unt3_f3_apt1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt3_f3_apt1},{t:this.unt3_f3_apt2},{t:this.unt3_f3_apt3},{t:this.unt3_f3_apt4},{t:this.unt3_f3_apt5},{t:this.unt3_f3_apt6},{t:this.unt3_f3_apt7},{t:this.unt3_f3_apt8},{t:this.unt3_f3_apt9},{t:this.unt3_f3_apt10},{t:this.unt3_f3_apt11},{t:this.unt3_f3_apt12},{t:this.unt3_f3_apt13},{t:this.unt3_f3_apt14},{t:this.unt3_f3_apt15},{t:this.unt3_f3_apt16},{t:this.unt3_f3_apt17}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.unt3_floor3, new cjs.Rectangle(0,0,390.8,267.7), null);


(lib.unt3_floor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.unt3_f2_apt17 = new lib.unt3_f2_apt17();
	this.unt3_f2_apt17.name = "unt3_f2_apt17";
	this.unt3_f2_apt17.parent = this;
	this.unt3_f2_apt17.setTransform(32.85,28.3,1,1,0,0,0,29.1,28.3);
	new cjs.ButtonHelper(this.unt3_f2_apt17, 0, 1, 2, false, new lib.unt3_f2_apt17(), 3);

	this.unt3_f2_apt16 = new lib.unt3_f2_apt16();
	this.unt3_f2_apt16.name = "unt3_f2_apt16";
	this.unt3_f2_apt16.parent = this;
	this.unt3_f2_apt16.setTransform(102.1,49.9,1,1,0,0,0,26.7,21.5);
	new cjs.ButtonHelper(this.unt3_f2_apt16, 0, 1, 2, false, new lib.unt3_f2_apt16(), 3);

	this.unt3_f2_apt15 = new lib.unt3_f2_apt15();
	this.unt3_f2_apt15.name = "unt3_f2_apt15";
	this.unt3_f2_apt15.parent = this;
	this.unt3_f2_apt15.setTransform(30.9,88,1,1,0,0,0,30.9,31.4);
	new cjs.ButtonHelper(this.unt3_f2_apt15, 0, 1, 2, false, new lib.unt3_f2_apt15(), 3);

	this.unt3_f2_apt14 = new lib.unt3_f2_apt14();
	this.unt3_f2_apt14.name = "unt3_f2_apt14";
	this.unt3_f2_apt14.parent = this;
	this.unt3_f2_apt14.setTransform(102.1,93,1,1,0,0,0,26.7,21.6);
	new cjs.ButtonHelper(this.unt3_f2_apt14, 0, 1, 2, false, new lib.unt3_f2_apt14(), 3);

	this.unt3_f2_apt13 = new lib.unt3_f2_apt13();
	this.unt3_f2_apt13.name = "unt3_f2_apt13";
	this.unt3_f2_apt13.parent = this;
	this.unt3_f2_apt13.setTransform(30.9,151.3,1,1,0,0,0,30.9,31.9);
	new cjs.ButtonHelper(this.unt3_f2_apt13, 0, 1, 2, false, new lib.unt3_f2_apt13(), 3);

	this.unt3_f2_apt12 = new lib.unt3_f2_apt12();
	this.unt3_f2_apt12.name = "unt3_f2_apt12";
	this.unt3_f2_apt12.parent = this;
	this.unt3_f2_apt12.setTransform(99.55,147.85,1,1,0,0,0,25.4,33.2);
	new cjs.ButtonHelper(this.unt3_f2_apt12, 0, 1, 2, false, new lib.unt3_f2_apt12(), 3);

	this.unt3_f2_apt11 = new lib.unt3_f2_apt11();
	this.unt3_f2_apt11.name = "unt3_f2_apt11";
	this.unt3_f2_apt11.parent = this;
	this.unt3_f2_apt11.setTransform(34.55,204.25,1,1,0,0,0,27.3,21.1);
	new cjs.ButtonHelper(this.unt3_f2_apt11, 0, 1, 2, false, new lib.unt3_f2_apt11(), 3);

	this.unt3_f2_apt10 = new lib.unt3_f2_apt10();
	this.unt3_f2_apt10.name = "unt3_f2_apt10";
	this.unt3_f2_apt10.parent = this;
	this.unt3_f2_apt10.setTransform(119.3,167.7,1,1,0,0,0,33.5,25.7);
	new cjs.ButtonHelper(this.unt3_f2_apt10, 0, 1, 2, false, new lib.unt3_f2_apt10(), 3);

	this.unt3_f2_apt9 = new lib.unt3_f2_apt9();
	this.unt3_f2_apt9.name = "unt3_f2_apt9";
	this.unt3_f2_apt9.parent = this;
	this.unt3_f2_apt9.setTransform(34.55,246.55,1,1,0,0,0,27.3,21.2);
	new cjs.ButtonHelper(this.unt3_f2_apt9, 0, 1, 2, false, new lib.unt3_f2_apt9(), 3);

	this.unt3_f2_apt8 = new lib.unt3_f2_apt8();
	this.unt3_f2_apt8.name = "unt3_f2_apt8";
	this.unt3_f2_apt8.parent = this;
	this.unt3_f2_apt8.setTransform(107.05,235.9,1,1,0,0,0,31.4,30.8);
	new cjs.ButtonHelper(this.unt3_f2_apt8, 0, 1, 2, false, new lib.unt3_f2_apt8(), 3);

	this.unt3_f2_apt7 = new lib.unt3_f2_apt7();
	this.unt3_f2_apt7.name = "unt3_f2_apt7";
	this.unt3_f2_apt7.parent = this;
	this.unt3_f2_apt7.setTransform(170.05,235.9,1,1,0,0,0,31.7,30.8);
	new cjs.ButtonHelper(this.unt3_f2_apt7, 0, 1, 2, false, new lib.unt3_f2_apt7(), 3);

	this.unt3_f2_apt6 = new lib.unt3_f2_apt6();
	this.unt3_f2_apt6.name = "unt3_f2_apt6";
	this.unt3_f2_apt6.parent = this;
	this.unt3_f2_apt6.setTransform(184.85,162.95,1,1,0,0,0,31.9,29.1);
	new cjs.ButtonHelper(this.unt3_f2_apt6, 0, 1, 2, false, new lib.unt3_f2_apt6(), 3);

	this.unt3_f2_apt5 = new lib.unt3_f2_apt5();
	this.unt3_f2_apt5.name = "unt3_f2_apt5";
	this.unt3_f2_apt5.parent = this;
	this.unt3_f2_apt5.setTransform(223.4,232.1,1,1,0,0,0,21.7,27);
	new cjs.ButtonHelper(this.unt3_f2_apt5, 0, 1, 2, false, new lib.unt3_f2_apt5(), 3);

	this.unt3_f2_apt4 = new lib.unt3_f2_apt4();
	this.unt3_f2_apt4.name = "unt3_f2_apt4";
	this.unt3_f2_apt4.parent = this;
	this.unt3_f2_apt4.setTransform(248.35,162.95,1,1,0,0,0,31.5,29.1);
	new cjs.ButtonHelper(this.unt3_f2_apt4, 0, 1, 2, false, new lib.unt3_f2_apt4(), 3);

	this.unt3_f2_apt3 = new lib.unt3_f2_apt3();
	this.unt3_f2_apt3.name = "unt3_f2_apt3";
	this.unt3_f2_apt3.parent = this;
	this.unt3_f2_apt3.setTransform(266.4,232.2,1,1,0,0,0,21.4,27.1);
	new cjs.ButtonHelper(this.unt3_f2_apt3, 0, 1, 2, false, new lib.unt3_f2_apt3(), 3);

	this.unt3_f2_apt2 = new lib.unt3_f2_apt2();
	this.unt3_f2_apt2.name = "unt3_f2_apt2";
	this.unt3_f2_apt2.parent = this;
	this.unt3_f2_apt2.setTransform(346.2,163.45,1,1,0,0,0,44.5,28.6);
	new cjs.ButtonHelper(this.unt3_f2_apt2, 0, 1, 2, false, new lib.unt3_f2_apt2(), 3);

	this.unt3_f2_apt1 = new lib.unt3_f2_apt1();
	this.unt3_f2_apt1.name = "unt3_f2_apt1";
	this.unt3_f2_apt1.parent = this;
	this.unt3_f2_apt1.setTransform(346.2,233.55,1,1,0,0,0,44.5,28.7);
	new cjs.ButtonHelper(this.unt3_f2_apt1, 0, 1, 2, false, new lib.unt3_f2_apt1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt3_f2_apt1},{t:this.unt3_f2_apt2},{t:this.unt3_f2_apt3},{t:this.unt3_f2_apt4},{t:this.unt3_f2_apt5},{t:this.unt3_f2_apt6},{t:this.unt3_f2_apt7},{t:this.unt3_f2_apt8},{t:this.unt3_f2_apt9},{t:this.unt3_f2_apt10},{t:this.unt3_f2_apt11},{t:this.unt3_f2_apt12},{t:this.unt3_f2_apt13},{t:this.unt3_f2_apt14},{t:this.unt3_f2_apt15},{t:this.unt3_f2_apt16},{t:this.unt3_f2_apt17}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.unt3_floor2, new cjs.Rectangle(0,0,390.8,267.7), null);


(lib.unt3_floor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.unt3_f1_apt17 = new lib.unt3_f1_apt17();
	this.unt3_f1_apt17.name = "unt3_f1_apt17";
	this.unt3_f1_apt17.parent = this;
	this.unt3_f1_apt17.setTransform(32.85,28.3,1,1,0,0,0,29.1,28.3);
	new cjs.ButtonHelper(this.unt3_f1_apt17, 0, 1, 2, false, new lib.unt3_f1_apt17(), 3);

	this.unt3_f1_apt16 = new lib.unt3_f1_apt16();
	this.unt3_f1_apt16.name = "unt3_f1_apt16";
	this.unt3_f1_apt16.parent = this;
	this.unt3_f1_apt16.setTransform(102.1,49.9,1,1,0,0,0,26.7,21.5);
	new cjs.ButtonHelper(this.unt3_f1_apt16, 0, 1, 2, false, new lib.unt3_f1_apt16(), 3);

	this.unt3_f1_apt15 = new lib.unt3_f1_apt15();
	this.unt3_f1_apt15.name = "unt3_f1_apt15";
	this.unt3_f1_apt15.parent = this;
	this.unt3_f1_apt15.setTransform(30.9,88,1,1,0,0,0,30.9,31.4);
	new cjs.ButtonHelper(this.unt3_f1_apt15, 0, 1, 2, false, new lib.unt3_f1_apt15(), 3);

	this.unt3_f1_apt14 = new lib.unt3_f1_apt14();
	this.unt3_f1_apt14.name = "unt3_f1_apt14";
	this.unt3_f1_apt14.parent = this;
	this.unt3_f1_apt14.setTransform(102.1,93,1,1,0,0,0,26.7,21.6);
	new cjs.ButtonHelper(this.unt3_f1_apt14, 0, 1, 2, false, new lib.unt3_f1_apt14(), 3);

	this.unt3_f1_apt13 = new lib.unt3_f1_apt13();
	this.unt3_f1_apt13.name = "unt3_f1_apt13";
	this.unt3_f1_apt13.parent = this;
	this.unt3_f1_apt13.setTransform(30.9,151.3,1,1,0,0,0,30.9,31.9);
	new cjs.ButtonHelper(this.unt3_f1_apt13, 0, 1, 2, false, new lib.unt3_f1_apt13(), 3);

	this.unt3_f1_apt12 = new lib.unt3_f1_apt12();
	this.unt3_f1_apt12.name = "unt3_f1_apt12";
	this.unt3_f1_apt12.parent = this;
	this.unt3_f1_apt12.setTransform(99.55,147.85,1,1,0,0,0,25.4,33.2);
	new cjs.ButtonHelper(this.unt3_f1_apt12, 0, 1, 2, false, new lib.unt3_f1_apt12(), 3);

	this.unt3_f1_apt11 = new lib.unt3_f1_apt11();
	this.unt3_f1_apt11.name = "unt3_f1_apt11";
	this.unt3_f1_apt11.parent = this;
	this.unt3_f1_apt11.setTransform(34.55,204.25,1,1,0,0,0,27.3,21.1);
	new cjs.ButtonHelper(this.unt3_f1_apt11, 0, 1, 2, false, new lib.unt3_f1_apt11(), 3);

	this.unt3_f1_apt10 = new lib.unt3_f1_apt10();
	this.unt3_f1_apt10.name = "unt3_f1_apt10";
	this.unt3_f1_apt10.parent = this;
	this.unt3_f1_apt10.setTransform(119.3,167.7,1,1,0,0,0,33.5,25.7);
	new cjs.ButtonHelper(this.unt3_f1_apt10, 0, 1, 2, false, new lib.unt3_f1_apt10(), 3);

	this.unt3_f1_apt9 = new lib.unt3_f1_apt9();
	this.unt3_f1_apt9.name = "unt3_f1_apt9";
	this.unt3_f1_apt9.parent = this;
	this.unt3_f1_apt9.setTransform(34.55,246.55,1,1,0,0,0,27.3,21.2);
	new cjs.ButtonHelper(this.unt3_f1_apt9, 0, 1, 2, false, new lib.unt3_f1_apt9(), 3);

	this.unt3_f1_apt8 = new lib.unt3_f1_apt8();
	this.unt3_f1_apt8.name = "unt3_f1_apt8";
	this.unt3_f1_apt8.parent = this;
	this.unt3_f1_apt8.setTransform(107.05,235.9,1,1,0,0,0,31.4,30.8);
	new cjs.ButtonHelper(this.unt3_f1_apt8, 0, 1, 2, false, new lib.unt3_f1_apt8(), 3);

	this.unt3_f1_apt7 = new lib.unt3_f1_apt7();
	this.unt3_f1_apt7.name = "unt3_f1_apt7";
	this.unt3_f1_apt7.parent = this;
	this.unt3_f1_apt7.setTransform(170.05,235.9,1,1,0,0,0,31.7,30.8);
	new cjs.ButtonHelper(this.unt3_f1_apt7, 0, 1, 2, false, new lib.unt3_f1_apt7(), 3);

	this.unt3_f1_apt6 = new lib.unt3_f1_apt6();
	this.unt3_f1_apt6.name = "unt3_f1_apt6";
	this.unt3_f1_apt6.parent = this;
	this.unt3_f1_apt6.setTransform(184.85,162.95,1,1,0,0,0,31.9,29.1);
	new cjs.ButtonHelper(this.unt3_f1_apt6, 0, 1, 2, false, new lib.unt3_f1_apt6(), 3);

	this.unt3_f1_apt5 = new lib.unt3_f1_apt5();
	this.unt3_f1_apt5.name = "unt3_f1_apt5";
	this.unt3_f1_apt5.parent = this;
	this.unt3_f1_apt5.setTransform(223.4,232.1,1,1,0,0,0,21.7,27);
	new cjs.ButtonHelper(this.unt3_f1_apt5, 0, 1, 2, false, new lib.unt3_f1_apt5(), 3);

	this.unt3_f1_apt4 = new lib.unt3_f1_apt4();
	this.unt3_f1_apt4.name = "unt3_f1_apt4";
	this.unt3_f1_apt4.parent = this;
	this.unt3_f1_apt4.setTransform(248.35,162.95,1,1,0,0,0,31.5,29.1);
	new cjs.ButtonHelper(this.unt3_f1_apt4, 0, 1, 2, false, new lib.unt3_f1_apt4(), 3);

	this.unt3_f1_apt3 = new lib.unt3_f1_apt3();
	this.unt3_f1_apt3.name = "unt3_f1_apt3";
	this.unt3_f1_apt3.parent = this;
	this.unt3_f1_apt3.setTransform(266.4,232.2,1,1,0,0,0,21.4,27.1);
	new cjs.ButtonHelper(this.unt3_f1_apt3, 0, 1, 2, false, new lib.unt3_f1_apt3(), 3);

	this.unt3_f1_apt2 = new lib.unt3_f1_apt2();
	this.unt3_f1_apt2.name = "unt3_f1_apt2";
	this.unt3_f1_apt2.parent = this;
	this.unt3_f1_apt2.setTransform(346.2,163.45,1,1,0,0,0,44.5,28.6);
	new cjs.ButtonHelper(this.unt3_f1_apt2, 0, 1, 2, false, new lib.unt3_f1_apt2(), 3);

	this.unt3_f1_apt1 = new lib.unt3_f1_apt1();
	this.unt3_f1_apt1.name = "unt3_f1_apt1";
	this.unt3_f1_apt1.parent = this;
	this.unt3_f1_apt1.setTransform(346.2,233.55,1,1,0,0,0,44.5,28.7);
	new cjs.ButtonHelper(this.unt3_f1_apt1, 0, 1, 2, false, new lib.unt3_f1_apt1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt3_f1_apt1},{t:this.unt3_f1_apt2},{t:this.unt3_f1_apt3},{t:this.unt3_f1_apt4},{t:this.unt3_f1_apt5},{t:this.unt3_f1_apt6},{t:this.unt3_f1_apt7},{t:this.unt3_f1_apt8},{t:this.unt3_f1_apt9},{t:this.unt3_f1_apt10},{t:this.unt3_f1_apt11},{t:this.unt3_f1_apt12},{t:this.unt3_f1_apt13},{t:this.unt3_f1_apt14},{t:this.unt3_f1_apt15},{t:this.unt3_f1_apt16},{t:this.unt3_f1_apt17}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.unt3_floor1, new cjs.Rectangle(0,0,390.8,267.7), null);


(lib.unt2floor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.unt2_f3_apt30 = new lib.unt2_f3_apt30();
	this.unt2_f3_apt30.name = "unt2_f3_apt30";
	this.unt2_f3_apt30.parent = this;
	this.unt2_f3_apt30.setTransform(98.1,54.3,1,1,0,0,0,27.4,21);
	new cjs.ButtonHelper(this.unt2_f3_apt30, 0, 1, 2, false, new lib.unt2_f3_apt30(), 3);

	this.unt2_f3_apt29 = new lib.unt2_f3_apt29();
	this.unt2_f3_apt29.name = "unt2_f3_apt29";
	this.unt2_f3_apt29.parent = this;
	this.unt2_f3_apt29.setTransform(29.3,28.55,1,1,0,0,0,29.3,28);
	new cjs.ButtonHelper(this.unt2_f3_apt29, 0, 1, 2, false, new lib.unt2_f3_apt29(), 3);

	this.unt2_f3_apt28 = new lib.unt2_f3_apt28();
	this.unt2_f3_apt28.name = "unt2_f3_apt28";
	this.unt2_f3_apt28.parent = this;
	this.unt2_f3_apt28.setTransform(98.1,96.65,1,1,0,0,0,27.4,21.3);
	new cjs.ButtonHelper(this.unt2_f3_apt28, 0, 1, 2, false, new lib.unt2_f3_apt28(), 3);

	this.unt2_f3_apt27 = new lib.unt2_f3_apt27();
	this.unt2_f3_apt27.name = "unt2_f3_apt27";
	this.unt2_f3_apt27.parent = this;
	this.unt2_f3_apt27.setTransform(31.55,78.3,1,1,0,0,0,27,21.7);
	new cjs.ButtonHelper(this.unt2_f3_apt27, 0, 1, 2, false, new lib.unt2_f3_apt27(), 3);

	this.unt2_f3_apt26 = new lib.unt2_f3_apt26();
	this.unt2_f3_apt26.name = "unt2_f3_apt26";
	this.unt2_f3_apt26.parent = this;
	this.unt2_f3_apt26.setTransform(98.1,139.4,1,1,0,0,0,27.4,21.4);
	new cjs.ButtonHelper(this.unt2_f3_apt26, 0, 1, 2, false, new lib.unt2_f3_apt26(), 3);

	this.unt2_f3_apt25 = new lib.unt2_f3_apt25();
	this.unt2_f3_apt25.name = "unt2_f3_apt25";
	this.unt2_f3_apt25.parent = this;
	this.unt2_f3_apt25.setTransform(31.4,121.55,1,1,0,0,0,27.1,21.5);
	new cjs.ButtonHelper(this.unt2_f3_apt25, 0, 1, 2, false, new lib.unt2_f3_apt25(), 3);

	this.unt2_f3_apt24 = new lib.unt2_f3_apt24();
	this.unt2_f3_apt24.name = "unt2_f3_apt24";
	this.unt2_f3_apt24.parent = this;
	this.unt2_f3_apt24.setTransform(93.25,195.95,1,1,0,0,0,27.8,35.1);
	new cjs.ButtonHelper(this.unt2_f3_apt24, 0, 1, 2, false, new lib.unt2_f3_apt24(), 3);

	this.unt2_f3_apt23 = new lib.unt2_f3_apt23();
	this.unt2_f3_apt23.name = "unt2_f3_apt23";
	this.unt2_f3_apt23.parent = this;
	this.unt2_f3_apt23.setTransform(31.4,164.75,1,1,0,0,0,27.1,21.7);
	new cjs.ButtonHelper(this.unt2_f3_apt23, 0, 1, 2, false, new lib.unt2_f3_apt23(), 3);

	this.unt2_f3_apt22 = new lib.unt2_f3_apt22();
	this.unt2_f3_apt22.name = "unt2_f3_apt22";
	this.unt2_f3_apt22.parent = this;
	this.unt2_f3_apt22.setTransform(31.45,208.05,1,1,0,0,0,27.1,21.7);
	new cjs.ButtonHelper(this.unt2_f3_apt22, 0, 1, 2, false, new lib.unt2_f3_apt22(), 3);

	this.unt2_f3_apt21 = new lib.unt2_f3_apt21();
	this.unt2_f3_apt21.name = "unt2_f3_apt21";
	this.unt2_f3_apt21.parent = this;
	this.unt2_f3_apt21.setTransform(36.65,280.75,1,1,0,0,0,28.2,29.2);
	new cjs.ButtonHelper(this.unt2_f3_apt21, 0, 1, 2, false, new lib.unt2_f3_apt21(), 3);

	this.unt2_f3_apt20 = new lib.unt2_f3_apt20();
	this.unt2_f3_apt20.name = "unt2_f3_apt20";
	this.unt2_f3_apt20.parent = this;
	this.unt2_f3_apt20.setTransform(113.85,216.1,1,1,0,0,0,35.1,27.2);
	new cjs.ButtonHelper(this.unt2_f3_apt20, 0, 1, 2, false, new lib.unt2_f3_apt20(), 3);

	this.unt2_f3_apt19 = new lib.unt2_f3_apt19();
	this.unt2_f3_apt19.name = "unt2_f3_apt19";
	this.unt2_f3_apt19.parent = this;
	this.unt2_f3_apt19.setTransform(96.25,281.85,1,1,0,0,0,31.4,30.3);
	new cjs.ButtonHelper(this.unt2_f3_apt19, 0, 1, 2, false, new lib.unt2_f3_apt19(), 3);

	this.unt2_f3_apt18 = new lib.unt2_f3_apt18();
	this.unt2_f3_apt18.name = "unt2_f3_apt18";
	this.unt2_f3_apt18.parent = this;
	this.unt2_f3_apt18.setTransform(170,210.65,1,1,0,0,0,20.9,28.3);
	new cjs.ButtonHelper(this.unt2_f3_apt18, 0, 1, 2, false, new lib.unt2_f3_apt18(), 3);

	this.unt2_f3_apt17 = new lib.unt2_f3_apt17();
	this.unt2_f3_apt17.name = "unt2_f3_apt17";
	this.unt2_f3_apt17.parent = this;
	this.unt2_f3_apt17.setTransform(159.45,278.4,1,1,0,0,0,31.9,28.1);
	new cjs.ButtonHelper(this.unt2_f3_apt17, 0, 1, 2, false, new lib.unt2_f3_apt17(), 3);

	this.unt2_f3_apt16 = new lib.unt2_f3_apt16();
	this.unt2_f3_apt16.name = "unt2_f3_apt16";
	this.unt2_f3_apt16.parent = this;
	this.unt2_f3_apt16.setTransform(222.65,211.15,1,1,0,0,0,31.7,27.7);
	new cjs.ButtonHelper(this.unt2_f3_apt16, 0, 1, 2, false, new lib.unt2_f3_apt16(), 3);

	this.unt2_f3_apt15 = new lib.unt2_f3_apt15();
	this.unt2_f3_apt15.name = "unt2_f3_apt15";
	this.unt2_f3_apt15.parent = this;
	this.unt2_f3_apt15.setTransform(223,281.85,1,1,0,0,0,31.7,30.3);
	new cjs.ButtonHelper(this.unt2_f3_apt15, 0, 1, 2, false, new lib.unt2_f3_apt15(), 3);

	this.unt2_f3_apt14 = new lib.unt2_f3_apt14();
	this.unt2_f3_apt14.name = "unt2_f3_apt14";
	this.unt2_f3_apt14.parent = this;
	this.unt2_f3_apt14.setTransform(275.3,210.65,1,1,0,0,0,20.9,28.3);
	new cjs.ButtonHelper(this.unt2_f3_apt14, 0, 1, 2, false, new lib.unt2_f3_apt14(), 3);

	this.unt2_f3_apt13 = new lib.unt2_f3_apt13();
	this.unt2_f3_apt13.name = "unt2_f3_apt13";
	this.unt2_f3_apt13.parent = this;
	this.unt2_f3_apt13.setTransform(286.5,278.4,1,1,0,0,0,31.9,28.1);
	new cjs.ButtonHelper(this.unt2_f3_apt13, 0, 1, 2, false, new lib.unt2_f3_apt13(), 3);

	this.unt2_f3_apt12 = new lib.unt2_f3_apt12();
	this.unt2_f3_apt12.name = "unt2_f3_apt12";
	this.unt2_f3_apt12.parent = this;
	this.unt2_f3_apt12.setTransform(329.95,213.9,1,1,0,0,0,33.7,25);
	new cjs.ButtonHelper(this.unt2_f3_apt12, 0, 1, 2, false, new lib.unt2_f3_apt12(), 3);

	this.unt2_f3_apt11 = new lib.unt2_f3_apt11();
	this.unt2_f3_apt11.name = "unt2_f3_apt11";
	this.unt2_f3_apt11.parent = this;
	this.unt2_f3_apt11.setTransform(349.75,281.85,1,1,0,0,0,31.4,30.3);
	new cjs.ButtonHelper(this.unt2_f3_apt11, 0, 1, 2, false, new lib.unt2_f3_apt11(), 3);

	this.unt2_f3_apt10 = new lib.unt2_f3_apt10();
	this.unt2_f3_apt10.name = "unt2_f3_apt10";
	this.unt2_f3_apt10.parent = this;
	this.unt2_f3_apt10.setTransform(349.6,194.25,1,1,0,0,0,25.2,33.4);
	new cjs.ButtonHelper(this.unt2_f3_apt10, 0, 1, 2, false, new lib.unt2_f3_apt10(), 3);

	this.unt2_f3_apt9 = new lib.unt2_f3_apt9();
	this.unt2_f3_apt9.name = "unt2_f3_apt9";
	this.unt2_f3_apt9.parent = this;
	this.unt2_f3_apt9.setTransform(409.25,280.75,1,1,0,0,0,28.2,29.2);
	new cjs.ButtonHelper(this.unt2_f3_apt9, 0, 1, 2, false, new lib.unt2_f3_apt9(), 3);

	this.unt2_f3_apt8 = new lib.unt2_f3_apt8();
	this.unt2_f3_apt8.name = "unt2_f3_apt8";
	this.unt2_f3_apt8.parent = this;
	this.unt2_f3_apt8.setTransform(414.05,207.55,1,1,0,0,0,27.1,21.7);
	new cjs.ButtonHelper(this.unt2_f3_apt8, 0, 1, 2, false, new lib.unt2_f3_apt8(), 3);

	this.unt2_f3_apt7 = new lib.unt2_f3_apt7();
	this.unt2_f3_apt7.name = "unt2_f3_apt7";
	this.unt2_f3_apt7.parent = this;
	this.unt2_f3_apt7.setTransform(414.05,164.2,1,1,0,0,0,27.1,21.7);
	new cjs.ButtonHelper(this.unt2_f3_apt7, 0, 1, 2, false, new lib.unt2_f3_apt7(), 3);

	this.unt2_f3_apt6 = new lib.unt2_f3_apt6();
	this.unt2_f3_apt6.name = "unt2_f3_apt6";
	this.unt2_f3_apt6.parent = this;
	this.unt2_f3_apt6.setTransform(347.2,139.4,1,1,0,0,0,27.4,21.4);
	new cjs.ButtonHelper(this.unt2_f3_apt6, 0, 1, 2, false, new lib.unt2_f3_apt6(), 3);

	this.unt2_f3_apt5 = new lib.unt2_f3_apt5();
	this.unt2_f3_apt5.name = "unt2_f3_apt5";
	this.unt2_f3_apt5.parent = this;
	this.unt2_f3_apt5.setTransform(414.05,121,1,1,0,0,0,27.1,21.5);
	new cjs.ButtonHelper(this.unt2_f3_apt5, 0, 1, 2, false, new lib.unt2_f3_apt5(), 3);

	this.unt2_f3_apt4 = new lib.unt2_f3_apt4();
	this.unt2_f3_apt4.name = "unt2_f3_apt4";
	this.unt2_f3_apt4.parent = this;
	this.unt2_f3_apt4.setTransform(347.2,96.65,1,1,0,0,0,27.4,21.3);
	new cjs.ButtonHelper(this.unt2_f3_apt4, 0, 1, 2, false, new lib.unt2_f3_apt4(), 3);

	this.unt2_f3_apt3 = new lib.unt2_f3_apt3();
	this.unt2_f3_apt3.name = "unt2_f3_apt3";
	this.unt2_f3_apt3.parent = this;
	this.unt2_f3_apt3.setTransform(413.95,77.75,1,1,0,0,0,27,21.7);
	new cjs.ButtonHelper(this.unt2_f3_apt3, 0, 1, 2, false, new lib.unt2_f3_apt3(), 3);

	this.unt2_f3_apt2 = new lib.unt2_f3_apt2();
	this.unt2_f3_apt2.name = "unt2_f3_apt2";
	this.unt2_f3_apt2.parent = this;
	this.unt2_f3_apt2.setTransform(347.2,54.3,1,1,0,0,0,27.4,21);
	new cjs.ButtonHelper(this.unt2_f3_apt2, 0, 1, 2, false, new lib.unt2_f3_apt2(), 3);

	this.unt2_f3_apt1 = new lib.unt2_f3_apt1();
	this.unt2_f3_apt1.name = "unt2_f3_apt1";
	this.unt2_f3_apt1.parent = this;
	this.unt2_f3_apt1.setTransform(416.25,28,1,1,0,0,0,29.3,28);
	new cjs.ButtonHelper(this.unt2_f3_apt1, 0, 1, 2, false, new lib.unt2_f3_apt1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt2_f3_apt1},{t:this.unt2_f3_apt2},{t:this.unt2_f3_apt3},{t:this.unt2_f3_apt4},{t:this.unt2_f3_apt5},{t:this.unt2_f3_apt6},{t:this.unt2_f3_apt7},{t:this.unt2_f3_apt8},{t:this.unt2_f3_apt9},{t:this.unt2_f3_apt10},{t:this.unt2_f3_apt11},{t:this.unt2_f3_apt12},{t:this.unt2_f3_apt13},{t:this.unt2_f3_apt14},{t:this.unt2_f3_apt15},{t:this.unt2_f3_apt16},{t:this.unt2_f3_apt17},{t:this.unt2_f3_apt18},{t:this.unt2_f3_apt19},{t:this.unt2_f3_apt20},{t:this.unt2_f3_apt21},{t:this.unt2_f3_apt22},{t:this.unt2_f3_apt23},{t:this.unt2_f3_apt24},{t:this.unt2_f3_apt25},{t:this.unt2_f3_apt26},{t:this.unt2_f3_apt27},{t:this.unt2_f3_apt28},{t:this.unt2_f3_apt29},{t:this.unt2_f3_apt30}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.unt2floor3, new cjs.Rectangle(0,0,445.5,312.1), null);


(lib.unt2floor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.unt2_f2_apt30 = new lib.unt2_f2_apt30();
	this.unt2_f2_apt30.name = "unt2_f2_apt30";
	this.unt2_f2_apt30.parent = this;
	this.unt2_f2_apt30.setTransform(98.1,54.3,1,1,0,0,0,27.4,21);
	new cjs.ButtonHelper(this.unt2_f2_apt30, 0, 1, 2, false, new lib.unt2_f2_apt30(), 3);

	this.unt2_f2_apt29 = new lib.unt2_f2_apt29();
	this.unt2_f2_apt29.name = "unt2_f2_apt29";
	this.unt2_f2_apt29.parent = this;
	this.unt2_f2_apt29.setTransform(29.3,28.55,1,1,0,0,0,29.3,28);
	new cjs.ButtonHelper(this.unt2_f2_apt29, 0, 1, 2, false, new lib.unt2_f2_apt29(), 3);

	this.unt2_f2_apt28 = new lib.unt2_f2_apt28();
	this.unt2_f2_apt28.name = "unt2_f2_apt28";
	this.unt2_f2_apt28.parent = this;
	this.unt2_f2_apt28.setTransform(98.1,96.65,1,1,0,0,0,27.4,21.3);
	new cjs.ButtonHelper(this.unt2_f2_apt28, 0, 1, 2, false, new lib.unt2_f2_apt28(), 3);

	this.unt2_f2_apt27 = new lib.unt2_f2_apt27();
	this.unt2_f2_apt27.name = "unt2_f2_apt27";
	this.unt2_f2_apt27.parent = this;
	this.unt2_f2_apt27.setTransform(31.55,78.3,1,1,0,0,0,27,21.7);
	new cjs.ButtonHelper(this.unt2_f2_apt27, 0, 1, 2, false, new lib.unt2_f2_apt27(), 3);

	this.unt2_f2_apt26 = new lib.unt2_f2_apt26();
	this.unt2_f2_apt26.name = "unt2_f2_apt26";
	this.unt2_f2_apt26.parent = this;
	this.unt2_f2_apt26.setTransform(98.1,139.4,1,1,0,0,0,27.4,21.4);
	new cjs.ButtonHelper(this.unt2_f2_apt26, 0, 1, 2, false, new lib.unt2_f2_apt26(), 3);

	this.unt2_f2_apt25 = new lib.unt2_f2_apt25();
	this.unt2_f2_apt25.name = "unt2_f2_apt25";
	this.unt2_f2_apt25.parent = this;
	this.unt2_f2_apt25.setTransform(31.4,121.55,1,1,0,0,0,27.1,21.5);
	new cjs.ButtonHelper(this.unt2_f2_apt25, 0, 1, 2, false, new lib.unt2_f2_apt25(), 3);

	this.unt2_f2_apt24 = new lib.unt2_f2_apt24();
	this.unt2_f2_apt24.name = "unt2_f2_apt24";
	this.unt2_f2_apt24.parent = this;
	this.unt2_f2_apt24.setTransform(93.25,195.95,1,1,0,0,0,27.8,35.1);
	new cjs.ButtonHelper(this.unt2_f2_apt24, 0, 1, 2, false, new lib.unt2_f2_apt24(), 3);

	this.unt2_f2_apt23 = new lib.unt2_f2_apt23();
	this.unt2_f2_apt23.name = "unt2_f2_apt23";
	this.unt2_f2_apt23.parent = this;
	this.unt2_f2_apt23.setTransform(31.4,164.75,1,1,0,0,0,27.1,21.7);
	new cjs.ButtonHelper(this.unt2_f2_apt23, 0, 1, 2, false, new lib.unt2_f2_apt23(), 3);

	this.unt2_f2_apt22 = new lib.unt2_f2_apt22();
	this.unt2_f2_apt22.name = "unt2_f2_apt22";
	this.unt2_f2_apt22.parent = this;
	this.unt2_f2_apt22.setTransform(31.45,208.05,1,1,0,0,0,27.1,21.7);
	new cjs.ButtonHelper(this.unt2_f2_apt22, 0, 1, 2, false, new lib.unt2_f2_apt22(), 3);

	this.unt2_f2_apt21 = new lib.unt2_f2_apt21();
	this.unt2_f2_apt21.name = "unt2_f2_apt21";
	this.unt2_f2_apt21.parent = this;
	this.unt2_f2_apt21.setTransform(36.65,280.75,1,1,0,0,0,28.2,29.2);
	new cjs.ButtonHelper(this.unt2_f2_apt21, 0, 1, 2, false, new lib.unt2_f2_apt21(), 3);

	this.unt2_f2_apt20 = new lib.unt2_f2_apt20();
	this.unt2_f2_apt20.name = "unt2_f2_apt20";
	this.unt2_f2_apt20.parent = this;
	this.unt2_f2_apt20.setTransform(113.85,216.1,1,1,0,0,0,35.1,27.2);
	new cjs.ButtonHelper(this.unt2_f2_apt20, 0, 1, 2, false, new lib.unt2_f2_apt20(), 3);

	this.unt2_f2_apt19 = new lib.unt2_f2_apt19();
	this.unt2_f2_apt19.name = "unt2_f2_apt19";
	this.unt2_f2_apt19.parent = this;
	this.unt2_f2_apt19.setTransform(96.25,281.85,1,1,0,0,0,31.4,30.3);
	new cjs.ButtonHelper(this.unt2_f2_apt19, 0, 1, 2, false, new lib.unt2_f2_apt19(), 3);

	this.unt2_f2_apt18 = new lib.unt2_f2_apt18();
	this.unt2_f2_apt18.name = "unt2_f2_apt18";
	this.unt2_f2_apt18.parent = this;
	this.unt2_f2_apt18.setTransform(170,210.65,1,1,0,0,0,20.9,28.3);
	new cjs.ButtonHelper(this.unt2_f2_apt18, 0, 1, 2, false, new lib.unt2_f2_apt18(), 3);

	this.unt2_f2_apt17 = new lib.unt2_f2_apt17();
	this.unt2_f2_apt17.name = "unt2_f2_apt17";
	this.unt2_f2_apt17.parent = this;
	this.unt2_f2_apt17.setTransform(159.45,278.4,1,1,0,0,0,31.9,28.1);
	new cjs.ButtonHelper(this.unt2_f2_apt17, 0, 1, 2, false, new lib.unt2_f2_apt17(), 3);

	this.unt2_f2_apt16 = new lib.unt2_f2_apt16();
	this.unt2_f2_apt16.name = "unt2_f2_apt16";
	this.unt2_f2_apt16.parent = this;
	this.unt2_f2_apt16.setTransform(222.65,211.15,1,1,0,0,0,31.7,27.7);
	new cjs.ButtonHelper(this.unt2_f2_apt16, 0, 1, 2, false, new lib.unt2_f2_apt16(), 3);

	this.unt2_f2_apt15 = new lib.unt2_f2_apt15();
	this.unt2_f2_apt15.name = "unt2_f2_apt15";
	this.unt2_f2_apt15.parent = this;
	this.unt2_f2_apt15.setTransform(223,281.85,1,1,0,0,0,31.7,30.3);
	new cjs.ButtonHelper(this.unt2_f2_apt15, 0, 1, 2, false, new lib.unt2_f2_apt15(), 3);

	this.unt2_f2_apt14 = new lib.unt2_f2_apt14();
	this.unt2_f2_apt14.name = "unt2_f2_apt14";
	this.unt2_f2_apt14.parent = this;
	this.unt2_f2_apt14.setTransform(275.3,210.65,1,1,0,0,0,20.9,28.3);
	new cjs.ButtonHelper(this.unt2_f2_apt14, 0, 1, 2, false, new lib.unt2_f2_apt14(), 3);

	this.unt2_f2_apt13 = new lib.unt2_f2_apt13();
	this.unt2_f2_apt13.name = "unt2_f2_apt13";
	this.unt2_f2_apt13.parent = this;
	this.unt2_f2_apt13.setTransform(286.5,278.4,1,1,0,0,0,31.9,28.1);
	new cjs.ButtonHelper(this.unt2_f2_apt13, 0, 1, 2, false, new lib.unt2_f2_apt13(), 3);

	this.unt2_f2_apt12 = new lib.unt2_f2_apt12();
	this.unt2_f2_apt12.name = "unt2_f2_apt12";
	this.unt2_f2_apt12.parent = this;
	this.unt2_f2_apt12.setTransform(329.95,213.9,1,1,0,0,0,33.7,25);
	new cjs.ButtonHelper(this.unt2_f2_apt12, 0, 1, 2, false, new lib.unt2_f2_apt12(), 3);

	this.unt2_f2_apt11 = new lib.unt2_f2_apt11();
	this.unt2_f2_apt11.name = "unt2_f2_apt11";
	this.unt2_f2_apt11.parent = this;
	this.unt2_f2_apt11.setTransform(349.75,281.85,1,1,0,0,0,31.4,30.3);
	new cjs.ButtonHelper(this.unt2_f2_apt11, 0, 1, 2, false, new lib.unt2_f2_apt11(), 3);

	this.unt2_f2_apt10 = new lib.unt2_f2_apt10();
	this.unt2_f2_apt10.name = "unt2_f2_apt10";
	this.unt2_f2_apt10.parent = this;
	this.unt2_f2_apt10.setTransform(349.6,194.25,1,1,0,0,0,25.2,33.4);
	new cjs.ButtonHelper(this.unt2_f2_apt10, 0, 1, 2, false, new lib.unt2_f2_apt10(), 3);

	this.unt2_f2_apt9 = new lib.unt2_f2_apt9();
	this.unt2_f2_apt9.name = "unt2_f2_apt9";
	this.unt2_f2_apt9.parent = this;
	this.unt2_f2_apt9.setTransform(409.25,280.75,1,1,0,0,0,28.2,29.2);
	new cjs.ButtonHelper(this.unt2_f2_apt9, 0, 1, 2, false, new lib.unt2_f2_apt9(), 3);

	this.unt2_f2_apt8 = new lib.unt2_f2_apt8();
	this.unt2_f2_apt8.name = "unt2_f2_apt8";
	this.unt2_f2_apt8.parent = this;
	this.unt2_f2_apt8.setTransform(414.05,207.55,1,1,0,0,0,27.1,21.7);
	new cjs.ButtonHelper(this.unt2_f2_apt8, 0, 1, 2, false, new lib.unt2_f2_apt8(), 3);

	this.unt2_f2_apt7 = new lib.unt2_f2_apt7();
	this.unt2_f2_apt7.name = "unt2_f2_apt7";
	this.unt2_f2_apt7.parent = this;
	this.unt2_f2_apt7.setTransform(414.05,164.2,1,1,0,0,0,27.1,21.7);
	new cjs.ButtonHelper(this.unt2_f2_apt7, 0, 1, 2, false, new lib.unt2_f2_apt7(), 3);

	this.unt2_f2_apt6 = new lib.unt2_f2_apt6();
	this.unt2_f2_apt6.name = "unt2_f2_apt6";
	this.unt2_f2_apt6.parent = this;
	this.unt2_f2_apt6.setTransform(347.2,139.4,1,1,0,0,0,27.4,21.4);
	new cjs.ButtonHelper(this.unt2_f2_apt6, 0, 1, 2, false, new lib.unt2_f2_apt6(), 3);

	this.unt2_f2_apt5 = new lib.unt2_f2_apt5();
	this.unt2_f2_apt5.name = "unt2_f2_apt5";
	this.unt2_f2_apt5.parent = this;
	this.unt2_f2_apt5.setTransform(414.05,121,1,1,0,0,0,27.1,21.5);
	new cjs.ButtonHelper(this.unt2_f2_apt5, 0, 1, 2, false, new lib.unt2_f2_apt5(), 3);

	this.unt2_f2_apt4 = new lib.unt2_f2_apt4();
	this.unt2_f2_apt4.name = "unt2_f2_apt4";
	this.unt2_f2_apt4.parent = this;
	this.unt2_f2_apt4.setTransform(347.2,96.65,1,1,0,0,0,27.4,21.3);
	new cjs.ButtonHelper(this.unt2_f2_apt4, 0, 1, 2, false, new lib.unt2_f2_apt4(), 3);

	this.unt2_f2_apt3 = new lib.unt2_f2_apt3();
	this.unt2_f2_apt3.name = "unt2_f2_apt3";
	this.unt2_f2_apt3.parent = this;
	this.unt2_f2_apt3.setTransform(413.95,77.75,1,1,0,0,0,27,21.7);
	new cjs.ButtonHelper(this.unt2_f2_apt3, 0, 1, 1);

	this.unt2_f2_apt2 = new lib.unt2_f2_apt2();
	this.unt2_f2_apt2.name = "unt2_f2_apt2";
	this.unt2_f2_apt2.parent = this;
	this.unt2_f2_apt2.setTransform(347.2,54.3,1,1,0,0,0,27.4,21);
	new cjs.ButtonHelper(this.unt2_f2_apt2, 0, 1, 2, false, new lib.unt2_f2_apt2(), 3);

	this.unt2_f2_apt1 = new lib.unt2_f2_apt1();
	this.unt2_f2_apt1.name = "unt2_f2_apt1";
	this.unt2_f2_apt1.parent = this;
	this.unt2_f2_apt1.setTransform(416.25,28,1,1,0,0,0,29.3,28);
	new cjs.ButtonHelper(this.unt2_f2_apt1, 0, 1, 2, false, new lib.unt2_f2_apt1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt2_f2_apt1},{t:this.unt2_f2_apt2},{t:this.unt2_f2_apt3},{t:this.unt2_f2_apt4},{t:this.unt2_f2_apt5},{t:this.unt2_f2_apt6},{t:this.unt2_f2_apt7},{t:this.unt2_f2_apt8},{t:this.unt2_f2_apt9},{t:this.unt2_f2_apt10},{t:this.unt2_f2_apt11},{t:this.unt2_f2_apt12},{t:this.unt2_f2_apt13},{t:this.unt2_f2_apt14},{t:this.unt2_f2_apt15},{t:this.unt2_f2_apt16},{t:this.unt2_f2_apt17},{t:this.unt2_f2_apt18},{t:this.unt2_f2_apt19},{t:this.unt2_f2_apt20},{t:this.unt2_f2_apt21},{t:this.unt2_f2_apt22},{t:this.unt2_f2_apt23},{t:this.unt2_f2_apt24},{t:this.unt2_f2_apt25},{t:this.unt2_f2_apt26},{t:this.unt2_f2_apt27},{t:this.unt2_f2_apt28},{t:this.unt2_f2_apt29},{t:this.unt2_f2_apt30}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,445.5,312.1);


(lib.unt2floor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.unt2_f1_apt30 = new lib.unt2_f1_apt30();
	this.unt2_f1_apt30.name = "unt2_f1_apt30";
	this.unt2_f1_apt30.parent = this;
	this.unt2_f1_apt30.setTransform(98.1,54.3,1,1,0,0,0,27.4,21);
	new cjs.ButtonHelper(this.unt2_f1_apt30, 0, 1, 2, false, new lib.unt2_f1_apt30(), 3);

	this.unt2_f1_apt29 = new lib.unt2_f1_apt29();
	this.unt2_f1_apt29.name = "unt2_f1_apt29";
	this.unt2_f1_apt29.parent = this;
	this.unt2_f1_apt29.setTransform(29.3,28.55,1,1,0,0,0,29.3,28);
	new cjs.ButtonHelper(this.unt2_f1_apt29, 0, 1, 2, false, new lib.unt2_f1_apt29(), 3);

	this.unt2_f1_apt28 = new lib.unt2_f1_apt28();
	this.unt2_f1_apt28.name = "unt2_f1_apt28";
	this.unt2_f1_apt28.parent = this;
	this.unt2_f1_apt28.setTransform(98.1,96.65,1,1,0,0,0,27.4,21.3);
	new cjs.ButtonHelper(this.unt2_f1_apt28, 0, 1, 2, false, new lib.unt2_f1_apt28(), 3);

	this.unt2_f1_apt27 = new lib.unt2_f1_apt27();
	this.unt2_f1_apt27.name = "unt2_f1_apt27";
	this.unt2_f1_apt27.parent = this;
	this.unt2_f1_apt27.setTransform(31.55,78.3,1,1,0,0,0,27,21.7);
	new cjs.ButtonHelper(this.unt2_f1_apt27, 0, 1, 2, false, new lib.unt2_f1_apt27(), 3);

	this.unt2_f1_apt26 = new lib.unt2_f1_apt26();
	this.unt2_f1_apt26.name = "unt2_f1_apt26";
	this.unt2_f1_apt26.parent = this;
	this.unt2_f1_apt26.setTransform(98.1,139.4,1,1,0,0,0,27.4,21.4);
	new cjs.ButtonHelper(this.unt2_f1_apt26, 0, 1, 2, false, new lib.unt2_f1_apt26(), 3);

	this.unt2_f1_apt25 = new lib.unt2_f1_apt25();
	this.unt2_f1_apt25.name = "unt2_f1_apt25";
	this.unt2_f1_apt25.parent = this;
	this.unt2_f1_apt25.setTransform(31.4,121.55,1,1,0,0,0,27.1,21.5);
	new cjs.ButtonHelper(this.unt2_f1_apt25, 0, 1, 2, false, new lib.unt2_f1_apt25(), 3);

	this.unt2_f1_apt24 = new lib.unt2_f1_apt24();
	this.unt2_f1_apt24.name = "unt2_f1_apt24";
	this.unt2_f1_apt24.parent = this;
	this.unt2_f1_apt24.setTransform(93.25,195.95,1,1,0,0,0,27.8,35.1);
	new cjs.ButtonHelper(this.unt2_f1_apt24, 0, 1, 2, false, new lib.unt2_f1_apt24(), 3);

	this.unt2_f1_apt23 = new lib.unt2_f1_apt23();
	this.unt2_f1_apt23.name = "unt2_f1_apt23";
	this.unt2_f1_apt23.parent = this;
	this.unt2_f1_apt23.setTransform(31.4,164.75,1,1,0,0,0,27.1,21.7);
	new cjs.ButtonHelper(this.unt2_f1_apt23, 0, 1, 2, false, new lib.unt2_f1_apt23(), 3);

	this.unt2_f1_apt22 = new lib.unt2_f1_apt22();
	this.unt2_f1_apt22.name = "unt2_f1_apt22";
	this.unt2_f1_apt22.parent = this;
	this.unt2_f1_apt22.setTransform(31.45,208.05,1,1,0,0,0,27.1,21.7);
	new cjs.ButtonHelper(this.unt2_f1_apt22, 0, 1, 2, false, new lib.unt2_f1_apt22(), 3);

	this.unt2_f1_apt21 = new lib.unt2_f1_apt21();
	this.unt2_f1_apt21.name = "unt2_f1_apt21";
	this.unt2_f1_apt21.parent = this;
	this.unt2_f1_apt21.setTransform(36.65,280.75,1,1,0,0,0,28.2,29.2);
	new cjs.ButtonHelper(this.unt2_f1_apt21, 0, 1, 2, false, new lib.unt2_f1_apt21(), 3);

	this.unt2_f1_apt20 = new lib.unt2_f1_apt20();
	this.unt2_f1_apt20.name = "unt2_f1_apt20";
	this.unt2_f1_apt20.parent = this;
	this.unt2_f1_apt20.setTransform(113.85,216.1,1,1,0,0,0,35.1,27.2);
	new cjs.ButtonHelper(this.unt2_f1_apt20, 0, 1, 2, false, new lib.unt2_f1_apt20(), 3);

	this.unt2_f1_apt19 = new lib.unt2_f1_apt19();
	this.unt2_f1_apt19.name = "unt2_f1_apt19";
	this.unt2_f1_apt19.parent = this;
	this.unt2_f1_apt19.setTransform(96.25,281.85,1,1,0,0,0,31.4,30.3);
	new cjs.ButtonHelper(this.unt2_f1_apt19, 0, 1, 2, false, new lib.unt2_f1_apt19(), 3);

	this.unt2_f1_apt18 = new lib.unt2_f1_apt18();
	this.unt2_f1_apt18.name = "unt2_f1_apt18";
	this.unt2_f1_apt18.parent = this;
	this.unt2_f1_apt18.setTransform(170,210.65,1,1,0,0,0,20.9,28.3);
	new cjs.ButtonHelper(this.unt2_f1_apt18, 0, 1, 2, false, new lib.unt2_f1_apt18(), 3);

	this.unt2_f1_apt17 = new lib.unt2_f1_apt17();
	this.unt2_f1_apt17.name = "unt2_f1_apt17";
	this.unt2_f1_apt17.parent = this;
	this.unt2_f1_apt17.setTransform(159.45,278.4,1,1,0,0,0,31.9,28.1);
	new cjs.ButtonHelper(this.unt2_f1_apt17, 0, 1, 2, false, new lib.unt2_f1_apt17(), 3);

	this.unt2_f1_apt16 = new lib.unt2_f1_apt16();
	this.unt2_f1_apt16.name = "unt2_f1_apt16";
	this.unt2_f1_apt16.parent = this;
	this.unt2_f1_apt16.setTransform(222.65,211.15,1,1,0,0,0,31.7,27.7);
	new cjs.ButtonHelper(this.unt2_f1_apt16, 0, 1, 2, false, new lib.unt2_f1_apt16(), 3);

	this.unt2_f1_apt15 = new lib.unt2_f1_apt15();
	this.unt2_f1_apt15.name = "unt2_f1_apt15";
	this.unt2_f1_apt15.parent = this;
	this.unt2_f1_apt15.setTransform(223,281.85,1,1,0,0,0,31.7,30.3);
	new cjs.ButtonHelper(this.unt2_f1_apt15, 0, 1, 2, false, new lib.unt2_f1_apt15(), 3);

	this.unt2_f1_apt14 = new lib.unt2_f1_apt14();
	this.unt2_f1_apt14.name = "unt2_f1_apt14";
	this.unt2_f1_apt14.parent = this;
	this.unt2_f1_apt14.setTransform(275.3,210.65,1,1,0,0,0,20.9,28.3);
	new cjs.ButtonHelper(this.unt2_f1_apt14, 0, 1, 2, false, new lib.unt2_f1_apt14(), 3);

	this.unt2_f1_apt13 = new lib.unt2_f1_apt13();
	this.unt2_f1_apt13.name = "unt2_f1_apt13";
	this.unt2_f1_apt13.parent = this;
	this.unt2_f1_apt13.setTransform(286.5,278.4,1,1,0,0,0,31.9,28.1);
	new cjs.ButtonHelper(this.unt2_f1_apt13, 0, 1, 2, false, new lib.unt2_f1_apt13(), 3);

	this.unt2_f1_apt12 = new lib.unt2_f1_apt12();
	this.unt2_f1_apt12.name = "unt2_f1_apt12";
	this.unt2_f1_apt12.parent = this;
	this.unt2_f1_apt12.setTransform(329.95,213.9,1,1,0,0,0,33.7,25);
	new cjs.ButtonHelper(this.unt2_f1_apt12, 0, 1, 2, false, new lib.unt2_f1_apt12(), 3);

	this.unt2_f1_apt11 = new lib.unt2_f1_apt11();
	this.unt2_f1_apt11.name = "unt2_f1_apt11";
	this.unt2_f1_apt11.parent = this;
	this.unt2_f1_apt11.setTransform(349.75,281.85,1,1,0,0,0,31.4,30.3);
	new cjs.ButtonHelper(this.unt2_f1_apt11, 0, 1, 2, false, new lib.unt2_f1_apt11(), 3);

	this.unt2_f1_apt10 = new lib.unt2_f1_apt10();
	this.unt2_f1_apt10.name = "unt2_f1_apt10";
	this.unt2_f1_apt10.parent = this;
	this.unt2_f1_apt10.setTransform(349.6,194.25,1,1,0,0,0,25.2,33.4);
	new cjs.ButtonHelper(this.unt2_f1_apt10, 0, 1, 2, false, new lib.unt2_f1_apt10(), 3);

	this.unt2_f1_apt9 = new lib.unt2_f1_apt9();
	this.unt2_f1_apt9.name = "unt2_f1_apt9";
	this.unt2_f1_apt9.parent = this;
	this.unt2_f1_apt9.setTransform(409.25,280.75,1,1,0,0,0,28.2,29.2);
	new cjs.ButtonHelper(this.unt2_f1_apt9, 0, 1, 2, false, new lib.unt2_f1_apt9(), 3);

	this.unt2_f1_apt8 = new lib.unt2_f1_apt8();
	this.unt2_f1_apt8.name = "unt2_f1_apt8";
	this.unt2_f1_apt8.parent = this;
	this.unt2_f1_apt8.setTransform(414.05,207.55,1,1,0,0,0,27.1,21.7);
	new cjs.ButtonHelper(this.unt2_f1_apt8, 0, 1, 2, false, new lib.unt2_f1_apt8(), 3);

	this.unt2_f1_apt7 = new lib.unt2_f1_apt7();
	this.unt2_f1_apt7.name = "unt2_f1_apt7";
	this.unt2_f1_apt7.parent = this;
	this.unt2_f1_apt7.setTransform(414.05,164.2,1,1,0,0,0,27.1,21.7);
	new cjs.ButtonHelper(this.unt2_f1_apt7, 0, 1, 2, false, new lib.unt2_f1_apt7(), 3);

	this.unt2_f1_apt6 = new lib.unt2_f1_apt6();
	this.unt2_f1_apt6.name = "unt2_f1_apt6";
	this.unt2_f1_apt6.parent = this;
	this.unt2_f1_apt6.setTransform(347.2,139.4,1,1,0,0,0,27.4,21.4);
	new cjs.ButtonHelper(this.unt2_f1_apt6, 0, 1, 2, false, new lib.unt2_f1_apt6(), 3);

	this.unt2_f1_apt5 = new lib.unt2_f1_apt5();
	this.unt2_f1_apt5.name = "unt2_f1_apt5";
	this.unt2_f1_apt5.parent = this;
	this.unt2_f1_apt5.setTransform(414.05,121,1,1,0,0,0,27.1,21.5);
	new cjs.ButtonHelper(this.unt2_f1_apt5, 0, 1, 1);

	this.unt2_f1_apt4 = new lib.unt2_f1_apt4();
	this.unt2_f1_apt4.name = "unt2_f1_apt4";
	this.unt2_f1_apt4.parent = this;
	this.unt2_f1_apt4.setTransform(347.2,96.65,1,1,0,0,0,27.4,21.3);
	new cjs.ButtonHelper(this.unt2_f1_apt4, 0, 1, 2, false, new lib.unt2_f1_apt4(), 3);

	this.unt2_f1_apt3 = new lib.unt2_f1_apt3();
	this.unt2_f1_apt3.name = "unt2_f1_apt3";
	this.unt2_f1_apt3.parent = this;
	this.unt2_f1_apt3.setTransform(413.95,77.75,1,1,0,0,0,27,21.7);
	new cjs.ButtonHelper(this.unt2_f1_apt3, 0, 1, 1);

	this.unt2_f1_apt2 = new lib.unt2_f1_apt2();
	this.unt2_f1_apt2.name = "unt2_f1_apt2";
	this.unt2_f1_apt2.parent = this;
	this.unt2_f1_apt2.setTransform(347.2,54.3,1,1,0,0,0,27.4,21);
	new cjs.ButtonHelper(this.unt2_f1_apt2, 0, 1, 2, false, new lib.unt2_f1_apt2(), 3);

	this.unt2_f1_apt1 = new lib.unt2_f1_apt1();
	this.unt2_f1_apt1.name = "unt2_f1_apt1";
	this.unt2_f1_apt1.parent = this;
	this.unt2_f1_apt1.setTransform(416.25,28,1,1,0,0,0,29.3,28);
	new cjs.ButtonHelper(this.unt2_f1_apt1, 0, 1, 2, false, new lib.unt2_f1_apt1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt2_f1_apt1},{t:this.unt2_f1_apt2},{t:this.unt2_f1_apt3},{t:this.unt2_f1_apt4},{t:this.unt2_f1_apt5},{t:this.unt2_f1_apt6},{t:this.unt2_f1_apt7},{t:this.unt2_f1_apt8},{t:this.unt2_f1_apt9},{t:this.unt2_f1_apt10},{t:this.unt2_f1_apt11},{t:this.unt2_f1_apt12},{t:this.unt2_f1_apt13},{t:this.unt2_f1_apt14},{t:this.unt2_f1_apt15},{t:this.unt2_f1_apt16},{t:this.unt2_f1_apt17},{t:this.unt2_f1_apt18},{t:this.unt2_f1_apt19},{t:this.unt2_f1_apt20},{t:this.unt2_f1_apt21},{t:this.unt2_f1_apt22},{t:this.unt2_f1_apt23},{t:this.unt2_f1_apt24},{t:this.unt2_f1_apt25},{t:this.unt2_f1_apt26},{t:this.unt2_f1_apt27},{t:this.unt2_f1_apt28},{t:this.unt2_f1_apt29},{t:this.unt2_f1_apt30}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.unt2floor1, new cjs.Rectangle(0,0,445.5,312.1), null);


(lib.unt1_floor3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.unt1_f3_apt18 = new lib.unt1_f3_apt18();
	this.unt1_f3_apt18.name = "unt1_f3_apt18";
	this.unt1_f3_apt18.parent = this;
	this.unt1_f3_apt18.setTransform(337.45,28.9,1,1,0,0,0,28.1,28.9);
	new cjs.ButtonHelper(this.unt1_f3_apt18, 0, 1, 2, false, new lib.unt1_f3_apt18(), 3);

	this.unt1_f3_apt17 = new lib.unt1_f3_apt17();
	this.unt1_f3_apt17.name = "unt1_f3_apt17";
	this.unt1_f3_apt17.parent = this;
	this.unt1_f3_apt17.setTransform(393.7,29.2,1,1,0,0,0,28.1,29.2);
	new cjs.ButtonHelper(this.unt1_f3_apt17, 0, 1, 2, false, new lib.unt1_f3_apt17(), 3);

	this.unt1_f3_apt16 = new lib.unt1_f3_apt16();
	this.unt1_f3_apt16.name = "unt1_f3_apt16";
	this.unt1_f3_apt16.parent = this;
	this.unt1_f3_apt16.setTransform(331.5,102.05,1,1,0,0,0,26.9,21.6);
	new cjs.ButtonHelper(this.unt1_f3_apt16, 0, 1, 2, false, new lib.unt1_f3_apt16(), 3);

	this.unt1_f3_apt15 = new lib.unt1_f3_apt15();
	this.unt1_f3_apt15.name = "unt1_f3_apt15";
	this.unt1_f3_apt15.parent = this;
	this.unt1_f3_apt15.setTransform(398.9,95.4,1,1,0,0,0,27.9,20.9);
	new cjs.ButtonHelper(this.unt1_f3_apt15, 0, 1, 2, false, new lib.unt1_f3_apt15(), 3);

	this.unt1_f3_apt14 = new lib.unt1_f3_apt14();
	this.unt1_f3_apt14.name = "unt1_f3_apt14";
	this.unt1_f3_apt14.parent = this;
	this.unt1_f3_apt14.setTransform(334.95,156.6,1,1,0,0,0,25.6,33);
	new cjs.ButtonHelper(this.unt1_f3_apt14, 0, 1, 2, false, new lib.unt1_f3_apt14(), 3);

	this.unt1_f3_apt13 = new lib.unt1_f3_apt13();
	this.unt1_f3_apt13.name = "unt1_f3_apt13";
	this.unt1_f3_apt13.parent = this;
	this.unt1_f3_apt13.setTransform(398.9,137.6,1,1,0,0,0,27.9,21.2);
	new cjs.ButtonHelper(this.unt1_f3_apt13, 0, 1, 2, false, new lib.unt1_f3_apt13(), 3);

	this.unt1_f3_apt12 = new lib.unt1_f3_apt12();
	this.unt1_f3_apt12.name = "unt1_f3_apt12";
	this.unt1_f3_apt12.parent = this;
	this.unt1_f3_apt12.setTransform(398.9,180.1,1,1,0,0,0,27.9,21.4);
	new cjs.ButtonHelper(this.unt1_f3_apt12, 0, 1, 2, false, new lib.unt1_f3_apt12(), 3);

	this.unt1_f3_apt11 = new lib.unt1_f3_apt11();
	this.unt1_f3_apt11.name = "unt1_f3_apt11";
	this.unt1_f3_apt11.parent = this;
	this.unt1_f3_apt11.setTransform(389.1,243.85,1,1,0,0,0,34,30.1);
	new cjs.ButtonHelper(this.unt1_f3_apt11, 0, 1, 2, false, new lib.unt1_f3_apt11(), 3);

	this.unt1_f3_apt10 = new lib.unt1_f3_apt10();
	this.unt1_f3_apt10.name = "unt1_f3_apt10";
	this.unt1_f3_apt10.parent = this;
	this.unt1_f3_apt10.setTransform(314.15,176.55,1,1,0,0,0,33.6,25.4);
	new cjs.ButtonHelper(this.unt1_f3_apt10, 0, 1, 2, false, new lib.unt1_f3_apt10(), 3);

	this.unt1_f3_apt9 = new lib.unt1_f3_apt9();
	this.unt1_f3_apt9.name = "unt1_f3_apt9";
	this.unt1_f3_apt9.parent = this;
	this.unt1_f3_apt9.setTransform(323.4,242.85,1,1,0,0,0,31.8,28.6);
	new cjs.ButtonHelper(this.unt1_f3_apt9, 0, 1, 2, false, new lib.unt1_f3_apt9(), 3);

	this.unt1_f3_apt8 = new lib.unt1_f3_apt8();
	this.unt1_f3_apt8.name = "unt1_f3_apt8";
	this.unt1_f3_apt8.parent = this;
	this.unt1_f3_apt8.setTransform(259.25,174.3,1,1,0,0,0,21.4,26.8);
	new cjs.ButtonHelper(this.unt1_f3_apt8, 0, 1, 2, false, new lib.unt1_f3_apt8(), 3);

	this.unt1_f3_apt7 = new lib.unt1_f3_apt7();
	this.unt1_f3_apt7.name = "unt1_f3_apt7";
	this.unt1_f3_apt7.parent = this;
	this.unt1_f3_apt7.setTransform(260.1,242.85,1,1,0,0,0,31.5,28.6);
	new cjs.ButtonHelper(this.unt1_f3_apt7, 0, 1, 2, false, new lib.unt1_f3_apt7(), 3);

	this.unt1_f3_apt6 = new lib.unt1_f3_apt6();
	this.unt1_f3_apt6.name = "unt1_f3_apt6";
	this.unt1_f3_apt6.parent = this;
	this.unt1_f3_apt6.setTransform(206.2,170.45,1,1,0,0,0,31.7,30.7);
	new cjs.ButtonHelper(this.unt1_f3_apt6, 0, 1, 2, false, new lib.unt1_f3_apt6(), 3);

	this.unt1_f3_apt5 = new lib.unt1_f3_apt5();
	this.unt1_f3_apt5.name = "unt1_f3_apt5";
	this.unt1_f3_apt5.parent = this;
	this.unt1_f3_apt5.setTransform(196.95,242.85,1,1,0,0,0,31.6,28.6);
	new cjs.ButtonHelper(this.unt1_f3_apt5, 0, 1, 2, false, new lib.unt1_f3_apt5(), 3);

	this.unt1_f3_apt4 = new lib.unt1_f3_apt4();
	this.unt1_f3_apt4.name = "unt1_f3_apt4";
	this.unt1_f3_apt4.parent = this;
	this.unt1_f3_apt4.setTransform(142.85,170.45,1,1,0,0,0,31.6,30.7);
	new cjs.ButtonHelper(this.unt1_f3_apt4, 0, 1, 2, false, new lib.unt1_f3_apt4(), 3);

	this.unt1_f3_apt3 = new lib.unt1_f3_apt3();
	this.unt1_f3_apt3.name = "unt1_f3_apt3";
	this.unt1_f3_apt3.parent = this;
	this.unt1_f3_apt3.setTransform(134.05,242.85,1,1,0,0,0,31.4,28.6);
	new cjs.ButtonHelper(this.unt1_f3_apt3, 0, 1, 2, false, new lib.unt1_f3_apt3(), 3);

	this.unt1_f3_apt2 = new lib.unt1_f3_apt2();
	this.unt1_f3_apt2.name = "unt1_f3_apt2";
	this.unt1_f3_apt2.parent = this;
	this.unt1_f3_apt2.setTransform(44.9,172.75,1,1,0,0,0,44.9,28.8);
	new cjs.ButtonHelper(this.unt1_f3_apt2, 0, 1, 2, false, new lib.unt1_f3_apt2(), 3);

	this.unt1_f3_apt1 = new lib.unt1_f3_apt1();
	this.unt1_f3_apt1.name = "unt1_f3_apt1";
	this.unt1_f3_apt1.parent = this;
	this.unt1_f3_apt1.setTransform(44.9,242.55,1,1,0,0,0,44.9,28.8);
	new cjs.ButtonHelper(this.unt1_f3_apt1, 0, 1, 2, false, new lib.unt1_f3_apt1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt1_f3_apt1},{t:this.unt1_f3_apt2},{t:this.unt1_f3_apt3},{t:this.unt1_f3_apt4},{t:this.unt1_f3_apt5},{t:this.unt1_f3_apt6},{t:this.unt1_f3_apt7},{t:this.unt1_f3_apt8},{t:this.unt1_f3_apt9},{t:this.unt1_f3_apt10},{t:this.unt1_f3_apt11},{t:this.unt1_f3_apt12},{t:this.unt1_f3_apt13},{t:this.unt1_f3_apt14},{t:this.unt1_f3_apt15},{t:this.unt1_f3_apt16},{t:this.unt1_f3_apt17},{t:this.unt1_f3_apt18}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.unt1_floor3, new cjs.Rectangle(0,0,427,274), null);


(lib.unt1_floor2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.unt1_f2_apt18 = new lib.unt1_f2_apt18();
	this.unt1_f2_apt18.name = "unt1_f2_apt18";
	this.unt1_f2_apt18.parent = this;
	this.unt1_f2_apt18.setTransform(337.45,28.9,1,1,0,0,0,28.1,28.9);
	new cjs.ButtonHelper(this.unt1_f2_apt18, 0, 1, 2, false, new lib.unt1_f2_apt18(), 3);

	this.unt1_f2_apt17 = new lib.unt1_f2_apt17();
	this.unt1_f2_apt17.name = "unt1_f2_apt17";
	this.unt1_f2_apt17.parent = this;
	this.unt1_f2_apt17.setTransform(393.7,29.2,1,1,0,0,0,28.1,29.2);
	new cjs.ButtonHelper(this.unt1_f2_apt17, 0, 1, 2, false, new lib.unt1_f2_apt17(), 3);

	this.unt1_f2_apt16 = new lib.unt1_f2_apt16();
	this.unt1_f2_apt16.name = "unt1_f2_apt16";
	this.unt1_f2_apt16.parent = this;
	this.unt1_f2_apt16.setTransform(331.5,102.05,1,1,0,0,0,26.9,21.6);
	new cjs.ButtonHelper(this.unt1_f2_apt16, 0, 1, 2, false, new lib.unt1_f2_apt16(), 3);

	this.unt1_f2_apt15 = new lib.unt1_f2_apt15();
	this.unt1_f2_apt15.name = "unt1_f2_apt15";
	this.unt1_f2_apt15.parent = this;
	this.unt1_f2_apt15.setTransform(398.9,95.4,1,1,0,0,0,27.9,20.9);
	new cjs.ButtonHelper(this.unt1_f2_apt15, 0, 1, 2, false, new lib.unt1_f2_apt15(), 3);

	this.unt1_f2_apt14 = new lib.unt1_f2_apt14();
	this.unt1_f2_apt14.name = "unt1_f2_apt14";
	this.unt1_f2_apt14.parent = this;
	this.unt1_f2_apt14.setTransform(334.95,156.6,1,1,0,0,0,25.6,33);
	new cjs.ButtonHelper(this.unt1_f2_apt14, 0, 1, 2, false, new lib.unt1_f2_apt14(), 3);

	this.unt1_f2_apt13 = new lib.unt1_f2_apt13();
	this.unt1_f2_apt13.name = "unt1_f2_apt13";
	this.unt1_f2_apt13.parent = this;
	this.unt1_f2_apt13.setTransform(398.9,137.6,1,1,0,0,0,27.9,21.2);
	new cjs.ButtonHelper(this.unt1_f2_apt13, 0, 1, 2, false, new lib.unt1_f2_apt13(), 3);

	this.unt1_f2_apt12 = new lib.unt1_f2_apt12();
	this.unt1_f2_apt12.name = "unt1_f2_apt12";
	this.unt1_f2_apt12.parent = this;
	this.unt1_f2_apt12.setTransform(398.9,180.1,1,1,0,0,0,27.9,21.4);
	new cjs.ButtonHelper(this.unt1_f2_apt12, 0, 1, 2, false, new lib.unt1_f2_apt12(), 3);

	this.unt1_f2_apt11 = new lib.unt1_f2_apt11();
	this.unt1_f2_apt11.name = "unt1_f2_apt11";
	this.unt1_f2_apt11.parent = this;
	this.unt1_f2_apt11.setTransform(389.1,243.85,1,1,0,0,0,34,30.1);
	new cjs.ButtonHelper(this.unt1_f2_apt11, 0, 1, 2, false, new lib.unt1_f2_apt11(), 3);

	this.unt1_f2_apt10 = new lib.unt1_f2_apt10();
	this.unt1_f2_apt10.name = "unt1_f2_apt10";
	this.unt1_f2_apt10.parent = this;
	this.unt1_f2_apt10.setTransform(314.15,176.55,1,1,0,0,0,33.6,25.4);
	new cjs.ButtonHelper(this.unt1_f2_apt10, 0, 1, 2, false, new lib.unt1_f2_apt10(), 3);

	this.unt1_f2_apt9 = new lib.unt1_f2_apt9();
	this.unt1_f2_apt9.name = "unt1_f2_apt9";
	this.unt1_f2_apt9.parent = this;
	this.unt1_f2_apt9.setTransform(323.4,242.85,1,1,0,0,0,31.8,28.6);
	new cjs.ButtonHelper(this.unt1_f2_apt9, 0, 1, 2, false, new lib.unt1_f2_apt9(), 3);

	this.unt1_f2_apt8 = new lib.unt1_f2_apt8();
	this.unt1_f2_apt8.name = "unt1_f2_apt8";
	this.unt1_f2_apt8.parent = this;
	this.unt1_f2_apt8.setTransform(259.25,174.3,1,1,0,0,0,21.4,26.8);
	new cjs.ButtonHelper(this.unt1_f2_apt8, 0, 1, 2, false, new lib.unt1_f2_apt8(), 3);

	this.unt1_f2_apt7 = new lib.unt1_f2_apt7();
	this.unt1_f2_apt7.name = "unt1_f2_apt7";
	this.unt1_f2_apt7.parent = this;
	this.unt1_f2_apt7.setTransform(260.1,242.85,1,1,0,0,0,31.5,28.6);
	new cjs.ButtonHelper(this.unt1_f2_apt7, 0, 1, 2, false, new lib.unt1_f2_apt7(), 3);

	this.unt1_f2_apt6 = new lib.unt1_f2_apt6();
	this.unt1_f2_apt6.name = "unt1_f2_apt6";
	this.unt1_f2_apt6.parent = this;
	this.unt1_f2_apt6.setTransform(206.2,170.45,1,1,0,0,0,31.7,30.7);
	new cjs.ButtonHelper(this.unt1_f2_apt6, 0, 1, 2, false, new lib.unt1_f2_apt6(), 3);

	this.unt1_f2_apt5 = new lib.unt1_f2_apt5();
	this.unt1_f2_apt5.name = "unt1_f2_apt5";
	this.unt1_f2_apt5.parent = this;
	this.unt1_f2_apt5.setTransform(196.95,242.85,1,1,0,0,0,31.6,28.6);
	new cjs.ButtonHelper(this.unt1_f2_apt5, 0, 1, 2, false, new lib.unt1_f2_apt5(), 3);

	this.unt1_f2_apt4 = new lib.unt1_f2_apt4();
	this.unt1_f2_apt4.name = "unt1_f2_apt4";
	this.unt1_f2_apt4.parent = this;
	this.unt1_f2_apt4.setTransform(142.85,170.45,1,1,0,0,0,31.6,30.7);
	new cjs.ButtonHelper(this.unt1_f2_apt4, 0, 1, 2, false, new lib.unt1_f2_apt4(), 3);

	this.unt1_f2_apt3 = new lib.unt1_f2_apt3();
	this.unt1_f2_apt3.name = "unt1_f2_apt3";
	this.unt1_f2_apt3.parent = this;
	this.unt1_f2_apt3.setTransform(134.05,242.85,1,1,0,0,0,31.4,28.6);
	new cjs.ButtonHelper(this.unt1_f2_apt3, 0, 1, 2, false, new lib.unt1_f2_apt3(), 3);

	this.unt1_f2_apt2 = new lib.unt1_f2_apt2();
	this.unt1_f2_apt2.name = "unt1_f2_apt2";
	this.unt1_f2_apt2.parent = this;
	this.unt1_f2_apt2.setTransform(44.9,172.75,1,1,0,0,0,44.9,28.8);
	new cjs.ButtonHelper(this.unt1_f2_apt2, 0, 1, 2, false, new lib.unt1_f2_apt2(), 3);

	this.unt1_f2_apt1 = new lib.unt1_f2_apt1();
	this.unt1_f2_apt1.name = "unt1_f2_apt1";
	this.unt1_f2_apt1.parent = this;
	this.unt1_f2_apt1.setTransform(44.9,242.55,1,1,0,0,0,44.9,28.8);
	new cjs.ButtonHelper(this.unt1_f2_apt1, 0, 1, 2, false, new lib.unt1_f2_apt1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt1_f2_apt1},{t:this.unt1_f2_apt2},{t:this.unt1_f2_apt3},{t:this.unt1_f2_apt4},{t:this.unt1_f2_apt5},{t:this.unt1_f2_apt6},{t:this.unt1_f2_apt7},{t:this.unt1_f2_apt8},{t:this.unt1_f2_apt9},{t:this.unt1_f2_apt10},{t:this.unt1_f2_apt11},{t:this.unt1_f2_apt12},{t:this.unt1_f2_apt13},{t:this.unt1_f2_apt14},{t:this.unt1_f2_apt15},{t:this.unt1_f2_apt16},{t:this.unt1_f2_apt17},{t:this.unt1_f2_apt18}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.unt1_floor2, new cjs.Rectangle(0,0,427,274), null);


(lib.unt1_floor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.unt1_f1_apt18 = new lib.unt1_f1_apt18();
	this.unt1_f1_apt18.name = "unt1_f1_apt18";
	this.unt1_f1_apt18.parent = this;
	this.unt1_f1_apt18.setTransform(337.45,28.9,1,1,0,0,0,28.1,28.9);
	new cjs.ButtonHelper(this.unt1_f1_apt18, 0, 1, 2, false, new lib.unt1_f1_apt18(), 3);

	this.unt1_f1_apt17 = new lib.unt1_f1_apt17();
	this.unt1_f1_apt17.name = "unt1_f1_apt17";
	this.unt1_f1_apt17.parent = this;
	this.unt1_f1_apt17.setTransform(393.7,29.2,1,1,0,0,0,28.1,29.2);
	new cjs.ButtonHelper(this.unt1_f1_apt17, 0, 1, 2, false, new lib.unt1_f1_apt17(), 3);

	this.unt1_f1_apt16 = new lib.unt1_f1_apt16();
	this.unt1_f1_apt16.name = "unt1_f1_apt16";
	this.unt1_f1_apt16.parent = this;
	this.unt1_f1_apt16.setTransform(331.5,102.05,1,1,0,0,0,26.9,21.6);
	new cjs.ButtonHelper(this.unt1_f1_apt16, 0, 1, 2, false, new lib.unt1_f1_apt16(), 3);

	this.unt1_f1_apt15 = new lib.unt1_f1_apt15();
	this.unt1_f1_apt15.name = "unt1_f1_apt15";
	this.unt1_f1_apt15.parent = this;
	this.unt1_f1_apt15.setTransform(398.9,95.4,1,1,0,0,0,27.9,20.9);
	new cjs.ButtonHelper(this.unt1_f1_apt15, 0, 1, 2, false, new lib.unt1_f1_apt15(), 3);

	this.unt1_f1_apt14 = new lib.unt1_f1_apt14();
	this.unt1_f1_apt14.name = "unt1_f1_apt14";
	this.unt1_f1_apt14.parent = this;
	this.unt1_f1_apt14.setTransform(334.95,156.6,1,1,0,0,0,25.6,33);
	new cjs.ButtonHelper(this.unt1_f1_apt14, 0, 1, 2, false, new lib.unt1_f1_apt14(), 3);

	this.unt1_f1_apt13 = new lib.unt1_f1_apt13();
	this.unt1_f1_apt13.name = "unt1_f1_apt13";
	this.unt1_f1_apt13.parent = this;
	this.unt1_f1_apt13.setTransform(398.9,137.6,1,1,0,0,0,27.9,21.2);
	new cjs.ButtonHelper(this.unt1_f1_apt13, 0, 1, 2, false, new lib.unt1_f1_apt13(), 3);

	this.unt1_f1_apt12 = new lib.unt1_f1_apt12();
	this.unt1_f1_apt12.name = "unt1_f1_apt12";
	this.unt1_f1_apt12.parent = this;
	this.unt1_f1_apt12.setTransform(398.9,180.1,1,1,0,0,0,27.9,21.4);
	new cjs.ButtonHelper(this.unt1_f1_apt12, 0, 1, 2, false, new lib.unt1_f1_apt12(), 3);

	this.unt1_f1_apt11 = new lib.unt1_f1_apt11();
	this.unt1_f1_apt11.name = "unt1_f1_apt11";
	this.unt1_f1_apt11.parent = this;
	this.unt1_f1_apt11.setTransform(389.1,243.85,1,1,0,0,0,34,30.1);
	new cjs.ButtonHelper(this.unt1_f1_apt11, 0, 1, 2, false, new lib.unt1_f1_apt11(), 3);

	this.unt1_f1_apt10 = new lib.unt1_f1_apt10();
	this.unt1_f1_apt10.name = "unt1_f1_apt10";
	this.unt1_f1_apt10.parent = this;
	this.unt1_f1_apt10.setTransform(314.15,176.55,1,1,0,0,0,33.6,25.4);
	new cjs.ButtonHelper(this.unt1_f1_apt10, 0, 1, 2, false, new lib.unt1_f1_apt10(), 3);

	this.unt1_f1_apt9 = new lib.unt1_f1_apt9();
	this.unt1_f1_apt9.name = "unt1_f1_apt9";
	this.unt1_f1_apt9.parent = this;
	this.unt1_f1_apt9.setTransform(323.4,242.85,1,1,0,0,0,31.8,28.6);
	new cjs.ButtonHelper(this.unt1_f1_apt9, 0, 1, 2, false, new lib.unt1_f1_apt9(), 3);

	this.unt1_f1_apt8 = new lib.unt1_f1_apt8();
	this.unt1_f1_apt8.name = "unt1_f1_apt8";
	this.unt1_f1_apt8.parent = this;
	this.unt1_f1_apt8.setTransform(259.25,174.3,1,1,0,0,0,21.4,26.8);
	new cjs.ButtonHelper(this.unt1_f1_apt8, 0, 1, 2, false, new lib.unt1_f1_apt8(), 3);

	this.unt1_f1_apt7 = new lib.unt1_f1_apt7();
	this.unt1_f1_apt7.name = "unt1_f1_apt7";
	this.unt1_f1_apt7.parent = this;
	this.unt1_f1_apt7.setTransform(260.1,242.85,1,1,0,0,0,31.5,28.6);
	new cjs.ButtonHelper(this.unt1_f1_apt7, 0, 1, 2, false, new lib.unt1_f1_apt7(), 3);

	this.unt1_f1_apt6 = new lib.unt1_f1_apt6();
	this.unt1_f1_apt6.name = "unt1_f1_apt6";
	this.unt1_f1_apt6.parent = this;
	this.unt1_f1_apt6.setTransform(206.2,170.45,1,1,0,0,0,31.7,30.7);
	new cjs.ButtonHelper(this.unt1_f1_apt6, 0, 1, 2, false, new lib.unt1_f1_apt6(), 3);

	this.unt1_f1_apt5 = new lib.unt1_f1_apt5();
	this.unt1_f1_apt5.name = "unt1_f1_apt5";
	this.unt1_f1_apt5.parent = this;
	this.unt1_f1_apt5.setTransform(196.95,242.85,1,1,0,0,0,31.6,28.6);
	new cjs.ButtonHelper(this.unt1_f1_apt5, 0, 1, 2, false, new lib.unt1_f1_apt5(), 3);

	this.unt1_f1_apt4 = new lib.unt1_f1_apt4();
	this.unt1_f1_apt4.name = "unt1_f1_apt4";
	this.unt1_f1_apt4.parent = this;
	this.unt1_f1_apt4.setTransform(142.85,170.45,1,1,0,0,0,31.6,30.7);
	new cjs.ButtonHelper(this.unt1_f1_apt4, 0, 1, 2, false, new lib.unt1_f1_apt4(), 3);

	this.unt1_f1_apt3 = new lib.unt1_f1_apt3();
	this.unt1_f1_apt3.name = "unt1_f1_apt3";
	this.unt1_f1_apt3.parent = this;
	this.unt1_f1_apt3.setTransform(134.05,242.85,1,1,0,0,0,31.4,28.6);
	new cjs.ButtonHelper(this.unt1_f1_apt3, 0, 1, 2, false, new lib.unt1_f1_apt3(), 3);

	this.unt1_f1_apt2 = new lib.unt1_f1_apt2();
	this.unt1_f1_apt2.name = "unt1_f1_apt2";
	this.unt1_f1_apt2.parent = this;
	this.unt1_f1_apt2.setTransform(44.9,172.75,1,1,0,0,0,44.9,28.8);
	new cjs.ButtonHelper(this.unt1_f1_apt2, 0, 1, 2, false, new lib.unt1_f1_apt2(), 3);

	this.unt1_f1_apt1 = new lib.unt1_f1_apt1();
	this.unt1_f1_apt1.name = "unt1_f1_apt1";
	this.unt1_f1_apt1.parent = this;
	this.unt1_f1_apt1.setTransform(44.9,242.55,1,1,0,0,0,44.9,28.8);
	new cjs.ButtonHelper(this.unt1_f1_apt1, 0, 1, 2, false, new lib.unt1_f1_apt1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt1_f1_apt1},{t:this.unt1_f1_apt2},{t:this.unt1_f1_apt3},{t:this.unt1_f1_apt4},{t:this.unt1_f1_apt5},{t:this.unt1_f1_apt6},{t:this.unt1_f1_apt7},{t:this.unt1_f1_apt8},{t:this.unt1_f1_apt9},{t:this.unt1_f1_apt10},{t:this.unt1_f1_apt11},{t:this.unt1_f1_apt12},{t:this.unt1_f1_apt13},{t:this.unt1_f1_apt14},{t:this.unt1_f1_apt15},{t:this.unt1_f1_apt16},{t:this.unt1_f1_apt17},{t:this.unt1_f1_apt18}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.unt1_floor1, new cjs.Rectangle(0,0,427,274), null);


(lib.Scene_1_Background_Garden = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Background_Garden
	this.instance = new lib.Asset1();
	this.instance.parent = this;
	this.instance.setTransform(-21,23,0.325,0.325);

	this.instance_1 = new lib.garden();
	this.instance_1.parent = this;
	this.instance_1.setTransform(609.3,439.8,1,1,0,0,0,630.3,416.8);
	this.instance_1.alpha = 0.3984;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},30).wait(18).to({_off:false},0).to({_off:true},6).wait(10).to({_off:false},0).to({_off:true},6).wait(10).to({_off:false},0).to({_off:true},6).wait(9).to({_off:false},0).to({_off:true},6).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({_off:true},18).wait(6).to({_off:false},0).to({_off:true},10).wait(6).to({_off:false},0).to({_off:true},10).wait(6).to({_off:false},0).to({_off:true},9).wait(6).to({_off:false},0).wait(9));

}).prototype = p = new cjs.MovieClip();


(lib.FloorMenuClip2000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Back
	this.backbutton = new lib.Backbutton();
	this.backbutton.name = "backbutton";
	this.backbutton.parent = this;
	this.backbutton.setTransform(-685.35,-358.7,2.467,2.467,0,0,0,0.3,0);
	this.backbutton.visible = false;
	new cjs.ButtonHelper(this.backbutton, 0, 1, 2, false, new lib.Backbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.backbutton).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-686.1,-358.7,145.60000000000002,72.30000000000001);


(lib.FloorMenuClip1000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Back
	this.backbutton = new lib.Backbutton();
	this.backbutton.name = "backbutton";
	this.backbutton.parent = this;
	this.backbutton.setTransform(-685.35,-358.7,2.467,2.467,0,0,0,0.3,0);
	this.backbutton.visible = false;
	new cjs.ButtonHelper(this.backbutton, 0, 1, 2, false, new lib.Backbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.backbutton).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-686.1,-358.7,145.60000000000002,72.30000000000001);


(lib.Building1000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Outlines
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").p("Abj0fIAAgtIAkAAIAAgNIDmAAIAAAOIAqAAIAAApIANAAIAADhIgNAAIAAAtIgqAAAbj0fIAAA+IDFAAIAADNIBFAAIAAEEIgbAAAfSpwIBXAAIAADLIg8AAIAADYIm1AAIgFAAEAgpgGlIAhAAIAAAdIANAAIAACeIgNAAIAAAdIAAAfIANAAIAACeIgNAAIAAAaIgkAAIAAABIAADOIAeAAIAAAiIATAAIAACbIgNAAIAAAiIgjAAIg6AAIAAjfIm1AAIgFAAAXx0fIDyAAAP2wUIgrAAIAAgtIgMAAIAAjhIAMAAIAAgpIArAAIAAgOIDlAAIAAANIAkAAIAAAtIDyAAIAAIKAP2wUIBEAAIAAjNIDFAAIAAg+AUfqCIAAAFIAABJIAfAAIAZAAAU+qCIAAAFIAABJASlqCIAAAFIAABJIAhAAIAdAAIAfAAIAdAAARNqCIAAAFIAABJIAcAAIAfAAIAdAAARpqCIAAAFIAABJASIqCIAAAFIAABJATGqCIAAAFIAABJATjqCIAAAFIAABJAUCqCIAAAFIAABJAWuiFIgFAAImpAAIhIAAIAAgyIgcAAIAAgaIgNAAIAAh5IANAAIAAgeIAZAAIAAjMIAgAAATJKGIAAgFIAAhpIBAhAIBBhCIBfAAIAFAAAUJHYIA2A2IADADAftjNIAADYIA5AAEAhKgDNIhdAAAftDZIA5AAEAgnAG4IAADOIgXAAEAgQAMAIAiAAIAAIAIhpAAIAABMIgdAAIAAAOIh8AAIAAgNIgfAAIAAglIjPAAIAAh2Ii6AAIjCAAIAACOIjzAAIAAgdAWIMAIAAAFIAAGtAfJUAIi4AAIAAAoAP2sVIAAj/Ai1A5IAAgRIAaAAIAAgMICgAAIAAAMIAaAAIAAAUIDVAAIAABQIDLAAIAAgWIAbAAIAAgNIB6AAIAAAMIAaAAIAAAXIAxAAIAABNIjgAAIAAhNAmFA5IDQAAIAABkIDUAAIAAhhAQAiFIAAjjIhLAAAO/COIBBhBIAAjSAKfDZIDVAAIBLhLIFKFKA6UDVIAAiDIAeAAIAAgMIC4AAIAAAMIAeAAIAAASIDNAAIAAAYA6UDVID0AAIAAhxA/rKFIhrAAIAAmwIHCAAAsnA7IAAgTIAWAAIAAgMICfAAIAAAMIAcAAIAAARIAABkIjRAAgAxJFfIAFAAIBHAAIAAggIAAgcIAAggIAAgZAxJE/IAFAAIBHAAAxJEjIAFAAIBHAAAxJEDIAFAAIBHAAAyGHUIgFAAIhIAAIAAAfIAAAZAyGG3IgFAAIhIAAIAAAdAyGGYIgFAAIhIAAAzTGAIAAAYIAAAfAyGHzIgFAAIhIAAAv9HYIAAgfIAAgdIAAghIAAgcAxJHYIAFAAIBHAAAxJG5IAFAAIBHAAAxJGcIAFAAIBHAAAxJF7IAFAAIBHAAAxJH1IAFAAIBHAAAv9IMIAAgXIAAgdAv9B8IAAhBIDWAAAzTSUIAACNIjNAAIAAASIgeAAIAAANIi4AAIAAgNIgeAAIAAiDID0AAIAABxAuQSwIjDAAIAAgcAqbUlIAAAbIj1AAIAAiQID1AAgA6USwInCAAIAAmwIBrAAAMNMAIAAAFIAAIeAKfKGIAAgFIAAmoAJVUjIAAAdIj3AAIAAiRID3AAgATGSyIjzAAIAABxIjGAAIi4AAACXMAIAAAFIAAGqIjDAAIAACRIj2AAIAAgbIAAh2ID2AAAD0CMIAAH1IAAAEAngMAIAAAFIAAIgIi7AAAmFA5IAAJIIAAAFAkiUlIi+AAAFeSvIjHAAApWA5IDRAAAQ1o0IAYAA");
	this.shape.setTransform(213.975,137.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221F20").s().p("AxlPVIiAAAIgFAAIAAmPIjKAAIAAAMIhcAAIAAgMIntAAIAAgFIAAh7IAAgFIHtAAIAAgMIBcAAIAAAMIDKAAIAAh0IAFAAIBIAAIAAgZIAAgfIAAgdIAAgfIAAgYIhIAAIgFAAIAAkDIAFAAIDWAAIAFAAIAABtIgFAAIhHAAIAAAZIgFAAIAFAAIAAAgIgFAAIAFAAIAAAcIgFAAIAFAAIAAAgIgFAAIAFAAIAAAcIgFAAIAFAAIAAAhIgFAAIAFAAIAAAdIgFAAIAFAAIAAAfIgFAAIAFAAIAAAdIgFAAIAFAAIAAAXIBHAAIAFAAIAAB1ICTAAIAAgNIBcAAIAAANIGEAAIGHAAIAAgNIBaAAIAAANICYAAICpAAIAAgNIBdAAIAAANIClAAIEaAAIAAAKIBWAAIAAgKIC6AAIBWAAIAbgcQgIgKgFgOQgLgiAcgcIABgBQAcgcAiAMQANAFAKAIIAVgVIAAhgIAAiwIAWAAIAAhXIgWAAIAAkUIAAiuIgKAAIAAhVIAKAAIAAinIhSAAIAAgFIAAhJIgZAAIAAgFIAAAFIgfAAIAAgFIAAAFIgdAAIAAgFIAAAFIgfAAIAAgFIAAAFIgdAAIAAgFIAAAFIggAAIAAgFIAAAFIgdAAIAAgFIAAAFIggAAIAAgFIAAAFIgcAAIAAgFIAAAFIgYAAIAABJIAAAFIhfAAIAAgFIAAjhIAgAAIH8AAIHgAAIAAAFIAACgIAAAFImaAAIAAClIgQAAIAABKIAQAAIAACvIgFAAIAFAAIAACqIgQAAIAABaIAQAAIAACiIgFAAIAFAAIAACxIgQAAIAABWIAQAAIAAChIHYAAIAAAFIAAB6IAAAFIiIAAIAAAMIhiAAIAAgMImeAAIAAgFIAAAFIl5AAIAAAMIhfAAIAAgMIiiAAIAAgFIAAAFIieAAIAAAMIhXAAIAAgMImBAAIAAgFIAAAFIl8AAIAAAMIhZAAIAAgMIijAAIAAgFIAAAFIidAAIAAAMIhdAAIAAgMIl0AAIAAGPgAzgI8IAAGPIB2AAIAAmPIGIAAIAAAMIBJAAIAAgMIFUAAIAAAMIBFAAIAAgMIMSAAIAAAMIBCAAIAAgMIFUAAIAAAMIBLAAIAAgMIMrAAIAAAMIBOAAIAAgMICIAAIAAhwInYAAIAAihIgQAAIAAhqIAQAAIAAk/IgQAAIAAhuIAQAAIAAlFIgQAAIAAheIAQAAIAAilIGaAAIAAiWIvoAAIAADSIBLAAIAAhOIE2AAIAABOIBSAAIAAC7IgKAAIAABBIAKAAIAAHCIAWAAIAABrIgWAAIAAEKIgfAfIgEgDQgJgJgOgGQgbgJgYAXIgBABQgYAYAKAcQAEAOAKAJIADAEIglAmIkKAAIAAAKIhrAAIAAgKIm+AAIAAgNIhJAAIAAANIlVAAIAAgNIhGAAIAAANIsfAAIAAgNIhIAAIAAANIinAAIAAh1IhMAAIAAk2IBMAAIAAhZIjMAAIAADvIBNAAIAACgIhNAAIAAB0IjeAAIAAgMIhIAAIAAAMIntAAIAABxIHtAAIAAAMIBIAAIAAgMgAS3HHIAAgFgAKNHHIAAgFgAmXHHIAAgFgADiHGIAAgEgAUwFSIgDgDgAyYE0IgFAAgAyYEVIgFAAgAyYD4IgFAAgAyYDZIgFAAgAWcDXIgFAAgAWclEIgFAAg");
	this.shape_1.setTransform(215.75,156.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A17D56").s().p("AzgPLIAAmPIjeAAIAAAMIhIAAIAAgMIntAAIAAhxIHtAAIAAgMIBIAAIAAAMIDeAAIAAh0IBNAAIAAigIhNAAIAAjvIDMAAIAABZIhMAAIAAE2IBMAAIAAB1ICnAAIAAgNIBIAAIAAANIMfAAIAAgNIBGAAIAAANIFVAAIAAgNIBJAAIAAANIG+AAIAAAKIBrAAIAAgKIEKAAIAlgmIgDgEQgKgJgEgOQgKgcAYgYIABgBQAYgXAbAJQAOAGAJAJIAEADIAfgfIAAkKIAWAAIAAhrIgWAAIAAnCIgKAAIAAhBIAKAAIAAi7IhSAAIAAhOIk2AAIAABOIhLAAIAAjSIPoAAIAACWImaAAIAAClIgQAAIAABeIAQAAIAAFFIgQAAIAABuIAQAAIAAE/IgQAAIAABqIAQAAIAAChIHYAAIAABwIiIAAIAAAMIhOAAIAAgMIsrAAIAAAMIhLAAIAAgMIlUAAIAAAMIhCAAIAAgMIsSAAIAAAMIhFAAIAAgMIlUAAIAAAMIhJAAIAAgMImIAAIAAGPg");
	this.shape_2.setTransform(215.75,156.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0B59E").s().p("AyFJFIAAgXIAAgdIAAgfIAAgeIAAggIBHAAIAAAgIhHAAIBHAAIAAAeIhHAAIBHAAIAAAfIhHAAIBHAAIAAAdIhHAAIBHAAIAAAXgA0UJFIAAgZIAAgfIAAgdIBIAAIAAAdIhIAAIBIAAIAAAfIhIAAIBIAAIAAAZgA0UHwIAAgfIAAgYIBIAAIAAAYIhIAAIBIAAIAAAfgAzMHRgAyFG0IAAgdIBHAAIAAAdgAyFG0gAw+GXIhHAAIAAgfIAAgcIAAggIAAgZIBHAAIAAAZIhHAAIBHAAIAAAgIhHAAIBHAAIAAAcIhHAAIBHAAIAAAfgAyFGXgAw+E8gAT8n8IAAhIIAABIIgeAAIAAhIIAABIIgdAAIAAhIIAABIIggAAIAAhIIAABIIgdAAIAAhIIAABIIggAAIAAhIIAABIIgdAAIAAhIIAABIIgfAAIAAhIIAABIIgcAAIAAhIIAcAAIAfAAIAdAAIAgAAIAdAAIAgAAIAdAAIAeAAIAZAAIAABIgAP0n8IAAhIIAYAAIAABIgAQMpEg");
	this.shape_3.setTransform(220.5,131.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(5));

	// floor3
	this.unt1_floor3 = new lib.unt1_floor3();
	this.unt1_floor3.name = "unt1_floor3";
	this.unt1_floor3.parent = this;
	this.unt1_floor3.setTransform(214,137.5,1,1,0,0,0,213.5,137);
	this.unt1_floor3.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.unt1_floor3).wait(5));

	// floor2
	this.unt1_floor2 = new lib.unt1_floor2();
	this.unt1_floor2.name = "unt1_floor2";
	this.unt1_floor2.parent = this;
	this.unt1_floor2.setTransform(214,137.5,1,1,0,0,0,213.5,137);
	this.unt1_floor2.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.unt1_floor2).wait(5));

	// Floor1
	this.unt1_floor1 = new lib.unt1_floor1();
	this.unt1_floor1.name = "unt1_floor1";
	this.unt1_floor1.parent = this;
	this.unt1_floor1.setTransform(214,137.5,1,1,0,0,0,213.5,137);

	this.timeline.addTween(cjs.Tween.get(this.unt1_floor1).wait(5));

	// Layer_5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.498)").s().p("EhZtA/FMAAAh+JMCzbAAAMAAAB+Jg");
	this.shape_4.setTransform(219.525,174.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354.7,-229.2,1148.5,807.4000000000001);


(lib.Building2000_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Outlines
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("Adu3dIAAguIAoAAIAAgNIDoAAIAAANIApAAIAAAoIANAAIAADkIgNAAIAAApIgqAAIhIAAIAAjJIjHAAgEAh9gTWIAADvIgZAAIAADRIAWAAIAAAWIAMAAIAAB/IgMAAIAAAZIgVAAIAAAzIAAAwIAXAAIAAAXIANAAIAAB8IgNAAIAAAeIgYAAIAADNIAADREAhkgMWIhEAAIAADhIAADhIBEAAAZq1yIAAAOIhqAAIAAAJIglAAIAAAuIgcAAIAABEIgZAAIgeAAIAAhEIAeAAIAAguIgeAAIgeAAIgeAAIhHAAIAAAbIgKAAIAABmIAKAAIAAAPIgaAAIAAinIF/AAIAAhrIEEAAAWI0tIAAguAXb1bIgcAAIAAAuAW/1bIgZAAAWm0tIAZAAAXbzpIgcAAIAAAeAWmzIIAAgDIgeAAIAAgeIgeAAIgeAAIgoAAIAAhEIAoAAIAAguAWIzIIAAgDAXbzIIAAgDIgcAAAW/zIIAAgDAXbzpIAAAeIAVAAIAAClIgNAAIAABPIANAAIAACxIAAC3IgNAAIAABJIANAAIAACqIAACmIgNAAIAABPIANAAIAAC3IAAIjIAABfIgZAZQgMgKgRgFQgggJgYAYQgYAYAJAhQAFARAKALIgeAdIhegBIAAABIonAAImiAAIp6AAIAAnwIDWAAIAAgcIAZAAIAAgBIAAgeICcAAIAAAeIAAABIAZAAIDWAAIAAAcIjWAAIAAgcAWmzLIAAgeAWmzLIAZAAAZqvnIAAioIANAAIAAhTIgNAAIAAiCAWm0tIAABEAXb0tIAABEAVM0tIAeAAIAAguAVMzIIAAgDIAAgeIAAhEAVqzIIAAgDIAeAAAVMzLIAeAAIAAgeIAAhEIAeAAAUFzLIBHAAAQ3zLIC0AAAQ3zLIAADNIg4AAIgoAAIAAgaIgMAAIAAiVIAMAAIAAgegAP/pKIAAjcIAAjYAZqo1IAAivIANAAIAAhUIgNAAIAAivAXwsmInxAAAZqiHIAAivIANAAIAAhTIgNAAIAAisAQ3l8IAAjBIg4AAIAAgNAP/iuIAAgOIA4AAIAAjAIhgAAIAAgdIgMAAIAAiWIANAAIAAgbIAnAAARCAwIhDAAIAAjeIgoAAIAAgeIgMAAIAAiYIAMAAIAAgYAP4FIIBKhJIAAjPIGuAAAZqEqIAAivIANAAIAAhSIgNAAIAAiwAXwl8Im5AAEAhlgI1IhFAAIm2AAEAggAEqIAAjgIBEAAIAYAAIAAAWIANAAIAACAIgNAAIAAAZIgWAAIAAAxIAAAyIAWAAIAAAZIAMAAIAAB6IgMAAIAAAbIgXAAIhFAAIAAjgIm2AAEAhmAEqIhGAAEAhkgPnIn6AAEAhkgCHIn6AAAeuLbIgfAAIgdAAIghAAIgcAAIggAAIgcAAIggAAIgeAAIhRAAIAAivIANAAIAAhUIgNAAIAAiuAfLLbIgdAAAdyMpIghAAIgcAAIAAhOAeuMpIgfAAIAAhOAfLMpIgdAAIAAhOAdRMpIAAhOAdyMpIAAhOAfLMpIAAhOAePMpIgdAAAfnLbIAABOIgcAAEAhlAIKIAADRIgjAAIAADgIgTAAIAAEAIAoAAIAAAqIAMAAIAADkIgMAAIAAAtIgoAAIAAAMIjoAAIAAgMIgqAAIAAguIAAhBIDSAAIAAjMIBAAAAfnLbIBbAAAfnLbIgcAAAYvO7ICoAAIAAANIBVAAIAAgNIEDAAAb5MpIggAAIgeAAIAAhOAcVMpIgcAAIAAhOAbZMpIAAhOAcVMpIAAhOAXwJTIhsAAIg9A+IlPlJAUGM8IAAhqIBBhBIA7A6AO8O7IF8AAIAAANIBRAAIAAgNICmAAAYvXIIAAAQIi9AAIAAAjIgtAAIAAAeIihAAIAAgeAVFX7IAAgLIihAAIAAALIgnAAIAAiSIjBAAIAAmuAcdXIIjuAAIAAoNAc1MpIggAAArKElIAAgeICfAAIAAAeIASAAIAAAoIDcAAIAAgcIDWAAABOEwIgKABIAAAUIiIAAIAAgVIgKAAAIqElIAAgeICgAAIAAAeIAVAAIAABpIDTAAIBGhGAE9FNIDcAAIAAgoIARAAALKElIigAAAw4zLIBgAAIAAAeIANAAIAACVIgNAAIAAAaIgoAAA2K0tIAAguIgeAAA1s0tIgeAAIAABEIAAAeIAeAAIAeAAIBHAAIAAgPIALAAIAAhmIgLAAIAAgbIhHAAIgeAAA1s0tIAAguIgeAAA1O0tIAAguA1O0tIgeAAIAABEIgeAAIgeAAIAAAeIgZAAIAAgeIgcAAIAAhEA1OzpIAoAAIAAhEIgoAAAztzLIgaAAA2KzIIAAgDA1szIIAAgDA1OzIIAAgDIAAgeIAAhEA1szpIAAAeA1szpIAeAAA5p1yIF8AAIAACnIC1AAIAADNIA4AAIAADYIAADcIAnAAIAAAbIAOAAIAACWIgNAAIAAAdIAAAYIANAAIAACYIgNAAIAAAeIgnAAIAAgOIg5AAIAAjAIAAjBIA4AAIAAgNA3d1bIgkAAIAAgJIhoAAIAAgOA3B0tIAAguIgcAAA3B0tIgcAAIAAguA2o0tIAAguIgZAAA2o0tIgZAAA9t3YIEEAAIAABmA5p1kIAACIIgNAAIAABSIANAAIAACoIAACvIgNAAIAABUIANAAIAACwIAACsIgNAAIAABSIANAAIAACwIAACvIgNAAIAABSIANAAIAACvIAACvIgNAAIAABTIANAAIAACvIhTAAIgdAAIgdAAIgeAAIgeAAIggAAIgdAAIgfAAIgdAAIgfAAIgeAAA3dzIIAAgDIAAgeA3BzIIAAgDA3wsmIAAixIANAAIAAhPIgNAAIAAilIATAAIAcAAA2ozIIAAgDIAeAAA2ozpIgZAAIAAhEA2o0tIAABEEgh8gTRIgqAAIAAgoIgNAAIAAjkIANAAIAAgpIApAAIAAgMIDoAAIAAAMIAoAAIAAAuEgh8gTRIBIAAIAAjIIDHAAIAAg/EghjgPiIgZAAIAAjvEghkgIvIAAg0IgVAAIAAgZIgMAAIAAh/IAMAAIAAgVIAWAAIBEAAIAADhIAADhIhEAAIgYAAIAAgeIgNAAIAAh8IANAAIAAgYIAXAAIAAgvIBFAAIG2AAEghjgMQIAAjSIH6AAA3wl8IAAiqIANAAIAAhJIgNAAIAAi3IHwAAA3wAwIAAi3IANAAIAAhPIgNAAIAAimIG4AAIBgAAEghjgCBIAAjNEghlAEvIAAgxIgWAAIAAgZIgNAAIAAiAIANAAIAAgWIAYAAIAAjQIH6AAEggfAEvIAAjgIhEAAEghjAIQIgYAAIAAgcIgMAAIAAh6IAMAAIAAgZIAWAAIAAgyIBGAAIG2AAAv/iuIAADeIhEAAIAADPIBKBJIBGBGIDTAAIAAhpIAWAAICfAAAxDAwImtAAA2K0tIgeAAA1AKQIgFADIg/hAIhsAAIg0A1IA3gCIAAAbIBOBNIBGBHIAoAAIAAAyIArgqIAAhrIg+g+IAEgEIFHlIA1EKUIgBgBIhaBbIgDADA4qO7ICmAAIAAANIBQAAIAAgNIF9AAICpAAIAAgMIBiAAIAAAMIFzAAIJ3AAIFzAAIAAgMIBhAAIAAAMICqAAAu3O7IAAGuIjBAAIAACSIgnAAIAAAeIihAAIAAgeIgtAAIAAgjIi9AAIAAgQIjvAAIAAAuIgpAAIAAAMIjoAAIAAgMIgoAAIAAgtIgMAAIAAjkIAMAAIAAgqIAoAAIAAkAIEDAAIAAANIBUAAIAAgNICpAAArgM9IomAAA7ZMuIgdAAIgeAAIAAhOA72MuIAAhOA7ZMuIAAhOA68LgIAABOIgdAAEghjAIQIBEAAIAAjhEghBALgIgiAAIAAjQA/KMuIgeAAIAAhOA+OMuIgdAAIgfAAIAAhOA9SMuIgdAAIAAhOA8yMuIggAAIAAhOA+rMuIAAhOA+OMuIAAhOA8yMuIAAhOA9vMuIgfAAEghBALgIBZAAEggqAO7IgXAAIAAjbEggqAS7IBFAAIAADMIDMAAIAABBA8UMuIgeAAArEXDIgcAAIAAgRIjXAAIAAhJAk5WyIjSAAIAAARIggAAIAAAAIAAAeIiZAAIAAgeICZAAAyfX7IAAgPIihAAIAAAPA4qXIIAAoNABRYZIiZAAIAAgXICZAAgAhIYZIjxAAIAAhnIAAn3ALKXCIAAAfIibAAIAAgfIgfABIAAgRIjSAAIAABnIjtAAAO8VpIAABJIjXAAIAAAQIgbAAAIvXCICbAAAE+WyIAAn3AE9M9IAAnwArgGOIAAGvALfGOIAAGvA3wJTIAAojAk9M9ImjAA");
	this.shape.setTransform(223.25,156.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221F20").ss(0.8).p("AAAAAIAAAA");
	this.shape_1.setTransform(167.6625,304.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A17D56").s().p("AbYSWIAAgMIipAAIimAAIAAAMIhRAAIAAgMIl8AAIiqAAIAAgNIhhAAIAAANIlzAAIp4AAIlyAAIAAgNIhiAAIAAANIipAAIl9AAIAAAMIhQAAIAAgMIimAAIioAAIAAAMIhVAAIAAgMIkCAAIgYAAIAAjbIBZAAIAABOIAeAAIAgAAIAcAAIAgAAIAcAAIAgAAIAeAAIAeAAIAdAAIAdAAIAAhOIBTAAIAAivIgNAAIAAhUIANAAIAAiuIAAiwIgNAAIAAhRIANAAIAAiwIAAivIgNAAIAAhSIANAAIAAisIAAiwIgNAAIAAhUIANAAIAAivIAAioIgNAAIAAhSIANAAIAAiIIBoAAIAAAJIAkAAIAAAuIAABEIAAAeIgTAAIAAClIANAAIAABPIgNAAIAACxIAAC3IANAAIAABJIgNAAIAACqIAACmIANAAIAABOIgNAAIAAC4IAAIjIg0A0IA3gBIAAAbIBOBNIBHBHIAnAAIAAAyIArgrIImAAIGjAAIJ5AAIGjAAIInAAIAAgBIBeACIAegdQgKgMgFgQQgKghAZgYQAXgYAhAJQARAFALAKIAagZIAAhfIAAojIAAi4IgNAAIAAhOIANAAIAAimIAAiqIgNAAIAAhJIANAAIAAi3IAAixIgNAAIAAhPIANAAIAAilIgVAAIAAgeIAAhEIAAguIAlAAIAAgJIBqAAIAACCIANAAIAABTIgNAAIAACoIAACvIANAAIAABUIgNAAIAACvIAACsIANAAIAABTIgNAAIAACuIAACxIANAAIAABRIgNAAIAACwIAACuIANAAIAABUIgNAAIAACvIBRAAIAABNIAeAAIAfAAIAdAAIAfAAIAdAAIAhAAIAdAAIAeAAIAeAAIAcAAIAAhNIBbAAIAADgIgTAAIkDAAIAAAMgA2hPAIACgDg");
	this.shape_2.setTransform(223.25,135.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CFCEBE").s().p("AB6AnIAAhNIAABNIgeAAIAAhNIAABNIgeAAIAAhNIAABNIgdAAIghAAIAAhNIAABNIgcAAIAAhNIAABNIgfAAIAAhNIAABNIgdAAIAAhNIAABNIgfAAIAAhNIAABNIgeAAIAAhNIAeAAIAfAAIAdAAIAfAAIAcAAIAhAAIAABNIAAhNIAdAAIAeAAIAeAAIAcAAIAABNg");
	this.shape_3.setTransform(410.55,233.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C0B59E").s().p("A4ZRRIAAhOIAABOIgdAAIAAhOIAdAAIAdAAIAABOgA5VRRIAAhOIAABOIgdAAIAAhOIAdAAIAfAAIAABOgA6TRRIAAhOIAhAAIAABOgA6vRRIAAhOIAABOIgfAAIgdAAIAAhOIAABOIgfAAIAAhOIAABOIgeAAIAAhOIAeAAIAfAAIAdAAIAABOIAAhOIAfAAIAcAAIAABOgA5yQDgAyFO2IAEgEIgDAFgAZ/uoIAAgeIAbAAIAAAegAZ/uoIgZAAIAAgeIAZAAIgZAAIAAhFIAZAAIgZAAIAAgtIgeAAIAeAAIAAAtIgeAAIAAgtIgeAAIAeAAIAAAtIgeAAIAeAAIAABFIAeAAIgeAAIAAhFIAeAAIAABFIAAAeIgeAAIAAgeIgeAAIAeAAIAAAeIgeAAIAAgeIgeAAIAAhFIAABFIAeAAIAAAeIgeAAIAAgeIAAAeIhIAAIAAgPIgKAAIAAhmIAKAAIAAgbIBIAAIAAAtIgoAAIAABFIAoAAIgoAAIAAhFIAoAAIAeAAIAAgtIgeAAIhIAAIAAAbIgKAAIAABmIAKAAIAAAPIgaAAIAAioIF/AAIAAAOIhqAAIAAAKIglAAIgbAAIgZAAIAZAAIAAAtIAbAAIAABFIgbAAIAAhFIAABFIAAAegAYqvGIAAhFgAxIuoIhGAAIgfAAIAAgeIAfAAIAAAeIAAgeIAnAAIAAhFIgnAAIAnAAIAABFIgnAAIAAhFIAAgtIBGAAIAAAbIAMAAIAABmIgMAAIAAAPIAAgPIAMAAIAAhmIgMAAIAAgbIhGAAIgfAAIAfAAIAAAtIgfAAIAfAAIAABFIgfAAIAAhFIAABFIgdAAIAdAAIAAAeIgdAAIAAgeIgeAAIAAhFIgZAAIAZAAIAABFIgZAAIAZAAIAAAeIgZAAIAAgeIgcAAIAAhFIAcAAIgcAAIAAgtIgkAAIAAgKIhpAAIAAgOIF9AAIAACogAzKvGIAAhFIAdAAIAAgtIgdAAIgeAAIAeAAIAAAtIgeAAIAAgtIgZAAIAZAAIAAAtIAeAAgA0BvGIAAhFgA0BwLIAAgtIgcAAIAcAAgAzouoIAAgeIAeAAIAAAegA0duoIAAgeIAcAAIAAAegAZ/vGgAZmvGgAZIvGgAZIvGgAYMvGgAzovGgA0BvGgAZ/wLIAAgtIAbAAIAAAtgAZIwLgAZIwLgAYMwLIAAgtIAeAAIAAAtgAYMwLgAzKwLIAAgtIAdAAIAAAtgAzKwLgAzKwLgAZ/w4gAZIw4gAzKw4g");
	this.shape_4.setTransform(204.1,127.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(5));

	// floor3
	this.unt2_floor3 = new lib.unt2floor3();
	this.unt2_floor3.name = "unt2_floor3";
	this.unt2_floor3.parent = this;
	this.unt2_floor3.setTransform(223.3,156.6,1,1,0,0,0,222.8,156.1);
	this.unt2_floor3.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.unt2_floor3).wait(5));

	// floor2
	this.unt2_floor2 = new lib.unt2floor2();
	this.unt2_floor2.name = "unt2_floor2";
	this.unt2_floor2.parent = this;
	this.unt2_floor2.setTransform(223.3,156.6,1,1,0,0,0,222.8,156.1);
	this.unt2_floor2.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.unt2_floor2).wait(5));

	// floor1
	this.unt2_floor1 = new lib.unt2floor1();
	this.unt2_floor1.name = "unt2_floor1";
	this.unt2_floor1.parent = this;
	this.unt2_floor1.setTransform(223.3,156.6,1,1,0,0,0,222.8,156.1);

	this.timeline.addTween(cjs.Tween.get(this.unt2_floor1).wait(5));

	// Layer_5
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.498)").s().p("EhZtA/FMAAAh+JMCzbAAAMAAAB+Jg");
	this.shape_5.setTransform(219.525,174.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354.7,-229.2,1148.5,807.4000000000001);


(lib.Building3000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Overlines_copy_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").p("ATygYIAAgUIAZAAIAAgNIC+AAIAAANIAXAAIAACEIHAAAIAAGrIggAAIAAANIhHAAIAABlIBHAAIAAAOIAiAAIAAGxIm/AAIAACAIgdAAIAAAMIi/AAIAAgMIgVAAIAAgUIjLAAIAAhHIiJAAIAAAhIjNAAIAAhBIjhAAIAAm0ICuAAIAAANIBRAAIAAgNICvAAIAAHUAeAIDIozAAIAAgMIheAAIAAAMIjIAAIABh1IAAgeIhPAAAQnRZIAAnWIDNAAIAAAMIBSAAIAAgMII6AAAeAIQIAABlAGSgYIAAgeIArAAIAAgNICcAAIAAANIAlAAIAACOIjsAAgADXgYIC7AAAjbBYIAAiOIAqAAIAAgNICaAAIAAANIArAAIAAAeIDDAAADXIDIisAAIAAgMIhQAAIAAAMImCAAIkNAAIAAANIhmAAIAAgNIi1AAAjbBYIDvAAIAAhwANNGOIAAB1Il+AAIAAgMIhYAAIAAAMIigAAIAAobANNBYIAAhOIDbAAIABARIAAgzIDJAAANNBYIAAA4ANNCvIAAgfANNEsIAAghIAAgcIAAgeIAAgiIBFAAIAAAiIAAAeIAAAcIAAAhIAAAgIAAAhIAAAhIAAA0IBHAAIAAg0IBPAAANNFtIAAghIAAggIBFAAANNGOIAAghIBFAAAJ+BYIDPAAAOSCQIAAAfAQoFXIhPAAIAAjmIhHAAIAAAfIhFAAAQoFwIAAgZIABk8AOSGOIBHAAAXgBYIjuAAIAAhwANNGOIBFAAANNDRIBFAAANNDvIBFAAANNELIBFAAANNFMIBFAAAq6uUIAUAAIAAAXIANAAIAAB9IgNAAIAAAcIgVAAIAAAxIhCAAIAADhIBBAAIAADQIhKAAIAADNIBGBDIBNBKIDMAAIDMAAAulxhIDrAAIAADNIhDAAIAADhImyAAAxLzLIggAAIAAgvIAgAAAwszLIgfAAIAAgvIAfAAIAgAAIBLAAIAAAcIAMAAIAABrIgMAAIAAASAwszLIAAgvAwMz6IAAAvIAABIIAqAAIAAhIIgqAAIggAAAwMyDIAAAiIBLAAAwsxhIgfAAIAAgiIAAhIAxryDIAgAAIAfAAIAgAAAxrxhIAAgiIAAhIIgaAAIAAgvIAaAAAwsxhIAAgiIAAhIAxLxhIggAAAwsxhIAgAAAulxhIgcAAA020TIGRAAIAACyAq3qzIgEAAIAAAwIAVAAIAAAZIANAAIAAB6IgNAAIAAAeIgWAAA421EIEAAAIAAAxAyiz6IAdAAAyFzLIgdAAIAABIIAAAiIgNAAIAAGuAyiz6IAAAvA020EIBtAAIAAAKIAnAAA020EIAAgPA020EIAAC8IgNAAIAABYIANAAIAACpIAAGMIgNAAIAABPIANAAIAACZIAAGNIgNAAIAABSIANAAIAACeIAACxIgNAAIAABUIANAAIAAChIAACjIgNAAIAABTIANAAIAABjIAABOIgbAAIAACHIj7AAIAAiHIjZAAIAAjaIgnAAIAAgeIgMAAIAAiZIAMAAIAAgWIAAgaIgMAAIAAiWIAMAAIAAgdIAqAAIA7AAIAADNIAADNIg+AAAyiyDIAdAAIAAhIAyixhIAdAAIAAgiIAaAAA9Cw3IgsAAIAAgsIgNAAIAAjnIANAAIAAgmIApAAIAAgNIDlAAIAAANIAqAAIAAAsIAABBIjJAAIAADMgA+Bp0IAAjTIA/AAIAAjwA99mhIgWAAIAAgcIgOAAIAAieIAOAAIAAgZIASAAIBiAAIAADTgA9CtHIIMAAAyvEfIAAi4IgMAAIAAhkIAMAAIAAkFIAAmxA99ADIAAjWIAAjOA+BDTIBiAAIAAjQIheAAA+BDTIgTAAIAAgXIgNAAIAAiiIANAAIAAgXIAXAAA8iGqIhfAAIAAjXAxHGVIgCgCQgbgbgeAKIgZAPIgUgTIAAhfIBoAAIA7A7IA9A8IAABtIhXAAIgfgfQAKgJAEgOQAJgdgYgbgA99jTIJHAAA8iGqIHsAAAwMFaIg7A7AmnIDIAAmrArAAOIlMFMAyFxhIAaAAAsGkCImpAAAysSpIAAokIF/AAIAAANIBXAAIAAgNICdAAIGIAAIAAANIBWAAIAAgNICaAAICuAAIAAANIBWAAIAAgNICtAAAsNTOIAAhjIjVAAIAABjIjKAAIAAglIiKAAAsNTOIAAATIgfAAIAAAMIiXAAIAAgMIgfAAIAAgTAiUTMIAAAVIgYAAIAAAMIifAAIAAgMIgZAAIAAgTIjVAAIjUAAAo5TRIAAgDIAApJAlkTOIAAhjIDQAAIAABhA9MNQIBlAAIGxAAA1RT3Ij7AAALRR6IAAAcIgeAAIAAAMIh4AAIAAgMIgdAAIAAgYIguAAIAAhFIjgAAIAAA/IjRAAIAAnzAXjQ0IjxAAIAABsAA/R4IAABUIjTAAAHwR+Ig1AAIAAAXIgWAAIAAAMIh9AAIAAgMIgYAAIAAgdA8iKDIAAjZ");
	this.shape.setTransform(195.875,141.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0B59E").s().p("AP3NfIAAg1IBHAAIAAA1gAP3MqIAAghIhFAAIAAggIBFAAIAAAgIAAggIhFAAIAAghIBFAAIhFAAIAAghIAAgcIAAgdIAAgjIBFAAIhFAAIAAgeIBFAAIAAAeIAAgeIAAggIBHAAIAADmIAAAaIAAAdgAP3LIIAAAhIAAghIAAghgAP3KnIAAgcgAP3KnIhFAAgAP3KLIAAgdgAP3KLIhFAAgAP3JuIAAgjgAP3JuIhFAAgAOyMqIAAghIBFAAIAAAhgAOyMJgAunrFIAAghIAqAAIAAhIIgqAAIggAAIAgAAIAqAAIAABIIgqAAIAAhIIAABIIggAAIAAhIIAABIIAgAAIAAAhIggAAIAAghIAAAhIgfAAIggAAIAAghIAgAAIAAAhIAAghIAfAAIgfAAIAAhIIAfAAIgfAAIAAgwIAfAAIAAAwIAAgwIAgAAIAAAwIAAgwIBLAAIAAAdIAMAAIAABqIgMAAIAAASgAwGrFIgaAAIAAghIAAAhIgdAAIAAghIAdAAIgdAAIAAhIIAdAAIgdAAIAAgwIAdAAIAaAAIAgAAIAAAwIggAAIAAgwIAAAwIgaAAIAAgwIAAAwIAaAAIAABIIgaAAIAAhIIAABIIAaAAIAAAhgAunrmgAwGrmIAAhIIAgAAIAABIgAwGrmgAwGsugAwGsugAwgsugAvmteg");
	this.shape_1.setTransform(185.775,99.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A17D56").s().p("A7lVJIAAiHID7AAIAACHgA3QR0IAAhjIgMAAIAAhUIAMAAIAAijIAAihIgMAAIAAhTIAMAAIAAiyIAAidIgMAAIAAhTIAMAAIAAmMIAAiZIgMAAIAAhPIAMAAIAAmMIAAipIgMAAIAAhYIAMAAIAAi8IBtAAIAAAKIAnAAIgnAAIAAgKIhtAAIAAgPIGRAAIAACyIgbAAIAAgSIALAAIAAhrIgLAAIAAgcIhMAAIgfAAIggAAIggAAIgaAAIgdAAIAAAvIAABIIAAAiIgMAAIAAGuIAAGwIAAEHIgNAAIAABjIANAAIAAC3IAABfIATAUIAZgQQAfgKAbAbIACACIAAABQAZAagJAdQgFAPgJAJIAfAfIBWAAIC1AAIAAAMIBnAAIAAgMIEMAAIGDAAIAAgNIBRAAIAAANICqAAICgAAIAAgNIBYAAIAAANIF+AAIAAh1IBFAAIAAA0IBIAAIAAg0IAAgeIAAgaIBOAAIAAAaIhOAAIBOAAIAAAeIhOAAIBOAAIAAB1IDHAAIAAgMIBfAAIAAAMIIyAAIAAANIhHAAIAABlIBHAAIhHAAIAAhlIBHAAIAABlIAAANIo5AAIAAANIhSAAIAAgNIjNAAIAAHXIiKAAIAAnUIivAAIAAAMIhRAAIAAgMIitAAIitAAIAAAMIhWAAIAAgMIitAAIibAAIAAAMIhWAAIAAgMImJAAIicAAIAAAMIhYAAIAAgMIl/AAIAAIkgANAEhIAAjmIhIAAIAAAgIhFAAIAAg4IAAhNIDcAAIAAARIgBE6gANAEhg");
	this.shape_2.setTransform(211.225,146.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// floor3
	this.unt3_floor3 = new lib.unt3_floor3();
	this.unt3_floor3.name = "unt3_floor3";
	this.unt3_floor3.parent = this;
	this.unt3_floor3.setTransform(195.8,134.3,1,1,0,0,0,195.3,133.8);
	this.unt3_floor3.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.unt3_floor3).wait(10));

	// floor2
	this.unt3_floor2 = new lib.unt3_floor2();
	this.unt3_floor2.name = "unt3_floor2";
	this.unt3_floor2.parent = this;
	this.unt3_floor2.setTransform(195.8,134.3,1,1,0,0,0,195.3,133.8);
	this.unt3_floor2.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.unt3_floor2).wait(10));

	// floor1
	this.unt3_floor1 = new lib.unt3_floor1();
	this.unt3_floor1.name = "unt3_floor1";
	this.unt3_floor1.parent = this;
	this.unt3_floor1.setTransform(195.8,134.3,1,1,0,0,0,195.3,133.8);

	this.timeline.addTween(cjs.Tween.get(this.unt3_floor1).wait(10));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("EhZtA/FMAAAh+JMCzbAAAMAAAB+Jg");
	this.shape_3.setTransform(219.525,174.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354.7,-229.2,1148.5,807.4000000000001);


(lib.Building4000_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Outlines_copy_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").p("AQh0oIAAguIAtAAIAAgNIDjAAIAAANIAsAAIAAArIANAAIAADkIgNAAIAAAtIgvAAIAADwIhdAAIAADJICPAAIAAAnIAOAAIAACfIgOAAIAAAnIgeAAIAADBIAAC/IAgAAIAAAmIAMAAIAACeIgMAAIAAApIiRAAIAAjtIBxAAAQh0oIAABCIDOAAIAADMIA/AAAKhz6IB/AAIAAguIEBAAAHX0bIDKAAIAAAhAMgz6IAADNIANAAIAABZIgNAAIAACqIAAF8IANAAIAABZIgNAAIAACiIAACjIANAAIAABVIgNAAIAAF+IAACiIANAAIAABbIgNAAIAACqIAACzIANAAIAABXIgNAAIAACfIAYAAIAcAAIAZAAIAeAAIAAAgIAABFIAAAuIgeAAIgZAAIgcAAADo2PIAAggIAnAAIAAgNICgAAIAAANIAoAAIAACUIjvAAgAI1qBQgagYAIghIANgcIgVgVIhgAAIi2AAIAAgNIhiAAIAAANIkOAAImCAAIAAAJIhOAAIAAgKIinAAIinAAIAAAKIhSAAIAAgKIl5AAIgKAAIAAAmIgPAAIAAmpICqAAIAAAaIAABHIAAAeIghAAIAAgeIAAgoIhEAAIAAAoIguAAIAAhHIAbAAIAAgLIBmAAIAAALIASAAAAqtvICmAAIAAgMIBQAAIAAAMIGBAAIAAmLAKfn/IAAhjIgbgaQgKAIgPAEQgcAHgagYAG7rrIAABqIA8A8IA+g8AH3pFIBFBGIBjAAAKfAaIAAkIIANAAIAAhlIgNAAIAAisADwHDIAAjLIg+AAAKfHDIAAigIgKAAIAAhUIAKAAIAAi1AD1AaIGqAAAD1AaIAAjNIhLhLIhAhAIjVAAIjGAAIAACPIgsAAIAAAPIibAAIAAgNIgoAAIAAgjIjCAAIi/AAIAAhrIjwAAIjNAAIAAmLADwHDIGvAAAVCl0IhxAAIAAjtATRHDIA+AAIAADbIApAAIAAAbIANAAIAACUIgNAAIAAAdIhkAAIAAjMIA7AAATRD5IAADKImxAAATRsqImxAAAVCizIoiAAAmG0cIAAiTIAoAAIAAgNICeAAIAAANIAoAAIAAAgIAABzgAiY2PIDCAAIAAIgApRtvIGFAAIAAgMIBPAAIAAAMICnAAAsQ2OIC/AAIAAByIAAGtAwA0cIAAiTIAnAAIAAgNICdAAIAAANIAsAAIAAAhIAABygA0owOIAAAeIguAAIAAAeIAAAeIAAAZIAAAcIAAAkIgJAAIAABeIALAAIAAARA1WwOIAAAeAzDwOIghAAIhEAAAzkvwIhEAAIAAAeIAAAeIAAAZIguAAAzDxvIAAitIDDAAAzDu0IAAAZIghAAIAAgZIAAgeIhEAAIguAAAzDvSIAAAeIghAAIhEAAIguAAAzDt/IAAAQIF/AAIAAgMIBQAAIAAAMICjAAAzkt/IAAgcIhEAAIAAAcIguAAAzDubIAAAcIghAAIhEAAAzDvSIghAAIAAgeAzDvwIAAAeAuhjQIAAAkIgnAAIAAAMIihAAIAAgMIgoAAIAAiPAkxk+IjvAAIAABuACOHDIAAgbIgOAAIAAiTIAOAAIAAgdIAkAAIAAjeIBDAAAC0KPIgmAAIAAgdIgOAAIAAiSIAOAAIAAgdIBiAAArirsIAAIcAhrrrIAAGtApR0cIDLAAAC0NrIAAjcIA8AAIAAjMADwUTIhlAAIAAgeIgNAAIAAiTIANAAIAAgcIApAAIAAjbIHrAAIAAitIgKAAIAAhbIAKAAIAAigAU8NqIgEAAIAAAaIANAAIAACbIgNAAIAAAYIgoAAIAADcIjoAAAQOUTIAaAAIAACqImpAAIAAiqIAXAAIAACRIAgAAIAAALIBeAAIAAgJIAkAAIAAguIAAhFIAAggAPHWmIBHAAIAAgbIALAAIAAhnIgLAAIAAgRAUQQ3Ig8AAIAAjNIm0AAADwUTIAAjNIg8AAAKWUTIAJAAIAAigIgKAAIAAhVIAKAAIAAizAOpUTIAeAAIAAAgIAABFIgeAAIAAAuIgeAAAOpUzIAeAAIAoAAIAABFIgoAAIAAAuIgeAAAOpUTIAAAgIAABFIgeAAIgeAAIgZAAIAAAuANUUzIAZAAIAeAAIAeAAANUUTIAAAgIAABFIgcAAANtUTIAAAgIAABFIAAAuAOLUTIAeAAAM4UzIAcAAAJ/UTImPAAAPHUTIBHAAACqj+IFNlHAAq2PIC+AA");
	this.shape.setTransform(139.5,147.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A17D56").s().p("APKVVIAAgLIggAAIAAiRIAJAAIAAigIgKAAIAAhWIAKAAIAAizIAAitIgKAAIAAhaIAKAAIAAigIAAigIgKAAIAAhVIAKAAIAAizIAAkJIAMAAIAAhlIgMAAIAAitIAAhiIgbgbQgKAJgPAEQgcAHgagYQgagZAIggIANgdIgWgVIhfAAIi3AAIAAgMIhgAAIAAAMIkRAAImAAAIAAAKIhOAAIAAgKIinAAIinAAIAAAJIhRAAIAAgJIl6AAIAAgSIgLAAIAAhdIAJAAIAAgkIAuAAIBEAAIAhAAIAAAQIF/AAIAAgNIBQAAIAAANICkAAIGDAAIAAgNIBPAAIAAANICnAAICnAAIAAgNIBPAAIAAANIGBAAIAAmLICAAAIAADNIANAAIAABZIgNAAIAACqIAAF8IANAAIAABYIgNAAIAACjIAACiIANAAIAABXIgNAAIAAF9IAAChIANAAIAABbIgNAAIAACrIAACyIANAAIAABYIgNAAIAACfIAYAAIAAAgIAABFIAAAuIgkAAIAAAJg");
	this.shape_1.setTransform(111.9,156.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0B59E").s().p("AMiUWIAAipIAXAAIAACRIAgAAIAAALIBeAAIAAgJIAkAAIAAguIAAhFIAAggIAbAAIAaAAIAdAAIAfAAIAeAAIAAAgIAAggIBHAAIAAARIAKAAIAABnIgKAAIAAAbIhHAAIAAguIAAAuIgeAAIAeAAIBHAAIAAgbIAKAAIAAhnIgKAAIAAgRIAaAAIAACpgARMUAIgfAAgARMUAIAAguIAeAAIgeAAIAAhFIAeAAIAnAAIAABFIgnAAIAAhFIAABFIAnAAIAAhFIgnAAIgeAAIAAggIAAAgIgfAAIAfAAIAABFIgfAAIAAhFIAAggIAAAgIgdAAIAAggIAAAgIAdAAIAABFIgdAAIAAhFIAABFIAdAAIAAAuIgdAAIAAguIgaAAIAAhFIAaAAIgaAAIAAggIAAAgIgbAAIAbAAIAABFIAaAAIAAAuIgaAAIAAguIgbAAIAbAAIAAAuIAaAAIAdAAIAAguIAfAAgAP2UAIgbAAgARqUAgARqTSgAQQTSgAP2TSgAP2TSgARMSNgAQQSNgAP2SNgAzKttIAAmpICqAAIAAAbIgSAAIAAgLIhlAAIAAALIgcAAIAABHIAAAeIAAAeIAAAeIAAgeIAuAAIguAAIAAgeIAuAAIguAAIAAgeIAAhHIAcAAIAAgLIBlAAIAAALIASAAIAABHIghAAIAAgoIhEAAIAAAoIguAAIAuAAIAAAeIAAAeIAAAeIAAAZIAAgZIAAgeIBEAAIAhAAIAAAeIghAAIAAgeIAAAeIhEAAIBEAAIAAAZIhEAAIBEAAIAAAcIhEAAIAAgcIguAAIAAgZIAuAAIguAAIAAAZIAuAAIAAAcIguAAIAAgcIAAAcIAAAkIgJAAIAABdIALAAIAAASIgKAAIAAAlgAxBwlIAAgcIAhAAIAAAcgAxBxBIAAgZIAhAAIAAAZgAxBxBgAyFxBgAxBxagAxBx4IAAgeIhEAAIBEAAIAAAeIhEAAIAAgeIAAgeIAAgoIBEAAIAAAoIhEAAIBEAAIAhAAIAAAeIghAAIAhAAIAAAegAxByWIAAgegAxBx4gAyFy0gAwgz7g");
	this.shape_2.setTransform(123.2,164);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(5));

	// unt4floor3
	this.unt4floor3 = new lib.unt4floor3();
	this.unt4floor3.name = "unt4floor3";
	this.unt4floor3.parent = this;
	this.unt4floor3.setTransform(140.3,138.9,1,1,0,0,0,138.3,138.4);
	this.unt4floor3.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.unt4floor3).wait(5));

	// unt4floor2
	this.unt4floor2 = new lib.unt4floor2();
	this.unt4floor2.name = "unt4floor2";
	this.unt4floor2.parent = this;
	this.unt4floor2.setTransform(140.3,138.9,1,1,0,0,0,138.3,138.4);
	this.unt4floor2.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.unt4floor2).wait(5));

	// unt4floor1
	this.unt4floor1 = new lib.unt4floor1();
	this.unt4floor1.name = "unt4floor1";
	this.unt4floor1.parent = this;
	this.unt4floor1.setTransform(140.3,138.9,1,1,0,0,0,138.3,138.4);

	this.timeline.addTween(cjs.Tween.get(this.unt4floor1).wait(5));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("EhZtA/FMAAAh+JMCzbAAAMAAAB+Jg");
	this.shape_3.setTransform(219.525,174.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354.7,-229.2,1148.5,807.4000000000001);


(lib.Building5000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(32));

	// outlines_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").p("Ac+rnIAABeIgJAAIAAAkIiTAAIAAghIiwAAIAAARIhaAAIAAgRIlAAAIAAARIhXAAIAAgRIm7AAIAAgRIhkAAIAAAPIkTAAIgeAeIAQAcQALAggWAWIgDACQgZAXgggJIgbgOIgbAbIAAEXIgQAAIAABcIATAAIAAG+IALAAIAABiIgOAAIAAE+IAKAAIAABTIgLAAIABCwIGUAAIAAB6IgOAAIAAAaIhdAAIAAgaIscAAIAAAXIhRAAIAAgXIlKAAIAAAVIhWAAIAAgVIuSAAIAAgWIgLAAIAAhdIAJAAIAAglICTAAIAAAeICsAAIAAgMIBUAAIAAAMIFaAAIAAgMIBTAAIAAAMIHBAAIAAANIBcAAIAAgNIEVAAIAcgcQgKgLgFgQQgLggAZgYQAYgYAfAJQAPAFALAJIAcgcIAAkMIAOAAIAAhkIgNAAIAAtoIgMAAIAAheIAMAAIAAlTIgMAAIAAhYIAMAAIAAjXIB+AAIAAFqIF/AAIAAgKIBUAAIAAAKIFFAAIAAgKIBbAAIAAAKIIsAAIAAgKIBaAAIAAAKICdAAIAAgGIBYAAIAAAgg");
	this.shape.setTransform(199.025,136.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A17D56").s().p("AFtRtIAAgaIscAAIAAAXIhRAAIAAgXIlKAAIAAAVIhWAAIAAgVIuSAAIAAgWIgLAAIAAheIAJAAIAAgkICTAAIAAAeICsAAIAAgMIBUAAIAAAMIFaAAIAAgMIBTAAIAAAMIHBAAIAAANIBcAAIAAgNIEVAAIAcgcQgKgLgFgQQgLggAZgYQAYgZAfAKQAPAFALAJIAcgcIAAkMIAOAAIAAhkIgNAAIAAtoIgMAAIAAheIAMAAIAAlTIgMAAIAAhYIAMAAIAAjYIB+AAIAAFrIF/AAIAAgKIBUAAIAAAKIFFAAIAAgKIBbAAIAAAKIIsAAIAAgKIBaAAIAAAKICdAAIAAgGIBYAAIAAAgIALAAIAABeIgJAAIAAAkIiTAAIAAghIiwAAIAAARIhaAAIAAgRIlAAAIAAARIhXAAIAAgRIm7AAIAAgRIhkAAIAAAQIkTAAIgeAdIAQAcQALAggWAWIgDACQgZAXgggJIgbgOIgbAaIAAEXIgQAAIAABdIATAAIAAG+IALAAIAABhIgOAAIAAE+IAKAAIAABUIgLAAIABCwIGUAAIAAB6IgOAAIAAAag");
	this.shape_1.setTransform(199.025,136.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221F20").p("AhGBzIAAjVIAbAAIAAgLIBlAAIAAALIASAA");
	this.shape_2.setTransform(21.6,220.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221F20").p("AAiBeIAAi2IhDAAIAAC2");
	this.shape_3.setTransform(22.525,222.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221F20").p("ABMhEIiSAAIAACO");
	this.shape_4.setTransform(21.6,224.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221F20").p("ABJAAIiSAA");
	this.shape_5.setTransform(21.85,229.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221F20").p("ABJAAIiSAA");
	this.shape_6.setTransform(21.85,226.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#221F20").p("ABJAAIiSAA");
	this.shape_7.setTransform(21.85,223.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221F20").p("ABJAAIiSAA");
	this.shape_8.setTransform(21.85,220.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#221F20").p("AhGBRIAABdIALAAIAAAWIgZAAIAAmHICpAAIAADvIiSAAIAAAlg");
	this.shape_9.setTransform(20.7,227.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C0B59E").s().p("AhUDEIAAmHICpAAIAADvIiSAAIAAAlIgJAAIAABdIALAAIAAAWg");
	this.shape_10.setTransform(20.7,227.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#221F20").p("ABHhyIAADVIgcAAIAAALIhlAAIAAgLIgRAA");
	this.shape_11.setTransform(376.425,86.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#221F20").p("AghhdIAAC2IBDAAIAAi2");
	this.shape_12.setTransform(375.5,84.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#221F20").p("AhLBFICSAAIAAiO");
	this.shape_13.setTransform(376.425,82.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#221F20").p("AhIAAICRAA");
	this.shape_14.setTransform(376.175,77.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#221F20").p("AhIAAICRAA");
	this.shape_15.setTransform(376.175,80.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#221F20").p("AhIAAICRAA");
	this.shape_16.setTransform(376.175,83.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#221F20").p("AhIAAICRAA");
	this.shape_17.setTransform(376.175,86.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#221F20").p("ABVjUIAAGpIipAAIAAjwICSAAIAAgkIAJAAIAAheIgLAAIAAgfIhXAAIAAgYg");
	this.shape_18.setTransform(377.325,77.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C0B59E").s().p("AhUDVIAAjwICSAAIAAgkIAJAAIAAhdIgLAAIAAghIhXAAIAAgWIBwAAIAAGog");
	this.shape_19.setTransform(377.325,77.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#221F20").p("ADXi5IAAG0IiuAAIAAgNIhTAAIAAANIisAAIAAn1IDOAAIAABBg");
	this.shape_20.setTransform(50.725,209.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#221F20").p("AAAjXIAAGv");
	this.shape_21.setTransform(332.2,37.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#221F20").p("AAAkPIAAIf");
	this.shape_22.setTransform(268.95,32.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#221F20").p("AhigfIAAA6IDKAA");
	this.shape_23.setTransform(364.05,12.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#221F20").p("Ah1g6IAABwIDwAA");
	this.shape_24.setTransform(299.925,10.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#221F20").p("AB1g6IAABwIjuAA");
	this.shape_25.setTransform(238.3,10.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#221F20").p("AUckwIAAIGIhlAAIAABLIggAAIAAAQIh+AAIAAgNIgdAAIAAgkIjQAAIAAh4Il+AAIAACQIgpAAIAAARIidAAIAAgRIgqAAIAAgfIl+AAIAAAhIgnAAIAAAMIikAAIAAgRIgoAAIAAiUIl8AAIAAB1IjRAAIAAAsIgaAAIAAAPIh8AAIAAgQIgaAAIAAhQIhrAAIAAoBIQhAAIAAAWIBWAAIAAgWIFIAAIAAAYIBSAAIAAgYIMdAAIAAAaIBcAAIAAgag");
	this.shape_26.setTransform(131.275,277.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#221F20").p("AhaAYIAAgqIC6AA");
	this.shape_27.setTransform(242.375,300.775);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#221F20").p("Ah1A7IAAhwIDwAA");
	this.shape_28.setTransform(162.05,296.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#221F20").p("AB3A/IAAh4IjyAA");
	this.shape_29.setTransform(100.075,296.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#221F20").p("AhagPICwAAIAAAk");
	this.shape_30.setTransform(20.25,300.025);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#221F20").p("AAAjbIAAG4");
	this.shape_31.setTransform(194.5,269.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#221F20").p("AAAkUIAAIp");
	this.shape_32.setTransform(131.3,274.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#221F20").p("AAAjYIAAGx");
	this.shape_33.setTransform(67.45,268.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#221F20").p("AUbw+IAAgpIAdAAIAAgKICYAAIAAAKIAXAAIAABkARAv+IAAhAIDbAAIAAA7IDMAAIAAG2IicAAIAAgKIhaAAIAAAKIixAAIl7AAIAAgKIhcAAIAAAKIihAAIikAAIAAgKIhUAAIAAAKIl9AAIAAmxIDIAAIAAiQIAoAAIAAgKICbAAIAAAKIAsAAIAAAgIAABwIjvAAAQGnSICeAAIAAARIBaAAIAAgRICxAAIAAHwIjeAAARAv+IAAGxAQGgbIDLAAIAAA5IAAAkIgcAAIAAARIiVAAIAAgPIgaAAIgdAAIAAAPIiXAAIAAgRIgiAAIAAgmIAAg3IDWAAIAABfAQGnSIAAG3AKHxuIAAggIAqAAIAAgKIChAAIAAAKIAnAAIAACQIDHAAAKHxuIAABwIDyAAAEKxuIC+AAIAAIhAA6nUIC0AAIAAgPIBkAAIAAARIEBAAIC6AAIAAARIBXAAIAAgRICiAAAHIxuIC/AAAs7rRIgrAAIAAglIgMAAIAAjkIAMAAIAAgrIAtAAIAAgNIDhAAIAAANIAqAAIAAArIECAAIAAD5IgNAAIAABYIAMAAIAACmIAACuIgMAAIAABeIAMAAIAAClIAAGzIAAEPIANAAIAABkIgNAAIAACuIAABeIgdAdQgKgKgQgEQgfgKgYAYQgBACgBABQgWAXAKAfQAGAQAKALIgcAcIhfAAIi3AAIAAAMIhcAAIAAgMIkPAAIixAAIAAgNIhTAAIAAANIisAAIAAm1IAAg/As7rRIBAAAIAAjIIDNAAIAAhBAhBlkIACACIACgCQAWgWgLggIgPgdIAdgdIBeAAAiujpIAAhfIAagaIAcANQAgAKAZgXIAzAzIAIAJIAAgBIA+g/IAAhuAiujpIBtAAIA9g9IFLFLIACACAgMkvIAIAIAisE0IAAkJIgSAAIAAhcIAQAAIAAi4AiuLlIAAiaIAOAAIAAhhIgMAAIAAi2IgCAAAJTglIjBAAIhLBKIhHBHIAADIIBBAAIAADjIAlAAIAAAhIAPAAIAACUIgPAAIAAAZIhhAAIAAjOIA8AAAMwAcIjdAAIAAhBIAAmtAFmLlIAAAbIAPAAIAACWIgPAAIAAAeIgmAAIAADZInuAAIgBixIALAAIAAhTIgKAAIAAikAEFLlImzAAAEAE0ImsAAAsngyIAAguIgXAAIAAgaIgMAAIAAiBIAMAAIAAgZIAYAAArcgyIAAjiIhKAAIAAjPIgVAAIAAjuAsmCvIgZAAIAAgcIgMAAIAAh5IAMAAIAAgcIAYAAIAAgwArcgyIhLAAAsmCvIBKAAIAAjhIGvAAA3mLYIDgAAIAAg/IDQAAIAABHIDLAAIBHhHIBIhIIAAjQIhKAAIAAjSAFAO0Ig7AAIAAjPAktOiIhoAAIhDBDIg8A8IAABsAmdQgIg7g7Aw2LgIAAGtAskKZIFMFMAsmnjIH5AAArcGBIGvAA");
	this.shape_34.setTransform(223.375,118.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C0B59E").s().p("AgDgDIAHAHIAAAAg");
	this.shape_35.setTransform(222.5,88.475);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#221F20").s().p("AQUXCIAAgMIgdAAIAAgkIjQAAIAAh4Il0AAIAACPIgpAAIAAASIinAAIAAgSIgqAAIAAgfIl0AAIAAAiIgnAAIAAALIiuAAIAAgQIgoAAIAAiVIlyAAIAAB2IjRAAIAAArIgaAAIAAAPIiGAAIAAgQIgaAAIAAhQIhrAAIAAoLIQrAAIAAAVIBMAAIAAgVIFSAAIAAAXIBIAAIAAgXIMnAAIAAAaIBSAAIAAgaIC3AAIAAIQIhlAAIAABLIggAAIAAAQgAQBWsIAdAAIAAAMIB0AAIAAgQIAgAAIAAhBIixAAgAyrWoIAaAAIAAAQIByAAIAAgPIAaAAIAAhHIimAAgADDWfIAqAAIAAASICTAAIAAgSIApAAIAAiFIjmAAgAmuWdIAoAAIAAAQICaAAIAAgLIAnAAIAAiQIjpAAgAJ9UQIC0AAIAAB4IDGAAIAAgrIEgAAIAAn8IijAAIAAAaIhmAAIAAgaImRAAgAAFWAIC0AAIAAhwIG6AAIAAmvIl4AAIAAAXIhcAAIAAgXIiaAAgAp4UIIG9AAIAAB4IC3AAIAAofIibAAIAAAVIhgAAIAAgVIl5AAgA0WVYIEbAAIAAAmIDHAAIAAh2ICyAAIAAmnIqUAAgABsL0IAAgNIm/AAIAAgMIhJAAIAAAMIllAAIAAgMIhJAAIAAAMIi3AAIAAoAIDOAAIAAgWIAXAAIAAgNICIAAIAAANIAXAAIAAAXIBaAAIAAgZIAXAAIAAgNICIAAIAAANIAcAAIAAAaIDQAAIAABHIDDAAICMiLIAAjJIhKAAIAAjSIgZAAIAAgbIgMAAIAAiEIAMAAIAAgcIAYAAIAAhUIgXAAIAAgaIgMAAIAAiLIAMAAIAAgZIAYAAIAAjFIgVAAIAAjuIgrAAIAAgmIgMAAIAAjtIAMAAIAAgsIAtAAIAAgMIDrAAIAAAMIAqAAIAAAsIECAAIAAEDIgNAAIAABOIAMAAIAAFdIgMAAIAABUIAMAAIAANoIANAAIAABuIgNAAIAAEJIghAhIgEgDQgKgJgOgEQgcgJgWAWQgXAXAKAdQAFAPAKAKIADAEIghAgIkTAAIAAANgAlOLWIAAAMICxAAIEOAAIAAANIBcAAIAAgNIC3AAIBfAAIAcgcQgKgLgGgQQgKgeAWgYIACgCQAYgYAfAJQAQAFAKAJIAdgcIAAheIAAiuIANAAIAAhkIgNAAIAAkPIAAm0IAAilIgMAAIAAheIAMAAIAAitIAAimIgMAAIAAhYIANAAIAAj5IkCAAIAAgsIgqAAIAAgMIjhAAIAAAMIgtAAIAAAsIgMAAIAADjIAMAAIAAAmIArAAIAADuIAVAAIAADPIgYAAIAAAZIgMAAIAACBIAMAAIAAAaIAXAAIAAAtIAAAxIgYAAIAAAcIgMAAIAAB6IAMAAIAAAbIAZAAIAADSIBKAAIAADQIhIBHIhHBHIjKAAIAAhHIjQAAIAAA/IjgAAIAAg/IAAA/IAAG1ICsAAIAAgMgAr3LRIAAAMIClAAIAAmrIjhAAIAAhBIjEAAIAAHsICjAAIAAgMgApIEoIDWAAIAAhPIgcAAIAAgNIh0AAIAAANIgXAAIAAAZIgvAAgAspEoIDXAAIAAg2Ig1AAIAAgXIgXAAIAAgNIh0AAIAAANIgXAAg");
	this.shape_36.setTransform(131.275,161.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},4).wait(31));

	// _0_copy
	this.unt5_floor3 = new lib.Unt5_floor3();
	this.unt5_floor3.name = "unt5_floor3";
	this.unt5_floor3.parent = this;
	this.unt5_floor3.setTransform(187.8,154.1,1,1,0,0,0,186.8,153.4);
	this.unt5_floor3.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.unt5_floor3).to({_off:true},4).wait(31));

	// outlines
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#221F20").p("Ac+rnIAABeIgJAAIAAAkIiTAAIAAghIiwAAIAAARIhaAAIAAgRIlAAAIAAARIhXAAIAAgRIm7AAIAAgRIhkAAIAAAPIkTAAIgeAeIAQAcQALAggWAWIgDACQgZAXgggJIgbgOIgbAbIAAEXIgQAAIAABcIATAAIAAG+IALAAIAABiIgOAAIAAE+IAKAAIAABTIgLAAIABCwIGUAAIAAB6IgOAAIAAAaIhdAAIAAgaIscAAIAAAXIhRAAIAAgXIlKAAIAAAVIhWAAIAAgVIuSAAIAAgWIgLAAIAAhdIAJAAIAAglICTAAIAAAeICsAAIAAgMIBUAAIAAAMIFaAAIAAgMIBTAAIAAAMIHBAAIAAANIBcAAIAAgNIEVAAIAcgcQgKgLgFgQQgLggAZgYQAYgYAfAJQAPAFALAJIAcgcIAAkMIAOAAIAAhkIgNAAIAAtoIgMAAIAAheIAMAAIAAlTIgMAAIAAhYIAMAAIAAjXIB+AAIAAFqIF/AAIAAgKIBUAAIAAAKIFFAAIAAgKIBbAAIAAAKIIsAAIAAgKIBaAAIAAAKICdAAIAAgGIBYAAIAAAgg");
	this.shape_37.setTransform(199.025,136.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A17D56").s().p("AFtRtIAAgaIscAAIAAAXIhRAAIAAgXIlKAAIAAAVIhWAAIAAgVIuSAAIAAgWIgLAAIAAheIAJAAIAAgkICTAAIAAAeICsAAIAAgMIBUAAIAAAMIFaAAIAAgMIBTAAIAAAMIHBAAIAAANIBcAAIAAgNIEVAAIAcgcQgKgLgFgQQgLggAZgYQAYgZAfAKQAPAFALAJIAcgcIAAkMIAOAAIAAhkIgNAAIAAtoIgMAAIAAheIAMAAIAAlTIgMAAIAAhYIAMAAIAAjYIB+AAIAAFrIF/AAIAAgKIBUAAIAAAKIFFAAIAAgKIBbAAIAAAKIIsAAIAAgKIBaAAIAAAKICdAAIAAgGIBYAAIAAAgIALAAIAABeIgJAAIAAAkIiTAAIAAghIiwAAIAAARIhaAAIAAgRIlAAAIAAARIhXAAIAAgRIm7AAIAAgRIhkAAIAAAQIkTAAIgeAdIAQAcQALAggWAWIgDACQgZAXgggJIgbgOIgbAaIAAEXIgQAAIAABdIATAAIAAG+IALAAIAABhIgOAAIAAE+IAKAAIAABUIgLAAIABCwIGUAAIAAB6IgOAAIAAAag");
	this.shape_38.setTransform(199.025,136.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#221F20").p("AhGBzIAAjVIAbAAIAAgLIBlAAIAAALIASAA");
	this.shape_39.setTransform(21.6,220.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#221F20").p("AAiBeIAAi2IhDAAIAAC2");
	this.shape_40.setTransform(22.525,222.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#221F20").p("ABMhEIiSAAIAACO");
	this.shape_41.setTransform(21.6,224.525);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#221F20").p("ABJAAIiSAA");
	this.shape_42.setTransform(21.85,229.15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#221F20").p("ABJAAIiSAA");
	this.shape_43.setTransform(21.85,226.65);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#221F20").p("ABJAAIiSAA");
	this.shape_44.setTransform(21.85,223.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#221F20").p("ABJAAIiSAA");
	this.shape_45.setTransform(21.85,220.65);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#221F20").p("AhGBRIAABdIALAAIAAAWIgZAAIAAmHICpAAIAADvIiSAAIAAAlg");
	this.shape_46.setTransform(20.7,227.475);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C0B59E").s().p("AhUDEIAAmHICpAAIAADvIiSAAIAAAlIgJAAIAABdIALAAIAAAWg");
	this.shape_47.setTransform(20.7,227.475);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#221F20").p("ABHhyIAADVIgcAAIAAALIhlAAIAAgLIgRAA");
	this.shape_48.setTransform(376.425,86.475);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#221F20").p("AghhdIAAC2IBDAAIAAi2");
	this.shape_49.setTransform(375.5,84.375);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#221F20").p("AhLBFICSAAIAAiO");
	this.shape_50.setTransform(376.425,82.375);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#221F20").p("AhIAAICRAA");
	this.shape_51.setTransform(376.175,77.75);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#221F20").p("AhIAAICRAA");
	this.shape_52.setTransform(376.175,80.25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#221F20").p("AhIAAICRAA");
	this.shape_53.setTransform(376.175,83.25);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#221F20").p("AhIAAICRAA");
	this.shape_54.setTransform(376.175,86.25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#221F20").p("ABVjUIAAGpIipAAIAAjwICSAAIAAgkIAJAAIAAheIgLAAIAAgfIhXAAIAAgYg");
	this.shape_55.setTransform(377.325,77.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C0B59E").s().p("AhUDVIAAjwICSAAIAAgkIAJAAIAAhdIgLAAIAAghIhXAAIAAgWIBwAAIAAGog");
	this.shape_56.setTransform(377.325,77.75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#221F20").p("ADXi5IAAG0IiuAAIAAgNIhTAAIAAANIisAAIAAn1IDOAAIAABBg");
	this.shape_57.setTransform(50.725,209.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#221F20").p("AAAjXIAAGv");
	this.shape_58.setTransform(332.2,37.775);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#221F20").p("AAAkPIAAIf");
	this.shape_59.setTransform(268.95,32.175);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#221F20").p("AhigfIAAA6IDKAA");
	this.shape_60.setTransform(364.05,12.925);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#221F20").p("Ah1g6IAABwIDwAA");
	this.shape_61.setTransform(299.925,10.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#221F20").p("AB1g6IAABwIjuAA");
	this.shape_62.setTransform(238.3,10.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#221F20").p("AUckwIAAIGIhlAAIAABLIggAAIAAAQIh+AAIAAgNIgdAAIAAgkIjQAAIAAh4Il+AAIAACQIgpAAIAAARIidAAIAAgRIgqAAIAAgfIl+AAIAAAhIgnAAIAAAMIikAAIAAgRIgoAAIAAiUIl8AAIAAB1IjRAAIAAAsIgaAAIAAAPIh8AAIAAgQIgaAAIAAhQIhrAAIAAoBIQhAAIAAAWIBWAAIAAgWIFIAAIAAAYIBSAAIAAgYIMdAAIAAAaIBcAAIAAgag");
	this.shape_63.setTransform(131.275,277.525);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#221F20").p("AhaAYIAAgqIC6AA");
	this.shape_64.setTransform(242.375,300.775);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#221F20").p("Ah1A7IAAhwIDwAA");
	this.shape_65.setTransform(162.05,296.525);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#221F20").p("AB3A/IAAh4IjyAA");
	this.shape_66.setTransform(100.075,296.15);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#221F20").p("AhagPICwAAIAAAk");
	this.shape_67.setTransform(20.25,300.025);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#221F20").p("AAAjbIAAG4");
	this.shape_68.setTransform(194.5,269.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#221F20").p("AAAkUIAAIp");
	this.shape_69.setTransform(131.3,274.725);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#221F20").p("AAAjYIAAGx");
	this.shape_70.setTransform(67.45,268.725);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#221F20").p("AUbw+IAAgpIAdAAIAAgKICYAAIAAAKIAXAAIAABkARAv+IAAhAIDbAAIAAA7IDMAAIAAG2IicAAIAAgKIhaAAIAAAKIixAAIl7AAIAAgKIhcAAIAAAKIihAAIikAAIAAgKIhUAAIAAAKIl9AAIAAmxIDIAAIAAiQIAoAAIAAgKICbAAIAAAKIAsAAIAAAgIAABwIjvAAAQGnSICeAAIAAARIBaAAIAAgRICxAAIAAHwIjeAAARAv+IAAGxAQGgbIDLAAIAAA5IAAAkIgcAAIAAARIiVAAIAAgPIgaAAIgdAAIAAAPIiXAAIAAgRIgiAAIAAgmIAAg3IDWAAIAABfAQGnSIAAG3AKHxuIAAggIAqAAIAAgKIChAAIAAAKIAnAAIAACQIDHAAAKHxuIAABwIDyAAAEKxuIC+AAIC/AAAA6nUIC0AAIAAgPIBkAAIAAARIEBAAIC6AAIAAARIBXAAIAAgRICiAAAHIxuIAAIhAs7rRIgrAAIAAglIgMAAIAAjkIAMAAIAAgrIAtAAIAAgNIDhAAIAAANIAqAAIAAArIECAAIAAD5IgNAAIAABYIAMAAIAACmIAACuIgMAAIAABeIAMAAIAAClIAAGzIAAEPIANAAIAABkIgNAAIAACuIAABeIgdAdQgKgKgQgEQgfgKgYAYQgBACgBABQgWAXAKAfQAGAQAKALIgcAcIhfAAIi3AAIAAAMIhcAAIAAgMIkPAAIixAAIAAgNIhTAAIAAANIisAAIAAm1IAAg/As7rRIBAAAIAAjIIDNAAIAAhBAhBlkIACACIACgCQAWgWgLggIgPgdIAdgdIBeAAAiujpIAAhfIAagaIAcANQAgAKAZgXIAzAzIAIAJIAAgBIA+g/IAAhuAiujpIBtAAIA9g9IFLFLIhHBHIAADIIBBAAIAADjAgMkvIAIAIAisE0IAAkJIgSAAIAAhcIAQAAIAAi4AiuLlIAAiaIAOAAIAAhhIgMAAIAAi2IgCAAAFHAlIACACAMwAcIjdAAIAAhBIjBAAIhLBKAEFLlIAAjOIA8AAIAlAAIAAAhIAPAAIAACUIgPAAIAAAZIhhAAImzAAAFmLlIAAAbIAPAAIAACWIgPAAIAAAeIgmAAIAADZInuAAIgBixIALAAIAAhTIgKAAIAAikAEAE0ImsAAAJTglIAAmtAsngyIAAguIgXAAIAAgaIgMAAIAAiBIAMAAIAAgZIAYAAArcgyIAAjiIhKAAIAAjPIgVAAIAAjuAsmCvIgZAAIAAgcIgMAAIAAh5IAMAAIAAgcIAYAAIAAgwArcgyIhLAAAsmCvIBKAAIAAjhIGvAAA3mLYIDgAAIAAg/IDQAAIAABHIDLAAIBHhHIBIhIIAAjQIhKAAIAAjSAFAO0Ig7AAIAAjPAktOiIhoAAIhDBDIg8A8IAABsAmdQgIg7g7Aw2LgIAAGtAskKZIFMFMAsmnjIH5AAArcGBIGvAA");
	this.shape_71.setTransform(223.375,118.425);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C0B59E").s().p("AgDgDIAHAHIAAAAg");
	this.shape_72.setTransform(222.5,88.475);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#221F20").s().p("AQUXCIAAgMIgdAAIAAgkIjQAAIAAh4Il0AAIAACPIgpAAIAAASIinAAIAAgSIgqAAIAAgfIl0AAIAAAiIgnAAIAAALIiuAAIAAgQIgoAAIAAiVIlyAAIAAB2IjRAAIAAArIgaAAIAAAPIiGAAIAAgQIgaAAIAAhQIhrAAIAAoLIQrAAIAAAVIBMAAIAAgVIFSAAIAAAXIBIAAIAAgXIMnAAIAAAaIBSAAIAAgaIC3AAIAAIQIhlAAIAABLIggAAIAAAQgAQBWsIAdAAIAAAMIB0AAIAAgQIAgAAIAAhBIixAAgAyrWoIAaAAIAAAQIByAAIAAgPIAaAAIAAhHIimAAgADDWfIAqAAIAAASICTAAIAAgSIApAAIAAiFIjmAAgAmuWdIAoAAIAAAQICaAAIAAgLIAnAAIAAiQIjpAAgAJ9UQIC0AAIAAB4IDGAAIAAgrIEgAAIAAn8IijAAIAAAaIhmAAIAAgaImRAAgAAFWAIC0AAIAAhwIG6AAIAAmvIl4AAIAAAXIhcAAIAAgXIiaAAgAp4UIIG9AAIAAB4IC3AAIAAofIibAAIAAAVIhgAAIAAgVIl5AAgA0WVYIEbAAIAAAmIDHAAIAAh2ICyAAIAAmnIqUAAgABsL0IAAgNIm/AAIAAgMIhJAAIAAAMIllAAIAAgMIhJAAIAAAMIi3AAIAAoAIDOAAIAAgWIAXAAIAAgNICIAAIAAANIAXAAIAAAXIBaAAIAAgZIAXAAIAAgNICIAAIAAANIAcAAIAAAaIDQAAIAABHIDDAAICMiLIAAjJIhKAAIAAjSIgZAAIAAgbIgMAAIAAiEIAMAAIAAgcIAYAAIAAhUIgXAAIAAgaIgMAAIAAiLIAMAAIAAgZIAYAAIAAjFIgVAAIAAjuIgrAAIAAgmIgMAAIAAjtIAMAAIAAgsIAtAAIAAgMIDrAAIAAAMIAqAAIAAAsIECAAIAAEDIgNAAIAABOIAMAAIAAFdIgMAAIAABUIAMAAIAANoIANAAIAABuIgNAAIAAEJIghAhIgEgDQgKgJgOgEQgcgJgWAWQgXAXAKAdQAFAPAKAKIADAEIghAgIkTAAIAAANgAlOLWIAAAMICxAAIEOAAIAAANIBcAAIAAgNIC3AAIBfAAIAcgcQgKgLgGgQQgKgeAWgYIACgCQAYgYAfAJQAQAFAKAJIAdgcIAAheIAAiuIANAAIAAhkIgNAAIAAkPIAAm0IAAilIgMAAIAAheIAMAAIAAitIAAimIgMAAIAAhYIANAAIAAj5IkCAAIAAgsIgqAAIAAgMIjhAAIAAAMIgtAAIAAAsIgMAAIAADjIAMAAIAAAmIArAAIAADuIAVAAIAADPIgYAAIAAAZIgMAAIAACBIAMAAIAAAaIAXAAIAAAtIAAAxIgYAAIAAAcIgMAAIAAB6IAMAAIAAAbIAZAAIAADSIBKAAIAADQIhIBHIhHBHIjKAAIAAhHIjQAAIAAA/IjgAAIAAg/IAAA/IAAG1ICsAAIAAgMgAr3LRIAAAMIClAAIAAmrIjhAAIAAhBIjEAAIAAHsICjAAIAAgMgApIEoIDWAAIAAhPIgcAAIAAgNIh0AAIAAANIgXAAIAAAZIgvAAgAspEoIDXAAIAAg2Ig1AAIAAgXIgXAAIAAgNIh0AAIAAANIgXAAg");
	this.shape_73.setTransform(131.275,161.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]}).to({state:[]},4).wait(31));

	// _0
	this.unt5_floor2 = new lib.Unt5_Floor2();
	this.unt5_floor2.name = "unt5_floor2";
	this.unt5_floor2.parent = this;
	this.unt5_floor2.setTransform(187.8,154.1,1,1,0,0,0,186.8,153.4);
	this.unt5_floor2.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.unt5_floor2).to({_off:true},4).wait(31));

	// overlines
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#221F20").p("Ac+rnIAABeIgJAAIAAAkIiTAAIAAghIiwAAIAAARIhaAAIAAgRIlAAAIAAARIhXAAIAAgRIm7AAIAAgRIhkAAIAAAPIkTAAIgeAeIAQAcQALAggWAWIgDACQgZAXgggJIgbgOIgbAbIAAEXIgQAAIAABcIATAAIAAG+IALAAIAABiIgOAAIAAE+IAKAAIAABTIgLAAIABCwIGUAAIAAB6IgOAAIAAAaIhdAAIAAgaIscAAIAAAXIhRAAIAAgXIlKAAIAAAVIhWAAIAAgVIuSAAIAAgWIgLAAIAAhdIAJAAIAAglICTAAIAAAeICsAAIAAgMIBUAAIAAAMIFaAAIAAgMIBTAAIAAAMIHBAAIAAANIBcAAIAAgNIEVAAIAcgcQgKgLgFgQQgLggAZgYQAYgYAfAJQAPAFALAJIAcgcIAAkMIAOAAIAAhkIgNAAIAAtoIgMAAIAAheIAMAAIAAlTIgMAAIAAhYIAMAAIAAjXIB+AAIAAFqIF/AAIAAgKIBUAAIAAAKIFFAAIAAgKIBbAAIAAAKIIsAAIAAgKIBaAAIAAAKICdAAIAAgGIBYAAIAAAgg");
	this.shape_74.setTransform(199.025,136.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A17D56").s().p("AFtRtIAAgaIscAAIAAAXIhRAAIAAgXIlKAAIAAAVIhWAAIAAgVIuSAAIAAgWIgLAAIAAheIAJAAIAAgkICTAAIAAAeICsAAIAAgMIBUAAIAAAMIFaAAIAAgMIBTAAIAAAMIHBAAIAAANIBcAAIAAgNIEVAAIAcgcQgKgLgFgQQgLggAZgYQAYgZAfAKQAPAFALAJIAcgcIAAkMIAOAAIAAhkIgNAAIAAtoIgMAAIAAheIAMAAIAAlTIgMAAIAAhYIAMAAIAAjYIB+AAIAAFrIF/AAIAAgKIBUAAIAAAKIFFAAIAAgKIBbAAIAAAKIIsAAIAAgKIBaAAIAAAKICdAAIAAgGIBYAAIAAAgIALAAIAABeIgJAAIAAAkIiTAAIAAghIiwAAIAAARIhaAAIAAgRIlAAAIAAARIhXAAIAAgRIm7AAIAAgRIhkAAIAAAQIkTAAIgeAdIAQAcQALAggWAWIgDACQgZAXgggJIgbgOIgbAaIAAEXIgQAAIAABdIATAAIAAG+IALAAIAABhIgOAAIAAE+IAKAAIAABUIgLAAIABCwIGUAAIAAB6IgOAAIAAAag");
	this.shape_75.setTransform(199.025,136.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#221F20").p("AhGBzIAAjVIAbAAIAAgLIBlAAIAAALIASAA");
	this.shape_76.setTransform(21.6,220.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#221F20").p("AAiBeIAAi2IhDAAIAAC2");
	this.shape_77.setTransform(22.525,222.325);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#221F20").p("ABMhEIiSAAIAACO");
	this.shape_78.setTransform(21.6,224.325);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#221F20").p("ABJAAIiSAA");
	this.shape_79.setTransform(21.85,228.95);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#221F20").p("ABJAAIiSAA");
	this.shape_80.setTransform(21.85,226.45);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#221F20").p("ABJAAIiSAA");
	this.shape_81.setTransform(21.85,223.45);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#221F20").p("ABJAAIiSAA");
	this.shape_82.setTransform(21.85,220.45);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#221F20").p("AhGBRIAABdIALAAIAAAWIgZAAIAAmHICpAAIAADvIiSAAIAAAlg");
	this.shape_83.setTransform(20.7,227.275);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C0B59E").s().p("AhUDEIAAmHICpAAIAADvIiSAAIAAAlIgJAAIAABdIALAAIAAAWg");
	this.shape_84.setTransform(20.7,227.275);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#221F20").p("ABHhyIAADVIgcAAIAAALIhlAAIAAgLIgRAA");
	this.shape_85.setTransform(376.425,86.275);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#221F20").p("AghhdIAAC2IBDAAIAAi2");
	this.shape_86.setTransform(375.5,84.175);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#221F20").p("AhLBFICSAAIAAiO");
	this.shape_87.setTransform(376.425,82.175);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#221F20").p("AhIAAICRAA");
	this.shape_88.setTransform(376.175,77.55);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#221F20").p("AhIAAICRAA");
	this.shape_89.setTransform(376.175,80.05);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#221F20").p("AhIAAICRAA");
	this.shape_90.setTransform(376.175,83.05);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#221F20").p("AhIAAICRAA");
	this.shape_91.setTransform(376.175,86.05);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#221F20").p("ABVjUIAAGpIipAAIAAjwICSAAIAAgkIAJAAIAAheIgLAAIAAgfIhXAAIAAgYg");
	this.shape_92.setTransform(377.325,77.55);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C0B59E").s().p("AhUDVIAAjwICSAAIAAgkIAJAAIAAhdIgLAAIAAghIhXAAIAAgWIBwAAIAAGog");
	this.shape_93.setTransform(377.325,77.55);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#221F20").p("ADXi5IAAG0IiuAAIAAgNIhTAAIAAANIisAAIAAn1IDOAAIAABBg");
	this.shape_94.setTransform(50.725,209.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#221F20").p("AAAjXIAAGv");
	this.shape_95.setTransform(332.2,37.575);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#221F20").p("AAAkPIAAIf");
	this.shape_96.setTransform(268.95,31.975);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#221F20").p("AhigfIAAA6IDKAA");
	this.shape_97.setTransform(364.05,12.725);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#221F20").p("Ah1g6IAABwIDwAA");
	this.shape_98.setTransform(299.925,10.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#221F20").p("AB1g6IAABwIjuAA");
	this.shape_99.setTransform(238.3,10.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#221F20").p("AUckwIAAIGIhlAAIAABLIggAAIAAAQIh+AAIAAgNIgdAAIAAgkIjQAAIAAh4Il+AAIAACQIgpAAIAAARIidAAIAAgRIgqAAIAAgfIl+AAIAAAhIgnAAIAAAMIikAAIAAgRIgoAAIAAiUIl8AAIAAB1IjRAAIAAAsIgaAAIAAAPIh8AAIAAgQIgaAAIAAhQIhrAAIAAoBIQhAAIAAAWIBWAAIAAgWIFIAAIAAAYIBSAAIAAgYIMdAAIAAAaIBcAAIAAgag");
	this.shape_100.setTransform(131.275,277.325);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#221F20").p("AhaAYIAAgqIC6AA");
	this.shape_101.setTransform(242.375,300.575);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#221F20").p("Ah1A7IAAhwIDwAA");
	this.shape_102.setTransform(162.05,296.325);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#221F20").p("AB3A/IAAh4IjyAA");
	this.shape_103.setTransform(100.075,295.95);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#221F20").p("AhagPICwAAIAAAk");
	this.shape_104.setTransform(20.25,299.825);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#221F20").p("AAAjbIAAG4");
	this.shape_105.setTransform(194.5,268.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#221F20").p("AAAkUIAAIp");
	this.shape_106.setTransform(131.3,274.525);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#221F20").p("AAAjYIAAGx");
	this.shape_107.setTransform(67.45,268.525);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#221F20").p("AUbw+IAAgpIAdAAIAAgKICYAAIAAAKIAXAAIAABkIAAG2IicAAIAAgKIhaAAIAAAKIixAAIl7AAIAAgKIhcAAIAAAKIihAAIikAAIAAgKIhUAAIAAAKIl9AAIAAmxIDIAAARAv+IAAhAIDbAAIAAA7IDMAAAQGnSICeAAIAAARIBaAAIAAgRICxAAIAAHwIjeAAARAv+IAAGxAQGgbIDLAAIAAA5IAAAkIgcAAIAAARIiVAAIAAgPIgaAAIgdAAIAAAPIiXAAIAAgRIgiAAIAAgmIAAg3IDWAAIAABfAQGnSIAAG3AKHxuIAAggIAqAAIAAgKIChAAIAAAKIAnAAIAACQIDHAAAKHxuIAABwIDyAAAEKxuIC+AAIC/AAAEKxuIAABwIjvAAIAAiQIAoAAIAAgKICbAAIAAAKIAsAAgAA6nUIC0AAIAAgPIBkAAIAAARIEBAAIC6AAIAAARIBXAAIAAgRICiAAAHIxuIAAIhAs7rRIgrAAIAAglIgMAAIAAjkIAMAAIAAgrIAtAAIAAgNIDhAAIAAANIAqAAIAAArIECAAIAAD5IgNAAIAABYIAMAAIAACmIAACuIgMAAIAABeIAMAAIAAClIAAGzIAAEPIANAAIAABkIgNAAIAACuIhoAAIhDBDIg8A8IAABsIi3AAIAAAMIhcAAIAAgMIkPAAIixAAIAAgNIhTAAIAAANIisAAIAAm1IAAg/As7rRIBAAAIAAjIIDNAAIAAhBAhBlkIACACIACgCQAWgWgLggIgPgdIAdgdIBeAAAiujpIAAhfIAagaIAcANQAgAKAZgXIAzAzIAIAIIA+g/IAAhuAiujpIBtAAIA9g+IAAAAAgMkvIAIAIIFLFMIhHBHIAADIIBBAAIAADjIAlAAIAAAhIAPAAIAACUIgPAAIAAAZIhhAAIAAjOIA8AAAisE0IAAkJIgSAAIAAhcIAQAAIAAi4AisE0IgCAAAiuLlIAAiaIAOAAIAAhhIgMAAIAAi2AFHAlIACACAMwAcIjdAAIAAhBIjBAAIhLBKAFmLlIAAAbIAPAAIAACWIgPAAIAAAeIgmAAIAADZInuAAIgBixIALAAIAAhTIgKAAIAAikAEFLlImzAAAEAE0ImsAAAJTglIAAmtAsngyIAAguIgXAAIAAgaIgMAAIAAiBIAMAAIAAgZIAYAAArcgyIAAjiIhKAAIAAjPIgVAAIAAjuAsmCvIgZAAIAAgcIgMAAIAAh5IAMAAIAAgcIAYAAIAAgwArcgyIhLAAAsmCvIBKAAIAAjhIGvAAA3mLYIDgAAIAAg/IDQAAIAABHIDLAAIBHhHIBIhIIAAjQIhKAAIAAjSAFAO0Ig7AAIAAjPAktOiIAABeIgdAdQgKgKgQgEQgfgKgYAYQgBACgBABQgWAXAKAfQAGAQAKALIgcAcIhfAAAmdQgIg7g7Aw2LgIAAGtArcGBIGvAAAskKZIFMFMAsmnjIH5AA");
	this.shape_108.setTransform(223.375,118.225);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#221F20").s().p("AQUXCIAAgMIgdAAIAAgkIjQAAIAAh4Il0AAIAACPIgpAAIAAASIinAAIAAgSIgqAAIAAgfIl0AAIAAAiIgnAAIAAALIiuAAIAAgQIgoAAIAAiVIlyAAIAAB2IjRAAIAAArIgaAAIAAAPIiGAAIAAgQIgaAAIAAhQIhrAAIAAoLIQrAAIAAAVIBMAAIAAgVIFSAAIAAAXIBIAAIAAgXIMnAAIAAAaIBSAAIAAgaIC3AAIAAIQIhlAAIAABLIggAAIAAAQgAQBWsIAdAAIAAAMIB0AAIAAgQIAgAAIAAhBIixAAgAyrWoIAaAAIAAAQIByAAIAAgPIAaAAIAAhHIimAAgADDWfIAqAAIAAASICTAAIAAgSIApAAIAAiFIjmAAgAmuWdIAoAAIAAAQICaAAIAAgLIAnAAIAAiQIjpAAgAJ9UQIC0AAIAAB4IDGAAIAAgrIEgAAIAAn8IijAAIAAAaIhmAAIAAgaImRAAgAAFWAIC0AAIAAhwIG6AAIAAmvIl4AAIAAAXIhcAAIAAgXIiaAAgAp4UIIG9AAIAAB4IC3AAIAAofIibAAIAAAVIhgAAIAAgVIl5AAgA0WVYIEbAAIAAAmIDHAAIAAh2ICyAAIAAmnIqUAAgABsL0IAAgNIm/AAIAAgMIhJAAIAAAMIllAAIAAgMIhJAAIAAAMIi3AAIAAoAIDOAAIAAgWIAXAAIAAgNICIAAIAAANIAXAAIAAAXIBaAAIAAgZIAXAAIAAgNICIAAIAAANIAcAAIAAAaIDQAAIAABHIDDAAICMiLIAAjJIhKAAIAAjSIgZAAIAAgbIgMAAIAAiEIAMAAIAAgcIAYAAIAAhUIgXAAIAAgaIgMAAIAAiLIAMAAIAAgZIAYAAIAAjFIgVAAIAAjuIgrAAIAAgmIgMAAIAAjtIAMAAIAAgsIAtAAIAAgMIDrAAIAAAMIAqAAIAAAsIECAAIAAEDIgNAAIAABOIAMAAIAAFdIgMAAIAABUIAMAAIAANoIANAAIAABuIgNAAIAAEJIgiAhIgDgDQgKgJgOgEQgcgJgWAWQgXAXAKAdQAFAPAKAKIACADIggAhIkTAAIAAANgAlOLWIAAAMICxAAIEOAAIAAANIBcAAIAAgNIC3AAIBfAAIAcgcQgKgLgGgQQgKgeAWgYIACgCQAYgYAfAJQAQAFAKAJIAdgcIAAheIAAiuIANAAIAAhkIgNAAIAAkPIAAm0IAAilIgMAAIAAheIAMAAIAAitIAAimIgMAAIAAhYIANAAIAAj5IkCAAIAAgsIgqAAIAAgMIjhAAIAAAMIgtAAIAAAsIgMAAIAADjIAMAAIAAAmIArAAIAADuIAVAAIAADPIgYAAIAAAZIgMAAIAACBIAMAAIAAAaIAXAAIAAAtIAAAxIgYAAIAAAcIgMAAIAAB6IAMAAIAAAbIAZAAIAADSIBKAAIAADQIhIBHIhHBHIjKAAIAAhHIjQAAIAAA/IjgAAIAAg/IAAA/IAAG1ICsAAIAAgMgAr3LRIAAAMIClAAIAAmrIjhAAIAAhBIjEAAIAAHsICjAAIAAgMgApIEoIDWAAIAAhPIgcAAIAAgNIh0AAIAAANIgXAAIAAAZIgvAAgAspEoIDXAAIAAg2Ig1AAIAAgXIgXAAIAAgNIh0AAIAAANIgXAAg");
	this.shape_109.setTransform(131.275,160.875);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C0B59E").s().p("AgDgDIAHAHIAAAAg");
	this.shape_110.setTransform(222.4875,88.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]}).to({state:[]},4).wait(31));

	// f1apt1
	this.unt5_floor1 = new lib.Unt5_Floor1_apartments();
	this.unt5_floor1.name = "unt5_floor1";
	this.unt5_floor1.parent = this;
	this.unt5_floor1.setTransform(187.8,153.9,1,1,0,0,0,186.8,153.4);

	this.timeline.addTween(cjs.Tween.get(this.unt5_floor1).to({_off:true},4).wait(31));

	// Unt5_floor1
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(0,0,0,0.498)").s().p("EhZtA/FMAAAh+JMCzbAAAMAAAB+Jg");
	this.shape_111.setTransform(219.525,174.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_111).to({_off:true},4).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354.7,-229.2,1148.5,807.4000000000001);


(lib.Buildling3000down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Up
	this.instance = new lib._3000upsymbol("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(157,115.2,1,1,0,0,0,157,115.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314,230.4);


(lib.Buildling3000backgroundsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Up
	this.instance = new lib._3000upsymbol("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(157,115.2,1,1,0,0,0,157,115.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314,230.4);


(lib.Buildling2000down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib._2000upsymbol("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(175.3,130.2,1,1,0,0,0,175.3,130.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350.7,260.3);


(lib.Buildling2000backgroundsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib._2000upsymbol("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(175.3,130.2,1,1,0,0,0,175.3,130.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350.7,260.3);


(lib._5000oversymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.overupclip5000 = new lib._5000overmoviesymbol();
	this.overupclip5000.name = "overupclip5000";
	this.overupclip5000.parent = this;
	this.overupclip5000.setTransform(151.3,128.5,1,1,0,0,0,151.3,128.5);

	this.timeline.addTween(cjs.Tween.get(this.overupclip5000).wait(1).to({y:124.05},0).wait(1).to({y:120.15},0).wait(1).to({y:116.75},0).wait(1).to({y:113.85},0).wait(1).to({y:111.35},0).wait(1).to({y:109.25},0).wait(1).to({y:107.5},0).wait(1).to({y:106.05},0).wait(1).to({y:104.85},0).wait(1).to({y:103.9},0).wait(1).to({y:103.1},0).wait(1).to({y:102.5},0).wait(1).to({y:102.05},0).wait(1).to({y:101.7},0).wait(1).to({y:101.5},0).wait(1).to({y:101.3},0).wait(1).to({y:101.2},0).wait(1).to({y:101.15},0).wait(1).to({y:101.1},0).wait(4).to({y:101.05},0).wait(1));

	// Layer_2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(163.4,136.8,1,1,0,0,0,145.4,118.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:165.35,y:138.75,alpha:0.9783},0).wait(1).to({x:167.05,y:140.45,alpha:0.9565},0).wait(1).to({x:168.5,y:141.9,alpha:0.9348},0).wait(1).to({x:169.8,y:143.2,alpha:0.913},0).wait(1).to({x:170.85,y:144.25,alpha:0.8913},0).wait(1).to({x:171.8,y:145.2,alpha:0.8696},0).wait(1).to({x:172.55,y:145.95,alpha:0.8478},0).wait(1).to({x:173.2,y:146.6,alpha:0.8261},0).wait(1).to({x:173.75,y:147.15,alpha:0.8043},0).wait(1).to({x:174.15,y:147.55,alpha:0.7826},0).wait(1).to({x:174.5,y:147.9,alpha:0.7609},0).wait(1).to({x:174.75,y:148.15,alpha:0.7391},0).wait(1).to({x:174.95,y:148.35,alpha:0.7174},0).wait(1).to({x:175.1,y:148.5,alpha:0.6957},0).wait(1).to({x:175.2,y:148.6,alpha:0.6739},0).wait(1).to({x:175.25,y:148.65,alpha:0.6522},0).wait(1).to({x:175.3,y:148.7,alpha:0.6304},0).wait(1).to({x:175.35,y:148.75,alpha:0.6087},0).wait(1).to({alpha:0.587},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.5435},0).wait(1).to({alpha:0.5217},0).wait(1).to({x:175.4,y:148.8,alpha:0.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-27.4,320.9,295);


(lib._5000hitsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._5000downsymbol("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(151.3,128.5,1,1,0,0,0,151.3,128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,302.6,257.1);


(lib._4000oversymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.instance = new lib.oversymbolgraphic("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(118.1,118.1,1,1,0,0,0,118.1,118.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:114},0).wait(1).to({y:110.4},0).wait(1).to({y:107.25},0).wait(1).to({y:104.55},0).wait(1).to({y:102.25},0).wait(1).to({y:100.3},0).wait(1).to({y:98.65},0).wait(1).to({y:97.3},0).wait(1).to({y:96.2},0).wait(1).to({y:95.3},0).wait(1).to({y:94.6},0).wait(1).to({y:94.05},0).wait(1).to({y:93.65},0).wait(1).to({y:93.3},0).wait(1).to({y:93.1},0).wait(1).to({y:92.95},0).wait(1).to({y:92.85},0).wait(1).to({y:92.8},0).wait(1).to({y:92.75},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:92.7},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(125.9,131.2,1,1,0,0,0,108.9,114.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:128,y:133.3,alpha:0.9783},0).wait(1).to({x:129.85,y:135.15,alpha:0.9565},0).wait(1).to({x:131.45,y:136.75,alpha:0.9348},0).wait(1).to({x:132.8,y:138.1,alpha:0.913},0).wait(1).to({x:134,y:139.3,alpha:0.8913},0).wait(1).to({x:135,y:140.3,alpha:0.8696},0).wait(1).to({x:135.85,y:141.15,alpha:0.8478},0).wait(1).to({x:136.5,y:141.8,alpha:0.8261},0).wait(1).to({x:137.1,y:142.4,alpha:0.8043},0).wait(1).to({x:137.55,y:142.85,alpha:0.7826},0).wait(1).to({x:137.9,y:143.2,alpha:0.7609},0).wait(1).to({x:138.2,y:143.5,alpha:0.7391},0).wait(1).to({x:138.4,y:143.7,alpha:0.7174},0).wait(1).to({x:138.55,y:143.85,alpha:0.6957},0).wait(1).to({x:138.7,y:144,alpha:0.6739},0).wait(1).to({x:138.75,y:144.05,alpha:0.6522},0).wait(1).to({x:138.8,y:144.1,alpha:0.6304},0).wait(1).to({x:138.85,y:144.15,alpha:0.6087},0).wait(1).to({alpha:0.587},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.5435},0).wait(1).to({alpha:0.5217},0).wait(1).to({x:138.9,y:144.2,alpha:0.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.4,247.8,283.9);


(lib._3000oversymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.instance = new lib.overnup3000("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(157,115.2,1,1,0,0,0,157,115.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:111.1},0).wait(1).to({y:107.5},0).wait(1).to({y:104.35},0).wait(1).to({y:101.65},0).wait(1).to({y:99.35},0).wait(1).to({y:97.4},0).wait(1).to({y:95.75},0).wait(1).to({y:94.4},0).wait(1).to({y:93.3},0).wait(1).to({y:92.4},0).wait(1).to({y:91.7},0).wait(1).to({y:91.15},0).wait(1).to({y:90.75},0).wait(1).to({y:90.4},0).wait(1).to({y:90.2},0).wait(1).to({y:90.05},0).wait(1).to({y:89.95},0).wait(1).to({y:89.9},0).wait(1).to({y:89.85},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:89.8},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(164.2,127.2,1,1,0,0,0,147.2,110.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:166.3,y:129.3,alpha:0.9783},0).wait(1).to({x:168.15,y:131.15,alpha:0.9565},0).wait(1).to({x:169.75,y:132.75,alpha:0.9348},0).wait(1).to({x:171.1,y:134.1,alpha:0.913},0).wait(1).to({x:172.3,y:135.3,alpha:0.8913},0).wait(1).to({x:173.3,y:136.3,alpha:0.8696},0).wait(1).to({x:174.15,y:137.15,alpha:0.8478},0).wait(1).to({x:174.8,y:137.8,alpha:0.8261},0).wait(1).to({x:175.4,y:138.4,alpha:0.8043},0).wait(1).to({x:175.85,y:138.85,alpha:0.7826},0).wait(1).to({x:176.2,y:139.2,alpha:0.7609},0).wait(1).to({x:176.5,y:139.5,alpha:0.7391},0).wait(1).to({x:176.7,y:139.7,alpha:0.7174},0).wait(1).to({x:176.85,y:139.85,alpha:0.6957},0).wait(1).to({x:177,y:140,alpha:0.6739},0).wait(1).to({x:177.05,y:140.05,alpha:0.6522},0).wait(1).to({x:177.1,y:140.1,alpha:0.6304},0).wait(1).to({x:177.15,y:140.15,alpha:0.6087},0).wait(1).to({alpha:0.587},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.5435},0).wait(1).to({alpha:0.5217},0).wait(1).to({x:177.2,y:140.2,alpha:0.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.4,324.5,275.8);


(lib._2000oversymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.instance = new lib.overnup2000("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(175.3,130.2,1,1,0,0,0,175.3,130.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:126.1},0).wait(1).to({y:122.5},0).wait(1).to({y:119.35},0).wait(1).to({y:116.65},0).wait(1).to({y:114.35},0).wait(1).to({y:112.4},0).wait(1).to({y:110.75},0).wait(1).to({y:109.4},0).wait(1).to({y:108.3},0).wait(1).to({y:107.4},0).wait(1).to({y:106.7},0).wait(1).to({y:106.15},0).wait(1).to({y:105.75},0).wait(1).to({y:105.4},0).wait(1).to({y:105.2},0).wait(1).to({y:105.05},0).wait(1).to({y:104.95},0).wait(1).to({y:104.9},0).wait(1).to({y:104.85},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:104.8},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(182.6,137.4,1,1,0,0,0,165.6,120.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:184.7,y:139.5,alpha:0.9783},0).wait(1).to({x:186.55,y:141.35,alpha:0.9565},0).wait(1).to({x:188.15,y:142.95,alpha:0.9348},0).wait(1).to({x:189.55,y:144.3,alpha:0.913},0).wait(1).to({x:190.75,y:145.5,alpha:0.8913},0).wait(1).to({x:191.75,y:146.5,alpha:0.8696},0).wait(1).to({x:192.55,y:147.35,alpha:0.8478},0).wait(1).to({x:193.25,y:148,alpha:0.8261},0).wait(1).to({x:193.85,y:148.6,alpha:0.8043},0).wait(1).to({x:194.3,y:149.05,alpha:0.7826},0).wait(1).to({x:194.65,y:149.4,alpha:0.7609},0).wait(1).to({x:194.95,y:149.7,alpha:0.7391},0).wait(1).to({x:195.15,y:149.9,alpha:0.7174},0).wait(1).to({x:195.3,y:150.05,alpha:0.6957},0).wait(1).to({x:195.45,y:150.2,alpha:0.6739},0).wait(1).to({x:195.5,y:150.25,alpha:0.6522},0).wait(1).to({x:195.55,y:150.3,alpha:0.6304},0).wait(1).to({x:195.6,y:150.35,alpha:0.6087},0).wait(1).to({alpha:0.587},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.5435},0).wait(1).to({alpha:0.5217},0).wait(1).to({x:195.65,y:150.4,alpha:0.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.4,361.2,296.2);


(lib._1000overnupsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1
	this.instance = new lib.overnup1000("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(169,117.3,1,1,0,0,0,169,117.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:113.2},0).wait(1).to({y:109.6},0).wait(1).to({y:106.45},0).wait(1).to({y:103.75},0).wait(1).to({y:101.45},0).wait(1).to({y:99.5},0).wait(1).to({y:97.85},0).wait(1).to({y:96.5},0).wait(1).to({y:95.4},0).wait(1).to({y:94.5},0).wait(1).to({y:93.8},0).wait(1).to({y:93.25},0).wait(1).to({y:92.85},0).wait(1).to({y:92.5},0).wait(1).to({y:92.3},0).wait(1).to({y:92.15},0).wait(1).to({y:92.05},0).wait(1).to({y:92},0).wait(1).to({y:91.95},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:91.9},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(176.3,124.4,1,1,0,0,0,159.3,107.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:159.2,x:178.3,y:126.5,alpha:0.9783},0).wait(1).to({x:180.15,y:128.35,alpha:0.9565},0).wait(1).to({x:181.75,y:129.95,alpha:0.9348},0).wait(1).to({x:183.1,y:131.3,alpha:0.913},0).wait(1).to({x:184.3,y:132.5,alpha:0.8913},0).wait(1).to({x:185.3,y:133.5,alpha:0.8696},0).wait(1).to({x:186.15,y:134.35,alpha:0.8478},0).wait(1).to({x:186.8,y:135,alpha:0.8261},0).wait(1).to({x:187.4,y:135.6,alpha:0.8043},0).wait(1).to({x:187.85,y:136.05,alpha:0.7826},0).wait(1).to({x:188.2,y:136.4,alpha:0.7609},0).wait(1).to({x:188.5,y:136.7,alpha:0.7391},0).wait(1).to({x:188.7,y:136.9,alpha:0.7174},0).wait(1).to({x:188.85,y:137.05,alpha:0.6957},0).wait(1).to({x:189,y:137.2,alpha:0.6739},0).wait(1).to({x:189.05,y:137.25,alpha:0.6522},0).wait(1).to({x:189.1,y:137.3,alpha:0.6304},0).wait(1).to({x:189.15,y:137.35,alpha:0.6087},0).wait(1).to({alpha:0.587},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.5435},0).wait(1).to({alpha:0.5217},0).wait(1).to({x:189.2,y:137.4,alpha:0.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.4,348.5,270.2);


(lib.Scene_1_unt5000floorp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// unt5000floorp
	this.unt5 = new lib.Building5000();
	this.unt5.name = "unt5";
	this.unt5.parent = this;
	this.unt5.setTransform(265.3,250.7,0.6774,0.6774,0,0,0,193.4,154.5);
	this.unt5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.unt5).wait(30).to({_off:false},0).to({_off:true},17).wait(63));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_unt4000floorplan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// unt4000floorplan
	this.unt4 = new lib.Building4000_1();
	this.unt4.name = "unt4";
	this.unt4.parent = this;
	this.unt4.setTransform(426.85,147.7,0.6766,0.6766,0,0,0,0.8,0.9);
	this.unt4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.unt4).wait(54).to({_off:false},0).to({_off:true},10).wait(46));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_unt3000floorplan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// unt3000floorplan
	this.unt3 = new lib.Building3000();
	this.unt3.name = "unt3";
	this.unt3.parent = this;
	this.unt3.setTransform(807.9,245.8,0.677,0.677,0,0,0,195.8,141);
	this.unt3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.unt3).wait(70).to({_off:false},0).to({_off:true},10).wait(30));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_unt2000floorplan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// unt2000floorplan
	this.unt2 = new lib.Building2000_1();
	this.unt2.name = "unt2";
	this.unt2.parent = this;
	this.unt2.setTransform(680.3,479.15,0.677,0.677,0,0,0,223.3,156.7);
	this.unt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.unt2).wait(86).to({_off:false},0).to({_off:true},9).wait(15));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_unt1000floorplan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// unt1000floorplan
	this.unt1 = new lib.Building1000();
	this.unt1.name = "unt1";
	this.unt1.parent = this;
	this.unt1.setTransform(975.95,675.45,0.677,0.677,0,0,0,214,137.5);
	this.unt1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.unt1).wait(101).to({_off:false},0).wait(9));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_FloorMenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FloorMenu
	this.instance = new lib.FloorMenuClip2000();
	this.instance.parent = this;
	this.instance.setTransform(718.4,345.7,1.04,1.04,0,0,0,152.3,119.4);

	this.instance_1 = new lib.FloorMenuClip1000();
	this.instance_1.parent = this;
	this.instance_1.setTransform(718.4,345.7,1.04,1.04,0,0,0,152.3,119.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},86).to({state:[]},9).to({state:[{t:this.instance_1}]},6).wait(9));

}).prototype = p = new cjs.MovieClip();


(lib.Buildling3000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hit
	this.instance = new lib._3000hitsymbol("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(157,115.2,1,1,0,0,0,157,115.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// Down
	this.instance_1 = new lib._3000downsymbol("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(157,115.2,1,1,0,0,0,157,115.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Over
	this.instance_2 = new lib._3000oversymbol();
	this.instance_2.parent = this;
	this.instance_2.setTransform(157,115.2,1,1,0,0,0,157,115.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Up
	this.instance_3 = new lib._3000upsymbol("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(157,115.2,1,1,0,0,0,157,115.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,314,237.4);


(lib.Buildling2000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hit
	this.instance = new lib._2000hitsymbol("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(175.3,130.2,1,1,0,0,0,175.3,130.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// down
	this.instance_1 = new lib._2000downsymbol("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(175.3,130.2,1,1,0,0,0,175.3,130.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// over
	this.instance_2 = new lib._2000oversymbol();
	this.instance_2.parent = this;
	this.instance_2.setTransform(175.3,130.2,1,1,0,0,0,175.3,130.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// up
	this.instance_3 = new lib._2000upsymbol("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(175.3,130.2,1,1,0,0,0,175.3,130.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350.7,260.3);


(lib.Building5000_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hit
	this.floorpick5000 = new lib._5000floorpick();
	this.floorpick5000.name = "floorpick5000";
	this.floorpick5000.parent = this;
	this.floorpick5000.setTransform(151.3,128.5,1,1,0,0,0,151.3,128.5);
	this.floorpick5000._off = true;
	new cjs.ButtonHelper(this.floorpick5000, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.floorpick5000).wait(3).to({_off:false},0).wait(1));

	// Down
	this.instance = new lib._5000hitsymbol("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(151.3,128.5,1,1,0,0,0,151.3,128.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// over
	this.instance_1 = new lib._5000oversymbol();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151.3,128.5,1,1,0,0,0,151.3,128.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Up
	this.instance_2 = new lib._5000upsymbol("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(151.3,128.5,1,1,0,0,0,151.3,128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,308.9,257.1);


(lib.Building4000_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hit
	this.instance = new lib._4000hitsymbol("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(118.1,118.1,1,1,0,0,0,118.1,118.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// Down
	this.instance_1 = new lib._4000downsymbol("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(118.1,118.1,1,1,0,0,0,118.1,118.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Over
	this.instance_2 = new lib._4000oversymbol();
	this.instance_2.parent = this;
	this.instance_2.setTransform(118.1,118.1,1,1,0,0,0,118.1,118.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Up
	this.instance_3 = new lib._4000upsymbol("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(118.1,118.1,1,1,0,0,0,118.1,118.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236.3,245.5);


(lib.Building1000backgroundsymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hit
	this.instance = new lib._1000hitsymbol("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(169,117.3,1,1,0,0,0,169,117.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// down
	this.instance_1 = new lib._1000downsymbol("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(169,117.3,1,1,0,0,0,169,117.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// over
	this.instance_2 = new lib._1000overnupsymbol();
	this.instance_2.parent = this;
	this.instance_2.setTransform(169,117.3,1,1,0,0,0,169,117.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// up
	this.instance_3 = new lib._1000upsymbol("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(169,117.3,1,1,0,0,0,169,117.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,338,234.7);


(lib.Building1000_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hit
	this.instance = new lib._1000hitsymbol("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(169,117.3,1,1,0,0,0,169,117.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// down
	this.instance_1 = new lib._1000downsymbol("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(169,117.3,1,1,0,0,0,169,117.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// over
	this.instance_2 = new lib._1000overnupsymbol();
	this.instance_2.parent = this;
	this.instance_2.setTransform(169,117.3,1,1,0,0,0,169,117.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// up
	this.instance_3 = new lib._1000upsymbol("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(169,117.3,1,1,0,0,0,169,117.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,338,234.7);


(lib.Scene_1_Building5000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Building5000
	this.unt5000 = new lib.Building5000_1();
	this.unt5000.name = "unt5000";
	this.unt5000.parent = this;
	this.unt5000.setTransform(261.3,250.5,1,1,0,0,0,151.3,128.5);
	this.unt5000.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,12);
	new cjs.ButtonHelper(this.unt5000, 0, 1, 2, false, new lib.Building5000_1(), 3);

	this.instance = new lib.building5000();
	this.instance.parent = this;
	this.instance.setTransform(110,122,0.325,0.325);

	this.instance_1 = new lib.unt5000downsymbol("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(261.3,250.5,1,1,0,0,0,151.3,128.5);
	this.instance_1.alpha = 0.3906;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt5000}]}).to({state:[{t:this.instance}]},30).to({state:[{t:this.instance_1}]},24).to({state:[{t:this.unt5000}]},10).to({state:[]},6).to({state:[{t:this.unt5000}]},10).to({state:[]},6).to({state:[{t:this.unt5000}]},9).to({state:[]},6).wait(9));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Building4000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Building4000
	this.unt4000 = new lib.Building4000_2();
	this.unt4000.name = "unt4000";
	this.unt4000.parent = this;
	this.unt4000.setTransform(521.1,241.1,1,1,0,0,0,118.1,118.1);
	this.unt4000.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,12);
	new cjs.ButtonHelper(this.unt4000, 0, 1, 2, false, new lib.Building4000_2(), 3);

	this.instance = new lib._4000downsymbol("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(521.1,241.1,1,1,0,0,0,118.1,118.1);
	this.instance.alpha = 0.3906;

	this.instance_1 = new lib._4000backgroundsymbol("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(521.1,241.1,1,1,0,0,0,118.1,118.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt4000}]}).to({state:[{t:this.instance}]},30).to({state:[{t:this.instance_1}]},18).to({state:[{t:this.unt4000}]},16).to({state:[{t:this.instance}]},6).to({state:[{t:this.unt4000}]},10).to({state:[{t:this.instance}]},6).to({state:[{t:this.unt4000}]},9).to({state:[{t:this.instance}]},6).wait(9));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Building3000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Building3000
	this.unt3000 = new lib.Buildling3000();
	this.unt3000.name = "unt3000";
	this.unt3000.parent = this;
	this.unt3000.setTransform(808,241.2,1,1,0,0,0,157,115.2);
	this.unt3000.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,12);
	new cjs.ButtonHelper(this.unt3000, 0, 1, 2, false, new lib.Buildling3000(), 3);

	this.instance = new lib.Buildling3000down("single",0);
	this.instance.parent = this;
	this.instance.setTransform(808,241.2,1,1,0,0,0,157,115.2);
	this.instance.alpha = 0.3906;

	this.instance_1 = new lib.Buildling3000backgroundsymbol("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(808,241.2,1,1,0,0,0,157,115.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt3000}]}).to({state:[{t:this.instance}]},54).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.unt3000}]},16).to({state:[{t:this.instance}]},6).to({state:[{t:this.unt3000}]},9).to({state:[{t:this.instance}]},6).wait(9));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Building2000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Building2000
	this.unit2000 = new lib.Buildling2000();
	this.unit2000.name = "unit2000";
	this.unit2000.parent = this;
	this.unit2000.setTransform(680.3,479.2,1,1,0,0,0,175.3,130.2);
	this.unit2000.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,12);
	new cjs.ButtonHelper(this.unit2000, 0, 1, 2, false, new lib.Buildling2000(), 3);

	this.instance = new lib.Buildling2000down("single",0);
	this.instance.parent = this;
	this.instance.setTransform(680.3,479.2,1,1,0,0,0,175.3,130.2);
	this.instance.alpha = 0.3906;

	this.instance_1 = new lib.Buildling2000backgroundsymbol("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(680.3,479.2,1,1,0,0,0,175.3,130.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unit2000}]}).to({state:[{t:this.instance}]},54).to({state:[{t:this.unit2000}]},10).to({state:[{t:this.instance}]},6).to({state:[{t:this.unit2000}]},10).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.unit2000}]},9).to({state:[{t:this.instance}]},6).wait(9));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Building1000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Building1000
	this.unt1000 = new lib.Building1000_1();
	this.unt1000.name = "unt1000";
	this.unt1000.parent = this;
	this.unt1000.setTransform(976,675.3,1,1,0,0,0,169,117.3);
	this.unt1000.shadow = new cjs.Shadow("rgba(0,0,0,1)",7,7,12);
	new cjs.ButtonHelper(this.unt1000, 0, 1, 2, false, new lib.Building1000_1(), 3);

	this.instance = new lib.Building1000backgroundsymbol();
	this.instance.parent = this;
	this.instance.setTransform(976,675.3,1,1,0,0,0,169,117.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Building1000backgroundsymbol(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unt1000}]}).to({state:[]},48).to({state:[{t:this.unt1000}]},32).to({state:[]},6).to({state:[{t:this.unt1000}]},9).to({state:[{t:this.instance}]},6).wait(9));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.FinalVersionFloorPickerAnimateGwinnettCrossing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Start_Frame:0,Building5_Start:24,Building5_zoom:30,Building4_start:48,Building4_zoom:54,Building3_start:64,Building3_zoom:70,Building2_start:80,Building2_zoom:86,Building1_start:95,Building1_zoom:101});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.unt5000 = this.Building5000.unt5000;
		this.unt4000 = this.Building4000.unt4000;
		this.unt3000 = this.Building3000.unt3000;
		this.unit2000 = this.Building2000.unit2000;
		this.unt1000 = this.Building1000.unt1000;
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.unt5000.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(25);
		}
	}
	this.frame_1 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.unt4000.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(49);
		}
	}
	this.frame_2 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.unt3000.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_39.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_39()
		{
			this.gotoAndPlay(65);
		}
	}
	this.frame_3 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.unit2000.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_75.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_75()
		{
			this.gotoAndPlay(80);
		}
	}
	this.frame_4 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.unt1000.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_76.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_76()
		{
			this.gotoAndPlay(96);
		}
	}
	this.frame_23 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_30 = function() {
		this.unt4000 = undefined;this.unt5000 = undefined;this.unt5 = this.unt5000floorp.unt5;
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.nextbuilding.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Building4_zoom');
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.prevbuilding.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Building1_zoom');
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.backbutton.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Start_Frame');
		});
		var _this = this;
		_this.unt5floor3.on('click', function(){
		
		_this.unt5.unt5_floor1.visible = false;
			_this.unt5.unt5_floor2.visible = false;
			_this.unt5.unt5_floor3.visible = true;
			_this.arrowmove.x = 1030;
			_this.arrowmove.y = 262;
		});
		var _this = this;
		_this.unt5floor2.on('click', function(){
		
		_this.unt5.unt5_floor1.visible = false;
			_this.unt5.unt5_floor2.visible = true;
			_this.unt5.unt5_floor3.visible = false;
			_this.arrowmove.x = 1030;
			_this.arrowmove.y = 320;
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.unt5floor1.on('click', function(){
		/*
		Makes the specified object visible or invisible.
		*/
		_this.unt5.unt5_floor1.visible = true;
			_this.unt5.unt5_floor2.visible = false;
			_this.unt5.unt5_floor3.visible = false;
			_this.arrowmove.x = 1030;
		    _this.arrowmove.y = 380;
		});
	}
	this.frame_46 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_47 = function() {
		this.unt5 = undefined;
	}
	this.frame_48 = function() {
		this.unt1000 = undefined;
	}
	this.frame_54 = function() {
		this.unit2000 = undefined;this.unt3000 = undefined;this.unt4 = this.unt4000floorplan.unt4;
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.nextbuilding.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Building3_zoom');
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.prevbuilding.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Building5_zoom');
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.backbutton.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Start_Frame');
		});
		var _this = this;
		_this.unt4floor3.on('click', function(){
		
		_this.unt4.unt4floor1.visible = false;
			_this.unt4.unt4floor2.visible = false;
			_this.unt4.unt4floor3.visible = true;
			_this.arrowmove.x = 1030;
			_this.arrowmove.y = 262;
		});
		var _this = this;
		_this.unt4floor2.on('click', function(){
		
		_this.unt4.unt4floor1.visible = false;
			_this.unt4.unt4floor2.visible = true;
			_this.unt4.unt4floor3.visible = false;
			_this.arrowmove.x = 1030;
			_this.arrowmove.y = 320;
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.unt4floor1.on('click', function(){
		/*
		Makes the specified object visible or invisible.
		*/
		_this.unt4.unt4floor1.visible = true;
			_this.unt4.unt4floor2.visible = false;
			_this.unt4.unt4floor3.visible = false;
			_this.arrowmove.x = 1030;
		    _this.arrowmove.y = 380;
		});
	}
	this.frame_63 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_64 = function() {
		this.unt4 = undefined;this.unt5000 = this.Building5000.unt5000;
		this.unt4000 = this.Building4000.unt4000;
		this.unit2000 = this.Building2000.unit2000;
	}
	this.frame_70 = function() {
		this.unit2000 = undefined;this.unt4000 = undefined;this.unt5000 = undefined;this.unt3 = this.unt3000floorplan.unt3;
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.nextbuilding.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Building2_zoom');
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.prevbuilding.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Building4_zoom');
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.backbutton.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Start_Frame');
		});
		var _this = this;
		_this.unt3floor3.on('click', function(){
		
		_this.unt3.unt3_floor1.visible = false;
			_this.unt3.unt3_floor2.visible = false;
			_this.unt3.unt3_floor3.visible = true;
			_this.arrowmove.x = 1030;
			_this.arrowmove.y = 262;
		});
		var _this = this;
		_this.unt3floor2.on('click', function(){
		
		_this.unt3.unt3_floor1.visible = false;
			_this.unt3.unt3_floor2.visible = true;
			_this.unt3.unt3_floor3.visible = false;
			_this.arrowmove.x = 1030;
			_this.arrowmove.y = 320;
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.unt3floor1.on('click', function(){
		/*
		Makes the specified object visible or invisible.
		*/
		_this.unt3.unt3_floor1.visible = true;
			_this.unt3.unt3_floor2.visible = false;
			_this.unt3.unt3_floor3.visible = false;
			_this.arrowmove.x = 1030;
		    _this.arrowmove.y = 380;
		});
	}
	this.frame_79 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_80 = function() {
		this.unt3 = undefined;this.unt5000 = this.Building5000.unt5000;
		this.unt4000 = this.Building4000.unt4000;
		this.unt3000 = this.Building3000.unt3000;
		this.unit2000 = this.Building2000.unit2000;
		this.unt1000 = this.Building1000.unt1000;
	}
	this.frame_86 = function() {
		this.unt1000 = undefined;this.unit2000 = undefined;this.unt3000 = undefined;this.unt4000 = undefined;this.unt5000 = undefined;this.unt2 = this.unt2000floorplan.unt2;
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.nextbuilding.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Building1_zoom');
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.prevbuilding.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Building3_zoom');
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.backbutton.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Start_Frame');
		});
		var _this = this;
		_this.unt3floor3.on('click', function(){
		
		_this.unt2.unt2_floor1.visible = false;
			_this.unt2.unt2_floor2.visible = false;
			_this.unt2.unt2_floor3.visible = true;
			_this.arrowmove.x = 1030;
			_this.arrowmove.y = 262;
		});
		var _this = this;
		_this.unt3floor2.on('click', function(){
		
		_this.unt2.unt2_floor1.visible = false;
			_this.unt2.unt2_floor2.visible = true;
			_this.unt2.unt2_floor3.visible = false;
			_this.arrowmove.x = 1030;
			_this.arrowmove.y = 320;
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.unt3floor1.on('click', function(){
		/*
		Makes the specified object visible or invisible.
		*/
		_this.unt2.unt2_floor1.visible = true;
			_this.unt2.unt2_floor2.visible = false;
			_this.unt2.unt2_floor3.visible = false;
			_this.arrowmove.x = 1030;
		    _this.arrowmove.y = 380;
		});
	}
	this.frame_94 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_95 = function() {
		this.unt2 = undefined;this.unt5000 = this.Building5000.unt5000;
		this.unt4000 = this.Building4000.unt4000;
		this.unt3000 = this.Building3000.unt3000;
		this.unit2000 = this.Building2000.unit2000;
		this.unt1000 = this.Building1000.unt1000;
	}
	this.frame_101 = function() {
		this.unt1000 = undefined;this.unit2000 = undefined;this.unt3000 = undefined;this.unt4000 = undefined;this.unt5000 = undefined;this.unt1 = this.unt1000floorplan.unt1;
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.nextbuilding.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Building5_zoom');
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.prevbuilding.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Building2_zoom');
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.backbutton.on('click', function(){
		/*
		Moves the playhead to the specified frame label in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay('Start_Frame');
		});
		var _this = this;
		_this.unt3floor3.on('click', function(){
		
		_this.unt1.unt1_floor1.visible = false;
			_this.unt1.unt1_floor2.visible = false;
			_this.unt1.unt1_floor3.visible = true;
			_this.arrowmove.x = 1030;
			_this.arrowmove.y = 262;
		});
		var _this = this;
		_this.unt3floor2.on('click', function(){
		
		_this.unt1.unt1_floor1.visible = false;
			_this.unt1.unt1_floor2.visible = true;
			_this.unt1.unt1_floor3.visible = false;
			_this.arrowmove.x = 1030;
			_this.arrowmove.y = 320;
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.unt3floor1.on('click', function(){
		/*
		Makes the specified object visible or invisible.
		*/
		_this.unt1.unt1_floor1.visible = true;
			_this.unt1.unt1_floor2.visible = false;
			_this.unt1.unt1_floor3.visible = false;
			_this.arrowmove.x = 1030;
		    _this.arrowmove.y = 380;
		});
	}
	this.frame_109 = function() {
		this.___loopingOver___ = true;
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(19).call(this.frame_23).wait(7).call(this.frame_30).wait(16).call(this.frame_46).wait(1).call(this.frame_47).wait(1).call(this.frame_48).wait(6).call(this.frame_54).wait(9).call(this.frame_63).wait(1).call(this.frame_64).wait(6).call(this.frame_70).wait(9).call(this.frame_79).wait(1).call(this.frame_80).wait(6).call(this.frame_86).wait(8).call(this.frame_94).wait(1).call(this.frame_95).wait(6).call(this.frame_101).wait(8).call(this.frame_109).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(611.5,446);
	this.___camera___instance.depth = 0;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(25).to({regY:0.1,scaleX:0.6438,scaleY:0.6438,x:416.25,y:327.6},0).wait(1).to({regY:0,scaleX:0.4747,scaleY:0.4747,x:323.5,y:271.3},0).wait(1).to({regX:0.1,scaleX:0.4119,scaleY:0.4119,x:289.15,y:250.4},0).wait(1).to({scaleX:0.3974,scaleY:0.3974,x:281.2,y:245.6},0).wait(1).to({scaleX:0.3965,scaleY:0.3965,x:280.65,y:245.25},0).wait(1).to({regY:0.1,scaleX:0.3964,scaleY:0.3964,x:287.6},0).wait(18).to({regX:0,regY:0,scaleX:1,scaleY:1,x:611.5,y:446},0).wait(1).to({regX:0.1,scaleX:0.644,scaleY:0.644,x:586.85,y:320.6},0).wait(1).to({regY:0.1,scaleX:0.475,scaleY:0.475,x:575.1,y:261.05},0).wait(1).to({regY:0,scaleX:0.4122,scaleY:0.4122,x:570.75,y:238.9},0).wait(1).to({scaleX:0.3978,scaleY:0.3978,x:569.75,y:233.8},0).wait(1).to({scaleX:0.3968,scaleY:0.3968,x:569.65,y:233.45},0).wait(1).to({regY:0.1,x:571.45},0).wait(10).to({regX:0,regY:0,scaleX:1,scaleY:1,x:611.5,y:446},0).wait(1).to({scaleX:0.644,scaleY:0.644,x:737.8028,y:320.553},0).wait(1).to({scaleX:0.475,scaleY:0.475,x:797.7656,y:260.9965},0).wait(1).to({scaleX:0.4122,scaleY:0.4122,x:820.0216,y:238.8913},0).wait(1).to({scaleX:0.3978,scaleY:0.3978,x:825.1576,y:233.7901},0).wait(1).to({scaleX:0.3968,scaleY:0.3968,x:825.5,y:233.45},0).wait(1).to({regX:0.1,regY:0.1,x:821.55},0).wait(10).to({regX:0,regY:0,scaleX:1,scaleY:1,x:611.5,y:446},0).wait(1).to({scaleX:0.644,scaleY:0.644,x:668.7789,y:466.6275},0).wait(1).to({scaleX:0.475,scaleY:0.475,x:695.9723,y:476.4205},0).wait(1).to({scaleX:0.4122,scaleY:0.4122,x:706.0655,y:480.0553},0).wait(1).to({scaleX:0.3978,scaleY:0.3978,x:708.3947,y:480.8941},0).wait(1).to({scaleX:0.3968,scaleY:0.3968,x:708.55,y:480.95},0).wait(10).to({scaleX:1,scaleY:1,x:611.5,y:446},0).wait(1).to({scaleX:0.644,scaleY:0.644,x:845.2782,y:586.2315},0).wait(1).to({scaleX:0.475,scaleY:0.475,x:956.2654,y:652.807},0).wait(1).to({scaleX:0.4122,scaleY:0.4122,x:997.4598,y:677.5174},0).wait(1).to({scaleX:0.3978,scaleY:0.3978,x:1006.9662,y:683.2198},0).wait(1).to({scaleX:0.3968,scaleY:0.3968,x:1007.6,y:683.6},0).wait(10));

	// FloorMenu_obj_
	this.FloorMenu = new lib.Scene_1_FloorMenu();
	this.FloorMenu.name = "FloorMenu";
	this.FloorMenu.parent = this;
	this.FloorMenu.depth = 0;
	this.FloorMenu.isAttachedToCamera = 1
	this.FloorMenu.isAttachedToMask = 0
	this.FloorMenu.layerDepth = 0
	this.FloorMenu.layerIndex = 0
	this.FloorMenu.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.FloorMenu).wait(110));

	// unt5000floorp_obj_
	this.unt5000floorp = new lib.Scene_1_unt5000floorp();
	this.unt5000floorp.name = "unt5000floorp";
	this.unt5000floorp.parent = this;
	this.unt5000floorp.depth = 0;
	this.unt5000floorp.isAttachedToCamera = 0
	this.unt5000floorp.isAttachedToMask = 0
	this.unt5000floorp.layerDepth = 0
	this.unt5000floorp.layerIndex = 1
	this.unt5000floorp.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.unt5000floorp).wait(110));

	// Building5000_obj_
	this.Building5000 = new lib.Scene_1_Building5000();
	this.Building5000.name = "Building5000";
	this.Building5000.parent = this;
	this.Building5000.setTransform(264.4,250.5,1,1,0,0,0,264.4,250.5);
	this.Building5000.depth = 0;
	this.Building5000.isAttachedToCamera = 0
	this.Building5000.isAttachedToMask = 0
	this.Building5000.layerDepth = 0
	this.Building5000.layerIndex = 2
	this.Building5000.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Building5000).wait(110));

	// unt4000floorplan_obj_
	this.unt4000floorplan = new lib.Scene_1_unt4000floorplan();
	this.unt4000floorplan.name = "unt4000floorplan";
	this.unt4000floorplan.parent = this;
	this.unt4000floorplan.depth = 0;
	this.unt4000floorplan.isAttachedToCamera = 0
	this.unt4000floorplan.isAttachedToMask = 0
	this.unt4000floorplan.layerDepth = 0
	this.unt4000floorplan.layerIndex = 3
	this.unt4000floorplan.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.unt4000floorplan).wait(110));

	// Building4000_obj_
	this.Building4000 = new lib.Scene_1_Building4000();
	this.Building4000.name = "Building4000";
	this.Building4000.parent = this;
	this.Building4000.setTransform(521.1,245.7,1,1,0,0,0,521.1,245.7);
	this.Building4000.depth = 0;
	this.Building4000.isAttachedToCamera = 0
	this.Building4000.isAttachedToMask = 0
	this.Building4000.layerDepth = 0
	this.Building4000.layerIndex = 4
	this.Building4000.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Building4000).wait(110));

	// unt3000floorplan_obj_
	this.unt3000floorplan = new lib.Scene_1_unt3000floorplan();
	this.unt3000floorplan.name = "unt3000floorplan";
	this.unt3000floorplan.parent = this;
	this.unt3000floorplan.depth = 0;
	this.unt3000floorplan.isAttachedToCamera = 0
	this.unt3000floorplan.isAttachedToMask = 0
	this.unt3000floorplan.layerDepth = 0
	this.unt3000floorplan.layerIndex = 5
	this.unt3000floorplan.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.unt3000floorplan).wait(110));

	// Building3000_obj_
	this.Building3000 = new lib.Scene_1_Building3000();
	this.Building3000.name = "Building3000";
	this.Building3000.parent = this;
	this.Building3000.setTransform(808,244.7,1,1,0,0,0,808,244.7);
	this.Building3000.depth = 0;
	this.Building3000.isAttachedToCamera = 0
	this.Building3000.isAttachedToMask = 0
	this.Building3000.layerDepth = 0
	this.Building3000.layerIndex = 6
	this.Building3000.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Building3000).wait(110));

	// unt2000floorplan_obj_
	this.unt2000floorplan = new lib.Scene_1_unt2000floorplan();
	this.unt2000floorplan.name = "unt2000floorplan";
	this.unt2000floorplan.parent = this;
	this.unt2000floorplan.depth = 0;
	this.unt2000floorplan.isAttachedToCamera = 0
	this.unt2000floorplan.isAttachedToMask = 0
	this.unt2000floorplan.layerDepth = 0
	this.unt2000floorplan.layerIndex = 7
	this.unt2000floorplan.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.unt2000floorplan).wait(110));

	// Building2000_obj_
	this.Building2000 = new lib.Scene_1_Building2000();
	this.Building2000.name = "Building2000";
	this.Building2000.parent = this;
	this.Building2000.setTransform(680.3,479.2,1,1,0,0,0,680.3,479.2);
	this.Building2000.depth = 0;
	this.Building2000.isAttachedToCamera = 0
	this.Building2000.isAttachedToMask = 0
	this.Building2000.layerDepth = 0
	this.Building2000.layerIndex = 8
	this.Building2000.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Building2000).wait(110));

	// unt1000floorplan_obj_
	this.unt1000floorplan = new lib.Scene_1_unt1000floorplan();
	this.unt1000floorplan.name = "unt1000floorplan";
	this.unt1000floorplan.parent = this;
	this.unt1000floorplan.depth = 0;
	this.unt1000floorplan.isAttachedToCamera = 0
	this.unt1000floorplan.isAttachedToMask = 0
	this.unt1000floorplan.layerDepth = 0
	this.unt1000floorplan.layerIndex = 9
	this.unt1000floorplan.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.unt1000floorplan).wait(110));

	// Building1000_obj_
	this.Building1000 = new lib.Scene_1_Building1000();
	this.Building1000.name = "Building1000";
	this.Building1000.parent = this;
	this.Building1000.setTransform(976,675.3,1,1,0,0,0,976,675.3);
	this.Building1000.depth = 0;
	this.Building1000.isAttachedToCamera = 0
	this.Building1000.isAttachedToMask = 0
	this.Building1000.layerDepth = 0
	this.Building1000.layerIndex = 10
	this.Building1000.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Building1000).wait(110));

	// Background_Garden_obj_
	this.Background_Garden = new lib.Scene_1_Background_Garden();
	this.Background_Garden.name = "Background_Garden";
	this.Background_Garden.parent = this;
	this.Background_Garden.setTransform(609.3,439.8,1,1,0,0,0,609.3,439.8);
	this.Background_Garden.depth = 0;
	this.Background_Garden.isAttachedToCamera = 0
	this.Background_Garden.isAttachedToMask = 0
	this.Background_Garden.layerDepth = 0
	this.Background_Garden.layerIndex = 11
	this.Background_Garden.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Background_Garden).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(476.9,320.7,891.6,653.0999999999999);
// library properties:
lib.properties = {
	id: '5A8385E5F51F4CA390D4CD343457E3BE',
	width: 1223,
	height: 892,
	fps: 24,
	opacity: 0.71,
	manifest: [
		{src:"images/Final_Version_Floor_Picker_Animate_Gwinnett_Crossing_atlas_.png", id:"Final_Version_Floor_Picker_Animate_Gwinnett_Crossing_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5A8385E5F51F4CA390D4CD343457E3BE'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;