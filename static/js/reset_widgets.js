let widgetsInfo = [
	{
		name: "location",
		action: "off",
		required: [1, 2, 3, 4]
	},
	{
		name: "due",
		action: "on"
	},
	{
		name: "plan",
		action: "off",
		required: [1, 2, 3, 4, 5]
	},
	{
		name: "additional",
		action: "off",
		required: [1, 2, 3, 4, 5, 6]
	},
];


function resetWidgets() {
	widgetsInfo.forEach(widgetInfo => {
		if (widgetInfo.action == "on") {
			console.log(`.widget.${widgetInfo.name} .widget__body label input.${widgetInfo.name}1`);
			let input = document.querySelector(`.widget.${widgetInfo.name} .widget__body label input.${widgetInfo.name}1`);
			input.checked = true;
		} else if (widgetInfo.action == "off") {
			widgetInfo.required.forEach(inputNum => {
				let input = document.querySelector(`.widget.${widgetInfo.name} .widget__body label input.${widgetInfo.name}${inputNum}`);
				console.log(`.widget.${widgetInfo.name} .widget__body label input.${widgetInfo.name}${inputNum}`);
				input.checked = false;
			});
		};
	});
};