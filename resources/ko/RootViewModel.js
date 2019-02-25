import {AragamiModel} from "./subModels/AragamiModel.js";

export function RootViewModel(data) {
	var self = this;

	const MODE_ARAGAMI = 'aragami';

	var mode = MODE_ARAGAMI;
	self.search = ko.observable('');

	self.options = {
		aragami: {
			compact: ko.observable(true)
		}
	};

	self.aragami = data.aragami.map((v => new AragamiModel(v)));

	function baseSearchFunction(searchIn, searchValue) {
		searchValue = searchValue.toLowerCase().trim();
		var type = Array.isArray(searchIn) ? 'array' : typeof searchIn;
		switch (type) {
			case 'string': return searchIn.toLowerCase().includes(searchValue);
			case 'array':  return searchIn.some(v => v.toLowerCase().includes(searchValue));
			default:       return false;
		}
	}

	self.aragamiFiltered = ko.pureComputed(function () {
		if (self.search() === "") return self.aragami;
		var searchValues = self.search().split(';').filter(v=>v!=="");
		var res = self.aragami.filter(data =>
					searchValues.some(searchValue =>
							['name', 'drop_prefixes'].some(key =>
								baseSearchFunction(data[key], searchValue))));
		console.log(res);
		return res;
	});

	console.log('loaded RootViewModel', self.aragamiFiltered());

	self.def2icon = function (def) {
		var html = {
			"2": '<i class="attr weak d-block float-left"></i><i class="attr weak d-block float-right"></i>',
			"1": '<i class="attr weak d-block m-auto"></i>',
			"0":  '<i class="attr neutral d-block m-auto"></i>',
			"-1": '<i class="attr strong d-block m-auto"></i>',
			"-2": '<i class="attr strong d-block float-left"></i><i class="attr strong d-block float-right"></i>',
		}[def];
		return '<div class="def">'+html+'</div>';
	}
}