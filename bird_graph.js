// jQuery stuff for sliders, and setting value of slider to variable. Calls "drawGraph" on update of slider
	$( function() {


		function drawGraph() {

		try {

			// object containing slope and intersect of regression line
			var reg = ss.linearRegression([[27,15],[31,29],[35,26]]);

			// method that computes y-value at any given x-value on the line.
			var regLine = ss.linearRegressionLine(reg);


	      	var pointsTrace = {
				x: [27, 31, 35],
				y: [15,29,26],
				mode: 'markers',
				name: '',
				text: ['Budgerigar', 'Downy Woodpecker','European Starling'],
				line: {
					shape: 'linear',
					color: '#E84C3D'
				},
				type: 'scatter',
				hoverlabel: {
					font: {
						size: 16
					}
				},
				marker: {
					size: 13
				}
			};

			var splineTrace = {
				x: [27, 31, 35],
				y: [15,29,26],
				mode: 'lines+markers',
				name: 'spline',
				line: {
					shape: 'spline',
					color: '#E84C3D',
				},
				type: 'scatter'
			};

			var euroSwallowPoint = {
	      		x: [33],
	      		y: [regLine(33)],
	      		mode: 'markers',
	      		text: ['European Swallow'],
	      		name: '',
	      		line: {
	      			shape: 'linear',
	      			color: '#3598DC'
	      		},
	      		hoverlabel: {
					font: {
						size: 16
					}
				},
				marker: {
					size: 20
				}
	      	};

	      	// generate an array of x vals between 27 and 35, and calculate the corresponding y values from the linear regression line
	      	var xValues = math.range(27, 35, 0.01).toArray();
	      	var yValues = xValues.map(function (x) {
	        return regLine(x);
	      	});


	      	var euroSwallowLine = {
	      		x: xValues,
	      		y: yValues,
	      		mode: 'lines',
				name: '',
				title: ['Linear Fit'],
				line: {
					shape: 'linear',
					color: '#444444'
				},
				type: 'scatter',
				hoverlabel: {
					font: {
						size: 13
					}
				}
	      	};



      		var data = [pointsTrace, euroSwallowLine, euroSwallowPoint];

			var layout = {
				height: 400,
  				width: 450,
  				margin: {
				   	l: 60,
				    r: 50,
				    b: 60,
				    t: 0,
				    pad: 4
				},
				shapes: [
					{
				    type: 'line',
				    x0: 33,
				    y0: 0,
				    x1: 33,
				    y1: 30,
				    line: {
				    	color: 'rgb(55, 128, 191)',
				    	width: 2,
				    	dash: 'dashdot'
				    	}
				    }
				    ],
				legend: {
			    	y: 0.5,
			    	traceorder: 'reversed',
			    	font: {size: 10},
			    	yref: 'paper'
			  	},
			  	xaxis: {
					title: 'Wingspan (cm)',
					titlefont: {
						family: 'Time New Roman',
      					size: 21
					},
					tickfont: {
      					family: 'Time New Roman',
      					size: 17
    				}
				},
  				yaxis: {
  					title: 'Wingbeat Amplitude (cm)',
					titlefont: {
						family: 'Time New Roman',
      					size: 21
					},
					tickfont: {
      					family: 'Time New Roman',
      					size: 17
    				}
  				},
  				showlegend: false,
  				hovermode:'closest'
			};




      		//Plotly.newPlot('plot', data, layout, {staticPlot: true});
      		Plotly.newPlot('plot', data, layout, {displayModeBar: false});
    	}
    	catch (err) {
      		console.error(err);
      		alert(err);
    	}
	}

	drawGraph();

	} );