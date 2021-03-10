require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

const APP_PORT = process.env.PORT || 4200;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const fetchProductItems = (query = '') => {
  return axios.get(`https://api.mercadolibre.com/sites/MLA/search`, {
    params: {
      q: query,
    },
  });
}

const fetchProductItem = (id) => axios.get(`https://api.mercadolibre.com/items/${id}`);
const fetchDescriptionProductItem = (id) => axios.get(`https://api.mercadolibre.com/items/${id}/description`);

app.get('/api/items', async (req, res) => {
  const { q } = req.query;

  try {
    const { data } = await fetchProductItems(q);

    return res.status(200).json({
      code: 200,
      data,
    });
  } catch (e) {
    return res.status(403).json({
      code: 403,
      message: 'Bad Request',
    })
  }
});

app.get('/api/items/:id', async (req, res) => {
 try {
  const { id } = req.params;
  
  const product = await fetchProductItem(id);
  const description = await fetchDescriptionProductItem(id);

  return res.json({
    code: 200,
    item: {
      ...product.data,
      description: description.data,
    },
  });
 } catch (e) {
   return res.status(500).json({
     code: 500,
     message: e.message,
   });
 }
});

app.listen(APP_PORT, () => {
  console.log(`Express app is on ${APP_PORT}`);
});