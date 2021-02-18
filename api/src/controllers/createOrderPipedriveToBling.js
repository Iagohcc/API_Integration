const { apiPipeDrive, apiBling } = require("../services/api");
const ordersModel = require("../models/orders");
const _ = require("lodash");
const opportunitiesDt = require("../data-transformation/opportunities-dt");
const orderDt = require("../data-transformation/blingOrder-dt");

module.exports = {
  async createOpportunities(req, res) {
    try {
      let result = await apiPipeDrive.get(
        "/deals?status=won&api_token=fa79201ca27974206f1104e995b270dc57603baf"
      );
      result = _.get(result, "data.data", ["Nenhum valor encontrado!"]);
      const opportunitiesTransformed = opportunitiesDt(result[0]);
      // const create = await ordersModel.create(opportunitiesTransformed);
      // console.log(create);
      let orderTransformed = orderDt(opportunitiesTransformed);
      orderTransformed = String(orderTransformed);
      console.log(orderTransformed);
      const resultBling = await apiBling.post(
        `/pedido/json?apikey=c60b1bdba7ef733b88003cef7cac45669093e518b6e059eb988a3575d99dcf79b5459da6&xml=${orderTransformed}`
      );
      console.log(resultBling.data.retorno.erros);
      console.log(opportunitiesTransformed);
      res.send(resultBling.data.retorno.erros);
    } catch (error) {
      return error;
    }
  },

  async listOpportunities(req, res) {
    try {
      const list = await ordersModel.find();
      res.send(list);
    } catch (error) {}
  },
};
