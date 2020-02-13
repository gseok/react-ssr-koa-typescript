import { AxiosResponse } from 'axios';
import requestGet from './helpers/requestGet';
import apiPathConfig from './configs/apiPathConfig';
import { currentPhase } from '../setting';

const getGeoCodeApi = (phase: string = currentPhase): Promise<string | AxiosResponse> => {
  const url: string = apiPathConfig.geocode[phase];

  console.log('url >>', url, requestGet);

  return Promise.resolve(url);

  // TODO: real api call logic
  // return requestGet(url);
};

export default getGeoCodeApi;
