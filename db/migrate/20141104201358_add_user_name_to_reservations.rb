class AddUserNameToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :user_name, :string
  end
end
