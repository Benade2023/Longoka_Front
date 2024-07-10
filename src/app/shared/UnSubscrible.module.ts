import { Injectable, OnDestroy } from "@angular/core";
import { SubSink } from "./sub-sink";

@Injectable()
export class UnSubscrible implements OnDestroy {
    subs = new SubSink();

    ngOnDestroy(): void {
        this.subs.unsubscrible();
    }
}