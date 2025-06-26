const addMovie = (req, res) => {
  const { movie_name, info, rating } = req.body;

  // validations..
  if (!movie_name) {
    res.status(400).json({
      status: "failed",
      message: "movie name must be provided",
    });
    return;
  }

  if (!info) {
    res.status(400).json({
      status: "failed",
      message: "info name must be provided",
    });
    return;
  }

  res.status(200).json({
    status: "sucess",
    message: "Movie added successfully",
  });
};

module.exports = addMovie;
