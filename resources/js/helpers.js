function Helpers () {
	var self = this;
	var $loader = $('#loader');
	var loadingCount = 0;
	self.loader = function (state) {
		if (state) {
			loadingCount++;
			$loader.show();
		} else {
			loadingCount--;
			if (loadingCount < 1) {
				$loader.hide();
			}
		}
	};
	self.loadTemplate  = function (model) {
		var viewName = model.constructor.name.replace('Model','');
		var tplId    = 'tpl-'+viewName.toLowerCase();
		viewName += 'View';
		if (!$(`#${tplId}`).length) {
			self.loader(true);
			$.ajax(`resources/ko/subTpl/${viewName}.html`, {async: false}).done(html=>{
					$(`<script type="text/html" id="${tplId}">${html}</script>`).appendTo('#templates');
					self.loader(false)
				}
			);
		}
	};
	return self;
}

export var helpers = new Helpers();