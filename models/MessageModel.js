module.exports = {
	fields:{
		id: {
			type: "uuid",
			default: {"$db_function": "uuid()"}
		},
		_id: "double",
		thread_id:"double",
		address: "text",
		date: "timestamp",
		date_sent: "int",
		read: "int",
		type: "double",
		body: "text",
		locked: "int",
		sub_id: "double",
		error_code: "int",
		creator: "text",
		seen: "int",
		isMobile: "boolean",
		platform: "text",
		version: "text",
		device_brand: "text",
		device_unique_id: "text",
		device_id: "text",
		device_country: "text",
		device_locale: "text",
		device_emulator: "boolean",
		created: {
			type: "timestamp",
			default: {"$db_function": "toTimestamp(now())"}
		}
	},
	key : [["id"],"created"],
}