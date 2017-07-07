sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/Filter',
	"sap/m/Dialog",
	'sap/m/Button',
	'sap/m/Text',
	'./Utilities',
	'sap/m/Label',
	'sap/m/TextArea',
	'sap/m/MessageToast'
], function(Controller, Filter, Dialog, Button, Text, Utilities, Label, TextArea, MessageToast) {
	"use strict";

	return Controller.extend("ShedStatusReport.controller.Main", {
		goSheds: function() {
			var router = sap.ui.core.UIComponent.getRouterFor(this);
			router.navTo("sheds", {}, true /*no history*/ );
		},
		onInit: function() {
			// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			this.getOwnerComponent().getRouter(this).getRoute("main").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function() {
			var model = this.getView().getModel("data");
			try {
				if (model.getProperty("/sheds") == null) {
					this.goSheds();
				} else {
					if (model.getProperty("/environment") == "") {
						this.pullEnvironmentSuggestions();
						this.pullBroilersSuggestions();
						this.pullSamplesSuggestions();
					}
				}
			} catch (error) {
				this.goSheds();
			}

		},
		pullEnvironmentSuggestions: function() {
			var that = this;
			var model = this.getView().getModel("data");
			var URL = "/SimpleFarm/services/XSJS/operationShedReport.xsjs?METHOD=getSamplesByTypes&typeID=49";
			var call = {
				url: URL,
				method: 'GET',
				dataType: 'json',
				success: function(res) {
					if (res.meta.statuscode !== 200) {
						Utilities.messageDialogCreator("Error", "Error " + res.meta.statuscode + ": Error en la llamada al servicio");
					} else {
						model.setProperty("/environment", res.results);
					}
				},
				error: function(res) {
					Utilities.messageDialogCreator("Error", "Error " + res.meta.statuscode + ": Error en la llamada al servicio");
				}
			};
			$.ajax(call);
		},
		pullBroilersSuggestions: function() {
			var that = this;
			var model = this.getView().getModel("data");
			var URL = "/SimpleFarm/services/XSJS/operationShedReport.xsjs?METHOD=getSamplesByTypes&typeID=50";
			var call = {
				url: URL,
				method: 'GET',
				dataType: 'json',
				success: function(res) {
					if (res.meta.statuscode !== 200) {
						Utilities.messageDialogCreator("Error", "Error " + res.meta.statuscode + ": Error en la llamada al servicio");
					} else {
						model.setProperty("/broilers", res.results);
					}
				},
				error: function(res) {
					Utilities.messageDialogCreator("Error", "Error " + res.meta.statuscode + ": Error en la llamada al servicio");
				}
			};
			$.ajax(call);
		},
		pullSamplesSuggestions: function() {
			var that = this;
			var model = this.getView().getModel("data");
			var URL = "/SimpleFarm/services/XSJS/operationShedReport.xsjs?METHOD=getSamplesByTypes&typeID=51";
			var call = {
				url: URL,
				method: 'GET',
				dataType: 'json',
				success: function(res) {
					if (res.meta.statuscode !== 200) {
						Utilities.messageDialogCreator("Error", "Error " + res.meta.statuscode + ": Error en la llamada al servicio");
					} else {
						model.setProperty("/samples", res.results);
					}
				},
				error: function(res) {
					Utilities.messageDialogCreator("Error", "Error " + res.meta.statuscode + ": Error en la llamada al servicio");
				}
			};
			$.ajax(call);
		},
		onSuggest: function(event) {
			var typeField = event.getSource();
			var sTerm = event.getParameter("suggestValue");
			var aFilters = [];
			if (sTerm) {
				aFilters.push(new Filter("NAME", sap.ui.model.FilterOperator.StartsWith, sTerm));
			}
			typeField.getBinding("suggestionItems").filter(aFilters);
			typeField.suggest();
		},
		iconTabBarSelect: function(oEvent) {
			var model = this.getView().getModel("data");
			var key = oEvent.getParameters().key.split("--", 2)[1];
			switch (key) {
				case "environmentTab":
					//If empty
					if (model.getProperty("/environment") == "")
						this.pullEnvironmentSuggestions();
					break;
				case "broilersTab":
					if (model.getProperty("/broilers") == "")
						this.pullBroilersSuggestions();
					break;
				case "samplesTab":
					if (model.getProperty("/samples") == "")
						this.pullSamplesSuggestions();
					break;
			}
		},
		addListEnvironmentElement: function() {
			var view = this.getView();
			var input = view.byId("environmentInput");
			var suggest = view.byId("environmentField");
			var model = view.getModel("conditions");
			var array = model.getProperty("/environmentReport");
			var element = {
				"VALUE": input.getValue(),
				"NAME": suggest.getValue()
			};
			if (input.getValue() != "" && suggest.getValue() != "") {
				array.push(element);
				model.setProperty("/environmentReport", array);
				input.setValue("");
				suggest.setValue("");
			}
		},
		deleteEnvironment: function(oEvent) {
			var model = this.getView().getModel("conditions");
			var oList = oEvent.getSource(),
				oItem = oEvent.getParameter("listItem"),
				sPath = oItem.getBindingContext("conditions").getPath();
			var array = model.getProperty("/environmentReport");

			var dialog = new Dialog({
				title: 'Eliminar',
				type: 'Message',
				content: new Text({
					text: 'Seguro que desea eliminar el elemento del reporte?'
				}),
				beginButton: new Button({
					text: 'Aceptar',
					press: function() {
						sPath = sPath.split("/")[2]; //Get Index Selected
						array.splice(parseInt(sPath), 1); //Deleting the selected element from model
						model.setProperty("/environmentReport", array);
						dialog.close();
					}
				}),
				endButton: new Button({
					text: 'Cancelar',
					press: function() {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});
			dialog.open();

		},
		addListBroilerElement: function() {
			var view = this.getView();
			var input = view.byId("broilerInput");
			var suggest = view.byId("broilerField");
			var model = view.getModel("conditions");
			var array = model.getProperty("/broilerReport");
			var element = {
				"VALUE": input.getValue(),
				"NAME": suggest.getValue()
			};
			if (input.getValue() != "" && suggest.getValue() != "") {
				array.push(element);
				model.setProperty("/broilerReport", array);
				input.setValue("");
				suggest.setValue("");
			}
		},
		deleteBroiler: function(oEvent) {
			var model = this.getView().getModel("conditions");
			var oList = oEvent.getSource(),
				oItem = oEvent.getParameter("listItem"),
				sPath = oItem.getBindingContext("conditions").getPath();
			var array = model.getProperty("/broilerReport");

			var dialog = new Dialog({
				title: 'Eliminar',
				type: 'Message',
				content: new Text({
					text: 'Seguro que desea eliminar el elemento del reporte?'
				}),
				beginButton: new Button({
					text: 'Aceptar',
					press: function() {
						sPath = sPath.split("/")[2]; //Get Index Selected
						array.splice(parseInt(sPath), 1); //Deleting the selected element from model
						model.setProperty("/broilerReport", array);
						dialog.close();
					}
				}),
				endButton: new Button({
					text: 'Cancelar',
					press: function() {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});
			dialog.open();

		},

		addListSampleElement: function() {
			var view = this.getView();
			var type = view.byId("sampleType");
			var origin = view.byId("sampleOrigin");
			var quantity = view.byId("sampleQuantity");
			var note = view.byId("sampleNote").getValue();

			var model = view.getModel("conditions");
			var array = model.getProperty("/samplesReport");
			if (note == "") //Assigning space to note
			{
				note = " ";
			}
			var element = {
				"ORIGIN": origin.getValue(),
				"TYPE": type.getValue(),
				"QUANTITY": quantity.getValue(),
				"NOTE": note
			};
			if (origin.getValue() != "" && type.getValue() != "" && quantity.getValue() > 0) {
				array.push(element);
				model.setProperty("/samplesReport", array);
				origin.setValue("");
				type.setValue("");
				note.setValue("");
				quantity.setValue("");
			}
		},
		deleteSample: function(oEvent) {
			var model = this.getView().getModel("conditions");
			var oList = oEvent.getSource(),
				oItem = oEvent.getParameter("listItem"),
				sPath = oItem.getBindingContext("conditions").getPath();
			var array = model.getProperty("/samplesReport");

			var dialog = new Dialog({
				title: 'Eliminar',
				type: 'Message',
				content: new Text({
					text: 'Seguro que desea eliminar el elemento del reporte?'
				}),
				beginButton: new Button({
					text: 'Aceptar',
					press: function() {
						sPath = sPath.split("/")[2]; //Get Index Selected
						array.splice(parseInt(sPath), 1); //Deleting the selected element from model
						model.setProperty("/samplesReport", array);
						dialog.close();
					}
				}),
				endButton: new Button({
					text: 'Cancelar',
					press: function() {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
				}
			});
			dialog.open();

		},
		onReportDialog: function() {
			var that = this;
			var dialog = new Dialog({
				title: 'Reject',
				type: 'Message',
				content: [
					new Label({
						text: 'Desea reportar el estado del galpón seleccionado?',
						labelFor: 'DialogTextarea'
					}),
					new TextArea('DialogTextarea', {
						width: '100%',
						placeholder: 'Añadir una nota del galpón(opcional)'
					})
				],
				beginButton: new Button({
					text: 'Confirmar',
					press: function() {
						MessageToast.show('Reporte enviado correctamente');
						dialog.close();
					}
				}),
				endButton: new Button({
					text: 'Cancelar',
					press: function() {
						dialog.close();
					}
				}),
				afterClose: function() {
					dialog.destroy();
					that.goSheds(); 
				}
			});
			dialog.open();
		}

	});
});