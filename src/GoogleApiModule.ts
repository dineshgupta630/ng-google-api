import { NgModule } from "@angular/core";
import { GoogleAuthService } from "./GoogleAuthService";
import { GoogleApiService } from "./GoogleApiService";

@NgModule({
    providers: [
        GoogleAuthService,
        GoogleApiService
    ]
})
export class GoogleApiModule {
}
