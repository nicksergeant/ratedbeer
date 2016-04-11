use Mix.Config

config :ratedbeer, RatedBeer.Endpoint,
  http: [port: {:system, "PORT"}],
  url: [host: System.get_env("HOSTNAME"), port: 80],
  cache_static_manifest: "priv/static/manifest.json"

config :logger, level: :info

config :ratedbeer, RatedBeer.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: System.get_env("PSQL_USERNAME") || "postgres",
  password: System.get_env("PSQL_PASSWORD") || "postgres",
  database: System.get_env("PSQL_DB") || "ratedbeer",
  hostname: System.get_env("PSQL_HOST") || "localhost",
  pool_size: 20
