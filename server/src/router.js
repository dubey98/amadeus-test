const { API_KEY, API_SECRET } = require("./config");
const Amadeus = require("amadeus");
const express = require("express");
// Create router
const router = express.Router();
const {
  offersResponse,
  offerConfirmResponse,
  bookingResponse,
} = require("./data");

const amadeus = new Amadeus({
  clientId: API_KEY,
  clientSecret: API_SECRET,
});

const API = "api";
// City search suggestions
router.get(`/${API}/search`, async (req, res) => {
  const { keyword } = req.query;
  try {
    const response = await amadeus.referenceData.locations.get({
      keyword,
      subType: Amadeus.location.city,
    });
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

// Querying hotel offers
router.get(`/${API}/hotels`, async (req, res) => {
  const { cityCode } = req.query;
  try {
    const response = await amadeus.referenceData.locations.hotels.byCity.get({
      cityCode,
    });
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

// Querying hotel offers
router.get(`/${API}/offers`, async (req, res) => {
  const { hotelId } = req.query;

  try {
    const response = await amadeus.shopping.hotelOffersSearch.get({
      hotelIds: hotelId,
    });
    const newOffer = JSON.parse(JSON.stringify(offersResponse));
    const price = Math.round(Math.random() * 1000);
    newOffer.data[0].offers[0].price.base = price;
    newOffer.data[0].offers[0].price.total = price;
    setTimeout(async () => {
      await res.json(newOffer);
    }, 1500);
  } catch (err) {
    await res.json(err);
  }
});

// Confirming the offer
router.get(`/${API}/offer`, async (req, res) => {
  const { offerId } = req.query;
  try {
    // const response = await amadeus.shopping.hotelOffer(offerId).get();

    setTimeout(async () => {
      await res.json(offerConfirmResponse);
    }, 1500);
  } catch (err) {
    await res.json(err);
  }
});

// Booking
router.post(`/${API}/booking`, async (req, res) => {
  const { offerId } = req.query;
  const { body } = req;

  try {
    // const response = await amadeus.booking.hotelBookings.post(
    //   JSON.stringify({
    //     data: {
    //       offerId,
    //       guests: body.guests,
    //       payments: body.payments,
    //     },
    //   })
    // );
    setTimeout(async () => {
      await res.json(bookingResponse);
    }, 1500);
  } catch (err) {
    await res.json(err);
  }
});

module.exports = router;
