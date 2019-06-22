// // Create cvs
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var myObj = JSON.parse(this.responseText);
//     createRows(myObj)
//   }
// };
// xmlhttp.open("GET", "2015.json", true);
// xmlhttp.send();

// const createCsv = (datas, name) =>
// {
//   let csvContent = "data:text/csv;charset=utf-8," 
//     + datas.map(e => e.join(",")).join("\n");
  
//   const encodedUri = encodeURI(csvContent);
//   const link = document.createElement("a");
//   link.setAttribute("href", encodedUri);
//   link.setAttribute("download", name);
//   document.body.appendChild(link); // Required for FF
  
//   link.click(); // This will download the data file named "my_data.csv".
// }

// const createRows = (data) =>
// {
//   const resultFrance = [
//     ["ObjectName", "reset", "TypeOfEnergy", "Details", "ratingClassValue"]
//   ]

//   const resultWorld = [
//     ["ObjectName", "reset", "TypeOfEnergy", "Details", "ratingClassValue"]
//   ]
  
//   let id = 0

//   for(const energy of data.france)
//   {
//     for(let i = 0; i < energy.pourcentage; i++)
//     {
//       const row = []
//       row.push(id)
//       row.push(energy.reset)
//       row.push(energy.type)
//       row.push(energy.detail)
//       row.push(energy.scale)
//       row.push(energy.ratingCategory)
//       row.push(energy.ratingClassValue)
//       resultFrance.push(row)
//       id++
//     }
//   }

//   for(const energy of data.monde)
//   {
//     for(let i = 0; i < energy.pourcentage; i++)
//     {
//       const row = []
//       row.push(id)
//       row.push(energy.reset)
//       row.push(energy.type)
//       row.push(energy.detail)
//       row.push(energy.scale)
//       row.push(energy.ratingCategory)
//       row.push(energy.ratingClassValue)
//       resultWorld.push(row)
//       id++
//     }
//   }

//   createCsv(resultFrance, 'bubbleChartFrance2015.csv')
//   createCsv(resultWorld, 'bubbleChartWorld2015.csv')
// }


// Create bubble Chart
let width = document.querySelector('.bubbleContainer').offsetWidth,
height = 630;
 
 
d3.select("#bubbleChart").append("svg")
    .attr("width", width)
    .attr("height", height)
	.attr("id", "primarySVG");
 
 
changeYear('2015');

let $radioButtons = document.querySelectorAll('.cycleBtn')

for(const $radioButton of $radioButtons)
{
  $radioButton.addEventListener(
    'click',
    () => 
    {
      changeYear($radioButton.id)
      for(const $radioButton of $radioButtons)
      {
        if($radioButton.classList.contains('active'))
        {
          $radioButton.classList.remove('active')
        }
      }
      $radioButton.classList.add('active')
    }
  )
}
 
	
function changeYear(year){
	if (year === '2010'){
		var dataSource = CSVF2010;
  } else if (year === '2005') {
    var dataSource = CSVF2005;
  }
  else {
		var dataSource = CSVF2015;
	}
 
 
d3.csv(dataSource, function(error, data) {
 
data.sort(function(a,b) {return b.ratingClassValue - a.ratingClassValue;});
 
 
var svg = d3.select("#primarySVG");
 
 
//set bubble padding
var padding = 4;
 
  for (var j = 0; j < data.length; j++) {
    data[j].radius = 10;
    data[j].x = Math.random() * width;
    data[j].y = Math.random() * height;
  }
 
  var maxRadius = d3.max(_.pluck(data, 'radius'));
 
 
  var getCenters = function(vname, size) {
    var centers, map;
    centers = _.uniq(_.pluck(data,vname)).map(function(d) {
      return {
        name: d,
        value: 1
      };
    });
 
	map = d3.layout.pack().size(size);
          map.nodes({children: centers});
 
    return centers;
  };
 
	var nodes = svg.selectAll("circle")
		.data(data);
	
  nodes.enter().append("circle")
    //.attr("class", "node")
     .attr("class", function(d) {
      return d.ratingCategory;
    })
    .attr("cx", function(d) {
      return d.x;
    })
    .attr("cy", function(d) {
      return d.y;
    })
    .attr("r", 2)
	.attr("id", function(d){return d.objectName;})
    .on("mouseover", function(d) {
      showPopover(this, d);
    })
    .on("mouseout", function(d) {
      removePopovers();
    })
	;
 
	var text = nodes.append("text")
		.attr("dx",12)
		.attr("dy",".35em")
		.text(function(d){
			return d.objectName;
		});
 
		
	
  nodes.transition()
	.duration(500)
    .attr("r", function(d) {
	return d.radius;})
	;
 
  var force = d3.layout.force();
  
 
  draw('reset');
 
  let $ratingButtons = document.querySelectorAll('label.ratingBtn')
  for (const $ratingButton of $ratingButtons)
  {
    $ratingButton.addEventListener(
      'click',
      () => 
      {
        draw($ratingButton.id)
        for(const $ratingButton of $ratingButtons)
        {
          if($ratingButton.classList.contains('active'))
          {
            $ratingButton.classList.remove('active')
          }
        }
        $ratingButton.classList.add('active')
      }
    )
  }
 
 function draw(varname) {
 	d3.selectAll("circle").attr("r",10);
	var centers = getCenters(varname, [width, height]);
    force.on("tick", tick(centers, varname));
    labels(centers);
	nodes.attr("class", function(d) {
      return d[varname];
    });
    force.start();
	makeClickable();
  }
 
	
	function tick (centers, varname) {
	  var foci = {};
	  for (var i = 0; i < centers.length; i++) {
		foci[centers[i].name] = centers[i];
	  }
	  return function (e) {
		for (var i = 0; i < data.length; i++) {
		  var o = data[i];
		  var f = foci[o[varname]];
		  o.y += (f.y - o.y) * e.alpha;
		  o.x += (f.x - o.x) * e.alpha;
		 }
		 nodes.each(collide(.2))
		   .attr("cx", function (d) { return d.x; })
		   .attr("cy", function (d) { return d.y; });
	  }
	}
	
		
  function labels(centers) {
    svg.selectAll(".label").remove();
 
    svg.selectAll(".label")
      .data(centers).enter().append("text")
      .attr("class", "label")
      .text(function(d) {
        return d.name;
      })
	.attr("transform", function (d) {
          if(d.name !== undefined)
          {
            return "translate(" + (d.x - ((d.name.length)*3)) + ", " + (d.y + 15 - d.r) + ")";
          }
          });     
 
 
  }
 
  function removePopovers() {
    console.log('remove')
  }
 
  function showPopover(container, d) {
    // let $body = document.querySelector('body')
    // let $popover = document.createElement('div')
    // $popover.classList.add('test')
    // console.log(d)
    // $popover.setAttribute('transform',"translate(" + (d.x) + ", " + (d.y + 15 - d.r) + ")")
    // $popover.innerHTML = 'Test'
    // $body.appendChild($popover)
    console.log('show pop hover')
  }
  
  function collide(alpha) {
    var quadtree = d3.geom.quadtree(data);
    return function(d) {
       var r = d.radius + maxRadius + padding,
        nx1 = d.x - r,
        nx2 = d.x + r,
        ny1 = d.y - r,
        ny2 = d.y + r;
      quadtree.visit(function(quad, x1, y1, x2, y2) {
        if (quad.point && (quad.point !== d)) {
          var x = d.x - quad.point.x,
            y = d.y - quad.point.y,
            l = Math.sqrt(x * x + y * y),
            r = d.radius + quad.point.radius + padding;
          if (l < r) {
            l = (l - r) / l * alpha;
            d.x -= x *= l;
            d.y -= y *= l;
            quad.point.x += x;
            quad.point.y += y;
          }
        }
        return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
      });
    };
  }
  
   var lowModGrad = svg.append("svg:defs")
    .append("svg:linearGradient")
    .attr("id", "lowModGrad")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");
 
  // Define the gradient colors
  lowModGrad.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "#88DB54")
    .attr("stop-opacity", 1);
 
  lowModGrad.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "#FE9A2E")
    .attr("stop-opacity", 1);
 
  var modHighGrad = svg.append("svg:defs")
    .append("svg:linearGradient")
    .attr("id", "modHighGrad")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");
 
  // Define the gradient colors
  modHighGrad.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "#FE9A2E")
    .attr("stop-opacity", 1);
 
  modHighGrad.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "#FE2E2E")
    .attr("stop-opacity", 1);
    
  var lowHighGrad = svg.append("svg:defs")
    .append("svg:linearGradient")
    .attr("id", "lowHighGrad")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");
 
  // Define the gradient colors
  lowHighGrad.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "#88DB54")
    .attr("stop-opacity", 1);
 
  lowHighGrad.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "#FE2E2E")
    .attr("stop-opacity", 1);
 
	
 
	function makeClickable () {
  
  
	let $circles = document.querySelectorAll('circle')			
  for(const $circle of $circles)
  {
    $circle.addEventListener(
      'click',
      () => 
      {
        console.log($circle.id);
      }
    )
  }
	
	var nest = d3.nest()
		.key(function(d){return d.objectName;})
		.entries(data);
		
	
	}
	nodes.exit().remove();
		
	
});
}