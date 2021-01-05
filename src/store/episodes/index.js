import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      episodes: [
        {
          id: "e1",
          title: "Gik en lang tur",
          description:
            "Gik en mega lang tur i skoven. Alle bladene og de flotte farver gjorde mig varm inden i",
          rating: 3,
          timestamp: "Idk yet",
        },
        {
          id: "e2",
          title: "S-tog",
          description:
            "Tog toget i skole. En klam stodder der lugtede af sveskehud satte sig ved siden af mig og var totalt creepy",
          rating: 1,
          timestamp: "Idk yet",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
