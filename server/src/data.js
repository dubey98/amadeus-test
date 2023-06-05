const hotels = {};

const offers = [];

const offer = {};

const booking = {};

const offersResponse = {
  data: [
    {
      type: "hotel-offers",
      hotel: {
        type: "hotel",
        hotelId: "MCLONGHM",
        chainCode: "MC",
        dupeId: "700031300",
        name: "JW Marriott Grosvenor House London",
        cityCode: "LON",
        latitude: 51.50988,
        longitude: -0.15509,
      },
      available: true,
      offers: [
        {
          id: "TSXOJ6LFQ2",
          checkInDate: "2023-11-22",
          checkOutDate: "2023-11-23",
          rateCode: "V  ",
          rateFamilyEstimated: {
            code: "PRO",
            type: "P",
          },
          room: {
            type: "ELE",
            typeEstimated: {
              category: "EXECUTIVE_ROOM",
              beds: 1,
              bedType: "DOUBLE",
            },
            description: {
              text: "Prepay Non-refundable Non-changeable, prepay in full\nExecutive King Room, Executive Lounge Access,\n1 King, 35sqm/377sqft-40sqm/430sqft, Wireless",
              lang: "EN",
            },
          },
          guests: {
            adults: 1,
          },
          price: {
            currency: "INR",
            base: "716.00",
            total: "716.00",
            variations: {
              average: {
                base: "716.00",
              },
              changes: [
                {
                  startDate: "2023-11-22",
                  endDate: "2023-11-23",
                  total: "716.00",
                },
              ],
            },
          },
          policies: {
            paymentType: "deposit",
            cancellation: {
              description: {
                text: "NON-REFUNDABLE RATE",
              },
              type: "FULL_STAY",
            },
          },
          self: "https://test.api.amadeus.com/v3/shopping/hotel-offers/TSXOJ6LFQ2",
        },
      ],
      self: "https://test.api.amadeus.com/v3/shopping/hotel-offers?hotelIds=MCLONGHM&adults=1&checkInDate=2023-11-22&paymentPolicy=NONE&roomQuantity=1",
    },
  ],
};

const offerConfirmResponse = {
  data: {
    type: "hotel-offers",
    hotel: {
      type: "hotel",
      hotelId: "MCLONGHM",
      chainCode: "MC",
      name: "JW MARRIOTT GROSVENOR HOUSE",
      cityCode: "LON",
      address: {
        countryCode: "GB",
      },
      amenities: ["CRIBS_AVAILABLE"],
    },
    available: true,
    offers: [
      {
        id: "TSXOJ6LFQ2",
        checkInDate: "2023-11-22",
        checkOutDate: "2023-11-23",
        rateCode: "V  ",
        rateFamilyEstimated: {
          code: "PRO",
          type: "P",
        },
        description: {
          text: "Executive King Room, Executive Lounge Access, 1 King, 35sqm/377sqft-40sqm/430sqft, Wireless in ternet, for a fee, Wired internet, for a fee, C A credit card is required for payment to guarantee the Prepay Non-refundable Non-changeable rate. Prepay rates will be charged the full cost of the reservation within 24 hours of making the reservation. If payment is unsuccessful within 48 hours of making the reservation, the hotel reserves the right to cancel the reservation. Date changes to the reservation are not allowed. Cancellation will result in forfeiture of the prepayment. The credit card used at the time of making the reservation must be valid for the entire stay.",
          lang: "EN",
        },
        room: {
          type: "ELE",
          typeEstimated: {
            beds: 1,
            bedType: "DOUBLE",
          },
          description: {
            text: "Prepay Non-refundable Non-changeable, prepay in full",
            lang: "EN",
          },
        },
        guests: {
          adults: 1,
        },
        price: {
          currency: "INR",
          base: "716.00",
          total: "716.00",
          variations: {
            changes: [
              {
                startDate: "2023-11-22",
                endDate: "2023-11-23",
                base: "716.00",
              },
            ],
          },
        },
        policies: {
          paymentType: "deposit",
          cancellation: {
            description: {
              text: "NON-REFUNDABLE RATE",
            },
            type: "FULL_STAY",
          },
        },
      },
    ],
  },
  meta: {
    lang: "EN",
  },
};

const bookingResponse = {
  data: {
    offerId: "NRPQNQBOJM",
    guests: [
      {
        name: {
          title: "MR",
          firstName: "BOB",
          lastName: "SMITH",
        },
        contact: {
          phone: "+33679278416",
          email: "bob.smith@email.com",
        },
      },
    ],
    payments: [
      {
        method: "creditCard",
        card: {
          vendorCode: "VI",
          cardNumber: "0000000000000000",
          expiryDate: "2026-01",
        },
      },
    ],
  },
};

module.exports = {
  hotels,
  offer,
  offers,
  booking,
  offersResponse,
  offerConfirmResponse,
  bookingResponse,
};
