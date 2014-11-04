class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.string :user_name
      t.string :project
      t.time :start_time
      t.time :end_time
      t.integer :which_room

      t.timestamps
    end
  end
end
