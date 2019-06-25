// Global js

let ctx = document.getElementById('myChart');
let ctx2 = document.getElementById('myChart2');
let myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
        datasets: [
            {
                label: 'Monde',
                data: [15540.09, 15942.83, 16479.16, 16156.08, 15865.08, 16501.43, 16780.52, 17143.5, 17338.25, 16890.43, 16419.84, 16064.82, 15954.45, 16319.45, 16436.91, 16460.28, 16766.81, 17060.98, 17136, 19316.5, 19155.03, 18824.98, 18730.71, 18568.44, 18767.88, 18967.87, 18888.45, 18714.12, 18859.51, 19015.8, 19007.72, 19156.31, 19612, 20208.64, 20524.85, 20868.22, 21186.6, 21251.8, 20862.05, 21771.04, 21850.51, 21990.97, 22022.12, 22337.22],
                backgroundColor: [
                    'rgba(255, 255, 255, 0.0)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'France',
                data: [35140.35, 36760.16, 39201.42, 37632.48, 35362.51, 37548.67, 36699.88, 39002.77, 40499.85, 40300.98, 39189.73, 38053.97, 38839.94, 40011.55, 41736.75, 42135.13, 42922.28, 42476.23, 43962.32, 44524.4, 47021.24, 45985.06, 46542.11, 44613.99, 46303.13, 48752.07, 47092.57, 48283.42, 47956.61, 48095.61, 49381.04, 49142.19, 49671.14, 50029.2, 49859.64, 48716.24, 47863.58, 47806.11, 45513.51, 46715.94, 44741.46, 44620.33, 44584.02, 42552.61],
                backgroundColor: [
                    'rgba(255, 255, 255, 0.0)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'États-Unis',
                data: [88905.82, 92353.8, 94942.71, 91988.49, 89042.35, 94209.54, 96361.19, 98138.63, 96843.5, 92368.4, 88940.87, 84423.09, 83725.75, 86565.81, 86716.34, 85784, 88645.87, 91292.64, 91764.04, 89222.72, 88753.97, 89288.18, 89661.45, 90223.57, 90292.47, 91231.17, 91046.4, 90757, 92147.09, 93701.33, 91038.32, 91218.1, 90646.96, 91662.76, 91254.79, 89523.7, 90227.47, 87086.39, 82070.39, 83287.68, 81759.28, 79922.55, 80312.68, 80952.73],
                backgroundColor: [
                    'rgba(255, 255, 255, 0.0)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'OCDE',
                data: [43692.18, 45384.26, 47404.45, 46288.34, 44833.16, 47266.66, 47979.31, 49008.6, 49756.27, 48172.22, 46566.21, 45087.32, 44797.62, 46246.9, 46923.1, 47020.09, 48195.04, 49274.57, 49756.33, 49322.45, 49452.2, 49439.76, 49730.42, 50160.68, 50840.02, 51970.4, 52090.68, 51896.1, 52444.07, 53243.26, 52733.59, 52717.02, 53037.22, 53661.15, 53607.33, 53275.37, 53133.65, 52063.87, 49434.3, 50754.3, 49565.59, 48930.42, 48823.14, 48169.89],
                backgroundColor: [
                    'rgba(255, 255, 255, 0.0)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Consommation d\'énergie en kWh/an'
        },
        responsive: true,
        maintainAspectRatio: true
    }
});

let myLineChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
        datasets: [
            {
                label: 'Monde',
                data: [9396705.835,	9434402.595,	9818839.874,	10355747.35,	10947007.09,	11433441.98,	12009447,	12389685.57,	13017193.61,	13797116.84,	14788798.31,	15323175.56,	15957192.52,	16822109.48,	16850822.09,	16745791.87,	17726098.32,	18279804.32,	18497906.48,	19533547.95,	19324327.26,	18726246.9,	18562354,	18484356.91,	19145865.38,	19719241.16,	20315356.02,	20817151.96,	21565403.31,	22029385.16,	22149402.4,	22403928.87,	22183417.49,	22162174.56,	22551690.63,	23037524.13,	23571556.67,	23975007.35,	24114192,	24059187,	24689911,	25276631,	25646998,	27047792,	28393581,	29490014,	30568112,	31180501,	32181592,	31891899,	33472376,	34847501,	35470891,	35837591,	36138285],
                backgroundColor: [
                    'rgba(255, 255, 255, 0.0)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Emission CO2 en kt'
        },
        responsive: true,
        maintainAspectRatio: true
    }
});

// Event handler to resize the canvas when the document view is changed
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
  canvas.width = window.innerWidth / 2;
  canvas.height = window.innerHeight / 4;
}

// Toggle button
$toggleButton = document.querySelector('.toggle-button')
$menu = document.querySelector('#header nav')

$toggleButton.addEventListener(
    'click',
    () => {
        $menu.classList.toggle('toggle')
        $toggleButton.classList.toggle('toggle')
    }
)


const $carousels = document.querySelectorAll('.js-carousel')

for(const $carousel of $carousels)
{
    const carousel = new Carousel($carousel)
}

var glide = new Glide('#intro', {
    type: 'carousel',
    perView: 4,
    focusAt: 'center',
    breakpoints: {
      800: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  })
  
  glide.mount()