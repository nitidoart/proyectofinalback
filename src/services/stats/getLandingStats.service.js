const {
    People,
    People_options,
    Categories,
    Categories_options,
    People_logins,
    Opportunities,
    Payments,
} = require("../../db.js");

const getLandingStatsService = async () => {

    try {
        const oportunidadesAceptadas = 105;
        const cantidadDeOportunidades = 200;
        const successfulConnections = `${(oportunidadesAceptadas / cantidadDeOportunidades) * 100}%`;

        const services = 25;
        const families = 250;
        const providers = 134;


        return data = { successfulConnections, services, families, providers };

    } catch (error) {
        console.log("LandingStats: ", error);
        throw error;
    }
}

module.exports = { getLandingStatsService };