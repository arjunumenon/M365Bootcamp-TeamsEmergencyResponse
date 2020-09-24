import Pushpin from '../../model/IPushpin';
import { IMapDataService } from './IMapDataService';

export default class MapDataServiceMock implements IMapDataService {

    public getMapPoints(): Promise<Pushpin[]> {

        return new Promise<Pushpin[]>((resolve => {
            resolve(this.mockItems);
        }));

    }

    public getEditUrl(): string {
        return "#";
    }

    private mockItems =
        [
            {
                pushpinNumber: 1,
                title: 'Statue of Liberty',
                subtitle: 'National Monument',
                address: 'Statue of Liberty',
                latitude: 40.6892,
                longitude: -74.0445
            },
            {
                pushpinNumber: 2,
                title: 'Empire State Building',
                subtitle: 'Deco skyscraper',
                address: '20 W 34th St, New York, NY 10001',
                latitude: 40.7484,
                longitude: -73.9857
            },
            {
                pushpinNumber: 3,
                title: 'Bryant Park',
                subtitle: '9 acre park in Manhattan',
                address: 'Bryant Park, New York, NY',
                latitude: 40.7536,
                longitude: -73.9832
            }
        ];
}