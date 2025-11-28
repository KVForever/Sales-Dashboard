// Class: SWE2511 - Sales Dashboard
// Name: Kalkidan Vassar
// Class Section: 131

/**
 * chartSetup
 * Set up the Google chart properties and other page events
 */
const chartSetup = () => {
    google.charts.load('current', { packages: ['corechart', 'table'] });
    google.charts.setOnLoadCallback(createDefaultDisplay);
};

/**
 * drawSalesTable
 * Draws the salespeople table (filtered or full)
 */
function drawSalesTable(filteredSalespeople) {
    const tableData = new google.visualization.DataTable();
    tableData.addColumn('string', 'Name');
    tableData.addColumn('string', 'Region');
    tableData.addColumn('number', 'Revenue');
    tableData.addColumn('number', 'Average Sale Size');
    tableData.addColumn('number', 'Performance');

    const rows = filteredSalespeople.map(person => [
        person.name,
        person.region,
        person.revenue,
        person.avgDealSize,
        person.performance
    ]);
    tableData.addRows(rows);

    const tableChart = new google.visualization.Table(
        document.getElementById('myTableChart')
    );

    tableChart.draw(tableData, {
        showRowNumber: true,
        width: '100%',
        height: '100%',
        allowHtml: true, // enables HTML-based cell styling
        cssClassNames: {
            headerRow: 'google-table-header',
            tableRow: 'google-table-row',
            oddTableRow: 'google-table-row-odd',
            selectedTableRow: 'google-table-row-selected',
            hoverTableRow: 'google-table-row-hover',
            headerCell: 'google-table-header-cell',
            tableCell: 'google-table-cell'
        },
        page: 'enable',
        pageSize: 5, // adds pagination
        alternatingRowStyle: true
    });
}

// Draw line chart function
function drawLineChart(filteredSales) {
    const lineData = new google.visualization.DataTable();
    lineData.addColumn('string', 'Month');
    lineData.addColumn('number', 'Actual Revenue');
    lineData.addColumn('number', 'Target Revenue');

    lineData.addRows(
        filteredSales.map(item => [item.month, item.revenue, item.target])
    );

    const lineOptions = {
        title: 'Monthly Sales Performance',
        titleTextStyle: {
            color: '#004aad',
            fontSize: 18,
            bold: true
        },
        width: '100%',
        height: '100%',
        curveType: 'function', // smooth lines instead of sharp angles
        legend: {
            position: 'bottom',
            textStyle: {
                color: '#333',
                fontSize: 13
            }
        },
        colors: ['#4e79a7', '#f28e2b'], // consistent with pie chart palette
        pointSize: 6,
        lineWidth: 3,
        backgroundColor: 'transparent',
        chartArea: {
            left: 60,
            top: 60,
            width: '85%',
            height: '70%'
        },
        hAxis: {
            title: 'Month',
            titleTextStyle: { color: '#555', fontSize: 14 },
            textStyle: { color: '#333', fontSize: 12 },
            gridlines: { color: '#eee' }
        },
        vAxis: {
            title: 'Revenue ($)',
            titleTextStyle: { color: '#555', fontSize: 14 },
            textStyle: { color: '#333', fontSize: 12 },
            gridlines: { color: '#eee' },
            format: 'currency'
        },
        tooltip: {
            textStyle: { fontSize: 12 },
            showColorCode: true
        },
        animation: {
            startup: true,
            duration: 800,
            easing: 'out'
        },
        crosshair: {
            color: '#004aad',
            trigger: 'both'
        }
    };


    const lineChart = new google.visualization.LineChart(
        document.getElementById('myLineChart')
    );
    lineChart.draw(lineData, lineOptions);
}

function drawPieChart(categories) {
    // Convert categories into chart rows
    const pieDataArray = [['Category', 'Revenue']];
    categories.forEach(c => pieDataArray.push([c.category, c.revenue]));

    const pieData = google.visualization.arrayToDataTable(pieDataArray);

    const pieOptions = {
        title: 'Revenue by Product Categories',
        legend: {
            position: 'right',
            alignment: 'center',
            textStyle: {
                color: '#333',
                fontSize: 14,
                fontName: 'Segoe UI'
            }
        },
        titleTextStyle: {
            color: '#004aad',
            fontSize: 18,
            bold: true
        },
        slices: {
            0: { color: '#4e79a7' },
            1: { color: '#f28e2b' },
            2: { color: '#e15759' },
            3: { color: '#76b7b2' },
            4: { color: '#59a14f' }
        },
        chartArea: {
            left: 20,
            top: 60,
            width: '80%',
            height: '80%'
        },
        backgroundColor: 'transparent',
        pieSliceBorderColor: '#fff',
        pieHole: 0.4,
        pieStartAngle: 45,
        tooltip: {
            text: 'percentage',
            showColorCode: true
        },
        animation: {
            startup: true,
            duration: 800,
            easing: 'out'
        }
    };

    const pieChart = new google.visualization.PieChart(
        document.getElementById('myPieChart')
    );
    pieChart.draw(pieData, pieOptions);
}

/**
 * createDefaultDisplay
 * Create the "default" page - display all data with no filters
 */
const createDefaultDisplay = () => {
    // ---------- Pie Chart ----------
    drawPieChart(productCategories)

    // ---------- Line Chart ----------
   drawLineChart(monthlySales)

    // ---------- Table Chart ----------
    drawSalesTable(topSalespeople); // Draw full table initially
};

// ---------- Initialize ----------
window.onload = () => {
    chartSetup();
};

// ---------- Filtering Form Logic ----------
document.addEventListener('DOMContentLoaded', () => {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const regionButton = document.getElementById('regionDropdown');
    const selectedRegionInput = document.getElementById('selectedRegion');
    const form = document.getElementById('regionFilterForm');

    // Handle dropdown selections
    dropdownItems.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            const region = item.getAttribute('data-region');

            // Update button text and hidden input
            regionButton.textContent = region || 'All Regions';
            selectedRegionInput.value = region;
        });
    });

    // Handle form submission
    form.addEventListener('submit', e => {
        e.preventDefault();

        const region = selectedRegionInput.value.trim().toLowerCase();
        const searchTerm = e.target.searchTerm.value.trim().toLowerCase();

        // Start with full dataset
        let filtered = topSalespeople;

        // Filter by region (if selected)
        if (region && region !== 'all') {
            filtered = filtered.filter(p => p.region.toLowerCase() === region);
        }

        if (searchTerm) {
            filtered = filtered.filter(p =>
                Object.values(p).some(v => String(v).toLowerCase().includes(searchTerm))
            );
        }

        // Filter by search term (match ANY property)
        if (searchTerm) {
            filtered = filtered.filter(p => {
                // Convert all values to lowercase strings and see if any include the search term
                return Object.values(p).some(value =>
                    String(value).toLowerCase().includes(searchTerm)
                );
            });
        }

        // Redraw filtered table
        drawSalesTable(filtered);
    });

    // Define quarter mappings
    const quarters = {
        'First Quarter': ['January', 'February', 'March'],
        'Second Quarter': ['April', 'May', 'June'],
        'Third Quarter': ['July', 'August', 'September'],
        'Fourth Quarter': ['October', 'November', 'December']
    };

    // Handle quarter filter checkboxes
    document
        .getElementById('lineChartFiltersForm')
        .addEventListener('change', e => {
            const checkedQuarters = Array.from(
                document.querySelectorAll('input[name="quarterFilter"]:checked')
            ).map(cb => cb.value);

            if (checkedQuarters.length === 0) {
                drawLineChart(monthlySales);
                return;
            }

            const selectedMonths = checkedQuarters.flatMap(q => quarters[q]);

            const filtered = monthlySales.filter(sale =>
                selectedMonths.includes(sale.month)
            );

            drawLineChart(filtered);
        });


    const slider = document.getElementById('myRange');
    const output = document.getElementById('sliderValue');

// Currency formatter (U.S. dollars)
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    });

// Show initial value in dollar format
    output.textContent = currencyFormatter.format(slider.value);

// Handle slider input
    slider.addEventListener('input', () => {
        const sliderValue = Number(slider.value);
        output.textContent = currencyFormatter.format(sliderValue);

        // Filter product categories by revenue above slider value
        const filteredCategories = productCategories.filter(
            c => c.revenue >= sliderValue
        );

        // Redraw pie chart with filtered categories
        drawPieChart(filteredCategories);
    });
});
