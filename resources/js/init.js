"use strict";
import {RootViewModel} from "../ko/RootViewModel.js";
import {helpers} from "./helpers.js";

Object.map = function (source,cacllbackFunction) {
	Object.keys(source).forEach(function(k) {
		source[k] = cacllbackFunction(source[k], k, source);
	});
	return source;
};

Object.expand = function (obj) {
	function parseDotNotation(key, value, object) {
		var currentObject = object,
			keys = key.split("."),
			l = Math.max(1, keys.length - 1),
			currentKey;

		for (var i = 0; i < l; ++i) {
			currentKey = keys[i];
			currentObject[currentKey] = currentObject[currentKey] || {};
			currentObject = currentObject[currentKey];
		}

		currentObject[keys[i]] = value;
		delete object[key];
	}

	function parseArrayNotation (key, value, object) {
		var arrayNotation = key.match(/(.*)\[\d.*\]/);

		if (!arrayNotation) {return;}

		var arrayKey = arrayNotation[1];
		object[arrayKey] = object[arrayKey] || [];

		if (typeof value === 'object') {
			for (var subKey in value) {
				parseArrayNotation(subKey, value[subKey], value);
			}
		}

		object[arrayKey].push(value);
		delete object[key];
	}

	for (var key in obj) {
		if (key.indexOf(".") !== -1) {
			parseDotNotation(key, obj[key], obj);
		}
	}

	for (var key in obj) {
		parseArrayNotation(key, obj[key], obj);
	}

	return obj;
};

helpers.loader(true);
Tabletop.init({
	key: '1khv9hmeDiLmWkz6LfA9fD8-VCn85mR_Sg759SJnwZfc',
	wanted: ['Aragami'],
	callback: function (sheets) {
		// console.log('dataLoaded', sheets);
		var dataParsed = {
			aragami: sheets.Aragami.all().slice(4).map(row=>Object.map(Object.expand(Object.map(row, (value, k)=>{
				if (typeof value === 'string') {
					if (value==="TRUE") return true;
					if (value==="FALSE") return false;
					if (k === 'drop_prefixes') return value.split(' | ');
				}
				return value;
			})),(v,k)=>{
				if (k === 'bonds') return v.filter(v2=>v2.part!=="");
				return v;
			})).filter(v=>v.os!=="")
		};

		ko.applyBindings(new RootViewModel(dataParsed));
		helpers.loader(false);
	},
	parseNumbers: true
});