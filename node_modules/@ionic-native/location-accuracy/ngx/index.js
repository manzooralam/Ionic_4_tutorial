var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var LocationAccuracy = /** @class */ (function (_super) {
    __extends(LocationAccuracy, _super);
    function LocationAccuracy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_NO_POWER = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_LOW_POWER = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_BALANCED_POWER_ACCURACY = 2;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.REQUEST_PRIORITY_HIGH_ACCURACY = 3;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.SUCCESS_SETTINGS_SATISFIED = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.SUCCESS_USER_AGREED = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_ALREADY_REQUESTING = -1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_INVALID_ACTION = 0;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_INVALID_ACCURACY = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_EXCEPTION = 1;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_CANNOT_CHANGE_ACCURACY = 3;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_USER_DISAGREED = 4;
        /**
         * Convenience constant
         * @type {number}
         */
        _this.ERROR_GOOGLE_API_CONNECTION_FAILED = 4;
        return _this;
    }
    LocationAccuracy.prototype.canRequest = function () { return cordova(this, "canRequest", {}, arguments); };
    LocationAccuracy.prototype.isRequesting = function () { return cordova(this, "isRequesting", {}, arguments); };
    LocationAccuracy.prototype.request = function (accuracy) { return cordova(this, "request", { "callbackOrder": "reverse" }, arguments); };
    LocationAccuracy.pluginName = "LocationAccuracy";
    LocationAccuracy.plugin = "cordova-plugin-request-location-accuracy";
    LocationAccuracy.pluginRef = "cordova.plugins.locationAccuracy";
    LocationAccuracy.repo = "https://github.com/dpa99c/cordova-plugin-request-location-accuracy";
    LocationAccuracy.platforms = ["Android", "iOS"];
    LocationAccuracy = __decorate([
        Injectable()
    ], LocationAccuracy);
    return LocationAccuracy;
}(IonicNativePlugin));
export { LocationAccuracy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xvY2F0aW9uLWFjY3VyYWN5L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXFDbEMsb0NBQWlCOzs7UUFDckQ7OztXQUdHO1FBQ0gsK0JBQXlCLEdBQUcsQ0FBQyxDQUFDO1FBQzlCOzs7V0FHRztRQUNILGdDQUEwQixHQUFHLENBQUMsQ0FBQztRQUMvQjs7O1dBR0c7UUFDSCw4Q0FBd0MsR0FBRyxDQUFDLENBQUM7UUFDN0M7OztXQUdHO1FBQ0gsb0NBQThCLEdBQUcsQ0FBQyxDQUFDO1FBQ25DOzs7V0FHRztRQUNILGdDQUEwQixHQUFHLENBQUMsQ0FBQztRQUMvQjs7O1dBR0c7UUFDSCx5QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDeEI7OztXQUdHO1FBQ0gsOEJBQXdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUI7OztXQUdHO1FBQ0gsMEJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCOzs7V0FHRztRQUNILDRCQUFzQixHQUFHLENBQUMsQ0FBQztRQUMzQjs7O1dBR0c7UUFDSCxxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQjs7O1dBR0c7UUFDSCxrQ0FBNEIsR0FBRyxDQUFDLENBQUM7UUFDakM7OztXQUdHO1FBQ0gsMEJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCOzs7V0FHRztRQUNILHdDQUFrQyxHQUFHLENBQUMsQ0FBQzs7O0lBT3ZDLHFDQUFVO0lBU1YsdUNBQVk7SUFVWixrQ0FBTyxhQUFDLFFBQWdCOzs7Ozs7SUEzRmIsZ0JBQWdCO1FBRDVCLFVBQVUsRUFBRTtPQUNBLGdCQUFnQjsyQkF0QzdCO0VBc0NzQyxpQkFBaUI7U0FBMUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgTG9jYXRpb24gQWNjdXJhY3lcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBDb3Jkb3ZhL1Bob25lZ2FwIHBsdWdpbiBmb3IgQW5kcm9pZCBhbmQgaU9TIHRvIHJlcXVlc3QgZW5hYmxpbmcvY2hhbmdpbmcgb2YgTG9jYXRpb24gU2VydmljZXMgYnkgdHJpZ2dlcmluZyBhIG5hdGl2ZSBkaWFsb2cgZnJvbSB3aXRoaW4gdGhlIGFwcCwgYXZvaWRpbmcgdGhlIG5lZWQgZm9yIHRoZSB1c2VyIHRvIGxlYXZlIHlvdXIgYXBwIHRvIGNoYW5nZSBsb2NhdGlvbiBzZXR0aW5ncyBtYW51YWxseS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IExvY2F0aW9uQWNjdXJhY3kgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2xvY2F0aW9uLWFjY3VyYWN5L25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbkFjY3VyYWN5OiBMb2NhdGlvbkFjY3VyYWN5KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmxvY2F0aW9uQWNjdXJhY3kuY2FuUmVxdWVzdCgpLnRoZW4oKGNhblJlcXVlc3Q6IGJvb2xlYW4pID0+IHtcbiAqXG4gKiAgIGlmKGNhblJlcXVlc3QpIHtcbiAqICAgICAvLyB0aGUgYWNjdXJhY3kgb3B0aW9uIHdpbGwgYmUgaWdub3JlZCBieSBpT1NcbiAqICAgICB0aGlzLmxvY2F0aW9uQWNjdXJhY3kucmVxdWVzdCh0aGlzLmxvY2F0aW9uQWNjdXJhY3kuUkVRVUVTVF9QUklPUklUWV9ISUdIX0FDQ1VSQUNZKS50aGVuKFxuICogICAgICAgKCkgPT4gY29uc29sZS5sb2coJ1JlcXVlc3Qgc3VjY2Vzc2Z1bCcpLFxuICogICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coJ0Vycm9yIHJlcXVlc3RpbmcgbG9jYXRpb24gcGVybWlzc2lvbnMnLCBlcnJvcilcbiAqICAgICApO1xuICogICB9XG4gKlxuICogfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTG9jYXRpb25BY2N1cmFjeScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXJlcXVlc3QtbG9jYXRpb24tYWNjdXJhY3knLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMubG9jYXRpb25BY2N1cmFjeScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZHBhOTljL2NvcmRvdmEtcGx1Z2luLXJlcXVlc3QtbG9jYXRpb24tYWNjdXJhY3knLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbkFjY3VyYWN5IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIFJFUVVFU1RfUFJJT1JJVFlfTk9fUE9XRVIgPSAwO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIFJFUVVFU1RfUFJJT1JJVFlfTE9XX1BPV0VSID0gMTtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBSRVFVRVNUX1BSSU9SSVRZX0JBTEFOQ0VEX1BPV0VSX0FDQ1VSQUNZID0gMjtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBSRVFVRVNUX1BSSU9SSVRZX0hJR0hfQUNDVVJBQ1kgPSAzO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIFNVQ0NFU1NfU0VUVElOR1NfU0FUSVNGSUVEID0gMDtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBTVUNDRVNTX1VTRVJfQUdSRUVEID0gMTtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBFUlJPUl9BTFJFQURZX1JFUVVFU1RJTkcgPSAtMTtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBFUlJPUl9JTlZBTElEX0FDVElPTiA9IDA7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgRVJST1JfSU5WQUxJRF9BQ0NVUkFDWSA9IDE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgRVJST1JfRVhDRVBUSU9OID0gMTtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBFUlJPUl9DQU5OT1RfQ0hBTkdFX0FDQ1VSQUNZID0gMztcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBFUlJPUl9VU0VSX0RJU0FHUkVFRCA9IDQ7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgRVJST1JfR09PR0xFX0FQSV9DT05ORUNUSU9OX0ZBSUxFRCA9IDQ7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB5b3UgY2FuIHJlcXVlc3QgYWNjdXJhdGUgbG9jYXRpb25cbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb3ZsZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgeW91IGNhbiByZXF1ZXN0IGFjY3VyYXRlIGxvY2F0aW9uXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNhblJlcXVlc3QoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiBhIHJlcXVlc3QgaXMgY3VycmVudGx5IGluIHByb2dyZXNzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIGEgcmVxdWVzdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3NcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNSZXF1ZXN0aW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0cyBhY2N1cmF0ZSBsb2NhdGlvblxuICAgKiBAcGFyYW0gYWNjdXJhY3kge251bWJlcn0gQWNjdXJhY3ksIGZyb20gMCB0byA0LiBZb3UgY2FuIHVzZSB0aGUgc3RhdGljIHByb3BlcnRpZXMgb2YgdGhpcyBjbGFzcyB0aGF0IHN0YXJ0IHdpdGggUkVRVUVTVF9QUklPUklUWV9cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzIGFuZCByZWplY3RzIGlmIGFuIGVycm9yIG9jY3VycmVkXG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZXF1ZXN0KGFjY3VyYWN5OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=