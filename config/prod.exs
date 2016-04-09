use Mix.Config

config :ratedbeer, RatedBeer.Endpoint,
  http: [port: {:system, "PORT"}],
  url: [host: "example.com", port: 80],
  cache_static_manifest: "priv/static/manifest.json"

config :logger, level: :info

# ## SSL Support
#
# To get SSL working, you will need to add the `https` key
# to the previous section and set your `:url` port to 443:
#
#     config :ratedbeer, RatedBeer.Endpoint,
#       ...
#       url: [host: "example.com", port: 443],
#       https: [port: 443,
#               keyfile: System.get_env("SOME_APP_SSL_KEY_PATH"),
#               certfile: System.get_env("SOME_APP_SSL_CERT_PATH")]
#
# Where those two env variables return an absolute path to
# the key and cert in disk or a relative path inside priv,
# for example "priv/ssl/server.key".
#
# We also recommend setting `force_ssl`, ensuring no data is
# ever sent via http, always redirecting to https:
#
#     config :ratedbeer, RatedBeer.Endpoint,
#       force_ssl: [hsts: true]
#
# Check `Plug.SSL` for all available options in `force_ssl`.

# ## Using releases
#
# If you are doing OTP releases, you need to instruct Phoenix
# to start the server for all endpoints:
#
#     config :phoenix, :serve_endpoints, true
#
# Alternatively, you can configure exactly which server to
# start per endpoint:
#
#     config :ratedbeer, RatedBeer.Endpoint, server: true
#

config :ratedbeer, RatedBeer.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: System.get_env("PSQL_USERNAME") || "postgres",
  password: System.get_env("PSQL_PASSWORD") || "postgres",
  database: System.get_env("PSQL_DB") || "ratedbeer",
  hostname: System.get_env("PSQL_HOST") || "localhost",
  pool_size: 20
