import React, { useState } from 'react';
import './KnowledgeBase.css'; // Import the CSS file

const KnowledgeBase = () => {
  const [expanded, setExpanded] = useState(Array(6).fill(false)); // Track expanded state for each card

  const toggleExpand = (index) => {
    setExpanded(expanded.map((state, i) => (i === index ? !state : state)));
  };

  const resources = [
    {
      title: 'Cereal Crops: Best Practices',
      description: 'Explore effective techniques for growing rice and maize in tropical climates.',
      content: 'In tropical climates, cereal crops like rice and maize thrive under specific conditions. Key practices include timely planting, water management, and the use of organic fertilizers. Implementing crop rotation can also prevent soil depletion.',
      icon: '🌾'
    },
    {
      title: 'Legumes for Soil Health',
      description: 'Learn how legumes improve soil fertility and support sustainable agriculture.',
      content: 'Legumes, such as beans and lentils, fix nitrogen in the soil, which reduces the need for chemical fertilizers. Planting legumes as cover crops helps in improving soil structure and prevents erosion.',
      icon: '🌱'
    },
    {
      title: 'Vegetable Crop Management',
      description: 'A comprehensive guide to managing vegetables in tropical environments.',
      content: 'Tropical vegetable crop management involves monitoring soil moisture, controlling pests with natural remedies, and ensuring proper sunlight exposure. Regular pruning and fertilization are key to maximizing yield.',
      icon: '🥕'
    },
    {
      title: 'Pest Management in Cereal Crops',
      description: 'Effective strategies to manage pests affecting rice and maize.',
      content: (
        <>
          <p>Integrated Pest Management (IPM) strategies include the use of biological pest controls, such as introducing beneficial insects, and minimal pesticide application to manage infestations in cereal crops.</p>
          <div className="video-tutorial">
            <h3>Watch the Tutorial:</h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/h7qKMs_WSGQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </>
      ),
      icon: '🦗'
    },
    {
      title: 'Legume Varieties for the Tropics',
      description: 'Discover the best legume varieties suited for tropical climates.',
      content: 'Some of the best legume varieties for tropical climates include cowpeas, pigeon peas, and tropical soybeans. These varieties are drought-tolerant and can be grown in varying soil conditions, making them ideal for tropical farming.',
      icon: '🌿'
    },
    {
      title: 'Urban Vegetable Farming',
      description: 'Techniques for growing vegetables in urban tropical settings.',
      content: 'Urban farming in tropical climates requires space-efficient techniques like vertical gardening, container farming, and the use of raised beds. These methods help maximize yield in small urban spaces.',
      icon: '🌼'
    }
  ];

  return (
    <div className="knowledge-base">
      <h1>Knowledge Base</h1>
      <p>Explore a wide range of topics related to agriculture, providing detailed guides and tutorials for improved farming techniques.</p> {/* Added precise paragraph */}
      <div className="resource-cards">
        {resources.map((resource, index) => (
          <div className="card" key={index}>
            <div className="icon">{resource.icon}</div>
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            {expanded[index] && <div className="full-content">{resource.content}</div>}
            <button
              className="read-more"
              onClick={() => toggleExpand(index)}
            >
              {expanded[index] ? 'Show Less' : 'Read More'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBase;
