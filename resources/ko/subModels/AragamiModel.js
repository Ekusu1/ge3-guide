import {helpers} from "../../js/helpers.js";

export function AragamiModel(data) {
	helpers.loadTemplate(this);
	var self = this;

	self.os = 0;
	self.name = '';
	self.type = '';
	self.element = {
		blaze: null,
		freeze: null,
		spark: null,
		divine: null,
	};
	Object.assign(self, data);

	const TYPE_SMALL = 'Small Aragami';
	const TYPE_MID = 'Mid-size Aragami';
	const TYPE_LARGE = 'Large Aragami';
	const TYPE_ASH = 'Ash Aragami';
	const TYPE_ADAPTIVE = 'Adaptive Aragami';

	var nameId = self.name.replace(/-|\s/g, "_").toLowerCase();
	self.typeClass = 'aragami-'+({
		[TYPE_SMALL]: "small",
		[TYPE_MID]: "mid",
		[TYPE_LARGE]: "large",
		[TYPE_ASH]: "ash",
		[TYPE_ADAPTIVE]: "adaptive",
	}[self.type]);
	self.imgClass = "i-a i-a-" + (self.type === TYPE_SMALL ? "s" : "l") + " " + nameId;
}