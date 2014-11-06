class Reservation < ActiveRecord::Base

	attr_accessible :user_id, :user_name, :start_time, :end_time, :project, :which_room

end
