// src/components/FarmersMarket.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';
import './FarmersMarket.css';

// Slideshow Component for top of the page
const Slideshow = ({ markets }) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === markets.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [markets.length]);

  return (
    <div className="slideshow-container">
      <Card className="slideshow-card">
        <CardMedia
          component="img"
          height="140"
          image={markets[current].image}
          alt={markets[current].name}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {markets[current].name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {markets[current].location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {markets[current].openingHours}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

// FarmersMarket Component
const FarmersMarket = () => {
  const farmersMarketsData = [
    {
      name: 'Nakuru Farmers\' Market',
      location: 'Nakuru, Rift Valley',
      openingHours: 'Monday - Saturday: 8 AM - 5 PM',
      image: 'https://example.com/images/nakuru-market.jpg',
      vendors: [
        { name: 'John\'s Organic Vegetables', products: ['Spinach', 'Carrots', 'Kale'], contact: 'john@organic.com | +254 700 123456' },
        { name: 'Pure Dairy Products', products: ['Milk', 'Cheese', 'Yogurt'], contact: 'info@puredairy.com | +254 700 654321' },
      ],
      facilities: ['Parking', 'Restrooms', 'Organic Certification Center'],
      contact: 'nakurumarket@farmers.co.ke | +254 701 123456',
    },
    {
      name: 'Kisumu Agro Market',
      location: 'Kisumu, Nyanza',
      openingHours: 'Monday - Friday: 8 AM - 4 PM',
      image: 'kisumu-market.jpg',
      vendors: [
        { name: 'Lakeview Horticulture', products: ['Tomatoes', 'Onions', 'Peppers'], contact: 'lakeview@farmers.co.ke | +254 733 445566' },
        { name: 'Sweet Grains Millers', products: ['Maize', 'Sorghum', 'Millet'], contact: 'millers@sweetgrains.com | +254 744 556677' },
      ],
      facilities: ['Milling Services', 'Packaging Center', 'Storage Silos'],
      contact: 'kisumumarket@farmers.co.ke | +254 733 445566',
    },
    {
      name: 'Nyeri Farmers\' Market',
      location: 'Nyeri, Central',
      openingHours: 'Wednesday - Sunday: 7 AM - 2 PM',
      image: 'nyeri-market.jpg',
      vendors: [
        { name: 'Fresh Greens Ltd', products: ['Kale', 'Cabbage', 'Lettuce'], contact: 'freshgreens@nyerimarket.com | +254 733 123456' },
        { name: 'Dairyland Products', products: ['Milk', 'Butter', 'Cheese'], contact: 'dairyland@nyerimarket.com | +254 722 556677' },
      ],
      facilities: ['Cold Storage', 'Restrooms', 'Parking'],
      contact: 'nyerimarket@farmers.co.ke | +254 733 445566',
    },
    {
      name: 'Mombasa Fresh Market',
      location: 'Mombasa, Coast',
      openingHours: 'Tuesday - Sunday: 7 AM - 3 PM',
      image: 'mombasa-market.jpg',
      vendors: [
        { name: 'Tropical Fruits Ltd', products: ['Mangoes', 'Pineapples', 'Coconuts'], contact: 'sales@tropicalfruits.com | +254 711 223344' },
        { name: 'Sea Breeze Fish Market', products: ['Tilapia', 'Prawns', 'Crab'], contact: 'info@seabreeze.com | +254 722 556677' },
      ],
      facilities: ['Seafood Processing', 'Cold Storage', 'Water Supply'],
      contact: 'mombasafresh@farmers.co.ke | +254 722 334455',
    },
    {
      name: 'Garissa Livestock Market',
      location: 'Garissa, North Eastern',
      openingHours: 'Monday - Friday: 8 AM - 4 PM',
      image: 'garissa-market.jpg',
      vendors: [
        { name: 'Garissa Livestock Traders', products: ['Cattle', 'Goats', 'Camels'], contact: 'livestock@garissamarket.com | +254 700 111222' },
        { name: 'East African Skins & Hides', products: ['Cowhides', 'Goat Skins'], contact: 'skins@eastafrican.com | +254 700 222333' },
      ],
      facilities: ['Livestock Auction Center', 'Veterinary Services', 'Animal Feed Supplies'],
      contact: 'garissamarket@farmers.co.ke | +254 700 333444',
    },
    {
      name: 'Meru Farmers\' Market',
      location: 'Meru, Eastern',
      openingHours: 'Tuesday - Saturday: 8 AM - 5 PM',
      image: 'meru-market.jpg',
      vendors: [
        { name: 'Highland Vegetables', products: ['Carrots', 'Potatoes', 'Cabbage'], contact: 'highland@merumarket.com | +254 722 345678' },
        { name: 'Mount Kenya Dairy', products: ['Milk', 'Butter', 'Cheese'], contact: 'dairy@mountkenya.com | +254 722 556788' },
      ],
      facilities: ['Cold Storage', 'Restrooms', 'Parking'],
      contact: 'merumarket@farmers.co.ke | +254 722 556677',
    },
    {
      name: 'Kilifi Coastal Market',
      location: 'Kilifi, Coast',
      openingHours: 'Monday - Saturday: 7 AM - 3 PM',
      image: 'kilifi-market.jpg',
      vendors: [
        { name: 'Coastal Fruits Co.', products: ['Bananas', 'Papayas', 'Oranges'], contact: 'info@coastalfruits.com | +254 700 345678' },
        { name: 'Kilifi Fresh Fish', products: ['Tilapia', 'Shrimp', 'Octopus'], contact: 'freshfish@kilifi.com | +254 722 556888' },
      ],
      facilities: ['Fish Processing', 'Cold Storage', 'Water Supply'],
      contact: 'kilifimarket@farmers.co.ke | +254 722 556899',
    },
    {
      name: 'Bungoma Farmers\' Market',
      location: 'Bungoma, Western',
      openingHours: 'Monday - Friday: 7 AM - 4 PM',
      image: 'bungoma-market.jpg',
      vendors: [
        { name: 'Western Grains', products: ['Maize', 'Beans', 'Groundnuts'], contact: 'grains@bungomamarket.com | +254 733 223344' },
        { name: 'Bungoma Dairy Co.', products: ['Milk', 'Butter', 'Yogurt'], contact: 'dairy@bungoma.com | +254 722 667788' },
      ],
      facilities: ['Milling Services', 'Cold Storage', 'Organic Certification'],
      contact: 'bungomamarket@farmers.co.ke | +254 733 445677',
    }
  ];

  return (
    <div className="farmers-market-container">
      <h1>Farmers' Market</h1>
      <p>Discover local farmers' markets, vendors, and products available near you.</p>

      <Slideshow markets={farmersMarketsData.slice(0, 3)} />

      <Grid container spacing={3}>
        {farmersMarketsData.map((market, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="market-card">
              <CardMedia
                component="img"
                height="140"
                image={market.image}
                alt={market.name}
              />
              <CardContent>
                <Typography variant="h5">{market.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {market.location}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {market.openingHours}
                </Typography>
                <Typography variant="h6">Vendors:</Typography>
                <ul>
                  {market.vendors.map((vendor, i) => (
                    <li key={i}>
                      {vendor.name} - {vendor.products.join(', ')} ({vendor.contact})
                    </li>
                  ))}
                </ul>
                <Typography variant="h6">Facilities:</Typography>
                <ul>
                  {market.facilities.map((facility, i) => (
                    <li key={i}>{facility}</li>
                  ))}
                </ul>
                <Typography variant="h6">Contact:</Typography>
                <Typography variant="body2">{market.contact}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FarmersMarket;
