defmodule RatedBeer.SearchController do
  use RatedBeer.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
