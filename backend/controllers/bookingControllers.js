import Booking from "../models/bookingModel.js";
import Guest from "../models/guestModel.js";

// GET ALL BOOKINGS //

export const getBookings = async (req, res) => {
  const bookings = await Booking.find().populate("guest");
   res.status(200).json({bookings});
};

// SAVE BOOKING //

export const saveBooking = async (req, res) => {
  const { date, time, amount, tables, message, guest } = req.body;

  // Save values from guest object in req.body
  const name = guest.name;
  const email = guest.email;
  const phone = guest.phone;
  console.log(`reqboid`,req.body)

  try {
    const checkGuest = await Guest.findOne({ email});

    console.log(`checkguest`, checkGuest ? "si" : "no")
    if (!checkGuest) {
      const newGuest = new Guest({
        name: name,
        email: email,
        phone: phone,
      });

      await newGuest.save();

      const newBooking = new Booking({
        date: date,
        time: time,
        guest: newGuest._id,
        amount: amount,
        tables: tables,
        message: message,
      });
      // And save it
      await newBooking.save();

      return res.status(200).json(`booking has been made ${newBooking}`);
    }

    if (checkGuest) {
      const newBooking = new Booking({
        date: date,
        time: time,
        amount: amount,
        tables: tables,
        message: message,
        guest: checkGuest._id,
      });

      await newBooking.save();

      return res.status(200).json(`booking has been made ${newBooking}`);
    }
  } catch (error) {
    res.status(404).json({error:error.message})


  }
};


// EDIT BOOKING //

export const editBooking = async (req, res) => {
  const id = req.params.id
  console.log(`reqparamspapa`,req)
  try {
    const editedBooking = await Booking.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        date: req.body.date,
        time: req.body.time,
        amount: req.body.amount,
        tables: req.body.tables,
        message: req.body.message,
      },
    )


      console.log(`este seria el updated`, editBooking
      )
    // Set 200 status and send response
    res.status(200).json(editedBooking)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// EDIT BOOKING //

export const deleteBooking = async (req, res) => {
  const _id = req.params.id

  try {
    // Find booking by ID and delete
    await Booking.findById(_id).deleteOne()
    res.status(200).json(`Booking ${_id} deleted`)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}


//////////////////////
// GET AVAILABILITY //
//////////////////////
export const searchAvailability = async (req, res) => {
  const { date, time, amount, tables } = req.body

  // Get all bookings from db
  const allBookings = await Booking.find().lean()

  try {
    // Get existing reservations from requested day
    const requestedDate = allBookings.filter((booking) => booking.date === date)
    // If there are no reservations on requested date, confirm booking
    if (requestedDate.length < 1) {
      res.status(200).send(true)
    } else {
      /* If there are bookings on requested date,
    check if there are any at the same time */
      for (let i = 0; i < requestedDate.length; i++) {
        // List of bookings on the same date and same time:
        const sameDayAndTime = requestedDate.filter(
          (booking) => booking.time === time,
        )
        // If there are no bookings on requested time, confirm booking
        if (sameDayAndTime.length < 1) {
          res.status(200).send(true)
        } else {
          // Get list of bookings with same date & time:
          for (let j = 0; j < sameDayAndTime.length; j++) {
            // Get total amount of booked tables on same date & time
            const bookedTables = sameDayAndTime.reduce(function (a, b) {
              return a + b.tables
            }, 0)
            // If 15 tables are already booked, decline booking request
            if (bookedTables + tables > 15) {
              res.status(200).send(false)
            } // If there are tables available, confirm booking
            else {
              res.status(200).send(true)
            }
          }
        }
      }
    }
  } catch (error) {
    res.status(400)
  }
}




