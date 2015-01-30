class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
	devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

   # Setup accessible (or protected) attributes for your model
	attr_accessible :name, :email, :password, :remember_me
	
	has_many :created_reservations, :class_name=>'Reservation', :foreign_key=>:user_id, :dependent => :destroy

	has_many :reservations_users
	has_many :reservations, :through=>:reservations_users

end

