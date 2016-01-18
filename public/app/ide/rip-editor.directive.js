(function() {
	'use strict';

	angular
		.module('app.ide')
		.directive('ripEditor', function() {
			return {
				restrict: 'E',
				scope: {
					id: '@',
					includeCode: '@',
					readOnly: '@',
					ripple: '=',
				},
				templateUrl: 'ide/rip-editor.directive.tmpl.html',
				controllerAs: 'ripEditorController',
    			bindToController: true,
				controller: function() {
					var canvas = null;
					var canvasWidth = 0;
					var columnCount = 0;
					var left = 15;
					var rippleWidth = 50;
					var rippleHeight = 50;
					var rippleMargin = 50;
					var rowCount = 0;
					var top = 50;

					var vm = this;
					vm.draw = draw;
					vm.ripples = vm.ripple.ripples;
					vm.selectedRipple = vm.ripple;
					vm.svgid = 'svg_editor';

					// todo: i would like to switch this to not be a hard coded id,
					// currently, if using dynamic assigned in the template, the
					// lookup for Snap() doesn't find anything - order of operations issue?
					// vm.svgid = 'svg_' + vm.id;

					activate();

					function activate() {
						// setup canvas
						canvas = Snap('#' + vm.svgid);
						canvasWidth = $('#' + vm.id).width();

						// initial draw
						draw();
					}

					function draw() {
						// draw ripple and call recursively
						drawRipple(vm.ripple);
					}

					function drawArrow() {
						// todo: get the proper position
						canvas.circle(left + 10, top + 10, 25);
					}

					function drawRipple(ripple) {
						// increase the cnt
						columnCount++;

						// check if we make it to the end of the canvas
						if(columnCount * (rippleWidth + rippleMargin) > canvasWidth) {
							// reset the columnCount and increase the rowCount
							rowCount++;
							columnCount = 0;
						}

						// get the proper position
						left = columnCount * (rippleWidth + rippleMargin);
						top = rowCount * (rippleHeight + rippleMargin);

						// draw connecting arrow
						drawArrow(ripple);

						// draw ripple
						canvas.rect(left, top, rippleWidth, rippleHeight);

						// write text
						canvas.text(left, top, ripple.display).attr({color: 'white'});

						// execute recursion
						if(ripple.ripples) {
							_.forEach(ripple.ripples, function(currentRipple) {
								drawRipple(currentRipple);
							});
						}
					}

					function getRippleWidth() {

					}
				}
			};
		});
})();