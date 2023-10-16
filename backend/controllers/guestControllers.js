import Guest from "../models/guestModel.js"

//GET ALL GUESTS //

export  const getGuests = async (req,res) =>{

    try{
        const guest = await Guest.find().lean()
        res.status(200).json(guest)
    }catch(error){
        res.status(400).json({error:error.message})

    }
}


//DELETE GUEST //

export const deleteGuest = async (req, res) => {
    const { id } = req.params;
    try {
        // Busca el documento por su ID
        const findGuest = await Guest.findOne({ _id: id });

        if (!findGuest) {
            return res.status(404).json({ error: "User not found" });
        }

        // Elimina el documento por su ID
        const deleteResult = await Guest.deleteOne({ _id: id });

        if (deleteResult.deletedCount === 1) {
            return res.status(200).json({
                message: `Guest with ID ${id} deleted`
            });
        } else {
            return res.status(500).json({ error: "Failed to delete guest" });
        }
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
