defmodule RatedBeer.UserSocket do
  use Phoenix.Socket

  channel "ratedbeer:*", RatedBeer.SearchChannel

  transport :longpoll, Phoenix.Transports.LongPoll
  transport :websocket, Phoenix.Transports.WebSocket,
    origins: ["http://ratedbeer.com", "https://ratedbeer.com"]

  def connect(_params, socket) do
    {:ok, socket}
  end

  def id(_socket), do: nil
end
