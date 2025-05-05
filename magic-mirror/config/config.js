/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",   // Address to listen on, can be:
													// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
													// - another specific IPv4/6 to listen on a specific interface
													// - "0.0.0.0", "::" to listen on any interface
													// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",  // The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
																	// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],  // Set [] to allow all IP addresses
																	// or add a specific IPv4 of 192.168.1.5 :
																	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
																	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
																	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,                        // Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",    // HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",   // HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",   // this variable is provided as a consistent location
					   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
					   // as we have no usage, we  have no constraints on what this field holds
					   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",

	modules: [
			{
					module: "clock",
					position: "top_left"
			},
			{
					module: "calendar",
					header: "Upcoming Events",
					position: "top_left",
					config: {
							calendars: [
									{
											fetchInterval: 15 * 60 * 1000,
											symbol: "calendar-check",
											url: "https://calendar.google.com/calendar/ical/4c11d26815dba31ae86674557d6d353f2421e930d68e1f02716aaa287a110a27%40group.calendar.google.com/private-c6b96d7ee57a83afd9326b5763f0b87d/basic.ics"
									},
									// {
									//      url: 'https://calendar.google.com/calendar/ical/en.usa%23holiday%40group.v.calendar.google.com/public/basic.ics',
									//      symbol: 'gift',
									// }
							]
					}
			},
			{
					module: "weather",
					position: "top_right",
					config: {
							weatherProvider: "openmeteo",
							type: "current",
							lat: 41.9350233,
							lon: -87.6640059
					}
			},
			{
					module: "weather",
					position: "top_right",
					header: "Weather Forecast",
					config: {
							weatherProvider: "openmeteo",
							type: "forecast",
							maxNumberOfDays: 10,
							lat: 41.9350233,
							lon: -87.6640059
					}
			}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }