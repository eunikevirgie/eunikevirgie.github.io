// employment-dashboard.js
// Southeast Asia Employment Dashboard - Chart Generation Script

const countries = [
    { code: 'IDN', name: 'Indonesia', url: 'https://raw.githubusercontent.com/eunikevirgie/eunikevirgie.github.io/main/CC6_data_IDNemployment.json', color: '#36b7b4' },
    { code: 'MYS', name: 'Malaysia', url: 'https://raw.githubusercontent.com/eunikevirgie/eunikevirgie.github.io/main/CC6_data_MYSemployment.json', color: '#36b7b4' },
    { code: 'SGP', name: 'Singapore', url: 'https://raw.githubusercontent.com/eunikevirgie/eunikevirgie.github.io/main/CC6_data_SGPemployment.json', color: '#36b7b4' },
    { code: 'PHL', name: 'Philippines', url: 'https://raw.githubusercontent.com/eunikevirgie/eunikevirgie.github.io/main/CC6_data_PHLemployment.json', color: '#36b7b4' },
    { code: 'KHM', name: 'Cambodia', url: 'https://raw.githubusercontent.com/eunikevirgie/eunikevirgie.github.io/main/CC6_data_KHMemployment.json', color: '#36b7b4' },
    { code: 'LAO', name: 'Laos', url: 'https://raw.githubusercontent.com/eunikevirgie/eunikevirgie.github.io/main/CC6_data_LAOemployment.json', color: '#36b7b4' },
    { code: 'THA', name: 'Thailand', url: 'https://raw.githubusercontent.com/eunikevirgie/eunikevirgie.github.io/main/CC6_data_THAemployment.json', color: '#36b7b4' },
    { code: 'VNM', name: 'Vietnam', url: 'https://raw.githubusercontent.com/eunikevirgie/eunikevirgie.github.io/main/CC6_data_VNMemployment.json', color: '#36b7b4' },
    { code: 'MMR', name: 'Myanmar', url: 'https://raw.githubusercontent.com/eunikevirgie/eunikevirgie.github.io/main/CC6_data_MMRemployment.json', color: '#36b7b4' }
];

countries.forEach(country => {
    const chartDiv = document.createElement('div');
    chartDiv.id = `chart-${country.code}`;
    chartDiv.style.cssText = 'background: white; border-radius: 8px; padding: 15px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);';
    document.getElementById('employment-dashboard').appendChild(chartDiv);

    const spec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "title": {
            "text": `${country.name} Employment Rate (%)`,
            "subtitle": "Total employment-to-population ratio (15+)",
            "fontSize": 14,
            "subtitleFontSize": 11,
            "font": "Arial",
            "anchor": "start"
        },
        "width": 180,
        "height": 150,
        "data": { 
            "url": country.url,
            "format": { "type": "json"}
        },
        "mark": {
            "type": "line",
            "point": false,
            "strokeWidth": 2,
            "color": country.color
        },
        "encoding": {
            "x": {
                "field": "year",
                "type": "quantitative",
                "axis": {
                    "title": "Year",
                    "labelAngle": -45,
                    "format": "d",
                    "grid": false
                }
            },
            "y": {
                "field": "employment_rate",
                "type": "quantitative",
                "axis": {
                    "title": null,
                    "grid": true
                },
                "scale": { 
                    "domain": [50, 100] 
                }
            }
        }
    };
    
    vegaEmbed(`#chart-${country.code}`, spec, {
        actions: false
    }).catch(console.error);
});