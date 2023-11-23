import { environment } from "src/environments/environment";

export class ApiUrls {
    public static ApiPrefix = environment.baseUrl + 'api/';
    public static HomeApi = ApiUrls.ApiPrefix + 'Home';

}

export class ApiActions {
}
export const ShipmentTracking = "ShipmentTracking";