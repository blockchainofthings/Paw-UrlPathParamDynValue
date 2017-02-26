/**
 * Created by claudio on 25/02/17.
 */

@registerDynamicValueClass
class UrlPathParamDynValue {

    static identifier = 'com.blockchainofthings.PawExtensions.UrlPathParamDynValue';
    static title = 'URL Path Parameter';
    static inputs = [
        DynamicValueInput('paramName', 'Parameter Name', "String"),
        DynamicValueInput('paramValue', 'Value', "String")
    ];

    evaluate(context) {
        return encodeURIComponent(this.paramValue);
    }

    title(context) {
        return 'Param';
    }

    text(context) {
        return this.paramName;
    }
}
