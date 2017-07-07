sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Dialog",
	'sap/m/Button'
], function(Controller, Dialog, Button) {
	"use strict";

	return Controller.extend("ShedStatusReport.controller.ShedSelection", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ShedStatusReport.view.view.ShedSelection
		 */

		onInit: function() {
			// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			this.getOwnerComponent().getRouter(this).getRoute("sheds").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function() {
			var that = this;
			var model = that.getView().getModel("data");
			//data.attachRequestCompleted(function() {
			try {
				//Operations
				//	var URL = "/SimpleFarm/services/XSJS/operationConfig.xsjs?sNumber=S0015731082&METHOD=getUserConfig";
				var URL = "/SimpleFarm/services/XSJS/operationPlanning.xsjs?clientID=2&partnerID=17&METHOD=getFarms";
				var call = {
					url: URL,
					method: 'GET',
					dataType: 'json',
					success: function(res) {
						console.log(res);
						if (res.beanError.statuscode !== 200) {

						} else {
							model.setProperty("/sheds", res.results[0].centers[0].sheds);
						}
					},
					error: function(res) {

					}
				};
				$.ajax(call);
			} catch (error) {
				console.log(error);
			}
			//		});
		},
		handlePress: function(oEvent) {
				//var route = oEvent.getSource().oBindingContexts.tiles.sPath.split("/galpones/",2);
				var view = this.getView();
				var data = view.getModel("data");
				var router = sap.ui.core.UIComponent.getRouterFor(this);
				var object = oEvent.getSource().getBindingContext("data").getObject();

				//If another farm is selected there is the need to erase any changes saved previously in other operations

				data.setProperty("/shedSelected/", object);
				data.setProperty("/shedSelected/DENSITY/", parseInt(data.getProperty("/shedSelected/STALLLONGITUDE")) *
					parseInt(data.getProperty("/shedSelected/STALLWIDTH")) * (17)); // Densidad Inicial Cableada
				router.navTo("main", /*objeto de parámetros*/ {}, false /*create history*/ );
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf ShedStatusReport.view.view.ShedSelection
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ShedStatusReport.view.view.ShedSelection
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ShedStatusReport.view.view.ShedSelection
		 */
		//	onExit: function() {
		//
		//	}

	});

});