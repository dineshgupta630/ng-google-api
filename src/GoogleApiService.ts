import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {GoogleApiConfig} from "./config/GoogleApiConfig";

@Injectable()
export class GoogleApiService {
    private readonly gapiUrl: string = 'https://apis.google.com/js/platform.js';
    private isLoaded: boolean = false;
    private config: GoogleApiConfig;

    public static factory(apiConfig: GoogleApiConfig) {
        return new GoogleApiService(apiConfig);
    }

    constructor(config: GoogleApiConfig) {
        this.config = config;
        this.loadGapi();
    }

    public onLoad(callback: () => any) {
        if (this.isLoaded) {
            callback();
            return;
        }
        this.loadGapi().subscribe(callback);
    }

    private loadGapi(): Observable<void> {
        return Observable.create((observer) => {
            let node = document.createElement('script');
            node.src = this.gapiUrl;
            node.type = 'text/javascript';
            node.async = true;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
            node.onload = () => {
                observer.next();
                this.isLoaded = true;
            };
        });
    }
}