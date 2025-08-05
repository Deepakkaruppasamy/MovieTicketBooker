import express from "express";
import Show from "../models/Show.js";
import Movie from "../models/Movie.js";

const debugRouter = express.Router();

// Route to get all shows (for debugging)
debugRouter.get('/debug/shows', async (req, res) => {
    try {
        const shows = await Show.find({}).populate('movie');
        const movies = await Movie.find({});
        
        res.json({
            success: true,
            shows: shows,
            movies: movies,
            counts: {
                shows: shows.length,
                movies: movies.length
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
});

export default debugRouter;
