sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","ui5app/model/models"],function(e,i,t){"use strict";return e.extend("ui5app.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
//# sourceMappingURL=Component.js.map