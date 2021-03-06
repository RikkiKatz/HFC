//jquery.datepair.min.js
!function(a,b){
	"use strict";function c(a,b){
		var c=b||{};for(var d in a)d in c||(c[d]=a[d]);return c}
	function d(a,c){
		if(h)h(a).trigger(c);
		else{var d=b.createEvent("CustomEvent");d.initCustomEvent(c,!0,!0,{}),a.dispatchEvent(d)}
	}
	function e(a,b){
		return h?h(a).hasClass(b):a.classList.contains(b)}
	function f(a,b){
		this.dateDelta=null,this.timeDelta=null,this._defaults={
			startClass:"start",
			endClass:"end",
			timeClass:"time",
			dateClass:"date",
			defaultDateDelta:0,
			defaultTimeDelta:36e5,
			anchor:"start",
			parseTime: function(a){
				return h(a).timepicker("getTime")},
			updateTime:function(a,b){h(a).timepicker("setTime",b)},
			setMinTime:function(a,b){h(a).timepicker("option","minTime",b)},
			parseDate:function(a){return h(a).datepicker("getDate")},
			updateDate:function(a,b){h(a).datepicker("update",b)}},
		this.container=a,this.settings=c(this._defaults,b),
		this.startDateInput=this.container.querySelector("."+this.settings.startClass+"."+this.settings.dateClass),
		this.endDateInput=this.container.querySelector("."+this.settings.endClass+"."+this.settings.dateClass),
		this.startTimeInput=this.container.querySelector("."+this.settings.startClass+"."+this.settings.timeClass),
		this.endTimeInput=this.container.querySelector("."+this.settings.endClass+"."+this.settings.timeClass),
		this.refresh(),
		this._updateEndMintime(),
		this._bindChangeHandler()}
	var g=864e5,h=a.Zepto||a.jQuery;f.prototype={
		constructor:f,option:function(a,b){
			if("object"==typeof a)this.settings=c(this.settings,a);
			else if("string"==typeof a&&"undefined"!=typeof b)this.settings[a]=b;
			else if("string"==typeof a)return this.settings[a];this._updateEndMintime()},
	getTimeDiff:function(){
		var a=this.dateDelta+this.timeDelta;return!(0>a)||this.startDateInput&&this.endDateInput||(a+=g),a},
	refresh:function(){
		if(this.startDateInput&&this.startDateInput.value&&this.startDateInput&&this.endDateInput.value){
			var a=this.settings.parseDate(this.startDateInput), b=this.settings.parseDate(this.endDateInput);this.dateDelta=b.getTime()-a.getTime()}
			if(this.startTimeInput&&this.startTimeInput.value&&this.endTimeInput&&this.endTimeInput.value){
				var c=this.settings.parseTime(this.startTimeInput),d=this.settings.parseTime(this.endTimeInput);this.timeDelta=d.getTime()-c.getTime()}},
	remove:function(){this._unbindChangeHandler()},_
	bindChangeHandler:function(){
		h?h(this.container).on("change.datepair",h.proxy(this.handleEvent,this)):this.container.addEventListener("change",this,!1)},_
	unbindChangeHandler:function(){
		h?h(this.container).off("change.datepair"):this.container.removeEventListener("change",this,!1)},
	handleEvent:function(a){
		this._unbindChangeHandler(),e(a.target,this.settings.dateClass)?""!=a.target.value?this._dateChanged(a.target):this.dateDelta=null:e(a.target,this.settings.timeClass)&&(""!=a.target.value?this._timeChanged(a.target):this.timeDelta=null),this._validateRanges(),this._updateEndMintime(),this._bindChangeHandler()},_
	dateChanged:function(a){
		if(this.startDateInput&&this.endDateInput)if(this.startDateInput.value&&this.endDateInput.value){
			var b=this.settings.parseDate(this.startDateInput),c=this.settings.parseDate(this.endDateInput);if("start"==this.settings.anchor&&e(a,this.settings.startClass)){
				var d=new Date(b.getTime()+this.dateDelta);this.settings.updateDate(this.endDateInput,d)}
		else if("end"==this.settings.anchor&&e(a,this.settings.endClass)){
			var d=new Date(c.getTime()-this.dateDelta);this.settings.updateDate(this.startDateInput,d)}
		else if(b>c){var f=e(a,this.settings.startClass)?this.endDateInput:this.startDateInput,h=this.settings.parseDate(a);this.dateDelta=0,this.settings.updateDate(f,h)}else this.dateDelta=c.getTime()-b.getTime()}else if(null!==this.settings.defaultDateDelta){if(this.startDateInput.value){var b=this.settings.parseDate(this.startDateInput),i=new Date(b.getTime()+this.settings.defaultDateDelta*g);this.settings.updateDate(this.endDateInput,i)}else if(this.endDateInput.value){var c=this.settings.parseDate(this.endDateInput),j=new Date(c.getTime()-this.settings.defaultDateDelta*g);this.settings.updateDate(this.startDateInput,j)}this.dateDelta=this.settings.defaultDateDelta*g}else this.dateDelta=null},_timeChanged:function(a){if(this.startTimeInput&&this.endTimeInput){if(!this.startTimeInput.value||!this.endTimeInput.value){if(null===this.settings.defaultTimeDelta)return void(this.timeDelta=null);if(this.startTimeInput.value){var b=this.settings.parseTime(this.startTimeInput),c=new Date(b.getTime()+this.settings.defaultTimeDelta);this.settings.updateTime(this.endTimeInput,c)}else if(this.endTimeInput.value){var d=this.settings.parseTime(this.endTimeInput),f=new Date(d.getTime()-this.settings.defaultTimeDelta);this.settings.updateTime(this.startTimeInput,f)}this.timeDelta=this.settings.defaultTimeDelta}var b=this.settings.parseTime(this.startTimeInput),d=this.settings.parseTime(this.endTimeInput);if("start"==this.settings.anchor&&e(a,this.settings.startClass)){var h=new Date(b.getTime()+this.timeDelta);this.settings.updateTime(this.endTimeInput,h),d=this.settings.parseTime(this.endTimeInput)}else if("end"==this.settings.anchor&&e(a,this.settings.endClass)){var h=new Date(d.getTime()-this.timeDelta);this.settings.updateTime(this.startTimeInput,h),b=this.settings.parseTime(this.startTimeInput)}var i=d.getTime()-b.getTime();if(null!==this.dateDelta&&this.dateDelta+this.timeDelta<=g&&this.dateDelta+i!=0&&(i>=0&&this.timeDelta<0||0>i&&this.timeDelta>=0)){console.log(null===this.dateDelta?"null":"yes");var j=b>d?g:-1*g;if("start"==this.settings.anchor){var k=this.settings.parseDate(this.endDateInput);this.settings.updateDate(this.endDateInput,new Date(k.getTime()+j)),this._dateChanged(this.endDateInput)}else if("end"==this.settings.anchor){var l=this.settings.parseDate(this.startDateInput);this.settings.updateDate(this.startDateInput,new Date(l.getTime()-j)),this._dateChanged(this.startDateInput)}}this.timeDelta=i}},_updateEndMintime:function(){if("function"==typeof this.settings.setMinTime){var a=null;"start"==this.settings.anchor&&(!this.dateDelta||this.dateDelta<g||this.timeDelta&&this.dateDelta+this.timeDelta<g)&&(a=this.settings.parseTime(this.startTimeInput)),this.settings.setMinTime(this.endTimeInput,a)}},_validateRanges:function(){return this.startTimeInput&&this.endTimeInput&&null===this.timeDelta?void d(this.container,"rangeIncomplete"):this.startDateInput&&this.endDateInput&&null===this.dateDelta?void d(this.container,"rangeIncomplete"):void(!this.startDateInput||!this.endDateInput||this.dateDelta+this.timeDelta>=0?d(this.container,"rangeSelected"):d(this.container,"rangeError"))}},a.Datepair=f}(window,document),function(a){a&&(a.fn.datepair=function(b){var c;return this.each(function(){var d=a(this),e=d.data("datepair"),f="object"==typeof b&&b;e||(e=new Datepair(this,f),d.data("datepair",e)),"string"==typeof b&&(c=e[b]())}),c||this},a("[data-datepair]").each(function(){var b=a(this);b.datepair(b.data())}))}(window.Zepto||window.jQuery);
//end jquery.datepair.min.js


//demo
$('#timeOnlyExample .time').timepicker({
    'showDuration': true,
    'timeFormat': 'g:ia'
});

var timeOnlyExampleEl = document.getElementById('timeOnlyExample');
var timeOnlyDatepair = new Datepair(timeOnlyExampleEl);
//demo


$('#container').datepair(options);
var milliseconds = $('#container').datepair('getTimeDiff');
$('#container').datepair('remove');
$('#container').datepair('refresh');