import { UserAddressApi, UserProfileApi, FavoritesApi, FormApi } from '../apiClients/index';

export class AppApi {
    constructor(request){
        this.request = request;
        this.userAddressApi = new UserAddressApi(request);
        this.userProfileApi = new UserProfileApi(request);
        this.favoritesApi = new FavoritesApi(request);
        this.formApi = new FormApi(request);
    }
}