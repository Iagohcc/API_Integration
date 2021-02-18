const axios = require("axios").default;

const baseUrlPipeDrive = "https://testelinkapi.pipedrive.com/api/v1";
const baseUrlBling = "https://www.bling.com.br/Api/v2";

const appTokenPipeDrive = "fa79201ca27974206f1104e995b270dc57603baf";
const appTokenBling =
  "c60b1bdba7ef733b88003cef7cac45669093e518b6e059eb988a3575d99dcf79b5459da6";

const apiPipeDrive = axios.create({
  baseURL: baseUrlPipeDrive,
  timeout: 5000,
});

const apiBling = axios.create({
  baseURL: baseUrlBling,
  timeout: 5000,
});

module.exports = { apiPipeDrive, apiBling };
