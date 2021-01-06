export default {
  async addEpisode(context, data) {
    const id = "e3";
    const episodeData = {
      title: data.title,
      description: data.description,
      rating: data.rating,
      date: data.date,
    };

    const response = await fetch(
      "https://moodtrackingapp-6960a-default-rtdb.firebaseio.com/episodes.json",
      {
        method: "POST",
        body: JSON.stringify(episodeData),
      }
    );

    if (!response.ok) {
      // error ...
    }

    context.commit("addEpisode", {
      ...episodeData,
      id: id,
    });
  },
  async loadEpisodes(context) {
    const response = await fetch(
      "https://moodtrackingapp-6960a-default-rtdb.firebaseio.com/episodes.json"
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Indlæsning af episoder fejlede"
      );
      throw error;
    }

    const episodes = [];

    for (const key in responseData) {
      const episode = {
        id: key,
        title: responseData[key].title,
        description: responseData[key].description,
        rating: responseData[key].rating,
        date: responseData[key].date,
      };
      episodes.push(episode);
    }

    context.commit("setEpisodes", episodes);
  },
};
