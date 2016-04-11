defmodule RatedBeer.UserSocket do
  use Phoenix.Socket

  channel "ratedbeer:*", RatedBeer.SearchChannel

  transport :longpoll, Phoenix.Transports.LongPoll
  transport :websocket, Phoenix.Transports.WebSocket,
    origins: ["//localhost", "http://ratedbeer.com", "https://ratedbeer.com", "//172.17.0.15:5000"]

  def connect(_params, socket) do
    {:ok, socket}
  end

  def id(_socket), do: nil
end
