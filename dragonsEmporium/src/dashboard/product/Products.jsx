// src/product/products.js
const products = [
    {
      id: 1,
      images: [
        'https://images.unsplash.com/photo-1580894749285-1a705e110d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1580894749285-1a705e110d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1580894749285-1a705e110d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400'
      ],
      category: 'Electronics',
      date: '2024-05-01',
      title: 'Awesome Gadget',
      description: 'Latest tech gadget with advanced features, suitable for tech enthusiasts looking for performance and style.',
      rating: 5,
      sold: 150,
      remaining: 50,
      price: 299.99
    },
    {
      id: 2,
      images: [
        'https://images.unsplash.com/photo-1574169208507-843761748352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1574169208507-843761748352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1574169208507-843761748352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400'
      ],
      category: 'Home Appliances',
      date: '2024-04-15',
      title: 'Smart Blender',
      description: 'Smart kitchen blender with Wi-Fi capabilities and automatic cleaning system.',
      rating: 4,
      sold: 90,
      remaining: 110,
      price: 149.99
    },
    {
      id: 3,
      images: [
        'https://images.unsplash.com/photo-1572233546114-d877d7ed918a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1572233546114-d877d7ed918a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1572233546114-d877d7ed918a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400'
      ],
      category: 'Fitness',
      date: '2024-03-30',
      title: 'High-Tech Treadmill',
      description: 'Innovative treadmill featuring a touchscreen display and integrated health tracking.',
      rating: 4.5,
      sold: 75,
      remaining: 25,
      price: 799.99
    },
    {
      id: 4,
      images: [
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400'
      ],
      category: 'Fitness',
      date: '2024-03-30',
      title: 'Smart Dumbbells',
      description: 'Set of smart dumbbells with integrated rep counter and Bluetooth connectivity.',
      rating: 4,
      sold: 120,
      remaining: 30,
      price: 199.99
    },
    {
      id: 5,
      images: [
        'https://images.unsplash.com/photo-1580894749285-1a705e110d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1580894749285-1a705e110d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1580894749285-1a705e110d63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400'
      ],
      category: 'Electronics',
      date: '2024-05-01',
      title: '4K TV',
      description: 'Ultra HD 4K television with HDR and smart features.',
      rating: 4.5,
      sold: 300,
      remaining: 20,
      price: 999.99
    },
    {
      id: 6,
      images: [
        'https://images.unsplash.com/photo-1580910051078-e2a6f9eac503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1580910051078-e2a6f9eac503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1580910051078-e2a6f9eac503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400'
      ],
      category: 'Home Appliances',
      date: '2024-04-15',
      title: 'Air Purifier',
      description: 'Advanced air purifier with HEPA filter and smart home integration.',
      rating: 4.7,
      sold: 200,
      remaining: 40,
      price: 249.99
    },
    {
      id: 7,
      images: [
        'https://images.unsplash.com/photo-1574169208507-843761748352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1574169208507-843761748352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1574169208507-843761748352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400'
      ],
      category: 'Fitness',
      date: '2024-03-30',
      title: 'Yoga Mat',
      description: 'Eco-friendly yoga mat with non-slip surface.',
      rating: 4.3,
      sold: 150,
      remaining: 50,
      price: 49.99
    },
    {
      id: 8,
      images: [
        'https://images.unsplash.com/photo-1592194996308-7ebf60e1d168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1592194996308-7ebf60e1d168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1592194996308-7ebf60e1d168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400'
      ],
      category: 'Fitness',
      date: '2024-03-30',
      title: 'Fitness Tracker',
      description: 'Wearable fitness tracker with heart rate monitoring and GPS.',
      rating: 4.2,
      sold: 400,
      remaining: 100,
      price: 99.99
    },
    {
      id: 9,
      images: [
        'https://images.unsplash.com/photo-1598300053583-95a50d6ec950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1598300053583-95a50d6ec950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1598300053583-95a50d6ec950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400'
      ],
      category: 'Electronics',
      date: '2024-05-01',
      title: 'Wireless Headphones',
      description: 'Noise-cancelling wireless headphones with long battery life.',
      rating: 4.6,
      sold: 250,
      remaining: 75,
      price: 199.99
    },
    {
      id: 10,
      images: [
        'https://images.unsplash.com/photo-1554181842-a6a65d6b540b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1554181842-a6a65d6b540b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1554181842-a6a65d6b540b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400'
      ],
      category: 'Home Appliances',
      date: '2024-04-15',
      title: 'Robot Vacuum',
      description: 'Smart robot vacuum cleaner with automatic charging and scheduling.',
      rating: 4.8,
      sold: 180,
      remaining: 20,
      price: 399.99
    },
    {
      id: 11,
      images: [
        'https://images.unsplash.com/photo-1596905870171-3f7ddc7ecdb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1596905870171-3f7ddc7ecdb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1596905870171-3f7ddc7ecdb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400'
      ],
      category: 'Fitness',
      date: '2024-03-30',
      title: 'Resistance Bands',
      description: 'Set of resistance bands with different tension levels for versatile workouts.',
      rating: 4.1,
      sold: 300,
      remaining: 100,
      price: 29.99
    },
    {
      id: 12,
      images: [
        'https://images.unsplash.com/photo-1603988363587-8e0a0774541d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1603988363587-8e0a0774541d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1603988363587-8e0a0774541d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400'
      ],
      category: 'Electronics',
      date: '2024-05-01',
      title: 'Smartphone',
      description: 'Latest model smartphone with advanced camera features and high-speed processor.',
      rating: 4.9,
      sold: 500,
      remaining: 150,
      price: 799.99
    },
    {
      id: 13,
      images: [
        'https://images.unsplash.com/photo-1599004055736-ffdf233fb692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1599004055736-ffdf233fb692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1599004055736-ffdf233fb692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400'
      ],
      category: 'Home Appliances',
      date: '2024-04-15',
      title: 'Smart Thermostat',
      description: 'Wi-Fi enabled smart thermostat with voice control and energy-saving features.',
      rating: 4.4,
      sold: 230,
      remaining: 70,
      price: 149.99
    },
    {
      id: 14,
      images: [
        'https://images.unsplash.com/photo-1542038784456-67ca1e8e160d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1542038784456-67ca1e8e160d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1542038784456-67ca1e8e160d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400'
      ],
      category: 'Fitness',
      date: '2024-03-30',
      title: 'Running Shoes',
      description: 'High-performance running shoes with cushioning and support for long-distance running.',
      rating: 4.5,
      sold: 120,
      remaining: 30,
      price: 129.99
    },
    {
      id: 15,
      images: [
        'https://images.unsplash.com/photo-1543332164-6e5f9f60b33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1543332164-6e5f9f60b33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1543332164-6e5f9f60b33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400'
      ],
      category: 'Electronics',
      date: '2024-05-01',
      title: 'Gaming Console',
      description: 'Next-gen gaming console with ultra-fast processing and stunning graphics.',
      rating: 4.8,
      sold: 350,
      remaining: 50,
      price: 499.99
    },
    {
      id: 16,
      images: [
        'https://images.unsplash.com/photo-1542206395-9feb3edaa68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1542206395-9feb3edaa68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400',
        'https://images.unsplash.com/photo-1542206395-9feb3edaa68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTMyMzl8MHwxfGFsbHwxfHx8fHx8fHwxNjE2OTg5NzI4&ixlib=rb-1.2.1&q=80&w=400'
      ],
      category: 'Home Appliances',
      date: '2024-04-15',
      title: 'Smart Light Bulb',
      description: 'Energy-efficient smart light bulb with customizable colors and voice control.',
      rating: 4.2,
      sold: 400,
      remaining: 100,
      price: 19.99
    }
  ];
  
  export default products;
  