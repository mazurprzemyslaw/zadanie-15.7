'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var timeArray = [];

var Stopwatch = function (_React$Component) {
	_inherits(Stopwatch, _React$Component);

	function Stopwatch(props) {
		_classCallCheck(this, Stopwatch);

		var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this, props));

		_this.state = {
			running: false,
			timeArray: [],
			times: {
				minutes: 0,
				seconds: 0,
				milliseconds: 0
			}
		};
		return _this;
	}

	_createClass(Stopwatch, [{
		key: 'reset',
		value: function reset() {
			this.state.running = false;
			clearInterval(this.watch);
		}
	}, {
		key: 'print',
		value: function print() {
			console.log(this.format(this));
		}
	}, {
		key: 'format',
		value: function format(times) {
			return this.pad0(this.state.times.minutes) + ':' + this.pad0(this.state.times.seconds) + ':' + this.pad0(Math.floor(this.state.times.miliseconds));
		}
	}, {
		key: 'start',
		value: function start() {
			var _this2 = this;

			if (!this.state.running) {
				this.state.running = true;
				this.watch = setInterval(function () {
					return _this2.step();
				}, 10);
			}
		}
	}, {
		key: 'step',
		value: function step() {
			if (!this.state.running) return;
			this.calculate();
			this.print();
		}
	}, {
		key: 'calculate',
		value: function calculate() {
			this.state.times.miliseconds += 1;
			if (this.state.times.miliseconds >= 100) {
				this.state.times.seconds += 1;
				this.state.times.miliseconds = 0;
			}
			if (this.state.times.seconds >= 60) {
				this.state.times.minutes += 1;
				this.state.times.seconds = 0;
			}
		}
	}, {
		key: 'stop',
		value: function stop() {
			this.state.running = false;
			clearInterval(this.watch);
		}
	}, {
		key: 'addTo',
		value: function addTo() {
			console.log(this.format(this.times));
			timeArray = [].concat(_toConsumableArray(timeArray), [this.format(this.times)]);
			console.log(timeArray);
		}
	}, {
		key: 'clearArray',
		value: function clearArray() {
			timeArray = [];
			console.log(timeArray);
		}
	}, {
		key: 'results',
		value: function results() {
			timeArray = [];
			console.log(timeArray);
		}
	}, {
		key: 'pad0',
		value: function pad0(value) {
			var result = value.toString();
			if (result.length < 2) {
				result = '0' + result;
			}
			return result;
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: '.controls' },
					React.createElement(
						'a',
						{ href: '#', className: 'button', onClick: this.start.bind(this) },
						'Start '
					),
					React.createElement(
						'a',
						{ href: '#', className: 'button', onClick: this.stop.bind(this) },
						'Stop '
					),
					React.createElement(
						'a',
						{ href: '#', className: 'button', onClick: this.reset.bind(this) },
						'Reset '
					),
					React.createElement(
						'a',
						{ href: '#', className: 'button', onClick: this.addTo.bind(this) },
						'Add '
					),
					React.createElement(
						'a',
						{ href: '#', className: 'button', onClick: this.clearArray.bind(this) },
						'Clear-list '
					)
				),
				React.createElement(
					'div',
					null,
					this.format()
				),
				React.createElement('ul', { className: '.results' })
			);
		}
	}]);

	return Stopwatch;
}(React.Component);

ReactDOM.render(React.createElement(Stopwatch, null), document.querySelector('.stopwatch'));

/*
class Stopwatch {
	constructor(display) {
		this.running = false;
		this.display = display;
		this.reset();
		this.print(this.times);
	}

	reset() {
		this.times = {
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		};
	}

	print() {
		this.display.innerText = this.format(this.times);
	}

	format(times) {
    	return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
	}

	start() {
	    if (!this.running) {
	        this.running = true;
	        this.watch = setInterval(() => this.step(), 10);
	    }
	}

	step() {
	    if (!this.running) return;
	    this.calculate();
	    this.print();
	}

	calculate() {
	    this.times.miliseconds += 1;
	    if (this.times.miliseconds >= 100) {
	        this.times.seconds += 1;
	        this.times.miliseconds = 0;
	    }
	    if (this.times.seconds >= 60) {
	        this.times.minutes += 1;
	        this.times.seconds = 0;
	    }
	}

	stop() {
	    this.running = false;
	    clearInterval(this.watch);
	    timeArray.push(this.format(this.times));
		console.log(timeArray);
	}

	stopres() {
		this.stop();
		this.reset();
		this.print();

	}
}


function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

let timeArray = [];

let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.stopres());

let resetArray = document.getElementById('arrayres');
resetArray.addEventListener('click', 
	function clearArray() {
  		return console.log(timeArray = [])
	} , false);

const stopwatch = new Stopwatch(
	document.querySelector('.stopwatch'));
*/
