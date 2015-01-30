class CreateReservationsUsers < ActiveRecord::Migration
  def change
    create_table :reservations_users do |t|
      t.integer :reservation_id
      t.integer :user_id

      t.timestamps
    end
  end
end
