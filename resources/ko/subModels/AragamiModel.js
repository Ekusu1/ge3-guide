export function AragamiModel(data = {
	"os": 1,
	"name": "Axe Raider",
	"type": "Small Aragami",
	"e_b": false,
	"e_f": false,
	"e_s": false,
	"e_d": false,
	"p_b": -1,
	"p_f": -1,
	"p_s": -1,
	"p_d": 0,
	"drop_prefix": "Beast | Troll",
	"b1": "",
	"b1_p_sl": 0,
	"b1_p_cr": 0,
	"b1_p_pi": 0,
	"b1_p_b": 0,
	"b1_p_f": 0,
	"b1_p_s": 0,
	"b1_p_d": 0,
	"b1_pb_sl": 0,
	"b1_pb_cr": 0,
	"b1_pb_pi": 0,
	"b1_pb_b": 0,
	"b1_pb_f": 0,
	"b1_pb_s": 0,
	"b1_pb_d": 0,
	"b2": "",
	"b2_p_sl": 0,
	"b2_p_cr": 0,
	"b2_p_pi": 0,
	"b2_p_b": 0,
	"b2_p_f": 0,
	"b2_p_s": 0,
	"b2_p_d": 0,
	"b2_pb_sl": 0,
	"b2_pb_cr": 0,
	"b2_pb_pi": 0,
	"b2_pb_b": 0,
	"b2_pb_f": 0,
	"b2_pb_s": 0,
	"b2_pb_d": 0,
	"b3": "",
	"b3_p_sl": 0,
	"b3_p_cr": 0,
	"b3_p_pi": 0,
	"b3_p_b": 0,
	"b3_p_f": 0,
	"b3_p_s": 0,
	"b3_p_d": 0,
	"b3_pb_sl": 0,
	"b3_pb_cr": 0,
	"b3_pb_pi": 0,
	"b3_pb_b": 0,
	"b3_pb_f": 0,
	"b3_pb_s": 0,
	"b3_pb_d": 0
}) {
	var self = this;

	self.os = data.os;
	self.name = data.name;
	self.type = data.type;
	var nameId = self.name.replace(/-|\s/g, "_").toLowerCase();
	var imageSize = self.type === "Small Aragami" ? "s" : "l";
	self.imgClass = "i-a i-a-" + imageSize + " " + nameId;
	self.bondCollapseId = "bonds-" + nameId;

	self.element = {
		blaze: data.e_b,
		freeze: data.e_f,
		spark: data.e_s,
		divine: data.e_d
	};
	self.def = {
		blaze: data.p_b,
		freeze: data.p_f,
		spark: data.p_s,
		divine: data.p_d
	};
	self.drop_prefixes = data.drop_prefix.split(' | ');
	self.bonds = [
		{
			part: data.b1,
			def: {
				normal: {
					slash: data.b1_p_sl,
					crush: data.b1_p_cr,
					pierce: data.b1_p_pi,
					blaze: data.b1_p_b,
					freeze: data.b1_p_f,
					spark: data.b1_p_s,
					divine: data.b1_p_d
				},
				broken: {
					slash: data.b1_pb_sl,
					crush: data.b1_pb_cr,
					pierce: data.b1_pb_pi,
					blaze: data.b1_pb_b,
					freeze: data.b1_pb_f,
					spark: data.b1_pb_s,
					divine: data.b1_pb_d
				}
			}
		},
		{
			part: data.b2,
			def: {
				normal: {
					slash: data.b2_p_sl,
					crush: data.b2_p_cr,
					pierce: data.b2_p_pi,
					blaze: data.b2_p_b,
					freeze: data.b2_p_f,
					spark: data.b2_p_s,
					divine: data.b2_p_d
				},
				broken: {
					slash: data.b2_pb_sl,
					crush: data.b2_pb_cr,
					pierce: data.b2_pb_pi,
					blaze: data.b2_pb_b,
					freeze: data.b2_pb_f,
					spark: data.b2_pb_s,
					divine: data.b2_pb_d
				}
			}
		},
		{
			part: data.b3,
			def: {
				normal: {
					slash: data.b3_p_sl,
					crush: data.b3_p_cr,
					pierce: data.b3_p_pi,
					blaze: data.b3_p_b,
					freeze: data.b3_p_f,
					spark: data.b3_p_s,
					divine: data.b3_p_d
				},
				broken: {
					slash: data.b3_pb_sl,
					crush: data.b3_pb_cr,
					pierce: data.b3_pb_pi,
					blaze: data.b3_pb_b,
					freeze: data.b3_pb_f,
					spark: data.b3_pb_s,
					divine: data.b3_pb_d
				}
			}
		}
	];
}