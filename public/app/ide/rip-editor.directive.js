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
				controller: function($scope) {
					var 
						// the pixel margin between arrow and ripples
						arrowMargin = 50,

						// extra top distance for arrow to center it
						arrowTop = 50,

						// the width of the arrow
						arrowWidth = 15,

						// reference to the snap.svg canvas
						canvas = null,

						// the pixel height of the canvas (set in activate)
						canvasHeight = 100,  //default

						// the pixel width of the canvas (set in activate)
						canvasWidth = 0,

						// keeps track of the columns used to draw ripples
						columnCount = 0,

						// initial left padding
						initialLeft = 50,

						// initial top padding
						initialTop = 50,

						// used when calculating left position of next ripple
						left = initialLeft,

						// the width of a drawn ripple
						rippleWidth = 150,

						// the height of a drawn ripple
						rippleHeight = 100,

						// the distance between ripples
						rippleMargin = 50,

						// keeps track of the rows used to draw ripples
						rowCount = 0,

						// extra left distance to start the text of the ripple
						textLeft = 15,

						// extra top distance to start the text of the ripple
						textTop = 50,

						// used when calculating top position of next ripple
						top = initialTop;

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
						canvasWidth = $('#' + vm.svgid).width();

						// initial draw
						draw();
					}

					function draw() {
						// draw ripple and call recursively
						drawRipple(vm.ripple);
					}

					function drawArrow() {
						// todo: get the proper position
						left += rippleWidth + arrowMargin;

						// draw arrow
						canvas.circle(left, top + arrowTop, arrowWidth).attr({ fill: '#333'});
					}

					function drawRipple(ripple) {
						// get the proper position
						if(columnCount > 0) {
							left += arrowMargin;
						}
						if(rowCount > 0) {
							top = rowCount * (rippleHeight + rippleMargin);
						}

						// check if we make it to the end of the canvas
						if(left > canvasWidth) {
							// reset the columnCount and increase the rowCount
							rowCount++;
							columnCount = 0;
							left = initialLeft;
							top = initialTop;
						}

						// draw ripple
						var rippleRect = canvas.rect(left, top, rippleWidth, rippleHeight)
											   .attr({fill: '#ccc', stroke: 'black'});

						// write text
						var rippleText = drawText(ripple);

						// create group and wire up click
						canvas.group(rippleRect, rippleText).click(function() {
							selectRipple(ripple);
						});

						// draw connecting arrow
						drawArrow(ripple);

						// increase the cnt
						columnCount++;

						// execute recursion
						if(ripple.ripples) {
							_.forEach(ripple.ripples, function(currentRipple) {
								drawRipple(currentRipple);
							});
						}

						// update canvas height
						updateCanvasHeight();
					}

					function drawText(ripple) {
						return canvas.text(left + textLeft, top + textTop, ripple.display)
									 .attr({stroke: '#333'});
					}

					function selectRipple(ripple) {
						vm.selectedRipple = ripple;
						$scope.$apply();
					}

					function updateCanvasHeight() {
						// get calculated height
						canvasHeight = (rowCount + 1.5) * (rippleHeight + rippleMargin);
						console.log(canvasHeight);

						// set height
						$('#' + vm.svgid).height(canvasHeight);
					}
				}
			};
		});
})();