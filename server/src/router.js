const { API_KEY, API_SECRET } = require("./config");
const Amadeus = require("amadeus");
const express = require("express");
// Create router
const router = express.Router();

const amadeus = new Amadeus({
  clientId: API_KEY,
  clientSecret: API_SECRET,
});

const API = "api";
// City search suggestions
router.get(`/${API}/search`, async (req, res) => {
  const { keyword } = req.query;
  const response = await amadeus.referenceData.locations.get({
    keyword,
    subType: Amadeus.location.city,
  });
  try {
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

// Querying hotel offers
router.get(`/${API}/hotels`, async (req, res) => {
  const { cityCode } = req.query;
  const response = await amadeus.shopping.hotelOffers.get({
    cityCode,
  });

  try {
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

// Confirming the offer
router.get(`/${API}/offer`, async (req, res) => {
  const { offerId } = req.query;
  const response = await amadeus.shopping.hotelOffer(offerId).get();
  try {
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

// Booking
router.post(`/${API}/booking`, async (req, res) => {
  const { offerId } = req.query;
  const { body } = req;
  const response = await amadeus.booking.hotelBookings.post(
    JSON.stringify({
      data: {
        offerId,
        guests: body.guests,
        payments: body.payments,
      },
    })
  );
  try {
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

// ...
module.exports = router;
