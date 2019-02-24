import {AragamiModel} from "./subModels/AragamiModel.js";

export function RootViewModel(data) {
	var self = this;
	self.aragami = ko.observableArray(data.aragami.map((v => new AragamiModel(v))));
	console.log('loaded RootViewModel', self);
}