defmodule RatedBeer.SearchChannel do
  use Phoenix.Channel
  require Logger

  def join("ratedbeer:search", _, socket) do
    Process.flag(:trap_exit, true)
    :timer.send_interval(5000, :ping)

    {:ok, socket}
  end

  def handle_in("search:query", msg, socket) do
    {:reply, {:ok, %{results: "results"}}, assign(socket, :user, msg["user"])}
  end

  def terminate(reason, _socket) do
    Logger.debug"> leave #{inspect reason}"
    :ok
  end
end
