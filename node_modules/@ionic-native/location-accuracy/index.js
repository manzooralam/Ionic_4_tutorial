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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var LocationAccuracyOriginal = /** @class */ (function (_super) {
    __extends(LocationAccuracyOriginal, _super);
    function LocationAccuracyOriginal() {
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
    LocationAccuracyOriginal.prototype.canRequest = function () { return cordova(this, "canRequest", {}, arguments); };
    LocationAccuracyOriginal.prototype.isRequesting = function () { return cordova(this, "isRequesting", {}, arguments); };
    LocationAccuracyOriginal.prototype.request = function (accuracy) { return cordova(this, "request", { "callbackOrder": "reverse" }, arguments); };
    LocationAccuracyOriginal.pluginName = "LocationAccuracy";
    LocationAccuracyOriginal.plugin = "cordova-plugin-request-location-accuracy";
    LocationAccuracyOriginal.pluginRef = "cordova.plugins.locationAccuracy";
    LocationAccuracyOriginal.repo = "https://github.com/dpa99c/cordova-plugin-request-location-accuracy";
    LocationAccuracyOriginal.platforms = ["Android", "iOS"];
    return LocationAccuracyOriginal;
}(IonicNativePlugin));
var LocationAccuracy = new LocationAccuracyOriginal();
export { LocationAccuracy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xvY2F0aW9uLWFjY3VyYWN5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXFDbEMsb0NBQWlCOzs7UUFDckQ7OztXQUdHO1FBQ0gsK0JBQXlCLEdBQUcsQ0FBQyxDQUFDO1FBQzlCOzs7V0FHRztRQUNILGdDQUEwQixHQUFHLENBQUMsQ0FBQztRQUMvQjs7O1dBR0c7UUFDSCw4Q0FBd0MsR0FBRyxDQUFDLENBQUM7UUFDN0M7OztXQUdHO1FBQ0gsb0NBQThCLEdBQUcsQ0FBQyxDQUFDO1FBQ25DOzs7V0FHRztRQUNILGdDQUEwQixHQUFHLENBQUMsQ0FBQztRQUMvQjs7O1dBR0c7UUFDSCx5QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDeEI7OztXQUdHO1FBQ0gsOEJBQXdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUI7OztXQUdHO1FBQ0gsMEJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCOzs7V0FHRztRQUNILDRCQUFzQixHQUFHLENBQUMsQ0FBQztRQUMzQjs7O1dBR0c7UUFDSCxxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQjs7O1dBR0c7UUFDSCxrQ0FBNEIsR0FBRyxDQUFDLENBQUM7UUFDakM7OztXQUdHO1FBQ0gsMEJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCOzs7V0FHRztRQUNILHdDQUFrQyxHQUFHLENBQUMsQ0FBQzs7O0lBT3ZDLHFDQUFVO0lBU1YsdUNBQVk7SUFVWixrQ0FBTyxhQUFDLFFBQWdCOzs7Ozs7MkJBakkxQjtFQXNDc0MsaUJBQWlCO1NBQTFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIExvY2F0aW9uIEFjY3VyYWN5XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgQ29yZG92YS9QaG9uZWdhcCBwbHVnaW4gZm9yIEFuZHJvaWQgYW5kIGlPUyB0byByZXF1ZXN0IGVuYWJsaW5nL2NoYW5naW5nIG9mIExvY2F0aW9uIFNlcnZpY2VzIGJ5IHRyaWdnZXJpbmcgYSBuYXRpdmUgZGlhbG9nIGZyb20gd2l0aGluIHRoZSBhcHAsIGF2b2lkaW5nIHRoZSBuZWVkIGZvciB0aGUgdXNlciB0byBsZWF2ZSB5b3VyIGFwcCB0byBjaGFuZ2UgbG9jYXRpb24gc2V0dGluZ3MgbWFudWFsbHkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBMb2NhdGlvbkFjY3VyYWN5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9sb2NhdGlvbi1hY2N1cmFjeS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb25BY2N1cmFjeTogTG9jYXRpb25BY2N1cmFjeSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5sb2NhdGlvbkFjY3VyYWN5LmNhblJlcXVlc3QoKS50aGVuKChjYW5SZXF1ZXN0OiBib29sZWFuKSA9PiB7XG4gKlxuICogICBpZihjYW5SZXF1ZXN0KSB7XG4gKiAgICAgLy8gdGhlIGFjY3VyYWN5IG9wdGlvbiB3aWxsIGJlIGlnbm9yZWQgYnkgaU9TXG4gKiAgICAgdGhpcy5sb2NhdGlvbkFjY3VyYWN5LnJlcXVlc3QodGhpcy5sb2NhdGlvbkFjY3VyYWN5LlJFUVVFU1RfUFJJT1JJVFlfSElHSF9BQ0NVUkFDWSkudGhlbihcbiAqICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdSZXF1ZXN0IHN1Y2Nlc3NmdWwnKSxcbiAqICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKCdFcnJvciByZXF1ZXN0aW5nIGxvY2F0aW9uIHBlcm1pc3Npb25zJywgZXJyb3IpXG4gKiAgICAgKTtcbiAqICAgfVxuICpcbiAqIH0pO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0xvY2F0aW9uQWNjdXJhY3knLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1yZXF1ZXN0LWxvY2F0aW9uLWFjY3VyYWN5JyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmxvY2F0aW9uQWNjdXJhY3knLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2RwYTk5Yy9jb3Jkb3ZhLXBsdWdpbi1yZXF1ZXN0LWxvY2F0aW9uLWFjY3VyYWN5JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYXRpb25BY2N1cmFjeSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBSRVFVRVNUX1BSSU9SSVRZX05PX1BPV0VSID0gMDtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBSRVFVRVNUX1BSSU9SSVRZX0xPV19QT1dFUiA9IDE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgUkVRVUVTVF9QUklPUklUWV9CQUxBTkNFRF9QT1dFUl9BQ0NVUkFDWSA9IDI7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgUkVRVUVTVF9QUklPUklUWV9ISUdIX0FDQ1VSQUNZID0gMztcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBTVUNDRVNTX1NFVFRJTkdTX1NBVElTRklFRCA9IDA7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgU1VDQ0VTU19VU0VSX0FHUkVFRCA9IDE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgRVJST1JfQUxSRUFEWV9SRVFVRVNUSU5HID0gLTE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgRVJST1JfSU5WQUxJRF9BQ1RJT04gPSAwO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEVSUk9SX0lOVkFMSURfQUNDVVJBQ1kgPSAxO1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEVSUk9SX0VYQ0VQVElPTiA9IDE7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgRVJST1JfQ0FOTk9UX0NIQU5HRV9BQ0NVUkFDWSA9IDM7XG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgRVJST1JfVVNFUl9ESVNBR1JFRUQgPSA0O1xuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIEVSUk9SX0dPT0dMRV9BUElfQ09OTkVDVElPTl9GQUlMRUQgPSA0O1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgeW91IGNhbiByZXF1ZXN0IGFjY3VyYXRlIGxvY2F0aW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc292bGVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHlvdSBjYW4gcmVxdWVzdCBhY2N1cmF0ZSBsb2NhdGlvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjYW5SZXF1ZXN0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgYSByZXF1ZXN0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiBhIHJlcXVlc3QgaXMgY3VycmVudGx5IGluIHByb2dyZXNzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzUmVxdWVzdGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdHMgYWNjdXJhdGUgbG9jYXRpb25cbiAgICogQHBhcmFtIGFjY3VyYWN5IHtudW1iZXJ9IEFjY3VyYWN5LCBmcm9tIDAgdG8gNC4gWW91IGNhbiB1c2UgdGhlIHN0YXRpYyBwcm9wZXJ0aWVzIG9mIHRoaXMgY2xhc3MgdGhhdCBzdGFydCB3aXRoIFJFUVVFU1RfUFJJT1JJVFlfXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2VzcyBhbmQgcmVqZWN0cyBpZiBhbiBlcnJvciBvY2N1cnJlZFxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVxdWVzdChhY2N1cmFjeTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19