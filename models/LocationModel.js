module.exports = {
	fields:{
		id: {
			type: "uuid",
			default: {"$db_function": "uuid()"}
		},
		accuracy:"double",
		altitude:"double",
		date: "timestamp",
		heading: "int",
		latitude:"double",
		longitude:"double",
		mocked: "boolean",
		speed:"int",
		isMobile: "boolean",
		platform: "text",
		version: "text",
		device_brand: "text",
		device_unique_id: "text",
		device_id: "text",
		device_country: "text",
		device_locale: "text",
		device_emulator: "boolean",

		full_address:"text",
		full_address_id:"text",

		administrative_area_level_4:"text",
		administrative_area_level_4_id:"text",

		administrative_area_level_3:"text",
		administrative_area_level_3_id:"text",

		administrative_area_level_2:"text",
		administrative_area_level_2_id:"text",

		administrative_area_level_1:"text",
		administrative_area_level_1_id:"text",

		street:'text',
		country:"text",
		country_id:"text",

		created: {
			type: "timestamp",
			default: {"$db_function": "toTimestamp(now())"}
		}
	},
	key : [["id"],"created"],
}