const express = require('express');
const cors = require('cors');
const neo4j = require('neo4j-driver');

const app = express();
app.use(cors());
app.use(express.json());


const driver = neo4j.driver(
    'neo4j+s://92a27697.databases.neo4j.io',  // Use the correct Bolt URL
    neo4j.auth.basic('neo4j', 'bD0Xego9Hqar1HtpICsFpB5cDPQJzI_Y6kXveLGI36Y')  // Replace with the actual password
  );


// Verify the Neo4j connection
driver.verifyConnectivity()
  .then(() => {
    console.log('Neo4j connection successful');
  })
  .catch((error) => {
    console.error('Failed to connect to Neo4j:', error);
  });

app.get('/api/pharmacies', async (req, res) => {
  const session = driver.session(); // Create session inside the route handler
  try {
    const result = await session.run('MATCH (p:Pharmacy) RETURN p');
    const pharmacies = result.records.map(record => record.get('p').properties);
    res.json(pharmacies);
  } catch (error) {
    console.error('Error fetching pharmacies:', error); // Log the error
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  } finally {
    await session.close(); // Ensure the session is closed after query
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
