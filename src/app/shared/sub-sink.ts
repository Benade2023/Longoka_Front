import { SubscriptionLike } from "rxjs";

export class SubSink {
    protected _subs: SubscriptionLike[] = [];

    add(...subscription: SubscriptionLike[]) {
        this._subs = this._subs.concat(subscription);
    }

    set sink(subscription: SubscriptionLike) {
        this._subs.push(subscription);
    }

    unsubscrible() {
        this._subs.forEach((sub) => sub && sub.unsubscribe());
        this._subs = [];
    }
}