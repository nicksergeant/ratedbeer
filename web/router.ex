defmodule RatedBeer.Router do
  use RatedBeer.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", RatedBeer do
    pipe_through :browser

    get "/", PageController, :index
  end

  scope "/api", RatedBeer do
    pipe_through :api

    get "/search", SearchController, :search
  end
end
