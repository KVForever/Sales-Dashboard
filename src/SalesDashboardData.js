// Class: SWE2511 - Sales Dashboard
// Name: Kalkidan Vassar
// Class Section: 131

const monthlySales = [
    { month: 'January', revenue: 145000, units: 1250, target: 150000 },
    { month: 'February', revenue: 132000, units: 1100, target: 140000 },
    { month: 'March', revenue: 168000, units: 1420, target: 160000 },
    { month: 'April', revenue: 156000, units: 1310, target: 155000 },
    { month: 'May', revenue: 189000, units: 1580, target: 175000 },
    { month: 'June', revenue: 201000, units: 1690, target: 190000 },
    { month: 'July', revenue: 178000, units: 1490, target: 180000 },
    { month: 'August', revenue: 164000, units: 1370, target: 170000 },
    { month: 'September', revenue: 195000, units: 1640, target: 185000 },
    { month: 'October', revenue: 223000, units: 1870, target: 210000 },
    { month: 'November', revenue: 267000, units: 2240, target: 250000 },
    { month: 'December', revenue: 312000, units: 2620, target: 290000 }
];

const productCategories = [
    {
        category: 'Electronics',
        revenue: 782000,
        units: 3200,
        margin: 0.28,
        growthRate: 15.2
    },
    {
        category: 'Furniture',
        revenue: 524000,
        units: 1800,
        margin: 0.35,
        growthRate: 8.7
    },
    {
        category: 'Office Supplies',
        revenue: 398000,
        units: 8500,
        margin: 0.42,
        growthRate: 12.3
    },
    {
        category: 'Clothing',
        revenue: 456000,
        units: 6200,
        margin: 0.48,
        growthRate: 6.5
    },
    {
        category: 'Home & Garden',
        revenue: 370000,
        units: 2840,
        margin: 0.38,
        growthRate: 18.9
    }
];

const topSalespeople = [
    {
        name: 'Sarah Chen',
        region: 'West',
        revenue: 287000,
        deals: 145,
        avgDealSize: 1979,
        performance: 128 // percentage of target
    },
    {
        name: 'Marcus Johnson',
        region: 'Northeast',
        revenue: 265000,
        deals: 132,
        avgDealSize: 2008,
        performance: 122
    },
    {
        name: 'Emily Rodriguez',
        region: 'Southeast',
        revenue: 251000,
        deals: 156,
        avgDealSize: 1609,
        performance: 118
    },
    {
        name: 'James O\'Brien',
        region: 'Midwest',
        revenue: 234000,
        deals: 118,
        avgDealSize: 1983,
        performance: 115
    },
    {
        name: 'Aisha Patel',
        region: 'West',
        revenue: 228000,
        deals: 141,
        avgDealSize: 1617,
        performance: 112
    },
    {
        name: 'David Kim',
        region: 'Northeast',
        revenue: 219000,
        deals: 127,
        avgDealSize: 1724,
        performance: 108
    },
    {
        name: 'Lisa Thompson',
        region: 'Southeast',
        revenue: 206000,
        deals: 138,
        avgDealSize: 1493,
        performance: 105
    },
    {
        name: 'Carlos Mendez',
        region: 'Midwest',
        revenue: 198000,
        deals: 115,
        avgDealSize: 1722,
        performance: 102
    }
];