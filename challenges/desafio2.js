db.movies.aggregate(
  [
    {
      $match: {
        genres: { $nin: ["Crime", "Horror"] },
        rated: { $in: ["PG", "G"] },
        "imdb.rating": { $gte: 7 },
        languages: { $all: ["English", "Spanish"] },
      },
    },
    {
      $project: {
        _id: 0,
        titulo: "$title",
        avaliado: "$rated",
        notaIMDB: "$imdb.rating",
        votosIMDB: "$imdb.votes",
        ano: "$year",
      },
    },
  ],
);
