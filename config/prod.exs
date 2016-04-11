use Mix.Config

config :ratedbeer, RatedBeer.Endpoint,
  http: [port: {:system, "PORT"}],
  https: [port: 443,
          keyfile: System.get_env("SSL_KEY_PATH"),
          certfile: System.get_env("SSL_CERT_PATH")],
  cache_static_manifest: "priv/static/manifest.json"

config :logger,
  url: [host: System.get_env("HOSTNAME"), port: 443], level: :info

config :ratedbeer, RatedBeer.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: System.get_env("PSQL_USERNAME") || "postgres",
  password: System.get_env("PSQL_PASSWORD") || "postgres",
  database: System.get_env("PSQL_DB") || "ratedbeer",
  hostname: System.get_env("PSQL_HOST") || "localhost",
  pool_size: 20
