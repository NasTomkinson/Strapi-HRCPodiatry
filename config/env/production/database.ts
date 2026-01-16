export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'hrc-strapi'),
			user: env('DATABASE_USERNAME', 'hrc'),
			password: env('DATABASE_PASSWORD', '$N99a1304NTX'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
