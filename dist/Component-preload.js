/**
* This file was auto-generated by SAP Web IDE build and includes all
* the source files required by SAPUI5 runtime for performance optimization.
* PLEASE DO NOT EDIT THIS FILE!! Changes will be overwritten the next time the build is run.
*/
jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "ShedStatusReport/Component-preload",
	"modules": {
		"ShedStatusReport/Component.js": "sap.ui.define([\n\t\"sap/ui/core/UIComponent\",\n\t\"sap/ui/Device\",\n\t\"ShedStatusReport/model/models\"\n], function(UIComponent, Device, models) {\n\t\"use strict\";\n\n\treturn UIComponent.extend(\"ShedStatusReport.Component\", {\n\n\t\tmetadata: {\n\t\t\tmanifest: \"json\"\n\t\t},\n\n\t\t/**\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\n\t\t * @public\n\t\t * @override\n\t\t */\n\t\tinit: function() {\n\t\t\t// call the base component's init function\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\n\n            // create the views based on the url/hash\n            this.getRouter().initialize();\n\n\t\t\t// set the device model\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\n\t\t},\n\t\t/**\n\t\t\t * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy\n\t\t\t * design mode class should be set, which influences the size appearance of some controls.\n\t\t\t * @public\n\t\t\t * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set\n\t\t\t */\n\t\t\tgetContentDensityClass : function() {\n\t\t\t\tif (this._sContentDensityClass === undefined) {\n\t\t\t\t\t// check whether FLP has already set the content density class; do nothing in this case\n\t\t\t\t\tif (jQuery(document.body).hasClass(\"sapUiSizeCozy\") || jQuery(document.body).hasClass(\"sapUiSizeCompact\")) {\n\t\t\t\t\t\tthis._sContentDensityClass = \"\";\n\t\t\t\t\t} else if (!Device.support.touch) { // apply \"compact\" mode if touch is not supported\n\t\t\t\t\t\tthis._sContentDensityClass = \"sapUiSizeCompact\";\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// \"cozy\" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table\n\t\t\t\t\t\tthis._sContentDensityClass = \"sapUiSizeCozy\";\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\treturn this._sContentDensityClass;\n\t\t\t}\n\t});\n\n});",
		"ShedStatusReport/view/Environment.fragment.xml": "<core:FragmentDefinition xmlns:core=\"sap.ui.core\" xmlns:l=\"sap.ui.layout\" xmlns:f=\"sap.ui.layout.form\" xmlns:sap.ui.core=\"sap.ui.core\"\n\txmlns=\"sap.m\" controllerName=\"ShedStatusReport.controller.Main\">\n\t<!--<FlexBox height=\"100%\" alignItems=\"Start\">-->\n\t<VBox xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\" width=\"100%\" direction=\"Column\">\n\t\t<items>\n\t\t\t<f:SimpleForm id=\"formBasic\" title=\"Información Básica\" editable=\"true\" breakpointL=\"1024\" breakpointM=\"600\" breakpointXL=\"1440\"\n\t\t\t\tbackgroundDesign=\"Solid\" layout=\"ResponsiveGridLayout\">\n\t\t\t\t<f:content>\n\t\t\t\t\t<Label text=\"Temperatura\"/>\n\t\t\t\t\t<Input type=\"Number\" placeholder=\"Min\" value=\"{SupplierName}\">\n\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t<l:GridData span=\"L1 M2 S3\"/>\n\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t</Input>\n\t\t\t\t\t<Input type=\"Number\" placeholder=\"Max\" value=\"{SupplierName}\">\n\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t<l:GridData span=\"L1 M2 S3\"/>\n\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t</Input>\n\t\t\t\t\t<Input type=\"Number\" placeholder=\"Actual\" value=\"{SupplierName}\">\n\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t<l:GridData span=\"L1 M2 S3\"/>\n\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t</Input>\n\t\t\t\t\t<Label text=\"Humedad\"/>\n\t\t\t\t\t<Input type=\"Number\" placeholder=\"Min\" value=\"{SupplierName}\">\n\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t<l:GridData span=\"L1 M2 S3\"/>\n\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t</Input>\n\t\t\t\t\t<Input type=\"Number\" placeholder=\"Max\" value=\"{SupplierName}\">\n\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t<l:GridData span=\"L1 M2 S3\"/>\n\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t</Input>\n\t\t\t\t\t<Input type=\"Number\" placeholder=\"Actual\" value=\"{SupplierName}\">\n\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t<l:GridData span=\"L1 M2 S3\"/>\n\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t</Input>\n\t\t\t\t</f:content>\n\t\t\t</f:SimpleForm>\n\t\t\t<f:SimpleForm id=\"formRegisters\" title=\"Registrar Condiciones\" editable=\"true\" breakpointL=\"1024\" breakpointM=\"600\" breakpointXL=\"1440\"\n\t\t\t\tbackgroundDesign=\"Solid\" layout=\"ResponsiveGridLayout\">\n\t\t\t\t<f:content>\n\t\t\t\t\t<Toolbar xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\">\n\t\t\t\t\t\t<content>\n\t\t\t\t\t\t\t<SearchField  id=\"environmentField\" width=\"40%\" placeholder=\"Condición Ambiental...\" enableSuggestions=\"true\" search=\"onSearch\" suggest=\"onSuggest\"\n\t\t\t\t\t\t\t\tsuggestionItems=\"{path:'data>/environment', sorter:{path:'data>NAME'}}\">\n\t\t\t\t\t\t\t\t<suggestionItems>\n\t\t\t\t\t\t\t\t\t<SuggestionItem id=\"suggestionItem\" text=\"{data>NAME}\" key=\"{data>SAMPLESID}\"/>\n\t\t\t\t\t\t\t\t</suggestionItems>\n\t\t\t\t\t\t\t</SearchField>\n\t\t\t\t\t\t\t<Input id=\"environmentInput\" placeholder=\"Valor\" width=\"40%\"/>\n\t\t\t\t\t\t\t<Button xmlns:core=\"sap.ui.core\" text=\"+\" width=\"auto\" id=\"addEnvironment\" type=\"Accept\" press=\"addListEnvironmentElement\"/>\n\t\t\t\t\t\t</content>\n\t\t\t\t\t</Toolbar>\n\t\t\t\t\t<List mode=\"Delete\" delete=\"deleteEnvironment\" id=\"environmentList\" items=\"{conditions>/environmentReport}\">\n\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t<StandardListItem title=\"{conditions>NAME}\" description=\"{conditions>VALUE}\"/>\n\t\t\t\t\t\t</items>\n\t\t\t\t\t</List>\n\t\t\t\t</f:content>\n\t\t\t</f:SimpleForm>\n\t\t</items>\n\t\t<!--</FlexBox>-->\n\t</VBox>\n</core:FragmentDefinition>",
		"ShedStatusReport/view/Samples.fragment.xml": "<core:FragmentDefinition xmlns:core=\"sap.ui.core\" xmlns:f=\"sap.ui.layout.form\" xmlns=\"sap.m\"\n\tcontrollerName=\"ShedStatusReport.controller.Main\">\n\t<VBox xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\" width=\"100%\" direction=\"Column\">\n\t\t<items>\n\t\t\t<f:SimpleForm id=\"formSamples\" title=\"Registrar\" editable=\"true\" breakpointL=\"1024\" breakpointM=\"600\" breakpointXL=\"1440\"\n\t\t\t\tbackgroundDesign=\"Solid\" layout=\"ResponsiveGridLayout\">\n\t\t\t\t<f:content>\n\t\t\t\t\t<Toolbar xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\">\n\t\t\t\t\t\t<content> \n\t\t\t\t\t\t\t<SearchField id=\"sampleType\" width=\"auto\" placeholder=\"Tipo de Muestra...\" enableSuggestions=\"true\" suggest=\"onSuggest\"\n\t\t\t\t\t\t\t\tsuggestionItems=\"{data>/samples}\">\n\t\t\t\t\t\t\t\t<suggestionItems>\n\t\t\t\t\t\t\t\t\t<SuggestionItem text=\"{data>NAME}\" key=\"{data>SAMPLESID}\"/>\n\t\t\t\t\t\t\t\t</suggestionItems>\n\t\t\t\t\t\t\t</SearchField>\n\t\t\t\t\t\t\t<SearchField id=\"sampleOrigin\" width=\"auto\" placeholder=\"Origen...\" enableSuggestions=\"true\" search=\"onSearch\" suggest=\"onSuggest\"\n\t\t\t\t\t\t\t\tsuggestionItems=\"{conditions>/sources}\">\n\t\t\t\t\t\t\t\t<suggestionItems>\n\t\t\t\t\t\t\t\t\t<SuggestionItem text=\"{conditions>/name}\" description=\"{path:'Price'} {path:'CurrencyCode'}\" key=\"{ProductId}\"/>\n\t\t\t\t\t\t\t\t</suggestionItems>\n\t\t\t\t\t\t\t</SearchField>\n\t\t\t\t\t\t\t<Input id=\"sampleQuantity\" type=\"Number\" placeholder=\"Cantidad\" width=\"15%\"/>\n\t\t\t\t\t\t\t<Input id=\"sampleNote\" placeholder=\"Nota\" width=\"30%\"/>\n\t\t\t\t\t\t\t<Button xmlns:core=\"sap.ui.core\" text=\"+\" width=\"auto\" id=\"addSample\" type=\"Accept\" press=\"addListSampleElement\"/>\n\t\t\t\t\t\t</content>\n\t\t\t\t\t</Toolbar>\n\t\t\t\t\t<List mode=\"Delete\" delete=\"deleteSample\" id=\"sampleList\" items=\"{conditions>/samplesReport}\">\n\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t<StandardListItem title=\"{conditions>TYPE} - {conditions>ORIGIN}\" info=\"{conditions>QUANTITY}\" description=\"{conditions>NOTE}\"/>\n\t\t\t\t\t\t</items>\n\t\t\t\t\t</List>\n\t\t\t\t</f:content>\n\t\t\t</f:SimpleForm>\n\t\t\t<!-- Previous Version 1.0-->\n\t\t\t<!--<Table id=\"samplesTable\" mode=\"MultiSelect\" inset=\"false\" items=\"\">\n\t\t\t\t<items>\n\t\t\t\t\t<ColumnListItem>\n\t\t\t\t\t\t<cells>\n\t\t\t\t\t\t\t<Select width=\"100%\"/>\n\t\t\t\t\t\t\t<Select width=\"100%\"/>\n\t\t\t\t\t\t\t<Input width=\"100%\"/>\n\t\t\t\t\t\t\t<Input width=\"100%\"/>\n\t\t\t\t\t\t</cells>\n\t\t\t\t\t</ColumnListItem>\n\t\t\t\t</items>\n\t\t\t\t<columns>\n\t\t\t\t\t<Column vAlign=\"Middle\" demandPopin=\"true\" minScreenWidth=\"Tablet\">\n\t\t\t\t\t\t<header>\n\t\t\t\t\t\t\t<Label text=\"Tipo\"/>\n\t\t\t\t\t\t</header>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column vAlign=\"Middle\" demandPopin=\"true\" minScreenWidth=\"Tablet\">\n\t\t\t\t\t\t<header>\n\t\t\t\t\t\t\t<Label text=\"Origen\"/>\n\t\t\t\t\t\t</header>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column vAlign=\"Middle\" demandPopin=\"true\" minScreenWidth=\"Tablet\">\n\t\t\t\t\t\t<header>\n\t\t\t\t\t\t\t<Label text=\"Cantidad\"/>\n\t\t\t\t\t\t</header>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column vAlign=\"Middle\" demandPopin=\"true\" minScreenWidth=\"Tablet\">\n\t\t\t\t\t\t<header>\n\t\t\t\t\t\t\t<Label text=\"Notas\"/>\n\t\t\t\t\t\t</header>\n\t\t\t\t\t</Column>\n\t\t\t\t</columns>\n\t\t\t</Table>-->\n\t\t</items>\n\t</VBox>\n</core:FragmentDefinition>",
		"ShedStatusReport/view/Broilers.fragment.xml": "<core:FragmentDefinition xmlns:core=\"sap.ui.core\" xmlns:f=\"sap.ui.layout.form\" xmlns:l=\"sap.ui.layout\" xmlns=\"sap.m\" controllerName=\"ShedStatusReport.controller.Main\">\n\t<VBox xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\" width=\"100%\" direction=\"Column\">\n\t\t<items>\n\t\t\t<f:SimpleForm id=\"formBroilers\" title=\"Registrar\" editable=\"true\" breakpointL=\"1024\" breakpointM=\"600\" breakpointXL=\"1440\"\n\t\t\t\tbackgroundDesign=\"Solid\" layout=\"ResponsiveGridLayout\">\n\t\t\t\t<f:content>\n\t\t\t\t\t<Toolbar xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\">\n\t\t\t\t\t\t<content>\n\t\t\t\t\t\t\t<SearchField id=\"broilerField\" width=\"40%\" placeholder=\"Condición del Ave...\" enableSuggestions=\"true\" search=\"onSearch\" suggest=\"onSuggest\"\n\t\t\t\t\t\t\t\tsuggestionItems=\"{data>/broilers}\">\n\t\t\t\t\t\t\t\t<suggestionItems>\n\t\t\t\t\t\t\t\t\t<SuggestionItem text=\"{data>NAME}\" key=\"{data>SAMPLESID}\"/>\n\t\t\t\t\t\t\t\t</suggestionItems>\n\t\t\t\t\t\t\t</SearchField>\n\t\t\t\t\t\t\t<Input id=\"broilerInput\" placeholder=\"Valor\" width=\"40%\"/>\n\t\t\t\t\t\t\t<Button xmlns:core=\"sap.ui.core\" text=\"+\" width=\"auto\" id=\"addBroiler\" type=\"Accept\" press=\"addListBroilerElement\"/>\n\t\t\t\t\t\t</content>\n\t\t\t\t\t</Toolbar>\n\t\t\t\t\t<List mode=\"Delete\" delete=\"deleteBroiler\" id=\"broilerList\" items=\"{conditions>/broilerReport}\">\n\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t<StandardListItem title=\"{conditions>NAME}\" description=\"{conditions>VALUE}\"/>\n\t\t\t\t\t\t</items>\n\t\t\t\t\t</List>\n\t\t\t\t</f:content>\n\t\t\t</f:SimpleForm>\n\t\t\t<!--<Table id=\"broilersTable\" mode=\"MultiSelect\" inset=\"false\" items=\"\">\n\t\t\t\t<items>\n\t\t\t\t\t<ColumnListItem>\n\t\t\t\t\t\t<cells>\n\t\t\t\t\t\t\t<Select width=\"100%\"/>\n\t\t\t\t\t\t\t<Input width=\"100%\"/>\n\t\t\t\t\t\t</cells>\n\t\t\t\t\t</ColumnListItem>\n\t\t\t\t</items>\n\t\t\t\t<columns>\n\t\t\t\t\t<Column vAlign=\"Middle\" width=\"50%\">\n\t\t\t\t\t\t<header>\n\t\t\t\t\t\t\t<Label text=\"Característica\"/>\n\t\t\t\t\t\t</header>\n\t\t\t\t\t</Column>\n\t\t\t\t\t<Column vAlign=\"Middle\" demandPopin=\"true\" minScreenWidth=\"Tablet\">\n\t\t\t\t\t\t<header>\n\t\t\t\t\t\t\t<Label text=\"Valor\"/>\n\t\t\t\t\t\t</header>\n\t\t\t\t\t</Column>\n\t\t\t\t</columns>\n\t\t\t</Table>-->\n\t\t</items>\n\t</VBox>\n</core:FragmentDefinition>",
		"ShedStatusReport/view/Main.view.xml": "<mvc:View xmlns:core=\"sap.ui.core\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\" xmlns:html=\"http://www.w3.org/1999/xhtml\"\n\tcontrollerName=\"ShedStatusReport.controller.Main\">\n\t<Page showNavButton=\"true\" title=\"{i18n>title}\" navButtonPress=\"goSheds\">\n\t\t<content>\n\t\t\t<ObjectHeader xmlns:core=\"sap.ui.core\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\" xmlns:html=\"http://www.w3.org/1999/xhtml\"\n\t\t\t\tclass=\"sapSuiteHrdrCntrInner\" id=\"objectHeader\" backgroundDesign=\"Solid\"\n\t\t\t\tintro=\"{i18n>breed}: Ross 380 - {i18n>gender}: Macho - {i18n>environment_type}: Controlado\" fieldGroupIds=\"\" markFavorite=\"true\"\n\t\t\t\tshowMarkers=\"false\" showTitleSelector=\"false\" fullScreenOptimized=\"false\" condensed=\"true\" responsive=\"true\" numberUnit=\"Aves\"\n\t\t\t\ttitle=\"{i18n>titleshed} {data>/shedSelected/SHEDCODE}\"\n\t\t\t\tnumber=\"{data>/shedSelected/DENSITY}\"\n\t\t\t\ticon=\"sap-icon://factory\"/>\n\t\t\t<IconTabBar select=\"iconTabBarSelect\" id=\"tabBar\" expandable=\"false\" backgroundDesign=\"Solid\" applyContentPadding=\"false\">\n\t\t\t\t<items>\n\t\t\t\t\t<IconTabFilter text=\"Condiciones Amb.\" id=\"environmentTab\">\n\t\t\t\t\t\t<content>\n\t\t\t\t\t\t\t<core:Fragment fragmentName=\"ShedStatusReport.view.Environment\" type=\"XML\"/>\n\t\t\t\t\t\t</content>\n\t\t\t\t\t</IconTabFilter>\n\t\t\t\t\t<IconTabFilter text=\"Condiciones Ave\" id=\"broilersTab\">\n\t\t\t\t\t\t<content>\n\t\t\t\t\t\t\t<core:Fragment fragmentName=\"ShedStatusReport.view.Broilers\" type=\"XML\"/>\n\t\t\t\t\t\t</content>\n\t\t\t\t\t</IconTabFilter>\n\t\t\t\t\t<IconTabFilter text=\"Muestras\" id=\"samplesTab\">\n\t\t\t\t\t\t<content>\n\t\t\t\t\t\t\t<core:Fragment fragmentName=\"ShedStatusReport.view.Samples\" type=\"XML\"/>\n\t\t\t\t\t\t</content>\n\t\t\t\t\t</IconTabFilter>\n\t\t\t\t</items>\n\t\t\t</IconTabBar>\n\t\t</content>\n\t\t<footer>\n\t\t\t<Bar id=\"__bar0\">\n\t\t\t\t<!--<contentLeft>\n\t\t\t\t\t<Button xmlns:core=\"sap.ui.core\" text=\"+\"  width=\"auto\" id=\"button2\" type=\"Accept\" press=\"onAdd\"/>\n\t\t\t\t\t<Button xmlns:core=\"sap.ui.core\" text=\"x\"  width=\"auto\" id=\"button3\" type=\"Reject\" press=\"onDelete\"/>\n\t\t\t\t</contentLeft>-->\n\t\t\t\t<contentRight>\n\t\t\t\t\t<Button xmlns:core=\"sap.ui.core\" text=\"Reportar\" width=\"auto\" id=\"button1\" type=\"Accept\" press=\"onReportDialog\"/>\n\t\t\t\t</contentRight>\n\t\t\t</Bar>\n\t\t</footer>\n\t</Page>\n</mvc:View>",
		"ShedStatusReport/controller/ShedSelection.controller.js": "sap.ui.define([\r\n\t\"sap/ui/core/mvc/Controller\",\r\n\t\"sap/m/Dialog\",\r\n\t'sap/m/Button'\r\n], function(Controller, Dialog, Button) {\r\n\t\"use strict\";\r\n\r\n\treturn Controller.extend(\"ShedStatusReport.controller.ShedSelection\", {\r\n\r\n\t\t/**\r\n\t\t * Called when a controller is instantiated and its View controls (if available) are already created.\r\n\t\t * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.\r\n\t\t * @memberOf ShedStatusReport.view.view.ShedSelection\r\n\t\t */\r\n\r\n\t\tonInit: function() {\r\n\t\t\t// apply content density mode to root view\r\n\t\t\tthis.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());\r\n\t\t\tthis.getOwnerComponent().getRouter(this).getRoute(\"sheds\").attachMatched(this._onRouteMatched, this);\r\n\t\t},\r\n\t\t_onRouteMatched: function() {\r\n\t\t\tvar that = this;\r\n\t\t\tvar model = that.getView().getModel(\"data\");\r\n\t\t\t//data.attachRequestCompleted(function() {\r\n\t\t\ttry {\r\n\t\t\t\t//Operations\r\n\t\t\t\t//\tvar URL = \"/SimpleFarm/services/XSJS/operationConfig.xsjs?sNumber=S0015731082&METHOD=getUserConfig\";\r\n\t\t\t\tvar URL = \"/SimpleFarm/services/XSJS/operationPlanning.xsjs?clientID=2&partnerID=17&METHOD=getFarms\";\r\n\t\t\t\tvar call = {\r\n\t\t\t\t\turl: URL,\r\n\t\t\t\t\tmethod: 'GET',\r\n\t\t\t\t\tdataType: 'json',\r\n\t\t\t\t\tsuccess: function(res) {\r\n\t\t\t\t\t\tconsole.log(res);\r\n\t\t\t\t\t\tif (res.beanError.statuscode !== 200) {\r\n\r\n\t\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tmodel.setProperty(\"/sheds\", res.results[0].centers[0].sheds);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t},\r\n\t\t\t\t\terror: function(res) {\r\n\r\n\t\t\t\t\t}\r\n\t\t\t\t};\r\n\t\t\t\t$.ajax(call);\r\n\t\t\t} catch (error) {\r\n\t\t\t\tconsole.log(error);\r\n\t\t\t}\r\n\t\t\t//\t\t});\r\n\t\t},\r\n\t\thandlePress: function(oEvent) {\r\n\t\t\t\t//var route = oEvent.getSource().oBindingContexts.tiles.sPath.split(\"/galpones/\",2);\r\n\t\t\t\tvar view = this.getView();\r\n\t\t\t\tvar data = view.getModel(\"data\");\r\n\t\t\t\tvar router = sap.ui.core.UIComponent.getRouterFor(this);\r\n\t\t\t\tvar object = oEvent.getSource().getBindingContext(\"data\").getObject();\r\n\r\n\t\t\t\t//If another farm is selected there is the need to erase any changes saved previously in other operations\r\n\r\n\t\t\t\tdata.setProperty(\"/shedSelected/\", object);\r\n\t\t\t\tdata.setProperty(\"/shedSelected/DENSITY/\", parseInt(data.getProperty(\"/shedSelected/STALLLONGITUDE\")) *\r\n\t\t\t\t\tparseInt(data.getProperty(\"/shedSelected/STALLWIDTH\")) * (17)); // Densidad Inicial Cableada\r\n\t\t\t\trouter.navTo(\"main\", /*objeto de parámetros*/ {}, false /*create history*/ );\r\n\t\t\t}\r\n\t\t\t/**\r\n\t\t\t * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered\r\n\t\t\t * (NOT before the first rendering! onInit() is used for that one!).\r\n\t\t\t * @memberOf ShedStatusReport.view.view.ShedSelection\r\n\t\t\t */\r\n\t\t\t//\tonBeforeRendering: function() {\r\n\t\t\t//\r\n\t\t\t//\t},\r\n\r\n\t\t/**\r\n\t\t * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.\r\n\t\t * This hook is the same one that SAPUI5 controls get after being rendered.\r\n\t\t * @memberOf ShedStatusReport.view.view.ShedSelection\r\n\t\t */\r\n\t\t//\tonAfterRendering: function() {\r\n\t\t//\r\n\t\t//\t},\r\n\r\n\t\t/**\r\n\t\t * Called when the Controller is destroyed. Use this one to free resources and finalize activities.\r\n\t\t * @memberOf ShedStatusReport.view.view.ShedSelection\r\n\t\t */\r\n\t\t//\tonExit: function() {\r\n\t\t//\r\n\t\t//\t}\r\n\r\n\t});\r\n\r\n});",
		"ShedStatusReport/view/ShedSelection.view.xml": "<mvc:View xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\" controllerName=\"ShedStatusReport.controller.ShedSelection\">\n\t<App>\n\t\t<pages>\n\t\t\t<Page title=\"{i18n>title}\">\n\t\t\t\t<content>\n\t\t\t\t\t<TileContainer id=\"sheds\" allowAdd=\"false\" editable=\"false\" tiles=\"{data>/sheds}\">\n\t\t\t\t\t\t<StandardTile icon=\"sap-icon://factory\" number=\"{data>SHEDCODE}\" info=\"Estatus\" numberUnit=\"{i18n>titleshed}\" title=\"{i18n>longitude}: {data>STALLLONGITUDE} - {i18n>width}: {data>STALLWIDTH}\" press=\"handlePress\"/>\n\t\t\t\t\t</TileContainer>\n\t\t\t\t</content>\n\t\t\t</Page>\n\t\t</pages>\n\t</App>\n</mvc:View>",
		"ShedStatusReport/view/App.view.xml": "<mvc:View controllerName=\"ShedStatusReport.controller.App\" xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\">\n    <App id=\"appControl\"/>\n</mvc:View>",
		"ShedStatusReport/controller/App.controller.js": "sap.ui.define([\r\n \"sap/ui/core/mvc/Controller\"\r\n], function(BaseController) {\r\n \"use strict\";\r\n\r\n return BaseController.extend(\"ShedStatusReport.controller.App\", {\r\n\r\n  onInit: function() {\r\n   //Aplica el modo de densidad de contenido a la vista raíz\r\n   this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());\r\n  }\r\n });\r\n});",
		"ShedStatusReport/model/models.js": "sap.ui.define([\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/Device\"\n], function(JSONModel, Device) {\n\t\"use strict\";\n\n\treturn {\n\n\t\tcreateDeviceModel: function() {\n\t\t\tvar oModel = new JSONModel(Device);\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\n\t\t\treturn oModel;\n\t\t}\n\n\t};\n});",
		"ShedStatusReport/controller/Main.controller.js": "sap.ui.define([\n\t\"sap/ui/core/mvc/Controller\",\n\t'sap/ui/model/Filter',\n\t\"sap/m/Dialog\",\n\t'sap/m/Button',\n\t'sap/m/Text',\n\t'./Utilities',\n\t'sap/m/Label',\n\t'sap/m/TextArea',\n\t'sap/m/MessageToast'\n], function(Controller, Filter, Dialog, Button, Text, Utilities, Label, TextArea, MessageToast) {\n\t\"use strict\";\n\n\treturn Controller.extend(\"ShedStatusReport.controller.Main\", {\n\t\tgoSheds: function() {\n\t\t\tvar router = sap.ui.core.UIComponent.getRouterFor(this);\n\t\t\trouter.navTo(\"sheds\", {}, true /*no history*/ );\n\t\t},\n\t\tonInit: function() {\n\t\t\t// apply content density mode to root view\n\t\t\tthis.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());\n\t\t\tthis.getOwnerComponent().getRouter(this).getRoute(\"main\").attachMatched(this._onRouteMatched, this);\n\t\t},\n\t\t_onRouteMatched: function() {\n\t\t\tvar model = this.getView().getModel(\"data\");\n\t\t\ttry {\n\t\t\t\tif (model.getProperty(\"/sheds\") == null) {\n\t\t\t\t\tthis.goSheds();\n\t\t\t\t} else {\n\t\t\t\t\tif (model.getProperty(\"/environment\") == \"\") {\n\t\t\t\t\t\tthis.pullEnvironmentSuggestions();\n\t\t\t\t\t\tthis.pullBroilersSuggestions();\n\t\t\t\t\t\tthis.pullSamplesSuggestions();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} catch (error) {\n\t\t\t\tthis.goSheds();\n\t\t\t}\n\n\t\t},\n\t\tpullEnvironmentSuggestions: function() {\n\t\t\tvar that = this;\n\t\t\tvar model = this.getView().getModel(\"data\");\n\t\t\tvar URL = \"/SimpleFarm/services/XSJS/operationShedReport.xsjs?METHOD=getSamplesByTypes&typeID=49\";\n\t\t\tvar call = {\n\t\t\t\turl: URL,\n\t\t\t\tmethod: 'GET',\n\t\t\t\tdataType: 'json',\n\t\t\t\tsuccess: function(res) {\n\t\t\t\t\tif (res.meta.statuscode !== 200) {\n\t\t\t\t\t\tUtilities.messageDialogCreator(\"Error\", \"Error \" + res.meta.statuscode + \": Error en la llamada al servicio\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tmodel.setProperty(\"/environment\", res.results);\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\terror: function(res) {\n\t\t\t\t\tUtilities.messageDialogCreator(\"Error\", \"Error \" + res.meta.statuscode + \": Error en la llamada al servicio\");\n\t\t\t\t}\n\t\t\t};\n\t\t\t$.ajax(call);\n\t\t},\n\t\tpullBroilersSuggestions: function() {\n\t\t\tvar that = this;\n\t\t\tvar model = this.getView().getModel(\"data\");\n\t\t\tvar URL = \"/SimpleFarm/services/XSJS/operationShedReport.xsjs?METHOD=getSamplesByTypes&typeID=50\";\n\t\t\tvar call = {\n\t\t\t\turl: URL,\n\t\t\t\tmethod: 'GET',\n\t\t\t\tdataType: 'json',\n\t\t\t\tsuccess: function(res) {\n\t\t\t\t\tif (res.meta.statuscode !== 200) {\n\t\t\t\t\t\tUtilities.messageDialogCreator(\"Error\", \"Error \" + res.meta.statuscode + \": Error en la llamada al servicio\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tmodel.setProperty(\"/broilers\", res.results);\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\terror: function(res) {\n\t\t\t\t\tUtilities.messageDialogCreator(\"Error\", \"Error \" + res.meta.statuscode + \": Error en la llamada al servicio\");\n\t\t\t\t}\n\t\t\t};\n\t\t\t$.ajax(call);\n\t\t},\n\t\tpullSamplesSuggestions: function() {\n\t\t\tvar that = this;\n\t\t\tvar model = this.getView().getModel(\"data\");\n\t\t\tvar URL = \"/SimpleFarm/services/XSJS/operationShedReport.xsjs?METHOD=getSamplesByTypes&typeID=51\";\n\t\t\tvar call = {\n\t\t\t\turl: URL,\n\t\t\t\tmethod: 'GET',\n\t\t\t\tdataType: 'json',\n\t\t\t\tsuccess: function(res) {\n\t\t\t\t\tif (res.meta.statuscode !== 200) {\n\t\t\t\t\t\tUtilities.messageDialogCreator(\"Error\", \"Error \" + res.meta.statuscode + \": Error en la llamada al servicio\");\n\t\t\t\t\t} else {\n\t\t\t\t\t\tmodel.setProperty(\"/samples\", res.results);\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\terror: function(res) {\n\t\t\t\t\tUtilities.messageDialogCreator(\"Error\", \"Error \" + res.meta.statuscode + \": Error en la llamada al servicio\");\n\t\t\t\t}\n\t\t\t};\n\t\t\t$.ajax(call);\n\t\t},\n\t\tonSuggest: function(event) {\n\t\t\tvar typeField = event.getSource();\n\t\t\tvar sTerm = event.getParameter(\"suggestValue\");\n\t\t\tvar aFilters = [];\n\t\t\tif (sTerm) {\n\t\t\t\taFilters.push(new Filter(\"NAME\", sap.ui.model.FilterOperator.StartsWith, sTerm));\n\t\t\t}\n\t\t\ttypeField.getBinding(\"suggestionItems\").filter(aFilters);\n\t\t\ttypeField.suggest();\n\t\t},\n\t\ticonTabBarSelect: function(oEvent) {\n\t\t\tvar model = this.getView().getModel(\"data\");\n\t\t\tvar key = oEvent.getParameters().key.split(\"--\", 2)[1];\n\t\t\tswitch (key) {\n\t\t\t\tcase \"environmentTab\":\n\t\t\t\t\t//If empty\n\t\t\t\t\tif (model.getProperty(\"/environment\") == \"\")\n\t\t\t\t\t\tthis.pullEnvironmentSuggestions();\n\t\t\t\t\tbreak;\n\t\t\t\tcase \"broilersTab\":\n\t\t\t\t\tif (model.getProperty(\"/broilers\") == \"\")\n\t\t\t\t\t\tthis.pullBroilersSuggestions();\n\t\t\t\t\tbreak;\n\t\t\t\tcase \"samplesTab\":\n\t\t\t\t\tif (model.getProperty(\"/samples\") == \"\")\n\t\t\t\t\t\tthis.pullSamplesSuggestions();\n\t\t\t\t\tbreak;\n\t\t\t}\n\t\t},\n\t\taddListEnvironmentElement: function() {\n\t\t\tvar view = this.getView();\n\t\t\tvar input = view.byId(\"environmentInput\");\n\t\t\tvar suggest = view.byId(\"environmentField\");\n\t\t\tvar model = view.getModel(\"conditions\");\n\t\t\tvar array = model.getProperty(\"/environmentReport\");\n\t\t\tvar element = {\n\t\t\t\t\"VALUE\": input.getValue(),\n\t\t\t\t\"NAME\": suggest.getValue()\n\t\t\t};\n\t\t\tif (input.getValue() != \"\" && suggest.getValue() != \"\") {\n\t\t\t\tarray.push(element);\n\t\t\t\tmodel.setProperty(\"/environmentReport\", array);\n\t\t\t\tinput.setValue(\"\");\n\t\t\t\tsuggest.setValue(\"\");\n\t\t\t}\n\t\t},\n\t\tdeleteEnvironment: function(oEvent) {\n\t\t\tvar model = this.getView().getModel(\"conditions\");\n\t\t\tvar oList = oEvent.getSource(),\n\t\t\t\toItem = oEvent.getParameter(\"listItem\"),\n\t\t\t\tsPath = oItem.getBindingContext(\"conditions\").getPath();\n\t\t\tvar array = model.getProperty(\"/environmentReport\");\n\n\t\t\tvar dialog = new Dialog({\n\t\t\t\ttitle: 'Eliminar',\n\t\t\t\ttype: 'Message',\n\t\t\t\tcontent: new Text({\n\t\t\t\t\ttext: 'Seguro que desea eliminar el elemento del reporte?'\n\t\t\t\t}),\n\t\t\t\tbeginButton: new Button({\n\t\t\t\t\ttext: 'Aceptar',\n\t\t\t\t\tpress: function() {\n\t\t\t\t\t\tsPath = sPath.split(\"/\")[2]; //Get Index Selected\n\t\t\t\t\t\tarray.splice(parseInt(sPath), 1); //Deleting the selected element from model\n\t\t\t\t\t\tmodel.setProperty(\"/environmentReport\", array);\n\t\t\t\t\t\tdialog.close();\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\tendButton: new Button({\n\t\t\t\t\ttext: 'Cancelar',\n\t\t\t\t\tpress: function() {\n\t\t\t\t\t\tdialog.close();\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\tafterClose: function() {\n\t\t\t\t\tdialog.destroy();\n\t\t\t\t}\n\t\t\t});\n\t\t\tdialog.open();\n\n\t\t},\n\t\taddListBroilerElement: function() {\n\t\t\tvar view = this.getView();\n\t\t\tvar input = view.byId(\"broilerInput\");\n\t\t\tvar suggest = view.byId(\"broilerField\");\n\t\t\tvar model = view.getModel(\"conditions\");\n\t\t\tvar array = model.getProperty(\"/broilerReport\");\n\t\t\tvar element = {\n\t\t\t\t\"VALUE\": input.getValue(),\n\t\t\t\t\"NAME\": suggest.getValue()\n\t\t\t};\n\t\t\tif (input.getValue() != \"\" && suggest.getValue() != \"\") {\n\t\t\t\tarray.push(element);\n\t\t\t\tmodel.setProperty(\"/broilerReport\", array);\n\t\t\t\tinput.setValue(\"\");\n\t\t\t\tsuggest.setValue(\"\");\n\t\t\t}\n\t\t},\n\t\tdeleteBroiler: function(oEvent) {\n\t\t\tvar model = this.getView().getModel(\"conditions\");\n\t\t\tvar oList = oEvent.getSource(),\n\t\t\t\toItem = oEvent.getParameter(\"listItem\"),\n\t\t\t\tsPath = oItem.getBindingContext(\"conditions\").getPath();\n\t\t\tvar array = model.getProperty(\"/broilerReport\");\n\n\t\t\tvar dialog = new Dialog({\n\t\t\t\ttitle: 'Eliminar',\n\t\t\t\ttype: 'Message',\n\t\t\t\tcontent: new Text({\n\t\t\t\t\ttext: 'Seguro que desea eliminar el elemento del reporte?'\n\t\t\t\t}),\n\t\t\t\tbeginButton: new Button({\n\t\t\t\t\ttext: 'Aceptar',\n\t\t\t\t\tpress: function() {\n\t\t\t\t\t\tsPath = sPath.split(\"/\")[2]; //Get Index Selected\n\t\t\t\t\t\tarray.splice(parseInt(sPath), 1); //Deleting the selected element from model\n\t\t\t\t\t\tmodel.setProperty(\"/broilerReport\", array);\n\t\t\t\t\t\tdialog.close();\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\tendButton: new Button({\n\t\t\t\t\ttext: 'Cancelar',\n\t\t\t\t\tpress: function() {\n\t\t\t\t\t\tdialog.close();\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\tafterClose: function() {\n\t\t\t\t\tdialog.destroy();\n\t\t\t\t}\n\t\t\t});\n\t\t\tdialog.open();\n\n\t\t},\n\n\t\taddListSampleElement: function() {\n\t\t\tvar view = this.getView();\n\t\t\tvar type = view.byId(\"sampleType\");\n\t\t\tvar origin = view.byId(\"sampleOrigin\");\n\t\t\tvar quantity = view.byId(\"sampleQuantity\");\n\t\t\tvar note = view.byId(\"sampleNote\").getValue();\n\n\t\t\tvar model = view.getModel(\"conditions\");\n\t\t\tvar array = model.getProperty(\"/samplesReport\");\n\t\t\tif (note == \"\") //Assigning space to note\n\t\t\t{\n\t\t\t\tnote = \" \";\n\t\t\t}\n\t\t\tvar element = {\n\t\t\t\t\"ORIGIN\": origin.getValue(),\n\t\t\t\t\"TYPE\": type.getValue(),\n\t\t\t\t\"QUANTITY\": quantity.getValue(),\n\t\t\t\t\"NOTE\": note\n\t\t\t};\n\t\t\tif (origin.getValue() != \"\" && type.getValue() != \"\" && quantity.getValue() > 0) {\n\t\t\t\tarray.push(element);\n\t\t\t\tmodel.setProperty(\"/samplesReport\", array);\n\t\t\t\torigin.setValue(\"\");\n\t\t\t\ttype.setValue(\"\");\n\t\t\t\tnote.setValue(\"\");\n\t\t\t\tquantity.setValue(\"\");\n\t\t\t}\n\t\t},\n\t\tdeleteSample: function(oEvent) {\n\t\t\tvar model = this.getView().getModel(\"conditions\");\n\t\t\tvar oList = oEvent.getSource(),\n\t\t\t\toItem = oEvent.getParameter(\"listItem\"),\n\t\t\t\tsPath = oItem.getBindingContext(\"conditions\").getPath();\n\t\t\tvar array = model.getProperty(\"/samplesReport\");\n\n\t\t\tvar dialog = new Dialog({\n\t\t\t\ttitle: 'Eliminar',\n\t\t\t\ttype: 'Message',\n\t\t\t\tcontent: new Text({\n\t\t\t\t\ttext: 'Seguro que desea eliminar el elemento del reporte?'\n\t\t\t\t}),\n\t\t\t\tbeginButton: new Button({\n\t\t\t\t\ttext: 'Aceptar',\n\t\t\t\t\tpress: function() {\n\t\t\t\t\t\tsPath = sPath.split(\"/\")[2]; //Get Index Selected\n\t\t\t\t\t\tarray.splice(parseInt(sPath), 1); //Deleting the selected element from model\n\t\t\t\t\t\tmodel.setProperty(\"/samplesReport\", array);\n\t\t\t\t\t\tdialog.close();\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\tendButton: new Button({\n\t\t\t\t\ttext: 'Cancelar',\n\t\t\t\t\tpress: function() {\n\t\t\t\t\t\tdialog.close();\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\tafterClose: function() {\n\t\t\t\t\tdialog.destroy();\n\t\t\t\t}\n\t\t\t});\n\t\t\tdialog.open();\n\n\t\t},\n\t\tonReportDialog: function() {\n\t\t\tvar that = this;\n\t\t\tvar dialog = new Dialog({\n\t\t\t\ttitle: 'Reject',\n\t\t\t\ttype: 'Message',\n\t\t\t\tcontent: [\n\t\t\t\t\tnew Label({\n\t\t\t\t\t\ttext: 'Desea reportar el estado del galpón seleccionado?',\n\t\t\t\t\t\tlabelFor: 'DialogTextarea'\n\t\t\t\t\t}),\n\t\t\t\t\tnew TextArea('DialogTextarea', {\n\t\t\t\t\t\twidth: '100%',\n\t\t\t\t\t\tplaceholder: 'Añadir una nota del galpón(opcional)'\n\t\t\t\t\t})\n\t\t\t\t],\n\t\t\t\tbeginButton: new Button({\n\t\t\t\t\ttext: 'Confirmar',\n\t\t\t\t\tpress: function() {\n\t\t\t\t\t\tMessageToast.show('Reporte enviado correctamente');\n\t\t\t\t\t\tdialog.close();\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\tendButton: new Button({\n\t\t\t\t\ttext: 'Cancelar',\n\t\t\t\t\tpress: function() {\n\t\t\t\t\t\tdialog.close();\n\t\t\t\t\t}\n\t\t\t\t}),\n\t\t\t\tafterClose: function() {\n\t\t\t\t\tdialog.destroy();\n\t\t\t\t\tthat.goSheds(); \n\t\t\t\t}\n\t\t\t});\n\t\t\tdialog.open();\n\t\t}\n\n\t});\n});",
		"ShedStatusReport/controller/Utilities.js": "sap.ui.define([\r\n\t\"sap/m/Dialog\",\r\n\t'sap/m/Button'\r\n], function(Dialog, Button) {\r\n\t\"use strict\";\r\n\r\n\tvar Utilities = {\r\n\t\tmessageDialogCreator: function(dtitle, dmessage) {\r\n\t\t\tvar dialog = new Dialog({\r\n\t\t\t\ttitle: dtitle,\r\n\t\t\t\ttype: 'Message',\r\n\t\t\t\tcontent: new Text({\r\n\t\t\t\t\ttext: dmessage\r\n\t\t\t\t}),\r\n\t\t\t\tbeginButton: new Button({\r\n\t\t\t\t\ttext: 'Aceptar',\r\n\t\t\t\t\tpress: function() {\r\n\r\n\t\t\t\t\t\tdialog.close();\r\n\t\t\t\t\t}\r\n\t\t\t\t}),\r\n\t\t\t\tafterClose: function() {\r\n\t\t\t\t\tdialog.destroy();\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t\tdialog.open();\r\n\t\t}\r\n\t};\r\n\r\n\treturn Utilities;\r\n}, /* bExport= */ true);"
	}
});