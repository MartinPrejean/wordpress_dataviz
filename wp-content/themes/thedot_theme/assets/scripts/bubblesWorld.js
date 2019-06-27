// Create bubble Chart

if (document.querySelector('.bubbleContainer') !== null) 
{
  let width = document.querySelector('.bubbleContainer').offsetWidth,
  height = 630;
  
  d3.select("#bubbleChart2").append("svg")
      .attr("width", width)
      .attr("height", height)
    .attr("id", "secondarySVG");
  
  
  changeWorldYear('2015');

  let $worldRadioButtons = document.querySelectorAll('.worldCycleBtn')

  for(const $radioButton of $worldRadioButtons)
  {
    $radioButton.addEventListener(
      'click',
      () => 
      {
        changeWorldYear($radioButton.id)
        for(const $radioButton of $worldRadioButtons)
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
  
    
  function changeWorldYear(year){
    if (year === '2010'){
      var worldDataSource = CSVW2010;
    } else if (year === '2005') {
      var worldDataSource = CSVW2005;
    }
    else {
      var worldDataSource = CSVW2015;
    }
  
  
  d3.csv(worldDataSource, function(error, data) {
  
  data.sort(function(a,b) {return b.ratingClassValue - a.ratingClassValue;});
  
  
  var svg = d3.select("#secondarySVG");
  
  
  //set bubble padding
  var padding = 4;
  
    for (var j = 0; j < data.length; j++) {
      data[j].radius = 10;
      data[j].x = Math.random() * width;
      data[j].y = Math.random() * height;
    }
  
    var maxRadius = d3.max(_.pluck(data, 'radius'));
  
  
    var getWorldCenters = function(vname, size) {
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
    
    drawWorld('reset');
  
    let $worldRatingButtons = document.querySelectorAll('label.worldRatingBtn')
    for (const $ratingButton of $worldRatingButtons)
    {
      $ratingButton.addEventListener(
        'click',
        () => 
        {
          drawWorld($ratingButton.id)
          for(const $ratingButton of $worldRatingButtons)
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
  
  function drawWorld(varname) {
    d3.selectAll("circle").attr("r",10);
    var centers = getWorldCenters(varname, [width, height]);
      force.on("tick", tick(centers, varname));
      worldLabels(centers);
    nodes.attr("class", function(d) {
        return d[varname];
      });
      force.start();
    makeClickableWorld();
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
    
      
    function worldLabels(centers) {
      svg.selectAll(".worldLabel").remove();
  
      svg.selectAll(".worldLabel")
        .data(centers).enter().append("text")
        .attr("class", "worldLabel")
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

    function makeClickableWorld () {
    
    
    let $worldCircles = document.querySelectorAll('circle')			
    for(const $circle of $worldCircles)
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
}