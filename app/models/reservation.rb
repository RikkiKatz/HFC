class Reservation < ActiveRecord::Base

	attr_accessible :user_id, :user_name, :start_time, :end_time, :project, :which_room

	scope :created_on, lambda {|date| {:conditions => ['created_at >= ? AND created_at <= ?', date.beginning_of_day, date.end_of_day]}}

	def self.today
   	self.created_on(Date.today)
	end

	belongs_to :user

	has_many :reservations_users
	has_many :users, :through=>:reservations_users
end
