json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :user_id, :project, :start_time, :end_time, :which_room
  json.url reservation_url(reservation, format: :json)
end
